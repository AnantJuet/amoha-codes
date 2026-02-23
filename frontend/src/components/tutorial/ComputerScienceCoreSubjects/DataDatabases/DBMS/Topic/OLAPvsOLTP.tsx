import React from "react";

const OLAPvsOLTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">OLAP vs OLTP</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing)
      are two different database system approaches optimized for different types of
      workloads - transactions vs analytics.
    </p>

    <h2 className="text-3xl font-bold mt-8">OLTP - Transaction Processing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP: Online Transaction Processing

Purpose: Day-to-day business operations
- Process transactions in real-time
- Handle many concurrent users
- Fast insert, update, delete

Characteristics:
- Short, simple queries
- High volume of small transactions
- Current data only
- Normalized schema (3NF)
- ACID compliance critical

Examples:
- Banking transactions
- E-commerce orders
- Airline reservations
- ATM operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OLAP - Analytical Processing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP: Online Analytical Processing

Purpose: Business analysis and decision support
- Complex queries on large datasets
- Historical data analysis
- Trend analysis and reporting

Characteristics:
- Complex, long-running queries
- Low volume, high complexity
- Historical data (years)
- Denormalized schema (star/snowflake)
- Read-mostly workloads

Examples:
- Sales trend analysis
- Financial reporting
- Market research
- Performance dashboards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP Query Example:
-- Get single customer order
SELECT order_id, product, quantity, price
FROM orders
WHERE order_id = 12345;
-- Returns: 1 row, milliseconds

-- Update inventory
UPDATE products
SET stock = stock - 1
WHERE product_id = 5001;


OLAP Query Example:
-- Quarterly sales by region and category
SELECT
    region,
    product_category,
    QUARTER(order_date) as quarter,
    SUM(revenue) as total_revenue,
    COUNT(*) as num_orders
FROM fact_sales
JOIN dim_product ON ...
JOIN dim_region ON ...
WHERE YEAR(order_date) = 2025
GROUP BY region, product_category, QUARTER(order_date)
ORDER BY region, quarter;
-- Returns: Thousands of rows, seconds to minutes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Schema Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP Schema (Normalized 3NF):

customers     orders          order_items
---------     ------          -----------
cust_id  ←─── cust_id         order_id
name          order_id   ←─── item_id
email         order_date       product_id
address_id    status           quantity
                               price

Many tables, minimized redundancy


OLAP Schema (Star Schema):

           dim_product
               ↑
dim_time → FACT_SALES ← dim_customer
               ↓
          dim_region

Fact table: Measures (sales, quantity)
Dimension tables: Descriptive attributes

Fewer joins, optimized for aggregation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OLTP vs OLAP Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">OLTP</th>
            <th className="p-3 border">OLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Transactions</td>
            <td className="p-3 border">Analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operations</td>
            <td className="p-3 border">INSERT, UPDATE, DELETE</td>
            <td className="p-3 border">SELECT (complex)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data</td>
            <td className="p-3 border">Current (operational)</td>
            <td className="p-3 border">Historical (archive)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Normalized (3NF)</td>
            <td className="p-3 border">Denormalized (Star)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Time</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Seconds to minutes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Clerks, customers</td>
            <td className="p-3 border">Analysts, managers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Size</td>
            <td className="p-3 border">GB to TB</td>
            <td className="p-3 border">TB to PB</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">HTAP - Hybrid Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HTAP: Hybrid Transactional/Analytical Processing

Combines OLTP and OLAP in single system:
- Real-time analytics on operational data
- No ETL delay
- Single source of truth

Technologies:
- In-memory databases
- Column stores with row stores
- Distributed systems

Examples:
- SAP HANA
- MemSQL/SingleStore
- TiDB

Traditional Flow:
OLTP DB → ETL → Data Warehouse → OLAP

HTAP Flow:
Single DB → Real-time Analytics`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OLTP: Fast transactions, current data, normalized</li>
        <li>OLAP: Complex analysis, historical data, denormalized</li>
        <li>OLTP optimized for writes, OLAP for reads</li>
        <li>Different users and use cases</li>
        <li>HTAP combines both in single system</li>
      </ul>
    </div>
  </div>
);

export default OLAPvsOLTP;
