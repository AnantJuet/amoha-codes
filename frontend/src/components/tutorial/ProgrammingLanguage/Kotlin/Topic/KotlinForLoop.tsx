import React from "react";

const KotlinForLoop: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kotlin For Loop
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <code>for</code> loop in Kotlin is used to iterate through arrays, ranges, collections,
      and anything that provides an iterator. Use the <code>in</code> operator to iterate through elements.
    </p>

    <h2 className="text-2xl font-bold mt-6">Loop Through Array of Strings</h2>
    <p className="text-lg mt-2">
      Output all elements in the <code>cars</code> array:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
for (x in cars) {
    println(x)
}

// Output:
// Volvo
// BMW
// Ford
// Mazda`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Array of Integers</h2>
    <p className="text-lg mt-2">
      Loop through an array of integers:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val nums = arrayOf(1, 5, 10, 15, 20)
for (x in nums) {
    println(x)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Ranges</h2>
    <p className="text-lg mt-2">
      Kotlin provides a convenient way to loop through number ranges:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Loop from 1 to 5 (inclusive)
for (i in 1..5) {
    print(i)  // Output: 12345
}

// Loop from 1 to 4 (excluding 5)
for (i in 1 until 5) {
    print(i)  // Output: 1234
}

// Loop in reverse
for (i in 5 downTo 1) {
    print(i)  // Output: 54321
}

// Loop with step
for (i in 1..10 step 2) {
    print(i)  // Output: 13579
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop with Index</h2>
    <p className="text-lg mt-2">
      Use <code>withIndex()</code> to get both index and value:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val fruits = arrayOf("Apple", "Banana", "Cherry")

for ((index, value) in fruits.withIndex()) {
    println("Index $index: $value")
}

// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Cherry`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Maps</h2>
    <p className="text-lg mt-2">
      Iterate through key-value pairs in a map:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val ages = mapOf("Alice" to 25, "Bob" to 30, "Charlie" to 35)

for ((name, age) in ages) {
    println("$name is $age years old")
}

// Output:
// Alice is 25 years old
// Bob is 30 years old
// Charlie is 35 years old`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through Characters</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val text = "Kotlin"

for (char in text) {
    println(char)
}

// Loop through characters with index
for ((index, char) in text.withIndex()) {
    println("$index: $char")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">forEach Alternative</h2>
    <p className="text-lg mt-2">
      You can also use the <code>forEach</code> function:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val numbers = listOf(1, 2, 3, 4, 5)

// Using forEach
numbers.forEach { println(it) }

// Using forEach with index
numbers.forEachIndexed { index, value ->
    println("$index: $value")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Traditional For Loop</h2>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
      <p className="text-yellow-700">
        <strong>Note:</strong> Unlike Java and other programming languages, Kotlin does not have a traditional
        C-style <code>for(i = 0; i &lt; n; i++)</code> loop. Instead, use ranges with the <code>in</code>
        operator for similar functionality.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Break and Continue</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`// Using break
for (i in 1..10) {
    if (i == 5) break
    println(i)  // Output: 1234
}

// Using continue
for (i in 1..5) {
    if (i == 3) continue
    println(i)  // Output: 1245
}`}
    </pre>
  </div>
);

export default KotlinForLoop;
