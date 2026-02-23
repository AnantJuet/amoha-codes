import React from "react";

const DataQuality: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Quality Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data quality refers to how well data meets the needs of its intended use.
      High-quality data is accurate, complete, consistent, and timely. Poor data
      quality leads to bad decisions, wasted resources, and eroded trust.
    </p>

    {/* Data Quality Dimensions */}
    <h2 className="text-3xl font-bold mt-8">Data Quality Dimensions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Six Dimensions of Data Quality:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   ACCURACY          COMPLETENESS        CONSISTENCY             │
│   ──────────        ────────────        ───────────             │
│   Is the data       Are all required    Is data the same        │
│   correct?          values present?     across systems?         │
│                                                                  │
│   ✓ John Smith      ✓ email: j@test.com ✓ Sales = $100K         │
│   ✗ Jon Smth        ✗ email: NULL       ✗ Sales = $100K (sys1)  │
│                                            Sales = $95K  (sys2)  │
│                                                                  │
│   TIMELINESS        UNIQUENESS          VALIDITY                │
│   ──────────        ──────────          ────────                │
│   Is data           Are there           Does data conform       │
│   up to date?       duplicates?         to business rules?      │
│                                                                  │
│   ✓ Last updated:   ✓ 1 record per      ✓ Age: 25 (0-120)      │
│     1 hour ago        customer          ✗ Age: -5 (invalid)    │
│   ✗ Last updated:   ✗ 3 duplicate                              │
│     6 months ago      customer records                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Quality Metrics */}
    <h2 className="text-3xl font-bold mt-8">Measuring Data Quality</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Dimension</th>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Formula</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Completeness</td>
            <td className="p-3 border">% Non-null values</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Filled values / Total values) × 100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Uniqueness</td>
            <td className="p-3 border">% Unique records</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Unique records / Total records) × 100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Validity</td>
            <td className="p-3 border">% Valid values</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Values passing rules / Total values) × 100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timeliness</td>
            <td className="p-3 border">Data freshness</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Current time - Last update time</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">% Matching values</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Consistent records / Total compared) × 100</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Data Quality Framework */}
    <h2 className="text-3xl font-bold mt-8">Data Quality Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Quality Management Cycle:
════════════════════════════════════════════════════════════════

       ┌──────────────────────────────────────────────────┐
       │                                                   │
       ▼                                                   │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐     │
│   ASSESS    │───▶│   ANALYZE   │───▶│   IMPROVE   │     │
│             │    │             │    │             │     │
│ • Profile   │    │ • Root cause│    │ • Fix data  │     │
│ • Measure   │    │ • Impact    │    │ • Fix process│    │
│ • Benchmark │    │ • Prioritize│    │ • Automate  │     │
└─────────────┘    └─────────────┘    └──────┬──────┘     │
                                              │            │
                                              ▼            │
                                       ┌─────────────┐    │
                                       │   MONITOR   │────┘
                                       │             │
                                       │ • Dashboards│
                                       │ • Alerts    │
                                       │ • Reports   │
                                       └─────────────┘`}
      </pre>
    </div>

    {/* Quality Rules Examples */}
    <h2 className="text-3xl font-bold mt-8">Data Quality Rules</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Column-Level Rules</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`• email LIKE '%@%.%'
• age BETWEEN 0 AND 120
• phone MATCHES '[0-9]{10}'
• status IN ('active','inactive')
• amount > 0
• NOT NULL`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cross-Table Rules</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`• FK exists in parent table
• SUM(details) = header.total
• COUNT(orders) matches report
• customer_id in both systems
• No orphan records
• Referential integrity`}
          </pre>
        </div>
      </div>
    </div>

    {/* Tools */}
    <h2 className="text-3xl font-bold mt-8">Data Quality Tools</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Great Expectations</h3>
        <p className="text-sm">Open source Python library for data validation and documentation.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">dbt Tests</h3>
        <p className="text-sm">Built-in and custom tests in dbt transformation workflows.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Monte Carlo</h3>
        <p className="text-sm">Data observability platform for automated anomaly detection.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Soda</h3>
        <p className="text-sm">Data quality checks with SQL-like syntax (SodaCL).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Informatica DQ</h3>
        <p className="text-sm">Enterprise data quality and profiling suite.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Talend DQ</h3>
        <p className="text-sm">Integrated data quality with Talend ETL tools.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data quality has six dimensions: accuracy, completeness, consistency, timeliness, uniqueness, validity</li>
        <li>Poor data quality leads to bad decisions and wasted resources</li>
        <li>Quality is a cycle: assess, analyze, improve, monitor</li>
        <li>Automate quality checks in data pipelines</li>
        <li>Define quality rules based on business requirements</li>
        <li>Data quality is everyone's responsibility</li>
        <li>Fix root causes, not just symptoms</li>
        <li>Modern tools enable "data observability" - continuous monitoring</li>
      </ul>
    </div>
  </div>
);

export default DataQuality;
