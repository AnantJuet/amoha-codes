import React from "react";

const RustComments: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Comments</h1>

    <h2 className="text-2xl font-bold mt-6">What are Comments?</h2>
    <p>
      Comments are used to explain code and make it more readable. They are ignored by the compiler
      and have no effect on program execution.
    </p>

    <h2 className="text-2xl font-bold mt-6">Single-Line Comments</h2>
    <p>Use <code>//</code> for single-line comments:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // This is a single-line comment
    let x = 5; // This comment is at the end of a line

    // You can use multiple single-line comments
    // to create multi-line explanations
    let y = 10;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multi-Line Comments</h2>
    <p>Use <code>/* */</code> for multi-line comments:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    /* This is a multi-line comment.
       It can span multiple lines.
       Useful for longer explanations. */
    let x = 5;

    /* Multi-line comments can also
       be nested /* like this */ in Rust */
    let y = 10;
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Documentation Comments</h2>
    <p>Rust has special documentation comments that generate HTML documentation:</p>

    <h3 className="text-xl font-semibold mt-4">Outer Doc Comments (///)</h3>
    <p>Used to document the item that follows:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/// Adds two numbers together.
///
/// # Arguments
///
/// * \`a\` - The first number
/// * \`b\` - The second number
///
/// # Returns
///
/// The sum of a and b
///
/// # Examples
///
/// \`\`\`
/// let result = add(2, 3);
/// assert_eq!(result, 5);
/// \`\`\`
fn add(a: i32, b: i32) -> i32 {
    a + b
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Inner Doc Comments (//!)</h3>
    <p>Used to document the enclosing item (like a module or crate):</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`//! # My Crate
//!
//! \`my_crate\` is a collection of utilities for
//! performing mathematical operations.
//!
//! ## Features
//!
//! - Basic arithmetic
//! - Advanced calculations

mod math {
    //! This module contains mathematical functions.
    //!
    //! Use this module for all math-related operations.

    /// Multiplies two numbers.
    pub fn multiply(a: i32, b: i32) -> i32 {
        a * b
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Documentation Sections</h2>
    <p>Common sections used in documentation comments:</p>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Section</th>
          <th className="border border-gray-300 p-2">Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2"># Examples</td><td className="border border-gray-300 p-2">Code examples showing usage</td></tr>
        <tr><td className="border border-gray-300 p-2"># Arguments</td><td className="border border-gray-300 p-2">Description of function parameters</td></tr>
        <tr><td className="border border-gray-300 p-2"># Returns</td><td className="border border-gray-300 p-2">What the function returns</td></tr>
        <tr><td className="border border-gray-300 p-2"># Panics</td><td className="border border-gray-300 p-2">When the function might panic</td></tr>
        <tr><td className="border border-gray-300 p-2"># Errors</td><td className="border border-gray-300 p-2">Error conditions (for Result types)</td></tr>
        <tr><td className="border border-gray-300 p-2"># Safety</td><td className="border border-gray-300 p-2">Safety requirements (for unsafe code)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Generating Documentation</h2>
    <p>Generate HTML documentation with cargo:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Generate documentation
cargo doc

# Generate and open in browser
cargo doc --open

# Include private items
cargo doc --document-private-items`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Doc Tests</h2>
    <p>Code examples in documentation are tested automatically:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`/// Divides two numbers.
///
/// # Examples
///
/// \`\`\`
/// let result = divide(10, 2);
/// assert_eq!(result, Some(5));
/// \`\`\`
///
/// Returns None for division by zero:
///
/// \`\`\`
/// let result = divide(10, 0);
/// assert_eq!(result, None);
/// \`\`\`
fn divide(a: i32, b: i32) -> Option<i32> {
    if b == 0 {
        None
    } else {
        Some(a / b)
    }
}

// Run doc tests with: cargo test --doc`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside ml-4 space-y-2">
      <li>Use <code>///</code> for public API documentation</li>
      <li>Include examples in documentation comments</li>
      <li>Document panic conditions and error cases</li>
      <li>Keep comments up to date with code changes</li>
      <li>Use inline comments sparingly for complex logic</li>
    </ul>
  </div>
);

export default RustComments;
