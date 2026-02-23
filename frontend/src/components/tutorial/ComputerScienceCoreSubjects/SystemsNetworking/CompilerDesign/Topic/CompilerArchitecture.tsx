import React from "react";

const CompilerArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Compiler Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A compiler is logically divided into two main parts: the <strong>Front End</strong> (analysis)
      and the <strong>Back End</strong> (synthesis). This separation enables modularity, reusability,
      and easier maintenance of compiler components.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overall Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`                    COMPILER ARCHITECTURE
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Source Code                                            │
│       │                                                 │
│       ▼                                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │              FRONT END (Analysis)                │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │   │
│  │  │ Lexical  │→ │  Syntax  │→ │ Semantic │       │   │
│  │  │ Analysis │  │ Analysis │  │ Analysis │       │   │
│  │  └──────────┘  └──────────┘  └──────────┘       │   │
│  └──────────────────────┬──────────────────────────┘   │
│                         │                              │
│                         ▼                              │
│              Intermediate Representation               │
│                         │                              │
│                         ▼                              │
│  ┌─────────────────────────────────────────────────┐   │
│  │              BACK END (Synthesis)                │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │   │
│  │  │   Code   │→ │   Code   │→ │  Target  │       │   │
│  │  │Optimizer │  │Generator │  │   Code   │       │   │
│  │  └──────────┘  └──────────┘  └──────────┘       │   │
│  └─────────────────────────────────────────────────┘   │
│                         │                              │
│                         ▼                              │
│                   Target Code                          │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Front End (Analysis Phase)</h2>
    <p className="leading-relaxed">
      The front end is <strong>language-dependent</strong> and analyzes the source code for correctness.
      It breaks down the source program and creates an intermediate representation.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Input</th>
            <th className="p-3 border">Output</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Lexical Analysis</td>
            <td className="p-3 border">Source Code</td>
            <td className="p-3 border">Token Stream</td>
            <td className="p-3 border">Tokenization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Syntax Analysis</td>
            <td className="p-3 border">Token Stream</td>
            <td className="p-3 border">Parse Tree/AST</td>
            <td className="p-3 border">Grammar validation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Semantic Analysis</td>
            <td className="p-3 border">Parse Tree/AST</td>
            <td className="p-3 border">Annotated AST</td>
            <td className="p-3 border">Type checking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IR Generation</td>
            <td className="p-3 border">Annotated AST</td>
            <td className="p-3 border">Intermediate Code</td>
            <td className="p-3 border">Platform-independent code</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Back End (Synthesis Phase)</h2>
    <p className="leading-relaxed">
      The back end is <strong>machine-dependent</strong> and generates code for the target architecture.
      It takes the intermediate representation and produces optimized target code.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Input</th>
            <th className="p-3 border">Output</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Code Optimization</td>
            <td className="p-3 border">Intermediate Code</td>
            <td className="p-3 border">Optimized IR</td>
            <td className="p-3 border">Improve efficiency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Code Generation</td>
            <td className="p-3 border">Optimized IR</td>
            <td className="p-3 border">Target Code</td>
            <td className="p-3 border">Machine code generation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Target Optimization</td>
            <td className="p-3 border">Target Code</td>
            <td className="p-3 border">Optimized Target</td>
            <td className="p-3 border">Machine-specific optimization</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Supporting Components</h2>

    <h3 className="text-2xl font-semibold mt-6">Symbol Table</h3>
    <p className="leading-relaxed">
      A data structure used throughout compilation to store information about identifiers
      (variables, functions, classes, etc.).
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Name of the identifier</li>
      <li>Type information</li>
      <li>Scope level</li>
      <li>Memory location</li>
      <li>Other attributes</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Error Handler</h3>
    <p className="leading-relaxed">
      Detects, reports, and recovers from errors during various compilation phases:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Lexical Errors:</strong> Invalid characters, malformed tokens</li>
      <li><strong>Syntax Errors:</strong> Grammar violations</li>
      <li><strong>Semantic Errors:</strong> Type mismatches, undeclared variables</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Intermediate Representation (IR)</h2>
    <p className="leading-relaxed">
      The IR serves as a bridge between the front end and back end. Common forms include:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Abstract Syntax Tree (AST):</strong> Tree representation of program structure</li>
      <li><strong>Three-Address Code (TAC):</strong> Simple instructions with at most three operands</li>
      <li><strong>Static Single Assignment (SSA):</strong> Each variable assigned exactly once</li>
      <li><strong>Control Flow Graph (CFG):</strong> Graph of basic blocks and control flow</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: x = a + b * c

Three-Address Code:
    t1 = b * c
    t2 = a + t1
    x = t2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of This Architecture</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Modularity:</strong> Each phase can be developed and tested independently</li>
      <li><strong>Reusability:</strong> Same front end for different back ends (or vice versa)</li>
      <li><strong>Maintainability:</strong> Changes in one phase don't affect others</li>
      <li><strong>Portability:</strong> IR enables cross-platform compilation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modern Compiler Architectures</h2>

    <h3 className="text-2xl font-semibold mt-6">GCC Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Frontend (C, C++, Fortran, etc.)
         │
         ▼
    GIMPLE (High-level IR)
         │
         ▼
    RTL (Low-level IR)
         │
         ▼
Backend (x86, ARM, MIPS, etc.)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">LLVM Architecture</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Frontend (Clang for C/C++, etc.)
         │
         ▼
    LLVM IR (SSA-based)
         │
         ▼
    Optimization Passes
         │
         ▼
Backend (SelectionDAG → MachineIR → Target)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Compilers have two main parts: front end (analysis) and back end (synthesis)</li>
        <li>The front end is language-dependent; the back end is machine-dependent</li>
        <li>Intermediate representation bridges front end and back end</li>
        <li>Symbol table and error handler support all phases</li>
        <li>This modular design enables language and platform independence</li>
      </ul>
    </div>
  </div>
);

export default CompilerArchitecture;
