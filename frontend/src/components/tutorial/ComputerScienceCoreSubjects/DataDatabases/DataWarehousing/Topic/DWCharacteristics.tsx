import React from "react";

const DWCharacteristics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Characteristics of Data Warehouse
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      According to Bill Inmon, a data warehouse is defined by four key characteristics: Subject-Oriented,
      Integrated, Time-Variant, and Non-Volatile. These characteristics distinguish a data warehouse
      from operational databases and define its purpose in supporting analytical processing.
    </p>

    {/* Four Characteristics Diagram */}
    <h2 className="text-3xl font-bold mt-8">The Four Key Characteristics</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Bill Inmon's Definition of Data Warehouse:
════════════════════════════════════════════════════════════════

"A data warehouse is a SUBJECT-ORIENTED, INTEGRATED, TIME-VARIANT,
 and NON-VOLATILE collection of data in support of management's
 decision-making process."

                    ┌─────────────────────┐
                    │   DATA WAREHOUSE    │
                    │   CHARACTERISTICS   │
                    └─────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│   SUBJECT-    │   │  INTEGRATED   │   │ TIME-VARIANT  │
│   ORIENTED    │   │               │   │               │
└───────────────┘   └───────────────┘   └───────────────┘
        │                     │                     │
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ Organized by  │   │ Unified from  │   │  Historical   │
│ business area │   │ multiple      │   │  data stored  │
│ (Customer,    │   │ sources with  │   │  with time    │
│ Product,      │   │ consistent    │   │  dimension    │
│ Sales)        │   │ format        │   │               │
└───────────────┘   └───────────────┘   └───────────────┘
                              │
                              ▼
                    ┌───────────────┐
                    │ NON-VOLATILE  │
                    │               │
                    │ Data is not   │
                    │ modified once │
                    │ loaded        │
                    └───────────────┘`}
      </pre>
    </div>

    {/* 1. Subject-Oriented */}
    <h2 className="text-3xl font-bold mt-8">1. Subject-Oriented</h2>
    <p className="leading-relaxed">
      A data warehouse is organized around major subjects of the enterprise rather than specific
      applications or functions. This means data is categorized by business areas like customers,
      products, sales, or inventory.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Subject-Oriented Organization:
────────────────────────────────────────────────────────────────

Operational Systems (Application-Oriented):
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Billing    │  │   Inventory  │  │   Payroll    │
│   System     │  │   System     │  │   System     │
└──────────────┘  └──────────────┘  └──────────────┘

                        │
                        ▼ ETL Process

Data Warehouse (Subject-Oriented):
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   CUSTOMER   │  │   PRODUCT    │  │    SALES     │
│   Subject    │  │   Subject    │  │   Subject    │
├──────────────┤  ├──────────────┤  ├──────────────┤
│ - Customer   │  │ - Product    │  │ - Revenue    │
│   Profile    │  │   Details    │  │ - Quantity   │
│ - Demographics│ │ - Category   │  │ - Discounts  │
│ - Lifetime   │  │ - Pricing    │  │ - Returns    │
│   Value      │  │   History    │  │ - Channels   │
└──────────────┘  └──────────────┘  └──────────────┘

Key Point: Focus is on WHAT data represents (subjects),
           not WHERE it comes from (applications).`}
      </pre>
    </div>

    {/* 2. Integrated */}
    <h2 className="text-3xl font-bold mt-8">2. Integrated</h2>
    <p className="leading-relaxed">
      Data from multiple heterogeneous sources is integrated into a consistent format. This involves
      resolving naming conventions, encoding structures, measurement units, and data formats.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Integration Example:
────────────────────────────────────────────────────────────────

Source System A:          Source System B:          Source System C:
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│ Gender: "M"/"F" │       │ Gender: 0/1     │       │ Gender: "Male"/ │
│ Date: MM/DD/YY  │       │ Date: YYYYMMDD  │       │         "Female"│
│ Balance: $USD   │       │ Balance: EUR    │       │ Date: DD-MON-YY │
└─────────────────┘       └─────────────────┘       └─────────────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                          ┌────────▼────────┐
                          │   INTEGRATION   │
                          │     PROCESS     │
                          └────────┬────────┘
                                   │
                          ┌────────▼────────┐
                          │  DATA WAREHOUSE │
                          ├─────────────────┤
                          │ Gender: "M"/"F" │  ← Standardized
                          │ Date: YYYY-MM-DD│  ← Consistent Format
                          │ Balance: USD    │  ← Single Currency
                          │ CustomerID: INT │  ← Unified Key
                          └─────────────────┘

