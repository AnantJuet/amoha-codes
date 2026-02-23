import React from 'react';

const Decoders: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Decoders
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A decoder is a combinational circuit that converts an n-bit binary input code into
      a maximum of 2^n unique output lines. Only one output is active (HIGH or LOW) at
      a time, corresponding to the input binary value. Decoders are essential in memory
      addressing, instruction decoding, and display driving applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Decoder Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Decoder Overview:

  - n input lines (binary code)
  - 2^n output lines (one-hot)
  - Enable input (optional)

Types:
  1:2 Decoder  - 1 input, 2 outputs
  2:4 Decoder  - 2 inputs, 4 outputs
  3:8 Decoder  - 3 inputs, 8 outputs
  4:16 Decoder - 4 inputs, 16 outputs

Decoder vs Encoder:
  Decoder: n inputs -> 2^n outputs (expand)
  Encoder: 2^n inputs -> n outputs (compress)

Output Types:
  Active HIGH: Selected output = 1, others = 0
  Active LOW:  Selected output = 0, others = 1

Analogy: Decoder is like a selector switch that
activates one of many outputs based on binary input.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2:4 Decoder</h2>
    <p className="leading-relaxed">
      A 2:4 decoder has 2 input lines (A1, A0) and 4 output lines (Y0-Y3).
      The binary input value determines which output is activated.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2:4 Decoder Truth Table (Active HIGH)</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A1</th>
            <th className="p-3 border">A0</th>
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
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border bg-green-100 dark:bg-green-900">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2:4 Decoder Boolean Expressions and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions (Active HIGH):
  Y0 = A1'.A0' (minterm 0)
  Y1 = A1'.A0  (minterm 1)
  Y2 = A1.A0'  (minterm 2)
  Y3 = A1.A0   (minterm 3)

Each output represents one minterm of the inputs.


2:4 Decoder Circuit Diagram:

    A1 ----+----+----+----+
           |    |    |    |
    A0 ----+----+----+----+
           |    |    |    |
           v    v    v    v
         +---++---++---++---+
         |AND||AND||AND||AND|
         +---++---++---++---+
           |    |    |    |
        A1'A0' A1'A0 A1A0' A1A0
           |    |    |    |
           v    v    v    v
          Y0   Y1   Y2   Y3


Block Symbol:

         +--------+
    A0 --|        |--- Y0
         |  2:4   |--- Y1
    A1 --|Decoder |--- Y2
         |        |--- Y3
         +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2:4 Decoder with Enable</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2:4 Decoder with Enable (E):

When E = 1: Normal decoder operation
When E = 0: All outputs are 0

Truth Table:
  E  | A1 | A0 | Y0 | Y1 | Y2 | Y3
  ---+----+----+----+----+----+----
  0  | X  | X  |  0 |  0 |  0 |  0
  1  | 0  | 0  |  1 |  0 |  0 |  0
  1  | 0  | 1  |  0 |  1 |  0 |  0
  1  | 1  | 0  |  0 |  0 |  1 |  0
  1  | 1  | 1  |  0 |  0 |  0 |  1

Boolean Expressions with Enable:
  Y0 = E.A1'.A0'
  Y1 = E.A1'.A0
  Y2 = E.A1.A0'
  Y3 = E.A1.A0


Block Symbol:

         +--------+
    A0 --|        |--- Y0
         |  2:4   |--- Y1
    A1 --|Decoder |--- Y2
         |        |--- Y3
    E  --|        |
         +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3:8 Decoder</h2>
    <p className="leading-relaxed">
      A 3:8 decoder (also called octal decoder) has 3 input lines (A2, A1, A0)
      and 8 output lines (Y0-Y7). It's commonly used in memory address decoding.
    </p>

    <h3 className="text-2xl font-semibold mt-6">3:8 Decoder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A2</th>
            <th className="p-3 border">A1</th>
            <th className="p-3 border">A0</th>
            <th className="p-3 border">Active Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">Y0 = 1</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">Y1 = 1</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">Y2 = 1</td></tr>
          <tr><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">Y3 = 1</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">Y4 = 1</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">Y5 = 1</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">Y6 = 1</td></tr>
          <tr><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">Y7 = 1</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3:8 Decoder Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y0 = A2'.A1'.A0'  (000)
  Y1 = A2'.A1'.A0   (001)
  Y2 = A2'.A1.A0'   (010)
  Y3 = A2'.A1.A0    (011)
  Y4 = A2.A1'.A0'   (100)
  Y5 = A2.A1'.A0    (101)
  Y6 = A2.A1.A0'    (110)
  Y7 = A2.A1.A0     (111)

