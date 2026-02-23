import React from "react";

const StarVsSnowflake: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Star Schema vs Snowflake Schema
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Star and Snowflake schemas are the two primary dimensional modeling approaches for
      data warehouses. Understanding their differences helps in choosing the right design
      for your analytical needs.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Visual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Star Schema vs Snowflake Schema:
════════════════════════════════════════════════════════════════

STAR SCHEMA                         SNOWFLAKE SCHEMA
─────────────                       ─────────────────

    ┌─────────┐                              ┌────────┐
    │ PRODUCT │                              │CATEGORY│
    │  (All   │                              └───┬────┘
    │ attrs)  │                                  │
    └────┬────┘                              ┌───┴────┐
         │                                   │SUBCATEG│
         │                                   └───┬────┘
         │                                       │
    ┌────┴────┐      ┌───────┐              ┌────┴────┐
    │ CUSTOMER│      │ DATE  │              │ PRODUCT │
    └────┬────┘      └───┬───┘              └────┬────┘
         │               │                       │
         └───────┬───────┘                  ┌────┴────┐     ┌────────┐
                 │                          │CUSTOMER │     │  YEAR  │
                 ▼                          └────┬────┘     └───┬────┘
           ┌──────────┐                          │              │
           │  SALES   │                          │         ┌────┴───┐
           │   FACT   │                          │         │QUARTER │
           └──────────┘                          │         └───┬────┘
                 ▲                               │              │
                 │                               └──────┬───────┘
         ┌───────┴───────┐                              │
         │               │                         ┌────┴────┐
    ┌────┴────┐     ┌────┴────┐                   │  SALES  │
    │  STORE  │     │ PROMO   │                   │   FACT  │
    └─────────┘     └─────────┘                   └────┬────┘
                                                       │
Simple: 1 Fact + Denormalized Dims         ┌───────────┼───────────┐
                                           │           │           │
                                      ┌────┴────┐ ┌────┴────┐ ┌────┴────┐
                                      │  STORE  │ │ REGION  │ │ PROMO   │
                                      └─────────┘ └────┬────┘ └─────────┘
                                                       │
                                                  ┌────┴────┐
                                                  │ COUNTRY │
                                                  └─────────┘

                                    Complex: 1 Fact + Normalized Dims`}
      </pre>
    </div>

    {/* Detailed Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Star Schema</th>
            <th className="p-3 border">Snowflake Schema</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Structure</td>
            <td className="p-3 border">Denormalized dimensions</td>
            <td className="p-3 border">Normalized dimensions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Number of Tables</td>
            <td className="p-3 border">Fewer tables</td>
            <td className="p-3 border">More tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Redundancy</td>
            <td className="p-3 border">Higher redundancy</td>
            <td className="p-3 border">Lower redundancy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Storage Space</td>
            <td className="p-3 border">More storage needed</td>
            <td className="p-3 border">Less storage needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Performance</td>
            <td className="p-3 border">Faster (fewer joins)</td>
            <td className="p-3 border">Slower (more joins)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Complexity</td>
            <td className="p-3 border">Simpler queries</td>
            <td className="p-3 border">Complex queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Friendliness</td>
            <td className="p-3 border">Easy for business users</td>
            <td className="p-3 border">Harder for users</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maintenance</td>
            <td className="p-3 border">Updates in multiple places</td>
            <td className="p-3 border">Updates in one place</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Integrity</td>
            <td className="p-3 border">Potential anomalies</td>
            <td className="p-3 border">Better integrity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ETL Complexity</td>
            <td className="p-3 border">Simpler ETL</td>
            <td className="p-3 border">Complex ETL</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Query Comparison */}
    <h2 className="text-3xl font-bold mt-8">Query Comparison</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <h3 className="font-bold mb-2">Star Schema Query</h3>
        <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT
    p.category,
    p.subcategory,
    d.year,
    SUM(f.amount) as sales
FROM SALES_FACT f
JOIN PRODUCT_DIM p
    ON f.product_key = p.product_key
JOIN DATE_DIM d
    ON f.date_key = d.date_key
GROUP BY
    p.category,
    p.subcategory,
    d.year;

-- Only 2 JOINs needed!`}
        </pre>
      </div>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <h3 className="font-bold mb-2">Snowflake Schema Query</h3>
        <pre className="whitespace-pre-wrap text-gray-900">
{`SELECT
    c.category_name,
    sc.subcategory_name,
    y.year_value,
    SUM(f.amount) as sales
FROM SALES_FACT f
JOIN PRODUCT p
    ON f.product_key = p.product_key
JOIN SUBCATEGORY sc
    ON p.subcategory_key = sc.key
JOIN CATEGORY c
    ON sc.category_key = c.key
JOIN DATE_DIM d
    ON f.date_key = d.date_key
JOIN YEAR y
    ON d.year_key = y.year_key
GROUP BY
    c.category_name,
    sc.subcategory_name,
    y.year_value;

-- 5 JOINs needed!`}
        </pre>
      </div>
    </div>

    {/* Performance Impact */}
    <h2 className="text-3xl font-bold mt-8">Performance Impact</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Performance Comparison:
