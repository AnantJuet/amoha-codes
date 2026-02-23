import React from 'react';

const GrayCode: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Gray Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Gray code, also known as reflected binary code, is a binary numeral system where two
      successive values differ in only one bit. Named after Frank Gray who patented it in 1953,
      this property makes Gray code extremely useful in applications where minimizing errors
      during transitions is critical, such as in rotary encoders and digital communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Single-Bit Change Property</h2>
    <p className="leading-relaxed">
      In standard binary counting, multiple bits can change simultaneously when transitioning
      between consecutive numbers. This can cause problems in physical systems due to timing
      differences. Gray code eliminates this issue.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary vs Gray Code Comparison:

Decimal  |  Binary  |  Gray Code  |  Bits Changed
---------+----------+-------------+---------------
   0     |   0000   |    0000     |
   1     |   0001   |    0001     |  Binary: 1, Gray: 1
   2     |   0010   |    0011     |  Binary: 2, Gray: 1
   3     |   0011   |    0010     |  Binary: 1, Gray: 1
   4     |   0100   |    0110     |  Binary: 3, Gray: 1
   5     |   0101   |    0111     |  Binary: 1, Gray: 1
   6     |   0110   |    0101     |  Binary: 2, Gray: 1
   7     |   0111   |    0100     |  Binary: 1, Gray: 1
   8     |   1000   |    1100     |  Binary: 4, Gray: 1
   9     |   1001   |    1101     |  Binary: 1, Gray: 1
  10     |   1010   |    1111     |  Binary: 2, Gray: 1
  11     |   1011   |    1110     |  Binary: 1, Gray: 1
  12     |   1100   |    1010     |  Binary: 2, Gray: 1
  13     |   1101   |    1011     |  Binary: 1, Gray: 1
  14     |   1110   |    1001     |  Binary: 2, Gray: 1
  15     |   1111   |    1000     |  Binary: 1, Gray: 1

Notice: In Gray code, adjacent numbers always differ by exactly 1 bit!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary to Gray Code Conversion</h2>
    <p className="leading-relaxed">
      To convert binary to Gray code, the most significant bit (MSB) remains the same,
      and each subsequent bit is obtained by XORing the current binary bit with the
      previous binary bit.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary to Gray Code Conversion:

Formula:
  G[n] = B[n]              (MSB stays the same)
  G[i] = B[i+1] XOR B[i]   (for other bits)

Example 1: Convert Binary 1011 to Gray

  Binary:   1    0    1    1
            |    ↓    ↓    ↓
  Position: B3   B2   B1   B0

  G3 = B3 = 1
  G2 = B3 XOR B2 = 1 XOR 0 = 1
  G1 = B2 XOR B1 = 0 XOR 1 = 1
  G0 = B1 XOR B0 = 1 XOR 1 = 0

  Gray Code: 1110

Example 2: Convert Binary 10110 to Gray

  Binary:   1    0    1    1    0
            ↓    ↓    ↓    ↓    ↓
  Gray:     1   1^0  0^1  1^1  1^0
            1    1    1    0    1

  Gray Code: 11101

Visualization:
  Binary:  B3   B2   B1   B0
            │    │    │    │
            │   ╱│   ╱│   ╱│
            │  ╱ │  ╱ │  ╱ │
           XOR  XOR  XOR   │
            │    │    │    │
  Gray:    G3   G2   G1   G0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Gray Code to Binary Conversion</h2>
    <p className="leading-relaxed">
      To convert Gray code back to binary, the MSB remains the same, and each subsequent
      bit is obtained by XORing the current Gray bit with the previously calculated binary bit.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Gray Code to Binary Conversion:

Formula:
  B[n] = G[n]              (MSB stays the same)
  B[i] = B[i+1] XOR G[i]   (for other bits)

Example 1: Convert Gray 1110 to Binary

  Gray:     1    1    1    0
            |    ↓    ↓    ↓
  Position: G3   G2   G1   G0

  B3 = G3 = 1
  B2 = B3 XOR G2 = 1 XOR 1 = 0
  B1 = B2 XOR G1 = 0 XOR 1 = 1
  B0 = B1 XOR G0 = 1 XOR 0 = 1

  Binary: 1011 ✓

Example 2: Convert Gray 11101 to Binary

  Gray:     1    1    1    0    1
            ↓    ↓    ↓    ↓    ↓
  Binary:   1   1^1  0^1  1^0  1^1
            1    0    1    1    0

  Binary: 10110 ✓

Alternative Method (XOR from MSB):
  G: 1 1 1 0 1
     ↓
  B: 1
     1 XOR 1 = 0
         0 XOR 1 = 1
             1 XOR 0 = 1
                 1 XOR 1 = 0
  Binary: 1 0 1 1 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Generating Gray Code Sequence</h2>
    <p className="leading-relaxed">
      The name "reflected binary code" comes from the way Gray code can be generated
      by reflecting (mirroring) the previous sequence and prefixing with 0s and 1s.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Generating Gray Code by Reflection:

1-bit Gray Code:
  0
  1

