import React from "react";

const DWHistory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      History and Evolution of Data Warehousing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data warehousing has evolved significantly over the past few decades, transforming from simple
      data storage systems to sophisticated analytical platforms. Understanding this evolution helps
      appreciate modern data warehousing concepts and anticipate future trends.
    </p>

    {/* Timeline */}
    <h2 className="text-3xl font-bold mt-8">Evolution Timeline</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehousing Evolution Timeline:
════════════════════════════════════════════════════════════════

1960s-1970s: Early Database Systems
├── Hierarchical and Network databases
├── IMS (Information Management System) by IBM
└── Data stored in siloed systems

1980s: Relational Databases Emerge
├── Edgar Codd's relational model gains adoption
├── SQL becomes standard query language
├── Oracle, DB2, and other RDBMS emerge
└── Decision Support Systems (DSS) introduced

1988-1990: Birth of Data Warehousing
├── Barry Devlin and Paul Murphy coin "Business Data Warehouse"
├── Bill Inmon publishes first articles on data warehousing
└── Concept of subject-oriented, integrated data emerges

1992: Bill Inmon's Seminal Work
├── "Building the Data Warehouse" published
├── Inmon recognized as "Father of Data Warehousing"
├── Top-down approach (Enterprise Data Warehouse first)
└── 3NF normalized data warehouse design

1996: Ralph Kimball's Approach
├── "The Data Warehouse Toolkit" published
├── Bottom-up approach (Data Marts first)
├── Dimensional modeling (Star Schema)
└── Bus Architecture concept introduced

2000s: Business Intelligence Era
├── OLAP tools become mainstream
├── ETL tools mature (Informatica, DataStage)
├── Self-service BI emerges
└── Data warehouse appliances introduced

2010s: Big Data and Cloud
├── Hadoop ecosystem for big data
├── Cloud data warehouses (Redshift, BigQuery)
├── Data Lakes concept emerges
└── Real-time analytics demand grows

2020s: Modern Data Stack
├── Cloud-native warehouses (Snowflake, Databricks)
├── Data Lakehouse architecture
├── ELT replaces traditional ETL
├── Data Mesh and decentralized ownership
└── AI/ML integration with warehouses`}
      </pre>
    </div>

    {/* Key Pioneers */}
    <h2 className="text-3xl font-bold mt-8">Key Pioneers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pioneer</th>
            <th className="p-3 border">Contribution</th>
            <th className="p-3 border">Approach</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bill Inmon</td>
            <td className="p-3 border">Father of Data Warehousing, defined core principles</td>
            <td className="p-3 border">Top-Down (EDW first, then Data Marts)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ralph Kimball</td>
            <td className="p-3 border">Dimensional modeling, Star Schema design</td>
            <td className="p-3 border">Bottom-Up (Data Marts first, conformed dimensions)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Barry Devlin</td>
            <td className="p-3 border">Co-coined "Business Data Warehouse" term at IBM</td>
            <td className="p-3 border">Enterprise-focused integration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Edgar Codd</td>
            <td className="p-3 border">Relational model foundation, OLAP rules</td>
            <td className="p-3 border">12 rules for OLAP systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Inmon vs Kimball */}
    <h2 className="text-3xl font-bold mt-8">Inmon vs Kimball Approach</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Inmon (Top-Down)</th>
            <th className="p-3 border">Kimball (Bottom-Up)</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Starting Point</td>
            <td className="p-3 border">Enterprise Data Warehouse</td>
            <td className="p-3 border">Individual Data Marts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">3NF Normalized</td>
            <td className="p-3 border">Dimensional (Star/Snowflake)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation Time</td>
            <td className="p-3 border">Longer initial setup</td>
            <td className="p-3 border">Faster time to first delivery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Large enterprises, complex integration</td>
            <td className="p-3 border">Quick wins, departmental needs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Redundancy</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Some redundancy in conformed dimensions</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Generations */}
    <h2 className="text-3xl font-bold mt-8">Generations of Data Warehousing</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Generation 1: Offline Operational Databases</h3>
        <p className="text-sm">Data copied from operational systems for reporting. No integration or transformation.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Generation 2: Offline Data Warehouse</h3>
        <p className="text-sm">Separate analytical database with ETL processes. Batch updates, typically nightly.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Generation 3: Real-Time Data Warehouse</h3>
        <p className="text-sm">Near real-time updates using CDC and streaming. Active data warehousing.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Generation 4: Cloud & Integrated Analytics</h3>
        <p className="text-sm">Cloud-native, elastic scaling, integrated ML/AI capabilities, data lakehouse architecture.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Bill Inmon is known as the "Father of Data Warehousing" (1992)</li>
        <li>Ralph Kimball introduced dimensional modeling and star schema (1996)</li>
        <li>Inmon's approach is top-down (EDW first), Kimball's is bottom-up (Data Marts first)</li>
        <li>Cloud data warehouses emerged in 2010s, revolutionizing the industry</li>
        <li>Modern trends include Data Lakehouse, Data Mesh, and real-time analytics</li>
        <li>Evolution driven by growing data volumes and need for faster insights</li>
      </ul>
    </div>
  </div>
);

export default DWHistory;
