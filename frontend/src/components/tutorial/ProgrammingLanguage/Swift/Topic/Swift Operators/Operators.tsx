import React from "react";

const SwiftOperators: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Operators perform operations on values. Common groups are arithmetic, assignment, comparison, and logical operators. Swift also has well-defined precedence.
    </p>

    {/* Operator Families */}
    <h2 className="text-2xl font-bold  mt-6">Operator Families at a Glance</h2>
    <p className=" leading-relaxed mt-3">
      Explore arithmetic, assignment, comparison, and logical operators, and how precedence affects evaluation order.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let a = 5, b = 2
// Arithmetic
print(a + b)
// Comparison
print(a > b)
// Logical
let t = true, f = false
print(t && !f)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows arithmetic (<code>+</code>), comparison (<code>&gt;</code>), and logical (<code>&&</code>, <code>!</code>) operators.
    </p>

    {/* Unary and Ternary */}
    <h2 className="text-2xl font-bold  mt-6">Unary and Ternary Operators</h2>
    <p className=" leading-relaxed mt-3">
      Unary operators act on a single operand (like <code>!</code> to negate a boolean). The ternary conditional operator <code>condition ? a : b</code> chooses between two values.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let flag = false
print(!flag)              // unary NOT

let score = 85
let label = (score >= 90) ? "A" : "Not A"
print(label)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates the unary NOT operator and the ternary conditional operator for choosing between two values.
    </p>
  </>
);

export default SwiftOperators;
