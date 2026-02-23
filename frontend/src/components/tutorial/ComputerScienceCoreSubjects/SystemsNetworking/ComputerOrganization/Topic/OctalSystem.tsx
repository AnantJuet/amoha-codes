import React from 'react';

const OctalSystem: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Octal Number System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The octal number system is a base-8 numeral system that uses eight distinct digits:
      0 through 7. It serves as a convenient shorthand for representing binary numbers since
      each octal digit corresponds exactly to three binary bits. This system was widely used
      in early computing and remains important in Unix/Linux file permissions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Octal</h2>
    <p className="leading-relaxed">
      In the octal system, each position represents a power of 8. The word "octal" derives
      from the Latin "octo" meaning eight. Since 8 is a power of 2 (8 = 2^3), there is a
      direct relationship between octal and binary: every three binary digits can be
      represented by exactly one octal digit.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Octal Place Values:

Position:    4       3       2       1       0
Power:      8^4     8^3     8^2     8^1     8^0
Value:     4096    512      64       8       1

Example: Octal 7532

Position:    3       2       1       0
Digit:       7       5       3       2
Value:    7x512 + 5x64  + 3x8   + 2x1
        = 3584  + 320   + 24    + 2
        = 3930 in decimal

Formula: (d3 x 8^3) + (d2 x 8^2) + (d1 x 8^1) + (d0 x 8^0)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal Digits and Binary Equivalents</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Octal Digit</th>
            <th className="p-3 border">Binary (3 bits)</th>
            <th className="p-3 border">Decimal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">000</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">001</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">010</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">011</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">100</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">101</td>
            <td className="p-3 border">5</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">110</td>
            <td className="p-3 border">6</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">111</td>
            <td className="p-3 border">7</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal-Binary Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Between Octal and Binary:

Since 8 = 2^3, each octal digit = exactly 3 binary bits

Binary to Octal:
  Binary:    1  0  1  1  1  0  0  1  0
  Group by 3:  (1 0 1)(1 1 0)(0 1 0)
  Pad left:   (101)  (110)  (010)
  Octal:        5      6      2
  Result: 101110010₂ = 562₈

Octal to Binary:
  Octal:       3    7    4
  Expand:    (011)(111)(100)
  Binary:    011111100
  Result: 374₈ = 011111100₂

This relationship makes octal a compact way to write binary:

  24-bit binary: 110101110010110100101101
  Grouped:       (110)(101)(110)(010)(110)(100)(101)(101)
  Octal:           6    5    6    2    6    4    5    5

  Much easier to read and remember!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Counting in Octal</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Octal Counting Sequence:

Decimal    Octal    Note
-------    -----    ----
   0         0
   1         1
   2         2
   3         3
   4         4
   5         5
   6         6
   7         7      Highest single digit
   8        10      Carry! (no digit 8 or 9 in octal)
   9        11
  10        12
  15        17
  16        20      Another carry
  63        77      Maximum 2-digit octal
  64       100      Three digits needed
 511       777      Maximum 3-digit octal
 512      1000      Four digits needed

