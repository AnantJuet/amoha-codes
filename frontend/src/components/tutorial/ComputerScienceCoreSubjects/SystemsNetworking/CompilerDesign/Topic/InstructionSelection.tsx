import React from "react";

const InstructionSelection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Instruction Selection ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Selection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Instruction selection</strong> is the process of mapping intermediate representation (IR)
      operations to target machine instructions. This is a critical phase in code generation because
      the same computation can often be implemented using different instruction sequences with varying
      costs. Good instruction selection significantly impacts the quality of generated code.
    </p>

    {/* The Instruction Selection Problem */}
    <h2 className="text-3xl font-bold mt-8">The Instruction Selection Problem</h2>
    <p className="leading-relaxed">
      Given an IR statement, the code generator must choose which target machine instructions to use.
      The challenge arises because:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Multiple instruction sequences can implement the same operation</li>
      <li>Different sequences have different costs (time, space)</li>
      <li>Target machines have specialized instructions that can combine operations</li>
      <li>The optimal choice may depend on context (what comes before/after)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: Implementing a = a + 1</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Option 1: Load-Add-Store (3 instructions)
  MOV  R0, a        ; Cost: 2 (memory load)
  ADD  R0, #1       ; Cost: 1 (register-immediate)
  MOV  a, R0        ; Cost: 2 (memory store)
  Total: 5 units

Option 2: Increment Memory (1 instruction)
  INC  a            ; Cost: 3 (read-modify-write)
  Total: 3 units

Option 3: Add Immediate to Memory (1 instruction, if available)
  ADD  a, #1        ; Cost: 3 (memory-immediate)
  Total: 3 units`}
      </pre>
    </div>

    {/* Instruction Selection Approaches */}
    <h2 className="text-3xl font-bold mt-8">Instruction Selection Approaches</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Macro Expansion (Simple Approach)</h3>
    <p className="leading-relaxed">
      Each IR instruction is replaced by a fixed sequence of target instructions. Simple to implement
      but may produce inefficient code.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR: x = y + z

Fixed template for ADD operation:
  MOV  R0, y        ; Load first operand
  ADD  R0, z        ; Add second operand
  MOV  x, R0        ; Store result

Problem: Always generates 3 instructions even when
better alternatives exist (e.g., if y is already in R0)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Tree Pattern Matching</h3>
    <p className="leading-relaxed">
      The IR is represented as expression trees, and instruction patterns are matched against subtrees.
      This approach can exploit complex instructions that combine multiple operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR Tree for: a[i] = b + c

        :=
       /  \\
     []    +
    / \\   / \\
   a   i b   c

Patterns to match:
- Simple: Match each node separately
- Complex: Match subtrees for indexed addressing

Pattern for indexed store:
  MOV  a(Ri), Rj    ; a[i] = value in Rj

Can combine array indexing with store operation`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Peephole Optimization</h3>
    <p className="leading-relaxed">
      First generate code using simple templates, then improve by examining small windows
      (peepholes) of instructions and replacing inefficient patterns.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before peephole optimization:
  MOV  R0, a
  MOV  a, R0        ; Redundant store

After peephole optimization:
  MOV  R0, a        ; Second instruction removed

Before:
  MOV  R0, R1
  MOV  R1, R0       ; Redundant if R0 not needed

