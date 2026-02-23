import React from "react";

const CryptographyIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Cryptography
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cryptography is the science of securing communication and data through the use of codes
      and ciphers. It enables secure communication in the presence of adversaries by transforming
      readable data (plaintext) into an unreadable format (ciphertext) and vice versa.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Cryptography?</h2>
    <p className="leading-relaxed">
      Cryptography comes from the Greek words "kryptos" (hidden) and "graphein" (to write).
      It is the practice of securing information by transforming it into a form that can only
      be understood by the intended recipient.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Cryptographic Process:

+-------------+     Encryption     +-------------+
|  Plaintext  | -----------------> | Ciphertext  |
|  "HELLO"    |       (Key)        | "KHOOR"     |
+-------------+                    +-------------+
                                         |
                                   Decryption
                                       (Key)
                                         |
                                         v
                                   +-------------+
                                   |  Plaintext  |
                                   |  "HELLO"    |
                                   +-------------+

Key Terminology:
- Plaintext: Original readable message
- Ciphertext: Encrypted unreadable message
- Encryption: Process of converting plaintext to ciphertext
- Decryption: Process of converting ciphertext to plaintext
- Key: Secret value used for encryption/decryption`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Goals of Cryptography</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Technique</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Confidentiality</td>
            <td className="p-3 border">Ensure only authorized parties can read data</td>
            <td className="p-3 border">Encryption (AES, RSA)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity</td>
            <td className="p-3 border">Detect unauthorized modification of data</td>
            <td className="p-3 border">Hash functions, MACs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verify the identity of communicating parties</td>
            <td className="p-3 border">Digital signatures, certificates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-repudiation</td>
            <td className="p-3 border">Prevent denial of performed actions</td>
            <td className="p-3 border">Digital signatures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Cryptography</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Symmetric Key Cryptography</h3>
    <p className="leading-relaxed">
      Uses the same key for both encryption and decryption. Both sender and receiver must
      share the same secret key.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Symmetric Encryption:

    Alice                              Bob
      |                                 |
      |  Shared Secret Key: K           |
      |<------------------------------->|
      |                                 |
      | Plaintext: "Hello Bob"          |
      |     ↓                           |
      | Encrypt(P, K) = Ciphertext      |
      |                                 |
      | ------Ciphertext--------------->|
      |                                 |
      |              Decrypt(C, K) = P  |
      |              "Hello Bob" ←      |

Examples: AES, DES, 3DES, Blowfish, RC4`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Asymmetric Key Cryptography</h3>
    <p className="leading-relaxed">
      Uses a pair of mathematically related keys: a public key for encryption and a private
      key for decryption. Anyone can encrypt with the public key, but only the private key
      holder can decrypt.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Asymmetric Encryption:

    Alice                              Bob
      |                                 |
      |  Bob's Public Key: Pub(B)       |
      |<--------------------------------|
      |                                 |
      | Plaintext: "Hello Bob"          |
      |     ↓                           |
      | Encrypt(P, Pub(B)) = Ciphertext |
      |                                 |
      | ------Ciphertext--------------->|
      |                                 |
      |   Decrypt(C, Priv(B)) = P       |
      |   Only Bob can decrypt!         |
      |   "Hello Bob" ←                 |

Examples: RSA, ECC, Diffie-Hellman, ElGamal`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Hash Functions</h3>
    <p className="leading-relaxed">
      One-way functions that convert input data of any size into a fixed-size output (hash/digest).
      Used for integrity verification, not encryption.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hash Function:

Input: "Hello World"
            ↓
       Hash Function
            ↓
Output: "a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e"

Properties:
1. Deterministic - Same input always gives same output
2. One-way - Cannot reverse to get original input
3. Collision resistant - Hard to find two inputs with same hash
4. Avalanche effect - Small input change = completely different hash

Examples: SHA-256, SHA-3, MD5 (deprecated), BLAKE2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Symmetric vs Asymmetric</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Symmetric</th>
            <th className="p-3 border">Asymmetric</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Keys</td>
            <td className="p-3 border">One shared key</td>
            <td className="p-3 border">Key pair (public + private)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slower (1000x)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Distribution</td>
            <td className="p-3 border">Difficult (secure channel needed)</td>
            <td className="p-3 border">Easy (public key can be shared)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Length</td>
            <td className="p-3 border">128-256 bits typical</td>
            <td className="p-3 border">2048-4096 bits typical</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Bulk data encryption</td>
            <td className="p-3 border">Key exchange, digital signatures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Cryptography</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Secure Communications:</strong> HTTPS, TLS/SSL, VPNs, encrypted messaging</li>
      <li><strong>Digital Signatures:</strong> Document signing, code signing, email authentication</li>
      <li><strong>Password Storage:</strong> Secure hashing of passwords in databases</li>
      <li><strong>Cryptocurrency:</strong> Bitcoin, Ethereum use cryptographic primitives</li>
      <li><strong>Data at Rest:</strong> Full disk encryption, database encryption</li>
      <li><strong>Authentication:</strong> PKI, certificates, secure login systems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cryptography provides confidentiality, integrity, authentication, and non-repudiation</li>
        <li>Symmetric encryption is fast but has key distribution challenges</li>
        <li>Asymmetric encryption solves key distribution but is computationally expensive</li>
        <li>Modern systems use hybrid approaches: asymmetric for key exchange, symmetric for data</li>
        <li>Hash functions provide integrity verification without encryption</li>
        <li>Never implement your own cryptography - use established libraries and algorithms</li>
      </ul>
    </div>
  </div>
);

export default CryptographyIntro;
