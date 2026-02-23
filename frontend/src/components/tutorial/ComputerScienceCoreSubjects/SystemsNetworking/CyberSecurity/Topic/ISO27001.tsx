import React from "react";

const ISO27001: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ISO 27001 - Information Security Management System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ISO/IEC 27001 is an international standard for managing information security. It provides
      a systematic approach to managing sensitive company information, encompassing people,
      processes, and IT systems by applying a risk management process. Organizations can be
      certified against ISO 27001 to demonstrate their commitment to information security.
    </p>

    <h2 className="text-3xl font-bold mt-8">ISO 27001 Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ISO 27001:2022 Structure:

+------------------------------------------------------------------+
|                ISO/IEC 27001:2022 ISMS                            |
+------------------------------------------------------------------+
|                                                                   |
|  MAIN CLAUSES (4-10)                                              |
|  +------------------------------------------------------------+  |
|  | 4. Context of Organization                                  |  |
|  | 5. Leadership                                               |  |
|  | 6. Planning                                                 |  |
|  | 7. Support                                                  |  |
|  | 8. Operation                                                |  |
|  | 9. Performance Evaluation                                   |  |
|  | 10. Improvement                                             |  |
|  +------------------------------------------------------------+  |
|                                                                   |
|  ANNEX A CONTROLS (93 Controls in 4 Themes)                      |
|  +------------------------------------------------------------+  |
|  | A.5 Organizational (37)    | Policies, roles, compliance   |  |
|  | A.6 People (8)             | HR security, awareness        |  |
|  | A.7 Physical (14)          | Physical security             |  |
|  | A.8 Technological (34)     | Technical controls            |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+

PDCA Cycle:
    PLAN --> DO --> CHECK --> ACT --> (repeat)
      |      |        |        |
      v      v        v        v
    Risk   Implement  Audit  Continuous
    Assess  Controls Review  Improvement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Clauses Explained</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Clause</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Key Requirements</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Context of Organization</td>
            <td className="p-3 border">Scope, stakeholders, internal/external issues</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Leadership</td>
            <td className="p-3 border">Commitment, policy, roles and responsibilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">Planning</td>
            <td className="p-3 border">Risk assessment, treatment, objectives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7</td>
            <td className="p-3 border">Support</td>
            <td className="p-3 border">Resources, competence, awareness, documentation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">8</td>
            <td className="p-3 border">Operation</td>
            <td className="p-3 border">Planning, risk assessment, risk treatment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">9</td>
            <td className="p-3 border">Performance Evaluation</td>
            <td className="p-3 border">Monitoring, internal audit, management review</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">10</td>
            <td className="p-3 border">Improvement</td>
            <td className="p-3 border">Nonconformity, corrective action, continual improvement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Annex A Control Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ISO 27001:2022 Annex A Controls (93 Total):

A.5 ORGANIZATIONAL CONTROLS (37)
├── Information security policies
├── Information security roles
├── Segregation of duties
├── Management responsibilities
├── Contact with authorities
├── Contact with special interest groups
├── Threat intelligence
├── Information security in project management
├── Inventory of information assets
├── Acceptable use of assets
├── Classification of information
├── Labeling of information
└── ... and more

A.6 PEOPLE CONTROLS (8)
├── Screening
├── Terms and conditions of employment
├── Information security awareness
├── Disciplinary process
├── Responsibilities after termination
├── Confidentiality agreements
├── Remote working
└── Information security event reporting

A.7 PHYSICAL CONTROLS (14)
├── Physical security perimeters
├── Physical entry
├── Securing offices, rooms, facilities
├── Physical security monitoring
├── Protecting against external threats
├── Working in secure areas
├── Clear desk and clear screen
└── ... and more

A.8 TECHNOLOGICAL CONTROLS (34)
├── User endpoint devices
├── Privileged access rights
├── Information access restriction
├── Secure authentication
├── Capacity management
├── Protection against malware
├── Technical vulnerability management
├── Cryptographic controls
├── Network security
└── ... and more`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Risk Assessment Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ISO 27001 Risk Assessment:

1. ESTABLISH CONTEXT
   - Scope of assessment
   - Risk criteria
   - Risk acceptance levels

2. RISK IDENTIFICATION
   +----------+     +----------+     +----------+
   |  ASSETS  | --> | THREATS  | --> | VULNER.  |
   +----------+     +----------+     +----------+

   Asset: Customer database
   Threat: SQL injection attack
   Vulnerability: Unvalidated input

3. RISK ANALYSIS
   Risk = Likelihood x Impact

   Likelihood: 1 (Rare) to 5 (Almost Certain)
   Impact: 1 (Negligible) to 5 (Catastrophic)

   Risk Level = 4 (Likely) x 5 (Catastrophic) = 20 (Critical)

4. RISK EVALUATION
   +----------------+------------------+
   | Risk Score     | Priority         |
   +----------------+------------------+
   | 20-25          | Critical - Immediate |
   | 12-19          | High - Priority  |
   | 6-11           | Medium - Plan    |
   | 1-5            | Low - Monitor    |
   +----------------+------------------+

5. RISK TREATMENT
   - Avoid: Eliminate the risk
   - Mitigate: Reduce likelihood/impact
   - Transfer: Insurance, outsource
   - Accept: Within risk appetite`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Certification Process</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Stage</th>
            <th className="p-3 border">Activity</th>
            <th className="p-3 border">Duration</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Gap Analysis</td>
            <td className="p-3 border">Assess current state vs. requirements</td>
            <td className="p-3 border">2-4 weeks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Implementation</td>
            <td className="p-3 border">Develop ISMS, implement controls</td>
            <td className="p-3 border">3-12 months</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Internal Audit</td>
            <td className="p-3 border">Self-assessment of ISMS</td>
            <td className="p-3 border">2-4 weeks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Stage 1 Audit</td>
            <td className="p-3 border">Documentation review</td>
            <td className="p-3 border">1-2 days</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Stage 2 Audit</td>
            <td className="p-3 border">Full certification audit</td>
            <td className="p-3 border">3-5 days</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Surveillance</td>
            <td className="p-3 border">Annual audits</td>
            <td className="p-3 border">1-2 days/year</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7. Recertification</td>
            <td className="p-3 border">Full audit every 3 years</td>
            <td className="p-3 border">3-5 days</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Required Documentation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>ISMS Scope:</strong> Boundaries of the management system</li>
      <li><strong>Information Security Policy:</strong> Top-level policy statement</li>
      <li><strong>Risk Assessment Methodology:</strong> Approach to assessing risks</li>
      <li><strong>Risk Assessment Results:</strong> Documented risk analysis</li>
      <li><strong>Risk Treatment Plan:</strong> How risks will be addressed</li>
      <li><strong>Statement of Applicability:</strong> Selected Annex A controls with justification</li>
      <li><strong>Security Objectives:</strong> Measurable security goals</li>
      <li><strong>Competence Records:</strong> Evidence of staff qualifications</li>
      <li><strong>Operational Documents:</strong> Procedures and work instructions</li>
      <li><strong>Audit Records:</strong> Internal audit results</li>
      <li><strong>Management Review Minutes:</strong> Leadership review outcomes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ISO 27001 provides a certifiable standard for information security</li>
        <li>Risk-based approach - select controls based on risk assessment</li>
        <li>Annex A provides 93 controls but not all are mandatory</li>
        <li>Statement of Applicability justifies control selection</li>
        <li>Requires continuous improvement through PDCA cycle</li>
        <li>Certification valid for 3 years with annual surveillance</li>
      </ul>
    </div>
  </div>
);

export default ISO27001;
