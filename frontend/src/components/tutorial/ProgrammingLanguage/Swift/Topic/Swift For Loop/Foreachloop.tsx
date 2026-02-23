import React from "react";

const SwiftForEachLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift For-Each Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <code>forEach</code> method in Swift provides a convenient way to iterate over sequences
      using closures. It's an alternative to the traditional <code>for-in</code> loop.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic forEach Syntax</h2>
    <p className="text-lg leading-relaxed mt-2">
      Pass a closure to <code>forEach</code> to process each element of a sequence. The closure
      receives each element as a parameter.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Basic forEach with array
let fruits = ["Apple", "Banana", "Cherry"]
fruits.forEach { fruit in
    print(fruit)
}

// Output:
// Apple
// Banana
// Cherry`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using Shorthand Argument Names</h2>
    <p className="text-lg leading-relaxed mt-2">
      Swift provides shorthand argument names like <code>$0</code>, <code>$1</code>, etc. for closure parameters:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Using shorthand $0
["A", "B", "C"].forEach { print($0) }

// With numbers
[1, 2, 3, 4, 5].forEach { print($0 * 2) }
// Output: 2, 4, 6, 8, 10`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">forEach with Dictionaries</h2>
    <p className="text-lg leading-relaxed mt-2">
      When iterating over dictionaries, you get key-value pairs:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let scores = ["Alice": 95, "Bob": 87, "Charlie": 92]

scores.forEach { (name, score) in
    print("\\(name) scored \\(score)")
}

// Or using shorthand:
scores.forEach { print("\\($0.key): \\($0.value)") }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">forEach with Enumerated</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>enumerated()</code> to get both index and element:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let colors = ["Red", "Green", "Blue"]

colors.enumerated().forEach { (index, color) in
    print("\\(index): \\(color)")
}

// Output:
// 0: Red
// 1: Green
// 2: Blue`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">forEach vs for-in Loop</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">forEach</th>
          <th className="border border-gray-300 px-4 py-2">for-in</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Cannot use <code>break</code> or <code>continue</code></td>
          <td className="border border-gray-300 px-4 py-2">Supports <code>break</code> and <code>continue</code></td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Uses closure syntax</td>
          <td className="border border-gray-300 px-4 py-2">Traditional loop syntax</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Good for simple iterations</td>
          <td className="border border-gray-300 px-4 py-2">More flexible for complex logic</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>return</code> exits current iteration</td>
          <td className="border border-gray-300 px-4 py-2"><code>return</code> exits the function</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Important Note: Early Exit</h2>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
      <p className="text-yellow-700">
        <strong>Warning:</strong> Using <code>return</code> inside <code>forEach</code> only skips the
        current iteration, not the entire loop. Use <code>for-in</code> with <code>break</code> if you
        need to exit early.
      </p>
    </div>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// return only skips current iteration
[1, 2, 3, 4, 5].forEach { num in
    if num == 3 { return }  // Skips 3, but continues with 4, 5
    print(num)
}
// Output: 1, 2, 4, 5`}
    </pre>
  </div>
);

export default SwiftForEachLoop;
