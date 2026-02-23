import React from "react";

const ACIDProperties: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ACID Properties in Distributed Transactions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ACID properties are the four key characteristics that guarantee reliable processing
      of database transactions. In distributed systems, maintaining these properties becomes
      significantly more challenging due to network partitions, node failures, and the
      absence of a global clock. Understanding how to achieve ACID semantics across
      distributed resources is fundamental to building reliable distributed systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Four ACID Properties</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ACID Acronym:

+---------------------------------------------------+
|  A - Atomicity                                    |
|      "All or Nothing"                             |
|      Either all operations succeed or none do     |
+---------------------------------------------------+
|  C - Consistency                                  |
|      "Valid State to Valid State"                 |
|      Database constraints are maintained          |
+---------------------------------------------------+
|  I - Isolation                                    |
|      "Transactions Don't Interfere"               |
|      Concurrent transactions appear sequential    |
+---------------------------------------------------+
|  D - Durability                                   |
|      "Committed = Permanent"                      |
|      Committed data survives failures             |
+---------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Atomicity in Distributed Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Atomicity: All-or-Nothing Execution

Local Transaction:
+-------------------------+
| BEGIN                   |
| Debit $100 from Account |
| Credit $100 to Account  |
| COMMIT                  |
+-------------------------+
Single database handles atomicity

Distributed Transaction Challenge:
+-------------+     +-------------+
|   Node A    |     |   Node B    |
|   Bank X    |     |   Bank Y    |
+-------------+     +-------------+
| Debit $100  |     | Credit $100 |
| SUCCESS     |     | FAILURE?    |
+-------------+     +-------------+
      |                   |
      v                   v
Without coordination: Inconsistent state!

Solution: Two-Phase Commit (2PC)
Phase 1: PREPARE
  Coordinator --> Node A: "Can you commit?"
  Coordinator --> Node B: "Can you commit?"
  Node A --> Coordinator: "Yes, prepared"
  Node B --> Coordinator: "Yes, prepared"

Phase 2: COMMIT
  Coordinator --> All: "COMMIT"
  All nodes commit atomically

If any node says "No":
  Coordinator --> All: "ABORT"
  All nodes rollback`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ACID Properties Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Local DB</th>
            <th className="p-3 border">Distributed Challenge</th>
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Atomicity</td>
            <td className="p-3 border">Transaction log, undo/redo</td>
            <td className="p-3 border">Partial failures across nodes</td>
            <td className="p-3 border">2PC, 3PC, Saga pattern</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Consistency</td>
            <td className="p-3 border">Constraints, triggers</td>
            <td className="p-3 border">Distributed constraints</td>
            <td className="p-3 border">Distributed validation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Isolation</td>
            <td className="p-3 border">Locks, MVCC</td>
            <td className="p-3 border">Global serializability</td>
            <td className="p-3 border">Distributed locking, timestamps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Durability</td>
            <td className="p-3 border">Write-ahead logging</td>
            <td className="p-3 border">Node crashes, data loss</td>
            <td className="p-3 border">Replication, consensus</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Consistency in Distributed Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Consistency: Valid State Transitions

Database constraints must hold before and after transaction:
- Primary key uniqueness
- Foreign key references
- Check constraints
- Business rules

Example: Inventory System
+--------------------------------+
| Constraint: quantity >= 0      |
+--------------------------------+

Before: Item A quantity = 5
Transaction: Sell 3 units

After:  Item A quantity = 2  (Valid: 2 >= 0)

Invalid Transaction: Sell 10 units
After:  Item A quantity = -5 (INVALID: -5 < 0)
System MUST reject this transaction

Distributed Consistency Challenge:
+----------+        +----------+
| Node A   |        | Node B   |
| Stock: 5 |        | Stock: 5 |
+----------+        +----------+
     |                   |
     v                   v
  Sell 3              Sell 4
     |                   |
     v                   v
  Stock: 2            Stock: 1

Combined: Sold 7 items when only 5 existed!

Solution: Distributed Locking or Global Coordination`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Isolation Levels</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Dirty Read</th>
            <th className="p-3 border">Non-Repeatable</th>
            <th className="p-3 border">Phantom</th>
            <th className="p-3 border">Performance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Read Uncommitted</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-green-600">Fastest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Read Committed</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border">Fast</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Repeatable Read</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Serializable</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-red-600">Slowest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Isolation Anomalies Explained</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Isolation Anomalies in Distributed Systems:

