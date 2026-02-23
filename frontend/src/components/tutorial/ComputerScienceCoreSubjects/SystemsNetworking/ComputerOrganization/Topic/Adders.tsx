import React from 'react';

const Adders: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Half Adder and Full Adder
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Adders are fundamental combinational circuits that perform binary addition. They are
      essential building blocks in arithmetic logic units (ALUs), processors, and any digital
      system that requires arithmetic operations. The two basic types are Half Adder (adds
      two bits) and Full Adder (adds three bits including carry).
    </p>

    <h2 className="text-3xl font-bold mt-8">Half Adder</h2>
    <p className="leading-relaxed">
      A half adder adds two single binary digits (A and B) and produces two outputs:
      Sum (S) and Carry (C). It's called "half" because it cannot handle a carry input
      from a previous addition.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Half Adder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Sum (S)</th>
            <th className="p-3 border">Carry (C)</th>
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
            <td className="p-3 border">0</td>
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
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Half Adder Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`From the truth table:

Sum (S):
  S = A'B + AB' = A XOR B

Carry (C):
  C = AB = A AND B

Explanation:
  - Sum is 1 when exactly one input is 1 (XOR operation)
  - Carry is 1 only when both inputs are 1 (AND operation)

Example:
  A=1, B=1: Sum = 1 XOR 1 = 0, Carry = 1 AND 1 = 1
  Result: 10 in binary (2 in decimal) = 1 + 1 ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Half Adder Circuit Diagram</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Half Adder Logic Circuit:

                   +-------+
    A -------------|       |
                   |  XOR  |----------------> Sum (S)
    B -------------|       |
         |         +-------+
         |
         |         +-------+
         +---------|       |
                   |  AND  |----------------> Carry (C)
    B -------------|       |
                   +-------+


Block Diagram:

         +------------------+
    A ---|                  |--- Sum (S)
         |   HALF ADDER     |
    B ---|                  |--- Carry (C)
         +------------------+


Using NAND Gates Only (4 NAND gates):

    A ---+---[NAND]---+
         |     |      |
    B ---+     |      +---[NAND]---> Sum
               |      |
         +-----+------+
         |
         +---[NAND]---+---[NAND]---> Carry
         |            |
    B ---+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Full Adder</h2>
    <p className="leading-relaxed">
      A full adder adds three single binary digits: two inputs (A and B) and a carry input
      (Cin) from a previous addition. It produces a Sum (S) and a Carry output (Cout).
      Full adders can be cascaded to add multi-bit numbers.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Full Adder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">Cin</th>
            <th className="p-3 border">Sum (S)</th>
            <th className="p-3 border">Cout</th>
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
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
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
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
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

    <h3 className="text-2xl font-semibold mt-6">Full Adder Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`From the truth table:

Sum (S):
  S = A'B'Cin + A'BCin' + AB'Cin' + ABCin
    = A XOR B XOR Cin

Carry Out (Cout):
  Cout = A'BCin + AB'Cin + ABCin' + ABCin
       = AB + BCin + ACin
       = AB + Cin(A + B)
       = AB + Cin(A XOR B)

Alternative form using two half adders:
  Sum = (A XOR B) XOR Cin
  Cout = AB + Cin(A XOR B)

Verification (A=1, B=1, Cin=1):
  Sum = 1 XOR 1 XOR 1 = 0 XOR 1 = 1
  Cout = (1.1) + 1(1 XOR 1) = 1 + 1(0) = 1
  Result: 11 in binary (3) = 1 + 1 + 1 ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Full Adder K-Map Simplification</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`K-Map for Sum:
              BC
           00  01  11  10
         +---+---+---+---+
      0  | 0 | 1 | 0 | 1 |
  A      +---+---+---+---+
      1  | 1 | 0 | 1 | 0 |
         +---+---+---+---+

  Cin is the C in BC.
  Pattern: checkerboard = XOR function
  S = A XOR B XOR Cin

K-Map for Cout:
              BCin
           00  01  11  10
         +---+---+---+---+
      0  | 0 | 0 | 1 | 0 |
  A      +---+---+---+---+
      1  | 0 | 1 | 1 | 1 |
         +---+---+---+---+

Groups:
  - Cells 3,7 (BCin): gives BCin
  - Cells 5,7 (ACin): gives ACin
  - Cells 6,7 (AB): gives AB

Cout = AB + ACin + BCin`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Full Adder Circuit Diagrams</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Full Adder Using Two Half Adders:

    A ----+
          |   +-----------+
          +---|           |
              | Half      |----P = A XOR B
    B --------|  Adder 1  |
              |           |----C1 = AB
              +-----------+
                    |  |
                    |  +------+
                    |         |
    Cin --+         |         |
          |   +-----------+   |
          +---|           |   |
              | Half      |---S = P XOR Cin = A XOR B XOR Cin
    P --------|  Adder 2  |   |
              |           |---C2 = P.Cin = (A XOR B).Cin
              +-----------+
                         |
                         +---[OR]---- Cout = C1 + C2
                         |            = AB + (A XOR B).Cin
    C1 ------------------+


Block Diagram:

         +--------------------+
    A ---|                    |--- Sum (S)
         |                    |
    B ---|    FULL ADDER      |
         |                    |--- Cout
   Cin---|                    |
         +--------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ripple Carry Adder (Multi-bit Addition)</h2>
    <p className="leading-relaxed">
      Multiple full adders can be connected in cascade to add multi-bit numbers.
      The carry output of each adder connects to the carry input of the next.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Ripple Carry Adder:

Adds: A3A2A1A0 + B3B2B1B0

    A0  B0      A1  B1      A2  B2      A3  B3
     |   |       |   |       |   |       |   |
     v   v       v   v       v   v       v   v
   +-------+   +-------+   +-------+   +-------+
   |  FA0  |   |  FA1  |   |  FA2  |   |  FA3  |
