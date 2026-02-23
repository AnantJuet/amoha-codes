import React from "react";

const RustVectors: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Vectors</h1>

    <h2 className="text-2xl font-bold mt-6">What are Vectors?</h2>
    <p>
      Vectors (<code>Vec&lt;T&gt;</code>) are resizable arrays that store values of the same type
      in contiguous memory. They're one of the most commonly used collections in Rust.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating Vectors</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Empty vector with type annotation
    let v: Vec<i32> = Vec::new();

    // Using vec! macro
    let v = vec![1, 2, 3, 4, 5];

    // With initial capacity
    let v: Vec<i32> = Vec::with_capacity(10);

    // From iterator
    let v: Vec<i32> = (1..=5).collect();

    // Repeat value
    let v = vec![0; 5];  // [0, 0, 0, 0, 0]
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Adding Elements</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut v = Vec::new();

    // Push to end
    v.push(1);
    v.push(2);
    v.push(3);

    // Insert at index
    v.insert(1, 10);  // [1, 10, 2, 3]

    // Extend with another collection
    v.extend([4, 5, 6]);

    // Append another vector (moves elements)
    let mut v2 = vec![7, 8, 9];
    v.append(&mut v2);  // v2 is now empty
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1, 2, 3, 4, 5];

    // Direct indexing (can panic!)
    let third = v[2];

    // Safe access with get() (returns Option)
    match v.get(2) {
        Some(value) => println!("Third element: {}", value),
        None => println!("No third element"),
    }

    // First and last
    if let Some(first) = v.first() {
        println!("First: {}", first);
    }
    if let Some(last) = v.last() {
        println!("Last: {}", last);
    }

    // Slicing
    let slice = &v[1..3];  // [2, 3]
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Removing Elements</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut v = vec![1, 2, 3, 4, 5];

    // Pop from end
    let last = v.pop();  // Returns Some(5)

    // Remove at index
    let removed = v.remove(1);  // Removes and returns 2

    // Remove without preserving order (faster)
    v.swap_remove(0);  // Swaps with last, then pops

    // Clear all
    v.clear();

    // Retain elements matching predicate
    let mut v = vec![1, 2, 3, 4, 5];
    v.retain(|&x| x % 2 == 0);  // [2, 4]

    // Drain range
    let mut v = vec![1, 2, 3, 4, 5];
    let drained: Vec<_> = v.drain(1..3).collect();  // drained: [2, 3], v: [1, 4, 5]
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Iterating</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1, 2, 3, 4, 5];

    // Immutable iteration
    for value in &v {
        println!("{}", value);
    }

    // Mutable iteration
    let mut v = vec![1, 2, 3];
    for value in &mut v {
        *value *= 2;
    }
    // v is now [2, 4, 6]

    // Consuming iteration (takes ownership)
    for value in v {
        println!("{}", value);
    }
    // v is no longer valid

    // With index
    let v = vec![10, 20, 30];
    for (index, value) in v.iter().enumerate() {
        println!("v[{}] = {}", index, value);
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Useful Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![3, 1, 4, 1, 5, 9, 2, 6];

    // Length and capacity
    println!("Length: {}", v.len());
    println!("Capacity: {}", v.capacity());
    println!("Is empty: {}", v.is_empty());

    // Contains
    println!("Contains 4: {}", v.contains(&4));

    // Sorting
    let mut v = vec![3, 1, 4, 1, 5];
    v.sort();              // [1, 1, 3, 4, 5]
    v.sort_by(|a, b| b.cmp(a)); // Descending

    // Reverse
    v.reverse();

    // Dedup (removes consecutive duplicates)
    let mut v = vec![1, 1, 2, 2, 2, 3];
    v.dedup();  // [1, 2, 3]

    // Binary search (must be sorted)
    let v = vec![1, 2, 3, 4, 5];
    match v.binary_search(&3) {
        Ok(index) => println!("Found at {}", index),
        Err(index) => println!("Would insert at {}", index),
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Functional Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1, 2, 3, 4, 5];

    // Map
    let doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();

    // Filter
    let evens: Vec<&i32> = v.iter().filter(|&&x| x % 2 == 0).collect();

    // Filter map
    let results: Vec<i32> = v.iter()
        .filter_map(|&x| if x > 2 { Some(x * 10) } else { None })
        .collect();

    // Fold/reduce
    let sum: i32 = v.iter().fold(0, |acc, x| acc + x);
    let sum: i32 = v.iter().sum();  // Shorthand

    // Find
    let first_even = v.iter().find(|&&x| x % 2 == 0);

    // All/Any
    let all_positive = v.iter().all(|&x| x > 0);
    let any_negative = v.iter().any(|&x| x < 0);

    // Max/Min
    let max = v.iter().max();
    let min = v.iter().min();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Vectors with Enums</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Store different types using enum
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}

fn main() {
    let row = vec![
        SpreadsheetCell::Int(3),
        SpreadsheetCell::Text(String::from("blue")),
        SpreadsheetCell::Float(10.12),
    ];

    for cell in &row {
        match cell {
            SpreadsheetCell::Int(i) => println!("Integer: {}", i),
            SpreadsheetCell::Float(f) => println!("Float: {}", f),
            SpreadsheetCell::Text(s) => println!("Text: {}", s),
        }
    }
}`}
    </pre>
  </div>
);

export default RustVectors;
