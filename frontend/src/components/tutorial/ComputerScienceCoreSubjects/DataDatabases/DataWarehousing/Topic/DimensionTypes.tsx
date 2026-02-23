import React from "react";

const DimensionTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Dimensions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dimensions in a data warehouse come in various types, each serving specific purposes
      and handling different analytical requirements. Understanding these types helps in
      designing effective dimensional models that accurately represent business processes.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Overview of Dimension Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Types of Dimensions in Data Warehousing:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    DIMENSION TYPES                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. CONFORMED DIMENSION                                          │
│     └── Shared across multiple fact tables                      │
│                                                                  │
│  2. DEGENERATE DIMENSION                                         │
│     └── Stored in fact table (no separate dim table)            │
│                                                                  │
│  3. ROLE-PLAYING DIMENSION                                       │
│     └── Same dimension used multiple times with different roles │
│                                                                  │
│  4. JUNK DIMENSION                                               │
│     └── Combines low-cardinality flags and indicators           │
│                                                                  │
│  5. SLOWLY CHANGING DIMENSION (SCD)                              │
│     └── Handles attribute changes over time                     │
│                                                                  │
│  6. RAPIDLY CHANGING DIMENSION                                   │
│     └── Frequently changing attributes                          │
│                                                                  │
│  7. SHRUNKEN/SUBSET DIMENSION                                    │
│     └── Subset of rows from another dimension                   │
│                                                                  │
│  8. OUTRIGGER DIMENSION                                          │
│     └── Dimension linked to another dimension                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Conformed Dimension */}
    <h2 className="text-3xl font-bold mt-8">1. Conformed Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A conformed dimension is shared across multiple fact tables in a data warehouse,
        ensuring consistent analysis across different business processes.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Conformed Dimension Example:
════════════════════════════════════════════════════════════════

           ┌─────────────────────────┐
           │    DATE_DIM (Conformed) │
           │   date_key, date, month │
           │   quarter, year, etc.   │
           └────────────┬────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│  SALES_FACT   │ │ INVENTORY_FACT│ │ SHIPPING_FACT │
│  date_key FK  │ │  date_key FK  │ │  date_key FK  │
└───────────────┘ └───────────────┘ └───────────────┘

Benefits:
• Enables cross-process analysis (join sales with inventory)
• Ensures consistent reporting across departments
• Reduces redundancy and maintenance effort`}
        </pre>
      </div>
    </div>

    {/* Degenerate Dimension */}
    <h2 className="text-3xl font-bold mt-8">2. Degenerate Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A degenerate dimension has no associated dimension table. The dimension key exists
        in the fact table itself, typically for transaction identifiers.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Degenerate Dimension Example:
════════════════════════════════════════════════════════════════

SALES_FACT Table:
┌────────────┬──────────┬──────────┬────────────────┬─────────┐
│ date_key   │ cust_key │ prod_key │ invoice_number │ amount  │
│   (FK)     │   (FK)   │   (FK)   │  (Degenerate)  │  (Fact) │
├────────────┼──────────┼──────────┼────────────────┼─────────┤
│ 20260115   │ 1001     │ 501      │ INV-2026-0001  │ 150.00  │
│ 20260115   │ 1002     │ 502      │ INV-2026-0002  │ 89.99   │
└────────────┴──────────┴──────────┴────────────────┴─────────┘
                                          │
                                          └── No separate table!

Common Examples:
• Invoice number
• Order number
• Transaction ID
• Ticket number`}
        </pre>
      </div>
    </div>

    {/* Role-Playing Dimension */}
    <h2 className="text-3xl font-bold mt-8">3. Role-Playing Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A role-playing dimension is a single physical dimension that appears multiple times
        in a fact table, each time playing a different logical role.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Role-Playing Dimension Example:
════════════════════════════════════════════════════════════════

                    ┌─────────────────┐
                    │    DATE_DIM     │ (Physical Table)
                    │   date_key      │
                    │   date_value    │
                    │   month, year   │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
   Order Date           Ship Date           Delivery Date
   (Role 1)             (Role 2)             (Role 3)

