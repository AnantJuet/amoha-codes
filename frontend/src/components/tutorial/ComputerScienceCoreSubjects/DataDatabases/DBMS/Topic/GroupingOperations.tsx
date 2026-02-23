import React from "react";

const GroupingOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Grouping Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Grouping operations partition tuples in a relation into groups based on the values
      of one or more attributes. When combined with aggregate functions, they allow
      calculating summary statistics for each group separately.
    </p>

    <h2 className="text-3xl font-bold mt-8">GROUP BY Concept</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        The GROUP BY operation divides tuples into groups where all tuples in a group
        have the same values for the grouping attributes. Aggregate functions are then
        applied to each group independently.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Single Column Grouping</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SALES Table:
+----------+----------+--------+--------+
| Sale_ID  | Product  | Region | Amount |
+----------+----------+--------+--------+
| 1        | Laptop   | North  | 1000   |
| 2        | Phone    | South  | 500    |
| 3        | Laptop   | North  | 1200   |
| 4        | Tablet   | South  | 600    |
| 5        | Phone    | North  | 450    |
| 6        | Laptop   | South  | 1100   |
+----------+----------+--------+--------+

GROUP BY Region:
+--------+-------+----------+
| Region | COUNT | SUM      |
+--------+-------+----------+
| North  | 3     | 2650     |
| South  | 3     | 2200     |
+--------+-------+----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Column Grouping</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GROUP BY Product, Region:
+----------+--------+-------+----------+
| Product  | Region | COUNT | SUM      |
+----------+--------+-------+----------+
| Laptop   | North  | 2     | 2200     |
| Laptop   | South  | 1     | 1100     |
| Phone    | North  | 1     | 450      |
| Phone    | South  | 1     | 500      |
| Tablet   | South  | 1     | 600      |
+----------+--------+-------+----------+

SQL:
SELECT Product, Region, COUNT(*), SUM(Amount)
FROM Sales
GROUP BY Product, Region;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">HAVING Clause</h2>
    <p className="leading-relaxed mt-2">
      HAVING filters groups after aggregation, unlike WHERE which filters rows before grouping.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Find regions with total sales > 2500
SELECT Region, SUM(Amount) AS Total_Sales
FROM Sales
GROUP BY Region
HAVING SUM(Amount) > 2500;

Result:
+--------+-------------+
| Region | Total_Sales |
+--------+-------------+
| North  | 2650        |
+--------+-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Execution Order</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li><strong>FROM:</strong> Get the table(s)</li>
        <li><strong>WHERE:</strong> Filter rows</li>
        <li><strong>GROUP BY:</strong> Form groups</li>
        <li><strong>HAVING:</strong> Filter groups</li>
        <li><strong>SELECT:</strong> Apply projections and aggregates</li>
        <li><strong>ORDER BY:</strong> Sort results</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">GROUP BY Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- CORRECT: All non-aggregate columns in GROUP BY
SELECT Dept, Position, AVG(Salary)
FROM Employee
GROUP BY Dept, Position;

-- INCORRECT: Position not in GROUP BY
SELECT Dept, Position, AVG(Salary)
FROM Employee
GROUP BY Dept;  -- ERROR!

-- CORRECT: Using aggregate on non-grouped column
SELECT Dept, MAX(Position), AVG(Salary)
FROM Employee
GROUP BY Dept;  -- OK if Position aggregated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ROLLUP and CUBE (Advanced)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- ROLLUP: Hierarchical subtotals
SELECT Product, Region, SUM(Amount)
FROM Sales
GROUP BY ROLLUP(Product, Region);

-- CUBE: All possible subtotals
SELECT Product, Region, SUM(Amount)
FROM Sales
GROUP BY CUBE(Product, Region);

-- GROUPING SETS: Specific groupings
SELECT Product, Region, SUM(Amount)
FROM Sales
GROUP BY GROUPING SETS (
    (Product, Region),
    (Product),
    ()
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>GROUP BY partitions tuples into groups by attribute values</li>
        <li>Aggregates are calculated independently for each group</li>
        <li>Non-aggregated SELECT columns must be in GROUP BY</li>
        <li>HAVING filters groups after aggregation</li>
        <li>WHERE filters rows before grouping</li>
        <li>ROLLUP/CUBE provide subtotals and grand totals</li>
      </ul>
    </div>
  </div>
);

export default GroupingOperations;
