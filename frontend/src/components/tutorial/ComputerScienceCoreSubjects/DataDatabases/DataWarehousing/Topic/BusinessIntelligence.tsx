import React from "react";

const BusinessIntelligence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Business Intelligence (BI) encompasses the strategies, technologies, and practices
      used to collect, integrate, analyze, and present business data. BI transforms
      raw data into actionable insights that drive strategic decision-making.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Intelligence - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Introduction to Business Intelligence                      │
│      └── What is BI and its role in organizations               │
│                                                                  │
│   2. BI Architecture                                            │
│      └── Technical components and data flow                     │
│                                                                  │
│   3. BI Components                                              │
│      └── Data sources, ETL, DW, analytics, presentation         │
│                                                                  │
│   4. Reporting and Dashboards                                   │
│      └── Visualizing and communicating insights                 │
│                                                                  │
│   5. KPIs and Metrics                                           │
│      └── Measuring business performance                         │
│                                                                  │
│   6. Data Visualization                                         │
│      └── Charts, graphs, and visual best practices              │
│                                                                  │
│   7. Self-Service BI                                            │
│      └── Empowering business users with analytics               │
│                                                                  │
│   8. BI Tools Overview                                          │
│      └── Tableau, Power BI, Looker, and more                   │
│                                                                  │
│   9. BI Best Practices                                          │
│      └── Implementation guidelines and success factors          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* BI Architecture Diagram */}
    <h2 className="text-3xl font-bold mt-8">BI Architecture Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Intelligence Architecture:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                           │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐   │
│  │ Dashboards│  │  Reports  │  │   Alerts  │  │  Mobile   │   │
│  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘  └─────┬─────┘   │
│        └──────────────┴──────────────┴──────────────┘          │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────────────┐
│                      ANALYTICS LAYER                             │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   OLAP      │  │  Ad-hoc     │  │  Advanced   │             │
│  │   Cubes     │  │  Queries    │  │  Analytics  │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────────────┐
│                    DATA WAREHOUSE LAYER                          │
│                                                                  │
│        ┌──────────────────────────────────────────┐             │
│        │           DATA WAREHOUSE                  │             │
│        │    ┌──────────┐    ┌──────────┐         │             │
│        │    │Data Mart │    │Data Mart │         │             │
│        │    │ (Sales)  │    │(Finance) │         │             │
│        │    └──────────┘    └──────────┘         │             │
│        └──────────────────────────────────────────┘             │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────────────┐
│                    DATA INTEGRATION (ETL)                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
┌────────────────────────────┴────────────────────────────────────┐
│                      SOURCE SYSTEMS                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │   ERP   │  │   CRM   │  │  Files  │  │External │           │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘           │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Dashboards</h3>
        <p className="text-sm">Visual displays of key metrics and KPIs, providing at-a-glance understanding of business performance.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">KPIs</h3>
        <p className="text-sm">Key Performance Indicators - quantifiable measures that evaluate success in meeting objectives.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">Self-Service BI</h3>
        <p className="text-sm">Tools and practices that enable business users to create reports without IT assistance.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">Data Visualization</h3>
        <p className="text-sm">Graphical representation of data to communicate insights effectively and drive action.</p>
      </div>
    </div>

    {/* Popular BI Tools */}
    <h2 className="text-3xl font-bold mt-8">Popular BI Tools</h2>
    <div className="grid md:grid-cols-4 gap-4 mt-4">
      <div className="p-3 border rounded-lg text-center">
        <h3 className="font-bold">Tableau</h3>
        <p className="text-xs mt-1">Visual analytics leader</p>
      </div>
      <div className="p-3 border rounded-lg text-center">
        <h3 className="font-bold">Power BI</h3>
        <p className="text-xs mt-1">Microsoft ecosystem</p>
      </div>
      <div className="p-3 border rounded-lg text-center">
        <h3 className="font-bold">Looker</h3>
        <p className="text-xs mt-1">Google Cloud BI</p>
      </div>
      <div className="p-3 border rounded-lg text-center">
        <h3 className="font-bold">Qlik</h3>
        <p className="text-xs mt-1">Associative engine</p>
      </div>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Start with <strong>"Introduction to BI"</strong> and <strong>BI Architecture</strong> to understand
        the ecosystem. Learn about <strong>KPIs and Metrics</strong> for measuring success, then explore
        <strong> Reporting and Dashboards</strong> for visualization. Finally, study <strong>Self-Service BI</strong>
        and review <strong>BI Tools</strong> to understand modern implementation options.
      </p>
    </div>
  </div>
);

export default BusinessIntelligence;
