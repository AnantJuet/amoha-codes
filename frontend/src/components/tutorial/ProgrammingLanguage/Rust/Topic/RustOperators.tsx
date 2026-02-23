import React from "react";

const RustOperators: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Operators</h1>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Operator</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">+</td><td className="border border-gray-300 p-2">Addition</td><td className="border border-gray-300 p-2">5 + 3 = 8</td></tr>
        <tr><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">Subtraction</td><td className="border border-gray-300 p-2">5 - 3 = 2</td></tr>
        <tr><td className="border border-gray-300 p-2">*</td><td className="border border-gray-300 p-2">Multiplication</td><td className="border border-gray-300 p-2">5 * 3 = 15</td></tr>
        <tr><td className="border border-gray-300 p-2">/</td><td className="border border-gray-300 p-2">Division</td><td className="border border-gray-300 p-2">10 / 3 = 3</td></tr>
        <tr><td className="border border-gray-300 p-2">%</td><td className="border border-gray-300 p-2">Remainder</td><td className="border border-gray-300 p-2">10 % 3 = 1</td></tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3;      // Result: -1
    let remainder = 43 % 5;      // Result: 3
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Operator</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">==</td><td className="border border-gray-300 p-2">Equal</td><td className="border border-gray-300 p-2">5 == 5 → true</td></tr>
        <tr><td className="border border-gray-300 p-2">!=</td><td className="border border-gray-300 p-2">Not Equal</td><td className="border border-gray-300 p-2">5 != 3 → true</td></tr>
        <tr><td className="border border-gray-300 p-2">&gt;</td><td className="border border-gray-300 p-2">Greater Than</td><td className="border border-gray-300 p-2">5 &gt; 3 → true</td></tr>
        <tr><td className="border border-gray-300 p-2">&lt;</td><td className="border border-gray-300 p-2">Less Than</td><td className="border border-gray-300 p-2">5 &lt; 3 → false</td></tr>
        <tr><td className="border border-gray-300 p-2">&gt;=</td><td className="border border-gray-300 p-2">Greater or Equal</td><td className="border border-gray-300 p-2">5 &gt;= 5 → true</td></tr>
        <tr><td className="border border-gray-300 p-2">&lt;=</td><td className="border border-gray-300 p-2">Less or Equal</td><td className="border border-gray-300 p-2">3 &lt;= 5 → true</td></tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let a = 5;
    let b = 10;

    println!("a == b: {}", a == b);  // false
    println!("a != b: {}", a != b);  // true
    println!("a > b: {}", a > b);    // false
    println!("a < b: {}", a < b);    // true
    println!("a >= 5: {}", a >= 5);  // true
    println!("b <= 10: {}", b <= 10); // true
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Operator</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">&&</td><td className="border border-gray-300 p-2">Logical AND</td><td className="border border-gray-300 p-2">Both must be true</td></tr>
        <tr><td className="border border-gray-300 p-2">||</td><td className="border border-gray-300 p-2">Logical OR</td><td className="border border-gray-300 p-2">At least one must be true</td></tr>
        <tr><td className="border border-gray-300 p-2">!</td><td className="border border-gray-300 p-2">Logical NOT</td><td className="border border-gray-300 p-2">Inverts boolean</td></tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let a = true;
    let b = false;

    println!("a && b: {}", a && b);  // false
    println!("a || b: {}", a || b);  // true
    println!("!a: {}", !a);          // false

    // Short-circuit evaluation
    let x = false && expensive_function();  // expensive_function not called
    let y = true || expensive_function();   // expensive_function not called
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Bitwise Operators</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Operator</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">&</td><td className="border border-gray-300 p-2">AND</td><td className="border border-gray-300 p-2">5 & 3 = 1</td></tr>
        <tr><td className="border border-gray-300 p-2">|</td><td className="border border-gray-300 p-2">OR</td><td className="border border-gray-300 p-2">5 | 3 = 7</td></tr>
        <tr><td className="border border-gray-300 p-2">^</td><td className="border border-gray-300 p-2">XOR</td><td className="border border-gray-300 p-2">5 ^ 3 = 6</td></tr>
        <tr><td className="border border-gray-300 p-2">!</td><td className="border border-gray-300 p-2">NOT</td><td className="border border-gray-300 p-2">!5 = -6</td></tr>
        <tr><td className="border border-gray-300 p-2">&lt;&lt;</td><td className="border border-gray-300 p-2">Left Shift</td><td className="border border-gray-300 p-2">5 &lt;&lt; 1 = 10</td></tr>
        <tr><td className="border border-gray-300 p-2">&gt;&gt;</td><td className="border border-gray-300 p-2">Right Shift</td><td className="border border-gray-300 p-2">5 &gt;&gt; 1 = 2</td></tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let a: u8 = 0b0101;  // 5
    let b: u8 = 0b0011;  // 3

    println!("a & b  = {:04b}", a & b);   // 0001 (1)
    println!("a | b  = {:04b}", a | b);   // 0111 (7)
    println!("a ^ b  = {:04b}", a ^ b);   // 0110 (6)
    println!("a << 1 = {:04b}", a << 1);  // 1010 (10)
    println!("a >> 1 = {:04b}", a >> 1);  // 0010 (2)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Assignment Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut x = 10;

    x += 5;   // x = x + 5;  → 15
    x -= 3;   // x = x - 3;  → 12
    x *= 2;   // x = x * 2;  → 24
    x /= 4;   // x = x / 4;  → 6
    x %= 4;   // x = x % 4;  → 2

    // Bitwise assignment
    let mut y = 0b1010;
    y &= 0b1100;  // AND assignment
    y |= 0b0011;  // OR assignment
    y ^= 0b1111;  // XOR assignment
    y <<= 2;      // Left shift assignment
    y >>= 1;      // Right shift assignment
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Range Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Exclusive range (1 to 4)
    for i in 1..5 {
        println!("{}", i);  // 1, 2, 3, 4
    }

    // Inclusive range (1 to 5)
    for i in 1..=5 {
        println!("{}", i);  // 1, 2, 3, 4, 5
    }

    // Range from start
    let slice = &arr[2..];

    // Range to end
    let slice = &arr[..3];

    // Full range
    let slice = &arr[..];
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Other Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Dereference operator (*)
    let x = 5;
    let y = &x;
    println!("{}", *y);  // 5

    // Reference operators (& and &mut)
    let a = 10;
    let b = &a;      // Immutable reference
    let mut c = 20;
    let d = &mut c;  // Mutable reference

    // Question mark operator (?)
    fn read_file() -> Result<String, io::Error> {
        let content = fs::read_to_string("file.txt")?;
        Ok(content)
    }
}`}
    </pre>
  </div>
);

export default RustOperators;
