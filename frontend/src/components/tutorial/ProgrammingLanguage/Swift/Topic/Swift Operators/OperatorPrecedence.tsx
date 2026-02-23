import React from "react";

const SwiftOperatorPrecedence: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Operator Precedence
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Operator precedence determines evaluation order. Multiplication comes before addition; <code>&&</code> before <code>||</code>. Use parentheses to control order.
    </p>

    {/* Control Order of Evaluation */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Control Order of Evaluation with Precedence</h2>
    <p className=" leading-relaxed mt-3">
      Understand how operators are prioritized and add parentheses to make evaluation order explicit when needed.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`print(2 + 3 * 4)
print((2 + 3) * 4)
print(true || false && false)
print((true || false) && false)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows how parentheses change the result.
    </p>

    {/* Boolean Precedence */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Boolean Precedence</h2>
    <p className=" leading-relaxed mt-3">
      <code>&&</code> is evaluated before <code>||</code>. Use parentheses to clarify intention.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let a = true
let b = false
let c = true

print(a || b && c)         // true (&& before ||)
print((a || b) && c)       // true
print(a && b || c)         // true ((a && b) || c)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates how boolean operators are prioritized and how parentheses affect evaluation.
    </p>
  </>
);

export default SwiftOperatorPrecedence;
