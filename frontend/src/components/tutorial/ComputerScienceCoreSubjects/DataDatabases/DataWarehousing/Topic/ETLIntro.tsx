import React from "react";

const ETLIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to ETL Process
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL (Extract, Transform, Load) is the foundational process for populating a data warehouse.
      It involves extracting data from various source systems, transforming it to fit business
      needs and data warehouse requirements, and loading it into the target data warehouse.
    </p>

    {/* What is ETL */}
    <h2 className="text-3xl font-bold mt-8">What is ETL?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Process Overview:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                        ETL PIPELINE                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐                                               │
│  │    SOURCE    │   ┌───────────────────────────────────────┐  │
│  │   SYSTEMS    │   │                                       │  │
│  ├──────────────┤   │   E ─────► T ─────► L                 │  │
│  │ • ERP        │   │   │       │       │                   │  │
│  │ • CRM        │   │   │       │       │                   │  │
│  │ • Files      │───┼──►│       │       │──────────────►    │  │
│  │ • APIs       │   │ Extract Transform Load                │  │
│  │ • Databases  │   │                                       │  │
│  └──────────────┘   └───────────────────────────────────────┘  │
│                                                                  │
│                                        ┌──────────────────────┐ │
│                                        │    DATA WAREHOUSE    │ │
│                                        │  ┌────────────────┐  │ │
│                                        │  │  Fact Tables   │  │ │
│                                        │  │  Dim Tables    │  │ │
│                                        │  │  History       │  │ │
│                                        │  └────────────────┘  │ │
│                                        └──────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Three Phases */}
    <h2 className="text-3xl font-bold mt-8">The Three Phases of ETL</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
        <h3 className="font-bold text-xl mb-2 text-blue-800 dark:text-blue-200">1. Extract</h3>
        <p className="text-sm mb-2">Reading data from various source systems.</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connect to source databases, files, APIs</li>
          <li>Identify new or changed records</li>
          <li>Read data into staging area</li>
          <li>Handle different data formats and structures</li>
        </ul>
      </div>
      <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
        <h3 className="font-bold text-xl mb-2 text-green-800 dark:text-green-200">2. Transform</h3>
        <p className="text-sm mb-2">Converting data to fit warehouse requirements.</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Clean and validate data quality</li>
          <li>Apply business rules and calculations</li>
          <li>Standardize formats and codes</li>
          <li>Integrate data from multiple sources</li>
          <li>Generate surrogate keys</li>
        </ul>
      </div>
      <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
        <h3 className="font-bold text-xl mb-2 text-purple-800 dark:text-purple-200">3. Load</h3>
        <p className="text-sm mb-2">Writing transformed data into the data warehouse.</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Load dimension tables first</li>
          <li>Load fact tables with foreign keys</li>
          <li>Handle SCD updates</li>
          <li>Maintain referential integrity</li>
          <li>Update indexes and statistics</li>
        </ul>
      </div>
    </div>

    {/* ETL Architecture */}
    <h2 className="text-3xl font-bold mt-8">ETL Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical ETL Architecture:
════════════════════════════════════════════════════════════════

┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   SOURCE    │     │   STAGING   │     │    DATA     │
│   SYSTEMS   │     │    AREA     │     │  WAREHOUSE  │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       │   ┌───────────────┴───────────────┐   │
       │   │                               │   │
       ▼   ▼                               ▼   ▼
┌─────────────────────────────────────────────────────┐
│                   ETL PROCESSING                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐      │
│  │ Extract  │───►│Transform │───►│   Load   │      │
│  └──────────┘    └──────────┘    └──────────┘      │
│       │               │               │             │
│  ┌────┴────┐    ┌────┴────┐    ┌────┴────┐        │
│  │ Connect │    │ Clean   │    │ Insert  │        │
│  │ Read    │    │ Validate│    │ Update  │        │
│  │ Filter  │    │ Map     │    │ Index   │        │
│  └─────────┘    └─────────┘    └─────────┘        │
│                                                      │
│  ┌────────────────────────────────────────────┐    │
│  │            Metadata Repository              │    │
│  │  (Mappings, Rules, Schedules, Logs)        │    │
│  └────────────────────────────────────────────┘    │
│                                                      │
└─────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* ETL Components */}
    <h2 className="text-3xl font-bold mt-8">ETL Components</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Staging Area</h3>
        <p className="text-sm">Temporary storage for extracted data before transformation. Provides checkpoint for recovery.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Metadata Repository</h3>
        <p className="text-sm">Stores mapping rules, transformation logic, schedules, and execution history.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Quality Engine</h3>
        <p className="text-sm">Validates data against business rules and quality standards.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Scheduler</h3>
        <p className="text-sm">Orchestrates ETL job execution based on time or event triggers.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Error Handling</h3>
        <p className="text-sm">Captures and manages data errors, provides recovery mechanisms.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Monitoring Dashboard</h3>
        <p className="text-sm">Tracks job status, performance metrics, and alerts on failures.</p>
      </div>
    </div>

    {/* Common Transformations */}
    <h2 className="text-3xl font-bold mt-8">Common ETL Transformations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transformation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Cleansing</td>
            <td className="p-3 border">Fix errors, standardize values</td>
            <td className="p-3 border">"NY" → "New York"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Type Conversion</td>
            <td className="p-3 border">Convert between data types</td>
            <td className="p-3 border">"2026-01-15" → DATE</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Aggregation</td>
            <td className="p-3 border">Summarize detailed data</td>
            <td className="p-3 border">Daily sales from transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Deduplication</td>
            <td className="p-3 border">Remove duplicate records</td>
            <td className="p-3 border">Merge duplicate customers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookup</td>
            <td className="p-3 border">Replace values with references</td>
            <td className="p-3 border">Customer ID → Surrogate Key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Derived Column</td>
            <td className="p-3 border">Calculate new values</td>
            <td className="p-3 border">Profit = Revenue - Cost</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ETL Best Practices */}
    <h2 className="text-3xl font-bold mt-8">ETL Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-4">
      <li><strong>Use staging area:</strong> Never transform data directly in source or target</li>
      <li><strong>Implement logging:</strong> Track all operations for debugging and auditing</li>
      <li><strong>Design for restartability:</strong> Enable recovery from any failure point</li>
      <li><strong>Load dimensions first:</strong> Ensure foreign keys exist before loading facts</li>
      <li><strong>Process incrementally:</strong> Only process changed data when possible</li>
      <li><strong>Validate data quality:</strong> Check data at each stage of the pipeline</li>
      <li><strong>Document everything:</strong> Maintain clear documentation of all mappings</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ETL stands for Extract, Transform, Load</li>
        <li>Extract: Read data from various source systems</li>
        <li>Transform: Clean, validate, and convert data to warehouse format</li>
        <li>Load: Write transformed data into the data warehouse</li>
        <li>Staging area provides temporary storage between phases</li>
        <li>Metadata repository stores all mapping and transformation rules</li>
        <li>ETL typically runs during off-peak hours (batch processing)</li>
        <li>Good ETL design enables incremental loading and error recovery</li>
      </ul>
    </div>
  </div>
);

export default ETLIntro;