ORDER_FACT Table:
┌────────────┬────────────┬──────────────┬─────────┐
│ order_date │ ship_date  │ delivery_date│ amount  │
│ (FK→DATE)  │ (FK→DATE)  │ (FK→DATE)    │         │
├────────────┼────────────┼──────────────┼─────────┤
│ 20260110   │ 20260112   │ 20260115     │ 299.99  │
└────────────┴────────────┴──────────────┴─────────┘`}
        </pre>
      </div>
    </div>

    {/* Junk Dimension */}
    <h2 className="text-3xl font-bold mt-8">4. Junk Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A junk dimension combines miscellaneous, low-cardinality flags and indicators into
        a single dimension table, avoiding cluttering the fact table with many small columns.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Junk Dimension Example:
════════════════════════════════════════════════════════════════

Instead of storing flags in Fact Table:
┌──────────────┬──────────────┬───────────┬──────────┐
│ is_gift_wrap │ is_expedited │ is_return │ is_online│ ← Cluttered!
└──────────────┴──────────────┴───────────┴──────────┘

Create a Junk Dimension:
TRANSACTION_FLAGS_DIM:
┌─────────┬──────────────┬──────────────┬───────────┬──────────┐
│ flag_key│ is_gift_wrap │ is_expedited │ is_return │ is_online│
├─────────┼──────────────┼──────────────┼───────────┼──────────┤
│ 1       │ N            │ N            │ N         │ N        │
│ 2       │ N            │ N            │ N         │ Y        │
│ 3       │ N            │ N            │ Y         │ N        │
│ 4       │ N            │ N            │ Y         │ Y        │
│ 5       │ N            │ Y            │ N         │ N        │
│ ...     │ ...          │ ...          │ ...       │ ...      │
│ 16      │ Y            │ Y            │ Y         │ Y        │
└─────────┴──────────────┴──────────────┴───────────┴──────────┘

Benefits: Reduces fact table width, all combinations pre-computed`}
        </pre>
      </div>
    </div>

    {/* Shrunken/Subset Dimension */}
    <h2 className="text-3xl font-bold mt-8">5. Shrunken/Subset Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        A shrunken dimension contains a subset of rows and/or columns from a base dimension,
        used when only certain members are relevant for a specific fact table.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Shrunken Dimension Example:
════════════════════════════════════════════════════════════════

Full Customer Dimension:
┌──────┬──────────────┬─────────┬──────────┬──────────┐
│ key  │ name         │ segment │ region   │ status   │
├──────┼──────────────┼─────────┼──────────┼──────────┤
│ 1001 │ John Smith   │ Premium │ North    │ Active   │
│ 1002 │ Jane Doe     │ Basic   │ South    │ Active   │
│ 1003 │ Bob Wilson   │ Premium │ East     │ Inactive │
│ 1004 │ Alice Brown  │ Basic   │ West     │ Active   │
└──────┴──────────────┴─────────┴──────────┴──────────┘

Shrunken Premium Customer Dimension (for VIP fact table):
┌──────┬──────────────┬─────────┬──────────┐
│ key  │ name         │ segment │ region   │
├──────┼──────────────┼─────────┼──────────┤
│ 1001 │ John Smith   │ Premium │ North    │
│ 1003 │ Bob Wilson   │ Premium │ East     │
└──────┴──────────────┴─────────┴──────────┘
        Only Premium customers, fewer columns`}
        </pre>
      </div>
    </div>

    {/* Outrigger Dimension */}
    <h2 className="text-3xl font-bold mt-8">6. Outrigger Dimension</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        An outrigger dimension is a dimension that references another dimension rather
        than directly connecting to the fact table. Used sparingly for special cases.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Outrigger Dimension Example:
════════════════════════════════════════════════════════════════

┌───────────────────┐
│   PRODUCT_DIM     │
│   product_key     │
│   product_name    │
│   brand_key (FK)──┼────────┐
│   category        │        │
└─────────┬─────────┘        │
          │                  ▼
          │         ┌─────────────────┐
          │         │   BRAND_DIM     │ ← Outrigger
          │         │   brand_key     │
          │         │   brand_name    │
          │         │   parent_company│
          │         │   country       │
          │         └─────────────────┘
          │
          ▼
┌───────────────────┐
│    SALES_FACT     │
│    product_key FK │
└───────────────────┘

Note: Use sparingly - generally prefer denormalization`}
        </pre>
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Dimension Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Conformed</td>
            <td className="p-3 border">Shared across fact tables</td>
            <td className="p-3 border">Date, Customer, Product</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degenerate</td>
            <td className="p-3 border">No separate dimension table</td>
            <td className="p-3 border">Invoice number, Order ID</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Role-Playing</td>
            <td className="p-3 border">Same dim, multiple roles</td>
            <td className="p-3 border">Order/Ship/Delivery dates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Junk</td>
            <td className="p-3 border">Combines flags/indicators</td>
            <td className="p-3 border">Boolean flags, status codes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Shrunken</td>
            <td className="p-3 border">Subset of base dimension</td>
            <td className="p-3 border">VIP customers, active products</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Outrigger</td>
            <td className="p-3 border">Dim references another dim</td>
            <td className="p-3 border">Brand linked from Product</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Conformed dimensions</strong> enable enterprise-wide consistent analysis</li>
        <li><strong>Degenerate dimensions</strong> are transaction IDs stored directly in fact table</li>
        <li><strong>Role-playing dimensions</strong> use one physical table for multiple logical roles</li>
        <li><strong>Junk dimensions</strong> consolidate low-cardinality flags into one table</li>
        <li><strong>Shrunken dimensions</strong> are subsets for specific fact table needs</li>
        <li><strong>Outrigger dimensions</strong> create dimension-to-dimension relationships</li>
        <li>Choose the right dimension type based on your analytical requirements</li>
        <li>Conformed and role-playing dimensions are most commonly used</li>
      </ul>
    </div>
  </div>
);

export default DimensionTypes;
