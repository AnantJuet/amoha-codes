import React from "react";

const DimensionTables: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dimension Tables
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dimension tables provide the descriptive context for the measurements stored in fact tables.
      They contain attributes that describe the "who, what, when, where, why, and how" of business
      events, enabling users to slice, dice, and filter data meaningfully.
    </p>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure of Dimension Table</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dimension Table Structure:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOMER_DIM TABLE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PRIMARY KEY:                                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ customer_key  │ INT │ Surrogate key (system-generated) │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  NATURAL KEY:                                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ customer_id   │ VARCHAR │ Business key from source      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  DESCRIPTIVE ATTRIBUTES:                                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ customer_name │ VARCHAR │ Full name                     │   │
│  │ email         │ VARCHAR │ Email address                 │   │
│  │ phone         │ VARCHAR │ Phone number                  │   │
│  │ address       │ VARCHAR │ Street address                │   │
│  │ city          │ VARCHAR │ City name                     │   │
│  │ state         │ VARCHAR │ State/Province                │   │
│  │ country       │ VARCHAR │ Country                       │   │
│  │ segment       │ VARCHAR │ Customer segment              │   │
│  │ join_date     │ DATE    │ When customer joined          │   │
│  │ loyalty_tier  │ VARCHAR │ Gold/Silver/Bronze            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  SCD METADATA (Optional):                                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ effective_date│ DATE    │ When this version started     │   │
│  │ end_date      │ DATE    │ When this version ended       │   │
│  │ is_current    │ BOOLEAN │ Current version flag          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Example Dimension */}
    <h2 className="text-3xl font-bold mt-8">Example: Product Dimension</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Product Dimension Table:
════════════════════════════════════════════════════════════════

┌──────┬────────┬────────────────┬──────────┬─────────┬─────────┐
│ key  │ sku    │ product_name   │ category │ brand   │ price   │
├──────┼────────┼────────────────┼──────────┼─────────┼─────────┤
│ 501  │ SKU001 │ Wireless Mouse │ Electronics│ TechCo │ 29.99  │
│ 502  │ SKU002 │ USB Keyboard   │ Electronics│ TechCo │ 49.99  │
│ 503  │ SKU003 │ Monitor Stand  │ Accessories│ OfficePro│ 19.99 │
│ 504  │ SKU004 │ Desk Lamp      │ Lighting  │ BrightLite│ 39.99 │
│ 505  │ SKU005 │ Webcam HD      │ Electronics│ TechCo │ 79.99  │
└──────┴────────┴────────────────┴──────────┴─────────┴─────────┘

Enables queries like:
• "Sales by category"   → GROUP BY category
• "Sales by brand"      → GROUP BY brand
• "Filter by price range" → WHERE price BETWEEN 20 AND 50`}
      </pre>
    </div>

    {/* Common Dimensions */}
    <h2 className="text-3xl font-bold mt-8">Common Dimension Tables</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Date/Time Dimension</h3>
        <p className="text-sm">Calendar attributes: year, quarter, month, week, day, holiday flag</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Customer Dimension</h3>
        <p className="text-sm">Demographics, segment, location, loyalty tier, preferences</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Product Dimension</h3>
        <p className="text-sm">SKU, name, category, brand, supplier, price range</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Geography Dimension</h3>
        <p className="text-sm">Location hierarchy: country, region, state, city, store</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Employee Dimension</h3>
        <p className="text-sm">Name, department, role, hire date, manager</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Promotion Dimension</h3>
        <p className="text-sm">Campaign name, type, discount, start/end dates</p>
      </div>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Dimension Tables</h2>
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
            <td className="p-3 border font-semibold">Wide Tables</td>
            <td className="p-3 border">Many columns (50-100 attributes is common)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fewer Rows</td>
            <td className="p-3 border">Thousands to millions (vs billions in facts)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Denormalized</td>
            <td className="p-3 border">Flattened hierarchy for query performance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Surrogate Keys</td>
            <td className="p-3 border">System-generated integer primary keys</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Descriptive Text</td>
            <td className="p-3 border">Rich textual attributes for reporting</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-4">
      <li><strong>Use surrogate keys:</strong> Don't rely on natural keys from source systems</li>
      <li><strong>Denormalize:</strong> Flatten hierarchies for better query performance</li>
      <li><strong>Include descriptive attributes:</strong> More context enables better analysis</li>
      <li><strong>Handle NULLs:</strong> Use "Unknown" or "N/A" instead of NULL values</li>
      <li><strong>Plan for SCD:</strong> Decide how to handle attribute changes over time</li>
      <li><strong>Conform dimensions:</strong> Use same dimension across multiple fact tables</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dimension tables provide context (who, what, when, where) for facts</li>
        <li>Typically wide (many columns) with fewer rows than fact tables</li>
        <li>Use surrogate keys as primary keys, keep natural keys for reference</li>
        <li>Denormalize for query performance (avoid joins)</li>
        <li>Common dimensions: Date, Customer, Product, Geography, Employee</li>
        <li>Conformed dimensions are shared across multiple fact tables</li>
        <li>SCD (Slowly Changing Dimension) handles attribute changes over time</li>
      </ul>
    </div>
  </div>
);

export default DimensionTables;
