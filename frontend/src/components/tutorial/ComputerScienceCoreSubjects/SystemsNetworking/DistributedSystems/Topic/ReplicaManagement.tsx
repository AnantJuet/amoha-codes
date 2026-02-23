import React from "react";

const ReplicaManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Replica Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Replica management encompasses the strategies and techniques for creating, placing,
      and maintaining replicas in a distributed system. Effective replica management is
      crucial for achieving the benefits of replication while minimizing its costs. This
      includes decisions about where to place replicas, when to create or remove them,
      and how to propagate updates.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Replicas</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`REPLICA CLASSIFICATION:
=======================

1. PERMANENT REPLICAS
=====================
- Created at system design time
- Fixed number and locations
- Always present in the system

Example:
+--------+     +--------+     +--------+
| DC-US  |     | DC-EU  |     | DC-Asia|
|Replica |<--->|Replica |<--->|Replica |
+--------+     +--------+     +--------+
     (Always present, geographically distributed)


2. SERVER-INITIATED REPLICAS (Dynamic)
======================================
- Created by servers based on demand
- Push-based approach
- System decides placement

Example:
           High demand from Region X
                    |
                    v
Original: [Replica A] -----> Create [Replica B near X]
                    |
           Demand decreases
                    |
                    v
          [Replica B] is removed


3. CLIENT-INITIATED REPLICAS (Caches)
=====================================
- Created by clients (caches)
- Pull-based approach
- Client decides what to cache

Example:
+--------+                  +--------+
| Server | <--request---    | Client |
|  (DC)  | ---response-->   | Cache  |
+--------+                  +--------+
                               |
                        [Local copy for
                         future requests]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replica Placement Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Criteria</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Geographic</td>
            <td className="p-3 border">Physical distance to users</td>
            <td className="p-3 border">Global applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Topology</td>
            <td className="p-3 border">Network hops, latency</td>
            <td className="p-3 border">Low-latency requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Load-Based</td>
            <td className="p-3 border">Request distribution</td>
            <td className="p-3 border">Hot-spot mitigation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost-Based</td>
            <td className="p-3 border">Infrastructure costs</td>
            <td className="p-3 border">Budget optimization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Domain</td>
            <td className="p-3 border">Failure independence</td>
            <td className="p-3 border">High availability</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Content Distribution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UPDATE PROPAGATION OPTIONS:
===========================

1. PROPAGATE DATA (State Transfer)
==================================
Send actual data values to replicas.

Primary: x = 5
    |
    |---> Replica 1: "x = 5"
    |---> Replica 2: "x = 5"
    |---> Replica 3: "x = 5"

Pros: Simple, immediate consistency
Cons: High bandwidth for large data


2. PROPAGATE OPERATIONS (Operation Transfer)
============================================
Send operations to be executed.

Primary: increment(x)
    |
    |---> Replica 1: execute increment(x)
    |---> Replica 2: execute increment(x)
    |---> Replica 3: execute increment(x)

Pros: Lower bandwidth
Cons: Operations must be deterministic


3. PROPAGATE NOTIFICATIONS (Invalidation)
=========================================
Notify replicas that data changed.

Primary: x changed!
    |
    |---> Replica 1: invalidate(x)
    |---> Replica 2: invalidate(x)
    |---> Replica 3: invalidate(x)

Pros: Very low bandwidth
Cons: Next read must fetch from source


CHOOSING A METHOD:
==================
+-------------------+------------+------------+------------+
|    Scenario       |   Data     | Operation  | Invalidate |
+-------------------+------------+------------+------------+
| Small updates     |    Yes     |    Yes     |    No      |
| Large updates     |    No      |    Yes     |    Yes     |
| Read-heavy        |    Yes     |    Yes     |    No      |
| Write-heavy       |    No      |    No      |    Yes     |
| Complex ops       |    Yes     |    No      |    Yes     |
+-------------------+------------+------------+------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pull vs Push Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PUSH-BASED (Server-Initiated):
==============================

Server pushes updates without being asked.

Server                    Replicas
   |                      R1  R2  R3
   |--- Update x=5 ------->|   |   |
   |--- Update x=5 ----------->|   |
   |--- Update x=5 --------------->|
   |
Time: Update immediately sent to all

Characteristics:
- Low latency for reads (always up-to-date)
- High bandwidth (updates even if not needed)
- Good for: Read-heavy, consistency-critical


PULL-BASED (Client-Initiated):
==============================

Replica requests updates when needed.

Server                    Replica
   |                         |
   |                         | (client reads)
   |<---- Request x ---------|
   |---- x=5 --------------->|
   |                         |
Time: Update only when requested

Characteristics:
- Lower bandwidth (only fetch when needed)
- Higher read latency (must check for updates)
- Good for: Write-heavy, cache-like systems


LEASE-BASED HYBRID:
===================

Server grants time-limited consistency guarantee.

Server                    Replica
   |                         |
   |<---- Request lease -----|
   |---- Lease (30 sec) ---->|
   |                         |
   |  (Server promises to    |
   |   notify of changes     |
   |   during lease period)  |
   |                         |
   |---- Invalidate x! ----->| (if x changes)
   |                         |
   |<---- Renew lease -------|
   |---- Lease (30 sec) ---->|

Benefits:
- Guarantees freshness during lease
- Reduces polling overhead
- Server can reclaim if no renewal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Epidemic/Gossip Protocols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`GOSSIP-BASED UPDATE PROPAGATION:
================================

