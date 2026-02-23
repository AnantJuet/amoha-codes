import React from "react";

const SwiftFunctions: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Functions
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Define reusable code with parameters and return values; control labels, mutation with <code>inout</code>, defaults, and variadics.
    </p>

    {/* Defining and Calling Functions */}
    <h2 className="text-2xl font-bold  mt-6">Defining and Calling Functions</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>func</code> to define a function with a name, parameters, and a return value.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func name(param: Type) -> ReturnType`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func greet(name: String) -> String {
  return "Hello, \\(name)!"
}
print(greet(name: "Swift"))`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example defines a function named <code>greet</code> that takes a <code>String</code> parameter and returns a greeting message.
    </p>

    {/* Parameters and Return Values */}
    <h2 className="text-2xl font-bold  mt-6">Parameters and Return Values</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>func</code> to define a function with multiple parameters and a return value.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func name(param1: Type, param2: Type) -> ReturnType`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func add(_ a: Int, _ b: Int) -> Int { a + b }
print(add(2, 3))`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example omits external parameter labels with <code>_</code> and returns the sum as an <code>Int</code>.
    </p>

    {/* Inout, Default Values, Variadics */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Inout, Default Values, Variadics</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>inout</code> to allow a function to modify a parameter, provide default values, or accept variadic parameters.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func increment(_ value: inout Int, by step: Int = 1) {
  value += step
}
var x = 10
increment(&x)
print(x) // 11

func sum(_ nums: Int...) -> Int { nums.reduce(0, +) }
print(sum(1,2,3))`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows a function that modifies a parameter using <code>inout</code>, uses a default value, and another function using variadic parameters to sum numbers.
    </p>
  </>
);

export default SwiftFunctions;
