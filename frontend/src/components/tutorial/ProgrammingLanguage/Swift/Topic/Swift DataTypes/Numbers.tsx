import React from "react";

const SwiftNumbers: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Numbers
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Swift provides both <strong>integer</strong> types (such as <code>Int</code>) and
      <strong> floating-point</strong> types (such as <code>Double</code>). These numeric
      types are type-safe and offer excellent performance.
    </p>

    <h2 className="text-2xl font-bold mt-6">Integer Types</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Type</th>
          <th className="border border-gray-300 px-4 py-2">Size</th>
          <th className="border border-gray-300 px-4 py-2">Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Int8</td>
          <td className="border border-gray-300 px-4 py-2">8-bit</td>
          <td className="border border-gray-300 px-4 py-2">-128 to 127</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Int16</td>
          <td className="border border-gray-300 px-4 py-2">16-bit</td>
          <td className="border border-gray-300 px-4 py-2">-32,768 to 32,767</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Int32</td>
          <td className="border border-gray-300 px-4 py-2">32-bit</td>
          <td className="border border-gray-300 px-4 py-2">-2.1B to 2.1B</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Int64 / Int</td>
          <td className="border border-gray-300 px-4 py-2">64-bit</td>
          <td className="border border-gray-300 px-4 py-2">Very large range</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">UInt</td>
          <td className="border border-gray-300 px-4 py-2">64-bit</td>
          <td className="border border-gray-300 px-4 py-2">0 to very large</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Declaring Integers</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Type inference (defaults to Int)
let age = 25
let count = 100

// Explicit type declaration
let smallNumber: Int8 = 42
let bigNumber: Int64 = 9_223_372_036_854_775_807

// Unsigned integers (positive only)
let positiveOnly: UInt = 100

// Using underscores for readability
let million = 1_000_000
let binary = 0b1010_1010
let hex = 0xFF_FF`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Floating-Point Types</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Type</th>
          <th className="border border-gray-300 px-4 py-2">Precision</th>
          <th className="border border-gray-300 px-4 py-2">Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Float</td>
          <td className="border border-gray-300 px-4 py-2">32-bit (~6 digits)</td>
          <td className="border border-gray-300 px-4 py-2">Less precision, less memory</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Double</td>
          <td className="border border-gray-300 px-4 py-2">64-bit (~15 digits)</td>
          <td className="border border-gray-300 px-4 py-2">Default, high precision</td>
        </tr>
      </tbody>
    </table>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Type inference defaults to Double
let pi = 3.14159
let temperature = 98.6

// Explicit Float declaration
let floatValue: Float = 3.14

// Scientific notation
let avogadro = 6.022e23
let planck = 6.626e-34`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operations</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let a = 10, b = 3

// Basic operations
print(a + b)   // 13 (addition)
print(a - b)   // 7 (subtraction)
print(a * b)   // 30 (multiplication)
print(a / b)   // 3 (integer division)
print(a % b)   // 1 (remainder/modulo)

// Floating-point division
print(Double(a) / Double(b))  // 3.333...

// Compound assignment
var x = 10
x += 5   // x = 15
x -= 3   // x = 12
x *= 2   // x = 24
x /= 4   // x = 6`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Type Conversion</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let intValue = 42
let doubleValue = 3.14

// Int to Double
let converted1 = Double(intValue)  // 42.0

// Double to Int (truncates decimal)
let converted2 = Int(doubleValue)  // 3

// String to Number
let str = "123"
if let number = Int(str) {
    print(number)  // 123
}

// Number to String
let numStr = String(intValue)  // "42"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Number Literals</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Decimal (base 10)
let decimal = 17

// Binary (base 2) - prefix 0b
let binary = 0b10001  // = 17

// Octal (base 8) - prefix 0o
let octal = 0o21      // = 17

// Hexadecimal (base 16) - prefix 0x
let hex = 0x11        // = 17

// All represent the same value: 17`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Useful Properties & Methods</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Min and max values
print(Int.min)     // Minimum Int value
print(Int.max)     // Maximum Int value
print(Double.pi)   // 3.141592653589793

// Rounding
let value = 3.7
print(value.rounded())       // 4.0
print(value.rounded(.down))  // 3.0
print(value.rounded(.up))    // 4.0

// Absolute value
print(abs(-42))    // 42

// Power and square root
import Foundation
print(pow(2.0, 10.0))  // 1024.0
print(sqrt(16.0))      // 4.0`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Use <code>Int</code> for whole numbers and <code>Double</code>
        for decimal numbers in most cases. Swift defaults to these types for a reason - they
        provide the best balance of performance and range.
      </p>
    </div>
  </div>
);

export default SwiftNumbers;
