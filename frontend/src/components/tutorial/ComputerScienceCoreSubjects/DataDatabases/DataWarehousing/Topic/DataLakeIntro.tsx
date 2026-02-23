import React from "react";

const DataLakeIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Data Lakes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Data Lake is a centralized repository that stores all structured and unstructured
      data at any scale. Unlike data warehouses, data lakes store raw data in its native
      format until needed for analysis, following a "schema-on-read" approach.
    </p>

    {/* Data Lake Concept */}
    <h2 className="text-3xl font-bold mt-8">What is a Data Lake?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Lake Concept:
════════════════════════════════════════════════════════════════

              ALL DATA FLOWS INTO THE LAKE
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
    ▼                   ▼                   ▼
┌───────┐          ┌───────┐          ┌───────┐
│  CSV  │          │ JSON  │          │ Video │
│ Files │          │ Logs  │          │ Files │
└───────┘          └───────┘          └───────┘
    │                   │                   │
    └───────────────────┼───────────────────┘
                        │
                        ▼
        ┌───────────────────────────────────┐
        │                                    │
        │     ~~~~~~~~~~~~~~~~~~~~~~~~       │
        │   ~~~~    DATA LAKE    ~~~~       │
        │     ~~~~~~~~~~~~~~~~~~~~~~~~       │
        │                                    │
        │   ┌────┐ ┌────┐ ┌────┐ ┌────┐    │
        │   │Raw │ │JSON│ │Logs│ │Imgs│    │
        │   │Data│ │    │ │    │ │    │    │
        │   └────┘ └────┘ └────┘ └────┘    │
        │                                    │
        │   Store everything in native       │
        │   format - schema on read          │
        │                                    │
        └───────────────────────────────────┘
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
    ▼                   ▼                   ▼
┌─────────┐       ┌─────────┐       ┌─────────┐
│Analytics│       │   ML    │       │   BI    │
│         │       │ Models  │       │ Reports │
└─────────┘       └─────────┘       └─────────┘`}
      </pre>
    </div>

    {/* Schema Comparison */}
    <h2 className="text-3xl font-bold mt-8">Schema-on-Write vs Schema-on-Read</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Schema-on-Write (DW)</h3>
        <p className="text-sm mb-2">Define structure before loading data.</p>
        <div className="bg-white p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`1. Design schema
2. Create tables
3. Transform data to fit
4. Load into warehouse
5. Query structured data`}
          </pre>
        </div>
        <p className="text-xs mt-2">Upfront effort, fast queries</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Schema-on-Read (Lake)</h3>
        <p className="text-sm mb-2">Apply structure when reading data.</p>
        <div className="bg-white p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`1. Ingest raw data
2. Store as-is
3. Apply schema at query time
4. Different schemas possible
5. Flexible analysis`}
          </pre>
        </div>
        <p className="text-xs mt-2">Fast ingestion, flexible analysis</p>
      </div>
    </div>

    {/* Data Lake Zones */}
    <h2 className="text-3xl font-bold mt-8">Data Lake Zones</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Lake Zone Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                         DATA LAKE                                │
│                                                                  │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│  │   RAW       │   │  CLEANSED   │   │  CURATED    │           │
│  │   ZONE      │   │    ZONE     │   │    ZONE     │           │
│  │             │   │             │   │             │           │
│  │ • Raw files │──▶│ • Validated │──▶│ • Analytics │           │
│  │ • Native    │   │ • Cleaned   │   │   ready     │           │
│  │   format    │   │ • Standard  │   │ • Modeled   │           │
│  │ • Any source│   │   formats   │   │ • Aggregated│           │
│  │             │   │             │   │             │           │
│  │ Bronze      │   │ Silver      │   │ Gold        │           │
│  └─────────────┘   └─────────────┘   └─────────────┘           │
│                                                                  │
│        Landing          Processing           Consumption        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Benefits and Challenges */}
    <h2 className="text-3xl font-bold mt-8">Benefits and Challenges</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-green-600">Benefits</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Store all data types</li>
          <li>Cost-effective storage</li>
          <li>Flexible analysis options</li>
          <li>Supports ML/AI workloads</li>
          <li>No upfront schema design</li>
          <li>Scales to petabytes</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2 text-red-600">Challenges</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Can become "data swamp"</li>
          <li>Governance complexity</li>
          <li>Query performance issues</li>
          <li>Data quality at scale</li>
          <li>Security and access control</li>
          <li>Requires technical skills</li>
        </ul>
      </div>
    </div>

    {/* Data Lake vs Data Swamp */}
    <h2 className="text-3xl font-bold mt-8">Data Lake vs Data Swamp</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="text-sm mb-2">Without proper governance, a data lake becomes a data swamp:</p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`DATA LAKE (Well-managed):        DATA SWAMP (Mismanaged):
─────────────────────────        ────────────────────────
• Cataloged and documented       • Unknown contents
• Quality validated              • Duplicate and stale data
• Governed access                • No access control
• Clear ownership                • Nobody owns it
• Usable by analysts             • Only creators understand
• Provides value                 • Cost center with no value

Prevention: Invest in governance, metadata, and data quality!`}
        </pre>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data lakes store raw data in native format at any scale</li>
        <li>Schema-on-read allows flexible, late-binding analysis</li>
        <li>Zones (Raw/Cleansed/Curated) organize data by quality level</li>
        <li>Cost-effective storage for all data types</li>
        <li>Enables ML/AI and advanced analytics workloads</li>
        <li>Without governance, becomes a "data swamp"</li>
        <li>Requires metadata catalog and data quality processes</li>
        <li>Often used alongside (not replacing) data warehouses</li>
      </ul>
    </div>
  </div>
);

export default DataLakeIntro;
