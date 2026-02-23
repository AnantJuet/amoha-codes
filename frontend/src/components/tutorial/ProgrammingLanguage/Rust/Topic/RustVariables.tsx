import React from "react";

const RustVariables: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Variables</h1>

    <h2 className="text-2xl font-bold mt-6">Creating Variables</h2>
    <p>
      In Rust, variables are immutable by default. Use the <code>let</code> keyword to create a variable:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Immutability</h2>
    <p>
      By default, variables cannot be changed after being assigned:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x = 5;
    x = 6;  // ERROR! Cannot assign twice to immutable variable
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Mutable Variables</h2>
    <p>
      Use the <code>mut</code> keyword to make a variable mutable:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);

    x = 6;  // This is allowed now
    println!("The value of x is: {}", x);
}`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`The value of x is: 5
The value of x is: 6`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Constants</h2>
    <p>
      Constants are always immutable and must have their type annotated:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`const MAX_POINTS: u32 = 100_000;
const PI: f64 = 3.14159;

fn main() {
    println!("Max points: {}", MAX_POINTS);
    println!("PI: {}", PI);
}`}
    </pre>

    <p className="mt-3">
      <b>Key differences between <code>let</code> and <code>const</code>:</b>
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Constants must always have type annotations</li>
      <li>Constants can only be set to constant expressions, not runtime values</li>
      <li>Constants are valid for the entire program lifetime</li>
      <li>Constants use SCREAMING_SNAKE_CASE naming convention</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Shadowing</h2>
    <p>
      You can declare a new variable with the same name as a previous variable. The new variable <b>shadows</b> the previous one:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x = 5;
    let x = x + 1;      // x is now 6
    let x = x * 2;      // x is now 12

    println!("The value of x is: {}", x);  // prints: 12
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Shadowing vs Mutability</h3>
    <p>
      Shadowing is different from making a variable <code>mut</code>. With shadowing, we can change the type:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Shadowing allows type change
    let spaces = "   ";        // &str type
    let spaces = spaces.len(); // usize type - this is OK

    // With mut, we cannot change type
    let mut spaces = "   ";
    // spaces = spaces.len();  // ERROR! Cannot change type
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Annotations</h2>
    <p>
      You can explicitly specify the type:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x: i32 = 5;           // 32-bit integer
    let y: f64 = 3.14;        // 64-bit float
    let z: bool = true;       // boolean
    let c: char = 'A';        // character
    let s: &str = "hello";    // string slice

    println!("x={}, y={}, z={}, c={}, s={}", x, y, z, c, s);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Variable Scope</h2>
    <p>
      Variables are valid from the point of declaration until the end of the current scope:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // outer is not valid here, it's not declared yet

    let outer = "outer";   // outer is valid from here

    {
        let inner = "inner";  // inner is valid from here
        println!("{} {}", outer, inner);  // both are valid
    }  // inner goes out of scope here

    // println!("{}", inner);  // ERROR! inner is not valid
    println!("{}", outer);     // outer is still valid
}  // outer goes out of scope here`}
    </pre>
  </div>
);

export default RustVariables;
