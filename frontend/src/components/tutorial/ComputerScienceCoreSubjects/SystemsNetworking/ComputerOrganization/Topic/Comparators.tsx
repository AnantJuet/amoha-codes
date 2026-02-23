import React from 'react';

const Comparators: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Magnitude Comparators
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A magnitude comparator is a combinational circuit that compares two binary numbers
      and determines their relative magnitude. It produces outputs indicating whether
      the first number is greater than, less than, or equal to the second number.
      Comparators are essential in sorting, searching, and decision-making operations
      in digital systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comparator Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Magnitude Comparator Overview:

Inputs:
  - Two n-bit numbers: A = An-1...A1A0
                       B = Bn-1...B1B0

Outputs:
  - G (A > B): HIGH when A is greater than B
  - E (A = B): HIGH when A equals B
  - L (A < B): HIGH when A is less than B

Properties:
  - Exactly one output is HIGH at any time
  - G + E + L = 1 (always)
  - G . E = E . L = G . L = 0 (mutually exclusive)

Types:
  1-bit comparator: Compares two 1-bit numbers
  2-bit comparator: Compares two 2-bit numbers
  4-bit comparator: Compares two 4-bit numbers (e.g., 74HC85)
  n-bit comparator: Built from smaller comparators`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1-Bit Magnitude Comparator</h2>
    <p className="leading-relaxed">
      The simplest comparator compares two single-bit inputs A and B.
      It has three outputs: G (A{">"}B), E (A=B), and L (A{"<"}B).
    </p>

    <h3 className="text-2xl font-semibold mt-6">1-Bit Comparator Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">G (A{">"}B)</th>
            <th className="p-3 border">E (A=B)</th>
            <th className="p-3 border">L (A{"<"}B)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">1-Bit Comparator Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:

  G = A.B' = A AND (NOT B)
      A > B when A=1 and B=0

  E = A XNOR B = A'.B' + A.B
      A = B when both are same

  L = A'.B = (NOT A) AND B
      A < B when A=0 and B=1

Alternative expressions:
  E = (A XOR B)'
  L = G' . E' (if we know G and E)

Note: E can also be written as:
  E = (A XOR B)' = A XNOR B`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">1-Bit Comparator Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`1-Bit Comparator Circuit Diagram:

    A ----+----+----+
          |    |    |
    B ----+----+----+
          |    |    |
          v    v    v
        +---++---++----+
        |AND||XOR|| AND|
        | G || E' ||  L |
        +---++---++----+
          |    |     |
          |  [NOT]   |
          |    |     |
          v    v     v
          G    E     L


Block Symbol:

         +----------+
    A ---|          |--- G (A>B)
         |  1-bit   |
         |Comparator|--- E (A=B)
    B ---|          |
         |          |--- L (A<B)
         +----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2-Bit Magnitude Comparator</h2>
    <p className="leading-relaxed">
      A 2-bit comparator compares two 2-bit numbers A (A1A0) and B (B1B0).
      Comparison starts from the most significant bit.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2-Bit Comparator Logic</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Comparison Logic:

Step 1: Compare MSBs (A1 vs B1)
  If A1 > B1: A > B (regardless of LSBs)
  If A1 < B1: A < B (regardless of LSBs)
  If A1 = B1: Compare LSBs

Step 2: If MSBs equal, compare LSBs (A0 vs B0)
  If A0 > B0: A > B
  If A0 < B0: A < B
  If A0 = B0: A = B


Boolean Expressions:

  G = A1.B1' + (A1 XNOR B1).A0.B0'
    = A1.B1' + E1.A0.B0'

  E = (A1 XNOR B1).(A0 XNOR B0)
    = E1.E0

  L = A1'.B1 + (A1 XNOR B1).A0'.B0
    = A1'.B1 + E1.A0'.B0

Where:
  E1 = A1 XNOR B1 (MSB equality)
  E0 = A0 XNOR B0 (LSB equality)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2-Bit Comparator Truth Table (Partial)</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">A1</th>
            <th className="p-2 border">A0</th>
            <th className="p-2 border">B1</th>
            <th className="p-2 border">B0</th>
            <th className="p-2 border">A</th>
            <th className="p-2 border">B</th>
            <th className="p-2 border">G</th>
            <th className="p-2 border">E</th>
            <th className="p-2 border">L</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">2</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">2</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">3</td><td className="p-2 border">2</td><td className="p-2 border">1</td><td className="p-2 border">0</td><td className="p-2 border">0</td></tr>
          <tr><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">1</td><td className="p-2 border">3</td><td className="p-2 border">3</td><td className="p-2 border">0</td><td className="p-2 border">1</td><td className="p-2 border">0</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4-Bit Magnitude Comparator</h2>
    <p className="leading-relaxed">
      A 4-bit comparator (like IC 74HC85) compares two 4-bit numbers. It includes
      cascade inputs for building larger comparators.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Comparator Structure:

