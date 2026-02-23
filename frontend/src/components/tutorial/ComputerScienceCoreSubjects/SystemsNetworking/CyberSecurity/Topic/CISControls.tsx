import React from "react";

const CISControls: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CIS Controls - Critical Security Controls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The CIS Critical Security Controls (CIS Controls) are a prioritized set of actions that
      collectively form a defense-in-depth set of best practices. Developed by the Center for
      Internet Security, they provide a practical framework for organizations to improve their
      cybersecurity posture by focusing on the most effective defensive measures.
    </p>

    <h2 className="text-3xl font-bold mt-8">CIS Controls v8 Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CIS Controls v8 Structure:

+------------------------------------------------------------------+
|                    CIS CONTROLS v8                                |
+------------------------------------------------------------------+
|                                                                   |
|  18 CONTROLS organized by Implementation Groups (IG)              |
|                                                                   |
|  IG1 (Essential Cyber Hygiene)                                   |
|  +------------------------------------------------------------+  |
|  | Basic safeguards every organization should implement        |  |
|  | - Limited IT/security expertise needed                      |  |
|  | - 56 Safeguards                                             |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  IG2 (Foundational)                                              |
|  +------------------------------------------------------------+  |
|  | For organizations with moderate sensitivity data            |  |
|  | - Includes all IG1 + additional safeguards                  |  |
|  | - 130 Safeguards total                                      |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  IG3 (Organizational)                                            |
|  +------------------------------------------------------------+  |
|  | For organizations with highly sensitive data                |  |
|  | - Includes all IG1, IG2 + advanced safeguards              |  |
|  | - 153 Safeguards total                                      |  |
|  +------------------------------------------------------------+  |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The 18 CIS Controls</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Control</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Focus</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Inventory and Control of Enterprise Assets</td>
            <td className="p-3 border">Know what you have</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Inventory and Control of Software Assets</td>
            <td className="p-3 border">Know what software runs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Data Protection</td>
            <td className="p-3 border">Protect sensitive data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Secure Configuration of Enterprise Assets</td>
            <td className="p-3 border">Harden systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Account Management</td>
            <td className="p-3 border">Control access credentials</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">Access Control Management</td>
            <td className="p-3 border">Manage permissions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7</td>
            <td className="p-3 border">Continuous Vulnerability Management</td>
            <td className="p-3 border">Find and fix vulnerabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">8</td>
            <td className="p-3 border">Audit Log Management</td>
            <td className="p-3 border">Log and monitor</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">9</td>
            <td className="p-3 border">Email and Web Browser Protections</td>
            <td className="p-3 border">Protect common attack vectors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">10</td>
            <td className="p-3 border">Malware Defenses</td>
            <td className="p-3 border">Prevent and detect malware</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">11</td>
            <td className="p-3 border">Data Recovery</td>
            <td className="p-3 border">Backup and restore</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">12</td>
            <td className="p-3 border">Network Infrastructure Management</td>
            <td className="p-3 border">Secure network devices</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">13</td>
            <td className="p-3 border">Network Monitoring and Defense</td>
            <td className="p-3 border">Detect network threats</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">14</td>
            <td className="p-3 border">Security Awareness and Skills Training</td>
            <td className="p-3 border">Train users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">15</td>
            <td className="p-3 border">Service Provider Management</td>
            <td className="p-3 border">Manage third-party risk</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">16</td>
            <td className="p-3 border">Application Software Security</td>
            <td className="p-3 border">Secure software development</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">17</td>
            <td className="p-3 border">Incident Response Management</td>
            <td className="p-3 border">Plan and respond to incidents</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">18</td>
            <td className="p-3 border">Penetration Testing</td>
            <td className="p-3 border">Test defenses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Groups Explained</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implementation Group Characteristics:

