import React from "react";

const ECC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Elliptic Curve Cryptography
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Elliptic Curve Cryptography (ECC) is a public-key cryptography approach based on the algebraic
      structure of elliptic curves over finite fields. ECC provides the same security as RSA with
      significantly smaller key sizes, making it ideal for mobile and IoT devices.
    </p>

    <h2 className="text-3xl font-bold mt-8">ECC Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ECC vs RSA Key Size Comparison:

+----------------+----------------+----------------+
| Security Level | RSA Key Size   | ECC Key Size   |
+----------------+----------------+----------------+
|    80 bits     |   1024 bits    |    160 bits    |
|   112 bits     |   2048 bits    |    224 bits    |
|   128 bits     |   3072 bits    |    256 bits    |
|   192 bits     |   7680 bits    |    384 bits    |
|   256 bits     |  15360 bits    |    521 bits    |
+----------------+----------------+----------------+

ECC Advantages:
- Smaller keys = faster operations
- Less storage and bandwidth
- Ideal for constrained environments
- Same security with ~10x smaller keys`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Elliptic Curve Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Elliptic Curve Equation (Weierstrass form):

y^2 = x^3 + ax + b

Where: 4a^3 + 27b^2 != 0 (ensures no singularities)

Visual representation:
        y
        |      *
        |    *   *
        |   *     *
   -----+--*-------*------ x
        |   *     *
        |    *   *
        |      *

Key Property: Point Addition
Given points P and Q on curve,
P + Q = R (also on curve)

For cryptography:
Points are on a curve over a finite field
(not real numbers)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ECC Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Difficulty</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Point Addition</td>
            <td className="p-3 border">P + Q = R</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalar Multiplication</td>
            <td className="p-3 border">k * P = Q (add P to itself k times)</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Discrete Log (ECDLP)</td>
            <td className="p-3 border">Given P and Q, find k where Q = k * P</td>
            <td className="p-3 border">Hard (Security basis)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ECDH Key Exchange</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Elliptic Curve Diffie-Hellman (ECDH):

Public Parameters:
- Curve E and base point G

Alice:                           Bob:
- Private key: a                 - Private key: b
- Public key: A = a*G            - Public key: B = b*G

Exchange public keys...

Shared Secret:
Alice: S = a*B = a*(b*G) = (a*b)*G
Bob:   S = b*A = b*(a*G) = (a*b)*G

Both derive same point S!

Attacker knows: E, G, A, B
Cannot compute: a, b, or S (ECDLP is hard)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common ECC Curves</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Curve</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">P-256</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">NIST</td>
            <td className="p-3 border">TLS, general purpose</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">P-384</td>
            <td className="p-3 border">384 bits</td>
            <td className="p-3 border">NIST</td>
            <td className="p-3 border">Higher security</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Curve25519</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Bernstein</td>
            <td className="p-3 border">Key exchange (X25519)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">secp256k1</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">SEC</td>
            <td className="p-3 border">Bitcoin, Ethereum</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ECC Algorithms</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>ECDH:</strong> Key exchange (Elliptic Curve Diffie-Hellman)</li>
      <li><strong>ECDSA:</strong> Digital signatures (Elliptic Curve DSA)</li>
      <li><strong>EdDSA:</strong> Signatures using Edwards curves (Ed25519)</li>
      <li><strong>ECIES:</strong> Integrated encryption scheme</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>TLS 1.3:</strong> ECDHE key exchange is mandatory</li>
      <li><strong>Cryptocurrencies:</strong> Bitcoin, Ethereum use ECDSA</li>
      <li><strong>Mobile Devices:</strong> Efficient for limited resources</li>
      <li><strong>IoT:</strong> Smart cards, embedded systems</li>
      <li><strong>Secure Messaging:</strong> Signal Protocol uses Curve25519</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Same security as RSA with much smaller keys</li>
        <li>Security based on Elliptic Curve Discrete Log Problem</li>
        <li>Preferred for constrained environments</li>
        <li>P-256 and Curve25519 are widely used</li>
        <li>Faster than RSA for most operations</li>
        <li>Still vulnerable to quantum computers (like RSA)</li>
      </ul>
    </div>
  </div>
);

export default ECC;
