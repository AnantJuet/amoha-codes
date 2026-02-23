import React from "react";

const DataLoading: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Loading
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data loading is the final phase of ETL where transformed data is written into the
      data warehouse. This phase must maintain data integrity, handle errors gracefully,
      and optimize for performance while ensuring dimensions are loaded before facts.
    </p>

    {/* Loading Process */}
    <h2 className="text-3xl font-bold mt-8">Loading Process Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Loading Sequence:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    LOADING ORDER (Critical!)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Step 1: LOAD DIMENSIONS FIRST                                 │
│   ─────────────────────────────                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐          │
│   │  Date   │  │Customer │  │ Product │  │  Store  │          │
│   │   Dim   │  │   Dim   │  │   Dim   │  │   Dim   │          │
│   └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘          │
│        │            │            │            │                 │
│        └────────────┴─────┬──────┴────────────┘                │
│                           │                                     │
│                           ▼                                     │
│   Step 2: THEN LOAD FACTS                                       │
│   ───────────────────────                                       │
│             ┌─────────────────────────┐                        │
│             │       SALES_FACT        │                        │
│             │  (with FK to all dims)  │                        │
│             └─────────────────────────┘                        │
│                                                                  │
│   Step 3: POST-LOAD TASKS                                       │
│   ───────────────────────                                       │
│   • Update indexes and statistics                               │
│   • Validate row counts                                         │
│   • Run data quality checks                                     │
│   • Update load audit tables                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Loading Strategies */}
    <h2 className="text-3xl font-bold mt-8">Loading Strategies</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Initial Load (Full Load)</h3>
        <p className="text-sm mb-2">First-time population of the data warehouse with all historical data.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Truncate and load (fastest for initial load)
TRUNCATE TABLE dim_customer;

INSERT INTO dim_customer
SELECT * FROM transformed_customers;

-- Typically done once during DW setup`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Incremental Load</h3>
        <p className="text-sm mb-2">Regular loads of only new and changed data.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Insert new records
INSERT INTO fact_sales (date_key, customer_key, amount)
SELECT date_key, customer_key, amount
FROM staging_sales s
WHERE NOT EXISTS (
  SELECT 1 FROM fact_sales f
  WHERE f.transaction_id = s.transaction_id
);

-- Update existing records (for SCD Type 1)
UPDATE dim_customer c
SET c.email = s.email
FROM staging_customers s
WHERE c.customer_id = s.customer_id
  AND c.email <> s.email;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Merge/Upsert Load</h3>
        <p className="text-sm mb-2">Combines insert and update in single operation.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- MERGE statement (SQL Server/Oracle)
MERGE INTO dim_product AS target
USING staging_products AS source
ON target.product_id = source.product_id
WHEN MATCHED THEN
  UPDATE SET target.product_name = source.product_name,
             target.price = source.price
WHEN NOT MATCHED THEN
  INSERT (product_key, product_id, product_name, price)
  VALUES (NEXT VALUE FOR product_seq,
          source.product_id, source.product_name, source.price);`}
          </pre>
        </div>
      </div>
    </div>

    {/* Load Types */}
    <h2 className="text-3xl font-bold mt-8">Load Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Performance</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Full Refresh</td>
            <td className="p-3 border">Truncate + Insert</td>
            <td className="p-3 border">Small dimensions, initial load</td>
            <td className="p-3 border">Fast for small tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Append Only</td>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">Fact tables, event data</td>
            <td className="p-3 border">Very fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incremental</td>
            <td className="p-3 border">Insert + Update</td>
            <td className="p-3 border">Dimensions with changes</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Merge/Upsert</td>
            <td className="p-3 border">MERGE statement</td>
            <td className="p-3 border">Dimensions, complex updates</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bulk Load</td>
            <td className="p-3 border">BULK INSERT, COPY</td>
            <td className="p-3 border">Large volume loads</td>
            <td className="p-3 border">Fastest for large data</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Performance Optimization */}
    <h2 className="text-3xl font-bold mt-8">Performance Optimization Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Loading Performance Optimization:
