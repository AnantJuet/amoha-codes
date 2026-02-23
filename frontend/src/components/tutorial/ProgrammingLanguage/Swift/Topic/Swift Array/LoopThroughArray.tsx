import React from "react";

const SwiftArraysLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Arrays: Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift provides multiple ways to loop through arrays. You can use <code>for-in</code> 
      to iterate over values, <code>enumerated()</code> to get index and value, or 
      <code>forEach</code> for a functional-style loop.
    </p>

    {/* Loop Elements */}
    <h2 className="text-2xl font-bold mt-6">Loop Elements</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>for-in</code> to loop through array elements, or 
      <code>enumerated()</code> to get both index and value.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let fruits = ["Apple", "Banana", "Cherry"]

// Loop values
for fruit in fruits {
  print(fruit)
}

// Loop index and value
for (i, fruit) in fruits.enumerated() {
  print("\\(i): \\(fruit)")
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      The <code>enumerated()</code> method provides both the index and the element in the loop.
    </p>

    {/* forEach */}
    <h2 className="text-2xl font-bold  mt-6">forEach</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>forEach</code> for a functional-style loop. Note that it cannot use{" "}
      <code>break</code> or <code>continue</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let fruits = ["Apple", "Banana", "Cherry"]

fruits.forEach { print($0) }
fruits.enumerated().forEach { print("\\($0.offset): \\($0.element)") }`}
      </pre>
    </div>
  </>
);

export default SwiftArraysLoop;
