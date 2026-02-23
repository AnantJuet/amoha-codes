import React from 'react';

const HexSystem: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hexadecimal Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The hexadecimal number system is a base-16 numeral system that uses sixteen distinct
      symbols: digits 0-9 and letters A-F. It has become the predominant way to represent
      binary data in modern computing because each hexadecimal digit corresponds exactly
      to four binary bits, making it ideal for representing byte-oriented data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Hexadecimal</h2>
    <p className="leading-relaxed">
      In hexadecimal (often abbreviated as "hex"), each position represents a power of 16.
      The word comes from Greek "hex" (six) and Latin "decem" (ten). Since we need 16
      unique symbols but only have 10 numeric digits (0-9), letters A through F are used
      to represent values 10 through 15.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hexadecimal Place Values:

Position:    4       3       2       1       0
Power:     16^4    16^3    16^2    16^1    16^0
Value:    65536   4096     256      16       1

Example: Hex 2F8A

Position:    3       2       1       0
Digit:       2       F       8       A
Value:    2x4096 + 15x256 + 8x16 + 10x1
        = 8192  + 3840   + 128  + 10
        = 12170 in decimal

Note: F = 15, A = 10 in hexadecimal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal Digits Reference</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Hex</th>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">Binary</th>
            <th className="p-3 border">Hex</th>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">Binary</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">1000</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">9</td>
            <td className="p-3 border">9</td>
            <td className="p-3 border">1001</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0010</td>
            <td className="p-3 border">A</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">1010</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">B</td>
            <td className="p-3 border">11</td>
            <td className="p-3 border">1011</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">C</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">1100</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">0101</td>
            <td className="p-3 border">D</td>
            <td className="p-3 border">13</td>
            <td className="p-3 border">1101</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">E</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">1110</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">F</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">1111</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal-Binary Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Between Hexadecimal and Binary:

Since 16 = 2^4, each hex digit = exactly 4 binary bits

Binary to Hexadecimal:
  Binary:     1 1 0 1 0 1 1 1 1 0 0 1
  Group by 4: (1101)(0111)(1001)
  Hex:          D     7     9
  Result: 110101111001₂ = D79₁₆

Hexadecimal to Binary:
  Hex:         A    5    F    3
  Expand:   (1010)(0101)(1111)(0011)
  Binary:   1010010111110011
  Result: A5F3₁₆ = 1010010111110011₂

Why Hex is Perfect for Bytes:
  1 byte = 8 bits = 2 hex digits

  Byte value: 11011010
  Split:      (1101)(1010)
  Hex:          D     A
  So 11011010₂ = DA₁₆ = 218₁₀

  Every byte can be written as exactly 2 hex digits: 00 to FF`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Applications of Hexadecimal</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Memory Addresses:</strong> Computer memory addresses are displayed in hex
        (e.g., 0x7FFF5FBFF8E0) for compactness and readability.
      </li>
      <li>
        <strong>Color Codes:</strong> Web colors use hex notation (e.g., #FF5733) where
        each pair represents Red, Green, and Blue values 0-255.
      </li>
      <li>
        <strong>MAC Addresses:</strong> Network interface identifiers use hex
        (e.g., 00:1A:2B:3C:4D:5E).
      </li>
      <li>
        <strong>Unicode Characters:</strong> Unicode code points are expressed in hex
        (e.g., U+0041 for 'A').
      </li>
      <li>
        <strong>Assembly Language:</strong> Machine code and memory values are commonly
        represented in hexadecimal.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal Color Codes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`RGB Color Representation:

Format: #RRGGBB or #RGB (shorthand)

  #FF5733 breaks down as:
  +----+----+----+
  | FF | 57 | 33 |
  +----+----+----+
    |    |    |
   Red Green Blue
   255   87   51  (decimal values)

Common Colors:
  #FFFFFF - White  (255, 255, 255)
  #000000 - Black  (0, 0, 0)
  #FF0000 - Red    (255, 0, 0)
  #00FF00 - Green  (0, 255, 0)
  #0000FF - Blue   (0, 0, 255)
  #FFFF00 - Yellow (255, 255, 0)
  #FF00FF - Magenta(255, 0, 255)
  #00FFFF - Cyan   (0, 255, 255)
  #808080 - Gray   (128, 128, 128)

With Alpha Channel: #RRGGBBAA
  #FF573380 = Same color at 50% opacity
              (80 hex = 128 decimal = 50% of 255)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal in Programming</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hexadecimal Notation in Programming Languages:

C/C++/Java/JavaScript:
  int value = 0xFF;      // 255 in decimal
  int address = 0x1A2B;  // 6699 in decimal

Python:
  value = 0xFF           // 255
  print(hex(255))        // Outputs: 0xff

Printing/Formatting:
  C:      printf("%X", 255);      // Outputs: FF
          printf("%02X", 15);     // Outputs: 0F (padded)

  Python: f"{255:X}"              // Returns: FF
          f"{255:02x}"            // Returns: ff

  Java:   Integer.toHexString(255) // Returns: ff

