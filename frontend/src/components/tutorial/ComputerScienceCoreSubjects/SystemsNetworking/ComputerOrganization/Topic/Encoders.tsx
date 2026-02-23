import React from 'react';

const Encoders: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Encoders
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An encoder is a combinational circuit that converts information from one format to another.
      It takes 2^n input lines and generates an n-bit binary code output. Only one input should
      be active at a time in a simple encoder. Encoders are essential in keyboards, memory addressing,
      and data compression applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Encoder Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Encoder Overview:

  - 2^n input lines (only one active at a time)
  - n output lines (binary code)
  - Reverse operation of decoder

Types:
  4:2 Encoder  - 4 inputs, 2 outputs
  8:3 Encoder  - 8 inputs, 3 outputs
  10:4 Encoder - 10 inputs (decimal), 4 outputs (BCD)
  16:4 Encoder - 16 inputs, 4 outputs

Encoder vs Decoder:
  Encoder:  2^n inputs -> n outputs (compress)
  Decoder:  n inputs -> 2^n outputs (expand)

Limitation of Simple Encoder:
  - Assumes only ONE input is active
  - If multiple inputs active, output is ambiguous
  - Solution: Priority Encoder`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4:2 Simple Encoder</h2>
    <p className="leading-relaxed">
      A 4:2 encoder has 4 input lines (I0-I3) and 2 output lines (Y1, Y0).
      When input Ii is active, the output is the binary code for i.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4:2 Encoder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">I3</th>
            <th className="p-3 border">I2</th>
            <th className="p-3 border">I1</th>
            <th className="p-3 border">I0</th>
            <th className="p-3 border">Y1</th>
            <th className="p-3 border">Y0</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4:2 Encoder Boolean Expressions and Circuit</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y1 = I3 + I2  (output 1 when input 2 or 3 is active)
  Y0 = I3 + I1  (output 1 when input 1 or 3 is active)


4:2 Encoder Circuit Diagram:

    I3 ----+----+
           |    |
    I2 ---[OR]  |
           |    |
           v    |
          Y1    +---[OR]
                |    |
    I1 ---------+    |
                     v
                    Y0


Block Symbol:

         +--------+
    I0 --|        |
    I1 --|  4:2   |--- Y1
    I2 --|Encoder |--- Y0
    I3 --|        |
         +--------+


Note: I0 active produces output 00 (both outputs low)
      This can be ambiguous with "no input" condition.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">8:3 Simple Encoder</h2>
    <p className="leading-relaxed">
      An 8:3 encoder (octal to binary) has 8 input lines (I0-I7) and 3 output lines
      (Y2, Y1, Y0). It converts one-hot input to 3-bit binary code.
    </p>

    <h3 className="text-2xl font-semibold mt-6">8:3 Encoder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Active Input</th>
            <th className="p-3 border">Y2</th>
            <th className="p-3 border">Y1</th>
            <th className="p-3 border">Y0</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr><td className="p-3 border">I0</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">0</td></tr>
          <tr><td className="p-3 border">I1</td><td className="p-3 border">0</td><td className="p-3 border">0</td><td className="p-3 border">1</td></tr>
          <tr><td className="p-3 border">I2</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">0</td></tr>
          <tr><td className="p-3 border">I3</td><td className="p-3 border">0</td><td className="p-3 border">1</td><td className="p-3 border">1</td></tr>
          <tr><td className="p-3 border">I4</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">0</td></tr>
          <tr><td className="p-3 border">I5</td><td className="p-3 border">1</td><td className="p-3 border">0</td><td className="p-3 border">1</td></tr>
          <tr><td className="p-3 border">I6</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">0</td></tr>
          <tr><td className="p-3 border">I7</td><td className="p-3 border">1</td><td className="p-3 border">1</td><td className="p-3 border">1</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">8:3 Encoder Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions:
  Y2 = I7 + I6 + I5 + I4  (MSB: 1 for inputs 4-7)
  Y1 = I7 + I6 + I3 + I2  (1 for inputs 2,3,6,7)
  Y0 = I7 + I5 + I3 + I1  (LSB: 1 for odd inputs)

Pattern Analysis:
  Y2 is 1 when input index has bit 2 set (4,5,6,7)
  Y1 is 1 when input index has bit 1 set (2,3,6,7)
  Y0 is 1 when input index has bit 0 set (1,3,5,7)

Circuit requires:
  - 3 OR gates (4-input each)
  - No AND gates needed for simple encoder`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Priority Encoder</h2>
    <p className="leading-relaxed">
      A priority encoder handles multiple active inputs by encoding only the highest
      priority input. Priority is typically assigned to the highest-numbered input.
      It also includes a valid output to indicate when at least one input is active.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4:2 Priority Encoder Truth Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">I3</th>
            <th className="p-3 border">I2</th>
            <th className="p-3 border">I1</th>
            <th className="p-3 border">I0</th>
            <th className="p-3 border">Y1</th>
            <th className="p-3 border">Y0</th>
            <th className="p-3 border">V (Valid)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">X</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-2 text-sm">X = don't care (can be 0 or 1). Higher-numbered inputs have higher priority.</p>

    <h3 className="text-2xl font-semibold mt-6">4:2 Priority Encoder Boolean Expressions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Boolean Expressions (I3 highest priority):

  Y1 = I3 + I2
       (high bit set when I3 or I2 is active)

  Y0 = I3 + I2'.I1
       (low bit set when I3 active, or when I2 inactive and I1 active)

  V = I3 + I2 + I1 + I0
      (valid when any input is active)


