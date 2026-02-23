import React from "react";

const IRContainment: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Containment
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Containment is the phase where actions are taken to limit the spread and impact of
      an incident. The goal is to prevent additional damage while preserving evidence for
      analysis. Containment strategies vary based on incident type, severity, and business
      requirements, balancing security needs with operational continuity.
    </p>

    <h2 className="text-3xl font-bold mt-8">Containment Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Containment Strategy Types:

SHORT-TERM CONTAINMENT
+------------------------------------------------------------------+
| Goal: Stop the immediate threat quickly                           |
| Duration: Minutes to hours                                        |
|                                                                   |
| Actions:                                                          |
| - Isolate affected systems from network                          |
| - Block malicious IP addresses/domains                           |
| - Disable compromised user accounts                              |
| - Kill malicious processes                                        |
| - Preserve system state for forensics                            |
+------------------------------------------------------------------+

LONG-TERM CONTAINMENT
+------------------------------------------------------------------+
| Goal: Maintain containment while enabling operations              |
| Duration: Hours to days                                           |
|                                                                   |
| Actions:                                                          |
| - Implement temporary network segmentation                       |
| - Deploy clean replacement systems                               |
| - Apply emergency patches                                        |
| - Enhance monitoring on affected segments                        |
| - Implement additional access controls                           |
+------------------------------------------------------------------+

Decision Factors:
- Need to preserve evidence
- Business impact of taking systems offline
- Attacker's current capabilities
- Potential for damage if not contained`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Containment Actions by Incident Type</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Incident Type</th>
            <th className="p-3 border">Short-term Actions</th>
            <th className="p-3 border">Long-term Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Malware</td>
            <td className="p-3 border">Isolate host, block C2</td>
            <td className="p-3 border">Scan network, patch vuln</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ransomware</td>
            <td className="p-3 border">Isolate segment, disable shares</td>
            <td className="p-3 border">Segment network, verify backups</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Account Compromise</td>
            <td className="p-3 border">Disable account, terminate sessions</td>
            <td className="p-3 border">Reset credentials, review access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Breach</td>
            <td className="p-3 border">Block exfil channels</td>
            <td className="p-3 border">Enhanced DLP, access review</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web Compromise</td>
            <td className="p-3 border">Take site offline, block attacker IP</td>
            <td className="p-3 border">WAF rules, code review</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Insider Threat</td>
            <td className="p-3 border">Revoke access, monitor activity</td>
            <td className="p-3 border">HR involvement, legal review</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Containment Options</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Containment Techniques:

1. NETWORK ISOLATION
   +--------+     +---------+     +--------+
   | Clean  |     |Firewall |     |Infected|
   | Network| <=X=| Rules   | <=X=| Systems|
   +--------+     +---------+     +--------+

   - Disable switch port
   - VLAN isolation
   - Firewall ACL block
   - EDR network isolation feature

2. SELECTIVE BLOCKING
   Block specific communications:
   - C2 IP addresses/domains at firewall
   - Block malicious protocols/ports
   - DNS sinkholing
   - Email attachment blocking

3. NETWORK SEGMENTATION
   Create temporary segments:
   - Quarantine VLAN
   - Limited internet access segment
   - Investigation network (isolated)

4. TRAFFIC MONITORING
   Enhanced monitoring during containment:
   - Full packet capture
   - NetFlow analysis
   - Increased logging verbosity

Example Firewall Rules:
# Block outbound to C2
deny ip any host 192.168.100.50
deny ip any host evil-domain.com

# Isolate infected host
deny ip host 10.1.1.100 any
deny ip any host 10.1.1.100`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Host Containment Options</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Host-Level Containment Actions:

PROCESS CONTAINMENT
- Kill malicious processes
- Suspend suspicious processes
- Block process execution (AppLocker/WDAC)

ACCOUNT CONTAINMENT
- Disable user accounts
- Force password reset
- Revoke active sessions
- Remove from privileged groups

FILE CONTAINMENT
- Quarantine malicious files
- Block file execution
- Remove persistence mechanisms
- Prevent file modification

SERVICE CONTAINMENT
- Stop malicious services
- Disable autostart
- Block service accounts

EDR CONTAINMENT FEATURES
+------------------+--------------------------------+
| Isolate Host     | Network isolation via agent    |
| Kill Process     | Terminate specific processes   |
| Quarantine File  | Move file to secure location   |
| Block Hash       | Prevent execution of hash      |
| Disable Account  | AD integration actions         |
+------------------+--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evidence Preservation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Evidence Type</th>
            <th className="p-3 border">Preservation Method</th>
            <th className="p-3 border">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Memory</td>
            <td className="p-3 border">RAM capture before power off</td>
            <td className="p-3 border">Critical - Most volatile</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Running Processes</td>
            <td className="p-3 border">Process list, open handles</td>
            <td className="p-3 border">High - Changes on reboot</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Connections</td>
            <td className="p-3 border">Netstat output, packet capture</td>
            <td className="p-3 border">High - Transient data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Disk Image</td>
            <td className="p-3 border">Forensic image (bit-by-bit)</td>
            <td className="p-3 border">Medium - Stable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logs</td>
            <td className="p-3 border">Export and secure copies</td>
            <td className="p-3 border">Medium - May rotate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Malware Samples</td>
            <td className="p-3 border">Copy to secure storage</td>
            <td className="p-3 border">Medium - May be cleaned</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Containment Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Containment Decision Framework:

FACTORS TO CONSIDER:

1. POTENTIAL DAMAGE
   - What can attacker do if not contained?
   - What's the data exposure risk?
   - Is ransomware spreading?

2. BUSINESS IMPACT
   - Is this a critical system?
   - What processes depend on it?
   - What's the cost of downtime?

3. EVIDENCE NEEDS
   - Is legal action anticipated?
   - Do we need forensic evidence?
   - Will containment destroy evidence?

4. ATTACKER AWARENESS
   - Will they notice containment?
   - Will they accelerate destruction?
   - Can we monitor covertly first?

DECISION MATRIX:
+----------------+------------------+------------------+
| If...          | Low Business     | High Business    |
|                | Impact           | Impact           |
+----------------+------------------+------------------+
| High Threat    | Isolate          | Isolate + Backup |
|                | Immediately      | Plan in Place    |
+----------------+------------------+------------------+
| Low Threat     | Monitor +        | Monitor + Plan   |
|                | Contain Soon     | Contain Carefully|
+----------------+------------------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Short-term containment stops immediate spread; long-term enables recovery</li>
        <li>Balance containment urgency with evidence preservation needs</li>
        <li>Consider business impact when choosing containment strategy</li>
        <li>Memory evidence is most volatile - capture first</li>
        <li>Document all containment actions taken and their timing</li>
        <li>Attackers may escalate if they detect containment efforts</li>
      </ul>
    </div>
  </div>
);

export default IRContainment;
