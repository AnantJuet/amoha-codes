import React from "react";

const CodeGenerationIssues: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Issues in Code Generator Design ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Issues in Code Generator Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Designing a code generator involves numerous challenges and trade-offs. The code generator must
      balance multiple competing goals: correctness, efficiency, compilation speed, and maintainability.
      Understanding these issues is essential for building effective compilers that produce high-quality
      target code.
    </p>

    {/* Overview of Issues */}
    <h2 className="text-3xl font-bold mt-8">Overview of Design Issues</h2>
    <p className="leading-relaxed">
      The code generator designer faces several fundamental decisions that affect the quality of
      generated code and the complexity of the generator itself. These issues are interconnected,
      and optimizing for one often impacts others.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Key Design Issues:
+------------------------+
| 1. Input to Generator  |
| 2. Target Program Form |
| 3. Instruction Selection|
| 4. Register Allocation |
| 5. Evaluation Order    |
| 6. Memory Management   |
+------------------------+`}
      </pre>
    </div>

    {/* Issue 1: Input to Code Generator */}
    <h2 className="text-3xl font-bold mt-8">1. Input to Code Generator</h2>
    <p className="leading-relaxed">
      The form of intermediate representation significantly impacts the code generator design.
      The IR should provide all necessary information for generating efficient target code.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">IR Form</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Three-Address Code</td>
            <td className="p-3 border">Simple, explicit temporaries</td>
            <td className="p-3 border">May not expose parallelism</td>
          </tr>
          <tr>
            <td className="p-3 border">Abstract Syntax Tree</td>
            <td className="p-3 border">Preserves structure, good for trees</td>
            <td className="p-3 border">Complex for non-tree patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">DAG</td>
            <td className="p-3 border">Common subexpression elimination</td>
            <td className="p-3 border">More complex code generation</td>
          </tr>
          <tr>
            <td className="p-3 border">SSA Form</td>
            <td className="p-3 border">Simplifies dataflow analysis</td>
            <td className="p-3 border">Requires phi-function handling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Additional Required Information:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Symbol table with type and storage information</li>
        <li>Data type information for operands</li>
        <li>Control flow information</li>
        <li>Debug information mapping</li>
      </ul>
    </div>

    {/* Issue 2: Target Program Form */}
    <h2 className="text-3xl font-bold mt-8">2. Target Program Form</h2>
    <p className="leading-relaxed">
      Choosing the output format involves trade-offs between flexibility, ease of debugging,
      and execution efficiency.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Assembly Language Output</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Advantages:
- Human readable for debugging
- Symbolic names preserved
- Easy to modify and extend
- Portable across assemblers

Disadvantages:
- Requires assembler pass
- Slower overall compilation
- Larger intermediate files`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Relocatable Object Code</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Advantages:
- Supports separate compilation
- Can link with libraries
- Standard object file formats
- Position-independent code

Disadvantages:
- Requires linker
- Relocation tables needed
- More complex generation`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Absolute Machine Code</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Advantages:
- Immediate execution
- No linking overhead
- Simplest loader

Disadvantages:
- Fixed memory location
- Cannot link modules
- Limited flexibility`}
      </pre>
    </div>

    {/* Issue 3: Instruction Selection */}
    <h2 className="text-3xl font-bold mt-8">3. Instruction Selection</h2>
    <p className="leading-relaxed">
      The same computation can often be implemented with different instruction sequences.
      Choosing the best sequence is critical for performance.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: x = x + 1</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Option 1: Load-Add-Store (General)
  MOV  R0, x      ; Load x
  ADD  R0, #1     ; Add 1
  MOV  x, R0      ; Store result

Option 2: Increment Memory (Specialized)
  INC  x          ; Increment x directly

Option 3: Load-Increment-Store
  MOV  R0, x      ; Load x
  INC  R0         ; Increment register
  MOV  x, R0      ; Store result`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      Instruction selection factors include:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Instruction cost:</strong> Execution time, code size</li>
      <li><strong>Addressing modes:</strong> Direct, indirect, indexed</li>
      <li><strong>Special instructions:</strong> Multiply-accumulate, string operations</li>
      <li><strong>Pipeline behavior:</strong> Avoiding stalls and hazards</li>
    </ul>

    {/* Issue 4: Register Allocation */}
    <h2 className="text-3xl font-bold mt-8">4. Register Allocation and Assignment</h2>
    <p className="leading-relaxed">
      Registers are the fastest storage but are limited in number. Efficient register usage
      is crucial for performance but is NP-complete in general.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Solution Approach</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Limited Registers</td>
            <td className="p-3 border">More variables than registers</td>
            <td className="p-3 border">Spilling to memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Liveness Analysis</td>
            <td className="p-3 border">Which variables are live when</td>
            <td className="p-3 border">Dataflow analysis</td>
          </tr>
          <tr>
            <td className="p-3 border">Interference</td>
            <td className="p-3 border">Variables needed simultaneously</td>
            <td className="p-3 border">Graph coloring</td>
          </tr>
          <tr>
            <td className="p-3 border">Register Classes</td>
            <td className="p-3 border">Different register types</td>
            <td className="p-3 border">Constrained allocation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Register Allocation vs Assignment:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Allocation:
  - Decides WHICH values go in registers
  - Which values must be spilled to memory

Register Assignment:
  - Decides WHICH SPECIFIC register holds each value
  - Considers register constraints and preferences`}
      </pre>
    </div>

    {/* Issue 5: Evaluation Order */}
    <h2 className="text-3xl font-bold mt-8">5. Evaluation Order</h2>
    <p className="leading-relaxed">
      The order in which computations are performed can affect both register usage and
      execution time. Different orders may require different numbers of registers.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: Evaluating (a + b) * (c + d)</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Order 1: Left subtree first
  t1 = a + b      ; Needs R0
  t2 = c + d      ; Needs R1 (R0 still holds t1)
  t3 = t1 * t2    ; R0 = R0 * R1
  Registers needed: 2

