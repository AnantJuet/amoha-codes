import React from "react";

const DataLakeArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Lake Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data lake architecture defines the technical framework for ingesting, storing,
      processing, and serving data at scale. A well-designed architecture ensures
      data quality, security, and accessibility while controlling costs.
    </p>

    {/* Architecture Overview */}
    <h2 className="text-3xl font-bold mt-8">Data Lake Architecture Layers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Lake Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    CONSUMPTION LAYER                             │
│   SQL Analytics │ BI Tools │ ML/AI │ Data Science Notebooks    │
├─────────────────────────────────────────────────────────────────┤
│                    SERVING LAYER                                 │
│        Query Engines: Spark SQL │ Presto/Trino │ Athena        │
├─────────────────────────────────────────────────────────────────┤
│                    PROCESSING LAYER                              │
│   ┌───────────────────────┐    ┌───────────────────────┐       │
│   │     BATCH             │    │     STREAMING          │       │
│   │  Apache Spark         │    │  Apache Kafka          │       │
│   │  Apache Hive          │    │  Apache Flink          │       │
│   │  dbt                  │    │  Spark Streaming       │       │
│   └───────────────────────┘    └───────────────────────┘       │
├─────────────────────────────────────────────────────────────────┤
│                    STORAGE LAYER                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  Object Storage: S3 │ Azure Blob │ GCS                   │  │
│   │  File Formats: Parquet │ ORC │ Avro │ Delta │ Iceberg    │  │
│   ├─────────────────────────────────────────────────────────┤  │
│   │  Raw Zone │ Cleansed Zone │ Curated Zone │ Archive Zone  │  │
│   └─────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    INGESTION LAYER                               │
│   Batch: Airbyte │ Fivetran │ AWS Glue │ Custom ETL            │
│   Streaming: Kafka │ Kinesis │ Event Hubs │ Pub/Sub            │
├─────────────────────────────────────────────────────────────────┤
│                    SOURCE SYSTEMS                                │
│   Databases │ APIs │ Files │ IoT │ SaaS Apps │ Logs            │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Storage Layer Details */}
    <h2 className="text-3xl font-bold mt-8">Storage Layer</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Object Storage</h3>
        <p className="text-sm mb-2">Foundation of modern data lakes - scalable, durable, cost-effective.</p>
        <div className="grid md:grid-cols-3 gap-2 mt-2">
          <div className="bg-gray-100 text-gray-900 p-2 rounded text-xs">
            <strong>AWS S3</strong><br/>Most common choice
          </div>
          <div className="bg-gray-100 text-gray-900 p-2 rounded text-xs">
            <strong>Azure Blob</strong><br/>Microsoft ecosystem
          </div>
          <div className="bg-gray-100 text-gray-900 p-2 rounded text-xs">
            <strong>Google GCS</strong><br/>GCP integration
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">File Formats</h3>
        <p className="text-sm mb-2">Columnar formats optimize for analytics workloads.</p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full border text-xs">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Format</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-semibold">Parquet</td>
                <td className="p-2 border">Columnar</td>
                <td className="p-2 border">Analytics, Spark</td>
              </tr>
              <tr>
                <td className="p-2 border font-semibold">ORC</td>
                <td className="p-2 border">Columnar</td>
                <td className="p-2 border">Hive, high compression</td>
              </tr>
              <tr>
                <td className="p-2 border font-semibold">Avro</td>
                <td className="p-2 border">Row-based</td>
                <td className="p-2 border">Streaming, schema evolution</td>
              </tr>
              <tr>
                <td className="p-2 border font-semibold">Delta/Iceberg</td>
                <td className="p-2 border">Table format</td>
                <td className="p-2 border">ACID, time travel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    {/* Zone Architecture */}
    <h2 className="text-3xl font-bold mt-8">Zone Architecture (Medallion)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Medallion Architecture (Bronze/Silver/Gold):
════════════════════════════════════════════════════════════════

s3://data-lake/
├── bronze/               ← RAW DATA (Landing Zone)
│   ├── sales/            • Exactly as received from source
│   │   └── 2026/01/15/   • Partitioned by date
│   │       └── data.json • Original format (JSON, CSV, etc.)
│   └── logs/
│       └── app_logs/
│
├── silver/               ← CLEANSED DATA (Validated)
│   ├── sales/            • Cleaned and deduplicated
│   │   └── data.parquet  • Standardized formats (Parquet)
│   └── customers/        • Schema enforced
│       └── data.parquet  • Quality checks passed
│
├── gold/                 ← CURATED DATA (Business-ready)
│   ├── dim_customer/     • Dimensional models
│   ├── fact_sales/       • Aggregations
│   └── reports/          • BI-ready datasets
│       └── daily_sales/
│
└── archive/              ← COLD STORAGE
    └── 2025/             • Historical data
        └── raw_backup/   • Compliance retention`}
      </pre>
    </div>

    {/* Key Components */}
    <h2 className="text-3xl font-bold mt-8">Key Architecture Components</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Catalog</h3>
        <p className="text-sm">Metadata repository for discovery. AWS Glue Catalog, Apache Hive Metastore, Unity Catalog.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Compute Engine</h3>
        <p className="text-sm">Processing power. Apache Spark, Presto/Trino, serverless options.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Orchestration</h3>
        <p className="text-sm">Workflow scheduling. Apache Airflow, Dagster, Prefect, cloud-native options.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Security</h3>
        <p className="text-sm">Access control. IAM policies, encryption, audit logging.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data lake architecture has layers: ingestion, storage, processing, serving</li>
        <li>Object storage (S3, Blob, GCS) provides scalable, cheap storage</li>
        <li>Columnar formats (Parquet, ORC) optimize for analytics</li>
        <li>Medallion architecture (Bronze/Silver/Gold) organizes data by quality</li>
        <li>Data catalog is essential for discovery and governance</li>
        <li>Table formats (Delta, Iceberg) add ACID and time travel</li>
        <li>Separate compute from storage for cost optimization</li>
        <li>Security and governance must be built in from the start</li>
      </ul>
    </div>
  </div>
);

export default DataLakeArchitecture;
