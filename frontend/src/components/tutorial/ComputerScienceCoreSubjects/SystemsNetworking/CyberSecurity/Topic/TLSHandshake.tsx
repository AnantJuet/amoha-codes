import React from "react";

const TLSHandshake: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      TLS Handshake
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The TLS handshake is the process by which a client and server establish a secure connection.
      During this process, they agree on protocol version, select cipher suites, authenticate
      the server (and optionally the client), and generate shared session keys.
    </p>

    <h2 className="text-3xl font-bold mt-8">TLS 1.2 Handshake</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TLS 1.2 Full Handshake (2-RTT):

Client                                Server
   |                                     |
   |  1. ClientHello                     |
   |  (version, random, cipher suites)   |
   |------------------------------------>|
   |                                     |
   |  2. ServerHello                     |
   |  (version, random, chosen cipher)   |
   |  3. Certificate                     |
   |  4. ServerKeyExchange (if ECDHE)    |
   |  5. ServerHelloDone                 |
   |<------------------------------------|
   |                                     |
   |  6. ClientKeyExchange               |
   |  7. ChangeCipherSpec                |
   |  8. Finished (encrypted)            |
   |------------------------------------>|
   |                                     |
   |  9. ChangeCipherSpec                |
   |  10. Finished (encrypted)           |
   |<------------------------------------|
   |                                     |
   |  ====== Encrypted Data =======      |
   |<===================================>|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS 1.3 Handshake</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TLS 1.3 Full Handshake (1-RTT):

Client                                Server
   |                                     |
   |  1. ClientHello                     |
   |  + key_share                        |
   |  + supported_versions               |
   |------------------------------------>|
   |                                     |
   |  2. ServerHello                     |
   |  + key_share                        |
   |  3. EncryptedExtensions             |
   |  4. Certificate                     |
   |  5. CertificateVerify               |
   |  6. Finished                        |
   |<------------------------------------|
   |                                     |
   |  7. Finished                        |
   |------------------------------------>|
   |                                     |
   |  ====== Encrypted Data =======      |
   |<===================================>|

Key improvement: Only 1 round trip!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handshake Steps Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">ClientHello</td>
            <td className="p-3 border">Propose TLS versions, ciphers, send random</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">ServerHello</td>
            <td className="p-3 border">Select version, cipher, send random</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Certificate</td>
            <td className="p-3 border">Server sends certificate chain</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Key Exchange</td>
            <td className="p-3 border">Exchange keys (ECDHE parameters)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Finished</td>
            <td className="p-3 border">Verify handshake integrity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Derivation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Material Generation:

Pre-Master Secret
    + Client Random
    + Server Random
         |
         v
    [PRF/HKDF]
         |
         v
    Master Secret
         |
         v
    +----+----+----+----+
    |    |    |    |    |
Client  Server Client Server
Write   Write  Write  Write
Key     Key    MAC    MAC

These keys are used for:
- Encrypting data (Write Keys)
- Message authentication (MAC Keys)
- Each direction has separate keys`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS 1.3 0-RTT Resumption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`0-RTT (Zero Round Trip Time) Resumption:

Client                                Server
   |                                     |
   |  ClientHello + early_data           |
   |  + Application Data (encrypted)     |
   |------------------------------------>|
   |                                     |
   |  ServerHello + Finished             |
   |  + Application Data                 |
   |<------------------------------------|

Benefit: First application data sent immediately!
Risk: Replay attacks possible on 0-RTT data
Use: Only for idempotent requests`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certificate Verification</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Chain Validation:</strong> Verify certificate chain to trusted root</li>
      <li><strong>Expiration:</strong> Check certificate is not expired</li>
      <li><strong>Revocation:</strong> Check CRL or OCSP for revocation</li>
      <li><strong>Hostname:</strong> Verify certificate matches requested domain</li>
      <li><strong>Signature:</strong> Verify CA signature is valid</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>TLS 1.3 handshake requires only 1 round trip (vs 2 for TLS 1.2)</li>
        <li>Client and server exchange random values for key derivation</li>
        <li>Server certificate is verified against trusted CAs</li>
        <li>Session keys are derived from pre-master secret</li>
        <li>0-RTT resumption is fast but has replay risks</li>
        <li>Forward secrecy uses ephemeral keys (ECDHE)</li>
      </ul>
    </div>
  </div>
);

export default TLSHandshake;
