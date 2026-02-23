import React from "react";

const HOLAP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      HOLAP (Hybrid OLAP)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ROLAP and MOLAP are combined in Hybrid On-Line Analytical Processing (HOLAP). HOLAP offers
      greater scalability than ROLAP and faster computation than MOLAP. HOLAP is a hybrid of
      ROLAP and MOLAP. HOLAP servers are capable of storing large amounts of detailed data.
    </p>

    <h2 className="text-3xl font-bold mt-8">How HOLAP Works</h2>
    <p className="leading-relaxed">
      HOLAP combines the best features of both ROLAP and MOLAP. It stores detailed data in
      relational tables (like ROLAP) while keeping aggregated data in multidimensional cubes
      (like MOLAP). This provides a balance between storage efficiency and query performance.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HOLAP Architecture:

+------------------+     +------------------+
|   MOLAP Storage  |     |   ROLAP Storage  |
| (Aggregated Data)|     |  (Detailed Data) |
+------------------+     +------------------+
| - Summary levels |     | - Transaction    |
| - Pre-calculated |     |   level data     |
| - Fast queries   |     | - Large volumes  |
+--------+---------+     +--------+---------+
         |                        |
         +------------+-----------+
                      |
              +-------v-------+
              |  HOLAP Server |
              +---------------+
              | Query Router  |
              | - Aggregates  |
              |   → MOLAP     |
              | - Details     |
              |   → ROLAP     |
              +---------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Hybrid Storage:</strong> Combines relational and multidimensional storage</li>
      <li><strong>Intelligent Routing:</strong> Routes queries to appropriate storage based on data level</li>
      <li><strong>Scalability:</strong> Greater scalability than pure MOLAP</li>
      <li><strong>Performance:</strong> Faster than pure ROLAP for aggregated queries</li>
      <li><strong>Large Data Capacity:</strong> Can store large amounts of detailed data</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of HOLAP</h2>
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
            <td className="p-3 border font-semibold">Best of Both Worlds</td>
            <td className="p-3 border">Combines ROLAP scalability with MOLAP speed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Efficient Storage</td>
            <td className="p-3 border">Detailed data in relational format saves space</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fast Aggregations</td>
            <td className="p-3 border">Pre-calculated summaries provide quick response</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Drill-Through</td>
            <td className="p-3 border">Can access detailed data when needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexible</td>
            <td className="p-3 border">Can adjust balance between MOLAP and ROLAP storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of HOLAP</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Complexity:</strong> More complex architecture to manage</li>
      <li><strong>Configuration:</strong> Requires careful tuning of what data goes where</li>
      <li><strong>Maintenance:</strong> Two storage systems to maintain</li>
      <li><strong>Cost:</strong> May require more infrastructure than pure ROLAP or MOLAP</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">HOLAP Query Routing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Routing Example:

Query 1: "Total sales by region for 2025"
  → Routed to MOLAP (aggregated data)
  → Response: Sub-second

Query 2: "Show all transactions for customer X in March"
  → Routed to ROLAP (detailed data)
  → Response: Seconds (depending on volume)

Query 3: "Yearly summary, then drill to daily details"
  → Starts with MOLAP (summary)
  → Drills to ROLAP (details)
  → Seamless transition for user`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: ROLAP vs MOLAP vs HOLAP</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">ROLAP</th>
            <th className="p-3 border">MOLAP</th>
            <th className="p-3 border">HOLAP</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">Relational</td>
            <td className="p-3 border">Multidimensional</td>
            <td className="p-3 border">Both</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Query Speed</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border">Fast (aggregates)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Highest</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Freshness</td>
            <td className="p-3 border">Real-time</td>
            <td className="p-3 border">Cube refresh</td>
            <td className="p-3 border">Mixed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use HOLAP</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>When you need both fast aggregations and access to detailed data</li>
        <li>When data volumes are too large for pure MOLAP</li>
        <li>When pure ROLAP query performance is insufficient</li>
        <li>When drill-through to transaction-level data is required</li>
        <li>When you want flexibility in balancing storage and performance</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>HOLAP combines ROLAP and MOLAP approaches</li>
        <li>Aggregated data stored in cubes, detailed data in relational tables</li>
        <li>Offers greater scalability than ROLAP and faster computation than MOLAP</li>
        <li>HOLAP servers can store large amounts of detailed data</li>
        <li>More complex to configure and maintain than pure approaches</li>
        <li>Best for organizations needing both summary analysis and detail drill-through</li>
      </ul>
    </div>
  </div>
);

export default HOLAP;
