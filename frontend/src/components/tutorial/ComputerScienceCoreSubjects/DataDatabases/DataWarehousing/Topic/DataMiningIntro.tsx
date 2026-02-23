import React from "react";

const DataMiningIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Data Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Mining is the process of discovering patterns, correlations, anomalies, and
      insights from large datasets using statistical, mathematical, and computational
      techniques. It transforms raw data into actionable knowledge for decision-making.
    </p>

    {/* Data Mining Overview */}
    <h2 className="text-3xl font-bold mt-8">What is Data Mining?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining Process:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                      RAW DATA SOURCES                           │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│   │Databases │  │Files     │  │Web Data  │  │Sensors   │       │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│        └─────────────┴─────────────┴─────────────┘             │
│                           │                                     │
│                           ▼                                     │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              DATA PREPROCESSING                      │      │
│   │   Cleaning → Integration → Transformation → Reduction│      │
│   └─────────────────────────┬───────────────────────────┘      │
│                             │                                   │
│                             ▼                                   │
│   ┌─────────────────────────────────────────────────────┐      │
│   │               DATA MINING ENGINE                     │      │
│   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │      │
│   │  │Classify │ │Cluster  │ │Associate│ │Predict  │   │      │
│   │  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │      │
│   └─────────────────────────┬───────────────────────────┘      │
│                             │                                   │
│                             ▼                                   │
│   ┌─────────────────────────────────────────────────────┐      │
│   │            PATTERNS & KNOWLEDGE                      │      │
│   │     Rules │ Models │ Insights │ Predictions          │      │
│   └─────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* KDD Process */}
    <h2 className="text-3xl font-bold mt-8">Knowledge Discovery in Databases (KDD)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`KDD Process Steps:
════════════════════════════════════════════════════════════════

Step 1          Step 2          Step 3          Step 4          Step 5
Selection       Preprocessing   Transformation  Data Mining     Evaluation
   │               │               │               │               │
   ▼               ▼               ▼               ▼               ▼
┌──────┐       ┌──────┐       ┌──────┐       ┌──────┐       ┌──────┐
│ Raw  │──────▶│Clean │──────▶│Trans-│──────▶│Mine  │──────▶│Valid │
│ Data │       │ Data │       │formed│       │Patt- │       │Patt- │
│      │       │      │       │ Data │       │erns  │       │erns  │
└──────┘       └──────┘       └──────┘       └──────┘       └──────┘
                                                                │
                                                                ▼
                                                          ┌──────────┐
                                                          │KNOWLEDGE │
                                                          └──────────┘

Data Mining is ONE step in the larger KDD process!`}
      </pre>
    </div>

    {/* Data Mining Tasks */}
    <h2 className="text-3xl font-bold mt-8">Data Mining Tasks</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Descriptive Tasks</h3>
        <p className="text-sm mb-2">Find patterns that describe the data</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>Clustering:</strong> Group similar items</li>
          <li><strong>Association:</strong> Find co-occurring items</li>
          <li><strong>Summarization:</strong> Compact descriptions</li>
          <li><strong>Anomaly Detection:</strong> Find outliers</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Predictive Tasks</h3>
        <p className="text-sm mb-2">Use current data to predict future</p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>Classification:</strong> Assign categories</li>
          <li><strong>Regression:</strong> Predict numeric values</li>
          <li><strong>Time Series:</strong> Forecast trends</li>
          <li><strong>Sequence Analysis:</strong> Predict next events</li>
        </ul>
      </div>
    </div>

    {/* Data Mining vs Related Fields */}
    <h2 className="text-3xl font-bold mt-8">Data Mining vs Related Fields</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Focus</th>
            <th className="p-3 border">Overlap with Data Mining</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Statistics</td>
            <td className="p-3 border">Inference from samples</td>
            <td className="p-3 border">Statistical methods used in mining</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Machine Learning</td>
            <td className="p-3 border">Learning from data</td>
            <td className="p-3 border">ML algorithms are core to mining</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Database Systems</td>
            <td className="p-3 border">Store and query data</td>
            <td className="p-3 border">Mining extends query capabilities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">AI</td>
            <td className="p-3 border">Simulate intelligence</td>
            <td className="p-3 border">Mining discovers intelligent patterns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Visualization</td>
            <td className="p-3 border">Present data visually</td>
            <td className="p-3 border">Mining results often visualized</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Why Data Mining */}
    <h2 className="text-3xl font-bold mt-8">Why Data Mining?</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Explosion</h3>
        <p className="text-sm">Organizations collect massive amounts of data that's impossible to analyze manually.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Hidden Patterns</h3>
        <p className="text-sm">Valuable insights buried in data are invisible to traditional queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Competitive Advantage</h3>
        <p className="text-sm">Discoveries from data mining drive strategic business decisions.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data Mining extracts patterns and knowledge from large datasets</li>
        <li>It's part of the larger KDD (Knowledge Discovery in Databases) process</li>
        <li>Tasks include classification, clustering, association, and anomaly detection</li>
        <li>Descriptive mining describes data; Predictive mining forecasts outcomes</li>
        <li>Combines techniques from statistics, ML, databases, and AI</li>
        <li>Preprocessing is essential - "garbage in, garbage out"</li>
        <li>Mining discovers non-obvious, actionable insights</li>
        <li>Applications span business, science, healthcare, and security</li>
      </ul>
    </div>
  </div>
);

export default DataMiningIntro;
