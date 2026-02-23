import React from "react";

const RSA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RSA Algorithm
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      RSA (Rivest-Shamir-Adleman) is one of the first and most widely used public key cryptosystems.
      Invented in 1977, it is named after its creators Ron Rivest, Adi Shamir, and Leonard Adleman.
      RSA's security relies on the computational difficulty of factoring large integers that are
      the product of two prime numbers.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Generation Process</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <ol className="list-decimal list-inside space-y-3 dark:text-gray-300">
        <li>
          <strong>Select two large prime numbers p and q</strong>
          <p className="ml-6 text-sm">Typically 1024 bits each for RSA-2048</p>
        </li>
        <li>
          <strong>Compute n = p x q</strong>
          <p className="ml-6 text-sm">n is the modulus, used in both public and private keys</p>
        </li>
        <li>
          <strong>Calculate Euler's totient: phi(n) = (p-1)(q-1)</strong>
          <p className="ml-6 text-sm">Counts integers less than n that are coprime to n</p>
        </li>
        <li>
          <strong>Choose public exponent e</strong>
          <p className="ml-6 text-sm">1 &lt; e &lt; phi(n), gcd(e, phi(n)) = 1. Common choice: e = 65537</p>
        </li>
        <li>
          <strong>Compute private exponent d</strong>
          <p className="ml-6 text-sm">d = e^(-1) mod phi(n), i.e., d*e = 1 mod phi(n)</p>
        </li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Key Components</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Key</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Components</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Public Key</td>
            <td className="border border-gray-300 px-4 py-2">(n, e)</td>
            <td className="border border-gray-300 px-4 py-2">Encryption, Signature verification</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-semibold">Private Key</td>
            <td className="border border-gray-300 px-4 py-2">(n, d)</td>
            <td className="border border-gray-300 px-4 py-2">Decryption, Signature creation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Encryption and Decryption</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <div className="space-y-4 dark:text-gray-300">
        <div>
          <h3 className="font-bold dark:text-white">Encryption:</h3>
          <p className="font-mono bg-white p-2 rounded mt-1 text-gray-900">C = M^e mod n</p>
          <p className="text-sm">Where M is the plaintext message (as an integer), C is ciphertext</p>
        </div>
        <div>
          <h3 className="font-bold dark:text-white">Decryption:</h3>
          <p className="font-mono bg-white p-2 rounded mt-1 text-gray-900">M = C^d mod n</p>
          <p className="text-sm">Recovers original message using private exponent d</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Numerical Example</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 font-bold">Small example (not secure, for illustration):</p>
      <div className="mt-2 space-y-1 dark:text-gray-300 font-mono text-sm text-gray-900">
        <p>1. Choose p = 61, q = 53</p>
        <p>2. n = 61 x 53 = 3233</p>
        <p>3. phi(n) = 60 x 52 = 3120</p>
        <p>4. Choose e = 17 (coprime to 3120)</p>
        <p>5. d = 2753 (17 x 2753 = 46801 = 1 mod 3120)</p>
        <p className="mt-2">Public Key: (3233, 17)</p>
        <p>Private Key: (3233, 2753)</p>
        <p className="mt-2">Encrypt M = 65: C = 65^17 mod 3233 = 2790</p>
        <p>Decrypt C = 2790: M = 2790^2753 mod 3233 = 65</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Digital Signatures with RSA</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <div className="space-y-2 dark:text-gray-300">
        <p><strong>Signing:</strong> S = H(M)^d mod n</p>
        <p className="text-sm">Hash the message, then encrypt with private key</p>
        <p className="mt-2"><strong>Verification:</strong> H(M) = S^e mod n</p>
        <p className="text-sm">Decrypt signature with public key, compare to message hash</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">RSA Key Sizes</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Key Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Security Level</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">1024 bits</td>
            <td className="border border-gray-300 px-4 py-2">~80 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2048 bits</td>
            <td className="border border-gray-300 px-4 py-2">~112 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-yellow-600 dark:text-yellow-400">Minimum recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3072 bits</td>
            <td className="border border-gray-300 px-4 py-2">~128 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4096 bits</td>
            <td className="border border-gray-300 px-4 py-2">~140 bits</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">High security</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Security Considerations</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Padding:</strong> Raw RSA is vulnerable; always use OAEP or PKCS#1 v1.5 padding</li>
        <li><strong>Key Generation:</strong> Use cryptographically secure random number generators</li>
        <li><strong>Prime Selection:</strong> p and q should be similar size but not too close</li>
        <li><strong>Timing Attacks:</strong> Use constant-time implementations</li>
        <li><strong>Quantum Threat:</strong> RSA will be broken by quantum computers; consider post-quantum alternatives</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Applications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>TLS/SSL key exchange</li>
        <li>Email encryption (PGP)</li>
        <li>Code signing</li>
        <li>SSH authentication</li>
      </ul>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Digital certificates</li>
        <li>Document signing</li>
        <li>Secure boot</li>
        <li>Smart cards</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>RSA security relies on the difficulty of factoring large numbers</li>
        <li>Key generation involves selecting primes and computing modular inverse</li>
        <li>Encryption: C = M^e mod n; Decryption: M = C^d mod n</li>
        <li>Minimum 2048-bit keys recommended; 3072+ for long-term security</li>
        <li>Always use proper padding schemes (OAEP) to prevent attacks</li>
      </ul>
    </div>
  </div>
);

export default RSA;
