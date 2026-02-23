import React from 'react';

const ALUOrg: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ALU Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Arithmetic Logic Unit (ALU) is the computational heart of the CPU. It performs
      all arithmetic operations (addition, subtraction, multiplication, division) and
      logical operations (AND, OR, NOT, XOR) on data. Understanding ALU organization
      is essential to grasp how computers process data at the hardware level.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is an ALU?</h2>
    <p className="leading-relaxed">
      The ALU is a combinational digital circuit that performs arithmetic and bitwise
      operations on integer binary numbers. It takes two operands as input, performs
      the operation specified by the control signals, and produces a result along
      with status flags indicating properties of the result.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic ALU Block Diagram:

                    Operand A        Operand B
                       |                |
                       v                v
                    +------+        +------+
                    |  n   |        |  n   |
                    | bits |        | bits |
                    +------+        +------+
                       |                |
                       +-------+--------+
                               |
                               v
                    +--------------------+
                    |                    |
                    |        ALU         |<---- Operation Select
                    |                    |      (Opcode/Control)
                    |   +------------+   |
                    |   | Arithmetic |   |
                    |   |   Unit     |   |
                    |   +------------+   |
                    |                    |
                    |   +------------+   |
                    |   |   Logic    |   |
                    |   |   Unit     |   |
                    |   +------------+   |
                    |                    |
                    +--------------------+
                       |            |
                       v            v
                   +------+    +--------+
                   |Result|    | Status |
                   |n bits|    | Flags  |
                   +------+    +--------+
                                  |
                        +----+----+----+----+
                        |    |    |    |    |
                        Z    C    S    V    P
                      Zero Carry Sign Over Parity
                                     flow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALU Components</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Arithmetic Unit</h3>
    <p className="leading-relaxed">
      The arithmetic unit performs mathematical operations on binary numbers.
      At its core is the adder circuit, which can be configured for various operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Arithmetic Unit Operations:

1. Addition: A + B
   - Full adder circuit adds two n-bit numbers
   - Carry propagation from LSB to MSB

2. Subtraction: A - B
   - Implemented as A + (2's complement of B)
   - A + B' + 1 (B' is 1's complement, +1 makes it 2's complement)

3. Increment: A + 1
   - Add 1 to operand A

4. Decrement: A - 1
   - Subtract 1 from operand A

5. Negate: -A
   - 2's complement of A

Basic Adder/Subtractor Circuit:
                    A(i)  B(i)
                      |    |
                      |    v
                      |  +---+
                      |  |XOR|<---- SUB control (0=Add, 1=Sub)
                      |  +---+
                      |    |
                      v    v
                   +----------+
    Carry In ----->| Full     |-----> Carry Out
                   | Adder    |
                   +----------+
                        |
                        v
                     Sum(i)

