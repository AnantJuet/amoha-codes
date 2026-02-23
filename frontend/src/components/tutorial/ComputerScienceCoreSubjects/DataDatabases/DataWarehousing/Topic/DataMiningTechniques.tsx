import React from "react";

const DataMiningTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Mining Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data mining employs various techniques from statistics, machine learning, and pattern
      recognition to discover insights from data. Understanding these techniques helps
      select the right approach for specific business problems.
    </p>

    {/* Technique Categories */}
    <h2 className="text-3xl font-bold mt-8">Technique Categories</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining Technique Taxonomy:
════════════════════════════════════════════════════════════════

                    DATA MINING TECHNIQUES
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
   SUPERVISED          UNSUPERVISED        SEMI-SUPERVISED
   (Labeled Data)      (Unlabeled)         (Mixed)
        │                   │                   │
   ┌────┴────┐         ┌────┴────┐         ┌────┴────┐
   │         │         │         │         │         │
   ▼         ▼         ▼         ▼         ▼         ▼
Classifi- Regres-   Clust-  Associ-   Self-    Co-
cation    sion      ering   ation     Training Training

Examples:           Examples:           Examples:
• Decision Trees    • K-Means           • Label Propagation
• Neural Networks   • Apriori           • Pseudo-labeling
• SVM              • DBSCAN            • Tri-training
• Random Forest    • PCA`}
      </pre>
    </div>

    {/* Main Techniques */}
    <h2 className="text-3xl font-bold mt-8">Core Data Mining Techniques</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">1. Classification</h3>
        <p className="text-sm mb-2">Assigns items to predefined categories based on features.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Input: Customer features → Output: Will churn? (Yes/No)

┌──────────────────┐     ┌──────────────┐     ┌─────────┐
│ Age: 35          │     │              │     │         │
│ Tenure: 2 years  │ ──▶ │  Classifier  │ ──▶ │ Churn:  │
│ Balance: $5000   │     │  (trained)   │     │  YES    │
│ Activity: Low    │     │              │     │         │
└──────────────────┘     └──────────────┘     └─────────┘

Algorithms: Decision Trees, Random Forest, SVM, Neural Networks`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">2. Clustering</h3>
        <p className="text-sm mb-2">Groups similar data points without predefined labels.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Before Clustering:          After Clustering:

    ○  ○     ●  ●              Cluster A    Cluster B
  ○    ○   ●    ●          ┌─────────┐  ┌─────────┐
    ○  ○     ●  ●          │ ○  ○    │  │  ●  ●   │
         △  △              │○    ○   │  │●    ●   │
       △    △              │ ○  ○    │  │  ●  ●   │
         △  △              └─────────┘  └─────────┘
                              Cluster C
                           ┌─────────┐
                           │  △  △   │
                           │△    △   │
                           └─────────┘

Algorithms: K-Means, DBSCAN, Hierarchical, Gaussian Mixture`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">3. Association Rule Mining</h3>
        <p className="text-sm mb-2">Discovers relationships between items in transactions.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction Data:                Discovered Rules:
─────────────────               ──────────────────
T1: Bread, Milk, Eggs           {Bread, Milk} → {Eggs}
T2: Bread, Milk                   Support: 60%
T3: Bread, Eggs                   Confidence: 75%
T4: Milk, Eggs
T5: Bread, Milk, Eggs           {Diaper} → {Beer}
                                  Support: 40%
                                  Confidence: 80%

Algorithms: Apriori, FP-Growth, Eclat`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">4. Regression</h3>
        <p className="text-sm mb-2">Predicts continuous numeric values.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Input Features → Predicted Value

┌──────────────────┐     ┌──────────────┐     ┌───────────┐
│ Square feet: 1500│     │              │     │           │
│ Bedrooms: 3      │ ──▶ │  Regression  │ ──▶ │ Price:    │
│ Location: Urban  │     │   Model      │     │ $350,000  │
│ Year built: 2010 │     │              │     │           │
└──────────────────┘     └──────────────┘     └───────────┘

Algorithms: Linear Regression, Polynomial, SVR, Neural Networks`}
          </pre>
        </div>
      </div>
    </div>

    {/* Technique Comparison */}
    <h2 className="text-3xl font-bold mt-8">Technique Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Input</th>
            <th className="p-3 border">Output</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Classification</td>
            <td className="p-3 border">Labeled data</td>
            <td className="p-3 border">Class labels</td>
            <td className="p-3 border">Spam detection, diagnosis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clustering</td>
            <td className="p-3 border">Unlabeled data</td>
            <td className="p-3 border">Group assignments</td>
            <td className="p-3 border">Customer segmentation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Association</td>
            <td className="p-3 border">Transaction data</td>
            <td className="p-3 border">Rules (X → Y)</td>
            <td className="p-3 border">Market basket analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Regression</td>
            <td className="p-3 border">Labeled (numeric)</td>
            <td className="p-3 border">Numeric values</td>
            <td className="p-3 border">Price prediction, forecasting</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Anomaly Detection</td>
            <td className="p-3 border">Normal data samples</td>
            <td className="p-3 border">Outlier flags</td>
            <td className="p-3 border">Fraud detection, quality control</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advanced Techniques */}
    <h2 className="text-3xl font-bold mt-8">Advanced Techniques</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Ensemble Methods</h3>
        <p className="text-sm">Combine multiple models for better accuracy.</p>
        <ul className="list-disc list-inside text-xs mt-2">
          <li>Random Forest (bagging)</li>
          <li>Gradient Boosting</li>
          <li>Stacking</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Deep Learning</h3>
        <p className="text-sm">Neural networks with many layers.</p>
        <ul className="list-disc list-inside text-xs mt-2">
          <li>CNNs for images</li>
          <li>RNNs for sequences</li>
          <li>Transformers for NLP</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Dimensionality Reduction</h3>
        <p className="text-sm">Reduce features while preserving information.</p>
        <ul className="list-disc list-inside text-xs mt-2">
          <li>PCA</li>
          <li>t-SNE</li>
          <li>Autoencoders</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Sequential Pattern Mining</h3>
        <p className="text-sm">Find patterns in ordered sequences.</p>
        <ul className="list-disc list-inside text-xs mt-2">
          <li>GSP Algorithm</li>
          <li>SPADE</li>
          <li>PrefixSpan</li>
        </ul>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Supervised learning uses labeled data; unsupervised uses unlabeled</li>
        <li>Classification predicts categories; Regression predicts numbers</li>
        <li>Clustering groups similar items without prior labels</li>
        <li>Association mining finds relationships in transactional data</li>
        <li>Choose technique based on data type and business question</li>
        <li>Ensemble methods often outperform single algorithms</li>
        <li>Deep learning excels with large datasets and complex patterns</li>
        <li>Preprocessing and feature engineering are often more important than algorithm choice</li>
      </ul>
    </div>
  </div>
);

export default DataMiningTechniques;
