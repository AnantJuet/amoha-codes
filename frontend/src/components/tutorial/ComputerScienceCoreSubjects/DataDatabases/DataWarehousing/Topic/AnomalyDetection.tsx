import React from "react";

const AnomalyDetection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Anomaly Detection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Anomaly detection (also called outlier detection) identifies data points that
      deviate significantly from the expected pattern. These outliers may represent
      fraud, errors, defects, or other critical events worth investigating.
    </p>

    {/* Anomaly Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding Anomalies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Anomaly Detection Visualization:
════════════════════════════════════════════════════════════════

                    Feature Y
                        │
                   10   │           ⊗ ← Outlier (anomaly)
                        │
                    8   │
                        │      ●●●
                    6   │    ●●●●●●●
                        │   ●●●●●●●●●   ← Normal cluster
                    4   │    ●●●●●●●
                        │      ●●●
                    2   │
                        │  ⊗ ← Outlier
                    0   └──────────────────────────────► Feature X
                        0   2   4   6   8  10  12  14

Anomalies are points that:
• Don't belong to any cluster
• Are far from the normal distribution
• Have unusual feature combinations`}
      </pre>
    </div>

    {/* Types of Anomalies */}
    <h2 className="text-3xl font-bold mt-8">Types of Anomalies</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Point Anomalies</h3>
        <p className="text-sm mb-2">Single data point is anomalous.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Normal transactions:
$50, $100, $75, $80

Anomaly:
$10,000 ← Point anomaly`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Contextual Anomalies</h3>
        <p className="text-sm mb-2">Anomalous only in specific context.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Temperature:
Summer: 85°F ← Normal
Winter: 85°F ← Anomaly!

Context matters`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Collective Anomalies</h3>
        <p className="text-sm mb-2">Group of points is anomalous together.</p>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`ECG Heartbeat:
Normal: ▲ ▲ ▲ ▲ ▲
Anomaly: ▲ ▲ ── ── ▲
          └─ collective
             anomaly`}
          </pre>
        </div>
      </div>
    </div>

    {/* Detection Methods */}
    <h2 className="text-3xl font-bold mt-8">Anomaly Detection Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Statistical</td>
            <td className="p-3 border">Z-score, IQR</td>
            <td className="p-3 border">Simple, interpretable</td>
            <td className="p-3 border">Assumes distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clustering</td>
            <td className="p-3 border">DBSCAN noise points</td>
            <td className="p-3 border">No distribution assumption</td>
            <td className="p-3 border">Cluster parameters needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Isolation Forest</td>
            <td className="p-3 border">Random tree isolation</td>
            <td className="p-3 border">Fast, works well</td>
            <td className="p-3 border">Less interpretable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">One-Class SVM</td>
            <td className="p-3 border">Boundary around normal</td>
            <td className="p-3 border">Handles high dimensions</td>
            <td className="p-3 border">Sensitive to parameters</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Autoencoder</td>
            <td className="p-3 border">Reconstruction error</td>
            <td className="p-3 border">Learns complex patterns</td>
            <td className="p-3 border">Needs lots of normal data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LOF</td>
            <td className="p-3 border">Local density comparison</td>
            <td className="p-3 border">Handles local outliers</td>
            <td className="p-3 border">Computationally expensive</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Statistical Method Example */}
    <h2 className="text-3xl font-bold mt-8">Statistical Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Z-Score Method:
════════════════════════════════════════════════════════════════

Z-Score = (x - μ) / σ

Where: μ = mean, σ = standard deviation

Example - Transaction Amounts:
Data: $50, $60, $55, $70, $65, $500
Mean (μ) = $133.33
Std Dev (σ) = $176.38

Z-Scores:
$50  → Z = -0.47 (normal)
$60  → Z = -0.42 (normal)
$55  → Z = -0.44 (normal)
$70  → Z = -0.36 (normal)
$65  → Z = -0.39 (normal)
$500 → Z = 2.08  ← ANOMALY (|Z| > 2)


IQR Method:
──────────────────────────────────────
Q1 = 25th percentile
Q3 = 75th percentile
IQR = Q3 - Q1

Lower Bound = Q1 - 1.5 × IQR
Upper Bound = Q3 + 1.5 × IQR

Points outside bounds = Anomalies`}
      </pre>
    </div>

    {/* Isolation Forest */}
    <h2 className="text-3xl font-bold mt-8">Isolation Forest</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="text-sm mb-2">Anomalies are "isolated" faster because they're different from the rest.</p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Isolation Forest Concept:
─────────────────────────────────────────

Normal Point (deep in tree):    Anomaly (isolated quickly):

       root                          root
        │                             │
     ┌──┴──┐                      ┌──┴──┐
     │     │                      │     ⊗ ← Isolated!
   ┌─┴─┐ ┌─┴─┐                  ┌─┴─┐   (path length = 1)
   │   │ │   │                  │   │
 ┌─┴─┐ │ │ ┌─┴─┐                ...
 │   │ │ │ │   │
 ● ← Normal point
 (path length = 4)

Shorter path = More anomalous`}
        </pre>
      </div>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold mb-2 text-red-800 dark:text-red-200">Fraud Detection</h3>
        <p className="text-sm">Credit card fraud, insurance fraud, identity theft</p>
      </div>
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Network Security</h3>
        <p className="text-sm">Intrusion detection, DDoS attacks, malware</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Manufacturing</h3>
        <p className="text-sm">Defect detection, equipment failure prediction</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Healthcare</h3>
        <p className="text-sm">Abnormal test results, disease outbreak detection</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Anomalies are data points that differ significantly from the norm</li>
        <li>Three types: point, contextual, and collective anomalies</li>
        <li>Statistical methods (Z-score, IQR) are simple but assume distributions</li>
        <li>Isolation Forest is fast and effective for many use cases</li>
        <li>One-Class SVM trains only on normal data</li>
        <li>Autoencoders use reconstruction error to detect anomalies</li>
        <li>Domain knowledge is crucial for interpreting results</li>
        <li>Evaluation is challenging due to imbalanced classes</li>
      </ul>
    </div>
  </div>
);

export default AnomalyDetection;
