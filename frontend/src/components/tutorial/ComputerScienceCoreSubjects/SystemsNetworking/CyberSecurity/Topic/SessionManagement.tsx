import React from "react";

const SessionManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Session Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Session management is the process of securely handling user sessions in web applications.
      A session allows the server to recognize users across multiple requests after they
      authenticate, maintaining state in a stateless HTTP protocol.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Sessions Work</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Session Lifecycle:

1. User logs in with credentials
2. Server creates session and generates Session ID
3. Session ID sent to browser (usually as cookie)
4. Browser sends Session ID with every request
5. Server validates Session ID and retrieves session data
6. User logs out or session expires
7. Server destroys session

Browser                    Server
   |                          |
   | 1. Login (user/pass)     |
   |------------------------->|
   |                          | 2. Create session
   |                          |    Generate ID: abc123
   | 3. Set-Cookie: sid=abc123|
   |<-------------------------|
   |                          |
   | 4. Request + Cookie      |
   |------------------------->| 5. Validate session
   |                          |
   | Response                 |
   |<-------------------------|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Session Security Best Practices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Practice</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strong Session IDs</td>
            <td className="p-3 border">Unpredictable, sufficient length</td>
            <td className="p-3 border">128+ bits entropy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secure Cookies</td>
            <td className="p-3 border">Proper cookie attributes</td>
            <td className="p-3 border">Secure, HttpOnly, SameSite</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Timeout</td>
            <td className="p-3 border">Automatic expiration</td>
            <td className="p-3 border">Idle and absolute timeouts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Regeneration</td>
            <td className="p-3 border">New ID after auth change</td>
            <td className="p-3 border">Prevent session fixation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Secure Cookie Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Secure Session Cookie:

Set-Cookie: session=abc123def456;
            Secure;       // Only HTTPS
            HttpOnly;     // No JavaScript access
            SameSite=Lax; // CSRF protection
            Path=/;       // Scope to entire site
            Max-Age=3600; // 1 hour expiration

Cookie Attributes:
- Secure: Only sent over HTTPS
- HttpOnly: Inaccessible to JavaScript
- SameSite: Controls cross-site sending
- Path: URL path scope
- Domain: Domain scope
- Expires/Max-Age: Lifetime`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Session Attacks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attack</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Prevention</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Session Hijacking</td>
            <td className="p-3 border">Stealing active session ID</td>
            <td className="p-3 border">HTTPS, HttpOnly, IP binding</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Fixation</td>
            <td className="p-3 border">Forcing known session ID</td>
            <td className="p-3 border">Regenerate ID on login</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Prediction</td>
            <td className="p-3 border">Guessing weak session IDs</td>
            <td className="p-3 border">Strong random generation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use cryptographically strong random session IDs</li>
        <li>Always set Secure, HttpOnly, and SameSite cookie flags</li>
        <li>Regenerate session ID after authentication</li>
        <li>Implement both idle and absolute session timeouts</li>
        <li>Properly destroy sessions on logout</li>
        <li>Consider additional binding (IP, user agent)</li>
      </ul>
    </div>
  </div>
);

export default SessionManagement;
