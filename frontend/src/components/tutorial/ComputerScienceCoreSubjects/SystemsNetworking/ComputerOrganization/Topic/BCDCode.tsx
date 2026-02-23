import React from 'react';

const BCDCode: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      BCD Code (Binary Coded Decimal)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Binary Coded Decimal (BCD) is a class of binary encoding schemes where each decimal digit
      is represented by a fixed number of bits, usually four or eight. BCD combines the advantages
      of decimal notation (human readability) with binary representation (computer processing).
      It is particularly useful in applications where exact decimal representation is required.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is BCD?</h2>
    <p className="leading-relaxed">
      In BCD, each decimal digit (0-9) is encoded using four bits (a nibble). Unlike pure binary
      where the entire number is converted, BCD encodes each digit separately. This preserves the
      decimal structure and avoids conversion errors that can occur with binary floating point.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`BCD vs Pure Binary:

Decimal 259:

Pure Binary:
  259 = 256 + 2 + 1 = 100000011 (9 bits)

BCD (4 bits per digit):
  2 = 0010
  5 = 0101
  9 = 1001
  259 = 0010 0101 1001 (12 bits)

Key Difference:
  - Pure binary: entire number converted as one unit
  - BCD: each decimal digit converted separately

+--------+--------+--------+--------+--------+
| Decimal|   0    |   1    |   2    |   3    |
| BCD    |  0000  |  0001  |  0010  |  0011  |
+--------+--------+--------+--------+--------+
| Decimal|   4    |   5    |   6    |   7    |
| BCD    |  0100  |  0101  |  0110  |  0111  |
+--------+--------+--------+--------+--------+
| Decimal|   8    |   9    |        |        |
| BCD    |  1000  |  1001  | Invalid| Invalid|
+--------+--------+--------+--------+--------+

Note: Codes 1010 (10) through 1111 (15) are invalid in BCD`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCD Encoding Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">BCD</th>
            <th className="p-3 border">8-4-2-1 Weights</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0+0+0+0 = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">0+0+0+1 = 1</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0010</td>
            <td className="p-3 border">0+0+2+0 = 2</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">0+0+2+1 = 3</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">0+4+0+0 = 4</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">0101</td>
            <td className="p-3 border">0+4+0+1 = 5</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">0+4+2+0 = 6</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">0+4+2+1 = 7</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">8+0+0+0 = 8</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">1001</td>
            <td className="p-3 border">8+0+0+1 = 9</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Decimal to BCD Conversion:

Example 1: Convert 47 to BCD
  4 = 0100
  7 = 0111
  47 = 0100 0111

Example 2: Convert 1985 to BCD
  1 = 0001
  9 = 1001
  8 = 1000
  5 = 0101
  1985 = 0001 1001 1000 0101

Example 3: Convert 306 to BCD
  3 = 0011
  0 = 0000
  6 = 0110
  306 = 0011 0000 0110

BCD to Decimal Conversion:

Example: Convert 1000 0101 0010 to decimal
  1000 = 8
  0101 = 5
  0010 = 2
  Result = 852`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCD Arithmetic</h2>

    <h3 className="text-2xl font-semibold mt-6">BCD Addition</h3>
    <p className="leading-relaxed">
      When adding BCD numbers, if the sum of two digits exceeds 9 (1001) or produces a carry,
      we need to add 6 (0110) to correct the result and propagate the carry.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`BCD Addition Rules:

If sum <= 9 and no carry: Result is valid BCD
If sum > 9 or carry: Add 6 (0110) to the sum

Example 1: 5 + 3 = 8 (No correction needed)
    0101 (5)
  + 0011 (3)
  --------
    1000 (8) ✓ Valid BCD

Example 2: 7 + 6 = 13 (Correction needed)
    0111 (7)
  + 0110 (6)
  --------
    1101 (13 in binary, but invalid BCD!)
  + 0110 (add 6 for correction)
  --------
  1 0011 (carry=1, digit=3)

  Result: 0001 0011 = 13 in BCD ✓

Example 3: 48 + 35 = 83
  Units place: 8 + 5 = 13
    1000 + 0101 = 1101 (>9, add 6)
    1101 + 0110 = 1 0011 (carry=1, digit=3)

  Tens place: 4 + 3 + 1(carry) = 8
    0100 + 0011 + 0001 = 1000 (8, valid)

  Result: 1000 0011 = 83 ✓

