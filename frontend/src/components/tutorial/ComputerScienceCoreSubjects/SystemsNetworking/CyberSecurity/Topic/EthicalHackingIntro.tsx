import React from "react";

const EthicalHackingIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ethical Hacking Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Ethical hacking is the authorized practice of bypassing system security to identify
      potential vulnerabilities. Ethical hackers use the same techniques as malicious hackers
      but with permission and the goal of improving security rather than causing harm.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ethical vs Malicious Hacking</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Ethical (White Hat)</th>
            <th className="p-3 border">Malicious (Black Hat)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Authorization</td>
            <td className="p-3 border">Has written permission</td>
            <td className="p-3 border">No authorization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Intent</td>
            <td className="p-3 border">Improve security</td>
            <td className="p-3 border">Exploit for gain</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reporting</td>
            <td className="p-3 border">Discloses findings</td>
            <td className="p-3 border">Hides or sells findings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Legal Status</td>
            <td className="p-3 border">Legal (with scope)</td>
            <td className="p-3 border">Illegal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hacker Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hacker Classifications:

WHITE HAT - Ethical hackers
- Work with permission
- Find and report vulnerabilities
- Help organizations improve security

GREY HAT - Between ethical and malicious
- May hack without permission
- Usually disclose findings
- Legal gray area

BLACK HAT - Malicious hackers
- No authorization
- Exploit for personal gain
- Criminal activity

RED TEAM - Offensive security team
- Simulate real-world attacks
- Test defenses comprehensively

BLUE TEAM - Defensive security team
- Protect and defend systems
- Respond to attacks

PURPLE TEAM - Collaboration
- Red and Blue working together
- Continuous improvement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ethical Hacking Phases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Penetration Testing Methodology:

1. PLANNING & RECONNAISSANCE
   - Define scope and rules of engagement
   - Gather target information (OSINT)

2. SCANNING
   - Identify live hosts and services
   - Enumerate vulnerabilities

3. GAINING ACCESS
   - Exploit vulnerabilities
   - Establish foothold

4. MAINTAINING ACCESS
   - Test persistence mechanisms
   - Evaluate detection capabilities

5. ANALYSIS & REPORTING
   - Document all findings
   - Provide remediation guidance
   - Executive summary for management`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Legal Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Written Authorization:</strong> Always get explicit permission</li>
      <li><strong>Scope Definition:</strong> Clear boundaries of what can be tested</li>
      <li><strong>Rules of Engagement:</strong> Agreed-upon testing parameters</li>
      <li><strong>Compliance:</strong> Follow relevant laws and regulations</li>
      <li><strong>Data Protection:</strong> Handle sensitive data properly</li>
      <li><strong>Liability:</strong> Understand potential consequences</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always obtain written authorization before testing</li>
        <li>Stay within defined scope and rules of engagement</li>
        <li>Document everything thoroughly</li>
        <li>Report findings responsibly and promptly</li>
        <li>Ethical hacking requires both technical and ethical judgment</li>
        <li>Certifications like CEH, OSCP validate skills</li>
      </ul>
    </div>
  </div>
);

export default EthicalHackingIntro;
