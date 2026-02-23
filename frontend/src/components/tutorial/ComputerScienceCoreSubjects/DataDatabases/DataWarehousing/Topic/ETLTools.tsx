import React from "react";

const ETLTools: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ETL Tools and Technologies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL tools automate the process of extracting, transforming, and loading data into
      data warehouses. They provide visual interfaces, pre-built connectors, and robust
      scheduling capabilities to simplify complex data integration tasks.
    </p>

    {/* Tool Categories */}
    <h2 className="text-3xl font-bold mt-8">ETL Tool Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Tool Landscape:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    ETL TOOL CATEGORIES                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ENTERPRISE ETL TOOLS (Traditional)                              │
│  ├── Informatica PowerCenter                                    │
│  ├── IBM DataStage                                              │
│  ├── Talend                                                     │
│  ├── Microsoft SSIS                                             │
│  └── Oracle Data Integrator (ODI)                               │
│                                                                  │
│  CLOUD-NATIVE ETL/ELT TOOLS                                      │
│  ├── AWS Glue                                                   │
│  ├── Azure Data Factory                                         │
│  ├── Google Cloud Dataflow                                      │
│  ├── Fivetran (EL)                                              │
│  ├── Airbyte (EL)                                               │
│  └── Stitch (EL)                                                │
│                                                                  │
│  TRANSFORMATION TOOLS (T in ELT)                                 │
│  ├── dbt (data build tool)                                      │
│  ├── Dataform                                                   │
│  └── SQLMesh                                                    │
│                                                                  │
│  OPEN SOURCE OPTIONS                                             │
│  ├── Apache Airflow (Orchestration)                             │
│  ├── Apache NiFi                                                │
│  ├── Apache Spark                                               │
│  ├── Pentaho Data Integration                                   │
│  └── Singer (EL)                                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Popular Tools Comparison */}
    <h2 className="text-3xl font-bold mt-8">Popular ETL Tools Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Pricing</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Informatica</td>
            <td className="p-3 border">Enterprise ETL</td>
            <td className="p-3 border">Large enterprises, complex transformations</td>
            <td className="p-3 border">$$$$ (Enterprise)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Talend</td>
            <td className="p-3 border">Enterprise ETL</td>
            <td className="p-3 border">Mid-size companies, Java-based</td>
            <td className="p-3 border">$$-$$$ (Open core)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SSIS</td>
            <td className="p-3 border">Enterprise ETL</td>
            <td className="p-3 border">Microsoft shops, SQL Server</td>
            <td className="p-3 border">$$ (SQL Server license)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fivetran</td>
            <td className="p-3 border">Cloud EL</td>
            <td className="p-3 border">SaaS data integration, modern stack</td>
            <td className="p-3 border">$$-$$$ (Usage-based)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Airbyte</td>
            <td className="p-3 border">Cloud EL</td>
            <td className="p-3 border">Open-source, many connectors</td>
            <td className="p-3 border">Free - $$ (Open source)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">dbt</td>
            <td className="p-3 border">Transform</td>
            <td className="p-3 border">SQL transformations in warehouse</td>
            <td className="p-3 border">Free - $$ (Cloud version)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AWS Glue</td>
            <td className="p-3 border">Cloud ETL</td>
            <td className="p-3 border">AWS ecosystem, serverless</td>
            <td className="p-3 border">$$ (Pay per use)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Airflow</td>
            <td className="p-3 border">Orchestration</td>
            <td className="p-3 border">Workflow management, custom ETL</td>
            <td className="p-3 border">Free (Open source)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Modern Data Stack */}
    <h2 className="text-3xl font-bold mt-8">Modern Data Stack (ELT)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Data Stack Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    MODERN DATA STACK                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  DATA SOURCES                                                    │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐              │
