import React from "react";

const JWTStructure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      JWT Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A JSON Web Token consists of three parts separated by dots: Header, Payload, and Signature.
      Each part is Base64URL encoded, making JWTs compact and URL-safe. Understanding this
      structure is essential for properly implementing and securing JWT-based authentication.
    </p>

    <h2 className="text-3xl font-bold mt-8">JWT Format</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Structure:

xxxxx.yyyyy.zzzzz
  |      |      |
  |      |      +-- Signature
  |      +--------- Payload (Claims)
  +---------------- Header

Example JWT:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Note: Line breaks added for readability
Actual JWT is a single continuous string`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Header</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Header:

{
  "alg": "HS256",    // Signing algorithm
  "typ": "JWT"       // Token type
}

Common Algorithms:
+----------+------------------+------------------------+
| Algorithm| Type             | Use Case               |
+----------+------------------+------------------------+
| HS256    | HMAC + SHA256    | Shared secret          |
| HS384    | HMAC + SHA384    | Shared secret          |
| HS512    | HMAC + SHA512    | Shared secret          |
| RS256    | RSA + SHA256     | Public/private key     |
| RS384    | RSA + SHA384     | Public/private key     |
| RS512    | RSA + SHA512     | Public/private key     |
| ES256    | ECDSA + SHA256   | Elliptic curve keys    |
| PS256    | RSA-PSS + SHA256 | Enhanced RSA           |
+----------+------------------+------------------------+

Optional Header Claims:
- kid: Key ID (for key rotation)
- jku: JWK Set URL
- x5u: X.509 certificate URL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Payload (Claims)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Payload Contains Claims:

{
  // REGISTERED CLAIMS (standard)
  "iss": "https://auth.example.com",  // Issuer
  "sub": "user-12345",                // Subject
  "aud": "my-app",                    // Audience
  "exp": 1704067200,                  // Expiration (Unix timestamp)
  "nbf": 1704063600,                  // Not Before
  "iat": 1704063600,                  // Issued At
  "jti": "unique-token-id",           // JWT ID

  // PUBLIC CLAIMS (interoperable)
  "name": "John Doe",
  "email": "john@example.com",

  // PRIVATE CLAIMS (application-specific)
  "role": "admin",
  "permissions": ["read", "write"],
  "tenant_id": "org-456"
}

Claim Types:
1. Registered: Predefined, recommended
2. Public: Defined in IANA registry
3. Private: Custom, application-specific`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Registered Claims</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Claim</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">iss</td>
            <td className="p-3 border">Issuer</td>
            <td className="p-3 border">Who created the token</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">sub</td>
            <td className="p-3 border">Subject</td>
            <td className="p-3 border">Who the token is about</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">aud</td>
            <td className="p-3 border">Audience</td>
            <td className="p-3 border">Intended recipient(s)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">exp</td>
            <td className="p-3 border">Expiration</td>
            <td className="p-3 border">When token expires</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">nbf</td>
            <td className="p-3 border">Not Before</td>
            <td className="p-3 border">When token becomes valid</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">iat</td>
            <td className="p-3 border">Issued At</td>
            <td className="p-3 border">When token was created</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">jti</td>
            <td className="p-3 border">JWT ID</td>
            <td className="p-3 border">Unique identifier</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Signature</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Signature Creation:

HMAC Signature (symmetric):
signature = HMAC-SHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)

RSA Signature (asymmetric):
signature = RSA-SHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  privateKey
)

Verification Process:
1. Split token into header.payload.signature
2. Recalculate signature from header.payload
3. Compare with provided signature
4. If match: token is authentic and unmodified
5. If no match: token is invalid/tampered

Important:
- Signature proves authenticity, NOT confidentiality
- Payload is encoded, NOT encrypted
- Anyone can read the payload (Base64 decode)
- Only secret holder can create valid signature`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Encoding vs Encryption</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Critical Security Note:</p>
      <p className="leading-relaxed">
        JWTs are signed but NOT encrypted by default. The payload is simply Base64URL encoded,
        which is easily reversible. Never put sensitive information (passwords, secrets, PII)
        in a JWT payload unless you use JWE (JSON Web Encryption) to encrypt it.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>JWT has three parts: Header, Payload, Signature</li>
        <li>Header specifies the signing algorithm</li>
        <li>Payload contains claims (data) about the subject</li>
        <li>Signature ensures token integrity and authenticity</li>
        <li>Base64URL encoding is NOT encryption - payload is readable</li>
        <li>Always validate all registered claims (exp, iss, aud)</li>
      </ul>
    </div>
  </div>
);

export default JWTStructure;
