import React from "react";

const OLAPvsOLTP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OLAP vs OLTP
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      OLAP (Online Analytical Processing) and OLTP (Online Transaction Processing) are
      two fundamentally different approaches to database systems, each optimized for
      different types of workloads and business needs.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">System Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLTP vs OLAP Systems:
════════════════════════════════════════════════════════════════

OLTP (Transactional)                OLAP (Analytical)
────────────────────                ──────────────────

┌──────────────────────┐           ┌──────────────────────┐
│    OPERATIONS        │           │     ANALYTICS        │
│                      │           │                      │
│  ┌────┐ ┌────┐      │           │      ┌─────────┐    │
│  │Add │ │Edit│      │           │      │ Reports │    │
│  │Order│ │Cust│      │           │      │ BI Tool │    │
│  └────┘ └────┘      │           │      │Dashboard│    │
│      INSERT          │           │      └─────────┘    │
│      UPDATE          │           │         SELECT      │
│      DELETE          │           │        AGGREGATE    │
│                      │           │                      │
│   ┌──────────────┐   │           │   ┌──────────────┐   │
│   │  Normalized  │   │           │   │ Denormalized │   │
│   │   Tables     │   │           │   │  Star Schema │   │
│   │    (3NF)     │   │           │   │              │   │
│   └──────────────┘   │           │   └──────────────┘   │
│                      │           │                      │
│   Users: 1000s       │           │   Users: 10s-100s   │
│   Queries: Simple    │           │   Queries: Complex  │
│   Data: Current      │           │   Data: Historical  │
│                      │    ETL    │                      │
│                      │ ───────►  │                      │
└──────────────────────┘           └──────────────────────┘

"Process transactions"             "Analyze trends"`}
      </pre>
    </div>

    {/* Detailed Comparison */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">OLTP</th>
            <th className="p-3 border">OLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Manage daily transactions</td>
            <td className="p-3 border">Analyze historical data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Users</td>
            <td className="p-3 border">Clerks, operational staff</td>
            <td className="p-3 border">Analysts, managers, executives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operations</td>
            <td className="p-3 border">INSERT, UPDATE, DELETE</td>
            <td className="p-3 border">SELECT (complex aggregations)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Type</td>
            <td className="p-3 border">Simple, predefined</td>
            <td className="p-3 border">Complex, ad-hoc</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Time</td>
            <td className="p-3 border">Milliseconds</td>
            <td className="p-3 border">Seconds to minutes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">MB to GB</td>
            <td className="p-3 border">GB to PB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Age</td>
            <td className="p-3 border">Current</td>
            <td className="p-3 border">Historical (years)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema Design</td>
            <td className="p-3 border">Normalized (3NF)</td>
            <td className="p-3 border">Denormalized (Star/Snowflake)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency</td>
            <td className="p-3 border">Thousands of users</td>
            <td className="p-3 border">Fewer concurrent users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Backup</td>
            <td className="p-3 border">Frequent, critical</td>
            <td className="p-3 border">Less frequent (can reload)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimization</td>
            <td className="p-3 border">Write performance</td>
            <td className="p-3 border">Read performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Query Examples */}
    <h2 className="text-3xl font-bold mt-8">Query Examples</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OLTP Queries</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert new order
INSERT INTO orders (customer_id,
  product_id, qty, order_date)
VALUES (123, 456, 2, NOW());

-- Update customer email
UPDATE customers
SET email = 'new@email.com'
WHERE customer_id = 123;

-- Get single order
SELECT * FROM orders
WHERE order_id = 789;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">OLAP Queries</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Sales trend by quarter
SELECT year, quarter,
  SUM(sales) as total,
  SUM(sales)/SUM(qty) as avg_price
FROM fact_sales f
JOIN dim_time t ON f.date_key=t.key
GROUP BY year, quarter
ORDER BY year, quarter;

-- Top products by region
SELECT region, product,
  RANK() OVER (PARTITION BY
    region ORDER BY SUM(sales))
FROM sales_cube
GROUP BY region, product;`}
          </pre>
        </div>
      </div>
    </div>

    {/* Schema Comparison */}
    <h2 className="text-3xl font-bold mt-8">Schema Design Difference</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schema Design Comparison:
════════════════════════════════════════════════════════════════

OLTP (Normalized 3NF):              OLAP (Star Schema):

┌──────────┐   ┌──────────┐        ┌──────────┐   ┌──────────┐
│ customers│───│ orders   │        │ dim_cust │   │ dim_prod │
└──────────┘   └────┬─────┘        └────┬─────┘   └────┬─────┘
                    │                   │              │
               ┌────┴─────┐             └──────┬───────┘
               │order_items│                   │
               └────┬─────┘            ┌───────┴───────┐
                    │                  │  fact_sales   │
               ┌────┴─────┐            └───────┬───────┘
               │ products │                    │
               └────┬─────┘             ┌──────┴──────┐
                    │                   │             │
               ┌────┴─────┐       ┌─────┴────┐ ┌─────┴────┐
               │categories│       │ dim_time │ │dim_store │
               └──────────┘       └──────────┘ └──────────┘

Many tables, no redundancy          Few tables, some redundancy
Optimized for updates              Optimized for reads`}
      </pre>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">OLTP Use Cases</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>E-commerce order processing</li>
          <li>Banking transactions</li>
          <li>Airline reservations</li>
          <li>Inventory management</li>
          <li>CRM customer updates</li>
          <li>Healthcare patient records</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">OLAP Use Cases</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Sales trend analysis</li>
          <li>Financial reporting</li>
          <li>Marketing campaign analysis</li>
          <li>Executive dashboards</li>
          <li>Forecasting and planning</li>
          <li>Customer segmentation</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OLTP handles day-to-day transactions; OLAP handles analysis</li>
        <li>OLTP is write-optimized; OLAP is read-optimized</li>
        <li>OLTP uses normalized schema; OLAP uses dimensional schema</li>
        <li>OLTP serves many concurrent users; OLAP serves fewer analysts</li>
        <li>OLTP stores current data; OLAP stores historical data</li>
        <li>ETL processes move data from OLTP to OLAP systems</li>
        <li>Both are essential for complete enterprise data management</li>
        <li>Modern systems may blend both (HTAP - Hybrid Transactional/Analytical)</li>
      </ul>
    </div>
  </div>
);

export default OLAPvsOLTP;
