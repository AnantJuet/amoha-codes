import React from 'react';

const IEEE754: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      IEEE 754 Standard
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      IEEE 754 is the most widely used standard for floating point computation. Established by
      the Institute of Electrical and Electronics Engineers (IEEE) in 1985 and revised in 2008
      and 2019, it defines formats for representing floating point numbers, special values,
      rounding rules, and exception handling. Nearly all modern computers, programming languages,
      and hardware implementations follow this standard.
    </p>

    <h2 className="text-3xl font-bold mt-8">IEEE 754 Formats</h2>
    <p className="leading-relaxed">
      IEEE 754 defines several formats, with single precision (32-bit) and double precision
      (64-bit) being the most commonly used.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Total Bits</th>
            <th className="p-3 border">Sign</th>
            <th className="p-3 border">Exponent</th>
            <th className="p-3 border">Mantissa</th>
            <th className="p-3 border">Bias</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Half (binary16)</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">15</td>
          </tr>
          <tr>
            <td className="p-3 border">Single (binary32)</td>
            <td className="p-3 border">32</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">23</td>
            <td className="p-3 border">127</td>
          </tr>
          <tr>
            <td className="p-3 border">Double (binary64)</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">11</td>
            <td className="p-3 border">52</td>
            <td className="p-3 border">1023</td>
          </tr>
          <tr>
            <td className="p-3 border">Quadruple (binary128)</td>
            <td className="p-3 border">128</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">112</td>
            <td className="p-3 border">16383</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Single Precision (32-bit)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`IEEE 754 Single Precision Format:

Bit Layout:
+---+---+---+---+---+---+---+---+---+---+---+- - -+---+---+---+
|31 |30 |29 |28 |27 |26 |25 |24 |23 |22 |21 |     | 2 | 1 | 0 |
+---+---+---+---+---+---+---+---+---+---+---+- - -+---+---+---+
| S |      Exponent (8 bits)    |     Mantissa (23 bits)      |
+---+---------------------------+-----------------------------+

Value Calculation:
  Normalized:   (-1)^S × 1.Mantissa × 2^(Exponent - 127)
  Denormalized: (-1)^S × 0.Mantissa × 2^(-126)

Ranges:
  Smallest positive normalized:   2^-126 ≈ 1.175 × 10^-38
  Largest positive normalized:    (2 - 2^-23) × 2^127 ≈ 3.403 × 10^38
  Smallest positive denormalized: 2^-149 ≈ 1.401 × 10^-45

Precision: Approximately 7 decimal digits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Double Precision (64-bit)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`IEEE 754 Double Precision Format:

Bit Layout:
+---+---+---+- - -+---+---+---+---+- - -+---+---+---+
|63 |62 |61 |     |52 |51 |50 |49 |     | 2 | 1 | 0 |
+---+---+---+- - -+---+---+---+---+- - -+---+---+---+
| S |  Exponent   |          Mantissa (52 bits)     |
|   |  (11 bits)  |                                 |
+---+-------------+---------------------------------+

Value Calculation:
  Normalized:   (-1)^S × 1.Mantissa × 2^(Exponent - 1023)
  Denormalized: (-1)^S × 0.Mantissa × 2^(-1022)

Ranges:
  Smallest positive normalized:   2^-1022 ≈ 2.225 × 10^-308
  Largest positive normalized:    ≈ 1.798 × 10^308
  Smallest positive denormalized: 2^-1074 ≈ 4.941 × 10^-324

Precision: Approximately 15-16 decimal digits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Values in IEEE 754</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Value</th>
            <th className="p-3 border">Exponent</th>
            <th className="p-3 border">Mantissa</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Zero</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">+0 or -0 (based on sign)</td>
          </tr>
          <tr>
            <td className="p-3 border">Denormalized</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">Non-zero</td>
            <td className="p-3 border">Very small numbers (gradual underflow)</td>
          </tr>
          <tr>
            <td className="p-3 border">Normalized</td>
            <td className="p-3 border">1 to 2046</td>
            <td className="p-3 border">Any</td>
            <td className="p-3 border">Normal floating point numbers</td>
          </tr>
          <tr>
            <td className="p-3 border">Infinity</td>
            <td className="p-3 border">All 1s</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">+Infinity or -Infinity</td>
          </tr>
          <tr>
            <td className="p-3 border">NaN</td>
            <td className="p-3 border">All 1s</td>
            <td className="p-3 border">Non-zero</td>
            <td className="p-3 border">Not a Number (undefined/error)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Example 1: Convert -27.15625 to IEEE 754 Single Precision

Step 1: Sign bit
  Negative number → S = 1

Step 2: Convert to binary
  27 = 11011
  0.15625:
    0.15625 × 2 = 0.3125  → 0
    0.3125  × 2 = 0.625   → 0
    0.625   × 2 = 1.25    → 1
    0.25    × 2 = 0.5     → 0
    0.5     × 2 = 1.0     → 1
  0.15625 = 0.00101

  27.15625 = 11011.00101

