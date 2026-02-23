import React from "react";

const DrillOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Drill Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Drill operations are navigation techniques in OLAP that allow users to explore
      data at different levels of detail. These include drill-down, drill-up (roll-up),
      drill-across, and drill-through operations.
    </p>

    {/* Drill Operations Overview */}
    <h2 className="text-3xl font-bold mt-8">Types of Drill Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Drill Operations Overview:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   DRILL-UP (Roll-up)           DRILL-DOWN                       │
│   ──────────────────           ──────────                       │
│                                                                  │
│       ┌─────────┐                 ┌─────────┐                   │
│       │  Year   │ ◄───────────    │  Year   │                   │
│       └────┬────┘              │  └────┬────┘                   │
│            │                   │       │                         │
│       ┌────┴────┐              │  ┌────┴────┐                   │
│       │ Quarter │ ◄────────    │  │ Quarter │                   │
│       └────┬────┘           │  │  └────┬────┘                   │
│            │                │  │       │                         │
│       ┌────┴────┐           │  │  ┌────┴────┐                   │
│       │  Month  │ ──────────┘  └─►│  Month  │                   │
│       └────┬────┘                 └────┬────┘                   │
│            │                          │                         │
│       ┌────┴────┐                 ┌────┴────┐                   │
│       │   Day   │                 │   Day   │ ◄─────────────    │
│       └─────────┘                 └─────────┘                   │
│                                                                  │
│   DRILL-ACROSS                  DRILL-THROUGH                   │
│   ────────────                  ─────────────                   │
│                                                                  │
│   ┌─────────┐    ┌─────────┐       OLAP Cube                   │
│   │ Sales   │───►│Inventory│           │                        │
│   │  Cube   │    │  Cube   │           │ Drill-through          │
│   └─────────┘    └─────────┘           ▼                        │
│                                 ┌─────────────────┐             │
│   Navigate between              │  Detail Records │             │
│   related cubes                 │  (Source Data)  │             │
│                                 └─────────────────┘             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Drill-Down */}
    <h2 className="text-3xl font-bold mt-8">Drill-Down</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Drill-down moves from summary data to detailed data by navigating down a dimension
        hierarchy or by introducing a new dimension for analysis.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Drill-Down Example - Time Hierarchy:
═══════════════════════════════════════

Level 1: Annual View
┌────────┬──────────┐
│ Year   │ Sales    │
├────────┼──────────┤
│ 2025   │ $4.2M    │
│ 2026   │ $4.8M    │
└────────┴──────────┘

↓ Drill-Down on 2026

Level 2: Quarterly View
┌────────┬──────────┐
│ Quarter│ Sales    │
├────────┼──────────┤
│ Q1     │ $1.1M    │
│ Q2     │ $1.2M    │
│ Q3     │ $1.3M    │
│ Q4     │ $1.2M    │
└────────┴──────────┘

↓ Drill-Down on Q1

Level 3: Monthly View
┌────────┬──────────┐
│ Month  │ Sales    │
├────────┼──────────┤
│ Jan    │ $350K    │
│ Feb    │ $380K    │
│ Mar    │ $370K    │
└────────┴──────────┘`}
        </pre>
      </div>
    </div>

    {/* Drill-Up */}
    <h2 className="text-3xl font-bold mt-8">Drill-Up (Roll-Up)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Drill-up (or roll-up) aggregates data by moving up the hierarchy, providing
        a more summarized view. It's the reverse of drill-down.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Drill-Up Example - Geography Hierarchy:
═══════════════════════════════════════

Level 3: City View
┌────────────┬──────────┐
│ City       │ Sales    │
├────────────┼──────────┤
│ New York   │ $500K    │
│ Los Angeles│ $450K    │
│ Chicago    │ $320K    │
│ Houston    │ $280K    │
└────────────┴──────────┘

↑ Drill-Up (aggregate by State)

Level 2: State View
┌────────────┬──────────┐
│ State      │ Sales    │
├────────────┼──────────┤
│ New York   │ $800K    │
│ California │ $750K    │
│ Texas      │ $550K    │
└────────────┴──────────┘

↑ Drill-Up (aggregate by Region)

Level 1: Region View
┌────────────┬──────────┐
│ Region     │ Sales    │
├────────────┼──────────┤
│ Northeast  │ $1.2M    │
│ West       │ $1.0M    │
│ South      │ $900K    │
└────────────┴──────────┘`}
        </pre>
      </div>
    </div>

    {/* Drill-Across */}
    <h2 className="text-3xl font-bold mt-8">Drill-Across</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Drill-across navigates between different fact tables or cubes that share
        conformed dimensions. It enables cross-subject analysis.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Drill-Across Example:
