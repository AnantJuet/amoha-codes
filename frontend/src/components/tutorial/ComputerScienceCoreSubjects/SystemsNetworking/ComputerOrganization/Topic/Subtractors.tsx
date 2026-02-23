import React from 'react';

const Subtractors: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Half Subtractor and Full Subtractor
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Subtractors are combinational circuits that perform binary subtraction. Like adders,
      they come in two forms: Half Subtractor (subtracts two bits) and Full Subtractor
      (handles three bits including borrow). These circuits are essential for arithmetic
      operations in digital systems, although modern processors often use adders with
      two's complement for subtraction.
    </p>

    <h2 className="text-3xl font-bold mt-8">Half Subtractor</h2>
    <p className="leading-relaxed">
      A half subtractor performs subtraction of two single binary digits (A - B) and
      produces two outputs: Difference (D) and Borrow (Bout). It's called "half" because
      it cannot handle a borrow input from a previous subtraction.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Half Subtractor Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A (Minuend)</th>
            <th className="p-3 border">B (Subtrahend)</th>
            <th className="p-3 border">Difference (D)</th>
            <th className="p-3 border">Borrow (Bout)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Understanding the Truth Table:

  0 - 0 = 0, no borrow needed
  0 - 1 = 1, need to borrow 1 from higher position
            (10 - 1 = 1 in binary, with borrow)
  1 - 0 = 1, no borrow needed
  1 - 1 = 0, no borrow needed

Note: When A=0, B=1:
  We cannot subtract 1 from 0 directly.
  We borrow from the next higher bit (making it 10 in binary = 2).
  Then: 10 - 1 = 1, Borrow = 1`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Half Subtractor Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`From the truth table:

Difference (D):
  D = A'B + AB' = A XOR B

Borrow (Bout):
  Bout = A'B = (NOT A) AND B

Comparison with Half Adder:
  Half Adder:      S = A XOR B,  C = AB
  Half Subtractor: D = A XOR B,  Bout = A'B

The Difference is identical to Sum (both use XOR).
Borrow requires A to be complemented (inverted).

Example:
  A=0, B=1: D = 0 XOR 1 = 1, Bout = 1 AND 1 = 1
  Interpretation: 0 - 1 = -1 = borrow needed`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Half Subtractor Circuit Diagram</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Half Subtractor Logic Circuit:

                   +-------+
    A -------------|       |
                   |  XOR  |----------------> Difference (D)
    B -------------|       |
                   +-------+

                   +-------+
    A ---[NOT]-----|       |
                   |  AND  |----------------> Borrow (Bout)
    B -------------|       |
                   +-------+


Block Diagram:

           +---------------------+
    A -----|                     |--- Difference (D)
           |   HALF SUBTRACTOR   |
    B -----|                     |--- Borrow (Bout)
           +---------------------+


Alternative Circuit (using NAND gates only):

Similar to half adder, but with A inverted for borrow.
Requires 5 NAND gates total.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Full Subtractor</h2>
    <p className="leading-relaxed">
      A full subtractor subtracts three single binary digits: minuend (A), subtrahend (B),
      and borrow input (Bin) from a previous subtraction. It produces Difference (D) and
      Borrow output (Bout). Full subtractors can be cascaded for multi-bit subtraction.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Full Subtractor Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Bin</th>
            <th className="p-3 border">Difference (D)</th>
            <th className="p-3 border">Bout</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Understanding the Operations:

Row by row analysis (A - B - Bin):
  0 - 0 - 0 = 0, Bout = 0
  0 - 0 - 1 = -1 -> borrow, result = 1, Bout = 1
  0 - 1 - 0 = -1 -> borrow, result = 1, Bout = 1
  0 - 1 - 1 = -2 -> borrow, result = 0, Bout = 1
  1 - 0 - 0 = 1, Bout = 0
  1 - 0 - 1 = 0, Bout = 0
  1 - 1 - 0 = 0, Bout = 0
  1 - 1 - 1 = -1 -> borrow, result = 1, Bout = 1

Key insight: Bout = 1 when we need to borrow from higher bit
             (when subtrahend + borrow > minuend)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Full Subtractor Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`From the truth table:

Difference (D):
  D = A'B'Bin + A'BBin' + AB'Bin' + ABBin
    = A XOR B XOR Bin

