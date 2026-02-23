import React from "react";

const AsymmetricEncryption: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Asymmetric Encryption
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Asymmetric encryption, also known as public-key cryptography, uses a pair of mathematically
      related keys: a public key for encryption and a private key for decryption. This solves the
      key distribution problem inherent in symmetric encryption.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Asymmetric Encryption Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Asymmetric Encryption Process:

    Alice                              Bob
      |                                 |
      |  Bob generates key pair:        |
      |  - Public Key (Pub_B)           |
      |  - Private Key (Priv_B)         |
      |                                 |
      |  Bob shares Pub_B publicly      |
      |<--------------------------------|
      |                                 |
      | Plaintext: "Secret Message"     |
      |     |                           |
      |     v                           |
      | Encrypt(P, Pub_B) = Ciphertext  |
      |                                 |
      | ------Ciphertext--------------->|
      |                                 |
      |    Decrypt(C, Priv_B) = P       |
      |    Only Bob can decrypt!        |
      |    "Secret Message"             |

Key Insight:
- Anyone can encrypt with public key
- Only private key holder can decrypt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Public vs Private Keys</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Public Key</th>
            <th className="p-3 border">Private Key</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Distribution</td>
            <td className="p-3 border">Shared openly</td>
            <td className="p-3 border">Kept secret</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Encryption</td>
            <td className="p-3 border">Used to encrypt</td>
            <td className="p-3 border">Used to decrypt</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Signing</td>
            <td className="p-3 border">Used to verify</td>
            <td className="p-3 border">Used to sign</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compromise</td>
            <td className="p-3 border">No security impact</td>
            <td className="p-3 border">Total compromise</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Asymmetric Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Use Cases</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">RSA</td>
            <td className="p-3 border">2048-4096 bits</td>
            <td className="p-3 border">Encryption, signatures, key exchange</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ECC</td>
            <td className="p-3 border">256-521 bits</td>
            <td className="p-3 border">TLS, mobile, IoT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Diffie-Hellman</td>
            <td className="p-3 border">2048+ bits</td>
            <td className="p-3 border">Key exchange only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DSA</td>
            <td className="p-3 border">2048-3072 bits</td>
            <td className="p-3 border">Digital signatures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. ENCRYPTION
   Sender encrypts with recipient's public key
   Only recipient can decrypt with private key

2. DIGITAL SIGNATURES
   Signer signs with their private key
   Anyone can verify with signer's public key

   Sign:    Signature = Sign(Hash(Message), PrivKey)
   Verify:  Valid = Verify(Hash(Message), Signature, PubKey)

3. KEY EXCHANGE
   Securely establish shared symmetric key
   Used in TLS handshake

4. AUTHENTICATION
   Prove identity by signing challenge
   Server verifies with known public key`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symmetric vs Asymmetric Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Symmetric</th>
            <th className="p-3 border">Asymmetric</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Keys</td>
            <td className="p-3 border">One shared key</td>
            <td className="p-3 border">Key pair (public + private)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Very fast</td>
            <td className="p-3 border">100-1000x slower</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Distribution</td>
            <td className="p-3 border">Requires secure channel</td>
            <td className="p-3 border">Public key freely shared</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Size</td>
            <td className="p-3 border">128-256 bits</td>
            <td className="p-3 border">2048-4096 bits (RSA)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Bulk data encryption</td>
            <td className="p-3 border">Key exchange, signatures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hybrid Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hybrid Encryption (Best of Both):

1. Generate random symmetric key (session key)
2. Encrypt data with symmetric key (fast)
3. Encrypt symmetric key with recipient's public key
4. Send both encrypted data and encrypted key

Encryption:
+------------------+    +------------------+
| Large Data       |    | Session Key      |
| + Session Key    |--->| + Public Key     |
| = Encrypted Data |    | = Encrypted Key  |
+------------------+    +------------------+

Decryption:
1. Decrypt session key with private key
2. Decrypt data with session key

Used in: TLS, PGP, S/MIME, SSH`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Uses two mathematically related keys (public and private)</li>
        <li>Solves the key distribution problem of symmetric encryption</li>
        <li>Much slower than symmetric encryption</li>
        <li>Provides encryption, signatures, and key exchange</li>
        <li>Hybrid systems combine asymmetric and symmetric for efficiency</li>
        <li>Private key must be protected - loss means total compromise</li>
      </ul>
    </div>
  </div>
);

export default AsymmetricEncryption;