Example 4: 92 + 18 = 110
  Units: 2 + 8 = 10
    0010 + 1000 = 1010 (>9, add 6)
    1010 + 0110 = 1 0000 (carry=1, digit=0)

  Tens: 9 + 1 + 1 = 11
    1001 + 0001 + 0001 = 1011 (>9, add 6)
    1011 + 0110 = 1 0001 (carry=1, digit=1)

  Result: 0001 0001 0000 = 110 ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">BCD Subtraction</h3>
    <p className="leading-relaxed">
      BCD subtraction can be performed using 10's complement or 9's complement, similar to
      how 2's complement is used in binary subtraction.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`BCD Subtraction using 10's Complement:

To find 10's complement:
  1. Find 9's complement of each digit (9 - digit)
  2. Add 1 to the result

Example: 52 - 27 = 25

Method: Add 52 + (10's complement of 27)

Step 1: 9's complement of 27
  9 - 2 = 7
  9 - 7 = 2
  9's complement = 72

Step 2: 10's complement
  72 + 1 = 73

Step 3: Add
  52 + 73 = 125
  Discard the carry (1)
  Result: 25 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of BCD Codes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">8421 (Standard)</th>
            <th className="p-3 border">2421</th>
            <th className="p-3 border">Excess-3</th>
            <th className="p-3 border">84-2-1</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">0000</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">0111</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0010</td>
            <td className="p-3 border">0010</td>
            <td className="p-3 border">0101</td>
            <td className="p-3 border">0110</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">0101</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">0100</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">0101</td>
            <td className="p-3 border">1011</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">1011</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">1100</td>
            <td className="p-3 border">1001</td>
            <td className="p-3 border">1010</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">1101</td>
            <td className="p-3 border">1010</td>
            <td className="p-3 border">1001</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">1110</td>
            <td className="p-3 border">1011</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">1001</td>
            <td className="p-3 border">1111</td>
            <td className="p-3 border">1100</td>
            <td className="p-3 border">1111</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Excess-3 Code</h2>
    <p className="leading-relaxed">
      Excess-3 (XS-3) is a self-complementing BCD code. Each decimal digit is represented by
      its binary equivalent plus 3. This property makes it useful for subtraction operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Excess-3 Code:

Excess-3 code = BCD code + 3 (0011)

Example: Represent 47 in Excess-3
  4: BCD = 0100, Excess-3 = 0100 + 0011 = 0111
  7: BCD = 0111, Excess-3 = 0111 + 0011 = 1010
  47 in Excess-3 = 0111 1010

Self-Complementing Property:
  9's complement of a digit = 1's complement of its Excess-3 code

  Example: 9's complement of 3 is 6
  Excess-3 of 3 = 0110
  1's complement = 1001 = Excess-3 of 6 ✓

This simplifies subtraction using 9's complement.`}
      </pre>
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
            <td className="p-3 border">Exact decimal representation</td>
            <td className="p-3 border">Less efficient storage (uses more bits)</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy conversion to/from decimal</td>
            <td className="p-3 border">Complex arithmetic operations</td>
          </tr>
          <tr>
            <td className="p-3 border">No rounding errors for decimal values</td>
            <td className="p-3 border">6 unused codes (1010-1111)</td>
          </tr>
          <tr>
            <td className="p-3 border">Ideal for financial calculations</td>
            <td className="p-3 border">Slower than pure binary</td>
          </tr>
          <tr>
            <td className="p-3 border">Direct decimal display</td>
            <td className="p-3 border">Requires special hardware</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of BCD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Digital Clocks and Watches:</strong> Direct display of decimal digits
      </li>
      <li>
        <strong>Calculators:</strong> Exact decimal arithmetic
      </li>
      <li>
        <strong>Financial Systems:</strong> Precise currency calculations
      </li>
      <li>
        <strong>Seven-Segment Displays:</strong> Easy decoding to display digits
      </li>
      <li>
        <strong>Industrial Counters:</strong> Direct decimal counting
      </li>
      <li>
        <strong>Measuring Instruments:</strong> Accurate decimal readings
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>BCD represents each decimal digit with 4 binary bits</li>
        <li>Standard BCD uses 8-4-2-1 weighted code</li>
        <li>Valid BCD codes are 0000 to 1001 (0-9)</li>
        <li>BCD addition may require adding 6 for correction</li>
        <li>Excess-3 is a self-complementing BCD code</li>
        <li>BCD is less efficient but more accurate for decimal values</li>
        <li>Used extensively in financial and display applications</li>
        <li>BCD avoids binary to decimal conversion errors</li>
      </ul>
    </div>
  </div>
);

export default BCDCode;
