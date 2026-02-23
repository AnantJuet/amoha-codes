import React from "react";

const SecurityPolicies: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Security Policies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Security policies are formal documents that define an organization's rules, expectations, and
      procedures for protecting information assets. They provide a framework for implementing security
      controls and ensuring consistent security practices across the organization.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Security Policy?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Security Policy Framework:

+--------------------------------------------------+
|              SECURITY GOVERNANCE                  |
+--------------------------------------------------+
|                                                  |
|  +--------------+                                |
|  | POLICIES     | High-level rules & principles  |
|  +--------------+                                |
|        |                                         |
|        v                                         |
|  +--------------+                                |
|  | STANDARDS    | Specific requirements          |
|  +--------------+                                |
|        |                                         |
|        v                                         |
|  +--------------+                                |
|  | PROCEDURES   | Step-by-step instructions      |
|  +--------------+                                |
|        |                                         |
|        v                                         |
|  +--------------+                                |
|  | GUIDELINES   | Best practices & recommendations|
|  +--------------+                                |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Security Policies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Policy Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Scope</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Information Security Policy</td>
            <td className="p-3 border">Overall security direction</td>
            <td className="p-3 border">Organization-wide</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Acceptable Use Policy</td>
            <td className="p-3 border">Define permitted system usage</td>
            <td className="p-3 border">All users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Control Policy</td>
            <td className="p-3 border">Manage user permissions</td>
            <td className="p-3 border">IT systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Password Policy</td>
            <td className="p-3 border">Authentication requirements</td>
            <td className="p-3 border">All accounts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incident Response Policy</td>
            <td className="p-3 border">Handle security incidents</td>
            <td className="p-3 border">Security team</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Security Policies</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Acceptable Use Policy (AUP)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Acceptable Use Policy Components:

Purpose: Define appropriate use of company resources

Covered Areas:
- Internet and email usage
- Personal device usage (BYOD)
- Social media conduct
- Software installation
- Data handling

Prohibited Activities:
- Accessing inappropriate content
- Unauthorized software
- Sharing credentials
- Bypassing security controls
- Using resources for personal gain`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Password Policy</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Rationale</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Minimum Length</td>
            <td className="p-3 border">12+ characters</td>
            <td className="p-3 border">Resist brute force</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Mixed case, numbers, symbols</td>
            <td className="p-3 border">Increase entropy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Expiration</td>
            <td className="p-3 border">90 days (or passwordless)</td>
            <td className="p-3 border">Limit exposure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">History</td>
            <td className="p-3 border">Cannot reuse last 12</td>
            <td className="p-3 border">Prevent cycling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Data Classification Policy</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Classification Levels:

+------------------+------------------+------------------+
| PUBLIC           | INTERNAL         | CONFIDENTIAL     |
+------------------+------------------+------------------+
| Marketing        | Internal memos   | Customer data    |
| materials        | Procedures       | Financial info   |
| Press releases   | Employee list    | Trade secrets    |
|                  | Org charts       | PII/PHI          |
+------------------+------------------+------------------+
| Open access      | Employees only   | Need-to-know     |
| No protection    | Basic controls   | Strong controls  |
+------------------+------------------+------------------+

                          +------------------+
                          | RESTRICTED       |
                          +------------------+
                          | Board documents  |
                          | M&A information  |
                          | Executive data   |
                          +------------------+
                          | Highest controls |
                          +------------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Remote Access Policy</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>VPN Requirements:</strong> All remote connections must use approved VPN</li>
      <li><strong>Device Security:</strong> Updated antivirus, firewall enabled, encrypted storage</li>
      <li><strong>Authentication:</strong> MFA required for all remote access</li>
      <li><strong>Session Timeout:</strong> Automatic logout after inactivity</li>
      <li><strong>Public Networks:</strong> Avoid or use additional protection</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">5. Incident Response Policy</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incident Response Workflow:

1. Detection & Reporting
   - Who reports incidents?
   - How to report?
   - What to report?

2. Triage & Analysis
   - Severity classification
   - Initial investigation
   - Impact assessment

3. Containment
   - Immediate actions
   - Evidence preservation
   - Communication protocols

4. Eradication & Recovery
   - Remove threat
   - Restore systems
   - Verify functionality

5. Post-Incident
   - Lessons learned
   - Policy updates
   - Documentation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Policy Development Process</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Activities</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Assessment</td>
            <td className="p-3 border">Identify needs, risks, and requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Development</td>
            <td className="p-3 border">Draft policy with stakeholder input</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Review</td>
            <td className="p-3 border">Legal, management, and technical review</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Approval</td>
            <td className="p-3 border">Executive sign-off and authorization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Communication</td>
            <td className="p-3 border">Publish and train employees</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Maintenance</td>
            <td className="p-3 border">Regular review and updates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Policies provide the foundation for security programs</li>
        <li>They must align with business objectives and legal requirements</li>
        <li>Clear communication and training ensure compliance</li>
        <li>Regular reviews keep policies current and effective</li>
        <li>Enforcement mechanisms must be defined and applied</li>
        <li>Documentation supports audits and compliance requirements</li>
      </ul>
    </div>
  </div>
);

export default SecurityPolicies;
