import React from "react";

const IREradication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Eradication and Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Eradication and Recovery are the phases where the threat is completely removed from the
      environment and systems are restored to normal operation. Eradication ensures all traces
      of the attacker are eliminated, while recovery focuses on returning to business as usual
      safely and securely.
    </p>

    <h2 className="text-3xl font-bold mt-8">Eradication Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Eradication Phase Goals:

+------------------------------------------------------------------+
|                       ERADICATION                                 |
+------------------------------------------------------------------+
|                                                                   |
|  REMOVE THREAT COMPLETELY                                         |
|  +------------------------------------------------------------+  |
|  | - Delete malware and malicious files                        |  |
|  | - Remove persistence mechanisms                             |  |
|  | - Close attacker access (backdoors, accounts)               |  |
|  | - Patch exploited vulnerabilities                           |  |
|  | - Address root cause of compromise                          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  VERIFY CLEAN STATE                                               |
|  +------------------------------------------------------------+  |
|  | - Scan for remaining IOCs                                   |  |
|  | - Review for missed persistence                             |  |
|  | - Validate system integrity                                 |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+

Key Principle: Incomplete eradication leads to re-infection!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Eradication Activities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Activity</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Tools/Methods</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Malware Removal</td>
            <td className="p-3 border">Delete all malicious files</td>
            <td className="p-3 border">AV, EDR, manual deletion</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Persistence Cleanup</td>
            <td className="p-3 border">Remove autostart mechanisms</td>
            <td className="p-3 border">Registry, services, tasks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Account Cleanup</td>
            <td className="p-3 border">Remove/disable rogue accounts</td>
            <td className="p-3 border">AD management, local accounts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Credential Reset</td>
            <td className="p-3 border">Reset compromised credentials</td>
            <td className="p-3 border">Password resets, key rotation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vulnerability Patch</td>
            <td className="p-3 border">Fix exploited vulnerabilities</td>
            <td className="p-3 border">Patch management, updates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Configuration Fix</td>
            <td className="p-3 border">Correct misconfigurations</td>
            <td className="p-3 border">Hardening, policy changes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Persistence Mechanisms to Check</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Persistence Mechanisms (Windows):

REGISTRY RUN KEYS
- HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
- HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
- HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\RunOnce

SCHEDULED TASKS
- schtasks /query /fo LIST /v
- Check for unusual tasks
- Review task actions and triggers

SERVICES
- sc query state=all
- Check for unusual services
- Review service binaries

STARTUP FOLDERS
- %APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup
- %PROGRAMDATA%\Microsoft\Windows\Start Menu\Programs\Startup

WMI EVENT SUBSCRIPTIONS
- Get-WMIObject -Namespace root/subscription -Class __EventFilter
- Get-WMIObject -Namespace root/subscription -Class CommandLineEventConsumer

OTHER LOCATIONS
- Browser extensions
- Office add-ins
- Print monitor DLLs
- DLL search order hijacking
- COM object hijacking

Linux Persistence:
- /etc/crontab, /var/spool/cron
- /etc/init.d, systemd services
- ~/.bashrc, ~/.profile
- SSH authorized_keys`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery Options:

OPTION 1: CLEAN AND RESTORE
+------------------------------------------------------------------+
| Best for: Minor infections, verified clean backup available       |
| Process:                                                          |
| 1. Remove malware/persistence                                     |
| 2. Patch vulnerabilities                                          |
| 3. Restore data from clean backup                                 |
| 4. Validate system integrity                                      |
| 5. Return to production                                           |
+------------------------------------------------------------------+

OPTION 2: REIMAGE
+------------------------------------------------------------------+
| Best for: Significant compromise, rootkits, uncertain scope       |
| Process:                                                          |
| 1. Preserve evidence (if needed)                                  |
| 2. Reimage system from gold image                                 |
| 3. Install latest patches                                         |
| 4. Restore data from clean backup                                 |
| 5. Reconfigure applications                                       |
| 6. Return to production                                           |
+------------------------------------------------------------------+

OPTION 3: REBUILD
+------------------------------------------------------------------+
| Best for: Critical systems, APT, complete assurance needed        |
| Process:                                                          |
| 1. Build new system from scratch                                  |
| 2. New hardware if warranted                                      |
| 3. Migrate data carefully (validate clean)                        |
| 4. Enhanced security configuration                                |
| 5. Return to production                                           |
+------------------------------------------------------------------+

Decision Factors:
- Severity of compromise
- Type of malware (rootkit = reimage)
- Business criticality
- Time constraints
- Available resources`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Process Steps</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Activity</th>
            <th className="p-3 border">Verification</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Prepare</td>
            <td className="p-3 border">Identify recovery order, gather resources</td>
            <td className="p-3 border">Recovery plan documented</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Restore</td>
            <td className="p-3 border">Rebuild/restore systems</td>
            <td className="p-3 border">System boots and functions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Harden</td>
            <td className="p-3 border">Apply patches, security config</td>
            <td className="p-3 border">Vulnerability scan clean</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Test</td>
            <td className="p-3 border">Validate functionality</td>
            <td className="p-3 border">Application tests pass</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Monitor</td>
            <td className="p-3 border">Enhanced monitoring active</td>
            <td className="p-3 border">No suspicious activity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Release</td>
            <td className="p-3 border">Return to production</td>
            <td className="p-3 border">Business sign-off</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Validation and Monitoring</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Post-Recovery Validation:

TECHNICAL VALIDATION
+------------------+----------------------------------+
| IOC Scan         | Search for known indicators      |
| Vulnerability    | Verify patches applied           |
| Integrity Check  | File integrity monitoring        |
| AV/EDR Scan      | Full system scan                 |
| Config Review    | Validate hardening applied       |
+------------------+----------------------------------+

ENHANCED MONITORING
- Increase logging verbosity
- Deploy additional sensors
- Set up alerts for IOCs
- Monitor for callback attempts
- Watch for lateral movement

MONITORING DURATION
- High severity: 30-90 days enhanced monitoring
- Medium severity: 14-30 days enhanced monitoring
- Low severity: 7-14 days enhanced monitoring

Re-infection Indicators:
- Same IOCs reappearing
- Similar network traffic patterns
- Process anomalies returning
- New persistence mechanisms`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Credential Management</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Compromised Accounts:</strong> Reset passwords immediately</li>
      <li><strong>Service Accounts:</strong> Rotate credentials for any accessed services</li>
      <li><strong>Admin Accounts:</strong> Reset all privileged account passwords</li>
      <li><strong>API Keys/Tokens:</strong> Rotate any potentially exposed secrets</li>
      <li><strong>Certificates:</strong> Revoke and reissue if compromised</li>
      <li><strong>Kerberos:</strong> Consider KRBTGT reset for severe AD compromise</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Complete eradication prevents re-infection</li>
        <li>Check all persistence mechanisms thoroughly</li>
        <li>Reimage when uncertain about system cleanliness</li>
        <li>Reset credentials for all potentially compromised accounts</li>
        <li>Enhanced monitoring post-recovery detects failed eradication</li>
        <li>Document all recovery actions for future reference</li>
      </ul>
    </div>
  </div>
);

export default IREradication;
