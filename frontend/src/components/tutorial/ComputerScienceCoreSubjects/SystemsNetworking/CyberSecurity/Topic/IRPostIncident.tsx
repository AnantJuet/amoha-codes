import React from "react";

const IRPostIncident: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Post-Incident Activities
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Post-incident activities are conducted after an incident is resolved to learn from the
      experience and improve future response capabilities. This phase includes documenting the
      incident, conducting lessons learned reviews, and implementing improvements. Organizations
      that skip this phase miss valuable opportunities to strengthen their security posture.
    </p>

    <h2 className="text-3xl font-bold mt-8">Post-Incident Phase Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Post-Incident Activity Flow:

+------------------------------------------------------------------+
|                   POST-INCIDENT ACTIVITIES                        |
+------------------------------------------------------------------+
                              |
     +------------------------+------------------------+
     |                        |                        |
     v                        v                        v
+----------+           +----------+           +----------+
| DOCUMENT |           | LESSONS  |           | IMPROVE  |
|          |           | LEARNED  |           |          |
| - Timeline|          | - Meeting|           | - Process|
| - Evidence|          | - Review |           | - Tools  |
| - Report |           | - Root   |           | - Training|
|          |           |   Cause  |           | - Detect |
+----------+           +----------+           +----------+
     |                        |                        |
     +------------------------+------------------------+
                              |
                              v
                    +------------------+
                    | CLOSE INCIDENT   |
                    | - Archive        |
                    | - Metrics Update |
                    | - Follow-up      |
                    +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Documentation</h2>
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
            <td className="p-3 border font-semibold">Executive Summary</td>
            <td className="p-3 border">High-level overview for leadership</td>
            <td className="p-3 border">Management reporting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incident Timeline</td>
            <td className="p-3 border">Chronological sequence of events</td>
            <td className="p-3 border">Understand attack progression</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Technical Analysis</td>
            <td className="p-3 border">Detailed technical findings</td>
            <td className="p-3 border">Future reference, training</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Impact Assessment</td>
            <td className="p-3 border">Systems, data, business affected</td>
            <td className="p-3 border">Understand consequences</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Actions</td>
            <td className="p-3 border">What was done to respond</td>
            <td className="p-3 border">Document response quality</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Root Cause</td>
            <td className="p-3 border">How the incident happened</td>
            <td className="p-3 border">Prevent recurrence</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recommendations</td>
            <td className="p-3 border">Improvements to implement</td>
            <td className="p-3 border">Drive improvement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lessons Learned Meeting</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lessons Learned Meeting Guide:

WHEN TO CONDUCT
- Within 1-2 weeks of incident closure
- While details are still fresh
- After team has had time to decompress

WHO TO INCLUDE
- IR team members
- IT staff involved
- Management stakeholders
- External parties (if applicable)

MEETING AGENDA
1. Review incident timeline (15 min)
2. What went well? (15 min)
3. What could be improved? (20 min)
4. Root cause discussion (15 min)
5. Action items and owners (15 min)

KEY QUESTIONS TO ANSWER
+------------------------------------------------------------------+
| DETECTION                                                         |
| - How was the incident detected?                                  |
| - Could we have detected it earlier?                              |
| - Were there missed indicators?                                   |
+------------------------------------------------------------------+
| RESPONSE                                                          |
| - Were procedures followed?                                       |
| - Were roles and responsibilities clear?                          |
| - Was communication effective?                                    |
+------------------------------------------------------------------+
| TOOLS & RESOURCES                                                 |
| - Did we have the right tools?                                    |
| - Were there resource constraints?                                |
| - What additional capabilities needed?                            |
+------------------------------------------------------------------+
| PREVENTION                                                        |
| - What controls failed?                                           |
| - What would have prevented this?                                 |
| - What changes are recommended?                                   |
+------------------------------------------------------------------+

MEETING RULES
- No blame - focus on process improvement
- Everyone's input is valuable
- Document everything
- Assign owners to action items`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Root Cause Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Root Cause Analysis Techniques:

5 WHYS METHOD
Problem: User workstation infected with malware

Why? User clicked malicious email link
  Why? Email bypassed security filters
    Why? Link was to legitimate-looking domain
      Why? No URL filtering for newly registered domains
        Why? URL filter policy not updated

Root Cause: URL filtering policy gaps
Action: Update URL filter to block newly registered domains

FISHBONE DIAGRAM (ISHIKAWA)
                              +---> People
                              |     - User training
          +-------------------+     - Awareness gaps
          |                   |
Problem <-+                   +---> Process
          |                         - Procedures missing
          +-------------------+     - Review cycles
                              |
                              +---> Technology
                              |     - Detection gaps
                              |     - Tool configuration
                              |
                              +---> External
                                    - New attack technique
                                    - Zero-day exploit

CONTRIBUTING FACTORS
- Immediate: Direct cause of incident
- Underlying: Conditions that allowed it
- Root: Fundamental reason it happened`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Improvement Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Example Improvements</th>
            <th className="p-3 border">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Detection</td>
            <td className="p-3 border">New SIEM rules, additional log sources</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Prevention</td>
            <td className="p-3 border">Patches, hardening, access control</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Process</td>
            <td className="p-3 border">Updated playbooks, escalation paths</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Training</td>
            <td className="p-3 border">Analyst skills, user awareness</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tools</td>
            <td className="p-3 border">New capabilities, better integration</td>
            <td className="p-3 border">Varies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Communication</td>
            <td className="p-3 border">Contact lists, notification templates</td>
            <td className="p-3 border">Low-Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Incident Response Metrics:

TIMING METRICS
+------------------+----------------------------------+
| MTTD             | Mean Time to Detect              |
| MTTR             | Mean Time to Respond             |
| MTTC             | Mean Time to Contain             |
| MTTRE            | Mean Time to Recover             |
| Dwell Time       | Time attacker was in environment |
+------------------+----------------------------------+

VOLUME METRICS
+------------------+----------------------------------+
| Incidents/Period | Count by severity, type          |
| Alerts/Incidents | Ratio of alerts to real incidents|
| False Positive % | Alerts that weren't incidents    |
+------------------+----------------------------------+

QUALITY METRICS
+------------------+----------------------------------+
| Containment Rate | Incidents contained < SLA        |
| Re-infection Rate| Incidents that recurred          |
| Escalation Rate  | % requiring escalation           |
+------------------+----------------------------------+

COST METRICS
+------------------+----------------------------------+
| Incident Cost    | Total cost per incident          |
| Staff Hours      | Time spent on response           |
| Business Impact  | Revenue lost, productivity       |
+------------------+----------------------------------+

Track trends over time to measure improvement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Action Item Tracking</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Assign Owner:</strong> Every action item needs a responsible person</li>
      <li><strong>Set Deadline:</strong> Realistic but firm completion dates</li>
      <li><strong>Define Success:</strong> Clear criteria for completion</li>
      <li><strong>Track Progress:</strong> Regular status updates</li>
      <li><strong>Verify Completion:</strong> Confirm actions are fully implemented</li>
      <li><strong>Report to Leadership:</strong> Keep management informed of progress</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Post-incident activities turn incidents into learning opportunities</li>
        <li>Document thoroughly while details are fresh</li>
        <li>Lessons learned meetings should be blame-free and constructive</li>
        <li>Root cause analysis identifies systemic issues to address</li>
        <li>Track and follow through on improvement action items</li>
        <li>Metrics enable measurement of IR program effectiveness</li>
      </ul>
    </div>
  </div>
);

export default IRPostIncident;
