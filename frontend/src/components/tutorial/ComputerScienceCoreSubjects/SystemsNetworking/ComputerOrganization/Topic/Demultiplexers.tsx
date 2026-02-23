import React from 'react';

const Demultiplexers: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Demultiplexers (DEMUX)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Demultiplexer (DEMUX) is a combinational circuit that takes a single input and routes
      it to one of several outputs based on select lines. It performs the reverse operation of
      a multiplexer - distributing data from one source to one of many destinations.
      Demultiplexers are essential in data distribution, memory addressing, and communication systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Demultiplexer Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Demultiplexer (DEMUX) Overview:

  - 1 data input line
  - n select lines
  - 2^n output lines

Types:
  1:2 DEMUX  - 1 input, 1 select line, 2 outputs
  1:4 DEMUX  - 1 input, 2 select lines, 4 outputs
  1:8 DEMUX  - 1 input, 3 select lines, 8 outputs
  1:16 DEMUX - 1 input, 4 select lines, 16 outputs

General Formula:
  For n select lines: 2^n outputs

Analogy: Think of DEMUX as a rotary switch that
connects a single source to one of several destinations.

DEMUX vs MUX:
  MUX:   Many inputs  -> 1 output   (data selector)
  DEMUX: 1 input     -> Many outputs (data distributor)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1:2 Demultiplexer</h2>
    <p className="leading-relaxed">
      The simplest demultiplexer has 1 data input (D), 1 select line (S), and 2 outputs (Y0, Y1).
      The input is routed to Y0 when S=0, and to Y1 when S=1.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1:2 DEMUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S (Select)</th>
            <th className="p-3 border">D (Input)</th>
            <th className="p-3 border">Y0</th>
            <th className="p-3 border">Y1</th>
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
            <td className="p-3 border">0</td>
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

    <h3 className="text-2xl font-semibold mt-6">1:2 DEMUX Boolean Expressions and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y0 = S'.D  (output 0 gets data when S=0)
  Y1 = S.D   (output 1 gets data when S=1)


1:2 DEMUX Circuit Diagram:

                   +-------+
    S' ------------|       |
                   |  AND  |-----> Y0
    D -------------|       |
                   +-------+

                   +-------+
    S -----------|       |
                   |  AND  |-----> Y1
    D -------------|       |
                   +-------+


Block Symbol:

         +--------+
    D ---|        |--- Y0
         |  1:2   |
         | DEMUX  |--- Y1
    S ---|        |
         +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1:4 Demultiplexer</h2>
    <p className="leading-relaxed">
      A 1:4 DEMUX has 1 data input (D), 2 select lines (S1, S0), and 4 outputs (Y0-Y3).
      The 2-bit select value determines which output receives the input data.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1:4 DEMUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Y0</th>
            <th className="p-3 border">Y1</th>
            <th className="p-3 border">Y2</th>
            <th className="p-3 border">Y3</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">D</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">D</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">D</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">D</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">1:4 DEMUX Boolean Expressions and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y0 = S1'.S0'.D
  Y1 = S1'.S0.D
  Y2 = S1.S0'.D
  Y3 = S1.S0.D


1:4 DEMUX Circuit Diagram:

    S1' ---+
           |   +-----+
    S0' ---+---|     |
           |   | AND |----> Y0
    D -----+---|     |
               +-----+
    S1' ---+
           |   +-----+
    S0 ----+---|     |
           |   | AND |----> Y1
    D -----+---|     |
               +-----+
    S1 ----+
           |   +-----+
    S0' ---+---|     |
           |   | AND |----> Y2
    D -----+---|     |
               +-----+
    S1 ----+
           |   +-----+
    S0 ----+---|     |
           |   | AND |----> Y3
    D -----+---|     |
               +-----+


