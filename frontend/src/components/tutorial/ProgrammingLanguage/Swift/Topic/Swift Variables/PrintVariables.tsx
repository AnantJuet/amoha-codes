import React from "react";

const SwiftPrintVariables: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Print Variables
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift allows you to print variables using <b>concatenation</b> or{" "}
      <b>string interpolation</b>. The <code>print()</code> function can also
      customize output using separators and terminators.
    </p>

    {/* Concatenation & Interpolation */}
    <h2 className="text-2xl font-bold  mt-6">
      Concatenation and Interpolation
    </h2>

    <p className=" leading-relaxed mt-3">
      Use <b>concatenation</b> to combine strings manually, or{" "}
      <b>string interpolation</b> using <code>\(value)</code> to embed values
      directly inside a string.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let first = "Hello"
let second = "Swift"

// Concatenation
print(first + ", " + second)

// Interpolation
print("\\(first), \\(second)")

let a = 2, b = 3
print("a = \\(a), b = \\(b), sum = \\(a + b)")`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows how to print strings using both concatenation and
      interpolation.
    </p>

    {/* Custom Separator & Terminator */}
    <h2 className="text-2xl font-bold  mt-6">
      Custom Separator and Terminator
    </h2>

    <p className="leading-relaxed mt-3">
      You can customize how values are printed by setting a{" "}
      <b>separator</b> between items and a <b>terminator</b> at the end.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let a = 1, b = 2, c = 3
print(a, b, c, separator: ", ", terminator: "; ")
print("done")  // prints on the same line after a semicolon`}
      </pre>
    </div>
  </>
);

export default SwiftPrintVariables;
