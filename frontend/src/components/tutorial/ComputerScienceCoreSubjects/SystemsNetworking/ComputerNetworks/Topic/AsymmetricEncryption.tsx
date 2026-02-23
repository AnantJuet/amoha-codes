import React from "react";

const AsymmetricEncryption: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Public Key Cryptography (Asymmetric Encryption)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Asymmetric encryption, also known as public key cryptography, uses a pair of mathematically related
      keys: a public key for encryption and a private key for decryption. This revolutionary approach,
      introduced in 1976 by Diffie and Hellman, solved the key distribution problem inherent in symmetric
      cryptography.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Pair Concept</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Public Key</h3>
          <ul className="list-disc list-inside dark:text-gray-300">
            <li>Shared openly with anyone</li>
            <li>Used to encrypt messages</li>
            <li>Used to verify signatures</li>
            <li>Cannot decrypt messages</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Private Key</h3>
          <ul className="list-disc list-inside dark:text-gray-300">
            <li>Kept secret by owner</li>
            <li>Used to decrypt messages</li>
            <li>Used to create signatures</li>
            <li>Must never be shared</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How It Works</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <h3 className="font-bold mb-2 dark:text-white">Encryption Process:</h3>
      <div className="space-y-2 dark:text-gray-300">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-100 dark:bg-blue-800 p-2 rounded">Alice's Message</span>
          <span>+</span>
          <span className="bg-green-100 dark:bg-green-800 p-2 rounded">Bob's Public Key</span>
          <span>=</span>
          <span className="bg-purple-100 dark:bg-purple-800 p-2 rounded">Ciphertext</span>
        </div>
        <p className="text-sm mt-2">Only Bob's private key can decrypt this message.</p>
      </div>

      <h3 className="font-bold mb-2 mt-4 dark:text-white">Digital Signature Process:</h3>
      <div className="space-y-2 dark:text-gray-300">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-100 dark:bg-blue-800 p-2 rounded">Message Hash</span>
          <span>+</span>
          <span className="bg-red-100 dark:bg-red-800 p-2 rounded">Alice's Private Key</span>
          <span>=</span>
          <span className="bg-orange-100 dark:bg-orange-800 p-2 rounded">Digital Signature</span>
        </div>
        <p className="text-sm mt-2">Anyone with Alice's public key can verify the signature.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Mathematical Foundations</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Problem</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithm</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Integer Factorization</td>
            <td className="border border-gray-300 px-4 py-2">RSA</td>
            <td className="border border-gray-300 px-4 py-2">Hard to factor product of two large primes</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Discrete Logarithm</td>
            <td className="border border-gray-300 px-4 py-2">Diffie-Hellman, DSA</td>
            <td className="border border-gray-300 px-4 py-2">Hard to find x in g^x = y mod p</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Elliptic Curve DL</td>
            <td className="border border-gray-300 px-4 py-2">ECC, ECDSA</td>
            <td className="border border-gray-300 px-4 py-2">Discrete log on elliptic curves</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Asymmetric Algorithms</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">RSA (Rivest-Shamir-Adleman)</h3>
        <p className="dark:text-gray-300">
          Most widely used algorithm. Supports encryption and digital signatures.
          Key sizes: 2048-4096 bits recommended.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Elliptic Curve Cryptography (ECC)</h3>
        <p className="dark:text-gray-300">
          Provides equivalent security with smaller keys. A 256-bit ECC key equals
          ~3072-bit RSA. Used in ECDSA, ECDH.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Diffie-Hellman (DH)</h3>
        <p className="dark:text-gray-300">
          Key exchange protocol allowing two parties to establish a shared secret
          over an insecure channel. Foundation for TLS key exchange.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Comparison: Symmetric vs Asymmetric</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Symmetric</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Asymmetric</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Keys</td>
            <td className="border border-gray-300 px-4 py-2">Single shared key</td>
            <td className="border border-gray-300 px-4 py-2">Public/Private pair</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Speed</td>
            <td className="border border-gray-300 px-4 py-2">Fast (1000x)</td>
            <td className="border border-gray-300 px-4 py-2">Slow</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Size (equiv security)</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">3072 bits (RSA)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Distribution</td>
            <td className="border border-gray-300 px-4 py-2">Difficult</td>
            <td className="border border-gray-300 px-4 py-2">Easy (public key)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Digital Signatures</td>
            <td className="border border-gray-300 px-4 py-2">Not supported</td>
            <td className="border border-gray-300 px-4 py-2">Supported</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Hybrid Encryption</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <p className="dark:text-gray-300">
        In practice, asymmetric and symmetric encryption are combined for optimal security and performance:
      </p>
      <ol className="list-decimal list-inside mt-2 dark:text-gray-300">
        <li>Generate a random symmetric session key</li>
        <li>Encrypt the data with the symmetric key (fast)</li>
        <li>Encrypt the symmetric key with the recipient's public key</li>
        <li>Send both the encrypted data and encrypted key</li>
      </ol>
      <p className="mt-2 dark:text-gray-300">
        This approach is used in TLS, PGP, and most secure communication protocols.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Applications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>TLS/SSL (HTTPS)</li>
        <li>Email encryption (PGP, S/MIME)</li>
        <li>Digital signatures</li>
        <li>Code signing</li>
      </ul>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>SSH authentication</li>
        <li>Cryptocurrency wallets</li>
        <li>Certificate authorities</li>
        <li>Secure messaging apps</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Asymmetric encryption uses a public/private key pair</li>
        <li>It solves the key distribution problem of symmetric encryption</li>
        <li>RSA and ECC are the most common algorithms</li>
        <li>It enables digital signatures and non-repudiation</li>
        <li>Hybrid encryption combines asymmetric and symmetric for best performance</li>
      </ul>
    </div>
  </div>
);

export default AsymmetricEncryption;
