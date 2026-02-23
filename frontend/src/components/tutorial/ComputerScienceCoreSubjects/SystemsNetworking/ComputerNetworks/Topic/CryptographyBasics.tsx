import React from "react";

const CryptographyBasics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cryptography Fundamentals
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Cryptography is the science of securing communication and data through encoding techniques.
      It transforms readable information (plaintext) into an unreadable format (ciphertext) using
      mathematical algorithms, ensuring that only authorized parties can access the original information.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Terminology</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Term</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Definition</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Plaintext</td>
            <td className="border border-gray-300 px-4 py-2">Original readable message or data</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Ciphertext</td>
            <td className="border border-gray-300 px-4 py-2">Encrypted, unreadable version of the message</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Encryption</td>
            <td className="border border-gray-300 px-4 py-2">Process of converting plaintext to ciphertext</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Decryption</td>
            <td className="border border-gray-300 px-4 py-2">Process of converting ciphertext back to plaintext</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Key</td>
            <td className="border border-gray-300 px-4 py-2">Secret value used in encryption/decryption algorithms</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Cipher</td>
            <td className="border border-gray-300 px-4 py-2">Algorithm used for encryption and decryption</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Cryptographic Goals</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Confidentiality</h3>
        <p className="dark:text-gray-300">Ensuring that information is accessible only to authorized parties through encryption.</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Integrity</h3>
        <p className="dark:text-gray-300">Guaranteeing that data has not been altered during transmission or storage.</p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Authentication</h3>
        <p className="dark:text-gray-300">Verifying the identity of communicating parties through digital signatures and certificates.</p>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">Non-repudiation</h3>
        <p className="dark:text-gray-300">Preventing denial of actions, ensuring accountability through digital signatures.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Types of Cryptography</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold text-lg mb-2 dark:text-white">1. Symmetric Key Cryptography</h3>
        <p className="dark:text-gray-300 mb-2">
          Uses the same key for both encryption and decryption. Fast and efficient but requires secure key exchange.
        </p>
        <p className="text-sm dark:text-gray-400">Examples: AES, DES, 3DES, Blowfish</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold text-lg mb-2 dark:text-white">2. Asymmetric Key Cryptography</h3>
        <p className="dark:text-gray-300 mb-2">
          Uses a pair of keys (public and private). Public key encrypts; private key decrypts. Solves key distribution problem.
        </p>
        <p className="text-sm dark:text-gray-400">Examples: RSA, ECC, Diffie-Hellman</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold text-lg mb-2 dark:text-white">3. Hash Functions</h3>
        <p className="dark:text-gray-300 mb-2">
          One-way functions that produce fixed-size output from any input. Used for integrity verification.
        </p>
        <p className="text-sm dark:text-gray-400">Examples: SHA-256, SHA-3, MD5 (deprecated)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Basic Encryption Process</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <pre className="dark:text-gray-300 text-sm overflow-x-auto">
{`Encryption:
Plaintext + Key + Algorithm → Ciphertext

Example (Caesar Cipher, shift of 3):
Plaintext:  HELLO
Key:        3
Ciphertext: KHOOR

Decryption:
Ciphertext + Key + Algorithm → Plaintext
KHOOR - 3 → HELLO`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Classical vs Modern Cryptography</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Classical</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Modern</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Operation</td>
            <td className="border border-gray-300 px-4 py-2">Character-based</td>
            <td className="border border-gray-300 px-4 py-2">Bit/Block-based</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Security</td>
            <td className="border border-gray-300 px-4 py-2">Easily broken</td>
            <td className="border border-gray-300 px-4 py-2">Computationally secure</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Size</td>
            <td className="border border-gray-300 px-4 py-2">Small</td>
            <td className="border border-gray-300 px-4 py-2">128-4096+ bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Examples</td>
            <td className="border border-gray-300 px-4 py-2">Caesar, Vigenere</td>
            <td className="border border-gray-300 px-4 py-2">AES, RSA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Cryptographic Principles</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Kerckhoffs's Principle:</strong> Security should depend only on the key, not the algorithm's secrecy</li>
        <li><strong>Confusion:</strong> Making the relationship between key and ciphertext complex</li>
        <li><strong>Diffusion:</strong> Spreading plaintext influence across the ciphertext</li>
        <li><strong>Key Length:</strong> Longer keys provide stronger security against brute-force attacks</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Cryptography transforms data using algorithms and keys to ensure security</li>
        <li>The four main goals are confidentiality, integrity, authentication, and non-repudiation</li>
        <li>Symmetric encryption uses one key; asymmetric uses a public/private key pair</li>
        <li>Modern cryptography operates on bits and blocks, providing computational security</li>
        <li>Security should rely on key secrecy, not algorithm secrecy (Kerckhoffs's Principle)</li>
      </ul>
    </div>
  </div>
);

export default CryptographyBasics;
