import React from "react";

const MOLAPvsROLAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MOLAP vs ROLAP
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MOLAP (Multidimensional OLAP) and ROLAP (Relational OLAP) represent two fundamentally
      different approaches to storing and processing analytical data. Understanding their
      differences helps in choosing the right architecture for your needs.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Architectural Differences</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MOLAP vs ROLAP Data Storage:
════════════════════════════════════════════════════════════════

MOLAP - Multidimensional Array Storage:
───────────────────────────────────────

         Product
            │
     ┌──────┼──────┐
     │      │      │
     A      B      C
     │      │      │
   ┌─┴─┬──┬─┴─┬──┬─┴─┐
   │   │  │   │  │   │
  Q1  Q2 Q1  Q2 Q1  Q2  ◄── Time
   │   │  │   │  │   │
   100 150 80 120 200 180  ◄── Pre-computed values

• Data stored as multidimensional arrays
• All aggregations pre-calculated
• Direct cell access (O(1) lookup)


ROLAP - Relational Table Storage:
────────────────────────────────

Fact Table:                    Dimension Tables:
┌────────┬─────────┬────────┐  ┌─────┬─────────┐
│prod_key│time_key │ sales  │  │ key │ product │
├────────┼─────────┼────────┤  ├─────┼─────────┤
│ 1      │ Q1      │ 100    │  │ 1   │ A       │
│ 1      │ Q2      │ 150    │  │ 2   │ B       │
│ 2      │ Q1      │ 80     │  │ 3   │ C       │
│ 2      │ Q2      │ 120    │  └─────┴─────────┘
│ 3      │ Q1      │ 200    │
│ 3      │ Q2      │ 180    │
└────────┴─────────┴────────┘

• Standard relational tables
• Aggregations computed via SQL at query time
• Requires joins and GROUP BY`}
      </pre>
    </div>

    {/* Detailed Comparison */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">MOLAP</th>
            <th className="p-3 border">ROLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Storage</td>
            <td className="p-3 border">Proprietary multidimensional arrays</td>
            <td className="p-3 border">Standard relational tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Aggregations</td>
            <td className="p-3 border">Pre-computed during cube build</td>
            <td className="p-3 border">Computed at query time (or cached)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Speed</td>
            <td className="p-3 border">Very fast (sub-second)</td>
            <td className="p-3 border">Slower (seconds to minutes)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">Limited (typically GB range)</td>
            <td className="p-3 border">Very large (TB to PB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Latency</td>
            <td className="p-3 border">Batch (cube refresh required)</td>
            <td className="p-3 border">Near real-time possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sparse Data</td>
            <td className="p-3 border">Storage inefficient</td>
            <td className="p-3 border">Storage efficient</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dimension Changes</td>
            <td className="p-3 border">Requires cube rebuild</td>
            <td className="p-3 border">Immediate (just update tables)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complex Calcs</td>
            <td className="p-3 border">Excellent (built into cube)</td>
            <td className="p-3 border">Limited (SQL constraints)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Detail Data</td>
            <td className="p-3 border">Often not stored in cube</td>
            <td className="p-3 border">Always available</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Infrastructure</td>
            <td className="p-3 border">Specialized OLAP server</td>
            <td className="p-3 border">Uses existing RDBMS</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Query Processing */}
    <h2 className="text-3xl font-bold mt-8">Query Processing Comparison</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">MOLAP Query Processing</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Query: "Total sales for Product A"

Step 1: Parse MDX query
Step 2: Locate cell in cube array
Step 3: Return pre-computed value

Time: ~10 milliseconds
(Direct array lookup)`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ROLAP Query Processing</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Query: "Total sales for Product A"

Step 1: Generate SQL:
SELECT SUM(sales)
FROM fact_sales f
JOIN dim_product p
  ON f.prod_key = p.key
WHERE p.name = 'A'

Step 2: Execute on RDBMS
Step 3: Return computed result

Time: ~500 milliseconds
(Scan + Join + Aggregate)`}
          </pre>
        </div>
      </div>
    </div>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Choose MOLAP When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data volume is manageable (under ~100GB)</li>
          <li>Complex calculations are needed</li>
          <li>Sub-second response time required</li>
          <li>Data updates are batch/periodic</li>
          <li>Dense data with few null combinations</li>
          <li>Financial modeling and forecasting</li>
          <li>Write-back capability needed</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Choose ROLAP When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Large data volumes (TB to PB)</li>
          <li>Real-time or near real-time needed</li>
          <li>Sparse data with many null combinations</li>
          <li>Frequent dimension changes</li>
          <li>Detail-level data access required</li>
          <li>Using cloud data warehouse</li>
          <li>Limited budget for specialized tools</li>
        </ul>
      </div>
    </div>

    {/* Modern Context */}
    <h2 className="text-3xl font-bold mt-8">Modern Context</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        In modern cloud data warehouses (Snowflake, BigQuery, Redshift), the lines between
        MOLAP and ROLAP have blurred. These platforms offer:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Materialized Views:</strong> Pre-computed aggregations (MOLAP-like) in ROLAP</li>
        <li><strong>Columnar Storage:</strong> Efficient compression and fast aggregations</li>
        <li><strong>Massive Parallelism:</strong> Fast query execution on large data</li>
        <li><strong>Result Caching:</strong> Instant repeat query response</li>
      </ul>
      <p className="mt-4 text-sm text-gray-600">
        Many organizations now use ROLAP-based cloud warehouses with aggressive caching
        and materialized views to achieve near-MOLAP performance at scale.
      </p>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MOLAP uses multidimensional arrays with pre-computed aggregations</li>
        <li>ROLAP uses relational tables with SQL-based query processing</li>
        <li>MOLAP is faster but limited in scale; ROLAP scales but slower</li>
        <li>MOLAP requires cube rebuild for updates; ROLAP is more real-time</li>
        <li>MOLAP excels at complex calculations; ROLAP at large data volumes</li>
        <li>Modern cloud DWs blend both approaches with materialized views</li>
        <li>Choice depends on data volume, latency needs, and query complexity</li>
        <li>HOLAP provides hybrid approach combining both architectures</li>
      </ul>
    </div>
  </div>
);

export default MOLAPvsROLAP;
