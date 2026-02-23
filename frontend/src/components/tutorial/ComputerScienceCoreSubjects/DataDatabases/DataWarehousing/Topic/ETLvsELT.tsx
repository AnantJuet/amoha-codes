import React from "react";

const ETLvsELT: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ETL vs ELT
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL (Extract, Transform, Load) and ELT (Extract, Load, Transform) are two approaches
      for moving data into a data warehouse. The key difference is where the transformation
      happens - in a separate ETL engine or in the target database itself.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Process Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL vs ELT Process Flow:
════════════════════════════════════════════════════════════════

ETL (Extract → Transform → Load):
─────────────────────────────────
┌──────────┐    ┌────────────────────────────┐    ┌──────────┐
│  SOURCE  │    │       ETL SERVER           │    │  TARGET  │
│ SYSTEMS  │───►│  ┌───────┐   ┌───────┐    │───►│   DW     │
│          │ E  │  │Transform│   │Staging│    │ L │          │
│          │    │  │ Engine │   │ Area  │    │   │          │
└──────────┘    └────────────────────────────┘    └──────────┘
                        Transform happens HERE

ELT (Extract → Load → Transform):
─────────────────────────────────
┌──────────┐                              ┌────────────────────┐
│  SOURCE  │                              │      TARGET DW     │
│ SYSTEMS  │─────────────────────────────►│  ┌──────────────┐  │
│          │  E              L            │  │   Raw Data   │  │
│          │                              │  │    Tables    │  │
└──────────┘                              │  └──────┬───────┘  │
                                          │         │ T        │
                                          │  ┌──────▼───────┐  │
                                          │  │ Transformed  │  │
                                          │  │   Tables     │  │
                                          │  └──────────────┘  │
                                          └────────────────────┘
                                  Transform happens HERE (in DW)`}
      </pre>
    </div>

    {/* Detailed Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ETL</th>
            <th className="p-3 border">ELT</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Transform Location</td>
            <td className="p-3 border">Separate ETL server</td>
            <td className="p-3 border">Target database</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Movement</td>
            <td className="p-3 border">Source → ETL → Target</td>
            <td className="p-3 border">Source → Target (direct)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Processing Power</td>
            <td className="p-3 border">ETL server hardware</td>
            <td className="p-3 border">Target DW compute power</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">Limited by ETL server</td>
            <td className="p-3 border">Scales with DW capacity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Speed</td>
            <td className="p-3 border">Slower for large data</td>
            <td className="p-3 border">Faster for large data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Raw Data Access</td>
            <td className="p-3 border">Not available in DW</td>
            <td className="p-3 border">Available in DW</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">Fixed transformations</td>
            <td className="p-3 border">Re-transform anytime</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Typical Platform</td>
            <td className="p-3 border">On-premise DW</td>
            <td className="p-3 border">Cloud DW (Snowflake, BigQuery)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ETL Advantages */}
    <h2 className="text-3xl font-bold mt-8">ETL Advantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Privacy</h3>
        <p className="text-sm">Sensitive data can be masked/removed before loading to DW, never exposing raw PII.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Reduced DW Load</h3>
        <p className="text-sm">Only clean, transformed data enters DW, saving storage and compute.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Complex Transformations</h3>
        <p className="text-sm">ETL tools excel at complex, multi-step transformations with visual design.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Mature Tooling</h3>
        <p className="text-sm">Well-established tools (Informatica, DataStage, SSIS) with extensive features.</p>
      </div>
    </div>

    {/* ELT Advantages */}
    <h2 className="text-3xl font-bold mt-8">ELT Advantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Scalability</h3>
        <p className="text-sm">Leverages massive parallel processing of modern cloud data warehouses.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Raw Data Available</h3>
        <p className="text-sm">Original data preserved in DW, can re-transform as requirements change.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Faster Loading</h3>
        <p className="text-sm">Direct load without intermediate processing speeds up data availability.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Lower Infrastructure</h3>
        <p className="text-sm">No separate ETL server needed, reduces infrastructure complexity.</p>
      </div>
    </div>

    {/* When to Use Which */}
    <h2 className="text-3xl font-bold mt-8">When to Use Which?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Decision Matrix:
════════════════════════════════════════════════════════════════

Choose ETL when:                    Choose ELT when:
──────────────────                  ──────────────────
• On-premise data warehouse         • Cloud data warehouse
• Strict data privacy needs         • Large data volumes (TB/PB)
• Complex transformation logic      • Need raw data access
• Limited DW compute power          • Flexible/changing requirements
• Legacy systems integration        • Real-time/streaming data
• Compliance requires pre-filter    • Modern stack (dbt, Snowflake)

Common Scenarios:
────────────────
┌────────────────────────────────┬─────────────────────────────┐
│ ETL Scenario                   │ ELT Scenario                │
├────────────────────────────────┼─────────────────────────────┤
│ Bank with PCI compliance       │ E-commerce analytics        │
│ Healthcare HIPAA requirements  │ IoT data processing         │
│ Oracle/Teradata DW            │ Snowflake/BigQuery DW       │
│ Informatica/DataStage shop    │ dbt + Fivetran stack        │
└────────────────────────────────┴─────────────────────────────┘`}
      </pre>
    </div>

    {/* Modern ELT Stack */}
    <h2 className="text-3xl font-bold mt-8">Modern ELT Stack Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Modern ELT Architecture (Cloud-Native):
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                        EXTRACT & LOAD                            │
│  ┌──────────────┐                                               │
│  │ Data Sources │    ┌────────────────────┐                    │
│  │ • Salesforce │───►│  Fivetran/Airbyte  │───┐                │
│  │ • Stripe     │    │  (EL - No T yet)   │   │                │
│  │ • PostgreSQL │    └────────────────────┘   │                │
│  │ • APIs       │                             │                │
│  └──────────────┘                             ▼                 │
│                                    ┌────────────────────┐       │
│                                    │   Cloud DW         │       │
│                                    │ (Snowflake/BigQuery│       │
│                                    │  /Redshift)        │       │
│                                    │                    │       │
│                                    │  ┌──────────────┐  │       │
│                                    │  │  Raw Schema  │  │       │
│                                    │  │  (raw_*)     │  │       │
│                                    │  └──────┬───────┘  │       │
│                                    │         │          │       │
│                    ┌───────────────│─────────│──────────│───┐   │
│                    │   TRANSFORM   │         ▼          │   │   │
│                    │   ┌──────────────────────────────┐ │   │   │
│                    │   │        dbt (Transform)       │ │   │   │
│                    │   │  • Staging models            │ │   │   │
│                    │   │  • Intermediate models       │ │   │   │
│                    │   │  • Mart models              │ │   │   │
│                    │   └──────────────────────────────┘ │   │   │
│                    └────────────────────────────────────┘   │   │
│                                    │  ┌──────────────┐  │       │
│                                    │  │   Analytics  │  │       │
│                                    │  │   Schema     │  │       │
│                                    │  │  (mart_*)    │  │       │
│                                    │  └──────────────┘  │       │
│                                    └────────────────────┘       │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Hybrid Approach */}
    <h2 className="text-3xl font-bold mt-8">Hybrid Approach</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Many organizations use a hybrid approach, combining ETL and ELT based on data source
        requirements. For example:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>ETL</strong> for sensitive data requiring pre-load masking</li>
        <li><strong>ELT</strong> for high-volume operational data</li>
        <li><strong>ETL</strong> for complex legacy system integrations</li>
        <li><strong>ELT</strong> for cloud-native data sources</li>
      </ul>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ETL transforms data before loading; ELT transforms after loading</li>
        <li>ETL uses separate server; ELT uses DW compute power</li>
        <li>ELT is preferred for cloud data warehouses and large volumes</li>
        <li>ETL is better for data privacy and complex transformations</li>
        <li>ELT preserves raw data for flexible re-transformation</li>
        <li>Modern stack often uses ELT (Fivetran + dbt + Snowflake)</li>
        <li>Hybrid approaches combine both based on requirements</li>
        <li>Choice depends on infrastructure, data volume, and compliance needs</li>
      </ul>
    </div>
  </div>
);

export default ETLvsELT;
