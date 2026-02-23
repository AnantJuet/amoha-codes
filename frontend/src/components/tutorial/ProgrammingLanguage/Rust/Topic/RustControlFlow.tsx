import React from "react";

const RustControlFlow: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Control Flow</h1>

    <h2 className="text-2xl font-bold mt-6">if Expressions</h2>
    <p>In Rust, <code>if</code> is an expression that can return values:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let number = 7;

    // Basic if-else
    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    // Multiple conditions with else if
    if number % 4 == 0 {
        println!("divisible by 4");
    } else if number % 3 == 0 {
        println!("divisible by 3");
    } else if number % 2 == 0 {
        println!("divisible by 2");
    } else {
        println!("not divisible by 4, 3, or 2");
    }
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">if as an Expression</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let condition = true;

    // Using if in a let statement
    let number = if condition { 5 } else { 6 };
    println!("number is: {}", number);

    // Types must match in both branches
    let value = if true { 1 } else { 2 };  // Both i32
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">loop - Infinite Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut counter = 0;

    // Basic loop with break
    loop {
        counter += 1;
        if counter == 10 {
            break;
        }
    }

    // Returning values from loops
    let result = loop {
        counter += 1;
        if counter == 20 {
            break counter * 2;  // Returns 40
        }
    };
    println!("Result: {}", result);
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Loop Labels</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut count = 0;

    // Named loops with labels
    'outer: loop {
        println!("count = {}", count);
        let mut remaining = 10;

        loop {
            println!("remaining = {}", remaining);
            if remaining == 9 {
                break;
            }
            if count == 2 {
                break 'outer;  // Breaks outer loop
            }
            remaining -= 1;
        }
        count += 1;
    }
    println!("End count = {}", count);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">while Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut number = 3;

    // Basic while loop
    while number != 0 {
        println!("{}!", number);
        number -= 1;
    }
    println!("LIFTOFF!");

    // Iterating through a collection
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;

    while index < 5 {
        println!("value: {}", a[index]);
        index += 1;
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">for Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Iterating over a collection (preferred)
    let a = [10, 20, 30, 40, 50];

    for element in a {
        println!("value: {}", element);
    }

    // Using a range
    for number in 1..4 {
        println!("{}!", number);  // 1, 2, 3
    }

    // Inclusive range
    for number in 1..=3 {
        println!("{}!", number);  // 1, 2, 3
    }

    // Reversed range
    for number in (1..4).rev() {
        println!("{}!", number);  // 3, 2, 1
    }
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">for with Iterators</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let v = vec![1, 2, 3, 4, 5];

    // Iterate by reference
    for i in &v {
        println!("{}", i);
    }

    // Iterate with index
    for (index, value) in v.iter().enumerate() {
        println!("v[{}] = {}", index, value);
    }

    // Mutable iteration
    let mut v = vec![1, 2, 3];
    for i in &mut v {
        *i += 10;
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">break and continue</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // break exits the loop
    for i in 1..10 {
        if i == 5 {
            break;
        }
        println!("{}", i);  // 1, 2, 3, 4
    }

    // continue skips to next iteration
    for i in 1..10 {
        if i % 2 == 0 {
            continue;  // Skip even numbers
        }
        println!("{}", i);  // 1, 3, 5, 7, 9
    }

    // With loop labels
    'outer: for i in 0..3 {
        for j in 0..3 {
            if i == j {
                continue 'outer;
            }
            println!("({}, {})", i, j);
        }
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">match Expression</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let number = 13;

    // Basic match
    match number {
        1 => println!("One"),
        2 => println!("Two"),
        3 => println!("Three"),
        _ => println!("Other"),  // Default case
    }

    // Match with multiple patterns
    match number {
        1 | 2 | 3 => println!("One, two, or three"),
        4..=10 => println!("Four through ten"),
        _ => println!("Something else"),
    }

    // Match is an expression
    let result = match number {
        n if n < 0 => "negative",
        0 => "zero",
        n if n > 0 => "positive",
        _ => unreachable!(),
    };
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">if let</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let some_value = Some(3);

    // Instead of verbose match
    match some_value {
        Some(3) => println!("three"),
        _ => (),
    }

    // Use if let
    if let Some(3) = some_value {
        println!("three");
    }

    // With else
    if let Some(x) = some_value {
        println!("Got: {}", x);
    } else {
        println!("Got nothing");
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">while let</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut stack = vec![1, 2, 3];

    // Pop until empty
    while let Some(top) = stack.pop() {
        println!("{}", top);  // 3, 2, 1
    }
}`}
    </pre>
  </div>
);

export default RustControlFlow;
