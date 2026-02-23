import React from "react";

const IRLifecycle: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Response Lifecycle
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Incident Response Lifecycle provides a structured approach to handling security incidents
      from initial preparation through post-incident activities. Based on the NIST SP 800-61
      framework, it consists of four main phases that guide organizations through effective
      incident handling while supporting continuous improvement.
    </p>

    <h2 className="text-3xl font-bold mt-8">NIST IR Lifecycle Phases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST Incident Response Lifecycle:

                    +------------------------+
                    |                        |
                    v                        |
+------------------------------------------------------------------+
|                     PHASE 1: PREPARATION                          |
|  Build capability: tools, training, procedures, communication     |
+------------------------------------------------------------------+
                    |
                    v
+------------------------------------------------------------------+
|              PHASE 2: DETECTION AND ANALYSIS                      |
|  Identify incidents, determine scope, prioritize response         |
+------------------------------------------------------------------+
                    |
                    v
+------------------------------------------------------------------+
|       PHASE 3: CONTAINMENT, ERADICATION, AND RECOVERY            |
|  Stop spread, remove threat, restore operations                   |
+------------------------------------------------------------------+
                    |
                    v
+------------------------------------------------------------------+
|             PHASE 4: POST-INCIDENT ACTIVITY                       |
|  Lessons learned, improve defenses, update procedures             |
+------------------------------------------------------------------+
                    |
                    |
        +-----------+-----------+
        |                       |
        v                       v
   Back to Phase 1         Back to Phase 2
   (Improvements)          (New Incident)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase Details and Activities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Key Activities</th>
            <th className="p-3 border">Outputs</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-blue-600 dark:text-blue-400">1. Preparation</td>
            <td className="p-3 border">
              - Develop IR plan<br/>
              - Build IR team<br/>
              - Deploy tools<br/>
              - Conduct training
            </td>
            <td className="p-3 border">IR plan, trained team, ready tools</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600 dark:text-green-400">2. Detection & Analysis</td>
            <td className="p-3 border">
              - Monitor systems<br/>
              - Analyze alerts<br/>
              - Determine scope<br/>
              - Document findings
            </td>
            <td className="p-3 border">Confirmed incident, severity, initial scope</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600 dark:text-orange-400">3. Containment/Eradication/Recovery</td>
            <td className="p-3 border">
              - Isolate systems<br/>
              - Remove malware<br/>
              - Patch vulnerabilities<br/>
              - Restore services
            </td>
            <td className="p-3 border">Contained threat, clean systems, restored ops</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600 dark:text-purple-400">4. Post-Incident</td>
            <td className="p-3 border">
              - Conduct review<br/>
              - Document lessons<br/>
              - Update procedures<br/>
              - Implement improvements
            </td>
            <td className="p-3 border">Incident report, updated defenses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Timeline Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example Incident Timeline:

Day 0, 14:30 - DETECTION
  SIEM alert: Unusual outbound traffic from server-01
  SOC analyst begins initial triage

Day 0, 15:00 - ANALYSIS
  Confirmed malicious activity
  Escalated to Tier 2 analyst
  Incident declared, IR team activated

Day 0, 15:30 - CONTAINMENT (Short-term)
  Network isolation of server-01
  Block C2 IP at firewall
  Preserve system state for forensics

Day 0, 17:00 - ANALYSIS (Expanded)
  Forensic analysis begins
  Scope expanded: 3 additional systems identified
  Root cause identified: Phishing email compromise

Day 1, 09:00 - CONTAINMENT (Long-term)
  Additional systems isolated
  Password reset for affected accounts
  Enhanced monitoring deployed

Day 1-2 - ERADICATION
  Malware removed from all systems
  Vulnerability patched
  Persistence mechanisms removed

Day 3-4 - RECOVERY
  Systems rebuilt/restored from clean backups
  Gradual return to production
  Monitoring for re-infection

Day 5 - POST-INCIDENT
  Lessons learned meeting
  Timeline and documentation completed
  Recommendations for improvement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase Interactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lifecycle Phase Interactions:

PREPARATION feeds into all other phases:
+-------------+
| PREPARATION |---> Detection tools ready
|             |---> Procedures documented
|             |---> Team trained
+-------------+

DETECTION & ANALYSIS may cycle:
+-------------+     +------------+
| DETECTION   |<--->| ANALYSIS   |
| More alerts |     | Refine     |
| discovered  |     | findings   |
+-------------+     +------------+

CONTAINMENT may require return to ANALYSIS:
+-------------+     +-------------+
| CONTAINMENT |---->| ANALYSIS    |
| New scope   |     | Re-evaluate |
| discovered  |     | findings    |
+-------------+     +-------------+

POST-INCIDENT improves PREPARATION:
+-------------+     +-------------+
| POST-       |---->| PREPARATION |
| INCIDENT    |     | Update      |
| Lessons     |     | capability  |
+-------------+     +-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lifecycle Documentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Documentation</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Preparation</td>
            <td className="p-3 border">IR Plan, Playbooks, Contact Lists</td>
            <td className="p-3 border">Guide response activities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detection</td>
            <td className="p-3 border">Alert Logs, Triage Notes</td>
            <td className="p-3 border">Record initial findings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Analysis</td>
            <td className="p-3 border">Investigation Notes, IOCs</td>
            <td className="p-3 border">Document scope and impact</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Containment</td>
            <td className="p-3 border">Actions Log, Evidence Chain</td>
            <td className="p-3 border">Track response actions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eradication</td>
            <td className="p-3 border">Remediation Log</td>
            <td className="p-3 border">Record cleanup activities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recovery</td>
            <td className="p-3 border">Restoration Log, Testing Results</td>
            <td className="p-3 border">Verify successful recovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Post-Incident</td>
            <td className="p-3 border">Final Report, Lessons Learned</td>
            <td className="p-3 border">Enable improvement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Success Factors</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Executive Support:</strong> Management commitment to IR program</li>
      <li><strong>Clear Roles:</strong> Well-defined responsibilities for each team member</li>
      <li><strong>Communication Plan:</strong> Established channels and protocols</li>
      <li><strong>Regular Testing:</strong> Tabletop exercises and simulations</li>
      <li><strong>Continuous Improvement:</strong> Learning from each incident</li>
      <li><strong>Documentation:</strong> Thorough recording of all activities</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>The IR lifecycle is iterative, not strictly linear</li>
        <li>Preparation is ongoing and feeds into all other phases</li>
        <li>Analysis may reveal new scope requiring additional containment</li>
        <li>Post-incident activities drive continuous improvement</li>
        <li>Documentation throughout is essential for learning and compliance</li>
        <li>Regular exercises keep the IR capability sharp</li>
      </ul>
    </div>
  </div>
);

export default IRLifecycle;
