import React from "react";

const KotlinArrays: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kotlin Arrays
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Arrays are used to store multiple values in a single variable, instead of creating separate variables for each value.
      To create an array, use the <code>arrayOf()</code> function and place the values in a comma-separated list inside it.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating an Array</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <p className="text-lg mt-2">
      Access an array element by its index number inside square brackets. Array indexes start at 0.
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
println(cars[0])
// Outputs "Volvo"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Changing an Array Element</h2>
    <p className="text-lg mt-2">
      To change the value of a specific element, refer to its index number:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`cars[0] = "Opel"
println(cars[0])
// Now outputs "Opel" instead of "Volvo"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Array Length / Size</h2>
    <p className="text-lg mt-2">
      Use the <code>size</code> property to find out how many elements an array has:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
println(cars.size)
// Outputs 4`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Check if an Element Exists</h2>
    <p className="text-lg mt-2">
      Use the <code>in</code> operator to check if an element exists in an array:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
if ("Volvo" in cars) {
  println("It exists!")
} else {
  println("It does not exist.")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through an Array</h2>
    <p className="text-lg mt-2">
      You can loop through all array elements using a <code>for</code> loop:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val cars = arrayOf("Volvo", "BMW", "Ford", "Mazda")
for (x in cars) {
  println(x)
}`}</code>
    </pre>
  </div>
);

export default KotlinArrays;
