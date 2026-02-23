import React from "react";

const SwiftLogicalOperators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Logical Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Combine booleans with <code>&&</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT).
    </p>

    {/* Logical AND */}
    <h2 className="text-2xl font-bold  mt-6">Logical AND (&&)</h2>
    <p className=" leading-relaxed mt-3">
      Both must be true for the result to be true.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let isOwner = true
let isAdmin = false
print(isOwner && isAdmin)
print(true && true)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates logical AND with boolean values.
    </p>

    {/* Logical OR */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Logical OR (||)</h2>
    <p className=" leading-relaxed mt-3">
      At least one true makes the result true.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let a = true
let b = false
print(a || b)
print(false || false)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates logical OR with boolean values.
    </p>

    {/* Logical NOT */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Logical NOT (!)</h2>
    <p className=" leading-relaxed mt-3">
      Flip a boolean value: <code>true</code> becomes <code>false</code> and vice versa.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let flag = false
print(!flag)
print(!true)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates the logical NOT operator.
    </p>
  </>
);

export default SwiftLogicalOperators;
