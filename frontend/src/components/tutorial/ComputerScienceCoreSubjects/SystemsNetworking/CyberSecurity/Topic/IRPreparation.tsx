import React from "react";

const IRPreparation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Response Preparation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Preparation is the foundation of effective incident response. This phase focuses on
      establishing the capability to respond to incidents before they occur. Organizations
      that invest in preparation can respond faster, minimize damage, and recover more
      quickly when incidents happen.
    </p>

    <h2 className="text-3xl font-bold mt-8">Preparation Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Response Preparation Framework:

+------------------------------------------------------------------+
|                    IR PREPARATION                                 |
+------------------------------------------------------------------+
|                                                                   |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|  |   PEOPLE    |  |  PROCESS    |  | TECHNOLOGY  |  | PRACTICE  | |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|  | IR Team     |  | IR Plan     |  | SIEM        |  | Tabletop  | |
|  | Training    |  | Playbooks   |  | EDR         |  | Exercises | |
|  | Roles       |  | Procedures  |  | Forensics   |  | Drills    | |
|  | On-call     |  | Escalation  |  | Ticketing   |  | Red Team  | |
|  +-------------+  +-------------+  +-------------+  +-----------+ |
|                                                                   |
+------------------------------------------------------------------+

Key Preparation Activities:
1. Develop IR Plan and Policies
2. Build and Train IR Team
3. Deploy Detection and Response Tools
4. Create Playbooks and Procedures
5. Establish Communication Plans
6. Conduct Regular Exercises`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IR Plan Contents</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Section</th>
            <th className="p-3 border">Contents</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose & Scope</td>
            <td className="p-3 border">Goals, covered systems, incident types</td>
            <td className="p-3 border">Define boundaries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Roles & Responsibilities</td>
            <td className="p-3 border">Team structure, duties, authority</td>
            <td className="p-3 border">Clear accountability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incident Classification</td>
            <td className="p-3 border">Types, severity levels, examples</td>
            <td className="p-3 border">Consistent categorization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Procedures</td>
            <td className="p-3 border">Step-by-step for each phase</td>
            <td className="p-3 border">Guide actions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Communication Plan</td>
            <td className="p-3 border">Internal/external notification</td>
            <td className="p-3 border">Stakeholder management</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Contact Lists</td>
            <td className="p-3 border">Team, vendors, law enforcement</td>
            <td className="p-3 border">Quick contact access</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Escalation Procedures</td>
            <td className="p-3 border">When and how to escalate</td>
            <td className="p-3 border">Timely decisions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IR Team Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Response Team Structure:

CORE TEAM (Full-time IR roles)
+------------------+----------------------------------------+
| IR Manager       | Lead response, coordinate activities   |
| Senior Analysts  | Complex investigations, mentoring      |
| Analysts         | Triage, initial response, monitoring   |
| Forensic Analyst | Deep dive analysis, evidence handling  |
+------------------+----------------------------------------+

EXTENDED TEAM (Engaged as needed)
+------------------+----------------------------------------+
| IT Operations    | System/network support, recovery       |
| Legal            | Compliance, liability, notifications   |
| HR               | Insider threats, employee issues       |
| Communications   | PR, internal messaging                 |
| Executive        | Major decisions, approvals             |
+------------------+----------------------------------------+

ON-CALL ROTATION
+------------------+
| Week 1: Analyst A|
| Week 2: Analyst B|
| Week 3: Analyst C|
| Week 4: Analyst A|
+------------------+
Primary + Backup on-call
24/7 coverage for critical incidents`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Essential IR Tools</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IR Toolkit Categories:

DETECTION & MONITORING
+------------------+--------------------------------+
| SIEM             | Splunk, QRadar, Elastic        |
| EDR              | CrowdStrike, Carbon Black      |
| NDR              | Darktrace, ExtraHop            |
| IDS/IPS          | Snort, Suricata                |
+------------------+--------------------------------+

