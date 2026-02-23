import React from "react";

const DES: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DES Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Encryption Standard (DES) is a symmetric-key block cipher that was adopted as a federal
      standard in 1977. While now considered insecure due to its short key length, understanding
      DES provides a foundation for learning modern cryptographic algorithms.
    </p>

    <h2 className="text-3xl font-bold mt-8">DES Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DES Specifications:

+------------------------------------------+
|           DES PARAMETERS                  |
+------------------------------------------+
| Block Size:        64 bits               |
| Key Size:          56 bits (+ 8 parity)  |
| Rounds:            16                    |
| Structure:         Feistel Network       |
| Designer:          IBM (1975)            |
| Standardized:      1977 (FIPS 46)        |
| Status:            DEPRECATED            |
+------------------------------------------+

Security Note:
DES can be broken by brute force in hours
using modern hardware. DO NOT use for new
applications.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DES Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DES Encryption Process:

64-bit Plaintext
       |
       v
+----------------+
| Initial Perm.  |  IP (Initial Permutation)
+----------------+
       |
       v
   [L0 | R0]      Split into two 32-bit halves
       |
   +---+---+
   |       |
   v       v
+-----+ +-----+
| L1  | | R1  |   Round 1
+-----+ +-----+
   .       .
   .       .      16 Rounds Total
   .       .
+-----+ +-----+
| L16 | | R16 |   Round 16
+-----+ +-----+
       |
       v
+----------------+
| Final Perm.    |  IP^-1 (Inverse IP)
+----------------+
       |
       v
64-bit Ciphertext`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Feistel Function</h2>
    <p className="leading-relaxed">
      Each round uses a Feistel function that operates on half of the data using a 48-bit subkey.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Feistel Round:

Li = Ri-1
Ri = Li-1 XOR F(Ri-1, Ki)

Feistel Function F:
+------------------------------------------------+
|   32-bit Input (Ri-1)                          |
|        |                                       |
|        v                                       |
|   +----------+                                 |
|   | Expansion|  E-box: 32 -> 48 bits          |
|   +----------+                                 |
|        |                                       |
|        v                                       |
|   XOR with 48-bit subkey Ki                    |
|        |                                       |
|        v                                       |
|   +----------+                                 |
|   | S-boxes  |  8 S-boxes: 48 -> 32 bits      |
|   +----------+                                 |
|        |                                       |
|        v                                       |
|   +----------+                                 |
|   |Permutation|  P-box: permute 32 bits       |
|   +----------+                                 |
|        |                                       |
|        v                                       |
|   32-bit Output                                |
+------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Schedule</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">PC-1 (Permuted Choice 1)</td>
            <td className="p-3 border">56 bits from 64-bit key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Split into C and D</td>
            <td className="p-3 border">Two 28-bit halves</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Left circular shift</td>
            <td className="p-3 border">1 or 2 bits per round</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">PC-2 (Permuted Choice 2)</td>
            <td className="p-3 border">48-bit subkey Ki</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">S-Boxes</h2>
    <p className="leading-relaxed">
      S-boxes provide the non-linear transformation crucial for security. Each S-box takes 6 bits
      input and produces 4 bits output.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S-box Operation:

48-bit input split into 8 groups of 6 bits:
[B1][B2][B3][B4][B5][B6][B7][B8]

For each 6-bit group (e.g., b1b2b3b4b5b6):
- Row = b1b6 (outer bits, 0-3)
- Column = b2b3b4b5 (inner bits, 0-15)
- Output = 4-bit value from S-box table

Result: 8 x 4 bits = 32-bit output`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DES Weaknesses</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Weakness</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Key Size</td>
            <td className="p-3 border">56 bits is too short</td>
            <td className="p-3 border">Brute force in hours</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Block Size</td>
            <td className="p-3 border">64 bits enables attacks</td>
            <td className="p-3 border">Sweet32 attack</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weak Keys</td>
            <td className="p-3 border">4 keys that produce same subkeys</td>
            <td className="p-3 border">Should be avoided</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Semi-Weak Keys</td>
            <td className="p-3 border">12 key pairs with related subkeys</td>
            <td className="p-3 border">Reduced security</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Triple DES (3DES)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Triple DES (EDE Mode):

Plaintext
    |
    v
+-------+
|DES Enc| <-- Key 1
+-------+
    |
    v
+-------+
|DES Dec| <-- Key 2
+-------+
    |
    v
+-------+
|DES Enc| <-- Key 3
+-------+
    |
    v
Ciphertext

Key Options:
- 3 independent keys: 168 bits (most secure)
- 2 keys (K1=K3): 112 bits
- 1 key (K1=K2=K3): 56 bits (same as DES)

Note: 3DES is also being phased out in favor of AES`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DES uses 64-bit blocks and 56-bit keys</li>
        <li>16 rounds of Feistel network structure</li>
        <li>S-boxes provide non-linearity (security)</li>
        <li>DES is deprecated - DO NOT use for new systems</li>
        <li>3DES provides backward compatibility but is also being phased out</li>
        <li>Use AES (128+ bit keys) for modern applications</li>
      </ul>
    </div>
  </div>
);

export default DES;
