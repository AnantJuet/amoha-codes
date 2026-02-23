import React from "react";

const ReplicatedWriteProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Replicated-Write Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Replicated-write protocols allow multiple replicas to accept write operations
      simultaneously, unlike primary-based protocols that funnel all writes through
      a single node. This approach offers better availability and write scalability
      but introduces the challenge of handling concurrent, potentially conflicting updates.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Replicated-Write Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`REPLICATED-WRITE PROTOCOL VARIANTS:
===================================

1. ACTIVE REPLICATION
=====================
All replicas process all operations.

Client ---+---> Replica1 (process)
          |---> Replica2 (process)
          +---> Replica3 (process)


2. QUORUM-BASED PROTOCOLS
=========================
Write to W replicas, read from R replicas.

Client ---> [R1, R2, R3] (W=2 replicas)
       <--- [R1, R4, R5] (R=2 replicas)


3. MULTI-LEADER REPLICATION
===========================
Multiple leaders accept writes independently.

Leader1 <---> Leader2 <---> Leader3
   |             |             |
   v             v             v
Replicas     Replicas     Replicas`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Active Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ACTIVE REPLICATION (STATE MACHINE REPLICATION):
===============================================

All replicas execute the same operations in the same order.

ARCHITECTURE:
=============

                Total Order Broadcast
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
   +---------+     +---------+     +---------+
   | Replica |     | Replica |     | Replica |
   |    1    |     |    2    |     |    3    |
   |  State  |     |  State  |     |  State  |
   |  = S    |     |  = S    |     |  = S    |
   +---------+     +---------+     +---------+

   All replicas have identical state!


HOW IT WORKS:
=============

Step 1: Client sends operation to all replicas
        (or to sequencer that broadcasts)

Client: op = "increment(x)"
        |
        v
   [Total Order Broadcast]
        |
        +---> R1: receives op at position 42
        +---> R2: receives op at position 42
        +---> R3: receives op at position 42

Step 2: Each replica executes in order
        R1: execute op #42 -> x = x + 1
        R2: execute op #42 -> x = x + 1
        R3: execute op #42 -> x = x + 1

Step 3: All replicas have same result


REQUIREMENTS:
=============
1. DETERMINISTIC OPERATIONS
   - Same input -> Same output
   - No random(), time(), etc.

2. TOTAL ORDER DELIVERY
   - All replicas see same order
   - Atomic broadcast protocol needed

3. IDENTICAL INITIAL STATE
   - All replicas start the same


FAULT TOLERANCE:
================
With N replicas:
- Crash faults: Can tolerate N-1 failures
- Byzantine faults: Can tolerate (N-1)/3 failures

Example: N=3 replicas
- 2 crash faults tolerated (1 survives)
- 0 Byzantine faults tolerated
  (Need N=4 for 1 Byzantine fault)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quorum-Based Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`QUORUM-BASED REPLICATION:
=========================

Core Idea: Read/write to subsets (quorums) of replicas.

PARAMETERS:
===========
N = Total number of replicas
W = Write quorum size
R = Read quorum size

QUORUM RULES:
=============
W + R > N    : Read sees latest write
W > N/2      : No conflicting writes accepted


EXAMPLE: N=5, W=3, R=3
======================

Write Quorum (any 3):
    [R1] [R2] [R3] [R4] [R5]
     |    |    |
     +----+----+
    Write x=5 to these 3


Read Quorum (any 3):
    [R1] [R2] [R3] [R4] [R5]
               |    |    |
               +----+----+
          Read from these 3


Overlap guaranteed:
    [R1] [R2] [R3] [R4] [R5]
     W    W    W
               R    R    R
               ^
               |
         At least one node
         has latest value!


GIFFORD'S QUORUM PROTOCOL:
==========================

Each data item has a version number.

WRITE:
1. Read from R nodes to get latest version V
2. Write to W nodes with version V+1
3. Return success when W nodes acknowledge

READ:
1. Read from R nodes
2. Return value with highest version
3. Optionally: repair stale replicas


VERSION EXAMPLE:
================

Write x=5:
  R1: x=5, v=3   <-- Written
  R2: x=5, v=3   <-- Written
  R3: x=5, v=3   <-- Written
  R4: x=old, v=2
  R5: x=old, v=2

Read (gets R3, R4, R5):
  R3: v=3  <-- Highest!
  R4: v=2
  R5: v=2

  Return: x=5 (from v=3)
  Optional: Update R4, R5 to v=3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quorum Configurations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Config (N=5)</th>
            <th className="p-3 border">W</th>
            <th className="p-3 border">R</th>
            <th className="p-3 border">Optimized For</th>
            <th className="p-3 border">Consistency</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">ROWA</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Read-heavy</td>
            <td className="p-3 border text-green-600">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ROWAA (inverse)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Write-heavy</td>
            <td className="p-3 border text-green-600">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Majority</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Balanced</td>
            <td className="p-3 border text-green-600">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eventual</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border text-red-600">Eventual</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Leader Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MULTI-LEADER (MULTI-MASTER) REPLICATION:
========================================

Multiple nodes can accept writes independently.

ARCHITECTURE:
=============

Data Center A              Data Center B
+------------+            +------------+
|  Leader A  |<---------->|  Leader B  |
+-----+------+    sync    +-----+------+
      |                         |
      v                         v
+----------+              +----------+
| Follower |              | Follower |
+----------+              +----------+

Clients write to nearest leader.


CONFLICT SCENARIOS:
===================

User edits document on two devices simultaneously:

Device 1 (Leader A):      Device 2 (Leader B):
title = "Hello"           title = "Hi"
     |                         |
     v                         v
+------------+            +------------+
|  Leader A  |<---------->|  Leader B  |
| title=     |    ???     | title=     |
| "Hello"    |            | "Hi"       |
+------------+            +------------+

CONFLICT: Which title wins?


CONFLICT RESOLUTION STRATEGIES:
===============================

1. LAST-WRITER-WINS (LWW)
   Use timestamps, latest wins.

   "Hello" @ t=100
   "Hi"    @ t=102

   Result: "Hi" (later timestamp)

   Problem: Silent data loss!


2. MERGE VALUES
   Combine conflicting values.

   shopping_cart: {A: [item1], B: [item2]}

   Merge: [item1, item2]


3. CONFLICT RESOLUTION CALLBACK
   Application logic decides.

   on_conflict(value_A, value_B):
       return user_prompt("Which version?")


4. CRDT (Conflict-free Replicated Data Types)
   Data structures that auto-merge.

   Counter: A=5, B=3 -> max(5,3) = 5? No!
   G-Counter: [A:5, B:3] -> Total = 8


5. OPERATIONAL TRANSFORMATION
   Transform operations to commute.

   Used in: Google Docs, collaborative editing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamo-Style Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`AMAZON DYNAMO APPROACH:
