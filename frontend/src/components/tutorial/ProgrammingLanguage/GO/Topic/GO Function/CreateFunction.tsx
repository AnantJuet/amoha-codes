import React from "react";

const GoFunctions: React.FC = () => (
  <div className="mt-17 space-y-6 dark:text-white">

    {/* Heading */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2  dark:text-white">
      Go Functions
    </h1>

    {/* Intro */}
    <p className="text-lg leading-relaxed  dark:text-white">
      A function is a block of statements that can be used repeatedly in a program.
    </p>
    <p className="leading-relaxed  dark:text-white">
      A function will not execute automatically when a page loads.
    </p>
    <p className="leading-relaxed  dark:text-white">
      A function will be executed by a call to the function.
    </p>

    {/* Create a Function */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">
      Create a Function
    </h2>

    <p className="leading-relaxed  dark:text-white">
      To create (declare) a function in Go:
    </p>

    <ul className="list-disc ml-6  dark:text-white">
      <li>Use the <b>func</b> keyword.</li>
      <li>Specify a name for the function followed by parentheses <code>()</code>.</li>
      <li>Add code inside curly braces <code>{`{ }`}</code>.</li>
    </ul>

    {/* Syntax */}
    <h3 className="text-xl font-semibold  dark:text-white">Syntax</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`func FunctionName() {
  // code to be executed
}`}
    </pre>

    {/* Call a Function */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">
      Call a Function
    </h2>

    <p className="leading-relaxed  dark:text-white">
      Functions are not executed immediately. They are “saved for later use” and run only when called.
    </p>

    <p className="leading-relaxed  dark:text-white">
      In the example below, we create a function named <b>myMessage()</b> that prints text.  
      To call it, just write its name followed by <code>()</code>.
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myMessage() {
  fmt.Println("I just got executed!")
}

func main() {
  myMessage() // call the function
}`}
    </pre>

    <p className="mt-2  dark:text-white">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
I just got executed!
    </pre>

    {/* Call Multiple Times */}
    <h3 className="text-xl font-semibold mt-6  dark:text-white">
      A function can be called multiple times.
    </h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myMessage() {
  fmt.Println("I just got executed!")
}

func main() {
  myMessage()
  myMessage()
  myMessage()
}`}
    </pre>

    <p className="mt-2  dark:text-white">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
I just got executed!
I just got executed!
I just got executed!
    </pre>

  </div>
);

export default GoFunctions;
