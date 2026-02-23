import React from "react";

const BasicBlocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Basic Blocks in Control Flow
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A basic block is a maximal sequence of consecutive instructions with exactly
      one entry point (the first instruction) and one exit point (the last instruction).
      Basic blocks are fundamental units for control flow analysis and optimization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition of Basic Block</h2>
    <p className="leading-relaxed">
      A basic block is a straight-line code sequence with:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>No branches into the middle of the block</li>
      <li>No branches out of the middle of the block</li>
      <li>Once execution starts, all instructions execute sequentially</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Block Properties:

    Entry Point (Leader)
         |
         v
    +------------------+
    |  Instruction 1   |  <-- First instruction (leader)
    |  Instruction 2   |
    |  Instruction 3   |
    |  ...             |
    |  Instruction n   |  <-- Last instruction (may be branch)
    +------------------+
         |
         v
    Exit Point(s)

- Control ALWAYS enters at first instruction
- Control ALWAYS leaves after last instruction
- No jumps into or out of the middle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying Leaders</h2>
    <p className="leading-relaxed">
      A leader is the first instruction of a basic block. Leaders are identified using these rules:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Rules for Identifying Leaders:

1. The first instruction is a leader

2. Any instruction that is the target of a
   conditional or unconditional jump is a leader

3. Any instruction immediately following a
   conditional or unconditional jump is a leader`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm to Partition into Basic Blocks</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Partition into Basic Blocks

Input: A sequence of three-address instructions
Output: A list of basic blocks

1. Identify all leaders:
   - First instruction is a leader
   - Target of any jump is a leader
   - Instruction after any jump is a leader

2. For each leader:
   - Its basic block consists of the leader and
     all following instructions up to (but not
     including) the next leader or end of program`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Partitioning into Basic Blocks</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three-Address Code:
    1:  i = 1                   <- Leader (first instruction)
    2:  j = 1
    3:  t1 = 10 * i             <- Leader (target of goto at 11)
    4:  t2 = t1 + j
    5:  t3 = 8 * t2
    6:  t4 = t3 - 88
    7:  a[t4] = 0.0
    8:  j = j + 1
    9:  if j <= 10 goto 3       <- Leader (after goto at 11)
    10: i = i + 1               <- Leader (after conditional at 9)
    11: if i <= 10 goto 3
    12: i = 1                   <- Leader (after conditional at 11)
    13: t5 = i - 1
    14: ...

Basic Blocks:
    B1: [1, 2]          // i = 1; j = 1
    B2: [3, 4, 5, 6, 7, 8, 9]  // Loop body
    B3: [10, 11]        // Outer loop increment/test
    B4: [12, 13, ...]   // After loops`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code:
    sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum + a[i];
    }
    return sum;

Three-Address Code with Basic Blocks:

    +------------------+
    | B1:              |
    |   sum = 0        |
    |   i = 1          |
    +--------+---------+
             |
             v
    +--------+---------+
    | B2:              |<----+
    |   if i > n       |     |
    |     goto B4      |     |
    +--------+---------+     |
             |               |
             v               |
    +--------+---------+     |
    | B3:              |     |
    |   t1 = i * 4     |     |
    |   t2 = a[t1]     |     |
    |   sum = sum + t2 |     |
    |   i = i + 1      |     |
    |   goto B2        +-----+
    +------------------+

    +------------------+
    | B4:              |
    |   return sum     |
    +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Basic Blocks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Entry</td>
            <td className="p-3 border">Control enters only at first instruction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Single Exit</td>
            <td className="p-3 border">Control leaves only at last instruction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequential</td>
            <td className="p-3 border">Instructions execute in order</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maximal</td>
            <td className="p-3 border">Cannot be extended without violating properties</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Atomic for Analysis</td>
            <td className="p-3 border">Treated as single unit in data flow analysis</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Uses of Basic Blocks</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Control Flow Graph:</strong> Nodes in CFG are basic blocks</li>
      <li><strong>Local Optimization:</strong> Optimizations within a single block</li>
      <li><strong>Data Flow Analysis:</strong> Unit of analysis in global optimization</li>
      <li><strong>Instruction Scheduling:</strong> Schedule instructions within blocks</li>
      <li><strong>Register Allocation:</strong> Compute live ranges within blocks</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>A basic block is a maximal sequence with one entry and one exit</li>
        <li>Leaders are identified by: first instruction, jump targets, instructions after jumps</li>
        <li>Each basic block starts with a leader and includes all instructions until the next leader</li>
        <li>Basic blocks are nodes in the control flow graph</li>
        <li>They form the foundation for control flow and data flow analysis</li>
        <li>Local optimizations operate within a single basic block</li>
      </ul>
    </div>
  </div>
);

export default BasicBlocks;
