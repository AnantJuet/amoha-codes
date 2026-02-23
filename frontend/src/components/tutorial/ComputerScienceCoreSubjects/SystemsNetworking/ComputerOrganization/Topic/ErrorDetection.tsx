import React from 'react';

const ErrorDetection: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Error Detection Codes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Error detection codes are techniques used to identify errors that occur during data
      transmission or storage. These codes add redundant bits to the original data, enabling
      the receiver to detect (and sometimes correct) errors. This is crucial in digital
      systems where noise, interference, or hardware faults can corrupt data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Errors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Error Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Single-bit Error</td>
            <td className="p-3 border">One bit changes from 0 to 1 or vice versa</td>
            <td className="p-3 border">1010 becomes 1110</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiple-bit Error</td>
            <td className="p-3 border">Two or more non-adjacent bits change</td>
            <td className="p-3 border">1010 becomes 1101</td>
          </tr>
          <tr>
            <td className="p-3 border">Burst Error</td>
            <td className="p-3 border">Multiple consecutive bits change</td>
            <td className="p-3 border">10101010 becomes 10000010</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parity Bit</h2>
    <p className="leading-relaxed">
      The parity bit is the simplest form of error detection. A single bit is added to make
      the total number of 1s either even (even parity) or odd (odd parity). It can detect
      single-bit errors but cannot correct them or detect even numbers of errors.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Parity Bit Schemes:

Even Parity: Total number of 1s (including parity) is even
Odd Parity:  Total number of 1s (including parity) is odd

Example: Data = 1011001

Even Parity:
  Count of 1s in data: 4 (already even)
  Parity bit = 0
  Transmitted: 1011001 0

Odd Parity:
  Count of 1s in data: 4 (need to make odd)
  Parity bit = 1
  Transmitted: 1011001 1

Error Detection with Even Parity:
  Sent:     1011001 0 (4 ones, even)
  Received: 1111001 0 (5 ones, odd → ERROR DETECTED!)

Limitation:
  Sent:     1011001 0
  Received: 1111101 0 (6 ones, even → 2 errors UNDETECTED!)

Summary:
+------------------+----------------+----------------+
| Original Data    | Even Parity    | Odd Parity     |
+------------------+----------------+----------------+
| 1010             | 10100 (2 ones) | 10101 (3 ones) |
| 1111             | 11110 (4 ones) | 11111 (5 ones) |
| 0000             | 00000 (0 ones) | 00001 (1 one)  |
| 1001             | 10010 (2 ones) | 10011 (3 ones) |
+------------------+----------------+----------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Two-Dimensional Parity</h3>
    <p className="leading-relaxed">
      Two-dimensional parity arranges data in a matrix and calculates parity for both rows
      and columns. This can detect and locate single-bit errors and detect (but not always
      correct) multiple errors.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Two-Dimensional Parity (Even Parity):

Original Data arranged in 4x4 matrix:
         C1  C2  C3  C4  | Row Parity
    ┌────────────────────┼────────────
 R1 |  1   0   1   1    |    1
 R2 |  0   1   1   0    |    0
 R3 |  1   1   0   1    |    1
 R4 |  0   0   1   1    |    0
    ├────────────────────┼────────────
Col |  0   0   1   1    |    0  ← Parity of parities
Parity

If bit R2,C3 flips (1→0):
         C1  C2  C3  C4  | Row Parity
    ┌────────────────────┼────────────
 R1 |  1   0   1   1    |    1 ✓
 R2 |  0   1   0   0    |    1 ✗ (was 0)
 R3 |  1   1   0   1    |    1 ✓
 R4 |  0   0   1   1    |    0 ✓
    ├────────────────────┼────────────
Col |  0   0   0   1    |    1 ✗
Parity      ↑
         (was 1)

Row 2 and Column 3 parities fail → Error at R2,C3!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checksum</h2>
    <p className="leading-relaxed">
      A checksum is calculated by summing all data units and sending the result (or its
      complement) along with the data. The receiver performs the same calculation to verify
      data integrity.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Checksum Calculation:

Example: Send data words 10110, 11011, 01110, 11100

