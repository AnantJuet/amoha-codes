import React from "react";

const TargetMachine: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Target Machine Architecture ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Target Machine Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The <strong>target machine</strong> is the computer architecture for which the compiler generates code.
      Understanding the target machine's instruction set, registers, memory organization, and addressing modes
      is essential for generating efficient code. The code generator must map the intermediate representation
      to the specific capabilities of the target hardware.
    </p>

    {/* Generic Target Machine Model */}
    <h2 className="text-3xl font-bold mt-8">Generic Target Machine Model</h2>
    <p className="leading-relaxed">
      Most compilers use a simplified model of the target machine for code generation. This model
      captures the essential features while abstracting away some hardware complexity.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Target Machine Model:
+------------------------------------------+
|              CPU                         |
|  +------+  +------+  +------+  +------+  |
|  |  R0  |  |  R1  |  |  R2  |  | ...  |  |
|  +------+  +------+  +------+  +------+  |
|         General Purpose Registers        |
|                                          |
|  +------+  +------+  +------+            |
|  |  PC  |  |  SP  |  |  FP  |            |
|  +------+  +------+  +------+            |
|       Special Purpose Registers          |
+------------------------------------------+
              |     ^
              v     |
+------------------------------------------+
|              Main Memory                 |
|  +--------------------------------------+|
|  |  Code Segment  |  Data Segment       ||
|  +--------------------------------------+|
|  |  Stack         |  Heap               ||
|  +--------------------------------------+|
+------------------------------------------+`}
      </pre>
    </div>

    {/* Register Set */}
    <h2 className="text-3xl font-bold mt-8">Register Set</h2>
    <p className="leading-relaxed">
      Registers are the fastest storage in a computer. The number and types of registers
      significantly impact code generation strategies.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">General Purpose</td>
            <td className="p-3 border">Arithmetic, data manipulation</td>
            <td className="p-3 border">R0-R15, EAX, EBX</td>
          </tr>
          <tr>
            <td className="p-3 border">Program Counter</td>
            <td className="p-3 border">Next instruction address</td>
            <td className="p-3 border">PC, IP (EIP, RIP)</td>
          </tr>
          <tr>
            <td className="p-3 border">Stack Pointer</td>
            <td className="p-3 border">Top of stack</td>
            <td className="p-3 border">SP, ESP, RSP</td>
          </tr>
          <tr>
            <td className="p-3 border">Frame Pointer</td>
            <td className="p-3 border">Current stack frame base</td>
            <td className="p-3 border">FP, EBP, RBP</td>
          </tr>
          <tr>
            <td className="p-3 border">Status/Flags</td>
            <td className="p-3 border">Condition codes</td>
            <td className="p-3 border">FLAGS, EFLAGS</td>
          </tr>
          <tr>
            <td className="p-3 border">Floating Point</td>
            <td className="p-3 border">FP operations</td>
            <td className="p-3 border">XMM0-XMM15, FP0-FP7</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Instruction Set Architecture */}
    <h2 className="text-3xl font-bold mt-8">Instruction Set Architecture (ISA)</h2>
    <p className="leading-relaxed">
      The ISA defines the instructions available on the target machine. Different ISA
      designs affect code generation complexity and efficiency.
    </p>

    <h3 className="text-2xl font-semibold mt-6">CISC (Complex Instruction Set Computer)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Variable-length instructions</li>
      <li>Many addressing modes</li>
      <li>Memory-to-memory operations</li>
      <li>Complex instructions (string ops, loops)</li>
      <li>Examples: x86, VAX</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">RISC (Reduced Instruction Set Computer)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Fixed-length instructions</li>
      <li>Load-store architecture</li>
      <li>Simple addressing modes</li>
      <li>Many general-purpose registers</li>
      <li>Examples: ARM, MIPS, RISC-V</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">CISC vs RISC Comparison:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Adding memory locations: a = a + b

CISC (x86-like):
  ADD  [a], [b]     ; Single instruction

RISC (ARM-like):
  LDR  R0, [a]      ; Load a
  LDR  R1, [b]      ; Load b
  ADD  R0, R0, R1   ; Add
  STR  R0, [a]      ; Store result`}
      </pre>
    </div>

    {/* Instruction Format */}
    <h2 className="text-3xl font-bold mt-8">Instruction Format</h2>
    <p className="leading-relaxed">
      Instructions consist of an operation code (opcode) and operand specifications.
      The format determines how operands are accessed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Common Instruction Formats:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Three-Address Format:
  OP dest, src1, src2
  Example: ADD R0, R1, R2    ; R0 = R1 + R2

