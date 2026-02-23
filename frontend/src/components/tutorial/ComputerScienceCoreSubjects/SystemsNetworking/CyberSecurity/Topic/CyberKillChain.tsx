import React from "react";

const CyberKillChain: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cyber Kill Chain
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Cyber Kill Chain is a framework developed by Lockheed Martin that describes the stages
      of a cyber attack. Understanding this model helps security teams identify, prevent, and
      mitigate attacks at various stages before damage occurs.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is the Cyber Kill Chain?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The 7 Stages of Cyber Kill Chain:

Stage 1: Reconnaissance
    |
    v
Stage 2: Weaponization
    |
    v
Stage 3: Delivery
    |
    v
Stage 4: Exploitation
    |
    v
Stage 5: Installation
    |
    v
Stage 6: Command & Control (C2)
    |
    v
Stage 7: Actions on Objectives

Breaking the chain at ANY stage stops the attack!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 1: Reconnaissance</h2>
    <p className="leading-relaxed">
      Attackers gather information about the target organization, identifying potential entry points
      and vulnerabilities.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Activity</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">OSINT Gathering</td>
            <td className="p-3 border">Public information collection</td>
            <td className="p-3 border">Limit public exposure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Social Media Scraping</td>
            <td className="p-3 border">Employee information harvesting</td>
            <td className="p-3 border">Privacy awareness training</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Scanning</td>
            <td className="p-3 border">Identifying open ports/services</td>
            <td className="p-3 border">IDS/IPS, firewall logs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 2: Weaponization</h2>
    <p className="leading-relaxed">
      Attackers create malicious payloads designed to exploit discovered vulnerabilities.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Weaponization Process:

Vulnerability Found --> Create Exploit --> Package Payload
       |                     |                   |
       v                     v                   v
  CVE-2024-XXXX        Malware Code       Delivery Method
                                          - Document
                                          - Link
                                          - USB

Defense: Threat intelligence, sandbox analysis`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 3: Delivery</h2>
    <p className="leading-relaxed">
      The weaponized payload is transmitted to the target through various channels.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Delivery Method</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">Defense</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Email</td>
            <td className="p-3 border">Phishing with attachment</td>
            <td className="p-3 border">Email security gateway</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web</td>
            <td className="p-3 border">Drive-by download</td>
            <td className="p-3 border">Web filtering, browser isolation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">USB</td>
            <td className="p-3 border">Infected removable media</td>
            <td className="p-3 border">Device control policies</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 4: Exploitation</h2>
    <p className="leading-relaxed">
      The malicious code is executed on the target system, exploiting a vulnerability.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Exploitation Methods:

+------------------+  +------------------+
| Software Vulns   |  | Human Factor     |
| - Buffer overflow|  | - Social eng.    |
| - Zero-day       |  | - Credential     |
| - Known CVEs     |  |   harvesting     |
+------------------+  +------------------+

Defenses:
- Patch management
- Application whitelisting
- Security awareness
- Endpoint protection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 5: Installation</h2>
    <p className="leading-relaxed">
      Malware is installed to establish persistence on the compromised system.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Backdoors:</strong> Hidden access points for future entry</li>
      <li><strong>Web Shells:</strong> Remote access through web server</li>
      <li><strong>Rootkits:</strong> Deep system-level hiding mechanisms</li>
      <li><strong>Registry Modifications:</strong> Survive system reboots</li>
      <li><strong>Scheduled Tasks:</strong> Automatic re-execution</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Stage 6: Command and Control (C2)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`C2 Communication:

Compromised Host <---> C2 Server
       |                   |
       | Commands:         |
       | - Download files  |
       | - Execute code    |
       | - Exfiltrate data |
       | - Lateral move    |
       |                   |

C2 Channels:
- HTTP/HTTPS (blend with normal traffic)
- DNS tunneling (covert channel)
- Social media (hidden commands)
- Custom protocols

Defense: Network monitoring, DNS analysis,
         traffic inspection, blocking known C2s`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stage 7: Actions on Objectives</h2>
    <p className="leading-relaxed">
      Attackers achieve their ultimate goals, which may include:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Objective</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Exfiltration</td>
            <td className="p-3 border">Stealing sensitive data</td>
            <td className="p-3 border">Data breach, compliance issues</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ransomware</td>
            <td className="p-3 border">Encrypting data for ransom</td>
            <td className="p-3 border">Financial loss, downtime</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Destruction</td>
            <td className="p-3 border">Wiping or corrupting systems</td>
            <td className="p-3 border">Operational disruption</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Espionage</td>
            <td className="p-3 border">Long-term intelligence gathering</td>
            <td className="p-3 border">Competitive/national threat</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Breaking the Kill Chain</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Detect Early:</strong> Earlier detection means less damage</li>
        <li><strong>Layer Defenses:</strong> Multiple controls at each stage</li>
        <li><strong>Assume Breach:</strong> Prepare for attackers inside the network</li>
        <li><strong>Hunt Threats:</strong> Proactively search for indicators</li>
        <li><strong>Share Intelligence:</strong> Learn from others' experiences</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>The kill chain has 7 sequential stages from recon to objectives</li>
        <li>Breaking the chain at any stage stops the attack</li>
        <li>Earlier detection leads to lower impact</li>
        <li>Defense in depth addresses multiple kill chain stages</li>
        <li>Understanding attacker methodology improves defenses</li>
        <li>Continuous monitoring is essential for kill chain disruption</li>
      </ul>
    </div>
  </div>
);

export default CyberKillChain;
