import React from "react";

const SwiftBoolean: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Booleans
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A Boolean in Swift represents one of two values: <code>true</code> or <code>false</code>.
      Booleans are essential for controlling program flow through conditions and loops.
    </p>

    <h2 className="text-2xl font-bold mt-6">Declaring Booleans</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Explicit type declaration
let isActive: Bool = true
let isLoggedIn: Bool = false

// Type inference
let hasPermission = true
let isExpired = false

print(isActive)       // true
print(type(of: isActive))  // Bool`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
    <p className="text-lg leading-relaxed mt-2">
      Swift provides relational operators that return Boolean values:
    </p>

    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Operator</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
          <th className="border border-gray-300 px-4 py-2">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">==</td>
          <td className="border border-gray-300 px-4 py-2">Equal to</td>
          <td className="border border-gray-300 px-4 py-2">5 == 5</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!=</td>
          <td className="border border-gray-300 px-4 py-2">Not equal to</td>
          <td className="border border-gray-300 px-4 py-2">5 != 3</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;</td>
          <td className="border border-gray-300 px-4 py-2">Greater than</td>
          <td className="border border-gray-300 px-4 py-2">5 &gt; 3</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;</td>
          <td className="border border-gray-300 px-4 py-2">Less than</td>
          <td className="border border-gray-300 px-4 py-2">3 &lt; 5</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;=</td>
          <td className="border border-gray-300 px-4 py-2">Greater than or equal</td>
          <td className="border border-gray-300 px-4 py-2">5 &gt;= 5</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;=</td>
          <td className="border border-gray-300 px-4 py-2">Less than or equal</td>
          <td className="border border-gray-300 px-4 py-2">3 &lt;= 5</td>
          <td className="border border-gray-300 px-4 py-2">true</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Comparison Examples</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let a = 5, b = 3

print(a > b)    // true
print(a == b)   // false
print(a != b)   // true
print(a >= 5)   // true
print(b <= 3)   // true

// String comparison
let name1 = "Alice"
let name2 = "Bob"
print(name1 < name2)  // true (alphabetical)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
    <p className="text-lg leading-relaxed mt-2">
      Combine Boolean expressions using logical operators:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let isAdult = true
let hasID = true
let isMember = false

// AND operator (&&) - both must be true
print(isAdult && hasID)      // true

// OR operator (||) - at least one must be true
print(isAdult || isMember)   // true

// NOT operator (!) - inverts the value
print(!isMember)             // true

// Complex expressions
let canEnter = (isAdult && hasID) || isMember
print(canEnter)              // true`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Booleans in Conditions</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let temperature = 25
let isWarm = temperature > 20

if isWarm {
    print("It's warm outside!")
}

// Direct comparison in condition
if temperature > 30 {
    print("It's hot!")
} else if temperature > 20 {
    print("It's pleasant")
} else {
    print("It's cool")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Boolean Toggle</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var lightOn = true
print(lightOn)  // true

// Toggle using NOT operator
lightOn = !lightOn
print(lightOn)  // false

// Using toggle() method
lightOn.toggle()
print(lightOn)  // true`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Authentication check
let isLoggedIn = true
let isVerified = true
let canAccessContent = isLoggedIn && isVerified

// Array check
let items = ["apple", "banana"]
let hasItems = !items.isEmpty
let isValidSize = items.count <= 10

// Optional check
let optionalValue: String? = "Hello"
let hasValue = optionalValue != nil`}
    </pre>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> Unlike some languages, Swift doesn't allow non-Boolean values
        in conditions. You cannot write <code>if someNumber</code>; you must explicitly compare
        like <code>if someNumber != 0</code>.
      </p>
    </div>
  </div>
);

export default SwiftBoolean;
