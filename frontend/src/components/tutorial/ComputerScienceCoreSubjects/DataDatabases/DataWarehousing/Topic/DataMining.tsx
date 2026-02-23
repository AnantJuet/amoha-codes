import React from "react";

const DataMining: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data mining is the process of discovering patterns, correlations, and insights
      from large datasets using statistical and machine learning techniques. It transforms
      raw data into actionable knowledge for business decision-making.
    </p>

    {/* Section Overview */}
    <h2 className="text-3xl font-bold mt-8">Topics in This Section</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining - Section Overview
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    TOPICS COVERED                                │
│                                                                  │
│   1. Introduction to Data Mining                                │
│      └── What is data mining and why it matters                 │
│                                                                  │
│   2. Data Mining Process                                        │
│      └── CRISP-DM methodology and workflow                      │
│                                                                  │
│   3. Association Rule Mining                                    │
│      └── Finding relationships between items (Market Basket)    │
│                                                                  │
│   4. Apriori Algorithm                                          │
│      └── Classic algorithm for association rules                │
│                                                                  │
│   5. Classification                                             │
│      └── Predicting categorical labels                          │
│                                                                  │
│   6. Decision Trees                                             │
│      └── Tree-based classification models                       │
│                                                                  │
│   7. Clustering                                                 │
│      └── Grouping similar data points                           │
│                                                                  │
│   8. K-Means Clustering                                         │
│      └── Popular partition-based clustering                     │
│                                                                  │
│   9. Prediction and Forecasting                                 │
│      └── Predicting future values                               │
│                                                                  │
│  10. Regression Analysis                                        │
│      └── Predicting continuous numeric values                   │
│                                                                  │
│  11. Data Mining Applications                                   │
│      └── Real-world use cases across industries                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Data Mining Techniques */}
    <h2 className="text-3xl font-bold mt-8">Core Techniques Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining Techniques:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   CLASSIFICATION              CLUSTERING                        │
│   ──────────────              ──────────                        │
│   "What category?"            "What groups exist?"              │
│                                                                  │
│   Input → [Model] → Label     Input → [Model] → Groups          │
│                                                                  │
│   Examples:                   Examples:                         │
│   • Spam detection            • Customer segmentation           │
│   • Credit risk               • Document grouping               │
│   • Disease diagnosis         • Anomaly detection               │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   ASSOCIATION                 REGRESSION                        │
│   ───────────                 ──────────                        │
│   "What goes together?"       "What's the value?"               │
│                                                                  │
│   {A, B} → {C}                Input → [Model] → Number          │
│   Support, Confidence         Y = f(X)                          │
│                                                                  │
│   Examples:                   Examples:                         │
│   • Market basket analysis    • Sales forecasting               │
│   • Recommendation systems    • Price prediction                │
│   • Cross-selling             • Demand planning                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">Supervised Learning</h3>
        <p className="text-sm">Training with labeled data to predict outcomes. Includes classification and regression techniques.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Unsupervised Learning</h3>
        <p className="text-sm">Finding patterns in unlabeled data. Includes clustering and association rule mining.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">CRISP-DM</h3>
        <p className="text-sm">Cross-Industry Standard Process for Data Mining. A structured methodology for mining projects.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">Model Evaluation</h3>
        <p className="text-sm">Measuring model accuracy, precision, recall, and other metrics to validate performance.</p>
      </div>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Industry Applications</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Retail</h3>
        <p className="text-sm">Market basket analysis, customer segmentation, demand forecasting</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Banking</h3>
        <p className="text-sm">Fraud detection, credit scoring, customer churn prediction</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Healthcare</h3>
        <p className="text-sm">Disease prediction, patient clustering, treatment effectiveness</p>
      </div>
    </div>

    {/* Learning Path */}
    <h2 className="text-3xl font-bold mt-8">Learning Path</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Begin with <strong>"Introduction to Data Mining"</strong> and the <strong>Data Mining Process</strong>
        to understand the methodology. Then explore specific techniques: <strong>Classification</strong> and
        <strong> Decision Trees</strong> for prediction, <strong>Clustering</strong> for segmentation,
        and <strong>Association Rules</strong> for pattern discovery. Finish with real-world <strong>Applications</strong>.
      </p>
    </div>
  </div>
);

export default DataMining;