Block Symbol:

         +--------+
    D ---|        |--- Y0
         |  1:4   |--- Y1
         | DEMUX  |--- Y2
    S1 --|        |--- Y3
    S0 --|        |
         +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1:8 Demultiplexer</h2>
    <p className="leading-relaxed">
      A 1:8 DEMUX has 1 data input (D), 3 select lines (S2, S1, S0), and 8 outputs (Y0-Y7).
      It routes input data to one of eight output lines based on the 3-bit select value.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1:8 DEMUX Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">S2</th>
            <th className="p-3 border">S1</th>
            <th className="p-3 border">S0</th>
            <th className="p-3 border">Active Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">Y0 = D</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">Y1 = D</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">Y2 = D</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">Y3 = D</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">Y4 = D</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">Y5 = D</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">Y6 = D</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">Y7 = D</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">1:8 DEMUX Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y0 = S2'.S1'.S0'.D
  Y1 = S2'.S1'.S0.D
  Y2 = S2'.S1.S0'.D
  Y3 = S2'.S1.S0.D
  Y4 = S2.S1'.S0'.D
  Y5 = S2.S1'.S0.D
  Y6 = S2.S1.S0'.D
  Y7 = S2.S1.S0.D

General form:
  Yi = (minterm_i of select lines) AND D

Where minterm_i is the product term for select value i.
Only one output receives the data at any time.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building Larger DEMUX from Smaller Ones</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Using 1:2 DEMUX units in tree structure

Building 1:4 DEMUX from 1:2 DEMUX units:

                          +--------+
                    +-----|  1:2   |--- Y0
    D ----+         |     | DEMUX1 |--- Y1
          |   +--------+  +--------+
          +---|  1:2   |     S0--|
              | DEMUX0 |
    S1 -------|        |  +--------+
              +--------+--|  1:2   |--- Y2
                          | DEMUX2 |--- Y3
                          +--------+
                             S0--|

Total: 3 units of 1:2 DEMUX


Building 1:8 DEMUX from 1:4 DEMUX units:

    D ----+
          |   +---------+
          +---|  1:4    |---- Y0
              | DEMUX0  |---- Y1
    S2=0 -----|         |---- Y2
    S1,S0 ----|         |---- Y3
              +---------+

          +---|  1:4    |---- Y4
              | DEMUX1  |---- Y5
    S2=1 -----|         |---- Y6
    S1,S0 ----|         |---- Y7
              +---------+

Use S2 to select between DEMUX0 and DEMUX1.
Connect D to both, use S2 as enable.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DEMUX with Enable</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`DEMUX with Enable Input (E):

When E = 1: DEMUX operates normally
When E = 0: All outputs are 0

1:4 DEMUX with Enable:

         +--------+
    D ---|        |--- Y0
         |  1:4   |--- Y1
         | DEMUX  |--- Y2
    S1 --|        |--- Y3
    S0 --|        |
    E ---|        |
         +--------+

Boolean Expressions with Enable:
  Y0 = E.S1'.S0'.D
  Y1 = E.S1'.S0.D
  Y2 = E.S1.S0'.D
  Y3 = E.S1.S0.D

Uses of Enable:
  - Cascading multiple DEMUXes
  - Chip select in memory systems
  - Power saving (disable unused units)
  - Bus arbitration`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DEMUX as Decoder</h2>
    <p className="leading-relaxed">
      A demultiplexer can function as a decoder when the data input is held at logic 1.
      In this mode, only the output corresponding to the select value is HIGH.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`DEMUX as Decoder:

When D = 1 (constant):
  Y0 = S1'.S0'.1 = S1'.S0' = minterm 0
  Y1 = S1'.S0.1  = S1'.S0  = minterm 1
  Y2 = S1.S0'.1  = S1.S0'  = minterm 2
  Y3 = S1.S0.1   = S1.S0   = minterm 3

This is exactly the behavior of a 2:4 decoder!

         +--------+             +--------+
    1 ---|        |--- Y0       |  2:4   |--- Y0
         |  1:4   |--- Y1       |Decoder |--- Y1
         | DEMUX  |--- Y2  ===  |        |--- Y2
    S1 --|        |--- Y3       |        |--- Y3
    S0 --|        |        S1 --|        |
         +--------+        S0 --|        |
                                +--------+

Relationship:
  - DEMUX with D=1 acts as decoder
  - Decoder with enable input acts as DEMUX (E=D)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Serial to Parallel Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`DEMUX for Serial to Parallel Conversion:

Serial input data is distributed to parallel outputs
by cycling through select values.

         Serial Data
              |
              v
         +--------+
    D ---|        |--- Y0 (bit 0)
         |  1:4   |--- Y1 (bit 1)
         | DEMUX  |--- Y2 (bit 2)
    S1 --|        |--- Y3 (bit 3)
    S0 --|        |
         +--------+
              ^
              |
         Counter (cycles 00->01->10->11)

