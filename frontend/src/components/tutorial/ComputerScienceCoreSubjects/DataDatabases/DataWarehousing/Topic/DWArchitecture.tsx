import React from "react";

const DWArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Warehouse Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data warehouse architecture defines how data flows from source systems through
      various layers to end users. This section covers different architectural approaches
      and components that make up a complete data warehouse solution.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Architecture - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Architecture Overview                                      │
│      └── High-level view of DW architecture patterns            │
│                                                                  │
│   2. Single-Tier Architecture                                   │
│      └── Simplest form, direct access to data                   │
│                                                                  │
│   3. Two-Tier Architecture                                      │
│      └── Separation of data storage and presentation            │
│                                                                  │
│   4. Three-Tier Architecture                                    │
│      └── Industry standard with staging, DW, and presentation   │
│                                                                  │
│   5. Components of Data Warehouse                               │
│      └── Core building blocks of a DW system                    │
│                                                                  │
│   6. Metadata and Its Types                                     │
│      └── Data about data - technical, business, operational     │
│                                                                  │
│   7. Data Marts                                                 │
│      └── Subject-specific subsets of data warehouse             │
│                                                                  │
│   8. Dependent vs Independent Data Marts                        │
│      └── Top-down vs bottom-up approaches                       │
│                                                                  │
│   9. Operational Data Store (ODS)                               │
│      └── Near real-time operational reporting layer             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">Architecture at a Glance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical Three-Tier Data Warehouse Architecture:
════════════════════════════════════════════════════════════════

┌─────────────┐   ┌─────────────┐   ┌─────────────┐
│   Source    │   │   Source    │   │   Source    │
│  System 1   │   │  System 2   │   │  System 3   │
│  (CRM)      │   │  (ERP)      │   │  (Files)    │
└──────┬──────┘   └──────┬──────┘   └──────┬──────┘
       │                 │                 │
       └────────────┬────┴────────────────┘
                    │
                    ▼
       ┌────────────────────────┐
       │      STAGING AREA      │  ◄── Bottom Tier
       │    (Data Integration)  │
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │    DATA WAREHOUSE      │  ◄── Middle Tier
       │  (Enterprise Storage)  │
       ├────────────────────────┤
       │ ┌────────┐ ┌────────┐  │
       │ │Data    │ │Data    │  │
       │ │Mart 1  │ │Mart 2  │  │
       │ └────────┘ └────────┘  │
       └───────────┬────────────┘
                   │
                   ▼
       ┌────────────────────────┐
       │   PRESENTATION LAYER   │  ◄── Top Tier
       │  (BI Tools, Reports)   │
       └────────────────────────┘`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Architecture Concepts</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Staging Area</h3>
        <p className="text-sm">Temporary storage for data extraction and transformation before loading into the warehouse.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Warehouse</h3>
        <p className="text-sm">Central repository storing integrated, historical data optimized for analytical queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Marts</h3>
        <p className="text-sm">Focused subsets of the warehouse serving specific business departments or functions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Metadata</h3>
        <p className="text-sm">Information about data structure, lineage, and business definitions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ODS</h3>
        <p className="text-sm">Operational Data Store for near real-time operational reporting needs.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ETL Pipeline</h3>
        <p className="text-sm">Extract, Transform, Load processes that move data through the architecture.</p>
      </div>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Begin with <strong>"Architecture Overview"</strong> to understand the big picture,
        then explore each tier architecture (single, two, three-tier) to see the evolution.
        Finally, dive into specific components like data marts, metadata, and ODS.
      </p>
    </div>
  </div>
);

export default DWArchitecture;
