import React from 'react';

const DatabaseSharding: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Database Sharding
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database sharding is a horizontal scaling technique that partitions data across multiple database
      instances (shards). Each shard holds a subset of the total data, allowing the system to handle
      larger datasets and higher throughput than a single database can support.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is Sharding?</h2>
    <p className="leading-relaxed">
      Sharding splits a large database into smaller, more manageable pieces called shards. Each shard
      is an independent database that contains a portion of the data. Together, all shards make up
      the complete dataset.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Sharding Architecture:</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`                    ┌─────────────────┐
                    │   Application   │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Shard Router   │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
   ┌─────▼─────┐       ┌─────▼─────┐       ┌─────▼─────┐
   │  Shard 1  │       │  Shard 2  │       │  Shard 3  │
   │  (A-H)    │       │  (I-P)    │       │  (Q-Z)    │
   └───────────┘       └───────────┘       └───────────┘`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Use Sharding?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Database size exceeds single machine capacity</li>
      <li>Need to handle more read/write operations</li>
      <li>Improve query performance by reducing data per shard</li>
      <li>Achieve horizontal scalability</li>
      <li>Isolate failures to individual shards</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Sharding Strategies</h2>

    <div className="grid grid-cols-1 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">1. Range-Based Sharding</h4>
        <p className="mt-2">Data is partitioned based on ranges of a shard key (e.g., A-H, I-P, Q-Z).</p>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Pros:</strong> Simple to implement, efficient range queries</p>
          <p className="text-red-700"><strong>Cons:</strong> Can lead to uneven distribution (hotspots)</p>
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">2. Hash-Based Sharding</h4>
        <p className="mt-2">A hash function determines shard placement: shard = hash(key) % num_shards</p>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Pros:</strong> Even data distribution, prevents hotspots</p>
          <p className="text-red-700"><strong>Cons:</strong> Range queries become expensive, resharding is complex</p>
        </div>
      </div>

      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">3. Directory-Based Sharding</h4>
        <p className="mt-2">A lookup table maps each key to its shard location.</p>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Pros:</strong> Flexible, easy to rebalance</p>
          <p className="text-red-700"><strong>Cons:</strong> Lookup table becomes single point of failure</p>
        </div>
      </div>

      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
        <h4 className="font-bold text-orange-800">4. Geographic Sharding</h4>
        <p className="mt-2">Data is partitioned based on geographic location (e.g., US, Europe, Asia).</p>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Pros:</strong> Reduced latency, data locality compliance</p>
          <p className="text-red-700"><strong>Cons:</strong> Uneven load if traffic varies by region</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Choosing a Shard Key</h2>
    <p className="leading-relaxed">
      The shard key is critical for effective sharding. A good shard key should:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>High Cardinality:</strong> Many unique values for even distribution</li>
      <li><strong>Even Distribution:</strong> Avoid hotspots and data skew</li>
      <li><strong>Query Patterns:</strong> Align with common query patterns</li>
      <li><strong>Immutability:</strong> Should not change frequently</li>
    </ul>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Common Shard Key Examples:</p>
      <ul className="mt-2 space-y-1 text-sm">
        <li>User ID - Good for user-specific data</li>
        <li>Customer ID - Good for multi-tenant systems</li>
        <li>Geographic Region - Good for location-based services</li>
        <li>Timestamp - Problematic (leads to hotspots on recent data)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Challenges of Sharding</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cross-Shard Queries</td>
            <td className="p-3 border">Queries spanning multiple shards are complex and slow</td>
            <td className="p-3 border">Design schema to minimize cross-shard queries</td>
          </tr>
          <tr>
            <td className="p-3 border">Joins</td>
            <td className="p-3 border">JOINs across shards are expensive</td>
            <td className="p-3 border">Denormalize data or use application-level joins</td>
          </tr>
          <tr>
            <td className="p-3 border">Resharding</td>
            <td className="p-3 border">Adding/removing shards requires data migration</td>
            <td className="p-3 border">Use consistent hashing or plan capacity</td>
          </tr>
          <tr>
            <td className="p-3 border">Transactions</td>
            <td className="p-3 border">ACID transactions across shards are difficult</td>
            <td className="p-3 border">Use eventual consistency or two-phase commit</td>
          </tr>
          <tr>
            <td className="p-3 border">Hotspots</td>
            <td className="p-3 border">Uneven data distribution overloads some shards</td>
            <td className="p-3 border">Choose better shard key, use hash-based sharding</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Sharding</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Horizontal Scalability:</strong> Add more shards as data grows</li>
      <li><strong>Improved Performance:</strong> Queries run on smaller datasets</li>
      <li><strong>Higher Throughput:</strong> Parallel processing across shards</li>
      <li><strong>Fault Isolation:</strong> Shard failure affects only subset of data</li>
      <li><strong>Geographic Distribution:</strong> Place data closer to users</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Sharding</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complexity:</strong> Significantly increases system complexity</li>
      <li><strong>Cross-Shard Operations:</strong> Complex and expensive</li>
      <li><strong>Data Rebalancing:</strong> Difficult when shards become uneven</li>
      <li><strong>No Native Support:</strong> Many databases require manual implementation</li>
      <li><strong>Backup Complexity:</strong> Coordinating backups across shards</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Databases with Built-in Sharding</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">MongoDB</h4>
        <p className="mt-2 text-sm">Native sharding with automatic balancing and configurable shard keys.</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Cassandra</h4>
        <p className="mt-2 text-sm">Built-in partitioning with consistent hashing across nodes.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">CockroachDB</h4>
        <p className="mt-2 text-sm">Automatic sharding with distributed SQL and strong consistency.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Instagram:</strong> Shards data by user ID across thousands of PostgreSQL instances</li>
        <li><strong>Pinterest:</strong> Uses MySQL sharding based on object IDs</li>
        <li><strong>Slack:</strong> Shards workspaces to separate database instances</li>
        <li><strong>Discord:</strong> Shards messages by channel ID for scalability</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Start with a single database and shard only when necessary</li>
      <li>Choose shard key carefully based on access patterns</li>
      <li>Plan for resharding from the beginning</li>
      <li>Use consistent hashing to minimize data movement</li>
      <li>Monitor shard sizes and query patterns</li>
      <li>Consider managed sharding solutions for simplicity</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Sharding should be considered only when other scaling options
        (vertical scaling, read replicas, caching) are insufficient. It adds significant
        complexity to your system.
      </p>
    </div>
  </div>
);

export default DatabaseSharding;
