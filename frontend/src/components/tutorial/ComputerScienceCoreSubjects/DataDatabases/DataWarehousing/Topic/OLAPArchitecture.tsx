import React from "react";

const OLAPArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OLAP Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLAP architecture defines how analytical data is stored, processed, and accessed.
      There are three main architectural approaches: MOLAP, ROLAP, and HOLAP, each with
      different trade-offs between performance, storage, and flexibility.
    </p>

    {/* Architecture Types */}
    <h2 className="text-3xl font-bold mt-8">OLAP Architecture Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP Architecture Types:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  MOLAP (Multidimensional)    ROLAP (Relational)                 │
│  ─────────────────────────   ──────────────────                 │
│                                                                  │
│  ┌─────────────────┐         ┌─────────────────┐               │
│  │  OLAP Client    │         │  OLAP Client    │               │
│  └────────┬────────┘         └────────┬────────┘               │
│           │                           │                         │
│           ▼                           ▼                         │
│  ┌─────────────────┐         ┌─────────────────┐               │
│  │  MOLAP Server   │         │  ROLAP Server   │               │
│  │ (Cube Engine)   │         │ (SQL Generator) │               │
│  └────────┬────────┘         └────────┬────────┘               │
│           │                           │                         │
│           ▼                           ▼                         │
│  ┌─────────────────┐         ┌─────────────────┐               │
│  │ Multidimensional│         │   Relational    │               │
│  │    Database     │         │    Database     │               │
│  │   (Cube Store)  │         │  (Star Schema)  │               │
│  └─────────────────┘         └─────────────────┘               │
│                                                                  │
│  HOLAP (Hybrid)                                                  │
│  ──────────────                                                  │
│                                                                  │
│  ┌─────────────────┐                                            │
│  │  OLAP Client    │                                            │
│  └────────┬────────┘                                            │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────┐                                            │
│  │  HOLAP Server   │                                            │
│  └────────┬────────┘                                            │
│           │                                                      │
│     ┌─────┴─────┐                                               │
│     ▼           ▼                                                │
│  ┌───────┐ ┌───────────┐                                        │
│  │ Cube  │ │ Relational│                                        │
│  │(Agg)  │ │ (Detail)  │                                        │
│  └───────┘ └───────────┘                                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* MOLAP */}
    <h2 className="text-3xl font-bold mt-8">MOLAP (Multidimensional OLAP)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        MOLAP stores data in optimized multidimensional array structures (cubes).
        Pre-aggregated data enables extremely fast query performance.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
          <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Advantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Fastest query performance</li>
            <li>Efficient for complex calculations</li>
            <li>Excellent compression</li>
            <li>Optimized for OLAP operations</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
          <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Disadvantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Cube build time required</li>
            <li>Storage explosion for sparse data</li>
            <li>Limited data volume scalability</li>
            <li>Proprietary storage format</li>
          </ul>
        </div>
      </div>
      <p className="text-sm mt-3 text-gray-600"><strong>Examples:</strong> Microsoft Analysis Services, Oracle Essbase, IBM Cognos TM1</p>
    </div>

    {/* ROLAP */}
    <h2 className="text-3xl font-bold mt-8">ROLAP (Relational OLAP)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        ROLAP stores data in relational databases (star/snowflake schemas) and generates
        SQL queries dynamically. Aggregations computed at query time or stored in aggregate tables.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
          <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Advantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Scales to very large data volumes</li>
            <li>Uses existing RDBMS infrastructure</li>
            <li>No cube build required</li>
            <li>Always current data (real-time)</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
          <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Disadvantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Slower query performance</li>
            <li>Complex SQL generation</li>
            <li>Database performance dependency</li>
            <li>Less efficient for complex calcs</li>
          </ul>
        </div>
      </div>
      <p className="text-sm mt-3 text-gray-600"><strong>Examples:</strong> Oracle BI Server, SAP BW (ROLAP mode), Looker</p>
    </div>

    {/* HOLAP */}
    <h2 className="text-3xl font-bold mt-8">HOLAP (Hybrid OLAP)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        HOLAP combines MOLAP and ROLAP - storing aggregations in multidimensional format
        while keeping detail data in relational tables. Best of both worlds approach.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
          <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Advantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Fast aggregation queries (MOLAP)</li>
            <li>Detail drill-through (ROLAP)</li>
            <li>Balanced storage efficiency</li>
            <li>Flexible architecture</li>
          </ul>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
          <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Disadvantages</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>More complex architecture</li>
            <li>Performance gap at boundary</li>
            <li>Management overhead</li>
            <li>Dual storage systems</li>
          </ul>
        </div>
      </div>
      <p className="text-sm mt-3 text-gray-600"><strong>Examples:</strong> Microsoft Analysis Services (HOLAP mode), Oracle Essbase</p>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Architecture Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">MOLAP</th>
            <th className="p-3 border">ROLAP</th>
            <th className="p-3 border">HOLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">Multidimensional</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Both</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Speed</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Medium-Fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">Limited (GB)</td>
            <td className="p-3 border">Very Large (TB+)</td>
            <td className="p-3 border">Large (TB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Latency</td>
            <td className="p-3 border">Cube refresh cycle</td>
            <td className="p-3 border">Real-time possible</td>
            <td className="p-3 border">Mixed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sparse Data</td>
            <td className="p-3 border">Inefficient</td>
            <td className="p-3 border">Efficient</td>
            <td className="p-3 border">Efficient</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>MOLAP:</strong> Fastest queries, pre-aggregated cubes, limited scale</li>
        <li><strong>ROLAP:</strong> Scales to large data, real-time capable, slower queries</li>
        <li><strong>HOLAP:</strong> Hybrid approach combining benefits of both</li>
        <li>Choose MOLAP for small-medium data with complex calculations</li>
        <li>Choose ROLAP for large data volumes or real-time needs</li>
        <li>Choose HOLAP when you need fast aggregations with detail drill-through</li>
        <li>Modern cloud DWs often use ROLAP with materialized views</li>
        <li>Architecture choice depends on data volume, query patterns, and latency needs</li>
      </ul>
    </div>
  </div>
);

export default OLAPArchitecture;
