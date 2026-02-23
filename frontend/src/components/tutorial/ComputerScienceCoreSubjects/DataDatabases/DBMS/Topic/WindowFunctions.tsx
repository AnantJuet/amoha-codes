import React from "react";

const WindowFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Window Functions</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Window functions perform calculations across a set of rows related to the current
      row. Unlike aggregate functions, window functions don't collapse rows - they retain
      all individual rows while adding computed values.
    </p>

    <h2 className="text-3xl font-bold mt-8">Window Function Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Window Function Syntax:

function_name(expression) OVER (
    [PARTITION BY partition_expression]
    [ORDER BY sort_expression]
    [frame_clause]
)

Components:
- PARTITION BY: Divides rows into groups
- ORDER BY: Orders rows within partition
- Frame: Defines subset of partition

Example:
SELECT
    name,
    dept,
    salary,
    AVG(salary) OVER (PARTITION BY dept) as dept_avg
FROM employee;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aggregate Window Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- SUM, AVG, COUNT, MIN, MAX over windows

SELECT
    name,
    dept,
    salary,
    SUM(salary) OVER () as company_total,
    SUM(salary) OVER (PARTITION BY dept) as dept_total,
    AVG(salary) OVER (PARTITION BY dept) as dept_avg,
    COUNT(*) OVER (PARTITION BY dept) as dept_count
FROM employee;

Result:
+-------+------+--------+---------------+------------+----------+------------+
| name  | dept | salary | company_total | dept_total | dept_avg | dept_count |
+-------+------+--------+---------------+------------+----------+------------+
| John  | IT   | 60000  | 250000        | 130000     | 65000    | 2          |
| Alice | IT   | 70000  | 250000        | 130000     | 65000    | 2          |
| Bob   | HR   | 50000  | 250000        | 120000     | 60000    | 2          |
| Carol | HR   | 70000  | 250000        | 120000     | 60000    | 2          |
+-------+------+--------+---------------+------------+----------+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ranking Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ranking Functions:

ROW_NUMBER(): Unique sequential number
RANK(): Ranks with gaps for ties
DENSE_RANK(): Ranks without gaps
NTILE(n): Divides into n buckets

SELECT
    name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) as row_num,
    RANK() OVER (ORDER BY salary DESC) as rank,
    DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank,
    NTILE(3) OVER (ORDER BY salary DESC) as tertile
FROM employee;

Result (with ties):
+-------+--------+---------+------+------------+---------+
| name  | salary | row_num | rank | dense_rank | tertile |
+-------+--------+---------+------+------------+---------+
| Carol | 70000  | 1       | 1    | 1          | 1       |
| Alice | 70000  | 2       | 1    | 1          | 1       |
| John  | 60000  | 3       | 3    | 2          | 2       |
| Bob   | 50000  | 4       | 4    | 3          | 3       |
+-------+--------+---------+------+------------+---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Value Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Value Functions:

LAG(col, n): Value n rows before
LEAD(col, n): Value n rows after
FIRST_VALUE(col): First value in frame
LAST_VALUE(col): Last value in frame
NTH_VALUE(col, n): Nth value in frame

SELECT
    date,
    sales,
    LAG(sales, 1) OVER (ORDER BY date) as prev_day,
    LEAD(sales, 1) OVER (ORDER BY date) as next_day,
    sales - LAG(sales, 1) OVER (ORDER BY date) as change,
    FIRST_VALUE(sales) OVER (ORDER BY date) as first_sale
FROM daily_sales;

Result:
+------------+-------+----------+----------+--------+------------+
| date       | sales | prev_day | next_day | change | first_sale |
+------------+-------+----------+----------+--------+------------+
| 2026-01-01 | 100   | NULL     | 120      | NULL   | 100        |
| 2026-01-02 | 120   | 100      | 90       | 20     | 100        |
| 2026-01-03 | 90    | 120      | 150      | -30    | 100        |
| 2026-01-04 | 150   | 90       | NULL     | 60     | 100        |
+------------+-------+----------+----------+--------+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Frame Specification</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Frame: Subset of partition for calculation

Syntax:
ROWS/RANGE BETWEEN start AND end

Options:
- UNBOUNDED PRECEDING: From partition start
- n PRECEDING: n rows before current
- CURRENT ROW: Current row
- n FOLLOWING: n rows after current
- UNBOUNDED FOLLOWING: To partition end

Examples:
-- Running total
SUM(sales) OVER (
    ORDER BY date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
)

-- 3-day moving average
AVG(sales) OVER (
    ORDER BY date
    ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING
)

-- All rows up to current
SUM(sales) OVER (
    ORDER BY date
    ROWS UNBOUNDED PRECEDING
)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Running total
SELECT
    date,
    amount,
    SUM(amount) OVER (ORDER BY date) as running_total
FROM transactions;

-- Percentage of total
SELECT
    product,
    sales,
    ROUND(100.0 * sales / SUM(sales) OVER (), 2) as pct_total
FROM product_sales;

-- Top N per group
SELECT * FROM (
    SELECT
        dept,
        name,
        salary,
        RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as rn
    FROM employee
) ranked
WHERE rn <= 3;

-- Year-over-year comparison
SELECT
    year,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY year) as prev_year,
    ROUND(100.0 * (revenue - LAG(revenue, 1) OVER (ORDER BY year))
          / LAG(revenue, 1) OVER (ORDER BY year), 2) as yoy_growth
FROM annual_sales;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Window Functions Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Functions</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Aggregate</td>
            <td className="p-3 border">SUM, AVG, COUNT, MIN, MAX</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ranking</td>
            <td className="p-3 border">ROW_NUMBER, RANK, DENSE_RANK, NTILE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Value</td>
            <td className="p-3 border">LAG, LEAD, FIRST_VALUE, LAST_VALUE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Window functions don't collapse rows like GROUP BY</li>
        <li>OVER() defines the window scope</li>
        <li>PARTITION BY groups, ORDER BY sorts within</li>
        <li>LAG/LEAD access adjacent rows</li>
        <li>Frame clause controls calculation scope</li>
      </ul>
    </div>
  </div>
);

export default WindowFunctions;
