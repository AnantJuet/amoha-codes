import React from "react";

const OAuthFlows: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OAuth 2.0 Flows
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OAuth 2.0 defines several authorization flows (grant types) optimized for different
      application types and use cases. Each flow provides a different balance of security
      and usability, with modern best practices favoring certain flows over deprecated ones.
    </p>

    <h2 className="text-3xl font-bold mt-8">OAuth 2.0 Grant Types Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Grant Type</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authorization Code</td>
            <td className="p-3 border">Server-side web apps</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Authorization Code + PKCE</td>
            <td className="p-3 border">Mobile, SPA, all public clients</td>
            <td className="p-3 border">Best Practice</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Client Credentials</td>
            <td className="p-3 border">Machine-to-machine</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Device Code</td>
            <td className="p-3 border">Smart TVs, IoT devices</td>
            <td className="p-3 border">Recommended</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implicit</td>
            <td className="p-3 border">Legacy SPAs</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Password (ROPC)</td>
            <td className="p-3 border">Legacy migration</td>
            <td className="p-3 border">Deprecated</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authorization Code Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authorization Code Flow (Confidential Clients):

User       Client        Auth Server     Resource Server
 |           |                |                 |
 |--Login--->|                |                 |
 |           |--Redirect----->|                 |
 |           |  /authorize?   |                 |
 |           |  client_id=X   |                 |
 |           |  redirect_uri  |                 |
 |           |  scope=read    |                 |
 |           |  state=abc123  |                 |
 |           |                |                 |
 |<--------Login Page---------|                 |
 |--Credentials-------------->|                 |
 |<--------Consent------------|                 |
 |--Approve------------------>|                 |
 |           |                |                 |
 |<--Redirect with code-------|                 |
 |   ?code=AUTH_CODE          |                 |
 |   &state=abc123            |                 |
 |           |                |                 |
 |           |--POST /token---|                 |
 |           |  code=AUTH_CODE|                 |
 |           |  client_secret |                 |
 |           |                |                 |
 |           |<--Access Token-|                 |
 |           |   Refresh Token|                 |
 |           |                |                 |
 |           |--API Request + Token------------>|
 |           |<--Protected Data-----------------|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PKCE Extension</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PKCE (Proof Key for Code Exchange):

Purpose: Prevent authorization code interception attacks
Required for: Public clients (mobile apps, SPAs)
Recommended for: ALL clients (including confidential)

How it works:
1. CLIENT generates:
   code_verifier = random(43-128 chars)
   code_challenge = BASE64URL(SHA256(code_verifier))

2. AUTHORIZATION REQUEST includes:
   code_challenge=...
   code_challenge_method=S256

3. TOKEN REQUEST includes:
   code_verifier=...

4. SERVER verifies:
   SHA256(code_verifier) == code_challenge

Security benefit:
- Attacker intercepts auth code
- Cannot exchange it without code_verifier
- code_verifier never exposed in redirect`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Client Credentials Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Client Credentials Flow (Machine-to-Machine):

Service A                Auth Server         Service B
    |                        |                   |
    |--POST /token---------->|                   |
    |  grant_type=           |                   |
    |    client_credentials  |                   |
    |  client_id=X           |                   |
    |  client_secret=Y       |                   |
    |  scope=api:read        |                   |
    |                        |                   |
    |<--Access Token---------|                   |
    |                        |                   |
    |--API Request + Token--------------------->|
    |<--Data------------------------------------|

Use cases:
- Backend services calling APIs
- Scheduled jobs, cron tasks
- Microservice communication

Note: No user involved - service acts as itself`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Device Code Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Device Code Flow (Input-Constrained Devices):

Smart TV        Auth Server        User's Phone
   |                |                    |
   |--POST /device--|                    |
   |  client_id=X   |                    |
   |                |                    |
   |<--device_code--|                    |
   |   user_code    |                    |
   |   verify_url   |                    |
   |                |                    |
   |--Display:------|                    |
   | "Go to url,    |                    |
   |  enter CODE"   |                    |
   |                |                    |
   |                |<--User visits URL--|
   |                |   enters CODE      |
   |                |<--User logs in-----|
   |                |<--User consents----|
   |                |                    |
   |--Poll /token-->|                    |
   |  device_code   |                    |
   |<--Access Token-|                    |

Used by: Smart TVs, game consoles, CLI tools`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use Authorization Code + PKCE for public clients</li>
        <li>Implicit flow is deprecated - migrate to PKCE</li>
        <li>Client Credentials for machine-to-machine communication</li>
        <li>Device Code for input-constrained devices</li>
        <li>Never expose client secrets in public clients</li>
        <li>Validate state parameter to prevent CSRF attacks</li>
      </ul>
    </div>
  </div>
);

export default OAuthFlows;
