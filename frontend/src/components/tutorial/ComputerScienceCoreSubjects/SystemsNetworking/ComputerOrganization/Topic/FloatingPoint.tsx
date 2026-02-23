import React from 'react';

const FloatingPoint: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Floating Point Representation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Floating point representation is a method of encoding real numbers that supports a wide
      range of values. Unlike fixed point, the decimal point can "float" to any position,
      allowing representation of both very large and very small numbers. This is achieved
      by storing a number in scientific notation form.
    </p>

    <h2 className="text-3xl font-bold mt-8">Scientific Notation Review</h2>
    <p className="leading-relaxed">
      Floating point representation is based on scientific notation, which expresses numbers
      in the form: mantissa x base^exponent
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Scientific Notation Examples:

Decimal (Base 10):
  123.45    = 1.2345 × 10²
  0.00567   = 5.67 × 10⁻³
  -98765    = -9.8765 × 10⁴

Binary (Base 2):
  1011.01   = 1.01101 × 2³
  0.00101   = 1.01 × 2⁻³
  11100     = 1.11 × 2⁴

General Form:
  Number = (-1)^S × M × B^E

  S = Sign (0 for positive, 1 for negative)
  M = Mantissa (Significand)
  B = Base (2 for binary)
  E = Exponent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Floating Point Format</h2>
    <p className="leading-relaxed">
      A floating point number is stored in three parts: sign bit, exponent, and mantissa
      (also called significand or fraction).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Floating Point Number Structure:

+------+---------------+---------------------------+
| Sign |   Exponent    |        Mantissa           |
+------+---------------+---------------------------+
   1        k bits              n bits
  bit

Value = (-1)^Sign × 1.Mantissa × 2^(Exponent - Bias)

Components:
- Sign (1 bit): 0 = positive, 1 = negative
- Exponent (k bits): Stored with a bias for handling negative exponents
- Mantissa (n bits): The fractional part after the implicit leading 1

