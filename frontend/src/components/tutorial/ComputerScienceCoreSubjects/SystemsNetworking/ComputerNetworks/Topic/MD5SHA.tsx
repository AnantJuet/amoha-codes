import React from "react";

const MD5SHA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MD5 and SHA Algorithms
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      MD5 (Message Digest Algorithm 5) and SHA (Secure Hash Algorithm) are among the most widely
      known cryptographic hash functions. While MD5 and SHA-1 are now considered insecure for
      cryptographic purposes, understanding their design helps appreciate the evolution of hash
      function security. The SHA-2 and SHA-3 families remain secure and widely used.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">MD5 (Message Digest 5)</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">DEPRECATED</span>
        <span className="dark:text-gray-300 font-bold">Do not use for security</span>
      </div>
      <p className="dark:text-gray-300 mb-4">
        Developed by Ronald Rivest in 1991 as an improvement over MD4. Produces a 128-bit hash value.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <tbody className="dark:text-gray-300">
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Output Size</td>
              <td className="border border-gray-300 px-4 py-2">128 bits (32 hex characters)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Block Size</td>
              <td className="border border-gray-300 px-4 py-2">512 bits</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Rounds</td>
              <td className="border border-gray-300 px-4 py-2">64 (4 rounds of 16 operations)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">Security</td>
              <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Broken - collisions found in seconds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">SHA Family Overview</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithm</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Output</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Block Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Rounds</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-0</td>
            <td className="border border-gray-300 px-4 py-2">160 bits</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Withdrawn</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-1</td>
            <td className="border border-gray-300 px-4 py-2">160 bits</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-224</td>
            <td className="border border-gray-300 px-4 py-2">224 bits</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">64</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Secure</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-256</td>
            <td className="border border-gray-300 px-4 py-2">256 bits</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">64</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-384</td>
            <td className="border border-gray-300 px-4 py-2">384 bits</td>
            <td className="border border-gray-300 px-4 py-2">1024 bits</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Secure</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-512</td>
            <td className="border border-gray-300 px-4 py-2">512 bits</td>
            <td className="border border-gray-300 px-4 py-2">1024 bits</td>
            <td className="border border-gray-300 px-4 py-2">80</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Secure</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SHA-3</td>
            <td className="border border-gray-300 px-4 py-2">224-512 bits</td>
            <td className="border border-gray-300 px-4 py-2">1600 bits</td>
            <td className="border border-gray-300 px-4 py-2">24</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Latest Standard</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">SHA-256 Structure</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li><strong>Padding:</strong> Message padded to multiple of 512 bits</li>
        <li><strong>Parsing:</strong> Divided into 512-bit blocks</li>
        <li><strong>Initialize Hash:</strong> 8 initial hash values (first 32 bits of fractional parts of square roots of first 8 primes)</li>
        <li><strong>Process Blocks:</strong> Each block goes through 64 rounds of operations</li>
        <li><strong>Final Hash:</strong> Concatenate the 8 working variables</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">SHA-3 (Keccak)</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <p className="dark:text-gray-300 mb-2">
        SHA-3 uses a completely different design called the sponge construction, based on the Keccak algorithm.
        Selected by NIST in 2012 after a public competition.
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Different internal structure from SHA-2 (not vulnerable to same attacks)</li>
        <li>Uses permutation-based sponge construction</li>
        <li>Also provides SHAKE128 and SHAKE256 (extendable output)</li>
        <li>Resistant to length extension attacks</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Hash Output Examples</h2>
    <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs overflow-x-auto text-gray-900">
      <p className="dark:text-gray-300 mb-2">Input: "Hello, World!"</p>
      <p className="dark:text-gray-300">MD5: 65a8e27d8879283831b664bd8b7f0ad4</p>
      <p className="dark:text-gray-300">SHA-1: 0a0a9f2a6772942557ab5355d76af442f8f65e01</p>
      <p className="dark:text-gray-300">SHA-256: dffd6021bb2bd5b0af676290809ec3a53191dd81c7f70a4b28688a362182986f</p>
      <p className="dark:text-gray-300">SHA-512: 374d794a95cdcfd8b35993185fef9ba368f160d8daf432d08ba9f1ed1e5abe6cc69291e0fa2fe0006a52570ef18c19def4e617c33ce52ef0a6e5fbe318cb0387</p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">When to Use What</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Recommended</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Avoid</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Digital Signatures</td>
            <td className="border border-gray-300 px-4 py-2">SHA-256, SHA-384, SHA-3</td>
            <td className="border border-gray-300 px-4 py-2">MD5, SHA-1</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TLS/SSL</td>
            <td className="border border-gray-300 px-4 py-2">SHA-256+</td>
            <td className="border border-gray-300 px-4 py-2">SHA-1, MD5</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Password Hashing</td>
            <td className="border border-gray-300 px-4 py-2">Argon2, bcrypt, scrypt</td>
            <td className="border border-gray-300 px-4 py-2">Plain SHA/MD5</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">File Checksums (non-security)</td>
            <td className="border border-gray-300 px-4 py-2">SHA-256, MD5 (legacy)</td>
            <td className="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">HMAC</td>
            <td className="border border-gray-300 px-4 py-2">HMAC-SHA256</td>
            <td className="border border-gray-300 px-4 py-2">HMAC-MD5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>MD5 (128-bit) and SHA-1 (160-bit) are cryptographically broken and should not be used for security</li>
        <li>SHA-256 is the most widely recommended hash function today</li>
        <li>SHA-3 uses a different design (sponge construction) and provides an alternative to SHA-2</li>
        <li>For password hashing, use specialized functions like Argon2 or bcrypt, not raw hash functions</li>
        <li>Always use the strongest hash function appropriate for your security requirements</li>
      </ul>
    </div>
  </div>
);

export default MD5SHA;