For subtraction: XOR inverts B when SUB=1
Carry-in = 1 for subtraction (to complete 2's complement)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Logic Unit</h3>
    <p className="leading-relaxed">
      The logic unit performs bitwise logical operations on data. These operations
      are performed independently on each bit position.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Logic Unit Operations:

For each bit position i:

AND:  Result(i) = A(i) AND B(i)
OR:   Result(i) = A(i) OR B(i)
XOR:  Result(i) = A(i) XOR B(i)
NOT:  Result(i) = NOT A(i)
NAND: Result(i) = NOT(A(i) AND B(i))
NOR:  Result(i) = NOT(A(i) OR B(i))

Logic Unit Implementation:
                    A(i)  B(i)
                      |    |
           +----------+----+----------+
           |          |    |          |
           v          v    v          v
        +-----+    +----+  +-----+  +----+
        | AND |    | OR |  | XOR |  | NOT|
        +-----+    +----+  +-----+  +----+
           |          |       |        |
           +----+-----+---+---+--------+
                |         |
                v         v
              +-------------+
              |     MUX     |<---- Select
              +-------------+
                    |
                    v
                Result(i)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Shifter Unit</h3>
    <p className="leading-relaxed">
      The shifter unit moves bits left or right within the data word. Different
      shift types handle the vacated and overflow bits differently.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Shifter Unit Operations:

Logical Shift Left (SHL):
  Input:  [b7][b6][b5][b4][b3][b2][b1][b0]
  Output: [b6][b5][b4][b3][b2][b1][b0][ 0]
  - MSB goes to carry, 0 enters from right

Logical Shift Right (SHR):
  Input:  [b7][b6][b5][b4][b3][b2][b1][b0]
  Output: [ 0][b7][b6][b5][b4][b3][b2][b1]
  - LSB goes to carry, 0 enters from left

Arithmetic Shift Right (ASR):
  Input:  [b7][b6][b5][b4][b3][b2][b1][b0]
  Output: [b7][b7][b6][b5][b4][b3][b2][b1]
  - Sign bit (b7) is replicated

Rotate Left (ROL):
  Input:  [b7][b6][b5][b4][b3][b2][b1][b0]
  Output: [b6][b5][b4][b3][b2][b1][b0][b7]
  - MSB wraps to LSB position

Rotate Right (ROR):
  Input:  [b7][b6][b5][b4][b3][b2][b1][b0]
  Output: [b0][b7][b6][b5][b4][b3][b2][b1]
  - LSB wraps to MSB position

Barrel Shifter:
- Shifts by any number of positions in one cycle
- Uses multiple stages of multiplexers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALU Control and Operation Selection</h2>
    <p className="leading-relaxed">
      The ALU operation is selected by control signals (typically 3-5 bits) from
      the control unit. These signals determine which operation the ALU performs.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S2</th>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Cin</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Transfer A</td>
            <td className="p-3 border">F = A</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Increment A</td>
            <td className="p-3 border">F = A + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Add</td>
            <td className="p-3 border">F = A + B</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Add with Carry</td>
            <td className="p-3 border">F = A + B + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Subtract</td>
            <td className="p-3 border">F = A + B' + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Decrement A</td>
            <td className="p-3 border">F = A - 1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">AND</td>
            <td className="p-3 border">F = A AND B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">OR</td>
            <td className="p-3 border">F = A OR B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">XOR</td>
            <td className="p-3 border">F = A XOR B</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">Complement A</td>
            <td className="p-3 border">F = A'</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Status Flags</h2>
    <p className="leading-relaxed">
      The ALU generates status flags that indicate properties of the result.
      These flags are stored in a status register and used for conditional operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ALU Status Flags:

+------+----------+------------------------------------------+
| Flag | Name     | Set When                                 |
+------+----------+------------------------------------------+
|  Z   | Zero     | Result is all zeros                      |
|  C   | Carry    | Carry out from MSB (unsigned overflow)   |
|  S   | Sign     | MSB of result is 1 (negative)            |
|  V   | Overflow | Signed overflow occurred                 |
|  P   | Parity   | Even number of 1s in result              |
+------+----------+------------------------------------------+

Flag Generation Logic:

Zero Flag (Z):
  Z = NOT(R7 OR R6 OR R5 OR R4 OR R3 OR R2 OR R1 OR R0)
  ; Z=1 if all result bits are 0

Carry Flag (C):
  C = Cout from MSB adder
  ; Carry out of the most significant bit

Sign Flag (S):
  S = R(n-1)
  ; MSB of the result (sign bit)

Overflow Flag (V):
  V = Cin(MSB) XOR Cout(MSB)
  ; Overflow if carry into MSB differs from carry out

Parity Flag (P):
  P = R7 XOR R6 XOR R5 XOR R4 XOR R3 XOR R2 XOR R1 XOR R0
  ; P=1 if even number of 1s (even parity)

Example:
  A = 0111 1111 (127)
  B = 0000 0001 (1)
  A + B = 1000 0000 (128 or -128 in signed)

  Flags:
  Z = 0 (result not zero)
  C = 0 (no carry out)
  S = 1 (MSB is 1)
  V = 1 (overflow: positive + positive = negative)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete ALU Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Complete n-bit ALU Organization:

            A(n-1:0)           B(n-1:0)
                |                  |
                v                  v
         +------+------+    +------+------+
         |             |    |             |
         v             v    v             v
    +----------+    +----------+    +----------+
    |  Input   |    | B Select |    |  Input   |
    |  Mux A   |    |(Cin path)|    |  Mux B   |
    +----------+    +----------+    +----------+
         |              |               |
         v              v               v
    +--------------------------------------------+
    |           Arithmetic Unit                  |
    |  +--------------------------------------+  |
    |  | Parallel Adder (Ripple/Carry-Look)  |  |
    |  |  FA | FA | FA | FA | ... | FA | FA  |  |
    |  +--------------------------------------+  |
    +--------------------------------------------+
                        |
                        v
    +--------------------------------------------+
    |              Logic Unit                    |
    |  +------+  +-----+  +-----+  +------+     |
    |  | AND  |  | OR  |  | XOR |  | NOT  |     |
    |  +------+  +-----+  +-----+  +------+     |
    +--------------------------------------------+
                        |
                        v
    +--------------------------------------------+
    |             Shifter Unit                   |
    |  +------+  +------+  +------+  +------+   |
    |  | SHL  |  | SHR  |  | ROL  |  | ROR  |   |
    |  +------+  +------+  +------+  +------+   |
    +--------------------------------------------+
                        |
                        v
                 +-------------+
                 | Output Mux  |<---- Select Lines
                 +-------------+
                        |
         +--------------+--------------+
         |                             |
         v                             v
    +----------+               +-------------+
    | Result   |               | Flag        |
    | Register |               | Generator   |
    +----------+               +-------------+
                                      |
                               +------+------+
                               |  |  |  |  |
                               Z  C  S  V  P`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Adders in ALU</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Ripple Carry Adder</h3>
    <p className="leading-relaxed">
      The simplest adder design where each full adder waits for the carry from the
      previous stage. Simple but slow due to carry propagation delay.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Ripple Carry Adder (4-bit):

A3 B3    A2 B2    A1 B1    A0 B0
  |  |      |  |      |  |      |  |
  v  v      v  v      v  v      v  v
+------+  +------+  +------+  +------+
| FA   |  | FA   |  | FA   |  | FA   |
+------+  +------+  +------+  +------+
Cout<-|--C3--|--C2--|--C1--|--Cin
      |       |       |       |
      v       v       v       v
     S3      S2      S1      S0

Delay = n * (Full Adder delay)
For 32-bit: ~32 gate delays

Simple but slow for wide data paths`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Carry Look-Ahead Adder</h3>
    <p className="leading-relaxed">
      Faster adder that calculates carry signals in advance using generate (G)
      and propagate (P) signals, reducing the critical path delay.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Carry Look-Ahead Concept:

Generate: Gi = Ai AND Bi
  (Carry generated at position i)

Propagate: Pi = Ai XOR Bi
  (Carry propagated from position i-1)

Carry equations:
C1 = G0 + P0*C0
C2 = G1 + P1*G0 + P1*P0*C0
C3 = G2 + P2*G1 + P2*P1*G0 + P2*P1*P0*C0
C4 = G3 + P3*G2 + P3*P2*G1 + P3*P2*P1*G0 + P3*P2*P1*P0*C0

All carries computed in parallel!
Delay = O(log n) instead of O(n)

4-bit CLA block can be cascaded for larger widths`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ALU Example Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 8-bit ALU performing ADD operation

Inputs:
  A = 0011 0101 (53 in decimal)
  B = 0001 1010 (26 in decimal)
  Operation: ADD (S2S1S0 = 001, Cin = 0)

Execution:

  A:     0 0 1 1 0 1 0 1
  B:     0 0 0 1 1 0 1 0
  -------------------------
  Carry: 0 0 1 1 0 1 0 0  (internal carries)
  -------------------------
  Sum:   0 1 0 0 1 1 1 1

Result = 0100 1111 (79 in decimal)
Check: 53 + 26 = 79 ✓

Flags:
  Z = 0 (result not zero)
  C = 0 (no carry out of MSB)
  S = 0 (MSB is 0, positive)
  V = 0 (no signed overflow: pos + pos = pos)
  P = 1 (six 1s in result - even parity)

-------------------------------------------

Example: Subtraction A - B

Inputs:
  A = 0011 0101 (53)
  B = 0001 1010 (26)
  Operation: SUB (computed as A + B' + 1)

  B' = 1110 0101 (1's complement)

  A:       0 0 1 1 0 1 0 1
  B':      1 1 1 0 0 1 0 1
  +1:                    1
  ---------------------------
  Result:  0 0 0 1 1 0 1 1  (27)
  Cout:    1 (ignored for subtraction result)

Result = 0001 1011 (27 in decimal)
Check: 53 - 26 = 27 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern ALU Features</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Multiple ALUs:</strong> Modern CPUs have several ALUs for parallel execution</li>
      <li><strong>SIMD ALUs:</strong> Process multiple data elements simultaneously</li>
      <li><strong>Floating Point Units:</strong> Separate ALU for floating-point operations</li>
      <li><strong>Multiply-Accumulate:</strong> Single operation for F = A*B + C</li>
      <li><strong>Bit Manipulation:</strong> Special instructions for bit operations</li>
      <li><strong>Saturation Arithmetic:</strong> Clamp results to max/min values</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>ALU is the computational core of the CPU</li>
        <li>Performs arithmetic (add, subtract) and logic (AND, OR, XOR) operations</li>
        <li>Takes two operands and produces result plus status flags</li>
        <li>Control signals select which operation to perform</li>
        <li>Status flags (Z, C, S, V, P) indicate result properties</li>
        <li>Subtraction uses 2's complement addition</li>
        <li>Carry look-ahead adders are faster than ripple carry</li>
        <li>Modern ALUs include shifters and specialized units</li>
      </ul>
    </div>
  </div>
);

export default ALUOrg;
