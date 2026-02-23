import React from "react";

const SwiftStringsNumbers: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Strings: Numbers and Strings
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use string interpolation to mix numbers with text. Convert numbers to strings explicitly with <code>String(value)</code> when concatenating.
    </p>

    {/* Mix Text and Numbers */}
    <h2 className="text-2xl font-bold mt-6">Mix Text and Numbers</h2>
    <p className=" leading-relaxed mt-3">
      Use interpolation to embed numbers directly in strings, or convert numbers with <code>String(value)</code> when concatenating.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let age = 5
print("Age: \(age)")          // interpolation
let text = "You are " + String(age)
print(text)
let pi = 3.14
print("pi = \(pi)")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows interpolation and explicit conversion with <code>String()</code>.
    </p>

    {/* Convert String to Number */}
    <h2 className="text-2xl font-bold mt-6">Convert String to Number</h2>
    <p className=" leading-relaxed mt-3">
      Use numeric initializers like <code>Int("123")</code> which return optionals because conversion can fail.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let s1 = "123"
let n1 = Int(s1)           // Int?
print(n1 ?? 0)

let s2 = "abc"
let n2 = Int(s2)           // nil (not a number)
print(n2 == nil)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates converting a string to a number safely using optionals.
    </p>
  </>
);

export default SwiftStringsNumbers;
