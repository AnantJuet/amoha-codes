import React from "react";

const DataExtraction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Extraction
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data extraction is the first phase of the ETL process where data is read from various
      source systems. The goal is to efficiently retrieve data while minimizing impact on
      source systems and capturing all necessary information for the data warehouse.
    </p>

    {/* Extraction Overview */}
    <h2 className="text-3xl font-bold mt-8">Extraction Process Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Extraction Process:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                     SOURCE SYSTEMS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   ERP   │  │   CRM   │  │  Files  │  │  APIs   │            │
│  │ (Oracle)│  │ (Sales- │  │  (CSV,  │  │ (REST,  │            │
│  │         │  │  force) │  │  Excel) │  │  SOAP)  │            │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘            │
│       │            │            │            │                  │
└───────┼────────────┼────────────┼────────────┼──────────────────┘
        │            │            │            │
        └────────────┴─────┬──────┴────────────┘
                           │
                    ┌──────▼──────┐
                    │  EXTRACTION │
                    │   METHODS   │
                    ├─────────────┤
                    │ • Full      │
                    │ • Incremental│
                    │ • CDC       │
                    │ • Real-time │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   STAGING   │
                    │    AREA     │
                    └─────────────┘`}
      </pre>
    </div>

    {/* Extraction Methods */}
    <h2 className="text-3xl font-bold mt-8">Extraction Methods</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Full Extraction</h3>
        <p className="text-sm mb-2">Extracts all data from the source every time.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Full extraction query
SELECT * FROM source_customers;

Pros: Simple, always complete
Cons: Resource intensive, slow for large tables`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Incremental Extraction</h3>
        <p className="text-sm mb-2">Extracts only new or changed records since last extraction.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Incremental extraction using timestamp
SELECT *
FROM source_orders
WHERE modified_date > '2026-01-14 00:00:00';

-- Using sequence number
SELECT *
FROM source_transactions
WHERE transaction_id > 1000000;

Pros: Faster, less resource usage
Cons: Requires reliable change indicator`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Change Data Capture (CDC)</h3>
        <p className="text-sm mb-2">Captures changes from database transaction logs.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`CDC captures INSERT, UPDATE, DELETE from logs:

Transaction Log Entry:
┌────────┬───────────┬──────────┬─────────────────────┐
│ LSN    │ Operation │ Table    │ Data                │
├────────┼───────────┼──────────┼─────────────────────┤
│ 100001 │ INSERT    │ Customer │ {id:5, name:'John'} │
│ 100002 │ UPDATE    │ Customer │ {id:3, name:'Jane'} │
│ 100003 │ DELETE    │ Order    │ {id:999}            │
└────────┴───────────┴──────────┴─────────────────────┘

Pros: Real-time, captures deletes
Cons: Complex setup, DB-specific`}
          </pre>
        </div>
      </div>
    </div>

    {/* Source Types */}
    <h2 className="text-3xl font-bold mt-8">Common Source Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Source Type</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Extraction Method</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Relational Database</td>
            <td className="p-3 border">Oracle, SQL Server, PostgreSQL</td>
            <td className="p-3 border">JDBC/ODBC, SQL queries, CDC</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flat Files</td>
            <td className="p-3 border">CSV, TSV, Fixed-width, Excel</td>
            <td className="p-3 border">File readers, full extraction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cloud Applications</td>
            <td className="p-3 border">Salesforce, HubSpot, Workday</td>
            <td className="p-3 border">REST APIs, connectors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NoSQL Databases</td>
            <td className="p-3 border">MongoDB, Cassandra, DynamoDB</td>
            <td className="p-3 border">Native drivers, export utilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Streaming Sources</td>
            <td className="p-3 border">Kafka, Kinesis, Event Hubs</td>
            <td className="p-3 border">Stream consumers, micro-batches</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Web Services</td>
            <td className="p-3 border">REST APIs, SOAP, GraphQL</td>
            <td className="p-3 border">HTTP requests, API calls</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Full vs Incremental */}
    <h2 className="text-3xl font-bold mt-8">Full vs Incremental Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Full vs Incremental Extraction:
════════════════════════════════════════════════════════════════

Full Extraction:                    Incremental Extraction:
──────────────────                  ──────────────────────

Day 1: Extract ALL                  Day 1: Extract ALL
┌─────────────────────┐            ┌─────────────────────┐
│ █████████████ 100%  │            │ █████████████ 100%  │
│ 1,000,000 rows      │            │ 1,000,000 rows      │
│ Time: 2 hours       │            │ Time: 2 hours       │
└─────────────────────┘            └─────────────────────┘

Day 2: Extract ALL again            Day 2: Extract CHANGES only
┌─────────────────────┐            ┌─────────────────────┐
│ █████████████ 100%  │            │ ██ 5%               │
│ 1,050,000 rows      │            │ 50,000 new rows     │
│ Time: 2.1 hours     │            │ Time: 6 minutes     │
└─────────────────────┘            └─────────────────────┘

Day 30: Still ALL                   Day 30: Still CHANGES only
┌─────────────────────┐            ┌─────────────────────┐
│ █████████████ 100%  │            │ █ 2%                │
│ 2,500,000 rows      │            │ 45,000 changed rows │
│ Time: 5 hours       │            │ Time: 5 minutes     │
└─────────────────────┘            └─────────────────────┘

Incremental saves significant time and resources!`}
      </pre>
    </div>

    {/* Change Detection Techniques */}
    <h2 className="text-3xl font-bold mt-8">Change Detection Techniques</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Timestamp Column</h3>
        <p className="text-sm">Use modified_date or updated_at column to identify changes. Simple but requires source system support.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Version Number</h3>
        <p className="text-sm">Incrementing version or sequence number. Reliable but requires source modification.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Database Triggers</h3>
        <p className="text-sm">Triggers log changes to audit tables. Captures deletes but adds overhead to source.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Log-based CDC</h3>
        <p className="text-sm">Read transaction logs directly. Non-invasive but database-specific implementation.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Hash Comparison</h3>
        <p className="text-sm">Compare row hashes to detect changes. Works universally but requires full table scan.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Application Events</h3>
        <p className="text-sm">Source publishes change events. Real-time but requires application modification.</p>
      </div>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Extraction Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-4">
      <li><strong>Minimize source impact:</strong> Extract during off-peak hours, use read replicas</li>
      <li><strong>Use incremental when possible:</strong> Reduces time, network, and storage usage</li>
      <li><strong>Handle deletes explicitly:</strong> Soft deletes or CDC to capture deletions</li>
      <li><strong>Extract to staging first:</strong> Never transform directly from source</li>
      <li><strong>Implement retry logic:</strong> Handle network failures and timeouts gracefully</li>
      <li><strong>Log extraction metadata:</strong> Track row counts, timestamps, and checksums</li>
      <li><strong>Validate extracted data:</strong> Check counts match between source and staging</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Extraction reads data from source systems into staging area</li>
        <li>Three main methods: Full, Incremental, and CDC</li>
        <li>Incremental extraction is preferred for performance and efficiency</li>
        <li>Change detection requires timestamp, version, or CDC mechanism</li>
        <li>Different source types require different extraction techniques</li>
        <li>Minimize impact on source systems (off-peak, read replicas)</li>
        <li>CDC captures deletes and provides near real-time capability</li>
        <li>Always extract to staging before transformation</li>
      </ul>
    </div>
  </div>
);

export default DataExtraction;
