import React from "react";

const SwiftSyntax: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Syntax
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Learn the basics of Swift including <b>variables</b>, <b>types</b>,{" "}
      <b>string interpolation</b>, and simple <b>functions</b>.
    </p>

    {/* Basics Section */}
    <h2 className="text-2xl font-bold  mt-6">Basics</h2>

    <p className=" leading-relaxed mt-3">
      Swift uses clear and expressive syntax. Here are some core building blocks of the language:
    </p>

    <ul className="list-disc ml-6  leading-relaxed mt-3">
      <li>
        <b>Constants / variables:</b> Use <code>let</code> for constants and <code>var</code> for
        variables.
      </li>
      <li>
        <b>Types:</b> Common types include <code>Int</code>, <code>Double</code>,{" "}
        <code>Bool</code>, and <code>String</code>.
      </li>
      <li>
        <b>Type inference:</b> The Swift compiler automatically infers types from initial values.
      </li>
    </ul>

    {/* Example */}
    <h2 className="text-2xl font-bold  mt-6">Example</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let greeting = "Hello"
var name = "Swift"
print(greeting + ", " + name)

let pi: Double = 3.14159
var count: Int = 3
print("pi = \\(pi), count = \\(count)")`}
      </pre>
    </div>

    {/* Example Explained */}
    <p className=" leading-relaxed mt-4">
      <b>Example explained:</b>
    </p>

    <ul className="list-disc ml-6  leading-relaxed mt-2">
      <li>
        <code>let</code> creates an immutable constant, while <code>var</code> creates a mutable
        variable.
      </li>
      <li>Type annotations are optional; here <code>Double</code> and <code>Int</code> are added.</li>
      <li>
        <b>String interpolation:</b> <code>\(expr)</code> inserts values inside a string.
      </li>
    </ul>

    {/* String Interpolation Section */}
    <h2 className="text-2xl font-bold  mt-6">String Interpolation</h2>

    <p className=" leading-relaxed mt-3">
      String interpolation lets you embed expressions directly inside string literals using{" "}
      <code>\(expr)</code>. This is the most common way to format strings in Swift.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let greeting = "Hello"
var name = "Swift"
print("\\(greeting), \\(name)!")`}
      </pre>
    </div>

    {/* Functions Section */}
    <h2 className="text-2xl font-bold  mt-6">Functions</h2>

    <p className=" leading-relaxed mt-3">
      Functions are reusable blocks of code that perform specific tasks.
    </p>

    <p className=" leading-relaxed mt-3">
      Syntax:{" "}
      <code className="bg-gray-100 text-black rounded-md font-mono">
        func name(param: Type) -&gt; Return
      </code>
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`func add(_ a: Int, _ b: Int) -> Int {
  return a + b
}

print(add(2, 3))  // 5`}
      </pre>
    </div>
  </>
);

export default SwiftSyntax;
