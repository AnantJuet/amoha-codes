import React from "react";

const KotlinRanges: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Ranges
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      With the <code>for</code> loop, you can create ranges of values using <code>..</code>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Range of Characters</h2>
    <p className="text-lg  mt-2">
      Example: Print the alphabet from 'a' to 'x':
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`for (chars in 'a'..'x') {
  println(chars)
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Range of Numbers</h2>
    <p className="text-lg  mt-2">
      Example: Print numbers from 5 to 15:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`for (nums in 5..15) {
  println(nums)
}`}</code>
    </pre>
    <p className="text-lg  mt-2">
      <strong>Note:</strong> The first and last value is included in the range.
    </p>

    <h2 className="text-2xl font-bold mt-6">Check if a Value Exists</h2>
    <p className="text-lg  mt-2">
      Use the <code>in</code> operator to check if a value exists in a range or array:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val nums = arrayOf(2, 4, 6, 8)
if (2 in nums) {
  println("It exists!")
} else {
  println("It does not exist.")
}`}</code>
    </pre>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
if ("Volvo" in cars) {
  println("It exists!")
} else {
  println("It does not exist.")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Break or Continue in a Range</h2>
    <p className="text-lg  mt-2">
      You can also use <code>break</code> or <code>continue</code> inside a <code>for</code> loop with ranges.
    </p>

    <p className="text-lg  mt-2">Example: Stop the loop when <code>nums</code> is equal to 10:</p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`for (nums in 5..15) {
  if (nums == 10) {
    break
  }
  println(nums)
}`}</code>
    </pre>

    <p className="text-lg  mt-2">Example: Skip the value of 10 in the loop:</p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`for (nums in 5..15) {
  if (nums == 10) {
    continue
  }
  println(nums)
}`}</code>
    </pre>
  </div>
);

export default KotlinRanges;
