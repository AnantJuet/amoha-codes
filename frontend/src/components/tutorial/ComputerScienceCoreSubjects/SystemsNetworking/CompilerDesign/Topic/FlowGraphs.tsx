import React from "react";

const FlowGraphs: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Control Flow Graphs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Control Flow Graph (CFG) is a directed graph that represents all possible
      execution paths through a program. The nodes represent basic blocks, and
      the edges represent control flow between blocks. CFGs are essential for
      program analysis and optimization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A Control Flow Graph G = (N, E, Entry, Exit) consists of:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>N:</strong> A set of nodes (basic blocks)</li>
      <li><strong>E:</strong> A set of directed edges (control flow)</li>
      <li><strong>Entry:</strong> A unique entry node</li>
      <li><strong>Exit:</strong> A unique exit node</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Control Flow Graph Structure:

    +-------+
    | Entry |
    +---+---+
        |
        v
    +---+---+
    |  B1   |  <-- Basic Block 1
    +---+---+
        |
    +---+---+
    |       |
    v       v
+---+---+ +---+---+
|  B2   | |  B3   |  <-- Branching
+---+---+ +---+---+
    |       |
    +---+---+
        |
        v
    +---+---+
    |  B4   |  <-- Merge point
    +---+---+
        |
        v
    +---+---+
    | Exit  |
    +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building a CFG</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Construct Control Flow Graph

Input: List of basic blocks
Output: Control Flow Graph

1. Create a node for each basic block

2. Add edges:
   For each basic block B ending with instruction I:

   a) If I is a conditional branch "if cond goto L":
      - Add edge B -> block starting at L (true branch)
      - Add edge B -> next block (false branch)

   b) If I is unconditional "goto L":
      - Add edge B -> block starting at L

   c) If I is neither (falls through):
      - Add edge B -> next block

   d) If I is "return" or program end:
      - Add edge B -> Exit

3. Add Entry node with edge to first block`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Building a CFG</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    x = 10;
    if (x > 5) {
        y = x * 2;
    } else {
        y = x + 1;
    }
    z = y;

Three-Address Code:
    B1: x = 10
        if x > 5 goto B2

    B3: y = x + 1         (else branch)
        goto B4

    B2: y = x * 2         (then branch)

    B4: z = y

Control Flow Graph:

         +-------+
         | Entry |
         +---+---+
             |
             v
         +---+---+
         |  B1   |
         | x = 10|
         |if x>5 |
         +---+---+
            / \
      true /   \ false
          /     \
    +----v-+   +--v---+
    |  B2  |   |  B3  |
    |y=x*2 |   |y=x+1 |
    +----+-+   +--+---+
         \       /
          \     /
           \   /
         +--v-v--+
         |  B4   |
         | z = y |
         +---+---+
             |
             v
         +---+---+
         | Exit  |
         +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CFG for Loops</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`While Loop:
    while (i < n) {
        sum = sum + a[i];
        i = i + 1;
    }

CFG:
         +-------+
         | Entry |
         +---+---+
             |
             v
         +---+---+<------+
         |  B1   |       |
         |if i>=n|       |
         | goto  |       |
         +---+---+       |
            / \          |
     false /   \ true    |
          /     \        |
    +----v-+   +-v----+  |
    |  B2  |   |  B3  |  |
    | body |   |(exit)|  |
    +----+-+   +------+  |
         |               |
         +---------------+
         (back edge - loop)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CFG Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Predecessor</td>
            <td className="p-3 border">Block with edge leading to current block</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Successor</td>
            <td className="p-3 border">Block with edge from current block</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dominator</td>
            <td className="p-3 border">Block on every path from entry to current</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Back Edge</td>
            <td className="p-3 border">Edge from node to its dominator (loops)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Natural Loop</td>
            <td className="p-3 border">Loop identified by back edge and its body</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loop Header</td>
            <td className="p-3 border">Entry point of a loop</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dominators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dominator Relation:
Block A dominates block B if every path from Entry
to B must go through A.

Example:
         +-------+
         | Entry |
         +---+---+
             |
             v
         +---+---+
         |  B1   | <-- B1 dominates B2, B3, B4
         +---+---+
            / \
           /   \
    +-----v+   +v-----+
    |  B2  |   |  B3  |
    +--+---+   +---+--+
       |           |
       +-----+-----+
             |
             v
         +---+---+
         |  B4   | <-- B1 dominates B4
         +-------+    (B2, B3 do NOT dominate B4)

Dominator Tree:
    Entry
      |
      B1
     / \
    B2  B3
      \ /
       B4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Uses of Control Flow Graphs</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Flow Analysis:</strong> Propagate information along edges</li>
      <li><strong>Loop Detection:</strong> Find back edges and natural loops</li>
      <li><strong>Dead Code Elimination:</strong> Find unreachable blocks</li>
      <li><strong>Code Optimization:</strong> Loop-invariant code motion, etc.</li>
      <li><strong>Code Generation:</strong> Instruction scheduling</li>
      <li><strong>Testing:</strong> Path coverage analysis</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CFG nodes are basic blocks, edges represent control flow</li>
        <li>Every CFG has unique Entry and Exit nodes</li>
        <li>Edges are added based on branches, gotos, and fall-through</li>
        <li>Back edges indicate loops in the program</li>
        <li>Dominators help identify loop structure</li>
        <li>CFG is essential for data flow analysis and optimization</li>
      </ul>
    </div>
  </div>
);

export default FlowGraphs;
