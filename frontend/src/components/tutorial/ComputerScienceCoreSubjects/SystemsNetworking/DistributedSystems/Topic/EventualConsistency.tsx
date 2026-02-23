import React from "react";

const EventualConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Eventual Consistency
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Eventual consistency is the weakest consistency model commonly used in distributed
      systems. It guarantees that if no new updates are made to a data item, eventually
      all replicas will converge to the same value. This model prioritizes availability
      and partition tolerance over immediate consistency, making it popular in large-scale
      distributed systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition of Eventual Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EVENTUAL CONSISTENCY DEFINITION:
================================

"If no new updates are made to a given data item,
 eventually all accesses to that item will return
 the last updated value."

Key Properties:
===============
1. CONVERGENCE
   All replicas will eventually have the same value

2. NO ORDERING GUARANTEES
   No guarantee about the order operations are seen

3. TEMPORARY INCONSISTENCY
   Different replicas may have different values temporarily


TIME DIAGRAM:
=============

              Write x=5
                  |
                  v
Time: ----+-------+-------+-------+-------+------>
          |       |       |       |       |
Node A:   x=0     x=5     x=5     x=5     x=5
Node B:   x=0     x=0     x=5     x=5     x=5
Node C:   x=0     x=0     x=0     x=5     x=5
          |               |               |
          |<-- Inconsistent Window -->|
          |                               |
          |                          All consistent!


THE GUARANTEE:
==============
+-----------------------------------------------+
|  Given enough time without new writes:        |
|                                               |
|  lim (t -> infinity) [all replicas] = same   |
|                                               |
|  But HOW LONG? Not specified!                |
+-----------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use Eventual Consistency?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Benefit</th>
            <th className="p-3 border">Explanation</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">High Availability</td>
            <td className="p-3 border">Writes accepted by any replica</td>
            <td className="p-3 border">May read stale data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Low Latency</td>
            <td className="p-3 border">No coordination required for writes</td>
            <td className="p-3 border">Conflict resolution needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Partition Tolerance</td>
            <td className="p-3 border">Works during network partitions</td>
            <td className="p-3 border">Divergence during partition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Scalability</td>
            <td className="p-3 border">Easy to add more replicas</td>
            <td className="p-3 border">More replicas = longer convergence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Eventual Consistency in Practice</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`REAL-WORLD EXAMPLES:
====================

1. DNS (Domain Name System)
   - Changes propagate over hours
   - TTL controls caching behavior
   - Old records may be served temporarily

   Example:
   - Change: website.com -> 1.2.3.4
   - User A (cached): sees old IP
   - User B (fresh): sees new IP
   - After TTL expires: all see new IP


2. SHOPPING CART
   - Add items from multiple devices
   - May see different items temporarily
   - Eventually all items appear

   Phone: Add book          Laptop: Add headphones
      |                          |
      v                          v
   Cart A: [book]           Cart B: [headphones]
      |                          |
      +--------> Merge <---------+
                  |
                  v
            Cart: [book, headphones]


3. SOCIAL MEDIA LIKES
   - Like count may be inconsistent
   - Different users see different counts
   - Eventually converges to true count

   Post liked by 100 people:
   User A sees: 98 likes
   User B sees: 101 likes
   User C sees: 99 likes
   Eventually: All see 100 likes


4. CDN CONTENT
   - New content pushed to edge
   - Some edges have old version
   - Eventually all edges updated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Resolution Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HANDLING CONCURRENT UPDATES:
============================

When multiple replicas accept writes concurrently,
conflicts must be resolved for convergence.

1. LAST-WRITER-WINS (LWW)
========================
Use timestamps to determine winner.

Node A: x = "apple"  @ t=100
Node B: x = "banana" @ t=105

Resolution: x = "banana" (latest timestamp wins)

Problems:
- Requires synchronized clocks
- Silently loses data


2. FIRST-WRITER-WINS (FWW)
========================
Keep the earliest write.

Node A: x = "apple"  @ t=100
Node B: x = "banana" @ t=105

Resolution: x = "apple" (earliest wins)


3. MERGE / UNION
================
Combine all values.

Node A: cart = {book}
Node B: cart = {pen}

Resolution: cart = {book, pen}


4. APPLICATION-LEVEL RESOLUTION
===============================
Let the application decide.

Example: Banking
Node A: balance - 100 (withdrawal)
Node B: balance - 50  (withdrawal)

App Resolution: Apply both -> balance - 150


5. MANUAL CONFLICT RESOLUTION
=============================
Present conflicts to user.

Git merge conflict example:
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> branch`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Anti-Entropy Mechanisms</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HOW REPLICAS SYNCHRONIZE:
=========================

