import React from "react";

const RSA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RSA Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RSA (Rivest-Shamir-Adleman) is one of the first public-key cryptosystems and is widely used
      for secure data transmission. Its security relies on the practical difficulty of factoring
      the product of two large prime numbers.
    </p>

    <h2 className="text-3xl font-bold mt-8">RSA Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RSA Key Facts:

+------------------------------------------+
|            RSA PARAMETERS                 |
+------------------------------------------+
| Type:            Asymmetric              |
| Invented:        1977                    |
| Inventors:       Rivest, Shamir, Adleman |
| Key Sizes:       2048, 3072, 4096 bits   |
| Security Basis:  Integer Factorization   |
| Uses:            Encryption, Signatures  |
+------------------------------------------+

Security Level (comparable symmetric):
- RSA-2048: ~112 bits
- RSA-3072: ~128 bits
- RSA-4096: ~140 bits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Key Generation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RSA Key Generation Steps:

Step 1: Choose two large prime numbers p and q
        (typically 1024+ bits each)

Step 2: Compute n = p * q
        (n is the modulus)

Step 3: Compute Euler's totient
        phi(n) = (p-1) * (q-1)

Step 4: Choose public exponent e
        - 1 < e < phi(n)
        - gcd(e, phi(n)) = 1
        - Common choice: e = 65537 (0x10001)

Step 5: Compute private exponent d
        d = e^(-1) mod phi(n)
        (d * e = 1 mod phi(n))

Public Key:  (n, e)  - Share openly
Private Key: (n, d)  - Keep secret

Note: p, q, and phi(n) should be destroyed
      after key generation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Encryption and Decryption</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Formula</th>
            <th className="p-3 border">Key Used</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border font-mono text-gray-900">{`C = M^e mod n`}</td>
            <td className="p-3 border">Public key (n, e)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Decryption</td>
            <td className="p-3 border font-mono text-gray-900">{`M = C^d mod n`}</td>
            <td className="p-3 border">Private key (n, d)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Signing</td>
            <td className="p-3 border font-mono text-gray-900">{`S = H(M)^d mod n`}</td>
            <td className="p-3 border">Private key (n, d)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Verification</td>
            <td className="p-3 border font-mono text-gray-900">{`H(M) = S^e mod n`}</td>
            <td className="p-3 border">Public key (n, e)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example (Small Numbers)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RSA Example (educational only - real keys are much larger):

Key Generation:
1. p = 61, q = 53
2. n = 61 * 53 = 3233
3. phi(n) = 60 * 52 = 3120
4. e = 17 (coprime with 3120)
5. d = 2753 (17 * 2753 mod 3120 = 1)

Public Key:  (3233, 17)
Private Key: (3233, 2753)

Encryption (Message M = 65):
C = 65^17 mod 3233 = 2790

Decryption:
M = 2790^2753 mod 3233 = 65

Note: Real RSA uses 2048+ bit numbers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Security Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Consideration</th>
            <th className="p-3 border">Requirement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Key Size</td>
            <td className="p-3 border">Minimum 2048 bits (3072+ recommended)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Prime Selection</td>
            <td className="p-3 border">Use cryptographically secure random primes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Padding</td>
            <td className="p-3 border">Use OAEP for encryption, PSS for signatures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Size</td>
            <td className="p-3 border">{`Message must be < n (use hybrid encryption)`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Padding Schemes</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>PKCS#1 v1.5:</strong> Legacy padding, vulnerable to timing attacks</li>
      <li><strong>OAEP (Optimal Asymmetric Encryption Padding):</strong> Recommended for encryption</li>
      <li><strong>PSS (Probabilistic Signature Scheme):</strong> Recommended for signatures</li>
    </ul>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">Warning: Never use textbook RSA (no padding) in real applications!</p>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>TLS/SSL:</strong> Key exchange and authentication</li>
      <li><strong>Digital Signatures:</strong> Code signing, document signing</li>
      <li><strong>Email Security:</strong> S/MIME, PGP</li>
      <li><strong>SSH:</strong> Authentication</li>
      <li><strong>Secure Boot:</strong> Firmware verification</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Security based on difficulty of factoring large numbers</li>
        <li>Use at least 2048-bit keys (3072+ recommended)</li>
        <li>Always use proper padding (OAEP/PSS)</li>
        <li>Slower than symmetric encryption - use hybrid approach</li>
        <li>Vulnerable to quantum computers (Shor's algorithm)</li>
        <li>Protect private key at all costs</li>
      </ul>
    </div>
  </div>
);

export default RSA;
