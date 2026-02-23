import React from "react";

const SMIME: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      S/MIME (Secure/Multipurpose Internet Mail Extensions)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      S/MIME is a widely adopted standard for securing email communications through
      encryption and digital signatures. It provides end-to-end security, ensuring
      that only intended recipients can read messages and verifying the sender's identity.
      S/MIME relies on X.509 certificates and is supported by most enterprise email clients.
    </p>

    <h2 className="text-3xl font-bold mt-8">S/MIME vs PGP/GPG</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">S/MIME</th>
            <th className="p-3 border">PGP/GPG</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Trust Model</td>
            <td className="p-3 border">Hierarchical (CA-based)</td>
            <td className="p-3 border">Web of Trust (decentralized)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Certificate Source</td>
            <td className="p-3 border">Certificate Authority</td>
            <td className="p-3 border">Self-generated or keyservers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Support</td>
            <td className="p-3 border">Built into Outlook, Apple Mail</td>
            <td className="p-3 border">Requires plugins/add-ons</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Enterprise Use</td>
            <td className="p-3 border">Preferred (easier management)</td>
            <td className="p-3 border">Less common</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">Certificates may have cost</td>
            <td className="p-3 border">Free (open source)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Standards</td>
            <td className="p-3 border">RFC 8551 (S/MIME 4.0)</td>
            <td className="p-3 border">RFC 4880 (OpenPGP)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">S/MIME Security Services</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S/MIME SECURITY CAPABILITIES:

DIGITAL SIGNATURE (Authentication + Integrity)
├── Sender signs message with private key
├── Recipient verifies using sender's public key
├── Proves: Who sent the message (authentication)
├── Proves: Message wasn't modified (integrity)
├── Provides: Non-repudiation
└── Does NOT hide message content

ENCRYPTION (Confidentiality)
├── Sender encrypts with recipient's public key
├── Only recipient can decrypt with private key
├── Content hidden from eavesdroppers
├── Subject line and headers NOT encrypted
└── Can encrypt for multiple recipients

SIGN + ENCRYPT (Recommended)
├── Sign first, then encrypt
├── Provides all security properties
├── Recipient can verify after decryption
└── Standard practice for sensitive emails

S/MIME MESSAGE STRUCTURE:
┌────────────────────────────────────────────────────────┐
│ MIME Headers                                           │
│ Content-Type: multipart/signed; or                     │
│ Content-Type: application/pkcs7-mime                   │
├────────────────────────────────────────────────────────┤
│ Signed Data (if signed)                                │
│ ├── Original message                                   │
│ └── Digital signature (PKCS#7/CMS)                     │
├────────────────────────────────────────────────────────┤
│ Encrypted Data (if encrypted)                          │
│ ├── Encrypted session key (per recipient)              │
│ └── Encrypted content (AES-256)                        │
└────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">S/MIME Certificate Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Validation</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Trust Level</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Class 1</td>
            <td className="p-3 border">Email address only</td>
            <td className="p-3 border">Personal email</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Class 2</td>
            <td className="p-3 border">Email + identity verification</td>
            <td className="p-3 border">Business email</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Class 3</td>
            <td className="p-3 border">In-person verification</td>
            <td className="p-3 border">High-security applications</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">S/MIME Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Generate S/MIME certificate with OpenSSL

# 1. Create private key
$ openssl genrsa -aes256 -out email.key 4096

# 2. Create CSR (Certificate Signing Request)
$ openssl req -new -key email.key -out email.csr
Common Name: John Doe
Email Address: john.doe@example.com

# 3. Submit CSR to CA or self-sign (for testing)
$ openssl x509 -req -days 365 -in email.csr \
    -signkey email.key -out email.crt

# 4. Create PKCS#12 file for import into email client
$ openssl pkcs12 -export -in email.crt -inkey email.key \
    -out email.p12 -name "John Doe S/MIME"

# Sign a message (command line)
$ openssl smime -sign -in message.txt -out signed.msg \
    -signer email.crt -inkey email.key

# Encrypt a message
$ openssl smime -encrypt -aes256 -in message.txt \
    -out encrypted.msg recipient.crt

# Verify a signed message
$ openssl smime -verify -in signed.msg -CAfile ca-bundle.crt

# Decrypt a message
$ openssl smime -decrypt -in encrypted.msg \
    -recip email.crt -inkey email.key`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Email Client Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S/MIME SETUP IN EMAIL CLIENTS:

MICROSOFT OUTLOOK:
1. File → Options → Trust Center → Trust Center Settings
2. Email Security → Import/Export
3. Import .p12 certificate file
4. Select certificate for signing and encryption
5. Configure default security settings

APPLE MAIL (macOS/iOS):
1. Import certificate to Keychain Access
2. Certificate automatically detected
3. Compose email → lock icon (encrypt)
4. Compose email → checkmark icon (sign)

MOZILLA THUNDERBIRD:
1. Account Settings → End-to-End Encryption
2. Manage S/MIME Certificates
3. Import Your Personal Certificate (.p12)
4. Select certificate for signing/encryption

GMAIL:
- Native S/MIME only in Google Workspace
- Hosted S/MIME or client-side encryption
- Admin must enable in Google Admin Console`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">S/MIME Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Recommended</th>
            <th className="p-3 border">Avoid</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Content Encryption</td>
            <td className="p-3 border">AES-256-CBC, AES-256-GCM</td>
            <td className="p-3 border">3DES, RC2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key Encryption</td>
            <td className="p-3 border">RSA-OAEP, ECDH</td>
            <td className="p-3 border">RSA PKCS#1 v1.5</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Digital Signature</td>
            <td className="p-3 border">RSA-PSS, ECDSA</td>
            <td className="p-3 border">RSA PKCS#1 v1.5</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash Algorithm</td>
            <td className="p-3 border">SHA-256, SHA-384, SHA-512</td>
            <td className="p-3 border">MD5, SHA-1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>S/MIME uses X.509 certificates from trusted CAs</li>
        <li>Signing provides authentication, integrity, and non-repudiation</li>
        <li>Encryption protects message body but not subject/headers</li>
        <li>Best practice: sign first, then encrypt the signed message</li>
        <li>S/MIME is widely supported in enterprise email clients</li>
        <li>Certificate management is key to successful S/MIME deployment</li>
      </ul>
    </div>
  </div>
);

export default SMIME;