General form:
  Yi = minterm_i of input variables

Circuit requires:
  - 3 NOT gates (for A2', A1', A0')
  - 8 AND gates (3-input each)

With Enable (E):
  Yi = E . minterm_i`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building Larger Decoders</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Building 3:8 Decoder from 2:4 Decoders:

Use two 2:4 decoders with enable, controlled by A2.

    A2 --------+----[NOT]----+
               |             |
               |   +-------+ |
               +-->| E     | |
                   |  2:4  |----> Y4
    A1 ----------->|Decoder|----> Y5
    A0 ----------->|   1   |----> Y6
                   +-------+----> Y7

                   +-------+
               +-->| E     |
               |   |  2:4  |----> Y0
    A1 --------|-->|Decoder|----> Y1
    A0 --------|-->|   2   |----> Y2
               |   +-------+----> Y3
    A2' -------+

When A2=0: Decoder 2 enabled, Y0-Y3 active
When A2=1: Decoder 1 enabled, Y4-Y7 active


Building 4:16 Decoder from 3:8 Decoders:

Similar principle - use A3 to select between two 3:8 decoders.
Total: 2 x (3:8 decoder) + inverter for A3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Boolean Functions with Decoders</h2>
    <p className="leading-relaxed">
      Since each decoder output represents a minterm, any Boolean function can be
      implemented by ORing together the appropriate decoder outputs.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`Implement F(A,B,C) = Sum(1, 2, 5, 7) using 3:8 Decoder:

Method: Connect decoder outputs corresponding to minterms
        through an OR gate.

         +----------+
    A ---|          |
         |   3:8    |--- Y0
    B ---|  Decoder |--- Y1 ---+
         |          |--- Y2 ---+
    C ---|          |--- Y3    |
         |          |--- Y4    +--[OR]--- F
         |          |--- Y5 ---+
         |          |--- Y6    |
         |          |--- Y7 ---+
         +----------+

  F = Y1 + Y2 + Y5 + Y7
    = m1 + m2 + m5 + m7
    = Sum(1, 2, 5, 7)

For n-variable function:
  - Use n:2^n decoder
  - OR together outputs for minterms where F=1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCD to 7-Segment Decoder</h2>
    <p className="leading-relaxed">
      A special decoder that converts 4-bit BCD input to the 7 segments
      needed to display decimal digits 0-9 on a seven-segment display.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Seven-Segment Display Layout:

        aaaa
       f    b
       f    b
        gggg
       e    c
       e    c
        dddd

BCD to 7-Segment Truth Table:
  BCD Input  |  a b c d e f g  |  Display
  -----------+-----------------+-----------
   0 (0000)  |  1 1 1 1 1 1 0  |    0
   1 (0001)  |  0 1 1 0 0 0 0  |    1
   2 (0010)  |  1 1 0 1 1 0 1  |    2
   3 (0011)  |  1 1 1 1 0 0 1  |    3
   4 (0100)  |  0 1 1 0 0 1 1  |    4
   5 (0101)  |  1 0 1 1 0 1 1  |    5
   6 (0110)  |  1 0 1 1 1 1 1  |    6
   7 (0111)  |  1 1 1 0 0 0 0  |    7
   8 (1000)  |  1 1 1 1 1 1 1  |    8
   9 (1001)  |  1 1 1 1 0 1 1  |    9

IC 7447: Common BCD to 7-segment decoder IC`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Active LOW vs Active HIGH Decoders</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Active HIGH</th>
            <th className="p-3 border">Active LOW</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Selected Output</td>
            <td className="p-3 border">1 (HIGH)</td>
            <td className="p-3 border">0 (LOW)</td>
          </tr>
          <tr>
            <td className="p-3 border">Other Outputs</td>
            <td className="p-3 border">0 (LOW)</td>
            <td className="p-3 border">1 (HIGH)</td>
          </tr>
          <tr>
            <td className="p-3 border">Expression for Yi</td>
            <td className="p-3 border">minterm_i</td>
            <td className="p-3 border">(minterm_i)' = maxterm_i</td>
          </tr>
          <tr>
            <td className="p-3 border">Typical Use</td>
            <td className="p-3 border">Enable signals</td>
            <td className="p-3 border">Chip select (CS) signals</td>
          </tr>
          <tr>
            <td className="p-3 border">Gate Type</td>
            <td className="p-3 border">AND gates</td>
            <td className="p-3 border">NAND gates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Active LOW 2:4 Decoder Truth Table:

  A1 | A0 | Y0' | Y1' | Y2' | Y3'
  ---+----+-----+-----+-----+-----
   0 |  0 |  0  |  1  |  1  |  1
   0 |  1 |  1  |  0  |  1  |  1
   1 |  0 |  1  |  1  |  0  |  1
   1 |  1 |  1  |  1  |  1  |  0

Only the selected output goes LOW.
Used when devices need active-low enable/select.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Decoders</h2>
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
            <td className="p-3 border">Memory Address Decoding</td>
            <td className="p-3 border">Select memory chip based on address bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction Decoding</td>
            <td className="p-3 border">Decode opcode to select operation in CPU</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Port Selection</td>
            <td className="p-3 border">Select specific I/O device</td>
          </tr>
          <tr>
            <td className="p-3 border">Display Driving</td>
            <td className="p-3 border">7-segment, LED matrix displays</td>
          </tr>
          <tr>
            <td className="p-3 border">Minterm Generator</td>
            <td className="p-3 border">Generate all minterms for Boolean functions</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Demultiplexing</td>
            <td className="p-3 border">Decoder with enable acts as DEMUX</td>
          </tr>
          <tr>
            <td className="p-3 border">Code Conversion</td>
            <td className="p-3 border">BCD to decimal, binary to one-hot</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Address Decoding Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Using 3:8 Decoder for Memory Chip Selection:

Address Space: 64KB total, 8 chips of 8KB each

Address bits: A15-A0 (16 bits)
  - A12-A0: Address within chip (8KB = 2^13)
  - A15-A13: Chip select (8 chips = 2^3)

                A15 A14 A13
                 |   |   |
             +---+---+---+
             |   3:8     |
             |  Decoder  |
             +---+---+---+
               |   |   |  ... |
              CS0 CS1 CS2 ... CS7
               |   |   |      |
            +--+  +--+ +--+  +--+
            |    |    |    |    |
            |RAM ||RAM||RAM||RAM|
            |8KB ||8KB||8KB||8KB|
            +----++----++----++----+

Address Range per Chip:
  CS0: 0x0000 - 0x1FFF (A15A14A13 = 000)
  CS1: 0x2000 - 0x3FFF (A15A14A13 = 001)
  CS2: 0x4000 - 0x5FFF (A15A14A13 = 010)
  ...
  CS7: 0xE000 - 0xFFFF (A15A14A13 = 111)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decoder Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decoder Type</th>
            <th className="p-3 border">Inputs</th>
            <th className="p-3 border">Outputs</th>
            <th className="p-3 border">AND Gates</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1:2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">2:4</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">3:8</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">8</td>
          </tr>
          <tr>
            <td className="p-3 border">4:16</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">16</td>
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
            <td className="p-3 border">2:4 decoder with A1=1, A0=0</td>
            <td className="p-3 border">Y2 = 1, others = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">3:8 decoder with A2A1A0 = 101</td>
            <td className="p-3 border">Y5 = 1, others = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">Outputs for 5:32 decoder</td>
            <td className="p-3 border">32 outputs (2^5 = 32)</td>
          </tr>
          <tr>
            <td className="p-3 border">Implement F = Sum(0,3,5) with 3:8 decoder</td>
            <td className="p-3 border">F = Y0 + Y3 + Y5</td>
          </tr>
          <tr>
            <td className="p-3 border">2:4 decoders for 4:16 decoder</td>
            <td className="p-3 border">5 (1 for select + 4 for outputs)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Decoder converts n-bit binary input to 2^n outputs</li>
        <li>Only one output is active at a time (one-hot encoding)</li>
        <li>Each output Yi represents minterm i of inputs</li>
        <li>Enable input allows cascading and chip selection</li>
        <li>Active HIGH: selected output = 1; Active LOW: selected output = 0</li>
        <li>Decoder with enable acts as demultiplexer</li>
        <li>Used in memory addressing, instruction decoding, displays</li>
        <li>Any Boolean function implementable with decoder + OR gates</li>
        <li>Larger decoders built from smaller ones using enable</li>
        <li>Common ICs: 74138 (3:8), 74139 (dual 2:4), 74154 (4:16)</li>
      </ul>
    </div>
  </div>
);

export default Decoders;
