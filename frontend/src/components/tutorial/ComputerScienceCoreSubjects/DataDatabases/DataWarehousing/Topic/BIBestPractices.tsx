import React from "react";

const BIBestPractices: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      BI Best Practices
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Successful BI implementations require more than just technology. Following best
      practices in governance, design, and adoption ensures that BI delivers real
      business value and sustainable results.
    </p>

    {/* Best Practices Overview */}
    <h2 className="text-3xl font-bold mt-8">BI Success Framework</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BI Best Practices Framework:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│                    BI SUCCESS PILLARS                            │
│                                                                  │
│   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌──────────┐ │
│   │           │   │           │   │           │   │          │ │
│   │   DATA    │   │  DESIGN   │   │ ADOPTION  │   │GOVERNANCE│ │
│   │  QUALITY  │   │           │   │           │   │          │ │
│   │           │   │           │   │           │   │          │ │
│   └─────┬─────┘   └─────┬─────┘   └─────┬─────┘   └────┬─────┘ │
│         │               │               │              │        │
│   • Clean data     • User-centric  • Training     • Standards  │
│   • Single source  • Visual best   • Champions    • Security   │
│   • Documentation    practices     • Feedback     • Ownership  │
│                    • Performance   • Support      • Lifecycle  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Data Quality Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Data Quality Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. Establish Single Source of Truth</h3>
        <p className="text-sm">Define authoritative data sources for each metric. Avoid multiple conflicting versions of the same data.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Document Data Lineage</h3>
        <p className="text-sm">Track where data comes from and how it transforms. Users should understand data origins.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Implement Data Quality Checks</h3>
        <p className="text-sm">Automated tests for completeness, accuracy, and timeliness. Catch issues before they reach dashboards.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Define Business Glossary</h3>
        <p className="text-sm">Standard definitions for key terms (Customer, Revenue, Active User). Eliminate ambiguity.</p>
      </div>
    </div>

    {/* Design Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Dashboard Design Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dashboard Design Guidelines:
════════════════════════════════════════════════════════════════

DO:                              DON'T:
─────────────────────            ─────────────────────

✓ Start with user needs          ✗ Build for the sake of building
✓ One screen, no scrolling       ✗ Cram everything on one page
✓ Most important → top-left      ✗ Bury key insights at bottom
✓ Use consistent colors          ✗ Rainbow color schemes
✓ Provide context (vs target)    ✗ Show numbers without meaning
✓ Label clearly                  ✗ Assume users understand
✓ Choose right chart type        ✗ Use 3D pie charts ever
✓ Test with actual users         ✗ Design in isolation
✓ Mobile-friendly layouts        ✗ Ignore mobile users

Chart Selection Guide:
────────────────────────────────────────────────────────
Trend over time     → Line chart
Category comparison → Bar chart
Part of whole       → Pie (max 5 slices) or stacked bar
Correlation         → Scatter plot
Geographic          → Map`}
      </pre>
    </div>

    {/* Adoption Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Driving BI Adoption</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Training Program</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Role-based training tracks</li>
          <li>Hands-on workshops</li>
          <li>Video tutorials and docs</li>
          <li>Office hours for support</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Champions Network</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Identify power users per team</li>
          <li>Give them extra training</li>
          <li>Have them support colleagues</li>
          <li>Recognize their contributions</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Executive Sponsorship</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Leaders use dashboards publicly</li>
          <li>Reference data in meetings</li>
          <li>Fund ongoing investment</li>
          <li>Remove adoption blockers</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2 text-orange-800 dark:text-orange-200">Feedback Loop</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Regular user surveys</li>
          <li>Track usage analytics</li>
          <li>Iterate based on feedback</li>
          <li>Celebrate success stories</li>
        </ul>
      </div>
    </div>

    {/* Governance Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Governance Best Practices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Area</th>
            <th className="p-3 border">Best Practice</th>
            <th className="p-3 border">Why It Matters</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">Row-level security, SSO</td>
            <td className="p-3 border">Protect sensitive data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Content Certification</td>
            <td className="p-3 border">Mark trusted dashboards</td>
            <td className="p-3 border">Users know what to trust</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Naming Standards</td>
            <td className="p-3 border">Consistent naming conventions</td>
            <td className="p-3 border">Easy discovery and maintenance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lifecycle Management</td>
            <td className="p-3 border">Archive unused content</td>
            <td className="p-3 border">Keep environment clean</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Change Management</td>
            <td className="p-3 border">Version control, testing</td>
            <td className="p-3 border">Prevent breaking changes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Common Pitfalls */}
    <h2 className="text-3xl font-bold mt-8">Common Pitfalls to Avoid</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 text-red-700 dark:text-red-300">Building without user input</h3>
        <p className="text-sm">Dashboards nobody asked for go unused. Always start with user needs.</p>
      </div>
      <div className="p-4 border rounded-lg border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 text-red-700 dark:text-red-300">Ignoring data quality</h3>
        <p className="text-sm">Beautiful dashboards with bad data destroy trust. Fix data first.</p>
      </div>
      <div className="p-4 border rounded-lg border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 text-red-700 dark:text-red-300">No governance = chaos</h3>
        <p className="text-sm">Without standards, you get conflicting metrics and spreadsheet chaos.</p>
      </div>
      <div className="p-4 border rounded-lg border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 text-red-700 dark:text-red-300">Launch and forget</h3>
        <p className="text-sm">BI needs ongoing maintenance, training, and improvement.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BI success requires data quality, design, adoption, and governance</li>
        <li>Single source of truth prevents conflicting metrics</li>
        <li>Design dashboards for users, not for data teams</li>
        <li>Training and champions drive adoption</li>
        <li>Executive sponsorship signals importance</li>
        <li>Governance balances flexibility with control</li>
        <li>Iterate based on user feedback</li>
        <li>BI is an ongoing program, not a one-time project</li>
      </ul>
    </div>
  </div>
);

export default BIBestPractices;
