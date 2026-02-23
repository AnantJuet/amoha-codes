import React from 'react';

const InstructionFormat: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Instruction Formats
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An instruction format defines the layout of bits in a machine instruction, specifying
      how the operation code (opcode), operands, and addressing information are encoded.
      The choice of instruction format significantly impacts CPU design, code density,
      and execution efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Components of an Instruction</h2>
    <p className="leading-relaxed">
      Every machine instruction consists of several fields that together specify the
      complete operation to be performed:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic Instruction Structure:

+--------+----------+----------+----------+----------+
| Opcode |   Mode   | Operand1 | Operand2 | Operand3 |
+--------+----------+----------+----------+----------+

Opcode:    Specifies the operation (ADD, SUB, LOAD, etc.)
Mode:      Addressing mode (immediate, direct, indirect, etc.)
Operands:  Source and destination locations (registers, memory)`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Opcode</td>
            <td className="p-3 border">Operation to perform</td>
            <td className="p-3 border">ADD, SUB, MUL, LOAD, STORE, JMP</td>
          </tr>
          <tr>
            <td className="p-3 border">Mode Bits</td>
            <td className="p-3 border">Addressing mode specification</td>
            <td className="p-3 border">00=Direct, 01=Indirect, 10=Register</td>
          </tr>
          <tr>
            <td className="p-3 border">Register Field</td>
            <td className="p-3 border">Register number</td>
            <td className="p-3 border">R0, R1, R2, ... R7</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Field</td>
            <td className="p-3 border">Memory address or offset</td>
            <td className="p-3 border">16-bit or 32-bit address</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Instruction Formats</h2>
    <p className="leading-relaxed">
      Instructions are classified by the number of explicit operand addresses they contain.
      The four main types are zero-address, one-address, two-address, and three-address formats.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Three-Address Instructions</h3>
    <p className="leading-relaxed">
      Three-address format specifies two source operands and one destination in each instruction.
      This format is used in RISC architectures and provides maximum flexibility.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Three-Address Format:

+--------+------+------+------+
| Opcode | Dest | Src1 | Src2 |
+--------+------+------+------+

Format: OPCODE Destination, Source1, Source2

Examples:
  ADD R1, R2, R3      // R1 = R2 + R3
  SUB R4, R5, R6      // R4 = R5 - R6
  MUL R1, R1, R2      // R1 = R1 * R2

Expression: X = (A + B) * (C - D)

Three-Address Instructions:
  ADD T1, A, B        // T1 = A + B
  SUB T2, C, D        // T2 = C - D
  MUL X, T1, T2       // X = T1 * T2

Total: 3 instructions

Advantages:
- Fewer instructions needed
- Results can go to any register
- No implicit operand

Disadvantages:
- Longer instruction format
- More bits needed for addressing`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Two-Address Instructions</h3>
    <p className="leading-relaxed">
      Two-address format specifies two operands where one operand serves as both source
      and destination. This format is common in CISC architectures like x86.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Two-Address Format:

+--------+------+------+
| Opcode | Dest | Src  |
+--------+------+------+

Format: OPCODE Destination, Source
Result: Destination = Destination OPCODE Source

Examples:
  ADD R1, R2          // R1 = R1 + R2
  SUB R3, R4          // R3 = R3 - R4
  MOV R1, R2          // R1 = R2

Expression: X = (A + B) * (C - D)

Two-Address Instructions:
  MOV R1, A           // R1 = A
  ADD R1, B           // R1 = A + B
  MOV R2, C           // R2 = C
  SUB R2, D           // R2 = C - D
  MUL R1, R2          // R1 = (A+B) * (C-D)
  MOV X, R1           // X = R1

Total: 6 instructions

Advantages:
- Shorter than three-address
- Good balance of flexibility and code size

Disadvantages:
- One operand is destroyed
- More instructions than three-address`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. One-Address Instructions</h3>
    <p className="leading-relaxed">
      One-address format uses an implicit operand, typically the Accumulator (AC).
      All operations involve the accumulator as one of the operands. This format
      is used in simple processors.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`One-Address Format:

+--------+---------+
| Opcode | Operand |
+--------+---------+

Format: OPCODE Operand
Implicit: Accumulator (AC) is always involved

