import React from "react";

const SwiftAssignmentOperators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Assignment Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <code>=</code> to assign a value. Compound assignment operators like <code>+=</code>, <code>-=</code>, <code>*=</code> and <code>/=</code> update a variable in place.
    </p>

    {/* Compound Assignment */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Compound Assignment</h2>
    <p className=" leading-relaxed mt-3">
      Use compound operators like <code>+=</code> and <code>*=</code> to update a variable in place.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var total = 10
total += 5
print(total)
total -= 3
print(total)
total *= 2
print(total)
total /= 4
print(total)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows updating a variable with compound assignment operators.
    </p>

    {/* Append to String */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Append to String</h2>
    <p className=" leading-relaxed mt-3">
      You can also use <code>+=</code> with strings to append text to a mutable string variable.
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

export default SwiftAssignmentOperators;
