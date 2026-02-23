import React from "react";

const AES: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Advanced Encryption Standard (AES)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      The Advanced Encryption Standard (AES) is the most widely used symmetric encryption algorithm today.
      Adopted by NIST in 2001 to replace DES, AES (originally named Rijndael) provides strong security
      with excellent performance. It is used in SSL/TLS, file encryption, wireless security, and countless
      other applications.
    </p>

    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <h3 className="font-bold text-green-700 dark:text-green-400">Current Standard</h3>
      <p className="dark:text-gray-300">
        AES is approved by the U.S. government for protecting classified information and is the
        de facto standard for symmetric encryption worldwide.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">AES Specifications</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
            <th className="border border-gray-300 px-4 py-2 text-left">AES-128</th>
            <th className="border border-gray-300 px-4 py-2 text-left">AES-192</th>
            <th className="border border-gray-300 px-4 py-2 text-left">AES-256</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Length</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">192 bits</td>
            <td className="border border-gray-300 px-4 py-2">256 bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Block Size</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Number of Rounds</td>
            <td className="border border-gray-300 px-4 py-2">10</td>
            <td className="border border-gray-300 px-4 py-2">12</td>
            <td className="border border-gray-300 px-4 py-2">14</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">AES Structure: State Array</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-4">
        AES operates on a 4x4 matrix of bytes called the "state". The 128-bit input block is arranged as:
      </p>
      <div className="bg-white p-4 rounded font-mono text-sm text-gray-900 text-center">
        <div className="inline-block border border-gray-400">
          <div className="grid grid-cols-4 gap-0">
            <div className="border border-gray-400 p-2">b0</div>
            <div className="border border-gray-400 p-2">b4</div>
            <div className="border border-gray-400 p-2">b8</div>
            <div className="border border-gray-400 p-2">b12</div>
            <div className="border border-gray-400 p-2">b1</div>
            <div className="border border-gray-400 p-2">b5</div>
            <div className="border border-gray-400 p-2">b9</div>
            <div className="border border-gray-400 p-2">b13</div>
            <div className="border border-gray-400 p-2">b2</div>
            <div className="border border-gray-400 p-2">b6</div>
            <div className="border border-gray-400 p-2">b10</div>
            <div className="border border-gray-400 p-2">b14</div>
            <div className="border border-gray-400 p-2">b3</div>
            <div className="border border-gray-400 p-2">b7</div>
            <div className="border border-gray-400 p-2">b11</div>
            <div className="border border-gray-400 p-2">b15</div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">AES Round Operations</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">1. SubBytes (Substitution)</h3>
        <p className="dark:text-gray-300">
          Each byte is substituted using a fixed 16x16 lookup table (S-box) based on multiplicative
          inverse in GF(2^8) followed by an affine transformation. Provides non-linearity.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">2. ShiftRows (Permutation)</h3>
        <p className="dark:text-gray-300">
          Rows of the state are cyclically shifted left by different offsets:
          Row 0: no shift, Row 1: 1 byte, Row 2: 2 bytes, Row 3: 3 bytes.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">3. MixColumns (Diffusion)</h3>
        <p className="dark:text-gray-300">
          Each column is multiplied by a fixed matrix in GF(2^8). This spreads the influence
          of each input byte across multiple output bytes. Skipped in the final round.
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">4. AddRoundKey (Key Mixing)</h3>
        <p className="dark:text-gray-300">
          The state is XORed with the round key (128 bits derived from the main key through key expansion).
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">AES Algorithm Flow</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <pre className="dark:text-gray-300 text-sm overflow-x-auto">
{`Initial Round:
  AddRoundKey

Main Rounds (9, 11, or 13 times):
  SubBytes
  ShiftRows
  MixColumns
  AddRoundKey

Final Round:
  SubBytes
  ShiftRows
  AddRoundKey (no MixColumns)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Expansion</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <p className="dark:text-gray-300">
        The key expansion algorithm generates round keys from the original key:
      </p>
      <ul className="list-disc list-inside mt-2 dark:text-gray-300">
        <li>AES-128: 11 round keys (176 bytes)</li>
        <li>AES-192: 13 round keys (208 bytes)</li>
        <li>AES-256: 15 round keys (240 bytes)</li>
      </ul>
      <p className="mt-2 dark:text-gray-300">
        Uses RotWord, SubWord operations, and round constants (Rcon) for mixing.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">AES vs DES Comparison</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
            <th className="border border-gray-300 px-4 py-2 text-left">AES</th>
            <th className="border border-gray-300 px-4 py-2 text-left">DES</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Block Size</td>
            <td className="border border-gray-300 px-4 py-2">128 bits</td>
            <td className="border border-gray-300 px-4 py-2">64 bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Length</td>
            <td className="border border-gray-300 px-4 py-2">128/192/256 bits</td>
            <td className="border border-gray-300 px-4 py-2">56 bits</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Structure</td>
            <td className="border border-gray-300 px-4 py-2">Substitution-Permutation</td>
            <td className="border border-gray-300 px-4 py-2">Feistel Network</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Speed</td>
            <td className="border border-gray-300 px-4 py-2">Faster</td>
            <td className="border border-gray-300 px-4 py-2">Slower</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Security</td>
            <td className="border border-gray-300 px-4 py-2">Secure</td>
            <td className="border border-gray-300 px-4 py-2">Broken</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Use Cases</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>TLS/SSL encryption</li>
        <li>WiFi security (WPA2/WPA3)</li>
        <li>File and disk encryption</li>
        <li>VPN protocols</li>
      </ul>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Database encryption</li>
        <li>Messaging apps (Signal, WhatsApp)</li>
        <li>Password managers</li>
        <li>Government communications</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>AES is the current standard for symmetric encryption, replacing DES</li>
        <li>It supports 128, 192, and 256-bit keys with a fixed 128-bit block size</li>
        <li>AES uses a substitution-permutation network with 4 main operations per round</li>
        <li>Hardware acceleration (AES-NI) makes it extremely fast on modern processors</li>
        <li>AES-256 is considered quantum-resistant with sufficient security margin</li>
      </ul>
    </div>
  </div>
);

export default AES;