1. DIRTY READ
   T1: Write(X=100) ... Abort
   T2: Read(X=100)  <-- Reads uncommitted data!

2. NON-REPEATABLE READ
   T1: Read(X=50) ... Read(X=100)  <-- Different values!
   T2: ---------- Write(X=100) Commit

3. PHANTOM READ
   T1: SELECT * WHERE price<100 --> 5 rows
   T2: INSERT (price=50) Commit
   T1: SELECT * WHERE price<100 --> 6 rows  <-- Phantom!

4. WRITE SKEW (Distributed specific)
   Constraint: On-call doctors >= 1

   Doctor A reads: [A: on-call, B: on-call]
   Doctor B reads: [A: on-call, B: on-call]

   Doctor A: "B is on-call, I can go off"
   Doctor B: "A is on-call, I can go off"

   Result: No doctors on-call! (Constraint violated)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Durability in Distributed Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Durability: Committed Data Persists

Local Durability:
+------------------+
| Write-Ahead Log  |
+------------------+
        |
        v
+------------------+
| Disk Storage     |
+------------------+
- Log written before commit response
- Crash recovery replays log

Distributed Durability Challenges:
+--------+   +--------+   +--------+
| Node A |   | Node B |   | Node C |
| Commit |   | Commit |   | CRASH! |
+--------+   +--------+   +--------+
     |           |            X
     v           v            X
  Durable     Durable     Lost?

Solutions:

1. SYNCHRONOUS REPLICATION
   Write --> Primary --> Replica1 --> Replica2
   Commit only after all replicas confirm
   + Strong durability
   - High latency

2. QUORUM WRITES
   Write to W nodes out of N total
   Read from R nodes
   Where W + R > N

   Example: N=3, W=2, R=2
   +----+  +----+  +----+
   | N1 |  | N2 |  | N3 |
   |ACK |  |ACK |  | -- |
   +----+  +----+  +----+
   2 ACKs = Write successful

3. CONSENSUS PROTOCOLS (Raft, Paxos)
   - Majority agreement before commit
   - Handles leader failures
   - Provides strong durability guarantees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ACID vs BASE</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ACID</th>
            <th className="p-3 border">BASE</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Full Form</td>
            <td className="p-3 border">Atomicity, Consistency, Isolation, Durability</td>
            <td className="p-3 border">Basically Available, Soft state, Eventually consistent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency Model</td>
            <td className="p-3 border">Strong consistency</td>
            <td className="p-3 border">Eventual consistency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border">May sacrifice for consistency</td>
            <td className="p-3 border">Prioritizes availability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Banking, inventory</td>
            <td className="p-3 border">Social media, caching</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Systems</td>
            <td className="p-3 border">PostgreSQL, MySQL</td>
            <td className="p-3 border">Cassandra, DynamoDB</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing ACID in Distributed Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Techniques for Distributed ACID:

ATOMICITY:
+----------------------------------+
| Two-Phase Commit (2PC)           |
| Three-Phase Commit (3PC)         |
| Saga Pattern with Compensation   |
+----------------------------------+

CONSISTENCY:
+----------------------------------+
| Distributed Validators           |
| Pre-commit Constraint Checks     |
| Serializable Isolation           |
+----------------------------------+

ISOLATION:
+----------------------------------+
| Distributed Locking (2PL)        |
| Timestamp Ordering               |
| Optimistic Concurrency Control   |
| Snapshot Isolation               |
+----------------------------------+

DURABILITY:
+----------------------------------+
| Synchronous Replication          |
| Quorum Writes                    |
| Write-Ahead Logging              |
| Consensus Protocols              |
+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Atomicity:</strong> All operations succeed or all fail - achieved via 2PC/3PC in distributed systems</li>
        <li><strong>Consistency:</strong> Database moves from one valid state to another</li>
        <li><strong>Isolation:</strong> Concurrent transactions appear to run serially - multiple levels available</li>
        <li><strong>Durability:</strong> Committed data survives failures - requires replication in distributed systems</li>
        <li>Distributed ACID is harder due to network partitions and partial failures</li>
        <li>BASE provides an alternative with eventual consistency for high availability</li>
        <li>Choose consistency model based on application requirements</li>
        <li>Higher isolation levels provide more correctness but lower performance</li>
      </ul>
    </div>
  </div>
);

export default ACIDProperties;
