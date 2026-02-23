import React from "react";

const SliceDice: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Slice and Dice Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Slice and dice are OLAP operations used to filter and select specific portions
      of a multidimensional cube. Slice selects on one dimension, while dice creates
      a subcube by selecting on multiple dimensions.
    </p>

    {/* Slice Operation */}
    <h2 className="text-3xl font-bold mt-8">Slice Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Slice Operation:
════════════════════════════════════════════════════════════════

Original 3D Cube (Time × Product × Region):

                 Product
                    │
          ┌─────────┼─────────┐
          │         │         │
         A          B         C
          │         │         │
       ───┼─────────┼─────────┼───
      Q1 │▓▓▓▓▓▓▓▓▓│░░░░░░░░░│▒▒▒▒▒▒▒▒▒│
       ───┼─────────┼─────────┼─── Time
      Q2 │▓▓▓▓▓▓▓▓▓│░░░░░░░░░│▒▒▒▒▒▒▒▒▒│
       ───┼─────────┼─────────┼───
         North    South     East      ◄── Region


SLICE: Region = "North"
───────────────────────

Takes a single "slice" through the cube:

          Product
             │
   ┌─────────┼─────────┐
   │         │         │
   A         B         C
   │         │         │
───┼─────────┼─────────┼───
Q1 │  $10K   │  $15K   │  $8K    │
───┼─────────┼─────────┼─── Time
Q2 │  $12K   │  $18K   │  $9K    │
───┼─────────┼─────────┼───

Result: 2D view (Time × Product) for North region only`}
      </pre>
    </div>

    {/* Slice Examples */}
    <h2 className="text-3xl font-bold mt-8">Slice Examples</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Slice by Time</h3>
        <p className="text-sm mb-2">Time = "Q1 2026"</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Shows all Products × Regions
for Q1 2026 only

         North  South  East
Prod A   $10K   $8K    $12K
Prod B   $15K   $11K   $14K`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Slice by Product</h3>
        <p className="text-sm mb-2">Product = "Electronics"</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Shows all Time × Regions
for Electronics only

        North  South  East
Q1      $50K   $45K   $55K
Q2      $52K   $48K   $58K`}
          </pre>
        </div>
      </div>
    </div>

    {/* Dice Operation */}
    <h2 className="text-3xl font-bold mt-8">Dice Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dice Operation:
════════════════════════════════════════════════════════════════

Original 3D Cube:
                 Product (A, B, C, D)
                    │
          ┌─────────┼─────────┬─────────┐
          A         B         C         D
          │         │         │         │
      ────┼─────────┼─────────┼─────────┼──── Time (Q1-Q4)
       Q1 │         │         │         │
       Q2 │         │         │         │
       Q3 │         │         │         │
       Q4 │         │         │         │
      ────┼─────────┼─────────┼─────────┼────
          N    S    N    S    N    S    N    S  ◄── Region (N,S,E,W)


DICE: Multiple dimension filters
─────────────────────────────────

Conditions:
  • Product IN (A, B)
  • Time IN (Q1, Q2)
  • Region IN (North, South)

Result: Smaller subcube

         Product (A, B only)
            │
     ┌──────┼──────┐
     A      │      B
     │      │      │
  ───┼──────┼──────┼─── Time (Q1, Q2 only)
  Q1 │ N:$10│ N:$15│
     │ S:$8 │ S:$11│
  ───┼──────┼──────┼───
  Q2 │ N:$12│ N:$18│
     │ S:$9 │ S:$14│
  ───┼──────┼──────┼───

Result: Subcube with 2×2×2 = 8 cells (vs original many more)`}
      </pre>
    </div>

    {/* Dice Examples */}
    <h2 className="text-3xl font-bold mt-8">Dice Examples</h2>
    <div className="p-4 border rounded-lg mt-4">
      <h3 className="font-bold mb-2">Business Scenario Dice</h3>
      <p className="text-sm mb-4">Analyze premium products in top regions during holiday season.</p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Dice Conditions:
═══════════════════════════════════════

Product Category: Premium, Luxury
Region: Northeast, West Coast
Time: Q4 2025, Q4 2026
Customer Segment: Gold, Platinum

Result: Focused subcube for analysis

                    Premium    Luxury
                    ────────   ───────
Northeast │ Gold    │ $250K   │ $180K │
          │ Platinum│ $320K   │ $275K │
          ├─────────┼─────────┼───────┤
West Coast│ Gold    │ $280K   │ $195K │
          │ Platinum│ $350K   │ $290K │

(Showing Q4 2026 slice of the diced cube)`}
        </pre>
      </div>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Slice vs Dice Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Slice</th>
            <th className="p-3 border">Dice</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Dimensions Filtered</td>
            <td className="p-3 border">One dimension</td>
            <td className="p-3 border">Multiple dimensions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Filter Type</td>
            <td className="p-3 border">Single value selection</td>
            <td className="p-3 border">Multiple value selections</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Result Shape</td>
            <td className="p-3 border">Reduces dimensionality by 1</td>
            <td className="p-3 border">Smaller cube (same dimensions)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Visual Analogy</td>
            <td className="p-3 border">Cutting a slice of bread</td>
            <td className="p-3 border">Cutting a smaller cube from larger</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Example</td>
            <td className="p-3 border">Region = "North"</td>
            <td className="p-3 border">Region IN (N,S), Time IN (Q1,Q2)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SQL Equivalents */}
    <h2 className="text-3xl font-bold mt-8">SQL Equivalents</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Slice in SQL</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Slice: Region = 'North'
SELECT
    time_period,
    product,
    SUM(sales) as sales
FROM fact_sales
WHERE region = 'North'
GROUP BY
    time_period,
    product;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Dice in SQL</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Dice: Multiple filters
SELECT
    time_period,
    product,
    region,
    SUM(sales) as sales
FROM fact_sales
WHERE region IN ('North','South')
  AND time_period IN ('Q1','Q2')
  AND product IN ('A','B')
GROUP BY
    time_period,product,region;`}
          </pre>
        </div>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Slice:</strong> Filters on ONE dimension value, reduces dimensionality</li>
        <li><strong>Dice:</strong> Filters on MULTIPLE dimensions, creates smaller subcube</li>
        <li>Slice is like cutting a single slice from the cube</li>
        <li>Dice is like cutting a smaller cube from the larger cube</li>
        <li>Both operations create focused views for specific analysis</li>
        <li>Slice typically produces a 2D result from a 3D cube</li>
        <li>Dice maintains all dimensions but with fewer members</li>
        <li>These are fundamental filtering operations in OLAP analysis</li>
      </ul>
    </div>
  </div>
);

export default SliceDice;
