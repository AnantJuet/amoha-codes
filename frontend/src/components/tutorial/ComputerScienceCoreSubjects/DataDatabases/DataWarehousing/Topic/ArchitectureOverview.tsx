import React from "react";

const ArchitectureOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Warehouse Architecture Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data warehouse architecture refers to the design and structure of a data warehouse system.
      It defines how data flows from source systems through various layers to end users. A well-designed
      architecture ensures scalability, performance, and maintainability.
    </p>

    {/* Basic Architecture */}
    <h2 className="text-3xl font-bold mt-8">Basic Data Warehouse Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Architecture - Data Flow:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                        DATA SOURCES                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   ERP   │  │   CRM   │  │  Files  │  │External │            │
│  │ System  │  │ System  │  │  (CSV)  │  │  APIs   │            │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘            │
└───────┼────────────┼────────────┼────────────┼──────────────────┘
        │            │            │            │
        └────────────┴─────┬──────┴────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      ETL / ELT LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│         Extract  ──▶  Transform  ──▶  Load                      │
│         (Pull data)   (Clean/Map)    (Insert)                   │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     STAGING AREA                                 │
├─────────────────────────────────────────────────────────────────┤
│         Temporary storage for raw extracted data                │
│         Data validation and cleansing occurs here               │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DATA WAREHOUSE                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Enterprise Data Warehouse (EDW)             │   │
│  │         Integrated, Subject-Oriented Repository          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                              │                                  │
│         ┌────────────────────┼────────────────────┐            │
│         ▼                    ▼                    ▼            │
│  ┌────────────┐      ┌────────────┐      ┌────────────┐       │
│  │   Sales    │      │  Finance   │      │ Marketing  │       │
│  │ Data Mart  │      │ Data Mart  │      │ Data Mart  │       │
│  └────────────┘      └────────────┘      └────────────┘       │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │ Reports │  │Dashboards│ │  OLAP   │  │   ML    │            │
│  │         │  │         │  │  Cubes  │  │ Models  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Architecture Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Data Warehouse Architecture</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Architecture</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single-Tier</td>
            <td className="p-3 border">Data warehouse directly on operational DB</td>
            <td className="p-3 border">Small organizations, minimal reporting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Two-Tier</td>
            <td className="p-3 border">Separate DW without staging area</td>
            <td className="p-3 border">Simple integrations, medium-sized</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Three-Tier</td>
            <td className="p-3 border">Sources → Staging → DW → Data Marts</td>
            <td className="p-3 border">Enterprise-scale, complex needs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Architecture Components */}
    <h2 className="text-3xl font-bold mt-8">Key Architecture Components</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Data Source Layer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Operational databases (OLTP)</li>
          <li>External data feeds</li>
          <li>Flat files (CSV, Excel)</li>
          <li>APIs and web services</li>
          <li>IoT and streaming data</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. ETL/ELT Layer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data extraction from sources</li>
          <li>Data transformation and cleansing</li>
          <li>Data loading into warehouse</li>
          <li>Job scheduling and orchestration</li>
          <li>Error handling and logging</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Storage Layer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Staging area (temporary)</li>
          <li>Enterprise Data Warehouse</li>
          <li>Data Marts (departmental)</li>
          <li>OLAP Cubes (aggregated)</li>
          <li>Archive storage</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. Presentation Layer</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>BI and reporting tools</li>
          <li>Dashboards and visualizations</li>
          <li>Ad-hoc query tools</li>
          <li>Data mining applications</li>
          <li>API access for applications</li>
        </ul>
      </div>
    </div>

    {/* Inmon vs Kimball Architecture */}
    <h2 className="text-3xl font-bold mt-8">Inmon vs Kimball Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Inmon Architecture (Top-Down):
════════════════════════════════════════════════════════════════
Sources → ETL → Enterprise DW (3NF) → Data Marts (Dimensional)
                      │
                      ▼
         ┌────────────────────────┐
         │  Enterprise Data       │
         │  Warehouse (3NF)       │  ← Single source of truth
         │  Normalized design     │
         └────────────┬───────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   ┌─────────┐  ┌─────────┐  ┌─────────┐
   │ Sales   │  │ Finance │  │   HR    │
   │ Mart    │  │ Mart    │  │  Mart   │
   └─────────┘  └─────────┘  └─────────┘

Kimball Architecture (Bottom-Up):
════════════════════════════════════════════════════════════════
Sources → ETL → Conformed Data Marts → Virtual Enterprise DW

        ┌─────────────────────────────────────┐
        │     Bus Architecture               │
        │  (Conformed Dimensions & Facts)    │
        └─────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   ┌─────────┐  ┌─────────┐  ┌─────────┐
   │ Sales   │  │ Finance │  │   HR    │
   │ Mart    │  │ Mart    │  │  Mart   │  ← Start here first
   └─────────┘  └─────────┘  └─────────┘
   (Star Schema) (Star Schema) (Star Schema)`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Architecture defines how data flows from sources to end users</li>
        <li>Three-tier architecture (Source → Staging → DW → Marts) is most common</li>
        <li>Key components: Data Sources, ETL, Staging, DW, Data Marts, Presentation Layer</li>
        <li>Inmon approach: Build EDW first (top-down), then create data marts</li>
        <li>Kimball approach: Build data marts first (bottom-up) with conformed dimensions</li>
        <li>Modern architectures include cloud, lakehouse, and real-time components</li>
      </ul>
    </div>
  </div>
);

export default ArchitectureOverview;
