import React from "react";

const DimModelIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Dimensional Modeling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dimensional modeling is a design technique for databases intended to support end-user queries
      in a data warehouse. It was developed by Ralph Kimball and is optimized for data retrieval
      rather than data maintenance, making it ideal for analytical workloads.
    </p>

    {/* What is Dimensional Modeling */}
    <h2 className="text-3xl font-bold mt-8">What is Dimensional Modeling?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dimensional Modeling - The Foundation:
════════════════════════════════════════════════════════════════

Key Concept: Organize data into FACTS and DIMENSIONS

┌─────────────────────────────────────────────────────────────────┐
│                    DIMENSIONAL MODEL                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ┌─────────────┐          ┌─────────────────────────────┐     │
│   │  DIMENSION  │          │         FACT TABLE          │     │
│   │   Tables    │◄────────►│   (Measurements/Metrics)    │     │
│   │  (Context)  │          │                             │     │
│   └─────────────┘          └─────────────────────────────┘     │
│                                                                  │
│   WHO?   WHAT?   WHEN?   WHERE?     HOW MUCH?  HOW MANY?       │
│   ────   ────    ────    ─────      ────────   ─────────       │
│   Customer Product Date   Store     Revenue    Quantity         │
│                                     Profit     Units            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Dimensional modeling answers business questions like:
• How much did we sell last month by region?
• Which products are most profitable by customer segment?
• What are the sales trends over the past 3 years?`}
      </pre>
    </div>

    {/* Facts vs Dimensions */}
    <h2 className="text-3xl font-bold mt-8">Facts vs Dimensions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Fact Tables</th>
            <th className="p-3 border">Dimension Tables</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Contains</td>
            <td className="p-3 border">Numeric measures (metrics)</td>
            <td className="p-3 border">Descriptive attributes (context)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">What happened (measurements)</td>
            <td className="p-3 border">Who, what, when, where, why</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Size</td>
            <td className="p-3 border">Many rows, few columns</td>
            <td className="p-3 border">Fewer rows, many columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">Sales amount, quantity, profit</td>
            <td className="p-3 border">Customer name, product category, date</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Keys</td>
            <td className="p-3 border">Foreign keys to dimensions</td>
            <td className="p-3 border">Primary key (surrogate)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Dimensional Modeling */}
    <h2 className="text-3xl font-bold mt-8">Why Use Dimensional Modeling?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Query Performance</h3>
        <p className="text-sm">Denormalized structure reduces joins, making queries faster.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">User Understandability</h3>
        <p className="text-sm">Intuitive structure that business users can easily comprehend.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Extensibility</h3>
        <p className="text-sm">Easy to add new dimensions or facts without disrupting existing queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">BI Tool Compatibility</h3>
        <p className="text-sm">Works seamlessly with most BI and reporting tools.</p>
      </div>
    </div>

    {/* Dimensional vs 3NF */}
    <h2 className="text-3xl font-bold mt-8">Dimensional vs 3NF Modeling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Comparison: 3NF vs Dimensional Model
════════════════════════════════════════════════════════════════

3NF (Normalized) - Good for OLTP:
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│ Customer │───│  Order   │───│OrderItem │───│ Product  │
└──────────┘   └──────────┘   └──────────┘   └──────────┘
                    │
               ┌────┴────┐
               │ Address │
               └─────────┘
• Eliminates redundancy
• Optimized for updates
• Complex queries (many joins)
• Hard for business users

Dimensional (Star Schema) - Good for OLAP:
                    ┌──────────┐
                    │ Customer │
                    └────┬─────┘
                         │
┌─────────┐        ┌─────┴─────┐        ┌─────────┐
│ Product │────────│   SALES   │────────│  Time   │
└─────────┘        │   FACT    │        └─────────┘
                   └─────┬─────┘
                         │
                    ┌────┴─────┐
                    │  Store   │
                    └──────────┘
• Some redundancy (acceptable)
• Optimized for queries
• Simple queries (few joins)
• Intuitive for business users`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold">Grain</h3>
        <p className="text-sm">The level of detail stored in a fact table (e.g., one row per transaction, per day, per customer).</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold">Conformed Dimensions</h3>
        <p className="text-sm">Dimensions shared across multiple fact tables for consistent analysis.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold">Surrogate Keys</h3>
        <p className="text-sm">System-generated keys used instead of natural keys from source systems.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold">Slowly Changing Dimensions (SCD)</h3>
        <p className="text-sm">Techniques to handle changes in dimension attributes over time.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Dimensional modeling was developed by Ralph Kimball</li>
        <li>Data organized into Facts (measurements) and Dimensions (context)</li>
        <li>Fact tables contain numeric measures and foreign keys</li>
        <li>Dimension tables contain descriptive attributes</li>
        <li>Optimized for query performance and user understandability</li>
        <li>Two main schemas: Star Schema and Snowflake Schema</li>
        <li>Grain defines the level of detail in the fact table</li>
        <li>Conformed dimensions enable cross-functional analysis</li>
      </ul>
    </div>
  </div>
);

export default DimModelIntro;
