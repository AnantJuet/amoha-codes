import React from "react";

const DataMartTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dependent vs Independent Data Marts
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data marts can be classified into three types based on how they source their data: Dependent,
      Independent, and Hybrid. Understanding these types helps in choosing the right architecture
      for your organization's needs.
    </p>

    {/* Three Types Overview */}
    <h2 className="text-3xl font-bold mt-8">Types of Data Marts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Types of Data Marts:
════════════════════════════════════════════════════════════════

1. DEPENDENT DATA MART (Top-Down / Inmon Approach)
┌─────────────────────────────────────────────────────────────────┐
│ Source Systems ──▶ ETL ──▶ Enterprise DW ──▶ Data Marts        │
│                                    │                            │
│                          ┌─────────┴─────────┐                 │
│                          ▼                   ▼                 │
│                    ┌──────────┐        ┌──────────┐            │
│                    │ Sales    │        │ Finance  │            │
│                    │ Mart     │        │ Mart     │            │
│                    └──────────┘        └──────────┘            │
└─────────────────────────────────────────────────────────────────┘

2. INDEPENDENT DATA MART (Bottom-Up / Kimball Approach)
┌─────────────────────────────────────────────────────────────────┐
│ Source Systems ──▶ ETL ──▶ Data Marts (No central DW)          │
│        │                                                        │
│        ├──────────────────────────────────────────┐            │
│        ▼                   ▼                      ▼            │
│  ┌──────────┐        ┌──────────┐          ┌──────────┐       │
│  │ Sales    │        │ Finance  │          │ Marketing│       │
│  │ Mart     │        │ Mart     │          │ Mart     │       │
│  └──────────┘        └──────────┘          └──────────┘       │
└─────────────────────────────────────────────────────────────────┘

3. HYBRID DATA MART (Combined Approach)
┌─────────────────────────────────────────────────────────────────┐
│ Source Systems ──▶ ETL ──▶ Some from DW, Some Direct           │
│        │                          │                             │
│        │              ┌───────────┴───────────┐                │
│        │              ▼                       ▼                │
│        │       Enterprise DW ──▶ Dependent Marts               │
│        │                                                        │
│        └──────────────────────▶ Independent Marts              │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Dependent Data Mart */}
    <h2 className="text-3xl font-bold mt-8">1. Dependent Data Mart</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Dependent data marts are created by extracting data from an existing enterprise data warehouse.
        They follow the top-down approach advocated by Bill Inmon.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Dependent Data Mart Flow:
════════════════════════════════════════════════════════════════

Source Systems     Enterprise DW        Data Marts
┌──────────┐      ┌──────────────┐    ┌─────────────┐
│ ERP      │──┐   │              │    │ Sales Mart  │
│ CRM      │──┼──▶│  Integrated  │───▶│             │
│ Files    │──┘   │  Normalized  │    └─────────────┘
└──────────┘      │   (3NF)      │    ┌─────────────┐
                  │              │───▶│Finance Mart │
                  └──────────────┘    └─────────────┘

Characteristics:
• Single source of truth (EDW)
• Consistent data across all marts
• Requires EDW to be built first
• Used by large enterprises
• Better data governance`}
        </pre>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
          <h4 className="font-bold text-green-700 dark:text-green-400">Advantages:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Data consistency guaranteed</li>
            <li>Single version of truth</li>
            <li>Better data governance</li>
            <li>Reduced redundancy</li>
          </ul>
        </div>
        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
          <h4 className="font-bold text-red-700 dark:text-red-400">Disadvantages:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Requires EDW investment first</li>
            <li>Longer time to first delivery</li>
            <li>Higher initial cost</li>
            <li>Less department flexibility</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Independent Data Mart */}
    <h2 className="text-3xl font-bold mt-8">2. Independent Data Mart</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Independent data marts are created directly from source systems without going through
        a central data warehouse. They follow the bottom-up approach of Ralph Kimball.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Independent Data Mart Flow:
════════════════════════════════════════════════════════════════

Source Systems                      Data Marts
┌──────────┐                      ┌─────────────┐
│ ERP      │─────────────────────▶│ Sales Mart  │
└──────────┘                      └─────────────┘
┌──────────┐                      ┌─────────────┐
│ CRM      │─────────────────────▶│ Marketing   │
└──────────┘                      │ Mart        │
                                  └─────────────┘
┌──────────┐                      ┌─────────────┐
│ Finance  │─────────────────────▶│ Finance     │
│ System   │                      │ Mart        │
└──────────┘                      └─────────────┘

Characteristics:
• No central data warehouse
• Department-specific ETL
• Quick to implement
• Suitable for small organizations
• Risk of data silos`}
        </pre>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
          <h4 className="font-bold text-green-700 dark:text-green-400">Advantages:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Faster implementation</li>
            <li>Lower initial cost</li>
            <li>Department autonomy</li>
            <li>Quick wins</li>
          </ul>
        </div>
        <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded">
          <h4 className="font-bold text-red-700 dark:text-red-400">Disadvantages:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Data inconsistency risk</li>
            <li>Creates data silos</li>
            <li>Duplicate ETL efforts</li>
            <li>Hard to integrate later</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Hybrid Data Mart */}
    <h2 className="text-3xl font-bold mt-8">3. Hybrid Data Mart</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Hybrid data marts combine both approaches - some data comes from the enterprise DW
        while other data is sourced directly from operational systems.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Provides flexibility based on business requirements</li>
        <li>Core data from DW ensures consistency</li>
        <li>Department-specific data can be added directly</li>
        <li>Balances governance with agility</li>
      </ul>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Dependent</th>
            <th className="p-3 border">Independent</th>
            <th className="p-3 border">Hybrid</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Source</td>
            <td className="p-3 border">Enterprise DW</td>
            <td className="p-3 border">Source Systems</td>
            <td className="p-3 border">Both</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation</td>
            <td className="p-3 border">Slow</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Large Enterprise</td>
            <td className="p-3 border">Small/Medium Org</td>
            <td className="p-3 border">Growing Org</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Dependent:</strong> Sourced from EDW, consistent but slower to implement (Inmon)</li>
        <li><strong>Independent:</strong> Sourced directly from systems, faster but risk of silos (Kimball)</li>
        <li><strong>Hybrid:</strong> Combines both approaches for flexibility</li>
        <li>Large enterprises typically use dependent marts for governance</li>
        <li>Small organizations often start with independent marts for quick wins</li>
        <li>Kimball's conformed dimensions help independent marts work together</li>
        <li>Choose based on organization size, budget, and consistency requirements</li>
      </ul>
    </div>
  </div>
);

export default DataMartTypes;
