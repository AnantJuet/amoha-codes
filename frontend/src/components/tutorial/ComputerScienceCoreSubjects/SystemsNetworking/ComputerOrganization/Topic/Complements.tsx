import React from 'react';

const Complements: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      1's and 2's Complement
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Complements are used in digital computers to simplify subtraction operations and represent
      negative numbers. There are two types of complements for each radix (base) system: the radix
      complement and the diminished radix complement. For binary systems, these are the 2's complement
      and 1's complement respectively.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Complements</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Number System</th>
            <th className="p-3 border">Radix Complement</th>
            <th className="p-3 border">Diminished Radix Complement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary (Base 2)</td>
            <td className="p-3 border">2's Complement</td>
            <td className="p-3 border">1's Complement</td>
          </tr>
          <tr>
            <td className="p-3 border">Decimal (Base 10)</td>
            <td className="p-3 border">10's Complement</td>
            <td className="p-3 border">9's Complement</td>
          </tr>
          <tr>
            <td className="p-3 border">Octal (Base 8)</td>
            <td className="p-3 border">8's Complement</td>
            <td className="p-3 border">7's Complement</td>
          </tr>
          <tr>
            <td className="p-3 border">Hexadecimal (Base 16)</td>
            <td className="p-3 border">16's Complement</td>
            <td className="p-3 border">15's Complement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1's Complement</h2>
    <p className="leading-relaxed">
      The 1's complement of a binary number is obtained by inverting (flipping) all the bits.
      Each 0 becomes 1, and each 1 becomes 0. Mathematically, for an n-bit number N:
    </p>
    <p className="font-mono bg-gray-100 text-gray-900 p-2 rounded mt-2 text-gray-900">
      1's Complement = (2^n - 1) - N
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`1's Complement Examples:

Example 1: Find 1's complement of 1010 (4-bit)
  Original:     1 0 1 0
  Invert each:  0 1 0 1
  1's Comp:     0 1 0 1

Example 2: Find 1's complement of 11001010 (8-bit)
  Original:     1 1 0 0 1 0 1 0
  Invert each:  0 0 1 1 0 1 0 1
  1's Comp:     0 0 1 1 0 1 0 1

Example 3: Find 1's complement of 0000 (4-bit)
  Original:     0 0 0 0
  Invert each:  1 1 1 1
  1's Comp:     1 1 1 1  (This is -0 in 1's complement)

Visualization:
  +----+----+----+----+----+----+----+----+
  | 1  | 0  | 1  | 1  | 0  | 0  | 1  | 0  |  Original
  +----+----+----+----+----+----+----+----+
    ↓    ↓    ↓    ↓    ↓    ↓    ↓    ↓    XOR with 1
  +----+----+----+----+----+----+----+----+
  | 0  | 1  | 0  | 0  | 1  | 1  | 0  | 1  |  1's Complement
  +----+----+----+----+----+----+----+----+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Subtraction Using 1's Complement</h3>
    <p className="leading-relaxed">
      To subtract B from A (A - B), we add A to the 1's complement of B. If there is a carry out
      from the MSB, we add it back to the result (end-around carry).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Subtraction Using 1's Complement:

Example: 7 - 3 = 4 (using 4-bit numbers)

  A = 7 = 0111
  B = 3 = 0011
  1's complement of B = 1100

  Step 1: Add A + 1's complement of B
      0111
    + 1100
    ------
    1 0011  (carry out = 1)

  Step 2: End-around carry (add carry to result)
      0011
    +    1
    ------
      0100 = 4 (correct answer!)

Example: 3 - 7 = -4 (using 4-bit numbers)

  A = 3 = 0011
  B = 7 = 0111
  1's complement of B = 1000

  Step 1: Add A + 1's complement of B
      0011
    + 1000
    ------
      1011  (no carry out)

  Step 2: No carry, so result is negative
          Take 1's complement of result: 0100
          Answer = -4 (negative of 0100)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2's Complement</h2>
    <p className="leading-relaxed">
      The 2's complement is obtained by adding 1 to the 1's complement of a number. Alternatively,
      it can be found by copying bits from right until the first 1 (inclusive), then inverting
      remaining bits. Mathematically, for an n-bit number N:
    </p>
    <p className="font-mono bg-gray-100 text-gray-900 p-2 rounded mt-2 text-gray-900">
      2's Complement = (2^n) - N = 1's Complement + 1
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2's Complement Examples:

Method 1: Invert all bits and add 1

Example 1: Find 2's complement of 1010 (4-bit)
  Original:         1 0 1 0
  1's Complement:   0 1 0 1
  Add 1:          +       1
                  ---------
  2's Complement:   0 1 1 0

Example 2: Find 2's complement of 00101100 (8-bit)
  Original:         0 0 1 0 1 1 0 0
  1's Complement:   1 1 0 1 0 0 1 1
  Add 1:          +               1
                  -----------------
  2's Complement:   1 1 0 1 0 1 0 0

Method 2: Shortcut Method (Right to Left)
- Copy all bits from right until you encounter the first '1' (include it)
- Invert all remaining bits to the left

Example: Find 2's complement of 10110100
  Original:      1 0 1 1 0 1 0 0
                         ↑_____↑
                         copy  (including first 1 from right)
  Result:        0 1 0 0 1 1 0 0
                 ↑_____↑
                 inverted

Verification:
  Original:    10110100
  +2's Comp:   01001100
               --------
  Sum:        100000000 = 2^8 (correct!)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Subtraction Using 2's Complement</h3>
    <p className="leading-relaxed">
      To subtract B from A (A - B), we add A to the 2's complement of B. Any carry out from the
      MSB is discarded. This is simpler than 1's complement as there's no end-around carry.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Subtraction Using 2's Complement:

Example 1: 7 - 3 = 4 (using 4-bit numbers)

  A = 7 = 0111
  B = 3 = 0011
  2's complement of B = 1101

  Add A + 2's complement of B:
      0111
    + 1101
    ------
    1 0100  (discard carry)

  Result: 0100 = 4 (correct!)

Example 2: 3 - 7 = -4 (using 4-bit numbers)

  A = 3 = 0011
  B = 7 = 0111
  2's complement of B = 1001

  Add A + 2's complement of B:
      0011
    + 1001
    ------
      1100  (no carry = negative result)

  1100 in 2's complement = -4
  (2's complement of 1100 = 0100 = 4, so 1100 = -4)

Example 3: 15 - 10 = 5 (using 8-bit numbers)

  A = 15  = 00001111
  B = 10  = 00001010
  2's comp of B = 11110110

      00001111
    + 11110110
    ----------
    1 00000101  (discard carry)

  Result: 00000101 = 5 (correct!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: 1's vs 2's Complement</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">1's Complement</th>
            <th className="p-3 border">2's Complement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Calculation</td>
            <td className="p-3 border">Invert all bits</td>
            <td className="p-3 border">Invert all bits + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">Zero Representation</td>
            <td className="p-3 border">Two (+0 and -0)</td>
            <td className="p-3 border">One (only 0)</td>
          </tr>
          <tr>
            <td className="p-3 border">Range (n bits)</td>
            <td className="p-3 border">-(2^(n-1)-1) to +(2^(n-1)-1)</td>
            <td className="p-3 border">-2^(n-1) to +(2^(n-1)-1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Subtraction</td>
            <td className="p-3 border">Requires end-around carry</td>
            <td className="p-3 border">Discard carry (simpler)</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Additional logic for carry</td>
            <td className="p-3 border">Simpler implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">Usage</td>
            <td className="p-3 border">Rarely used today</td>
            <td className="p-3 border">Standard in modern computers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Cases in 2's Complement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Special Cases:

1. 2's Complement of 0:
   0000 → 1111 + 1 = 10000 → 0000 (overflow discarded)
   Result: 0 (negative zero doesn't exist)

2. 2's Complement of the most negative number:
   For 4-bit: -8 = 1000
   1000 → 0111 + 1 = 1000
   Result: Same number! (This is an anomaly)

   Explanation: In 4-bit 2's complement, -8 has no positive counterpart
   Range is -8 to +7, so +8 cannot be represented

3. Finding the value of a 2's complement number:
   If MSB = 0: Number is positive, read directly
   If MSB = 1: Number is negative, take 2's comp to find magnitude

   Example: 1101 (4-bit)
   MSB = 1 (negative)
   2's complement: 0010 + 1 = 0011 = 3
   Therefore, 1101 = -3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Overflow in 2's Complement</h2>
    <p className="leading-relaxed">
      Overflow occurs when the result of an arithmetic operation is too large to be represented
      in the given number of bits. For 2's complement:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Overflow when adding two positive numbers gives a negative result</li>
      <li>Overflow when adding two negative numbers gives a positive result</li>
      <li>Overflow does NOT occur when adding numbers with opposite signs</li>
      <li>Detection: Overflow = Carry-in to MSB XOR Carry-out from MSB</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>1's complement: Invert all bits (simple but has -0 problem)</li>
        <li>2's complement: Invert all bits and add 1 (preferred method)</li>
        <li>2's complement allows subtraction using addition hardware</li>
        <li>2's complement has only one representation for zero</li>
        <li>Overflow can occur when adding same-sign numbers</li>
        <li>Most modern computers use 2's complement exclusively</li>
        <li>Shortcut for 2's complement: copy bits from right until first 1, then invert rest</li>
      </ul>
    </div>
  </div>
);

export default Complements;
