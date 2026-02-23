import React from "react";

const Metadata: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Metadata and Its Types
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Metadata is "data about data" - information that describes the structure, content, and context
      of data in a data warehouse. It is essential for data discovery, understanding, governance,
      and maintaining the warehouse effectively.
    </p>

    {/* What is Metadata */}
    <h2 className="text-3xl font-bold mt-8">What is Metadata?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Metadata - Data About Data:
════════════════════════════════════════════════════════════════

Example: Customer Table Metadata

┌─────────────────────────────────────────────────────────────────┐
│ DATA:                                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ CustomerID │ Name        │ Email              │ JoinDate    │ │
│ │ 1001       │ John Smith  │ john@email.com     │ 2024-01-15  │ │
│ │ 1002       │ Jane Doe    │ jane@email.com     │ 2024-02-20  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ METADATA (About the data):                                       │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Table Name: CUSTOMER                                        │ │
│ │ Schema: SALES_DW                                            │ │
│ │ Row Count: 1,500,000                                        │ │
│ │ Last Updated: 2026-01-15 06:00:00                           │ │
│ │ Source System: CRM_SALESFORCE                               │ │
│ │ Owner: Sales Department                                      │ │
│ │ Description: Master customer dimension table                │ │
│ │                                                              │ │
│ │ Columns:                                                     │ │
│ │   CustomerID - INTEGER, Primary Key, Not Null               │ │
│ │   Name - VARCHAR(100), Not Null                             │ │
│ │   Email - VARCHAR(255), Unique                              │ │
│ │   JoinDate - DATE, Not Null                                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Types of Metadata */}
    <h2 className="text-3xl font-bold mt-8">Types of Metadata</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Types of Metadata in Data Warehousing:
════════════════════════════════════════════════════════════════

                    ┌─────────────────────┐
                    │      METADATA       │
                    │     REPOSITORY      │
                    └─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   TECHNICAL   │   │   BUSINESS    │   │  OPERATIONAL  │
│   METADATA    │   │   METADATA    │   │   METADATA    │
├───────────────┤   ├───────────────┤   ├───────────────┤
│ • Schemas     │   │ • Definitions │   │ • Load stats  │
│ • Data types  │   │ • Ownership   │   │ • Query logs  │
│ • ETL maps    │   │ • Policies    │   │ • Lineage     │
│ • Indexes     │   │ • Rules       │   │ • Schedules   │
└───────────────┘   └───────────────┘   └───────────────┘`}
      </pre>
    </div>

    {/* Technical Metadata */}
    <h2 className="text-3xl font-bold mt-8">1. Technical Metadata</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Technical metadata describes the physical structure and technical characteristics of data
        warehouse objects. It is primarily used by IT teams and developers.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border font-semibold">Database Objects</td>
              <td className="p-2 border">Table names, column names, data types, constraints, indexes</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">ETL Mappings</td>
              <td className="p-2 border">Source-to-target mappings, transformation logic, job definitions</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Physical Storage</td>
              <td className="p-2 border">Tablespaces, partitions, file locations, compression settings</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Connections</td>
              <td className="p-2 border">Database connections, API endpoints, authentication details</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Business Metadata */}
    <h2 className="text-3xl font-bold mt-8">2. Business Metadata</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Business metadata provides context and meaning to data from a business perspective.
        It helps business users understand and use the data effectively.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border font-semibold">Definitions</td>
              <td className="p-2 border">Business glossary, term definitions, synonyms</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Ownership</td>
              <td className="p-2 border">Data steward, business owner, department</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Business Rules</td>
              <td className="p-2 border">Calculation formulas, validation rules, derivation logic</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Data Quality</td>
              <td className="p-2 border">Quality expectations, acceptable thresholds, SLAs</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Security</td>
              <td className="p-2 border">Classification (PII, confidential), access policies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Operational Metadata */}
    <h2 className="text-3xl font-bold mt-8">3. Operational Metadata</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Operational metadata captures information about the operational aspects of the data warehouse,
        including ETL execution, data freshness, and usage patterns.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border font-semibold">ETL Statistics</td>
              <td className="p-2 border">Load times, row counts, error counts, duration</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Data Lineage</td>
              <td className="p-2 border">Source systems, transformations applied, data flow</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Job Schedules</td>
              <td className="p-2 border">Run schedules, dependencies, next run time</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Usage Logs</td>
              <td className="p-2 border">Query patterns, user access, popular reports</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Data Currency</td>
              <td className="p-2 border">Last update time, data latency, refresh frequency</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Metadata Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Metadata Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Discovery</h3>
        <p className="text-sm">Users can search and find relevant data using business terms and definitions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Impact Analysis</h3>
        <p className="text-sm">Understand downstream effects before making changes to source systems.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Lineage</h3>
        <p className="text-sm">Track data from source to consumption for auditing and troubleshooting.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Governance</h3>
        <p className="text-sm">Enforce policies, track ownership, and manage data quality.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Metadata is "data about data" - describes structure, content, and context</li>
        <li>Three types: Technical, Business, and Operational metadata</li>
        <li>Technical metadata: schemas, data types, ETL mappings (for IT)</li>
        <li>Business metadata: definitions, ownership, rules (for business users)</li>
        <li>Operational metadata: load stats, lineage, schedules (for operations)</li>
        <li>Metadata repository is central to data governance and discovery</li>
        <li>Good metadata management improves data quality and user trust</li>
      </ul>
    </div>
  </div>
);

export default Metadata;
