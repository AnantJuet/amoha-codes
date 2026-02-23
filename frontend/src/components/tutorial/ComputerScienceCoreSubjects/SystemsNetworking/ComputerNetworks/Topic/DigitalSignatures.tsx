import React from "react";

const DigitalSignatures: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Signatures
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A digital signature is a cryptographic mechanism that provides authentication, integrity,
      and non-repudiation for digital messages or documents. Like a handwritten signature on
      paper, it proves the origin and integrity of the signed content, but with mathematical
      certainty that cannot be forged.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Properties of Digital Signatures</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Authentication</h3>
        <p className="dark:text-gray-300">Verifies the identity of the signer. Only the owner of the private key could have created the signature.</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Integrity</h3>
        <p className="dark:text-gray-300">Any modification to the signed message will invalidate the signature, detecting tampering.</p>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Non-repudiation</h3>
        <p className="dark:text-gray-300">The signer cannot deny having signed the document since only they possess the private key.</p>
      </div>
      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
        <h3 className="font-bold mb-2 dark:text-white">Unforgeable</h3>
        <p className="dark:text-gray-300">Without the private key, creating a valid signature is computationally infeasible.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">How Digital Signatures Work</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <h3 className="font-bold mb-2 dark:text-white">Signing Process:</h3>
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li>Create a hash (digest) of the original message using a hash function</li>
        <li>Encrypt the hash using the signer's private key</li>
        <li>The encrypted hash is the digital signature</li>
        <li>Send the message along with the signature</li>
      </ol>

      <h3 className="font-bold mb-2 mt-4 dark:text-white">Verification Process:</h3>
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li>Decrypt the signature using the signer's public key to get the original hash</li>
        <li>Independently compute the hash of the received message</li>
        <li>Compare the two hashes</li>
        <li>If they match, the signature is valid</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Visual Process Flow</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="text-center dark:text-gray-300 space-y-2">
        <p className="font-bold">Signing:</p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="bg-white p-2 rounded border text-gray-900">Message</span>
          <span>→ Hash →</span>
          <span className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Digest</span>
          <span>+ Private Key →</span>
          <span className="bg-green-100 dark:bg-green-800 p-2 rounded">Signature</span>
        </div>
        <p className="font-bold mt-4">Verification:</p>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span className="bg-green-100 dark:bg-green-800 p-2 rounded">Signature</span>
          <span>+ Public Key →</span>
          <span className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Decrypted Digest</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          <span className="bg-white p-2 rounded border text-gray-900">Message</span>
          <span>→ Hash →</span>
          <span className="bg-yellow-100 dark:bg-yellow-800 p-2 rounded">Computed Digest</span>
        </div>
        <p className="mt-2">Compare: If digests match → Signature Valid</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Digital Signature Algorithms</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Algorithm</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Based On</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Key Size</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Usage</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">RSA-PSS</td>
            <td className="border border-gray-300 px-4 py-2">Integer Factorization</td>
            <td className="border border-gray-300 px-4 py-2">2048-4096 bits</td>
            <td className="border border-gray-300 px-4 py-2">General purpose, TLS</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">DSA</td>
            <td className="border border-gray-300 px-4 py-2">Discrete Logarithm</td>
            <td className="border border-gray-300 px-4 py-2">2048-3072 bits</td>
            <td className="border border-gray-300 px-4 py-2">Government, legacy</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">ECDSA</td>
            <td className="border border-gray-300 px-4 py-2">Elliptic Curve</td>
            <td className="border border-gray-300 px-4 py-2">256-384 bits</td>
            <td className="border border-gray-300 px-4 py-2">Bitcoin, TLS, mobile</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">EdDSA (Ed25519)</td>
            <td className="border border-gray-300 px-4 py-2">Edwards Curves</td>
            <td className="border border-gray-300 px-4 py-2">256 bits</td>
            <td className="border border-gray-300 px-4 py-2">Modern, SSH, Signal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Digital Signature vs MAC</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Digital Signature</th>
            <th className="border border-gray-300 px-4 py-2 text-left">MAC</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Type</td>
            <td className="border border-gray-300 px-4 py-2">Asymmetric (public/private)</td>
            <td className="border border-gray-300 px-4 py-2">Symmetric (shared secret)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Non-repudiation</td>
            <td className="border border-gray-300 px-4 py-2">Yes</td>
            <td className="border border-gray-300 px-4 py-2">No</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Verification</td>
            <td className="border border-gray-300 px-4 py-2">Anyone with public key</td>
            <td className="border border-gray-300 px-4 py-2">Only parties with shared key</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Speed</td>
            <td className="border border-gray-300 px-4 py-2">Slower</td>
            <td className="border border-gray-300 px-4 py-2">Faster</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Applications</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Software Distribution:</strong> Code signing ensures software integrity</li>
        <li><strong>Email Security:</strong> S/MIME and PGP sign emails to prove authenticity</li>
        <li><strong>Legal Documents:</strong> Electronic signatures for contracts and agreements</li>
        <li><strong>Certificates:</strong> CAs sign certificates to validate identities</li>
        <li><strong>Blockchain:</strong> Transaction authorization in cryptocurrencies</li>
        <li><strong>Secure Boot:</strong> Verify firmware and OS integrity at startup</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Digital signatures provide authentication, integrity, and non-repudiation</li>
        <li>They use asymmetric cryptography: sign with private key, verify with public key</li>
        <li>The message is hashed before signing for efficiency</li>
        <li>Common algorithms include RSA, DSA, ECDSA, and EdDSA</li>
        <li>Digital signatures are essential for secure software distribution, legal documents, and PKI</li>
      </ul>
    </div>
  </div>
);

export default DigitalSignatures;
