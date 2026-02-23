import React from "react";

const AddressingModes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Machine Addressing Modes ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Machine Addressing Modes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Addressing modes</strong> specify how the operand of an instruction is accessed.
      Different addressing modes provide flexibility in accessing data stored in registers, memory,
      or specified as immediate values. Understanding addressing modes is essential for generating
      efficient code that fully utilizes the target machine's capabilities.
    </p>

    {/* Overview of Addressing Modes */}
    <h2 className="text-3xl font-bold mt-8">Overview of Addressing Modes</h2>
    <p className="leading-relaxed">
      The effective address is the actual memory location or register where the operand resides.
      Different addressing modes compute this effective address in different ways.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction format:
  OPCODE  operand1, operand2

Where each operand can use different addressing modes:
- Immediate
- Register
- Direct (Absolute)
- Register Indirect
- Indexed
- Based-Indexed
- And more...`}
      </pre>
    </div>

    {/* Immediate Addressing */}
    <h2 className="text-3xl font-bold mt-8">1. Immediate Addressing</h2>
    <p className="leading-relaxed">
      The operand value is specified directly in the instruction. Fastest access since no memory
      fetch is needed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: #value or $value

Examples:
  MOV R0, #5       ; R0 = 5
  ADD R1, #10      ; R1 = R1 + 10
  CMP R2, #0       ; Compare R2 with 0

Effective Address: Not applicable (value is in instruction)
Use cases:
  - Constants in expressions
  - Loop counters initialization
  - Flag values`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">No memory access needed</td>
            <td className="p-3 border">Limited value range</td>
          </tr>
          <tr>
            <td className="p-3 border">Fast execution</td>
            <td className="p-3 border">Cannot be modified at runtime</td>
          </tr>
          <tr>
            <td className="p-3 border">Compact for small constants</td>
            <td className="p-3 border">Larger constants increase code size</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Register Addressing */}
    <h2 className="text-3xl font-bold mt-8">2. Register Addressing</h2>
    <p className="leading-relaxed">
      The operand is in a processor register. Very fast access.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: Rn

Examples:
  MOV R0, R1       ; R0 = R1
  ADD R2, R3       ; R2 = R2 + R3
  MUL R4, R5       ; R4 = R4 * R5

Effective Address: Register number encoded in instruction
Use cases:
  - Temporary values
  - Frequently accessed variables
  - Loop counters`}
      </pre>
    </div>

    {/* Direct Addressing */}
    <h2 className="text-3xl font-bold mt-8">3. Direct (Absolute) Addressing</h2>
    <p className="leading-relaxed">
      The instruction contains the actual memory address of the operand.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: address or [address]

Examples:
  MOV R0, [1000]   ; R0 = contents of memory address 1000
  MOV R0, x        ; R0 = contents of variable x
  ADD R1, [count]  ; R1 = R1 + contents of 'count'

Effective Address = address specified in instruction

Use cases:
  - Global variables
  - Static data
  - Jump tables`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code generation for direct addressing:

IR: x = y + z  (x, y, z are global variables)

Generated code:
  MOV R0, y        ; Load y using direct addressing
  ADD R0, z        ; Add z using direct addressing
  MOV x, R0        ; Store to x using direct addressing`}
      </pre>
    </div>

    {/* Register Indirect Addressing */}
    <h2 className="text-3xl font-bold mt-8">4. Register Indirect Addressing</h2>
    <p className="leading-relaxed">
      A register contains the memory address of the operand. Allows pointer-based access.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: (Rn) or [Rn] or *Rn

Examples:
  MOV R0, (R1)     ; R0 = contents of memory at address in R1
  MOV R0, [R1]     ; Same, different syntax
  ADD (R2), R3     ; Add R3 to memory location pointed by R2

Effective Address = contents of register

Use cases:
  - Pointer dereferencing: *p
  - Dynamic data structures
  - Function pointers`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code generation for pointer access:

IR: x = *p   (p is a pointer)

Generated code:
  MOV R0, p        ; Load pointer value
  MOV R1, (R0)     ; Load value pointed to
  MOV x, R1        ; Store in x

IR: *p = y

