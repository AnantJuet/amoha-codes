import React from "react";

const SingleTierArch: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Single-Tier Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Single-tier architecture is the simplest form of data warehouse architecture where the data
      warehouse functionality is built directly on top of the operational database. This approach
      minimizes data redundancy but is rarely used in practice due to performance concerns.
    </p>

    {/* Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">Architecture Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Single-Tier Data Warehouse Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                        END USERS                                 │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │Analysts │  │Managers │  │ Execs   │  │  Apps   │            │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘            │
└───────┼────────────┼────────────┼────────────┼──────────────────┘
        │            │            │            │
        └────────────┴─────┬──────┴────────────┘
                           │ Queries
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                   SINGLE DATABASE TIER                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                 OPERATIONAL DATABASE                       │  │
│  │              (OLTP + Analytical Views)                     │  │
│  ├───────────────────────────────────────────────────────────┤  │
│  │                                                           │  │
│  │  ┌─────────────┐          ┌─────────────────────────┐    │  │
│  │  │ Transaction │          │   Analytical Views/     │    │  │
│  │  │   Tables    │ ◄──────► │   Materialized Views    │    │  │
│  │  │   (OLTP)    │          │   (DW-like access)      │    │  │
│  │  └─────────────┘          └─────────────────────────┘    │  │
│  │                                                           │  │
│  │  Same physical database handles both:                     │  │
│  │  • Transaction processing (INSERT, UPDATE, DELETE)        │  │
│  │  • Analytical queries (Complex SELECT, Aggregations)      │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Key Characteristic: NO separate data warehouse storage
                    Analytics performed on operational data`}
      </pre>
    </div>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How Single-Tier Works</h2>
    <div className="p-4 border rounded-lg mt-4">
      <ol className="list-decimal list-inside space-y-2">
        <li><strong>No ETL Process:</strong> Data is not extracted or transformed into a separate warehouse</li>
        <li><strong>Views for Analysis:</strong> Analytical views or materialized views are created on operational tables</li>
        <li><strong>Direct Access:</strong> Users query the operational database directly for reports</li>
        <li><strong>Shared Resources:</strong> OLTP and OLAP workloads compete for the same resources</li>
      </ol>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border border-green-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-green-600">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Minimal storage redundancy</li>
          <li>Real-time data access</li>
          <li>Lower infrastructure costs</li>
          <li>Simpler to implement initially</li>
          <li>No ETL maintenance required</li>
          <li>Single source of data</li>
        </ul>
      </div>
      <div className="p-4 border border-red-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-red-600">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Performance degradation for OLTP</li>
          <li>Complex queries slow down operations</li>
          <li>Limited historical data</li>
          <li>No data transformation/cleansing</li>
          <li>Schema not optimized for analytics</li>
          <li>Scalability issues</li>
        </ul>
      </div>
    </div>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use Single-Tier</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Very small organizations</strong> with minimal reporting needs</li>
        <li><strong>Proof of concept</strong> before investing in full DW infrastructure</li>
        <li><strong>Real-time requirements</strong> where any latency is unacceptable</li>
        <li><strong>Limited budget</strong> that cannot support separate analytics infrastructure</li>
        <li><strong>Simple reporting</strong> that doesn't require complex transformations</li>
      </ul>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Single-tier has no separate data warehouse - analytics on operational DB</li>
        <li>Minimizes storage redundancy but creates performance contention</li>
        <li>Rarely used in practice for enterprise data warehousing</li>
        <li>Suitable only for very small organizations with simple needs</li>
        <li>Main goal is to minimize data storage, not optimize analytics</li>
        <li>Views and materialized views provide analytical access</li>
      </ul>
    </div>
  </div>
);

export default SingleTierArch;
