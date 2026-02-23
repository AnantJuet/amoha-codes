import React from "react";

const SimpleCodeGenerator: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Simple Code Generation Algorithm ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Simple Code Generation Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>simple code generator</strong> translates three-address code into target machine instructions
      one statement at a time. While not optimal, this approach is easy to understand and implement, making
      it a good starting point for learning code generation. The algorithm uses register and address
      descriptors to track where values are located.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Overview</h2>
    <p className="leading-relaxed">
      The simple code generator processes each three-address instruction and generates corresponding
      target code. It maintains descriptors to track:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Register descriptor:</strong> Which variables are currently in each register</li>
      <li><strong>Address descriptor:</strong> Where each variable can be found (register, memory, or both)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simple Code Generator Process:

For each three-address statement x = y op z:
1. Call getReg() to determine register locations
2. Generate code to load operands if needed
3. Generate the operation instruction
4. Update register and address descriptors`}
      </pre>
    </div>

    {/* Target Machine Model */}
    <h2 className="text-3xl font-bold mt-8">Target Machine Model</h2>
    <p className="leading-relaxed">
      We assume a simple machine with the following characteristics:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Target Machine:
- Registers: R0, R1, R2 (3 general-purpose registers)
- Word size: 32 bits

Instruction formats:
  OP  Ri, Rj       ; Ri = Ri op Rj
  OP  Ri, M        ; Ri = Ri op contents(M)
  MOV Ri, Rj       ; Ri = Rj
  MOV Ri, M        ; Ri = contents(M)
  MOV M, Ri        ; M = Ri

Available operations: ADD, SUB, MUL, DIV

Instruction costs:
  Register-Register: 1 unit
  Register-Memory: 2 units
  Memory store: 2 units`}
      </pre>
    </div>

    {/* The getReg Function */}
    <h2 className="text-3xl font-bold mt-8">The getReg() Function</h2>
    <p className="leading-relaxed">
      For a statement x = y op z, getReg() determines the locations for y, z, and the result x.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">getReg Algorithm:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Function getReg(x = y op z):

  // Determine location for y
  if y is in a register R:
    Ly = R
  else:
    Ly = get empty register or spill one

  // Determine location for z
  if z is in a register R:
    Lz = R (or could use memory directly)
  else:
    Lz = memory location of z

  // Determine location for result x
  if y is in register R and:
     - y is not z
     - y is not live after this statement
     - R contains only y
  then:
    Lx = R (reuse y's register)
  else if there's an empty register R:
    Lx = R
  else:
    select R to spill (prefer value also in memory)
    generate MOV M, R if needed
    Lx = R

  return (Ly, Lz, Lx)`}
      </pre>
    </div>

    {/* Code Generation for Different Statements */}
    <h2 className="text-3xl font-bold mt-8">Code Generation Rules</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Copy Statement: x = y</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Statement: x = y

If y is in register R:
  - Update descriptor: R now also contains x
  - Update descriptor: x is in R
  - No code generated (copy eliminated!)

If y is only in memory:
  - Get register R for x
  - Generate: MOV R, y
  - Update descriptors accordingly`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Arithmetic Statement: x = y op z</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Statement: x = y op z

1. Call getReg to get Ly, Lz, Lx
2. If y is not in Lx:
     Generate: MOV Lx, Ly  (or MOV Lx, y if y in memory)
3. Generate: OP Lx, Lz     (or OP Lx, z if z in memory)
4. Update descriptors:
   - Lx contains only x
   - x is in Lx only
   - If y was in Lx, y is no longer there`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. End of Basic Block</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`At end of basic block:

For each variable v that is live on exit:
  If v is in a register but not in memory:
    Generate: MOV v, R   (store v to memory)

This ensures live values are preserved for
subsequent blocks.`}
      </pre>
    </div>

    {/* Complete Example */}
    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <p className="leading-relaxed">
      Let us trace through a complete basic block with 3 registers:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Three-Address Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`t = a - b
u = a - c
v = t + u
a = d
d = v + u`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Liveness Information:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Statement    Live After
---------    ----------
t = a - b    {a, b, c, d, t}
u = a - c    {c, d, t, u}
v = t + u    {d, u, v}
a = d        {a, u, v}
d = v + u    {a, d}

Note: a and d are live on exit (used later)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Step-by-Step Code Generation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Initially: All variables in memory only
           R0, R1, R2 empty

=== Statement: t = a - b ===
getReg: Need a in register, b as operand, result in register
  - R0 empty, load a
  - b from memory
  - Result in R0 (a not live after except in this block)

Generated code:
  MOV R0, a       ; Load a into R0
  SUB R0, b       ; R0 = a - b = t

Descriptors after:
  R0: {t}    R1: {}    R2: {}
  t: {R0}    a: {memory}

=== Statement: u = a - c ===
getReg: Need a again, c as operand, result somewhere
  - a not in register, need to reload
  - R1 empty, use for a then result
  - c from memory

Generated code:
  MOV R1, a       ; Load a into R1
  SUB R1, c       ; R1 = a - c = u

Descriptors after:
  R0: {t}    R1: {u}    R2: {}
  t: {R0}    u: {R1}

=== Statement: v = t + u ===
getReg: t in R0, u in R1, need register for v
  - t in R0, t not live after -> reuse R0

Generated code:
  ADD R0, R1      ; R0 = t + u = v

Descriptors after:
  R0: {v}    R1: {u}    R2: {}
  v: {R0}    u: {R1}

=== Statement: a = d ===
getReg: d from memory, a is target
  - R2 empty, use for d and a

Generated code:
  MOV R2, d       ; R2 = d = a

Descriptors after:
  R0: {v}    R1: {u}    R2: {a}
  v: {R0}    u: {R1}    a: {R2}

=== Statement: d = v + u ===
getReg: v in R0, u in R1, result d
  - v not live after, u not live after
  - Reuse R0 for result

Generated code:
  ADD R0, R1      ; R0 = v + u = d

Descriptors after:
  R0: {d}    R1: {u}    R2: {a}
  d: {R0}    u: {R1}    a: {R2}

=== End of Block ===
Live on exit: {a, d}
  - a is in R2, not in memory -> store it
  - d is in R0, not in memory -> store it

Generated code:
  MOV a, R2       ; Store a to memory
  MOV d, R0       ; Store d to memory`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Complete Generated Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MOV R0, a       ; t = a - b
SUB R0, b
MOV R1, a       ; u = a - c
SUB R1, c
ADD R0, R1      ; v = t + u
MOV R2, d       ; a = d
ADD R0, R1      ; d = v + u
MOV a, R2       ; Store live variables
MOV d, R0

Total: 9 instructions`}
      </pre>
    </div>

    {/* Optimizations */}
    <h2 className="text-3xl font-bold mt-8">Simple Optimizations</h2>
    <p className="leading-relaxed">
      Even the simple algorithm can apply basic optimizations:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Avoid Redundant Loads</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`If a value is already in a register, don't reload it.
The address descriptor tracks this.

Example:
  t = a + b
  u = a + c    ; a still in register from first statement!

Without optimization:
  MOV R0, a; ADD R0, b
  MOV R0, a; ADD R0, c   ; Redundant load!

With optimization:
  MOV R0, a; ADD R0, b; MOV t, R0
  ADD R0, c              ; Reuse a in R0`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Avoid Redundant Stores</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Don't store if value is already in memory (unchanged).

Check address descriptor:
- If variable is in both register and memory
- And register value matches memory
- Skip the store`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Copy Propagation</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For x = y where y is in register R:
- Don't generate MOV
- Just update descriptor: R now holds both x and y

Example:
  a in R0
  b = a        ; No code! Update: R0 = {a, b}
  c = b + 1    ; Uses R0 directly`}
      </pre>
    </div>

    {/* Algorithm Summary */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Summary</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Statement Type</th>
            <th className="p-3 border">Generated Code Pattern</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">x = y op z (all in registers)</td>
            <td className="p-3 border">MOV Rx, Ry; OP Rx, Rz</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y op z (z in memory)</td>
            <td className="p-3 border">MOV Rx, Ry; OP Rx, z</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y op z (y reusable)</td>
            <td className="p-3 border">OP Ry, Rz (result in Ry)</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y (y in register)</td>
            <td className="p-3 border">No code (descriptor update)</td>
          </tr>
          <tr>
            <td className="p-3 border">x = y (y in memory)</td>
            <td className="p-3 border">MOV Rx, y</td>
          </tr>
          <tr>
            <td className="p-3 border">End of block (v live)</td>
            <td className="p-3 border">MOV v, Rv (if not in memory)</td>
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
      What is the purpose of the register descriptor?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To count available registers</li>
      <li>(B) To track which variables are in each register</li>
      <li>(C) To store register values</li>
      <li>(D) To allocate new registers</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The register descriptor tracks which variable(s) currently reside in each register.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      When can a copy statement x = y generate no code?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) When x and y have the same type</li>
      <li>(B) When y is already in a register</li>
      <li>(C) When x is not used later</li>
      <li>(D) Never, copy always needs MOV</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) When y is in a register, we just update the descriptor to say that register also holds x.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why must live variables be stored at the end of a basic block?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To free registers</li>
      <li>(B) To ensure values are available for subsequent blocks</li>
      <li>(C) To optimize code size</li>
      <li>(D) To satisfy calling conventions</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Values live on exit may be needed in successor blocks, so they must be in memory.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>The simple code generator processes one three-address statement at a time</li>
      <li>Register and address descriptors track the current location of values</li>
      <li>The getReg function determines register allocation for each statement</li>
      <li>Copy propagation can eliminate move instructions</li>
      <li>Live variables must be stored to memory at basic block boundaries</li>
      <li>While simple, this algorithm forms the foundation for more advanced techniques</li>
    </ul>

  </div>
);

export default SimpleCodeGenerator;
