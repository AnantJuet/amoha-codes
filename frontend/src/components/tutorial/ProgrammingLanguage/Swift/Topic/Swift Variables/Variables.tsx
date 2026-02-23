import React from "react";

const SwiftVariables: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Variables
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift uses <b>let</b> to declare constants and <b>var</b> to declare variables. 
      Constants cannot be changed after assignment, while variables can.
    </p>

    {/* Constants and Variables */}
    <h2 className="text-2xl font-bold  mt-6">Constants and Variables</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>let</code> when a value should remain constant, and 
      <code> var</code> when the value needs to change.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let constant = 10
var counter = 0
counter += 1
// constant = 12 // Error if uncommented
print(constant, counter)`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example shows that variables declared with <b>var</b> can be changed, while 
      values declared with <b>let</b> cannot be reassigned.
    </p>

    {/* Type Inference */}
    <h2 className="text-2xl font-bold  mt-6">Swift Type Inference</h2>

    <p className=" leading-relaxed mt-3">
      Swift automatically determines a value&apos;s type when possible. 
      You can also declare the type explicitly using a type annotation.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let x = 10        // type inferred as Int
let y: Int = 20    // explicit type annotation
print(x, y)`}
      </pre>
    </div>
  </>
);

export default SwiftVariables;