Examples:
  LOAD A              // AC = A (load A into accumulator)
  ADD B               // AC = AC + B
  STORE X             // X = AC (store accumulator to X)

Expression: X = (A + B) * (C - D)

One-Address Instructions:
  LOAD A              // AC = A
  ADD B               // AC = A + B
  STORE T1            // T1 = A + B
  LOAD C              // AC = C
  SUB D               // AC = C - D
  MUL T1              // AC = (A+B) * (C-D)
  STORE X             // X = (A+B) * (C-D)

Total: 7 instructions

Advantages:
- Short instructions
- Simple hardware design

Disadvantages:
- Many instructions needed
- Accumulator is bottleneck`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Zero-Address Instructions</h3>
    <p className="leading-relaxed">
      Zero-address format does not explicitly specify any operands. All operands are
      implicit on the stack. This format is used in stack-based architectures.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Zero-Address Format:

+--------+
| Opcode |
+--------+

Format: OPCODE only (operands on stack)
All operations work on stack top elements

Examples:
  PUSH A              // Push A onto stack
  ADD                 // Pop two, push sum
  POP X               // Pop top into X

Expression: X = (A + B) * (C - D)

Zero-Address Instructions (Postfix: A B + C D - *):
  PUSH A              // Stack: [A]
  PUSH B              // Stack: [A, B]
  ADD                 // Stack: [A+B]
  PUSH C              // Stack: [A+B, C]
  PUSH D              // Stack: [A+B, C, D]
  SUB                 // Stack: [A+B, C-D]
  MUL                 // Stack: [(A+B)*(C-D)]
  POP X               // X = (A+B)*(C-D)

Total: 8 instructions

Advantages:
- Very short instructions
- Simple instruction format
- Natural for expression evaluation

Disadvantages:
- Many memory accesses
- Slower execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Instruction Formats</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">General Form</th>
            <th className="p-3 border">Instruction Length</th>
            <th className="p-3 border">Program Length</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Three-Address</td>
            <td className="p-3 border">OP A, B, C</td>
            <td className="p-3 border">Longest</td>
            <td className="p-3 border">Shortest</td>
          </tr>
          <tr>
            <td className="p-3 border">Two-Address</td>
            <td className="p-3 border">OP A, B</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">One-Address</td>
            <td className="p-3 border">OP A</td>
            <td className="p-3 border">Short</td>
            <td className="p-3 border">Long</td>
          </tr>
          <tr>
            <td className="p-3 border">Zero-Address</td>
            <td className="p-3 border">OP</td>
            <td className="p-3 border">Shortest</td>
            <td className="p-3 border">Longest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fixed vs Variable Length Instructions</h2>

    <h3 className="text-2xl font-semibold mt-6">Fixed-Length Instructions</h3>
    <p className="leading-relaxed">
      All instructions have the same bit length (e.g., 32 bits). This simplifies
      instruction fetch and decode but may waste bits for simple instructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fixed-Length Format (32-bit RISC):

All instructions are 32 bits:

R-Type (Register):
+--------+------+------+------+-------+--------+
| Opcode |  Rs  |  Rt  |  Rd  | Shamt | Funct  |
+--------+------+------+------+-------+--------+
   6       5      5      5       5       6     = 32 bits

I-Type (Immediate):
+--------+------+------+-------------------+
| Opcode |  Rs  |  Rt  |    Immediate      |
+--------+------+------+-------------------+
   6       5      5           16           = 32 bits

J-Type (Jump):
+--------+--------------------------------+
| Opcode |          Address               |
+--------+--------------------------------+
   6                  26                  = 32 bits

Advantages:
- Simple fetch (always fetch fixed bytes)
- Easy to decode
- Pipeline-friendly

Disadvantages:
- Wasted bits for simple operations
- Limited address space`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Variable-Length Instructions</h3>
    <p className="leading-relaxed">
      Instructions have different lengths based on complexity. This is more memory
      efficient but complicates instruction fetch and decode.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Variable-Length Format (x86 CISC):

Instructions range from 1 to 15 bytes:

1-byte instruction:
+--------+
| Opcode |  (e.g., NOP, RET)
+--------+

2-byte instruction:
+--------+--------+
| Opcode | ModR/M |  (e.g., ADD reg, reg)
+--------+--------+

