import React from 'react';

const MicroOperations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Micro-operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Micro-operations are elementary operations performed on data stored in registers.
      They are the fundamental building blocks of instruction execution in a CPU.
      Every machine instruction is executed as a sequence of micro-operations, each
      performing a simple operation like transfer, arithmetic, logic, or shift.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are Micro-operations?</h2>
    <p className="leading-relaxed">
      A micro-operation is the most basic operation that the CPU can perform in one
      clock cycle. It involves data transfer between registers, arithmetic operations,
      logical operations, or shift operations. Complex instructions are broken down
      into sequences of these simple micro-operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction Breakdown into Micro-operations:

Machine Instruction: ADD R1, R2, R3  (R1 = R2 + R3)

Micro-operations sequence:
  T0: MAR <- PC           ; Send PC to memory address register
  T1: MBR <- M[MAR]       ; Read instruction from memory
      PC <- PC + 1        ; Increment program counter
  T2: IR <- MBR           ; Transfer instruction to IR
  T3: Decode IR           ; Decode the instruction
  T4: R1 <- R2 + R3       ; Execute the addition

Each line represents one micro-operation executed in one clock cycle.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Micro-operations</h2>
    <p className="leading-relaxed">
      Micro-operations can be categorized into four main types based on the operation performed:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Register Transfer Micro-operations</h3>
    <p className="leading-relaxed">
      These operations transfer data from one register to another without modifying
      the data. They are the simplest form of micro-operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Transfer Micro-operations:

Basic Transfer:
  R2 <- R1        ; Copy contents of R1 to R2

Notation:
  R2 <- R1 means: "Transfer contents of R1 to R2"
  R1 is source, R2 is destination
  Contents of R1 remain unchanged

Examples:
  AC <- MBR       ; Transfer MBR to Accumulator
  PC <- MAR       ; Transfer MAR to Program Counter
  IR <- MBR       ; Transfer Memory Buffer to Instruction Register
  R1 <- R2        ; Copy R2 to R1

Hardware Implementation:
  +------+               +------+
  |  R1  |----Bus------->|  R2  |
  +------+               +------+
     |                      ^
     +----> Data            |
           Transfer --------+

Conditional Transfer:
  if (P = 1) then R2 <- R1

  Written as: P: R2 <- R1

  "If control signal P is 1, transfer R1 to R2"`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Arithmetic Micro-operations</h3>
    <p className="leading-relaxed">
      These operations perform arithmetic calculations on numeric data stored in registers.
      They include addition, subtraction, increment, decrement, and complement operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Arithmetic Micro-operations:

+------------------+-------------------------+
| Symbolic         | Description             |
+------------------+-------------------------+
| R3 <- R1 + R2    | Add R1 and R2           |
| R3 <- R1 - R2    | Subtract R2 from R1     |
| R2 <- R1 + 1     | Increment R1            |
| R2 <- R1 - 1     | Decrement R1            |
| R2 <- R1'        | 1's complement of R1    |
| R2 <- R1' + 1    | 2's complement of R1    |
| R3 <- R1 + R2 + 1| Add with carry          |
| R1 <- R1 + R2'+ 1| R1 = R1 - R2 (using 2's)|
+------------------+-------------------------+

Subtraction using 2's Complement:
  R1 - R2 = R1 + (R2' + 1)

  Example: 5 - 3
    R1 = 0101 (5)
    R2 = 0011 (3)
    R2' = 1100
    R2' + 1 = 1101 (-3 in 2's complement)
    R1 + R2' + 1 = 0101 + 1101 = 0010 (2)

Hardware for Addition:
       R1                R2
    +------+          +------+
    |      |          |      |
    +--+---+          +---+--+
       |                  |
       v                  v
    +---------------------+
    |    Full Adder       |
    +----------+----------+
               |
               v
            +------+
            |  R3  |
            +------+`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Add</td>
            <td className="p-3 border">R3 &lt;- R1 + R2</td>
            <td className="p-3 border">Binary addition of two registers</td>
          </tr>
          <tr>
            <td className="p-3 border">Subtract</td>
            <td className="p-3 border">R3 &lt;- R1 - R2</td>
            <td className="p-3 border">Binary subtraction</td>
          </tr>
          <tr>
            <td className="p-3 border">Increment</td>
            <td className="p-3 border">R1 &lt;- R1 + 1</td>
            <td className="p-3 border">Add 1 to register</td>
          </tr>
          <tr>
            <td className="p-3 border">Decrement</td>
            <td className="p-3 border">R1 &lt;- R1 - 1</td>
            <td className="p-3 border">Subtract 1 from register</td>
          </tr>
          <tr>
            <td className="p-3 border">Negate</td>
            <td className="p-3 border">R2 &lt;- -R1</td>
            <td className="p-3 border">2's complement (negate)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Logic Micro-operations</h3>
    <p className="leading-relaxed">
      Logic micro-operations perform bitwise logical operations on data. They include
      AND, OR, XOR, and complement operations, applied bit by bit to register contents.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Logic Micro-operations:

