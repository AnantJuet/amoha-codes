import React from "react";

const GalaxySchema: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Galaxy Schema (Fact Constellation)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Galaxy Schema, also known as Fact Constellation Schema, is a complex dimensional
      model that contains multiple fact tables sharing common dimension tables. It represents
      multiple business processes in a single integrated schema.
    </p>

    {/* What is Galaxy Schema */}
    <h2 className="text-3xl font-bold mt-8">What is Galaxy Schema?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Galaxy Schema (Fact Constellation) Structure:
════════════════════════════════════════════════════════════════

                         ┌─────────────┐
                         │  DATE_DIM   │ (Shared)
                         │  date_key   │
                         └──────┬──────┘
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
            ▼                   ▼                   ▼
     ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
     │ SALES_FACT   │    │INVENTORY_FACT│    │SHIPPING_FACT │
     └──────┬───────┘    └──────┬───────┘    └──────┬───────┘
            │                   │                   │
            ▼                   ▼                   ▼
     ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
     │ CUSTOMER_DIM │    │ PRODUCT_DIM  │    │ CARRIER_DIM  │
     │  (Sales only)│    │  (Shared)    │    │(Shipping only│
     └──────────────┘    └──────────────┘    └──────────────┘

Multiple FACT tables sharing CONFORMED DIMENSIONS = Galaxy/Constellation`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Galaxy Schema Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Retail Business Galaxy Schema:
════════════════════════════════════════════════════════════════

                    CONFORMED DIMENSIONS (Shared)
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │  DATE_DIM   │  │ PRODUCT_DIM │  │  STORE_DIM  │
    │  date_key   │  │ product_key │  │  store_key  │
    └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
           │                │                │
    ┌──────┴────────────────┼────────────────┴──────┐
    │                       │                       │
    │   ┌───────────────────┼───────────────────┐   │
    │   │                   │                   │   │
    ▼   ▼                   ▼                   ▼   ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  SALES_FACT   │    │INVENTORY_FACT │    │  ORDERS_FACT  │
├───────────────┤    ├───────────────┤    ├───────────────┤
│ date_key      │    │ date_key      │    │ order_date_key│
│ product_key   │    │ product_key   │    │ ship_date_key │
│ store_key     │    │ store_key     │    │ product_key   │
│ customer_key  │    │ qty_on_hand   │    │ store_key     │
│ quantity_sold │    │ qty_on_order  │    │ customer_key  │
│ sales_amount  │    │ reorder_point │    │ order_amount  │
└───────┬───────┘    └───────────────┘    └───────┬───────┘
        │                                         │
        ▼                                         ▼
┌───────────────┐                         ┌───────────────┐
│ CUSTOMER_DIM  │ (Specific to Sales      │ SHIPPING_DIM  │
│ customer_key  │  and Orders)            │ shipping_key  │
└───────────────┘                         └───────────────┘

3 Fact Tables + 6 Dimension Tables = Galaxy Schema`}
      </pre>
    </div>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Galaxy Schema Components</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Multiple Fact Tables</h3>
        <p className="text-sm">Contains two or more fact tables representing different business processes (sales, inventory, shipping, returns, etc.).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Conformed Dimensions</h3>
        <p className="text-sm">Shared dimension tables used across multiple fact tables, ensuring consistent analysis (Date, Product, Store).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Specific Dimensions</h3>
        <p className="text-sm">Dimension tables unique to a particular fact table (Customer for Sales, Carrier for Shipping).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Cross-Process Analysis</h3>
        <p className="text-sm">Enables queries that span multiple business processes using conformed dimensions as the linking point.</p>
      </div>
    </div>

    {/* SQL Example */}
    <h2 className="text-3xl font-bold mt-8">Cross-Process Query Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Cross-Process Analysis: Sales vs Inventory
════════════════════════════════════════════════════════════════

SELECT
    p.product_name,
    s.store_name,
    d.month_name,
    SUM(sf.quantity_sold) as total_sold,
    AVG(inv.qty_on_hand) as avg_inventory,
    SUM(sf.quantity_sold) / NULLIF(AVG(inv.qty_on_hand), 0) as turnover_ratio
