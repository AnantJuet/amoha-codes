import React from "react";

const ThreeTierArch: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Three-Tier Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Three-tier architecture is the most common and recommended data warehouse architecture for
      enterprise implementations. It includes a staging area between source systems and the data
      warehouse, providing better data quality control, error recovery, and scalability.
    </p>

    {/* Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">Architecture Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three-Tier Data Warehouse Architecture:
════════════════════════════════════════════════════════════════

TIER 1: BOTTOM TIER (Data Sources)
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   ERP   │  │   CRM   │  │  Files  │  │External │            │
│  │ Oracle  │  │Salesforce│ │   CSV   │  │  APIs   │            │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘            │
└───────┼────────────┼────────────┼────────────┼──────────────────┘
        │            │            │            │
        └────────────┴─────┬──────┴────────────┘
                           │ Extract
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      STAGING AREA                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Raw/Landing Zone Tables                     │   │
│  │         (Exact copy of source data)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │ Transform                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Staging/Work Tables                         │   │
│  │         (Cleansed, validated, transformed)               │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────┬───────────────────────────────────┘
                              │ Load
                              ▼
TIER 2: MIDDLE TIER (Data Warehouse)
┌─────────────────────────────────────────────────────────────────┐
│                   DATA WAREHOUSE SERVER                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            Enterprise Data Warehouse (EDW)               │   │
│  │                                                          │   │
│  │   ┌──────────────┐    ┌──────────────────────────┐      │   │
│  │   │ Fact Tables  │    │   Dimension Tables       │      │   │
│  │   │ • Sales      │    │   • Customer             │      │   │
│  │   │ • Inventory  │    │   • Product              │      │   │
│  │   │ • Orders     │    │   • Time                 │      │   │
│  │   └──────────────┘    │   • Geography            │      │   │
│  │                       └──────────────────────────┘      │   │
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
TIER 3: TOP TIER (Presentation/Analytics)
┌─────────────────────────────────────────────────────────────────┐
│                   PRESENTATION LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  OLAP   │  │   BI    │  │ Reports │  │   ML    │            │
│  │  Cubes  │  │  Tools  │  │Dashboards│ │ Models  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Three Tiers Explained */}
    <h2 className="text-3xl font-bold mt-8">The Three Tiers Explained</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-xl mb-2">Tier 1: Bottom Tier (Data Sources)</h3>
        <p className="text-sm leading-relaxed">
          The bottom tier consists of all the source systems that feed data into the warehouse.
          This includes operational databases (ERP, CRM), flat files, external APIs, and any other
          data sources. ETL tools connect to these sources to extract data.
        </p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-xl mb-2">Tier 2: Middle Tier (Data Warehouse Server)</h3>
        <p className="text-sm leading-relaxed">
          The middle tier is the core of the architecture, containing the staging area, data warehouse,
          and data marts. This tier uses an OLAP server to provide multidimensional views of the data.
          It can be ROLAP (relational), MOLAP (multidimensional), or HOLAP (hybrid).
        </p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-xl mb-2">Tier 3: Top Tier (Presentation Layer)</h3>
        <p className="text-sm leading-relaxed">
          The top tier is the front-end client layer that provides user access to the data warehouse.
          It includes query tools, reporting applications, dashboards, data mining tools, and any
          other applications that consume warehouse data.
        </p>
      </div>
    </div>

    {/* Staging Area Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Staging Area</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Why Staging Area is Critical:
════════════════════════════════════════════════════════════════

1. DATA VALIDATION
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │   Source    │ ──▶  │   Staging   │ ──▶  │     DW      │
   │    Data     │      │   (Check)   │      │  (Clean!)   │
   └─────────────┘      └─────────────┘      └─────────────┘
                              │
                        Validation Rules:
                        • Data type checks
                        • NULL handling
                        • Range validation
                        • Referential integrity

2. ERROR RECOVERY
   If load fails at step 3:
   ┌──────┐    ┌──────┐    ┌──────┐
   │Step 1│ ✓  │Step 2│ ✓  │Step 3│ ✗
   └──────┘    └──────┘    └──────┘
                  │
                  ▼
   Restart from staging (Step 2) - no need to re-extract!

3. DATA LINEAGE
   Track where data came from and how it was transformed:
   Source A ──▶ Staging Table 1 ──▶ DW Table X
   Source B ──▶ Staging Table 2 ──▶ DW Table Y

4. PARALLEL PROCESSING
   Extract to staging can happen in parallel with loading
   previous batch to warehouse`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border border-green-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-green-600">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Complete separation of concerns</li>
          <li>Better error recovery capabilities</li>
          <li>Data validation before loading</li>
          <li>Supports complex transformations</li>
          <li>Scalable for enterprise needs</li>
          <li>Full data lineage tracking</li>
          <li>Parallel processing support</li>
        </ul>
      </div>
      <div className="p-4 border border-red-500 rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-red-600">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Higher infrastructure costs</li>
          <li>More complex to implement</li>
          <li>Additional storage for staging</li>
          <li>Longer development time</li>
          <li>More components to maintain</li>
          <li>Higher latency (not real-time)</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Three-tier is the most common enterprise DW architecture</li>
        <li>Tiers: Data Sources (Bottom) → DW Server (Middle) → Presentation (Top)</li>
        <li>Staging area provides validation, recovery, and lineage benefits</li>
        <li>Middle tier contains staging, EDW, data marts, and OLAP server</li>
        <li>OLAP server can be ROLAP, MOLAP, or HOLAP</li>
        <li>Higher cost and complexity but better reliability and scalability</li>
        <li>Recommended for any serious enterprise data warehouse implementation</li>
      </ul>
    </div>
  </div>
);

export default ThreeTierArch;
