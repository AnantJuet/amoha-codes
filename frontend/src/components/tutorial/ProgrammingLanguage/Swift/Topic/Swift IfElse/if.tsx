import React from "react";

const SwiftIf: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift If Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <code>if</code> statement in Swift allows you to execute code conditionally
      based on whether an expression evaluates to <code>true</code>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic If Syntax</h2>
    <p className="text-lg leading-relaxed mt-2">
      Run a block of code only when a condition evaluates to true:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let temperature = 25

if temperature > 20 {
    print("It's warm outside!")
}
// Output: It's warm outside!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
    <p className="text-lg leading-relaxed mt-2">
      Swift supports these comparison operators in conditions:
    </p>

    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">==</td>
          <td className="border border-gray-300 px-4 py-2">Equal to</td>
          <td className="border border-gray-300 px-4 py-2">x == y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!=</td>
          <td className="border border-gray-300 px-4 py-2">Not equal to</td>
          <td className="border border-gray-300 px-4 py-2">x != y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;</td>
          <td className="border border-gray-300 px-4 py-2">Greater than</td>
          <td className="border border-gray-300 px-4 py-2">x &gt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;</td>
          <td className="border border-gray-300 px-4 py-2">Less than</td>
          <td className="border border-gray-300 px-4 py-2">x &lt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;=</td>
          <td className="border border-gray-300 px-4 py-2">Greater than or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &gt;= y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;=</td>
          <td className="border border-gray-300 px-4 py-2">Less than or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &lt;= y</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Multiple Conditions</h2>
    <p className="text-lg leading-relaxed mt-2">
      Combine conditions using logical operators:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 25
let hasLicense = true

// AND operator (&&)
if age >= 18 && hasLicense {
    print("You can drive!")
}

// OR operator (||)
let isWeekend = true
let isHoliday = false
if isWeekend || isHoliday {
    print("No work today!")
}

// NOT operator (!)
let isRaining = false
if !isRaining {
    print("Let's go outside!")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">If with Optional Binding</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>if let</code> to safely unwrap optionals:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let possibleNumber: String? = "123"

if let number = Int(possibleNumber ?? "") {
    print("The number is \\(number)")
} else {
    print("Could not convert to number")
}

// Multiple optional bindings
let name: String? = "Alice"
let age: Int? = 25

if let name = name, let age = age {
    print("\\(name) is \\(age) years old")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Check user authentication
let isLoggedIn = true
if isLoggedIn {
    print("Welcome back!")
}

// Validate input
let password = "secret123"
if password.count >= 8 {
    print("Password is long enough")
}

// Check array is not empty
let items = ["Apple", "Banana"]
if !items.isEmpty {
    print("Cart has \\(items.count) items")
}`}
    </pre>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> In Swift, the condition must be a Boolean expression.
        Unlike some languages, you cannot use non-Boolean values like integers directly
        in conditions (e.g., <code>if count</code> won't work; use <code>if count != 0</code>).
      </p>
    </div>
  </div>
);

export default SwiftIf;
