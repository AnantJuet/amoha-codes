import React from "react";

const Clustering: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Clustering in Data Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Clustering is an unsupervised learning technique that groups similar data points
      together without predefined labels. The goal is to maximize intra-cluster similarity
      and minimize inter-cluster similarity.
    </p>

    {/* Clustering Concept */}
    <h2 className="text-3xl font-bold mt-8">Clustering Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Clustering Visualization:
════════════════════════════════════════════════════════════════

Before Clustering:                After Clustering:
(Unlabeled data points)          (Grouped by similarity)

    •  •       ○  ○              Cluster 1      Cluster 2
  •      •   ○      ○          ┌─────────┐   ┌─────────┐
    •  •       ○  ○            │  •  •   │   │  ○  ○   │
                               │•      • │   │○      ○ │
       △  △                    │  •  •   │   │  ○  ○   │
     △      △                  └─────────┘   └─────────┘
       △  △
                                  Cluster 3
                               ┌─────────┐
                               │  △  △   │
                               │△      △ │
                               │  △  △   │
                               └─────────┘

Goal: Points within a cluster are SIMILAR
      Points across clusters are DIFFERENT`}
      </pre>
    </div>

    {/* K-Means Algorithm */}
    <h2 className="text-3xl font-bold mt-8">K-Means Clustering</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`K-Means Algorithm Steps:
════════════════════════════════════════════════════════════════

Step 1: Initialize K centroids randomly

    •       ★1                    (K=3, 3 random centroids)
  •   •       •      ★2
        •   •
    •       •    •
              ★3

Step 2: Assign each point to nearest centroid

    ○       ★1       △           ○ = Cluster 1
  ○   ○       △      ★2          △ = Cluster 2
        □   □                    □ = Cluster 3
    □       □    △
              ★3

Step 3: Recalculate centroids (mean of cluster points)

    ○     ★1(new)  △             Centroids move to cluster
  ○   ○       △  ★2(new)         centers
        □   □
    □  ★3    □    △
      (new)

Step 4: Repeat Steps 2-3 until convergence

    ○       ★      △
  ○   ○       △    ★             Converged!
        □   □                    No more centroid movement
    □   ★   □    △`}
      </pre>
    </div>

    {/* Clustering Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Clustering Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Strengths</th>
            <th className="p-3 border">Weaknesses</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">K-Means</td>
            <td className="p-3 border">Partitioning</td>
            <td className="p-3 border">Fast, simple, scalable</td>
            <td className="p-3 border">Requires K, spherical clusters only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Agglomerative/Divisive</td>
            <td className="p-3 border">Dendrogram visualization, no K needed</td>
            <td className="p-3 border">O(n²) complexity, not scalable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DBSCAN</td>
            <td className="p-3 border">Density-based</td>
            <td className="p-3 border">Finds arbitrary shapes, handles noise</td>
            <td className="p-3 border">Struggles with varying density</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Gaussian Mixture</td>
            <td className="p-3 border">Model-based</td>
            <td className="p-3 border">Soft clustering, probabilistic</td>
            <td className="p-3 border">Assumes Gaussian distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mean Shift</td>
            <td className="p-3 border">Density-based</td>
            <td className="p-3 border">No K needed, finds clusters automatically</td>
            <td className="p-3 border">Computationally expensive</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hierarchical Clustering */}
    <h2 className="text-3xl font-bold mt-8">Hierarchical Clustering Dendrogram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dendrogram (Tree Structure):
════════════════════════════════════════════════════════════════

Height                         Cut here for 2 clusters
  │                                    │
  │    ┌────────────────────────┴────────────────────────┐
  │    │                                                  │
4 ┤    │            ┌────────────┴────────────┐          │
  │    │            │                         │          │
3 ┤    │      ┌─────┴─────┐           ┌──────┴──────┐   │
  │    │      │           │           │             │   │
2 ┤    │    ┌─┴─┐       ┌─┴─┐       ┌─┴─┐         ┌─┴─┐ │
  │    │    │   │       │   │       │   │         │   │ │
1 ┤   ┌┴┐  ┌┴┐ ┌┴┐     ┌┴┐ ┌┴┐     ┌┴┐ ┌┴┐       ┌┴┐ ┌┴┐│
  │   │ │  │ │ │ │     │ │ │ │     │ │ │ │       │ │ │ ││
0 ┼───A─B──C─D─E─F─────G─H─I─J─────K─L─M─N───────O─P─Q─R┼
  └──────────────────────────────────────────────────────┘
      └───────────┘     └─────────┘     └───────────────┘
       Cluster 1          Cluster 2        Cluster 3
                                    (if cut at height 3)`}
      </pre>
    </div>

    {/* DBSCAN */}
    <h2 className="text-3xl font-bold mt-8">DBSCAN (Density-Based)</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Key Concepts</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li><strong>ε (epsilon):</strong> Neighborhood radius</li>
          <li><strong>MinPts:</strong> Minimum points for dense region</li>
          <li><strong>Core Point:</strong> Has MinPts within ε</li>
          <li><strong>Border Point:</strong> Within ε of core point</li>
          <li><strong>Noise:</strong> Neither core nor border</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-gray-100 text-gray-900 font-mono text-xs text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`DBSCAN Visualization:
     ε=radius
    ┌───┐
    │ • │  Core (≥3 pts in radius)
    └───┘

  ○ ─ ─ ─ ○   Connected by
    ○   ○      density

    ×         Noise (isolated)`}
        </pre>
      </div>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Clustering Use Cases</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-200">Customer Segmentation</h3>
        <p className="text-sm">Group customers by purchasing behavior for targeted marketing.</p>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2 text-green-800 dark:text-green-200">Document Clustering</h3>
        <p className="text-sm">Organize documents by topic for search and discovery.</p>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold mb-2 text-purple-800 dark:text-purple-200">Image Segmentation</h3>
        <p className="text-sm">Group pixels by color/texture for object detection.</p>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold mb-2 text-orange-800 dark:text-orange-200">Anomaly Detection</h3>
        <p className="text-sm">Find outliers that don't belong to any cluster.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Clustering is unsupervised - no labels needed</li>
        <li>K-Means is fast but requires specifying K</li>
        <li>Hierarchical clustering produces a dendrogram for any K</li>
        <li>DBSCAN handles arbitrary shapes and identifies noise</li>
        <li>Evaluation metrics: Silhouette Score, Davies-Bouldin Index</li>
        <li>Feature scaling is critical - normalize your data</li>
        <li>Elbow method helps determine optimal K for K-Means</li>
        <li>Domain knowledge helps interpret and validate clusters</li>
      </ul>
    </div>
  </div>
);

export default Clustering;
