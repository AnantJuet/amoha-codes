import React from "react";

const FutureTrends: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Future Trends in Data Warehousing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The data warehousing landscape continues to evolve rapidly with new technologies,
      architectures, and paradigms. Understanding emerging trends helps organizations
      prepare for the future of analytics.
    </p>

    {/* Trends Overview */}
    <h2 className="text-3xl font-bold mt-8">Key Trends Shaping the Future</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Warehousing Evolution:
════════════════════════════════════════════════════════════════

PAST (2010s)           PRESENT (2020s)         FUTURE (2030s)
────────────           ───────────────         ──────────────

On-premises        →   Cloud-native        →   AI-native
Batch processing   →   Real-time           →   Continuous
ETL                →   ELT                 →   No-code/Auto
Single platform    →   Best-of-breed       →   Unified platforms
IT-controlled      →   Self-service        →   AI-assisted
Manual governance  →   Automated           →   Autonomous
Data warehouse     →   Data lakehouse      →   Data mesh + AI

┌──────────────────────────────────────────────────────────────┐
│                    EMERGING PARADIGMS                         │
│                                                               │
│   🔹 Data Mesh - Decentralized ownership                     │
│   🔹 AI/ML Integration - Native machine learning             │
│   🔹 Real-time Everything - Streaming analytics              │
│   🔹 Data Fabric - Connected data ecosystem                  │
│   🔹 Semantic Layer - Universal metrics                      │
│   🔹 DataOps - Agile data operations                         │
│                                                               │
└──────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Trends */}
    <h2 className="text-3xl font-bold mt-8">Detailed Trend Analysis</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">1. Data Mesh Architecture</h3>
        <p className="text-sm mb-2">Decentralized, domain-oriented data ownership at scale.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Domain teams own their data as products</li>
          <li>Self-serve data infrastructure</li>
          <li>Federated governance</li>
          <li>Breaking down centralized bottlenecks</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">2. AI-Powered Analytics</h3>
        <p className="text-sm mb-2">Machine learning embedded throughout the data stack.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Natural language querying (Text-to-SQL)</li>
          <li>Automated data quality and anomaly detection</li>
          <li>AI-generated insights and recommendations</li>
          <li>LLMs for data documentation and discovery</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">3. Real-Time Analytics</h3>
        <p className="text-sm mb-2">Moving from batch to continuous data processing.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Stream processing as the default</li>
          <li>Sub-second latency dashboards</li>
          <li>Real-time machine learning inference</li>
          <li>Event-driven architectures</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2 text-orange-800 dark:text-orange-200">4. Universal Semantic Layer</h3>
        <p className="text-sm mb-2">Centralized business logic layer for consistent metrics.</p>
        <ul className="list-disc list-inside text-xs">
          <li>Single source of truth for metrics</li>
          <li>BI tool agnostic</li>
          <li>Headless BI architecture</li>
          <li>dbt metrics, Cube.js, AtScale</li>
        </ul>
      </div>
    </div>

    {/* Technology Predictions */}
    <h2 className="text-3xl font-bold mt-8">Technology Predictions</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Open Table Formats Win</h3>
        <p className="text-sm">Delta Lake, Iceberg, and Hudi become the standard. Interoperability increases.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Streaming Becomes Default</h3>
        <p className="text-sm">Batch processing treated as a special case of streaming. Unified batch and stream.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Cost Optimization Tooling</h3>
        <p className="text-sm">Automated cost management and optimization. FinOps for data becomes essential.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Privacy-Preserving Analytics</h3>
        <p className="text-sm">Differential privacy, secure enclaves, and federated learning for sensitive data.</p>
      </div>
    </div>

    {/* Skills of the Future */}
    <h2 className="text-3xl font-bold mt-8">Future Skills Needed</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Professional Skills Evolution:
════════════════════════════════════════════════════════════════

DECLINING IMPORTANCE          INCREASING IMPORTANCE
────────────────────          ─────────────────────

• Manual ETL scripting        • Data product thinking
• Single-tool expertise       • ML/AI fundamentals
• On-prem administration      • Cloud cost optimization
• Rigid schema design         • Streaming architecture
• Batch-only processing       • DataOps practices
                              • Domain knowledge
                              • Data governance
                              • Privacy/compliance
                              • Communication skills`}
      </pre>
    </div>

    {/* Preparing for the Future */}
    <h2 className="text-3xl font-bold mt-8">How to Prepare</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Embrace Cloud</h3>
        <p className="text-sm">Cloud-native architectures are the future. Start migrating and learning.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Invest in Governance</h3>
        <p className="text-sm">Data governance becomes more critical as data grows. Build foundations now.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Learn AI/ML</h3>
        <p className="text-sm">AI integration is inevitable. Understand ML concepts and applications.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data mesh decentralizes ownership to domain teams</li>
        <li>AI/ML will be embedded throughout the data stack</li>
        <li>Real-time analytics becomes the default expectation</li>
        <li>Universal semantic layers provide consistent metrics</li>
        <li>Open table formats (Delta, Iceberg) reduce vendor lock-in</li>
        <li>DataOps brings DevOps practices to data teams</li>
        <li>Skills must evolve: more AI, cloud, and product thinking</li>
        <li>The future is about enabling faster, more trusted insights</li>
      </ul>
    </div>
  </div>
);

export default FutureTrends;
