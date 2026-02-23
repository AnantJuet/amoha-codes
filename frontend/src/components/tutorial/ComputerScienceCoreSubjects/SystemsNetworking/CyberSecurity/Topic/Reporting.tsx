import React from "react";

const Reporting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Penetration Test Reporting
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The penetration test report is the primary deliverable of an engagement. It communicates
      findings to both technical and non-technical stakeholders, provides evidence of
      vulnerabilities, and offers actionable remediation guidance. A well-written report
      is as important as the testing itself.
    </p>

    <h2 className="text-3xl font-bold mt-8">Report Structure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Section</th>
            <th className="p-3 border">Audience</th>
            <th className="p-3 border">Content</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Executive Summary</td>
            <td className="p-3 border">C-level, Management</td>
            <td className="p-3 border">High-level findings, risk overview, key recommendations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope & Methodology</td>
            <td className="p-3 border">All stakeholders</td>
            <td className="p-3 border">What was tested, how, timeline, limitations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Findings Summary</td>
            <td className="p-3 border">Security/IT teams</td>
            <td className="p-3 border">Vulnerabilities by severity, statistics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Technical Details</td>
            <td className="p-3 border">Technical staff</td>
            <td className="p-3 border">Detailed vulnerability descriptions, PoC</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Remediation</td>
            <td className="p-3 border">Developers, IT, Security</td>
            <td className="p-3 border">How to fix each vulnerability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Appendices</td>
            <td className="p-3 border">Technical reference</td>
            <td className="p-3 border">Tool outputs, screenshots, raw data</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Report Template Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PENETRATION TEST REPORT TEMPLATE:

1. COVER PAGE
   - Client name
   - Report title
   - Assessment dates
   - Version and classification

2. TABLE OF CONTENTS

3. EXECUTIVE SUMMARY (1-2 pages)
   - Purpose of engagement
   - Key findings overview
   - Overall risk assessment
   - Critical recommendations
   - Positive observations

4. SCOPE AND METHODOLOGY
   - Systems tested (IPs, domains, apps)
   - Testing methodology (PTES, OWASP)
   - Tools used
   - Testing constraints
   - Out-of-scope items

5. FINDINGS SUMMARY
   - Vulnerability statistics
   - Risk distribution chart
   - Finding comparison (if repeat test)

6. DETAILED FINDINGS
   [For each vulnerability:]
   - Title
   - Severity (Critical/High/Medium/Low/Info)
   - CVSS Score
   - Affected systems
   - Description
   - Evidence (screenshots, logs)
   - Impact
   - Remediation
   - References

7. REMEDIATION ROADMAP
   - Prioritized action items
   - Quick wins
   - Long-term improvements

8. APPENDICES
   - Raw scan outputs
   - Full screenshots
   - Code snippets
   - Glossary`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Write-Up Template</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VULNERABILITY FINDING TEMPLATE:

┌─────────────────────────────────────────────────────────┐
│ FINDING: SQL Injection in Login Form                    │
├─────────────────────────────────────────────────────────┤
│ Severity: CRITICAL                    CVSS: 9.8         │
│ CWE: CWE-89                          Status: Confirmed  │
├─────────────────────────────────────────────────────────┤
│ Affected Asset:                                         │
│ https://app.example.com/login                           │
├─────────────────────────────────────────────────────────┤
│ Description:                                            │
│ The login form is vulnerable to SQL injection in the    │
│ username parameter. An attacker can bypass authentication│
│ and extract database contents.                          │
├─────────────────────────────────────────────────────────┤
│ Evidence:                                               │
│ Request: POST /login                                    │
│ Parameter: username=' OR '1'='1'--                      │
│ Response: Authentication successful                     │
│ [Screenshot attached]                                   │
├─────────────────────────────────────────────────────────┤
│ Impact:                                                 │
│ - Complete authentication bypass                        │
│ - Database data extraction                              │
│ - Potential for remote code execution                   │
├─────────────────────────────────────────────────────────┤
│ Remediation:                                            │
│ 1. Use parameterized queries/prepared statements        │
│ 2. Implement input validation                           │
│ 3. Apply principle of least privilege to DB user        │
│ 4. Enable WAF rules for SQL injection                   │
├─────────────────────────────────────────────────────────┤
│ References:                                             │
│ - OWASP SQL Injection Prevention Cheat Sheet            │
│ - CWE-89: SQL Injection                                 │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Severity Ratings Guide</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Severity</th>
            <th className="p-3 border">CVSS Range</th>
            <th className="p-3 border">Criteria</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-red-600 dark:text-red-400">Critical</td>
            <td className="p-3 border">9.0-10.0</td>
            <td className="p-3 border">Remote code execution, full compromise</td>
            <td className="p-3 border">RCE, SQLi with admin access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600 dark:text-orange-400">High</td>
            <td className="p-3 border">7.0-8.9</td>
            <td className="p-3 border">Significant data access, privilege escalation</td>
            <td className="p-3 border">Auth bypass, IDOR, stored XSS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600 dark:text-yellow-400">Medium</td>
            <td className="p-3 border">4.0-6.9</td>
            <td className="p-3 border">Limited impact, requires conditions</td>
            <td className="p-3 border">Reflected XSS, CSRF, info disclosure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600 dark:text-blue-400">Low</td>
            <td className="p-3 border">0.1-3.9</td>
            <td className="p-3 border">Minor issues, hardening recommendations</td>
            <td className="p-3 border">Verbose errors, version disclosure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-gray-600 dark:text-gray-400">Info</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Best practices, observations</td>
            <td className="p-3 border">Security headers, HTTP methods</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reporting Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Be Clear and Concise:</strong> Avoid jargon; explain technical terms</li>
      <li><strong>Provide Evidence:</strong> Screenshots, logs, and proof of concept</li>
      <li><strong>Actionable Remediation:</strong> Specific, implementable fixes</li>
      <li><strong>Risk Context:</strong> Explain business impact, not just technical severity</li>
      <li><strong>Prioritize:</strong> Help client focus on most critical issues first</li>
      <li><strong>Positive Findings:</strong> Acknowledge what the client is doing well</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>The report is the primary deliverable of a penetration test</li>
        <li>Executive summary should be understandable by non-technical readers</li>
        <li>Each finding needs description, evidence, impact, and remediation</li>
        <li>Use consistent severity ratings (CVSS or custom scale)</li>
        <li>Include a prioritized remediation roadmap</li>
        <li>Review and proofread before delivery; quality matters</li>
      </ul>
    </div>
  </div>
);

export default Reporting;
