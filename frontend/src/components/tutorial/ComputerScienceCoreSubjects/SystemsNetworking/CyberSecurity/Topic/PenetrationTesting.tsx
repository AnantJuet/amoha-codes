import React from "react";

const PenetrationTesting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Penetration Testing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Penetration testing (pen testing) is a simulated cyberattack against a computer system
      to check for exploitable vulnerabilities. It helps organizations identify security
      weaknesses before malicious attackers can exploit them.
    </p>

    <h2 className="text-3xl font-bold mt-8">Pen Test Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Knowledge</th>
            <th className="p-3 border">Simulates</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Black Box</td>
            <td className="p-3 border">No prior knowledge</td>
            <td className="p-3 border">External attacker</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">White Box</td>
            <td className="p-3 border">Full knowledge</td>
            <td className="p-3 border">Insider or code review</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Grey Box</td>
            <td className="p-3 border">Partial knowledge</td>
            <td className="p-3 border">Compromised user</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pen Test Methodology</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PTES (Penetration Testing Execution Standard):

1. PRE-ENGAGEMENT
   - Define scope, objectives, rules
   - Sign contracts and NDAs
   - Emergency contacts

2. INTELLIGENCE GATHERING
   - OSINT (Open Source Intelligence)
   - DNS enumeration
   - Social media research

3. THREAT MODELING
   - Identify assets and threats
   - Map attack vectors
   - Prioritize targets

4. VULNERABILITY ANALYSIS
   - Automated scanning
   - Manual testing
   - Research potential exploits

5. EXPLOITATION
   - Attempt to exploit vulns
   - Gain initial access
   - Demonstrate impact

6. POST-EXPLOITATION
   - Privilege escalation
   - Lateral movement
   - Data exfiltration (proof)

7. REPORTING
   - Executive summary
   - Technical details
   - Remediation recommendations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pen Test Scope Areas</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network:</strong> External/internal network infrastructure</li>
      <li><strong>Web Application:</strong> Websites, APIs, web services</li>
      <li><strong>Mobile:</strong> iOS/Android applications</li>
      <li><strong>Wireless:</strong> Wi-Fi networks and protocols</li>
      <li><strong>Social Engineering:</strong> Phishing, physical access</li>
      <li><strong>Cloud:</strong> AWS, Azure, GCP configurations</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pen Testing Toolkit:

RECONNAISSANCE:
- Nmap (port scanning)
- Shodan (internet search)
- theHarvester (email gathering)

VULNERABILITY SCANNING:
- Nessus, OpenVAS
- Nikto (web servers)
- SQLMap (SQL injection)

EXPLOITATION:
- Metasploit Framework
- Burp Suite (web apps)
- Cobalt Strike (red team)

POST-EXPLOITATION:
- Mimikatz (credentials)
- BloodHound (AD attacks)
- PowerShell Empire

REPORTING:
- Dradis, Serpico
- Custom templates`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pen Test Report</h2>
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
            <td className="p-3 border">Management</td>
            <td className="p-3 border">High-level findings, risk, recommendations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Technical Details</td>
            <td className="p-3 border">IT/Security teams</td>
            <td className="p-3 border">Vulnerability details, proof of concept</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Remediation</td>
            <td className="p-3 border">Developers/IT</td>
            <td className="p-3 border">How to fix each vulnerability</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always have written authorization before testing</li>
        <li>Follow a structured methodology (PTES, OWASP)</li>
        <li>Black, white, and grey box tests serve different purposes</li>
        <li>Documentation and reporting are as important as testing</li>
        <li>Remediation recommendations should be actionable</li>
        <li>Regular pen tests are part of a mature security program</li>
      </ul>
    </div>
  </div>
);

export default PenetrationTesting;
