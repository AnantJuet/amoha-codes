import React from "react";

const ODS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operational Data Store (ODS)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Operational Data Store (ODS) is a database designed to integrate data from multiple sources
      for operational reporting and real-time or near-real-time decision making. It bridges the gap
      between OLTP systems and the data warehouse.
    </p>

    {/* What is ODS */}
    <h2 className="text-3xl font-bold mt-8">What is an ODS?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Operational Data Store - Position in Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                      SOURCE SYSTEMS                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   ERP   │  │   CRM   │  │ Billing │  │  Other  │            │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘            │
└───────┼────────────┼────────────┼────────────┼──────────────────┘
        │            │            │            │
        └────────────┴─────┬──────┴────────────┘
                           │ Near Real-Time
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                   OPERATIONAL DATA STORE (ODS)                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   • Current/Recent data only (hours to days)                    │
│   • Subject-oriented but volatile                               │
│   • Supports operational reporting                              │
│   • Updated frequently (real-time/near real-time)               │
│   • Used for day-to-day operational decisions                   │
│                                                                  │
└─────────────────────────────┬───────────────────────────────────┘
                              │ Batch ETL
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA WAREHOUSE                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   • Historical data (years)                                      │
│   • Non-volatile                                                 │
│   • Strategic/analytical reporting                              │
│   • Updated periodically (daily/weekly)                         │
│   • Used for long-term strategic decisions                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* ODS vs DW Comparison */}
    <h2 className="text-3xl font-bold mt-8">ODS vs Data Warehouse</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">ODS</th>
            <th className="p-3 border">Data Warehouse</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Currency</td>
            <td className="p-3 border">Current (real-time/near real-time)</td>
            <td className="p-3 border">Historical (batch updated)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time Span</td>
            <td className="p-3 border">Hours to days</td>
            <td className="p-3 border">Years (5-10 years)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Volatility</td>
            <td className="p-3 border">Volatile (data changes)</td>
            <td className="p-3 border">Non-volatile (append only)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Update Frequency</td>
            <td className="p-3 border">Continuous/Frequent</td>
            <td className="p-3 border">Periodic (daily/weekly)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Operational decisions</td>
            <td className="p-3 border">Strategic analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Type</td>
            <td className="p-3 border">Simple, current state</td>
            <td className="p-3 border">Complex, trend analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">Normalized or hybrid</td>
            <td className="p-3 border">Dimensional (star schema)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Types of ODS */}
    <h2 className="text-3xl font-bold mt-8">Types of ODS</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class I ODS</h3>
        <p className="text-sm">Data is updated asynchronously from source systems. Updates happen within seconds to hours.</p>
        <p className="text-sm mt-1 text-gray-600">Use case: Customer service viewing recent orders</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class II ODS</h3>
        <p className="text-sm">Data is updated on a store-and-forward basis. Updates happen every few hours.</p>
        <p className="text-sm mt-1 text-gray-600">Use case: Daily operational dashboards</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class III ODS</h3>
        <p className="text-sm">Data is updated in batch mode, typically once per day. Similar to staging area.</p>
        <p className="text-sm mt-1 text-gray-600">Use case: Morning operational reports</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Class IV ODS</h3>
        <p className="text-sm">Synchronous real-time updates. Data is current to the second.</p>
        <p className="text-sm mt-1 text-gray-600">Use case: Fraud detection, real-time inventory</p>
      </div>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Customer 360 View</h3>
        <p className="text-sm">Integrated view of customer across all touchpoints for service reps.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Order Status Tracking</h3>
        <p className="text-sm">Real-time visibility into order processing and fulfillment.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Inventory Management</h3>
        <p className="text-sm">Current stock levels across warehouses and locations.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Fraud Detection</h3>
        <p className="text-sm">Real-time analysis of transactions for suspicious patterns.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ODS bridges the gap between OLTP systems and data warehouse</li>
        <li>Contains current/recent data, not historical data</li>
        <li>Updated frequently (real-time to daily) unlike DW batch loads</li>
        <li>Volatile - data can be updated, unlike non-volatile DW</li>
        <li>Used for operational reporting and day-to-day decisions</li>
        <li>Four classes based on update frequency (I: seconds, IV: real-time)</li>
        <li>Can feed data into the data warehouse for historical analysis</li>
        <li>Common use cases: Customer 360, inventory, fraud detection</li>
      </ul>
    </div>
  </div>
);

export default ODS;
