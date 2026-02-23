import React from "react";

const LogAnalysis: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Log Analysis for Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Log analysis is the process of examining log data to identify security events, investigate
      incidents, and detect anomalous behavior. Effective log analysis is fundamental to
      security monitoring, incident response, and compliance. It transforms raw log data into
      actionable security intelligence.
    </p>

    <h2 className="text-3xl font-bold mt-8">Critical Log Sources</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security-Critical Log Sources:

ENDPOINT LOGS
+------------------------------------------------------------------+
| Windows Security Event Log                                        |
| - Authentication events (4624, 4625)                              |
| - Process creation (4688)                                         |
| - Object access (4663)                                            |
| - Privilege use (4672)                                            |
+------------------------------------------------------------------+
| Linux Logs                                                        |
| - /var/log/auth.log (authentication)                              |
| - /var/log/syslog (system events)                                 |
| - /var/log/audit/audit.log (if auditd)                           |
+------------------------------------------------------------------+

NETWORK LOGS
+------------------------------------------------------------------+
| Firewall logs - Allow/deny, connections                           |
| Proxy logs - Web requests, URLs                                   |
| DNS logs - Query and response                                     |
| VPN logs - Remote access                                          |
| IDS/IPS logs - Alerts and blocks                                  |
+------------------------------------------------------------------+

APPLICATION LOGS
+------------------------------------------------------------------+
| Web server (Apache, Nginx, IIS)                                   |
| Database (queries, authentication)                                |
| Email server (sending, receiving)                                 |
| Custom applications                                               |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Windows Event IDs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Event ID</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Security Relevance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">4624</td>
            <td className="p-3 border">Successful logon</td>
            <td className="p-3 border">Track access, detect lateral movement</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4625</td>
            <td className="p-3 border">Failed logon</td>
            <td className="p-3 border">Brute force, password spraying</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4648</td>
            <td className="p-3 border">Explicit credential logon</td>
            <td className="p-3 border">Credential theft, pass-the-hash</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4672</td>
            <td className="p-3 border">Special privileges assigned</td>
            <td className="p-3 border">Admin logon detection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4688</td>
            <td className="p-3 border">Process creation</td>
            <td className="p-3 border">Malware execution, commands</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4720</td>
            <td className="p-3 border">User account created</td>
            <td className="p-3 border">Unauthorized account creation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4732</td>
            <td className="p-3 border">Member added to security group</td>
            <td className="p-3 border">Privilege escalation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1102</td>
            <td className="p-3 border">Audit log cleared</td>
            <td className="p-3 border">Evidence destruction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Log Analysis Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Log Analysis Techniques:

1. PATTERN MATCHING
   - Search for known IOCs
   - Regular expressions for patterns
   - Keyword searches

   Example: Search for PowerShell encoded commands
   grep -i "powershell.*-enc" *.log

2. STATISTICAL ANALYSIS
   - Identify outliers
   - Unusual volume
   - Time-based anomalies

   Example: Count events per hour
   cat auth.log | cut -d: -f1 | uniq -c | sort -rn

3. CORRELATION
   - Link events across sources
   - Build attack timelines
   - Identify related activity

   Example: Correlate failed login -> successful login -> data access

4. BASELINE COMPARISON
   - Compare to normal behavior
   - Identify deviations
   - Detect new activity

5. TIMELINE ANALYSIS
   - Chronological event ordering
   - Activity reconstruction
   - Attack path mapping`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Attack Patterns in Logs</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attack Pattern Detection:

BRUTE FORCE ATTACK
Pattern: Multiple 4625 (failed logins) from same source
+------------------------------------------------------------------+
| Time     | Source IP     | User    | Status                      |
+------------------------------------------------------------------+
| 10:01:01 | 192.168.1.100 | admin   | FAILED (4625)               |
| 10:01:02 | 192.168.1.100 | admin   | FAILED (4625)               |
| 10:01:03 | 192.168.1.100 | admin   | FAILED (4625)               |
| 10:01:15 | 192.168.1.100 | admin   | SUCCESS (4624)              |
+------------------------------------------------------------------+

LATERAL MOVEMENT
Pattern: Multiple 4624 (logons) to different hosts from same user
+------------------------------------------------------------------+
| Time     | Source        | Destination | User   | Logon Type     |
+------------------------------------------------------------------+
| 10:00:00 | Workstation1  | Server1     | jsmith | Network (3)    |
| 10:02:00 | Workstation1  | Server2     | jsmith | Network (3)    |
| 10:05:00 | Workstation1  | DC1         | jsmith | Network (3)    |
+------------------------------------------------------------------+

DATA EXFILTRATION
Pattern: Large outbound transfers, unusual destinations
+------------------------------------------------------------------+
| Time     | Source        | Destination     | Bytes    | Action   |
+------------------------------------------------------------------+
| 14:30:00 | 10.1.1.50     | 185.x.x.x       | 50MB     | ALLOW    |
| 14:35:00 | 10.1.1.50     | 185.x.x.x       | 100MB    | ALLOW    |
| 14:40:00 | 10.1.1.50     | 185.x.x.x       | 200MB    | ALLOW    |
+------------------------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Log Analysis Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Splunk</td>
            <td className="p-3 border">SIEM/Log Management</td>
            <td className="p-3 border">Enterprise-scale analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ELK Stack</td>
            <td className="p-3 border">Log Management</td>
            <td className="p-3 border">Open source, scalable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Graylog</td>
            <td className="p-3 border">Log Management</td>
            <td className="p-3 border">Open source, easy setup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">grep/awk/sed</td>
            <td className="p-3 border">CLI Tools</td>
            <td className="p-3 border">Quick searches, scripting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Log Parser</td>
            <td className="p-3 border">Microsoft Tool</td>
            <td className="p-3 border">Windows log analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chainsaw</td>
            <td className="p-3 border">Forensic Tool</td>
            <td className="p-3 border">Windows EVTX analysis</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Splunk Search Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Splunk SPL Examples:

# Failed logins in last 24 hours
index=windows EventCode=4625
| stats count by src_ip, user
| where count > 5

# Successful admin logins
index=windows EventCode=4624 LogonType=10
| search user=*admin*

# New user accounts created
index=windows EventCode=4720
| table _time, user, TargetUserName, SubjectUserName

# Process execution tracking
index=windows EventCode=4688
| search CommandLine=*powershell* OR CommandLine=*cmd*
| table _time, Computer, user, CommandLine

# Outbound traffic analysis
index=firewall action=allowed direction=outbound
| stats sum(bytes_out) as total_bytes by src_ip, dest_ip
| where total_bytes > 100000000

# Timeline of user activity
index=* user="jsmith"
| sort _time
| table _time, index, action, src_ip, dest_ip`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Log Retention Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Security Logs:</strong> Minimum 1 year, ideally 2+ years</li>
      <li><strong>Authentication Logs:</strong> 1-2 years for forensic needs</li>
      <li><strong>Network Logs:</strong> 90 days minimum, longer for compliance</li>
      <li><strong>Application Logs:</strong> Based on business and compliance needs</li>
      <li><strong>Centralized Storage:</strong> Aggregate logs in secure, central location</li>
      <li><strong>Integrity Protection:</strong> Use write-once storage or log signing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Centralize logs from all critical sources</li>
        <li>Know key Windows Event IDs for security analysis</li>
        <li>Correlate events across multiple log sources</li>
        <li>Establish baselines to detect anomalies</li>
        <li>Retain logs long enough for investigation needs</li>
        <li>Automate analysis with SIEM rules and alerts</li>
      </ul>
    </div>
  </div>
);

export default LogAnalysis;
