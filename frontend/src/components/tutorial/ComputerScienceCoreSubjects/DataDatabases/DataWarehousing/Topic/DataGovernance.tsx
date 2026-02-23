import React from "react";

const DataGovernance: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Governance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data governance is the collection of processes, policies, and standards that
      ensure data is managed as a valuable enterprise asset. It establishes accountability,
      quality standards, and controls for data throughout its lifecycle.
    </p>

    {/* Governance Framework */}
    <h2 className="text-3xl font-bold mt-8">Data Governance Framework</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Governance Framework:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    DATA GOVERNANCE                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   PEOPLE    │  │  PROCESS    │  │ TECHNOLOGY  │             │
│  │             │  │             │  │             │             │
│  │ • Stewards  │  │ • Policies  │  │ • Catalog   │             │
│  │ • Owners    │  │ • Standards │  │ • Lineage   │             │
│  │ • Council   │  │ • Workflows │  │ • Quality   │             │
│  │ • Users     │  │ • Metrics   │  │ • Security  │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    GOVERNANCE PILLARS                    │   │
│  │                                                          │   │
│  │  Data        Data         Data        Data       Data    │   │
│  │  Quality   │ Security  │ Privacy  │ Lifecycle │ Access  │   │
│  │            │           │          │           │         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    BUSINESS VALUE                        │   │
│  │   Trust │ Compliance │ Efficiency │ Decision Quality     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Roles */}
    <h2 className="text-3xl font-bold mt-8">Governance Roles</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Responsibilities</th>
            <th className="p-3 border">Typical Person</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Owner</td>
            <td className="p-3 border">Accountable for data quality, access decisions</td>
            <td className="p-3 border">Business leader, VP</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Steward</td>
            <td className="p-3 border">Day-to-day data management, quality monitoring</td>
            <td className="p-3 border">Business analyst, SME</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Custodian</td>
            <td className="p-3 border">Technical storage, security, backups</td>
            <td className="p-3 border">DBA, Data engineer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Governance Council</td>
            <td className="p-3 border">Policy decisions, dispute resolution, priorities</td>
            <td className="p-3 border">Cross-functional leaders</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chief Data Officer</td>
            <td className="p-3 border">Executive sponsor, strategy, budget</td>
            <td className="p-3 border">C-level executive</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Governance Pillars */}
    <h2 className="text-3xl font-bold mt-8">Governance Pillars</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Quality</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Accuracy - Data is correct</li>
          <li>Completeness - No missing values</li>
          <li>Consistency - Same across systems</li>
          <li>Timeliness - Up to date</li>
          <li>Uniqueness - No duplicates</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Security</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Access controls (RBAC)</li>
          <li>Encryption at rest and in transit</li>
          <li>Audit logging</li>
          <li>Data masking</li>
          <li>Incident response</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Privacy</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>GDPR, CCPA compliance</li>
          <li>PII identification</li>
          <li>Consent management</li>
          <li>Data subject rights</li>
          <li>Privacy impact assessments</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Lifecycle</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Creation and capture</li>
          <li>Storage and maintenance</li>
          <li>Usage and sharing</li>
          <li>Archival and retention</li>
          <li>Deletion and disposal</li>
        </ul>
      </div>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Governance Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Governance Maturity Journey:
════════════════════════════════════════════════════════════════

Level 1: INITIAL
├── Ad-hoc data management
├── No formal ownership
└── Reactive problem solving

Level 2: MANAGED
├── Basic policies documented
├── Some data owners assigned
└── Manual quality checks

Level 3: DEFINED
├── Enterprise standards
├── Data catalog implemented
├── Quality metrics tracked

Level 4: MEASURED
├── Automated quality monitoring
├── KPIs and dashboards
├── Regular governance reviews

Level 5: OPTIMIZED
├── Continuous improvement
├── AI-assisted governance
└── Data-driven culture

Most organizations are at Level 2-3. Aim for incremental progress.`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data governance ensures data is managed as an enterprise asset</li>
        <li>Requires people, processes, and technology working together</li>
        <li>Key roles: Data Owner, Steward, Custodian, Governance Council</li>
        <li>Pillars: Quality, Security, Privacy, Lifecycle, Access</li>
        <li>Start small with high-value data domains</li>
        <li>Executive sponsorship is critical for success</li>
        <li>Balance control with enabling data access</li>
        <li>Governance is ongoing - not a one-time project</li>
      </ul>
    </div>
  </div>
);

export default DataGovernance;
