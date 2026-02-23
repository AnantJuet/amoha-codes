import React from "react";

const RustTraits: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Traits</h1>

    <h2 className="text-2xl font-bold mt-6">What are Traits?</h2>
    <p>
      Traits define shared behavior. They're similar to interfaces in other languages,
      allowing you to define functionality that types can implement.
    </p>

    <h2 className="text-2xl font-bold mt-6">Defining a Trait</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`trait Summary {
    fn summarize(&self) -> String;
}

// Trait with default implementation
trait Greet {
    fn greet(&self) -> String {
        String::from("Hello!")
    }

    fn greet_name(&self, name: &str) -> String {
        format!("Hello, {}!", name)
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Implementing Traits</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct NewsArticle {
    headline: String,
    author: String,
    content: String,
}

struct Tweet {
    username: String,
    content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {}", self.headline, self.author)
    }
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

fn main() {
    let article = NewsArticle {
        headline: String::from("Breaking News"),
        author: String::from("Jane"),
        content: String::from("..."),
    };

    let tweet = Tweet {
        username: String::from("@rustlang"),
        content: String::from("Rust is awesome!"),
    };

    println!("{}", article.summarize());
    println!("{}", tweet.summarize());
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Traits as Parameters</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Using impl Trait syntax
fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}

// Trait bound syntax (equivalent)
fn notify_bound<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}

// Multiple trait bounds
fn notify_multiple(item: &(impl Summary + Display)) {
    println!("{}", item.summarize());
}

// With where clause (cleaner for complex bounds)
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
    // ...
    0
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Returning Traits</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Return type that implements a trait
fn create_summarizable() -> impl Summary {
    Tweet {
        username: String::from("@rust"),
        content: String::from("Hello, world!"),
    }
}

// Note: Can only return one concrete type
// This won't compile:
// fn returns_summarizable(switch: bool) -> impl Summary {
//     if switch {
//         NewsArticle { ... }  // One type
//     } else {
//         Tweet { ... }        // Different type - ERROR!
//     }
// }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Trait Objects (Dynamic Dispatch)</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Use dyn for runtime polymorphism
fn print_summary(item: &dyn Summary) {
    println!("{}", item.summarize());
}

// Store different types in a collection
fn main() {
    let article = NewsArticle { /* ... */ };
    let tweet = Tweet { /* ... */ };

    let items: Vec<&dyn Summary> = vec![&article, &tweet];

    for item in items {
        println!("{}", item.summarize());
    }
}

// Box<dyn Trait> for owned trait objects
struct Screen {
    components: Vec<Box<dyn Draw>>,
}

impl Screen {
    fn run(&self) {
        for component in self.components.iter() {
            component.draw();
        }
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Derive Macro</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Automatically implement common traits
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p1 = Point { x: 1, y: 2 };
    let p2 = p1.clone();

    println!("{:?}", p1);        // Debug
    println!("{}", p1 == p2);    // PartialEq
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Standard Library Traits</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Trait</th>
          <th className="border border-gray-300 p-2">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">Debug</td><td className="border border-gray-300 p-2">Format with {"{:?}"}</td></tr>
        <tr><td className="border border-gray-300 p-2">Display</td><td className="border border-gray-300 p-2">Format with {"{}"}</td></tr>
        <tr><td className="border border-gray-300 p-2">Clone</td><td className="border border-gray-300 p-2">Explicit duplication</td></tr>
        <tr><td className="border border-gray-300 p-2">Copy</td><td className="border border-gray-300 p-2">Implicit copy on assignment</td></tr>
        <tr><td className="border border-gray-300 p-2">PartialEq/Eq</td><td className="border border-gray-300 p-2">Equality comparison</td></tr>
        <tr><td className="border border-gray-300 p-2">PartialOrd/Ord</td><td className="border border-gray-300 p-2">Ordering comparison</td></tr>
        <tr><td className="border border-gray-300 p-2">Default</td><td className="border border-gray-300 p-2">Default value</td></tr>
        <tr><td className="border border-gray-300 p-2">Iterator</td><td className="border border-gray-300 p-2">Iteration protocol</td></tr>
        <tr><td className="border border-gray-300 p-2">From/Into</td><td className="border border-gray-300 p-2">Type conversion</td></tr>
        <tr><td className="border border-gray-300 p-2">Drop</td><td className="border border-gray-300 p-2">Cleanup on destruction</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Implementing Standard Traits</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fmt;

struct Point {
    x: i32,
    y: i32,
}

// Implement Display for custom formatting
impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

// Implement Default
impl Default for Point {
    fn default() -> Self {
        Point { x: 0, y: 0 }
    }
}

// Implement From for conversion
impl From<(i32, i32)> for Point {
    fn from(tuple: (i32, i32)) -> Self {
        Point { x: tuple.0, y: tuple.1 }
    }
}

fn main() {
    let p = Point { x: 3, y: 4 };
    println!("{}", p);  // Uses Display

    let default_p = Point::default();
    let from_tuple: Point = (5, 6).into();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Supertraits</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fmt;

// OutlinePrint requires Display
trait OutlinePrint: fmt::Display {
    fn outline_print(&self) {
        let output = self.to_string();
        let len = output.len();
        println!("{}", "*".repeat(len + 4));
        println!("* {} *", output);
        println!("{}", "*".repeat(len + 4));
    }
}

struct Point { x: i32, y: i32 }

impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "({}, {})", self.x, self.y)
    }
}

impl OutlinePrint for Point {}

fn main() {
    let p = Point { x: 1, y: 3 };
    p.outline_print();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Associated Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`trait Container {
    type Item;  // Associated type

    fn add(&mut self, item: Self::Item);
    fn get(&self, index: usize) -> Option<&Self::Item>;
}

struct NumberContainer {
    items: Vec<i32>,
}

impl Container for NumberContainer {
    type Item = i32;  // Specify the type

    fn add(&mut self, item: i32) {
        self.items.push(item);
    }

    fn get(&self, index: usize) -> Option<&i32> {
        self.items.get(index)
    }
}`}
    </pre>
  </div>
);

export default RustTraits;
