import React from "react";

const ProtocolsOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Security Protocols Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security protocols are standardized methods for securing communication and data
      exchange between systems. They implement cryptographic algorithms to provide
      confidentiality, integrity, authentication, and non-repudiation across networks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Security Protocol Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Key Protocols</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network Layer</td>
            <td className="p-3 border">Secure IP communications</td>
            <td className="p-3 border">IPSec, DNSSEC</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transport Layer</td>
            <td className="p-3 border">Secure transport connections</td>
            <td className="p-3 border">TLS/SSL, DTLS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Application Layer</td>
            <td className="p-3 border">Secure specific applications</td>
            <td className="p-3 border">HTTPS, SSH, S/MIME</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Verify user/system identity</td>
            <td className="p-3 border">Kerberos, RADIUS, LDAP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Wireless</td>
            <td className="p-3 border">Secure wireless networks</td>
            <td className="p-3 border">WPA2, WPA3, 802.1X</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">OSI Model Security Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SECURITY PROTOCOLS BY OSI LAYER:

┌─────────────────────────────────────────────────────────┐
│ Layer 7 - Application                                   │
│ ├── HTTPS, SSH, S/MIME, PGP                             │
│ ├── LDAP/LDAPS, SNMP v3                                 │
│ └── Secure DNS (DoH, DoT)                               │
├─────────────────────────────────────────────────────────┤
│ Layer 6 - Presentation                                  │
│ └── SSL/TLS (encryption/encoding)                       │
├─────────────────────────────────────────────────────────┤
│ Layer 5 - Session                                       │
│ ├── Kerberos, RADIUS, TACACS+                           │
│ └── OAuth, SAML, OpenID Connect                         │
├─────────────────────────────────────────────────────────┤
│ Layer 4 - Transport                                     │
│ └── TLS, DTLS                                           │
├─────────────────────────────────────────────────────────┤
│ Layer 3 - Network                                       │
│ ├── IPSec (ESP, AH)                                     │
│ └── DNSSEC                                              │
├─────────────────────────────────────────────────────────┤
│ Layer 2 - Data Link                                     │
│ ├── WPA2/WPA3, 802.1X                                   │
│ ├── MACsec (802.1AE)                                    │
│ └── PPP (PAP, CHAP, EAP)                                │
├─────────────────────────────────────────────────────────┤
│ Layer 1 - Physical                                      │
│ └── Physical security, shielded cables                  │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Confidentiality</th>
            <th className="p-3 border">Integrity</th>
            <th className="p-3 border">Authentication</th>
            <th className="p-3 border">Port</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">IPSec</td>
            <td className="p-3 border">ESP encryption</td>
            <td className="p-3 border">AH/ESP</td>
            <td className="p-3 border">IKE</td>
            <td className="p-3 border">500 (IKE)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TLS 1.3</td>
            <td className="p-3 border">AES-GCM, ChaCha20</td>
            <td className="p-3 border">AEAD</td>
            <td className="p-3 border">Certificates</td>
            <td className="p-3 border">Application-specific</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SSH</td>
            <td className="p-3 border">AES, ChaCha20</td>
            <td className="p-3 border">HMAC</td>
            <td className="p-3 border">Keys, passwords</td>
            <td className="p-3 border">22</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kerberos</td>
            <td className="p-3 border">DES/AES (tickets)</td>
            <td className="p-3 border">Ticket checksums</td>
            <td className="p-3 border">KDC tickets</td>
            <td className="p-3 border">88</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RADIUS</td>
            <td className="p-3 border">Password hiding</td>
            <td className="p-3 border">Message-Authenticator</td>
            <td className="p-3 border">Shared secret</td>
            <td className="p-3 border">1812, 1813</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SECURITY PROTOCOL OBJECTIVES:

CONFIDENTIALITY
├── Ensures data cannot be read by unauthorized parties
├── Achieved through encryption (symmetric/asymmetric)
└── Examples: AES encryption in TLS, IPSec ESP

INTEGRITY
├── Ensures data has not been modified in transit
├── Achieved through hash functions and MACs
└── Examples: HMAC in TLS, AH in IPSec

AUTHENTICATION
├── Verifies identity of communicating parties
├── Achieved through certificates, tokens, credentials
└── Examples: X.509 certs, Kerberos tickets

NON-REPUDIATION
├── Prevents denial of having sent/received data
├── Achieved through digital signatures
└── Examples: Signed emails, code signing

FORWARD SECRECY
├── Past sessions remain secure if keys compromised
├── Achieved through ephemeral key exchange
└── Examples: DHE/ECDHE in TLS, IKEv2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Selection Criteria</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Security Requirements:</strong> Level of confidentiality, integrity needed</li>
      <li><strong>Performance:</strong> Encryption overhead, latency requirements</li>
      <li><strong>Compatibility:</strong> Support across systems and devices</li>
      <li><strong>Compliance:</strong> Regulatory requirements (PCI-DSS, HIPAA)</li>
      <li><strong>Manageability:</strong> Key management, certificate handling</li>
      <li><strong>Scalability:</strong> Ability to handle growing traffic/users</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Security protocols operate at different OSI layers</li>
        <li>TLS/SSL is the most widely used transport security protocol</li>
        <li>IPSec provides network-layer security for VPNs</li>
        <li>Kerberos is the primary authentication protocol in Active Directory</li>
        <li>Modern protocols should support perfect forward secrecy</li>
        <li>Always use the latest protocol versions to avoid vulnerabilities</li>
      </ul>
    </div>
  </div>
);

export default ProtocolsOverview;
