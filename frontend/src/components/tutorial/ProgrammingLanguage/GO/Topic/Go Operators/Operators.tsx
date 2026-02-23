import React from "react";

const GoOperators: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Go Operators
    </h1>

    <p className="text-lg mt-4 leading-relaxed">
      Operators are used to perform operations on variables and values. 
      The <code>+</code> operator adds together two values, like in the example below:
    </p>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = 15 + 25
  fmt.Println(a)
}`}
    </pre>

    {/* Example 2 */}
    <p className="text-lg mt-4 leading-relaxed">
      Although the <code>+</code> operator is often used to add together two values, 
      it can also be used to add together a variable and a value, or a variable and another variable:
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var (
    sum1 = 100 + 50   // 150 (100 + 50)
    sum2 = sum1 + 250 // 400 (150 + 250)
    sum3 = sum2 + sum2 // 800 (400 + 400)
  )
  fmt.Println(sum3)
}`}
    </pre>

    {/* Operator Groups */}
    <h2 className="text-2xl font-bold mt-6">
      Types of Operators in Go
    </h2>
    <p className="text-lg mt-3 leading-relaxed">
      Go divides the operators into the following groups:
    </p>

    <ul className="list-disc list-inside text-lg mt-3 space-y-2">
      <li>Arithmetic operators</li>
      <li>Assignment operators</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
      <li>Bitwise operators</li>
    </ul>
  </div>
);

export default GoOperators;
