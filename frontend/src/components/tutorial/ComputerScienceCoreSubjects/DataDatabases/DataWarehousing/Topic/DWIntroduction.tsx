import React from "react";

const DWIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Data Warehousing?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Data Warehouse is a centralized repository that stores integrated data from multiple
      sources, designed for query and analysis rather than transaction processing. It provides
      a single source of truth for business intelligence and decision-making.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      According to Bill Inmon (Father of Data Warehousing): "A data warehouse is a subject-oriented,
      integrated, time-variant, and non-volatile collection of data in support of management's
      decision-making process."
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Architecture:

+------------------+     +-----------------+     +------------------+
|  Source Systems  |     |   ETL Process   |     |  Data Warehouse  |
+------------------+     +-----------------+     +------------------+
| - ERP System     |     | - Extract       |     | - Staging Area   |
| - CRM System     | --> | - Transform     | --> | - Data Marts     |
| - Legacy DBs     |     | - Load          |     | - OLAP Cubes     |
| - Flat Files     |     |                 |     |                  |
| - External Data  |     |                 |     |                  |
+------------------+     +-----------------+     +------------------+
                                                         |
                                                         v
                                               +------------------+
                                               |  BI & Analytics  |
                                               +------------------+
                                               | - Reports        |
                                               | - Dashboards     |
                                               | - Ad-hoc Queries |
                                               +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Subject-Oriented</td>
            <td className="p-3 border">Organized around major subjects like customers, products, sales</td>
            <td className="p-3 border">Customer analysis across all touchpoints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrated</td>
            <td className="p-3 border">Data from disparate sources is unified with consistent naming and formats</td>
            <td className="p-3 border">M/F gender standardized across systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time-Variant</td>
            <td className="p-3 border">Data is stored with timestamps to track changes over time</td>
            <td className="p-3 border">Historical sales data for trend analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-Volatile</td>
            <td className="p-3 border">Data is stable once loaded; updates don't modify existing data</td>
            <td className="p-3 border">Historical records are preserved</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Warehouse vs Operational Database</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Operational Database</th>
            <th className="p-3 border">Data Warehouse</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Day-to-day operations</td>
            <td className="p-3 border">Analysis and reporting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Type</td>
            <td className="p-3 border">Current, real-time data</td>
            <td className="p-3 border">Historical, summarized data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Orientation</td>
            <td className="p-3 border">Application-oriented</td>
            <td className="p-3 border">Subject-oriented</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Queries</td>
            <td className="p-3 border">Simple, predefined queries</td>
            <td className="p-3 border">Complex, ad-hoc queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Highly normalized (3NF)</td>
            <td className="p-3 border">Denormalized (Star/Snowflake)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components of Data Warehouse</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Source Systems:</strong> Operational databases, external data, flat files that feed data into the warehouse</li>
      <li><strong>ETL Layer:</strong> Extract, Transform, Load processes that move and clean data</li>
      <li><strong>Staging Area:</strong> Temporary storage for data before loading into warehouse</li>
      <li><strong>Data Storage:</strong> Central repository with fact and dimension tables</li>
      <li><strong>Data Marts:</strong> Subset of warehouse focused on specific business areas</li>
      <li><strong>Metadata:</strong> Data about data - definitions, sources, transformations</li>
      <li><strong>Presentation Layer:</strong> BI tools, reports, dashboards for end users</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Benefits of Data Warehousing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Benefits:

1. Single Source of Truth
   - Consistent data across the organization
   - Eliminates data silos and conflicts

2. Improved Decision Making
   - Historical data enables trend analysis
   - Quick access to business insights

3. Enhanced Business Intelligence
   - Complex queries without affecting operations
   - Ad-hoc analysis capabilities

4. Data Quality
   - Standardized and cleaned data
   - Consistent definitions and formats

5. Time Savings
   - Pre-computed aggregations
   - Optimized for analytical queries`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data warehouse is designed for analysis, not transaction processing</li>
        <li>Four key characteristics: Subject-oriented, Integrated, Time-variant, Non-volatile</li>
        <li>Data flows from source systems through ETL into the warehouse</li>
        <li>Provides historical perspective for trend analysis and forecasting</li>
        <li>Separates analytical workload from operational systems</li>
        <li>Forms the foundation for Business Intelligence and analytics</li>
      </ul>
    </div>
  </div>
);

export default DWIntroduction;
