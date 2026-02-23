import React from "react";

const BIArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Business Intelligence Architecture
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      BI architecture defines the technical framework that enables an organization to
      collect, store, analyze, and present data for decision-making. A well-designed
      architecture ensures scalability, performance, and ease of use.
    </p>

    {/* BI Architecture Layers */}
    <h2 className="text-3xl font-bold mt-8">BI Architecture Layers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BI Architecture Stack:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                            │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐       │
│  │Dashboards │ │  Reports  │ │  Alerts   │ │Mobile Apps│       │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘       │
├─────────────────────────────────────────────────────────────────┤
│                    ANALYSIS LAYER                                │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐       │
│  │   OLAP    │ │Ad-hoc     │ │Predictive │ │   Data    │       │
│  │   Cubes   │ │Queries    │ │Analytics  │ │  Mining   │       │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘       │
├─────────────────────────────────────────────────────────────────┤
│                    SEMANTIC LAYER                                │
│  ┌───────────────────────────────────────────────────────┐     │
│  │  Business Definitions │ Metrics │ Hierarchies │ Rules │     │
│  └───────────────────────────────────────────────────────┘     │
├─────────────────────────────────────────────────────────────────┤
│                    DATA LAYER                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │    Data      │  │    Data      │  │  Operational │          │
│  │  Warehouse   │  │    Marts     │  │  Data Store  │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
├─────────────────────────────────────────────────────────────────┤
│                    ETL / DATA INTEGRATION LAYER                  │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐       │
│  │  Extract  │ │ Transform │ │   Load    │ │  Schedule │       │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘       │
├─────────────────────────────────────────────────────────────────┤
│                    SOURCE SYSTEMS                                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐        │
│  │ ERP  │ │ CRM  │ │Files │ │ APIs │ │  IoT │ │ Web  │        │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘        │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Layer Descriptions */}
    <h2 className="text-3xl font-bold mt-8">Architecture Layers Explained</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Source Systems Layer</h3>
        <p className="text-sm mb-2">Operational systems that generate business data.</p>
        <ul className="list-disc list-inside text-sm">
          <li>ERP, CRM, SCM systems</li>
          <li>Files (Excel, CSV, XML)</li>
          <li>External APIs and web services</li>
          <li>IoT sensors and devices</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. ETL / Data Integration Layer</h3>
        <p className="text-sm mb-2">Processes that move and transform data.</p>
        <ul className="list-disc list-inside text-sm">
          <li>Data extraction from sources</li>
          <li>Transformation and cleansing</li>
          <li>Loading into warehouse</li>
          <li>Scheduling and orchestration</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Data Layer</h3>
        <p className="text-sm mb-2">Persistent storage for analytical data.</p>
        <ul className="list-disc list-inside text-sm">
          <li>Enterprise Data Warehouse (EDW)</li>
          <li>Subject-specific Data Marts</li>
          <li>Operational Data Store (ODS)</li>
          <li>Data Lakes for raw data</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. Semantic Layer</h3>
        <p className="text-sm mb-2">Business-friendly abstraction of technical data.</p>
        <ul className="list-disc list-inside text-sm">
          <li>Business term definitions</li>
          <li>Calculated metrics and KPIs</li>
          <li>Hierarchies and relationships</li>
          <li>Security and access rules</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">5. Analysis Layer</h3>
        <p className="text-sm mb-2">Tools for data exploration and analysis.</p>
        <ul className="list-disc list-inside text-sm">
          <li>OLAP cubes for multidimensional analysis</li>
          <li>Ad-hoc query tools</li>
          <li>Statistical analysis</li>
          <li>Predictive analytics and ML</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">6. Presentation Layer</h3>
        <p className="text-sm mb-2">User-facing delivery mechanisms.</p>
        <ul className="list-disc list-inside text-sm">
          <li>Interactive dashboards</li>
          <li>Standard and ad-hoc reports</li>
          <li>Mobile applications</li>
          <li>Alerts and notifications</li>
        </ul>
      </div>
    </div>

    {/* Modern vs Traditional */}
    <h2 className="text-3xl font-bold mt-8">Traditional vs Modern BI Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Architecture Evolution:
════════════════════════════════════════════════════════════════

TRADITIONAL BI (2000s)              MODERN BI (2020s+)
─────────────────────               ─────────────────────

On-premises servers                 Cloud-native platforms
   │                                   │
   ▼                                   ▼
┌────────────┐                     ┌────────────┐
│   Fixed    │                     │  Elastic   │
│  Capacity  │                     │   Scale    │
└────────────┘                     └────────────┘

Batch ETL (nightly)                Real-time streaming
IT-controlled                      Self-service
Weeks to deploy                    Hours to deploy
Pre-defined reports                Ad-hoc exploration
Desktop tools                      Web/Mobile access

Modern Stack Example:
─────────────────────────────────────────
Sources → Cloud Storage → Transform (dbt) →
Cloud DW (Snowflake) → BI Tool (Tableau) → Users`}
      </pre>
    </div>

    {/* Architecture Patterns */}
    <h2 className="text-3xl font-bold mt-8">Common Architecture Patterns</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Hub-and-Spoke</h3>
        <p className="text-sm">Central EDW feeds multiple data marts. Enterprise consistency with department flexibility.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Mesh</h3>
        <p className="text-sm">Domain-owned data products. Decentralized ownership with federated governance.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Lambda Architecture</h3>
        <p className="text-sm">Separate batch and speed layers. Combines historical and real-time data.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Lakehouse</h3>
        <p className="text-sm">Data lake storage + data warehouse features. Best of both worlds.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BI architecture has multiple layers from sources to presentation</li>
        <li>Semantic layer translates technical data to business terms</li>
        <li>ETL layer is critical for data quality and integration</li>
        <li>Modern architectures favor cloud, self-service, and real-time</li>
        <li>Choose architecture pattern based on organization size and needs</li>
        <li>Hub-and-spoke is common for enterprise consistency</li>
        <li>Data mesh enables domain ownership at scale</li>
        <li>Architecture should evolve with business requirements</li>
      </ul>
    </div>
  </div>
);

export default BIArchitecture;
