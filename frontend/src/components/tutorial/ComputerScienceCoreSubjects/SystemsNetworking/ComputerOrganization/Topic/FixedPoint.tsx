import React from 'react';

const FixedPoint: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fixed Point Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fixed point representation is a method of storing numbers that have a fractional component
      in computers. Unlike floating point, fixed point numbers have a predetermined and constant
      number of digits before and after the radix point (decimal/binary point). This makes
      arithmetic operations faster and more predictable.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Fixed Point?</h2>
    <p className="leading-relaxed">
      In fixed point representation, the position of the binary point is fixed (implicitly assumed)
      at a specific location within the number. The bits to the left of the binary point represent
      the integer part, and the bits to the right represent the fractional part.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fixed Point Number Format:

For an n-bit number with m bits for integer and f bits for fraction (n = m + f):

+---+---+---+---+---+---+---+---+
| i | i | i | i | . | f | f | f |
+---+---+---+---+---+---+---+---+
  ↑_________↑   ↑   ↑_______↑
  Integer Part  Binary  Fractional Part
  (m bits)      Point   (f bits)
                (implied, not stored)

Example: 8-bit fixed point with 4.4 format (4 integer, 4 fraction bits)

  Binary: 0101.1100

  Integer part:  0101 = 0×2³ + 1×2² + 0×2¹ + 1×2⁰ = 5
  Fraction part: 1100 = 1×2⁻¹ + 1×2⁻² + 0×2⁻³ + 0×2⁻⁴
                      = 0.5 + 0.25 + 0 + 0 = 0.75

  Total value: 5.75`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fixed Point Formats</h2>
    <p className="leading-relaxed">
      Fixed point formats are often described using notation like Qm.f or m.f, where m is the
      number of integer bits and f is the number of fractional bits.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Total Bits</th>
            <th className="p-3 border">Range (Unsigned)</th>
            <th className="p-3 border">Resolution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Q8.0 (8.0)</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">0 to 255</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">Q4.4 (4.4)</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">0 to 15.9375</td>
            <td className="p-3 border">0.0625 (1/16)</td>
          </tr>
          <tr>
            <td className="p-3 border">Q8.8 (8.8)</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">0 to 255.996</td>
            <td className="p-3 border">0.00391 (1/256)</td>
          </tr>
          <tr>
            <td className="p-3 border">Q16.16 (16.16)</td>
            <td className="p-3 border">32</td>
            <td className="p-3 border">0 to 65535.999985</td>
            <td className="p-3 border">0.0000153</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion: Decimal to Fixed Point</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Decimal to Fixed Point:

Example 1: Convert 6.625 to Q4.4 format

Step 1: Convert integer part (6)
  6 ÷ 2 = 3 remainder 0
  3 ÷ 2 = 1 remainder 1
  1 ÷ 2 = 0 remainder 1
  Integer: 0110 (reading remainders bottom-up)

Step 2: Convert fractional part (0.625)
  0.625 × 2 = 1.25  → 1
  0.25  × 2 = 0.5   → 0
  0.5   × 2 = 1.0   → 1
  0.0   × 2 = 0.0   → 0
  Fraction: 1010 (reading top-down)

Step 3: Combine
  6.625 = 0110.1010 in Q4.4

Example 2: Convert 3.7 to Q4.4 format

Step 1: Integer part (3) = 0011

Step 2: Fractional part (0.7)
  0.7 × 2 = 1.4  → 1
  0.4 × 2 = 0.8  → 0
  0.8 × 2 = 1.6  → 1
  0.6 × 2 = 1.2  → 1
  Fraction: 1011 (approximation, 0.6875 ≈ 0.7)

Step 3: Combine
  3.7 ≈ 0011.1011 = 3.6875 (slight error due to finite precision)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion: Fixed Point to Decimal</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Converting Fixed Point to Decimal:

Example: Convert 1010.0110 (Q4.4) to decimal

Method 1: Direct Calculation
  Integer part: 1010
    = 1×2³ + 0×2² + 1×2¹ + 0×2⁰
    = 8 + 0 + 2 + 0 = 10

  Fractional part: 0110
    = 0×2⁻¹ + 1×2⁻² + 1×2⁻³ + 0×2⁻⁴
    = 0 + 0.25 + 0.125 + 0
    = 0.375

  Result: 10.375

Method 2: Using Scaling Factor
  Fixed point value as integer: 10100110 = 166
  Scaling factor: 2⁴ = 16 (since 4 fractional bits)

  Decimal value = 166 / 16 = 10.375

Formula: Decimal = (Fixed Point Integer) / 2^f
  where f = number of fractional bits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Signed Fixed Point</h2>
    <p className="leading-relaxed">
      Signed fixed point numbers typically use 2's complement representation for the entire number,
      including both integer and fractional parts.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Signed Fixed Point Representation:

For Q4.4 signed format:
+---+---+---+---+---+---+---+---+
| s | i | i | i | . | f | f | f |
+---+---+---+---+---+---+---+---+
  ↑   ↑_____↑       ↑_______↑
Sign  Integer       Fractional
      (3 bits)      (4 bits)

Range: -8.0 to +7.9375

Example: Represent -3.25 in Q4.4 signed

Step 1: Represent +3.25
  Integer: 3 = 011
  Fraction: 0.25 = 01
  +3.25 = 0011.0100

Step 2: Take 2's complement
  +3.25 = 00110100
  1's comp = 11001011
  +1       = 11001100

  -3.25 = 1100.1100

Verification:
  1100.1100 = -8 + 4 + 0.5 + 0.25 = -3.25 ✓
  (MSB has weight -8 in 2's complement)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fixed Point Arithmetic</h2>

    <h3 className="text-2xl font-semibold mt-6">Addition and Subtraction</h3>
    <p className="leading-relaxed">
      For fixed point numbers with the same format, addition and subtraction work just like
      integer operations - simply add or subtract the bit patterns.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fixed Point Addition (Q4.4):

Example: 5.25 + 3.5

  5.25 = 0101.0100
  3.5  = 0011.1000
  _______________
  Sum  = 1000.1100 = 8.75 ✓

Fixed Point Subtraction (Q4.4):

Example: 7.5 - 2.25

  7.5  = 0111.1000
  2.25 = 0010.0100
  _______________
  Diff = 0101.0100 = 5.25 ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Multiplication</h3>
    <p className="leading-relaxed">
      When multiplying two fixed point numbers, the product has a binary point position equal
      to the sum of the fractional bits of both operands. The result needs to be adjusted.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fixed Point Multiplication:

If A has f1 fractional bits and B has f2 fractional bits:
Product has (f1 + f2) fractional bits

Example: 2.5 × 1.5 (both Q4.4)

  2.5 = 0010.1000 = 40 (as integer)
  1.5 = 0001.1000 = 24 (as integer)

  Product (integer): 40 × 24 = 960

  Product has 8 fractional bits (4 + 4)
  To get Q4.4 result: shift right by 4 bits (or divide by 16)

  960 / 16 = 60 = 0011.1100 = 3.75 ✓

Alternative: Keep full precision
  960 in 16-bit with 8 fractional bits = 0000 0011.1100 0000
  Binary point after 8 bits from right: 3.75`}
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
            <td className="p-3 border">Faster arithmetic operations</td>
            <td className="p-3 border">Limited range of values</td>
          </tr>
          <tr>
            <td className="p-3 border">Uses integer ALU (no FPU needed)</td>
            <td className="p-3 border">Fixed precision (cannot adapt)</td>
          </tr>
          <tr>
            <td className="p-3 border">Consistent precision</td>
            <td className="p-3 border">Overflow can occur more easily</td>
          </tr>
          <tr>
            <td className="p-3 border">Lower power consumption</td>
            <td className="p-3 border">Programmer must track binary point</td>
          </tr>
          <tr>
            <td className="p-3 border">Deterministic timing</td>
            <td className="p-3 border">Cannot represent very large/small numbers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Fixed Point</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Digital Signal Processing (DSP):</strong> Audio, video, and image processing
        where speed is critical
      </li>
      <li>
        <strong>Embedded Systems:</strong> Microcontrollers without floating point hardware
      </li>
      <li>
        <strong>Game Development:</strong> Older consoles and performance-critical calculations
      </li>
      <li>
        <strong>Financial Systems:</strong> Currency calculations requiring exact decimal precision
      </li>
      <li>
        <strong>Real-time Systems:</strong> Applications requiring deterministic timing
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Fixed point has a fixed binary point position (implicit, not stored)</li>
        <li>Format notation: Qm.f where m = integer bits, f = fractional bits</li>
        <li>Resolution = 2^(-f), the smallest representable value</li>
        <li>Addition/subtraction: same as integer operations for same format</li>
        <li>Multiplication: result has (f1 + f2) fractional bits</li>
        <li>Faster and more power-efficient than floating point</li>
        <li>Limited range compared to floating point</li>
        <li>Widely used in DSP, embedded systems, and real-time applications</li>
      </ul>
    </div>
  </div>
);

export default FixedPoint;
