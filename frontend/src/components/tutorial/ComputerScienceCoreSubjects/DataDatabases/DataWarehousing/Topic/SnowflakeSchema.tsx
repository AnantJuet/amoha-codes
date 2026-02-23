import React from "react";

const SnowflakeSchema: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Snowflake Schema
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Snowflake Schema is a dimensional modeling technique where dimension tables are
      normalized into multiple related tables, resembling a snowflake pattern. It extends
      the star schema by breaking down dimensions into sub-dimensions.
    </p>

    {/* What is Snowflake Schema */}
    <h2 className="text-3xl font-bold mt-8">What is Snowflake Schema?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Snowflake Schema Structure:
════════════════════════════════════════════════════════════════

                     ┌─────────────┐
                     │   COUNTRY   │
                     └──────┬──────┘
                            │
                     ┌──────┴──────┐
                     │   REGION    │
                     └──────┬──────┘
                            │
┌─────────────┐      ┌──────┴──────┐      ┌─────────────┐
│   CATEGORY  │      │   STORE     │      │    YEAR     │
└──────┬──────┘      └──────┬──────┘      └──────┬──────┘
       │                    │                    │
┌──────┴──────┐             │             ┌──────┴──────┐
│  SUBCATEGORY│             │             │   QUARTER   │
└──────┬──────┘             │             └──────┬──────┘
       │                    │                    │
┌──────┴──────┐      ┌──────┴──────┐      ┌──────┴──────┐
│   PRODUCT   │──────│  SALES_FACT │──────│    DATE     │
└─────────────┘      └──────┬──────┘      └─────────────┘
                            │
                     ┌──────┴──────┐
                     │   CUSTOMER  │
                     └──────┬──────┘
                            │
                     ┌──────┴──────┐
                     │  CUST_TYPE  │
                     └─────────────┘

Dimensions are NORMALIZED into multiple tables (snowflake pattern)`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Snowflake Schema - Product Dimension Normalized:
════════════════════════════════════════════════════════════════

Instead of ONE Product Dimension (Star Schema):
┌───────────────────────────────────────────────────────────────┐
│ PRODUCT_DIM                                                   │
│ product_key, product_name, brand_name, category_name,        │
│ subcategory_name, supplier_name, supplier_city               │
└───────────────────────────────────────────────────────────────┘

Snowflake NORMALIZES into MULTIPLE Tables:

┌─────────────────┐
│    SUPPLIER     │
│ supplier_key    │
│ supplier_name   │
│ supplier_city   │
│ supplier_country│
└────────┬────────┘
         │
         │ FK
         │
┌────────┴────────┐     ┌─────────────────┐
│    PRODUCT      │     │     BRAND       │
│ product_key     │     │ brand_key       │
│ product_name    │     │ brand_name      │
│ brand_key (FK)──┼────►│ parent_company  │
│ subcategory_key │     └─────────────────┘
│ supplier_key    │
└────────┬────────┘
         │ FK
         │
┌────────┴────────┐
│   SUBCATEGORY   │
│ subcategory_key │
│ subcategory_name│
│ category_key    │
└────────┬────────┘
         │ FK
         │
┌────────┴────────┐
│    CATEGORY     │
│ category_key    │
│ category_name   │
│ department      │
└─────────────────┘`}
      </pre>
    </div>

    {/* SQL Example */}
    <h2 className="text-3xl font-bold mt-8">SQL Query Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Snowflake Schema Query (More Joins Required)
════════════════════════════════════════════════════════════════

SELECT
    c.category_name,
    sc.subcategory_name,
    p.product_name,
    SUM(f.sales_amount) as total_sales
FROM
    SALES_FACT f
    JOIN PRODUCT p ON f.product_key = p.product_key
    JOIN SUBCATEGORY sc ON p.subcategory_key = sc.subcategory_key
    JOIN CATEGORY c ON sc.category_key = c.category_key
    JOIN DATE_DIM d ON f.date_key = d.date_key
    JOIN QUARTER q ON d.quarter_key = q.quarter_key
    JOIN YEAR y ON q.year_key = y.year_key
