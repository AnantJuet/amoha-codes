import React from "react";

const GoMultiCaseSwitch: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-20">
      Go Multi-case switch Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      The <code>multi-case switch</code> statement in Go allows you to include multiple 
      values for a single case. This is useful when different case values should execute 
      the same block of code.
    </p>

    {/* Syntax Section */}
    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`switch expression {
case x, y:
   // code block if expression is evaluated to x or y
case v, w:
   // code block if expression is evaluated to v or w
case z:
   // code block
default:
   // code block if expression does not match any cases
}`}
    </pre>

    {/* Example Section */}
    <h2 className="text-2xl font-bold  mt-6">
      Multi-case switch Example
    </h2>

    <p className=" mt-2 leading-relaxed">
      The example below uses a weekday number to print different text depending on 
      whether it’s an odd weekday, even weekday, or weekend:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
   day := 5

   switch day {
   case 1, 3, 5:
      fmt.Println("Odd weekday")
   case 2, 4:
      fmt.Println("Even weekday")
   case 6, 7:
      fmt.Println("Weekend")
   default:
      fmt.Println("Invalid day number")
   }
}`}
    </pre>

    {/* Result Section */}
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Odd weekday
    </pre>

    {/* Summary */}
    <p className=" mt-3 leading-relaxed">
      In this example, since <code>day</code> is 5, the program matches the 
      <code>case 1, 3, 5</code> and prints <strong>"Odd weekday"</strong>. 
      Multi-case switches make your code cleaner by grouping multiple case values 
      that share the same logic.
    </p>
  </>
);

export default GoMultiCaseSwitch;
