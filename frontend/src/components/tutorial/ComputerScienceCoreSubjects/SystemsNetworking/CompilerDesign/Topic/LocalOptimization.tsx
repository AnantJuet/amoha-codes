import React from "react";

const LocalOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Local Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Local optimization refers to optimizations performed within a single basic block.
      Since basic blocks have no internal control flow, local optimizations are simpler
      and safer than global optimizations. They form the foundation of more advanced
      optimization techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Local Optimization?</h2>
    <p className="leading-relaxed">
      Local optimization operates on a single basic block - a sequence of consecutive
      statements with one entry point (first statement) and one exit point (last statement).
      No jumps into or out of the middle of the block are allowed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Block Structure:

    +------------------+
    |  Entry Point     |  <-- Control enters here
    +------------------+
    |  Statement 1     |
    |  Statement 2     |
    |  Statement 3     |
    |  ...             |
    |  Statement n     |
    +------------------+
    |  Exit Point      |  <-- Control leaves here
    +------------------+

Local optimization operates WITHIN this block only.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Local Optimizations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Optimization</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Constant Folding</td>
            <td className="p-3 border">Evaluate constant expressions</td>
            <td className="p-3 border font-mono text-gray-900">x = 3 + 5 {"-->"} x = 8</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Constant Propagation</td>
            <td className="p-3 border">Replace variables with constants</td>
            <td className="p-3 border font-mono text-gray-900">x=5; y=x+1 {"-->"} y=6</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Copy Propagation</td>
            <td className="p-3 border">Replace copies with original</td>
            <td className="p-3 border font-mono text-gray-900">x=y; z=x {"-->"} z=y</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dead Code Elimination</td>
            <td className="p-3 border">Remove unused computations</td>
            <td className="p-3 border font-mono text-gray-900">x=5 (unused) {"-->"} removed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Algebraic Simplification</td>
            <td className="p-3 border">Apply algebraic identities</td>
            <td className="p-3 border font-mono text-gray-900">x*1 {"-->"} x</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strength Reduction</td>
            <td className="p-3 border">Replace expensive ops</td>
            <td className="p-3 border font-mono text-gray-900">x*2 {"-->"} x{"<<"}1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Local Optimization Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Basic Block:
    t1 = 10
    t2 = 20
    t3 = t1 + t2        // Constant expression
    t4 = t3             // Copy
    t5 = t4 * 1         // Algebraic identity
    t6 = t5 * 2         // Strength reduction candidate
    t7 = a + b          // Useful computation
    t8 = t1 + t2        // Common subexpression with t3

Step 1 - Constant Folding:
    t1 = 10
    t2 = 20
    t3 = 30             // 10 + 20 folded
    t4 = t3
    t5 = t4 * 1
    t6 = t5 * 2
    t7 = a + b
    t8 = 30             // 10 + 20 folded

Step 2 - Copy Propagation:
    t1 = 10
    t2 = 20
    t3 = 30
    t4 = 30             // t3 propagated
    t5 = 30 * 1         // t4 propagated
    t6 = t5 * 2
    t7 = a + b
    t8 = 30

Step 3 - Algebraic Simplification:
    t1 = 10
    t2 = 20
    t3 = 30
    t4 = 30
    t5 = 30             // 30 * 1 = 30
    t6 = t5 * 2
    t7 = a + b
    t8 = 30

Step 4 - Strength Reduction:
    t1 = 10
    t2 = 20
    t3 = 30
    t4 = 30
    t5 = 30
    t6 = t5 << 1        // * 2 to << 1
    t7 = a + b
    t8 = 30

Step 5 - Dead Code Elimination (if t1-t6, t8 unused later):
    t7 = a + b`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Value Numbering</h2>
    <p className="leading-relaxed">
      Value numbering is a technique for detecting common subexpressions within a basic block.
      Each expression is assigned a value number, and expressions with the same value number
      compute the same value.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm:
1. Maintain hash table: expression -> value number
2. For each statement x = y op z:
   a. Look up value numbers for y and z
   b. Form expression (op, VN(y), VN(z))
   c. If expression in table, reuse its value number
   d. Otherwise, assign new value number

Example:
    a = b + c       VN(a) = 1, Expression: (+, VN(b), VN(c))
    d = b + c       VN(d) = 1, Same expression -> same VN
    e = a           VN(e) = 1, Copy -> same VN as source
    f = d + e       VN(f) = 2, Expression: (+, 1, 1)

Result: a, d, and e all have the same value.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Local Optimization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Simplicity:</strong> No control flow analysis required</li>
      <li><strong>Safety:</strong> Easier to verify correctness</li>
      <li><strong>Efficiency:</strong> Fast to compute (linear in block size)</li>
      <li><strong>Foundation:</strong> Enables further global optimizations</li>
      <li><strong>Applicability:</strong> Works on any intermediate representation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Limitations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Cannot optimize across basic block boundaries</li>
      <li>Misses opportunities in loops and branches</li>
      <li>Limited scope may leave redundancies</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Local optimization works within a single basic block</li>
        <li>No control flow analysis is needed for local optimizations</li>
        <li>Common local optimizations: constant folding, copy propagation, dead code elimination</li>
        <li>Value numbering detects common subexpressions in a basic block</li>
        <li>Local optimizations are fast, safe, and form the foundation for global optimizations</li>
        <li>Multiple passes may be needed as one optimization enables another</li>
      </ul>
    </div>
  </div>
);

export default LocalOptimization;
