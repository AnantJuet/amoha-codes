import React from "react";

const GlobalOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Global Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Global optimization refers to optimizations that span multiple basic blocks
      within a single function or procedure. Unlike local optimization, global
      optimization requires analysis of the control flow graph to understand how
      data flows through different execution paths.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Global Optimization?</h2>
    <p className="leading-relaxed">
      Global optimization considers the entire function body, analyzing how values
      propagate through different branches and loops. It uses data flow analysis
      to gather information needed for safe and effective transformations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scope Comparison:

Local Optimization:
    +--------+     +--------+     +--------+
    |  B1    |     |  B2    |     |  B3    |
    | (opt)  |     | (opt)  |     | (opt)  |
    +--------+     +--------+     +--------+
    Each block optimized independently

Global Optimization:
    +--------+
    |  B1    |
    +---+----+
        |
    +---v----+     +--------+
    |  B2    +---->+  B3    |
    +---+----+     +---+----+
        |              |
        +------+-------+
               |
           +---v----+
           |  B4    |
           +--------+
    Entire control flow graph analyzed together`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global vs Local Optimization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Local Optimization</th>
            <th className="p-3 border">Global Optimization</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Single basic block</td>
            <td className="p-3 border">Entire function/procedure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Analysis</td>
            <td className="p-3 border">None or minimal</td>
            <td className="p-3 border">Data flow analysis required</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Linear time</td>
            <td className="p-3 border">Often iterative (fixed-point)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Safety</td>
            <td className="p-3 border">Easy to verify</td>
            <td className="p-3 border">Requires careful analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Effectiveness</td>
            <td className="p-3 border">Limited opportunities</td>
            <td className="p-3 border">More opportunities found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Global Optimizations</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Global Common Subexpression Elimination</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    B1: t1 = a + b
        if (x) goto B2 else goto B3

    B2: t2 = a + b     // Common with B1
        ...

    B3: t3 = a + b     // Common with B1
        ...

After:
    B1: t1 = a + b
        if (x) goto B2 else goto B3

    B2: t2 = t1        // Reuse t1
        ...

    B3: t3 = t1        // Reuse t1
        ...`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Global Constant Propagation</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    B1: x = 5
        if (cond) goto B2 else goto B3

    B2: y = x + 1      // x is always 5 here
        goto B4

    B3: z = x * 2      // x is always 5 here
        goto B4

    B4: w = x          // x is always 5 here

After:
    B1: x = 5
        if (cond) goto B2 else goto B3

    B2: y = 6          // 5 + 1
        goto B4

    B3: z = 10         // 5 * 2
        goto B4

    B4: w = 5          // Propagated`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Global Dead Code Elimination</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    B1: x = compute()
        if (cond) goto B2 else goto B3

    B2: x = 10         // Kills the definition from B1
        goto B4

    B3: x = 20         // Kills the definition from B1
        goto B4

    B4: return x

After (x from B1 is dead):
    B1: // x = compute() removed
        if (cond) goto B2 else goto B3

    B2: x = 10
        goto B4

    B3: x = 20
        goto B4

    B4: return x`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Flow Analysis Framework</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Global Optimization Process:

1. Build Control Flow Graph (CFG)
   - Identify basic blocks
   - Add edges for control flow

2. Perform Data Flow Analysis
   - Choose appropriate analysis (reaching definitions,
     available expressions, live variables, etc.)
   - Compute data flow equations
   - Iterate until fixed point

3. Apply Transformations
   - Use analysis results to identify opportunities
   - Transform code safely

4. Repeat if necessary
   - Some optimizations enable others`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges in Global Optimization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Multiple paths:</strong> Must consider all possible execution paths</li>
      <li><strong>Loops:</strong> Require iterative analysis (fixed-point computation)</li>
      <li><strong>Pointers/Aliases:</strong> Complicate data flow analysis</li>
      <li><strong>Side effects:</strong> Function calls may modify global state</li>
      <li><strong>Compile time:</strong> Analysis can be expensive for large functions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example: Complete Global Optimization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original:
    a = 1
    b = 2
    c = a + b       // c = 3
    if (x > 0) {
        d = a + b   // Common subexpr
        e = c + d   // e = 6
    } else {
        f = a + b   // Common subexpr
        g = c + f   // g = 6
    }
    h = a + b       // Common subexpr

After Global Optimization:
    a = 1
    b = 2
    c = 3           // Constant folded
    t = 3           // a + b computed once
    if (x > 0) {
        d = t       // Reuse t
        e = 6       // Constant folded
    } else {
        f = t       // Reuse t
        g = 6       // Constant folded
    }
    h = t           // Reuse t`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Global optimization spans multiple basic blocks within a function</li>
        <li>Requires control flow graph and data flow analysis</li>
        <li>More powerful than local optimization but more complex</li>
        <li>Common global optimizations: CSE, constant propagation, dead code elimination</li>
        <li>Must consider all possible execution paths for correctness</li>
        <li>Iterative analysis needed for loops (fixed-point computation)</li>
      </ul>
    </div>
  </div>
);

export default GlobalOptimization;
