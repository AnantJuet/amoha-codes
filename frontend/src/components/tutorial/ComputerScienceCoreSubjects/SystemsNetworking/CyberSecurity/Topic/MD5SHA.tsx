import React from "react";

const MD5SHA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MD5 and SHA Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MD5 and SHA are families of cryptographic hash functions used for verifying data integrity
      and creating digital fingerprints. While MD5 is now considered insecure for cryptographic
      purposes, SHA-2 and SHA-3 remain the standards for secure hashing.
    </p>

    <h2 className="text-3xl font-bold mt-8">MD5 (Message Digest 5)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MD5 Specifications:

+------------------------------------------+
|            MD5 PARAMETERS                 |
+------------------------------------------+
| Output Size:     128 bits (32 hex chars) |
| Block Size:      512 bits                |
| Rounds:          64 (4 rounds x 16 ops)  |
| Designer:        Ronald Rivest (1991)    |
| Status:          BROKEN - Do Not Use     |
+------------------------------------------+

Example:
Input:  "Hello World"
MD5:    b10a8db164e0754105b7a99be72e3fe5

Why MD5 is Broken:
- Collision attacks found in 2004
- Can create two different files with same hash
- Practical attacks demonstrated
- Do NOT use for security purposes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MD5 Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MD5 Processing:

1. Pad message to multiple of 512 bits
2. Append original length (64 bits)
3. Initialize 4 x 32-bit registers (A, B, C, D)
4. Process each 512-bit block:
   - 64 operations in 4 rounds
   - Uses non-linear functions F, G, H, I
5. Output = concatenation of A, B, C, D

MD5 is still used for:
- Checksums (non-security)
- File verification (non-adversarial)
- Legacy system compatibility
- Quick data comparison`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SHA Family Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Output</th>
            <th className="p-3 border">Block Size</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SHA-0</td>
            <td className="p-3 border">160 bits</td>
            <td className="p-3 border">512 bits</td>
            <td className="p-3 border">Withdrawn</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-1</td>
            <td className="p-3 border">160 bits</td>
            <td className="p-3 border">512 bits</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-224</td>
            <td className="p-3 border">224 bits</td>
            <td className="p-3 border">512 bits</td>
            <td className="p-3 border">Secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-256</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">512 bits</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-384</td>
            <td className="p-3 border">384 bits</td>
            <td className="p-3 border">1024 bits</td>
            <td className="p-3 border">Secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-512</td>
            <td className="p-3 border">512 bits</td>
            <td className="p-3 border">1024 bits</td>
            <td className="p-3 border">Secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-3</td>
            <td className="p-3 border">224-512 bits</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Secure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SHA-256 Details</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SHA-256 Specifications:

Output Size:    256 bits (64 hex characters)
Block Size:     512 bits
Word Size:      32 bits
Rounds:         64
Security:       128-bit collision resistance

Example:
Input:  "Hello World"
SHA-256: a591a6d40bf420404a011733cfb7b190
         d62c65bf0bcda32b57b277d9ad9f146e

SHA-256 Process:
1. Pad message to 512-bit blocks
2. Initialize 8 x 32-bit hash values (H0-H7)
3. For each block:
   - Message schedule (64 words)
   - 64 rounds of compression
   - Update hash values
4. Final hash = concatenate H0-H7`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SHA-3 (Keccak)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SHA-3 Key Features:

- Different design from SHA-2 (sponge construction)
- Selected through public competition (2012)
- Not a replacement for SHA-2 (both are secure)
- Provides backup if SHA-2 is broken

Sponge Construction:
+------------------+
| Absorb phase     | Input blocks XORed into state
+------------------+
         |
         v
+------------------+
| Squeeze phase    | Output extracted from state
+------------------+

SHA-3 Variants:
- SHA3-224, SHA3-256, SHA3-384, SHA3-512
- SHAKE128, SHAKE256 (extendable output)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">MD5</th>
            <th className="p-3 border">SHA-1</th>
            <th className="p-3 border">SHA-256</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Output</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">160 bits</td>
            <td className="p-3 border">256 bits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Slower</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Broken</td>
            <td className="p-3 border">Broken</td>
            <td className="p-3 border">Secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Today</td>
            <td className="p-3 border">Checksums only</td>
            <td className="p-3 border">Legacy only</td>
            <td className="p-3 border">Recommended</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use What</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>General Security:</strong> Use SHA-256 or SHA-3</li>
        <li><strong>Passwords:</strong> Use bcrypt, scrypt, or Argon2 (NOT plain SHA)</li>
        <li><strong>File Verification:</strong> SHA-256 for security, MD5/CRC for quick checks</li>
        <li><strong>TLS/Certificates:</strong> SHA-256 minimum</li>
        <li><strong>Digital Signatures:</strong> SHA-256 or higher</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MD5 is cryptographically broken - only use for non-security checksums</li>
        <li>SHA-1 is deprecated - do not use for new applications</li>
        <li>SHA-256 is the current recommended standard</li>
        <li>SHA-3 provides alternative design if SHA-2 is compromised</li>
        <li>Longer hash = more collision resistance</li>
        <li>Always use salted hashes for password storage</li>
      </ul>
    </div>
  </div>
);

export default MD5SHA;
