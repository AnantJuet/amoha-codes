import React from "react";

const DigitalSignatures: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Signatures
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Digital signatures are cryptographic mechanisms that provide authentication, integrity, and
      non-repudiation for digital documents and messages. They are the electronic equivalent of
      handwritten signatures but offer much stronger security guarantees.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Digital Signatures Work</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Digital Signature Process:

SIGNING (by Sender):
+----------------+    +----------+    +-----------+
|    Document    |--->|   Hash   |--->| Sign with |
|                |    | Function |    | Private   |
+----------------+    +----------+    | Key       |
                           |          +-----------+
                           |               |
                           v               v
                      [Hash Value]    [Signature]

Send: Document + Signature

VERIFICATION (by Receiver):
+----------------+    +----------+
|    Document    |--->|   Hash   |---> Computed Hash
+----------------+    +----------+
                                              |
+-----------+    +----------+                 |
| Signature |--->| Decrypt  |---> Extracted  |
|           |    | w/ Public|     Hash       |
+-----------+    | Key      |         |      |
                 +----------+         v      v
                              Compare: Equal? = VALID`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Digital Signatures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verifies signer's identity</td>
            <td className="p-3 border">Know who signed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity</td>
            <td className="p-3 border">Detects any modification</td>
            <td className="p-3 border">Document unchanged</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-repudiation</td>
            <td className="p-3 border">Signer cannot deny signing</td>
            <td className="p-3 border">Legal evidence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Digital Signature Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Based On</th>
            <th className="p-3 border">Key Size</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">RSA-PSS</td>
            <td className="p-3 border">RSA</td>
            <td className="p-3 border">2048-4096 bits</td>
            <td className="p-3 border">General purpose</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DSA</td>
            <td className="p-3 border">Discrete Log</td>
            <td className="p-3 border">2048-3072 bits</td>
            <td className="p-3 border">Legacy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ECDSA</td>
            <td className="p-3 border">Elliptic Curves</td>
            <td className="p-3 border">256-521 bits</td>
            <td className="p-3 border">TLS, Bitcoin</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">EdDSA (Ed25519)</td>
            <td className="p-3 border">Edwards Curves</td>
            <td className="p-3 border">256 bits</td>
            <td className="p-3 border">SSH, modern apps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">RSA Signature Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RSA Digital Signature (simplified):

Signing:
1. Hash the message: h = Hash(M)
2. Sign the hash: S = h^d mod n
   (d = private key, n = modulus)

Verification:
1. Hash the received message: h' = Hash(M')
2. Recover hash from signature: h = S^e mod n
   (e = public key)
3. Compare: if h == h', signature is VALID

With Padding (RSA-PSS):
- Adds randomness for security
- Prevents mathematical attacks
- Required for secure implementations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Digital Signatures vs Handwritten</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Digital Signature</th>
            <th className="p-3 border">Handwritten</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Unique per document</td>
            <td className="p-3 border">Yes (changes with content)</td>
            <td className="p-3 border">No (always the same)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detects tampering</td>
            <td className="p-3 border">Yes (mathematically)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Easy to forge</td>
            <td className="p-3 border">No (cryptographically secure)</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Verification</td>
            <td className="p-3 border">Automated, certain</td>
            <td className="p-3 border">Manual, subjective</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Code Signing:</strong> Verify software authenticity and integrity</li>
      <li><strong>Email (S/MIME, PGP):</strong> Authenticate email senders</li>
      <li><strong>Documents:</strong> PDF signing, contracts, legal documents</li>
      <li><strong>TLS Certificates:</strong> Certificate Authority signatures</li>
      <li><strong>Blockchain:</strong> Transaction authorization</li>
      <li><strong>Software Updates:</strong> Verify update authenticity</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Implementation Considerations</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use proper padding schemes (PSS for RSA)</li>
        <li>Sign the hash, not the entire document</li>
        <li>Use secure hash functions (SHA-256 or higher)</li>
        <li>Protect private signing keys carefully</li>
        <li>Include timestamps for time-sensitive signatures</li>
        <li>Consider certificate-based systems for key management</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Digital signatures provide authentication, integrity, and non-repudiation</li>
        <li>Sign with private key, verify with public key</li>
        <li>Signature is unique to both document and signer</li>
        <li>ECDSA and EdDSA are efficient modern choices</li>
        <li>Hash the document before signing for efficiency</li>
        <li>Legally recognized in most jurisdictions</li>
      </ul>
    </div>
  </div>
);

export default DigitalSignatures;
