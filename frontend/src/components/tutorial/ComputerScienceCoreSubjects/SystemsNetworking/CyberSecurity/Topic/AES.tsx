import React from "react";

const AES: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      AES Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Advanced Encryption Standard (AES) is the most widely used symmetric encryption algorithm
      today. Adopted by the U.S. government in 2001, AES provides strong security with efficient
      performance and is used to protect classified information worldwide.
    </p>

    <h2 className="text-3xl font-bold mt-8">AES Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AES Specifications:

+------------------------------------------+
|            AES PARAMETERS                 |
+------------------------------------------+
| Block Size:        128 bits              |
| Key Sizes:         128, 192, or 256 bits |
| Rounds:            10, 12, or 14         |
| Structure:         Substitution-Permut.  |
| Original Name:     Rijndael              |
| Designers:         Daemen & Rijmen       |
| Standardized:      2001 (FIPS 197)       |
| Status:            CURRENT STANDARD      |
+------------------------------------------+

Key Size vs Rounds:
+-------------+--------+
| Key Size    | Rounds |
+-------------+--------+
| 128 bits    |   10   |
| 192 bits    |   12   |
| 256 bits    |   14   |
+-------------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AES State Matrix</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AES State (4x4 matrix of bytes):

128-bit input block arranged as:

| b0  b4  b8  b12 |
| b1  b5  b9  b13 |
| b2  b6  b10 b14 |
| b3  b7  b11 b15 |

Each cell = 1 byte (8 bits)
Total = 16 bytes = 128 bits

Operations work on this state matrix`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AES Encryption Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AES Encryption Flow:

Plaintext (128 bits)
        |
        v
+-------------------+
| AddRoundKey       | <-- Round Key 0
+-------------------+
        |
        v
+-------------------+
| Round 1 to N-1:   |
|  - SubBytes       |
|  - ShiftRows      |
|  - MixColumns     |
|  - AddRoundKey    | <-- Round Keys 1 to N-1
+-------------------+
        |
        v
+-------------------+
| Final Round:      |
|  - SubBytes       |
|  - ShiftRows      |
|  - AddRoundKey    | <-- Round Key N
|  (No MixColumns)  |
+-------------------+
        |
        v
Ciphertext (128 bits)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AES Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SubBytes</td>
            <td className="p-3 border">S-box substitution for each byte</td>
            <td className="p-3 border">Non-linearity (confusion)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ShiftRows</td>
            <td className="p-3 border">Cyclic shift of each row</td>
            <td className="p-3 border">Diffusion across columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MixColumns</td>
            <td className="p-3 border">Matrix multiplication on columns</td>
            <td className="p-3 border">Diffusion across rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AddRoundKey</td>
            <td className="p-3 border">XOR state with round key</td>
            <td className="p-3 border">Key mixing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SubBytes Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SubBytes: Non-linear substitution

Each byte replaced using S-box lookup:
- S-box is a 16x16 table of byte values
- Based on multiplicative inverse in GF(2^8)
- Followed by affine transformation

Example:
Input byte:  0x53
Row:         5 (high nibble)
Column:      3 (low nibble)
Output:      S-box[5][3] = 0xED

Provides resistance against:
- Linear cryptanalysis
- Differential cryptanalysis`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ShiftRows Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ShiftRows: Row-wise permutation

Before:                  After:
+----+----+----+----+    +----+----+----+----+
| a0 | a1 | a2 | a3 |    | a0 | a1 | a2 | a3 | Row 0: no shift
+----+----+----+----+    +----+----+----+----+
| b0 | b1 | b2 | b3 |    | b1 | b2 | b3 | b0 | Row 1: shift left 1
+----+----+----+----+    +----+----+----+----+
| c0 | c1 | c2 | c3 |    | c2 | c3 | c0 | c1 | Row 2: shift left 2
+----+----+----+----+    +----+----+----+----+
| d0 | d1 | d2 | d3 |    | d3 | d0 | d1 | d2 | Row 3: shift left 3
+----+----+----+----+    +----+----+----+----+

Ensures bytes from each column spread across columns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AES Security</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Security Level</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">AES-128</td>
            <td className="p-3 border">Very strong (2^128 operations)</td>
            <td className="p-3 border">General commercial use</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AES-192</td>
            <td className="p-3 border">Excellent security</td>
            <td className="p-3 border">High-security applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AES-256</td>
            <td className="p-3 border">Quantum-resistant (2^128 after Grover)</td>
            <td className="p-3 border">Top secret, long-term security</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">AES Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>TLS/SSL:</strong> Securing web communications (HTTPS)</li>
      <li><strong>Disk Encryption:</strong> BitLocker, FileVault, LUKS</li>
      <li><strong>Wi-Fi Security:</strong> WPA2 and WPA3 protocols</li>
      <li><strong>VPN:</strong> IPsec and OpenVPN tunnels</li>
      <li><strong>File Encryption:</strong> ZIP, 7-Zip, encrypted containers</li>
      <li><strong>Database Encryption:</strong> Transparent Data Encryption (TDE)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>AES is the current standard for symmetric encryption</li>
        <li>Uses 128-bit blocks with 128/192/256-bit keys</li>
        <li>Substitution-Permutation Network (not Feistel)</li>
        <li>Hardware acceleration (AES-NI) makes it very fast</li>
        <li>Use with proper modes (GCM recommended)</li>
        <li>No known practical attacks against full AES</li>
      </ul>
    </div>
  </div>
);

export default AES;