1. GOSSIP PROTOCOL
==================
Nodes randomly exchange information.

Round 1:        Round 2:        Round 3:
A knows x=5     A tells B       C tells D
                B knows x=5     D knows x=5
                C tells A
                C knows x=5

   A                A                A
  / \              /|\              /|\
 B   C            B C              B C D
     |              |
     D              D

Eventually all nodes know x=5


2. READ REPAIR
==============
Fix inconsistencies during reads.

Client reads from A and B:
A: x = 5
B: x = 3 (stale)

Response: x = 5
Background: Update B with x = 5


3. MERKLE TREES
===============
Efficiently detect differences.

       [Hash: abc123]
          /      \
    [Hash: x]  [Hash: y]
       / \        / \
     [a] [b]    [c] [d]

Compare root hashes to quickly find
which subtrees differ.


4. ACTIVE ANTI-ENTROPY
======================
Periodic background synchronization.

Every N minutes:
1. Pick random replica
2. Exchange Merkle tree roots
3. Find differences
4. Sync missing/outdated data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tunable Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`QUORUM-BASED TUNING:
====================

N = Total replicas
W = Write quorum (replicas that must ACK write)
R = Read quorum (replicas queried for read)

Rule for strong consistency: W + R > N

Examples with N = 3:
====================

Configuration 1: W=3, R=1 (Strong write, weak read)
- Write waits for ALL replicas
- Read from ANY replica
- Strong write consistency, fast reads

Configuration 2: W=1, R=3 (Weak write, strong read)
- Write to ANY replica (fast)
- Read from ALL replicas
- Fast writes, strong read consistency

Configuration 3: W=2, R=2 (Balanced)
- Write to majority
- Read from majority
- Balance of consistency and availability

Configuration 4: W=1, R=1 (Eventual)
- Write to any
- Read from any
- Maximum performance, eventual consistency


CASSANDRA CONSISTENCY LEVELS:
=============================
ONE         - Single replica
QUORUM      - Majority of replicas
ALL         - All replicas
LOCAL_ONE   - Single local replica
LOCAL_QUORUM - Majority in local DC`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Systems Using Eventual Consistency</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Conflict Resolution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Amazon DynamoDB</td>
            <td className="p-3 border">Key-Value Store</td>
            <td className="p-3 border">LWW or application-level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Apache Cassandra</td>
            <td className="p-3 border">Wide-Column Store</td>
            <td className="p-3 border">LWW with timestamps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CouchDB</td>
            <td className="p-3 border">Document Store</td>
            <td className="p-3 border">MVCC, application merge</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Riak</td>
            <td className="p-3 border">Key-Value Store</td>
            <td className="p-3 border">Vector clocks, siblings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Amazon S3</td>
            <td className="p-3 border">Object Storage</td>
            <td className="p-3 border">LWW</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DNS</td>
            <td className="p-3 border">Name Service</td>
            <td className="p-3 border">TTL-based expiration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strong Eventual Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STRONG EVENTUAL CONSISTENCY (SEC):
==================================

Definition:
- Eventual consistency PLUS
- Replicas that have received the same updates
  are in the SAME state (no conflicts to resolve)

How? Use CRDTs (Conflict-free Replicated Data Types)

CRDT EXAMPLES:
==============

1. G-Counter (Grow-only counter)
   Each node has its own counter
   Total = sum of all counters
   Merge: take max of each counter

   Node A: [5, 0, 0]
   Node B: [3, 4, 0]
   Merge:  [5, 4, 0] -> Total = 9

2. LWW-Register
   Value + timestamp
   Merge: keep value with highest timestamp

3. OR-Set (Observed-Remove Set)
   Add and remove operations commute
   Uses unique tags for additions

BENEFIT OF CRDTs:
- Automatic conflict resolution
- No coordination required
- Mathematically guaranteed convergence`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Eventual consistency guarantees convergence if updates stop</li>
        <li>No ordering guarantees: different replicas may see different orders</li>
        <li>Provides high availability and partition tolerance</li>
        <li>Conflicts from concurrent updates must be resolved</li>
        <li>Common strategies: LWW, merge, application-level resolution</li>
        <li>Anti-entropy mechanisms: gossip, read repair, Merkle trees</li>
        <li>Quorum settings can tune consistency vs performance trade-off</li>
        <li>CRDTs provide strong eventual consistency with automatic merging</li>
      </ul>
    </div>
  </div>
);

export default EventualConsistency;
