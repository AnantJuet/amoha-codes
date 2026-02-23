import React from "react";

const OAuth: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OAuth 2.0
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OAuth 2.0 is an authorization framework that enables applications to obtain limited access
      to user accounts on third-party services. It allows users to grant access without sharing
      their credentials with the requesting application.
    </p>

    <h2 className="text-3xl font-bold mt-8">OAuth 2.0 Roles</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OAuth 2.0 Participants:

+------------------+
| Resource Owner   |  The user who owns the data
+------------------+
         |
         | Authorizes
         v
+------------------+
| Client           |  The application requesting access
+------------------+
         |
         | Requests Token
         v
+------------------+
| Authorization    |  Issues tokens (e.g., Google, GitHub)
| Server           |
+------------------+
         |
         | Token validates access to
         v
+------------------+
| Resource Server  |  Hosts protected resources (API)
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authorization Code Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authorization Code Flow (Most Common):

User        Client           Auth Server      Resource Server
 |            |                   |                 |
 | 1. Click   |                   |                 |
 |   "Login   |                   |                 |
 |    with    |                   |                 |
 |    Google" |                   |                 |
 |----------->|                   |                 |
 |            | 2. Redirect to    |                 |
 |            |    Auth Server    |                 |
 |            |------------------>|                 |
 |            |                   |                 |
 | 3. User logs in & consents     |                 |
 |<------------------------------>|                 |
 |            |                   |                 |
 |            | 4. Redirect with  |                 |
 |            |    Auth Code      |                 |
 |            |<------------------|                 |
 |            |                   |                 |
 |            | 5. Exchange Code  |                 |
 |            |    for Token      |                 |
 |            |------------------>|                 |
 |            | 6. Access Token   |                 |
 |            |<------------------|                 |
 |            |                   |                 |
 |            | 7. API Request with Token           |
 |            |-------------------------------------->|
 |            | 8. Protected Data |                 |
 |            |<--------------------------------------|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OAuth 2.0 Grant Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Grant Type</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Security</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authorization Code</td>
            <td className="p-3 border">Server-side apps</td>
            <td className="p-3 border">Most secure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PKCE</td>
            <td className="p-3 border">Public clients (mobile, SPA)</td>
            <td className="p-3 border">Secure for public clients</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Credentials</td>
            <td className="p-3 border">Machine-to-machine</td>
            <td className="p-3 border">For trusted services</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implicit (Deprecated)</td>
            <td className="p-3 border">Legacy SPAs</td>
            <td className="p-3 border">Avoid - use PKCE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Types</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Access Token:</strong> Used to access protected resources (short-lived)</li>
      <li><strong>Refresh Token:</strong> Used to obtain new access tokens (long-lived)</li>
      <li><strong>ID Token (OIDC):</strong> Contains user identity information</li>
    </ul>

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
            <td className="p-3 border font-semibold">Returns</td>
            <td className="p-3 border">Access Token</td>
            <td className="p-3 border">Access Token + ID Token</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Info</td>
            <td className="p-3 border">Not standardized</td>
            <td className="p-3 border">Standardized claims</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OAuth 2.0 is for authorization, not authentication</li>
        <li>Use Authorization Code flow with PKCE for all clients</li>
        <li>Never expose access tokens in URLs or logs</li>
        <li>Use OpenID Connect when you need user identity</li>
        <li>Validate tokens and check scopes on the resource server</li>
        <li>Keep access tokens short-lived, use refresh tokens for renewal</li>
      </ul>
    </div>
  </div>
);

export default OAuth;
