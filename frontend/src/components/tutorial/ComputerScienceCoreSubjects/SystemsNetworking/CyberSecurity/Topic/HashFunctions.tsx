import React from "react";

const HashFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hash Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cryptographic hash functions are one-way mathematical algorithms that convert input data of
      any size into a fixed-size output (hash or digest). They are fundamental to digital signatures,
      password storage, and data integrity verification.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Hash Functions Work</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hash Function Concept:

Input (any size) --> [Hash Function] --> Fixed Output (digest)

Examples:
"Hello" --> SHA-256 --> 185f8db32271fe25f561a6fc938b2e26...
"Hello!" --> SHA-256 --> 334d016f755cd6dc58c53a86e183882f...

Key Characteristics:
1. Same input always produces same output (deterministic)
2. Output is fixed size (e.g., 256 bits for SHA-256)
3. Cannot reverse hash to get input (one-way)
4. Small input change = completely different output
5. Computationally infeasible to find collisions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Cryptographic Hash Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Importance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Pre-image Resistance</td>
            <td className="p-3 border">Given h, hard to find m where H(m)=h</td>
            <td className="p-3 border">Protects original data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Second Pre-image Resistance</td>
            <td className="p-3 border">{`Given m1, hard to find m2 where H(m1)=H(m2)`}</td>
            <td className="p-3 border">Prevents forgery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Collision Resistance</td>
            <td className="p-3 border">{`Hard to find any m1, m2 where H(m1)=H(m2)`}</td>
            <td className="p-3 border">Integrity assurance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Avalanche Effect</td>
            <td className="p-3 border">1-bit input change = ~50% output change</td>
            <td className="p-3 border">Hides patterns</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Avalanche Effect Demonstration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Avalanche Effect (SHA-256):

Input 1: "Hello World"
Hash:    a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

Input 2: "Hello World!" (just added '!')
Hash:    7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069

Input 3: "hello World" (changed 'H' to 'h')
Hash:    db8ac1c259eb89d4a131b253bacfca5f319d54f2b66e79e6d5b8bf91f4f98c0

Notice: Completely different hashes!
Even one character change produces entirely different output`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Hash Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Output Size</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">MD5</td>
            <td className="p-3 border">128 bits</td>
            <td className="p-3 border">Broken</td>
            <td className="p-3 border">Checksums only (non-security)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-1</td>
            <td className="p-3 border">160 bits</td>
            <td className="p-3 border">Deprecated</td>
            <td className="p-3 border">Legacy systems only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-256</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">Secure</td>
            <td className="p-3 border">General purpose, TLS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SHA-3</td>
            <td className="p-3 border">224-512 bits</td>
            <td className="p-3 border">Secure</td>
            <td className="p-3 border">Alternative to SHA-2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">BLAKE2/3</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Secure</td>
            <td className="p-3 border">High performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash Function Applications</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. PASSWORD STORAGE
   - Never store plaintext passwords
   - Store: hash(password + salt)
   - Use password-specific hashes (bcrypt, Argon2)

2. DATA INTEGRITY
   - Verify file downloads haven't been modified
   - Detect tampering in transit
   - Database checksums

3. DIGITAL SIGNATURES
   - Sign hash of document (not entire document)
   - Sign(Hash(Document), PrivateKey)
   - Much faster than signing full document

4. MESSAGE AUTHENTICATION CODES (MAC)
   - HMAC = Hash-based MAC
   - HMAC(K, M) = H((K XOR opad) || H((K XOR ipad) || M))

5. BLOCKCHAIN
   - Chain blocks using hashes
   - Proof of work mining
   - Transaction verification`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hash Functions vs Encryption</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hash Functions</th>
            <th className="p-3 border">Encryption</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Direction</td>
            <td className="p-3 border">One-way only</td>
            <td className="p-3 border">Two-way (reversible)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Required</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Output Size</td>
            <td className="p-3 border">Fixed</td>
            <td className="p-3 border">Varies with input</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Integrity, fingerprinting</td>
            <td className="p-3 border">Confidentiality</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Hash functions are one-way - cannot be reversed</li>
        <li>Same input always produces same output</li>
        <li>Small input change creates completely different hash</li>
        <li>MD5 and SHA-1 are broken - use SHA-256 or SHA-3</li>
        <li>For passwords, use specialized functions (bcrypt, Argon2)</li>
        <li>Hashes verify integrity, not confidentiality</li>
      </ul>
    </div>
  </div>
);

export default HashFunctions;
