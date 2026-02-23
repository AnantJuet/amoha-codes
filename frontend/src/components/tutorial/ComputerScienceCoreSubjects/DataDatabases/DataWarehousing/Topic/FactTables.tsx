import React from "react";

const FactTables: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fact Tables
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A fact table is the central table in a dimensional model that stores quantitative data
      (measures) about a business process. It contains foreign keys to dimension tables and
      numeric facts that can be aggregated for analysis.
    </p>

    {/* Structure of Fact Table */}
    <h2 className="text-3xl font-bold mt-8">Structure of a Fact Table</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fact Table Structure:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                      SALES_FACT TABLE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FOREIGN KEYS (Links to Dimensions):                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ date_key       │ INT │ FK → Date Dimension              │   │
│  │ customer_key   │ INT │ FK → Customer Dimension          │   │
│  │ product_key    │ INT │ FK → Product Dimension           │   │
│  │ store_key      │ INT │ FK → Store Dimension             │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  MEASURES (Numeric Facts):                                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ quantity_sold  │ INT     │ Additive measure             │   │
│  │ unit_price     │ DECIMAL │ Non-additive measure         │   │
│  │ sales_amount   │ DECIMAL │ Additive measure             │   │
│  │ discount_amt   │ DECIMAL │ Additive measure             │   │
│  │ profit_margin  │ DECIMAL │ Semi-additive measure        │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  DEGENERATE DIMENSIONS (Optional):                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ invoice_number │ VARCHAR │ No separate dimension table  │   │
│  │ order_number   │ VARCHAR │ Stored directly in fact      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Components of Fact Table</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Foreign Keys</h3>
        <p className="text-sm">Links to dimension tables that provide context. The combination of foreign keys often forms a composite primary key.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Measures (Facts)</h3>
        <p className="text-sm">Numeric values that can be analyzed - typically aggregated using SUM, AVG, COUNT, MIN, MAX.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Degenerate Dimensions</h3>
        <p className="text-sm">Dimensional attributes stored directly in the fact table (e.g., order number) without a separate dimension table.</p>
      </div>
    </div>

    {/* Types of Measures */}
    <h2 className="text-3xl font-bold mt-8">Types of Measures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">Can Sum Across</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Additive</td>
            <td className="p-3 border">Can be summed across all dimensions</td>
            <td className="p-3 border">Sales amount, quantity</td>
            <td className="p-3 border">All dimensions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Semi-Additive</td>
            <td className="p-3 border">Can be summed across some dimensions</td>
            <td className="p-3 border">Account balance, inventory</td>
            <td className="p-3 border">All except time</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-Additive</td>
            <td className="p-3 border">Cannot be summed meaningfully</td>
            <td className="p-3 border">Unit price, ratios, percentages</td>
            <td className="p-3 border">None (use AVG)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Sales Fact Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sample Data in Sales Fact Table:
════════════════════════════════════════════════════════════════

┌──────────┬──────────┬──────────┬──────────┬──────┬───────┬─────────┐
│ date_key │ cust_key │ prod_key │store_key │ qty  │ price │ amount  │
├──────────┼──────────┼──────────┼──────────┼──────┼───────┼─────────┤
│ 20260115 │ 1001     │ 501      │ 10       │ 2    │ 29.99 │ 59.98   │
│ 20260115 │ 1002     │ 502      │ 10       │ 1    │ 49.99 │ 49.99   │
│ 20260115 │ 1001     │ 503      │ 11       │ 3    │ 19.99 │ 59.97   │
│ 20260116 │ 1003     │ 501      │ 10       │ 1    │ 29.99 │ 29.99   │
│ 20260116 │ 1002     │ 504      │ 12       │ 5    │ 9.99  │ 49.95   │
└──────────┴──────────┴──────────┴──────────┴──────┴───────┴─────────┘

Typical Queries:
• Total sales by date: SUM(amount) GROUP BY date_key
• Average quantity per customer: AVG(qty) GROUP BY cust_key
• Sales by product and store: SUM(amount) GROUP BY prod_key, store_key`}
      </pre>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-4">
      <li><strong>Define grain clearly:</strong> Determine the level of detail before designing</li>
      <li><strong>Keep facts numeric:</strong> Store only measures that can be aggregated</li>
      <li><strong>Use surrogate keys:</strong> Link to dimensions using surrogate keys, not natural keys</li>
      <li><strong>Avoid NULLs:</strong> Use zero or special values instead of NULL for measures</li>
      <li><strong>Partition large tables:</strong> Partition by date for performance</li>
      <li><strong>Index foreign keys:</strong> Ensure efficient joins to dimensions</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Fact tables store quantitative measures about business events</li>
        <li>Contains foreign keys to dimensions and numeric measures</li>
        <li>Three types of measures: Additive, Semi-additive, Non-additive</li>
        <li>Grain defines the level of detail (what one row represents)</li>
        <li>Degenerate dimensions are stored directly in fact table</li>
        <li>Typically the largest tables in the data warehouse</li>
        <li>Named after the business process they measure (e.g., Sales_Fact)</li>
      </ul>
    </div>
  </div>
);

export default FactTables;
