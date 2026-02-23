import React from "react";

const RustLifetimes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Lifetimes</h1>

    <h2 className="text-2xl font-bold mt-6">What are Lifetimes?</h2>
    <p>
      Lifetimes are Rust's way of ensuring references are valid for as long as they're used.
      They prevent dangling references and are checked at compile time.
    </p>

    <h2 className="text-2xl font-bold mt-6">The Problem Lifetimes Solve</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// This won't compile - dangling reference
fn main() {
    let r;                // r declared here
    {
        let x = 5;        // x created here
        r = &x;           // r references x
    }                     // x goes out of scope (dropped)
    println!("{}", r);    // ERROR! r references invalid memory
}

// Rust prevents this with lifetime checking`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Lifetime Annotations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Lifetime annotation syntax: 'a (apostrophe + name)
// &i32        - a reference
// &'a i32     - a reference with explicit lifetime 'a
// &'a mut i32 - a mutable reference with lifetime 'a

// Function that returns the longer of two strings
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let string1 = String::from("long string");
    let string2 = String::from("xyz");

    let result = longest(&string1, &string2);
    println!("Longest: {}", result);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Understanding Lifetime Scope</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let string1 = String::from("long string");

    {
        let string2 = String::from("xyz");
        let result = longest(&string1, &string2);
        println!("Longest: {}", result);  // OK - both strings valid here
    }

    // This won't work:
    // let result;
    // {
    //     let string2 = String::from("xyz");
    //     result = longest(&string1, &string2);
    // }  // string2 dropped here
    // println!("{}", result);  // ERROR! result might reference string2
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Lifetime Elision Rules</h2>
    <p>
      Rust has rules that allow you to omit lifetime annotations in common patterns.
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Rule 1: Each reference parameter gets its own lifetime
fn first_word(s: &str) -> &str { ... }
// Equivalent to:
fn first_word<'a>(s: &'a str) -> &'a str { ... }

// Rule 2: If there's exactly one input lifetime, it's assigned to all outputs
fn add_prefix(s: &str) -> &str { ... }
// Equivalent to:
fn add_prefix<'a>(s: &'a str) -> &'a str { ... }

// Rule 3: If &self or &mut self, its lifetime is assigned to outputs
impl MyStruct {
    fn method(&self, s: &str) -> &str { ... }
    // Equivalent to:
    fn method<'a, 'b>(&'a self, s: &'b str) -> &'a str { ... }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Lifetimes in Structs</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Struct holding a reference needs lifetime annotation
struct Excerpt<'a> {
    part: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence = novel.split('.').next().unwrap();

    let excerpt = Excerpt {
        part: first_sentence,
    };

    println!("Excerpt: {}", excerpt.part);
}

// Methods on structs with lifetimes
impl<'a> Excerpt<'a> {
    fn level(&self) -> i32 {
        3  // Doesn't use references, no lifetime needed in signature
    }

    fn announce_and_return(&self, announcement: &str) -> &str {
        println!("Attention: {}", announcement);
        self.part  // Returns reference with lifetime 'a
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Lifetimes</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Different lifetimes for different references
fn longest_with_announcement<'a, 'b>(
    x: &'a str,
    y: &'a str,
    ann: &'b str,
) -> &'a str {
    println!("Announcement: {}", ann);
    if x.len() > y.len() { x } else { y }
}

// Lifetime bounds
fn longest_bounded<'a, 'b: 'a>(x: &'a str, y: &'b str) -> &'a str {
    // 'b: 'a means 'b lives at least as long as 'a
    if x.len() > y.len() { x } else { y }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The 'static Lifetime</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// 'static means the reference lives for the entire program
let s: &'static str = "I have a static lifetime.";

// String literals are always 'static
// They're stored in the binary

// Be careful with 'static in function signatures
fn dangerous_function() -> &'static str {
    // Only return actual static data
    "This is fine"

    // Don't do this:
    // let s = String::from("oops");
    // &s  // ERROR! s is dropped, not static
}

// 'static as a trait bound
fn print_static<T: Display + 'static>(t: T) {
    println!("{}", t);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generic Type Parameters, Traits, and Lifetimes Together</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fmt::Display;

fn longest_with_announcement<'a, T>(
    x: &'a str,
    y: &'a str,
    ann: T,
) -> &'a str
where
    T: Display,
{
    println!("Announcement! {}", ann);
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let s1 = String::from("abcd");
    let s2 = "xyz";

    let result = longest_with_announcement(
        s1.as_str(),
        s2,
        "Today is someone's birthday!",
    );
    println!("Longest: {}", result);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Patterns</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Pattern 1: Return owned data to avoid lifetime issues
fn create_greeting(name: &str) -> String {
    format!("Hello, {}!", name)  // Returns owned String
}

// Pattern 2: Clone to own the data
fn process(data: &str) -> String {
    data.to_string()  // Clone the data
}

// Pattern 3: Use Cow for flexibility
use std::borrow::Cow;

fn maybe_modify(s: &str, modify: bool) -> Cow<str> {
    if modify {
        Cow::Owned(s.to_uppercase())
    } else {
        Cow::Borrowed(s)
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Lifetimes ensure references are always valid</li>
      <li>The compiler often infers lifetimes (elision rules)</li>
      <li>Use lifetime annotations when the compiler can't infer</li>
      <li>Lifetimes are about relationships between references</li>
      <li>'static is for data that lives the entire program</li>
      <li>When in doubt, return owned data instead of references</li>
    </ul>
  </div>
);

export default RustLifetimes;
