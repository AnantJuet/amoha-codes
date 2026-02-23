import React from 'react';

const Multiplexers: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multiplexers (MUX)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Multiplexer (MUX) is a combinational circuit that selects one of several input signals
      and forwards it to a single output line. It acts as a "data selector" - choosing which
      input to pass through based on select lines. Multiplexers are fundamental in data routing,
      communication systems, and implementing Boolean functions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Multiplexer Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Multiplexer (MUX) Overview:

  - 2^n input lines
  - n select lines
  - 1 output line

Types:
  2:1 MUX  - 2 inputs, 1 select line
  4:1 MUX  - 4 inputs, 2 select lines
  8:1 MUX  - 8 inputs, 3 select lines
  16:1 MUX - 16 inputs, 4 select lines

General Formula:
  For n select lines: 2^n inputs can be selected

Analogy: Think of a MUX as a rotary switch that
connects one of several sources to a single output.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2:1 Multiplexer</h2>
    <p className="leading-relaxed">
      The simplest multiplexer has 2 data inputs (I0, I1), 1 select line (S), and 1 output (Y).
      When S=0, output equals I0; when S=1, output equals I1.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2:1 MUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S (Select)</th>
            <th className="p-3 border">Y (Output)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">I0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">I1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2:1 MUX Boolean Expression and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expression:
  Y = S'.I0 + S.I1

When S=0: Y = 1.I0 + 0.I1 = I0
When S=1: Y = 0.I0 + 1.I1 = I1


2:1 MUX Circuit Diagram:

                    +-------+
    I0 -------------|       |
                    |  AND  |----+
    S' -------------|       |    |
                    +-------+    |
                                 +--[OR]---- Y
                    +-------+    |
    I1 -------------|       |    |
                    |  AND  |----+
    S --------------|       |
                    +-------+


Block Symbol:

         +-------+
    I0 --|       |
         |  2:1  |
    I1 --|  MUX  |-- Y
         |       |
    S ---|       |
         +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4:1 Multiplexer</h2>
    <p className="leading-relaxed">
      A 4:1 MUX has 4 data inputs (I0-I3), 2 select lines (S1, S0), and 1 output.
      The 2-bit select value determines which input is connected to output.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4:1 MUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Y (Output)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">I0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">I1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">I2</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">I3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4:1 MUX Boolean Expression and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expression:
  Y = S1'.S0'.I0 + S1'.S0.I1 + S1.S0'.I2 + S1.S0.I3

Each term activates when select matches that input's index.


4:1 MUX Circuit Diagram:

    I0 -----+
            |   +-----+
    S1' ----+---|     |
            |   | AND |----+
    S0' ----+---|     |    |
                +-----+    |
    I1 -----+              |
            |   +-----+    |
    S1' ----+---|     |    |
            |   | AND |----+---[OR]---- Y
    S0 -----+---|     |    |
                +-----+    |
    I2 -----+              |
            |   +-----+    |
    S1 -----+---|     |    |
            |   | AND |----+
    S0' ----+---|     |    |
                +-----+    |
    I3 -----+              |
            |   +-----+    |
    S1 -----+---|     |    |
            |   | AND |----+
    S0 -----+---|     |
                +-----+


Block Symbol:

         +-------+
    I0 --|       |
    I1 --|  4:1  |
    I2 --|  MUX  |-- Y
    I3 --|       |
         |       |
    S1 --|       |
    S0 --|       |
         +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">8:1 Multiplexer</h2>
    <p className="leading-relaxed">
      An 8:1 MUX has 8 data inputs (I0-I7), 3 select lines (S2, S1, S0), and 1 output.
      It can be built from 2:1 or 4:1 multiplexers in a tree structure.
    </p>

    <h3 className="text-2xl font-semibold mt-6">8:1 MUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S2</th>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Y (Output)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">I0</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">I1</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">I2</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">I3</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">I4</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">I5</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">I6</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">I7</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">8:1 MUX Boolean Expression</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expression:
  Y = S2'.S1'.S0'.I0 + S2'.S1'.S0.I1 + S2'.S1.S0'.I2 + S2'.S1.S0.I3
    + S2.S1'.S0'.I4 + S2.S1'.S0.I5 + S2.S1.S0'.I6 + S2.S1.S0.I7

