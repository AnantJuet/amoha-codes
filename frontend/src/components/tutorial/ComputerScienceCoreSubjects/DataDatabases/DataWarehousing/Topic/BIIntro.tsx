import React from "react";

const BIIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Business Intelligence (BI) refers to the technologies, practices, and strategies
      used to collect, integrate, analyze, and present business data. BI transforms
      raw data into actionable insights that drive informed business decisions.
    </p>

    {/* BI Overview */}
    <h2 className="text-3xl font-bold mt-8">What is Business Intelligence?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Intelligence Ecosystem:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                     DATA SOURCES                                 │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│   │Databases │  │Files/ERP │  │Web Data  │  │External  │       │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│        └─────────────┴─────────────┴─────────────┘             │
│                           │                                     │
│                           ▼                                     │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              DATA WAREHOUSE / DATA LAKE              │      │
│   │        Integrated, Historical, Subject-Oriented      │      │
│   └─────────────────────────┬───────────────────────────┘      │
│                             │                                   │
│                             ▼                                   │
│   ┌─────────────────────────────────────────────────────┐      │
│   │                  BI PLATFORM                         │      │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │      │
│   │  │Reporting│ │Dashboard│ │Analytics│ │  OLAP   │   │      │
│   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │      │
│   └─────────────────────────┬───────────────────────────┘      │
│                             │                                   │
│                             ▼                                   │
│   ┌─────────────────────────────────────────────────────┐      │
│   │                   INSIGHTS                           │      │
│   │     Decisions │ Actions │ Strategy │ Performance     │      │
│   └─────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘

BI transforms DATA → INFORMATION → KNOWLEDGE → DECISIONS`}
      </pre>
    </div>

    {/* BI Components */}
    <h2 className="text-3xl font-bold mt-8">Core BI Components</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Collection</h3>
        <p className="text-sm">Gather data from multiple sources: databases, files, APIs, IoT devices.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Integration</h3>
        <p className="text-sm">ETL processes that cleanse, transform, and load data into warehouse.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Analysis</h3>
        <p className="text-sm">OLAP, data mining, statistical analysis, and predictive modeling.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Presentation</h3>
        <p className="text-sm">Reports, dashboards, visualizations, and alerts.</p>
      </div>
    </div>

    {/* BI Value Chain */}
    <h2 className="text-3xl font-bold mt-8">BI Value Chain</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`From Data to Decisions:
════════════════════════════════════════════════════════════════

 DATA          INFORMATION       KNOWLEDGE        WISDOM
   │               │                │               │
   ▼               ▼                ▼               ▼
┌──────┐       ┌──────┐         ┌──────┐       ┌──────┐
│ Raw  │──────▶│Context│───────▶│Insight│─────▶│Action│
│Facts │       │Added  │         │Derived│      │Taken │
└──────┘       └──────┘         └──────┘       └──────┘

Example:
─────────────────────────────────────────────────────────
DATA:         Sales = $1.2M this quarter
INFORMATION:  Sales up 15% vs last quarter, best in 2 years
KNOWLEDGE:    New marketing campaign drove the increase
WISDOM:       Increase marketing budget for next quarter`}
      </pre>
    </div>

    {/* BI Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Business Intelligence</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Faster Decisions</h3>
        <p className="text-sm">Real-time data access enables quick, informed decisions.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Operational Efficiency</h3>
        <p className="text-sm">Identify bottlenecks and optimize processes.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Competitive Advantage</h3>
        <p className="text-sm">Data-driven insights provide market edge.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold mb-2 text-orange-800 dark:text-orange-200">Revenue Growth</h3>
        <p className="text-sm">Better understand customers and market trends.</p>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold mb-2 text-red-800 dark:text-red-200">Risk Reduction</h3>
        <p className="text-sm">Identify and mitigate risks proactively.</p>
      </div>
      <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
        <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Single Source of Truth</h3>
        <p className="text-sm">Consistent data across the organization.</p>
      </div>
    </div>

    {/* BI Users */}
    <h2 className="text-3xl font-bold mt-8">BI Users</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">User Type</th>
            <th className="p-3 border">Typical Use</th>
            <th className="p-3 border">BI Tools Used</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Executives</td>
            <td className="p-3 border">Strategic KPIs, company-wide performance</td>
            <td className="p-3 border">Executive dashboards, scorecards</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Managers</td>
            <td className="p-3 border">Department metrics, team performance</td>
            <td className="p-3 border">Operational reports, drill-down</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Analysts</td>
            <td className="p-3 border">Deep analysis, ad-hoc queries</td>
            <td className="p-3 border">OLAP, data exploration, SQL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Business Users</td>
            <td className="p-3 border">Self-service reporting, daily metrics</td>
            <td className="p-3 border">Self-service BI, pre-built reports</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BI transforms raw data into actionable business insights</li>
        <li>Core components: data collection, integration, analysis, presentation</li>
        <li>BI sits on top of data warehouses and data sources</li>
        <li>Value chain: Data → Information → Knowledge → Decisions</li>
        <li>Benefits include faster decisions, efficiency, and competitive advantage</li>
        <li>Different users (executives to analysts) have different BI needs</li>
        <li>Modern BI emphasizes self-service and real-time analytics</li>
        <li>BI is essential for data-driven organizations</li>
      </ul>
    </div>
  </div>
);

export default BIIntro;
