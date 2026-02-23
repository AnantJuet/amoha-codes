import React from "react";

const IncrementalLoading: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Incremental Loading
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Incremental loading is an ETL strategy that processes only new or changed records
      since the last load, rather than reloading all data. This approach dramatically
      reduces processing time, resource usage, and impact on source systems.
    </p>

    {/* Full vs Incremental */}
    <h2 className="text-3xl font-bold mt-8">Full Load vs Incremental Load</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Full Load vs Incremental Load:
════════════════════════════════════════════════════════════════

FULL LOAD:                          INCREMENTAL LOAD:
──────────                          ────────────────

Day 1:                              Day 1:
┌───────────────────────┐           ┌───────────────────────┐
│ Load ALL 10M records  │           │ Load ALL 10M records  │
│ Time: 4 hours         │           │ Time: 4 hours         │
│ Impact: HIGH          │           │ Impact: HIGH          │
└───────────────────────┘           └───────────────────────┘

Day 2:                              Day 2:
┌───────────────────────┐           ┌───────────────────────┐
│ Load ALL 10.1M records│           │ Load 100K NEW records │
│ Time: 4+ hours        │           │ Time: 15 minutes      │
│ Impact: HIGH          │           │ Impact: LOW           │
└───────────────────────┘           └───────────────────────┘

Day 30:                             Day 30:
┌───────────────────────┐           ┌───────────────────────┐
│ Load ALL 13M records  │           │ Load 95K NEW records  │
│ Time: 5+ hours        │           │ Time: 14 minutes      │
│ Impact: HIGH          │           │ Impact: LOW           │
└───────────────────────┘           └───────────────────────┘

Cumulative Time (30 days):
Full: ~130 hours                    Incremental: ~11 hours
                                    Savings: 90%+`}
      </pre>
    </div>

    {/* Change Detection Methods */}
    <h2 className="text-3xl font-bold mt-8">Change Detection Methods</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Timestamp-Based</h3>
        <p className="text-sm mb-2">Use modified_date or updated_at column to identify changed records.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Get last load timestamp
SET @last_load = (SELECT MAX(load_timestamp)
                  FROM etl_control WHERE table_name = 'orders');

-- Extract changes since last load
SELECT * FROM source_orders
WHERE modified_date > @last_load;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Sequence/ID-Based</h3>
        <p className="text-sm mb-2">Use auto-incrementing ID or sequence number for append-only tables.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Get last loaded ID
SET @last_id = (SELECT MAX(transaction_id) FROM dw_transactions);

-- Extract new records
SELECT * FROM source_transactions
WHERE transaction_id > @last_id;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Hash-Based Comparison</h3>
        <p className="text-sm mb-2">Compare row hashes to detect changes when no timestamp exists.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create hash of row content
SELECT
    customer_id,
    MD5(CONCAT(name, email, address, phone)) as row_hash
FROM source_customers;

-- Compare to detect changes
SELECT s.* FROM source_customers s
JOIN dw_customers d ON s.customer_id = d.customer_id
WHERE MD5(CONCAT(s.name, s.email, s.address, s.phone)) <> d.row_hash;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. Change Data Capture (CDC)</h3>
        <p className="text-sm mb-2">Read database transaction logs to capture all changes including deletes.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- CDC typically provides:
┌───────────┬───────────┬────────────────────┬─────────────┐
│ operation │ timestamp │ before_image       │ after_image │
├───────────┼───────────┼────────────────────┼─────────────┤
│ INSERT    │ 10:15:00  │ NULL               │ {new data}  │
│ UPDATE    │ 10:16:30  │ {old data}         │ {new data}  │
│ DELETE    │ 10:17:45  │ {deleted data}     │ NULL        │
└───────────┴───────────┴────────────────────┴─────────────┘`}
          </pre>
        </div>
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Method Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Detects Deletes</th>
            <th className="p-3 border">Source Req.</th>
            <th className="p-3 border">Performance</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Timestamp</td>
            <td className="p-3 border">No (unless soft delete)</td>
            <td className="p-3 border">Modified_date column</td>
            <td className="p-3 border">Fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequence/ID</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Auto-increment ID</td>
            <td className="p-3 border">Very Fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hash Compare</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Slow (full scan)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CDC</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">DB log access</td>
            <td className="p-3 border">Real-time capable</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Implementation Pattern */}
    <h2 className="text-3xl font-bold mt-8">Implementation Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incremental Load Implementation:
════════════════════════════════════════════════════════════════

-- Control Table to Track Load Status
CREATE TABLE etl_control (
    table_name        VARCHAR(100) PRIMARY KEY,
    last_load_time    TIMESTAMP,
    last_load_value   BIGINT,        -- For sequence-based
    rows_loaded       BIGINT,
    status            VARCHAR(20)
);

-- Step 1: Get high watermark
SELECT last_load_time, last_load_value
INTO @last_time, @last_value
FROM etl_control
WHERE table_name = 'orders';

-- Step 2: Extract incremental data
INSERT INTO staging_orders
SELECT * FROM source_orders
WHERE modified_date > @last_time
   OR order_id > @last_value;

-- Step 3: Transform and load (standard process)
-- ...

-- Step 4: Update control table
UPDATE etl_control
SET last_load_time = CURRENT_TIMESTAMP,
    last_load_value = (SELECT MAX(order_id) FROM staging_orders),
    rows_loaded = (SELECT COUNT(*) FROM staging_orders),
    status = 'SUCCESS'
WHERE table_name = 'orders';`}
      </pre>
    </div>

    {/* Handling Deletes */}
    <h2 className="text-3xl font-bold mt-8">Handling Deletes</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Soft Deletes</h3>
        <p className="text-sm">Source marks records as deleted (is_deleted flag). Incremental load includes these with timestamp detection.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">CDC for Deletes</h3>
        <p className="text-sm">CDC captures DELETE operations from transaction logs, enabling true incremental delete processing.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Periodic Full Reconciliation</h3>
        <p className="text-sm">Run weekly/monthly full comparison to detect any missed deletes from incremental loads.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Key List Comparison</h3>
        <p className="text-sm">Extract only keys from source, compare to DW keys to identify deleted records.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Incremental loading processes only new/changed records</li>
        <li>Dramatically reduces ETL time and resource usage</li>
        <li>Common methods: timestamp, sequence ID, hash comparison, CDC</li>
        <li>Use control tables to track high watermark for each table</li>
        <li>Timestamp-based is most common when modified_date exists</li>
        <li>CDC is best for capturing all changes including deletes</li>
        <li>Consider periodic full reconciliation to catch missed changes</li>
        <li>Choose method based on source system capabilities</li>
      </ul>
    </div>
  </div>
);

export default IncrementalLoading;
