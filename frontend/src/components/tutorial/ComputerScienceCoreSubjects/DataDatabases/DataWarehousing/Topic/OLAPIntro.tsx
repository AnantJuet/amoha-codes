import React from "react";

const OLAPIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to OLAP
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLAP (Online Analytical Processing) is a category of software technology that enables
      analysts, managers, and executives to gain insight into data through fast, consistent,
      interactive access to multidimensional views of business information.
    </p>

    {/* What is OLAP */}
    <h2 className="text-3xl font-bold mt-8">What is OLAP?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP Overview:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    OLAP SYSTEM                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Business Questions OLAP Answers:                               │
│   ────────────────────────────────                               │
│   • What were total sales by region last quarter?               │
│   • How do this year's profits compare to last year?            │
│   • Which products are trending up/down by customer segment?    │
│   • What is the monthly sales trend for the past 3 years?       │
│                                                                  │
│   OLAP Capabilities:                                             │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                                                          │  │
│   │  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐ │  │
│   │  │  SLICE  │   │  DICE   │   │  DRILL  │   │  PIVOT  │ │  │
│   │  │         │   │         │   │         │   │         │ │  │
│   │  │ Filter  │   │ Filter  │   │ Up/Down │   │ Rotate  │ │  │
│   │  │ 1 dim   │   │ multi   │   │ levels  │   │ axes    │ │  │
│   │  └─────────┘   └─────────┘   └─────────┘   └─────────┘ │  │
│   │                                                          │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                  │
│   Multidimensional View:                                         │
│                    ┌─────────────────┐                          │
│                   /│                /│                          │
│                  / │      SALES    / │                          │
│                 /  │       CUBE   /  │                          │
│                ┌─────────────────┐   │ ◄── Time                 │
│                │                 │   │                          │
│                │                 │  /  ◄── Product              │
│                │                 │ /                            │
│                └─────────────────┘                              │
│                        ▲                                         │
│                        └── Geography                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* OLAP Characteristics */}
    <h2 className="text-3xl font-bold mt-8">OLAP Characteristics (FASMI)</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">F - Fast</h3>
        <p className="text-sm">Delivers most responses to users within 5 seconds, with simplest queries in 1 second and complex queries in no more than 20 seconds.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">A - Analysis</h3>
        <p className="text-sm">Supports any business logic and statistical analysis required by users. Provides ad-hoc calculation capabilities.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">S - Shared</h3>
        <p className="text-sm">Implements security requirements for data access. Multiple users can access the system concurrently.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">M - Multidimensional</h3>
        <p className="text-sm">Provides multidimensional conceptual view of data including full support for hierarchies and multiple hierarchies.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">I - Information</h3>
        <p className="text-sm">Accesses all data and derived information needed by the analysis, from any source, with capacity appropriate to the analysis.</p>
      </div>
    </div>

    {/* OLAP vs OLTP */}
    <h2 className="text-3xl font-bold mt-8">OLAP vs OLTP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">OLTP</th>
            <th className="p-3 border">OLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Day-to-day operations</td>
            <td className="p-3 border">Analysis and reporting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Clerks, operational staff</td>
            <td className="p-3 border">Analysts, managers, executives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data</td>
            <td className="p-3 border">Current, detailed</td>
            <td className="p-3 border">Historical, summarized</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Queries</td>
            <td className="p-3 border">Simple, predefined</td>
            <td className="p-3 border">Complex, ad-hoc</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Time</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Seconds to minutes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">MB to GB</td>
            <td className="p-3 border">GB to TB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Normalized (3NF)</td>
            <td className="p-3 border">Denormalized (Star/Snowflake)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* OLAP Operations */}
    <h2 className="text-3xl font-bold mt-8">Core OLAP Operations</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Roll-up (Drill-up)</h3>
        <p className="text-sm">Aggregate data by climbing up hierarchy. E.g., from daily to monthly to yearly sales.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Drill-down</h3>
        <p className="text-sm">Navigate from summary to detailed data. E.g., from yearly to quarterly to monthly.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Slice</h3>
        <p className="text-sm">Select a single dimension to create a sub-cube. E.g., filter by Region = "North".</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Dice</h3>
        <p className="text-sm">Select multiple dimensions to create a sub-cube. E.g., Region + Product + Time.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Pivot (Rotate)</h3>
        <p className="text-sm">Rotate the data axes to view data from different perspectives.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Drill-through</h3>
        <p className="text-sm">Navigate from OLAP cube to the underlying detail data in the data warehouse.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OLAP enables fast, interactive analysis of multidimensional data</li>
        <li>FASMI: Fast, Analysis, Shared, Multidimensional, Information</li>
        <li>Designed for complex analytical queries, not transactions</li>
        <li>Uses denormalized schema (star/snowflake) for query performance</li>
        <li>Core operations: Roll-up, Drill-down, Slice, Dice, Pivot</li>
        <li>Provides multidimensional view of data (cube concept)</li>
        <li>Users are typically analysts, managers, and executives</li>
        <li>Works with historical, aggregated data for trend analysis</li>
      </ul>
    </div>
  </div>
);

export default OLAPIntro;