Two-Address Format:
  OP dest, src
  Example: ADD R0, R1        ; R0 = R0 + R1

One-Address Format (Accumulator):
  OP operand
  Example: ADD R1            ; ACC = ACC + R1

Zero-Address Format (Stack):
  OP
  Example: ADD               ; Push(Pop() + Pop())`}
      </pre>
    </div>

    {/* Instruction Types */}
    <h2 className="text-3xl font-bold mt-8">Common Instruction Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Instructions</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Transfer</td>
            <td className="p-3 border">Move, Load, Store</td>
            <td className="p-3 border">MOV, LDR, STR, PUSH, POP</td>
          </tr>
          <tr>
            <td className="p-3 border">Arithmetic</td>
            <td className="p-3 border">Add, Subtract, Multiply, Divide</td>
            <td className="p-3 border">ADD, SUB, MUL, DIV, INC, DEC</td>
          </tr>
          <tr>
            <td className="p-3 border">Logical</td>
            <td className="p-3 border">AND, OR, XOR, NOT, Shift</td>
            <td className="p-3 border">AND, OR, XOR, NOT, SHL, SHR</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparison</td>
            <td className="p-3 border">Compare, Test</td>
            <td className="p-3 border">CMP, TEST</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Flow</td>
            <td className="p-3 border">Jump, Branch, Call, Return</td>
            <td className="p-3 border">JMP, JE, JNE, CALL, RET</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Memory Organization */}
    <h2 className="text-3xl font-bold mt-8">Memory Organization</h2>
    <p className="leading-relaxed">
      Understanding memory layout is essential for generating code that accesses data correctly.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Program Memory Layout:
High Address
+------------------------+
|      Stack             |  (Grows downward)
|          |             |
|          v             |
|                        |
|          ^             |
|          |             |
|       Heap             |  (Grows upward)
+------------------------+
|   Uninitialized Data   |  (BSS Segment)
+------------------------+
|   Initialized Data     |  (Data Segment)
+------------------------+
|   Code (Text)          |  (Read-only)
+------------------------+
Low Address`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Data Alignment</h3>
    <p className="leading-relaxed">
      Many architectures require or perform better with aligned data access:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Byte (1-byte): No alignment requirement</li>
      <li>Half-word (2-byte): 2-byte aligned (address divisible by 2)</li>
      <li>Word (4-byte): 4-byte aligned</li>
      <li>Double-word (8-byte): 8-byte aligned</li>
    </ul>

    {/* Example Target Machine */}
    <h2 className="text-3xl font-bold mt-8">Example: Simple Target Machine</h2>
    <p className="leading-relaxed">
      Consider a simplified target machine used in many compiler textbooks:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Machine Characteristics:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Registers:
- R0, R1, R2, ..., R7 (8 general-purpose registers)
- SP (Stack Pointer)
- FP (Frame Pointer)

Word size: 32 bits (4 bytes)

Instruction format:
  OP  destination, source

Addressing modes:
- Register:     Ri
- Immediate:    #constant
- Direct:       M (memory address)
- Indirect:     *Ri (contents of address in Ri)
- Indexed:      c(Ri) (Ri + constant c)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example Instructions:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MOV  R0, R1       ; R0 = R1
MOV  R0, M        ; R0 = contents of memory M
MOV  R0, *R1      ; R0 = contents of address in R1
MOV  R0, 8(R1)    ; R0 = contents of (R1 + 8)

ADD  R0, R1       ; R0 = R0 + R1
ADD  R0, #5       ; R0 = R0 + 5
ADD  R0, M        ; R0 = R0 + contents of M

SUB  R0, R1       ; R0 = R0 - R1
MUL  R0, R1       ; R0 = R0 * R1
DIV  R0, R1       ; R0 = R0 / R1