│  │Salesforce│ │ Stripe  │ │PostgreSQL│ │Google Ads│             │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘              │
│       └──────────┬┴──────────┬┴───────────┘                    │
│                  │           │                                  │
│                  ▼           │                                  │
│  EXTRACT & LOAD (EL)         │                                  │
│  ┌───────────────────────────┼─────────────────────┐           │
│  │    Fivetran / Airbyte / Stitch                  │           │
│  │    (Pre-built connectors, automated sync)       │           │
│  └───────────────────────────┼─────────────────────┘           │
│                              │                                  │
│                              ▼                                  │
│  CLOUD DATA WAREHOUSE                                           │
│  ┌─────────────────────────────────────────────────┐           │
│  │     Snowflake / BigQuery / Redshift / Databricks│           │
│  │  ┌─────────────────────────────────────────┐   │           │
│  │  │              Raw Data                    │   │           │
│  │  └────────────────────┬────────────────────┘   │           │
│  │                       │                         │           │
│  │  TRANSFORM (T)        ▼                         │           │
│  │  ┌─────────────────────────────────────────┐   │           │
│  │  │              dbt                         │   │           │
│  │  │   (SQL transformations, testing, docs)  │   │           │
│  │  └────────────────────┬────────────────────┘   │           │
│  │                       │                         │           │
│  │                       ▼                         │           │
│  │  ┌─────────────────────────────────────────┐   │           │
│  │  │          Analytics-Ready Data           │   │           │
│  │  └─────────────────────────────────────────┘   │           │
│  └─────────────────────────────────────────────────┘           │
│                              │                                  │
│                              ▼                                  │
│  BI & ANALYTICS                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                          │
│  │ Looker  │ │ Tableau │ │ Metabase│                          │
│  └─────────┘ └─────────┘ └─────────┘                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Tool Selection Criteria */}
    <h2 className="text-3xl font-bold mt-8">Tool Selection Criteria</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Sources</h3>
        <p className="text-sm">Does the tool have connectors for your sources? How many custom connectors will you need?</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Volume</h3>
        <p className="text-sm">Can the tool handle your data volume? What are the scalability limits?</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Transformation Complexity</h3>
        <p className="text-sm">Does your transformation logic require code or can visual tools suffice?</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Team Skills</h3>
        <p className="text-sm">What technical skills does your team have? SQL, Python, Java, or visual tools?</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Deployment Model</h3>
        <p className="text-sm">Do you prefer cloud-hosted SaaS, self-hosted, or hybrid deployment?</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Budget</h3>
        <p className="text-sm">What is your budget? Consider both licensing and operational costs.</p>
      </div>
    </div>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Key ETL Tool Features</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-4">
      <li><strong>Visual Designer:</strong> Drag-and-drop interface for building data flows</li>
      <li><strong>Pre-built Connectors:</strong> Ready-to-use connections to common data sources</li>
      <li><strong>Transformation Library:</strong> Built-in functions for common transformations</li>
      <li><strong>Scheduling:</strong> Ability to schedule and automate ETL jobs</li>
      <li><strong>Monitoring:</strong> Real-time job status, alerts, and logging</li>
      <li><strong>Error Handling:</strong> Exception management and recovery options</li>
      <li><strong>Lineage Tracking:</strong> Track data flow from source to target</li>
      <li><strong>Version Control:</strong> Manage changes to ETL code/designs</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Choose between traditional ETL tools and modern ELT stack based on needs</li>
        <li>Enterprise tools (Informatica, DataStage) suit complex, large-scale needs</li>
        <li>Modern stack (Fivetran + dbt) is popular for cloud data warehouses</li>
        <li>Open source options (Airflow, Airbyte) provide flexibility and cost savings</li>
        <li>Consider connector availability, scalability, and team skills</li>
        <li>ELT approach leverages cloud DW compute for transformations</li>
        <li>dbt has become the standard for SQL-based transformations</li>
        <li>Most organizations use a combination of tools for different needs</li>
      </ul>
    </div>
  </div>
);

export default ETLTools;