Integration Resolves:
• Naming conventions (cust_id vs customer_number vs CID)
• Encoding (M/F vs 0/1 vs Male/Female)
• Measurement units (USD vs EUR vs JPY)
• Date formats (various → ISO standard)`}
      </pre>
    </div>

    {/* 3. Time-Variant */}
    <h2 className="text-3xl font-bold mt-8">3. Time-Variant</h2>
    <p className="leading-relaxed">
      Data warehouse maintains historical data, typically spanning 5-10 years. Every record is
      associated with a time element, enabling trend analysis and historical comparisons.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Time-Variant Nature:
────────────────────────────────────────────────────────────────

Operational Database (Current State Only):
┌─────────────────────────────────────────┐
│ CustomerID │ Name    │ Address          │
├────────────┼─────────┼──────────────────┤
│ 1001       │ John    │ 123 New Street   │  ← Only current
└─────────────────────────────────────────┘

Data Warehouse (Historical Data):
┌──────────────────────────────────────────────────────────────┐
│ CustomerID │ Name  │ Address          │ EffectiveDate │ EndDate    │
├────────────┼───────┼──────────────────┼───────────────┼────────────┤
│ 1001       │ John  │ 456 Old Street   │ 2020-01-01    │ 2022-06-30 │
│ 1001       │ John  │ 789 Mid Street   │ 2022-07-01    │ 2024-12-31 │
│ 1001       │ John  │ 123 New Street   │ 2025-01-01    │ 9999-12-31 │
└──────────────────────────────────────────────────────────────┘
                                    ↑
                              Full history preserved

Time Elements in Data Warehouse:
• Transaction Date/Time
• Effective Date and End Date
• Load Date (when data entered warehouse)
• Snapshot Date (for periodic snapshots)

Typical Time Horizon:
• Operational DB: 60-90 days current data
• Data Warehouse: 5-10 years historical data`}
      </pre>
    </div>

    {/* 4. Non-Volatile */}
    <h2 className="text-3xl font-bold mt-8">4. Non-Volatile</h2>
    <p className="leading-relaxed">
      Once data is loaded into the data warehouse, it is not changed or deleted. Only two operations
      are performed: initial loading and access (read). This ensures data stability for analysis.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Volatile Nature:
────────────────────────────────────────────────────────────────

Operational Database Operations:
┌─────────────────────────────────────────┐
│  INSERT  │  UPDATE  │  DELETE  │  SELECT │
│    ✓     │    ✓     │    ✓     │    ✓    │
└─────────────────────────────────────────┘
        Frequent changes to current data

Data Warehouse Operations:
┌─────────────────────────────────────────┐
│   LOAD   │  UPDATE  │  DELETE  │  READ   │
│    ✓     │    ✗     │    ✗     │    ✓    │
└─────────────────────────────────────────┘
        Data is stable once loaded

Why Non-Volatile?
────────────────────────────────────────────────────────────────
1. Ensures consistent analysis over time
2. Provides reliable audit trail
3. Enables reproducible reports
4. Maintains data integrity for historical comparison
5. Simplifies backup and recovery

Note: "Non-volatile" doesn't mean data never changes.
      New data is ADDED, but existing data is not MODIFIED.

      Incorrect data → Add correcting record with new timestamp
      (Not update existing record)`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Operational DB vs Data Warehouse</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Operational Database</th>
            <th className="p-3 border">Data Warehouse</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Orientation</td>
            <td className="p-3 border">Application/Process</td>
            <td className="p-3 border">Subject/Business Area</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integration</td>
            <td className="p-3 border">Isolated, application-specific</td>
            <td className="p-3 border">Unified from multiple sources</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time Scope</td>
            <td className="p-3 border">Current (60-90 days)</td>
            <td className="p-3 border">Historical (5-10 years)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Volatility</td>
            <td className="p-3 border">Highly volatile (CRUD)</td>
            <td className="p-3 border">Non-volatile (Load & Read)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Run business operations</td>
            <td className="p-3 border">Analyze business performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Subject-Oriented:</strong> Data organized by business subjects (Customer, Product, Sales), not applications</li>
        <li><strong>Integrated:</strong> Data from multiple sources unified with consistent naming, encoding, and formats</li>
        <li><strong>Time-Variant:</strong> Historical data maintained (5-10 years) with time dimension for trend analysis</li>
        <li><strong>Non-Volatile:</strong> Data is stable once loaded; only Load and Read operations (no Update/Delete)</li>
        <li>These four characteristics are fundamental to Bill Inmon's definition</li>
        <li>They distinguish DW from OLTP systems designed for transaction processing</li>
      </ul>
    </div>
  </div>
);

export default DWCharacteristics;
