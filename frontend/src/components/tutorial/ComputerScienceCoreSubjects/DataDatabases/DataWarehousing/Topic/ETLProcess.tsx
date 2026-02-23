import React from "react";

const ETLProcess: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ETL Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL (Extract, Transform, Load) is the backbone of data warehousing. It encompasses
      all the processes required to move data from source systems, transform it into
      a consistent format, and load it into the data warehouse for analysis.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Process - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Introduction to ETL                                        │
│      └── Overview of Extract, Transform, Load process           │
│                                                                  │
│   2. Extract Phase                                              │
│      └── Pulling data from various source systems               │
│                                                                  │
│   3. Data Extraction Techniques                                 │
│      └── Full, incremental, CDC extraction methods              │
│                                                                  │
│   4. Transform Phase                                            │
│      └── Data conversion, standardization, enrichment           │
│                                                                  │
│   5. Data Transformation Rules                                  │
│      └── Business logic and data mapping                        │
│                                                                  │
│   6. Data Cleansing                                             │
│      └── Handling duplicates, nulls, and invalid data           │
│                                                                  │
│   7. Load Phase                                                 │
│      └── Loading transformed data into target systems           │
│                                                                  │
│   8. Load Types (Full vs Incremental)                           │
│      └── Initial load vs delta/change data capture              │
│                                                                  │
│   9. Data Quality                                               │
│      └── Ensuring accuracy, completeness, consistency           │
│                                                                  │
│  10. Data Quality Dimensions                                    │
│      └── Measuring and monitoring data quality                  │
│                                                                  │
│  11. ETL Tools Overview                                         │
│      └── Popular tools: Informatica, Talend, SSIS, etc.        │
│                                                                  │
│  12. ELT vs ETL                                                 │
│      └── Modern approach comparison                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* ETL Flow Diagram */}
    <h2 className="text-3xl font-bold mt-8">ETL Process Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Pipeline Overview:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                         EXTRACT                                  │
│                                                                  │
│   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐              │
│   │Database│  │  API   │  │ Files  │  │ Cloud  │              │
│   │  SQL   │  │  REST  │  │CSV/JSON│  │  S3    │              │
│   └───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘              │
│       └───────────┴───────────┴───────────┘                    │
│                         │                                        │
└─────────────────────────┼───────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       TRANSFORM                                  │
│                                                                  │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │   Clean     │  │  Validate   │  │  Enrich     │            │
│   │ • Nulls     │  │ • Rules     │  │ • Lookup    │            │
│   │ • Duplicates│  │ • Types     │  │ • Calculate │            │
│   │ • Format    │  │ • Range     │  │ • Aggregate │            │
│   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘            │
│          └────────────────┼────────────────┘                    │
│                           │                                      │
└───────────────────────────┼─────────────────────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                         LOAD                                     │
│                                                                  │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                   DATA WAREHOUSE                         │  │
│   │                                                          │  │
│   │    ┌──────────┐    ┌──────────┐    ┌──────────┐        │  │
│   │    │  Fact    │    │Dimension │    │  Data    │        │  │
│   │    │  Tables  │    │  Tables  │    │  Marts   │        │  │
│   │    └──────────┘    └──────────┘    └──────────┘        │  │
│   └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Extract</h3>
        <p className="text-sm">Pull data from heterogeneous sources - databases, files, APIs, cloud services. Handle different formats and connectivity.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Transform</h3>
        <p className="text-sm">Clean, validate, standardize, and enrich data. Apply business rules and convert to target format.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">Load</h3>
        <p className="text-sm">Insert transformed data into the warehouse. Handle full loads, incremental updates, and SCD logic.</p>
      </div>
    </div>

    {/* ETL vs ELT */}
    <h2 className="text-3xl font-bold mt-8">ETL vs ELT</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ETL</th>
            <th className="p-3 border">ELT</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Transform Location</td>
            <td className="p-3 border">Staging server</td>
            <td className="p-3 border">Target database</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">On-premise, structured data</td>
            <td className="p-3 border">Cloud, big data, data lakes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Limited by ETL server</td>
            <td className="p-3 border">Leverages cloud compute</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Start with <strong>"Introduction to ETL"</strong> for the big picture, then deep-dive into
        each phase: <strong>Extract</strong>, <strong>Transform</strong>, and <strong>Load</strong>.
        Pay special attention to <strong>Data Quality</strong> as it's critical for trustworthy analytics.
        Finally, explore modern approaches like <strong>ELT</strong> and popular <strong>ETL Tools</strong>.
      </p>
    </div>
  </div>
);

export default ETLProcess;
