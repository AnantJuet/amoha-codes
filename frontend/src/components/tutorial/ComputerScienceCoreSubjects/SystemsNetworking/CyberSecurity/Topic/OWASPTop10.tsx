import React from "react";

const OWASPTop10: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OWASP Top 10
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The OWASP Top 10 is a standard awareness document representing the most critical security
      risks to web applications. Published by the Open Web Application Security Project (OWASP),
      it serves as a guide for developers and security professionals.
    </p>

    <h2 className="text-3xl font-bold mt-8">A01: Broken Access Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Access Control Failures:

- Users accessing admin functions
- Modifying URLs to access others' data
- IDOR (Insecure Direct Object Reference)
- Missing function-level access control

Example:
/account?id=123  (your account)
/account?id=456  (someone else's account!)

Prevention:
- Server-side access control enforcement
- Deny by default
- Log access control failures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">A02: Cryptographic Failures</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Data transmitted in clear text (HTTP, SMTP, FTP)</li>
      <li>Weak or deprecated cryptographic algorithms</li>
      <li>Default or weak encryption keys</li>
      <li>Improper certificate validation</li>
      <li>Passwords stored without proper hashing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">A03: Injection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Injection Types:

SQL:    ' OR '1'='1' --
NoSQL:  {"$gt": ""}
LDAP:   *)(uid=*))(|(uid=*
OS Cmd: ; cat /etc/passwd

Prevention:
- Parameterized queries (prepared statements)
- Input validation
- Escape special characters
- Use ORM frameworks`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">A04: Insecure Design</h2>
    <p className="leading-relaxed">
      Fundamental flaws in the design and architecture that cannot be fixed by proper implementation.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>Missing or ineffective security controls</li>
      <li>Lack of threat modeling</li>
      <li>No secure design patterns</li>
      <li>Business logic flaws</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">A05: Security Misconfiguration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Misconfigurations:

- Default credentials left unchanged
- Unnecessary features enabled
- Error messages revealing stack traces
- Missing security headers
- Outdated software/dependencies
- Cloud storage permissions (S3 buckets)

Prevention:
- Hardening guidelines
- Automated configuration checks
- Regular security audits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">A06-A10 Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Key Concern</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A06</td>
            <td className="p-3 border font-semibold">Vulnerable Components</td>
            <td className="p-3 border">Outdated libraries with known CVEs</td>
          </tr>
          <tr>
            <td className="p-3 border">A07</td>
            <td className="p-3 border font-semibold">Auth Failures</td>
            <td className="p-3 border">Weak passwords, credential stuffing</td>
          </tr>
          <tr>
            <td className="p-3 border">A08</td>
            <td className="p-3 border font-semibold">Software Integrity</td>
            <td className="p-3 border">Unverified updates, CI/CD compromise</td>
          </tr>
          <tr>
            <td className="p-3 border">A09</td>
            <td className="p-3 border font-semibold">Logging Failures</td>
            <td className="p-3 border">Insufficient logging and monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border">A10</td>
            <td className="p-3 border font-semibold">SSRF</td>
            <td className="p-3 border">Server-Side Request Forgery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OWASP Top 10 represents most critical web security risks</li>
        <li>Updated periodically based on real-world data</li>
        <li>Use as a baseline for secure development</li>
        <li>Address each category in your security program</li>
        <li>Defense in depth - multiple layers of protection</li>
        <li>Regular testing and code review are essential</li>
      </ul>
    </div>
  </div>
);

export default OWASPTop10;
