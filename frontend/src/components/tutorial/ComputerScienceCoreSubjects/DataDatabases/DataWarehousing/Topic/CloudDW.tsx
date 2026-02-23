import React from "react";

const CloudDW: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cloud Data Warehouses
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cloud data warehouses are fully managed, scalable analytical databases delivered
      as a service. They've revolutionized data warehousing by eliminating infrastructure
      management and enabling elastic scalability.
    </p>

    {/* Cloud DW Overview */}
    <h2 className="text-3xl font-bold mt-8">Cloud Data Warehouse Landscape</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Major Cloud Data Warehouses:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐    │
│   │   SNOWFLAKE   │   │   BIGQUERY    │   │   REDSHIFT    │    │
│   │               │   │               │   │               │    │
│   │  ❄️ Multi-cloud│   │  🔷 Google     │   │  🔶 AWS       │    │
│   │  Separate     │   │  Serverless   │   │  Cluster-based│    │
│   │  compute/     │   │  Pay-per-query│   │  or Serverless│    │
│   │  storage      │   │               │   │               │    │
│   └───────────────┘   └───────────────┘   └───────────────┘    │
│                                                                  │
│   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐    │
│   │    SYNAPSE    │   │  DATABRICKS   │   │   CLICKHOUSE  │    │
│   │               │   │     SQL       │   │     CLOUD     │    │
│   │  🔵 Azure     │   │  🔺 Lakehouse  │   │  ⚡ Real-time │    │
│   │  Integrated   │   │  Unified      │   │  Analytics    │    │
│   │  analytics    │   │  analytics    │   │  OLAP         │    │
│   └───────────────┘   └───────────────┘   └───────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Features */}
    <h2 className="text-3xl font-bold mt-8">Cloud DW Key Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Elastic Scalability</h3>
        <p className="text-sm">Scale compute up/down in seconds. Handle any workload without capacity planning.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Separation of Storage & Compute</h3>
        <p className="text-sm">Scale storage and compute independently. Pay only for what you use.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Zero Infrastructure Management</h3>
        <p className="text-sm">No servers to provision, patch, or maintain. Fully managed service.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Pay-Per-Use Pricing</h3>
        <p className="text-sm">Pay for storage and compute separately. Pause to stop costs.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Columnar Storage</h3>
        <p className="text-sm">Optimized for analytical queries. Automatic compression and optimization.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Concurrency Scaling</h3>
        <p className="text-sm">Handle unlimited concurrent users without performance degradation.</p>
      </div>
    </div>

    {/* Platform Comparison */}
    <h2 className="text-3xl font-bold mt-8">Platform Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Snowflake</th>
            <th className="p-3 border">BigQuery</th>
            <th className="p-3 border">Redshift</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cloud</td>
            <td className="p-3 border">AWS, Azure, GCP</td>
            <td className="p-3 border">GCP only</td>
            <td className="p-3 border">AWS only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pricing Model</td>
            <td className="p-3 border">Per-second compute</td>
            <td className="p-3 border">Per-byte queried</td>
            <td className="p-3 border">Per-hour or per-query</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scaling</td>
            <td className="p-3 border">Virtual warehouses</td>
            <td className="p-3 border">Automatic slots</td>
            <td className="p-3 border">Resize cluster</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Multi-cloud, data sharing</td>
            <td className="p-3 border">GCP users, ML integration</td>
            <td className="p-3 border">AWS ecosystem</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unique Feature</td>
            <td className="p-3 border">Zero-copy cloning</td>
            <td className="p-3 border">ML built-in (BQML)</td>
            <td className="p-3 border">Spectrum (S3 query)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-8">Cloud DW Architecture (Snowflake Example)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Snowflake Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    CLOUD SERVICES LAYER                          │
│    Query Parsing │ Optimization │ Security │ Metadata           │
├─────────────────────────────────────────────────────────────────┤
│                    COMPUTE LAYER                                 │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│   │   Virtual   │  │   Virtual   │  │   Virtual   │            │
│   │  Warehouse  │  │  Warehouse  │  │  Warehouse  │            │
│   │    (XS)     │  │    (L)      │  │    (XL)     │            │
│   │   BI Users  │  │  ETL Jobs   │  │  Data Science│           │
│   └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                  │
│   Scale independently │ Auto-suspend │ Auto-resume              │
├─────────────────────────────────────────────────────────────────┤
│                    STORAGE LAYER                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │           Cloud Object Storage (S3/Blob/GCS)             │  │
│   │                                                          │  │
│   │    Columnar │ Compressed │ Encrypted │ Replicated        │  │
│   └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Cost Optimization */}
    <h2 className="text-3xl font-bold mt-8">Cost Optimization Tips</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Right-Size Compute</h3>
        <p className="text-sm">Use smaller warehouses for smaller queries. Auto-suspend when idle.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Partition and Cluster</h3>
        <p className="text-sm">Partition tables to reduce data scanned. Clustering keys for common queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Monitor Query Costs</h3>
        <p className="text-sm">Track expensive queries. Set budgets and alerts. Review usage regularly.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Use Reserved Capacity</h3>
        <p className="text-sm">Commit to capacity for predictable workloads. 30-50% savings possible.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cloud DWs are fully managed, elastic, and pay-per-use</li>
        <li>Major players: Snowflake, BigQuery, Redshift, Synapse</li>
        <li>Separation of storage and compute enables cost efficiency</li>
        <li>No infrastructure management - focus on analytics</li>
        <li>Choose based on cloud ecosystem and requirements</li>
        <li>Monitor and optimize costs - easy to overspend</li>
        <li>Modern architectures often combine with data lakes</li>
        <li>Cloud DWs are the standard for new analytical projects</li>
      </ul>
    </div>
  </div>
);

export default CloudDW;
