import React from 'react';

const NumberConversions: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Number System Conversions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Converting between different number systems is a fundamental skill in computer science.
      Understanding these conversions helps programmers work with binary data, debug programs,
      and interface between human-readable formats and machine representations. This guide
      covers conversion methods between decimal, binary, octal, and hexadecimal systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Conversion Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Number System Conversion Map:

                    +-----------+
                    |  DECIMAL  |
                    |  (Base 10)|
                    +-----------+
                   /      |      \
                  /       |       \
       +---------+  +----------+  +----------+
       | BINARY  |--| OCTAL    |--| HEX      |
       | (Base 2)|  | (Base 8) |  | (Base 16)|
       +---------+  +----------+  +----------+
              \          |           /
               \         |          /
                +--------+---------+
                | Direct conversion|
                | (group/expand)   |
                +------------------+

Key Relationships:
  - Octal: 1 digit = 3 binary bits (8 = 2^3)
  - Hex: 1 digit = 4 binary bits (16 = 2^4)
  - Direct conversions between binary, octal, and hex are efficient`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decimal to Binary Conversion</h2>
    <p className="leading-relaxed">
      To convert a decimal integer to binary, repeatedly divide by 2 and record the remainders.
      Read the remainders from bottom to top to get the binary equivalent.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Repeated Division by 2

Example: Convert 156 to binary

  Division    Quotient    Remainder
  --------    --------    ---------
  156 / 2  =    78           0     (LSB)
   78 / 2  =    39           0
   39 / 2  =    19           1
   19 / 2  =     9           1
    9 / 2  =     4           1
    4 / 2  =     2           0
    2 / 2  =     1           0
    1 / 2  =     0           1     (MSB)

  Read remainders from bottom to top: 10011100

  Result: 156₁₀ = 10011100₂

Verification:
  1x128 + 0x64 + 0x32 + 1x16 + 1x8 + 1x4 + 0x2 + 0x1
  = 128 + 16 + 8 + 4 = 156 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary to Decimal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Positional Value Summation

Example: Convert 11010110 to decimal

  Position:   7     6     5     4     3     2     1     0
  Bit:        1     1     0     1     0     1     1     0
  Power:     2^7   2^6   2^5   2^4   2^3   2^2   2^1   2^0
  Value:     128    64    32    16     8     4     2     1

  Calculation:
    1x128 = 128
    1x64  =  64
    0x32  =   0
    1x16  =  16
    0x8   =   0
    1x4   =   4
    1x2   =   2
    0x1   =   0
    ---------------
    Total = 214

  Result: 11010110₂ = 214₁₀

Quick Method (powers of 2):
  Remember: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024...
  Just add the powers where the bit is 1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decimal to Octal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Repeated Division by 8

Example: Convert 493 to octal

  Division    Quotient    Remainder
  --------    --------    ---------
  493 / 8  =    61           5     (LSD)
   61 / 8  =     7           5
    7 / 8  =     0           7     (MSD)

  Read remainders from bottom to top: 755

  Result: 493₁₀ = 755₈

Verification:
  7x64 + 5x8 + 5x1 = 448 + 40 + 5 = 493 ✓

Another Example: Convert 1000 to octal

  1000 / 8  =  125    remainder 0
   125 / 8  =   15    remainder 5
    15 / 8  =    1    remainder 7
     1 / 8  =    0    remainder 1

  Result: 1000₁₀ = 1750₈`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal to Decimal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Positional Value Summation (base 8)

