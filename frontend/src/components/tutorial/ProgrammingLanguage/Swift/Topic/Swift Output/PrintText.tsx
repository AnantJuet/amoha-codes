import React from "react";

const SwiftTextOutput: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Swift Text Output
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift uses the <b>print()</b> function to display text and values. You can also
      use <b>string interpolation</b> to embed expressions directly inside a string.
    </p>

    {/* Print Text */}
    <h2 className="text-2xl font-bold  mt-6">Print Text</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>print()</code> to output text. Insert values using Swift’s string
      interpolation syntax: <code>\(expression)</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`print("Hello, Swift!")

let name = "Kai"
print("Hello, \\(name)!")

let a = 2, b = 3
print("Total: \\(a + b)")`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows printing text and using string interpolation to include values
      dynamically.
    </p>

    {/* Print Without Newline */}
    <h2 className="text-2xl font-bold  mt-6">Print Without Newline</h2>

    <p className=" leading-relaxed mt-3">
      By default, <code>print()</code> adds a newline at the end. Use the{" "}
      <code>terminator</code> parameter to print text <b>without a trailing newline</b>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for n in 1...3 {
  print(n, terminator: " ")   // prints on one line
}
print("done")`}
      </pre>
    </div>
  </>
);

export default SwiftTextOutput;
