import React from "react";

const DiffieHellman: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Diffie-Hellman Key Exchange
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Diffie-Hellman (DH) is a key exchange protocol that allows two parties to establish a shared
      secret over an insecure channel without prior knowledge of each other. This shared secret can
      then be used for symmetric encryption.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Key Exchange Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Problem:
Alice and Bob want to communicate securely, but:
- They've never met before
- Their only communication channel is public (insecure)
- Anyone can eavesdrop on their messages

The Challenge:
How can they agree on a secret key that only they know?

Before Diffie-Hellman:
- Keys had to be exchanged in person
- Or through trusted couriers
- Or pre-shared before communication

Diffie-Hellman Solution:
Establish a shared secret over a public channel!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Diffie-Hellman Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Diffie-Hellman Key Exchange:

Public Parameters (known to everyone):
- p: A large prime number
- g: A generator (primitive root mod p)

Step 1: Generate Private Keys
Alice: picks random private value 'a'
Bob:   picks random private value 'b'

Step 2: Compute Public Values
Alice: A = g^a mod p  (sends A to Bob)
Bob:   B = g^b mod p  (sends B to Alice)

Step 3: Compute Shared Secret
Alice: s = B^a mod p = (g^b)^a mod p = g^(ab) mod p
Bob:   s = A^b mod p = (g^a)^b mod p = g^(ab) mod p

Result: Both compute the SAME secret s = g^(ab) mod p

Eavesdropper sees: p, g, A, B
But cannot compute: s (Discrete Log Problem)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Analogy: Color Mixing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Color Mixing Analogy:

Public Color: Yellow (known to all)

Alice:                           Bob:
- Private: Red                   - Private: Blue
- Mix: Yellow + Red = Orange     - Mix: Yellow + Blue = Green
- Send Orange to Bob             - Send Green to Alice

Now:
Alice: Orange + Blue = Brown     Bob: Green + Red = Brown

Both get BROWN (shared secret)!

Eavesdropper:
- Sees: Yellow, Orange, Green
- Cannot unmix to get Red or Blue
- Cannot derive Brown`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example (Small Numbers)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Alice</th>
            <th className="p-3 border">Bob</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Public params</td>
            <td className="p-3 border">p=23, g=5</td>
            <td className="p-3 border">p=23, g=5</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Private key</td>
            <td className="p-3 border">a=6</td>
            <td className="p-3 border">b=15</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Public value</td>
            <td className="p-3 border">{`A = 5^6 mod 23 = 8`}</td>
            <td className="p-3 border">{`B = 5^15 mod 23 = 19`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Shared secret</td>
            <td className="p-3 border">{`s = 19^6 mod 23 = 2`}</td>
            <td className="p-3 border">{`s = 8^15 mod 23 = 2`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Requirement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Prime Size</td>
            <td className="p-3 border">Minimum 2048 bits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Private Values</td>
            <td className="p-3 border">Cryptographically random, sufficient size</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Generator</td>
            <td className="p-3 border">Must be a primitive root</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Must be combined with authentication</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Man-in-the-Middle Vulnerability</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Warning: DH alone is vulnerable to MITM attacks!</p>
      <p className="leading-relaxed">
        An attacker can intercept communications and establish separate keys with Alice and Bob.
        DH must be combined with authentication (certificates, signatures) to prevent MITM attacks.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Variants</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>ECDH (Elliptic Curve DH):</strong> Uses elliptic curves, smaller keys, faster</li>
      <li><strong>DHE (Ephemeral DH):</strong> New keys for each session, provides forward secrecy</li>
      <li><strong>ECDHE:</strong> Ephemeral ECDH, used in modern TLS</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>TLS/SSL:</strong> Key exchange in HTTPS connections</li>
      <li><strong>IPsec:</strong> VPN key establishment</li>
      <li><strong>SSH:</strong> Secure shell key exchange</li>
      <li><strong>Signal Protocol:</strong> Messaging encryption</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Allows secure key exchange over insecure channels</li>
        <li>Security based on Discrete Logarithm Problem</li>
        <li>Does not provide authentication - vulnerable to MITM</li>
        <li>Use ephemeral keys (DHE/ECDHE) for forward secrecy</li>
        <li>ECDH is preferred for efficiency</li>
        <li>Always combine with authentication mechanism</li>
      </ul>
    </div>
  </div>
);

export default DiffieHellman;
