import React from "react";

const KotlinFunctions: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kotlin Functions
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A function is a block of code that only runs when it is called. 
      You can pass data, known as parameters, into a function. Functions are used to perform actions and are also known as methods.
    </p>

    <h2 className="text-2xl font-bold mt-6">Predefined Functions</h2>
    <p className="text-lg mt-2">
      For example, <code>println()</code> is a predefined function used to output text to the screen:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun main() {
  println("Hello World")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Create Your Own Function</h2>
    <p className="text-lg  mt-2">
      Use the <code>fun</code> keyword followed by the function name and parentheses:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction() {
  println("I just got executed!")
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Call a Function</h2>
    <p className="text-lg  mt-2">
      To execute a function, write its name followed by parentheses:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun main() {
  myFunction() // Call myFunction
}
// Outputs "I just got executed!"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Call a Function Multiple Times</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun main() {
  myFunction()
  myFunction()
  myFunction()
}
// Outputs the message 3 times`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Function Parameters</h2>
    <p className="text-lg  mt-2">
      You can pass information to functions using parameters. Specify the parameter name and type inside parentheses:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction(fname: String) {
  println(fname + " Doe")
}

fun main() {
  myFunction("John")
  myFunction("Jane")
  myFunction("George")
}
// Outputs:
// John Doe
// Jane Doe
// George Doe`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Parameters</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction(fname: String, age: Int) {
  println(fname + " is " + age)
}

fun main() {
  myFunction("John", 35)
  myFunction("Jane", 32)
  myFunction("George", 15)
}
// Outputs:
// John is 35
// Jane is 32
// George is 15`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Return Values</h2>
    <p className="text-lg mt-2">
      Functions can also return values using the <code>return</code> keyword. Specify the return type after the parentheses:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction(x: Int): Int {
  return (x + 5)
}

fun main() {
  var result = myFunction(3)
  println(result)
}
// Outputs 8`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Return Values with Two Parameters</h2>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction(x: Int, y: Int): Int {
  return (x + y)
}

fun main() {
  var result = myFunction(3, 5)
  println(result)
}
// Outputs 8`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Shorter Syntax for Return Values</h2>
    <p className="text-lg  mt-2">
      Kotlin allows a shorter syntax using the <code>=</code> operator without specifying the return type:
    </p>
    <pre className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      <code>{`fun myFunction(x: Int, y: Int) = x + y

fun main() {
  var result = myFunction(3, 5)
  println(result)
}
// Outputs 8`}</code>
    </pre>
  </div>
);

export default KotlinFunctions;
