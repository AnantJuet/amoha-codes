import React from "react";

const DES: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Encryption Standard (DES)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      The Data Encryption Standard (DES) is a symmetric-key block cipher that was adopted as a
      federal standard in 1977. While now considered insecure due to its short key length,
      understanding DES is essential as it forms the foundation for many modern encryption concepts
      and its successor, Triple DES (3DES).
    </p>

    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <h3 className="font-bold text-red-700 dark:text-red-400">Security Warning</h3>
      <p className="dark:text-gray-300">
        DES is considered cryptographically broken and should not be used for new applications.
        It was officially deprecated by NIST in 2005. Use AES instead.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">DES Specifications</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Block Size</td>
            <td className="border border-gray-300 px-4 py-2">64 bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Size</td>
            <td className="border border-gray-300 px-4 py-2">64 bits (56 effective + 8 parity)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Number of Rounds</td>
            <td className="border border-gray-300 px-4 py-2">16</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Structure</td>
            <td className="border border-gray-300 px-4 py-2">Feistel Network</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">DES Algorithm Overview</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li><strong>Initial Permutation (IP):</strong> Rearranges the 64-bit input block</li>
        <li><strong>16 Feistel Rounds:</strong> Each round uses a 48-bit subkey derived from the main key</li>
        <li><strong>Final Permutation (FP):</strong> Inverse of initial permutation produces ciphertext</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Feistel Structure</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-4">
        DES uses a Feistel network structure where the 64-bit block is split into two 32-bit halves (L and R).
      </p>
      <div className="bg-white p-4 rounded font-mono text-sm text-gray-900">
        <p>For each round i (1 to 16):</p>
        <p className="ml-4">L[i] = R[i-1]</p>
        <p className="ml-4">R[i] = L[i-1] XOR F(R[i-1], K[i])</p>
        <p className="mt-2">Where F is the round function and K[i] is the subkey for round i</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">The F-Function (Round Function)</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Steps in F-Function:</h3>
        <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
          <li><strong>Expansion (E):</strong> 32 bits expanded to 48 bits</li>
          <li><strong>Key Mixing:</strong> XOR with 48-bit subkey</li>
          <li><strong>Substitution (S-boxes):</strong> 48 bits reduced to 32 bits via 8 S-boxes</li>
          <li><strong>Permutation (P):</strong> 32-bit output permuted</li>
        </ol>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">S-Boxes (Substitution Boxes)</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300">
        S-boxes are the core of DES security, providing non-linearity. Each of the 8 S-boxes:
      </p>
      <ul className="list-disc list-inside mt-2 dark:text-gray-300">
        <li>Takes 6-bit input</li>
        <li>Produces 4-bit output</li>
        <li>Uses a lookup table with 4 rows and 16 columns</li>
        <li>First and last input bits select row; middle 4 bits select column</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Schedule</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <p className="dark:text-gray-300 mb-2">
        The 56-bit key generates 16 subkeys (48 bits each) through:
      </p>
      <ol className="list-decimal list-inside space-y-1 dark:text-gray-300">
        <li>Permuted Choice 1 (PC-1): 64-bit key to 56 bits (removes parity)</li>
        <li>Split into two 28-bit halves (C and D)</li>
        <li>Left circular shifts (1 or 2 bits per round)</li>
        <li>Permuted Choice 2 (PC-2): Select 48 bits for each subkey</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Triple DES (3DES)</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <p className="dark:text-gray-300 mb-2">
        To address DES's short key length, Triple DES applies DES three times:
      </p>
      <div className="bg-white p-4 rounded font-mono text-sm text-gray-900 my-2">
        Ciphertext = E(K3, D(K2, E(K1, Plaintext)))
      </div>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>2-key 3DES:</strong> K1 = K3 (112-bit effective key)</li>
        <li><strong>3-key 3DES:</strong> All keys different (168-bit effective key)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Why DES is Insecure</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Vulnerability</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Short Key Length</td>
            <td className="border border-gray-300 px-4 py-2">56 bits can be brute-forced in hours with modern hardware</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Small Block Size</td>
            <td className="border border-gray-300 px-4 py-2">64-bit blocks vulnerable to birthday attacks</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Differential Cryptanalysis</td>
            <td className="border border-gray-300 px-4 py-2">Known plaintext attacks can reduce search space</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>DES is a 64-bit block cipher with 56-bit effective key using 16 Feistel rounds</li>
        <li>The F-function with S-boxes provides the cipher's security through non-linearity</li>
        <li>DES is deprecated due to its short key length; use AES instead</li>
        <li>Triple DES (3DES) extends DES security but is slower than AES</li>
        <li>Understanding DES helps grasp fundamental block cipher concepts</li>
      </ul>
    </div>
  </div>
);

export default DES;
