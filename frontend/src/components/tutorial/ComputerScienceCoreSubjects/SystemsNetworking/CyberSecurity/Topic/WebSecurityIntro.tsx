import React from "react";

const WebSecurityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Web Application Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Web application security focuses on protecting websites, web applications, and web services
      from cyber threats. As web applications become more complex and handle sensitive data,
      securing them against attacks is critical for organizations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Web Security Matters</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Web Application Attack Surface:

Internet Users
      |
      v
+------------------+
|   Web Server     |
|  +------------+  |
|  | Application|  | <-- Business Logic
|  +------------+  |
|  +------------+  |
|  | Database   |  | <-- Sensitive Data
|  +------------+  |
+------------------+

Attack Vectors:
- User input (forms, URLs, headers)
- API endpoints
- File uploads
- Authentication systems
- Session management
- Third-party components`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OWASP Top 10 (2021)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rank</th>
            <th className="p-3 border">Vulnerability</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A01</td>
            <td className="p-3 border font-semibold">Broken Access Control</td>
            <td className="p-3 border">Users access unauthorized functions/data</td>
          </tr>
          <tr>
            <td className="p-3 border">A02</td>
            <td className="p-3 border font-semibold">Cryptographic Failures</td>
            <td className="p-3 border">Weak encryption, exposed sensitive data</td>
          </tr>
          <tr>
            <td className="p-3 border">A03</td>
            <td className="p-3 border font-semibold">Injection</td>
            <td className="p-3 border">SQL, NoSQL, OS command injection</td>
          </tr>
          <tr>
            <td className="p-3 border">A04</td>
            <td className="p-3 border font-semibold">Insecure Design</td>
            <td className="p-3 border">Flaws in architecture and design</td>
          </tr>
          <tr>
            <td className="p-3 border">A05</td>
            <td className="p-3 border font-semibold">Security Misconfiguration</td>
            <td className="p-3 border">Insecure default configurations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Web Vulnerabilities</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>SQL Injection:</strong> Malicious SQL queries through user input</li>
      <li><strong>Cross-Site Scripting (XSS):</strong> Injecting malicious scripts</li>
      <li><strong>CSRF:</strong> Forcing users to execute unwanted actions</li>
      <li><strong>Broken Authentication:</strong> Weak session management</li>
      <li><strong>Sensitive Data Exposure:</strong> Unencrypted sensitive information</li>
      <li><strong>XML External Entities:</strong> XXE attacks on XML parsers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Defense Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Web Security Defense Layers:

1. INPUT VALIDATION
   - Validate all user input
   - Whitelist allowed characters
   - Sanitize before processing

2. OUTPUT ENCODING
   - Encode output for context (HTML, JS, URL)
   - Prevent XSS attacks

3. AUTHENTICATION
   - Strong password policies
   - Multi-factor authentication
   - Secure session management

4. AUTHORIZATION
   - Enforce access controls
   - Principle of least privilege

5. SECURITY HEADERS
   - Content-Security-Policy
   - X-Frame-Options
   - HSTS

6. WAF (Web Application Firewall)
   - Filter malicious requests
   - Virtual patching`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never trust user input - always validate and sanitize</li>
        <li>Use parameterized queries to prevent SQL injection</li>
        <li>Implement proper authentication and session management</li>
        <li>Encode output to prevent XSS</li>
        <li>Use HTTPS for all communications</li>
        <li>Follow OWASP guidelines for secure development</li>
      </ul>
    </div>
  </div>
);

export default WebSecurityIntro;
