import React from "react";

const Introduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Data Warehousing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Welcome to the Data Warehousing tutorial! This section provides a comprehensive
      introduction to the fundamental concepts of data warehousing, its history,
      characteristics, and business value.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">What You'll Learn</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Introduction to Data Warehousing - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. What is Data Warehousing?                                  │
│      └── Definition, purpose, and core concepts                 │
│                                                                  │
│   2. History and Evolution                                      │
│      └── From early databases to modern cloud DW                │
│                                                                  │
│   3. OLTP vs OLAP                                               │
│      └── Transactional vs Analytical processing                 │
│                                                                  │
│   4. Characteristics of Data Warehouse                          │
│      └── Subject-oriented, integrated, time-variant, non-volatile│
│                                                                  │
│   5. Benefits of Data Warehousing                               │
│      └── Business value and competitive advantages              │
│                                                                  │
│   6. Challenges in Data Warehousing                             │
│      └── Common obstacles and how to address them               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Why Data Warehousing */}
    <h2 className="text-3xl font-bold mt-8">Why Learn Data Warehousing?</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Data-Driven Decisions</h3>
        <p className="text-sm">Organizations rely on data warehouses to make informed strategic decisions based on historical data analysis.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Career Opportunities</h3>
        <p className="text-sm">Data warehouse professionals are in high demand across industries as businesses prioritize analytics.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">Foundation for BI</h3>
        <p className="text-sm">Understanding data warehousing is essential for business intelligence, reporting, and analytics roles.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">Big Data Integration</h3>
        <p className="text-sm">Modern data warehouses integrate with big data technologies, making this knowledge increasingly valuable.</p>
      </div>
    </div>

    {/* Quick Definition */}
    <h2 className="text-3xl font-bold mt-8">Quick Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`What is a Data Warehouse?
════════════════════════════════════════════════════════════════

"A data warehouse is a subject-oriented, integrated, time-variant,
 and non-volatile collection of data in support of management's
 decision-making process."
                                        - Bill Inmon (Father of DW)

┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   OPERATIONAL    │     │      DATA        │     │    BUSINESS      │
│    SYSTEMS       │────▶│    WAREHOUSE     │────▶│   INTELLIGENCE   │
│                  │     │                  │     │                  │
│ • CRM            │     │ • Integrated     │     │ • Reports        │
│ • ERP            │     │ • Historical     │     │ • Dashboards     │
│ • Sales          │     │ • Optimized for  │     │ • Analytics      │
│ • HR             │     │   Analysis       │     │ • Insights       │
└──────────────────┘     └──────────────────┘     └──────────────────┘`}
      </pre>
    </div>

    {/* Getting Started */}
    <h2 className="text-3xl font-bold mt-8">Getting Started</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Start with <strong>"What is Data Warehousing?"</strong> to understand the core concepts,
        then proceed through each topic sequentially. Each topic builds upon the previous one,
        providing you with a solid foundation in data warehousing fundamentals.
      </p>
    </div>

    {/* Prerequisites */}
    <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
    <div className="space-y-2 mt-4">
      <div className="p-3 border rounded-lg">
        <span className="font-semibold">Basic Database Knowledge:</span> Understanding of tables, rows, columns, and SQL
      </div>
      <div className="p-3 border rounded-lg">
        <span className="font-semibold">Business Context:</span> General understanding of business operations and reporting needs
      </div>
    </div>
  </div>
);

export default Introduction;