3-byte instruction:
+--------+--------+--------+
| Opcode | ModR/M |  SIB   |  (e.g., with scaled index)
+--------+--------+--------+

Multi-byte with immediate and displacement:
+--------+--------+--------+------------+-----------+
| Opcode | ModR/M |  SIB   | Disp(1-4)  | Imm(1-4)  |
+--------+--------+--------+------------+-----------+

Advantages:
- Compact code
- No wasted bits
- Flexible addressing

Disadvantages:
- Complex decode logic
- Pipeline complications
- Variable fetch time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Instruction Format Examples</h2>

    <h3 className="text-2xl font-semibold mt-6">MIPS Instruction Formats</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MIPS R-Type Format (Register operations):
+--------+------+------+------+-------+--------+
|   op   |  rs  |  rt  |  rd  | shamt | funct  |
+--------+------+------+------+-------+--------+
  6 bits  5 bits 5 bits 5 bits 5 bits  6 bits

Example: add $t0, $s1, $s2
op=0, rs=17($s1), rt=18($s2), rd=8($t0), shamt=0, funct=32(add)
Binary: 000000 10001 10010 01000 00000 100000

-------------------------------------------

MIPS I-Type Format (Immediate/Load/Store):
+--------+------+------+-------------------+
|   op   |  rs  |  rt  |    immediate      |
+--------+------+------+-------------------+
  6 bits  5 bits 5 bits      16 bits

Example: addi $t0, $s1, 100
op=8, rs=17($s1), rt=8($t0), immediate=100
Binary: 001000 10001 01000 0000000001100100

-------------------------------------------

MIPS J-Type Format (Jump):
+--------+--------------------------------+
|   op   |           address              |
+--------+--------------------------------+
  6 bits            26 bits

Example: j 10000
op=2, address=10000
Binary: 000010 00000000000010011100010000`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">ARM Instruction Format</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ARM Data Processing Format (32-bit):
+------+---+------+---+------+------+-------------+
| Cond | 00| Opcode| S |  Rn  |  Rd  |  Operand2   |
+------+---+------+---+------+------+-------------+
4 bits  2   4 bits  1   4 bits 4 bits   12 bits

Cond: Condition code (EQ, NE, GT, etc.)
S: Set condition flags
Rn: First operand register
Rd: Destination register
Operand2: Second operand (register or immediate)

Example: ADDS R1, R2, R3 (R1 = R2 + R3, set flags)
Cond=1110(AL), Opcode=0100(ADD), S=1, Rn=R2, Rd=R1, Operand2=R3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Opcode Encoding Techniques</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Fixed Opcode:</strong> Same number of bits for all opcodes</li>
      <li><strong>Expanding Opcode:</strong> Variable opcode length based on instruction type</li>
      <li><strong>Huffman Coding:</strong> Shorter codes for frequent instructions</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Expanding Opcode Example:

16-bit instruction, 15 three-address + 14 two-address + 31 one-address + 16 zero-address

Three-address (15 instructions): 4-bit opcode
+------+----+----+----+
| 0000 | R1 | R2 | R3 |  to
| 1110 | R1 | R2 | R3 |
+------+----+----+----+

Two-address (14 instructions): 8-bit opcode
+----------+----+----+
| 1111 0000| R1 | R2 |  to
| 1111 1101| R1 | R2 |
+----------+----+----+

One-address (31 instructions): 12-bit opcode
+--------------+----+
| 1111 1110 0000| R1 |  to
| 1111 1111 1110| R1 |
+--------------+----+

Zero-address (16 instructions): 16-bit opcode
+------------------+
| 1111 1111 1111 0000|  to
| 1111 1111 1111 1111|
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Instruction format defines the layout of opcode and operands in bits</li>
        <li>Three-address: shortest programs, longest instructions</li>
        <li>Two-address: one operand is both source and destination</li>
        <li>One-address: uses accumulator implicitly</li>
        <li>Zero-address: all operands on stack</li>
        <li>Fixed-length formats simplify decode but may waste bits</li>
        <li>Variable-length formats are compact but complex to decode</li>
        <li>RISC uses fixed formats; CISC uses variable formats</li>
        <li>Expanding opcodes allow more instructions without increasing format size</li>
      </ul>
    </div>
  </div>
);

export default InstructionFormat;
