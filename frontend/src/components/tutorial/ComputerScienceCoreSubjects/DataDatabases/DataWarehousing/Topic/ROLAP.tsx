import React from "react";

const ROLAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ROLAP (Relational OLAP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Relational On-Line Analytical Processing (ROLAP) is primarily used for data stored in a
      relational database, where both the base data and dimension tables are stored as relational
      tables. ROLAP servers are used to bridge the gap between the relational back-end server and
      the client's front-end tools.
    </p>

    <h2 className="text-3xl font-bold mt-8">How ROLAP Works</h2>
    <p className="leading-relaxed">
      ROLAP servers store and manage warehouse data using RDBMS, and OLAP middleware fills in the
      gaps. It translates multidimensional queries into SQL queries that can be executed against
      the relational database.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ROLAP Architecture:

+------------------+     +------------------+     +------------------+
|   Client Tools   |     |  ROLAP Server    |     | Relational DBMS  |
+------------------+     +------------------+     +------------------+
| - BI Dashboard   | --> | - Query Engine   | --> | - Fact Tables    |
| - Excel          |     | - SQL Generator  |     | - Dimension Tables|
| - Reporting Tool |     | - Cache Manager  |     | - Aggregate Tables|
+------------------+     +------------------+     +------------------+

Query Flow:
1. User sends MDX query → ROLAP Server
2. ROLAP Server translates to SQL
3. SQL executed on RDBMS
4. Results formatted and returned to user`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Relational Storage:</strong> Data remains in relational database tables</li>
      <li><strong>SQL-Based:</strong> Uses SQL for querying and data manipulation</li>
      <li><strong>RDBMS Compatibility:</strong> Compatible with data warehouses and OLTP systems</li>
      <li><strong>Scalability:</strong> Data size limitation determined by underlying RDBMS</li>
      <li><strong>No Data Duplication:</strong> Works directly with source data</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of ROLAP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Large Data Volumes</td>
            <td className="p-3 border">Can handle very large datasets as it leverages RDBMS scalability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Data Limits</td>
            <td className="p-3 border">ROLAP does not limit the amount of data that can be stored</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Real-time Data</td>
            <td className="p-3 border">Can access current data without cube processing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexible</td>
            <td className="p-3 border">Easy to add new dimensions and measures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost Effective</td>
            <td className="p-3 border">Uses existing RDBMS infrastructure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of ROLAP</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>SQL Constraints:</strong> SQL functionality is constrained compared to native OLAP</li>
      <li><strong>Query Performance:</strong> Complex queries may be slower than MOLAP</li>
      <li><strong>Aggregate Maintenance:</strong> Difficult to keep aggregate tables up to date</li>
      <li><strong>Limited Functions:</strong> Some OLAP operations are harder to implement in SQL</li>
      <li><strong>Network Overhead:</strong> Requires more network traffic for large result sets</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">ROLAP Implementation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ROLAP Query Translation Example:

MDX Query (User Request):
SELECT
  [Time].[Year].Members ON COLUMNS,
  [Product].[Category].Members ON ROWS
FROM [Sales Cube]
WHERE [Measures].[Revenue]

↓ ROLAP Server Translates to SQL ↓

SQL Query (Executed on RDBMS):
SELECT
    t.year,
    p.category,
    SUM(f.revenue) as revenue
FROM fact_sales f
JOIN dim_time t ON f.time_id = t.time_id
JOIN dim_product p ON f.product_id = p.product_id
GROUP BY t.year, p.category
ORDER BY t.year, p.category;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use ROLAP</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>When dealing with very large datasets (TBs to PBs)</li>
        <li>When real-time or near-real-time data access is required</li>
        <li>When you have existing RDBMS infrastructure to leverage</li>
        <li>When data changes frequently and cube rebuild is impractical</li>
        <li>When flexible schema changes are anticipated</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ROLAP stores data in relational tables, not multidimensional arrays</li>
        <li>Uses SQL for query processing against RDBMS</li>
        <li>Best suited for large-scale data with dynamic requirements</li>
        <li>No data size limitations - depends on RDBMS capacity</li>
        <li>May have slower query performance compared to MOLAP for complex aggregations</li>
        <li>Aggregate table maintenance can be challenging</li>
      </ul>
    </div>
  </div>
);

export default ROLAP;