Step 3: Normalize
  11011.00101 = 1.101100101 × 2^4

Step 4: Biased exponent
  E = 4 + 127 = 131 = 10000011

Step 5: Mantissa (23 bits)
  101100101 → 10110010100000000000000

Step 6: Combine
  S    | Exponent  | Mantissa
  1    | 10000011  | 10110010100000000000000

  Hex: C1 D9 40 00

Example 2: Convert IEEE 754 to Decimal
  Given: 0 10000101 10101000000000000000000

  S = 0 (positive)
  E = 10000101 = 133
  Actual exponent = 133 - 127 = 6
  Mantissa = 1.10101 (with hidden bit)

  Value = 1.10101 × 2^6 = 1101010 = 106`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rounding Modes</h2>
    <p className="leading-relaxed">
      IEEE 754 defines five rounding modes to handle results that cannot be exactly represented:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mode</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example (to 1 decimal)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Round to Nearest, Even</td>
            <td className="p-3 border">Default; rounds to nearest, ties to even</td>
            <td className="p-3 border">2.45 → 2.4, 2.55 → 2.6</td>
          </tr>
          <tr>
            <td className="p-3 border">Round to Nearest, Away</td>
            <td className="p-3 border">Rounds to nearest, ties away from zero</td>
            <td className="p-3 border">2.45 → 2.5, -2.45 → -2.5</td>
          </tr>
          <tr>
            <td className="p-3 border">Round Toward +Infinity</td>
            <td className="p-3 border">Always rounds up (ceiling)</td>
            <td className="p-3 border">2.41 → 2.5, -2.49 → -2.4</td>
          </tr>
          <tr>
            <td className="p-3 border">Round Toward -Infinity</td>
            <td className="p-3 border">Always rounds down (floor)</td>
            <td className="p-3 border">2.49 → 2.4, -2.41 → -2.5</td>
          </tr>
          <tr>
            <td className="p-3 border">Round Toward Zero</td>
            <td className="p-3 border">Truncates toward zero</td>
            <td className="p-3 border">2.49 → 2.4, -2.49 → -2.4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Exceptions in IEEE 754</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Invalid Operation:</strong> Results in NaN (e.g., 0/0, sqrt of negative)
      </li>
      <li>
        <strong>Division by Zero:</strong> Results in Infinity
      </li>
      <li>
        <strong>Overflow:</strong> Result too large, returns Infinity
      </li>
      <li>
        <strong>Underflow:</strong> Result too small, returns denormalized or zero
      </li>
      <li>
        <strong>Inexact:</strong> Result cannot be exactly represented (most common)
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Floating Point Issues</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Precision Issues:

1. Representation Error
   0.1 cannot be exactly represented in binary:
   0.1 (decimal) ≈ 0.00011001100110011... (repeating in binary)

   In IEEE 754: 0.1 ≈ 0.100000001490116119384765625

2. Accumulation of Errors
   Adding 0.1 ten times may not equal 1.0 exactly

3. Comparison Issues
   Never use == to compare floating point numbers
   Instead, check if |a - b| < epsilon

4. Catastrophic Cancellation
   Subtracting nearly equal numbers loses precision
   Example: 1.0000001 - 1.0000000 = 0.0000001
            (Many significant digits lost)

Best Practices:
- Use appropriate precision for your application
- Be aware of the limitations of floating point
- Use specialized libraries for financial calculations
- Test with edge cases (very large, very small, near zero)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Programming Language Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Single Precision</th>
            <th className="p-3 border">Double Precision</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">C/C++</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border">double</td>
          </tr>
          <tr>
            <td className="p-3 border">Java</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border">double</td>
          </tr>
          <tr>
            <td className="p-3 border">Python</td>
            <td className="p-3 border">numpy.float32</td>
            <td className="p-3 border">float (default)</td>
          </tr>
          <tr>
            <td className="p-3 border">JavaScript</td>
            <td className="p-3 border">Float32Array</td>
            <td className="p-3 border">Number (default)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>IEEE 754 is the universal standard for floating point representation</li>
        <li>Single precision: 32 bits (1 sign, 8 exponent, 23 mantissa)</li>
        <li>Double precision: 64 bits (1 sign, 11 exponent, 52 mantissa)</li>
        <li>Bias for single precision is 127, for double precision is 1023</li>
        <li>Special values: Zero, Infinity, NaN, Denormalized numbers</li>
        <li>Default rounding mode is "Round to Nearest, Even"</li>
        <li>Floating point arithmetic can have precision issues</li>
        <li>Never compare floating point numbers for exact equality</li>
      </ul>
    </div>
  </div>
);

export default IEEE754;
