import React from "react";

const SwiftIfElse: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift If...Else Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Control the flow of your program with <code>if</code>, <code>else if</code>, and <code>else</code>.
      Swift's conditional statements allow you to execute different code based on whether conditions
      are true or false.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`if condition {
    // Code when condition is true
} else {
    // Code when condition is false
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Simple If-Else Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 20

if age >= 18 {
    print("You are an adult")
} else {
    print("You are a minor")
}

// Output: You are an adult`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">If...Else If...Else Chain</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>else if</code> to check multiple conditions in sequence:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let score = 82

if score >= 90 {
    print("Grade: A")
} else if score >= 80 {
    print("Grade: B")
} else if score >= 70 {
    print("Grade: C")
} else if score >= 60 {
    print("Grade: D")
} else {
    print("Grade: F")
}

// Output: Grade: B`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
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
          <td className="border border-gray-300 px-4 py-2">Greater or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &gt;= y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;=</td>
          <td className="border border-gray-300 px-4 py-2">Less or equal</td>
          <td className="border border-gray-300 px-4 py-2">x &lt;= y</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
    <p className="text-lg leading-relaxed mt-2">
      Combine multiple conditions using logical operators:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 25
let hasLicense = true
let hasInsurance = true

// AND operator (&&) - both must be true
if age >= 18 && hasLicense {
    print("Can drive")
}

// OR operator (||) - at least one must be true
if age < 18 || !hasLicense {
    print("Cannot drive")
}

// Combining multiple conditions
if age >= 18 && hasLicense && hasInsurance {
    print("Fully authorized to drive")
}

// Using NOT operator (!)
if !hasInsurance {
    print("Insurance required")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Optional Binding with If-Let</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let possibleNumber: String? = "123"

// Safely unwrap optional with if-let
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

    <h2 className="text-2xl font-bold mt-6">Ternary Conditional Operator</h2>
    <p className="text-lg leading-relaxed mt-2">
      For simple if-else assignments, use the ternary operator:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let temperature = 25

// Long form
let weather: String
if temperature > 20 {
    weather = "Warm"
} else {
    weather = "Cold"
}

// Short form with ternary operator
let weatherShort = temperature > 20 ? "Warm" : "Cold"

print(weather)       // Warm
print(weatherShort)  // Warm`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Real-World Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`func checkLoginStatus(
    isLoggedIn: Bool,
    isVerified: Bool,
    isPremium: Bool
) {
    if !isLoggedIn {
        print("Please log in to continue")
    } else if !isVerified {
        print("Please verify your email")
    } else if isPremium {
        print("Welcome, Premium Member!")
    } else {
        print("Welcome! Upgrade to Premium for more features")
    }
}

checkLoginStatus(isLoggedIn: true, isVerified: true, isPremium: false)
// Output: Welcome! Upgrade to Premium for more features`}
    </pre>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> Swift requires conditions to be Boolean expressions. Unlike some
        languages, you cannot use integers or other types directly in conditions. Use explicit
        comparisons like <code>count != 0</code> instead of just <code>count</code>.
      </p>
    </div>
  </div>
);

export default SwiftIfElse;
