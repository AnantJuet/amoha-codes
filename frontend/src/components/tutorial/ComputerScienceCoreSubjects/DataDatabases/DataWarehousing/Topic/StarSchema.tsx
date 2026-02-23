import React from "react";

const StarSchema: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Star Schema
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Star Schema is the simplest and most widely used data warehouse schema design.
      It consists of a central fact table connected to multiple dimension tables,
      resembling a star when visualized. This design optimizes query performance for
      analytical workloads.
    </p>

    <h2 className="text-3xl font-bold mt-8">Structure Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Star Schema Structure:

                    +------------------+
                    |   dim_customer   |
                    +------------------+
                    | customer_id (PK) |
                    | name             |
                    | city             |
                    | state            |
                    +--------+---------+
                             |
+----------------+           |           +----------------+
|  dim_product   |           |           |   dim_time     |
+----------------+           |           +----------------+
| product_id(PK) |           |           | time_id (PK)   |
| name           |           |           | date           |
| category       |           |           | month          |
| brand          |           |           | quarter        |
+-------+--------+           |           | year           |
        |                    |           +-------+--------+
        |    +---------------+---------------+   |
        |    |                               |   |
        +--->+       fact_sales              +<--+
             +-------------------------------+
             | time_id (FK)                  |
             | product_id (FK)              |
             | customer_id (FK)             |
             | store_id (FK)                |
             +-------------------------------+
             | quantity                      |
             | sales_amount                  |
             | discount                      |
             | profit                        |
             +---------------+---------------+
                             |
                    +--------+---------+
                    |    dim_store     |
                    +------------------+
                    | store_id (PK)    |
                    | store_name       |
                    | location         |
                    | region           |
                    +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components</h2>

    <h3 className="text-2xl font-semibold mt-6">Fact Table</h3>
    <p className="leading-relaxed">
      The central table containing measurable, quantitative data (facts) and foreign keys
      to dimension tables. Fact tables are typically very large with millions or billions of rows.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fact Table Example: fact_sales

+----------+------------+-------------+----------+----------+--------+----------+--------+
| time_id  | product_id | customer_id | store_id | quantity | amount | discount | profit |
+----------+------------+-------------+----------+----------+--------+----------+--------+
| 20260113 | P001       | C12345      | S01      | 2        | 199.98 | 10.00    | 39.98  |
| 20260113 | P002       | C12345      | S01      | 1        | 49.99  | 0.00     | 15.00  |
| 20260113 | P001       | C67890      | S02      | 3        | 299.97 | 15.00    | 54.97  |
+----------+------------+-------------+----------+----------+--------+----------+--------+

Types of Facts:
- Additive: Can be summed across all dimensions (e.g., sales_amount)
- Semi-additive: Can be summed across some dimensions (e.g., inventory balance)
- Non-additive: Cannot be summed (e.g., percentages, ratios)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Dimension Tables</h3>
    <p className="leading-relaxed">
      Tables containing descriptive attributes that provide context to the facts.
      Dimension tables are typically wide with many columns but fewer rows.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dimension Table Examples:

dim_product:
+------------+-----------------+-------------+--------+-------+
| product_id | product_name    | category    | brand  | price |
+------------+-----------------+-------------+--------+-------+
| P001       | Laptop Pro 15"  | Electronics | TechCo | 99.99 |
| P002       | Wireless Mouse  | Accessories | TechCo | 49.99 |
| P003       | USB-C Cable     | Accessories | GearUp | 19.99 |
+------------+-----------------+-------------+--------+-------+

dim_time:
+----------+------------+-------+---------+------+-------------+
| time_id  | date       | month | quarter | year | day_of_week |
+----------+------------+-------+---------+------+-------------+
| 20260113 | 2026-01-13 | Jan   | Q1      | 2026 | Monday      |
| 20260114 | 2026-01-14 | Jan   | Q1      | 2026 | Tuesday     |
+----------+------------+-------+---------+------+-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Star Schema</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Denormalized</td>
            <td className="p-3 border">Dimension tables contain redundant data for faster queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Simple Joins</td>
            <td className="p-3 border">Only one join level between fact and dimension tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Easy to Understand</td>
            <td className="p-3 border">Intuitive structure for business users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fast Query Performance</td>
            <td className="p-3 border">Optimized for read-heavy analytical queries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Queries</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Total sales by product category and quarter
SELECT
    p.category,
    t.quarter,
    t.year,
    SUM(f.sales_amount) as total_sales,
    COUNT(*) as num_transactions
FROM fact_sales f
JOIN dim_product p ON f.product_id = p.product_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2026
GROUP BY p.category, t.quarter, t.year
ORDER BY t.year, t.quarter, total_sales DESC;

-- Top 10 customers by revenue
SELECT
    c.name,
    c.city,
    SUM(f.sales_amount) as total_revenue,
    AVG(f.sales_amount) as avg_order_value
FROM fact_sales f
JOIN dim_customer c ON f.customer_id = c.customer_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2026
GROUP BY c.customer_id, c.name, c.city
ORDER BY total_revenue DESC
LIMIT 10;

-- Store performance comparison
SELECT
    s.store_name,
    s.region,
    COUNT(*) as num_sales,
    SUM(f.quantity) as units_sold,
    SUM(f.profit) as total_profit
FROM fact_sales f
JOIN dim_store s ON f.store_id = s.store_id
GROUP BY s.store_id, s.store_name, s.region
ORDER BY total_profit DESC;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Simple and intuitive design</td>
            <td className="p-3 border">Data redundancy in dimensions</td>
          </tr>
          <tr>
            <td className="p-3 border">Fast query performance</td>
            <td className="p-3 border">More storage space required</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to understand for users</td>
            <td className="p-3 border">Not efficient for certain queries</td>
          </tr>
          <tr>
            <td className="p-3 border">Well supported by BI tools</td>
            <td className="p-3 border">Update anomalies possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple ETL process</td>
            <td className="p-3 border">Less flexible for complex hierarchies</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Star Schema has one central fact table surrounded by dimension tables</li>
        <li>Fact tables contain metrics/measures and foreign keys to dimensions</li>
        <li>Dimension tables contain descriptive attributes (who, what, when, where)</li>
        <li>Denormalized design trades storage space for query performance</li>
        <li>Queries require only one level of joins (fact to dimension)</li>
        <li>Most commonly used schema design in data warehousing</li>
      </ul>
    </div>
  </div>
);

export default StarSchema;