Key Observation:
  - After 7 comes 10 (not 8)
  - Digits 8 and 9 do not exist in octal
  - Common mistake: writing 8 or 9 in an octal number`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Unix/Linux File Permissions</h2>
    <p className="leading-relaxed">
      One of the most common modern uses of octal is in Unix/Linux file permissions.
      Each file has permissions for owner, group, and others, with each category having
      read (r), write (w), and execute (x) permissions represented by three bits.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Unix File Permissions in Octal:

Permission Bits:
  r (read)    = 4 (binary 100)
  w (write)   = 2 (binary 010)
  x (execute) = 1 (binary 001)

Permission Examples:
  rwx = 4+2+1 = 7
  rw- = 4+2+0 = 6
  r-x = 4+0+1 = 5
  r-- = 4+0+0 = 4
  --- = 0+0+0 = 0

Full Permission Format:
  +-------+-------+-------+
  | Owner | Group | Others|
  +-------+-------+-------+
  |  rwx  |  r-x  |  r--  |
  |   7   |   5   |   4   |
  +-------+-------+-------+

  chmod 754 file.txt sets:
    Owner:  rwx (7) - full access
    Group:  r-x (5) - read and execute
    Others: r-- (4) - read only

Common Permission Values:
  777 - rwxrwxrwx - Full access for everyone
  755 - rwxr-xr-x - Owner full, others read/execute
  644 - rw-r--r-- - Owner read/write, others read
  600 - rw------- - Owner read/write only
  400 - r-------- - Owner read only`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Historical Use in Computing</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Early Computers:</strong> Many early systems used 12-bit, 24-bit, or 36-bit
        words, which divide evenly by 3, making octal a natural choice.
      </li>
      <li>
        <strong>PDP Series:</strong> Digital Equipment Corporation's PDP machines extensively
        used octal notation in documentation and assembly language.
      </li>
      <li>
        <strong>Display Simplicity:</strong> Before hexadecimal became standard, octal provided
        a compact way to represent binary on limited display devices.
      </li>
      <li>
        <strong>Core Dumps:</strong> Early debugging often displayed memory contents in octal
        format for programmer analysis.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Octal in Programming Languages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Octal Notation in Programming:

C/C++/Java:
  int octal = 0755;    // Leading 0 indicates octal
  // 0755 = 493 in decimal

  WARNING: Leading zero gotcha!
  int x = 010;         // This is 8, not 10!
  int y = 019;         // ERROR! 9 is invalid in octal

Python:
  octal = 0o755        // 0o prefix for octal
  print(oct(493))      // Outputs: 0o755

JavaScript:
  let octal = 0o755;   // ES6 style (preferred)
  let old = 0755;      // Legacy style (deprecated)

Bash/Shell:
  chmod 755 file       // Octal permissions
  printf "%o" 255      // Outputs: 377

Common Mistake Prevention:
  // Never use leading zeros for decimal numbers!
  int month = 08;      // ERROR in languages where 0 = octal
  int month = 8;       // Correct`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal vs Hexadecimal</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Octal (Base 8)</th>
            <th className="p-3 border">Hexadecimal (Base 16)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bits per digit</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">Best for</td>
            <td className="p-3 border">12, 24, 36-bit systems</td>
            <td className="p-3 border">8, 16, 32, 64-bit systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Modern usage</td>
            <td className="p-3 border">Unix permissions</td>
            <td className="p-3 border">Memory, colors, most computing</td>
          </tr>
          <tr>
            <td className="p-3 border">Digits used</td>
            <td className="p-3 border">0-7 only</td>
            <td className="p-3 border">0-9 and A-F</td>
          </tr>
          <tr>
            <td className="p-3 border">Compactness</td>
            <td className="p-3 border">Less compact</td>
            <td className="p-3 border">More compact</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Octal Arithmetic Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Octal Addition:

  Add 365₈ + 247₈

    365
  + 247
  -----

  Step 1: 5 + 7 = 12 (decimal)
          12 in octal = 14 (12 = 1x8 + 4)
          Write 4, carry 1

    365
  + 247
  -----
      4   (carry 1)

  Step 2: 6 + 4 + 1(carry) = 11 (decimal)
          11 in octal = 13 (11 = 1x8 + 3)
          Write 3, carry 1

    365
  + 247
  -----
     34   (carry 1)

  Step 3: 3 + 2 + 1(carry) = 6
          No carry needed

    365
  + 247
  -----
    634

  Result: 365₈ + 247₈ = 634₈

  Verification: 245 + 167 = 412 (decimal)
                634₈ = 6x64 + 3x8 + 4 = 412 ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Octal is a base-8 system using digits 0 through 7</li>
        <li>Each octal digit corresponds exactly to 3 binary bits</li>
        <li>Primary modern use is Unix/Linux file permissions (chmod)</li>
        <li>In programming, octal often uses a leading 0 (beware of this!)</li>
        <li>After 7 comes 10 in octal (digits 8 and 9 do not exist)</li>
        <li>Historically important but largely replaced by hexadecimal in modern computing</li>
        <li>Still appears in legacy systems and specific applications</li>
      </ul>
    </div>
  </div>
);

export default OctalSystem;
