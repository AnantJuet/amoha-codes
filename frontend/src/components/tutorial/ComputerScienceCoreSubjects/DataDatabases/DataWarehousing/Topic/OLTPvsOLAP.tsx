import React from "react";

const OLTPvsOLAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OLTP vs OLAP
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing) represent
      two fundamentally different approaches to data processing. OLTP handles day-to-day
      transactions while OLAP focuses on complex analytical queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is OLTP?</h2>
    <p className="leading-relaxed">
      OLTP (Online Transaction Processing) systems manage transactional data in real-time.
      They are optimized for insert, update, and delete operations that occur in day-to-day
      business operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP System Example:

Banking Transaction:
+------------------+
|   ATM Machine    |
+------------------+
        |
        v
+------------------+      +------------------+
| Transaction      | ---> | OLTP Database    |
| - Withdraw $100  |      | - Update Balance |
| - Account: 12345 |      | - Log Transaction|
+------------------+      +------------------+

Characteristics:
- Fast, short transactions
- High volume of small operations
- Real-time processing
- Current data state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">What is OLAP?</h2>
    <p className="leading-relaxed">
      OLAP (Online Analytical Processing) systems are designed for complex queries and
      analysis of large volumes of historical data. They support decision-making by
      providing multidimensional analysis capabilities.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP System Example:

Business Analysis Query:
"Show total sales by region, product category,
 and quarter for the last 3 years"

+------------------+
|   OLAP Cube      |
+------------------+
      / | \\
     /  |  \\
    v   v   v
[Time] [Region] [Product]
   |      |        |
   Q1     North    Electronics
   Q2     South    Clothing
   Q3     East     Food
   Q4     West     ...

Result: Multidimensional analysis across
        all combinations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">OLTP</th>
            <th className="p-3 border">OLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary Purpose</td>
            <td className="p-3 border">Transaction processing</td>
            <td className="p-3 border">Analytical processing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">Normalized (3NF, BCNF)</td>
            <td className="p-3 border">Denormalized (Star, Snowflake)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Type</td>
            <td className="p-3 border">Current, operational</td>
            <td className="p-3 border">Historical, consolidated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Complexity</td>
            <td className="p-3 border">Simple, predefined</td>
            <td className="p-3 border">Complex, ad-hoc</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume per Query</td>
            <td className="p-3 border">Small (few records)</td>
            <td className="p-3 border">Large (millions of records)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operations</td>
            <td className="p-3 border">INSERT, UPDATE, DELETE</td>
            <td className="p-3 border">SELECT (mostly read-only)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Time</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Seconds to minutes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Clerks, operators, customers</td>
            <td className="p-3 border">Analysts, managers, executives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Database Size</td>
            <td className="p-3 border">GBs to small TBs</td>
            <td className="p-3 border">TBs to PBs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP Query Examples:
----------------------
-- Get customer details
SELECT * FROM customers WHERE id = 12345;

-- Insert new order
INSERT INTO orders (customer_id, product_id, quantity)
VALUES (12345, 'SKU001', 2);

-- Update inventory
UPDATE inventory SET quantity = quantity - 2
WHERE product_id = 'SKU001';


OLAP Query Examples:
----------------------
-- Total sales by region and quarter
SELECT
    region,
    QUARTER(order_date) as quarter,
    SUM(sales_amount) as total_sales,
    AVG(sales_amount) as avg_sale
FROM fact_sales
JOIN dim_region ON fact_sales.region_id = dim_region.id
JOIN dim_time ON fact_sales.time_id = dim_time.id
WHERE YEAR(order_date) BETWEEN 2023 AND 2025
GROUP BY region, QUARTER(order_date)
ORDER BY region, quarter;

-- Product category performance trend
SELECT
    category,
    year,
    SUM(quantity) as units_sold,
    SUM(revenue) as total_revenue,
    SUM(revenue) / SUM(quantity) as avg_price
FROM sales_cube
GROUP BY ROLLUP(category, year);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Flow: OLTP to OLAP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Flow Architecture:

+-------------+    +-------------+    +-------------+
| OLTP System |    | OLTP System |    | OLTP System |
|  (Sales)    |    |   (CRM)     |    | (Inventory) |
+------+------+    +------+------+    +------+------+
       |                  |                  |
       v                  v                  v
       +------------------+------------------+
                          |
                    ETL Process
                    (Nightly/Daily)
                          |
                          v
                 +-----------------+
                 |  Data Warehouse |
                 |     (OLAP)      |
                 +-----------------+
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
    +-----------+   +-----------+   +-----------+
    | Sales     |   | Marketing |   | Finance   |
    | Data Mart |   | Data Mart |   | Data Mart |
    +-----------+   +-----------+   +-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Each</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">OLTP</th>
            <th className="p-3 border">OLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Order processing</td>
            <td className="p-3 border text-green-600 font-bold">Best Fit</td>
            <td className="p-3 border text-red-600">Not Suitable</td>
          </tr>
          <tr>
            <td className="p-3 border">Sales trend analysis</td>
            <td className="p-3 border text-red-600">Not Suitable</td>
            <td className="p-3 border text-green-600 font-bold">Best Fit</td>
          </tr>
          <tr>
            <td className="p-3 border">Customer lookup</td>
            <td className="p-3 border text-green-600 font-bold">Best Fit</td>
            <td className="p-3 border text-yellow-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Executive dashboard</td>
            <td className="p-3 border text-red-600">Not Suitable</td>
            <td className="p-3 border text-green-600 font-bold">Best Fit</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OLTP is optimized for transactions; OLAP is optimized for analysis</li>
        <li>OLTP uses normalized schema; OLAP uses denormalized schema</li>
        <li>OLTP handles current data; OLAP handles historical data</li>
        <li>Data flows from OLTP systems to OLAP systems via ETL</li>
        <li>Both systems are essential for modern enterprise data architecture</li>
        <li>OLTP ensures data integrity; OLAP provides business insights</li>
      </ul>
    </div>
  </div>
);

export default OLTPvsOLAP;
