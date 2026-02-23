import React from "react";

const MDXBasics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MDX Basics
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MDX (Multidimensional Expressions) is a query language for OLAP databases, similar
      to how SQL is used for relational databases. MDX allows you to query and manipulate
      multidimensional data in OLAP cubes.
    </p>

    {/* MDX Overview */}
    <h2 className="text-3xl font-bold mt-8">MDX vs SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MDX vs SQL Comparison:
════════════════════════════════════════════════════════════════

SQL (Relational)              MDX (Multidimensional)
─────────────────             ──────────────────────

SELECT columns               SELECT measures ON COLUMNS,
FROM tables                         dimensions ON ROWS
WHERE conditions             FROM cube
GROUP BY dimensions          WHERE slicer

Returns: Rows × Columns      Returns: Cells in N-dimensions
         (2D result set)              (Multidimensional result)

Example:                     Example:
SELECT Product, SUM(Sales)   SELECT [Measures].[Sales] ON 0,
FROM FactSales               [Product].[Category].Members ON 1
GROUP BY Product             FROM [SalesCube]`}
      </pre>
    </div>

    {/* Basic MDX Structure */}
    <h2 className="text-3xl font-bold mt-8">Basic MDX Query Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MDX Query Structure:
════════════════════════════════════════════════════════════════

SELECT
    {set_expression} ON COLUMNS,    -- Axis 0 (columns)
    {set_expression} ON ROWS        -- Axis 1 (rows)
FROM
    [CubeName]
WHERE
    (slicer_expression)             -- Filter/slice (optional)


Example Query:
─────────────

SELECT
    {[Measures].[Sales Amount], [Measures].[Quantity]} ON COLUMNS,
    {[Product].[Category].Members} ON ROWS
FROM
    [Sales Cube]
WHERE
    ([Time].[Year].[2026])

Result:
                     Sales Amount    Quantity
Electronics          $1,250,000      45,000
Clothing            $890,000        62,000
Home & Garden       $675,000        38,000`}
      </pre>
    </div>

    {/* MDX Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key MDX Concepts</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Members</h3>
        <p className="text-sm mb-2">Individual items within a dimension hierarchy.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`[Product].[Category].[Electronics]  -- Specific member
[Time].[Year].[2026].[Q1].[January]  -- Hierarchy path
[Measures].[Sales Amount]            -- Measure member`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Tuples</h3>
        <p className="text-sm mb-2">Intersection of members from different dimensions, identifying a cell.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Single cell reference
([Product].[Electronics], [Time].[2026], [Measures].[Sales])

-- Returns: Sales for Electronics in 2026`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Sets</h3>
        <p className="text-sm mb-2">Collection of tuples or members, often used on axes.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`{[Product].[Electronics], [Product].[Clothing]}  -- Explicit set
[Product].[Category].Members                      -- All members
[Time].[Year].[2026].Children                     -- Children set`}
          </pre>
        </div>
      </div>
    </div>

    {/* Common MDX Functions */}
    <h2 className="text-3xl font-bold mt-8">Common MDX Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">.Members</td>
            <td className="p-3 border">All members of a level</td>
            <td className="p-3 border font-mono text-xs text-gray-900">[Product].[Category].Members</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">.Children</td>
            <td className="p-3 border">Children of a member</td>
            <td className="p-3 border font-mono text-xs text-gray-900">[Time].[2026].Children</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TopCount</td>
            <td className="p-3 border">Top N by measure</td>
            <td className="p-3 border font-mono text-xs text-gray-900">TopCount(Products, 10, Sales)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Filter</td>
            <td className="p-3 border">Filter set by condition</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Filter(Products, Sales &gt; 1000)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sum</td>
            <td className="p-3 border">Sum across set</td>
            <td className="p-3 border font-mono text-xs text-gray-900">Sum([Time].[Q1].Children, Sales)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ParallelPeriod</td>
            <td className="p-3 border">Same period in prior year</td>
            <td className="p-3 border font-mono text-xs text-gray-900">ParallelPeriod([Time].[Year], 1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* MDX Examples */}
    <h2 className="text-3xl font-bold mt-8">MDX Query Examples</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <h4 className="font-bold mb-2">Top 5 Products by Sales</h4>
        <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT
    {[Measures].[Sales Amount]} ON COLUMNS,
    TopCount(
        [Product].[Product Name].Members,
        5,
        [Measures].[Sales Amount]
    ) ON ROWS
FROM [Sales Cube]`}
        </pre>
      </div>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <h4 className="font-bold mb-2">Year-over-Year Comparison</h4>
        <pre className="whitespace-pre-wrap text-gray-900">
{`WITH
    MEMBER [Measures].[Prior Year Sales] AS
        ([Measures].[Sales], ParallelPeriod([Time].[Year], 1))
    MEMBER [Measures].[YoY Growth %] AS
        ([Measures].[Sales] - [Measures].[Prior Year Sales])
        / [Measures].[Prior Year Sales] * 100
SELECT
    {[Measures].[Sales], [Measures].[Prior Year Sales],
     [Measures].[YoY Growth %]} ON COLUMNS,
    [Product].[Category].Members ON ROWS
FROM [Sales Cube]
WHERE ([Time].[Year].[2026])`}
        </pre>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MDX is the query language for OLAP cubes (like SQL for RDBMS)</li>
        <li>Key concepts: Members, Tuples, Sets, Axes</li>
        <li>SELECT...ON COLUMNS/ROWS...FROM cube...WHERE slicer</li>
        <li>Use .Members to get all members of a hierarchy level</li>
        <li>WITH clause creates calculated members</li>
        <li>Functions like TopCount, Filter, Sum enable analysis</li>
        <li>ParallelPeriod useful for time comparisons</li>
        <li>MDX used in SSAS, Essbase, and other OLAP tools</li>
      </ul>
    </div>
  </div>
);

export default MDXBasics;
