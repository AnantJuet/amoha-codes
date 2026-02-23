import React from "react";

const SwiftRepeatWhileLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Repeat-While Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <code>repeat-while</code> loop in Swift is similar to a do-while loop in other languages.
      It executes the loop body at least once before checking the condition, ensuring the code runs
      even if the condition is initially false.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`repeat {
    // Code to execute
} while condition`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Simple Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var attempts = 0

repeat {
    attempts += 1
    print("Attempt #\\(attempts)")
} while attempts < 3

// Output:
// Attempt #1
// Attempt #2
// Attempt #3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Repeat-While vs While</h2>
    <p className="text-lg leading-relaxed mt-2">
      The key difference is when the condition is checked:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// While loop - condition checked first
var count = 10
while count < 5 {
    print("This won't print")
    count += 1
}

// Repeat-while - code runs first, then condition checked
var count2 = 10
repeat {
    print("This prints once: \\(count2)")
    count2 += 1
} while count2 < 5

// Output: This prints once: 10`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Table</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">while</th>
          <th className="border border-gray-300 px-4 py-2">repeat-while</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Condition check</td>
          <td className="border border-gray-300 px-4 py-2">Before execution</td>
          <td className="border border-gray-300 px-4 py-2">After execution</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Minimum runs</td>
          <td className="border border-gray-300 px-4 py-2">0 times</td>
          <td className="border border-gray-300 px-4 py-2">1 time</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Best for</td>
          <td className="border border-gray-300 px-4 py-2">May not run at all</td>
          <td className="border border-gray-300 px-4 py-2">Must run at least once</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">User Input Validation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Simulating user input validation
var validInput = false
var attemptCount = 0

repeat {
    attemptCount += 1
    // Simulate getting input
    let userInput = attemptCount == 3 ? "valid" : "invalid"

    if userInput == "valid" {
        validInput = true
        print("Valid input received!")
    } else {
        print("Invalid input, try again...")
    }
} while !validInput && attemptCount < 5

// Output:
// Invalid input, try again...
// Invalid input, try again...
// Valid input received!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Menu System Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var choice = 0

repeat {
    print("Menu:")
    print("1. Option A")
    print("2. Option B")
    print("3. Exit")

    // Simulating user selection
    choice = Int.random(in: 1...3)
    print("Selected: \\(choice)")

    switch choice {
    case 1:
        print("Processing Option A...")
    case 2:
        print("Processing Option B...")
    case 3:
        print("Exiting...")
    default:
        print("Invalid choice")
    }
    print("---")
} while choice != 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Countdown Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var countdown = 5

repeat {
    print("\\(countdown)...")
    countdown -= 1
} while countdown > 0

print("Liftoff!")

// Output:
// 5...
// 4...
// 3...
// 2...
// 1...
// Liftoff!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Rolling Dice Until Target</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var rolls = 0
var diceValue = 0

repeat {
    diceValue = Int.random(in: 1...6)
    rolls += 1
    print("Roll \\(rolls): \\(diceValue)")
} while diceValue != 6

print("Got a 6 after \\(rolls) rolls!")`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><strong>Input validation:</strong> Keep asking until valid input is received</li>
      <li><strong>Menu systems:</strong> Show menu at least once, repeat until exit</li>
      <li><strong>Game loops:</strong> Play at least one round, continue while playing</li>
      <li><strong>Retry logic:</strong> Try an operation, retry on failure</li>
      <li><strong>Polling:</strong> Check status at least once, continue until condition met</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Warning:</strong> Always ensure your loop condition will eventually become false.
        Infinite loops will cause your program to hang. Include a maximum iteration count or
        timeout mechanism for safety.
      </p>
    </div>
  </div>
);

export default SwiftRepeatWhileLoop;
