import React from "react";

const KotlinOutput: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin Output (Print Text)
    </h1>

    <p className="text-lg  mt-6 leading-relaxed">
      The <b>println()</b> function in Kotlin is used to output values or print
      text on the screen.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Print Text
    </h2>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main() {
  println("Hello World")
}`}</pre>
    </div>

    <p className="text-lg  mt-6 leading-relaxed">
      You can add as many <b>println()</b> functions as you want. Each{" "}
      <b>println()</b> adds a new line after printing text.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Multiple println() Functions
    </h2>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main() {
  println("Hello World!")
  println("I am learning Kotlin.")
  println("It is awesome!")
}`}</pre>
    </div>

    <p className="text-lg  mt-6 leading-relaxed">
      You can also print numbers or perform calculations directly inside{" "}
      <b>println()</b>.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Print Numbers
    </h2>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main() {
  println(3 + 3)
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      The print() Function
    </h2>

    <p className="text-lg  mt-4 leading-relaxed">
      The <b>print()</b> function works the same as <b>println()</b>, except it
      does <b>not</b> insert a new line after the output. This means all printed
      text will appear on the same line.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Using print()
    </h2>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <pre>{`fun main() {
  print("Hello World! ")
  print("I am learning Kotlin. ")
  print("It is awesome!")
}`}</pre>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl mt-6">
      <p className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
        💡 <b>Tip:</b> Use <b>println()</b> when you want output on separate
        lines, and <b>print()</b> when you want the output on the same line.
      </p>
    </div>
  </div>
);

export default KotlinOutput;
