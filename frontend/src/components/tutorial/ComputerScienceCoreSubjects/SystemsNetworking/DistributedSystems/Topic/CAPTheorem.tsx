import React from "react";

const CAPTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CAP Theorem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The CAP Theorem, also known as Brewer's Theorem, states that in a distributed data store,
      it is impossible to simultaneously provide all three guarantees: Consistency, Availability,
      and Partition Tolerance. You can only achieve two out of three at any given time.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Three Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CAP Theorem Triangle:

                   C (Consistency)
                       /\\
                      /  \\
                     /    \\
                    /      \\
                   /  Pick  \\
                  /   TWO    \\
                 /            \\
                /______________\\
    A (Availability)          P (Partition Tolerance)

You can have:
- CA: Consistency + Availability (but no partition tolerance)
- CP: Consistency + Partition Tolerance (but no availability)
- AP: Availability + Partition Tolerance (but no consistency)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding Each Property</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Consistency (C)</td>
            <td className="p-3 border">All nodes see the same data at the same time</td>
            <td className="p-3 border">Every read returns the most recent write</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability (A)</td>
            <td className="p-3 border">Every request receives a response</td>
            <td className="p-3 border">System is always operational (no timeouts)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partition Tolerance (P)</td>
            <td className="p-3 border">System continues despite network partitions</td>
            <td className="p-3 border">System works even when nodes cannot communicate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Partition Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Partition Scenario:

Normal Operation:
+--------+     +--------+     +--------+
| Node A | <-> | Node B | <-> | Node C |
+--------+     +--------+     +--------+

Network Partition:
+--------+     +--------+  X  +--------+
| Node A | <-> | Node B |  X  | Node C |
+--------+     +--------+  X  +--------+
    |              |              |
    +------+-------+       +------+
           |               |
    Partition 1      Partition 2

During partition, if Client 1 writes to Node A
and Client 2 reads from Node C:
- CP: Node C refuses to respond (unavailable)
- AP: Node C returns stale data (inconsistent)
- CA: Not possible in distributed systems (partitions happen)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CAP Trade-offs</h2>

    <h3 className="text-2xl font-semibold mt-6">CP Systems (Consistency + Partition Tolerance)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CP Systems prioritize consistency over availability.

During a partition:
- System may become unavailable for some operations
- Ensures all nodes have consistent data before responding
- Blocks or returns errors rather than returning stale data

Examples:
- MongoDB (with majority write concern)
- Redis Cluster
- HBase
- Zookeeper

Use Case: Banking systems, inventory management
where data accuracy is critical`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">AP Systems (Availability + Partition Tolerance)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AP Systems prioritize availability over consistency.

During a partition:
- System remains available
- Different nodes may have different data
- Employs eventual consistency

Examples:
- Cassandra
- CouchDB
- DynamoDB
- DNS

Use Case: Social media, shopping carts
where availability is more important than immediate consistency`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">CA Systems (Consistency + Availability)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CA Systems sacrifice partition tolerance.

Reality:
- Network partitions WILL happen in distributed systems
- Pure CA systems don't exist in distributed environments
- Single-node databases are effectively CA

Examples (Single Node):
- Traditional RDBMS (MySQL, PostgreSQL)
- When running on a single server

Note: In distributed environments, P is mandatory
since network failures are inevitable.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Database CAP Classification</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">CAP Type</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">CP</td>
            <td className="p-3 border">MongoDB, HBase, Redis Cluster</td>
            <td className="p-3 border">Strong consistency, may reject writes during partition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">AP</td>
            <td className="p-3 border">Cassandra, CouchDB, DynamoDB</td>
            <td className="p-3 border">Always available, eventual consistency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600">CA</td>
            <td className="p-3 border">MySQL, PostgreSQL (single node)</td>
            <td className="p-3 border">Not truly distributed, fails during partition</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">PACELC: Extension of CAP</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PACELC Theorem:

"If there is a Partition (P), choose between
 Availability (A) and Consistency (C);
 Else (E), choose between
 Latency (L) and Consistency (C)"

Examples:
- PA/EL: DynamoDB, Cassandra
  (Availability during partition, Low latency normally)

- PC/EC: MongoDB, HBase
  (Consistency during partition, Consistency normally)

- PA/EC: Yahoo PNUTS
  (Availability during partition, Consistency normally)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CAP Theorem: Only 2 of 3 properties can be guaranteed simultaneously</li>
        <li>Network partitions are inevitable in distributed systems</li>
        <li>In practice, systems choose between CP (consistency) or AP (availability)</li>
        <li>CP systems may become unavailable during partitions</li>
        <li>AP systems may return stale data during partitions</li>
        <li>Choose based on your application requirements: accuracy vs availability</li>
      </ul>
    </div>
  </div>
);

export default CAPTheorem;
