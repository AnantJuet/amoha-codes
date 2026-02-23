import React from "react";

const ReplicationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Replication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Replication is a fundamental technique in distributed systems where data is copied
      and maintained across multiple nodes or locations. It serves as the cornerstone for
      achieving high availability, fault tolerance, and improved performance in distributed
      computing environments.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Replication?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Replication Overview:

+------------------+          +------------------+
|   Primary/Master |  ------> |    Replica 1     |
|    (Original)    |  ------> |    (Copy 1)      |
+------------------+  ------> +------------------+
        |                              |
        |             +------------------+
        +-----------> |    Replica 2     |
        |             |    (Copy 2)      |
        |             +------------------+
        |                      |
        |             +------------------+
        +-----------> |    Replica N     |
                      |    (Copy N)      |
                      +------------------+

Key Concept: Same data exists in multiple places,
             synchronized to maintain consistency.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Core Concepts of Replication</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Replica</td>
            <td className="p-3 border">A copy of data stored on a different node</td>
            <td className="p-3 border">Redundancy and distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary/Master</td>
            <td className="p-3 border">The authoritative source of data</td>
            <td className="p-3 border">Coordination and consistency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secondary/Slave</td>
            <td className="p-3 border">Copies that follow the primary</td>
            <td className="p-3 border">Read scaling and failover</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication Factor</td>
            <td className="p-3 border">Number of copies maintained</td>
            <td className="p-3 border">Determines fault tolerance level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Synchronization</td>
            <td className="p-3 border">Process of keeping replicas consistent</td>
            <td className="p-3 border">Data correctness and coherence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. SYNCHRONOUS REPLICATION
===========================
Client         Primary         Replica
   |              |               |
   |--- Write --->|               |
   |              |--- Sync ----->|
   |              |<-- ACK -------|
   |<--- ACK -----|               |
   |              |               |

Characteristics:
- Write confirmed after all replicas updated
- Strong consistency guaranteed
- Higher latency, lower throughput
- Used when consistency is critical


2. ASYNCHRONOUS REPLICATION
============================
Client         Primary         Replica
   |              |               |
   |--- Write --->|               |
   |<--- ACK -----|               |
   |              |--- Sync ----->| (Later)
   |              |<-- ACK -------|
   |              |               |

Characteristics:
- Write confirmed after primary update only
- Eventual consistency
- Lower latency, higher throughput
- Risk of data loss if primary fails


3. SEMI-SYNCHRONOUS REPLICATION
================================
Client         Primary       Replica1    Replica2
   |              |             |            |
   |--- Write --->|             |            |
   |              |-- Sync ---->|            |
   |              |<-- ACK -----|            |
   |<--- ACK -----|             |            |
   |              |--- Sync --------------->| (Async)
   |              |<-- ACK -----------------|
   |              |             |            |

Characteristics:
- At least one replica confirms before ACK
- Balance between consistency and performance
- Used in MySQL semi-sync replication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Topologies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. SINGLE-LEADER (Primary-Backup)
==================================
        +----------+
        |  Leader  |
        +----+-----+
             |
    +--------+--------+
    |        |        |
+---v--+ +---v--+ +---v--+
|Follow| |Follow| |Follow|
+------+ +------+ +------+


2. MULTI-LEADER (Master-Master)
================================
+--------+     +--------+
| Leader |<--->| Leader |
+---+----+     +----+---+
    |               |
+---v--+       +---v--+
|Follow|       |Follow|
+------+       +------+


3. LEADERLESS (Peer-to-Peer)
=============================
+------+     +------+
| Node |<--->| Node |
+--+---+     +---+--+
   |    \   /    |
   |     \ /     |
   |      X      |
   |     / \     |
   |    /   \    |
+--v---+     +---v--+
| Node |<--->| Node |
+------+     +------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication vs Other Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Replication</th>
            <th className="p-3 border">Partitioning/Sharding</th>
            <th className="p-3 border">Caching</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Distribution</td>
            <td className="p-3 border">Same data on multiple nodes</td>
            <td className="p-3 border">Different data on different nodes</td>
            <td className="p-3 border">Subset of hot data in memory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Goal</td>
            <td className="p-3 border">Availability and fault tolerance</td>
            <td className="p-3 border">Horizontal scaling of storage</td>
            <td className="p-3 border">Performance optimization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency Challenge</td>
            <td className="p-3 border">Keeping copies in sync</td>
            <td className="p-3 border">Cross-partition operations</td>
            <td className="p-3 border">Cache invalidation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Impact</td>
            <td className="p-3 border">Other replicas can serve</td>
            <td className="p-3 border">Part of data unavailable</td>
            <td className="p-3 border">Increased latency (cache miss)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Fundamental Trade-offs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`REPLICATION TRADE-OFF TRIANGLE:

                   Consistency
                       /\\
                      /  \\
                     /    \\
                    /      \\
                   /        \\
                  /  CHOOSE  \\
                 /    TWO     \\
                /______________\\
     Performance         Availability


Key Trade-offs:
===============
1. Consistency vs Availability
   - Strong consistency may require blocking during failures
   - High availability may serve stale data

2. Consistency vs Performance
   - Synchronous replication adds latency
   - Asynchronous improves speed but risks inconsistency

3. Availability vs Storage Cost
   - More replicas = Higher availability + More storage
   - Fewer replicas = Lower cost but higher risk

Common Configurations:
======================
- 3 replicas: Standard for production systems
- 5 replicas: High availability requirements
- 2 replicas: Cost-sensitive with moderate availability needs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Replication Type</th>
            <th className="p-3 border">Default Replicas</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">MySQL</td>
            <td className="p-3 border">Async/Semi-sync, Single-Leader</td>
            <td className="p-3 border">Configurable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PostgreSQL</td>
            <td className="p-3 border">Streaming, Sync/Async</td>
            <td className="p-3 border">Configurable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MongoDB</td>
            <td className="p-3 border">Single-Leader (Replica Sets)</td>
            <td className="p-3 border">3 (recommended)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cassandra</td>
            <td className="p-3 border">Leaderless, Tunable</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">HDFS</td>
            <td className="p-3 border">Pipeline Replication</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kafka</td>
            <td className="p-3 border">Single-Leader per Partition</td>
            <td className="p-3 border">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Replication maintains multiple copies of data across different nodes</li>
        <li>Primary goals: fault tolerance, high availability, and read scalability</li>
        <li>Synchronous replication guarantees consistency but increases latency</li>
        <li>Asynchronous replication offers better performance but risks data loss</li>
        <li>Common topologies: single-leader, multi-leader, and leaderless</li>
        <li>Replication factor of 3 is standard for production systems</li>
        <li>Replication introduces consistency challenges that must be managed</li>
        <li>Different from partitioning: copies vs distributes data</li>
      </ul>
    </div>
  </div>
);

export default ReplicationIntro;