Generated code:
  MOV R0, p        ; Load pointer
  MOV R1, y        ; Load value
  MOV (R0), R1     ; Store through pointer`}
      </pre>
    </div>

    {/* Indexed Addressing */}
    <h2 className="text-3xl font-bold mt-8">5. Indexed Addressing</h2>
    <p className="leading-relaxed">
      The effective address is computed by adding a constant offset to a register value.
      Essential for array access and local variables.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: offset(Rn) or [Rn + offset]

Examples:
  MOV R0, 8(R1)    ; R0 = contents of (R1 + 8)
  MOV R0, -4(FP)   ; R0 = local variable at FP-4
  MOV 12(SP), R2   ; Store R2 at SP+12

Effective Address = Register + Displacement

Use cases:
  - Array elements: a[i] where base is in register
  - Structure fields: s.field
  - Stack frame access: local variables, parameters`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code generation for array access:

IR: x = a[i]  (a is array, i is index)

Assuming 4-byte elements, a's base in R1, i in R2:

Option 1: Compute offset separately
  MUL R3, R2, #4   ; R3 = i * 4
  ADD R3, R1       ; R3 = base + offset
  MOV R0, (R3)     ; Load a[i]

Option 2: Use scaled indexed addressing (if available)
  MOV R0, (R1, R2, 4)  ; R0 = *(R1 + R2*4)`}
      </pre>
    </div>

    {/* Based-Indexed Addressing */}
    <h2 className="text-3xl font-bold mt-8">6. Based-Indexed Addressing</h2>
    <p className="leading-relaxed">
      Combines a base register, an index register, and optionally a displacement.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: offset(Rb, Ri) or [Rb + Ri + offset]

Examples:
  MOV R0, (R1, R2)       ; R0 = *(R1 + R2)
  MOV R0, 8(R1, R2)      ; R0 = *(R1 + R2 + 8)
  MOV R0, [R1 + R2*4]    ; Scaled index (x86)

Effective Address = Base + Index + Displacement

Use cases:
  - 2D arrays: a[i][j]
  - Array of structures: s[i].field`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code generation for 2D array:

IR: x = a[i][j]
Assuming a is 10x10 array of 4-byte integers

Row-major layout: a[i][j] at base + (i*10 + j)*4

Generated code:
  MOV R1, i            ; R1 = i
  MUL R1, #40          ; R1 = i * 10 * 4 = i * 40
  MOV R2, j            ; R2 = j
  MUL R2, #4           ; R2 = j * 4
  ADD R1, R2           ; R1 = row_offset + col_offset
  MOV R0, a(R1)        ; R0 = a[i][j]`}
      </pre>
    </div>

    {/* Auto-increment/decrement */}
    <h2 className="text-3xl font-bold mt-8">7. Auto-Increment/Decrement</h2>
    <p className="leading-relaxed">
      The register is automatically incremented or decremented before or after use.
      Common for stack operations and array traversal.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax variations:
  (Rn)+    Post-increment: use Rn, then Rn = Rn + size
  -(Rn)    Pre-decrement: Rn = Rn - size, then use Rn
  (Rn)++   Post-increment (alternative)
  --(Rn)   Pre-decrement (alternative)

Examples:
  MOV R0, (R1)+    ; R0 = *R1; R1 = R1 + 4
  MOV -(SP), R0    ; SP = SP - 4; *SP = R0 (push)
  MOV R0, (SP)+    ; R0 = *SP; SP = SP + 4 (pop)

Use cases:
  - Stack push/pop
  - Array iteration
  - String processing`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code generation for pointer increment:

IR: x = *p++  (use p, then increment)

Without auto-increment:
  MOV R0, p          ; Load pointer
  MOV R1, (R0)       ; Load value
  ADD R0, #4         ; Increment pointer
  MOV p, R0          ; Store updated pointer
  MOV x, R1          ; Store value

