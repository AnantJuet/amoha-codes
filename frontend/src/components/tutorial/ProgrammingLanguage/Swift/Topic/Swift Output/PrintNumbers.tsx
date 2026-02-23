import React from "react";

const SwiftNumberOutput: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Number Output
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Swift makes it easy to print numeric values using <code>print()</code>. You can output
      numbers directly, format them with string interpolation, or customize their appearance.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Number Printing</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let integer = 42
let decimal = 3.14159

// Print numbers directly
print(integer)   // 42
print(decimal)   // 3.14159

// Print multiple values
print(integer, decimal)  // 42 3.14159`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Interpolation</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>\(value)</code> to embed numeric values inside strings:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let a = 7, b = 3

print("a = \\(a), b = \\(b)")
// a = 7, b = 3

print("Sum: \\(a + b)")
// Sum: 10

print("Product: \\(a * b)")
// Product: 21

// Complex expressions
let price = 19.99
let quantity = 3
print("Total: $\\(price * Double(quantity))")
// Total: $59.97`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Formatting Decimal Places</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let pi = 3.14159265359

// Using String format specifier
print(String(format: "%.2f", pi))    // 3.14
print(String(format: "%.4f", pi))    // 3.1416
print(String(format: "%.0f", pi))    // 3

// In interpolation
let price = 29.999
print("Price: $\\(String(format: "%.2f", price))")
// Price: $30.00`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Number Formatting</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`import Foundation

let number = 1234567.89

// Using NumberFormatter
let formatter = NumberFormatter()
formatter.numberStyle = .decimal
formatter.groupingSeparator = ","
print(formatter.string(from: NSNumber(value: number))!)
// 1,234,567.89

// Currency format
formatter.numberStyle = .currency
print(formatter.string(from: NSNumber(value: number))!)
// $1,234,567.89

// Percentage
let percent = 0.856
formatter.numberStyle = .percent
print(formatter.string(from: NSNumber(value: percent))!)
// 86%`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Padding and Alignment</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Right-align with padding
print(String(format: "%5d", 42))    // "   42"
print(String(format: "%5d", 123))   // "  123"

// Left-align with padding
print(String(format: "%-5d", 42))   // "42   "

// Zero padding
print(String(format: "%05d", 42))   // "00042"

// Combined in a table-like format
for i in 1...5 {
    print(String(format: "%2d x %2d = %3d", i, i, i * i))
}
// 1 x  1 =   1
// 2 x  2 =   4
// 3 x  3 =   9
// 4 x  4 =  16
// 5 x  5 =  25`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Print Separators and Terminators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Default separator is space
print(1, 2, 3, 4, 5)
// 1 2 3 4 5

// Custom separator
print(1, 2, 3, 4, 5, separator: ", ")
// 1, 2, 3, 4, 5

print(1, 2, 3, separator: " + ")
// 1 + 2 + 3

// Custom terminator (default is newline)
print("Count: ", terminator: "")
print(42)
// Count: 42

// No newline
for i in 1...5 {
    print(i, terminator: " ")
}
// 1 2 3 4 5`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Different Number Bases</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let number = 255

// Binary
print(String(number, radix: 2))    // 11111111

// Octal
print(String(number, radix: 8))    // 377

// Hexadecimal
print(String(number, radix: 16))   // ff

// Uppercase hex
print(String(number, radix: 16, uppercase: true))  // FF

// With prefix
print("0x" + String(number, radix: 16))  // 0xff`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Format Specifiers</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Specifier</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%d</td>
          <td className="border border-gray-300 px-4 py-2">Integer</td>
          <td className="border border-gray-300 px-4 py-2">42</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%f</td>
          <td className="border border-gray-300 px-4 py-2">Float/Double</td>
          <td className="border border-gray-300 px-4 py-2">3.140000</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%.2f</td>
          <td className="border border-gray-300 px-4 py-2">2 decimal places</td>
          <td className="border border-gray-300 px-4 py-2">3.14</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%e</td>
          <td className="border border-gray-300 px-4 py-2">Scientific notation</td>
          <td className="border border-gray-300 px-4 py-2">3.14e+00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%05d</td>
          <td className="border border-gray-300 px-4 py-2">Zero-padded</td>
          <td className="border border-gray-300 px-4 py-2">00042</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> For user-facing number display, use <code>NumberFormatter</code>
        as it respects the user's locale settings for decimal separators, grouping, and currency.
      </p>
    </div>
  </div>
);

export default SwiftNumberOutput;
