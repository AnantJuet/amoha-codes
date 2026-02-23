import React from "react";

const BITools: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Business Intelligence Tools
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      BI tools provide the software platform for analyzing data and creating visualizations.
      The market includes enterprise platforms, self-service tools, and embedded analytics
      solutions for different organizational needs.
    </p>

    {/* Tool Landscape */}
    <h2 className="text-3xl font-bold mt-8">BI Tool Landscape</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BI Tool Categories:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                      BI TOOL MARKET                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ENTERPRISE BI PLATFORMS                                        │
│  ├── Microsoft Power BI                                         │
│  ├── Tableau (Salesforce)                                       │
│  ├── Qlik Sense                                                 │
│  └── SAP BusinessObjects                                        │
│                                                                  │
│  MODERN / CLOUD-NATIVE                                          │
│  ├── Looker (Google)                                           │
│  ├── Sigma Computing                                            │
│  ├── Mode Analytics                                             │
│  ├── Metabase (Open Source)                                     │
│  └── Apache Superset (Open Source)                              │
│                                                                  │
│  EMBEDDED ANALYTICS                                              │
│  ├── Sisense                                                    │
│  ├── Logi Analytics                                             │
│  └── GoodData                                                   │
│                                                                  │
│  SPREADSHEET-BASED                                               │
│  ├── Microsoft Excel                                            │
│  └── Google Sheets                                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Tool Comparison */}
    <h2 className="text-3xl font-bold mt-8">Popular Tools Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Strengths</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Pricing</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Power BI</td>
            <td className="p-3 border">Microsoft integration, affordable, DAX</td>
            <td className="p-3 border">Microsoft-heavy orgs</td>
            <td className="p-3 border">Free - $10/user/mo</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tableau</td>
            <td className="p-3 border">Best visualizations, flexibility</td>
            <td className="p-3 border">Data exploration, analysts</td>
            <td className="p-3 border">$70+/user/mo</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Looker</td>
            <td className="p-3 border">Semantic layer (LookML), governed</td>
            <td className="p-3 border">Data teams, GCP users</td>
            <td className="p-3 border">Custom pricing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Qlik Sense</td>
            <td className="p-3 border">Associative engine, AI insights</td>
            <td className="p-3 border">Complex data discovery</td>
            <td className="p-3 border">$30+/user/mo</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Metabase</td>
            <td className="p-3 border">Easy setup, open source</td>
            <td className="p-3 border">Startups, simple needs</td>
            <td className="p-3 border">Free (self-hosted)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Superset</td>
            <td className="p-3 border">Open source, SQL-native</td>
            <td className="p-3 border">Technical teams</td>
            <td className="p-3 border">Free (self-hosted)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Tool Features */}
    <h2 className="text-3xl font-bold mt-8">Key BI Tool Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Connectivity</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Native connectors to databases</li>
          <li>Cloud service integrations</li>
          <li>File imports (CSV, Excel)</li>
          <li>API access</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Visualization</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Standard charts (bar, line, pie)</li>
          <li>Maps and geospatial</li>
          <li>Custom visualizations</li>
          <li>Interactive filtering</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Collaboration</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Shared dashboards</li>
          <li>Comments and annotations</li>
          <li>Scheduled delivery</li>
          <li>Embedded sharing</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Governance</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Row-level security</li>
          <li>Certified content</li>
          <li>Usage analytics</li>
          <li>Version control</li>
        </ul>
      </div>
    </div>

    {/* Tool Selection Criteria */}
    <h2 className="text-3xl font-bold mt-8">Tool Selection Criteria</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`How to Choose a BI Tool:
════════════════════════════════════════════════════════════════

1. USER SKILL LEVEL
   ┌─────────────┐           ┌─────────────┐
   │ Business    │ ────────▶ │ Power BI    │ Easy drag-drop
   │ Users       │           │ Tableau     │
   └─────────────┘           └─────────────┘
   ┌─────────────┐           ┌─────────────┐
   │ Technical   │ ────────▶ │ Looker      │ SQL/Code-first
   │ Users       │           │ Superset    │
   └─────────────┘           └─────────────┘

2. EXISTING STACK
   Microsoft 365  ──────────▶ Power BI
   Google Cloud   ──────────▶ Looker
   Salesforce     ──────────▶ Tableau CRM

3. BUDGET
   Startup/Small  ──────────▶ Metabase, Superset (free)
   Mid-size       ──────────▶ Power BI ($10/user)
   Enterprise     ──────────▶ Tableau, Qlik ($70+/user)

4. DEPLOYMENT
   Cloud-hosted   ──────────▶ SaaS options
   On-premises    ──────────▶ Self-hosted/Server`}
      </pre>
    </div>

    {/* Modern Data Stack */}
    <h2 className="text-3xl font-bold mt-8">BI in Modern Data Stack</h2>
    <div className="p-4 border rounded-lg mt-4">
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Data Stack with BI:
────────────────────────────────────────────────────────

Sources → Fivetran → Snowflake → dbt → Looker/Tableau → Users
          (ingest)   (warehouse) (transform) (visualize)

BI Tool connects to:
• Cloud data warehouse (Snowflake, BigQuery, Redshift)
• Transformed tables (from dbt models)
• Semantic layer (Looker LookML, dbt Metrics)`}
        </pre>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Power BI and Tableau dominate the market</li>
        <li>Looker excels for governed, code-first analytics</li>
        <li>Open source options (Metabase, Superset) are viable for small teams</li>
        <li>Consider existing tech stack for integration</li>
        <li>User skill level determines ease of adoption</li>
        <li>Total cost includes licensing, training, and infrastructure</li>
        <li>Modern BI tools connect directly to cloud warehouses</li>
        <li>Evaluate with a proof-of-concept before committing</li>
      </ul>
    </div>
  </div>
);

export default BITools;