Process:
  Clock 1: S=00, bit 0 -> Y0
  Clock 2: S=01, bit 1 -> Y1
  Clock 3: S=10, bit 2 -> Y2
  Clock 4: S=11, bit 3 -> Y3

After 4 clocks, 4 serial bits are available in parallel.
(Registers/latches needed to hold the output values)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Demultiplexers</h2>
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
            <td className="p-3 border">Data Distribution</td>
            <td className="p-3 border">Route single data to multiple destinations</td>
          </tr>
          <tr>
            <td className="p-3 border">Serial to Parallel</td>
            <td className="p-3 border">Convert serial stream to parallel data</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Addressing</td>
            <td className="p-3 border">Select specific memory location</td>
          </tr>
          <tr>
            <td className="p-3 border">Address Decoding</td>
            <td className="p-3 border">Enable specific chip based on address</td>
          </tr>
          <tr>
            <td className="p-3 border">LED Display Driving</td>
            <td className="p-3 border">Drive multiple displays with single data line</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication Systems</td>
            <td className="p-3 border">Time Division Demultiplexing</td>
          </tr>
          <tr>
            <td className="p-3 border">Boolean Functions</td>
            <td className="p-3 border">Implement logic functions (as decoder)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MUX and DEMUX Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MUX and DEMUX are Inverse Operations:

    Source 1 ---+                      +--- Destination 1
    Source 2 ---|  MUX  |----+----| DEMUX |--- Destination 2
    Source 3 ---|       |         |        |--- Destination 3
    Source 4 ---+       |         |        +--- Destination 4
                   ^              ^
                   |              |
                 Select        Select
                (same value)  (same value)

When MUX select = DEMUX select = i:
  - MUX selects input i to output
  - DEMUX routes that data to output i

Combined System:
  Data flows: Source i -> MUX -> transmission line -> DEMUX -> Destination i

This is the basis of Time Division Multiplexing (TDM):
  - Multiple signals share single channel
  - MUX combines at sender
  - DEMUX separates at receiver`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DEMUX Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">DEMUX Type</th>
            <th className="p-3 border">Select Lines</th>
            <th className="p-3 border">Outputs</th>
            <th className="p-3 border">AND Gates Needed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1:2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2 (2-input)</td>
          </tr>
          <tr>
            <td className="p-3 border">1:4</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4 (3-input)</td>
          </tr>
          <tr>
            <td className="p-3 border">1:8</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">8 (4-input)</td>
          </tr>
          <tr>
            <td className="p-3 border">1:16</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">16 (5-input)</td>
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
            <td className="p-3 border">1:4 DEMUX with S1=0, S0=1, D=1</td>
            <td className="p-3 border">Y0=0, Y1=1, Y2=0, Y3=0</td>
          </tr>
          <tr>
            <td className="p-3 border">1:8 DEMUX with S2=1, S1=0, S0=1, D=1</td>
            <td className="p-3 border">Y5 = 1, all others = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">Select lines for 1:32 DEMUX</td>
            <td className="p-3 border">5 select lines (2^5 = 32)</td>
          </tr>
          <tr>
            <td className="p-3 border">1:2 DEMUX units for 1:8 DEMUX</td>
            <td className="p-3 border">7 units (tree structure)</td>
          </tr>
          <tr>
            <td className="p-3 border">Which output active when D=1, S=binary 5?</td>
            <td className="p-3 border">Y5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>DEMUX is a data distributor: 1 input, n select lines, 2^n outputs</li>
        <li>Only one output receives data at any time (others are 0)</li>
        <li>Output Yi = (minterm_i of select lines) AND D</li>
        <li>DEMUX is the inverse operation of MUX</li>
        <li>DEMUX with D=1 acts as a decoder</li>
        <li>Enable input allows cascading and power control</li>
        <li>Used in serial to parallel conversion</li>
        <li>Essential for memory address decoding</li>
        <li>Time Division Demultiplexing in communication</li>
        <li>Larger DEMUXes built from smaller ones in tree structure</li>
      </ul>
    </div>
  </div>
);

export default Demultiplexers;
