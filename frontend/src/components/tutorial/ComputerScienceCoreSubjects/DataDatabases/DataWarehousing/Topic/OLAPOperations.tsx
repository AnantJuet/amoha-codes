import React from "react";

const OLAPOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OLAP Operations Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLAP operations are analytical actions performed on multidimensional data cubes.
      These operations enable users to explore data from different perspectives, navigate
      hierarchies, and discover insights through interactive analysis.
    </p>

    {/* Operations Overview */}
    <h2 className="text-3xl font-bold mt-8">Core OLAP Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP Operations Summary:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    OLAP OPERATIONS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  NAVIGATION OPERATIONS:                                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │  ROLL-UP    │  │  DRILL-DOWN │  │DRILL-THROUGH│             │
│  │  (Aggregate)│  │  (Detail)   │  │ (To source) │             │
│  │      ▲      │  │      ▼      │  │      ⬇      │             │
│  │   Year      │  │   Year      │  │    Cube     │             │
│  │    ↑       │  │    ↓       │  │      ↓      │             │
│  │  Quarter   │  │  Quarter   │  │   Detail    │             │
│  │    ↑       │  │    ↓       │  │    Data     │             │
│  │   Month    │  │   Month    │  │             │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
│                                                                  │
│  SELECTION OPERATIONS:                                           │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │   SLICE     │  │    DICE     │                               │
│  │             │  │             │                               │
│  │  ┌───┐      │  │  ┌───┐      │                               │
│  │  │░░░│ = 1  │  │  │░░░│ = n  │                               │
│  │  │░░░│ dim  │  │  │░░░│ dims │                               │
│  │  └───┘      │  │  └───┘      │                               │
│  └─────────────┘  └─────────────┘                               │
│                                                                  │
│  REORGANIZATION OPERATIONS:                                      │
│  ┌─────────────┐  ┌─────────────┐                               │
│  │   PIVOT     │  │   ROTATE    │                               │
│  │  (Rotate)   │  │   (Swap)    │                               │
│  │  X ↔ Y     │  │  Axes       │                               │
│  └─────────────┘  └─────────────┘                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Roll-up */}
    <h2 className="text-3xl font-bold mt-8">Roll-up (Drill-up)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Roll-up aggregates data by climbing up a concept hierarchy or by reducing dimensions.
        It provides a more summarized view of the data.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Roll-up Example:
═══════════════════════════════════════

Before (Monthly data):
┌─────────┬─────────┬─────────┐
│ Month   │ Product │ Sales   │
├─────────┼─────────┼─────────┤
│ Jan     │ A       │ 10,000  │
│ Feb     │ A       │ 12,000  │
│ Mar     │ A       │ 11,000  │
│ Jan     │ B       │ 8,000   │
│ Feb     │ B       │ 9,000   │
│ Mar     │ B       │ 10,000  │
└─────────┴─────────┴─────────┘

After Roll-up (to Quarterly):
┌─────────┬─────────┬─────────┐
│ Quarter │ Product │ Sales   │
├─────────┼─────────┼─────────┤
│ Q1      │ A       │ 33,000  │
│ Q1      │ B       │ 27,000  │
└─────────┴─────────┴─────────┘`}
        </pre>
      </div>
    </div>

    {/* Drill-down */}
    <h2 className="text-3xl font-bold mt-8">Drill-down</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Drill-down navigates from less detailed data to more detailed data. It can be
        done by descending a hierarchy or adding a new dimension.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Drill-down Example:
═══════════════════════════════════════

Before (Quarterly data):
┌─────────┬─────────┐
│ Quarter │ Sales   │
├─────────┼─────────┤
│ Q1      │ 60,000  │
└─────────┴─────────┘

After Drill-down (to Monthly):
┌─────────┬─────────┐
│ Month   │ Sales   │
├─────────┼─────────┤
│ Jan     │ 18,000  │
│ Feb     │ 21,000  │
│ Mar     │ 21,000  │
└─────────┴─────────┘

Further Drill-down (add Product dimension):
┌─────────┬─────────┬─────────┐
│ Month   │ Product │ Sales   │
├─────────┼─────────┼─────────┤
│ Jan     │ A       │ 10,000  │
│ Jan     │ B       │ 8,000   │
│ Feb     │ A       │ 12,000  │
│ ...     │ ...     │ ...     │
└─────────┴─────────┴─────────┘`}
        </pre>
      </div>
    </div>

    {/* Slice and Dice */}
    <h2 className="text-3xl font-bold mt-8">Slice and Dice</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Slice</h3>
        <p className="text-sm mb-2">Selects a single value from one dimension, creating a subcube.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Slice: Region = "North"

3D Cube → 2D Slice
(Time x Product x Region)
    → (Time x Product)
       for North only`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Dice</h3>
        <p className="text-sm mb-2">Selects values from multiple dimensions, creating a subcube.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Dice:
  Region IN (North, South)
  Time IN (Q1, Q2)
  Product = "Electronics"

Creates smaller subcube
with filtered data`}
          </pre>
        </div>
      </div>
    </div>

    {/* Pivot */}
    <h2 className="text-3xl font-bold mt-8">Pivot (Rotate)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Pivot rotates the data axes to provide an alternative view of the data.
        It changes which dimensions appear on rows vs columns.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Pivot Example:
═══════════════════════════════════════

Before (Product on rows):
              Q1      Q2      Q3
Product A   10,000  12,000  11,000
Product B    8,000   9,000  10,000

After Pivot (Time on rows):
              Product A  Product B
Q1              10,000      8,000
Q2              12,000      9,000
Q3              11,000     10,000

Same data, different perspective!`}
        </pre>
      </div>
    </div>

    {/* Operations Summary */}
    <h2 className="text-3xl font-bold mt-8">Operations Quick Reference</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Result</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Roll-up</td>
            <td className="p-3 border">Aggregate up hierarchy</td>
            <td className="p-3 border">Less detail, summarized</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-down</td>
            <td className="p-3 border">Navigate down hierarchy</td>
            <td className="p-3 border">More detail, granular</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Slice</td>
            <td className="p-3 border">Filter one dimension</td>
            <td className="p-3 border">Reduced dimensionality</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dice</td>
            <td className="p-3 border">Filter multiple dimensions</td>
            <td className="p-3 border">Smaller subcube</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pivot</td>
            <td className="p-3 border">Rotate axes</td>
            <td className="p-3 border">Different perspective</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-through</td>
            <td className="p-3 border">Access source detail</td>
            <td className="p-3 border">Underlying transactions</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Roll-up:</strong> Aggregates data up a hierarchy (Month → Quarter → Year)</li>
        <li><strong>Drill-down:</strong> Shows more detail down a hierarchy (Year → Quarter → Month)</li>
        <li><strong>Slice:</strong> Filters on one dimension value (Region = "North")</li>
        <li><strong>Dice:</strong> Filters on multiple dimension values</li>
        <li><strong>Pivot:</strong> Rotates the view by swapping row/column dimensions</li>
        <li><strong>Drill-through:</strong> Accesses underlying detail data</li>
        <li>These operations enable interactive data exploration</li>
        <li>All operations work on the multidimensional cube structure</li>
      </ul>
    </div>
  </div>
);

export default OLAPOperations;
