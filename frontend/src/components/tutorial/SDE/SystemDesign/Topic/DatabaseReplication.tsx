import React from 'react';

const DatabaseReplication: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Database Replication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database replication is the process of copying and maintaining database objects in multiple
      database instances. It ensures data redundancy, improves availability, and can enhance read
      performance by distributing queries across multiple servers.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Use Database Replication?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> If one server fails, others can take over</li>
      <li><strong>Fault Tolerance:</strong> Data is safe even if hardware fails</li>
      <li><strong>Read Scalability:</strong> Distribute read queries across replicas</li>
      <li><strong>Geographic Distribution:</strong> Place data closer to users</li>
      <li><strong>Backup:</strong> Replicas serve as live backups</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Replication Architectures</h2>

    <h3 className="text-xl font-semibold mt-4">1. Master-Slave (Primary-Replica) Replication</h3>
    <p className="leading-relaxed">
      One master handles all writes, and changes are replicated to one or more read-only slaves.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`       Writes                    Reads
         │                         │
         ▼                         ▼
   ┌───────────┐           ┌───────────┐
   │  Master   │──────────►│  Slave 1  │
   │  (Write)  │           │  (Read)   │
   └───────────┘           └───────────┘
         │
         │                 ┌───────────┐
         └────────────────►│  Slave 2  │
                           │  (Read)   │
                           └───────────┘`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Master-Master (Multi-Primary) Replication</h3>
    <p className="leading-relaxed">
      Multiple masters can accept writes, and changes are replicated bidirectionally.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <pre className="text-sm overflow-x-auto">
{`   ┌───────────┐     Sync     ┌───────────┐
   │  Master 1 │◄────────────►│  Master 2 │
   │  (R/W)    │              │  (R/W)    │
   └───────────┘              └───────────┘
         ▲                          ▲
         │                          │
      Writes                     Writes`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Peer-to-Peer Replication</h3>
    <p className="leading-relaxed">
      All nodes are equal and can accept both reads and writes. Changes propagate to all peers.
    </p>

    <h2 className="text-2xl font-bold mt-6">Synchronous vs Asynchronous Replication</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Synchronous Replication</h4>
        <p className="mt-2 text-sm">Write is confirmed only after all replicas acknowledge.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Strong consistency guaranteed</li>
          <li>Higher write latency</li>
          <li>No data loss on failure</li>
          <li>Lower availability (depends on all replicas)</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Asynchronous Replication</h4>
        <p className="mt-2 text-sm">Write is confirmed immediately, replicated in background.</p>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Eventual consistency</li>
          <li>Lower write latency</li>
          <li>Potential data loss on failure</li>
          <li>Higher availability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Replication Topologies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Topology</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Single Leader</td>
            <td className="p-3 border">One primary, multiple replicas</td>
            <td className="p-3 border">Most common, read-heavy workloads</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-Leader</td>
            <td className="p-3 border">Multiple primaries in different regions</td>
            <td className="p-3 border">Geo-distributed applications</td>
          </tr>
          <tr>
            <td className="p-3 border">Leaderless</td>
            <td className="p-3 border">Any node can accept writes (quorum-based)</td>
            <td className="p-3 border">High availability requirements</td>
          </tr>
          <tr>
            <td className="p-3 border">Cascading</td>
            <td className="p-3 border">Replicas replicate to other replicas</td>
            <td className="p-3 border">Reducing load on primary</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Replication Lag</h2>
    <p className="leading-relaxed">
      In asynchronous replication, there is a delay between when data is written to the primary
      and when it appears on replicas. This is called replication lag.
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Problems caused by replication lag:</p>
      <ul className="mt-2 space-y-1 list-disc list-inside">
        <li><strong>Read-after-write inconsistency:</strong> User writes data but reads stale data from replica</li>
        <li><strong>Monotonic reads violation:</strong> User sees newer data, then older data</li>
        <li><strong>Causality issues:</strong> Effects appear before causes</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Conflict Resolution in Multi-Master</h2>
    <p className="leading-relaxed">
      When multiple masters accept concurrent writes, conflicts can occur:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Last Write Wins (LWW):</strong> Timestamp-based, most recent write wins</li>
      <li><strong>Conflict-free Replicated Data Types (CRDTs):</strong> Data structures that merge automatically</li>
      <li><strong>Custom Resolution:</strong> Application-specific logic to merge conflicts</li>
      <li><strong>Prompt User:</strong> Let the user resolve the conflict</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages of Database Replication</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>High Availability:</strong> System remains operational if a node fails</li>
      <li><strong>Read Scalability:</strong> Distribute read load across replicas</li>
      <li><strong>Disaster Recovery:</strong> Replicas in different locations protect against disasters</li>
      <li><strong>Low Latency:</strong> Serve reads from geographically closer replicas</li>
      <li><strong>Live Backups:</strong> Replicas serve as constantly updated backups</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Database Replication</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Consistency Challenges:</strong> Keeping replicas in sync is complex</li>
      <li><strong>Write Performance:</strong> Synchronous replication adds latency</li>
      <li><strong>Complexity:</strong> More infrastructure to manage</li>
      <li><strong>Cost:</strong> Additional hardware and network resources</li>
      <li><strong>Conflict Resolution:</strong> Multi-master requires conflict handling</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Databases Supporting Replication</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">MySQL</h4>
        <p className="mt-2 text-sm">Master-slave replication, Group Replication for multi-master.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">PostgreSQL</h4>
        <p className="mt-2 text-sm">Streaming replication, logical replication, synchronous options.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">MongoDB</h4>
        <p className="mt-2 text-sm">Replica sets with automatic failover and election.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Facebook:</strong> Uses MySQL replication across data centers for availability</li>
        <li><strong>Netflix:</strong> Cassandra's peer-to-peer replication for global distribution</li>
        <li><strong>GitHub:</strong> MySQL primary with multiple replicas for read scaling</li>
        <li><strong>Shopify:</strong> Vitess for MySQL sharding and replication at scale</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Monitor replication lag continuously</li>
      <li>Use read replicas for read-heavy workloads</li>
      <li>Implement automatic failover for high availability</li>
      <li>Test failover procedures regularly</li>
      <li>Consider semi-synchronous replication for balance</li>
      <li>Use connection pooling to manage replica connections</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Replication improves read scalability but does not improve write
        scalability. For write-heavy workloads, consider sharding in addition to replication.
      </p>
    </div>
  </div>
);

export default DatabaseReplication;
