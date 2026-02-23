import React from "react";

const SwiftComparisonOperators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Comparison Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use comparison operators to compare values: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. They return <code>Bool</code>.
    </p>

    {/* Compare Integers */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Compare Integers</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, and <code>&lt;=</code> to compare numeric values. The result is a <code>Bool</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let a = 5, b = 2
print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= 5)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example prints the result of several comparisons.
    </p>

    {/* Compare Strings */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Compare Strings</h2>
    <p className=" leading-relaxed mt-3">
      Strings compare lexicographically (dictionary order). Comparison is case-sensitive.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`print("apple" < "banana")  // true
print("Swift" == "Swift")  // true
print("cat" > "car")       // true`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example compares strings using the same operators.
    </p>
  </>
);

export default SwiftComparisonOperators;