With auto-increment:
  MOV R0, p          ; Load pointer
  MOV R1, (R0)+      ; Load and increment
  MOV p, R0          ; Store updated pointer
  MOV x, R1`}
      </pre>
    </div>

    {/* PC-Relative Addressing */}
    <h2 className="text-3xl font-bold mt-8">8. PC-Relative Addressing</h2>
    <p className="leading-relaxed">
      The effective address is computed relative to the program counter.
      Used for position-independent code and branches.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Syntax: offset(PC) or label

Examples:
  JMP loop         ; Jump to label (PC + offset)
  LEA R0, data     ; Load address of data (PC-relative)
  MOV R0, msg(PC)  ; Load from PC-relative address

Effective Address = PC + Displacement

Use cases:
  - Branch instructions
  - Position-independent code
  - Accessing constants in code segment`}
      </pre>
    </div>

    {/* Addressing Mode Comparison */}
    <h2 className="text-3xl font-bold mt-8">Addressing Mode Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mode</th>
            <th className="p-3 border">Effective Address</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Immediate</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">#5</td>
            <td className="p-3 border">Constants</td>
          </tr>
          <tr>
            <td className="p-3 border">Register</td>
            <td className="p-3 border">Register</td>
            <td className="p-3 border">R1</td>
            <td className="p-3 border">Temporaries</td>
          </tr>
          <tr>
            <td className="p-3 border">Direct</td>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">[1000]</td>
            <td className="p-3 border">Globals</td>
          </tr>
          <tr>
            <td className="p-3 border">Indirect</td>
            <td className="p-3 border">[R]</td>
            <td className="p-3 border">(R1)</td>
            <td className="p-3 border">Pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Indexed</td>
            <td className="p-3 border">R + offset</td>
            <td className="p-3 border">8(R1)</td>
            <td className="p-3 border">Arrays, locals</td>
          </tr>
          <tr>
            <td className="p-3 border">Based-Indexed</td>
            <td className="p-3 border">R1 + R2 + off</td>
            <td className="p-3 border">(R1,R2)</td>
            <td className="p-3 border">2D arrays</td>
          </tr>
          <tr>
            <td className="p-3 border">Auto-inc/dec</td>
            <td className="p-3 border">[R], R+=n</td>
            <td className="p-3 border">(R1)+</td>
            <td className="p-3 border">Stack, loops</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Generator Considerations */}
    <h2 className="text-3xl font-bold mt-8">Code Generator Considerations</h2>
    <p className="leading-relaxed">
      The code generator must select appropriate addressing modes based on:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Where the operand is located (register, stack, global, heap)</li>
      <li>Available addressing modes on the target machine</li>
      <li>Instruction costs and encoding size</li>
      <li>Opportunities to combine operations (auto-increment)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Choosing addressing mode for variable v:

if v is in a register R:
  use register mode: R

else if v is a local variable at offset k from FP:
  use indexed mode: k(FP)

else if v is a global at address A:
  use direct mode: A

else if v is accessed via pointer p:
  load p into register R
  use indirect mode: (R)

else if v is array element a[i]:
  compute address and use indexed or indirect mode`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What addressing mode is used for accessing a[i] when the base address of a is in R1 and index i is in R2?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Direct addressing</li>
      <li>(B) Immediate addressing</li>
      <li>(C) Based-indexed addressing</li>
      <li>(D) Register addressing</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Based-indexed addressing combines the base (R1) and index (R2) to compute the effective address.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Which addressing mode would you use for implementing a stack push operation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Immediate</li>
      <li>(B) Direct</li>
      <li>(C) Pre-decrement indirect</li>
      <li>(D) Post-increment</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Push uses pre-decrement: first decrement SP, then store at the new SP location.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What is the effective address for the instruction MOV R0, 12(R1) if R1 contains 1000?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 12</li>
      <li>(B) 1000</li>
      <li>(C) 1012</li>
      <li>(D) 988</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Effective address = R1 + displacement = 1000 + 12 = 1012.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Addressing modes determine how operand locations are computed</li>
      <li>Immediate mode provides constants directly in instructions</li>
      <li>Indexed addressing is essential for array and stack access</li>
      <li>Indirect addressing supports pointers and dynamic data structures</li>
      <li>Auto-increment/decrement optimizes loops and stack operations</li>
      <li>The code generator must select the most efficient addressing mode for each access</li>
    </ul>

  </div>
);

export default AddressingModes;
