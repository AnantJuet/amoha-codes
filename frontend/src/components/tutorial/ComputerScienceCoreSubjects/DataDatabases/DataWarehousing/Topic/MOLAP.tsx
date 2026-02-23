import React from "react";

const MOLAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MOLAP (Multidimensional OLAP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MOLAP (Multidimensional OLAP) uses array-based storage to provide fast, multidimensional
      analysis. Data is stored as a multidimensional array, where each cell corresponds to a
      combination of dimension values and holds a measured fact. Unlike ROLAP, MOLAP defines
      all possible dimension combinations.
    </p>

    <h2 className="text-3xl font-bold mt-8">How MOLAP Works</h2>
    <p className="leading-relaxed">
      MOLAP stores data in an optimized multidimensional array structure called a cube.
      The cube pre-calculates and stores aggregations, enabling extremely fast query response times.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MOLAP Cube Structure:

                    Time (Quarters)
                   Q1   Q2   Q3   Q4
                  +---+---+---+---+
               N  |234|256|289|312|
Product    Region |   |   |   |   |
Electronics   S  |189|201|223|245|
                  +---+---+---+---+
               N  |156|178|192|210|
Clothing      S  |134|145|167|189|
                  +---+---+---+---+

Each cell contains pre-calculated measure (e.g., Sales Amount)
Accessing any cell is O(1) - direct array lookup`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Array-Based Storage:</strong> Data stored in multidimensional arrays</li>
      <li><strong>Pre-Aggregation:</strong> All aggregations calculated during cube build</li>
      <li><strong>Fast Query Response:</strong> Direct array access provides millisecond response</li>
      <li><strong>Sparse Data Handling:</strong> Must handle empty cells (sparsity)</li>
      <li><strong>Cube Processing:</strong> Requires periodic rebuild when data changes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of MOLAP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Excellent Performance</td>
            <td className="p-3 border">Pre-calculated aggregations enable sub-second query response</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complex Calculations</td>
            <td className="p-3 border">Supports sophisticated analytical calculations efficiently</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistent Response</td>
            <td className="p-3 border">Query complexity doesn't significantly impact response time</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimized Storage</td>
            <td className="p-3 border">Data compression techniques reduce storage requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rich Functionality</td>
            <td className="p-3 border">Full OLAP operation support (roll-up, drill-down, etc.)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of MOLAP</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Sparsity Problem:</strong> Many empty cells consuming space when dimensions have many combinations</li>
      <li><strong>Data Size Limits:</strong> Limited by available memory and storage for cube</li>
      <li><strong>Cube Build Time:</strong> Processing large cubes can take significant time</li>
      <li><strong>Data Latency:</strong> Data is only as current as the last cube refresh</li>
      <li><strong>Scalability Limits:</strong> Adding dimensions exponentially increases cube size</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Sparsity Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sparsity Example:

Dimensions:
- Products: 10,000 items
- Regions: 500 locations
- Time: 365 days

Total Possible Cells: 10,000 × 500 × 365 = 1,825,000,000 cells

If only 5% of combinations have data:
- Actual data cells: ~91 million
- Empty cells: ~1.7 billion (wasted space)

Solutions:
1. Sparse array techniques
2. Compression algorithms
3. Only storing non-empty cells
4. Hash-based indexing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MOLAP vs ROLAP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">MOLAP</th>
            <th className="p-3 border">ROLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">Multidimensional arrays</td>
            <td className="p-3 border">Relational tables</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Speed</td>
            <td className="p-3 border">Faster (pre-aggregated)</td>
            <td className="p-3 border">Slower (runtime aggregation)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Volume</td>
            <td className="p-3 border">Limited by cube size</td>
            <td className="p-3 border">Virtually unlimited</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Freshness</td>
            <td className="p-3 border">As of last cube build</td>
            <td className="p-3 border">Real-time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use MOLAP</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>When query performance is the top priority</li>
        <li>When data volume is manageable (GBs to small TBs)</li>
        <li>When data doesn't change frequently</li>
        <li>When complex calculations are required</li>
        <li>When consistent response times are critical</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MOLAP stores data in multidimensional arrays (cubes)</li>
        <li>Pre-aggregation enables extremely fast query response</li>
        <li>Sparsity is a major challenge - many empty cells waste space</li>
        <li>Best suited for smaller datasets with high query performance needs</li>
        <li>Cube rebuild is required when source data changes</li>
        <li>Provides fastest computation compared to ROLAP and HOLAP</li>
      </ul>
    </div>
  </div>
);

export default MOLAP;
