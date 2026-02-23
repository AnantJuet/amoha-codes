import React from "react";

const CodeGenerationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Code Generation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Code Generation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Code generation</strong> is the final phase of a compiler where the intermediate representation (IR)
      is translated into target machine code. This phase is crucial as it directly affects the performance of
      the generated executable. The code generator takes the optimized intermediate code and produces
      semantically equivalent target code that efficiently utilizes the target machine's resources.
    </p>

    {/* What is Code Generation? */}
    <h2 className="text-3xl font-bold mt-8">What is Code Generation?</h2>
    <p className="leading-relaxed">
      Code generation is the process of transforming the intermediate representation of a program into
      target machine code or assembly language. The code generator must produce correct code that
      faithfully implements the semantics of the source program while making effective use of the
      available machine resources.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Intermediate Code (Three-Address Code)
              |
              v
    +--------------------+
    |   CODE GENERATOR   |
    +--------------------+
              |
              v
Target Code (Assembly / Machine Code)`}
      </pre>
    </div>

    {/* Position in Compiler */}
    <h2 className="text-3xl font-bold mt-8">Position in Compiler Pipeline</h2>
    <p className="leading-relaxed">
      Code generation is the back-end phase of the compiler, coming after intermediate code generation
      and code optimization. It bridges the gap between the machine-independent front-end and the
      actual target machine.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code
     |
     v
+------------------+
|   Front End      |  (Lexical, Syntax, Semantic Analysis)
+------------------+
     |
     v
+------------------+
| Intermediate     |  (Three-Address Code, AST)
| Code Generation  |
+------------------+
     |
     v
+------------------+
| Code Optimization|  (Machine-Independent Optimization)
+------------------+
     |
     v
+------------------+
| CODE GENERATION  |  <-- This Phase
+------------------+
     |
     v
Target Machine Code`}
      </pre>
    </div>

    {/* Input and Output */}
    <h2 className="text-3xl font-bold mt-8">Input and Output of Code Generator</h2>

    <h3 className="text-2xl font-semibold mt-6">Input</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Intermediate Representation (IR):</strong> Three-address code, AST, or DAG</li>
      <li><strong>Symbol Table:</strong> Information about variables, types, and scope</li>
      <li><strong>Target Machine Description:</strong> Instruction set, registers, addressing modes</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Output</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Assembly Code:</strong> Human-readable target code (needs assembler)</li>
      <li><strong>Relocatable Machine Code:</strong> Object code for linker</li>
      <li><strong>Absolute Machine Code:</strong> Directly executable code</li>
    </ul>

    {/* Requirements of Code Generator */}
    <h2 className="text-3xl font-bold mt-8">Requirements of a Code Generator</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Correctness</td>
            <td className="p-3 border">Generated code must preserve the meaning of the source program</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Generated code should be efficient in terms of speed and space</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Utilization</td>
            <td className="p-3 border">Effective use of registers and memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed of Code Generation</td>
            <td className="p-3 border">The generator itself should run efficiently</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Generation Example */}
    <h2 className="text-3xl font-bold mt-8">Code Generation Example</h2>
    <p className="leading-relaxed">
      Consider the following three-address code and its translation to target assembly code:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Three-Address Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`t1 = a + b
t2 = c * d
t3 = t1 - t2
x = t3`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Generated Assembly Code (x86-like):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`; t1 = a + b
MOV  R0, a        ; Load a into R0
ADD  R0, b        ; R0 = a + b (t1 in R0)

; t2 = c * d
MOV  R1, c        ; Load c into R1
MUL  R1, d        ; R1 = c * d (t2 in R1)

; t3 = t1 - t2
SUB  R0, R1       ; R0 = t1 - t2 (t3 in R0)

; x = t3
MOV  x, R0        ; Store result in x`}
      </pre>
    </div>

    {/* Types of Target Code */}
    <h2 className="text-3xl font-bold mt-8">Types of Target Code</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Absolute Machine Code</h3>
    <p className="leading-relaxed">
      Fixed memory addresses are assigned during compilation. The code can be loaded directly
      into memory and executed without any further processing.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Fastest execution startup</li>
      <li>No linking or loading overhead</li>
      <li>Cannot be relocated in memory</li>
      <li>Used in embedded systems and bootloaders</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Relocatable Machine Code</h3>
    <p className="leading-relaxed">
      Code uses relative addresses that are adjusted by the linker/loader. This allows
      combining multiple modules and loading at different memory locations.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Supports separate compilation</li>
      <li>Can be linked with libraries</li>
      <li>Position-independent code possible</li>
      <li>Most common in modern compilers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Assembly Code</h3>
    <p className="leading-relaxed">
      Human-readable symbolic code that requires an assembler to convert to machine code.
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Easier to debug and understand</li>
      <li>Allows manual optimization</li>
      <li>Requires additional assembly pass</li>
      <li>Useful for compiler development and debugging</li>
    </ul>

    {/* Major Tasks */}
    <h2 className="text-3xl font-bold mt-8">Major Tasks in Code Generation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Task</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Challenge</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Instruction Selection</td>
            <td className="p-3 border">Choose appropriate target instructions</td>
            <td className="p-3 border">Multiple ways to implement same operation</td>
          </tr>
          <tr>
            <td className="p-3 border">Register Allocation</td>
            <td className="p-3 border">Decide which values go in registers</td>
            <td className="p-3 border">Limited registers, many variables</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction Ordering</td>
            <td className="p-3 border">Determine order of instruction execution</td>
            <td className="p-3 border">Pipeline stalls, dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Management</td>
            <td className="p-3 border">Handle stack frames and data layout</td>
            <td className="p-3 border">Alignment, addressing modes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Generation Approaches */}
    <h2 className="text-3xl font-bold mt-8">Code Generation Approaches</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Macro Expansion</h3>
    <p className="leading-relaxed">
      Each IR instruction is expanded into a fixed sequence of target instructions.
      Simple but may produce inefficient code.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Pattern Matching</h3>
    <p className="leading-relaxed">
      IR patterns are matched against instruction templates. More sophisticated and
      can exploit complex machine instructions.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Tree/DAG-Based Generation</h3>
    <p className="leading-relaxed">
      Uses tree covering or DAG-based algorithms to find optimal instruction sequences
      for expression trees.
    </p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which of the following is the primary input to the code generator?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Source code</li>
      <li>(B) Parse tree</li>
      <li>(C) Intermediate representation</li>
      <li>(D) Object code</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Intermediate representation - The code generator receives optimized IR and produces target code.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Which type of target code allows separate compilation and linking?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Absolute machine code</li>
      <li>(B) Relocatable machine code</li>
      <li>(C) Interpreted code</li>
      <li>(D) Source code</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Relocatable machine code - It uses relative addresses that can be adjusted during linking.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What is the most important requirement of a code generator?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Fast compilation speed</li>
      <li>(B) Correctness of generated code</li>
      <li>(C) Minimal memory usage</li>
      <li>(D) Readable output</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Correctness - The generated code must preserve the semantics of the source program.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Code generation transforms intermediate representation into target machine code</li>
      <li>The code generator must produce correct and efficient code</li>
      <li>Major tasks include instruction selection, register allocation, and instruction ordering</li>
      <li>Target code can be absolute, relocatable, or assembly language</li>
      <li>Different approaches include macro expansion, pattern matching, and tree-based generation</li>
    </ul>

  </div>
);

export default CodeGenerationIntro;
