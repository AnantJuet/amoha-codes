import React from "react";

const SwiftElse: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Else Statement
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Use <code>else</code> to handle the false branch of a condition. The else block executes
      when the if condition evaluates to false.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic If-Else Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`if condition {
    // Executes when condition is true
} else {
    // Executes when condition is false
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Simple Example</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>else</code> to run an alternate block when the condition is false:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let hasAccess = false

if hasAccess {
    print("Welcome")
} else {
    print("Access Denied")
}

// Output: Access Denied`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Age Verification Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let age = 16

if age >= 18 {
    print("You can vote")
} else {
    print("You are too young to vote")
}

// Output: You are too young to vote`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Even/Odd Check</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let number = 7

if number % 2 == 0 {
    print("\\(number) is even")
} else {
    print("\\(number) is odd")
}

// Output: 7 is odd`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Working with Strings</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let username = ""

if username.isEmpty {
    print("Please enter a username")
} else {
    print("Welcome, \\(username)!")
}

// Output: Please enter a username`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Examples</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let score = 75
let passingScore = 60

if score >= passingScore {
    print("Congratulations! You passed.")
} else {
    print("Sorry, you did not pass.")
}

// Output: Congratulations! You passed.

// String comparison
let password = "secret123"
let correctPassword = "secret123"

if password == correctPassword {
    print("Login successful")
} else {
    print("Incorrect password")
}

// Output: Login successful`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using with Boolean Values</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let isLoggedIn = true
let isPremiumUser = false

if isLoggedIn {
    print("User dashboard")
} else {
    print("Please log in")
}

if isPremiumUser {
    print("Access to premium content")
} else {
    print("Upgrade to premium for full access")
}

// Output:
// User dashboard
// Upgrade to premium for full access`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">If-Else with Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let shoppingCart: [String] = []

if shoppingCart.isEmpty {
    print("Your cart is empty")
} else {
    print("You have \\(shoppingCart.count) items")
}

// Output: Your cart is empty`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ternary Operator Alternative</h2>
    <p className="text-lg leading-relaxed mt-2">
      For simple if-else assignments, use the ternary operator:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let temperature = 25

// Using if-else
let weather: String
if temperature > 20 {
    weather = "Warm"
} else {
    weather = "Cold"
}

// Using ternary operator (shorter)
let weatherShort = temperature > 20 ? "Warm" : "Cold"

print(weather)       // Warm
print(weatherShort)  // Warm`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Patterns</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Pattern</th>
          <th className="border border-gray-300 px-4 py-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Empty check</td>
          <td className="border border-gray-300 px-4 py-2"><code>if array.isEmpty else</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Nil check</td>
          <td className="border border-gray-300 px-4 py-2"><code>if value != nil else</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Range check</td>
          <td className="border border-gray-300 px-4 py-2"><code>if x &gt;= min && x &lt;= max else</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Boolean toggle</td>
          <td className="border border-gray-300 px-4 py-2"><code>if isEnabled else</code></td>
        </tr>
      </tbody>
    </table>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Keep your if-else blocks simple. If you have more than two branches,
        consider using <code>else if</code> or a <code>switch</code> statement for better readability.
      </p>
    </div>
  </div>
);

export default SwiftElse;
