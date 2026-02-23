import React from "react";

const NISTFramework: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NIST Cybersecurity Framework
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The NIST Cybersecurity Framework (CSF) is a voluntary framework developed by the National
      Institute of Standards and Technology to help organizations manage and reduce cybersecurity
      risk. It provides a common language for understanding, managing, and expressing cybersecurity
      risk to internal and external stakeholders.
    </p>

    <h2 className="text-3xl font-bold mt-8">Framework Core Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST CSF Core Functions:

+------------------------------------------------------------------+
|                    NIST CYBERSECURITY FRAMEWORK                   |
+------------------------------------------------------------------+
|                                                                   |
|    IDENTIFY --> PROTECT --> DETECT --> RESPOND --> RECOVER       |
|                                                                   |
|  +----------+  +----------+  +----------+  +----------+  +------+ |
|  | Asset    |  | Access   |  | Anomalies|  | Response |  | Plan | |
|  | Mgmt     |  | Control  |  | Events   |  | Planning |  |      | |
|  |          |  |          |  |          |  |          |  |      | |
|  | Business |  | Awareness|  | Security |  | Communi- |  |Improv| |
|  | Environ. |  | Training |  | Monitor  |  | cations  |  |ments | |
|  |          |  |          |  |          |  |          |  |      | |
|  | Govern-  |  | Data     |  | Detection|  | Analysis |  |      | |
|  | ance     |  | Security |  | Process  |  | Mitigate |  |      | |
|  |          |  |          |  |          |  |          |  |      | |
|  | Risk     |  | Protect. |  |          |  |          |  |      | |
|  | Assess   |  | Process  |  |          |  |          |  |      | |
|  +----------+  +----------+  +----------+  +----------+  +------+ |
|                                                                   |
+------------------------------------------------------------------+
                    Continuous Improvement Loop`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Framework Functions Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Categories</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-blue-600 dark:text-blue-400">IDENTIFY (ID)</td>
            <td className="p-3 border">Understand business context and risks</td>
            <td className="p-3 border">Asset Management, Governance, Risk Assessment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600 dark:text-green-400">PROTECT (PR)</td>
            <td className="p-3 border">Implement safeguards for critical services</td>
            <td className="p-3 border">Access Control, Training, Data Security</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600 dark:text-yellow-400">DETECT (DE)</td>
            <td className="p-3 border">Identify cybersecurity events</td>
            <td className="p-3 border">Anomalies, Monitoring, Detection Processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600 dark:text-orange-400">RESPOND (RS)</td>
            <td className="p-3 border">Take action on detected incidents</td>
            <td className="p-3 border">Planning, Communications, Mitigation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600 dark:text-red-400">RECOVER (RC)</td>
            <td className="p-3 border">Restore capabilities after incidents</td>
            <td className="p-3 border">Recovery Planning, Improvements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Tiers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST CSF Implementation Tiers:

Tier 1: PARTIAL
- Risk management is ad hoc
- Limited awareness of risk
- Irregular, reactive approach
- No external collaboration

Tier 2: RISK INFORMED
- Risk management approved but not org-wide
- Awareness but inconsistent practice
- Some processes, not regular
- Limited external engagement

Tier 3: REPEATABLE
- Policies and procedures established
- Regular risk assessments
- Consistent implementation
- External collaboration exists

Tier 4: ADAPTIVE
- Continuous improvement culture
- Real-time risk monitoring
- Proactive adaptation to threats
- Active external collaboration

Note: Higher tiers are not always better.
Choose appropriate tier based on:
- Organizational risk tolerance
- Threat environment
- Available resources
- Business requirements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Framework Profile</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Creating a Framework Profile:

CURRENT PROFILE
+-------------------------+
| Identify: Tier 2        |
| Protect:  Tier 2        |
| Detect:   Tier 1        |
| Respond:  Tier 1        |
| Recover:  Tier 1        |
+-------------------------+

TARGET PROFILE
+-------------------------+
| Identify: Tier 3        |
| Protect:  Tier 3        |
| Detect:   Tier 3        |
| Respond:  Tier 2        |
| Recover:  Tier 2        |
+-------------------------+

GAP ANALYSIS
+-------------------------+------------------+
| Function   | Gap        | Actions Needed   |
+-------------------------+------------------+
| Identify   | +1 Tier    | Asset inventory  |
| Protect    | +1 Tier    | MFA, encryption  |
| Detect     | +2 Tiers   | SIEM deployment  |
| Respond    | +1 Tier    | IR playbooks     |
| Recover    | +1 Tier    | DR testing       |
+-------------------------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Categories and Subcategories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Example Subcategory</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Identify</td>
            <td className="p-3 border">Asset Management (ID.AM)</td>
            <td className="p-3 border">ID.AM-1: Physical devices inventoried</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identify</td>
            <td className="p-3 border">Risk Assessment (ID.RA)</td>
            <td className="p-3 border">ID.RA-1: Vulnerabilities identified</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Protect</td>
            <td className="p-3 border">Access Control (PR.AC)</td>
            <td className="p-3 border">PR.AC-1: Identities managed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Protect</td>
            <td className="p-3 border">Data Security (PR.DS)</td>
            <td className="p-3 border">PR.DS-1: Data at rest protected</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detect</td>
            <td className="p-3 border">Security Monitoring (DE.CM)</td>
            <td className="p-3 border">DE.CM-1: Network monitored</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Respond</td>
            <td className="p-3 border">Response Planning (RS.RP)</td>
            <td className="p-3 border">RS.RP-1: Response plan executed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recover</td>
            <td className="p-3 border">Recovery Planning (RC.RP)</td>
            <td className="p-3 border">RC.RP-1: Recovery plan executed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NIST CSF 2.0 Updates</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NIST CSF 2.0 Key Changes:

1. NEW GOVERN FUNCTION
   - Elevated governance to core function
   - Risk management strategy
   - Policy development
   - Organizational context

2. EXPANDED SCOPE
   - Beyond critical infrastructure
   - All organization types
   - Global applicability

3. SUPPLY CHAIN FOCUS
   - Third-party risk management
   - Vendor security requirements
   - Supply chain visibility

4. ENHANCED IMPLEMENTATION
   - Improved guidance
   - More examples
   - Better alignment with other frameworks

5. COMMUNITY PROFILES
   - Sector-specific profiles
   - Small business guidance
   - Quick start guides`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Steps</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Step 1:</strong> Prioritize and Scope - Identify business objectives and priorities</li>
      <li><strong>Step 2:</strong> Orient - Identify systems, stakeholders, and compliance requirements</li>
      <li><strong>Step 3:</strong> Create Current Profile - Document current cybersecurity state</li>
      <li><strong>Step 4:</strong> Risk Assessment - Identify and analyze cyber risks</li>
      <li><strong>Step 5:</strong> Create Target Profile - Define desired cybersecurity state</li>
      <li><strong>Step 6:</strong> Gap Analysis - Compare current and target profiles</li>
      <li><strong>Step 7:</strong> Action Plan - Prioritize and implement improvements</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NIST CSF is voluntary and flexible, not prescriptive</li>
        <li>Five core functions cover the full cybersecurity lifecycle</li>
        <li>Use profiles to assess current state and plan improvements</li>
        <li>Tiers describe maturity but higher is not always necessary</li>
        <li>Framework aligns with other standards (ISO 27001, CIS Controls)</li>
        <li>CSF 2.0 adds Govern as the sixth core function</li>
      </ul>
    </div>
  </div>
);

export default NISTFramework;
