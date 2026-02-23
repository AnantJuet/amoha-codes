import React from "react";

const CDCTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Change Data Capture (CDC) Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Change Data Capture (CDC) is a set of techniques for identifying and capturing
      changes made to source data. CDC enables efficient incremental loading and
      real-time data integration by tracking inserts, updates, and deletes.
    </p>

    {/* CDC Overview */}
    <h2 className="text-3xl font-bold mt-8">CDC Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Change Data Capture Process:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    SOURCE DATABASE                               │
│                                                                  │
│   Application writes data                                        │
│           │                                                      │
│           ▼                                                      │
│   ┌───────────────┐      ┌───────────────────────────────────┐ │
│   │  Data Tables  │      │      Transaction Log (WAL)        │ │
│   │ ┌───────────┐ │      │  ┌─────┬────────┬───────────────┐ │ │
│   │ │ customers │ │      │  │ LSN │ Op     │ Data          │ │ │
│   │ │ orders    │ │      │  ├─────┼────────┼───────────────┤ │ │
│   │ │ products  │ │─────►│  │ 001 │ INSERT │ customer #123 │ │ │
│   │ └───────────┘ │      │  │ 002 │ UPDATE │ order #456    │ │ │
│   └───────────────┘      │  │ 003 │ DELETE │ product #789  │ │ │
│                          │  └─────┴────────┴───────────────┘ │ │
│                          └───────────────┬───────────────────┘ │
└──────────────────────────────────────────┼──────────────────────┘
                                           │
                                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CDC SYSTEM                                    │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  CDC Reader (Debezium, Oracle GoldenGate, AWS DMS)      │   │
│   │  • Reads transaction log                                 │   │
│   │  • Converts to change events                            │   │
│   │  • Maintains position (offset)                          │   │
│   └────────────────────────┬────────────────────────────────┘   │
│                            │                                     │
│                            ▼                                     │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Change Events → Kafka / Message Queue / Target DW      │   │
│   └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* CDC Techniques */}
    <h2 className="text-3xl font-bold mt-8">CDC Techniques</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Log-Based CDC</h3>
        <p className="text-sm mb-2">Reads database transaction logs (WAL, redo logs) to capture all changes. Most efficient and non-invasive approach.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
            <p className="text-xs font-bold text-green-800 dark:text-green-200">Pros:</p>
            <p className="text-xs">No source impact, captures deletes, real-time capable</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded">
            <p className="text-xs font-bold text-red-800 dark:text-red-200">Cons:</p>
            <p className="text-xs">DB-specific, requires log access permissions</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Trigger-Based CDC</h3>
        <p className="text-sm mb-2">Database triggers capture changes and write to audit/shadow tables.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TRIGGER capture_customer_changes
