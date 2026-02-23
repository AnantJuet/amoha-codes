import React from "react";

const DimensionalModeling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dimensional Modeling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Dimensional modeling is a data modeling technique optimized for data retrieval
      and analysis. It organizes data into facts (measurements) and dimensions (context),
      creating intuitive structures that business users can easily understand.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dimensional Modeling - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Introduction to Dimensional Modeling                       │
│      └── Core concepts and Ralph Kimball's approach             │
│                                                                  │
│   2. Fact Tables                                                │
│      └── Storing business measurements and metrics              │
│                                                                  │
│   3. Types of Fact Tables                                       │
│      └── Transaction, periodic snapshot, accumulating           │
│                                                                  │
│   4. Dimension Tables                                           │
│      └── Descriptive context for facts                          │
│                                                                  │
│   5. Types of Dimensions                                        │
│      └── Conformed, degenerate, junk, role-playing              │
│                                                                  │
│   6. Slowly Changing Dimensions (SCD)                           │
│      └── Handling dimension changes over time (Types 0-6)       │
│                                                                  │
│   7. Star Schema                                                │
│      └── Simple, denormalized design pattern                    │
│                                                                  │
│   8. Snowflake Schema                                           │
│      └── Normalized dimension tables                            │
│                                                                  │
│   9. Galaxy Schema (Fact Constellation)                         │
│      └── Multiple fact tables sharing dimensions                │
│                                                                  │
│  10. Star vs Snowflake Schema                                   │
│      └── Comparison and when to use each                        │
│                                                                  │
│  11. Surrogate Keys                                             │
│      └── System-generated keys for dimensions                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Star Schema Diagram */}
    <h2 className="text-3xl font-bold mt-8">Star Schema at a Glance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Star Schema - The Foundation of Dimensional Modeling:
════════════════════════════════════════════════════════════════

                    ┌─────────────────┐
                    │  dim_product    │
                    │─────────────────│
                    │ product_key (PK)│
                    │ product_name    │
                    │ category        │
                    │ brand           │
                    └────────┬────────┘
                             │
┌─────────────────┐          │          ┌─────────────────┐
│   dim_time      │          │          │  dim_customer   │
│─────────────────│          │          │─────────────────│
│ time_key (PK)   │          │          │ customer_key(PK)│
│ date            │          │          │ customer_name   │
│ month           │──────────┼──────────│ city            │
│ quarter         │          │          │ segment         │
│ year            │          │          └─────────────────┘
└─────────────────┘          │
                             ▼
                    ┌─────────────────┐
                    │   fact_sales    │
                    │─────────────────│
                    │ time_key (FK)   │
                    │ product_key(FK) │
                    │ customer_key(FK)│
                    │ store_key (FK)  │
                    │─────────────────│
                    │ quantity        │  ◄── Measures
                    │ revenue         │
                    │ profit          │
                    └─────────────────┘
                             ▲
                             │
                    ┌────────┴────────┐
                    │   dim_store     │
                    │─────────────────│
                    │ store_key (PK)  │
                    │ store_name      │
                    │ region          │
                    └─────────────────┘`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Fact Tables</h3>
        <p className="text-sm">Store quantitative measurements (metrics) of business processes. Contains foreign keys to dimensions and numeric measures like sales, quantity, profit.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Dimension Tables</h3>
        <p className="text-sm">Provide descriptive context (who, what, when, where, why) for facts. Contains attributes used for filtering, grouping, and labeling.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">Star Schema</h3>
        <p className="text-sm">Denormalized design with fact table at center surrounded by dimension tables. Simple, fast queries, easy to understand.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">Snowflake Schema</h3>
        <p className="text-sm">Normalized dimensions with sub-dimensions. Reduces storage but increases query complexity with more joins.</p>
      </div>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Start with <strong>"Introduction to Dimensional Modeling"</strong> for foundational concepts.
        Then learn about <strong>Fact Tables</strong> and <strong>Dimension Tables</strong> as the core building blocks.
        Understanding <strong>SCDs</strong> is crucial for handling changing data. Finally, explore
        schema designs (Star, Snowflake, Galaxy) to complete your knowledge.
      </p>
    </div>
  </div>
);

export default DimensionalModeling;