════════════════════════════════════════════════════════════════

Star Schema:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Query: Sales by Category for 2026                         │
│                                                             │
│  Execution Path:                                            │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐        │
│  │ SALES_FACT │───►│PRODUCT_DIM │    │ Result Set │        │
│  │ (Scan)     │    │ (Lookup)   │───►│            │        │
│  └────────────┘    └────────────┘    └────────────┘        │
│                                                             │
│  Joins: 2        Execution Time: ~1.2 seconds              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Snowflake Schema:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Query: Sales by Category for 2026                         │
│                                                             │
│  Execution Path:                                            │
│  ┌───────────┐  ┌───────┐  ┌───────┐  ┌───────┐  ┌──────┐ │
│  │SALES_FACT │─►│PRODUCT│─►│SUBCATG│─►│CATEGRY│─►│Result│ │
│  └───────────┘  └───────┘  └───────┘  └───────┘  └──────┘ │
│         │                                                   │
│         └──────►┌───────┐─►┌───────┐                       │
│                 │DATE   │  │ YEAR  │                       │
│                 └───────┘  └───────┘                       │
│                                                             │
│  Joins: 5        Execution Time: ~2.8 seconds              │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Star Schema is ~2x faster for this query!`}
      </pre>
    </div>

    {/* When to Choose Which */}
    <h2 className="text-3xl font-bold mt-8">When to Choose Which?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Choose Star Schema When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Query performance is priority</li>
          <li>Business users write queries</li>
          <li>Using BI tools with drag-drop</li>
          <li>Ad-hoc reporting is common</li>
          <li>Dimensions are relatively stable</li>
          <li>Storage cost is not a concern</li>
          <li>Simple ETL is preferred</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Choose Snowflake When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Storage space is limited</li>
          <li>Deep hierarchies exist</li>
          <li>Dimension data changes frequently</li>
          <li>Data integrity is critical</li>
          <li>Dimensions are very large</li>
          <li>Users are technical (SQL experts)</li>
          <li>Database optimizes joins well</li>
        </ul>
      </div>
    </div>

    {/* Storage Comparison */}
    <h2 className="text-3xl font-bold mt-8">Storage Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Storage Comparison Example - Product Dimension:
════════════════════════════════════════════════════════════════

Star Schema (Denormalized):
┌───────┬──────────────┬──────────────┬─────────────────┬──────────┐
│ key   │ product_name │ category     │ category_desc   │ brand    │
├───────┼──────────────┼──────────────┼─────────────────┼──────────┤
│ 1     │ Widget A     │ Electronics  │ Electronic devs │ TechCo   │
│ 2     │ Widget B     │ Electronics  │ Electronic devs │ TechCo   │
│ 3     │ Gadget C     │ Electronics  │ Electronic devs │ GadgetPro│
│ ...   │ (10,000 rows)│ (Repeated!)  │ (Repeated!)     │          │
└───────┴──────────────┴──────────────┴─────────────────┴──────────┘

"Electronics" + description repeated 3,000 times!
Storage: ~50 MB

Snowflake Schema (Normalized):
PRODUCT (10,000 rows, ~20 MB)      CATEGORY (10 rows, ~1 KB)
┌─────┬─────────────┬─────────┐    ┌─────┬─────────────┬───────────┐
│ key │ name        │ cat_key │    │ key │ name        │ desc      │
├─────┼─────────────┼─────────┤    ├─────┼─────────────┼───────────┤
│ 1   │ Widget A    │ 1       │    │ 1   │ Electronics │ Elec devs │
│ 2   │ Widget B    │ 1       │    │ 2   │ Clothing    │ Apparel   │
│ 3   │ Gadget C    │ 1       │    └─────┴─────────────┴───────────┘
└─────┴─────────────┴─────────┘

Storage: ~20 MB (60% less!)`}
      </pre>
    </div>

    {/* Industry Preference */}
    <h2 className="text-3xl font-bold mt-8">Industry Preference</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Star Schema is generally preferred</strong> in most data warehouse implementations
        because the performance benefits and simplicity outweigh the storage costs in modern systems.
        Storage is cheap, but query performance directly impacts user satisfaction and business decisions.
      </p>
      <div className="mt-4 p-3 bg-gray-100 text-gray-900 rounded">
        <p className="text-sm italic">
          "In the rare cases where disk space is at a premium, we might consider snowflaking
          a dimension, but in general, we strongly recommend the star schema." — Ralph Kimball
        </p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Star schema has denormalized dimensions; snowflake has normalized dimensions</li>
        <li>Star schema is faster for queries due to fewer joins</li>
        <li>Snowflake schema uses less storage but requires more complex queries</li>
        <li>Star schema is easier for business users to understand</li>
        <li>Snowflake schema provides better data integrity</li>
        <li>Star schema is the industry-preferred approach in most cases</li>
        <li>Modern databases with cheap storage favor star schema</li>
        <li>Consider hybrid approaches for specific dimensions if needed</li>
      </ul>
    </div>
  </div>
);

export default StarVsSnowflake;
