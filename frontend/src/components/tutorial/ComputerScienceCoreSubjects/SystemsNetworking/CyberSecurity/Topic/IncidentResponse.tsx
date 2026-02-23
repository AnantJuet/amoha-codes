import React from "react";

const IncidentResponse: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incident Response
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Incident response is the organized approach to addressing and managing a security breach
      or cyberattack. The goal is to handle the situation in a way that limits damage, reduces
      recovery time, and minimizes costs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Incident Response Phases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST Incident Response Lifecycle:

1. PREPARATION
   - IR plan and playbooks
   - Team training and exercises
   - Tools and resources ready

2. DETECTION & ANALYSIS
   - Identify incident indicators
   - Analyze scope and impact
   - Determine incident type

3. CONTAINMENT
   - Short-term: Stop the spread
   - Long-term: Implement fixes
   - Preserve evidence

4. ERADICATION
   - Remove malware
   - Close vulnerabilities
   - Reset compromised accounts

5. RECOVERY
   - Restore systems safely
   - Monitor for re-infection
   - Validate normal operations

6. LESSONS LEARNED
   - Document what happened
   - Identify improvements
   - Update procedures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Severity Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Response</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Critical (P1)</td>
            <td className="p-3 border">Business-critical systems down</td>
            <td className="p-3 border">Immediate, all hands</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High (P2)</td>
            <td className="p-3 border">Significant impact, no workaround</td>
            <td className="p-3 border">Within hours</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Medium (P3)</td>
            <td className="p-3 border">Moderate impact, workaround exists</td>
            <td className="p-3 border">Within days</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Low (P4)</td>
            <td className="p-3 border">Minor impact</td>
            <td className="p-3 border">Scheduled</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incident Response Team</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>IR Manager:</strong> Coordinates overall response</li>
      <li><strong>Security Analysts:</strong> Investigate and analyze</li>
      <li><strong>IT Operations:</strong> System recovery and remediation</li>
      <li><strong>Legal:</strong> Regulatory compliance, law enforcement</li>
      <li><strong>Communications:</strong> Internal and external messaging</li>
      <li><strong>Management:</strong> Decision making, resource allocation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Containment Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Containment Options:

SHORT-TERM (Immediate):
- Isolate affected systems from network
- Block malicious IPs/domains
- Disable compromised accounts
- Quarantine infected files

LONG-TERM (Sustained):
- Patch vulnerabilities
- Implement additional monitoring
- Segment networks
- Reset credentials

Key Decisions:
- Shut down vs monitor (evidence)
- Business continuity vs security
- Communication timing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evidence Preservation</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Maintain chain of custody documentation</li>
        <li>Create forensic images before changes</li>
        <li>Preserve logs (system, security, network)</li>
        <li>Document all actions with timestamps</li>
        <li>Use write blockers for disk imaging</li>
        <li>Store evidence securely</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Preparation before incidents is critical</li>
        <li>Follow established IR procedures and playbooks</li>
        <li>Preserve evidence before remediation</li>
        <li>Communication is key during incidents</li>
        <li>Document everything for post-incident review</li>
        <li>Always conduct lessons learned after incidents</li>
      </ul>
    </div>
  </div>
);

export default IncidentResponse;
