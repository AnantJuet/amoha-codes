import React from 'react';

const SignedNumbers: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Signed Number Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In computer systems, numbers can be either positive or negative. Signed number representation
      is a method used to represent both positive and negative integers in binary form. Understanding
      how computers handle signed numbers is crucial for programming, computer architecture, and
      digital circuit design.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Signed Number Representation?</h2>
    <p className="leading-relaxed">
      Computers can only store binary digits (0s and 1s). To represent negative numbers, we need
      a convention that allows us to distinguish between positive and negative values while still
      using only binary representation. The most significant bit (MSB) is typically used to indicate
      the sign of the number.
    </p>

    <h2 className="text-3xl font-bold mt-8">Methods of Signed Number Representation</h2>
    <p className="leading-relaxed">
      There are three primary methods for representing signed integers in binary:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Sign-Magnitude Representation</h3>
    <p className="leading-relaxed">
      In sign-magnitude representation, the leftmost bit (MSB) represents the sign, and the remaining
      bits represent the magnitude (absolute value) of the number.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Sign bit = 0: Positive number</li>
      <li>Sign bit = 1: Negative number</li>
      <li>Remaining bits: Magnitude of the number</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Sign-Magnitude Representation (8-bit):

  +25 in binary:
  +----+----+----+----+----+----+----+----+
  | 0  | 0  | 0  | 1  | 1  | 0  | 0  | 1  |
  +----+----+----+----+----+----+----+----+
    ^    |__________|___________________|
  Sign              Magnitude (25)
  (positive)

  -25 in binary:
  +----+----+----+----+----+----+----+----+
  | 1  | 0  | 0  | 1  | 1  | 0  | 0  | 1  |
  +----+----+----+----+----+----+----+----+
    ^    |__________|___________________|
  Sign              Magnitude (25)
  (negative)

