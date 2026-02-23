import React from "react";

const GoFunctionReturns: React.FC = () => (
  <div className="mt-17 space-y-6 dark:text-white">

    {/* Heading */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2  dark:text-white">
      Go Function Returns
    </h1>

    {/* Intro */}
    <p className="leading-relaxed  dark:text-white">
      If you want the function to return a value, you must define the return type
      and use the <b>return</b> keyword inside the function.
    </p>

    {/* Syntax */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`func FunctionName(param1 type, param2 type) type {
  // code to be executed
  return output
}`}
    </pre>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">Function Return Example</h2>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>
    <p className="leading-relaxed  dark:text-white">
      Here, <code>myFunction()</code> receives two integers and returns their sum:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y int) int {
  return x + y
}

func main() {
  fmt.Println(myFunction(1, 2))
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 dark:text-black p-4 rounded-lg">3</pre>

    {/* Named Return Values */}
    <h2 className="text-2xl font-bold mt-8  dark:text-white">Named Return Values</h2>

    <p className="leading-relaxed  dark:text-white">
      In Go, you can name the return value of a function.
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>
    <p className=" dark:text-white">
      Here the return value is named <b>result</b> and a naked return is used:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y int) (result int) {
  result = x + y
  return
}

func main() {
  fmt.Println(myFunction(1, 2))
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">3</pre>

    {/* Alternative syntax */}
    <h3 className="text-xl font-semibold  dark:text-white">Another Example</h3>
    <p className=" dark:text-white">
      Same as above but return statement specifies the variable:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y int) (result int) {
  result = x + y
  return result
}

func main() {
  fmt.Println(myFunction(1, 2))
}`}
    </pre>

    {/* Store return value */}
    <h2 className="text-2xl font-bold mt-8  dark:text-white">
      Store the Return Value in a Variable
    </h2>

    <p className=" dark:text-white">
      You can store the return value inside a variable:
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y int) (result int) {
  result = x + y
  return
}

func main() {
  total := myFunction(1, 2)
  fmt.Println(total)
}`}
    </pre>

    {/* Multiple return values */}
    <h2 className="text-2xl font-bold mt-10  dark:text-white">
      Multiple Return Values
    </h2>

    <p className="leading-relaxed  dark:text-white">
      Go functions can also return multiple values.
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
  fmt.Println(myFunction(5, "Hello"))
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
10 Hello World!
    </pre>

    {/* Store multiple return values */}
    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <p className="leading-relaxed  dark:text-white">
      Store both returned values in variables:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
  a, b := myFunction(5, "Hello")
  fmt.Println(a, b)
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
10 Hello World!
    </pre>

    {/* Omit values */}
    <h3 className="text-xl font-semibold  dark:text-white mt-8">
      Omit Returned Values
    </h3>

    <p className=" dark:text-white">
      Use underscore (_) to ignore a returned value.
    </p>

    {/* Omit first value */}
    <h3 className="text-lg font-semibold  dark:text-white">Example (omit first value)</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
  _, b := myFunction(5, "Hello")
  fmt.Println(b)
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello World!
    </pre>

    {/* Omit second value */}
    <h3 className="text-lg font-semibold  dark:text-white">Example (omit second value)</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
  a, _ := myFunction(5, "Hello")
  fmt.Println(a)
}`}
    </pre>

    <p className=" dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
10
    </pre>

  </div>
);

export default GoFunctionReturns;
