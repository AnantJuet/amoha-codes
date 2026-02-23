import React from "react";

const ToolsOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Security Tools and Frameworks Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security tools and frameworks are essential components of a robust cybersecurity program.
      Tools help security professionals identify vulnerabilities, monitor networks, and respond to
      threats, while frameworks provide structured approaches to managing security risks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Security Tools Ecosystem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security Tools Categories:

+------------------+     +------------------+     +------------------+
|  RECONNAISSANCE  |     |   VULNERABILITY  |     |   EXPLOITATION   |
|                  |     |    ASSESSMENT    |     |                  |
| - Nmap           |     | - Nessus         |     | - Metasploit     |
| - Shodan         |     | - OpenVAS        |     | - Burp Suite     |
| - Maltego        |     | - Qualys         |     | - SQLMap         |
+------------------+     +------------------+     +------------------+
         |                        |                        |
         v                        v                        v
+------------------+     +------------------+     +------------------+
|    MONITORING    |     |    FORENSICS     |     |    DEFENSE       |
|                  |     |                  |     |                  |
| - Wireshark      |     | - Autopsy        |     | - Snort/Suricata |
| - SIEM           |     | - Volatility     |     | - Firewalls      |
| - Zeek           |     | - FTK            |     | - EDR/XDR        |
+------------------+     +------------------+     +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Categories of Security Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Key Tools</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network Scanning</td>
            <td className="p-3 border">Discover hosts and services</td>
            <td className="p-3 border">Nmap, Masscan, Angry IP Scanner</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Packet Analysis</td>
            <td className="p-3 border">Capture and analyze network traffic</td>
            <td className="p-3 border">Wireshark, tcpdump, NetworkMiner</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vulnerability Scanning</td>
            <td className="p-3 border">Identify security weaknesses</td>
            <td className="p-3 border">Nessus, OpenVAS, Qualys</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Penetration Testing</td>
            <td className="p-3 border">Exploit vulnerabilities</td>
            <td className="p-3 border">Metasploit, Burp Suite, Cobalt Strike</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SIEM</td>
            <td className="p-3 border">Security event management</td>
            <td className="p-3 border">Splunk, QRadar, Elastic SIEM</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Frameworks Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security Framework Landscape:

GOVERNANCE & RISK MANAGEMENT
+------------------------+     +------------------------+
|    NIST CSF            |     |     ISO 27001          |
| - Identify             |     | - Plan                 |
| - Protect              |     | - Do                   |
| - Detect               |     | - Check                |
| - Respond              |     | - Act                  |
| - Recover              |     |                        |
+------------------------+     +------------------------+

TACTICAL FRAMEWORKS
+------------------------+     +------------------------+
|    MITRE ATT&CK        |     |    CIS Controls        |
| - Adversary Tactics    |     | - Basic Hygiene        |
| - Techniques           |     | - Foundational         |
| - Procedures           |     | - Organizational       |
+------------------------+     +------------------------+

COMPLIANCE FRAMEWORKS
+------------------------+     +------------------------+
|    PCI DSS             |     |    HIPAA               |
| - Payment Card Data    |     | - Healthcare Data      |
| - Merchant Compliance  |     | - Patient Privacy      |
+------------------------+     +------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Framework Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Framework</th>
            <th className="p-3 border">Focus</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Mandatory?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NIST CSF</td>
            <td className="p-3 border">Risk management</td>
            <td className="p-3 border">Any organization</td>
            <td className="p-3 border">No (voluntary)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ISO 27001</td>
            <td className="p-3 border">ISMS certification</td>
            <td className="p-3 border">Global organizations</td>
            <td className="p-3 border">No (certification)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MITRE ATT&CK</td>
            <td className="p-3 border">Threat intelligence</td>
            <td className="p-3 border">SOC teams, threat hunters</td>
            <td className="p-3 border">No (knowledge base)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CIS Controls</td>
            <td className="p-3 border">Practical security</td>
            <td className="p-3 border">Technical teams</td>
            <td className="p-3 border">No (best practices)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PCI DSS</td>
            <td className="p-3 border">Payment card security</td>
            <td className="p-3 border">Payment processors</td>
            <td className="p-3 border">Yes (contractual)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tool Selection Criteria</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Choosing the Right Security Tools:

1. REQUIREMENTS ASSESSMENT
   - What problems are you solving?
   - What is your environment?
   - What skills does your team have?

2. EVALUATION CRITERIA
   +-------------------+---------------------------+
   | Criterion         | Questions to Ask          |
   +-------------------+---------------------------+
   | Functionality     | Does it meet needs?       |
   | Integration       | Works with existing tools?|
   | Scalability       | Grows with organization?  |
   | Cost              | TCO including training?   |
   | Support           | Vendor/community support? |
   | Usability         | Learning curve?           |
   +-------------------+---------------------------+

3. COMMERCIAL vs OPEN SOURCE
   Commercial: Support, Updates, Features
   Open Source: Cost, Flexibility, Community`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Building a Security Toolkit</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network Discovery:</strong> Start with Nmap for host and service discovery</li>
      <li><strong>Traffic Analysis:</strong> Use Wireshark for packet capture and analysis</li>
      <li><strong>Vulnerability Assessment:</strong> Deploy Nessus or OpenVAS for scanning</li>
      <li><strong>Web Application Testing:</strong> Burp Suite for web vulnerability testing</li>
      <li><strong>Exploitation Framework:</strong> Metasploit for controlled penetration testing</li>
      <li><strong>Platform:</strong> Kali Linux provides a complete security testing distribution</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Tools alone do not provide security - they enable security professionals</li>
        <li>Frameworks provide structure for implementing security programs</li>
        <li>Choose tools based on your specific needs and environment</li>
        <li>Combine multiple frameworks for comprehensive coverage</li>
        <li>Keep tools updated and learn their full capabilities</li>
        <li>Open source tools can be as effective as commercial alternatives</li>
      </ul>
    </div>
  </div>
);

export default ToolsOverview;
