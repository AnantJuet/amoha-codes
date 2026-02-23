import React from "react";

const RustStrings: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Strings</h1>

    <h2 className="text-2xl font-bold mt-6">String Types</h2>
    <p>Rust has two main string types:</p>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Type</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">&str</td><td className="border border-gray-300 p-2">String slice - immutable, fixed-size reference</td></tr>
        <tr><td className="border border-gray-300 p-2">String</td><td className="border border-gray-300 p-2">Owned, growable, heap-allocated UTF-8 string</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Creating Strings</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // String literals (&str)
    let s1: &str = "Hello, world!";

    // Creating String from literal
    let s2: String = String::from("Hello");
    let s3: String = "Hello".to_string();

    // Empty string
    let s4 = String::new();

    // With capacity
    let s5 = String::with_capacity(10);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Operations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut s = String::from("Hello");

    // Appending
    s.push_str(", World");  // Append string slice
    s.push('!');            // Append single char

    println!("{}", s);  // "Hello, World!"

    // Concatenation with +
    let s1 = String::from("Hello, ");
    let s2 = String::from("World!");
    let s3 = s1 + &s2;  // s1 is moved, s2 is borrowed

    // format! macro (doesn't take ownership)
    let s1 = String::from("tic");
    let s2 = String::from("tac");
    let s3 = String::from("toe");
    let s = format!("{}-{}-{}", s1, s2, s3);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Indexing</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s = String::from("hello");

    // WRONG: Rust strings don't support direct indexing
    // let h = s[0];  // This won't compile!

    // Why? Strings are UTF-8, and characters can be multi-byte
    let hello = String::from("Здравствуйте");
    println!("Length: {} bytes", hello.len());  // 24 bytes, not 12 chars!

    // Use slicing with care (must be at char boundaries)
    let s = "hello";
    let slice = &s[0..4];  // "hell"

    // Getting individual characters
    let s = String::from("hello");
    for c in s.chars() {
        println!("{}", c);
    }

    // Getting bytes
    for b in s.bytes() {
        println!("{}", b);
    }

    // Get nth character
    let s = "hello";
    if let Some(c) = s.chars().nth(1) {
        println!("Second char: {}", c);  // 'e'
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common String Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s = String::from("  Hello, World!  ");

    // Length and capacity
    println!("Length: {}", s.len());
    println!("Capacity: {}", s.capacity());
    println!("Is empty: {}", s.is_empty());

    // Trimming
    println!("{}", s.trim());       // "Hello, World!"
    println!("{}", s.trim_start()); // "Hello, World!  "
    println!("{}", s.trim_end());   // "  Hello, World!"

    // Case conversion
    let s = "Hello";
    println!("{}", s.to_uppercase()); // "HELLO"
    println!("{}", s.to_lowercase()); // "hello"

    // Searching
    let s = "Hello, World!";
    println!("{}", s.contains("World"));     // true
    println!("{}", s.starts_with("Hello"));  // true
    println!("{}", s.ends_with("!"));        // true
    println!("{:?}", s.find("World"));       // Some(7)

    // Replacing
    let s = "I like cats";
    let new_s = s.replace("cats", "dogs");
    println!("{}", new_s);  // "I like dogs"
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Splitting Strings</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let s = "apple,banana,cherry";

    // Split by delimiter
    for part in s.split(',') {
        println!("{}", part);
    }

    // Collect into Vec
    let parts: Vec<&str> = s.split(',').collect();
    println!("{:?}", parts);  // ["apple", "banana", "cherry"]

    // Split whitespace
    let s = "Hello   World";
    let words: Vec<&str> = s.split_whitespace().collect();
    println!("{:?}", words);  // ["Hello", "World"]

    // Split into lines
    let text = "line1\\nline2\\nline3";
    for line in text.lines() {
        println!("{}", line);
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String and &str Conversion</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // &str to String
    let s1: &str = "hello";
    let s2: String = s1.to_string();
    let s3: String = String::from(s1);
    let s4: String = s1.to_owned();

    // String to &str
    let s: String = String::from("hello");
    let slice: &str = &s;
    let slice2: &str = s.as_str();

    // Function accepting both
    fn print_str(s: &str) {
        println!("{}", s);
    }

    print_str("literal");           // &str
    print_str(&String::from("owned")); // &String coerces to &str
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Parsing and Formatting</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // String to number
    let s = "42";
    let n: i32 = s.parse().unwrap();
    let n: i32 = s.parse::<i32>().unwrap();

    // Number to string
    let n = 42;
    let s = n.to_string();
    let s = format!("{}", n);

    // Formatted strings
    let name = "Alice";
    let age = 30;
    let formatted = format!("{} is {} years old", name, age);

    // Padding
    println!("{:>10}", "right");    // "     right"
    println!("{:<10}", "left");     // "left      "
    println!("{:^10}", "center");   // "  center  "
    println!("{:0>5}", 42);         // "00042"
}`}
    </pre>
  </div>
);

export default RustStrings;
