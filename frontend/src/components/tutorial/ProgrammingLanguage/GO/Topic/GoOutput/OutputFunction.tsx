import React from "react";

const GoOutputFunctions: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2">
      Go Output Functions
    </h1>

    <p className="text-lg  dark:text-gray-300 leading-relaxed mt-4">
      Go has three functions to output text:
    </p>

    <ul className="list-disc list-inside  dark:text-gray-300 mt-2">
      <li>Print()</li>
      <li>Println()</li>
      <li>Printf()</li>
    </ul>

    <h2 className="text-2xl font-bold  dark:text-white mt-6">
      The Print() Function
    </h2>

    <p className="mt-2  dark:text-gray-300">
      The <code>Print()</code> function prints its arguments with their default format.
    </p>

    <h3 className="text-xl font-semibold  dark:text-white mt-4">Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j string = "Hello","World"

  fmt.Print(i)
  fmt.Print(j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
HelloWorld
    </pre>

    <h3 className="text-xl font-semibold  dark:text-white mt-6">Example (Using New Lines)</h3>
    <p className="mt-2  dark:text-gray-300">
      If we want to print the arguments in new lines, we need to use <code>\n</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j string = "Hello","World"

  fmt.Print(i, "\n")
  fmt.Print(j, "\n")
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello{"\n"}World
    </pre>

    <h3 className="text-xl font-semibold  dark:text-white mt-6">Example (Single Print)</h3>
    <p className="mt-2  dark:text-gray-300">
      It is also possible to only use one <code>Print()</code> for printing multiple variables.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j string = "Hello","World"

  fmt.Print(i, "\n",j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello{"\n"}World
    </pre>

    <h3 className="text-xl font-semibold  dark:text-white mt-6">Example (Add Space Between Strings)</h3>
    <p className="mt-2  dark:text-gray-300">
      If we want to add a space between string arguments, we need to use <code>" "</code>:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j string = "Hello","World"

  fmt.Print(i, " ", j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bbg-gray-100 text-black p-3 rounded-md font-mono">
Hello World
    </pre>

    <h3 className="text-xl font-semibold  dark:text-white mt-6">Example (Numbers)</h3>
    <p className="mt-2  dark:text-gray-300">
      <code>Print()</code> inserts a space between the arguments if neither are strings:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j = 10,20

  fmt.Print(i,j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
10 20
    </pre>

    <h2 className="text-2xl font-bold  dark:text-white mt-8">The Println() Function</h2>
    <p className="mt-2  dark:text-gray-300">
      The <code>Println()</code> function is similar to <code>Print()</code> with the difference that a whitespace is added between the arguments, and a newline is added at the end.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i,j string = "Hello","World"

  fmt.Println(i,j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello World
    </pre>

    <h2 className="text-2xl font-bold  dark:text-white mt-8">The Printf() Function</h2>
    <p className="mt-2  dark:text-gray-300">
      The <code>Printf()</code> function first formats its argument based on the given formatting verb and then prints them.
    </p>

    <p className="mt-2  dark:text-gray-300">
      Here we will use two formatting verbs:
    </p>

    <ul className="list-disc list-inside  dark:text-gray-300 mt-2">
      <li><code>%v</code> is used to print the value of the arguments</li>
      <li><code>%T</code> is used to print the type of the arguments</li>
    </ul>

    <h3 className="text-xl font-semibold  dark:text-white mt-4">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var i string = "Hello"
  var j int = 15

  fmt.Printf("i has value: %v and type: %T\\n", i, i)
  fmt.Printf("j has value: %v and type: %T", j, j)
}`}
    </pre>

    <p className="mt-2  dark:text-gray-300">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
i has value: Hello and type: string
{"\n"}j has value: 15 and type: int
    </pre>
  </div>
);

export default GoOutputFunctions;