Step 1: Add all data words
    10110
    11011
    01110
  + 11100
  -------
  1 00101  (5-bit sum with carry)

Step 2: Handle overflow (wrap-around carry)
  00101 + 1 = 00110

Step 3: Take 1's complement for checksum
  Checksum = 11001

Transmitted: 10110, 11011, 01110, 11100, 11001

Receiver Verification:
Step 1: Add all received words including checksum
    10110
    11011
    01110
    11100
  + 11001
  -------
  1 11111

Step 2: Add carry
  11111 + 1 = 00000... wait, let's recalculate:
  Actually: 11111 (all ones after proper addition)

Step 3: If result is all 1s (or complement is 0), no error
  1's complement of 11111 = 00000 → NO ERROR`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hamming Code</h2>
    <p className="leading-relaxed">
      Hamming code is an error-correcting code that can detect up to two-bit errors and
      correct single-bit errors. Developed by Richard Hamming in 1950, it places parity
      bits at power-of-2 positions (1, 2, 4, 8, ...) within the data.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Hamming Code Structure</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hamming Code Position Assignment:

Position:   1   2   3   4   5   6   7   8   9  10  11  12  ...
Binary:    001 010 011 100 101 110 111 1000 ...
Type:       P1  P2  D1  P4  D2  D3  D4  P8  D5  D6  D7  D8  ...
           ↑   ↑       ↑               ↑
        Parity bits at powers of 2

Where:
  P1, P2, P4, P8, ... = Parity bits
  D1, D2, D3, D4, ... = Data bits

Parity bit coverage:
  P1 (pos 1) checks: 1, 3, 5, 7, 9, 11, 13, ... (LSB of position = 1)
  P2 (pos 2) checks: 2, 3, 6, 7, 10, 11, 14, ... (2nd bit of position = 1)
  P4 (pos 4) checks: 4, 5, 6, 7, 12, 13, 14, ... (3rd bit of position = 1)
  P8 (pos 8) checks: 8, 9, 10, 11, 12, 13, 14, ... (4th bit of position = 1)

Visual Pattern:
Position:  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
P1 checks: ✓     ✓     ✓     ✓     ✓      ✓      ✓      ✓
P2 checks:    ✓  ✓        ✓  ✓        ✓   ✓          ✓   ✓
P4 checks:          ✓  ✓  ✓  ✓              ✓   ✓   ✓   ✓
P8 checks:                      ✓  ✓  ✓   ✓   ✓   ✓   ✓   ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Hamming Code Example</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hamming(7,4) Code: Encode 4 data bits with 3 parity bits

Data to encode: 1011

Step 1: Place data bits at non-power-of-2 positions
Position:  1   2   3   4   5   6   7
Type:      P1  P2  D1  P4  D2  D3  D4
Data:      _   _   1   _   0   1   1

Step 2: Calculate parity bits (even parity)

P1 covers positions 1, 3, 5, 7:
   P1, 1, 0, 1 → P1 XOR 1 XOR 0 XOR 1 = 0 → P1 = 0

P2 covers positions 2, 3, 6, 7:
   P2, 1, 1, 1 → P2 XOR 1 XOR 1 XOR 1 = 0 → P2 = 1

P4 covers positions 4, 5, 6, 7:
   P4, 0, 1, 1 → P4 XOR 0 XOR 1 XOR 1 = 0 → P4 = 0

Step 3: Complete codeword
Position:  1   2   3   4   5   6   7
Value:     0   1   1   0   0   1   1

