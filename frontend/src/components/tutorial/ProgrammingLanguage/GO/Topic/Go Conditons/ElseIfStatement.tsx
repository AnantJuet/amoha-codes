import React from "react";

const GoElseIfStatement: React.FC = () => (
  <>
    {/* Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go else if Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      The <code>else if</code> statement in Go is used to specify a new condition to test
      if the previous condition is <code>false</code>. It allows multiple conditions to be
      checked in sequence.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`if condition1 {
   // code to be executed if condition1 is true
} else if condition2 {
   // code to be executed if condition1 is false and condition2 is true
} else {
   // code to be executed if condition1 and condition2 are both false
}`}
    </pre>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold  mt-6">
      Example 1: Greeting Based on Time
    </h2>
    <p className=" mt-2 leading-relaxed">
      In this example, different greetings are displayed depending on the time value.
      Since <code>time = 22</code>, both the first and second conditions are false, so the
      program executes the <code>else</code> block and prints{" "}
      <strong>"Good evening."</strong>
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  time := 22
  if time < 10 {
    fmt.Println("Good morning.")
  } else if time < 20 {
    fmt.Println("Good day.")
  } else {
    fmt.Println("Good evening.")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Good evening.
    </pre>

    <p className=" mt-3 leading-relaxed">
      If the <code>time</code> was <code>14</code>, the program would print{" "}
      <strong>"Good day."</strong> instead.
    </p>

    {/* Example 2 */}
    <h2 className="text-2xl font-bold  mt-6">
      Example 2: Comparing Two Values
    </h2>
    <p className=" mt-2 leading-relaxed">
      Here, the values of <code>a</code> and <code>b</code> are compared. Since both are{" "}
      <code>14</code>, the first two conditions are false, so the{" "}
      <code>else</code> block executes and prints <strong>"a and b are equal."</strong>
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  a := 14
  b := 14
  if a < b {
    fmt.Println("a is less than b.")
  } else if a > b {
    fmt.Println("a is more than b.")
  } else {
    fmt.Println("a and b are equal.")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
a and b are equal.
    </pre>

    {/* Example 3 */}
    <h2 className="text-2xl font-bold  mt-6">
      Example 3: Note on Multiple True Conditions
    </h2>
    <p className=" mt-2 leading-relaxed">
      Note that if multiple conditions are true, only the first true condition’s block
      will be executed. For example, in the code below, both conditions are true, but
      only the first one executes.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  x := 30
  if x >= 10 {
    fmt.Println("x is larger than or equal to 10.")
  } else if x > 20 {
    fmt.Println("x is larger than 20.")
  } else {
    fmt.Println("x is less than 10.")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
x is larger than or equal to 10.
    </pre>
  </>
);

export default GoElseIfStatement;
