import React from "react";

const Denormalization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Denormalization</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Denormalization is the intentional introduction of redundancy into a normalized
      database to improve read performance. It trades storage space and write complexity
      for faster query execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Denormalize?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normalization Trade-offs:

Normalized (3NF/BCNF):
+ Minimal redundancy
+ Easy updates
+ Data integrity
- Many tables
- Complex joins
- Slower reads

Denormalized:
+ Faster reads
+ Fewer joins
+ Simpler queries
- Redundant data
- Harder updates
- Risk of inconsistency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Denormalization Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normalized Schema:

Orders(order_id, customer_id, order_date)
Customers(customer_id, name, city, country)

Query: Get order with customer name
SELECT o.*, c.name, c.city
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
WHERE o.order_id = 1001;

Denormalized Schema:

Orders(order_id, customer_id, customer_name,
       customer_city, order_date)

Query: Same result, no join
SELECT order_id, customer_id, customer_name,
       customer_city, order_date
FROM Orders
WHERE order_id = 1001;

Result: Faster query, but redundant customer data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Denormalization Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Adding Derived Columns
   Original: order_items(item_id, price, quantity)
   Add: total_price = price * quantity
   Saves computation on every read

2. Pre-computed Aggregates
   Add order_count to Customers table
   Add total_spent to Customers table
   Avoids COUNT/SUM queries

3. Duplicating Columns
   Copy customer_name to Orders table
   Avoids join for common queries

4. Storing Redundant Data
   Keep historical values
   Store address at time of order

5. Summary Tables
   Create daily_sales_summary table
   Pre-aggregate for reporting`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Denormalize</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Denormalize When</th>
            <th className="p-3 border">Keep Normalized When</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Read-heavy workloads</td>
            <td className="p-3 border">Write-heavy workloads</td>
          </tr>
          <tr>
            <td className="p-3 border">Complex joins slow queries</td>
            <td className="p-3 border">Simple queries work fine</td>
          </tr>
          <tr>
            <td className="p-3 border">Reporting/analytics needs</td>
            <td className="p-3 border">OLTP systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Data rarely changes</td>
            <td className="p-3 border">Data frequently updated</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance is critical</td>
            <td className="p-3 border">Data integrity is critical</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Redundancy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Maintaining Consistency:

1. Triggers
   CREATE TRIGGER update_customer_name
   AFTER UPDATE ON customers
   FOR EACH ROW
   UPDATE orders SET customer_name = NEW.name
   WHERE customer_id = NEW.customer_id;

2. Stored Procedures
   Always update through procedures
   Ensure all copies are updated

3. Materialized Views
   CREATE MATERIALIZED VIEW order_summary AS
   SELECT o.*, c.name, c.city
   FROM orders o JOIN customers c ...;
   REFRESH MATERIALIZED VIEW order_summary;

4. Application Logic
   Handle updates in application layer
   Transaction ensures consistency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`E-commerce:
- Store product_name in order_items
  (product name might change later)
- Store shipping_address in orders
  (customer might move)

Social Media:
- Store follower_count in user profile
- Store like_count in posts
- Avoid COUNT(*) on every view

Analytics:
- Daily aggregate tables
- Pre-computed metrics
- Summary tables for dashboards

Content Sites:
- Store author_name with articles
- Cache view_count in articles
- Denormalize for search indexes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Denormalization Risks</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Data Inconsistency:</strong> Copies may get out of sync</li>
        <li><strong>Update Anomalies:</strong> Must update multiple places</li>
        <li><strong>Storage Overhead:</strong> Duplicate data uses more space</li>
        <li><strong>Complexity:</strong> Harder to maintain consistency</li>
        <li><strong>Testing:</strong> Need to verify sync mechanisms</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Denormalization trades write cost for read speed</li>
        <li>Use for read-heavy, performance-critical systems</li>
        <li>Always handle update consistency</li>
        <li>Consider triggers or materialized views</li>
        <li>Document what is denormalized and why</li>
      </ul>
    </div>
  </div>
);

export default Denormalization;
