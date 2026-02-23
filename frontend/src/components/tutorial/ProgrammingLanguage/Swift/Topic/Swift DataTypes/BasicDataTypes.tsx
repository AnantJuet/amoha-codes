import React from "react";

const SwiftDataTypes: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Data Types
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift includes several built-in data types such as <b>Int</b>, <b>Double</b>,{" "}
      <b>Bool</b>, and <b>String</b>. Swift also uses <b>type inference</b> to
      automatically determine the type from the assigned value.
    </p>

    {/* Basic Types */}
    <h2 className="text-2xl font-bold  mt-6">Basic Types</h2>

    <p className=" leading-relaxed mt-3">
      You can create constants using <code>let</code> and variables using{" "}
      <code>var</code>. Swift infers the type automatically based on the initial
      value.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let anInt = 42            // Int
let aDouble = 3.14        // Double
let isSwiftFun = true     // Bool
let greeting = "Hello"    // String

print(aDouble)
print(isSwiftFun)
print(greeting)`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows how common Swift types are declared and printed.
    </p>

    {/* Type Inference vs Annotation */}
    <h2 className="text-2xl font-bold  mt-8">
      Type Inference vs Annotation
    </h2>

    <p className=" leading-relaxed mt-3">
      Swift usually infers the type automatically, but you can also specify the
      type explicitly for clarity.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let inferred = 10           // Int (inferred)
let annotated: Double = 3    // Double (explicit)

print(type(of: inferred), type(of: annotated))`}
      </pre>
    </div>
  </>
);

export default SwiftDataTypes;
