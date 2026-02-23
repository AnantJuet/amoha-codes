import React from "react";

const KotlinIfElse: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin If...Else
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Kotlin supports familiar comparison conditions, such as: &lt;, &lt;=, &gt;, &gt;=, ==, !=. 
      These can be used to perform different actions based on conditions.
    </p>

    <h2 className="text-2xl font-bold mt-6">If Statement</h2>
    <p className="text-lg  mt-2">
      Use <code>if</code> to execute a block of code when a condition is true:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`if (20 > 18) {
  println("20 is greater than 18")
}`}</code>
    </pre>

    <p className="text-lg  mt-2">
      You can also test variables:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val x = 20
val y = 18
if (x > y) {
  println("x is greater than y")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Else Statement</h2>
    <p className="text-lg  mt-2">
      Use <code>else</code> to execute a block of code if the condition is false:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val time = 20
if (time < 18) {
  println("Good day.")
} else {
  println("Good evening.")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Else If Statement</h2>
    <p className="text-lg  mt-2">
      Use <code>else if</code> to specify a new condition if the first one is false:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val time = 22
if (time < 10) {
  println("Good morning.")
} else if (time < 20) {
  println("Good day.")
} else {
  println("Good evening.")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">If...Else as Expressions</h2>
    <p className="text-lg  mt-2">
      In Kotlin, <code>if</code> can be used as an expression to assign a value to a variable:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`val time = 20
val greeting = if (time < 18) {
  "Good day."
} else {
  "Good evening."
}
println(greeting)`}</code>
    </pre>

    <p className="text-lg  mt-2">
      You can omit curly braces <code>{}</code> if the <code>if</code> has only one statement:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun main() {
  val time = 20
  val greeting = if (time < 18) "Good day." else "Good evening."
  println(greeting)
}`}</code>
    </pre>
  </div>
);

export default KotlinIfElse;
