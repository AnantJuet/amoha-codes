import React from "react";

const SwiftForLoop: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift For Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Use <code>for-in</code> to iterate over ranges, arrays, dictionaries, and other sequences.
      Swift's for loop is concise and expressive, making it easy to work with collections.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic For Loop Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`for item in collection {
    // Code to execute for each item
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Iterate a Range</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use a range to loop a fixed number of times. Swift provides two types of ranges:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Closed range (1 to 5, inclusive)
for i in 1...5 {
    print(i)
}
// Output: 1 2 3 4 5

// Half-open range (1 to 4, excludes 5)
for i in 1..<5 {
    print(i)
}
// Output: 1 2 3 4`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through an Array</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let fruits = ["Apple", "Banana", "Cherry"]

for fruit in fruits {
    print(fruit)
}
// Output:
// Apple
// Banana
// Cherry`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop with Index</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>enumerated()</code> to get both the index and value:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let colors = ["Red", "Green", "Blue"]

for (index, color) in colors.enumerated() {
    print("\\(index): \\(color)")
}
// Output:
// 0: Red
// 1: Green
// 2: Blue`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Dictionary</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let ages = ["Alice": 25, "Bob": 30, "Charlie": 35]

for (name, age) in ages {
    print("\\(name) is \\(age) years old")
}
// Output (order may vary):
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 35 years old`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using Stride</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use <code>stride</code> for custom step values:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Count by 2 (from 0 to 10)
for i in stride(from: 0, to: 10, by: 2) {
    print(i)  // 0, 2, 4, 6, 8
}

// Count backwards (from 10 to 0)
for i in stride(from: 10, through: 0, by: -2) {
    print(i)  // 10, 8, 6, 4, 2, 0
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ignoring Loop Variable</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use underscore when you don't need the loop variable:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Repeat action 5 times without using the counter
for _ in 1...5 {
    print("Hello!")
}
// Output: Hello! (5 times)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Where Clause (Filtering)</h2>
    <p className="text-lg leading-relaxed mt-2">
      Add a <code>where</code> clause to filter iterations:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Only process even numbers
for i in 1...10 where i % 2 == 0 {
    print(i)
}
// Output: 2 4 6 8 10

// Filter array elements
let numbers = [1, 5, 10, 15, 20]
for num in numbers where num > 8 {
    print(num)
}
// Output: 10 15 20`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through String Characters</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let word = "Swift"

for char in word {
    print(char)
}
// Output: S w i f t`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Range Types Summary</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Range Type</th>
          <th className="border border-gray-300 px-4 py-2">Syntax</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Closed Range</td>
          <td className="border border-gray-300 px-4 py-2"><code>1...5</code></td>
          <td className="border border-gray-300 px-4 py-2">Includes 1, 2, 3, 4, 5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Half-Open Range</td>
          <td className="border border-gray-300 px-4 py-2"><code>1..&lt;5</code></td>
          <td className="border border-gray-300 px-4 py-2">Includes 1, 2, 3, 4</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">One-Sided Range</td>
          <td className="border border-gray-300 px-4 py-2"><code>...5</code> or <code>2...</code></td>
          <td className="border border-gray-300 px-4 py-2">From start to 5 or from 2 to end</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> Unlike C-style languages, Swift doesn't have a traditional
        <code> for(i = 0; i &lt; n; i++)</code> loop. Use ranges with <code>for-in</code> instead,
        which is safer and more readable.
      </p>
    </div>
  </div>
);

export default SwiftForLoop;