After:
  MOV  R0, R1       ; Remove if R1 dead after`}
      </pre>
    </div>

    {/* Instruction Templates */}
    <h2 className="text-3xl font-bold mt-8">Instruction Templates</h2>
    <p className="leading-relaxed">
      The code generator maintains templates that map IR operations to instruction sequences.
      Multiple templates may exist for the same operation, and the generator selects the best one.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">IR Operation</th>
            <th className="p-3 border">Template Pattern</th>
            <th className="p-3 border">Generated Code</th>
            <th className="p-3 border">Cost</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">x = y (reg)</td>
            <td className="p-3 border">Ri = Rj</td>
            <td className="p-3 border">MOV Ri, Rj</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y (mem)</td>
            <td className="p-3 border">Ri = M</td>
            <td className="p-3 border">MOV Ri, M</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y + z</td>
            <td className="p-3 border">Ri = Rj + Rk</td>
            <td className="p-3 border">ADD Ri, Rj, Rk</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y + c</td>
            <td className="p-3 border">Ri = Rj + #c</td>
            <td className="p-3 border">ADD Ri, Rj, #c</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">x = *y</td>
            <td className="p-3 border">Ri = *Rj</td>
            <td className="p-3 border">MOV Ri, (Rj)</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">*x = y</td>
            <td className="p-3 border">*Ri = Rj</td>
            <td className="p-3 border">MOV (Ri), Rj</td>
            <td className="p-3 border">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Exploiting Special Instructions */}
    <h2 className="text-3xl font-bold mt-8">Exploiting Special Instructions</h2>
    <p className="leading-relaxed">
      Modern processors have specialized instructions that can perform complex operations efficiently.
      Good instruction selection identifies opportunities to use these instructions.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Auto-Increment/Decrement</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR sequence:
  t1 = *p
  p = p + 4

Without auto-increment:
  MOV  R0, (R1)     ; Load *p
  ADD  R1, #4       ; Increment p

With auto-increment addressing:
  MOV  R0, (R1)+    ; Load and increment (single instruction)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Multiply-Accumulate</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR sequence:
  t1 = a * b
  t2 = t1 + c

Without MAC:
  MUL  R0, R1, R2   ; R0 = a * b
  ADD  R0, R0, R3   ; R0 = R0 + c

With MAC instruction:
  MAC  R0, R1, R2, R3  ; R0 = R1 * R2 + R3 (single instruction)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Conditional Move</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR: if (a > b) x = y else x = z

Without conditional move:
  CMP  R0, R1       ; Compare a, b
  JLE  L1           ; Jump if a <= b
  MOV  R2, R3       ; x = y
  JMP  L2
L1: MOV  R2, R4     ; x = z
L2: ...

With conditional move:
  CMP  R0, R1       ; Compare a, b
  MOV  R2, R4       ; x = z (default)
  CMOVG R2, R3      ; x = y if a > b (no branch)`}
      </pre>
    </div>

    {/* Addressing Mode Selection */}
    <h2 className="text-3xl font-bold mt-8">Addressing Mode Selection</h2>
    <p className="leading-relaxed">
      Choosing the right addressing mode is part of instruction selection. Different modes have
      different costs and capabilities.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Array Access: a[i]</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Base address of a in R1, index i in R2

Option 1: Compute address explicitly
  MOV  R3, R1       ; R3 = base
  ADD  R3, R2       ; R3 = base + i
  ADD  R3, R2       ; R3 = base + 2i (for 2-byte elements)
  MOV  R0, (R3)     ; Load a[i]

Option 2: Use indexed addressing
  MOV  R0, (R1, R2, 2)  ; R0 = *(R1 + R2*2)

Option 3: With scaled index (x86)
  MOV  R0, [R1 + R2*2]  ; Single instruction`}
      </pre>
    </div>

    {/* Cost-Based Selection */}
    <h2 className="text-3xl font-bold mt-8">Cost-Based Instruction Selection</h2>
    <p className="leading-relaxed">
      The code generator assigns costs to instruction sequences and selects the lowest-cost option.
      Costs may include execution time, code size, or a weighted combination.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: x = y * 8</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Option 1: Multiply instruction
  MOV  R0, y        ; Cost: 2
  MUL  R0, #8       ; Cost: 4 (multiply is expensive)
  MOV  x, R0        ; Cost: 2
  Total: 8

Option 2: Left shift (8 = 2^3)
  MOV  R0, y        ; Cost: 2
  SHL  R0, #3       ; Cost: 1 (shift is cheap)
  MOV  x, R0        ; Cost: 2
  Total: 5

Shift is better for powers of 2!`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: x = y * 10</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Option 1: Multiply
  MOV  R0, y        ; Cost: 2
  MUL  R0, #10      ; Cost: 4
  MOV  x, R0        ; Cost: 2
  Total: 8

