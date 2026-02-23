import React from "react";

const JWT: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      JSON Web Tokens (JWT)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information
      between parties as a JSON object. JWTs are commonly used for authentication and information
      exchange, allowing stateless session management where the token itself contains all
      necessary information.
    </p>

    <h2 className="text-3xl font-bold mt-8">JWT Use Cases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authentication</td>
            <td className="p-3 border">Stateless session tokens</td>
            <td className="p-3 border">API authentication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authorization</td>
            <td className="p-3 border">Access control information</td>
            <td className="p-3 border">OAuth 2.0 access tokens</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identity</td>
            <td className="p-3 border">User identity claims</td>
            <td className="p-3 border">OIDC ID tokens</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Information Exchange</td>
            <td className="p-3 border">Signed data transfer</td>
            <td className="p-3 border">Microservice communication</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">JWT Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Authentication Flow:

Client                    Server                    Database
   |                         |                          |
   |--POST /login----------->|                          |
   |  username, password     |                          |
   |                         |--Validate credentials--->|
   |                         |<--User data--------------|
   |                         |                          |
   |                         |--Create JWT:             |
   |                         |  Header + Payload        |
   |                         |  Sign with secret        |
   |                         |                          |
   |<--JWT Token-------------|                          |
   |                         |                          |
   |--GET /api/resource----->|                          |
   |  Authorization:         |                          |
   |  Bearer <JWT>           |                          |
   |                         |--Verify signature        |
   |                         |--Check expiration        |
   |                         |--Extract claims          |
   |                         |                          |
   |<--Protected Data--------|                          |

No session storage needed on server!
Token is self-contained and verifiable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">JWT vs Session Tokens</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">JWT</th>
            <th className="p-3 border">Session Token</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">Client-side</td>
            <td className="p-3 border">Server-side</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Excellent (stateless)</td>
            <td className="p-3 border">Requires shared store</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Revocation</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy (delete from store)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Size</td>
            <td className="p-3 border">Larger (contains data)</td>
            <td className="p-3 border">Small (just ID)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cross-domain</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Complex (CORS issues)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">JWT Security Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`JWT Security Checklist:

1. ALGORITHM SELECTION
   - Use RS256 or ES256 for asymmetric
   - Use HS256 only with strong secrets
   - NEVER use "none" algorithm

2. SECRET MANAGEMENT
   - Use strong, random secrets (256+ bits)
   - Rotate keys periodically
   - Store secrets securely (vault)

3. TOKEN EXPIRATION
   - Short-lived access tokens (15 min)
   - Use refresh tokens for renewal
   - Implement token refresh rotation

4. CLAIMS VALIDATION
   - Always verify signature
   - Check iss, aud, exp claims
   - Validate before trusting any claim

5. STORAGE
   - Prefer HttpOnly cookies
   - If localStorage, understand XSS risks
   - Never store in URL parameters

6. REVOCATION STRATEGY
   - Short expiration as primary control
   - Token blacklist for emergencies
   - Refresh token rotation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common JWT Vulnerabilities</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Algorithm Confusion:</strong> Accepting "none" or switching RS256 to HS256</li>
      <li><strong>Weak Secrets:</strong> Brute-forceable HMAC secrets</li>
      <li><strong>Missing Validation:</strong> Not checking signature or claims</li>
      <li><strong>Token Leakage:</strong> Exposure in logs, URLs, or insecure storage</li>
      <li><strong>Long Expiration:</strong> Tokens valid for too long after compromise</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>JWTs are self-contained tokens with encoded claims</li>
        <li>Always verify the signature before trusting a JWT</li>
        <li>Use short expiration times with refresh token rotation</li>
        <li>Never put sensitive data in JWT payload (it is readable)</li>
        <li>Implement proper revocation strategy for compromised tokens</li>
        <li>Choose the right algorithm and protect signing keys</li>
      </ul>
    </div>
  </div>
);

export default JWT;