WHERE
    y.year_value = 2026
GROUP BY
    c.category_name, sc.subcategory_name, p.product_name;

-- Note: 6 JOINs required vs 2 JOINs in Star Schema!`}
      </pre>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Snowflake Schema</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Normalized Dimensions</td>
            <td className="p-3 border">Dimensions split into sub-dimension tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">More Tables</td>
            <td className="p-3 border">Higher number of tables compared to star schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Less Redundancy</td>
            <td className="p-3 border">Eliminates data duplication in dimensions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">More Joins</td>
            <td className="p-3 border">Queries require more joins across tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complex Structure</td>
            <td className="p-3 border">More complex for users to understand</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Storage Efficient</td>
            <td className="p-3 border">Uses less disk space due to normalization</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* When to Use */}
    <h2 className="text-3xl font-bold mt-8">When to Use Snowflake Schema</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Use When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Storage space is a critical concern</li>
          <li>Dimension hierarchies are very deep</li>
          <li>Data integrity is paramount</li>
          <li>Dimensions change frequently</li>
          <li>ETL process needs to update hierarchies independently</li>
          <li>Using tools that optimize multiple joins</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Avoid When:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Query performance is top priority</li>
          <li>Users write ad-hoc queries</li>
          <li>Business users access data directly</li>
          <li>Simple reporting requirements</li>
          <li>Dimensions are relatively small</li>
          <li>Real-time analytics needed</li>
        </ul>
      </div>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Reduced data redundancy</li>
          <li>Lower storage requirements</li>
          <li>Easier dimension maintenance</li>
          <li>Better data integrity</li>
          <li>Cleaner data model for updates</li>
          <li>Efficient for specific drill paths</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Slower query performance</li>
          <li>More complex queries (many joins)</li>
          <li>Harder for business users</li>
          <li>Complex ETL processes</li>
          <li>Not all BI tools optimize well</li>
          <li>More difficult to browse/explore</li>
        </ul>
      </div>
    </div>

    {/* Normalization Levels */}
    <h2 className="text-3xl font-bold mt-8">Normalization in Snowflake</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normalization Levels in Snowflake Schema:
════════════════════════════════════════════════════════════════

Level 0 (Denormalized - Star Schema):
┌─────────────────────────────────────────────────────────────┐
│ product_key, product_name, category, subcategory, supplier │
└─────────────────────────────────────────────────────────────┘

Level 1 (Partially Normalized):
┌─────────────────────────────┐    ┌──────────────────────────┐
│ PRODUCT                     │    │ CATEGORY                 │
│ product_key, product_name,  │───►│ category_key,            │
│ category_key, supplier      │    │ category_name,           │
└─────────────────────────────┘    │ subcategory_name         │
                                   └──────────────────────────┘

Level 2 (Fully Normalized - Snowflake):
┌───────────────┐    ┌──────────────┐    ┌──────────────┐
│ PRODUCT       │    │ SUBCATEGORY  │    │ CATEGORY     │
│ product_key   │───►│ subcat_key   │───►│ category_key │
│ product_name  │    │ subcat_name  │    │ category_name│
│ subcat_key    │    │ category_key │    └──────────────┘
│ supplier_key  │    └──────────────┘
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ SUPPLIER      │
│ supplier_key  │
│ supplier_name │
└───────────────┘`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Snowflake schema normalizes dimension tables into sub-dimensions</li>
        <li>Creates a snowflake-like pattern with multiple levels of tables</li>
        <li>Reduces data redundancy and storage requirements</li>
        <li>Requires more joins, resulting in slower query performance</li>
        <li>More complex for end users to understand and query</li>
        <li>Best suited when storage efficiency is critical</li>
        <li>Useful for deep hierarchies that change frequently</li>
        <li>Star schema is generally preferred unless specific needs warrant snowflake</li>
      </ul>
    </div>
  </div>
);

export default SnowflakeSchema;