Option 2: Decompose (10 = 8 + 2 = 2^3 + 2^1)
  MOV  R0, y        ; Cost: 2
  SHL  R0, #3       ; Cost: 1 (R0 = y*8)
  MOV  R1, y        ; Cost: 2
  SHL  R1, #1       ; Cost: 1 (R1 = y*2)
  ADD  R0, R1       ; Cost: 1
  MOV  x, R0        ; Cost: 2
  Total: 9

Option 3: LEA instruction (x86)
  LEA  R0, [R1 + R1*4]  ; R0 = y*5
  SHL  R0, #1           ; R0 = y*10
  Total: ~3

Context matters for choosing best approach!`}
      </pre>
    </div>

    {/* Tree Covering Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Tree Covering Algorithm</h2>
    <p className="leading-relaxed">
      A systematic approach to instruction selection using dynamic programming on expression trees:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm: Optimal Tree Covering

1. Build expression tree from IR
2. For each node (bottom-up):
   a. Try all matching instruction patterns
   b. Compute cost = instruction cost + cost of operand subtrees
   c. Record minimum cost and best pattern
3. Emit instructions (top-down) using recorded patterns

Example tree for: a + b * c
        +
       / \\
      a   *
         / \\
        b   c

Patterns tried at '*' node:
- MUL Ri, Rj, Rk (cost = 1 + cost(b) + cost(c))

Patterns tried at '+' node:
- ADD Ri, Rj, Rk (cost = 1 + cost(a) + cost(b*c))
- MAC Ri, Rj, Rk, Rl (if available, may be cheaper)`}
      </pre>
    </div>

    {/* Practical Considerations */}
    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>

    <h3 className="text-2xl font-semibold mt-6">Instruction Latencies</h3>
    <p className="leading-relaxed">
      Modern processors have varying latencies for different instructions. The scheduler
      may reorder instructions, but selection should consider typical execution costs.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Code Size vs Speed</h3>
    <p className="leading-relaxed">
      Sometimes smaller code is preferable (embedded systems, cache efficiency). The code
      generator may have optimization flags to prioritize size or speed.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Target Architecture Variations</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Different processor versions may have different instruction sets</li>
      <li>SIMD instructions for parallel operations (SSE, AVX, NEON)</li>
      <li>Architecture-specific optimizations (x86 LEA, ARM barrel shifter)</li>
    </ul>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Why might x = x * 8 be implemented as a shift instead of multiply?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Shifts are easier to understand</li>
      <li>(B) Shifts are typically faster than multiplies</li>
      <li>(C) Shifts use more registers</li>
      <li>(D) Multiplies are not available on all machines</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Shift operations typically execute in 1 cycle while multiplies may take 3-10 cycles.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the main advantage of tree pattern matching over macro expansion?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Simpler implementation</li>
      <li>(B) Can exploit complex instructions that combine operations</li>
      <li>(C) Always produces optimal code</li>
      <li>(D) Requires fewer instruction templates</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Tree pattern matching can match larger subtrees to single complex instructions.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What does peephole optimization do in instruction selection?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Selects instructions before code generation</li>
      <li>(B) Improves generated code by replacing inefficient local patterns</li>
      <li>(C) Allocates registers to variables</li>
      <li>(D) Builds expression trees</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Peephole optimization examines small windows of code and replaces inefficient patterns.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Instruction selection maps IR operations to target machine instructions</li>
      <li>Multiple instruction sequences can implement the same operation with different costs</li>
      <li>Tree pattern matching can exploit complex instructions effectively</li>
      <li>Special instructions (MAC, conditional move, auto-increment) should be utilized</li>
      <li>Strength reduction (multiply to shift) can significantly improve performance</li>
      <li>Cost-based selection considers execution time and code size trade-offs</li>
    </ul>

  </div>
);

export default InstructionSelection;
