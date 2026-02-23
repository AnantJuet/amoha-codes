import React from "react";

const DWBenefits: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Benefits of Data Warehousing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data warehousing provides numerous benefits to organizations by enabling better decision-making,
      improving data quality, and providing a unified view of enterprise data. Understanding these
      benefits helps justify investments in data warehouse infrastructure.
    </p>

    {/* Benefits Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Benefits Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Benefits:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────┐
│                    BUSINESS BENEFITS                         │
├─────────────────────────────────────────────────────────────┤
│  ✓ Better Decision Making    ✓ Single Source of Truth       │
│  ✓ Improved Data Quality     ✓ Historical Analysis          │
│  ✓ Competitive Advantage     ✓ Faster Query Performance     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                   TECHNICAL BENEFITS                         │
├─────────────────────────────────────────────────────────────┤
│  ✓ Reduced Load on OLTP      ✓ Optimized for Analytics      │
│  ✓ Data Consistency          ✓ Scalable Architecture        │
│  ✓ Security & Access Control ✓ Data Integration             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                 ORGANIZATIONAL BENEFITS                      │
├─────────────────────────────────────────────────────────────┤
│  ✓ Cross-Department Insights ✓ Regulatory Compliance        │
│  ✓ Self-Service Analytics    ✓ Cost Savings Over Time       │
│  ✓ Standardized Metrics      ✓ Enhanced Collaboration       │
└─────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Detailed Benefits */}
    <h2 className="text-3xl font-bold mt-8">1. Better Decision Making</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Data warehouses enable data-driven decision making by providing accurate, timely, and
        comprehensive information to decision makers at all levels.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Access to historical trends and patterns</li>
        <li>Real-time dashboards and KPI monitoring</li>
        <li>What-if analysis and forecasting capabilities</li>
        <li>Evidence-based strategic planning</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Single Source of Truth</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Without Data Warehouse:
────────────────────────────────────────────────────────────────
Department A: "Revenue is $10M"  ← From System A
Department B: "Revenue is $9.5M" ← From System B
Department C: "Revenue is $10.2M"← From System C

    ↓ Conflict! Which number is correct?

With Data Warehouse:
────────────────────────────────────────────────────────────────
                    ┌─────────────────┐
                    │  DATA WAREHOUSE │
                    │  Revenue: $10M  │ ← Single, authoritative
                    └─────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
   Department A      Department B      Department C
   "Revenue: $10M"   "Revenue: $10M"   "Revenue: $10M"

    ✓ Consistent reporting across organization`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Improved Data Quality</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        The ETL process cleanses, transforms, and validates data before loading into the warehouse.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Data Quality Improvements:</h4>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Duplicate removal</li>
            <li>Missing value handling</li>
            <li>Format standardization</li>
            <li>Referential integrity checks</li>
          </ul>
        </div>
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Quality Metrics:</h4>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Completeness</li>
            <li>Accuracy</li>
            <li>Consistency</li>
            <li>Timeliness</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Historical Analysis</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Unlike operational systems that focus on current data, data warehouses maintain years of
        historical data enabling trend analysis and pattern recognition.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Historical Analysis Capabilities:
────────────────────────────────────────────────────────────────
• Year-over-Year comparisons
• Seasonal pattern identification
• Customer behavior trends
• Product lifecycle analysis
• Market trend forecasting
• Long-term performance tracking`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Faster Query Performance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Performance Comparison:
════════════════════════════════════════════════════════════════

Query: "Get total sales by region for last 5 years"

On Operational Database:
├── Joins across multiple normalized tables
├── Competes with transaction processing
├── Query time: 30-60 minutes
└── May cause system slowdown

On Data Warehouse:
├── Pre-aggregated data available
├── Optimized star schema design
├── Query time: 5-30 seconds
└── No impact on operational systems

Why Faster?
────────────────────────────────────────────────────────────────
1. Denormalized schema (fewer joins)
2. Pre-computed aggregates
3. Columnar storage for analytics
4. Dedicated hardware/resources
5. Optimized indexing strategies
6. Parallel query processing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Reduced OLTP System Load</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        By offloading analytical queries to the data warehouse, operational systems can focus on
        transaction processing without being slowed by complex reports.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Operational systems remain fast and responsive</li>
        <li>No resource contention between OLTP and analytics</li>
        <li>Better SLAs for both operational and analytical workloads</li>
        <li>Improved overall system stability</li>
      </ul>
    </div>

    {/* ROI and Business Value */}
    <h2 className="text-3xl font-bold mt-8">Return on Investment (ROI)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit Area</th>
            <th className="p-3 border">Impact</th>
            <th className="p-3 border">Typical ROI</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Faster Reporting</td>
            <td className="p-3 border">Reduced analyst time</td>
            <td className="p-3 border">20-40% productivity gain</td>
          </tr>
          <tr>
            <td className="p-3 border">Better Decisions</td>
            <td className="p-3 border">Revenue increase</td>
            <td className="p-3 border">5-15% improvement</td>
          </tr>
          <tr>
            <td className="p-3 border">Operational Efficiency</td>
            <td className="p-3 border">Cost reduction</td>
            <td className="p-3 border">10-25% savings</td>
          </tr>
          <tr>
            <td className="p-3 border">Customer Insights</td>
            <td className="p-3 border">Retention improvement</td>
            <td className="p-3 border">15-30% better retention</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data warehouses provide a single source of truth eliminating data silos</li>
        <li>ETL process improves data quality through cleansing and validation</li>
        <li>Historical data enables trend analysis and forecasting</li>
        <li>Query performance is significantly faster due to optimized design</li>
        <li>Operational systems benefit from reduced analytical query load</li>
        <li>ROI comes from better decisions, faster reporting, and operational efficiency</li>
        <li>Enables self-service analytics reducing IT dependency</li>
      </ul>
    </div>
  </div>
);

export default DWBenefits;