+------------------+-------------------------+
| Symbolic         | Description             |
+------------------+-------------------------+
| R3 <- R1 AND R2  | Bitwise AND             |
| R3 <- R1 OR R2   | Bitwise OR              |
| R3 <- R1 XOR R2  | Bitwise XOR             |
| R2 <- NOT R1     | Bitwise complement      |
| R3 <- R1 NAND R2 | Bitwise NAND            |
| R3 <- R1 NOR R2  | Bitwise NOR             |
+------------------+-------------------------+

Example: AND Operation
  R1 = 1010 1100
  R2 = 0011 1010
  -----------------
  R1 AND R2 = 0010 1000

Applications of Logic Operations:
1. Masking (AND): Clear specific bits
   R1 = 1011 0110
   Mask = 0000 1111
   R1 AND Mask = 0000 0110  ; Keep only lower 4 bits

2. Setting bits (OR): Set specific bits to 1
   R1 = 0011 0100
   Mask = 1000 0001
   R1 OR Mask = 1011 0101   ; Set bits 7 and 0

3. Toggling bits (XOR): Flip specific bits
   R1 = 1010 0110
   Mask = 0000 1111
   R1 XOR Mask = 1010 1001  ; Toggle lower 4 bits

4. Complement (NOT): Invert all bits
   R1 = 0011 1100
   NOT R1 = 1100 0011`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">x</th>
            <th className="p-3 border">y</th>
            <th className="p-3 border">AND</th>
            <th className="p-3 border">OR</th>
            <th className="p-3 border">XOR</th>
            <th className="p-3 border">NAND</th>
            <th className="p-3 border">NOR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Shift Micro-operations</h3>
    <p className="leading-relaxed">
      Shift micro-operations move bits within a register left or right. They are used
      for serial data transfer, multiplication/division by powers of 2, and bit manipulation.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Shift Micro-operations:

Types of Shifts:
1. Logical Shift - Zeros fill vacated positions
2. Circular Shift (Rotate) - Bits wrap around
3. Arithmetic Shift - Sign bit preserved (for signed numbers)

+------------------+----------------------------------+
| Symbolic         | Description                      |
+------------------+----------------------------------+
| R <- shl R       | Shift left logical               |
| R <- shr R       | Shift right logical              |
| R <- cil R       | Circular shift left              |
| R <- cir R       | Circular shift right             |
| R <- ashl R      | Arithmetic shift left            |
| R <- ashr R      | Arithmetic shift right           |
+------------------+----------------------------------+

Logical Shift Left (SHL):
  Before: [1][0][1][1][0][1][0][0]
  After:  [0][1][1][0][1][0][0][0] <- 0
  (Leftmost bit lost, 0 enters from right)

Logical Shift Right (SHR):
  Before: [1][0][1][1][0][1][0][0]
  After:  0 ->[0][1][0][1][1][0][1][0]
  (Rightmost bit lost, 0 enters from left)

Circular Shift Left (Rotate Left):
  Before: [1][0][1][1][0][1][0][0]
  After:  [0][1][1][0][1][0][0][1]
  (Leftmost bit wraps to rightmost position)

Circular Shift Right (Rotate Right):
  Before: [1][0][1][1][0][1][0][0]
  After:  [0][1][0][1][1][0][1][0]
  (Rightmost bit wraps to leftmost position)

Arithmetic Shift Right (preserves sign):
  Before: [1][0][1][1][0][1][0][0] (negative number)
  After:  [1][1][0][1][1][0][1][0]
  (Sign bit replicated, maintains sign)

Applications:
- Left shift by 1 = Multiply by 2
- Right shift by 1 = Divide by 2
- Rotate useful for circular buffers
- Arithmetic shift for signed arithmetic`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Micro-operation Execution Hardware</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hardware Organization for Micro-operations:

                     +-----------------+
                     |   Register Set  |
                     |  R0, R1, ... Rn |
                     +-----------------+
                            |   |
              +-------------+   +-------------+
              |                               |
              v                               v
         +--------+                      +--------+
         |  MUX A |                      |  MUX B |
         +--------+                      +--------+
              |                               |
              v                               v
         +----------------------------------------+
         |          Arithmetic Logic Unit        |
         |                                        |
         |  +----------+  +----------+  +------+ |
         |  | Adder/   |  | Logic    |  | Shift| |
         |  | Subtract |  | Unit     |  | Unit | |
         |  +----------+  +----------+  +------+ |
         |                                        |
         +----------------------------------------+
                            |
                            v
                     +-------------+
                     |   Output    |
                     |   MUX       |
                     +-------------+
                            |
                            v
                     +-----------------+
                     | Destination Reg |
                     +-----------------+

