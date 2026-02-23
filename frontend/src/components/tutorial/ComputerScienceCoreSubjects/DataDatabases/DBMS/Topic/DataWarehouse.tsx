import React from "react";

const DataWarehouse: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Data Warehouse Concepts</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A data warehouse is a centralized repository of integrated data from multiple
      sources, designed for query and analysis rather than transaction processing.
      It supports business intelligence and decision-making.
    </p>

    <h2 className="text-3xl font-bold mt-8">Data Warehouse Characteristics</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Bill Inmon's Definition:
"Subject-oriented, integrated, time-variant,
 non-volatile collection of data"

1. Subject-Oriented
   - Organized by business subjects (sales, customers)
   - Not by operational applications

2. Integrated
   - Data from multiple sources unified
   - Consistent naming, formats, units

3. Time-Variant
   - Historical data stored (years)
   - Time dimension in all records

4. Non-Volatile
   - Data not updated in real-time
   - Load and access, no modify`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Warehouse Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehouse Architecture:

Data Sources        ETL           Data Warehouse
+-----------+                     +-----------------+
| OLTP DB   |                     |                 |
+-----------+    +---------+      |  Staging Area   |
| CRM       | →  | Extract | →    |       ↓         |
+-----------+    |Transform|      |  Data Warehouse |
| Files     | →  |  Load   | →    |       ↓         |
+-----------+    +---------+      |   Data Marts    |
| External  |                     |                 |
+-----------+                     +-----------------+
                                         ↓
                                  +--------------+
                                  | BI Tools     |
                                  | Reports      |
                                  | Dashboards   |
                                  +--------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Star Schema</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Star Schema: Central fact table, dimension tables

              dim_product
             (product_key,
              name, category,
              brand)
                   ↑
                   |
dim_time ────→ FACT_SALES ←──── dim_customer
(date_key,     (date_key,      (customer_key,
 day, month,    product_key,    name, city,
 quarter,       customer_key,   segment)
 year)          store_key,
                   |           quantity,
                   |           revenue,
                   ↓           discount)
              dim_store
             (store_key,
              name, city,
              region)

Fact Table: Measurements (metrics)
Dimension Tables: Context (who, what, when, where)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Snowflake Schema</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Snowflake Schema: Normalized dimensions

dim_category                dim_product
(category_key, ──────────→  (product_key,
 category_name)              name, category_key,
                             brand_key)
dim_brand ─────────────────────────↑
(brand_key,                        |
 brand_name)                       |
                                   ↓
                            FACT_SALES
                                   ↓
dim_city                     dim_store
(city_key,  ←─────────────  (store_key,
 city_name,                  name, city_key)
 region_key)
      ↓
dim_region
(region_key,
 region_name)

More normalized than star
Pros: Less redundancy
Cons: More joins required`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ETL Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL: Extract, Transform, Load

1. EXTRACT
   - Pull data from source systems
   - Full or incremental extraction
   - Sources: databases, files, APIs

2. TRANSFORM
   - Clean: Handle missing, invalid data
   - Standardize: Consistent formats
   - Integrate: Merge from sources
   - Derive: Calculate new fields
   - Aggregate: Summarize data

3. LOAD
   - Initial load: Full data load
   - Incremental: Only changes
   - Refresh: Replace data

Tools: Informatica, Talend, SSIS, dbt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Marts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mart: Subset of data warehouse for specific need

Data Warehouse
+------------------------------------------+
|                                          |
|  +----------+  +----------+  +--------+  |
|  | Sales    |  | Finance  |  | HR     |  |
|  | Data Mart|  | Data Mart|  | Data   |  |
|  |          |  |          |  | Mart   |  |
|  +----------+  +----------+  +--------+  |
|                                          |
+------------------------------------------+

Types:
1. Dependent: Fed from enterprise data warehouse
2. Independent: Built directly from sources

Benefits:
- Focused scope
- Faster queries
- Department ownership
- Easier to build`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dimensional Modeling Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Fact</td>
            <td className="p-3 border">Measurable event</td>
            <td className="p-3 border">Sales transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dimension</td>
            <td className="p-3 border">Context for facts</td>
            <td className="p-3 border">Product, Customer, Time</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Measure</td>
            <td className="p-3 border">Numeric value</td>
            <td className="p-3 border">Revenue, Quantity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Grain</td>
            <td className="p-3 border">Level of detail</td>
            <td className="p-3 border">One row per transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SCD</td>
            <td className="p-3 border">Slowly Changing Dimension</td>
            <td className="p-3 border">Customer address changes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data warehouse: Subject-oriented, integrated, time-variant</li>
        <li>Star schema: Fact table + dimension tables</li>
        <li>ETL: Extract, Transform, Load process</li>
        <li>Data marts: Department-specific subsets</li>
        <li>Designed for analytics, not transactions</li>
      </ul>
    </div>
  </div>
);

export default DataWarehouse;