INVESTIGATION & ANALYSIS
+------------------+--------------------------------+
| Network Analysis | Wireshark, NetworkMiner        |
| Memory Forensics | Volatility, Rekall             |
| Disk Forensics   | Autopsy, FTK, EnCase           |
| Malware Analysis | IDA Pro, Ghidra, Any.Run       |
+------------------+--------------------------------+

RESPONSE & CONTAINMENT
+------------------+--------------------------------+
| Remote Access    | Secure shell, remote forensics |
| Network Control  | Firewall management, isolation |
| Endpoint Actions | EDR response capabilities      |
| Ticketing        | Jira, ServiceNow               |
+------------------+--------------------------------+

COMMUNICATION & DOCUMENTATION
+------------------+--------------------------------+
| Collaboration    | Slack, Teams (secure channel)  |
| Documentation    | Wiki, shared drives            |
| Case Management  | TheHive, RTIR                  |
+------------------+--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Playbook Development</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Playbook Type</th>
            <th className="p-3 border">Trigger</th>
            <th className="p-3 border">Key Steps</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Malware Infection</td>
            <td className="p-3 border">AV/EDR alert</td>
            <td className="p-3 border">Isolate, collect samples, analyze, clean</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ransomware</td>
            <td className="p-3 border">Encrypted files detected</td>
            <td className="p-3 border">Isolate, assess scope, backup status, recover</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phishing</td>
            <td className="p-3 border">User report/detection</td>
            <td className="p-3 border">Block URL, identify recipients, check clicks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Breach</td>
            <td className="p-3 border">DLP alert/detection</td>
            <td className="p-3 border">Stop exfil, identify data, legal notify</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Account Compromise</td>
            <td className="p-3 border">Anomalous login</td>
            <td className="p-3 border">Disable account, check access, reset creds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DDoS Attack</td>
            <td className="p-3 border">Service unavailability</td>
            <td className="p-3 border">Activate mitigation, ISP coordination</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Training and Exercises</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IR Training Program:

TRAINING TYPES
+-------------------+----------------------------------+
| Onboarding        | New team member orientation      |
| Technical         | Tool-specific, forensics skills  |
| Procedural        | Playbook walkthroughs            |
| Certifications    | GCIH, GCFA, ECIH                 |
+-------------------+----------------------------------+

EXERCISE TYPES
+-------------------+----------------------------------+
| Tabletop          | Discussion-based scenarios       |
|                   | Low cost, high learning value    |
+-------------------+----------------------------------+
| Walkthrough       | Step through procedures          |
|                   | Validate playbooks               |
+-------------------+----------------------------------+
| Simulation        | Realistic attack simulation      |
|                   | Test actual response             |
+-------------------+----------------------------------+
| Red Team/Purple   | Adversary emulation              |
|                   | Test detection and response      |
+-------------------+----------------------------------+

FREQUENCY
- Tabletop exercises: Quarterly
- Technical drills: Monthly
- Full simulations: Annually
- Red team tests: Annually`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Preparation Checklist</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>IR Plan:</strong> Documented, approved, and distributed</li>
      <li><strong>IR Team:</strong> Roles assigned, trained, contact info current</li>
      <li><strong>Playbooks:</strong> Created for common incident types</li>
      <li><strong>Tools:</strong> Deployed, configured, tested</li>
      <li><strong>Communication:</strong> Channels established, templates ready</li>
      <li><strong>Exercises:</strong> Scheduled, conducted, improvements tracked</li>
      <li><strong>Vendors:</strong> Retainer agreements in place (IR, legal, PR)</li>
      <li><strong>Baselines:</strong> Normal behavior documented for detection</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Preparation before incidents is the most important phase</li>
        <li>Document everything: plans, procedures, contacts</li>
        <li>Regular training keeps skills sharp and builds muscle memory</li>
        <li>Test IR capabilities through exercises before real incidents</li>
        <li>Playbooks provide consistent, repeatable response</li>
        <li>Keep contact lists and tool credentials current</li>
      </ul>
    </div>
  </div>
);

export default IRPreparation;
