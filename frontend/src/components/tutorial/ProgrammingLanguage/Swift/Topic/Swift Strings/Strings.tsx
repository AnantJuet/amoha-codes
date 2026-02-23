import React from "react";

const SwiftStrings: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Strings
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Strings are text. Use <code>+</code> to join, interpolation with <code>\(value)</code> to insert values, and properties like <code>count</code> and <code>isEmpty</code> to inspect them.
    </p>

    {/* Basics */}
    <h2 className="text-2xl font-bold mt-6">Basics</h2>
    <p className=" leading-relaxed mt-3">
      Create, combine, and inspect strings with concatenation, interpolation, and common properties.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let s1 = "Hello"
let s2 = "Swift"
print(s1 + " " + s2)
print("\(s1), \(s2)!")
let word = "Swift"
print(word.count)
print(s1.isEmpty)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows concatenation, interpolation, <code>count</code>, and <code>isEmpty</code>.
    </p>

    {/* Substring and Case */}
    <h2 className="text-2xl font-bold  mt-6">Substring and Case</h2>
    <p className=" leading-relaxed mt-3">
      Get substrings with indices. <code>uppercased()</code> and <code>lowercased()</code> create new strings without changing the original.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let text = "Swift"
let start = text.startIndex
let end = text.index(start, offsetBy: 3)
let sub = text[start..<end]  // "Swi"
print(sub)
print(text.uppercased())`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates how to extract a substring and change string case without modifying the original string.
    </p>
  </>
);

export default SwiftStrings;
