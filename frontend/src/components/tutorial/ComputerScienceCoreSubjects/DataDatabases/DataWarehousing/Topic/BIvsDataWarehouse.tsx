import React from "react";

const BIvsDataWarehouse: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      BI vs Data Warehouse
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      While Business Intelligence and Data Warehousing are closely related and often
      discussed together, they serve different purposes. Understanding their relationship
      helps in designing effective analytical solutions.
    </p>

    {/* Relationship Diagram */}
    <h2 className="text-3xl font-bold mt-8">How They Relate</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BI and Data Warehouse Relationship:
════════════════════════════════════════════════════════════════

                    BUSINESS INTELLIGENCE
    ┌─────────────────────────────────────────────────────────┐
    │                                                          │
    │    ┌─────────────────────────────────────────────────┐  │
    │    │              PRESENTATION                        │  │
    │    │   Dashboards │ Reports │ Alerts │ Analysis       │  │
    │    └─────────────────────────────────────────────────┘  │
    │                          │                               │
    │    ┌─────────────────────────────────────────────────┐  │
    │    │              DATA WAREHOUSE                      │  │
    │    │         (Backend Data Store)                     │  │
    │    │                                                  │  │
    │    │    ┌──────────────────────────────────────┐     │  │
    │    │    │        Integrated Data                │     │  │
    │    │    │   Historical │ Subject-Oriented       │     │  │
    │    │    └──────────────────────────────────────┘     │  │
    │    │                                                  │  │
    │    └─────────────────────────────────────────────────┘  │
    │                          │                               │
    │    ┌─────────────────────────────────────────────────┐  │
    │    │                  ETL                             │  │
    │    └─────────────────────────────────────────────────┘  │
    │                          │                               │
    └──────────────────────────┼──────────────────────────────┘
                               │
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
         ┌──────────┐   ┌──────────┐   ┌──────────┐
         │Source 1  │   │Source 2  │   │Source 3  │
         └──────────┘   └──────────┘   └──────────┘

Data Warehouse = Backend storage layer
BI = Complete solution (including DW + presentation)`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Data Warehouse</th>
            <th className="p-3 border">Business Intelligence</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Definition</td>
            <td className="p-3 border">Centralized data repository</td>
            <td className="p-3 border">Technologies + processes for insights</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Function</td>
            <td className="p-3 border">Store and organize data</td>
            <td className="p-3 border">Analyze and present insights</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Data storage layer</td>
            <td className="p-3 border">End-to-end analytical solution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Data engineers, DBAs</td>
            <td className="p-3 border">Business users, analysts, executives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Output</td>
            <td className="p-3 border">Clean, integrated data tables</td>
            <td className="p-3 border">Reports, dashboards, insights</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Focus</td>
            <td className="p-3 border">Data structure and quality</td>
            <td className="p-3 border">Business value and decisions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tools Example</td>
            <td className="p-3 border">Snowflake, Redshift, BigQuery</td>
            <td className="p-3 border">Tableau, Power BI, Looker</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Analogy */}
    <h2 className="text-3xl font-bold mt-8">Simple Analogy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Library Analogy:
════════════════════════════════════════════════════════════════

DATA WAREHOUSE = The Library Building
─────────────────────────────────────
• Organized shelves (tables)
• Catalog system (metadata)
• Archived books (historical data)
• Librarians maintain it (ETL processes)


BUSINESS INTELLIGENCE = The Library Experience
───────────────────────────────────────────────
• Finding books (queries)
• Reading and understanding (analysis)
• Taking notes (reports)
• Applying knowledge (decisions)
• Library cards and access (security)


You need the library (DW) to have the library experience (BI).
But the library alone doesn't create knowledge - readers do!`}
      </pre>
    </div>

    {/* Can You Have One Without Other */}
    <h2 className="text-3xl font-bold mt-8">Can You Have One Without the Other?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">BI Without DW</h3>
        <p className="text-sm mb-2">Possible but limited:</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Direct queries to source systems</li>
          <li>Excel-based reporting</li>
          <li>Real-time operational dashboards</li>
          <li>Small-scale, limited history</li>
        </ul>
        <p className="text-xs mt-2 italic">Works for simple needs, but not scalable.</p>
      </div>
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">DW Without BI</h3>
        <p className="text-sm mb-2">Possible but underutilized:</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data stored but not analyzed</li>
          <li>SQL queries only (technical users)</li>
          <li>No visual dashboards</li>
          <li>Limited business adoption</li>
        </ul>
        <p className="text-xs mt-2 italic">Data exists but value isn't extracted.</p>
      </div>
    </div>

    {/* Modern Perspective */}
    <h2 className="text-3xl font-bold mt-8">Modern Perspective</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="text-sm mb-2">In modern data stacks, the line between DW and BI is blurring:</p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs mt-2">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Data Stack:
────────────────────────────────────────────────────
Sources → Ingestion → Transform (dbt) → Cloud DW → BI Tool

• Cloud warehouses (Snowflake, BigQuery) handle both storage AND analysis
• BI tools (Looker, Mode) push computations to the warehouse
• Semantic layers can live in DW or BI tool
• The stack is more integrated than ever

Key: Choose tools that work well together in your stack`}
        </pre>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data Warehouse = Storage infrastructure for analytical data</li>
        <li>Business Intelligence = Complete solution for insights and decisions</li>
        <li>DW is a component within the broader BI ecosystem</li>
        <li>BI includes DW + ETL + analysis + presentation + governance</li>
        <li>DW focuses on data engineers; BI focuses on business users</li>
        <li>Both are needed for effective enterprise analytics</li>
        <li>Modern cloud platforms are blurring traditional boundaries</li>
        <li>Think of DW as the "what" and BI as the "so what"</li>
      </ul>
    </div>
  </div>
);

export default BIvsDataWarehouse;
