import React from "react";

const RustSyntax: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Syntax</h1>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
    <p>
      Let's look at a simple Rust program and understand its components:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    println!("Hello, World!");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Syntax Explained</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><code>fn</code> - keyword to define a function</li>
      <li><code>main</code> - the function name (main is special - it's the entry point)</li>
      <li><code>()</code> - function parameters (empty in this case)</li>
      <li><code>{"{}"}</code> - function body enclosed in curly braces</li>
      <li><code>println!</code> - a macro for printing (note the <code>!</code>)</li>
      <li><code>;</code> - semicolon ends the statement</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Statements vs Expressions</h2>
    <p>
      Rust distinguishes between statements and expressions:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Statement - performs action, doesn't return value
    let x = 5;  // ends with semicolon

    // Expression - evaluates to a value
    let y = {
        let a = 3;
        a + 1  // no semicolon = expression returns this value
    };

    println!("y is: {}", y);  // prints: y is: 4
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Code Blocks</h2>
    <p>
      Code blocks are delimited by curly braces and can return values:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let number = {
        let a = 10;
        let b = 20;
        a + b  // This is returned (no semicolon)
    };

    println!("Number: {}", number);  // prints: Number: 30
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Print Formatting</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Basic print
    println!("Hello!");

    // With placeholders
    println!("x = {}", 5);

    // Multiple values
    println!("{} and {}", "first", "second");

    // Named placeholders
    println!("{name} is {age} years old", name="Alice", age=30);

    // Debug print
    println!("{:?}", vec![1, 2, 3]);

    // Pretty debug print
    println!("{:#?}", vec![1, 2, 3]);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Naming Conventions</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Convention</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Variables</td>
          <td className="border border-gray-300 px-4 py-2">snake_case</td>
          <td className="border border-gray-300 px-4 py-2"><code>my_variable</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Functions</td>
          <td className="border border-gray-300 px-4 py-2">snake_case</td>
          <td className="border border-gray-300 px-4 py-2"><code>calculate_sum</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Structs</td>
          <td className="border border-gray-300 px-4 py-2">PascalCase</td>
          <td className="border border-gray-300 px-4 py-2"><code>MyStruct</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Enums</td>
          <td className="border border-gray-300 px-4 py-2">PascalCase</td>
          <td className="border border-gray-300 px-4 py-2"><code>Color</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Constants</td>
          <td className="border border-gray-300 px-4 py-2">SCREAMING_SNAKE_CASE</td>
          <td className="border border-gray-300 px-4 py-2"><code>MAX_SIZE</code></td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Macros vs Functions</h2>
    <p>
      Macros end with <code>!</code> and are different from functions:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // println! is a macro
    println!("This is a macro");

    // vec! is also a macro
    let numbers = vec![1, 2, 3];

    // format! returns a String
    let message = format!("Hello, {}!", "World");
}`}
    </pre>
  </div>
);

export default RustSyntax;
