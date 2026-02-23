import React from "react";

const DataLakehouse: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Lakehouse Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Data Lakehouse combines the best features of data lakes and data warehouses
      into a single architecture. It provides the flexibility and cost benefits of
      lakes with the performance and governance of warehouses.
    </p>

    {/* Lakehouse Concept */}
    <h2 className="text-3xl font-bold mt-8">What is a Data Lakehouse?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Lakehouse = Data Lake + Data Warehouse:
════════════════════════════════════════════════════════════════

     DATA LAKE               DATA LAKEHOUSE           DATA WAREHOUSE
         │                         │                        │
         ▼                         ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ ~~~~~~~~~~~~    │      │ ~~~~~~~~~~~~    │      │ ┌───┬───┬───┐   │
│~~~  Raw Data ~~~│  +   │~~~            ~~~│  =   │ │   │   │   │   │
│~~~ (flexible)~~~│      │~~~ ┌───┬───┐ ~~~│      │ ├───┼───┼───┤   │
│ ~~~~~~~~~~~~    │      │~~~ │   │   │ ~~~│      │ │   │   │   │   │
│                 │      │~~~ └───┴───┘ ~~~│      │ └───┴───┴───┘   │
│ • Any format    │      │ ~~~~~~~~~~~~    │      │                 │
│ • Schema later  │      │                 │      │ • Structured    │
│ • Cheap storage │      │ • Any format    │      │ • Schema first  │
│ • ML workloads  │      │ • ACID trans    │      │ • Fast queries  │
│                 │      │ • Time travel   │      │ • BI optimized  │
│                 │      │ • BI & ML       │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘

Lakehouse: Lake storage + Warehouse features (via Delta/Iceberg)`}
      </pre>
    </div>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Lakehouse Key Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ACID Transactions</h3>
        <p className="text-sm">Reliable updates, deletes, and concurrent writes - not possible in traditional lakes.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Schema Enforcement</h3>
        <p className="text-sm">Enforce data quality with schema validation while maintaining flexibility.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Time Travel</h3>
        <p className="text-sm">Query historical versions of data for auditing, debugging, and ML reproducibility.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Unified Analytics</h3>
        <p className="text-sm">Single platform for BI, SQL analytics, data science, and ML.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Open Formats</h3>
        <p className="text-sm">Built on open formats (Parquet + Delta/Iceberg) - no vendor lock-in.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cost Efficiency</h3>
        <p className="text-sm">Cheap cloud storage (S3/Blob) + optimized compute = lower TCO.</p>
      </div>
    </div>

    {/* Table Formats */}
    <h2 className="text-3xl font-bold mt-8">Lakehouse Table Formats</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Table Formats Enable Lakehouse:
════════════════════════════════════════════════════════════════

                   DELTA LAKE        APACHE ICEBERG      APACHE HUDI
                   (Databricks)      (Netflix)           (Uber)
                   ────────────      ──────────────      ───────────

ACID Support       ✓ Yes             ✓ Yes               ✓ Yes
Time Travel        ✓ Yes             ✓ Yes               ✓ Yes
Schema Evolution   ✓ Yes             ✓ Yes               ✓ Yes
Partition Evolution ✓ Limited        ✓ Full              ✓ Limited
Streaming Support  ✓ Excellent       ✓ Good              ✓ Excellent
Cloud Warehouse    Databricks        Snowflake, BigQuery  AWS, Azure
Open Source        ✓ Yes             ✓ Yes               ✓ Yes

These formats add "warehouse features" to files on object storage!

How it works:
┌──────────────────────────────────────────────────────────┐
│  Object Storage (S3/Blob/GCS)                            │
│  └── table_name/                                         │
│      ├── _delta_log/         ← Transaction log          │
│      │   ├── 000000.json     ← Commit metadata          │
│      │   └── 000001.json                                 │
│      ├── part-00000.parquet  ← Data files               │
│      └── part-00001.parquet                              │
└──────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Lakehouse Architecture */}
    <h2 className="text-3xl font-bold mt-8">Lakehouse Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lakehouse Reference Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                      CONSUMERS                                   │
│   BI Tools │ SQL Analysts │ Data Scientists │ ML Engineers      │
├─────────────────────────────────────────────────────────────────┤
│                    QUERY ENGINES                                 │
│        Spark SQL │ Presto/Trino │ Databricks SQL                │
├─────────────────────────────────────────────────────────────────┤
│                  METADATA & GOVERNANCE                           │
│      Unity Catalog │ Hive Metastore │ AWS Glue Catalog          │
├─────────────────────────────────────────────────────────────────┤
│                    TABLE FORMAT                                  │
│           Delta Lake │ Apache Iceberg │ Apache Hudi             │
├─────────────────────────────────────────────────────────────────┤
│                    FILE FORMAT                                   │
│                   Parquet │ ORC │ Avro                          │
├─────────────────────────────────────────────────────────────────┤
│                    OBJECT STORAGE                                │
│              AWS S3 │ Azure Blob │ Google GCS                   │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* When to Use Lakehouse */}
    <h2 className="text-3xl font-bold mt-8">When to Use Lakehouse</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Good Fit</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Unified BI and ML platform</li>
          <li>Organizations with both workloads</li>
          <li>Cost-conscious environments</li>
          <li>Teams wanting open formats</li>
          <li>Need for data versioning</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Consider Alternatives</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Pure BI workloads → Traditional DW faster</li>
          <li>Existing DW investment → May not need to switch</li>
          <li>Simple needs → Complexity may not be worth it</li>
          <li>Strict SLAs → Traditional DW more predictable</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lakehouse combines lake flexibility with warehouse reliability</li>
        <li>Enabled by table formats: Delta Lake, Iceberg, Hudi</li>
        <li>Provides ACID transactions on object storage</li>
        <li>Time travel enables versioning and auditing</li>
        <li>Single platform for BI, SQL, and ML workloads</li>
        <li>Built on open formats - no vendor lock-in</li>
        <li>Cost-effective: cheap storage + optimized compute</li>
        <li>Growing adoption but still maturing technology</li>
      </ul>
    </div>
  </div>
);

export default DataLakehouse;
