import React from "react";

const Antivirus: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Antivirus and Anti-Malware
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Antivirus (AV) software is designed to detect, prevent, and remove malicious software
      from computer systems. Modern antivirus solutions have evolved from simple signature-based
      scanners to comprehensive endpoint protection platforms that use multiple detection
      techniques including behavioral analysis, machine learning, and cloud-based threat intelligence.
    </p>

    <h2 className="text-3xl font-bold mt-8">Detection Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">How It Works</th>
            <th className="p-3 border">Effectiveness</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Signature-Based</td>
            <td className="p-3 border">Matches known malware patterns</td>
            <td className="p-3 border">High for known threats</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Heuristic</td>
            <td className="p-3 border">Analyzes code behavior patterns</td>
            <td className="p-3 border">Moderate (false positives)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Behavioral</td>
            <td className="p-3 border">Monitors runtime actions</td>
            <td className="p-3 border">High for new threats</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Machine Learning</td>
            <td className="p-3 border">AI-based pattern recognition</td>
            <td className="p-3 border">Very high</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sandboxing</td>
            <td className="p-3 border">Executes in isolated environment</td>
            <td className="p-3 border">High (resource intensive)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Signature-Based Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Signature-Based Detection Process:

1. SIGNATURE DATABASE
   +------------------------------------------+
   | Malware Name    | Signature (Pattern)    |
   +------------------------------------------+
   | Trojan.Generic  | {0x4D,0x5A,0x90...}    |
   | Worm.Conficker  | {0xEB,0x03,0x5B...}    |
   | Ransom.WannaCry | {0x55,0x8B,0xEC...}    |
   +------------------------------------------+

2. SCANNING PROCESS
   [File] --> [Extract patterns] --> [Compare to DB]
                                          |
                       +------------------+------------------+
                       |                                     |
                    [Match]                              [No Match]
                       |                                     |
                  [MALWARE!]                             [Clean]

LIMITATIONS:
- Cannot detect unknown malware (zero-day)
- Requires constant signature updates
- Polymorphic malware evades detection
- Large signature databases impact performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Behavioral Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Behavioral Analysis:

MONITORED BEHAVIORS:
+---------------------------+------------------------+
| Suspicious Action         | Malware Type Indicator |
+---------------------------+------------------------+
| Mass file encryption      | Ransomware             |
| Keylogging API calls      | Spyware/Keylogger      |
| Process injection         | Trojan/RAT             |
| Network beaconing         | Botnet/C2              |
| Registry persistence      | General malware        |
| Privilege escalation      | Rootkit/Exploit        |
| Disabling security tools  | General malware        |
+---------------------------+------------------------+

BEHAVIORAL RULES:
IF process:
  - Creates many files with random extensions
  - Deletes shadow copies
  - Modifies numerous files rapidly
THEN: Flag as potential RANSOMWARE

ADVANTAGES:
- Detects unknown malware
- Not dependent on signatures
- Catches zero-day threats

CHALLENGES:
- False positives
- Resource intensive
- Can be evaded with slow operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Endpoint Protection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Endpoint Detection and Response (EDR):

Traditional AV:
[Signature Scan] --> [Block/Allow]
       |
   Limited visibility

Modern EDR:
+------------------+
| Continuous       |
| Monitoring       |
+--------+---------+
         |
+--------v---------+     +-----------------+
| Event Collection |---->| Cloud Analysis  |
| - Process events |     | - ML Models     |
| - File changes   |     | - Threat Intel  |
| - Network conn   |     | - Behavioral    |
| - Registry mods  |     +---------+-------+
+------------------+               |
                                   v
                          +--------+--------+
                          | Response        |
                          | - Block         |
                          | - Quarantine    |
                          | - Investigate   |
                          | - Remediate     |
                          +-----------------+

EDR CAPABILITIES:
- Real-time monitoring
- Threat hunting
- Incident investigation
- Automated response
- Forensic data collection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AV Evasion Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Countermeasure</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Packing/Encryption</td>
            <td className="p-3 border">Obfuscate code</td>
            <td className="p-3 border">Unpacking, emulation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Polymorphism</td>
            <td className="p-3 border">Change each copy</td>
            <td className="p-3 border">Behavioral analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fileless Malware</td>
            <td className="p-3 border">No files on disk</td>
            <td className="p-3 border">Memory scanning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sandbox Detection</td>
            <td className="p-3 border">Detect analysis env</td>
            <td className="p-3 border">Realistic sandboxes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Living-off-the-Land</td>
            <td className="p-3 border">Use legitimate tools</td>
            <td className="p-3 border">Behavior monitoring</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Keep Updated:</strong> Ensure definitions are current</li>
      <li><strong>Real-time Protection:</strong> Enable continuous monitoring</li>
      <li><strong>Full Scans:</strong> Schedule regular complete system scans</li>
      <li><strong>Multiple Layers:</strong> AV alone is not sufficient</li>
      <li><strong>User Training:</strong> Educate about phishing and social engineering</li>
      <li><strong>Patch Systems:</strong> Keep OS and applications updated</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Signature-based detection finds known malware quickly</li>
        <li>Behavioral analysis catches unknown and zero-day threats</li>
        <li>Modern EDR provides continuous monitoring and response</li>
        <li>No single technique catches all malware - use layered defense</li>
        <li>Regular updates are critical for signature-based detection</li>
        <li>Malware constantly evolves to evade detection</li>
      </ul>
    </div>
  </div>
);

export default Antivirus;