Inputs:
  A = A3 A2 A1 A0 (4-bit number)
  B = B3 B2 B1 B0 (4-bit number)
  Cascade inputs: Gi, Ei, Li (from less significant stage)

Outputs:
  G (A > B)
  E (A = B)
  L (A < B)


Boolean Expressions (simplified):

Let Ek = Ak XNOR Bk (bit equality for position k)

E = E3 . E2 . E1 . E0 . Ei
    (All bits equal AND cascade equal)

G = A3.B3' +
    E3.A2.B2' +
    E3.E2.A1.B1' +
    E3.E2.E1.A0.B0' +
    E3.E2.E1.E0.Gi

L = A3'.B3 +
    E3.A2'.B2 +
    E3.E2.A1'.B1 +
    E3.E2.E1.A0'.B0 +
    E3.E2.E1.E0.Li

Cascade inputs (Gi, Ei, Li):
  Used when cascading for numbers > 4 bits
  For single 4-bit comparator: Gi=0, Ei=1, Li=0`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4-Bit Comparator Block Diagram</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`4-Bit Comparator Block Symbol (74HC85):

         +---------------+
    A3 --|               |
    A2 --|               |
    A1 --|               |--- G (A>B)
    A0 --|    4-bit      |
         |  Comparator   |--- E (A=B)
    B3 --|   (74HC85)    |
    B2 --|               |--- L (A<B)
    B1 --|               |
    B0 --|               |
         |               |
    Gi --|  Cascade In   |
    Ei --|               |
    Li --|               |
         +---------------+