Example: Convert 5372 to decimal

  Position:   3     2     1     0
  Digit:      5     3     7     2
  Power:     8^3   8^2   8^1   8^0
  Value:     512    64     8     1

  Calculation:
    5 x 512 = 2560
    3 x  64 =  192
    7 x   8 =   56
    2 x   1 =    2
    ----------------
    Total   = 2810

  Result: 5372₈ = 2810₁₀`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decimal to Hexadecimal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Repeated Division by 16

Example: Convert 2748 to hexadecimal

  Division     Quotient    Remainder    Hex Digit
  --------     --------    ---------    ---------
  2748 / 16 =    171          12           C      (LSD)
   171 / 16 =     10          11           B
    10 / 16 =      0          10           A      (MSD)

  Read remainders from bottom to top: ABC

  Result: 2748₁₀ = ABC₁₆

Verification:
  10x256 + 11x16 + 12x1 = 2560 + 176 + 12 = 2748 ✓

Remember for remainders > 9:
  10 = A    11 = B    12 = C
  13 = D    14 = E    15 = F

Another Example: Convert 65535 to hexadecimal

  65535 / 16 = 4095  remainder 15 (F)
   4095 / 16 =  255  remainder 15 (F)
    255 / 16 =   15  remainder 15 (F)
     15 / 16 =    0  remainder 15 (F)

  Result: 65535₁₀ = FFFF₁₆`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal to Decimal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Positional Value Summation (base 16)

Example: Convert 3E8 to decimal

  Position:   2     1     0
  Digit:      3     E     8
  Decimal:    3    14     8
  Power:    16^2  16^1  16^0
  Value:     256    16     1

  Calculation:
    3  x 256 = 768
    14 x  16 = 224
    8  x   1 =   8
    ---------------
    Total    = 1000

  Result: 3E8₁₆ = 1000₁₀

Example: Convert BEEF to decimal

    B     E     E     F
   11    14    14    15

  11x4096 + 14x256 + 14x16 + 15x1
  = 45056 + 3584 + 224 + 15
  = 48879

  Result: BEEF₁₆ = 48879₁₀`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary to Octal (Direct Method)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Group binary digits in sets of 3 (from right)

Example: Convert 110101110 to octal

  Step 1: Group in threes from right
    110 101 110

  Step 2: Convert each group
    110 = 6
    101 = 5
    110 = 6

  Result: 110101110₂ = 656₈

Example with padding: Convert 10111001 to octal

  Step 1: Group in threes (pad with leading zeros if needed)
    (0)10 111 001
      ↓
    010 111 001

  Step 2: Convert each group
    010 = 2
    111 = 7
    001 = 1

  Result: 10111001₂ = 271₈

Conversion Table:
  Binary  Octal    Binary  Octal
  000  =  0        100  =  4
  001  =  1        101  =  5
  010  =  2        110  =  6
  011  =  3        111  =  7`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal to Binary (Direct Method)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Expand each octal digit to 3 binary bits

Example: Convert 752 to binary

  Step 1: Expand each digit
    7 = 111
    5 = 101
    2 = 010

  Step 2: Concatenate
    111 101 010

  Result: 752₈ = 111101010₂

Example: Convert 4037 to binary

    4    0    3    7
   100  000  011  111

  Result: 4037₈ = 100000011111₂

  (Leading zeros can be dropped: 100000011111)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Binary to Hexadecimal (Direct Method)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Group binary digits in sets of 4 (from right)

Example: Convert 1101011110 to hexadecimal

  Step 1: Group in fours from right
    (00)11 0101 1110
       ↓
    0011 0101 1110

  Step 2: Convert each group
    0011 = 3
    0101 = 5
    1110 = E

  Result: 1101011110₂ = 35E₁₆

Example: Convert 11111111 to hexadecimal

    1111 1111
      F    F

  Result: 11111111₂ = FF₁₆

Conversion Table:
  Binary  Hex    Binary  Hex
  0000 =  0      1000 =  8
  0001 =  1      1001 =  9
  0010 =  2      1010 =  A
  0011 =  3      1011 =  B
  0100 =  4      1100 =  C
  0101 =  5      1101 =  D
  0110 =  6      1110 =  E
  0111 =  7      1111 =  F`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal to Binary (Direct Method)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Expand each hex digit to 4 binary bits

Example: Convert A5F to binary

  Step 1: Expand each digit
    A = 1010
    5 = 0101
    F = 1111

  Step 2: Concatenate
    1010 0101 1111

  Result: A5F₁₆ = 101001011111₂

Example: Convert DEADBEEF to binary

    D      E      A      D      B      E      E      F
  1101   1110   1010   1101   1011   1110   1110   1111

  Result: DEADBEEF₁₆ = 11011110101011011011111011101111₂`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal to Hexadecimal Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Method: Convert through binary (Octal -> Binary -> Hex)

