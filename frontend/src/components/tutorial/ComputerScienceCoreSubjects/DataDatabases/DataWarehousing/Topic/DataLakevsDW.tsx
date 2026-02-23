import React from "react";

const DataLakevsDW: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Lake vs Data Warehouse
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Lakes and Data Warehouses serve different purposes in the data ecosystem.
      Understanding their differences helps organizations choose the right solution
      or combination for their analytical needs.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Conceptual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Lake vs Data Warehouse:
════════════════════════════════════════════════════════════════

DATA LAKE                          DATA WAREHOUSE
─────────                          ──────────────

    ~~~~~~~~~~~~                   ┌─────────────────┐
  ~~~            ~~~               │                 │
 ~~   RAW DATA    ~~               │   STRUCTURED    │
~~                  ~~             │      DATA       │
~  ┌───┐ ┌───┐ ┌───┐ ~            │                 │
~  │CSV│ │IMG│ │LOG│ ~            │  ┌───┬───┬───┐  │
~  └───┘ └───┘ └───┘ ~            │  │   │   │   │  │
~~    Any format     ~~            │  ├───┼───┼───┤  │
 ~~                 ~~             │  │   │   │   │  │
  ~~~            ~~~               │  └───┴───┴───┘  │
    ~~~~~~~~~~~~                   │                 │
                                   │  Tables/Schema  │
Store first,                       └─────────────────┘
schema later
                                   Schema first,
                                   then store

"Reservoir of raw water"           "Purified water storage"`}
      </pre>
    </div>

    {/* Detailed Comparison */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Data Lake</th>
            <th className="p-3 border">Data Warehouse</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Type</td>
            <td className="p-3 border">Any (structured, semi, unstructured)</td>
            <td className="p-3 border">Structured only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Schema-on-read</td>
            <td className="p-3 border">Schema-on-write</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Processing</td>
            <td className="p-3 border">ELT (Extract, Load, Transform)</td>
            <td className="p-3 border">ETL (Extract, Transform, Load)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Data scientists, engineers</td>
            <td className="p-3 border">Business analysts, BI users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Performance</td>
            <td className="p-3 border">Variable, depends on optimization</td>
            <td className="p-3 border">Fast, optimized for BI queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">Low storage cost, compute on demand</td>
            <td className="p-3 border">Higher storage, predictable compute</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Agility</td>
            <td className="p-3 border">High - store now, analyze later</td>
            <td className="p-3 border">Lower - requires upfront design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Quality</td>
            <td className="p-3 border">Raw data, quality varies</td>
            <td className="p-3 border">Curated, high quality</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Use</td>
            <td className="p-3 border">ML/AI, data exploration</td>
            <td className="p-3 border">BI reporting, dashboards</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* When to Use Each */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Use Data Lake When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Storing raw data for future analysis</li>
          <li>Machine learning and AI projects</li>
          <li>Unstructured data (images, logs, text)</li>
          <li>Data exploration and discovery</li>
          <li>Uncertain future use cases</li>
          <li>Cost-sensitive storage needs</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Use Data Warehouse When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Business intelligence and reporting</li>
          <li>Well-defined, structured data</li>
          <li>Fast query performance required</li>
          <li>Business users need self-service</li>
          <li>Historical trend analysis</li>
          <li>Regulatory compliance needs</li>
        </ul>
      </div>
    </div>

    {/* Modern Reality */}
    <h2 className="text-3xl font-bold mt-8">Modern Reality: Use Both</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Modern Data Architecture (Lake + Warehouse):
════════════════════════════════════════════════════════════════

                      DATA SOURCES
                           │
                           ▼
            ┌──────────────────────────────┐
            │         DATA LAKE            │
            │  (Store everything raw)      │
            │                              │
            │  - Raw files                 │
            │  - ML training data          │
            │  - Historical archive        │
            └──────────────┬───────────────┘
                           │
            ┌──────────────┴───────────────┐
            │                              │
            ▼                              ▼
┌─────────────────────┐      ┌─────────────────────┐
│    DATA WAREHOUSE   │      │    ML/AI PLATFORM   │
│   (Curated subset)  │      │                     │
│                     │      │  - Model training   │
│  - Dimensional model│      │  - Feature store    │
│  - BI dashboards    │      │  - Predictions      │
│  - Business reports │      │                     │
└─────────────────────┘      └─────────────────────┘

Best of both worlds: Lake for flexibility, DW for performance`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data Lake: All data types, schema-on-read, ML/exploration focus</li>
        <li>Data Warehouse: Structured data, schema-on-write, BI focus</li>
        <li>Lakes are cheaper for storage; warehouses are faster for queries</li>
        <li>Lakes use ELT; warehouses traditionally use ETL</li>
        <li>Data scientists prefer lakes; business users prefer warehouses</li>
        <li>Modern architectures typically use both together</li>
        <li>Lake stores raw data; warehouse serves curated analytics</li>
        <li>Lakehouse architecture aims to combine both benefits</li>
      </ul>
    </div>
  </div>
);

export default DataLakevsDW;