FROM
    SALES_FACT sf
    JOIN INVENTORY_FACT inv
        ON sf.product_key = inv.product_key
        AND sf.store_key = inv.store_key
        AND sf.date_key = inv.date_key
    JOIN PRODUCT_DIM p ON sf.product_key = p.product_key      -- Conformed
    JOIN STORE_DIM s ON sf.store_key = s.store_key            -- Conformed
    JOIN DATE_DIM d ON sf.date_key = d.date_key               -- Conformed
WHERE
    d.year = 2026
GROUP BY
    p.product_name, s.store_name, d.month_name;

-- This query joins TWO fact tables using conformed dimensions!`}
      </pre>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Galaxy Schema</h2>
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
            <td className="p-3 border font-semibold">Multiple Fact Tables</td>
            <td className="p-3 border">Two or more fact tables in the schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Shared Dimensions</td>
            <td className="p-3 border">Conformed dimensions link fact tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Enterprise Scope</td>
            <td className="p-3 border">Represents entire enterprise or major domain</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complex Queries</td>
            <td className="p-3 border">Supports cross-process analytical queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">Mix of star and snowflake patterns allowed</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Retail Analytics</h3>
        <p className="text-sm">Sales, Inventory, Orders, Returns, and Promotions fact tables sharing Product, Store, and Date dimensions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Financial Services</h3>
        <p className="text-sm">Transactions, Balances, Loans, and Risk fact tables sharing Customer, Account, and Date dimensions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Healthcare</h3>
        <p className="text-sm">Patient Visits, Prescriptions, Lab Results, and Billing fact tables sharing Patient and Provider dimensions.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Manufacturing</h3>
        <p className="text-sm">Production, Quality, Inventory, and Shipments fact tables sharing Product, Facility, and Date dimensions.</p>
      </div>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Cross-process analysis capability</li>
          <li>Enterprise-wide view of data</li>
          <li>Reuse of conformed dimensions</li>
          <li>Consistent metrics across processes</li>
          <li>Supports complex business questions</li>
          <li>Flexible for business growth</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>More complex to design and maintain</li>
          <li>Requires careful dimension conformance</li>
          <li>Complex ETL processes</li>
          <li>Harder for users to understand</li>
          <li>Cross-fact queries can be slow</li>
          <li>Governance challenges</li>
        </ul>
      </div>
    </div>

    {/* Comparison with Other Schemas */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Schemas</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schema Comparison:
════════════════════════════════════════════════════════════════

Star Schema:           Snowflake Schema:        Galaxy Schema:
┌─────────┐           ┌───┐                    ┌─────────┐
│   DIM   │           │SUB│                    │   DIM   │ (Shared)
└────┬────┘           └─┬─┘                    └────┬────┘
     │                  │                           │
     ▼                  ▼                    ┌──────┼──────┐
┌─────────┐           ┌───┐                  │      │      │
│  FACT   │           │DIM│                  ▼      ▼      ▼
└─────────┘           └─┬─┘              ┌──────┐┌──────┐┌──────┐
                        │                │FACT1 ││FACT2 ││FACT3 │
                        ▼                └──────┘└──────┘└──────┘
                    ┌───────┐
                    │ FACT  │
                    └───────┘

1 Fact Table        1 Fact Table         Multiple Fact Tables
Denormalized Dims   Normalized Dims      Shared (Conformed) Dims`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Galaxy schema contains multiple fact tables sharing conformed dimensions</li>
        <li>Also known as Fact Constellation Schema</li>
        <li>Enables cross-process analysis (e.g., comparing sales with inventory)</li>
        <li>Conformed dimensions are critical for ensuring consistency</li>
        <li>More complex than star or snowflake schemas</li>
        <li>Represents enterprise-wide data model</li>
        <li>Common in large organizations with multiple business processes</li>
        <li>Requires strong governance for dimension conformance</li>
      </ul>
    </div>
  </div>
);

export default GalaxySchema;
