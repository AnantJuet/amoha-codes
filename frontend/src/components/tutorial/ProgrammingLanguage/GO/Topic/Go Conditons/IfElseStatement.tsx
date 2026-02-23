import React from "react";

const GoIfElseStatement: React.FC = () => (
  <>
    {/* Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go if else Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      The <code>else</code> statement in Go is used to specify a block of code that will
      execute if the condition in the <code>if</code> statement is <code>false</code>.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`if condition {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}`}
    </pre>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold  mt-6">Example 1: Time of Day</h2>
    <p className=" mt-2 leading-relaxed">
      In this example, the value of <code>time</code> is <code>20</code>. Since the
      condition <code>time &lt; 18</code> is false, the code inside the{" "}
      <code>else</code> block executes, printing <strong>"Good evening."</strong>
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  time := 20
  if (time < 18) {
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

    {/* Example 2 */}
    <h2 className="text-2xl font-bold  mt-6">Example 2: Temperature Check</h2>
    <p className=" mt-2 leading-relaxed">
      In this example, the temperature is <code>14</code>. The condition{" "}
      <code>temperature &gt; 15</code> is false, so the <code>else</code> block runs
      and prints <strong>"It is cold out there."</strong>
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  temperature := 14
  if (temperature > 15) {
    fmt.Println("It is warm out there")
  } else {
    fmt.Println("It is cold out there")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
It is cold out there
    </pre>
  </>
);

export default GoIfElseStatement;
