import React from "react";

const DWChallenges: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Challenges in Data Warehousing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      While data warehousing offers significant benefits, implementing and maintaining a data warehouse
      comes with various challenges. Understanding these challenges helps organizations plan better
      and adopt strategies to mitigate risks.
    </p>

    {/* Challenges Overview */}
    <h2 className="text-3xl font-bold mt-8">Categories of Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehousing Challenges:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    TECHNICAL CHALLENGES                      │
├─────────────────────────────────────────────────────────────┤
│  • Data Integration Complexity                               │
│  • Data Quality Issues                                       │
│  • Performance and Scalability                               │
│  • ETL Development and Maintenance                           │
│  • Schema Evolution                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 ORGANIZATIONAL CHALLENGES                    │
├─────────────────────────────────────────────────────────────┤
│  • High Initial Investment                                   │
│  • Skilled Resource Scarcity                                 │
│  • Change Management                                         │
│  • Cross-Department Coordination                             │
│  • Executive Buy-in                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   OPERATIONAL CHALLENGES                     │
├─────────────────────────────────────────────────────────────┤
│  • Long Development Cycles                                   │
│  • Ongoing Maintenance Burden                                │
│  • Security and Compliance                                   │
│  • Data Governance                                           │
│  • Keeping Up with Business Changes                          │
└─────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Technical Challenges */}
    <h2 className="text-3xl font-bold mt-8">1. Data Integration Complexity</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Integrating data from multiple heterogeneous sources is one of the most significant challenges.
        Each source may have different formats, naming conventions, and data quality levels.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Integration Challenges:
────────────────────────────────────────────────────────────────
Source A (Oracle)     Source B (SAP)      Source C (Files)
┌─────────────┐       ┌─────────────┐     ┌─────────────┐
│ CUST_ID     │       │ KUNNR       │     │ CustomerNo  │
│ CUST_NAME   │       │ NAME1       │     │ Name        │
│ DT_CREATED  │       │ ERDAT       │     │ CreateDate  │
└─────────────┘       └─────────────┘     └─────────────┘
      │                     │                   │
      └─────────────────────┼───────────────────┘
                            │
              ┌─────────────▼─────────────┐
              │   MAPPING & TRANSFORMATION │
              │   (Complex Logic Required) │
              └───────────────────────────┘

Challenges:
• Different schemas and data models
• Inconsistent data types
• Missing relationships between systems
• Real-time vs batch source systems
• Legacy system limitations`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Data Quality Issues</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Quality Issue</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Duplicate Records</td>
            <td className="p-3 border">Same entity exists in multiple sources</td>
            <td className="p-3 border">Inflated metrics, incorrect analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Missing Data</td>
            <td className="p-3 border">NULL values, incomplete records</td>
            <td className="p-3 border">Gaps in reporting, failed joins</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inconsistent Data</td>
            <td className="p-3 border">Same data differs across sources</td>
            <td className="p-3 border">Conflicting reports, trust issues</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Outdated Data</td>
            <td className="p-3 border">Stale information from delayed loads</td>
            <td className="p-3 border">Decisions based on old data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Invalid Data</td>
            <td className="p-3 border">Data violates business rules</td>
            <td className="p-3 border">Incorrect calculations, errors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Performance and Scalability</h2>
    <div className="p-4 border rounded-lg mt-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Performance Challenges:
════════════════════════════════════════════════════════════════

Data Volume Growth:
Year 1: 100 GB    ──────▶
Year 2: 500 GB    ──────────────────▶
Year 3: 2 TB      ────────────────────────────────────▶
Year 4: 10 TB     ────────────────────────────────────────────▶

Challenges:
• Query response time degrades with data growth
• ETL window may exceed available time
• Storage costs increase exponentially
• Index maintenance becomes expensive
• Backup and recovery times extend

Solutions to Consider:
• Partitioning strategies
• Aggregate tables
• Columnar storage
• Cloud elastic scaling
• Data archival policies`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. High Initial Investment</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Data warehouse projects require significant upfront investment in hardware, software,
        and skilled resources before delivering business value.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Cost Components:</h4>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Hardware/Infrastructure</li>
            <li>Database licenses</li>
            <li>ETL tool licenses</li>
            <li>BI tool licenses</li>
            <li>Development team</li>
            <li>Training and change management</li>
          </ul>
        </div>
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Typical Timeline to Value:</h4>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Traditional DW: 12-24 months</li>
            <li>Cloud DW: 3-6 months</li>
            <li>ROI typically: 2-3 years</li>
            <li>Risk of project failure: 50-70%</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. ETL Development and Maintenance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Challenges:
════════════════════════════════════════════════════════════════

Development Challenges:
├── Complex transformation logic
├── Error handling for edge cases
├── Testing with production-like data
├── Documentation and knowledge transfer
└── Meeting performance requirements

Maintenance Challenges:
├── Source system changes break ETL
├── New source systems to integrate
├── Bug fixes and enhancements
├── Performance tuning
└── ETL job monitoring and alerting

Typical ETL Effort Distribution:
┌──────────────────────────────────────────┐
│ Extract    ████░░░░░░░░░░░░░░  20%       │
│ Transform  ████████████░░░░░░  60%       │
│ Load       ████░░░░░░░░░░░░░░  20%       │
└──────────────────────────────────────────┘
Transform phase is most complex and error-prone`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Security and Compliance</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Data warehouses consolidate sensitive data from across the organization, making security
        and regulatory compliance critical challenges.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>GDPR, HIPAA, SOX compliance requirements</li>
        <li>Data masking and encryption needs</li>
        <li>Access control across departments</li>
        <li>Audit trail and lineage tracking</li>
        <li>Data retention and deletion policies</li>
        <li>Cross-border data transfer regulations</li>
      </ul>
    </div>

    {/* Mitigation Strategies */}
    <h2 className="text-3xl font-bold mt-8">Mitigation Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Mitigation Strategy</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Data Integration</td>
            <td className="p-3 border">Use data virtualization, master data management</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Quality</td>
            <td className="p-3 border">Implement data quality tools, establish data governance</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Cloud solutions with elastic scaling, proper partitioning</td>
          </tr>
          <tr>
            <td className="p-3 border">High Cost</td>
            <td className="p-3 border">Agile/iterative approach, cloud pay-as-you-go models</td>
          </tr>
          <tr>
            <td className="p-3 border">ETL Complexity</td>
            <td className="p-3 border">ELT approach, dbt for transformations, automation</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Role-based access, encryption, compliance frameworks</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data integration from heterogeneous sources is technically complex</li>
        <li>Data quality issues (duplicates, missing data, inconsistencies) affect analytics accuracy</li>
        <li>Performance degrades as data volumes grow; plan for scalability</li>
        <li>High upfront costs require strong business case and executive sponsorship</li>
        <li>ETL development and maintenance consume 60-80% of project effort</li>
        <li>Security and compliance are critical with consolidated sensitive data</li>
        <li>Cloud data warehouses address many traditional challenges</li>
        <li>Agile approach with iterative delivery reduces project risk</li>
      </ul>
    </div>
  </div>
);

export default DWChallenges;