Borrow Output (Bout):
  Bout = A'B'Bin + A'BBin' + A'BBin + ABBin
       = A'B + A'Bin + BBin
       = A'B + Bin(A' + B)
       = A'B + Bin(A XOR B)'   [since A'+B = (AB')' = (A XOR B)' when simplified]

Alternative simplified form:
  Bout = A'B + Bin(A XNOR B)

Or using XOR:
  Bout = A'B + Bin(A XOR B)'

Comparison with Full Adder:
  Full Adder:      S = A XOR B XOR Cin,   Cout = AB + Cin(A XOR B)
  Full Subtractor: D = A XOR B XOR Bin,   Bout = A'B + Bin(A XOR B)'`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Full Subtractor K-Map</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`K-Map for Difference:
              BBin
           00  01  11  10
         +---+---+---+---+
      0  | 0 | 1 | 0 | 1 |
  A      +---+---+---+---+
      1  | 1 | 0 | 1 | 0 |
         +---+---+---+---+

Pattern: Checkerboard = XOR function
D = A XOR B XOR Bin

K-Map for Bout:
              BBin
           00  01  11  10
         +---+---+---+---+
      0  | 0 | 1 | 1 | 1 |
  A      +---+---+---+---+
      1  | 0 | 0 | 1 | 0 |
         +---+---+---+---+