════════════════════════════════════════════════════════════════

1. DISABLE INDEXES DURING LOAD (Rebuild After)
   ─────────────────────────────────────────────
   -- Before load
   ALTER INDEX idx_fact_sales_date DISABLE;

   -- Load data...

   -- After load
   ALTER INDEX idx_fact_sales_date REBUILD;

2. USE BULK LOAD OPERATIONS
   ─────────────────────────
   -- SQL Server BULK INSERT
   BULK INSERT fact_sales
   FROM '/data/sales.csv'
   WITH (FIELDTERMINATOR = ',', ROWTERMINATOR = '\\n');

   -- PostgreSQL COPY
   COPY fact_sales FROM '/data/sales.csv' WITH CSV;

3. PARALLEL LOADING
   ─────────────────
   -- Split data into partitions, load in parallel
   -- Partition 1: Load date_key <= 20260101
   -- Partition 2: Load date_key > 20260101

4. BATCH PROCESSING
   ─────────────────
   -- Load in chunks of 100,000 rows
   INSERT INTO fact_sales
   SELECT * FROM staging_sales
   WHERE batch_id = 1;  -- Repeat for each batch

5. MINIMIZE LOGGING (If supported)
   ─────────────────────────────
   -- SQL Server minimal logging
   ALTER DATABASE warehouse SET RECOVERY SIMPLE;
   -- Load data...
   ALTER DATABASE warehouse SET RECOVERY FULL;`}
      </pre>
    </div>

    {/* Error Handling */}
    <h2 className="text-3xl font-bold mt-8">Error Handling</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Reject File Pattern</h3>
        <p className="text-sm">Failed records written to error table for later review and reprocessing.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Transaction Rollback</h3>
        <p className="text-sm">On critical errors, roll back entire batch to maintain consistency.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Default Value Substitution</h3>
        <p className="text-sm">Replace invalid values with defaults (e.g., unknown dimension key).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Audit Logging</h3>
        <p className="text-sm">Log all load operations with row counts, timestamps, and status.</p>
      </div>
    </div>

    {/* Post-Load Tasks */}
    <h2 className="text-3xl font-bold mt-8">Post-Load Tasks</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Post-Load Checklist:
════════════════════════════════════════════════════════════════

-- 1. Update statistics for query optimizer
ANALYZE TABLE fact_sales;
-- or
UPDATE STATISTICS fact_sales;

-- 2. Rebuild/Reorganize indexes
ALTER INDEX ALL ON fact_sales REBUILD;

-- 3. Validate row counts
SELECT 'staging' as source, COUNT(*) FROM staging_sales
UNION ALL
SELECT 'target' as source, COUNT(*) FROM fact_sales
WHERE date_key = 20260115;  -- Today's load

-- 4. Update audit/control table
INSERT INTO etl_audit (
    table_name,
    load_date,
    rows_loaded,
    status
) VALUES (
    'fact_sales',
    CURRENT_TIMESTAMP,
    50000,
    'SUCCESS'
);

-- 5. Run data quality checks
SELECT
    COUNT(*) as orphan_records
FROM fact_sales f
WHERE NOT EXISTS (
    SELECT 1 FROM dim_customer c
    WHERE c.customer_key = f.customer_key
);`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always load dimensions before fact tables (FK dependency)</li>
        <li>Use appropriate load strategy: full refresh, incremental, or merge</li>
        <li>Bulk load operations are fastest for large data volumes</li>
        <li>Disable indexes during load, rebuild after for performance</li>
        <li>Implement proper error handling (reject files, rollback)</li>
        <li>Validate row counts between staging and target</li>
        <li>Update statistics after loading for query optimization</li>
        <li>Log all load operations in audit tables</li>
      </ul>
    </div>
  </div>
);

export default DataLoading;
