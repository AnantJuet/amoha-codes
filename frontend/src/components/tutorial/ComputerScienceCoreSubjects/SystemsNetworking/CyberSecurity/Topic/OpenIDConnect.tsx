import React from "react";

const OpenIDConnect: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OpenID Connect (OIDC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0 that adds
      authentication capabilities. While OAuth 2.0 handles authorization (what you can access),
      OIDC handles authentication (who you are), providing a standardized way to verify
      user identity and obtain basic profile information.
    </p>

    <h2 className="text-3xl font-bold mt-8">OAuth 2.0 vs OpenID Connect</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">OAuth 2.0</th>
            <th className="p-3 border">OpenID Connect</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Authorization</td>
            <td className="p-3 border">Authentication + Authorization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Question Answered</td>
            <td className="p-3 border">What can you access?</td>
            <td className="p-3 border">Who are you?</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Token Types</td>
            <td className="p-3 border">Access Token, Refresh Token</td>
            <td className="p-3 border">+ ID Token</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Info</td>
            <td className="p-3 border">Not standardized</td>
            <td className="p-3 border">Standardized claims</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Custom scopes</td>
            <td className="p-3 border">openid, profile, email</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">OIDC Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OpenID Connect Authorization Code Flow:

Client                  Identity Provider         Resource
   |                          |                      |
   |--/authorize?------------>|                      |
   |  response_type=code      |                      |
   |  scope=openid profile    |  <-- openid scope    |
   |  client_id=X             |      required!       |
   |  redirect_uri=...        |                      |
   |  state=abc               |                      |
   |  nonce=xyz               |  <-- nonce for       |
   |                          |      replay protect  |
   |                          |                      |
   |<--code=AUTH_CODE---------|                      |
   |                          |                      |
   |--POST /token------------>|                      |
   |  code=AUTH_CODE          |                      |
   |  client_secret=...       |                      |
   |                          |                      |
   |<--Response:--------------|                      |
   |   access_token           |                      |
   |   id_token        <----- |  Contains user info  |
   |   refresh_token          |                      |
   |                          |                      |
   |--GET /userinfo---------->|  (optional)          |
   |<--User claims------------|                      |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ID Token Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ID Token (JWT Format):

Header:
{
  "alg": "RS256",
  "typ": "JWT",
  "kid": "key-id-123"
}

Payload (Claims):
{
  "iss": "https://auth.example.com",  // Issuer
  "sub": "user-12345",                // Subject (user ID)
  "aud": "client-app-id",             // Audience
  "exp": 1704067200,                  // Expiration
  "iat": 1704063600,                  // Issued at
  "nonce": "xyz123",                  // Replay protection

  // Standard Claims (with profile scope)
  "name": "John Doe",
  "email": "john@example.com",
  "email_verified": true,
  "picture": "https://..."
}

Signature:
RS256(header + "." + payload, private_key)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Standard Scopes and Claims</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scope</th>
            <th className="p-3 border">Claims Provided</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">openid</td>
            <td className="p-3 border">sub (required for OIDC)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">profile</td>
            <td className="p-3 border">name, family_name, given_name, picture, etc.</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">email</td>
            <td className="p-3 border">email, email_verified</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">address</td>
            <td className="p-3 border">formatted, street_address, locality, country</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">phone</td>
            <td className="p-3 border">phone_number, phone_number_verified</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ID Token Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ID Token Validation Checklist:

1. SIGNATURE VALIDATION
   - Fetch public key from JWKS endpoint
   - Verify signature matches

2. ISSUER (iss)
   - Must match expected issuer URL

3. AUDIENCE (aud)
   - Must contain your client_id

4. EXPIRATION (exp)
   - Token must not be expired

5. ISSUED AT (iat)
   - Should be recent, not in future

6. NONCE
   - Must match nonce sent in request
   - Prevents replay attacks

7. AUTHORIZED PARTY (azp)
   - If present, must be your client_id

// Example validation (pseudocode)
if (token.iss !== EXPECTED_ISSUER) throw Error
if (!token.aud.includes(CLIENT_ID)) throw Error
if (token.exp < now()) throw Error
if (token.nonce !== session.nonce) throw Error`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OIDC adds authentication layer on top of OAuth 2.0</li>
        <li>The openid scope is required to receive an ID token</li>
        <li>ID tokens are JWTs containing user identity claims</li>
        <li>Always validate ID tokens completely before trusting</li>
        <li>Use nonce parameter to prevent replay attacks</li>
        <li>Never use ID tokens to access APIs - use access tokens</li>
      </ul>
    </div>
  </div>
);

export default OpenIDConnect;
