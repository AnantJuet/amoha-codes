import React from "react";

const SwiftComments: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Swift Comments
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Comments are used to explain code and make it easier to understand. Swift supports
      <b> single-line</b>, <b>multi-line</b>, and <b>documentation</b> comments.
    </p>

    {/* Single-line & Multi-line Comments */}
    <h2 className="text-2xl font-bold mt-6">
      Single-line and Multi-line Comments
    </h2>

    <p className="leading-relaxed mt-3">
      Use <code>//</code> for single-line comments and <code>/* ... */</code> for multi-line or
      block comments. Swift also supports <b>nested multi-line comments</b>.
    </p>

    <h3 className="text-xl font-bold mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`// This is a single-line comment
print("Hello")

/* This is a
   multi-line comment */
print("Swift")

/* Nested comments are allowed:
   /* inner */
*/`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      This example demonstrates how to use both single-line and multi-line comments in Swift.
    </p>

    {/* Documentation Comments */}
    <h2 className="text-2xl font-bold mt-6">Documentation Comments</h2>

    <p className="leading-relaxed mt-3">
      Use <code>///</code> before declarations to create documentation comments. These comments
      can describe functions, parameters, return values, and more.
    </p>

    <p className="leading-relaxed mt-3">
      Unlike regular comments, documentation comments are processed by the compiler and can be
      used to generate structured documentation.
    </p>

    <h3 className="text-xl font-bold mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`/// Returns the sum of two integers.
/// - Parameters: a, b
func add(_ a: Int, _ b: Int) -> Int { 
  a + b 
}

print(add(2, 3))`}
      </pre>
    </div>
  </>
);

export default SwiftComments;
