import React from "react";

const DataTransformation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Transformation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data transformation is the second phase of ETL where extracted data is cleaned,
      validated, standardized, and converted into the format required by the data warehouse.
      This phase applies business rules and prepares data for analytical use.
    </p>

    {/* Transformation Overview */}
    <h2 className="text-3xl font-bold mt-8">Transformation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Transformation Pipeline:
════════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────┐
│                    STAGING AREA (Input)                       │
│  Raw extracted data from multiple sources                     │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                    TRANSFORMATION STEPS                       │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐        │
│  │   CLEANSE   │──►│  VALIDATE   │──►│ STANDARDIZE │        │
│  │ • Fix nulls │   │ • Rules     │   │ • Formats   │        │
│  │ • Trim      │   │ • Ranges    │   │ • Codes     │        │
│  │ • Dedupe    │   │ • Patterns  │   │ • Units     │        │
│  └─────────────┘   └─────────────┘   └─────────────┘        │
│         │                                   │                 │
│         ▼                                   ▼                 │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐        │
│  │  INTEGRATE  │──►│   DERIVE    │──►│   CONFORM   │        │
│  │ • Join      │   │ • Calculate │   │ • Surrogate │        │
│  │ • Merge     │   │ • Aggregate │   │   keys      │        │
│  │ • Match     │   │ • Lookup    │   │ • Dimension │        │
│  └─────────────┘   └─────────────┘   └─────────────┘        │
│                                                               │
└────────────────────────────┬─────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────┐
│                    TRANSFORMED DATA (Output)                  │
│  Clean, validated data ready for data warehouse               │
└──────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Transformation Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Transformations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Cleansing</td>
            <td className="p-3 border">Fix errors and inconsistencies</td>
            <td className="p-3 border">NULL → "Unknown", trim spaces</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Type Conversion</td>
            <td className="p-3 border">Convert between data types</td>
            <td className="p-3 border">String "2026-01-15" → DATE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Format Standardization</td>
            <td className="p-3 border">Standardize formats across sources</td>
            <td className="p-3 border">"NY", "N.Y." → "New York"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deduplication</td>
            <td className="p-3 border">Remove duplicate records</td>
            <td className="p-3 border">Merge duplicate customers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Aggregation</td>
            <td className="p-3 border">Summarize detailed data</td>
            <td className="p-3 border">SUM(sales) by day, product</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Derivation</td>
            <td className="p-3 border">Calculate new values</td>
            <td className="p-3 border">profit = revenue - cost</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookup/Join</td>
            <td className="p-3 border">Enrich with reference data</td>
            <td className="p-3 border">Customer ID → Surrogate Key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Splitting</td>
            <td className="p-3 border">Split single field into multiple</td>
            <td className="p-3 border">"John Smith" → First, Last</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Merging</td>
            <td className="p-3 border">Combine multiple fields</td>
            <td className="p-3 border">Street + City → Full Address</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pivoting</td>
            <td className="p-3 border">Rotate rows to columns</td>
            <td className="p-3 border">Monthly sales → Jan, Feb columns</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Examples */}
    <h2 className="text-3xl font-bold mt-8">Transformation Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Transformation SQL Examples:
════════════════════════════════════════════════════════════════

-- 1. Data Cleansing: Handle NULLs and trim whitespace
SELECT
    COALESCE(customer_name, 'Unknown') as customer_name,
    TRIM(email) as email,
    UPPER(state) as state
FROM staging_customers;

-- 2. Data Type Conversion
SELECT
    CAST(order_date_str AS DATE) as order_date,
    CAST(amount_str AS DECIMAL(10,2)) as amount
FROM staging_orders;

-- 3. Format Standardization
SELECT
    CASE state
        WHEN 'NY' THEN 'New York'
        WHEN 'N.Y.' THEN 'New York'
        WHEN 'CA' THEN 'California'
        ELSE state
    END as state_standardized
FROM staging_customers;

-- 4. Derivation: Calculate new columns
SELECT
    order_id,
    quantity,
    unit_price,
    quantity * unit_price as line_total,
    quantity * unit_price * 0.08 as tax_amount,
    quantity * unit_price * 1.08 as total_with_tax
FROM staging_order_items;

-- 5. Lookup: Get surrogate keys
SELECT
    s.order_id,
    d.date_key,
    c.customer_key,
    p.product_key,
    s.quantity,
    s.amount
FROM staging_sales s
LEFT JOIN dim_date d ON s.order_date = d.date_value
LEFT JOIN dim_customer c ON s.customer_id = c.customer_id
    AND c.is_current = 'Y'
LEFT JOIN dim_product p ON s.product_sku = p.sku;

-- 6. Aggregation
SELECT
    date_key,
    product_key,
    SUM(quantity) as total_quantity,
    SUM(amount) as total_amount,
    COUNT(*) as transaction_count
FROM transformed_sales
GROUP BY date_key, product_key;`}
      </pre>
    </div>

    {/* Transformation Patterns */}
    <h2 className="text-3xl font-bold mt-8">Common Transformation Patterns</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Surrogate Key Generation</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Lookup existing or generate new
SELECT COALESCE(
  (SELECT customer_key FROM dim_customer
   WHERE customer_id = 'CUST-001'),
  (SELECT MAX(customer_key)+1
   FROM dim_customer)
) as customer_key;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">SCD Type 2 Processing</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Close current record
UPDATE dim_customer
SET end_date = CURRENT_DATE - 1,
    is_current = 'N'
WHERE customer_id = 'CUST-001'
  AND is_current = 'Y';

-- Insert new version
INSERT INTO dim_customer...`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Quality Flag</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT *,
  CASE
    WHEN email NOT LIKE '%@%.%'
      THEN 'Invalid Email'
    WHEN amount < 0
      THEN 'Negative Amount'
    ELSE 'Valid'
  END as dq_status
FROM staging_data;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Deduplication</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Keep most recent record
SELECT * FROM (
  SELECT *,
    ROW_NUMBER() OVER (
      PARTITION BY customer_id
      ORDER BY modified_date DESC
    ) as rn
  FROM staging_customers
) WHERE rn = 1;`}
          </pre>
        </div>
      </div>
    </div>

    {/* Transformation Challenges */}
    <h2 className="text-3xl font-bold mt-8">Common Challenges</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Quality Issues</h3>
        <p className="text-sm">Missing values, inconsistent formats, invalid data. Solution: Implement validation rules and error handling.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Source System Differences</h3>
        <p className="text-sm">Different codes, formats, and structures across systems. Solution: Create mapping tables and standardization rules.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Performance</h3>
        <p className="text-sm">Large data volumes cause slow transformations. Solution: Optimize queries, use parallel processing, partition data.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Complex Business Rules</h3>
        <p className="text-sm">Complicated logic for calculations and mappings. Solution: Document rules clearly, use reusable functions.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Transformation converts raw data into warehouse-ready format</li>
        <li>Common types: cleansing, conversion, standardization, aggregation</li>
        <li>Surrogate key lookup/generation connects facts to dimensions</li>
        <li>SCD processing handles historical changes in dimensions</li>
        <li>Data quality validation should occur during transformation</li>
        <li>Document all business rules and transformation logic</li>
        <li>Optimize for performance with large data volumes</li>
        <li>Use staging tables for intermediate transformation results</li>
      </ul>
    </div>
  </div>
);

export default DataTransformation;
