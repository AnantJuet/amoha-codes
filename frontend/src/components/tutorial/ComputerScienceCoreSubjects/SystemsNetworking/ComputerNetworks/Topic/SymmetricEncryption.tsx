import React from "react";

const SymmetricEncryption: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Symmetric Key Encryption
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Symmetric key encryption, also known as secret key cryptography, uses the same key for both
      encryption and decryption. It is fast and efficient, making it ideal for encrypting large
      amounts of data. The primary challenge is securely sharing the key between communicating parties.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How Symmetric Encryption Works</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <div className="text-center dark:text-gray-300">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">Plaintext</div>
          <span className="text-2xl">+</span>
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded">Secret Key</div>
          <span className="text-2xl">→</span>
          <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">Encryption</div>
          <span className="text-2xl">→</span>
          <div className="bg-red-100 dark:bg-red-800 p-3 rounded">Ciphertext</div>
        </div>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
          <div className="bg-red-100 dark:bg-red-800 p-3 rounded">Ciphertext</div>
          <span className="text-2xl">+</span>
          <div className="bg-green-100 dark:bg-green-800 p-3 rounded">Same Secret Key</div>
          <span className="text-2xl">→</span>
          <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded">Decryption</div>
          <span className="text-2xl">→</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded">Plaintext</div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Types of Symmetric Ciphers</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Stream Ciphers</h3>
        <p className="dark:text-gray-300 mb-2">
          Encrypt data one bit or byte at a time. Generate a keystream that is XORed with plaintext.
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>RC4 (deprecated)</li>
          <li>ChaCha20</li>
          <li>Salsa20</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Block Ciphers</h3>
        <p className="dark:text-gray-300 mb-2">
          Encrypt data in fixed-size blocks (e.g., 64 or 128 bits). More common in modern applications.
        </p>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>AES (128-bit blocks)</li>
          <li>DES (64-bit blocks)</li>
          <li>3DES, Blowfish</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Block Cipher Modes of Operation</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Mode</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Characteristics</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">ECB</td>
            <td className="border border-gray-300 px-4 py-2">Electronic Codebook</td>
            <td className="border border-gray-300 px-4 py-2">Simple but not recommended; identical blocks produce identical ciphertext</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">CBC</td>
            <td className="border border-gray-300 px-4 py-2">Cipher Block Chaining</td>
            <td className="border border-gray-300 px-4 py-2">Each block XORed with previous ciphertext; uses IV</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">CTR</td>
            <td className="border border-gray-300 px-4 py-2">Counter Mode</td>
            <td className="border border-gray-300 px-4 py-2">Turns block cipher into stream cipher; parallelizable</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">GCM</td>
            <td className="border border-gray-300 px-4 py-2">Galois/Counter Mode</td>
            <td className="border border-gray-300 px-4 py-2">Provides both encryption and authentication; widely used</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Symmetric Algorithms</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithm</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Key Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Block Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">AES</td>
            <td className="border border-gray-300 px-4 py-2">128/192/256 bits</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">DES</td>
            <td className="border border-gray-300 px-4 py-2">56 bits</td>
            <td className="border border-gray-300 px-4 py-2">64 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3DES</td>
            <td className="border border-gray-300 px-4 py-2">112/168 bits</td>
            <td className="border border-gray-300 px-4 py-2">64 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-yellow-600 dark:text-yellow-400">Legacy</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ChaCha20</td>
            <td className="border border-gray-300 px-4 py-2">256 bits</td>
            <td className="border border-gray-300 px-4 py-2">Stream</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Advantages and Disadvantages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Advantages</h3>
        <ul className="list-disc list-inside dark:text-gray-300">
          <li>Fast encryption/decryption</li>
          <li>Low computational overhead</li>
          <li>Efficient for large data</li>
          <li>Hardware acceleration available</li>
          <li>Smaller key sizes than asymmetric</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 dark:text-white">Disadvantages</h3>
        <ul className="list-disc list-inside dark:text-gray-300">
          <li>Key distribution problem</li>
          <li>Key management complexity</li>
          <li>No built-in authentication</li>
          <li>Scalability issues (n parties need n(n-1)/2 keys)</li>
          <li>Cannot provide non-repudiation</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Distribution Solutions</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Physical delivery:</strong> Secure courier or in-person exchange</li>
        <li><strong>Key Distribution Center (KDC):</strong> Trusted third party manages keys</li>
        <li><strong>Diffie-Hellman:</strong> Secure key exchange over insecure channel</li>
        <li><strong>Hybrid encryption:</strong> Use asymmetric to exchange symmetric key</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Symmetric encryption uses the same key for encryption and decryption</li>
        <li>It is fast and efficient, ideal for bulk data encryption</li>
        <li>Block ciphers (like AES) and stream ciphers are the two main types</li>
        <li>The main challenge is secure key distribution between parties</li>
        <li>AES with GCM mode is the current recommended standard</li>
      </ul>
    </div>
  </div>
);

export default SymmetricEncryption;
