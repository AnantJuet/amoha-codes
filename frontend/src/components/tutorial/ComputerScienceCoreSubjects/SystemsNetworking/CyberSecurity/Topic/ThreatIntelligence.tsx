import React from "react";

const ThreatIntelligence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Threat Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Threat Intelligence (TI) is evidence-based knowledge about existing or emerging threats
      to assets. It includes context, mechanisms, indicators, implications, and actionable
      advice about threats. Effective threat intelligence enables organizations to make informed
      decisions about defending against adversaries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Threat Intelligence Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Threat Intelligence Pyramid:

                    +-------------------+
                    |    STRATEGIC      |  Who? Why?
                    |   (Executive)     |  High-level trends
                    +-------------------+  Business risk
                           /    \\
                          /      \\
              +----------+        +----------+
              | TACTICAL |        |OPERATIONAL|  What? How?
              | (Manager)|        | (Analyst) |  TTPs, campaigns
              +----------+        +----------+  Attack methods
                     \\              /
                      \\            /
                   +------------------+
                   |    TECHNICAL     |  IOCs, signatures
                   |    (Analyst)     |  IP, hash, domain
                   +------------------+  Machine-readable

Intelligence Type Details:
+------------------+----------------------------------+---------------+
| Type             | Content                          | Audience      |
+------------------+----------------------------------+---------------+
| Strategic        | Trends, threat landscape, risk   | Executives    |
| Operational      | Campaigns, TTPs, actor profiles  | SOC Managers  |
| Tactical         | Attack methods, procedures       | Security Team |
| Technical        | IOCs, signatures, rules          | SOC Analysts  |
+------------------+----------------------------------+---------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Threat Intelligence Lifecycle</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Activities</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Direction</td>
            <td className="p-3 border">Define intelligence requirements</td>
            <td className="p-3 border">Priority intelligence requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Collection</td>
            <td className="p-3 border">Gather raw data from sources</td>
            <td className="p-3 border">Raw threat data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Processing</td>
            <td className="p-3 border">Normalize, enrich, filter data</td>
            <td className="p-3 border">Processed data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Analysis</td>
            <td className="p-3 border">Interpret and contextualize</td>
            <td className="p-3 border">Intelligence products</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Dissemination</td>
            <td className="p-3 border">Share with stakeholders</td>
            <td className="p-3 border">Reports, feeds, alerts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Feedback</td>
            <td className="p-3 border">Gather input, refine process</td>
            <td className="p-3 border">Improved requirements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Intelligence Sources</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Threat Intelligence Sources:

INTERNAL SOURCES
+------------------------------------------------------------------+
| Security logs and alerts from SIEM/EDR                            |
| Incident response findings                                        |
| Vulnerability assessment results                                  |
| Penetration test findings                                         |
| Help desk reports                                                 |
+------------------------------------------------------------------+

EXTERNAL SOURCES - OPEN SOURCE (OSINT)
+------------------------------------------------------------------+
| Security vendor blogs and reports                                 |
| CERT advisories (US-CERT, CERT/CC)                               |
| Security researcher publications                                  |
| Social media (Twitter/X security community)                       |
| Public malware repositories (VirusTotal, Any.Run)                |
| Vulnerability databases (NVD, CVE)                               |
+------------------------------------------------------------------+

EXTERNAL SOURCES - COMMERCIAL
+------------------------------------------------------------------+
| Threat intelligence platforms (Recorded Future, Mandiant)         |
| ISAC/ISAO membership                                              |
| Dark web monitoring services                                      |
| Malware analysis services                                         |
+------------------------------------------------------------------+

EXTERNAL SOURCES - SHARING COMMUNITIES
+------------------------------------------------------------------+
| Information Sharing and Analysis Centers (ISACs)                  |
| Threat intelligence sharing platforms (MISP)                      |
| Government programs (FBI, CISA)                                   |
| Peer organizations and industry groups                            |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Indicators of Compromise</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IOC Types and Examples:

NETWORK IOCs
+------------------+--------------------------------+
| IP Address       | 192.168.100.50                 |
| Domain           | malicious-domain.com           |
| URL              | http://evil.com/malware.exe    |
| Email Address    | attacker@phishing.com          |
| JA3 Hash         | abc123... (TLS fingerprint)    |
+------------------+--------------------------------+

FILE IOCs
+------------------+--------------------------------+
| MD5 Hash         | d41d8cd98f00b204e9800998ecf... |
| SHA256 Hash      | e3b0c44298fc1c149afbf4c89... |
| File Name        | invoice.exe                    |
| File Path        | C:\\Windows\\Temp\\malware.dll  |
| Imphash          | 1234abcd... (import hash)      |
+------------------+--------------------------------+

BEHAVIORAL IOCs
+------------------+--------------------------------+
| Registry Key     | HKLM\\SOFTWARE\\Malware        |
| Mutex            | Global\\MyMalwareMutex         |
| Service Name     | MaliciousService               |
| Process Name     | evil.exe                       |
| YARA Rule        | Pattern matching signature     |
+------------------+--------------------------------+

IOC Quality Factors:
- Timeliness: How recent?
- Relevance: Applicable to your environment?
- Accuracy: Verified, false positive rate?
- Actionability: Can you use it?`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Threat Intelligence Platforms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Platform</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">MISP</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">Sharing platform, correlation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OpenCTI</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">Knowledge management, STIX support</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recorded Future</td>
            <td className="p-3 border">Commercial</td>
            <td className="p-3 border">Automated collection, analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mandiant TI</td>
            <td className="p-3 border">Commercial</td>
            <td className="p-3 border">APT tracking, detailed reports</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ThreatConnect</td>
            <td className="p-3 border">Commercial</td>
            <td className="p-3 border">TIP with orchestration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AlienVault OTX</td>
            <td className="p-3 border">Free Community</td>
            <td className="p-3 border">Community sharing, pulses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">STIX and TAXII</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Threat Intelligence Standards:

STIX (Structured Threat Information Expression)
- Language for describing threat intelligence
- Standardized format for IOCs, TTPs, actors
- JSON-based in STIX 2.x

STIX Objects:
- Attack Pattern
- Campaign
- Course of Action
- Identity
- Indicator
- Malware
- Threat Actor
- Vulnerability

TAXII (Trusted Automated Exchange of Intelligence Information)
- Protocol for sharing threat intelligence
- Client-server model
- Supports push and pull operations

Example STIX Indicator:
{
  "type": "indicator",
  "spec_version": "2.1",
  "id": "indicator--xxxx",
  "name": "Malicious IP",
  "pattern": "[ipv4-addr:value = '192.168.1.100']",
  "pattern_type": "stix",
  "valid_from": "2025-01-01T00:00:00Z"
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using Threat Intelligence</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Detection:</strong> Create SIEM rules and IDS signatures from IOCs</li>
      <li><strong>Prevention:</strong> Block known malicious IPs, domains, hashes</li>
      <li><strong>Hunting:</strong> Search for indicators of compromise in your environment</li>
      <li><strong>Response:</strong> Contextualize incidents with actor and campaign info</li>
      <li><strong>Risk Assessment:</strong> Understand threats relevant to your industry</li>
      <li><strong>Planning:</strong> Inform security strategy and investments</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Intelligence must be relevant, timely, and actionable</li>
        <li>Different audiences need different types of intelligence</li>
        <li>Combine internal and external sources for best coverage</li>
        <li>Use standardized formats (STIX/TAXII) for sharing</li>
        <li>Integrate TI into security tools for automated defense</li>
        <li>Quality matters more than quantity for IOCs</li>
      </ul>
    </div>
  </div>
);

export default ThreatIntelligence;
