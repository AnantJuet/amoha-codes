import React from "react";

const GoNestedIfStatement: React.FC = () => (
  <>
    {/* Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Nested if Statement
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      You can use an <code>if</code> statement inside another <code>if</code> statement.
      This is called a <strong>nested if</strong>. It allows you to test multiple
      conditions where one depends on the other.
    </p>

    {/* Syntax */}
    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`if condition1 {
   // code to be executed if condition1 is true
   if condition2 {
      // code to be executed if both condition1 and condition2 are true
   }
}`}
    </pre>

    {/* Example Section */}
    <h2 className="text-2xl font-bold  mt-6">Example</h2>
    <p className=" mt-2 leading-relaxed">
      In this example, there is an <code>if</code> statement inside another{" "}
      <code>if</code>. The program first checks if <code>num</code> is greater than or
      equal to 10. If true, it then checks if <code>num</code> is greater than 15.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  num := 20
  if num >= 10 {
    fmt.Println("Num is more than 10.")
    if num > 15 {
      fmt.Println("Num is also more than 15.")
    }
  } else {
    fmt.Println("Num is less than 10.")
  }
}`}
    </pre>

    {/* Result */}
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Num is more than 10.
Num is also more than 15.
    </pre>

    {/* Explanation */}
    <p className=" mt-3 leading-relaxed">
      Since <code>num</code> is <code>20</code>, the first condition{" "}
      (<code>num &gt;= 10</code>) is true, so it enters the first block. Then it checks
      the nested condition (<code>num &gt; 15</code>), which is also true — so both
      messages are printed.
    </p>
  </>
);

export default GoNestedIfStatement;
