import React from "react";

const RustOwnership: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Ownership</h1>

    <p>
      Ownership is Rust's most unique feature and enables Rust to make memory safety guarantees without needing a garbage collector.
    </p>

    <h2 className="text-2xl font-bold mt-6">Ownership Rules</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Each value in Rust has a variable that's called its <b>owner</b></li>
      <li>There can only be <b>one owner</b> at a time</li>
      <li>When the owner goes out of scope, the value will be <b>dropped</b></li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Move Semantics</h2>
    <p>
      When you assign a value to another variable, the ownership is <b>moved</b>:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is moved to s2

    // println!("{}", s1);  // ERROR! s1 is no longer valid
    println!("{}", s2);     // This works
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Clone</h2>
    <p>
      If you want to deeply copy the data, use <code>clone()</code>:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();  // Deep copy

    println!("s1 = {}, s2 = {}", s1, s2);  // Both are valid
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Copy Types</h2>
    <p>
      Types that implement the <code>Copy</code> trait are copied rather than moved:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x = 5;
    let y = x;  // x is copied, not moved

    println!("x = {}, y = {}", x, y);  // Both are valid
}`}
    </pre>

    <p className="mt-3">
      Types that implement <code>Copy</code>:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-1">
      <li>All integer types (i32, u64, etc.)</li>
      <li>Boolean type (bool)</li>
      <li>Floating point types (f32, f64)</li>
      <li>Character type (char)</li>
      <li>Tuples containing only Copy types</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">References and Borrowing</h2>
    <p>
      Instead of transferring ownership, you can <b>borrow</b> a value using references:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // Borrow s1

    println!("The length of '{}' is {}", s1, len);  // s1 is still valid
}

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s goes out of scope but doesn't drop the value`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Mutable References</h2>
    <p>
      You can create mutable references to modify borrowed values:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s);  // prints: hello, world
}

fn change(s: &mut String) {
    s.push_str(", world");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Borrowing Rules</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>You can have <b>either</b> one mutable reference <b>or</b> any number of immutable references</li>
      <li>References must always be valid (no dangling references)</li>
    </ul>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut s = String::from("hello");

    let r1 = &s;     // OK - immutable borrow
    let r2 = &s;     // OK - another immutable borrow
    println!("{} and {}", r1, r2);

    let r3 = &mut s; // OK - mutable borrow (after r1, r2 are done)
    println!("{}", r3);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Slices</h2>
    <p>
      Slices let you reference a contiguous sequence of elements:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s = String::from("hello world");

    let hello = &s[0..5];   // "hello"
    let world = &s[6..11];  // "world"

    println!("{} {}", hello, world);

    // Array slices
    let a = [1, 2, 3, 4, 5];
    let slice = &a[1..3];  // [2, 3]
}`}
    </pre>
  </div>
);

export default RustOwnership;