Priority Logic Explanation:

  When I3=1: Output = 11 (highest priority wins)
  When I3=0, I2=1: Output = 10
  When I3=0, I2=0, I1=1: Output = 01
  When I3=0, I2=0, I1=0, I0=1: Output = 00
  When all 0: V=0 (no valid input)

Key difference from simple encoder:
  - Lower priority inputs are masked (don't care)
  - Valid bit indicates presence of any input`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">8:3 Priority Encoder</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`8:3 Priority Encoder (I7 highest priority):

Boolean Expressions:
  Y2 = I7 + I6 + I5 + I4

  Y1 = I7 + I6 + I5'.I4'.I3 + I5'.I4'.I2

  Y0 = I7 + I6'.I5 + I6'.I4'.I3 + I6'.I4'.I2'.I1

  V = I7 + I6 + I5 + I4 + I3 + I2 + I1 + I0


Priority Truth Table (condensed):
  Input Active   | Y2 Y1 Y0 | V
  ---------------+----------+---
  None           |  X  X  X | 0
  I0 only        |  0  0  0 | 1
  I1 (I0=X)      |  0  0  1 | 1
  I2 (I1,I0=X)   |  0  1  0 | 1
  I3 (I2-I0=X)   |  0  1  1 | 1
  I4 (I3-I0=X)   |  1  0  0 | 1
  I5 (I4-I0=X)   |  1  0  1 | 1
  I6 (I5-I0=X)   |  1  1  0 | 1
  I7 (I6-I0=X)   |  1  1  1 | 1


Block Symbol:
         +----------+
    I0 --|          |
    I1 --|   8:3    |--- Y2
    I2 --|Priority  |--- Y1
    I3 --|Encoder   |--- Y0
    I4 --|          |
    I5 --|          |--- V (Valid)
    I6 --|          |
    I7 --|          |
         +----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decimal to BCD Encoder (10:4)</h2>
    <p className="leading-relaxed">
      A decimal to BCD encoder converts one of 10 decimal digits (0-9) to 4-bit BCD code.
      It's commonly used in calculator keyboards and numeric input devices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Decimal to BCD Encoder:

Input   | Y3  Y2  Y1  Y0 (BCD)
--------+---------------------
D0      |  0   0   0   0
D1      |  0   0   0   1
D2      |  0   0   1   0
D3      |  0   0   1   1
D4      |  0   1   0   0
D5      |  0   1   0   1
D6      |  0   1   1   0
D7      |  0   1   1   1
D8      |  1   0   0   0
D9      |  1   0   0   1


Boolean Expressions:
  Y3 = D8 + D9
  Y2 = D4 + D5 + D6 + D7
  Y1 = D2 + D3 + D6 + D7
  Y0 = D1 + D3 + D5 + D7 + D9

Circuit: 4 OR gates
  Y3: 2-input OR
  Y2, Y1, Y0: 4 or 5-input OR gates`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Simple vs Priority Encoder</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Simple Encoder</th>
            <th className="p-3 border">Priority Encoder</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Multiple Active Inputs</td>
            <td className="p-3 border">Undefined output</td>
            <td className="p-3 border">Highest priority encoded</td>
          </tr>
          <tr>
            <td className="p-3 border">No Active Input</td>
            <td className="p-3 border">Output = 0 (ambiguous)</td>
            <td className="p-3 border">V=0 indicates invalid</td>
          </tr>
          <tr>
            <td className="p-3 border">Valid Output</td>
            <td className="p-3 border">Not available</td>
            <td className="p-3 border">Available</td>
          </tr>
          <tr>
            <td className="p-3 border">Circuit Complexity</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Practical Use</td>
            <td className="p-3 border">Limited (single input)</td>
            <td className="p-3 border">Interrupt handling, etc.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Encoders</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <pre className="text-sm text-gray-900">
{`1. Keyboard Encoding:
   - Each key press activates one input
   - Encoder produces key code
   - Priority encoder handles key rollover

2. Interrupt Handling:
   - Multiple interrupt sources as inputs
   - Priority encoder selects highest priority
   - Output identifies interrupt to service

   Interrupt 7 (highest) --+
   Interrupt 6 ------------|  8:3
   Interrupt 5 ------------| Priority
   Interrupt 4 ------------| Encoder  |--- Interrupt Code
   Interrupt 3 ------------|          |--- Valid
   Interrupt 2 ------------|
   Interrupt 1 ------------|
   Interrupt 0 (lowest) ---+

3. Position Encoding:
   - Optical/magnetic sensors on shaft
   - Encoder converts position to binary

4. Data Compression:
   - Convert one-hot to binary
   - Reduces number of bits needed

5. Memory Address Generation:
   - Convert memory bank selection to address bits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascading Encoders</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Building 16:4 Priority Encoder from 8:3:

    I0-I7 ----+
              |  8:3        +---+
              | Priority    |   |
              | Encoder 1   |   |
              |        Y2---+   |
              |        Y1---+   +--[4:2]--- Y3
              |        Y0---+   |  Priority
              |        V ------+|  Encoder
    I8-I15 ---+               ||
              |  8:3          ||
              | Priority      |+---------- Y2
              | Encoder 2     |
              |        Y2-----+----------- Y1
              |        Y1-----+----------- Y0
              |        Y0-----+
              |        V -----+

Logic:
  - If Encoder 2 valid (I8-I15 active): Y3=1, use Encoder 2 output
  - If Encoder 1 valid only: Y3=0, use Encoder 1 output
  - Higher encoder has priority over lower`}
      </pre>
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
            <td className="p-3 border">8:3 encoder with I5 active</td>
            <td className="p-3 border">Y2Y1Y0 = 101</td>
          </tr>
          <tr>
            <td className="p-3 border">4:2 priority encoder with I1=1, I2=1</td>
            <td className="p-3 border">Y1Y0 = 10 (I2 has priority)</td>
          </tr>
          <tr>
            <td className="p-3 border">Outputs for 32:5 encoder</td>
            <td className="p-3 border">5 outputs (2^5 = 32)</td>
          </tr>
          <tr>
            <td className="p-3 border">BCD encoder with D7 active</td>
            <td className="p-3 border">Y3Y2Y1Y0 = 0111</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority encoder with all inputs 0</td>
            <td className="p-3 border">V = 0 (invalid output)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Encoder converts 2^n inputs to n-bit binary output</li>
        <li>Simple encoder assumes only one input active at a time</li>
        <li>Priority encoder handles multiple active inputs</li>
        <li>Priority encoder has valid (V) output for no-input detection</li>
        <li>Higher-numbered inputs typically have higher priority</li>
        <li>Common types: 4:2, 8:3, 10:4 (BCD), 16:4</li>
        <li>Used in keyboards, interrupt controllers, and data compression</li>
        <li>Encoder is reverse operation of decoder</li>
        <li>Built from OR gates (simple) or OR+AND gates (priority)</li>
        <li>Can be cascaded for larger encoders</li>
      </ul>
    </div>
  </div>
);

export default Encoders;