AFTER INSERT OR UPDATE OR DELETE ON customers
FOR EACH ROW
INSERT INTO customers_cdc (
    operation, change_time, old_data, new_data
) VALUES (
    TG_OP, NOW(), row_to_json(OLD), row_to_json(NEW)
);`}
          </pre>
        </div>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
            <p className="text-xs font-bold text-green-800 dark:text-green-200">Pros:</p>
            <p className="text-xs">Works on any DB, captures before/after images</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded">
            <p className="text-xs font-bold text-red-800 dark:text-red-200">Cons:</p>
            <p className="text-xs">Performance overhead, schema changes needed</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Timestamp-Based CDC</h3>
        <p className="text-sm mb-2">Query records modified since last extraction using timestamp column.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT * FROM customers
WHERE modified_date > @last_extraction_time;`}
          </pre>
        </div>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
            <p className="text-xs font-bold text-green-800 dark:text-green-200">Pros:</p>
            <p className="text-xs">Simple, works universally</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded">
            <p className="text-xs font-bold text-red-800 dark:text-red-200">Cons:</p>
            <p className="text-xs">Cannot detect deletes, requires indexed column</p>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. Diff-Based CDC</h3>
        <p className="text-sm mb-2">Compare current snapshot with previous snapshot to identify changes.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
            <p className="text-xs font-bold text-green-800 dark:text-green-200">Pros:</p>
            <p className="text-xs">Works without source changes, detects deletes</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded">
            <p className="text-xs font-bold text-red-800 dark:text-red-200">Cons:</p>
            <p className="text-xs">Resource intensive, requires full table scan</p>
          </div>
        </div>
      </div>
    </div>

    {/* CDC Tools */}
    <h2 className="text-3xl font-bold mt-8">Popular CDC Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Supported Sources</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Debezium</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">MySQL, PostgreSQL, MongoDB, SQL Server, Oracle</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Oracle GoldenGate</td>
            <td className="p-3 border">Enterprise</td>
            <td className="p-3 border">Oracle, SQL Server, MySQL, PostgreSQL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AWS DMS</td>
            <td className="p-3 border">Cloud Service</td>
            <td className="p-3 border">Most major databases</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fivetran HVR</td>
            <td className="p-3 border">Cloud Service</td>
            <td className="p-3 border">Enterprise databases</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Qlik Replicate</td>
            <td className="p-3 border">Enterprise</td>
            <td className="p-3 border">Wide database support</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maxwell</td>
            <td className="p-3 border">Open Source</td>
            <td className="p-3 border">MySQL only</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Debezium Example */}
    <h2 className="text-3xl font-bold mt-8">Debezium CDC Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Debezium Change Event (JSON):
════════════════════════════════════════════════════════════════

{
  "schema": {...},
  "payload": {
    "before": {                    // Previous state
      "id": 1001,
      "name": "John Smith",
      "email": "john@old.com"
    },
    "after": {                     // Current state
      "id": 1001,
      "name": "John Smith",
      "email": "john@new.com"      // Changed!
    },
    "source": {
      "version": "2.0.0",
      "connector": "postgresql",
      "db": "customers_db",
      "table": "customers",
      "txId": 12345,
      "lsn": 98765432,
      "ts_ms": 1705305600000
    },
    "op": "u",                     // u=update, c=create, d=delete
    "ts_ms": 1705305600123
  }
}

Operation Types:
• "c" = Create (INSERT)
• "u" = Update (UPDATE)
• "d" = Delete (DELETE)
• "r" = Read (initial snapshot)`}
      </pre>
    </div>

    {/* Architecture */}
    <h2 className="text-3xl font-bold mt-8">CDC Architecture Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CDC Pipeline Architecture:
════════════════════════════════════════════════════════════════

┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   Source DB  │    │   Debezium   │    │    Kafka     │
│  (PostgreSQL)│───►│  Connector   │───►│   Topics     │
└──────────────┘    └──────────────┘    └──────┬───────┘
                                               │
                    ┌──────────────────────────┤
                    │                          │
                    ▼                          ▼
          ┌──────────────────┐      ┌──────────────────┐
          │  Stream Consumer │      │  Stream Consumer │
          │  (Real-time DW)  │      │  (Analytics App) │
          └────────┬─────────┘      └──────────────────┘
                   │
                   ▼
          ┌──────────────────┐
          │   Data Warehouse │
          │   (Snowflake)    │
          └──────────────────┘

Benefits:
• Real-time data availability
• Decoupled consumers
• Replay capability from Kafka
• Multiple downstream systems`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CDC captures data changes (INSERT, UPDATE, DELETE) for incremental loading</li>
        <li>Log-based CDC is most efficient - reads transaction logs without impacting source</li>
        <li>Trigger-based CDC works universally but adds overhead to source systems</li>
        <li>Timestamp-based is simple but cannot detect deletes</li>
        <li>Debezium is the most popular open-source CDC tool</li>
        <li>CDC enables near real-time data integration</li>
        <li>Kafka is commonly used to stream CDC events to consumers</li>
        <li>CDC captures both before and after images for full change context</li>
      </ul>
    </div>
  </div>
);

export default CDCTechniques;
