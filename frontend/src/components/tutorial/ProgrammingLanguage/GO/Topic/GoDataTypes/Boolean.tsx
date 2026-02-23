import React from "react";

const GoBoolean: React.FC = () => (
  <>
    
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Boolean Data Type
    </h1>

    {/* Subheading */}
    <h2 className="text-2xl font-bold  mt-4">Boolean Data Type</h2>

    {/* Description Paragraphs */}
    <p className="text-lg  leading-relaxed mt-2">
      A boolean data type is declared with the <code>bool</code> keyword and can only take the values{" "}
      <strong>true</strong> or <strong>false</strong>.
    </p>

    <p className="text-lg  leading-relaxed mt-2">
      The default value of a boolean data type is <strong>false</strong>.
    </p>

    {/* Example Section */}
    <h2 className="text-2xl font-bold  mt-8">Example</h2>
    <p className="text-lg  leading-relaxed mt-2">
      This example shows some different ways to declare Boolean variables:
    </p>

    {/* Code Example */}
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var b1 bool = true // typed declaration with initial value
  var b2 = true      // untyped declaration with initial value
  var b3 bool        // typed declaration without initial value
  b4 := true         // untyped declaration with initial value

  fmt.Println(b1) // Returns true
  fmt.Println(b2) // Returns true
  fmt.Println(b3) // Returns false
  fmt.Println(b4) // Returns true
}`}
    </pre>

  </>
);

export default GoBoolean;
