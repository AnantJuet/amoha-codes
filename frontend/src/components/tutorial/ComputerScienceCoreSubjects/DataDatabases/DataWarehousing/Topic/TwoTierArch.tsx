import React from "react";

const TwoTierArch: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Two-Tier Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Two-tier architecture separates the data warehouse from operational systems but doesn't include
      a dedicated staging area. Data is extracted from source systems and loaded directly into the
      data warehouse after transformation.
    </p>

    {/* Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">Architecture Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Tier Data Warehouse Architecture:
════════════════════════════════════════════════════════════════

    TIER 1: SOURCE SYSTEMS              TIER 2: DATA WAREHOUSE
┌────────────────────────────┐      ┌────────────────────────────┐
│      DATA SOURCES          │      │     DATA WAREHOUSE         │
├────────────────────────────┤      ├────────────────────────────┤
│                            │      │                            │
│  ┌────────┐  ┌────────┐   │      │  ┌──────────────────────┐  │
│  │  ERP   │  │  CRM   │   │      │  │                      │  │
│  │ System │  │ System │   │      │  │    Data Warehouse    │  │
│  └───┬────┘  └───┬────┘   │      │  │                      │  │
│      │           │        │      │  │  • Fact Tables       │  │
│      │           │        │      │  │  • Dimension Tables  │  │
│  ┌───┴────┐  ┌───┴────┐   │      │  │  • Aggregates        │  │
│  │  File  │  │External│   │      │  │                      │  │
│  │ System │  │  APIs  │   │      │  └──────────────────────┘  │
│  └───┬────┘  └───┬────┘   │      │             │              │
│      │           │        │      │             │              │
└──────┼───────────┼────────┘      │             ▼              │
       │           │               │  ┌──────────────────────┐  │
       └─────┬─────┘               │  │     DATA MARTS       │  │
             │                     │  ├──────────────────────┤  │
             │ ETL                 │  │ ┌──────┐  ┌──────┐   │  │
             │ (Direct Load)       │  │ │Sales │  │Finance│  │  │
             │                     │  │ │ Mart │  │ Mart  │  │  │
             └─────────────────────┼──│ └──────┘  └──────┘   │  │
                                   │  └──────────────────────┘  │
                                   │                            │
                                   └────────────────────────────┘
                                                │
                                                ▼
                                   ┌────────────────────────────┐
                                   │      END USERS             │
                                   │  Reports, Dashboards, BI   │
                                   └────────────────────────────┘

Note: No separate staging area - ETL transforms and loads directly`}
      </pre>
    </div>

    {/* Data Flow */}
    <h2 className="text-3xl font-bold mt-8">Data Flow in Two-Tier</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Tier Data Flow:
════════════════════════════════════════════════════════════════

Step 1: EXTRACT
┌─────────────┐
│   Source    │ ──▶ Extract data from operational systems
│   Systems   │     (No intermediate storage)
└─────────────┘

        │
        ▼

Step 2: TRANSFORM (In-Memory or In-Flight)
┌─────────────┐
│  Transform  │ ──▶ Cleanse, map, aggregate data
│  (ETL Tool) │     (Done during load process)
└─────────────┘

        │
        ▼

Step 3: LOAD (Direct to DW)
┌─────────────┐
│    Data     │ ──▶ Load directly into warehouse tables
│  Warehouse  │     (No staging tables)
└─────────────┘

Characteristics:
• Simpler than three-tier
• Faster for small data volumes
• Less recovery options if load fails
• Limited data validation before load`}
      </pre>
    </div>

    {/* Comparison with Other Tiers */}
    <h2 className="text-3xl font-bold mt-8">Comparison: One, Two, Three Tier</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Single-Tier</th>
            <th className="p-3 border">Two-Tier</th>
            <th className="p-3 border">Three-Tier</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Separate DW</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Staging Area</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recovery</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Full</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Very Small</td>
            <td className="p-3 border">Small-Medium</td>
            <td className="p-3 border">Enterprise</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border border-green-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-green-600">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Separates analytical from operational load</li>
          <li>Simpler than three-tier architecture</li>
          <li>Lower storage requirements</li>
          <li>Faster implementation</li>
          <li>Less infrastructure to manage</li>
        </ul>
      </div>
      <div className="p-4 border border-red-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-red-600">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>No staging for data validation</li>
          <li>Difficult to recover from ETL failures</li>
          <li>Limited data lineage tracking</li>
          <li>Not suitable for complex transformations</li>
          <li>Performance issues with large volumes</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Two-tier separates DW from operational systems but has no staging area</li>
        <li>Data is transformed in-flight during the ETL process</li>
        <li>Simpler than three-tier but less robust for error recovery</li>
        <li>Suitable for small to medium organizations with simpler needs</li>
        <li>Main limitation: difficult to restart failed loads midway</li>
        <li>Modern cloud DWs often use simplified two-tier with ELT approach</li>
      </ul>
    </div>
  </div>
);

export default TwoTierArch;
