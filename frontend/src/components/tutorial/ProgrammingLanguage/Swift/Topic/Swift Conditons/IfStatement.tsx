import React from "react";

const GoIfStatement: React.FC = () => (
  <div className="mt-20 px-6">
    {/* Heading */}
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      Go if Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      The <code>if</code> statement in Go is used to specify a block of code that should
      be executed if a given condition evaluates to <code>true</code>.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Syntax</h2>
    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`if condition {
  // code to be executed if condition is true
}`}
    </pre>

    <p className="text-gray-700 mt-3 leading-relaxed">
      Note that <code>if</code> must be written in lowercase. Writing it as{" "}
      <code>If</code> or <code>IF</code> will result in a compilation error.
    </p>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Example 1: Simple Condition</h2>
    <p className="text-gray-700 mt-2">
      In the example below, Go tests whether <code>20</code> is greater than <code>18</code>.
      If the condition is true, it prints the text inside the <code>if</code> block.
    </p>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  if 20 > 18 {
    fmt.Println("20 is greater than 18")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold text-gray-800 mt-3">Result:</h3>
    <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg mt-2">
20 is greater than 18
    </pre>

    {/* Example 2 */}
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Example 2: Using Variables</h2>
    <p className="text-gray-700 mt-2">
      You can also use variables inside an <code>if</code> statement condition:
    </p>

    <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  x := 20
  y := 18
  if x > y {
    fmt.Println("x is greater than y")
  }
}`}
    </pre>

    <h3 className="text-lg font-semibold text-gray-800 mt-3">Result:</h3>
    <pre className="bg-gray-100 text-gray-800 p-3 rounded-lg mt-2">
x is greater than y
    </pre>
  </div>
);

export default GoIfStatement;
