import React from "react";

const RustDataTypes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Data Types</h1>

    <h2 className="text-2xl font-bold mt-6">Overview</h2>
    <p>
      Rust is a statically typed language, meaning all variable types must be known at compile time.
      Rust has two main categories of data types: scalar and compound.
    </p>

    <h2 className="text-2xl font-bold mt-6">Scalar Types</h2>
    <p>Scalar types represent a single value. Rust has four primary scalar types:</p>

    <h3 className="text-xl font-semibold mt-4">Integer Types</h3>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Length</th>
          <th className="border border-gray-300 p-2">Signed</th>
          <th className="border border-gray-300 p-2">Unsigned</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">8-bit</td><td className="border border-gray-300 p-2">i8</td><td className="border border-gray-300 p-2">u8</td></tr>
        <tr><td className="border border-gray-300 p-2">16-bit</td><td className="border border-gray-300 p-2">i16</td><td className="border border-gray-300 p-2">u16</td></tr>
        <tr><td className="border border-gray-300 p-2">32-bit</td><td className="border border-gray-300 p-2">i32</td><td className="border border-gray-300 p-2">u32</td></tr>
        <tr><td className="border border-gray-300 p-2">64-bit</td><td className="border border-gray-300 p-2">i64</td><td className="border border-gray-300 p-2">u64</td></tr>
        <tr><td className="border border-gray-300 p-2">128-bit</td><td className="border border-gray-300 p-2">i128</td><td className="border border-gray-300 p-2">u128</td></tr>
        <tr><td className="border border-gray-300 p-2">arch</td><td className="border border-gray-300 p-2">isize</td><td className="border border-gray-300 p-2">usize</td></tr>
      </tbody>
    </table>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let a: i32 = -42;        // Signed 32-bit integer
    let b: u32 = 42;         // Unsigned 32-bit integer
    let c: i64 = 1_000_000;  // Underscores for readability
    let d: u8 = 255;         // Maximum for u8

    // Integer literals
    let decimal = 98_222;
    let hex = 0xff;
    let octal = 0o77;
    let binary = 0b1111_0000;
    let byte = b'A';         // u8 only
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Floating-Point Types</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let x: f64 = 3.14159;    // 64-bit float (default)
    let y: f32 = 2.5;        // 32-bit float

    // Operations
    let sum = 5.0 + 10.5;
    let difference = 95.5 - 4.3;
    let product = 4.0 * 30.0;
    let quotient = 56.7 / 32.2;
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Boolean Type</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let t: bool = true;
    let f: bool = false;

    // Booleans in conditions
    if t {
        println!("It's true!");
    }
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Character Type</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let c: char = 'z';
    let z: char = 'ℤ';
    let heart_eyed_cat: char = '😻';

    // char is 4 bytes (Unicode scalar value)
    println!("Size of char: {} bytes", std::mem::size_of::<char>());
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Compound Types</h2>
    <p>Compound types group multiple values into one type.</p>

    <h3 className="text-xl font-semibold mt-4">Tuple Type</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Creating a tuple
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    // Destructuring
    let (x, y, z) = tup;
    println!("y is: {}", y);

    // Accessing by index
    let five_hundred = tup.0;
    let six_point_four = tup.1;
    let one = tup.2;

    // Unit type (empty tuple)
    let unit: () = ();
}`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Array Type</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Fixed-size array
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    // Initialize with same value
    let b = [3; 5]; // [3, 3, 3, 3, 3]

    // Accessing elements
    let first = a[0];
    let second = a[1];

    // Array length
    println!("Length: {}", a.len());

    // Iteration
    for element in a {
        println!("{}", element);
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Inference</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Rust can infer types
    let x = 5;           // i32 inferred
    let y = 3.14;        // f64 inferred
    let z = true;        // bool inferred

    // Sometimes annotation is needed
    let guess: u32 = "42".parse().expect("Not a number!");

    // Collection type inference
    let numbers: Vec<i32> = vec![1, 2, 3];
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Conversion</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Using 'as' for primitive conversions
    let x: i32 = 42;
    let y: i64 = x as i64;
    let z: f64 = x as f64;

    // Be careful with narrowing conversions
    let big: i32 = 300;
    let small: u8 = big as u8;  // Truncates! small = 44

    // From/Into traits for complex conversions
    let s: String = String::from("hello");
    let s2: String = "hello".into();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Aliases</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Create a type alias
type Kilometers = i32;

fn main() {
    let x: i32 = 5;
    let y: Kilometers = 5;

    // They're the same type, so this works
    println!("x + y = {}", x + y);
}

// Useful for complex types
type Thunk = Box<dyn Fn() + Send + 'static>;`}
    </pre>
  </div>
);

export default RustDataTypes;