Updates spread like rumors or diseases.

Initial: Only Node A has update x=5

Round 1:        Round 2:        Round 3:
A(x=5)          A(x=5)          A(x=5)
|               |\              |\
v               v \             v \
B               B  C            B  C
                |               |\ |\
                v               v \v \
                D               D  E  F

Exponential spread: O(log N) rounds


GOSSIP VARIANTS:
================

1. ANTI-ENTROPY (Background)
   - Periodic pairwise sync
   - Each node randomly picks partner
   - Exchange all differences
   - Eventually consistent

2. RUMOR MONGERING (Foreground)
   - Push updates actively
   - Stop when update seems "old news"
   - Faster but may not reach all

3. PUSH-PULL GOSSIP
   - Combine both directions
   - A sends to B, B sends to A
   - Faster convergence


GOSSIP PROTOCOL PSEUDOCODE:
===========================

Every T seconds:
  partner = random_node()

  // Push my updates
  send(partner, my_updates)

  // Pull their updates
  their_updates = receive(partner)
  merge(their_updates)

  // Optionally: Push-Pull
  send(partner, new_updates_for_them)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quorum-Based Management</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`QUORUM SYSTEMS:
===============

N = Total number of replicas
R = Read quorum (replicas to read from)
W = Write quorum (replicas to write to)

RULES:
======
W + R > N    : Ensures reads see latest write
W > N/2      : Ensures no conflicting writes

Example: N=5
-----------
W=3, R=3: Strong consistency (3+3=6 > 5, 3 > 2.5)
W=4, R=2: Write-heavy optimization
W=2, R=4: Read-heavy optimization
W=1, R=5: Fastest writes, expensive reads


QUORUM INTERSECTION:
====================

With N=5, W=3, R=3:

Write Set:     Read Set:
{1, 2, 3}      {3, 4, 5}
              |
         -----+-----
         |    3    |  <-- Overlap guarantees
         -----------      seeing latest write


GRID QUORUM EXAMPLE:
====================

Arrange N=9 replicas in 3x3 grid:

     1   2   3
     4   5   6
     7   8   9

Write Quorum: Full column (e.g., {1,4,7})
Read Quorum: Full row (e.g., {1,2,3})

Any row intersects any column at one replica!
W = 3, R = 3, but always intersect`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replica Lifecycle Management</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Actions</th>
            <th className="p-3 border">Considerations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Creation</td>
            <td className="p-3 border">Initial sync, join cluster</td>
            <td className="p-3 border">Bootstrap data, avoid serving until ready</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Active</td>
            <td className="p-3 border">Serve reads/writes, sync updates</td>
            <td className="p-3 border">Monitor health, load balance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maintenance</td>
            <td className="p-3 border">Upgrades, compaction</td>
            <td className="p-3 border">Drain traffic first, rolling updates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure</td>
            <td className="p-3 border">Detect, route around, repair</td>
            <td className="p-3 border">Failover, rebuild from peers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Removal</td>
            <td className="p-3 border">Migrate data, leave cluster</td>
            <td className="p-3 border">Ensure quorum maintained</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic Replica Adjustment</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WHEN TO ADD REPLICAS:
=====================
- High read load on existing replicas
- New geographic region with users
- Approaching capacity limits
- Need for better fault tolerance

WHEN TO REMOVE REPLICAS:
========================
- Low utilization (cost savings)
- Region no longer served
- Consolidating infrastructure
- Replica persistently unhealthy


AUTOMATIC SCALING TRIGGERS:
===========================

if (avg_latency > threshold):
    add_replica(nearest_low_latency_region)

if (utilization < min_threshold for duration):
    if (replica_count > minimum):
        remove_replica(least_utilized)

if (failure_rate > threshold):
    investigate_and_possibly_replace()


CONSIDERATIONS:
===============
1. Minimum replicas for fault tolerance
2. Data transfer costs for new replicas
3. Sync time before serving traffic
4. Impact on consistency guarantees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Three replica types: permanent, server-initiated, client-initiated (caches)</li>
        <li>Placement considers geography, network topology, load, and fault domains</li>
        <li>Content can be propagated as data, operations, or invalidations</li>
        <li>Push is good for read-heavy; pull is good for write-heavy workloads</li>
        <li>Gossip protocols provide eventually consistent, scalable propagation</li>
        <li>Quorum systems balance consistency vs performance (W + R &gt; N)</li>
        <li>Replica lifecycle: creation, active, maintenance, failure, removal</li>
        <li>Dynamic adjustment based on load, latency, and availability needs</li>
      </ul>
    </div>
  </div>
);

export default ReplicaManagement;