Common Uses in Code:
  // Bit masks
  int mask = 0xFF;              // 11111111 in binary
  int upperByte = value & 0xFF00;

  // Memory/File operations
  byte[] header = {0x89, 0x50, 0x4E, 0x47}; // PNG signature

  // Control characters
  char newline = 0x0A;          // Line feed
  char carriage = 0x0D;         // Carriage return`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Address Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Memory Addresses in Hexadecimal:

32-bit Address Space:
  Range: 0x00000000 to 0xFFFFFFFF
  Size: 4 bytes, 8 hex digits
  Example: 0x0040A000

64-bit Address Space:
  Range: 0x0000000000000000 to 0xFFFFFFFFFFFFFFFF
  Size: 8 bytes, 16 hex digits
  Example: 0x00007FFE5FBFF8E0

Memory Dump Example:
  Address      +0 +1 +2 +3 +4 +5 +6 +7  +8 +9 +A +B +C +D +E +F
  -----------  -- -- -- -- -- -- -- --  -- -- -- -- -- -- -- --
  0x00400000   48 65 6C 6C 6F 2C 20 57  6F 72 6C 64 21 0A 00 00
               H  e  l  l  o  ,     W   o  r  l  d  !

Why Hex for Addresses:
  - Compact: 32-bit address = 8 characters
  - Aligned: Powers of 2 align nicely (0x1000 = 4KB)
  - Readable: Patterns visible (0xDEADBEEF, 0xCAFEBABE)
  - Binary relation: Each digit = 4 address bits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Counting in Hexadecimal</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hexadecimal Counting Sequence:

Decimal    Hex     Decimal    Hex
-------    ---     -------    ---
   0        0        16       10
   1        1        17       11
   2        2        26       1A
   3        3        27       1B
   4        4       255       FF
   5        5       256      100
   6        6       512      200
   7        7      4095      FFF
   8        8      4096     1000
   9        9     65535     FFFF
  10        A     65536    10000
  11        B
  12        C
  13        D     Notable Values:
  14        E       FF = 255 (max byte)
  15        F       FFFF = 65535 (max 16-bit)
                    FFFFFFFF = 4.29 billion (max 32-bit)

Counting Pattern:
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F,
  10, 11, 12, ... 19, 1A, 1B, 1C, 1D, 1E, 1F,
  20, 21, ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hexadecimal Arithmetic</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hexadecimal Addition Example:

  Add 3A9₁₆ + 2CF₁₆

      3 A 9
    + 2 C F
    -------

  Step 1: 9 + F = 9 + 15 = 24 (decimal)
          24 = 1x16 + 8 = 18₁₆
          Write 8, carry 1

      3 A 9
    + 2 C F
    -------
          8   (carry 1)

  Step 2: A + C + 1 = 10 + 12 + 1 = 23 (decimal)
          23 = 1x16 + 7 = 17₁₆
          Write 7, carry 1

      3 A 9
    + 2 C F
    -------
        7 8   (carry 1)

  Step 3: 3 + 2 + 1 = 6
          Write 6

      3 A 9
    + 2 C F
    -------
      6 7 8

  Result: 3A9₁₆ + 2CF₁₆ = 678₁₆

  Verification:
    937 + 719 = 1656 (decimal)
    678₁₆ = 6x256 + 7x16 + 8 = 1536 + 112 + 8 = 1656 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Hexadecimal Patterns</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Hex Value</th>
            <th className="p-3 border">Common Use</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0xDEADBEEF</td>
            <td className="p-3 border">Debugging marker</td>
            <td className="p-3 border">Uninitialized memory</td>
          </tr>
          <tr>
            <td className="p-3 border">0xCAFEBABE</td>
            <td className="p-3 border">Java class file magic</td>
            <td className="p-3 border">File signature</td>
          </tr>
          <tr>
            <td className="p-3 border">0xFEEDFACE</td>
            <td className="p-3 border">Mach-O binary (macOS)</td>
            <td className="p-3 border">File signature</td>
          </tr>
          <tr>
            <td className="p-3 border">0x7F454C46</td>
            <td className="p-3 border">ELF executable (Linux)</td>
            <td className="p-3 border">File signature</td>
          </tr>
          <tr>
            <td className="p-3 border">0xFFFFFFFF</td>
            <td className="p-3 border">Maximum 32-bit value</td>
            <td className="p-3 border">All bits set, or -1 signed</td>
          </tr>
          <tr>
            <td className="p-3 border">0x00000000</td>
            <td className="p-3 border">NULL pointer</td>
            <td className="p-3 border">Invalid/uninitialized pointer</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Hexadecimal is base-16, using digits 0-9 and letters A-F (representing 10-15)</li>
        <li>Each hex digit corresponds exactly to 4 binary bits (one nibble)</li>
        <li>One byte (8 bits) is represented by exactly 2 hex digits (00 to FF)</li>
        <li>Common prefix is 0x in programming languages</li>
        <li>Widely used for memory addresses, color codes, and binary data representation</li>
        <li>More compact than binary: 8 hex digits = 32 binary digits</li>
        <li>Essential skill for debugging, assembly programming, and low-level computing</li>
      </ul>
    </div>
  </div>
);

export default HexSystem;