Example: Convert 752₈ to hexadecimal

  Step 1: Octal to Binary
    7    5    2
   111  101  010

    Binary: 111101010

  Step 2: Binary to Hex (group by 4)
    0001 1110 1010
      1    E    A

  Result: 752₈ = 1EA₁₆

Alternative: Through Decimal
  752₈ = 7x64 + 5x8 + 2 = 448 + 40 + 2 = 490₁₀
  490 / 16 = 30  remainder 10 (A)
   30 / 16 =  1  remainder 14 (E)
    1 / 16 =  0  remainder  1

  Result: 752₈ = 1EA₁₆ ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">From / To</th>
            <th className="p-3 border">Binary</th>
            <th className="p-3 border">Octal</th>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">Hexadecimal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Binary</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Group by 3</td>
            <td className="p-3 border">Sum powers of 2</td>
            <td className="p-3 border">Group by 4</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Octal</td>
            <td className="p-3 border">Expand to 3 bits</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Sum powers of 8</td>
            <td className="p-3 border">Via binary</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Decimal</td>
            <td className="p-3 border">Divide by 2</td>
            <td className="p-3 border">Divide by 8</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Divide by 16</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Hexadecimal</td>
            <td className="p-3 border">Expand to 4 bits</td>
            <td className="p-3 border">Via binary</td>
            <td className="p-3 border">Sum powers of 16</td>
            <td className="p-3 border">-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting Fractional Numbers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Decimal Fractions to Binary:

Method: Multiply by 2, record integer part

Example: Convert 0.625 to binary

  0.625 x 2 = 1.25  -> 1
  0.25  x 2 = 0.50  -> 0
  0.50  x 2 = 1.00  -> 1
  (Stop when fraction = 0)

  Read from top to bottom: .101

  Result: 0.625₁₀ = 0.101₂

Verification: 0.5 + 0.125 = 0.625 ✓

Example: Convert 0.1 to binary (repeating)

  0.1 x 2 = 0.2  -> 0
  0.2 x 2 = 0.4  -> 0
  0.4 x 2 = 0.8  -> 0
  0.8 x 2 = 1.6  -> 1
  0.6 x 2 = 1.2  -> 1
  0.2 x 2 = 0.4  -> 0  (pattern repeats)

  Result: 0.1₁₀ = 0.000110011... ₂ (repeating)

  This is why floating-point has precision issues!`}
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
            <td className="p-3 border">Convert 255₁₀ to binary</td>
            <td className="p-3 border">11111111₂</td>
          </tr>
          <tr>
            <td className="p-3 border">Convert 10101010₂ to decimal</td>
            <td className="p-3 border">170₁₀</td>
          </tr>
          <tr>
            <td className="p-3 border">Convert 777₈ to decimal</td>
            <td className="p-3 border">511₁₀</td>
          </tr>
          <tr>
            <td className="p-3 border">Convert FF₁₆ to decimal</td>
            <td className="p-3 border">255₁₀</td>
          </tr>
          <tr>
            <td className="p-3 border">Convert 11110000₂ to hex</td>
            <td className="p-3 border">F0₁₆</td>
          </tr>
          <tr>
            <td className="p-3 border">Convert 644₈ to binary</td>
            <td className="p-3 border">110100100₂</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Decimal to other bases: use repeated division by the target base</li>
        <li>Other bases to decimal: multiply each digit by its positional value and sum</li>
        <li>Binary-Octal: group/expand by 3 bits per octal digit</li>
        <li>Binary-Hex: group/expand by 4 bits per hex digit</li>
        <li>Octal-Hex: convert through binary as an intermediate step</li>
        <li>Fractional conversions: multiply by target base and record integer parts</li>
        <li>Some decimal fractions cannot be exactly represented in binary</li>
      </ul>
    </div>
  </div>
);

export default NumberConversions;