Simplified form:
  Y = Sum(i=0 to 7) of [minterm_i . I_i]

Where minterm_i is the product term for select value i.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Building 8:1 MUX from Smaller MUXes</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method 1: Using Two 4:1 MUX and One 2:1 MUX

    I0 --+
    I1 --|  4:1  |
    I2 --|  MUX1 |---+
    I3 --|       |   |
         |       |   |
    S1 --|       |   |    +-------+
    S0 --|       |   +----|       |
         +-------+        |  2:1  |
                          |  MUX  |--- Y
    I4 --+                |       |
    I5 --|  4:1  |        |       |
    I6 --|  MUX2 |--------|       |
    I7 --|       |        |       |
         |       |    S2--|       |
    S1 --|       |        +-------+
    S0 --|       |
         +-------+


Method 2: Using 2:1 MUXes (Tree Structure)

Level 1: Four 2:1 MUXes (select S0)
  MUX1: I0, I1 -> output to Level 2
  MUX2: I2, I3 -> output to Level 2
  MUX3: I4, I5 -> output to Level 2
  MUX4: I6, I7 -> output to Level 2

Level 2: Two 2:1 MUXes (select S1)
  MUX5: outputs of MUX1, MUX2 -> Level 3
  MUX6: outputs of MUX3, MUX4 -> Level 3

Level 3: One 2:1 MUX (select S2)
  MUX7: outputs of MUX5, MUX6 -> Final output Y

Total: 7 2:1 MUXes for 8:1 MUX`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Boolean Functions with MUX</h2>
    <p className="leading-relaxed">
      Multiplexers can implement any Boolean function. For n variables, use a 2^n:1 MUX
      or a 2^(n-1):1 MUX with clever input connections.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Method 1: Using 2^n:1 MUX</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Implement F(A,B,C) = Sum(1, 2, 6, 7) using 8:1 MUX

Variables as select lines: S2=A, S1=B, S0=C
Connect inputs based on minterms:

  Minterm 0 (000): not in function, I0 = 0
  Minterm 1 (001): in function,     I1 = 1
  Minterm 2 (010): in function,     I2 = 1
  Minterm 3 (011): not in function, I3 = 0
  Minterm 4 (100): not in function, I4 = 0
  Minterm 5 (101): not in function, I5 = 0
  Minterm 6 (110): in function,     I6 = 1
  Minterm 7 (111): in function,     I7 = 1

Circuit:
         +-------+
      0--|I0     |
      1--|I1     |
      1--|I2 8:1 |
      0--|I3 MUX |-- F
      0--|I4     |
      0--|I5     |
      1--|I6     |
      1--|I7     |
         |       |
      A--|S2     |
      B--|S1     |
      C--|S0     |
         +-------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Method 2: Using 2^(n-1):1 MUX</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Implement F(A,B,C) = Sum(1, 2, 6, 7) using 4:1 MUX

Use A, B as select lines (S1=A, S0=B)
Express inputs in terms of C:

  S1S0 = 00: minterms 0,1 -> F = 0 when C=0, F = 1 when C=1
             Input I0 = C

  S1S0 = 01: minterms 2,3 -> F = 1 when C=0, F = 0 when C=1
             Input I1 = C'

  S1S0 = 10: minterms 4,5 -> F = 0 when C=0, F = 0 when C=1
             Input I2 = 0

  S1S0 = 11: minterms 6,7 -> F = 1 when C=0, F = 1 when C=1
             Input I3 = 1

Circuit:
         +-------+
      C--|I0     |
      C'--|I1 4:1|
      0--|I2 MUX |-- F
      1--|I3     |
         |       |
      A--|S1     |
      B--|S0     |
         +-------+

This method saves half the inputs!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MUX with Enable Input</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MUX with Enable (E):

When E = 1: MUX operates normally
When E = 0: Output is forced to 0 (or high-impedance)

         +-------+
    I0 --|       |
    I1 --|  4:1  |
    I2 --|  MUX  |-- Y
    I3 --|       |
         |       |
    S1 --|       |
    S0 --|       |
    E  --|       |
         +-------+

Boolean Expression:
  Y = E . (S1'.S0'.I0 + S1'.S0.I1 + S1.S0'.I2 + S1.S0.I3)

Applications:
  - Cascading multiple MUXes
  - Power management
  - Bus arbitration`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascading Multiplexers</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Building 16:1 MUX from 4:1 MUXes:

                    I0-I3
                      |
                   +-----+
                   | 4:1 |---+
                   | MUX |   |
                   +-----+   |
    S1S0 -----------|        |
                              |
                    I4-I7    |    +-----+
                      |       +---| 4:1 |
                   +-----+   |    | MUX |--- Y
                   | 4:1 |---+    +-----+
                   | MUX |   |       |
                   +-----+   |    S3S2
    S1S0 -----------|        |
                              |
                    I8-I11   |
                      |       |
                   +-----+   |
                   | 4:1 |---+
                   | MUX |   |
                   +-----+   |
    S1S0 -----------|        |
                              |
                    I12-I15  |
                      |       |
                   +-----+   |
                   | 4:1 |---+
                   | MUX |
                   +-----+
    S1S0 -----------|