CMP  R0, R1       ; Set flags based on R0 - R1
JMP  L            ; Jump to label L
JE   L            ; Jump if equal (zero flag set)
JNE  L            ; Jump if not equal

CALL F            ; Call function F
RET               ; Return from function

PUSH R0           ; Push R0 onto stack
POP  R0           ; Pop top of stack into R0`}
      </pre>
    </div>

    {/* Instruction Costs */}
    <h2 className="text-3xl font-bold mt-8">Instruction Costs</h2>
    <p className="leading-relaxed">
      Different instructions have different execution times (costs). The code generator
      should prefer lower-cost instruction sequences.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instruction Type</th>
            <th className="p-3 border">Typical Cost</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Register-Register</td>
            <td className="p-3 border">1 cycle</td>
            <td className="p-3 border">Fastest operations</td>
          </tr>
          <tr>
            <td className="p-3 border">Register-Immediate</td>
            <td className="p-3 border">1 cycle</td>
            <td className="p-3 border">Constant in instruction</td>
          </tr>
          <tr>
            <td className="p-3 border">Load/Store</td>
            <td className="p-3 border">1-3 cycles</td>
            <td className="p-3 border">Cache dependent</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Operand</td>
            <td className="p-3 border">2-4 cycles</td>
            <td className="p-3 border">Additional memory access</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiply</td>
            <td className="p-3 border">3-10 cycles</td>
            <td className="p-3 border">Architecture dependent</td>
          </tr>
          <tr>
            <td className="p-3 border">Divide</td>
            <td className="p-3 border">10-50 cycles</td>
            <td className="p-3 border">Very expensive</td>
          </tr>
          <tr>
            <td className="p-3 border">Branch (taken)</td>
            <td className="p-3 border">1-20 cycles</td>
            <td className="p-3 border">Pipeline flush possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Generation Example */}
    <h2 className="text-3xl font-bold mt-8">Code Generation Example</h2>
    <p className="leading-relaxed">
      Generating target code for a simple expression using our target machine:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Source Expression: x = (a + b) * (c - d)</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Three-Address Code:
  t1 = a + b
  t2 = c - d
  t3 = t1 * t2
  x = t3

Generated Target Code:
  MOV  R0, a        ; R0 = a
  ADD  R0, b        ; R0 = a + b (t1)
  MOV  R1, c        ; R1 = c
  SUB  R1, d        ; R1 = c - d (t2)
  MUL  R0, R1       ; R0 = t1 * t2 (t3)
  MOV  x, R0        ; x = t3

Cost analysis:
  6 instructions, 2 registers used
  Assuming each MOV/ADD/SUB = 1 unit, MUL = 3 units
  Total cost = 1 + 1 + 1 + 1 + 3 + 1 = 8 units`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which of the following is characteristic of RISC architecture?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Complex instructions with many addressing modes</li>
      <li>(B) Variable-length instructions</li>
      <li>(C) Load-store architecture with fixed instruction length</li>
      <li>(D) Memory-to-memory operations</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) RISC uses load-store architecture where only load/store instructions access memory, and instructions have fixed length.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What does the instruction MOV R0, 8(R1) typically mean?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Move 8 into R0 using R1</li>
      <li>(B) Load R0 with contents of memory at address R1+8</li>
      <li>(C) Move R0 into memory location 8</li>
      <li>(D) Add 8 to R1 and store in R0</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) This is indexed addressing mode, loading from memory address computed as R1 plus offset 8.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is division typically the most expensive arithmetic operation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) It requires more registers</li>
      <li>(B) It cannot be pipelined</li>
      <li>(C) It requires iterative computation with many cycles</li>
      <li>(D) It always accesses memory</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Division requires iterative subtraction/comparison steps, taking many more cycles than multiplication or addition.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Target machine features directly influence code generation strategies</li>
      <li>RISC architectures use load-store model; CISC allows memory operands</li>
      <li>Registers are fastest but limited; memory is slower but abundant</li>
      <li>Instruction costs vary significantly; prefer cheaper instructions</li>
      <li>Understanding addressing modes helps generate efficient memory access code</li>
      <li>Data alignment requirements affect memory layout decisions</li>
    </ul>

  </div>
);

export default TargetMachine;
