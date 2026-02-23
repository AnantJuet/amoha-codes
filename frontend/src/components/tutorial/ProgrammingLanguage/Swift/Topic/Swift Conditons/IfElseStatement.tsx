import React from "react";

const GoIfElseStatement: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go if else Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      The <code>else</code> statement in Go is used to specify a block of code that will
      execute if the condition in the <code>if</code> statement is <code>false</code>.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Syntax</h2>
    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`if condition {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}`}
    </pre>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Example 1: Time of Day</h2>
    <p className="text-gray-700 mt-2 leading-relaxed">
      In this example, the value of <code>time</code> is <code>20</code>. Since the
      condition <code>time &lt; 18</code> is false, the code inside the{" "}
      <code>else</code> block executes, printing <strong>"Good evening."</strong>
    </p>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
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

    <h3 className="text-lg font-semibold text-gray-800 mt-3">Result:</h3>
    <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg mt-2">
Good evening.
    </pre>

    {/* Example 2 */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Example 2: Temperature Check</h2>
    <p className="text-gray-700 mt-2 leading-relaxed">
      In this example, the temperature is <code>14</code>. The condition{" "}
      <code>temperature &gt; 15</code> is false, so the <code>else</code> block runs
      and prints <strong>"It is cold out there."</strong>
    </p>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
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

    <h3 className="text-lg font-semibold text-gray-800 mt-3">Result:</h3>
    <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg mt-2">
It is cold out there
    </pre>
  </div>
);

export default GoIfElseStatement;
