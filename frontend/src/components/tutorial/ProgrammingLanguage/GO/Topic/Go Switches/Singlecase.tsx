import React from "react";

const GoSinglecase: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-20">
      Go switch Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      The <code>switch</code> statement in Go is used to select one of many code blocks to
      be executed. It works similarly to the switch statements in languages like C, C++, 
      Java, JavaScript, and PHP — but with one key difference: Go automatically breaks 
      after a matched case, so you don’t need a <code>break</code> statement.
    </p>

    {/* Single-Case Switch Syntax */}
    <h2 className="text-2xl font-bold  mt-6">
      Single-Case switch Syntax
    </h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`switch expression {
case x:
   // code block
case y:
   // code block
case z:
   // code block
default:
   // code block
}`}
    </pre>

    {/* Explanation */}
    <p className=" mt-3 leading-relaxed">
      Here's how it works:
    </p>
    <ul className="list-disc ml-6  leading-relaxed">
      <li>The expression is evaluated once.</li>
      <li>The value of the switch expression is compared with each case.</li>
      <li>If a match is found, the associated block of code runs.</li>
      <li>The <code>default</code> keyword is optional and runs if no case matches.</li>
    </ul>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold  mt-6">
      Single-Case switch Example
    </h2>
    <p className=" mt-2 leading-relaxed">
      The example below uses a weekday number to print the corresponding weekday name:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  day := 4

  switch day {
  case 1:
    fmt.Println("Monday")
  case 2:
    fmt.Println("Tuesday")
  case 3:
    fmt.Println("Wednesday")
  case 4:
    fmt.Println("Thursday")
  case 5:
    fmt.Println("Friday")
  case 6:
    fmt.Println("Saturday")
  case 7:
    fmt.Println("Sunday")
  }
}`}
    </pre>

    {/* Result */}
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100  p-3 rounded-lg mt-2">Thursday</pre>

    {/* Default Keyword Section */}
    <h2 className="text-2xl font-bold  mt-6">The default Keyword</h2>
    <p className=" mt-2 leading-relaxed">
      The <code>default</code> keyword specifies code to run if there is no case match.
    </p>

    {/* Example 2 */}
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  day := 8

  switch day {
  case 1:
    fmt.Println("Monday")
  case 2:
    fmt.Println("Tuesday")
  case 3:
    fmt.Println("Wednesday")
  case 4:
    fmt.Println("Thursday")
  case 5:
    fmt.Println("Friday")
  case 6:
    fmt.Println("Saturday")
  case 7:
    fmt.Println("Sunday")
  default:
    fmt.Println("Not a weekday")
  }
}`}
    </pre>

    {/* Result */}
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">Not a weekday</pre>

    {/* Summary */}
    <p className=" mt-3 leading-relaxed">
      In Go, the <code>switch</code> statement simplifies multi-condition checks and
      automatically stops after finding a matching case — making it cleaner and more
      efficient than multiple <code>if-else</code> statements.
    </p>
  </>
);

export default GoSinglecase;
