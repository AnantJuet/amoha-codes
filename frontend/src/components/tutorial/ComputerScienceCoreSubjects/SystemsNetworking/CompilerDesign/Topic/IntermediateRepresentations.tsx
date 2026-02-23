import React from "react";

const IntermediateRepresentations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Intermediate Representations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Intermediate Representations (IR) can be classified by their level of abstraction - from
      high-level representations that closely mirror source code structure to low-level forms
      that are closer to machine code. Understanding these levels helps in choosing the right
      IR for different compiler phases and optimizations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Classification by Abstraction Level</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Abstraction Hierarchy:

    Source Code (Highest Level)
          ↓
    ┌─────────────────────────────────────┐
    │     HIGH-LEVEL IR                   │
    │  - Abstract Syntax Trees (AST)      │
    │  - High-level flow graphs           │
    │  - Preserves source structure       │
    └─────────────────────────────────────┘
          ↓
    ┌─────────────────────────────────────┐
    │     MEDIUM-LEVEL IR                 │
    │  - Three-Address Code (TAC)         │
    │  - Quadruples/Triples               │
    │  - SSA Form                         │
    │  - Machine-independent operations   │
    └─────────────────────────────────────┘
          ↓
    ┌─────────────────────────────────────┐
    │     LOW-LEVEL IR                    │
    │  - Register Transfer Language (RTL) │
    │  - Virtual machine code             │
    │  - Close to target machine          │
    └─────────────────────────────────────┘
          ↓
    Machine Code (Lowest Level)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">High-Level IR</h2>
    <p className="leading-relaxed">
      High-level IRs preserve source language constructs and are close to the original program
      structure. They are ideal for source-level optimizations and semantic analysis.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Representation</th>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Use Cases</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Abstract Syntax Tree</td>
            <td className="p-3 border">Tree structure, preserves hierarchy</td>
            <td className="p-3 border">Semantic analysis, type checking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parse Tree</td>
            <td className="p-3 border">Full syntactic structure</td>
            <td className="p-3 border">Syntax-directed translation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High-level DAG</td>
            <td className="p-3 border">Shared subexpressions</td>
            <td className="p-3 border">Common subexpression elimination</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`High-Level IR Example (AST):

Source: if (x > 0) y = x * 2; else y = -x;

AST Representation:
              if-else
             /   |   \\
            >    =    =
           /\\   /\\   /\\
          x  0 y  *  y  -
                /\\     |
               x  2    x

Characteristics:
- Preserves control structure (if-else)
- Maintains operator precedence
- Easy source-to-source transformation
- Suitable for high-level optimizations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Medium-Level IR</h2>
    <p className="leading-relaxed">
      Medium-level IRs are machine-independent but linearized. They break down complex operations
      into simple instructions while remaining independent of target architecture details.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Medium-Level IR Example (Three-Address Code):

Source: if (x > 0) y = x * 2; else y = -x;

TAC Representation:
    (1)  if x > 0 goto (3)
    (2)  goto (5)
    (3)  t1 = x * 2
    (4)  y = t1
         goto (7)
    (5)  t2 = -x
    (6)  y = t2
    (7)  (continue)

Characteristics:
- Linear sequence of instructions
- Explicit control flow (goto)
- Temporary variables for intermediate results
- Machine-independent operations`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Static Single Assignment (SSA) Form</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSA Form Example:

Original Code:
    x = 1
    x = 2
    y = x

SSA Form:
    x1 = 1
    x2 = 2
    y1 = x2

With Control Flow (phi functions):
    if (cond) x = a; else x = b;
    y = x;

SSA Form:
    if (cond) x1 = a; else x2 = b;
    x3 = phi(x1, x2)   ; Choose based on path taken
    y1 = x3

Benefits:
- Each variable assigned exactly once
- Simplifies data-flow analysis
- Enables powerful optimizations
- Used in LLVM, GCC (GIMPLE)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Low-Level IR</h2>
    <p className="leading-relaxed">
      Low-level IRs are close to target machine code, exposing machine-specific details like
      registers, memory addressing modes, and instruction formats.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Low-Level IR Example (RTL-like):

Source: y = x * 2 + 1;

