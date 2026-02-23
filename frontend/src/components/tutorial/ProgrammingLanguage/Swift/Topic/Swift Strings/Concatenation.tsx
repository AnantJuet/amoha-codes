import React from "react";

const SwiftStringsConcatenation: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Strings: Concatenation
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Join strings with <code>+</code>, or use interpolation to insert values into a string.
    </p>

    {/* Concatenate vs Interpolate */}
    <h2 className="text-2xl font-bold mt-6">Concatenate vs Interpolate</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>+</code> to make a new string. Use interpolation to insert values inline.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let first = "Hello"
let second = "Swift"
// Concatenation
print(first + " " + second)
// Interpolation
print("\(first), \(second)!")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ Interpolation is often clearer when mixing text and values.
    </p>

    {/* Append Strings */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Append Strings</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>+=</code> to append to a mutable string.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var s = "Hello"
s += ", Swift"
print(s)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example appends to a string in place using <code>+=</code>.
    </p>
  </>
);

export default SwiftStringsConcatenation;
