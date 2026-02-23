import React from 'react';

const NumberSystems: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Number Systems in Computer Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A number system is a method of representing numerical values using a specific set of symbols
      and rules. In computer organization, understanding number systems is fundamental because
      computers process and store all information in binary form. Different number systems serve
      various purposes in computing, from machine-level operations to human-readable representations.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Number System?</h2>
    <p className="leading-relaxed">
      A number system defines a set of values used to represent quantity. It is characterized by
      its base (or radix), which determines the number of unique digits used and the positional
      value of each digit. The base indicates how many distinct symbols are available to represent
      numbers before needing to use multiple digit positions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Number System Structure:

Each digit's value = (digit) x (base)^(position)

Example: 5247 in decimal (base 10)

Position:     3      2      1      0
Digit:        5      2      4      7
Value:     5x10^3 + 2x10^2 + 4x10^1 + 7x10^0
         = 5000   + 200    + 40     + 7
         = 5247

General Formula: N = d(n-1) x b^(n-1) + ... + d(1) x b^1 + d(0) x b^0

Where:
  N = numerical value
  d = digit at each position
  b = base of the number system
  n = number of digits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Number Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Number System</th>
            <th className="p-3 border">Base</th>
            <th className="p-3 border">Digits Used</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0, 1</td>
            <td className="p-3 border">(1011)₂</td>
          </tr>
          <tr>
            <td className="p-3 border">Octal</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">0, 1, 2, 3, 4, 5, 6, 7</td>
            <td className="p-3 border">(752)₈</td>
          </tr>
          <tr>
            <td className="p-3 border">Decimal</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">0, 1, 2, 3, 4, 5, 6, 7, 8, 9</td>
            <td className="p-3 border">(945)₁₀</td>
          </tr>
          <tr>
            <td className="p-3 border">Hexadecimal</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">0-9, A, B, C, D, E, F</td>
            <td className="p-3 border">(2AF)₁₆</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Different Number Systems?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Purpose of Different Number Systems in Computing:

+------------------+     +------------------+     +------------------+
|     BINARY       |     |      OCTAL       |     |   HEXADECIMAL    |
|    (Base 2)      |     |    (Base 8)      |     |    (Base 16)     |
+------------------+     +------------------+     +------------------+
|                  |     |                  |     |                  |
| Hardware level   |     | File permissions |     | Memory addresses |
| Digital circuits |     | Compact binary   |     | Color codes      |
| Machine code     |     | representation   |     | MAC addresses    |
| Memory cells     |     | UNIX systems     |     | Assembly coding  |
|                  |     |                  |     |                  |
+------------------+     +------------------+     +------------------+
         |                        |                        |
         +------------------------+------------------------+
                                  |
                      +------------------+
                      |     DECIMAL      |
                      |    (Base 10)     |
                      +------------------+
                      | Human interface  |
                      | User input/output|
                      | Everyday math    |
                      +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Positional vs Non-Positional Systems</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Positional Number Systems:</strong> The value of a digit depends on its position
        in the number. Binary, octal, decimal, and hexadecimal are all positional systems.
        The same digit can represent different values based on where it appears.
      </li>
      <li>
        <strong>Non-Positional Number Systems:</strong> Each symbol represents a fixed value
        regardless of position. Roman numerals (I, V, X, L, C, D, M) are an example where
        symbols have fixed values that are added or subtracted based on arrangement.
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Positional vs Non-Positional Comparison:

Positional (Decimal):
  Number: 555
  - First 5 = 5 x 10^2 = 500
  - Second 5 = 5 x 10^1 = 50
  - Third 5 = 5 x 10^0 = 5
  Same digit, different values!

Non-Positional (Roman):
  Number: XXX
  - Each X = 10
  - Total = 10 + 10 + 10 = 30
  Same symbol, same value!

  Number: IV vs VI
  - IV = 5 - 1 = 4 (subtraction rule)
  - VI = 5 + 1 = 6 (addition rule)
  Position affects calculation, not individual value`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship Between Number Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">Binary</th>
            <th className="p-3 border">Octal</th>
            <th className="p-3 border">Hexadecimal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">0010</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">0011</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">0100</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">0101</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">5</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">6</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">7</td>
          </tr>
          <tr>
            <td className="p-3 border">8</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">8</td>
          </tr>
          <tr>
            <td className="p-3 border">9</td>
            <td className="p-3 border">1001</td>
            <td className="p-3 border">11</td>
            <td className="p-3 border">9</td>
          </tr>
          <tr>
            <td className="p-3 border">10</td>
            <td className="p-3 border">1010</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">A</td>
          </tr>
          <tr>
            <td className="p-3 border">11</td>
            <td className="p-3 border">1011</td>
            <td className="p-3 border">13</td>
            <td className="p-3 border">B</td>
          </tr>
          <tr>
            <td className="p-3 border">12</td>
            <td className="p-3 border">1100</td>
            <td className="p-3 border">14</td>
            <td className="p-3 border">C</td>
          </tr>
          <tr>
            <td className="p-3 border">13</td>
            <td className="p-3 border">1101</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">D</td>
          </tr>
          <tr>
            <td className="p-3 border">14</td>
            <td className="p-3 border">1110</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">E</td>
          </tr>
          <tr>
            <td className="p-3 border">15</td>
            <td className="p-3 border">1111</td>
            <td className="p-3 border">17</td>
            <td className="p-3 border">F</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications in Computing</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Binary:</strong> Used internally by computers for all operations. Digital circuits
        operate on two voltage levels representing 0 and 1.
      </li>
      <li>
        <strong>Octal:</strong> Historically used in older computer systems. Still used in UNIX/Linux
        for file permissions (chmod 755).
      </li>
      <li>
        <strong>Decimal:</strong> Primary system for human interaction with computers. Used in
        user interfaces and everyday calculations.
      </li>
      <li>
        <strong>Hexadecimal:</strong> Widely used in programming for memory addresses, color codes
        (HTML/CSS), debugging, and representing binary data compactly.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Notation Conventions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Common ways to denote number systems:

Subscript Notation:
  Binary:      (1010)₂
  Octal:       (52)₈
  Decimal:     (42)₁₀
  Hexadecimal: (2A)₁₆

Prefix Notation (Programming):
  Binary:      0b1010  or  1010b
  Octal:       052     or  0o52
  Hexadecimal: 0x2A    or  2Ah

Suffix Notation:
  Binary:      1010B
  Octal:       52O or 52Q
  Hexadecimal: 2AH`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Number systems are characterized by their base (radix) which determines available digits</li>
        <li>Computers internally use binary (base 2) because of digital circuit design</li>
        <li>Hexadecimal and octal serve as compact representations of binary numbers</li>
        <li>Positional notation means the same digit can have different values based on position</li>
        <li>Converting between number systems is essential for computer programming</li>
        <li>Each number system has specific applications in computing and programming</li>
      </ul>
    </div>
  </div>
);

export default NumberSystems;