Total: Five 4:1 MUXes for 16:1 MUX`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Multiplexers</h2>
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
            <td className="p-3 border">Data Routing</td>
            <td className="p-3 border">Select data from multiple sources to single destination</td>
          </tr>
          <tr>
            <td className="p-3 border">Parallel to Serial</td>
            <td className="p-3 border">Convert parallel data to serial stream</td>
          </tr>
          <tr>
            <td className="p-3 border">Function Generator</td>
            <td className="p-3 border">Implement any Boolean function</td>
          </tr>
          <tr>
            <td className="p-3 border">ALU Data Selection</td>
            <td className="p-3 border">Select operands in arithmetic units</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Addressing</td>
            <td className="p-3 border">Select between different memory banks</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Division MUX</td>
            <td className="p-3 border">Share communication channel</td>
          </tr>
          <tr>
            <td className="p-3 border">Display Drivers</td>
            <td className="p-3 border">Select which segment/digit to display</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MUX Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">MUX Type</th>
            <th className="p-3 border">Data Inputs</th>
            <th className="p-3 border">Select Lines</th>
            <th className="p-3 border">AND Gates</th>
            <th className="p-3 border">OR Gate Inputs</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">2:1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">2 (2-input)</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">4:1</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4 (3-input)</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">8:1</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">8 (4-input)</td>
            <td className="p-3 border">8</td>
          </tr>
          <tr>
            <td className="p-3 border">16:1</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">16 (5-input)</td>
            <td className="p-3 border">16</td>
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
            <td className="p-3 border">2:1 MUX with S=1, I0=0, I1=1</td>
            <td className="p-3 border">Y = 1 (I1 selected)</td>
          </tr>
          <tr>
            <td className="p-3 border">4:1 MUX with S1=1, S0=0</td>
            <td className="p-3 border">Y = I2</td>
          </tr>
          <tr>
            <td className="p-3 border">Inputs for 32:1 MUX select lines</td>
            <td className="p-3 border">5 select lines (2^5 = 32)</td>
          </tr>
          <tr>
            <td className="p-3 border">Implement F(A,B) = A'B + AB using 4:1 MUX</td>
            <td className="p-3 border">I0=0, I1=1, I2=0, I3=1 (S1=A, S0=B)</td>
          </tr>
          <tr>
            <td className="p-3 border">2:1 MUXes needed for 8:1 MUX</td>
            <td className="p-3 border">7 (tree structure)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>MUX is a data selector: 2^n inputs, n select lines, 1 output</li>
        <li>2:1 MUX: Y = S'.I0 + S.I1</li>
        <li>4:1 MUX: Y = S1'.S0'.I0 + S1'.S0.I1 + S1.S0'.I2 + S1.S0.I3</li>
        <li>Select lines choose which input passes to output</li>
        <li>Can implement any Boolean function using appropriate inputs</li>
        <li>Larger MUXes built from smaller ones in tree structure</li>
        <li>n-variable function needs 2^n:1 MUX (or 2^(n-1):1 with variable input)</li>
        <li>Enable input allows cascading and power management</li>
        <li>Common in data routing, ALUs, and communication systems</li>
        <li>Time Division Multiplexing shares channels between sources</li>
      </ul>
    </div>
  </div>
);

export default Multiplexers;
