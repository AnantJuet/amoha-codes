import React from "react";

const SymmetricEncryption: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Symmetric Encryption
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Symmetric encryption is a type of encryption where the same key is used for both encryption
      and decryption. It is fast, efficient, and widely used for encrypting large amounts of data,
      but requires secure key distribution between parties.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Symmetric Encryption Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Symmetric Encryption Process:

    Alice                              Bob
      |                                 |
      |  Shared Secret Key: K           |
      |<------------------------------->|
      |                                 |
      | Plaintext: "Hello Bob"          |
      |     |                           |
      |     v                           |
      | Encrypt(P, K) = Ciphertext      |
      |                                 |
      | ------Ciphertext--------------->|
      |                                 |
      |              Decrypt(C, K) = P  |
      |              "Hello Bob"        |

Encryption:  C = E(P, K)
Decryption:  P = D(C, K)

Where:
  P = Plaintext (original message)
  C = Ciphertext (encrypted message)
  K = Shared secret key
  E = Encryption algorithm
  D = Decryption algorithm`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Symmetric Ciphers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Block Ciphers</td>
            <td className="p-3 border">Encrypts fixed-size blocks of data</td>
            <td className="p-3 border">AES, DES, 3DES, Blowfish</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stream Ciphers</td>
            <td className="p-3 border">Encrypts data one bit/byte at a time</td>
            <td className="p-3 border">RC4, ChaCha20, Salsa20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Block Cipher Modes of Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Block Cipher Modes:

1. ECB (Electronic Codebook)
   - Each block encrypted independently
   - NOT recommended (patterns visible)

2. CBC (Cipher Block Chaining)
   - Each block XORed with previous ciphertext
   - Requires Initialization Vector (IV)
   - Widely used

3. CTR (Counter Mode)
   - Converts block cipher to stream cipher
   - Parallelizable, fast
   - Used in disk encryption

4. GCM (Galois/Counter Mode)
   - Provides encryption + authentication
   - Most recommended for modern use
   - Used in TLS 1.3

CBC Mode Diagram:
Plaintext:  [P1] [P2] [P3]
             |    |    |
            XOR  XOR  XOR
             |    |    |
 IV ----->[Enc][Enc][Enc]
             |    |    |
Ciphertext: [C1] [C2] [C3]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Symmetric Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Block Size</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">AES</td>
            <td className="p-3 border">128/192/256 bits</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DES</td>
            <td className="p-3 border">56 bits</td>
            <td className="p-3 border">64 bits</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3DES</td>
            <td className="p-3 border">168 bits</td>
            <td className="p-3 border">64 bits</td>
            <td className="p-3 border">Legacy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ChaCha20</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Stream</td>
            <td className="p-3 border">Recommended</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Very fast encryption/decryption</li>
          <li>Efficient for large data volumes</li>
          <li>Simple implementation</li>
          <li>Hardware acceleration available</li>
          <li>Low computational overhead</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Key distribution challenge</li>
          <li>Key must be shared securely</li>
          <li>Scales poorly (n parties = n(n-1)/2 keys)</li>
          <li>No non-repudiation</li>
          <li>If key is compromised, all data is exposed</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Disk Encryption:</strong> BitLocker, FileVault, LUKS use AES</li>
      <li><strong>VPN Tunnels:</strong> Encrypting traffic between endpoints</li>
      <li><strong>Database Encryption:</strong> Protecting data at rest</li>
      <li><strong>TLS/SSL Sessions:</strong> After key exchange, symmetric encryption used</li>
      <li><strong>File Encryption:</strong> 7-Zip, encrypted archives</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Same key used for encryption and decryption</li>
        <li>Much faster than asymmetric encryption</li>
        <li>AES is the current standard for symmetric encryption</li>
        <li>Key distribution is the main challenge</li>
        <li>Use authenticated modes like GCM for integrity</li>
        <li>Never reuse IVs/nonces with the same key</li>
      </ul>
    </div>
  </div>
);

export default SymmetricEncryption;
