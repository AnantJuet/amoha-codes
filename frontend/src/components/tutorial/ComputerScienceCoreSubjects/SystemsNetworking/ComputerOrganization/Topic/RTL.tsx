import React from 'react';

const RTL: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Register Transfer Language (RTL)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Register Transfer Language (RTL) is a symbolic notation used to describe the
      micro-operations and data transfers that occur within a digital computer.
      It provides a concise and precise way to specify how data moves between registers
      and how operations are performed on that data during instruction execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Register Transfer Language?</h2>
    <p className="leading-relaxed">
      RTL is a notation system that describes the hardware operation of transferring
      data from one register to another. It uses symbolic representations to define:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Register names and their contents</li>
      <li>Data transfer operations between registers</li>
      <li>Arithmetic and logic operations</li>
      <li>Conditional transfers based on control signals</li>
      <li>Memory read and write operations</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Basic RTL Notation</h2>

    <h3 className="text-2xl font-semibold mt-6">Register Designation</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Naming Conventions:

Capital letters denote registers:
  R1, R2, R3, ... Rn   - General purpose registers
  PC                    - Program Counter
  IR                    - Instruction Register
  MAR                   - Memory Address Register
  MBR / MDR             - Memory Buffer/Data Register
  AC                    - Accumulator
  SP                    - Stack Pointer

Register Contents:
  R1      - Entire register R1
  R1(7)   - Bit 7 of register R1
  R1(7:0) - Bits 7 through 0 of R1 (low byte)
  R1(H)   - High-order byte of R1
  R1(L)   - Low-order byte of R1

Examples:
  PC(15:0)  - 16-bit Program Counter
  IR(7:4)   - Opcode field (bits 7-4 of IR)
  IR(3:0)   - Address field (bits 3-0 of IR)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Transfer Operator</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Transfer Operator: <-

The left arrow (<-) denotes transfer of data.

Syntax: Destination <- Source

Examples:
  R2 <- R1        ; Copy contents of R1 to R2
  PC <- MAR       ; Transfer MAR to PC
  IR <- MBR       ; Transfer MBR to IR

Meaning:
  R2 <- R1 means:
  - Read the contents of R1
  - Write that value into R2
  - Contents of R1 remain unchanged
  - Previous contents of R2 are overwritten

Hardware Interpretation:
  R2 <- R1

  Clock  __|---|___|
             ^
             |
         At rising edge:
         - R1 outputs to bus
         - R2 latches from bus`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conditional Transfer</h2>
    <p className="leading-relaxed">
      Conditional transfers occur only when a specified condition is true.
      The condition (control signal) precedes the transfer statement.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Conditional Transfer Notation:

Syntax: condition : destination <- source

Examples:
  P : R2 <- R1           ; If P=1, transfer R1 to R2

  K1 : R1 <- R2          ; If K1=1, R1 gets R2

  Z : PC <- IR(addr)     ; If Zero flag=1, PC gets address from IR

Hardware Control:
                +-----+
  Control P --->|     |
                | AND |---> Load R2
  Clock ------->|     |
                +-----+

  The transfer occurs only when P=1 AND clock edge occurs

Multiple Conditions:
  K1.K2 : R3 <- R1 + R2    ; If K1 AND K2 = 1
  K1 + K2 : R3 <- R1       ; If K1 OR K2 = 1
  K1' : R3 <- R1           ; If K1 = 0 (K1 complement)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RTL Operations</h2>

    <h3 className="text-2xl font-semibold mt-6">Arithmetic Operations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Arithmetic Operations in RTL:

+---------------------------+--------------------------------+
| RTL Statement             | Description                    |
+---------------------------+--------------------------------+
| R3 <- R1 + R2             | Addition                       |
| R3 <- R1 - R2             | Subtraction                    |
| R1 <- R1 + 1              | Increment                      |
| R1 <- R1 - 1              | Decrement                      |
| R2 <- -R1                 | Negate (2's complement)        |
| R2 <- R1'                 | 1's complement                 |
| R3 <- R1 + R2 + C         | Add with carry                 |
| R3 <- R1 * R2             | Multiplication                 |
| R3 <- R1 / R2             | Division                       |
+---------------------------+--------------------------------+

Examples:
  AC <- AC + MBR           ; Add memory data to accumulator
  PC <- PC + 1             ; Increment program counter
  R1 <- R2 + R3 + 1        ; Add with carry-in of 1

Subtraction using 2's complement:
  R3 <- R1 + R2' + 1       ; Same as R3 <- R1 - R2`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Logic Operations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Logic Operations in RTL:

