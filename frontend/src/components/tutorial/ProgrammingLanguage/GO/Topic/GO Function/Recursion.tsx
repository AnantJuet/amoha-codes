import React from "react";

const GoRecursionFunctions: React.FC = () => (
  <div className="mt-17 space-y-6 dark:text-white">

    {/* Heading */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2  dark:text-white">
      Go Recursion Functions
    </h1>

    {/* Intro */}
    <p className="leading-relaxed  dark:text-white">
      Go supports <b>recursive functions</b>. A function becomes recursive when it calls
      itself and eventually reaches a stop condition to prevent infinite looping.
    </p>

    {/* Example 1: testcount */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">
      Example: Basic Recursion (Counting)
    </h2>

    <p className="leading-relaxed  dark:text-white">
      In this example, <code>testcount()</code> increases <b>x</b> by 1 on every call.
      Recursion ends when <b>x == 11</b>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func testcount(x int) int {
  if x == 11 {
    return 0
  }
  fmt.Println(x)
  return testcount(x + 1)
}

func main() {
  testcount(1)
}`}
    </pre>

    <p className=" dark:text-white font-semibold">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
1
2
3
4
5
6
7
8
9
10
    </pre>

    {/* Recursion Explanation */}
    <h2 className="text-2xl font-bold mt-8  dark:text-white">
      Why Use Recursion?
    </h2>

    <p className="leading-relaxed  dark:text-white">
      Recursion is a powerful concept that lets you loop through data or reach a result
      using elegant, mathematical logic. However, it must be used carefully to avoid
      excess memory use or infinite loops.
    </p>

    {/* Example 2: Factorial */}
    <h2 className="text-2xl font-bold mt-8  dark:text-white">
      Example: Factorial Using Recursion
    </h2>

    <p className="leading-relaxed  dark:text-white">
      In this example, <code>factorial_recursion()</code> multiplies numbers down to 1.
      The recursion ends when <b>x == 0</b>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func factorial_recursion(x float64) (y float64) {
  if x > 0 {
     y = x * factorial_recursion(x-1)
  } else {
     y = 1
  }
  return
}

func main() {
  fmt.Println(factorial_recursion(4))
}`}
    </pre>

    <p className="font-semibold  dark:text-white">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
24
    </pre>

  </div>
);

export default GoRecursionFunctions;
