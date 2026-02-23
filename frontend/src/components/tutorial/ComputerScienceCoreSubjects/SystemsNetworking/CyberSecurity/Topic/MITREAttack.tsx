import React from "react";

const MITREAttack: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MITRE ATT&CK Framework
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) is a globally
      accessible knowledge base of adversary tactics and techniques based on real-world
      observations. It is used as a foundation for threat models and methodologies in the
      private sector, government, and cybersecurity community.
    </p>

    <h2 className="text-3xl font-bold mt-8">ATT&CK Matrix Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MITRE ATT&CK Enterprise Matrix (Simplified):

TACTICS (Adversary Goals - The "WHY")
+--------+--------+--------+--------+--------+--------+--------+
| Recon  | Resource| Initial| Exec   | Persist| Priv   | Defense|
|        | Dev    | Access |        |        | Esc    | Evasion|
+--------+--------+--------+--------+--------+--------+--------+
| Cred   | Discov | Lateral| Collect| C2     | Exfil  | Impact |
| Access | ery    | Move   |        |        |        |        |
+--------+--------+--------+--------+--------+--------+--------+

Under each tactic are TECHNIQUES (The "HOW"):

Example: Initial Access Techniques
+------------------------------------------------------------------+
| T1566 - Phishing                                                  |
|   ├── T1566.001 - Spearphishing Attachment                       |
|   ├── T1566.002 - Spearphishing Link                             |
|   └── T1566.003 - Spearphishing via Service                      |
| T1190 - Exploit Public-Facing Application                        |
| T1133 - External Remote Services                                 |
| T1078 - Valid Accounts                                           |
+------------------------------------------------------------------+

Hierarchy:
TACTIC --> TECHNIQUE --> SUB-TECHNIQUE --> PROCEDURE`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tactics Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tactic</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Techniques</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Reconnaissance</td>
            <td className="p-3 border">Gather information for attack planning</td>
            <td className="p-3 border">Active Scanning, Phishing for Info</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Development</td>
            <td className="p-3 border">Establish resources for operations</td>
            <td className="p-3 border">Acquire Infrastructure, Develop Capabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Initial Access</td>
            <td className="p-3 border">Get into the network</td>
            <td className="p-3 border">Phishing, Exploit Public App</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Execution</td>
            <td className="p-3 border">Run malicious code</td>
            <td className="p-3 border">PowerShell, Command-Line Interface</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Persistence</td>
            <td className="p-3 border">Maintain foothold</td>
            <td className="p-3 border">Registry Run Keys, Scheduled Tasks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Privilege Escalation</td>
            <td className="p-3 border">Get higher permissions</td>
            <td className="p-3 border">Exploitation, Token Manipulation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Defense Evasion</td>
            <td className="p-3 border">Avoid detection</td>
            <td className="p-3 border">Obfuscation, Rootkits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Credential Access</td>
            <td className="p-3 border">Steal credentials</td>
            <td className="p-3 border">Keylogging, Credential Dumping</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Discovery</td>
            <td className="p-3 border">Learn about the environment</td>
            <td className="p-3 border">Network Scanning, Account Discovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lateral Movement</td>
            <td className="p-3 border">Move through network</td>
            <td className="p-3 border">Remote Services, Pass the Hash</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Collection</td>
            <td className="p-3 border">Gather target data</td>
            <td className="p-3 border">Screen Capture, Data from Local System</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Command and Control</td>
            <td className="p-3 border">Communicate with compromised systems</td>
            <td className="p-3 border">Encrypted Channel, Web Protocols</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Exfiltration</td>
            <td className="p-3 border">Steal data</td>
            <td className="p-3 border">Exfil Over C2, Exfil Over Web</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Impact</td>
            <td className="p-3 border">Manipulate, disrupt, destroy</td>
            <td className="p-3 border">Data Encryption, Defacement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ATT&CK Use Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MITRE ATT&CK Use Cases:

1. THREAT INTELLIGENCE
   - Map observed behaviors to techniques
   - Track threat actor TTPs
   - Share intelligence using common language

   Example: APT29 uses T1566.001 (Spearphishing Attachment)

2. DETECTION ENGINEERING
   - Build detections around techniques
   - Prioritize based on adversary techniques
   - Measure detection coverage

   Detection for T1003 (OS Credential Dumping):
   - Monitor LSASS memory access
   - Alert on Mimikatz-like behavior
   - Watch for NTDS.dit access

3. RED TEAM / ADVERSARY EMULATION
   - Plan operations using ATT&CK
   - Emulate specific threat actors
   - Document procedures against techniques

   Red Team Plan:
   T1566 --> T1059 --> T1053 --> T1003 --> T1021

4. SECURITY GAP ASSESSMENT
   - Map current defenses to ATT&CK
   - Identify coverage gaps
   - Prioritize security investments`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ATT&CK Navigator</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ATT&CK Navigator Visualization:

The Navigator is a web tool for visualizing ATT&CK matrices.

Features:
- Color-code techniques based on criteria
- Layer multiple views
- Compare defensive coverage
- Export for reporting

Example Layer (Detection Coverage):
+------------------------------------------------------------------+
|  Color Legend:                                                    |
|  [Green] = Good detection    [Yellow] = Partial detection        |
|  [Red] = No detection        [Gray] = Not applicable             |
+------------------------------------------------------------------+
| Initial  | Execution | Persist | Priv Esc | Defense  | Cred     |
| Access   |           |         |          | Evasion  | Access   |
+----------+-----------+---------+----------+----------+----------+
| [GREEN]  | [GREEN]   | [YELLOW]| [YELLOW] | [RED]    | [YELLOW] |
| Phishing | PowerShell| Startup | Valid    | Process  | Brute    |
|          |           | Items   | Accounts | Injection| Force    |
+----------+-----------+---------+----------+----------+----------+

URL: attack.mitre.org/matrices/enterprise/`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ATT&CK Matrices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Matrix</th>
            <th className="p-3 border">Target</th>
            <th className="p-3 border">Platforms</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Enterprise</td>
            <td className="p-3 border">Traditional IT networks</td>
            <td className="p-3 border">Windows, macOS, Linux, Cloud, Network</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mobile</td>
            <td className="p-3 border">Mobile devices</td>
            <td className="p-3 border">Android, iOS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ICS</td>
            <td className="p-3 border">Industrial Control Systems</td>
            <td className="p-3 border">PLCs, SCADA, HMI</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mapping to ATT&CK</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Identify Behavior:</strong> What did the adversary do?</li>
      <li><strong>Research Techniques:</strong> Search ATT&CK for matching techniques</li>
      <li><strong>Select Technique:</strong> Choose most specific match (sub-technique if applicable)</li>
      <li><strong>Document Procedure:</strong> Note specific implementation details</li>
      <li><strong>Link to Intelligence:</strong> Associate with threat actors or campaigns</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ATT&CK is based on real-world adversary observations</li>
        <li>Tactics are the "why" and techniques are the "how"</li>
        <li>Use ATT&CK Navigator for visualization and gap analysis</li>
        <li>Framework provides common language for threat discussion</li>
        <li>Continuously updated with new techniques and groups</li>
        <li>Free and publicly accessible at attack.mitre.org</li>
      </ul>
    </div>
  </div>
);

export default MITREAttack;