═══════════════════════════════════════

Start: Sales Cube
┌──────────┬──────────┬──────────┐
│ Product  │ Q1 Sales │ Q1 Units │
├──────────┼──────────┼──────────┤
│ Widget A │ $100K    │ 5,000    │
│ Widget B │ $80K     │ 4,000    │
└──────────┴──────────┴──────────┘

↔ Drill-Across to Inventory Cube (same Product dimension)

Related: Inventory Cube
┌──────────┬──────────┬──────────┐
│ Product  │ Q1 Stock │ Reorder  │
├──────────┼──────────┼──────────┤
│ Widget A │ 2,000    │ Yes      │
│ Widget B │ 5,000    │ No       │
└──────────┴──────────┴──────────┘

Combined Analysis:
Widget A: High sales, low inventory → Reorder needed
Widget B: Lower sales, high inventory → Overstocked`}
        </pre>
      </div>
    </div>

    {/* Drill-Through */}
    <h2 className="text-3xl font-bold mt-8">Drill-Through</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Drill-through retrieves the underlying detail records from the source data
        that contributed to an aggregated cube value.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Drill-Through Example:
═══════════════════════════════════════

OLAP Cube Cell:
┌──────────┬──────────┬──────────┐
│ Product  │ Region   │ Sales    │
├──────────┼──────────┼──────────┤
│ Widget A │ North    │ $50,000  │  ◄── Click to drill-through
└──────────┴──────────┴──────────┘

↓ Drill-Through to Detail

Source Transaction Records:
┌───────────┬────────────┬──────────┬─────────┬────────┐
│ Order_ID  │ Date       │ Customer │ Product │ Amount │
├───────────┼────────────┼──────────┼─────────┼────────┤
│ ORD-1001  │ 2026-01-05 │ Acme Co  │ Widget A│ $5,000 │
│ ORD-1023  │ 2026-01-08 │ Beta Inc │ Widget A│ $3,500 │
│ ORD-1045  │ 2026-01-12 │ Acme Co  │ Widget A│ $7,500 │
│ ORD-1067  │ 2026-01-15 │ Gamma LLC│ Widget A│ $4,000 │
│ ...       │ ...        │ ...      │ ...     │ ...    │
│ (Total)   │            │          │         │ $50,000│
└───────────┴────────────┴──────────┴─────────┴────────┘

Shows actual transactions that make up the $50,000`}
        </pre>
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Drill Operations Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Drill-Down</td>
            <td className="p-3 border">Summary → Detail</td>
            <td className="p-3 border">See more granular data</td>
            <td className="p-3 border">Year → Quarter → Month</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-Up</td>
            <td className="p-3 border">Detail → Summary</td>
            <td className="p-3 border">See aggregated view</td>
            <td className="p-3 border">City → State → Region</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-Across</td>
            <td className="p-3 border">Cube → Cube</td>
            <td className="p-3 border">Cross-subject analysis</td>
            <td className="p-3 border">Sales → Inventory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-Through</td>
            <td className="p-3 border">Cube → Source</td>
            <td className="p-3 border">See underlying records</td>
            <td className="p-3 border">$50K → Individual orders</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Drill-down:</strong> Navigate from summary to detail within a hierarchy</li>
        <li><strong>Drill-up:</strong> Aggregate data by moving up the hierarchy</li>
        <li><strong>Drill-across:</strong> Navigate between related cubes/fact tables</li>
        <li><strong>Drill-through:</strong> Access underlying source transaction data</li>
        <li>Drill operations follow dimension hierarchies</li>
        <li>Drill-across requires conformed dimensions between cubes</li>
        <li>Drill-through bridges OLAP analysis to detailed investigation</li>
        <li>These operations are fundamental to interactive data exploration</li>
      </ul>
    </div>
  </div>
);

export default DrillOperations;
