import React from "react";

const PivotRotate: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Pivot and Rotate Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Pivot (or rotate) operations reorganize the multidimensional view by swapping
      dimensions between rows and columns. This enables viewing the same data from
      different perspectives without changing the underlying data.
    </p>

    {/* Pivot Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding Pivot</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pivot Operation Concept:
════════════════════════════════════════════════════════════════

BEFORE PIVOT (Products on Rows, Time on Columns):

                     Q1        Q2        Q3        Q4
              ┌──────────┬──────────┬──────────┬──────────┐
   Product A  │  $100K   │  $120K   │  $115K   │  $130K   │
              ├──────────┼──────────┼──────────┼──────────┤
   Product B  │  $80K    │  $95K    │  $90K    │  $110K   │
              ├──────────┼──────────┼──────────┼──────────┤
   Product C  │  $150K   │  $165K   │  $170K   │  $180K   │
              └──────────┴──────────┴──────────┴──────────┘


          ↻ PIVOT (Rotate 90°)


AFTER PIVOT (Time on Rows, Products on Columns):

                  Product A   Product B   Product C
              ┌──────────┬──────────┬──────────┐
       Q1     │  $100K   │  $80K    │  $150K   │
              ├──────────┼──────────┼──────────┤
       Q2     │  $120K   │  $95K    │  $165K   │
              ├──────────┼──────────┼──────────┤
       Q3     │  $115K   │  $90K    │  $170K   │
              ├──────────┼──────────┼──────────┤
       Q4     │  $130K   │  $110K   │  $180K   │
              └──────────┴──────────┴──────────┘

SAME DATA - DIFFERENT PERSPECTIVE!`}
      </pre>
    </div>

    {/* Pivot Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Pivot Operations</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Row-Column Swap</h3>
        <p className="text-sm mb-2">Exchange row dimension with column dimension.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Before:                    After:
        Time→                      Product→
Product  Q1  Q2              Time    A    B
   ↓                           ↓
   A    100 120              Q1     100   80
   B     80  95              Q2     120   95`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Add Dimension to View</h3>
        <p className="text-sm mb-2">Move a dimension from filters to rows or columns.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Before: Region filter = "North"
        Time→
Product  Q1    Q2
   A    100   120

After: Region added as column
                    North           South
              Q1      Q2      Q1      Q2
Product A    100     120      80      95`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Move Dimension to Filter</h3>
        <p className="text-sm mb-2">Remove a dimension from display and make it a filter.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Before: Full view
              North   South
Product  Q1    100      80
         Q2    120      95

After: Region = "North" (filter)
Product  Q1    Q2
   A    100   120`}
          </pre>
        </div>
      </div>
    </div>

    {/* 3D Rotation */}
    <h2 className="text-3xl font-bold mt-8">3D Cube Rotation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`3D Cube Rotation:
════════════════════════════════════════════════════════════════

Original View (Time × Product, Region as Pages):

         North                    South
       ┌─────────────┐          ┌─────────────┐
       │     A    B  │          │     A    B  │
       │ Q1 100   80 │          │ Q1  80   60 │
       │ Q2 120   95 │          │ Q2  95   75 │
       └─────────────┘          └─────────────┘


Rotate: Bring Region to columns, Time to pages:

         Q1                       Q2
       ┌─────────────┐          ┌─────────────┐
       │   North South│          │   North South│
       │ A  100   80  │          │ A  120   95  │
       │ B   80   60  │          │ B   95   75  │
       └─────────────┘          └─────────────┘


Rotate Again: Bring Product to columns, Region to rows:

         Q1                       Q2
       ┌─────────────┐          ┌─────────────┐
       │     A    B  │          │     A    B  │
       │North 100  80│          │North 120  95│
       │South  80  60│          │South  95  75│
       └─────────────┘          └─────────────┘`}
      </pre>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">When to Use Pivot</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Compare Across Categories</h3>
        <p className="text-sm">Pivot products to columns to easily compare their performance side by side.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Trend Analysis</h3>
        <p className="text-sm">Pivot time to rows to see trends going down the page chronologically.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Report Formatting</h3>
        <p className="text-sm">Arrange dimensions to match required report layout or user preference.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Screen Real Estate</h3>
        <p className="text-sm">Put dimension with fewer members on columns for better fit.</p>
      </div>
    </div>

    {/* Pivot in Excel/BI Tools */}
    <h2 className="text-3xl font-bold mt-8">Pivot in Common Tools</h2>
    <div className="p-4 border rounded-lg mt-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold mb-2">Excel Pivot Tables</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Drag fields between Rows/Columns</li>
            <li>Move to Filter area</li>
            <li>Rearrange field order</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Tableau</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Swap Rows and Columns button</li>
            <li>Drag dimensions between shelves</li>
            <li>Ctrl+W keyboard shortcut</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Power BI</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Drag fields in visualization</li>
            <li>Matrix visual row/column areas</li>
            <li>Edit interactions</li>
          </ul>
        </div>
      </div>
    </div>

    {/* SQL Pivot */}
    <h2 className="text-3xl font-bold mt-8">SQL PIVOT Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL PIVOT Example:
════════════════════════════════════════════════════════════════

-- Original data (normalized)
SELECT product, quarter, sales FROM sales_data;
-- Returns: Product A, Q1, 100 / Product A, Q2, 120 / etc.

-- PIVOT to get quarters as columns
SELECT product, [Q1], [Q2], [Q3], [Q4]
FROM sales_data
PIVOT (
    SUM(sales)
    FOR quarter IN ([Q1], [Q2], [Q3], [Q4])
) AS pvt;

-- Result:
-- Product   Q1    Q2    Q3    Q4
-- A        100   120   115   130
-- B         80    95    90   110`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Pivot rotates data to view from different perspectives</li>
        <li>Same underlying data, just reorganized display</li>
        <li>Row-column swap is the most common pivot operation</li>
        <li>Dimensions can be moved between rows, columns, and filters</li>
        <li>3D cubes can be rotated to show different "faces"</li>
        <li>Use pivot to compare, analyze trends, or format reports</li>
        <li>Most BI tools provide drag-and-drop pivot functionality</li>
        <li>SQL PIVOT clause converts rows to columns</li>
      </ul>
    </div>
  </div>
);

export default PivotRotate;