Control Signals:
- SELA: Select source register A
- SELB: Select source register B
- SELD: Select destination register
- OPR:  Select micro-operation type`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALU Control for Micro-operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S2</th>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Transfer A</td>
            <td className="p-3 border">F = A</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Increment</td>
            <td className="p-3 border">F = A + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Add</td>
            <td className="p-3 border">F = A + B</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Add with Carry</td>
            <td className="p-3 border">F = A + B + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">AND</td>
            <td className="p-3 border">F = A AND B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">OR</td>
            <td className="p-3 border">F = A OR B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">XOR</td>
            <td className="p-3 border">F = A XOR B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Complement</td>
            <td className="p-3 border">F = NOT A</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Execute LOAD R1, (R2) followed by ADD R3, R1, R2

Instruction 1: LOAD R1, (R2)  - Load value from address in R2

Micro-operations:
T0: MAR <- R2              ; Transfer address from R2 to MAR
T1: MBR <- Memory[MAR]     ; Read memory at address
T2: R1 <- MBR              ; Store in destination register

Instruction 2: ADD R3, R1, R2

Micro-operations:
T3: MAR <- PC              ; Fetch next instruction
T4: MBR <- Memory[MAR]
    PC <- PC + 1
T5: IR <- MBR              ; Decode
T6: R3 <- R1 + R2          ; Execute addition

Each micro-operation is executed in one clock cycle.
Control unit generates signals to select registers and operations.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Micro-operations are elementary operations performed in one clock cycle</li>
        <li>Four types: Transfer, Arithmetic, Logic, and Shift</li>
        <li>Transfer micro-ops move data between registers</li>
        <li>Arithmetic micro-ops perform math operations</li>
        <li>Logic micro-ops perform bitwise operations</li>
        <li>Shift micro-ops move bits within registers</li>
        <li>Instructions are broken down into sequences of micro-operations</li>
        <li>Control unit generates signals to execute micro-operations</li>
        <li>ALU performs arithmetic, logic, and shift micro-operations</li>
      </ul>
    </div>
  </div>
);

export default MicroOperations;