=======================

Combines quorums with leaderless design.

CONSISTENT HASHING:
===================

           0
           |
    +------+------+
   /               \
  /                 \
 Node A           Node D
  |                   |
  |    Hash Ring     |
  |                   |
 Node B           Node C
  \                 /
   \               /
    +------+------+
           |
          180


Key "user123" hashes to position 45
-> Stored on Nodes A, B, C (N=3)


SLOPPY QUORUMS:
===============

Normal quorum: Must use designated nodes

Sloppy quorum: Can use ANY available nodes

Scenario: Node A is down
  Normal: Write fails (can't reach quorum)
  Sloppy: Write to Node D instead (hinted handoff)

+------+  +------+  +------+  +------+
|Node A|  |Node B|  |Node C|  |Node D|
| DOWN |  | W=1  |  | W=1  |  | W=1  | <-- Hint for A
+------+  +------+  +------+  +------+

When Node A recovers:
Node D sends hinted data back to A


VECTOR CLOCKS FOR CAUSALITY:
============================

Each write carries a vector clock:

Write 1 by client X via Node A:
  [{A: 1}] value = "v1"

Write 2 by client Y via Node B (concurrent):
  [{B: 1}] value = "v2"

Read returns both versions (conflict):
  [{A: 1}] "v1"
  [{B: 1}] "v2"

Client resolves and writes:
  [{A: 1, B: 1, C: 1}] value = "v3 (merged)"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Replicated-Write Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Active Replication</th>
            <th className="p-3 border">Quorum-Based</th>
            <th className="p-3 border">Multi-Leader</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border text-green-600">Strong</td>
            <td className="p-3 border text-yellow-600">Tunable</td>
            <td className="p-3 border text-red-600">Eventual</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Write Scalability</td>
            <td className="p-3 border text-red-600">Limited</td>
            <td className="p-3 border text-yellow-600">Good</td>
            <td className="p-3 border text-green-600">Excellent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border text-green-600">High</td>
            <td className="p-3 border text-green-600">High</td>
            <td className="p-3 border text-green-600">Highest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conflict Handling</td>
            <td className="p-3 border">None (total order)</td>
            <td className="p-3 border">Version-based</td>
            <td className="p-3 border">Complex resolution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Critical systems</td>
            <td className="p-3 border">General purpose</td>
            <td className="p-3 border">Geo-distributed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMS USING REPLICATED-WRITE PROTOCOLS:
=========================================

QUORUM-BASED:
- Cassandra: Tunable consistency (ONE, QUORUM, ALL)
- Riak: Configurable N, R, W
- DynamoDB: Eventually consistent + strongly consistent options

MULTI-LEADER:
- CouchDB: Multi-master with conflict resolution
- MySQL Group Replication: Multi-primary mode
- Galera Cluster: Synchronous multi-master for MySQL/MariaDB

ACTIVE REPLICATION:
- ZooKeeper: Zab protocol (total order broadcast)
- etcd: Raft-based state machine replication
- Chubby: Paxos-based replication

CRDT-BASED:
- Redis Enterprise: Active-Active with CRDTs
- Riak: CRDT data types (counters, sets, maps)
- Automerge: CRDT library for collaborative editing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Replicated-write protocols allow multiple replicas to accept writes</li>
        <li>Active replication: all replicas process all ops in same order</li>
        <li>Quorum-based: write to W, read from R, where W+R greater than N</li>
        <li>Multi-leader: independent writes with conflict resolution</li>
        <li>Conflicts arise from concurrent writes to different replicas</li>
        <li>Resolution strategies: LWW, merge, callbacks, CRDTs</li>
        <li>Dynamo-style combines quorums with sloppy quorums and vector clocks</li>
        <li>Trade-off: better availability and scalability vs consistency complexity</li>
      </ul>
    </div>
  </div>
);

export default ReplicatedWriteProtocols;