Transmitted: 0110011`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Error Detection and Correction</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Error Detection with Hamming Code:

Received: 0110111 (error in position 5)
          Position: 1 2 3 4 5 6 7
          Value:    0 1 1 0 1 1 1
                            ↑
                        (should be 0)

Step 1: Calculate syndrome (check parity bits)

Check P1 (positions 1, 3, 5, 7):
   0 XOR 1 XOR 1 XOR 1 = 1 → FAIL

Check P2 (positions 2, 3, 6, 7):
   1 XOR 1 XOR 1 XOR 1 = 0 → PASS

Check P4 (positions 4, 5, 6, 7):
   0 XOR 1 XOR 1 XOR 1 = 1 → FAIL

Step 2: Calculate error position
   Syndrome = P4 P2 P1 = 1 0 1 = 5 (binary to decimal)

Step 3: Correct the error
   Flip bit at position 5
   Corrected: 0110011

Error Position Determination:
+--------+--------+--------+-----------------+
|   P4   |   P2   |   P1   | Error Position  |
+--------+--------+--------+-----------------+
|    0   |    0   |    0   |   No error      |
|    0   |    0   |    1   |   Position 1    |
|    0   |    1   |    0   |   Position 2    |
|    0   |    1   |    1   |   Position 3    |
|    1   |    0   |    0   |   Position 4    |
|    1   |    0   |    1   |   Position 5    |
|    1   |    1   |    0   |   Position 6    |
|    1   |    1   |    1   |   Position 7    |
+--------+--------+--------+-----------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hamming Distance</h2>
    <p className="leading-relaxed">
      The Hamming distance between two codewords is the number of positions where they differ.
      The minimum Hamming distance of a code determines its error detection and correction
      capabilities.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hamming Distance:

Example: Distance between 1011101 and 1001001
  1 0 1 1 1 0 1
  1 0 0 1 0 0 1
  ─ ─ ↑ ─ ↑ ─ ─
      Different

Hamming Distance = 2 (two positions differ)

Error Detection/Correction Capability:
+-------------------+------------------+-------------------+
| Min Distance (d)  | Detect Errors    | Correct Errors    |
+-------------------+------------------+-------------------+
|        1          |       0          |        0          |
|        2          |       1          |        0          |
|        3          |       2          |        1          |
|        4          |       3          |        1          |
|        5          |       4          |        2          |
+-------------------+------------------+-------------------+

Formulas:
  To detect e errors: d >= e + 1
  To correct e errors: d >= 2e + 1

Hamming(7,4) has minimum distance = 3
  → Can detect 2 errors OR correct 1 error`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Error Detection Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Redundancy</th>
            <th className="p-3 border">Detection</th>
            <th className="p-3 border">Correction</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple Parity</td>
            <td className="p-3 border">1 bit</td>
            <td className="p-3 border">Odd number of errors</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">2D Parity</td>
            <td className="p-3 border">Row + Column bits</td>
            <td className="p-3 border">Most 2-bit errors</td>
            <td className="p-3 border">1-bit error</td>
          </tr>
          <tr>
            <td className="p-3 border">Checksum</td>
            <td className="p-3 border">1 word</td>
            <td className="p-3 border">Many errors</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Hamming(7,4)</td>
            <td className="p-3 border">3 bits per 4 data</td>
            <td className="p-3 border">2-bit errors</td>
            <td className="p-3 border">1-bit error</td>
          </tr>
          <tr>
            <td className="p-3 border">CRC</td>
            <td className="p-3 border">Variable (16-32 bits)</td>
            <td className="p-3 border">Burst errors</td>
            <td className="p-3 border">None</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Computer Memory (ECC RAM):</strong> Uses Hamming code to correct single-bit
        errors and detect double-bit errors (SECDED)
      </li>
      <li>
        <strong>Network Communication:</strong> TCP/IP uses checksums for packet verification
      </li>
      <li>
        <strong>Storage Devices:</strong> Hard drives and SSDs use error correction codes
      </li>
      <li>
        <strong>Wireless Communication:</strong> Extensive use of error correction
      </li>
      <li>
        <strong>Barcodes and QR Codes:</strong> Include error correction capabilities
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Error detection codes add redundancy to detect transmission/storage errors</li>
        <li>Parity bit: simplest method, detects odd number of errors</li>
        <li>2D parity can detect and locate single-bit errors</li>
        <li>Checksum provides good detection but no correction capability</li>
        <li>Hamming code can correct single-bit errors and detect double-bit errors</li>
        <li>Hamming distance determines error detection/correction capability</li>
        <li>Parity bits in Hamming code are placed at power-of-2 positions</li>
        <li>Syndrome calculation identifies the error position in Hamming code</li>
      </ul>
    </div>
  </div>
);

export default ErrorDetection;