Range for n-bit sign-magnitude: -(2^(n-1) - 1) to +(2^(n-1) - 1)
For 8-bit: -127 to +127`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. 1's Complement Representation</h3>
    <p className="leading-relaxed">
      In 1's complement, negative numbers are represented by inverting (flipping) all the bits
      of the corresponding positive number. This method is simple but has some limitations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`1's Complement Representation (8-bit):

  +25 = 0 0 0 1 1 0 0 1

  To get -25, invert all bits:
  -25 = 1 1 1 0 0 1 1 0

  Verification:
  +25: 0 0 0 1 1 0 0 1  (original)
  -25: 1 1 1 0 0 1 1 0  (all bits inverted)
       _______________
  Sum: 1 1 1 1 1 1 1 1  (all 1s = -0 in 1's complement)

Range for n-bit 1's complement: -(2^(n-1) - 1) to +(2^(n-1) - 1)
For 8-bit: -127 to +127

Note: Two representations for zero (+0 and -0)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. 2's Complement Representation</h3>
    <p className="leading-relaxed">
      2's complement is the most widely used method for representing signed integers in modern
      computers. It is obtained by adding 1 to the 1's complement of a number. This method has
      only one representation for zero and simplifies arithmetic operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2's Complement Representation (8-bit):

  +25 = 0 0 0 1 1 0 0 1

  To get -25:
  Step 1: Take 1's complement (invert all bits)
          1 1 1 0 0 1 1 0
  Step 2: Add 1
          1 1 1 0 0 1 1 0
        +               1
          _______________
  -25   = 1 1 1 0 0 1 1 1

  Alternative method (shortcut):
  - Start from the rightmost bit
  - Copy all bits until you find the first '1' (including that '1')
  - Invert all remaining bits to the left

  +25: 0 0 0 1 1 0 0 1
  -25: 1 1 1 0 0 1 1 1
       ↑_____↑ ↑___↑
       inverted copied

Range for n-bit 2's complement: -2^(n-1) to +(2^(n-1) - 1)
For 8-bit: -128 to +127

Note: Only ONE representation for zero`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Decimal</th>
            <th className="p-3 border">Sign-Magnitude</th>
            <th className="p-3 border">1's Complement</th>
            <th className="p-3 border">2's Complement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">+7</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">0111</td>
            <td className="p-3 border">0111</td>
          </tr>
          <tr>
            <td className="p-3 border">+6</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">0110</td>
            <td className="p-3 border">0110</td>
          </tr>
          <tr>
            <td className="p-3 border">+1</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">0001</td>
            <td className="p-3 border">0001</td>
          </tr>
          <tr>
            <td className="p-3 border">+0</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0000</td>
            <td className="p-3 border">0000</td>
          </tr>
          <tr>
            <td className="p-3 border">-0</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">1111</td>
            <td className="p-3 border">N/A</td>
          </tr>
          <tr>
            <td className="p-3 border">-1</td>
            <td className="p-3 border">1001</td>
            <td className="p-3 border">1110</td>
            <td className="p-3 border">1111</td>
          </tr>
          <tr>
            <td className="p-3 border">-7</td>
            <td className="p-3 border">1111</td>
            <td className="p-3 border">1000</td>
            <td className="p-3 border">1001</td>
          </tr>
          <tr>
            <td className="p-3 border">-8</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">1000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Range Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Range (n bits)</th>
            <th className="p-3 border">8-bit Range</th>
            <th className="p-3 border">Zero Representations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sign-Magnitude</td>
            <td className="p-3 border">-(2^(n-1)-1) to +(2^(n-1)-1)</td>
            <td className="p-3 border">-127 to +127</td>
            <td className="p-3 border">Two (+0, -0)</td>
          </tr>
          <tr>
            <td className="p-3 border">1's Complement</td>
            <td className="p-3 border">-(2^(n-1)-1) to +(2^(n-1)-1)</td>
            <td className="p-3 border">-127 to +127</td>
            <td className="p-3 border">Two (+0, -0)</td>
          </tr>
          <tr>
            <td className="p-3 border">2's Complement</td>
            <td className="p-3 border">-2^(n-1) to +(2^(n-1)-1)</td>
            <td className="p-3 border">-128 to +127</td>
            <td className="p-3 border">One (0)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sign-Magnitude</td>
            <td className="p-3 border">Easy to understand, simple negation</td>
            <td className="p-3 border">Two zeros, complex arithmetic circuits</td>
          </tr>
          <tr>
            <td className="p-3 border">1's Complement</td>
            <td className="p-3 border">Simple negation (just invert bits)</td>
            <td className="p-3 border">Two zeros, end-around carry needed</td>
          </tr>
          <tr>
            <td className="p-3 border">2's Complement</td>
            <td className="p-3 border">Single zero, simple arithmetic, most efficient</td>
            <td className="p-3 border">Slightly complex negation, asymmetric range</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why 2's Complement is Preferred</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Single Zero:</strong> Only one representation for zero, eliminating ambiguity
      </li>
      <li>
        <strong>Simple Arithmetic:</strong> Addition and subtraction use the same circuit
      </li>
      <li>
        <strong>Overflow Detection:</strong> Easy to detect using carry-in and carry-out of MSB
      </li>
      <li>
        <strong>Hardware Efficiency:</strong> Same adder circuit works for both signed and unsigned
      </li>
      <li>
        <strong>Industry Standard:</strong> Used in virtually all modern computer systems
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Signed numbers include both positive and negative integers</li>
        <li>The MSB (leftmost bit) typically indicates the sign</li>
        <li>Three main methods: Sign-Magnitude, 1's Complement, 2's Complement</li>
        <li>2's complement is the most widely used method in modern computers</li>
        <li>2's complement has only one zero and simplifies arithmetic operations</li>
        <li>For n bits, 2's complement range is -2^(n-1) to 2^(n-1)-1</li>
      </ul>
    </div>
  </div>
);

export default SignedNumbers;