+---------------------------+--------------------------------+
| RTL Statement             | Description                    |
+---------------------------+--------------------------------+
| R3 <- R1 AND R2           | Bitwise AND                    |
| R3 <- R1 OR R2            | Bitwise OR                     |
| R3 <- R1 XOR R2           | Bitwise Exclusive OR           |
| R2 <- NOT R1              | Bitwise complement             |
| R3 <- R1 NAND R2          | Bitwise NAND                   |
| R3 <- R1 NOR R2           | Bitwise NOR                    |
+---------------------------+--------------------------------+

Alternative Notations:
  R3 <- R1 ^ R2             ; AND (some notations)
  R3 <- R1 v R2             ; OR (some notations)
  R3 <- R1'                 ; NOT (complement)

Examples:
  AC <- AC AND MBR         ; Mask accumulator with MBR
  R1 <- R1 OR 0x00FF       ; Set lower byte to all 1s
  R2 <- R1 XOR R2          ; Toggle bits`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Shift Operations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Shift Operations in RTL:

+---------------------------+--------------------------------+
| RTL Statement             | Description                    |
+---------------------------+--------------------------------+
| R1 <- shl R1              | Shift left logical             |
| R1 <- shr R1              | Shift right logical            |
| R1 <- cil R1              | Circular shift left            |
| R1 <- cir R1              | Circular shift right           |
| R1 <- ashl R1             | Arithmetic shift left          |
| R1 <- ashr R1             | Arithmetic shift right         |
+---------------------------+--------------------------------+

Shift with Carry:
  C, R1 <- shl R1           ; Shift left, MSB goes to Carry
  R1, C <- shr R1           ; Shift right, LSB goes to Carry

Rotate through Carry:
  C, R1 <- cil R1, C        ; Rotate left through carry
  R1, C <- cir R1, C        ; Rotate right through carry

Example Shift Left:
  Before: R1 = [1][0][1][1][0][1][0][0], C = 0
  After:  R1 = [0][1][1][0][1][0][0][0], C = 1

  The '1' from MSB goes to Carry flag`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Transfer Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Transfer in RTL:

Memory Read:
  MBR <- M[MAR]             ; Read memory at address MAR
  or
  MBR <- M[address]         ; Read memory at specified address

Memory Write:
  M[MAR] <- MBR             ; Write MBR to memory at address MAR
  or
  M[address] <- data        ; Write data to specified address

Common Patterns:

Fetch Instruction:
  MAR <- PC                 ; Address of instruction
  MBR <- M[MAR]             ; Read instruction
  PC <- PC + 1              ; Point to next instruction
  IR <- MBR                 ; Store in instruction register

Load Operation (LOAD R1, address):
  MAR <- IR(addr)           ; Get address from instruction
  MBR <- M[MAR]             ; Read from memory
  R1 <- MBR                 ; Store in destination register

Store Operation (STORE R1, address):
  MAR <- IR(addr)           ; Get address from instruction
  MBR <- R1                 ; Data to store
  M[MAR] <- MBR             ; Write to memory`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simultaneous Operations</h2>
    <p className="leading-relaxed">
      Multiple micro-operations can occur simultaneously in the same clock cycle
      if they use different hardware resources. RTL uses comma to separate
      simultaneous operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simultaneous Operations:

Syntax: operation1, operation2

Examples:
  MBR <- M[MAR], PC <- PC + 1
  ; Both happen in same clock cycle
  ; Read memory AND increment PC simultaneously

  R1 <- R2, R2 <- R1
  ; WRONG! Cannot exchange - both need each other's value
  ; This is a data dependency

  R3 <- R1 + R2, R4 <- R5 - R6
  ; OK if separate ALUs or multi-port ALU

Valid Simultaneous Operations:
  - Use different buses
  - Use different functional units
  - Have no data dependencies

Timing:
  Clock __|-----|___|-----|___
         |  T0  |  T1    |

  T0: MBR <- M[MAR], PC <- PC + 1
      (Memory read uses data bus)
      (PC increment uses internal adder)

  Both complete before T1 begins`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Instruction Cycle in RTL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: ADD R1, R2, R3 (Three-address instruction)

