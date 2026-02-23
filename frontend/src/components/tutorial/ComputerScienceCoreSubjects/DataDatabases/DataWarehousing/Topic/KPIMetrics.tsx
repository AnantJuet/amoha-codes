import React from "react";

const KPIMetrics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      KPIs and Metrics
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Key Performance Indicators (KPIs) and metrics are quantifiable measures used to
      evaluate business performance. KPIs are the vital few metrics that matter most
      for achieving strategic objectives.
    </p>

    {/* KPI vs Metric */}
    <h2 className="text-3xl font-bold mt-8">KPI vs Metric</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Understanding the Difference:
════════════════════════════════════════════════════════════════

                 ALL METRICS
    ┌───────────────────────────────────────┐
    │                                       │
    │   Website visits                      │
    │   Email open rate                     │
    │   Page load time                      │
    │   Social media followers              │
    │   Support ticket count                │
    │   Database query time                 │
    │                                       │
    │      ┌─────────────────────────┐      │
    │      │         KPIs            │      │
    │      │   (Key Metrics)         │      │
    │      │                         │      │
    │      │   • Revenue growth      │      │
    │      │   • Customer retention  │      │
    │      │   • Net Promoter Score  │      │
    │      │   • Conversion rate     │      │
    │      │                         │      │
    │      └─────────────────────────┘      │
    │                                       │
    └───────────────────────────────────────┘

METRIC: Any measurable value
KPI:    A metric that directly ties to strategic goals

"All KPIs are metrics, but not all metrics are KPIs"`}
      </pre>
    </div>

    {/* SMART KPIs */}
    <h2 className="text-3xl font-bold mt-8">SMART KPIs</h2>
    <div className="grid md:grid-cols-5 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-center">S</h3>
        <p className="text-sm font-semibold text-center">Specific</p>
        <p className="text-xs text-center mt-2">Clear and unambiguous</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-center">M</h3>
        <p className="text-sm font-semibold text-center">Measurable</p>
        <p className="text-xs text-center mt-2">Quantifiable with data</p>
      </div>
      <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
        <h3 className="font-bold text-lg mb-2 text-center">A</h3>
        <p className="text-sm font-semibold text-center">Achievable</p>
        <p className="text-xs text-center mt-2">Realistic targets</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-center">R</h3>
        <p className="text-sm font-semibold text-center">Relevant</p>
        <p className="text-xs text-center mt-2">Aligned to strategy</p>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-center">T</h3>
        <p className="text-sm font-semibold text-center">Time-bound</p>
        <p className="text-xs text-center mt-2">Has a deadline</p>
      </div>
    </div>

    {/* Common KPIs by Department */}
    <h2 className="text-3xl font-bold mt-8">Common KPIs by Function</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Common KPIs</th>
            <th className="p-3 border">Formula/Definition</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold" rowSpan={3}>Sales</td>
            <td className="p-3 border">Revenue</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Total sales amount</td>
          </tr>
          <tr>
            <td className="p-3 border">Conversion Rate</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Deals Won / Total Leads</td>
          </tr>
          <tr>
            <td className="p-3 border">Avg Deal Size</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Revenue / Number of Deals</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold" rowSpan={3}>Marketing</td>
            <td className="p-3 border">CAC</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Marketing Spend / New Customers</td>
          </tr>
          <tr>
            <td className="p-3 border">Marketing ROI</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Revenue - Cost) / Cost × 100</td>
          </tr>
          <tr>
            <td className="p-3 border">Lead Quality</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Qualified Leads / Total Leads</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold" rowSpan={3}>Customer Success</td>
            <td className="p-3 border">NPS</td>
            <td className="p-3 border font-mono text-xs text-gray-900">%Promoters - %Detractors</td>
          </tr>
          <tr>
            <td className="p-3 border">Churn Rate</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Lost Customers / Total Customers</td>
          </tr>
          <tr>
            <td className="p-3 border">CSAT</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Satisfied / Total Responses × 100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold" rowSpan={2}>Finance</td>
            <td className="p-3 border">Gross Margin</td>
            <td className="p-3 border font-mono text-xs text-gray-900">(Revenue - COGS) / Revenue</td>
          </tr>
          <tr>
            <td className="p-3 border">Operating Ratio</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Operating Expenses / Revenue</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* KPI Hierarchy */}
    <h2 className="text-3xl font-bold mt-8">KPI Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`KPI Cascade from Strategy to Operations:
════════════════════════════════════════════════════════════════

                    ┌───────────────────────┐
                    │   STRATEGIC KPIs      │  (Board/CEO)
                    │   Revenue Growth: 20% │
                    │   Market Share: 15%   │
                    └───────────┬───────────┘
                                │
            ┌───────────────────┼───────────────────┐
            ▼                   ▼                   ▼
    ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
    │ TACTICAL KPIs │   │ TACTICAL KPIs │   │ TACTICAL KPIs │
    │ (VP Level)    │   │ (VP Level)    │   │ (VP Level)    │
    │               │   │               │   │               │
    │ Sales Target  │   │ Marketing ROI │   │ NPS Score     │
    │ $50M          │   │ 300%          │   │ 50+           │
    └───────┬───────┘   └───────────────┘   └───────────────┘
            │
    ┌───────┴───────┐
    ▼               ▼
┌─────────────┐ ┌─────────────┐
│OPERATIONAL  │ │OPERATIONAL  │  (Team Level)
│KPIs         │ │KPIs         │
│             │ │             │
│Calls/Day:50 │ │Demos/Week:20│
│Win Rate:25% │ │Follow-up:24h│
└─────────────┘ └─────────────┘

Strategic KPIs cascade down to operational metrics!`}
      </pre>
    </div>

    {/* Leading vs Lagging */}
    <h2 className="text-3xl font-bold mt-8">Leading vs Lagging Indicators</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Leading Indicators</h3>
        <p className="text-sm mb-2">Predict future performance</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>Sales pipeline value</li>
          <li>Website traffic</li>
          <li>Employee training hours</li>
          <li>Lead generation rate</li>
        </ul>
        <p className="text-xs mt-2 italic">Actionable - you can influence these</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Lagging Indicators</h3>
        <p className="text-sm mb-2">Measure past outcomes</p>
        <ul className="list-disc list-inside text-xs space-y-1">
          <li>Quarterly revenue</li>
          <li>Customer churn rate</li>
          <li>Net profit margin</li>
          <li>Customer satisfaction score</li>
        </ul>
        <p className="text-xs mt-2 italic">Results - confirm if actions worked</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>KPIs are the vital few metrics tied to strategic goals</li>
        <li>All KPIs are metrics, but not all metrics are KPIs</li>
        <li>Good KPIs are SMART: Specific, Measurable, Achievable, Relevant, Time-bound</li>
        <li>KPIs cascade from strategic to tactical to operational</li>
        <li>Balance leading indicators (predictive) with lagging (outcome)</li>
        <li>Different departments have different relevant KPIs</li>
        <li>Fewer KPIs is better - focus on what matters most</li>
        <li>KPIs should drive action, not just measurement</li>
      </ul>
    </div>
  </div>
);

export default KPIMetrics;
