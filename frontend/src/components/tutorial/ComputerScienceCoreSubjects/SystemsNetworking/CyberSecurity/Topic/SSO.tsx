import React from "react";

const SSO: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Single Sign-On (SSO)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Single Sign-On (SSO) is an authentication mechanism that allows users to access multiple
      applications with one set of credentials. After authenticating once with a central
      identity provider, users can access all connected services without re-entering their
      credentials, improving both security and user experience.
    </p>

    <h2 className="text-3xl font-bold mt-8">SSO Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SSO Components:

+------------------+
| Identity Provider|  Central authentication service
| (IdP)            |  (Okta, Azure AD, Auth0)
+------------------+
         |
    Authenticates
         |
    +----+----+----+----+
    |    |    |    |    |
    v    v    v    v    v
+-----+ +-----+ +-----+ +-----+ +-----+
|App 1| |App 2| |App 3| |App 4| |App 5|
+-----+ +-----+ +-----+ +-----+ +-----+
Service Providers (SP) - Your applications

Flow:
1. User accesses App 1
2. App 1 redirects to IdP
3. User authenticates with IdP
4. IdP creates session, redirects back
5. User accesses App 2
6. App 2 checks with IdP
7. IdP confirms session exists
8. No re-authentication needed!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSO Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Token Format</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SAML 2.0</td>
            <td className="p-3 border">Enterprise, legacy apps</td>
            <td className="p-3 border">XML assertions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OpenID Connect</td>
            <td className="p-3 border">Modern web/mobile apps</td>
            <td className="p-3 border">JWT (ID Token)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OAuth 2.0</td>
            <td className="p-3 border">API authorization</td>
            <td className="p-3 border">Access tokens</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kerberos</td>
            <td className="p-3 border">Windows/AD environments</td>
            <td className="p-3 border">Tickets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SAML SSO Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SAML 2.0 SSO Flow (SP-Initiated):

User       Service Provider      Identity Provider
 |              |                       |
 |--Access----->|                       |
 |              |                       |
 |              |--SAML AuthnRequest--->|
 |              |  (redirect)           |
 |              |                       |
 |<-----------Login Page----------------|
 |--Credentials------------------------>|
 |              |                       |
 |              |<--SAML Response-------|
 |              |   (Assertion)         |
 |              |   - User identity     |
 |              |   - Attributes        |
 |              |   - Signature         |
 |              |                       |
 |              |--Validate assertion   |
 |              |--Create session       |
 |              |                       |
 |<--Access----|                        |
     Granted                            |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OIDC SSO Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OpenID Connect SSO Flow:

User       App 1              IdP              App 2
 |           |                 |                 |
 |--Access-->|                 |                 |
 |           |--/authorize---->|                 |
 |<--------Login---------------|                 |
 |--Credentials--------------->|                 |
 |           |<--Code----------|                 |
 |           |--Exchange------>|                 |
 |           |<--ID Token------|                 |
 |<--Access--|                 |                 |
 |           |                 |                 |
 | (Later)   |                 |                 |
 |--------------------------------Access-------->|
 |                             |<--/authorize----|
 |                             |  (Session exists)|
 |                             |--Code---------->|
 |                             |                 |
 |<------------------------------Access----------|
 |                             |                 |
 No re-login needed!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSO Benefits and Risks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefits</th>
            <th className="p-3 border">Risks</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Reduced password fatigue</td>
            <td className="p-3 border">Single point of failure</td>
          </tr>
          <tr>
            <td className="p-3 border">Improved user experience</td>
            <td className="p-3 border">Broad access if compromised</td>
          </tr>
          <tr>
            <td className="p-3 border">Centralized access control</td>
            <td className="p-3 border">Complex implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">Easier deprovisioning</td>
            <td className="p-3 border">IdP availability critical</td>
          </tr>
          <tr>
            <td className="p-3 border">Consistent security policies</td>
            <td className="p-3 border">Session management complexity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SSO Security Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Enforce MFA:</strong> Require multi-factor at the IdP level</li>
      <li><strong>Session Timeouts:</strong> Implement appropriate idle and absolute timeouts</li>
      <li><strong>Single Logout:</strong> Implement SLO to terminate all sessions</li>
      <li><strong>Monitor Sessions:</strong> Track and alert on suspicious activity</li>
      <li><strong>Secure IdP:</strong> Highest security for identity provider</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SSO enables one authentication for multiple applications</li>
        <li>SAML for enterprise, OIDC for modern web applications</li>
        <li>IdP compromise affects all connected applications</li>
        <li>Always enforce MFA on the identity provider</li>
        <li>Implement Single Logout for proper session termination</li>
        <li>SSO improves security by reducing password reuse</li>
      </ul>
    </div>
  </div>
);

export default SSO;
