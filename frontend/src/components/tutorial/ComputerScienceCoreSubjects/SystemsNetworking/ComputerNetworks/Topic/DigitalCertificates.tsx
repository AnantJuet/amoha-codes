import React from "react";

const DigitalCertificates: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Certificates
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      A digital certificate is an electronic document that binds a public key to an entity's identity.
      Issued by trusted Certificate Authorities (CAs), certificates enable secure communication by
      verifying that a public key truly belongs to the claimed owner. They form the backbone of
      Public Key Infrastructure (PKI) and enable secure HTTPS connections.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">X.509 Certificate Structure</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            <tr>
              <td className="border border-gray-300 px-4 py-2">Version</td>
              <td className="border border-gray-300 px-4 py-2">Certificate format version (v1, v2, v3)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Serial Number</td>
              <td className="border border-gray-300 px-4 py-2">Unique identifier assigned by CA</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Signature Algorithm</td>
              <td className="border border-gray-300 px-4 py-2">Algorithm used by CA to sign (e.g., SHA256-RSA)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Issuer</td>
              <td className="border border-gray-300 px-4 py-2">Distinguished Name of the CA</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Validity Period</td>
              <td className="border border-gray-300 px-4 py-2">Not Before and Not After dates</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Subject</td>
              <td className="border border-gray-300 px-4 py-2">Distinguished Name of certificate owner</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Subject Public Key</td>
              <td className="border border-gray-300 px-4 py-2">Public key and algorithm</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Extensions (v3)</td>
              <td className="border border-gray-300 px-4 py-2">Key usage, SAN, constraints, etc.</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">CA Signature</td>
              <td className="border border-gray-300 px-4 py-2">Digital signature from issuing CA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Certificate Authority (CA) Hierarchy</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="text-center dark:text-gray-300">
        <div className="bg-red-100 dark:bg-red-800 p-3 rounded inline-block">Root CA</div>
        <p className="text-sm">Self-signed, stored in trust stores</p>
        <div className="text-2xl my-2">↓</div>
        <div className="bg-orange-100 dark:bg-orange-800 p-3 rounded inline-block">Intermediate CA(s)</div>
        <p className="text-sm">Signed by root, issues end-entity certificates</p>
        <div className="text-2xl my-2">↓</div>
        <div className="bg-green-100 dark:bg-green-800 p-3 rounded inline-block">End-Entity Certificate</div>
        <p className="text-sm">Server/client certificates, signed by intermediate</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Types of Certificates</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Validation Level</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Domain Validated (DV)</td>
            <td className="border border-gray-300 px-4 py-2">Domain ownership only</td>
            <td className="border border-gray-300 px-4 py-2">Basic websites, blogs</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Organization Validated (OV)</td>
            <td className="border border-gray-300 px-4 py-2">Organization identity verified</td>
            <td className="border border-gray-300 px-4 py-2">Business websites</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Extended Validation (EV)</td>
            <td className="border border-gray-300 px-4 py-2">Rigorous identity checks</td>
            <td className="border border-gray-300 px-4 py-2">Banks, e-commerce</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Wildcard</td>
            <td className="border border-gray-300 px-4 py-2">Covers *.domain.com</td>
            <td className="border border-gray-300 px-4 py-2">Multiple subdomains</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Multi-Domain (SAN)</td>
            <td className="border border-gray-300 px-4 py-2">Multiple domain names</td>
            <td className="border border-gray-300 px-4 py-2">Multiple sites on one server</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Certificate Lifecycle</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li><strong>Key Generation:</strong> Generate public/private key pair</li>
        <li><strong>CSR Creation:</strong> Create Certificate Signing Request with public key</li>
        <li><strong>Validation:</strong> CA verifies identity based on certificate type</li>
        <li><strong>Issuance:</strong> CA signs and issues the certificate</li>
        <li><strong>Installation:</strong> Certificate installed on server</li>
        <li><strong>Usage:</strong> Certificate used for TLS connections</li>
        <li><strong>Renewal/Revocation:</strong> Certificate renewed before expiry or revoked if compromised</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Certificate Revocation</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 dark:text-white">CRL (Certificate Revocation List)</h3>
        <p className="dark:text-gray-300">
          Periodic list of revoked certificate serial numbers published by CA.
          Downloaded and cached by clients.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">OCSP (Online Certificate Status Protocol)</h3>
        <p className="dark:text-gray-300">
          Real-time query to CA about certificate status.
          More current but adds latency to connections.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Certificate Verification Process</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <ol className="list-decimal list-inside space-y-2 dark:text-gray-300">
        <li>Check certificate validity period (not expired)</li>
        <li>Verify the certificate chain up to a trusted root CA</li>
        <li>Validate each signature in the chain</li>
        <li>Check certificate is not revoked (CRL/OCSP)</li>
        <li>Verify the domain name matches the certificate</li>
        <li>Check key usage and constraints</li>
      </ol>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common Certificate Authorities</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">DigiCert</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Let's Encrypt</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">Comodo/Sectigo</div>
      <div className="bg-gray-50 p-3 rounded text-center text-gray-900">GlobalSign</div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Digital certificates bind public keys to identities, enabling trust</li>
        <li>X.509 is the standard format containing subject, public key, issuer, and CA signature</li>
        <li>Certificate chains establish trust from end-entity to root CA</li>
        <li>Different validation levels (DV, OV, EV) provide varying assurance</li>
        <li>Revocation checking (CRL, OCSP) prevents use of compromised certificates</li>
      </ul>
    </div>
  </div>
);

export default DigitalCertificates;
