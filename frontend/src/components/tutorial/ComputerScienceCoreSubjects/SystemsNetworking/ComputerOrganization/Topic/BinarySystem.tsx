import React from 'react';

const BinarySystem: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binary Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The binary number system is a base-2 numeral system that uses only two digits: 0 and 1.
      It forms the foundation of all modern digital computing systems. Every piece of data
      processed by a computer, from text and images to videos and software, is ultimately
      represented as sequences of binary digits, commonly known as bits.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Binary</h2>
    <p className="leading-relaxed">
      In the binary system, each position represents a power of 2, starting from 2^0 on the
      rightmost position. The term "binary" comes from the Latin word "bini," meaning "two
      together." Each binary digit is called a bit, which is the smallest unit of data in
      computing.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Place Values:

Position:    7       6       5       4       3       2       1       0
Power:      2^7     2^6     2^5     2^4     2^3     2^2     2^1     2^0
Value:      128     64      32      16      8       4       2       1

Example: Binary 10110101

Position:    7       6       5       4       3       2       1       0
Bit:         1       0       1       1       0       1       0       1
Value:      128  +   0   +  32  +  16  +   0  +   4  +   0  +   1
          = 181 in decimal

Calculation: 1x128 + 0x64 + 1x32 + 1x16 + 0x8 + 1x4 + 0x2 + 1x1 = 181`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Computers Use Binary</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Electronic Simplicity:</strong> Digital circuits can easily distinguish between
        two states: high voltage (1) and low voltage (0), making binary naturally suited for
        electronic implementation.
      </li>
      <li>
        <strong>Reliability:</strong> Having only two states reduces errors caused by voltage
        fluctuations or noise in electronic signals.
      </li>
      <li>
        <strong>Boolean Logic:</strong> Binary aligns perfectly with Boolean algebra, which
        forms the mathematical foundation for digital logic design.
      </li>
      <li>
        <strong>Storage Efficiency:</strong> Magnetic and optical storage media can easily
        represent two states (magnetized/demagnetized, pit/land).
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Why Binary Works for Electronics:

Analog Signal (Problematic):
    Voltage
    5V |    ___
       |   /   \
    3V |  /     \___
       | /          \
    0V |/____________\___
       0   1   2   3   4   Time

  - Infinite voltage levels
  - Susceptible to noise
  - Hard to distinguish values

Digital Signal (Binary):
    Voltage
    5V |____      ____
       |    |    |    |
       |    |    |    |
    0V |    |____|    |____
       0   1   2   3   4   Time
         1    0    1    0

  - Only two levels (0 or 1)
  - Easy to distinguish
  - Noise-resistant`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Size</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bit</td>
            <td className="p-3 border">Single binary digit (0 or 1)</td>
            <td className="p-3 border">1 bit</td>
          </tr>
          <tr>
            <td className="p-3 border">Nibble</td>
            <td className="p-3 border">Group of 4 bits</td>
            <td className="p-3 border">4 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Byte</td>
            <td className="p-3 border">Group of 8 bits</td>
            <td className="p-3 border">8 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Word</td>
            <td className="p-3 border">CPU-dependent unit (typically 32 or 64 bits)</td>
            <td className="p-3 border">16/32/64 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Kilobyte (KB)</td>
            <td className="p-3 border">1,024 bytes</td>
            <td className="p-3 border">8,192 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Megabyte (MB)</td>
            <td className="p-3 border">1,024 kilobytes</td>
            <td className="p-3 border">8,388,608 bits</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Counting in Binary</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Counting Pattern:

Decimal    Binary     Pattern Explanation
-------    ------     -------------------
   0        0000      All zeros
   1        0001      Rightmost bit toggles
   2        0010      Carry to next position
   3        0011      Two bits on
   4        0100      Carry to third position
   5        0101
   6        0110
   7        0111      Three bits on
   8        1000      Carry to fourth position
   9        1001
  10        1010
  11        1011
  12        1100
  13        1101
  14        1110
  15        1111      All four bits on (maximum for 4 bits)
  16       10000      Need 5 bits (overflow for 4-bit system)