Low-Level IR:
    (set (reg:SI 100)           ; t1 = x
         (mem:SI (symbol_ref x)))
    (set (reg:SI 101)           ; t2 = t1 << 1 (multiply by 2)
         (ashift:SI (reg:SI 100) (const_int 1)))
    (set (reg:SI 102)           ; t3 = t2 + 1
         (plus:SI (reg:SI 101) (const_int 1)))
    (set (mem:SI (symbol_ref y)) ; y = t3
         (reg:SI 102))

Characteristics:
- Uses virtual registers (reg:SI 100, etc.)
- Exposes machine operations (ashift for multiply)
- Includes data types (SI = SImode, 32-bit integer)
- Close to target instruction selection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of IR Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">High-Level IR</th>
            <th className="p-3 border">Medium-Level IR</th>
            <th className="p-3 border">Low-Level IR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Structure</td>
            <td className="p-3 border">Hierarchical (tree)</td>
            <td className="p-3 border">Linear (list)</td>
            <td className="p-3 border">Linear (instructions)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Abstraction</td>
            <td className="p-3 border">Source-like</td>
            <td className="p-3 border">Machine-independent</td>
            <td className="p-3 border">Machine-specific</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Control Flow</td>
            <td className="p-3 border">Implicit (structure)</td>
            <td className="p-3 border">Explicit (goto/labels)</td>
            <td className="p-3 border">Explicit (branches)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Variables</td>
            <td className="p-3 border">Source names</td>
            <td className="p-3 border">Names + temporaries</td>
            <td className="p-3 border">Virtual/physical registers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimizations</td>
            <td className="p-3 border">Inlining, specialization</td>
            <td className="p-3 border">CSE, dead code, loops</td>
            <td className="p-3 border">Register allocation, scheduling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Graphical vs Linear IR</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Graphical IR (Tree/DAG):

Expression: a * b + a * b

    DAG Representation:
            +
            |
            *  ← Shared node
           / \\
          a   b

    - Nodes represent operations
    - Edges represent data flow
    - Shared nodes = common subexpressions
    - Good for expression optimization


Linear IR (TAC):

    t1 = a * b
    t2 = t1 + t1    ; CSE optimization applied

    - Sequential instructions
    - Explicit temporaries
    - Easy to transform
    - Maps well to machine code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Level IR in Modern Compilers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GCC Compiler Pipeline:

Source Code
    ↓
┌────────────────────────┐
│  GENERIC (High-Level)  │ ← Language-specific AST
└────────────────────────┘
    ↓
┌────────────────────────┐
│  GIMPLE (Medium-Level) │ ← SSA-based, language-independent
└────────────────────────┘
    ↓ (optimizations)
┌────────────────────────┐
│  RTL (Low-Level)       │ ← Register Transfer Language
└────────────────────────┘
    ↓
Machine Code


LLVM Compiler Pipeline:

Source Code (via Clang)
    ↓
┌────────────────────────┐
│  Clang AST (High)      │
└────────────────────────┘
    ↓
┌────────────────────────┐
│  LLVM IR (Medium)      │ ← SSA-based, typed
└────────────────────────┘
    ↓ (optimizations)
┌────────────────────────┐
│  SelectionDAG (Low)    │ ← Target-specific DAG
└────────────────────────┘
    ↓
┌────────────────────────┐
│  Machine IR (Low)      │ ← Virtual registers
└────────────────────────┘
    ↓
Target Assembly`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>High-Level IR: Preserves source structure (AST, parse tree)</li>
        <li>Medium-Level IR: Machine-independent, linear (TAC, SSA, quadruples)</li>
        <li>Low-Level IR: Close to machine code (RTL, virtual machine code)</li>
        <li>SSA form assigns each variable exactly once, enabling powerful optimizations</li>
        <li>Graphical IRs (trees, DAGs) good for expression analysis</li>
        <li>Linear IRs (TAC) good for code generation</li>
        <li>Modern compilers use multiple IR levels (GCC: GENERIC to GIMPLE to RTL)</li>
        <li>Choice of IR affects which optimizations are easy to implement</li>
      </ul>
    </div>
  </div>
);

export default IntermediateRepresentations;