Order 2: Right subtree first
  t1 = c + d      ; Needs R0
  t2 = a + b      ; Needs R1 (R0 still holds t1)
  t3 = t2 * t1    ; R1 = R1 * R0
  Registers needed: 2`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      For unbalanced trees, evaluation order significantly impacts register requirements:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Unbalanced Tree: a + (b + (c + d))</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Naive left-to-right (more registers):
  R0 = a          ; Save a
  R1 = b          ; Save b
  R2 = c          ; Save c
  R3 = d          ; Load d
  R2 = R2 + R3    ; c + d
  R1 = R1 + R2    ; b + (c + d)
  R0 = R0 + R1    ; a + (b + (c + d))
  Registers: 4

Innermost first (fewer registers):
  R0 = c + d      ; c + d
  R0 = b + R0     ; b + (c + d)
  R0 = a + R0     ; a + (b + (c + d))
  Registers: 1`}
      </pre>
    </div>

    {/* Issue 6: Memory Management */}
    <h2 className="text-3xl font-bold mt-8">6. Memory Management Issues</h2>
    <p className="leading-relaxed">
      The code generator must handle various memory-related decisions affecting code quality.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Stack Frame Layout</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Local variable placement</li>
      <li>Parameter passing conventions</li>
      <li>Return address handling</li>
      <li>Saved register locations</li>
      <li>Alignment requirements</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Data Layout</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Structure and array layout</li>
      <li>Padding for alignment</li>
      <li>Big-endian vs little-endian</li>
      <li>Cache line considerations</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Typical Stack Frame:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`High Address
+------------------+
|   Arguments      |  (Passed by caller)
+------------------+
|  Return Address  |
+------------------+
|   Saved FP       |
+------------------+  <-- Frame Pointer (FP)
|  Saved Registers |
+------------------+
|  Local Variables |
+------------------+
|   Temporaries    |
+------------------+  <-- Stack Pointer (SP)
Low Address`}
      </pre>
    </div>

    {/* Issue 7: Handling Special Constructs */}
    <h2 className="text-3xl font-bold mt-8">7. Special Language Constructs</h2>

    <h3 className="text-2xl font-semibold mt-6">Function Calls</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Caller responsibilities:
1. Save caller-saved registers
2. Push arguments
3. Execute CALL instruction

Callee responsibilities:
1. Set up stack frame
2. Save callee-saved registers
3. Execute function body
4. Clean up and return`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Control Flow</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`if (a > b) goto L1
Three-address code:
  if a > b goto L1

Generated code options:
  CMP  a, b
  JG   L1        ; Jump if greater

Or:
  MOV  R0, a
  SUB  R0, b
  JGT  L1        ; Jump if R0 > 0`}
      </pre>
    </div>

    {/* Trade-offs Summary */}
    <h2 className="text-3xl font-bold mt-8">Design Trade-offs Summary</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Trade-off</th>
            <th className="p-3 border">Option A</th>
            <th className="p-3 border">Option B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Code Quality vs Compile Time</td>
            <td className="p-3 border">Better optimization</td>
            <td className="p-3 border">Faster compilation</td>
          </tr>
          <tr>
            <td className="p-3 border">Code Size vs Speed</td>
            <td className="p-3 border">Compact code</td>
            <td className="p-3 border">Inlined, unrolled code</td>
          </tr>
          <tr>
            <td className="p-3 border">Generality vs Efficiency</td>
            <td className="p-3 border">Generic patterns</td>
            <td className="p-3 border">Target-specific code</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity vs Maintainability</td>
            <td className="p-3 border">Sophisticated algorithms</td>
            <td className="p-3 border">Simple, clear design</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which of the following is NOT a major issue in code generator design?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Instruction selection</li>
      <li>(B) Register allocation</li>
      <li>(C) Lexical analysis</li>
      <li>(D) Evaluation order</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Lexical analysis - This is a front-end phase, not a code generation issue.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Why is register allocation considered NP-complete?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Because registers are too fast</li>
      <li>(B) Because finding optimal allocation is equivalent to graph coloring</li>
      <li>(C) Because there are too many registers</li>
      <li>(D) Because of memory limitations</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Register allocation can be reduced to graph coloring, which is NP-complete.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What is the advantage of generating relocatable object code?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Immediate execution</li>
      <li>(B) Human readable output</li>
      <li>(C) Supports separate compilation and linking</li>
      <li>(D) Smaller file size</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Relocatable code allows modules to be compiled separately and linked together.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Code generator design involves multiple interrelated issues and trade-offs</li>
      <li>Input IR form affects the complexity and effectiveness of code generation</li>
      <li>Instruction selection must balance efficiency with code size</li>
      <li>Register allocation is a critical optimization problem (NP-complete)</li>
      <li>Evaluation order impacts register requirements significantly</li>
      <li>Memory management affects both correctness and performance</li>
    </ul>

  </div>
);

export default CodeGenerationIssues;
