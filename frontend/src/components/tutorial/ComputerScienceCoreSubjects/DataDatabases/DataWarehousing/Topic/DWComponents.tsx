import React from "react";

const DWComponents: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Components of Data Warehouse
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A data warehouse consists of several interconnected components that work together to extract,
      transform, store, and deliver data for analysis. Understanding these components is essential
      for designing and implementing an effective data warehouse solution.
    </p>

    {/* Components Overview */}
    <h2 className="text-3xl font-bold mt-8">Core Components Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Components:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    DATA WAREHOUSE SYSTEM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 1. DATA SOURCES                                          │   │
│  │    Operational DBs | Files | APIs | External Data        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 2. ETL/ELT TOOLS                                         │   │
│  │    Extract | Transform | Load | Orchestration            │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 3. STAGING AREA                                          │   │
│  │    Landing Zone | Work Tables | Temporary Storage        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 4. DATA STORAGE                                          │   │
│  │    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │   │
│  │    │     EDW     │  │ Data Marts  │  │    ODS      │    │   │
│  │    └─────────────┘  └─────────────┘  └─────────────┘    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 5. METADATA REPOSITORY                                   │   │
│  │    Technical Metadata | Business Metadata | Operational  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ 6. ACCESS TOOLS                                          │   │
│  │    Query | Reporting | OLAP | Data Mining | BI Tools     │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Detailed Components */}
    <h2 className="text-3xl font-bold mt-8">1. Data Sources</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Data sources are the origin points of data that feeds into the warehouse.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-2">
        <div>
          <h4 className="font-bold">Internal Sources:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>ERP systems (SAP, Oracle)</li>
            <li>CRM systems (Salesforce)</li>
            <li>Legacy databases</li>
            <li>Spreadsheets and files</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">External Sources:</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Third-party APIs</li>
            <li>Social media feeds</li>
            <li>Market data providers</li>
            <li>Government databases</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. ETL/ELT Tools</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        ETL tools handle the data movement and transformation from sources to the warehouse.
      </p>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Function</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Tools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Extract</td>
              <td className="p-2 border">Pull data from source systems</td>
              <td className="p-2 border">Connectors, CDC</td>
            </tr>
            <tr>
              <td className="p-2 border">Transform</td>
              <td className="p-2 border">Clean, map, aggregate data</td>
              <td className="p-2 border">dbt, Informatica</td>
            </tr>
            <tr>
              <td className="p-2 border">Load</td>
              <td className="p-2 border">Insert into warehouse</td>
              <td className="p-2 border">Bulk load utilities</td>
            </tr>
            <tr>
              <td className="p-2 border">Orchestrate</td>
              <td className="p-2 border">Schedule and monitor jobs</td>
              <td className="p-2 border">Airflow, Prefect</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Staging Area</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        Temporary storage area where data is held during the ETL process for validation and transformation.
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>Landing Zone:</strong> Raw data as extracted from sources</li>
        <li><strong>Work Tables:</strong> Intermediate transformation results</li>
        <li><strong>Error Tables:</strong> Records that failed validation</li>
        <li><strong>Audit Tables:</strong> ETL execution logs and metrics</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Data Storage</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Enterprise DW</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Central repository</li>
          <li>Integrated data</li>
          <li>Subject-oriented</li>
          <li>Historical data</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Marts</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Department-specific</li>
          <li>Subset of DW</li>
          <li>Optimized queries</li>
          <li>Star schema</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">ODS</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Near real-time</li>
          <li>Operational reporting</li>
          <li>Current data only</li>
          <li>Volatile</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Metadata Repository</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Metadata is "data about data" - essential for understanding, managing, and using the warehouse.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-2">
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Technical Metadata</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Table structures</li>
            <li>Data types</li>
            <li>ETL mappings</li>
          </ul>
        </div>
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Business Metadata</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Business definitions</li>
            <li>Ownership info</li>
            <li>Usage policies</li>
          </ul>
        </div>
        <div className="p-3 bg-gray-50 rounded text-gray-900">
          <h4 className="font-bold">Operational Metadata</h4>
          <ul className="list-disc list-inside text-sm">
            <li>Load statistics</li>
            <li>Query logs</li>
            <li>Data lineage</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Access Tools</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Tools that enable users to query, analyze, and visualize data from the warehouse.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Query Tools:</strong> SQL clients, ad-hoc query interfaces</li>
        <li><strong>Reporting Tools:</strong> Crystal Reports, SSRS, Jasper</li>
        <li><strong>OLAP Tools:</strong> Cube browsers, pivot tables</li>
        <li><strong>BI Platforms:</strong> Tableau, Power BI, Looker</li>
        <li><strong>Data Mining:</strong> SAS, SPSS, Python/R notebooks</li>
      </ul>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Six main components: Sources, ETL, Staging, Storage, Metadata, Access Tools</li>
        <li>Data sources can be internal (ERP, CRM) or external (APIs, feeds)</li>
        <li>ETL tools handle extraction, transformation, loading, and orchestration</li>
        <li>Staging area provides temporary storage for validation and transformation</li>
        <li>Storage includes EDW, Data Marts, and optionally ODS</li>
        <li>Metadata repository is critical for understanding and managing the warehouse</li>
        <li>Access tools enable users to query, report, and analyze data</li>
      </ul>
    </div>
  </div>
);

export default DWComponents;