Cin|       |-->|       |-->|       |-->|       |--> Cout
   +-------+   +-------+   +-------+   +-------+
       |           |           |           |
       v           v           v           v
      S0          S1          S2          S3

  FA0: Adds A0 + B0 + Cin(0), produces S0 and C1
  FA1: Adds A1 + B1 + C1, produces S1 and C2
  FA2: Adds A2 + B2 + C2, produces S2 and C3
  FA3: Adds A3 + B3 + C3, produces S3 and Cout

Example: 1011 + 0110 (11 + 6)

  Position 0: 1+0+0 = 1, Carry=0
  Position 1: 1+1+0 = 0, Carry=1
  Position 2: 0+1+1 = 0, Carry=1
  Position 3: 1+0+1 = 0, Carry=1

  Result: 10001 (17) ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Ripple Carry Adder Timing</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Propagation Delay Analysis:

For n-bit ripple carry adder:
  - Carry must "ripple" through all stages
  - Each full adder has delay: tFA (for carry generation)

Total delay = n x tFA (worst case)

Example: 32-bit adder
  If tFA = 10ns: Total delay = 320ns
  Max frequency = 1/320ns = 3.125 MHz

This is SLOW for modern processors!

Solution: Carry Lookahead Adder (CLA)
  - Calculates carries in parallel
  - Much faster but more complex
  - Trades hardware for speed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Half Adder vs Full Adder</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Half Adder</th>
            <th className="p-3 border">Full Adder</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Inputs</td>
            <td className="p-3 border">2 (A, B)</td>
            <td className="p-3 border">3 (A, B, Cin)</td>
          </tr>
          <tr>
            <td className="p-3 border">Outputs</td>
            <td className="p-3 border">2 (Sum, Carry)</td>
            <td className="p-3 border">2 (Sum, Cout)</td>
          </tr>
          <tr>
            <td className="p-3 border">Sum Expression</td>
            <td className="p-3 border">A XOR B</td>
            <td className="p-3 border">A XOR B XOR Cin</td>
          </tr>
          <tr>
            <td className="p-3 border">Carry Expression</td>
            <td className="p-3 border">A AND B</td>
            <td className="p-3 border">AB + Cin(A XOR B)</td>
          </tr>
          <tr>
            <td className="p-3 border">Gates Required</td>
            <td className="p-3 border">1 XOR + 1 AND</td>
            <td className="p-3 border">2 XOR + 2 AND + 1 OR</td>
          </tr>
          <tr>
            <td className="p-3 border">Can Cascade?</td>
            <td className="p-3 border">No (no carry input)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Usage</td>
            <td className="p-3 border">LSB addition only</td>
            <td className="p-3 border">Any bit position</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building Full Adder from Half Adders</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`A Full Adder can be built using two Half Adders and one OR gate:

Full Adder = 2 Half Adders + 1 OR Gate

Components:
  Half Adder 1:
    Inputs: A, B
    Outputs: P = A XOR B, C1 = AB

  Half Adder 2:
    Inputs: P, Cin
    Outputs: S = P XOR Cin, C2 = P.Cin

  OR Gate:
    Inputs: C1, C2
    Output: Cout = C1 + C2 = AB + (A XOR B).Cin

Verification:
  Cout = AB + (A XOR B).Cin
       = AB + (A'B + AB').Cin
       = AB + A'B.Cin + AB'.Cin
       = AB(1 + Cin) + A'B.Cin + AB'.Cin
       = AB + A'B.Cin + AB'.Cin
       = AB + Cin(A'B + AB')
       = AB + Cin(A XOR B)  ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>ALU (Arithmetic Logic Unit):</strong> Core component for addition operations</li>
        <li><strong>Address Calculation:</strong> Computing memory addresses</li>
        <li><strong>Increment/Decrement:</strong> Adding/subtracting 1</li>
        <li><strong>Digital Signal Processing:</strong> Signal filtering and processing</li>
        <li><strong>Counter Circuits:</strong> Building binary counters</li>
        <li><strong>Checksum Calculation:</strong> Error detection in data transmission</li>
        <li><strong>Floating Point Units:</strong> Mantissa addition in FP operations</li>
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
            <td className="p-3 border">Half Adder: A=1, B=0</td>
            <td className="p-3 border">S=1, C=0</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Adder: A=1, B=1, Cin=0</td>
            <td className="p-3 border">S=0, Cout=1</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Adder: A=1, B=1, Cin=1</td>
            <td className="p-3 border">S=1, Cout=1</td>
          </tr>
          <tr>
            <td className="p-3 border">Add 1101 + 1011 using ripple carry</td>
            <td className="p-3 border">11000 (24)</td>
          </tr>
          <tr>
            <td className="p-3 border">NAND gates needed for Half Adder</td>
            <td className="p-3 border">5 NAND gates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Half Adder: 2 inputs, Sum = A XOR B, Carry = A AND B</li>
        <li>Full Adder: 3 inputs, Sum = A XOR B XOR Cin</li>
        <li>Full Adder Cout = AB + Cin(A XOR B)</li>
        <li>Full Adder = 2 Half Adders + 1 OR gate</li>
        <li>Ripple Carry Adder: cascade full adders for multi-bit addition</li>
        <li>Ripple carry delay is O(n) - slow for large numbers</li>
        <li>Carry Lookahead Adder provides O(log n) delay</li>
        <li>Half adder can only add LSB (no carry input)</li>
        <li>Adders are fundamental to all arithmetic circuits</li>
        <li>XOR gate is essential for sum generation</li>
      </ul>
    </div>
  </div>
);

export default Adders;
