import React from "react";

const IntermediateCodeIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Intermediate Code Generation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Intermediate Code Generation is a crucial phase in compiler design that produces an intermediate
      representation (IR) of the source program. This representation serves as a bridge between the
      front-end (parsing, semantic analysis) and back-end (optimization, code generation) phases of
      a compiler, enabling machine-independent optimizations and portability across different target architectures.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Intermediate Code?</h2>
    <p className="leading-relaxed">
      Intermediate code is a machine-independent representation of source code that maintains the
      semantics of the original program while being easier to optimize and translate to target
      machine code. It abstracts away source language complexities while not yet committing to
      target-specific details.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Compiler Pipeline with Intermediate Code:

┌─────────────────────────────────────────────────────────────────┐
│                         FRONT END                               │
├─────────────────────────────────────────────────────────────────┤
│  Source   →  Lexical    →  Syntax    →  Semantic   →   IR      │
│  Code        Analysis      Analysis     Analysis      Generator │
└─────────────────────────────────────────────────────────────────┘
                                                          ↓
                                              ┌──────────────────┐
                                              │ Intermediate Code│
                                              │  Representation  │
                                              └──────────────────┘
                                                          ↓
┌─────────────────────────────────────────────────────────────────┐
│                         BACK END                                │
├─────────────────────────────────────────────────────────────────┤
│  IR        →  Code       →  Target Code  →  Target              │
│  Optimizer    Generator     Optimizer       Machine Code        │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use Intermediate Code?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Portability</td>
            <td className="p-3 border">Same IR can target multiple architectures (x86, ARM, MIPS)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimization</td>
            <td className="p-3 border">Machine-independent optimizations applied at IR level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Modularity</td>
            <td className="p-3 border">Clean separation between front-end and back-end</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Retargetability</td>
            <td className="p-3 border">Easy to add new target architectures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cross-Language</td>
            <td className="p-3 border">Multiple source languages can share same back-end</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">M x N Problem</h2>
    <p className="leading-relaxed">
      Without intermediate code, supporting M source languages and N target machines requires
      M x N compilers. With IR, only M front-ends + N back-ends are needed.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Without Intermediate Code (M x N compilers needed):

    C ────────┬────────→ x86
              ├────────→ ARM
              └────────→ MIPS

    Java ─────┬────────→ x86
              ├────────→ ARM
              └────────→ MIPS

    Python ───┬────────→ x86
              ├────────→ ARM
              └────────→ MIPS

    Total: 3 languages × 3 targets = 9 compilers


With Intermediate Code (M + N components needed):

    C      ───┐
              │
    Java   ───┼───→  IR  ───┬───→ x86
              │             ├───→ ARM
    Python ───┘             └───→ MIPS

    Total: 3 front-ends + 3 back-ends = 6 components`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Intermediate Representations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Intermediate Representations:

1. Three-Address Code (TAC)
   - Linear sequence of instructions
   - Each instruction: at most 3 operands
   - Example: t1 = a + b

2. Abstract Syntax Trees (AST)
   - Tree-based representation
   - Preserves program structure
   - Nodes represent operations

3. Directed Acyclic Graphs (DAG)
   - Optimized form of AST
   - Common subexpressions shared
   - Eliminates redundancy

4. Quadruples and Triples
   - Tabular representation of TAC
   - Quadruple: (op, arg1, arg2, result)
   - Triple: (op, arg1, arg2)

5. Static Single Assignment (SSA)
   - Each variable assigned exactly once
   - Used in modern optimizing compilers
   - Example: x1 = a; x2 = x1 + b

6. Postfix Notation
   - Stack-based representation
   - Operators follow operands
   - Example: a b + (means a + b)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IR Generation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Translation Example:

Source Code (C):
    result = (a + b) * (c - d);

Parse Tree:
              =
             / \\
        result  *
               / \\
              +   -
             /\\ /\\
            a  b c  d

Intermediate Code (TAC):
    t1 = a + b
    t2 = c - d
    t3 = t1 * t2
    result = t3

Key Steps:
1. Traverse parse tree (post-order)
2. Generate code for subexpressions
3. Create temporaries for intermediate results
4. Emit instructions in linearized order`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Good IR</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Simplicity:</strong> Easy to generate from source and translate to target</li>
      <li><strong>Expressiveness:</strong> Can represent all source language constructs</li>
      <li><strong>Analyzability:</strong> Facilitates program analysis and optimization</li>
      <li><strong>Machine Independence:</strong> Not tied to specific hardware features</li>
      <li><strong>Compactness:</strong> Reasonable size for large programs</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Compiler/Framework</th>
            <th className="p-3 border">Intermediate Representation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">LLVM</td>
            <td className="p-3 border">LLVM IR (SSA-based)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">GCC</td>
            <td className="p-3 border">GIMPLE (high-level), RTL (low-level)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Java</td>
            <td className="p-3 border">Java Bytecode (.class files)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">.NET</td>
            <td className="p-3 border">Common Intermediate Language (CIL)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Python</td>
            <td className="p-3 border">Python Bytecode (.pyc files)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Intermediate code bridges front-end and back-end of compilers</li>
        <li>Enables machine-independent optimizations</li>
        <li>Solves the M x N problem (M languages, N targets)</li>
        <li>Common forms: TAC, AST, DAG, SSA, Quadruples, Triples</li>
        <li>Generated during semantic analysis or as a separate phase</li>
        <li>Should be simple, expressive, and easy to optimize</li>
        <li>Real compilers like LLVM, GCC, JVM all use intermediate representations</li>
      </ul>
    </div>
  </div>
);

export default IntermediateCodeIntro;
