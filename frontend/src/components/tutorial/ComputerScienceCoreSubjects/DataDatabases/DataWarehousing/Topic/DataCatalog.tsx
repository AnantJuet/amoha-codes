import React from "react";

const DataCatalog: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Catalog
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A data catalog is a searchable inventory of data assets within an organization.
      It provides metadata management, data discovery, and governance capabilities
      that help users find, understand, and trust the data they need.
    </p>

    {/* Data Catalog Concept */}
    <h2 className="text-3xl font-bold mt-8">What is a Data Catalog?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Catalog - Your Data's Search Engine:
════════════════════════════════════════════════════════════════

Without Catalog:                   With Catalog:
────────────────                   ──────────────

"Where is customer data?"          Search: "customer data"
     │                                  │
     ▼                                  ▼
┌─────────────────┐               ┌─────────────────┐
│ Ask around...   │               │  SEARCH RESULTS │
│ Check Slack...  │               │                 │
│ Email IT...     │               │ 📊 dim_customer │
│ Look in wiki... │               │    Warehouse.sales│
│ Try SQL...      │               │    ★★★★★ Certified│
│                 │               │    Owner: J.Smith │
│ ⏱️ Hours/Days   │               │                 │
└─────────────────┘               │ 📁 customer.csv │
                                  │    S3/raw/crm/   │
                                  │    Last: 2 days  │
                                  │                 │
                                  │ ⏱️ Seconds      │
                                  └─────────────────┘

"Google for your enterprise data"`}
      </pre>
    </div>

    {/* Catalog Components */}
    <h2 className="text-3xl font-bold mt-8">Data Catalog Components</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Technical Metadata</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Table/column names</li>
          <li>Data types</li>
          <li>Schema definitions</li>
          <li>Row counts, sizes</li>
          <li>Source system info</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Business Metadata</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Business descriptions</li>
          <li>Data owner/steward</li>
          <li>Business glossary terms</li>
          <li>Use case examples</li>
          <li>Data classification</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Operational Metadata</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Last updated time</li>
          <li>Refresh frequency</li>
          <li>Job run status</li>
          <li>Query popularity</li>
          <li>Access patterns</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Social Metadata</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>User ratings/reviews</li>
          <li>Usage statistics</li>
          <li>Questions & answers</li>
          <li>Related assets</li>
          <li>Endorsements</li>
        </ul>
      </div>
    </div>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Key Catalog Features</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Catalog Capabilities:
════════════════════════════════════════════════════════════════

1. SEARCH & DISCOVERY
   ┌─────────────────────────────────────────────────────┐
   │  🔍 [customer sales monthly]  [Search]               │
   │                                                      │
   │  Filters: Type ▼  Domain ▼  Owner ▼  Certified ✓   │
   └─────────────────────────────────────────────────────┘

2. DATA LINEAGE
   Source → Transform → Table → Dashboard
   ┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
   │  CRM  │──▶│  ETL  │──▶│ fact_ │──▶│  BI   │
   │ MySQL │   │ Spark │   │sales  │   │Report │
   └───────┘   └───────┘   └───────┘   └───────┘

3. BUSINESS GLOSSARY
   "Revenue" = Gross sales minus returns and discounts
   "Active Customer" = Made purchase in last 12 months

4. DATA QUALITY SCORES
   Table: fact_sales
   Completeness: 98% ████████████░░
   Accuracy: 95%     ███████████░░░
   Freshness: 99%    █████████████░`}
      </pre>
    </div>

    {/* Popular Tools */}
    <h2 className="text-3xl font-bold mt-8">Data Catalog Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Alation</td>
            <td className="p-3 border">Enterprise catalog</td>
            <td className="p-3 border">Large enterprises, ML-powered</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Collibra</td>
            <td className="p-3 border">Data governance platform</td>
            <td className="p-3 border">Governance-first organizations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Atlan</td>
            <td className="p-3 border">Modern data catalog</td>
            <td className="p-3 border">Modern data stack users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DataHub</td>
            <td className="p-3 border">Open source (LinkedIn)</td>
            <td className="p-3 border">Technical teams, customization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AWS Glue Catalog</td>
            <td className="p-3 border">Cloud-native (AWS)</td>
            <td className="p-3 border">AWS data lake users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unity Catalog</td>
            <td className="p-3 border">Databricks native</td>
            <td className="p-3 border">Databricks/Lakehouse users</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Catalog Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. Start with High-Value Data</h3>
        <p className="text-sm">Catalog critical business data first. Don't try to catalog everything at once.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Automate Metadata Collection</h3>
        <p className="text-sm">Use crawlers and connectors to automatically discover and sync metadata.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Engage Data Stewards</h3>
        <p className="text-sm">Business stewards add context and descriptions that make data findable.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Integrate into Workflows</h3>
        <p className="text-sm">Embed catalog links in BI tools, documentation, and Slack.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data catalog is the "Google for your enterprise data"</li>
        <li>Contains technical, business, operational, and social metadata</li>
        <li>Key features: search, lineage, glossary, quality scores</li>
        <li>Enables data discovery and self-service</li>
        <li>Foundation for data governance programs</li>
        <li>Automate metadata collection; focus humans on context</li>
        <li>Start small with high-value datasets</li>
        <li>Success requires ongoing curation and maintenance</li>
      </ul>
    </div>
  </div>
);

export default DataCatalog;
