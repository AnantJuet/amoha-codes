import React from "react";

const Reporting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reporting in Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Reporting is a core BI capability that presents data in structured, formatted
      documents for business consumption. Reports transform raw data into organized
      information that supports decision-making and regulatory compliance.
    </p>

    {/* Report Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Reports</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Report Type Hierarchy:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                       REPORT TYPES                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  STANDARD REPORTS                    AD-HOC REPORTS             │
│  ─────────────────                   ──────────────             │
│  • Predefined format                 • User-created on demand   │
│  • Scheduled delivery                • Flexible parameters      │
│  • Consistent layout                 • One-time analysis        │
│  • Example: Monthly Sales            • Example: Why did X drop? │
│                                                                  │
│  OPERATIONAL REPORTS                 ANALYTICAL REPORTS         │
│  ───────────────────                 ──────────────────         │
│  • Day-to-day operations             • Trends and patterns      │
│  • Real-time or daily                • Historical comparison    │
│  • Detailed transactions             • Aggregated metrics       │
│  • Example: Daily Orders             • Example: Sales Trend     │
│                                                                  │
│  DASHBOARD REPORTS                   REGULATORY REPORTS         │
│  ─────────────────                   ──────────────────         │
│  • Visual summary                    • Compliance requirements  │
│  • Interactive                       • Strict formatting        │
│  • KPI-focused                       • Audit trail              │
│  • Example: Executive Summary        • Example: SEC Filing      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Report Components */}
    <h2 className="text-3xl font-bold mt-8">Report Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Anatomy of a Business Report:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                        REPORT HEADER                             │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  ACME Corp - Monthly Sales Report          January 2026   │  │
│  │  Generated: 01/15/2026 09:00 AM    Region: All           │  │
│  └──────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                      SUMMARY SECTION                             │
│  Total Revenue: $2.5M  │  Growth: +15%  │  Target: 98%         │
├─────────────────────────────────────────────────────────────────┤
│                        DETAIL SECTION                            │
│  ┌───────────┬───────────┬───────────┬───────────┬──────────┐ │
│  │  Product  │   Units   │  Revenue  │   Cost    │  Margin  │ │
│  ├───────────┼───────────┼───────────┼───────────┼──────────┤ │
│  │ Product A │   1,200   │  $600K    │  $400K    │   33%    │ │
│  │ Product B │   2,500   │  $1.2M    │  $700K    │   42%    │ │
│  │ Product C │     800   │  $700K    │  $500K    │   29%    │ │
│  └───────────┴───────────┴───────────┴───────────┴──────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                        FOOTER                                    │
│  Page 1 of 5  │  Confidential  │  Contact: reports@acme.com    │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Report Features */}
    <h2 className="text-3xl font-bold mt-8">Key Report Features</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Parameterization</h3>
        <p className="text-sm mb-2">Allow users to filter and customize.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Date range selection</li>
          <li>Region/department filters</li>
          <li>Product category selection</li>
          <li>Custom grouping options</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Drill-Through</h3>
        <p className="text-sm mb-2">Navigate from summary to detail.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Click summary → See details</li>
          <li>Hierarchical navigation</li>
          <li>Cross-report linking</li>
          <li>Source data access</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Scheduling</h3>
        <p className="text-sm mb-2">Automated report generation and delivery.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Daily/weekly/monthly runs</li>
          <li>Email distribution lists</li>
          <li>Multiple output formats</li>
          <li>Event-based triggers</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Export Formats</h3>
        <p className="text-sm mb-2">Multiple output options.</p>
        <ul className="list-disc list-inside text-xs">
          <li>PDF for printing</li>
          <li>Excel for analysis</li>
          <li>CSV for data exchange</li>
          <li>HTML for web viewing</li>
        </ul>
      </div>
    </div>

    {/* Report Design Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Report Design Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. Know Your Audience</h3>
        <p className="text-sm">Executives want summaries; analysts want details. Design accordingly.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Lead with Key Insights</h3>
        <p className="text-sm">Put the most important information at the top. Don't bury the lede.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Use Consistent Formatting</h3>
        <p className="text-sm">Same fonts, colors, number formats across all reports. Build recognition.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Include Context</h3>
        <p className="text-sm">Show comparisons (vs last period, vs target) to make numbers meaningful.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">5. Test with Users</h3>
        <p className="text-sm">Get feedback before final rollout. Reports are for users, not designers.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Reports transform data into structured business documents</li>
        <li>Types: standard, ad-hoc, operational, analytical, regulatory</li>
        <li>Key features: parameters, drill-through, scheduling, exports</li>
        <li>Design for your audience - executives vs analysts</li>
        <li>Lead with insights, not raw data</li>
        <li>Consistent formatting builds trust and recognition</li>
        <li>Context (comparisons, targets) makes numbers meaningful</li>
        <li>Modern trend: interactive reports replacing static PDFs</li>
      </ul>
    </div>
  </div>
);

export default Reporting;
