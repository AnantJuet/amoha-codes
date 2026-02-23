import React from "react";

const HashFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cryptographic Hash Functions
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A cryptographic hash function is a mathematical algorithm that maps data of arbitrary size
      to a fixed-size output (the hash value or digest). These functions are fundamental to
      digital security, used for data integrity verification, password storage, digital signatures,
      and blockchain technology.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Properties of Cryptographic Hash Functions</h2>
    <div className="space-y-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">1. Deterministic</h3>
        <p className="dark:text-gray-300">The same input always produces the same output hash value.</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">2. Fixed Output Size</h3>
        <p className="dark:text-gray-300">Regardless of input size, the hash output is always the same length (e.g., SHA-256 produces 256 bits).</p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">3. Pre-image Resistance (One-way)</h3>
        <p className="dark:text-gray-300">Given a hash h, it should be computationally infeasible to find any message m such that hash(m) = h.</p>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">4. Second Pre-image Resistance</h3>
        <p className="dark:text-gray-300">Given input m1, it should be hard to find a different m2 where hash(m1) = hash(m2).</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 dark:text-white">5. Collision Resistance</h3>
        <p className="dark:text-gray-300">It should be computationally infeasible to find any two different inputs that produce the same hash.</p>
      </div>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="font-bold mb-2 dark:text-white">6. Avalanche Effect</h3>
        <p className="dark:text-gray-300">A small change in input produces a drastically different hash output.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Hash Function Visualization</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <div className="text-center dark:text-gray-300 space-y-2 font-mono text-sm text-gray-900">
        <p>Input: "Hello"</p>
        <p>SHA-256: 185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</p>
        <p className="mt-2">Input: "hello" (lowercase)</p>
        <p>SHA-256: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824</p>
        <p className="mt-2 text-yellow-600 dark:text-yellow-400">One character change = completely different hash (avalanche effect)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Hash Algorithms</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithm</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Output Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Security</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">MD5</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">Broken (collisions found)</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-1</td>
            <td className="border border-gray-300 px-4 py-2">160 bits</td>
            <td className="border border-gray-300 px-4 py-2">Broken (collisions found)</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-256</td>
            <td className="border border-gray-300 px-4 py-2">256 bits</td>
            <td className="border border-gray-300 px-4 py-2">128-bit security</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-384</td>
            <td className="border border-gray-300 px-4 py-2">384 bits</td>
            <td className="border border-gray-300 px-4 py-2">192-bit security</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-512</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">256-bit security</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-3</td>
            <td className="border border-gray-300 px-4 py-2">224/256/384/512 bits</td>
            <td className="border border-gray-300 px-4 py-2">Variable</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Current Standard</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">BLAKE2/BLAKE3</td>
            <td className="border border-gray-300 px-4 py-2">Variable</td>
            <td className="border border-gray-300 px-4 py-2">Strong</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Modern, Fast</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Applications of Hash Functions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Data Integrity</h3>
        <p className="dark:text-gray-300 text-sm">
          Verify files haven't been modified. Compare hash of downloaded file to published hash.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Password Storage</h3>
        <p className="dark:text-gray-300 text-sm">
          Store hashed passwords instead of plaintext. Use specialized functions like bcrypt, Argon2.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Digital Signatures</h3>
        <p className="dark:text-gray-300 text-sm">
          Hash the message before signing, making signatures efficient regardless of message size.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Blockchain/Cryptocurrencies</h3>
        <p className="dark:text-gray-300 text-sm">
          Chain blocks together; mining involves finding hashes with specific properties.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Message Authentication Codes</h3>
        <p className="dark:text-gray-300 text-sm">
          HMAC combines hash function with secret key for message authentication.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Deduplication</h3>
        <p className="dark:text-gray-300 text-sm">
          Identify duplicate files or data blocks by comparing their hashes.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Birthday Attack</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <p className="dark:text-gray-300">
        The birthday attack exploits the mathematics of the birthday paradox to find collisions.
        For an n-bit hash, finding a collision requires approximately 2^(n/2) attempts, not 2^n.
      </p>
      <p className="mt-2 dark:text-gray-300">
        This is why 128-bit hashes like MD5 only provide 64-bit collision resistance, making them
        vulnerable with modern computing power.
      </p>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Hash functions produce fixed-size output from arbitrary input</li>
        <li>They must be one-way, collision-resistant, and exhibit the avalanche effect</li>
        <li>MD5 and SHA-1 are broken; use SHA-256 or SHA-3 for security applications</li>
        <li>Hash functions are essential for integrity verification, digital signatures, and passwords</li>
        <li>The birthday attack reduces collision resistance to half the hash bit length</li>
      </ul>
    </div>
  </div>
);

export default HashFunctions;
