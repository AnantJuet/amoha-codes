import React from "react";

const SwiftArithmeticOperators: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Arithmetic Operators
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Swift supports standard arithmetic operators for performing mathematical operations on numbers.
      These operators work with both integers and floating-point numbers.
    </p>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
          <th className="border border-gray-300 px-4 py-2">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">+</td>
          <td className="border border-gray-300 px-4 py-2">Addition</td>
          <td className="border border-gray-300 px-4 py-2">5 + 3</td>
          <td className="border border-gray-300 px-4 py-2">8</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">-</td>
          <td className="border border-gray-300 px-4 py-2">Subtraction</td>
          <td className="border border-gray-300 px-4 py-2">5 - 3</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">*</td>
          <td className="border border-gray-300 px-4 py-2">Multiplication</td>
          <td className="border border-gray-300 px-4 py-2">5 * 3</td>
          <td className="border border-gray-300 px-4 py-2">15</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">/</td>
          <td className="border border-gray-300 px-4 py-2">Division</td>
          <td className="border border-gray-300 px-4 py-2">10 / 3</td>
          <td className="border border-gray-300 px-4 py-2">3 (integer)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%</td>
          <td className="border border-gray-300 px-4 py-2">Remainder</td>
          <td className="border border-gray-300 px-4 py-2">10 % 3</td>
          <td className="border border-gray-300 px-4 py-2">1</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Basic Examples</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let a = 10, b = 3

// Basic arithmetic
print(a + b)   // 13 (addition)
print(a - b)   // 7 (subtraction)
print(a * b)   // 30 (multiplication)
print(a / b)   // 3 (integer division - truncates)
print(a % b)   // 1 (remainder)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Integer vs Floating-Point Division</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Integer division truncates toward zero
let intResult = 7 / 3
print(intResult)  // 2

// For decimal result, use Double
let doubleResult = 7.0 / 3.0
print(doubleResult)  // 2.333...

// Converting integers to Double for division
let a = 7, b = 3
let result = Double(a) / Double(b)
print(result)  // 2.333...`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Remainder Operator</h2>
    <p className="text-lg leading-relaxed mt-2">
      The remainder operator <code>%</code> returns what's left after division:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`print(9 % 4)   // 1 (9 = 4*2 + 1)
print(8 % 2)   // 0 (8 is evenly divisible by 2)
print(10 % 3)  // 1 (10 = 3*3 + 1)

// Check if a number is even or odd
let number = 17
if number % 2 == 0 {
    print("Even")
} else {
    print("Odd")
}
// Output: Odd

// With negative numbers
print(-9 % 4)  // -1
print(9 % -4)  // 1`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Unary Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Unary minus (negation)
let positive = 5
let negative = -positive
print(negative)  // -5

// Unary plus (no effect, but explicit)
let alsoPositive = +positive
print(alsoPositive)  // 5

// Toggle sign
var value = 10
value = -value
print(value)  // -10`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Compound Assignment Operators</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var x = 10

x += 5   // x = x + 5 → 15
print(x)

x -= 3   // x = x - 3 → 12
print(x)

x *= 2   // x = x * 2 → 24
print(x)

x /= 4   // x = x / 4 → 6
print(x)

x %= 4   // x = x % 4 → 2
print(x)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Operator Precedence</h2>
    <p className="text-lg leading-relaxed mt-2">
      Operators follow mathematical precedence (PEMDAS):
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Multiplication before addition
let result1 = 2 + 3 * 4
print(result1)  // 14 (not 20)

// Use parentheses to change order
let result2 = (2 + 3) * 4
print(result2)  // 20

// Complex expression
let result3 = 10 + 4 * 2 - 6 / 3
print(result3)  // 10 + 8 - 2 = 16`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Calculate area of rectangle
let width = 5, height = 3
let area = width * height
print("Area: \\(area)")  // Area: 15

// Calculate average
let scores = [85, 90, 78, 92, 88]
let sum = scores.reduce(0, +)
let average = Double(sum) / Double(scores.count)
print("Average: \\(average)")  // Average: 86.6

// Calculate percentage
let correct = 17, total = 20
let percentage = (Double(correct) / Double(total)) * 100
print("Score: \\(percentage)%")  // Score: 85.0%

// Temperature conversion (Celsius to Fahrenheit)
let celsius = 25.0
let fahrenheit = (celsius * 9/5) + 32
print("\\(celsius)°C = \\(fahrenheit)°F")  // 25.0°C = 77.0°F`}
    </pre>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Swift does not allow arithmetic operations between different numeric
        types. You must explicitly convert values to the same type before performing operations.
        For example, you cannot add an <code>Int</code> and a <code>Double</code> directly.
      </p>
    </div>
  </div>
);

export default SwiftArithmeticOperators;