Bias = 2^(k-1) - 1
  For 8-bit exponent: Bias = 2^7 - 1 = 127
  For 11-bit exponent: Bias = 2^10 - 1 = 1023`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Normalization</h2>
    <p className="leading-relaxed">
      In normalized form, the binary number is adjusted so that there is exactly one non-zero
      digit (1) before the binary point. Since this leading 1 is always present in normalized
      numbers, it is not stored explicitly (called the "hidden bit" or "implicit bit").
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Normalization Examples:

Example 1: Normalize 1101.101
  1101.101 = 1.101101 × 2³

  Mantissa stored: 101101 (leading 1 is implicit)
  Exponent: 3 (stored as 3 + bias)

Example 2: Normalize 0.00101
  0.00101 = 1.01 × 2⁻³

  Mantissa stored: 01 (leading 1 is implicit)
  Exponent: -3 (stored as -3 + bias)

Example 3: Normalize 110010
  110010 = 1.10010 × 2⁵

  Mantissa stored: 10010 (leading 1 is implicit)
  Exponent: 5 (stored as 5 + bias)

The Hidden Bit Advantage:
+---------------------------+
|     Stored: 0 1 0 1 1     |  5 bits
+---------------------------+
|  Actual: 1.0 1 0 1 1      |  6 bits of precision
+---------------------------+
     ↑
  Hidden bit (always 1 for normalized)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Biased Exponent</h2>
    <p className="leading-relaxed">
      The exponent is stored using a bias to allow representation of both positive and negative
      exponents without a separate sign bit. The actual exponent is obtained by subtracting
      the bias from the stored value.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Biased Exponent:

Stored Exponent = Actual Exponent + Bias

Example with 8-bit exponent (Bias = 127):

  Actual Exponent  |  Stored Value
  -----------------+---------------
       -126        |      1
       -10         |    117
        -1         |    126
         0         |    127
        +1         |    128
        +10        |    137
       +127        |    254

Why use Bias?
1. Simplifies comparison of floating point numbers
2. Allows comparison as unsigned integers
3. Easy detection of underflow (stored = 0)
4. Easy detection of overflow (stored = all 1s)

Reserved Values:
  Stored = 0     → Denormalized numbers or zero
  Stored = 255   → Infinity or NaN (for 8-bit exponent)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting Decimal to Floating Point</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Conversion Example: Convert -13.625 to 32-bit floating point

Step 1: Determine the sign
  Number is negative → Sign bit = 1

Step 2: Convert absolute value to binary
  13 = 1101 (integer part)
  0.625:
    0.625 × 2 = 1.25 → 1
    0.25  × 2 = 0.5  → 0
    0.5   × 2 = 1.0  → 1
  0.625 = 0.101

  13.625 = 1101.101

Step 3: Normalize
  1101.101 = 1.101101 × 2³

  Actual exponent = 3

Step 4: Calculate biased exponent (8-bit, bias = 127)
  Stored exponent = 3 + 127 = 130 = 10000010

Step 5: Determine mantissa (23 bits)
  Mantissa = 101101 (pad with zeros to 23 bits)
           = 10110100000000000000000

Step 6: Combine
  Sign:     1
  Exponent: 10000010
  Mantissa: 10110100000000000000000

  Final: 1 10000010 10110100000000000000000
         = C1 5A 00 00 (hexadecimal)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting Floating Point to Decimal</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Conversion Example: Convert 0 10000100 01100000000000000000000 to decimal

Step 1: Extract components
  Sign = 0 (positive)
  Exponent = 10000100 = 132
  Mantissa = 01100000000000000000000

Step 2: Calculate actual exponent
  Actual exponent = 132 - 127 = 5

Step 3: Reconstruct the binary number
  1.Mantissa = 1.011
  × 2⁵ = 101100.0 = 44

Step 4: Apply sign
  Sign = 0 → Positive
  Result = +44

Verification:
  44 = 101100 binary
  Normalized: 1.01100 × 2⁵
  Exponent: 5 + 127 = 132 = 10000100 ✓
  Mantissa: 01100... ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Values</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Sign</th>
            <th className="p-3 border">Exponent</th>
            <th className="p-3 border">Mantissa</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">+0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">00000000</td>
            <td className="p-3 border">00...00</td>
          </tr>
          <tr>
            <td className="p-3 border">-0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">00000000</td>
            <td className="p-3 border">00...00</td>
          </tr>
          <tr>
            <td className="p-3 border">+Infinity</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">11111111</td>
            <td className="p-3 border">00...00</td>
          </tr>
          <tr>
            <td className="p-3 border">-Infinity</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">11111111</td>
            <td className="p-3 border">00...00</td>
          </tr>
          <tr>
            <td className="p-3 border">NaN (Not a Number)</td>
            <td className="p-3 border">x</td>
            <td className="p-3 border">11111111</td>
            <td className="p-3 border">non-zero</td>
          </tr>
          <tr>
            <td className="p-3 border">Denormalized</td>
            <td className="p-3 border">x</td>
            <td className="p-3 border">00000000</td>
            <td className="p-3 border">non-zero</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Denormalized Numbers</h2>
    <p className="leading-relaxed">
      Denormalized (or subnormal) numbers allow representation of values smaller than the
      smallest normalized number. They have an exponent of all zeros and no implicit leading 1.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Denormalized Numbers:

For denormalized numbers:
  Value = (-1)^Sign × 0.Mantissa × 2^(1-Bias)

  - No implicit leading 1
  - Exponent field is 0
  - Actual exponent = 1 - Bias (constant)

Purpose:
  - Gradual underflow (prevents sudden jump to zero)
  - Fill the gap between 0 and smallest normalized number

Example (32-bit):
  Smallest normalized: 1.0 × 2^-126 ≈ 1.18 × 10^-38
  Smallest denormalized: 2^-23 × 2^-126 = 2^-149 ≈ 1.4 × 10^-45`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Floating Point vs Fixed Point</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Fixed Point</th>
            <th className="p-3 border">Floating Point</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Very large</td>
          </tr>
          <tr>
            <td className="p-3 border">Precision</td>
            <td className="p-3 border">Constant</td>
            <td className="p-3 border">Varies with magnitude</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Faster</td>
            <td className="p-3 border">Slower</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Uses integer ALU</td>
            <td className="p-3 border">Requires FPU</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Floating point represents numbers in scientific notation (sign, exponent, mantissa)</li>
        <li>The exponent is stored with a bias to handle negative values</li>
        <li>Normalized numbers have an implicit leading 1 (hidden bit)</li>
        <li>Special values include zero, infinity, NaN, and denormalized numbers</li>
        <li>Floating point can represent a much larger range than fixed point</li>
        <li>Precision varies: higher precision near 0, lower for large numbers</li>
        <li>Rounding errors can occur due to finite precision</li>
      </ul>
    </div>
  </div>
);

export default FloatingPoint;
