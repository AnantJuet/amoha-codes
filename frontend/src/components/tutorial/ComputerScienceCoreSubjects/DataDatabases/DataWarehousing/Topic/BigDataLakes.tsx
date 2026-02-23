import React from "react";

const BigDataLakes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Big Data & Data Lakes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Big Data and Data Lakes represent the evolution of data management to handle
      massive volumes, variety, and velocity of data. This section explores modern
      architectures that complement traditional data warehousing.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Big Data & Data Lakes - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Introduction to Big Data                                   │
│      └── What is Big Data and why it matters                    │
│                                                                  │
│   2. Characteristics of Big Data (5 Vs)                         │
│      └── Volume, Velocity, Variety, Veracity, Value             │
│                                                                  │
│   3. Big Data Technologies                                      │
│      └── Hadoop, Spark, Kafka, and ecosystem tools              │
│                                                                  │
│   4. Hadoop Ecosystem                                           │
│      └── HDFS, MapReduce, Hive, Pig, and more                  │
│                                                                  │
│   5. Introduction to Data Lakes                                 │
│      └── Centralized repository for all data types              │
│                                                                  │
│   6. Data Lake Architecture                                     │
│      └── Zones, layers, and design patterns                     │
│                                                                  │
│   7. Data Warehouse vs Data Lake                                │
│      └── Comparing approaches and use cases                     │
│                                                                  │
│   8. Data Lakehouse                                             │
│      └── Best of both worlds - DW + Data Lake                   │
│                                                                  │
│   9. Cloud Data Warehousing                                     │
│      └── Snowflake, BigQuery, Redshift, Synapse                │
│                                                                  │
│  10. Modern Data Stack                                          │
│      └── Current trends and future directions                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Evolution Diagram */}
    <h2 className="text-3xl font-bold mt-8">Evolution of Data Platforms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Platform Evolution:
════════════════════════════════════════════════════════════════

Traditional DW          Data Lake              Data Lakehouse
(1990s-2010s)          (2010s)                (2020s+)
─────────────          ─────────              ──────────────

┌─────────────┐      ┌─────────────┐      ┌─────────────────────┐
│ Structured  │      │     Raw     │      │    Unified Layer    │
│   Data      │      │    Data     │      │                     │
│   Only      │      │  (Any Type) │      │  ┌───────────────┐  │
│             │      │             │      │  │ Delta/Iceberg │  │
│ ┌─────────┐ │      │ ┌─────────┐ │      │  │ Table Format  │  │
│ │ Schema  │ │      │ │ Schema  │ │      │  └───────────────┘  │
│ │on Write │ │      │ │on Read  │ │      │                     │
│ └─────────┘ │      │ └─────────┘ │      │  ┌───────┐┌───────┐ │
│             │      │             │      │  │  DW   ││ Lake  │ │
│ SQL Only    │      │ Spark/Code  │      │  │ SQL   ││  ML   │ │
└─────────────┘      └─────────────┘      │  └───────┘└───────┘ │
                                          └─────────────────────┘
     │                    │                        │
     ▼                    ▼                        ▼
  BI Reports         ML/AI Training          Everything!
  Dashboards         Data Science            BI + ML + Streaming`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Big Data 5 Vs</h3>
        <p className="text-sm"><strong>Volume</strong> (scale), <strong>Velocity</strong> (speed), <strong>Variety</strong> (types), <strong>Veracity</strong> (quality), <strong>Value</strong> (business worth)</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Data Lake</h3>
        <p className="text-sm">Centralized repository storing raw data in native format. Schema-on-read approach. Ideal for data science and ML.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">Data Lakehouse</h3>
        <p className="text-sm">Combines data lake flexibility with data warehouse reliability. ACID transactions on data lakes.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">Cloud Data Warehouse</h3>
        <p className="text-sm">Fully managed, elastic DW services. Snowflake, BigQuery, Redshift lead the market.</p>
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Quick Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Data Warehouse</th>
            <th className="p-3 border">Data Lake</th>
            <th className="p-3 border">Lakehouse</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Type</td>
            <td className="p-3 border">Structured</td>
            <td className="p-3 border">All types</td>
            <td className="p-3 border">All types</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">On write</td>
            <td className="p-3 border">On read</td>
            <td className="p-3 border">Both</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">BI, Reporting</td>
            <td className="p-3 border">ML, Data Science</td>
            <td className="p-3 border">Unified analytics</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Start with <strong>"Introduction to Big Data"</strong> and the <strong>5 Vs</strong> to understand
        the landscape. Explore <strong>Big Data Technologies</strong> and <strong>Hadoop</strong> for foundational
        knowledge. Then learn about <strong>Data Lakes</strong> and compare with traditional DW. Finally,
        study <strong>Data Lakehouse</strong> and <strong>Cloud Data Warehousing</strong> for modern approaches.
      </p>
    </div>
  </div>
);

export default BigDataLakes;