IG1 - ESSENTIAL CYBER HYGIENE
+----------------------------------------------------------+
| Org Profile:                                              |
| - Small to medium enterprises                             |
| - Limited IT/security staff                               |
| - Low data sensitivity                                    |
|                                                           |
| Focus Areas:                                              |
| - Basic asset inventory                                   |
| - Software inventory                                      |
| - Basic access control                                    |
| - Anti-malware                                            |
| - Data backup                                             |
+----------------------------------------------------------+

IG2 - FOUNDATIONAL
+----------------------------------------------------------+
| Org Profile:                                              |
| - Larger organizations                                    |
| - Dedicated security personnel                            |
| - Moderate data sensitivity                               |
|                                                           |
| Focus Areas (IG1 plus):                                   |
| - Vulnerability scanning                                  |
| - Security awareness training                             |
| - Log collection and retention                            |
| - Network segmentation                                    |
+----------------------------------------------------------+

IG3 - ORGANIZATIONAL
+----------------------------------------------------------+
| Org Profile:                                              |
| - Large enterprises                                       |
| - Security team with specialists                          |
| - Highly sensitive/regulated data                         |
|                                                           |
| Focus Areas (IG1, IG2 plus):                             |
| - Advanced malware defenses                               |
| - Application security testing                            |
| - Penetration testing                                     |
| - Advanced threat detection                               |
+----------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Detail Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Control 1: Inventory and Control of Enterprise Assets

Purpose: Actively manage all enterprise assets connected to
the infrastructure physically, virtually, remotely, and those
within cloud environments.

Safeguards:
+-------+------+----------------------------------------+
| ID    | IG   | Safeguard                              |
+-------+------+----------------------------------------+
| 1.1   | IG1  | Establish and maintain detailed        |
|       |      | enterprise asset inventory              |
+-------+------+----------------------------------------+
| 1.2   | IG1  | Address unauthorized assets            |
+-------+------+----------------------------------------+
| 1.3   | IG2  | Use DHCP logging to update inventory   |
+-------+------+----------------------------------------+
| 1.4   | IG2  | Use active discovery tool              |
+-------+------+----------------------------------------+
| 1.5   | IG3  | Use passive discovery tool             |
+-------+------+----------------------------------------+

Tools for Control 1:
- Asset management software
- Network scanning tools (Nmap)
- DHCP server logs
- NAC solutions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CIS Controls vs Other Frameworks</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">CIS Controls</th>
            <th className="p-3 border">NIST CSF</th>
            <th className="p-3 border">ISO 27001</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Focus</td>
            <td className="p-3 border">Tactical actions</td>
            <td className="p-3 border">Risk management</td>
            <td className="p-3 border">Management system</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Approach</td>
            <td className="p-3 border">Prescriptive</td>
            <td className="p-3 border">Flexible</td>
            <td className="p-3 border">Certifiable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Technical teams</td>
            <td className="p-3 border">All organizations</td>
            <td className="p-3 border">Enterprises needing cert</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation</td>
            <td className="p-3 border">Prioritized list</td>
            <td className="p-3 border">Based on profiles</td>
            <td className="p-3 border">Based on risk</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Steps</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Step 1:</strong> Determine your Implementation Group based on organization profile</li>
      <li><strong>Step 2:</strong> Assess current state against relevant safeguards</li>
      <li><strong>Step 3:</strong> Prioritize gaps starting with IG1 safeguards</li>
      <li><strong>Step 4:</strong> Implement safeguards using CIS Benchmarks for guidance</li>
      <li><strong>Step 5:</strong> Measure effectiveness and track progress</li>
      <li><strong>Step 6:</strong> Continuously improve and expand to higher IG levels</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CIS Controls provide prioritized, actionable security guidance</li>
        <li>Implementation Groups help scale controls to organization size</li>
        <li>IG1 is essential cyber hygiene that all organizations should implement</li>
        <li>Controls map to other frameworks (NIST, ISO, PCI-DSS)</li>
        <li>Free resources available at cisecurity.org</li>
        <li>CIS Benchmarks provide detailed configuration guidance</li>
      </ul>
    </div>
  </div>
);

export default CISControls;
