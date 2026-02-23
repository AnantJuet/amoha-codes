import React from "react";

const SwiftArrays: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Arrays
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In Swift, <strong>arrays</strong> store ordered collections of values of the same type.
      Arrays are <strong>value types</strong>, which means they are copied on assignment (copy-on-write
      for efficiency).
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Array literal
var numbers = [10, 20, 30]
let colors = ["Red", "Green", "Blue"]

// Empty array with type annotation
var emptyInts: [Int] = []
var emptyStrings = [String]()

// Array with default values
var zeros = Array(repeating: 0, count: 5)
// [0, 0, 0, 0, 0]

// Array with range
let range = Array(1...5)
// [1, 2, 3, 4, 5]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let fruits = ["Apple", "Banana", "Cherry", "Date"]

// Access by index (0-based)
print(fruits[0])      // Apple
print(fruits[2])      // Cherry

// First and last elements
print(fruits.first!)  // Apple
print(fruits.last!)   // Date

// Safe access with optional
if let first = fruits.first {
    print(first)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Array Properties</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let numbers = [10, 20, 30, 40, 50]

print(numbers.count)     // 5 (number of elements)
print(numbers.isEmpty)   // false
print(numbers.first)     // Optional(10)
print(numbers.last)      // Optional(50)

// Check if index is valid
let index = 2
if numbers.indices.contains(index) {
    print(numbers[index])  // 30
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modifying Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var fruits = ["Apple", "Banana"]

// Add elements
fruits.append("Cherry")           // Add to end
fruits.insert("Apricot", at: 0)   // Insert at index
fruits += ["Date", "Elderberry"]  // Concatenate

// Remove elements
let removed = fruits.removeLast()  // Remove and return last
fruits.remove(at: 0)               // Remove at index
fruits.removeAll()                 // Remove all elements

// Update elements
var numbers = [1, 2, 3]
numbers[0] = 10
numbers[1...2] = [20, 30, 40]  // Replace range
print(numbers)  // [10, 20, 30, 40]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Iterating Over Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let colors = ["Red", "Green", "Blue"]

// Simple iteration
for color in colors {
    print(color)
}

// With index using enumerated()
for (index, color) in colors.enumerated() {
    print("\\(index): \\(color)")
}
// 0: Red
// 1: Green
// 2: Blue

// Using forEach
colors.forEach { color in
    print(color)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Searching Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let numbers = [5, 10, 15, 20, 25]

// Check if element exists
print(numbers.contains(15))      // true

// Find index of element
if let index = numbers.firstIndex(of: 15) {
    print("Found at index \\(index)")  // Found at index 2
}

// Find with condition
if let found = numbers.first(where: { $0 > 12 }) {
    print(found)  // 15
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Transforming Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let numbers = [1, 2, 3, 4, 5]

// Map - transform each element
let doubled = numbers.map { $0 * 2 }
print(doubled)  // [2, 4, 6, 8, 10]

// Filter - keep elements matching condition
let evens = numbers.filter { $0 % 2 == 0 }
print(evens)  // [2, 4]

// Reduce - combine into single value
let sum = numbers.reduce(0, +)
print(sum)  // 15

// Chaining
let result = numbers
    .filter { $0 % 2 == 0 }
    .map { $0 * 10 }
print(result)  // [20, 40]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Sorting Arrays</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`var numbers = [5, 2, 8, 1, 9]

// Sort in place (mutating)
numbers.sort()
print(numbers)  // [1, 2, 5, 8, 9]

// Sort descending
numbers.sort(by: >)
print(numbers)  // [9, 8, 5, 2, 1]

// Return sorted copy (non-mutating)
let original = [5, 2, 8, 1, 9]
let sorted = original.sorted()
print(sorted)    // [1, 2, 5, 8, 9]
print(original)  // [5, 2, 8, 1, 9] (unchanged)

// Reverse
let reversed = numbers.reversed()
print(Array(reversed))`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Common Array Methods</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Method</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>append(_:)</code></td>
          <td className="border border-gray-300 px-4 py-2">Add element to end</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>insert(_:at:)</code></td>
          <td className="border border-gray-300 px-4 py-2">Insert at specific index</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>remove(at:)</code></td>
          <td className="border border-gray-300 px-4 py-2">Remove element at index</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>contains(_:)</code></td>
          <td className="border border-gray-300 px-4 py-2">Check if element exists</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>firstIndex(of:)</code></td>
          <td className="border border-gray-300 px-4 py-2">Find index of element</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>sort()</code></td>
          <td className="border border-gray-300 px-4 py-2">Sort array in place</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>shuffle()</code></td>
          <td className="border border-gray-300 px-4 py-2">Randomize order</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Note:</strong> Arrays in Swift are type-safe. You cannot mix different types
        in the same array. For mixed types, use <code>[Any]</code> but this loses type safety.
      </p>
    </div>
  </div>
);

export default SwiftArrays;