2-bit Gray Code (reflect and prefix):
  Original  → Prefix 0 → 00
              Prefix 0 → 01
  Reflected → Prefix 1 → 11
              Prefix 1 → 10

  Result: 00, 01, 11, 10

3-bit Gray Code (reflect and prefix):
  Original:    Reflected:
  00  → 000    10  → 110
  01  → 001    11  → 111
  11  → 011    01  → 101
  10  → 010    00  → 100

  Result: 000, 001, 011, 010, 110, 111, 101, 100

Visual Representation:
         1-bit  |  2-bit  |  3-bit
        --------+---------+---------
           0    |    00   |   000
           1    |    01   |   001
        --------|    11   |   011
        reflect |    10   |   010
                |---------|   110
                | reflect |   111
                          |   101
                          |   100
                          |-------
                          | reflect`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Gray Code</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Single-bit change:</strong> Adjacent codes differ by exactly one bit
      </li>
      <li>
        <strong>Cyclic:</strong> The last code differs from the first by only one bit
      </li>
      <li>
        <strong>Self-complementing:</strong> For n-bit code, complement can be obtained
        by flipping MSB
      </li>
      <li>
        <strong>Reflection property:</strong> Can be generated by mirroring previous sequence
      </li>
      <li>
        <strong>Non-weighted:</strong> Unlike binary, Gray code is not a weighted code
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications of Gray Code</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Rotary Encoders</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Rotary Encoder with Gray Code:

A rotary encoder uses Gray code to determine shaft position.
With binary, multiple bits changing could give wrong readings.

Example: Transition from position 7 to 8

Binary: 0111 → 1000 (4 bits change!)
Gray:   0100 → 1100 (1 bit change)

If sensor reads during transition in binary:
  Could read: 0000, 0001, 1111, etc. (errors!)

With Gray code:
  Only one bit changes → no ambiguity

Encoder Disk Pattern (3-bit):
        ╭──────╮
       ╱ 000    ╲
      │  001  ╱  │
      │ 011 ╱    │
      │  ╱ 010   │
      │╱────────│
      │╲ 110    │
      │  ╲ 111  │
      │    ╲ 101│
       ╲    100╱
        ╰──────╯`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Karnaugh Maps</h3>
    <p className="leading-relaxed">
      Gray code ordering is used in Karnaugh maps to ensure that adjacent cells differ
      by only one variable, making it easier to identify and group adjacent 1s for
      Boolean simplification.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Karnaugh Map using Gray Code ordering:

For variables AB/CD:

        CD
        00  01  11  10    ← Gray code order
    ┌───┬───┬───┬───┐
 00 │   │   │   │   │
    ├───┼───┼───┼───┤
AB 01 │   │   │   │   │
    ├───┼───┼───┼───┤
 11 │   │   │   │   │
    ├───┼───┼───┼───┤
 10 │   │   │   │   │
    └───┴───┴───┴───┘
    ↑
Gray code order

Adjacent cells (including wrap-around) differ by 1 bit.`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Other Applications</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Digital Communication:</strong> Error detection in transmitted data
      </li>
      <li>
        <strong>Analog-to-Digital Converters:</strong> Reducing conversion errors
      </li>
      <li>
        <strong>Position Sensing:</strong> Linear and angular position encoders
      </li>
      <li>
        <strong>Genetic Algorithms:</strong> Crossover operations in optimization
      </li>
      <li>
        <strong>Tower of Hanoi:</strong> Solution pattern follows Gray code
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Gray Code Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variant</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary Reflected Gray Code</td>
            <td className="p-3 border">Standard Gray code</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border">n-ary Gray Code</td>
            <td className="p-3 border">For non-binary systems</td>
            <td className="p-3 border">Multi-level systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Beckett-Gray Code</td>
            <td className="p-3 border">Special sequencing property</td>
            <td className="p-3 border">Stage lighting</td>
          </tr>
          <tr>
            <td className="p-3 border">Long Run Gray Code</td>
            <td className="p-3 border">Maximizes runs of same bit</td>
            <td className="p-3 border">Data compression</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Eliminates glitches during transitions</td>
            <td className="p-3 border">Not suitable for arithmetic operations</td>
          </tr>
          <tr>
            <td className="p-3 border">Reduces errors in analog systems</td>
            <td className="p-3 border">Requires conversion for calculations</td>
          </tr>
          <tr>
            <td className="p-3 border">Minimizes switching noise</td>
            <td className="p-3 border">Not a weighted code</td>
          </tr>
          <tr>
            <td className="p-3 border">Ideal for position encoding</td>
            <td className="p-3 border">Less intuitive than binary</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Gray code has the property that adjacent numbers differ by only one bit</li>
        <li>Binary to Gray: MSB same, others = XOR of adjacent binary bits</li>
        <li>Gray to Binary: MSB same, others = XOR of Gray bit and previous binary bit</li>
        <li>Also called reflected binary code due to generation method</li>
        <li>Cyclic property: last code differs from first by one bit</li>
        <li>Primary use: rotary encoders and position sensing</li>
        <li>Used in Karnaugh maps for Boolean simplification</li>
        <li>Not suitable for arithmetic - must convert to binary first</li>
      </ul>
    </div>
  </div>
);

export default GrayCode;