For standalone use (no cascading):
  Gi = 0
  Ei = 1
  Li = 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascading Comparators</h2>
    <p className="leading-relaxed">
      Larger comparators are built by cascading smaller ones. The cascade outputs
      of the less significant stage connect to the cascade inputs of the more
      significant stage.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`8-Bit Comparator using Two 4-Bit Comparators:

    A3-A0  B3-B0           A7-A4  B7-B4
       |      |               |      |
       v      v               v      v
    +------------+         +------------+
    |   4-bit    |         |   4-bit    |
    | Comparator |         | Comparator |
    |   (LSB)    |  --->   |   (MSB)    |
    +------------+         +------------+
     | G  E  L |            | G  E  L |
     |  |  |   |            |    |    |
     +--+--+---+            v    v    v
        |  |  |             G    E    L
        v  v  v            (Final outputs)
       Gi Ei Li
       (to MSB stage)

Cascade Connection:
  - LSB comparator: Gi=0, Ei=1, Li=0 (no lower stage)
  - MSB comparator: Gi, Ei, Li from LSB stage outputs

Process:
  1. LSB comparator compares A3-A0 vs B3-B0
  2. Results go to MSB comparator cascade inputs
  3. MSB comparator compares A7-A4 vs B7-B4
  4. Final decision based on MSB and cascade inputs

If MSB bits are equal, cascade inputs determine result.
If MSB bits differ, MSB comparison determines result.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparator Using Subtractor</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Alternative Implementation using Subtraction:

Compute: D = A - B

Analyze the result:
  - If D > 0 (positive, MSB=0, D!=0): A > B
  - If D = 0: A = B
  - If D < 0 (negative, MSB=1): A < B

For unsigned numbers:
  - Borrow out = 1: A < B
  - Borrow out = 0, result = 0: A = B
  - Borrow out = 0, result != 0: A > B

For signed numbers (two's complement):
  Check the sign bit of result.

Advantage: Uses existing subtractor hardware
Disadvantage: More complex, timing issues`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equality Comparator</h2>
    <p className="leading-relaxed">
      When only equality detection is needed (no greater/less than), a simpler
      circuit using XNOR gates suffices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`n-Bit Equality Comparator:

    A0 ----+
           |---[XNOR]---+
    B0 ----+            |
                        |
    A1 ----+            |
           |---[XNOR]---+---[AND]--- E (A=B)
    B1 ----+            |
                        |
    A2 ----+            |
           |---[XNOR]---+
    B2 ----+            |
                        |
    An-1 --+            |
           |---[XNOR]---+
    Bn-1 --+

E = (A0 XNOR B0) . (A1 XNOR B1) . ... . (An-1 XNOR Bn-1)

All corresponding bits must be equal for E=1.

Simpler than full magnitude comparator when only
equality detection is needed.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Comparators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sorting Networks</td>
            <td className="p-3 border">Compare and swap operations in hardware sorters</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority Arbitration</td>
            <td className="p-3 border">Determine highest priority request</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Decoding</td>
            <td className="p-3 border">Check if address matches specific range</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Validation</td>
            <td className="p-3 border">Compare input against expected value</td>
          </tr>
          <tr>
            <td className="p-3 border">Password Checking</td>
            <td className="p-3 border">Compare entered vs stored password</td>
          </tr>
          <tr>
            <td className="p-3 border">Window Comparator</td>
            <td className="p-3 border">Check if value is within range</td>
          </tr>
          <tr>
            <td className="p-3 border">Min/Max Finder</td>
            <td className="p-3 border">Find minimum or maximum in a set</td>
          </tr>
          <tr>
            <td className="p-3 border">ALU Operations</td>
            <td className="p-3 border">Comparison instructions, conditional branches</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Comparator</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Window Comparator: Check if Lower <= X <= Upper

    X --------+----------+
              |          |
    Lower ----+          |
              |          |
         +---------+ +---------+
         |Comparator| |Comparator|
         |  X>=L    | |  X<=U    |
         +---------+ +---------+
              |          |
              +---[AND]--+
                   |
                   v
              In_Window

Output is HIGH when X is within the range [Lower, Upper].

Applications:
  - Analog-to-digital conversion
  - Sensor threshold detection
  - Quality control testing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparator Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Inputs</th>
            <th className="p-3 border">Outputs</th>
            <th className="p-3 border">Gates Needed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1-bit</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">3 (G, E, L)</td>
            <td className="p-3 border">1 XNOR, 2 AND, 2 NOT</td>
          </tr>
          <tr>
            <td className="p-3 border">2-bit</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">3 (G, E, L)</td>
            <td className="p-3 border">Multiple AND, OR, XNOR</td>
          </tr>
          <tr>
            <td className="p-3 border">4-bit (74HC85)</td>
            <td className="p-3 border">8 + 3 cascade</td>
            <td className="p-3 border">3 (G, E, L)</td>
            <td className="p-3 border">IC implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">n-bit Equality</td>
            <td className="p-3 border">2n</td>
            <td className="p-3 border">1 (E only)</td>
            <td className="p-3 border">n XNOR + (n-1) AND</td>
          </tr>
        </tbody>
      </table>
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
            <td className="p-3 border">1-bit: A=1, B=0</td>
            <td className="p-3 border">G=1, E=0, L=0</td>
          </tr>
          <tr>
            <td className="p-3 border">2-bit: A=10, B=01</td>
            <td className="p-3 border">G=1, E=0, L=0 (2 {">"} 1)</td>
          </tr>
          <tr>
            <td className="p-3 border">4-bit: A=1010, B=1010</td>
            <td className="p-3 border">G=0, E=1, L=0</td>
          </tr>
          <tr>
            <td className="p-3 border">4-bit ICs for 16-bit comparator</td>
            <td className="p-3 border">4 ICs (cascaded)</td>
          </tr>
          <tr>
            <td className="p-3 border">Expression for 1-bit E output</td>
            <td className="p-3 border">E = A XNOR B</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Magnitude comparator compares two n-bit numbers</li>
        <li>Three outputs: G (A{">"}B), E (A=B), L (A{"<"}B)</li>
        <li>Exactly one output is HIGH at any time</li>
        <li>Equality: E = XNOR of all corresponding bit pairs</li>
        <li>Comparison proceeds from MSB to LSB</li>
        <li>Cascade inputs/outputs allow building larger comparators</li>
        <li>4-bit comparators (74HC85) are common ICs</li>
        <li>For equality only, simple XNOR-AND chain suffices</li>
        <li>Window comparator checks if value is within range</li>
        <li>Used in sorting, validation, address decoding, ALUs</li>
      </ul>
    </div>
  </div>
);

export default Comparators;
