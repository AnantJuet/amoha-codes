import React from "react";

const DigitalCertificates: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Digital Certificates
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Digital certificates are electronic documents that bind a public key to an entity's identity.
      They are issued by trusted Certificate Authorities (CAs) and form the foundation of trust
      in secure communications like HTTPS.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Digital Certificate?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Digital Certificate = Digital ID Card

Purpose:
"I certify that this public key belongs to this entity"
                                - Certificate Authority

Certificate Contains:
+------------------------------------------+
| Subject: www.example.com                 |
| Public Key: [RSA 2048-bit key...]        |
| Issuer: DigiCert Inc.                    |
| Valid From: 2025-01-01                   |
| Valid To: 2026-01-01                     |
| Serial Number: 12345678                  |
| Signature Algorithm: SHA256withRSA       |
| CA Signature: [Digital Signature]        |
+------------------------------------------+

The CA's signature proves the certificate is genuine`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">X.509 Certificate Format</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Version</td>
            <td className="p-3 border">X.509 version number</td>
            <td className="p-3 border">v3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Serial Number</td>
            <td className="p-3 border">Unique ID from CA</td>
            <td className="p-3 border">0x1A2B3C4D</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Subject</td>
            <td className="p-3 border">Entity the cert identifies</td>
            <td className="p-3 border">CN=example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Issuer</td>
            <td className="p-3 border">CA that issued the cert</td>
            <td className="p-3 border">CN=DigiCert CA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Validity Period</td>
            <td className="p-3 border">Start and end dates</td>
            <td className="p-3 border">2025-01-01 to 2026-01-01</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Public Key</td>
            <td className="p-3 border">Subject's public key</td>
            <td className="p-3 border">RSA 2048-bit key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Signature</td>
            <td className="p-3 border">CA's digital signature</td>
            <td className="p-3 border">SHA256withRSA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Chain of Trust</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chain of Trust:

+------------------+
| Root CA          |  Self-signed, trusted by browsers
| (Built into OS)  |  and operating systems
+------------------+
        |
        | Signs
        v
+------------------+
| Intermediate CA  |  Signed by Root CA
| (Issuing CA)     |  Issues end-entity certificates
+------------------+
        |
        | Signs
        v
+------------------+
| End-Entity Cert  |  Your website's certificate
| (Server Cert)    |  Signed by Intermediate CA
+------------------+

Verification Process:
1. Server sends its certificate + intermediate(s)
2. Browser verifies signature chain up to Root CA
3. Root CA is pre-trusted (installed in browser/OS)
4. If chain is valid, connection is trusted`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Certificates</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Validation Level</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DV (Domain Validation)</td>
            <td className="p-3 border">Domain ownership only</td>
            <td className="p-3 border">Basic websites, blogs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OV (Organization)</td>
            <td className="p-3 border">Domain + organization verified</td>
            <td className="p-3 border">Business websites</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">EV (Extended)</td>
            <td className="p-3 border">Strict verification process</td>
            <td className="p-3 border">Banks, e-commerce</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Wildcard</td>
            <td className="p-3 border">Covers all subdomains</td>
            <td className="p-3 border">*.example.com</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SAN/Multi-domain</td>
            <td className="p-3 border">Multiple domains in one cert</td>
            <td className="p-3 border">Multiple sites</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Revocation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Certificate Revocation Methods:

1. CRL (Certificate Revocation List)
   - CA publishes list of revoked certificates
   - Clients download and check the list
   - Can be large and slow to update

2. OCSP (Online Certificate Status Protocol)
   - Real-time status check with CA
   - Query: "Is this certificate valid?"
   - Response: "Good", "Revoked", or "Unknown"

3. OCSP Stapling
   - Server fetches OCSP response
   - Includes it in TLS handshake
   - More efficient, better privacy

Reasons for Revocation:
- Private key compromised
- Certificate holder no longer trusted
- Certificate issued incorrectly
- Organization changes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Authorities</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>DigiCert:</strong> Major commercial CA</li>
      <li><strong>Let's Encrypt:</strong> Free, automated certificates</li>
      <li><strong>Comodo/Sectigo:</strong> Wide range of certificate types</li>
      <li><strong>GlobalSign:</strong> Enterprise solutions</li>
      <li><strong>GoDaddy:</strong> Domain registrar with CA services</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Certificates bind public keys to identities</li>
        <li>Trust flows from Root CAs through Intermediates</li>
        <li>X.509 is the standard certificate format</li>
        <li>Different validation levels for different trust needs</li>
        <li>Check revocation status before trusting certificates</li>
        <li>Let's Encrypt provides free DV certificates</li>
      </ul>
    </div>
  </div>
);

export default DigitalCertificates;
