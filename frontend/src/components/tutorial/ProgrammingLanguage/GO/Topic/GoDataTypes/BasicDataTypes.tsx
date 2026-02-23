import React from "react";

const GoDataTypes: React.FC = () => (
  <div className="mt-17">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Go Data Types
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Data type is an important concept in programming. A data type specifies the size and type of variable values.
    </p>

    <p className="text-lg  leading-relaxed mt-2">
      Go is <strong>statically typed</strong>, meaning that once a variable type is defined, it can only store data of that type.
    </p>

    <p className="text-lg  leading-relaxed mt-2">
      Go has three basic data types:
    </p>

    <ul className="list-disc list-inside  mt-2 space-y-1">
      <li>
        <code>bool</code>: represents a boolean value and is either <code>true</code> or <code>false</code>
      </li>
      <li>
        <code>Numeric</code>: represents integer types, floating point values, and complex types
      </li>
      <li>
        <code>string</code>: represents a string value
      </li>
    </ul>

    <h2 className="text-2xl font-bold  mt-6">Example</h2>
    <p className="mt-2 ">
      This example shows some of the different data types in Go:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a bool = true     // Boolean
  var b int = 5         // Integer
  var c float32 = 3.14  // Floating point number
  var d string = "Hi!"  // String

  fmt.Println("Boolean: ", a)
  fmt.Println("Integer: ", b)
  fmt.Println("Float:   ", c)
  fmt.Println("String:  ", d)
}`}
    </pre>
  </div>
);

export default GoDataTypes;
