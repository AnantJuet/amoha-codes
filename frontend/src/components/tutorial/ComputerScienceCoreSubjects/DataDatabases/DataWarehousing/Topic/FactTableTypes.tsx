import React from "react";

const FactTableTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Fact Tables
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fact tables can be categorized based on how they capture and store business events.
      The three main types are Transaction, Periodic Snapshot, and Accumulating Snapshot
      fact tables, each serving different analytical needs.
    </p>

    {/* Three Types Overview */}
    <h2 className="text-3xl font-bold mt-8">Three Types of Fact Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Types of Fact Tables:
════════════════════════════════════════════════════════════════

1. TRANSACTION FACT TABLE
   ├── Records individual events as they occur
   ├── One row per transaction
   └── Example: Each sale, each click, each call

2. PERIODIC SNAPSHOT FACT TABLE
   ├── Captures state at regular intervals
   ├── One row per time period per entity
   └── Example: Daily balance, monthly inventory

3. ACCUMULATING SNAPSHOT FACT TABLE
   ├── Tracks lifecycle of a process
   ├── One row per entity, updated over time
   └── Example: Order fulfillment, loan application`}
      </pre>
    </div>

    {/* Transaction Fact Table */}
    <h2 className="text-3xl font-bold mt-8">1. Transaction Fact Table</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Transaction fact tables record individual business events at the most granular level.
        Each row represents a single transaction that occurred at a specific point in time.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction Fact Table Example - SALES_FACT:
════════════════════════════════════════════════════════════════

┌──────────────┬──────────┬──────────┬──────────┬──────┬─────────┐
│ trans_id     │ date_key │ cust_key │ prod_key │ qty  │ amount  │
├──────────────┼──────────┼──────────┼──────────┼──────┼─────────┤
│ TXN-001      │ 20260115 │ 1001     │ 501      │ 2    │ 59.98   │
│ TXN-002      │ 20260115 │ 1002     │ 502      │ 1    │ 49.99   │
│ TXN-003      │ 20260115 │ 1001     │ 503      │ 3    │ 59.97   │
│ TXN-004      │ 20260116 │ 1003     │ 501      │ 1    │ 29.99   │
└──────────────┴──────────┴──────────┴──────────┴──────┴─────────┘

Characteristics:
• One row per transaction event
• Point-in-time grain
• Rows are inserted, never updated
• Grows continuously over time
• Supports detailed drill-down analysis`}
        </pre>
      </div>
      <div className="mt-4">
        <span className="font-bold">Use Cases:</span> Sales transactions, web clicks, ATM withdrawals, call records
      </div>
    </div>

    {/* Periodic Snapshot */}
    <h2 className="text-3xl font-bold mt-8">2. Periodic Snapshot Fact Table</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Periodic snapshot tables capture the state of measurable events at regular, predictable
        intervals. They show the cumulative or point-in-time metrics at the end of each period.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Periodic Snapshot Example - INVENTORY_SNAPSHOT:
════════════════════════════════════════════════════════════════

┌──────────┬──────────┬───────────┬──────────┬─────────────────┐
│ date_key │ prod_key │ store_key │ qty_hand │ qty_on_order    │
├──────────┼──────────┼───────────┼──────────┼─────────────────┤
│ 20260101 │ 501      │ 10        │ 100      │ 50              │
│ 20260101 │ 502      │ 10        │ 75       │ 25              │
│ 20260108 │ 501      │ 10        │ 85       │ 100             │
│ 20260108 │ 502      │ 10        │ 60       │ 50              │
│ 20260115 │ 501      │ 10        │ 120      │ 0               │
│ 20260115 │ 502      │ 10        │ 90       │ 25              │
└──────────┴──────────┴───────────┴──────────┴─────────────────┘

Characteristics:
• One row per period per entity
• Fixed interval grain (daily, weekly, monthly)
• Captures cumulative or point-in-time state
• Semi-additive measures (don't sum across time)
• New rows added each period`}
        </pre>
      </div>
      <div className="mt-4">
        <span className="font-bold">Use Cases:</span> Account balances, inventory levels, project status, pipeline snapshots
      </div>
    </div>

    {/* Accumulating Snapshot */}
    <h2 className="text-3xl font-bold mt-8">3. Accumulating Snapshot Fact Table</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Accumulating snapshot tables track the complete lifecycle of a process or workflow.
        A single row is created at the start and updated as the process moves through milestones.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Accumulating Snapshot Example - ORDER_FULFILLMENT:
════════════════════════════════════════════════════════════════

┌──────────┬───────────┬───────────┬───────────┬───────────┬────────┐
│ order_id │ order_dt  │ ship_dt   │ deliver_dt│ return_dt │ amount │
├──────────┼───────────┼───────────┼───────────┼───────────┼────────┤
│ ORD-001  │ 20260110  │ 20260112  │ 20260115  │ NULL      │ 199.99 │
│ ORD-002  │ 20260111  │ 20260113  │ NULL      │ NULL      │ 89.99  │
│ ORD-003  │ 20260112  │ NULL      │ NULL      │ NULL      │ 299.99 │
│ ORD-004  │ 20260108  │ 20260109  │ 20260112  │ 20260114  │ 49.99  │
└──────────┴───────────┴───────────┴───────────┴───────────┴────────┘

Characteristics:
• One row per process instance
• Multiple date foreign keys (milestones)
• Row is UPDATED as process progresses
• Shows current state and history
• Useful for lag analysis between steps`}
        </pre>
      </div>
      <div className="mt-4">
        <span className="font-bold">Use Cases:</span> Order fulfillment, claim processing, loan origination, student enrollment
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Transaction</th>
            <th className="p-3 border">Periodic Snapshot</th>
            <th className="p-3 border">Accumulating Snapshot</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Grain</td>
            <td className="p-3 border">One event</td>
            <td className="p-3 border">One period</td>
            <td className="p-3 border">One lifecycle</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Date Keys</td>
            <td className="p-3 border">Single date</td>
            <td className="p-3 border">Single period date</td>
            <td className="p-3 border">Multiple milestone dates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Updates</td>
            <td className="p-3 border">Insert only</td>
            <td className="p-3 border">Insert only</td>
            <td className="p-3 border">Insert and Update</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Measures</td>
            <td className="p-3 border">Additive</td>
            <td className="p-3 border">Semi-additive</td>
            <td className="p-3 border">Additive + lag times</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Transaction:</strong> Records individual events, insert-only, additive measures</li>
        <li><strong>Periodic Snapshot:</strong> State at intervals, insert-only, semi-additive measures</li>
        <li><strong>Accumulating Snapshot:</strong> Process lifecycle, updated over time, multiple dates</li>
        <li>Choose based on business process and analytical requirements</li>
        <li>Transaction facts are most common and granular</li>
        <li>Snapshots are useful for balance/state tracking and process analysis</li>
        <li>A single data warehouse may use all three types</li>
      </ul>
    </div>
  </div>
);

export default FactTableTypes;
