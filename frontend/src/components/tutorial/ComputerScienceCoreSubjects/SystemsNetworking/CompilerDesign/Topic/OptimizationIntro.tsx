import React from "react";

const OptimizationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Code Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Code optimization is a crucial phase in compilation that transforms intermediate code
      to improve the efficiency of the generated target code. The goal is to produce faster
      and smaller code while preserving the program's semantics (meaning and functionality).
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Code Optimization?</h2>
    <p className="leading-relaxed">
      Code optimization refers to the techniques and transformations applied by compilers
      to improve the performance of generated code. These optimizations can reduce execution
      time, memory usage, power consumption, or code size without altering the program's
      observable behavior.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Compilation Pipeline with Optimization:

Source Code
    |
    v
+-------------------+
| Lexical Analysis  |
+-------------------+
    |
    v
+-------------------+
| Syntax Analysis   |
+-------------------+
    |
    v
+-------------------+
| Semantic Analysis |
+-------------------+
    |
    v
+-------------------+
| IR Generation     |
+-------------------+
    |
    v
+-------------------+
| CODE OPTIMIZATION |  <-- Focus Area
+-------------------+
    |
    v
+-------------------+
| Code Generation   |
+-------------------+
    |
    v
Target Code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Optimize Code?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Reduce execution time</td>
            <td className="p-3 border">Faster programs, better UX</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory</td>
            <td className="p-3 border">Reduce memory footprint</td>
            <td className="p-3 border">Run on limited devices</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Reduce energy consumption</td>
            <td className="p-3 border">Longer battery life</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Code Size</td>
            <td className="p-3 border">Reduce binary size</td>
            <td className="p-3 border">Faster downloads, cache fit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Optimization</h2>

    <h3 className="text-2xl font-semibold mt-6">By Scope</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Local Optimization
   - Within a single basic block
   - No control flow analysis needed
   - Examples: constant folding, algebraic simplification

2. Global Optimization
   - Across basic blocks within a function
   - Requires control flow analysis
   - Examples: common subexpression elimination, dead code removal

3. Inter-procedural Optimization
   - Across function boundaries
   - Requires call graph analysis
   - Examples: function inlining, interprocedural constant propagation`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">By Transformation Type</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Machine-Independent Optimizations:
- Applied to intermediate representation
- Not tied to target architecture
- Examples: constant folding, dead code elimination

Machine-Dependent Optimizations:
- Applied during code generation
- Exploit target architecture features
- Examples: register allocation, instruction scheduling`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simple Optimization Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    x = 10 + 20;        // Compile-time constant
    y = x * 2;
    z = y + 0;          // Adding zero
    w = z * 1;          // Multiplying by one
    if (false) {        // Dead code
        a = 100;
    }

After Optimization:
    x = 30;             // Constant folded
    y = 60;             // Constant propagated & folded
    z = 60;             // Algebraic identity (+ 0)
    w = 60;             // Algebraic identity (* 1)
    // Dead code removed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimization Phases</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Analysis:</strong> Gather information about the program (data flow, control flow)</li>
      <li><strong>Transformation:</strong> Apply optimizations based on analysis results</li>
      <li><strong>Verification:</strong> Ensure transformations preserve program semantics</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Challenges in Optimization</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Correctness:</strong> Optimizations must not change program behavior</li>
        <li><strong>Compile Time:</strong> Aggressive optimization can slow compilation</li>
        <li><strong>Trade-offs:</strong> Speed vs. code size, optimization vs. debugging</li>
        <li><strong>Undecidability:</strong> Perfect optimization is theoretically undecidable</li>
        <li><strong>Interactions:</strong> Optimizations may enable or disable other optimizations</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Code optimization improves efficiency without changing program semantics</li>
        <li>Optimizations can be local, global, or inter-procedural in scope</li>
        <li>Machine-independent optimizations work on intermediate code</li>
        <li>Machine-dependent optimizations exploit target architecture</li>
        <li>Perfect optimization is undecidable - compilers use heuristics</li>
        <li>Optimization involves analysis, transformation, and verification phases</li>
      </ul>
    </div>
  </div>
);

export default OptimizationIntro;