Fetch Phase:
  T0: MAR <- PC
  T1: MBR <- M[MAR], PC <- PC + 1
  T2: IR <- MBR

Decode Phase:
  T3: (Decode opcode in IR)
      ; Control unit determines: ADD operation
      ; Source1 = R2, Source2 = R3, Dest = R1

Execute Phase:
  T4: R1 <- R2 + R3

Complete RTL:
  T0: MAR <- PC
  T1: MBR <- M[MAR], PC <- PC + 1
  T2: IR <- MBR
  T3: (Decode)
  T4: R1 <- R2 + R3

-------------------------------------------

Example: LOAD R1, [2000H] (Load from memory)

  T0: MAR <- PC
  T1: MBR <- M[MAR], PC <- PC + 1
  T2: IR <- MBR
  T3: MAR <- IR(addr)           ; Address field = 2000H
  T4: MBR <- M[MAR]
  T5: R1 <- MBR

-------------------------------------------

Example: Branch if Zero (BZ offset)

  T0: MAR <- PC
  T1: MBR <- M[MAR], PC <- PC + 1
  T2: IR <- MBR
  T3: Z: PC <- PC + IR(offset)  ; If Z=1, branch
      Z': (no operation)        ; If Z=0, continue`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RTL Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Letters</td>
            <td className="p-3 border">Register names</td>
            <td className="p-3 border">R1, PC, MAR</td>
          </tr>
          <tr>
            <td className="p-3 border">&lt;-</td>
            <td className="p-3 border">Data transfer</td>
            <td className="p-3 border">R2 &lt;- R1</td>
          </tr>
          <tr>
            <td className="p-3 border">:</td>
            <td className="p-3 border">Condition separator</td>
            <td className="p-3 border">P: R2 &lt;- R1</td>
          </tr>
          <tr>
            <td className="p-3 border">,</td>
            <td className="p-3 border">Simultaneous operations</td>
            <td className="p-3 border">R1 &lt;- R2, R3 &lt;- R4</td>
          </tr>
          <tr>
            <td className="p-3 border">M[addr]</td>
            <td className="p-3 border">Memory contents</td>
            <td className="p-3 border">MBR &lt;- M[MAR]</td>
          </tr>
          <tr>
            <td className="p-3 border">( )</td>
            <td className="p-3 border">Bit selection</td>
            <td className="p-3 border">IR(7:0), R1(H)</td>
          </tr>
          <tr>
            <td className="p-3 border">+, -, *, /</td>
            <td className="p-3 border">Arithmetic</td>
            <td className="p-3 border">R3 &lt;- R1 + R2</td>
          </tr>
          <tr>
            <td className="p-3 border">AND, OR, XOR</td>
            <td className="p-3 border">Logic</td>
            <td className="p-3 border">R3 &lt;- R1 AND R2</td>
          </tr>
          <tr>
            <td className="p-3 border">'</td>
            <td className="p-3 border">Complement</td>
            <td className="p-3 border">R2 &lt;- R1'</td>
          </tr>
          <tr>
            <td className="p-3 border">shl, shr</td>
            <td className="p-3 border">Shift</td>
            <td className="p-3 border">R1 &lt;- shl R1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>RTL describes micro-operations using symbolic notation</li>
        <li>Left arrow (&lt;-) denotes data transfer from source to destination</li>
        <li>Capital letters represent register names</li>
        <li>Parentheses specify bit ranges within registers</li>
        <li>Colon (:) separates condition from operation</li>
        <li>Comma (,) separates simultaneous operations</li>
        <li>M[address] represents memory contents at that address</li>
        <li>RTL helps design control units and verify hardware behavior</li>
        <li>Each RTL statement executes in one clock cycle</li>
      </ul>
    </div>
  </div>
);

export default RTL;
