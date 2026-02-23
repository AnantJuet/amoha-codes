import React from "react";

const RustFunctions: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Functions</h1>

    <h2 className="text-2xl font-bold mt-6">Defining Functions</h2>
    <p>
      Use the <code>fn</code> keyword to define a function:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    println!("Hello from main!");
    another_function();
}

fn another_function() {
    println!("Hello from another function!");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Parameters</h2>
    <p>
      Functions can have parameters. You must declare the type of each parameter:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    greet("Alice");
    print_sum(5, 10);
}

fn greet(name: &str) {
    println!("Hello, {}!", name);
}

fn print_sum(x: i32, y: i32) {
    println!("Sum: {}", x + y);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello, Alice!
Sum: 15`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Return Values</h2>
    <p>
      Use <code>-&gt;</code> to declare the return type. The last expression is implicitly returned:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let result = add(5, 3);
    println!("5 + 3 = {}", result);
}

fn add(x: i32, y: i32) -> i32 {
    x + y  // No semicolon = return this value
}`}
    </pre>

    <p className="mt-3">
      You can also use the <code>return</code> keyword for early returns:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn is_positive(x: i32) -> bool {
    if x > 0 {
        return true;  // Early return
    }
    false
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Return Values</h2>
    <p>
      Use tuples to return multiple values:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let (sum, product) = calculate(5, 3);
    println!("Sum: {}, Product: {}", sum, product);
}

fn calculate(x: i32, y: i32) -> (i32, i32) {
    (x + y, x * y)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Functions as Parameters</h2>
    <p>
      Functions can accept other functions as parameters:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let result = apply_operation(5, 3, add);
    println!("Result: {}", result);  // prints: 8
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn apply_operation(x: i32, y: i32, op: fn(i32, i32) -> i32) -> i32 {
    op(x, y)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Closures</h2>
    <p>
      Closures are anonymous functions that can capture their environment:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Basic closure
    let add_one = |x: i32| x + 1;
    println!("{}", add_one(5));  // prints: 6

    // Closure capturing environment
    let multiplier = 3;
    let multiply = |x: i32| x * multiplier;
    println!("{}", multiply(5));  // prints: 15

    // Multi-line closure
    let complex = |x: i32| {
        let y = x * 2;
        y + 1
    };
    println!("{}", complex(5));  // prints: 11
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generic Functions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    println!("{}", largest(5, 10));      // 10
    println!("{}", largest('a', 'z'));   // z
}

fn largest<T: PartialOrd>(a: T, b: T) -> T {
    if a > b { a } else { b }
}`}
    </pre>
  </div>
);

export default RustFunctions;
