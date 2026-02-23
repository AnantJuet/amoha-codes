import React from "react";

const PKI: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      PKI (Public Key Infrastructure)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Public Key Infrastructure (PKI) is a framework of policies, procedures, hardware, software,
      and people that manages digital certificates and public-key encryption. It enables secure
      electronic communication and authentication across untrusted networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">PKI Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PKI Components:

+--------------------------------------------------+
|                    PKI SYSTEM                     |
+--------------------------------------------------+
|                                                  |
|  +------------+     +------------+               |
|  | Certificate|     | Registration|              |
|  | Authority  |<--->| Authority  |              |
|  | (CA)       |     | (RA)       |              |
|  +------------+     +------------+               |
|        |                  ^                      |
|        |                  |                      |
|        v                  |                      |
|  +------------+     +------------+               |
|  | Certificate|     | End Users/ |              |
|  | Repository |     | Entities   |              |
|  +------------+     +------------+               |
|        |                                         |
|        v                                         |
|  +------------+                                  |
|  | Validation |                                  |
|  | Services   |                                  |
|  | (CRL/OCSP) |                                  |
|  +------------+                                  |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PKI Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Role</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Certificate Authority (CA)</td>
            <td className="p-3 border">Issues and signs certificates</td>
            <td className="p-3 border">Trusted third party</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Registration Authority (RA)</td>
            <td className="p-3 border">Verifies identity before cert issuance</td>
            <td className="p-3 border">Identity verification</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Certificate Repository</td>
            <td className="p-3 border">Stores and distributes certificates</td>
            <td className="p-3 border">Certificate database</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Validation Authority</td>
            <td className="p-3 border">Provides revocation status</td>
            <td className="p-3 border">CRL/OCSP services</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">End Entity</td>
            <td className="p-3 border">Certificate holder (user/server)</td>
            <td className="p-3 border">Certificate subject</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Certificate Lifecycle:

1. KEY GENERATION
   - End entity generates key pair
   - Private key secured locally

2. CERTIFICATE REQUEST (CSR)
   - Create Certificate Signing Request
   - Submit to CA with public key

3. IDENTITY VERIFICATION
   - RA verifies requestor identity
   - Validation level depends on cert type

4. CERTIFICATE ISSUANCE
   - CA signs certificate
   - Certificate delivered to requestor

5. CERTIFICATE USAGE
   - Used for TLS, signing, encryption
   - Validated by relying parties

6. CERTIFICATE RENEWAL
   - Before expiration
   - May require re-verification

7. CERTIFICATE REVOCATION
   - If compromised or no longer needed
   - Published to CRL or OCSP`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Trust Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single CA</td>
            <td className="p-3 border">One CA for all certificates</td>
            <td className="p-3 border">Small organizations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Root CA with subordinate CAs</td>
            <td className="p-3 border">Web PKI (Internet)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mesh/Bridge</td>
            <td className="p-3 border">Cross-certified CAs</td>
            <td className="p-3 border">Inter-organization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web of Trust</td>
            <td className="p-3 border">Peer-to-peer trust (PGP)</td>
            <td className="p-3 border">Email, personal use</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">PKI in TLS/HTTPS</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`How PKI Enables HTTPS:

Browser                           Web Server
   |                                  |
   |  1. Request connection           |
   |--------------------------------->|
   |                                  |
   |  2. Server sends certificate     |
   |<---------------------------------|
   |                                  |
   |  3. Browser validates:           |
   |     - Is cert signed by          |
   |       trusted CA?                |
   |     - Is cert not expired?       |
   |     - Is cert not revoked?       |
   |     - Does domain match?         |
   |                                  |
   |  4. If valid, establish          |
   |     encrypted session            |
   |<================================>|
   |                                  |
   |  5. Secure communication         |
   |<================================>|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PKI Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>TLS/SSL:</strong> Secure web communications</li>
      <li><strong>Email Security:</strong> S/MIME encryption and signing</li>
      <li><strong>Code Signing:</strong> Verify software authenticity</li>
      <li><strong>VPN:</strong> Authentication for IPsec and SSL VPNs</li>
      <li><strong>Smart Cards:</strong> Physical tokens with certificates</li>
      <li><strong>Document Signing:</strong> Legal electronic signatures</li>
      <li><strong>IoT Security:</strong> Device authentication</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">PKI Challenges</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>CA Compromise:</strong> If a CA is compromised, all its certificates are suspect</li>
        <li><strong>Certificate Management:</strong> Tracking expiration, renewal across systems</li>
        <li><strong>Revocation Delays:</strong> Revoked certificates may still be accepted</li>
        <li><strong>Trust Issues:</strong> Not all CAs maintain equal security standards</li>
        <li><strong>Complexity:</strong> Proper implementation requires expertise</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>PKI is the infrastructure for managing digital certificates</li>
        <li>Certificate Authorities are the foundation of trust</li>
        <li>Certificates have a lifecycle from issuance to revocation</li>
        <li>Hierarchical trust model is used by web browsers</li>
        <li>PKI enables secure HTTPS, email, and code signing</li>
        <li>Proper certificate management is critical for security</li>
      </ul>
    </div>
  </div>
);

export default PKI;