Pattern: Rightmost bit toggles every count
         Second bit toggles every 2 counts
         Third bit toggles every 4 counts
         Fourth bit toggles every 8 counts
         nth bit toggles every 2^(n-1) counts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Range</h2>
    <p className="leading-relaxed">
      The range of values that can be represented depends on the number of bits available.
      With n bits, you can represent 2^n different values. For unsigned (non-negative)
      integers, this gives a range from 0 to 2^n - 1.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Bits</th>
            <th className="p-3 border">Possible Values</th>
            <th className="p-3 border">Unsigned Range</th>
            <th className="p-3 border">Common Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0 to 1</td>
            <td className="p-3 border">Boolean flag</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">0 to 15</td>
            <td className="p-3 border">Hex digit (nibble)</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">256</td>
            <td className="p-3 border">0 to 255</td>
            <td className="p-3 border">ASCII character, byte</td>
          </tr>
          <tr>
            <td className="p-3 border">16</td>
            <td className="p-3 border">65,536</td>
            <td className="p-3 border">0 to 65,535</td>
            <td className="p-3 border">Port numbers, Unicode</td>
          </tr>
          <tr>
            <td className="p-3 border">32</td>
            <td className="p-3 border">4,294,967,296</td>
            <td className="p-3 border">0 to 4.29 billion</td>
            <td className="p-3 border">IPv4 addresses, int</td>
          </tr>
          <tr>
            <td className="p-3 border">64</td>
            <td className="p-3 border">18.4 quintillion</td>
            <td className="p-3 border">0 to 18.4 x 10^18</td>
            <td className="p-3 border">Modern pointers, long</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Most Significant and Least Significant Bits</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MSB and LSB in Binary:

Binary Number: 1 0 1 1 0 1 0 1
               ^           ^
               |           |
              MSB         LSB

MSB (Most Significant Bit):
  - Leftmost bit
  - Has the highest place value
  - In signed numbers, indicates sign (0=positive, 1=negative)
  - Most impact on the total value

LSB (Least Significant Bit):
  - Rightmost bit
  - Has the lowest place value (2^0 = 1)
  - Determines if number is odd (1) or even (0)
  - Changes most frequently when counting

Example with 8 bits:
  MSB = bit 7 (weight = 128)
  LSB = bit 0 (weight = 1)

  10110101 = 181
  MSB = 1 (contributes 128 to total)
  LSB = 1 (contributes 1 to total, number is odd)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary Fractions</h2>
    <p className="leading-relaxed">
      Binary can also represent fractional numbers. Positions to the right of the binary point
      represent negative powers of 2: 2^-1 (0.5), 2^-2 (0.25), 2^-3 (0.125), and so on.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Binary Fractions:

Position:    2^1   2^0  .  2^-1   2^-2   2^-3   2^-4
Value:        2     1   .   0.5   0.25  0.125  0.0625

Example: 10.1101 in binary

  10.1101 = 1x2 + 0x1 + 1x0.5 + 1x0.25 + 0x0.125 + 1x0.0625
          = 2 + 0 + 0.5 + 0.25 + 0 + 0.0625
          = 2.8125 in decimal

Common Binary Fractions:
  0.1    = 0.5
  0.01   = 0.25
  0.001  = 0.125
  0.0001 = 0.0625
  0.11   = 0.75
  0.101  = 0.625

Note: Some decimal fractions cannot be represented exactly in binary
  0.1 (decimal) = 0.00011001100110011... (repeating binary)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Binary</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Computer Memory:</strong> All data in RAM and storage is stored in binary format,
        with each memory cell holding a bit value.
      </li>
      <li>
        <strong>Digital Logic:</strong> Logic gates (AND, OR, NOT, XOR) operate on binary inputs
        to produce binary outputs.
      </li>
      <li>
        <strong>Network Communication:</strong> Data transmitted over networks is encoded as
        binary signals, whether electrical, optical, or radio waves.
      </li>
      <li>
        <strong>File Encoding:</strong> All files, regardless of type, are sequences of bytes
        (8-bit binary values) at the lowest level.
      </li>
      <li>
        <strong>Instruction Encoding:</strong> CPU instructions are binary patterns that the
        processor decodes and executes.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Binary is a base-2 system using only digits 0 and 1</li>
        <li>Each position represents a power of 2 (1, 2, 4, 8, 16, 32...)</li>
        <li>Computers use binary due to electronic simplicity and reliability</li>
        <li>A bit is the smallest unit; 8 bits make a byte</li>
        <li>With n bits, you can represent 2^n different values (0 to 2^n - 1)</li>
        <li>MSB (leftmost) has highest value; LSB (rightmost) has lowest value</li>
        <li>Binary fractions use negative powers of 2 after the binary point</li>
      </ul>
    </div>
  </div>
);

export default BinarySystem;
