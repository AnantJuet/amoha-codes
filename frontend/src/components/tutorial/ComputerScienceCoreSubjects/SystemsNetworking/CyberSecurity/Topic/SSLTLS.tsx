import React from "react";

const SSLTLS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSL/TLS Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols
      that provide secure communication over networks. TLS is the successor to SSL and is used
      to secure web traffic (HTTPS), email, VoIP, and other communications.
    </p>

    <h2 className="text-3xl font-bold mt-8">SSL/TLS Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Protocol Evolution:

SSL 1.0 (Never released - security flaws)
SSL 2.0 (1995) - DEPRECATED, insecure
SSL 3.0 (1996) - DEPRECATED, POODLE attack
TLS 1.0 (1999) - DEPRECATED
TLS 1.1 (2006) - DEPRECATED
TLS 1.2 (2008) - Secure, widely used
TLS 1.3 (2018) - Current standard, fastest

Note: "SSL" is still commonly used to refer to TLS
      HTTPS uses TLS (not SSL) today

OSI Layer: Between Transport (4) and Application (7)
Purpose: Encryption, Authentication, Integrity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">What TLS Provides</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mechanism</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Confidentiality</td>
            <td className="p-3 border">Data cannot be read by others</td>
            <td className="p-3 border">Symmetric encryption (AES)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity</td>
            <td className="p-3 border">Data cannot be modified</td>
            <td className="p-3 border">MAC (HMAC, AEAD)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verify server identity</td>
            <td className="p-3 border">Digital certificates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS 1.2 vs TLS 1.3</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TLS Version Comparison:

TLS 1.2:
- 2 round trips for handshake
- Supports older cipher suites
- RSA key exchange available
- More configuration options
- Widely supported

TLS 1.3:
- 1 round trip (0-RTT resumption possible)
- Removed weak ciphers
- Only forward-secret key exchange
- Encrypted handshake
- ~100ms faster connection

TLS 1.3 Removed:
- RSA key exchange (no forward secrecy)
- RC4, DES, 3DES ciphers
- SHA-1 for signatures
- Static DH key exchange
- Compression (CRIME attack)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cipher Suites</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cipher Suite Components:

TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
    |     |        |   |   |     |
    |     |        |   |   |     +-- Hash for PRF
    |     |        |   |   +-------- Mode (GCM = AEAD)
    |     |        |   +------------ Key size
    |     |        +---------------- Bulk cipher
    |     +------------------------- Authentication
    +------------------------------- Key exchange

TLS 1.3 Simplified:
TLS_AES_256_GCM_SHA384
    |   |   |     |
    |   |   |     +-- Hash
    |   |   +-------- Mode
    |   +------------ Key size
    +---------------- Cipher

Recommended: ECDHE + AES-GCM or ChaCha20-Poly1305`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TLS Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>HTTPS:</strong> Secure web browsing (port 443)</li>
      <li><strong>SMTPS/IMAPS:</strong> Secure email (ports 465, 993)</li>
      <li><strong>FTPS:</strong> Secure file transfer</li>
      <li><strong>VPN:</strong> SSL/TLS VPNs (OpenVPN)</li>
      <li><strong>VoIP:</strong> Secure voice communication</li>
      <li><strong>Database:</strong> Encrypted database connections</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">TLS Best Practices</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use TLS 1.2 or 1.3 only (disable older versions)</li>
        <li>Use strong cipher suites with forward secrecy</li>
        <li>Enable HSTS to force HTTPS</li>
        <li>Use valid certificates from trusted CAs</li>
        <li>Implement certificate pinning where appropriate</li>
        <li>Regularly rotate and update certificates</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>TLS is the successor to SSL - use TLS terminology</li>
        <li>TLS 1.3 is faster and more secure than TLS 1.2</li>
        <li>Provides confidentiality, integrity, and authentication</li>
        <li>Use cipher suites with forward secrecy (ECDHE)</li>
        <li>Disable TLS 1.0, 1.1, and all SSL versions</li>
        <li>HTTPS = HTTP + TLS on port 443</li>
      </ul>
    </div>
  </div>
);

export default SSLTLS;
