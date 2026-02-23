import React from "react";

const Dashboards: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dashboards in Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dashboards are visual displays of key metrics and KPIs that provide at-a-glance
      insights into business performance. They enable quick understanding of complex
      data through charts, graphs, and interactive visualizations.
    </p>

    {/* Dashboard Example */}
    <h2 className="text-3xl font-bold mt-8">Dashboard Layout Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Executive Sales Dashboard:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  SALES PERFORMANCE DASHBOARD          Q1 2026  [Filter ▼]      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────┐ │
│  │   REVENUE    │ │    UNITS     │ │   MARGIN     │ │  YoY   │ │
│  │   $12.5M     │ │    45,200    │ │    38.5%     │ │ +15.2% │ │
│  │   ▲ +8.3%    │ │   ▲ +12.1%   │ │   ▼ -1.2%    │ │   ↑    │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └────────┘ │
│                                                                  │
│  ┌──────────────────────────────┐ ┌───────────────────────────┐│
│  │      REVENUE BY REGION       │ │     MONTHLY TREND         ││
│  │                              │ │                           ││
│  │  North  ████████████  $5.2M  │ │     _____                 ││
│  │  South  ████████      $3.8M  │ │    /     \    /\          ││
│  │  East   ██████        $2.1M  │ │ __/       \__/  \__       ││
│  │  West   ████          $1.4M  │ │ Jan Feb Mar Apr May       ││
│  │                              │ │                           ││
│  └──────────────────────────────┘ └───────────────────────────┘│
│                                                                  │
│  ┌──────────────────────────────┐ ┌───────────────────────────┐│
│  │     TOP 5 PRODUCTS           │ │   SALES BY CHANNEL        ││
│  │                              │ │                           ││
│  │  1. Product A    $2.8M       │ │      Online    ████  45%  ││
│  │  2. Product B    $2.1M       │ │      Retail    ███   35%  ││
│  │  3. Product C    $1.9M       │ │      Partner   ██    20%  ││
│  │  4. Product D    $1.5M       │ │                           ││
│  │  5. Product E    $1.2M       │ │        [Pie Chart]        ││
│  └──────────────────────────────┘ └───────────────────────────┘│
│                                                                  │
│  Last refreshed: 01/15/2026 09:00 AM    [Refresh] [Export]      │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Dashboard Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Dashboards</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Strategic</h3>
        <p className="text-sm mb-2">Executive-level, high-level KPIs.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Monthly/quarterly views</li>
          <li>Company-wide metrics</li>
          <li>Goal tracking</li>
          <li>Trend indicators</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Operational</h3>
        <p className="text-sm mb-2">Day-to-day monitoring.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Real-time or daily data</li>
          <li>Detailed metrics</li>
          <li>Exception alerts</li>
          <li>Action-oriented</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Analytical</h3>
        <p className="text-sm mb-2">Deep-dive analysis.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Interactive exploration</li>
          <li>Drill-down capability</li>
          <li>What-if scenarios</li>
          <li>Comparative analysis</li>
        </ul>
      </div>
    </div>

    {/* Dashboard Components */}
    <h2 className="text-3xl font-bold mt-8">Dashboard Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">KPI Cards</td>
            <td className="p-3 border">Single metric with context</td>
            <td className="p-3 border">Headlines, quick status</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Line Charts</td>
            <td className="p-3 border">Trends over time</td>
            <td className="p-3 border">Time series, seasonality</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bar Charts</td>
            <td className="p-3 border">Category comparisons</td>
            <td className="p-3 border">Ranking, distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pie/Donut Charts</td>
            <td className="p-3 border">Part-to-whole</td>
            <td className="p-3 border">Composition (limit to 5 slices)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Gauges</td>
            <td className="p-3 border">Progress toward goal</td>
            <td className="p-3 border">Target achievement</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tables</td>
            <td className="p-3 border">Detailed data</td>
            <td className="p-3 border">Precise values, lists</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maps</td>
            <td className="p-3 border">Geographic data</td>
            <td className="p-3 border">Regional analysis</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Dashboard Design Principles */}
    <h2 className="text-3xl font-bold mt-8">Dashboard Design Principles</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. One Screen Rule</h3>
        <p className="text-sm">Most important information should be visible without scrolling.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Visual Hierarchy</h3>
        <p className="text-sm">Most important KPIs at top-left; details below and right.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Minimize Chart Junk</h3>
        <p className="text-sm">Remove unnecessary gridlines, borders, and decorations.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Consistent Colors</h3>
        <p className="text-sm">Use color meaningfully - red for bad, green for good, consistently.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">5. Provide Context</h3>
        <p className="text-sm">Show comparisons, targets, and trends - not just raw numbers.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dashboards provide at-a-glance views of key business metrics</li>
        <li>Types: Strategic (executives), Operational (daily), Analytical (deep-dive)</li>
        <li>Good dashboards fit on one screen without scrolling</li>
        <li>Use appropriate chart types for different data types</li>
        <li>Place most important metrics in top-left (visual hierarchy)</li>
        <li>Provide context: trends, comparisons, and targets</li>
        <li>Less is more - avoid chart junk and clutter</li>
        <li>Interactive dashboards allow users to explore data</li>
      </ul>
    </div>
  </div>
);

export default Dashboards;
