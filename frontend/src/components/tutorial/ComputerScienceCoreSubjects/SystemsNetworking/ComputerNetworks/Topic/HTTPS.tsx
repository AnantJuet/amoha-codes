import React from 'react';

const HTTPS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HTTPS (HTTP Secure)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      HTTPS is the secure version of HTTP, using TLS (Transport Layer Security) to encrypt
      communication between the browser and server. It provides confidentiality, integrity,
      and authentication, protecting sensitive data from eavesdropping and tampering.
    </p>

    <h2 className="text-3xl font-bold mt-8">HTTP vs HTTPS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">HTTP</th>
            <th className="p-3 border">HTTPS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Port</td>
            <td className="p-3 border">80</td>
            <td className="p-3 border">443</td>
          </tr>
          <tr>
            <td className="p-3 border">Encryption</td>
            <td className="p-3 border">None (plaintext)</td>
            <td className="p-3 border">TLS/SSL encrypted</td>
          </tr>
          <tr>
            <td className="p-3 border">Certificate</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required (SSL cert)</td>
          </tr>
          <tr>
            <td className="p-3 border">URL Prefix</td>
            <td className="p-3 border">http://</td>
            <td className="p-3 border">https://</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Vulnerable to attacks</td>
            <td className="p-3 border">Protected</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slightly faster</td>
            <td className="p-3 border">Minor overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTPS Connection Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    HTTPS Connection (TLS Handshake):

    Client                              Server
       |                                   |
       |-- 1. TCP SYN ------------------>  |
       |<- 2. TCP SYN-ACK ---------------- |
       |-- 3. TCP ACK ------------------>  |
       |                                   |
       |===== TLS Handshake Begins =====   |
       |                                   |
       |-- 4. ClientHello -------------->  | (TLS version, ciphers)
       |                                   |
       |<- 5. ServerHello --------------- | (chosen cipher)
       |<- 6. Certificate --------------- | (server's SSL cert)
       |<- 7. ServerHelloDone ----------- |
       |                                   |
       |-- 8. ClientKeyExchange -------->  | (encrypted premaster)
       |-- 9. ChangeCipherSpec --------->  |
       |-- 10. Finished ---------------->  |
       |                                   |
       |<- 11. ChangeCipherSpec --------- |
       |<- 12. Finished ----------------- |
       |                                   |
       |====== Secure Channel Ready ====== |
       |                                   |
       |-- GET /page.html (encrypted) -->  |
       |<-- Response (encrypted) -------- |
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTTPS Security Features</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Confidentiality</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data is encrypted</li>
          <li>Cannot be read if intercepted</li>
          <li>Protects passwords, cards</li>
          <li>Uses symmetric encryption</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Integrity</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data cannot be modified</li>
          <li>MAC verifies content</li>
          <li>Detects tampering</li>
          <li>Prevents MITM changes</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Authentication</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Server identity verified</li>
          <li>Digital certificates</li>
          <li>Trusted CA chain</li>
          <li>Prevents impersonation</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSL/TLS Certificates</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Certificate Structure:

    +----------------------------------+
    |        SSL Certificate           |
    +----------------------------------+
    | Subject: www.example.com         |
    | Issuer: DigiCert CA              |
    | Valid From: Jan 1, 2026          |
    | Valid To: Jan 1, 2027            |
    | Public Key: RSA 2048-bit         |
    | Signature: SHA-256               |
    +----------------------------------+

    Certificate Chain:
    +------------------+
    |   Root CA        |  <- Trusted, built into browser
    +------------------+
            |
    +------------------+
    | Intermediate CA  |  <- Signed by Root CA
    +------------------+
            |
    +------------------+
    | Server Cert      |  <- Signed by Intermediate
    +------------------+

    Types:
    - DV (Domain Validation): Basic, automated
    - OV (Organization Validation): Verified company
    - EV (Extended Validation): Highest trust
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS Versions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Version</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SSL 2.0/3.0</td>
            <td className="p-3 border">1995/1996</td>
            <td className="p-3 border">Deprecated (insecure)</td>
          </tr>
          <tr>
            <td className="p-3 border">TLS 1.0</td>
            <td className="p-3 border">1999</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border">TLS 1.1</td>
            <td className="p-3 border">2006</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border">TLS 1.2</td>
            <td className="p-3 border">2008</td>
            <td className="p-3 border">Widely used</td>
          </tr>
          <tr>
            <td className="p-3 border">TLS 1.3</td>
            <td className="p-3 border">2018</td>
            <td className="p-3 border">Recommended (fastest)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>HTTPS = HTTP + TLS encryption (port 443)</li>
        <li>Provides confidentiality, integrity, authentication</li>
        <li>SSL certificates verify server identity</li>
        <li>TLS 1.2/1.3 are the current secure versions</li>
        <li>Certificate chain links to trusted root CA</li>
        <li>Essential for any site handling sensitive data</li>
      </ul>
    </div>
  </div>
);

export default HTTPS;
