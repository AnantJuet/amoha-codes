import React from "react";

const IRDetection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Detection and Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Detection and Analysis is the phase where security incidents are identified and
      understood. This phase involves monitoring systems, analyzing alerts, determining
      whether an incident has occurred, assessing its scope and impact, and documenting
      findings. Effective detection reduces attacker dwell time and limits damage.
    </p>

    <h2 className="text-3xl font-bold mt-8">Detection Sources</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Detection Sources:

+------------------------------------------------------------------+
|                    DETECTION SOURCES                              |
+------------------------------------------------------------------+
|                                                                   |
|  AUTOMATED                           HUMAN                        |
|  +----------------------+            +----------------------+     |
|  | SIEM Alerts          |            | User Reports         |     |
|  | EDR Alerts           |            | Help Desk Tickets    |     |
|  | IDS/IPS Alerts       |            | Security Hotline     |     |
|  | DLP Alerts           |            | Email Reports        |     |
|  | AV/Anti-malware      |            | Physical Observation |     |
|  | Firewall Logs        |            | External Notification|     |
|  | Network Monitoring   |            | - Law Enforcement    |     |
|  | Cloud Security       |            | - Vendor Alert       |     |
|  | Email Gateway        |            | - Peer Organization  |     |
|  +----------------------+            +----------------------+     |
|                                                                   |
|  PROACTIVE                                                        |
|  +----------------------+                                         |
|  | Threat Hunting       |                                         |
|  | Vulnerability Scans  |                                         |
|  | Pen Test Findings    |                                         |
|  | Threat Intel Feeds   |                                         |
|  +----------------------+                                         |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Alert Triage Process</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Activity</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Receive</td>
            <td className="p-3 border">Alert arrives in queue</td>
            <td className="p-3 border">Alert logged</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Validate</td>
            <td className="p-3 border">Check if alert is legitimate</td>
            <td className="p-3 border">True positive or false positive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Categorize</td>
            <td className="p-3 border">Determine incident type</td>
            <td className="p-3 border">Incident category assigned</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Prioritize</td>
            <td className="p-3 border">Assess severity and urgency</td>
            <td className="p-3 border">Priority level assigned</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Assign</td>
            <td className="p-3 border">Route to appropriate analyst</td>
            <td className="p-3 border">Owner assigned</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Escalate</td>
            <td className="p-3 border">Engage additional resources if needed</td>
            <td className="p-3 border">Escalation triggered</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Analysis Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Analysis Techniques:

1. LOG ANALYSIS
   - Review relevant logs (auth, network, application)
   - Correlate events across sources
   - Build timeline of activities
   - Identify anomalies

2. NETWORK ANALYSIS
   - Capture and analyze traffic
   - Identify C2 communications
   - Map lateral movement
   - Extract IOCs from packets

3. ENDPOINT ANALYSIS
   - Review process execution
   - Check file modifications
   - Analyze memory (if needed)
   - Review registry/startup items

4. MALWARE ANALYSIS
   - Static analysis (hashes, strings)
   - Dynamic analysis (sandbox)
   - Behavior analysis
   - IOC extraction

5. THREAT INTELLIGENCE
   - Check IOCs against threat feeds
   - Attribute to known actors
   - Identify related campaigns
   - Understand adversary TTPs

Analysis Questions:
- What happened?
- When did it happen?
- What systems are affected?
- What data may be impacted?
- How did the attacker get in?
- Is the attack still active?`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Indicators of Compromise (IOCs)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Indicators of Compromise:

NETWORK-BASED IOCs
+------------------+--------------------------------+
| IP Addresses     | C2 servers, known bad actors   |
| Domain Names     | Malicious domains, DGA         |
| URLs             | Phishing, malware download     |
| User Agents      | Unusual or known-bad strings   |
| JA3 Hashes       | TLS fingerprints               |
+------------------+--------------------------------+

HOST-BASED IOCs
+------------------+--------------------------------+
| File Hashes      | MD5, SHA1, SHA256 of malware   |
| File Names       | Known malicious file names     |
| File Paths       | Unusual locations              |
| Registry Keys    | Persistence mechanisms         |
| Process Names    | Suspicious executables         |
| Scheduled Tasks  | Persistence via tasks          |
| Service Names    | Malicious services             |
+------------------+--------------------------------+

BEHAVIORAL IOCs
+------------------+--------------------------------+
| Unusual Logins   | Time, location, frequency      |
| Privilege Escal. | Unexpected admin access        |
| Lateral Movement | RDP, SMB, WMI activity         |
| Data Exfil       | Large outbound transfers       |
| Beacon Traffic   | Regular C2 check-ins           |
+------------------+--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scoping the Incident</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scope Dimension</th>
            <th className="p-3 border">Questions to Answer</th>
            <th className="p-3 border">Data Sources</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Systems Affected</td>
            <td className="p-3 border">How many systems? Which ones?</td>
            <td className="p-3 border">EDR, SIEM, asset inventory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users Impacted</td>
            <td className="p-3 border">Whose accounts compromised?</td>
            <td className="p-3 border">Auth logs, directory services</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data at Risk</td>
            <td className="p-3 border">What data accessed/exfiltrated?</td>
            <td className="p-3 border">DLP, file access logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time Frame</td>
            <td className="p-3 border">When did it start? Still active?</td>
            <td className="p-3 border">Log timestamps, forensics</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attack Vector</td>
            <td className="p-3 border">How did attacker gain access?</td>
            <td className="p-3 border">Email logs, network logs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attacker Access</td>
            <td className="p-3 border">What can attacker currently do?</td>
            <td className="p-3 border">Privilege analysis, persistence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Documentation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Documentation Requirements:

INCIDENT TICKET
+------------------+--------------------------------+
| Incident ID      | Unique identifier              |
| Date/Time        | When detected                  |
| Reporter         | Who/what detected              |
| Category         | Type of incident               |
| Severity         | Priority level                 |
| Status           | Open, investigating, etc.      |
| Owner            | Assigned analyst               |
| Description      | What happened                  |
+------------------+--------------------------------+

INVESTIGATION LOG
+------------------+--------------------------------+
| Timestamp        | When action taken              |
| Analyst          | Who performed action           |
| Action           | What was done                  |
| Finding          | What was discovered            |
| Evidence         | Artifacts collected            |
| Next Steps       | What to do next                |
+------------------+--------------------------------+

IOC LIST
- All identified indicators
- Source of each IOC
- Confidence level
- Actions taken (blocked, searched)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detection Metrics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>MTTD:</strong> Mean Time to Detect - time from incident start to detection</li>
      <li><strong>Alert Volume:</strong> Number of alerts by type and severity</li>
      <li><strong>False Positive Rate:</strong> Percentage of alerts that are not incidents</li>
      <li><strong>Detection Coverage:</strong> Percentage of attack techniques detectable</li>
      <li><strong>Triage Time:</strong> Time from alert to initial assessment complete</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Multiple detection sources improve coverage and reduce blind spots</li>
        <li>Effective triage separates true incidents from false positives</li>
        <li>Thorough analysis determines scope and guides containment</li>
        <li>IOCs help identify related activity across the environment</li>
        <li>Documentation during analysis is critical for later phases</li>
        <li>Reducing MTTD is key to limiting incident impact</li>
      </ul>
    </div>
  </div>
);

export default IRDetection;
