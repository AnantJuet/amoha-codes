import React from "react";

const IncidentResponseIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Incident Response
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Incident Response (IR) is the organized approach to addressing and managing the aftermath
      of a security breach or cyberattack. The goal is to handle the situation in a way that
      limits damage, reduces recovery time and costs, and prevents future incidents. A well-planned
      incident response capability is critical for any organization's cybersecurity program.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Security Incident?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security Incident Definition:

An EVENT is any observable occurrence in a system or network.
Example: User logs in, file is accessed, network connection made

An INCIDENT is an event that actually or potentially jeopardizes
the confidentiality, integrity, or availability of information.

EVENT vs INCIDENT:
+------------------------------------------------------------------+
|  Events (Normal)              | Incidents (Require Response)     |
+------------------------------------------------------------------+
|  User login successful        | Multiple failed logins           |
|  Email received               | Phishing email with malware      |
|  File downloaded              | Unauthorized data exfiltration   |
|  Website visited              | Connection to C2 server          |
|  Software installed           | Unauthorized software execution  |
+------------------------------------------------------------------+

Incident Examples:
- Malware infection
- Ransomware attack
- Data breach
- Unauthorized access
- Denial of service
- Insider threat activity
- Phishing compromise`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Response Goals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Metrics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Minimize Impact</td>
            <td className="p-3 border">Limit damage from incidents</td>
            <td className="p-3 border">Data lost, systems affected</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rapid Recovery</td>
            <td className="p-3 border">Restore normal operations quickly</td>
            <td className="p-3 border">MTTR (Mean Time to Recovery)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Learn and Improve</td>
            <td className="p-3 border">Prevent future incidents</td>
            <td className="p-3 border">Repeat incident rate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Preserve Evidence</td>
            <td className="p-3 border">Support legal/forensic needs</td>
            <td className="p-3 border">Evidence integrity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Comply with Requirements</td>
            <td className="p-3 border">Meet regulatory obligations</td>
            <td className="p-3 border">Notification timelines met</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Response Team</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Response Team (IRT) / CSIRT Structure:

                    +------------------+
                    |  IR Manager      |
                    | (Team Lead)      |
                    +--------+---------+
                             |
        +--------------------+--------------------+
        |                    |                    |
+-------+-------+    +-------+-------+    +-------+-------+
| Security      |    | IT Operations |    | Communications|
| Analysts      |    | (System/      |    | (PR, Legal,   |
| (Tier 1-3)    |    | Network Admin)|    | HR, Mgmt)     |
+---------------+    +---------------+    +---------------+

Key Roles:
+-------------------+-------------------------------------------+
| Role              | Responsibilities                          |
+-------------------+-------------------------------------------+
| IR Manager        | Lead response, coordinate team, decisions |
| Security Analyst  | Investigate, analyze, contain threats     |
| Forensic Analyst  | Evidence collection, deep dive analysis   |
| IT Operations     | System recovery, implement changes        |
| Communications    | Internal/external communications          |
| Legal Counsel     | Compliance, liability, evidence handling  |
| Executive Sponsor | Authority, budget, final decisions        |
+-------------------+-------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Severity Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Severity</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Response Time</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-red-600 dark:text-red-400">Critical (P1)</td>
            <td className="p-3 border">Business-critical impact</td>
            <td className="p-3 border">Immediate (24/7)</td>
            <td className="p-3 border">Active ransomware, major breach</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600 dark:text-orange-400">High (P2)</td>
            <td className="p-3 border">Significant impact</td>
            <td className="p-3 border">Within 4 hours</td>
            <td className="p-3 border">Compromised server, data theft</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600 dark:text-yellow-400">Medium (P3)</td>
            <td className="p-3 border">Limited impact</td>
            <td className="p-3 border">Within 24 hours</td>
            <td className="p-3 border">Malware on workstation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600 dark:text-blue-400">Low (P4)</td>
            <td className="p-3 border">Minimal impact</td>
            <td className="p-3 border">Within 72 hours</td>
            <td className="p-3 border">Policy violation, suspicious email</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Response Process Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST Incident Response Lifecycle:

+-------------+     +-------------+     +-------------+
| PREPARATION | --> | DETECTION & | --> | CONTAINMENT |
|             |     | ANALYSIS    |     | ERADICATION |
|             |     |             |     | RECOVERY    |
+-------------+     +-------------+     +-------------+
      ^                                       |
      |                                       v
      |               +----------------------+
      +---------------| POST-INCIDENT        |
                      | ACTIVITY             |
                      +----------------------+

Each Phase Summary:
1. PREPARATION
   - Build IR capability before incidents occur
   - Policies, procedures, training, tools

2. DETECTION & ANALYSIS
   - Identify that an incident has occurred
   - Determine scope and severity

3. CONTAINMENT, ERADICATION, RECOVERY
   - Limit damage (containment)
   - Remove threat (eradication)
   - Restore systems (recovery)

4. POST-INCIDENT ACTIVITY
   - Learn from the incident
   - Improve defenses and processes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key IR Metrics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>MTTD (Mean Time to Detect):</strong> Average time to identify an incident</li>
      <li><strong>MTTR (Mean Time to Respond):</strong> Average time from detection to containment</li>
      <li><strong>MTTC (Mean Time to Contain):</strong> Average time to stop incident spread</li>
      <li><strong>MTTRE (Mean Time to Recover):</strong> Average time to restore normal operations</li>
      <li><strong>Incident Volume:</strong> Number of incidents by type, severity, time period</li>
      <li><strong>False Positive Rate:</strong> Percentage of alerts that are not real incidents</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>An incident is an event that threatens CIA of information</li>
        <li>Preparation before incidents is crucial for effective response</li>
        <li>Incident severity determines response urgency and escalation</li>
        <li>IR is a continuous cycle of preparation, response, and improvement</li>
        <li>Cross-functional teams are essential for comprehensive response</li>
        <li>Metrics help measure and improve IR effectiveness</li>
      </ul>
    </div>
  </div>
);

export default IncidentResponseIntro;