Groups:
  - Cells 1,3 (A'Bin): gives A'Bin
  - Cells 2,3 (A'B): gives A'B
  - Cells 3,7 (BBin): gives BBin

Bout = A'B + A'Bin + BBin`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Full Subtractor Circuit Diagram</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Full Subtractor Using Two Half Subtractors:

    A ----+
          |   +---------------+
          +---|               |
              | Half          |----P = A XOR B
    B --------|  Subtractor 1 |
              |               |----B1 = A'B
              +---------------+
                    |  |
                    |  +--------+
                    |           |
   Bin --+          |           |
         |   +---------------+  |
         +---|               |  |
             | Half          |--D = P XOR Bin
    P -------|  Subtractor 2 |     = A XOR B XOR Bin
             |               |--B2 = P'.Bin
             +---------------+      = (A XOR B)'.Bin
                        |
                        +---[OR]---- Bout = B1 + B2
                        |            = A'B + (A XOR B)'.Bin
    B1 -----------------+


Block Diagram:

           +---------------------+
    A -----|                     |--- Difference (D)
           |                     |
    B -----|   FULL SUBTRACTOR   |
           |                     |--- Bout
   Bin ----|                     |
           +---------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ripple Borrow Subtractor</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Ripple Borrow Subtractor:

Computes: A3A2A1A0 - B3B2B1B0

    A0  B0      A1  B1      A2  B2      A3  B3
     |   |       |   |       |   |       |   |
     v   v       v   v       v   v       v   v
   +-------+   +-------+   +-------+   +-------+
   |  FS0  |   |  FS1  |   |  FS2  |   |  FS3  |
Bin|       |-->|       |-->|       |-->|       |--> Bout
   +-------+   +-------+   +-------+   +-------+
       |           |           |           |
       v           v           v           v
      D0          D1          D2          D3

Example: 1101 - 0110 (13 - 6)

  Position 0: 1-0-0 = 1, Bout=0
  Position 1: 0-1-0 = 1, Bout=1 (borrow needed)
  Position 2: 1-1-1 = 1, Bout=1 (borrow propagates)
  Position 3: 1-0-1 = 0, Bout=0

  Result: 0111 (7) ✓

If Bout=1 at MSB: Result is negative (A < B)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Subtraction Using Adders (Two's Complement)</h2>
    <p className="leading-relaxed">
      Modern digital systems typically use adders for subtraction by adding the two's
      complement of the subtrahend. This allows using the same hardware for both operations.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`A - B = A + (-B) = A + (B' + 1) = A + B' + 1

Implementation using Full Adder:

         A    B
         |    |
         |    +--[XOR]---+   (B XOR 1 = B' when Sub=1)
         |        |      |
         |        1      |   (Sub signal, 1 for subtract)
         v        v      v
       +---------------+
       |  Full Adder   |
  Cin--|               |--- Sum = Difference
   1   |               |--- Cout
       +---------------+

When Cin = 1 (subtract mode):
  - XOR inverts B to get B'
  - Adding 1 via Cin completes two's complement
  - Result: A + B' + 1 = A - B

Adder/Subtractor Circuit:
  - Single control signal (Add/Sub)
  - Add/Sub = 0: Normal addition (A + B)
  - Add/Sub = 1: Subtraction (A - B)
  - XOR gates controlled by Add/Sub signal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combined Adder-Subtractor</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Adder-Subtractor:

                    M (Mode: 0=Add, 1=Subtract)
                    |
    A0  B0--[XOR]---+       A1  B1--[XOR]---+
     |       |               |       |
     v       v               v       v
   +-------+               +-------+
   |  FA0  |     ...       |  FA1  |     ...
   |       |-------------->|       |
M--|       |               |       |
   +-------+               +-------+
       |                       |
       v                       v
      S0                      S1

When M = 0 (Add):
  B XOR 0 = B (unchanged)
  Cin = 0
  Result = A + B

When M = 1 (Subtract):
  B XOR 1 = B' (inverted)
  Cin = 1 (adds 1 for two's complement)
  Result = A + B' + 1 = A - B

Overflow Detection:
  For signed numbers, overflow when:
  - Adding two positives gives negative
  - Adding two negatives gives positive
  - Cin to MSB != Cout from MSB`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Half vs Full Subtractor</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Half Subtractor</th>
            <th className="p-3 border">Full Subtractor</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Inputs</td>
            <td className="p-3 border">2 (A, B)</td>
            <td className="p-3 border">3 (A, B, Bin)</td>
          </tr>
          <tr>
            <td className="p-3 border">Outputs</td>
            <td className="p-3 border">2 (D, Bout)</td>
            <td className="p-3 border">2 (D, Bout)</td>
          </tr>
          <tr>
            <td className="p-3 border">Difference</td>
            <td className="p-3 border">A XOR B</td>
            <td className="p-3 border">A XOR B XOR Bin</td>
          </tr>
          <tr>
            <td className="p-3 border">Borrow</td>
            <td className="p-3 border">A'B</td>
            <td className="p-3 border">A'B + Bin(A XNOR B)</td>
          </tr>
          <tr>
            <td className="p-3 border">Gates Required</td>
            <td className="p-3 border">1 XOR + 1 AND + 1 NOT</td>
            <td className="p-3 border">2 XOR + 2 AND + 1 OR + 1 NOT</td>
          </tr>
          <tr>
            <td className="p-3 border">Can Cascade?</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ALU Operations:</strong> Subtraction in arithmetic units</li>
        <li><strong>Comparison:</strong> Determining if A {">"} B, A = B, or A {"<"} B</li>
        <li><strong>Decrement:</strong> Subtracting 1 from counters</li>
        <li><strong>Address Calculation:</strong> Computing relative addresses</li>
        <li><strong>Digital Signal Processing:</strong> Difference calculations</li>
        <li><strong>Error Detection:</strong> Comparing expected vs received values</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Answer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Half Subtractor: A=1, B=0</td>
            <td className="p-3 border">D=1, Bout=0</td>
          </tr>
          <tr>
            <td className="p-3 border">Half Subtractor: A=0, B=1</td>
            <td className="p-3 border">D=1, Bout=1</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Subtractor: A=1, B=1, Bin=1</td>
            <td className="p-3 border">D=1, Bout=1</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Subtractor: A=1, B=0, Bin=1</td>
            <td className="p-3 border">D=0, Bout=0</td>
          </tr>
          <tr>
            <td className="p-3 border">Subtract 1010 - 0011 using ripple</td>
            <td className="p-3 border">0111 (7)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Half Subtractor: 2 inputs, D = A XOR B, Bout = A'B</li>
        <li>Full Subtractor: 3 inputs, D = A XOR B XOR Bin</li>
        <li>Borrow is generated when subtrahend + borrow {">"} minuend</li>
        <li>Full Subtractor = 2 Half Subtractors + 1 OR gate</li>
        <li>Difference formula is same as Sum (XOR operation)</li>
        <li>Modern systems use adders with two's complement for subtraction</li>
        <li>Combined adder-subtractor uses XOR gates and a mode signal</li>
        <li>Ripple borrow subtractors can cascade for multi-bit operations</li>
        <li>Final borrow out indicates negative result (A {"<"} B)</li>
        <li>Using adders for subtraction reduces hardware complexity</li>
      </ul>
    </div>
  </div>
);

export default Subtractors;
