import React from "react";

const CausalConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Causal Consistency
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Causal consistency is a consistency model that captures the cause-and-effect
      relationships between operations. It guarantees that if one operation causally
      affects another, all processes will see them in the correct causal order. However,
      concurrent operations (those with no causal relationship) may be seen in different
      orders by different processes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Causality</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WHAT IS CAUSALITY?
==================

In distributed systems, causality captures the
"happens-before" relationship (->):

Event A "happens-before" event B (A -> B) if:

1. SAME PROCESS:
   A and B are in the same process and A comes before B

   P1: |--A--|--B--|    A -> B (same process order)


2. MESSAGE PASSING:
   A is a send and B is the corresponding receive

   P1: |--send(m)--|
             \
              ------>
                    \
   P2:              |--recv(m)--|    send -> recv


3. TRANSITIVITY:
   If A -> B and B -> C, then A -> C

   P1: |--A--|
             \
              ------>
                    \
   P2:              |--B--|--C--|    A -> B -> C
                                     Therefore: A -> C`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Causal Consistency Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`FORMAL DEFINITION:
==================

"Writes that are causally related must be seen by all
 processes in the same order. Concurrent writes may be
 seen in different orders by different processes."

Two writes W1 and W2 are CAUSALLY RELATED if:
- W1 -> W2 (W1 happens before W2), OR
- W2 -> W1 (W2 happens before W1)

Two writes W1 and W2 are CONCURRENT if:
- Neither W1 -> W2 nor W2 -> W1
- Written as: W1 || W2


CAUSAL CONSISTENCY GUARANTEES:
==============================

+----------------------------------------------------+
|  If W1 -> W2 (causally related):                   |
|    ALL processes see W1 before W2                  |
|                                                    |
|  If W1 || W2 (concurrent):                        |
|    Different processes may see different orders   |
+----------------------------------------------------+


EXAMPLE:

P1: W(x)1 -------- W(x)3 --------
         \
          (message)
           \
P2: -------- R(x)1 - W(x)2 -------
                       |
                       v
                    W(x)1 -> W(x)2 (causally related)
                    W(x)3 || W(x)2 (concurrent)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of Causal Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EXAMPLE 1: VALID CAUSAL EXECUTION
==================================

P1: W(x)1 ------------------
         \
P2: ------ R(x)1 -- W(x)2 --
                        \
P3: -------- R(x)1 - R(x)2    ✓
P4: -------- R(x)1 - R(x)2    ✓

Analysis:
- W(x)1 -> R(x)1 (in P2, reads the value written by P1)
- R(x)1 -> W(x)2 (in P2, same process order)
- Therefore: W(x)1 -> W(x)2 (transitivity)
- All processes see W(x)1 before W(x)2 ✓


EXAMPLE 2: ALSO VALID (CONCURRENT WRITES)
=========================================

P1: W(x)1 ------------------
P2: -------- W(x)2 ---------    (No causal relation to W(x)1)
P3: -------- R(x)1 - R(x)2 -    ✓
P4: -------- R(x)2 - R(x)1 -    ✓  (Different order is OK!)

Analysis:
- W(x)1 || W(x)2 (concurrent, no causal relationship)
- P3 and P4 can see them in different orders
- This is VALID under causal consistency!


EXAMPLE 3: INVALID EXECUTION
============================

P1: W(x)1 ------------------
         \
P2: ------ R(x)1 -- W(x)2 --
P3: -------- R(x)2 - R(x)1 -    ✗ INVALID!

Analysis:
- W(x)1 -> W(x)2 (causally related through P2)
- P3 must see W(x)1 before W(x)2
- But P3 sees R(x)2 before R(x)1
- This violates causal consistency!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Social Media Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SOCIAL MEDIA COMMENT THREAD:
============================

Alice posts: "Just got a new puppy!"      (Post A)
        |
        v (causally depends on)
Bob replies: "What's its name?"            (Comment B)
        |
        v (causally depends on)
Alice replies: "Her name is Luna!"         (Comment C)

Causal Order: A -> B -> C

VALID displays for different users:

User 1 sees:           User 2 sees:
+------------------+   +------------------+
| Just got a new   |   | Just got a new   |
| puppy!           |   | puppy!           |
+------------------+   +------------------+
| What's its name? |   | What's its name? |
+------------------+   +------------------+
| Her name is Luna!|   | Her name is Luna!|
+------------------+   +------------------+

INVALID display:
+------------------+
| Her name is Luna!|   <- Answer before question!
+------------------+
| What's its name? |
+------------------+
| Just got a new   |
| puppy!           |
+------------------+

This would be confusing and violates causality!


CONCURRENT POSTS (OK to reorder):
================================

Alice: "Great weather today!"    (Post A)
Bob: "Anyone watching the game?" (Post B, concurrent)

User 1 sees:        User 2 sees:
A                   B
B                   A

Both valid! No causal relationship exists.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Causal Consistency</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Overhead</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Vector Clocks</td>
            <td className="p-3 border">Track causal dependencies per process</td>
            <td className="p-3 border">O(n) space per operation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dependency Tracking</td>
            <td className="p-3 border">Explicitly track causal predecessors</td>
            <td className="p-3 border">Variable, depends on dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causal Broadcast</td>
            <td className="p-3 border">Deliver messages respecting causality</td>
            <td className="p-3 border">Buffering until dependencies met</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Guarantees</td>
            <td className="p-3 border">Track version vectors per session</td>
            <td className="p-3 border">Moderate overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vector Clocks for Causality</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VECTOR CLOCKS IMPLEMENTATION:
=============================

Each process maintains a vector clock:
VC = [VC[1], VC[2], ..., VC[n]] for n processes

Rules:
1. Before each local event: VC[self]++
2. When sending: attach VC to message
3. When receiving: VC = max(VC, received_VC), then VC[self]++


EXAMPLE WITH 3 PROCESSES:
=========================

P1: [1,0,0] ----[2,0,0]----[3,0,0]---->
      |
      | (send message)
      v
P2: [0,0,0]--[1,1,0]----[1,2,0]--[1,3,0]-->
                           |
                           | (send message)
                           v
P3: [0,0,0]------------[1,2,1]--[1,2,2]-->


Comparing Vector Clocks:
========================
VC1 <= VC2 iff for all i: VC1[i] <= VC2[i]
VC1 < VC2 (happens-before) iff VC1 <= VC2 and VC1 != VC2
VC1 || VC2 (concurrent) iff NOT(VC1 < VC2) AND NOT(VC2 < VC1)

Examples:
[1,0,0] < [2,0,0]  -> First happens-before second
[1,2,0] < [1,2,1]  -> First happens-before second
[2,0,0] || [1,2,0] -> Concurrent (neither happens-before)


USING VC FOR CAUSAL DELIVERY:
=============================

When receiving a message with VC_msg:
1. Buffer the message until:
   - VC_msg[sender] = local_VC[sender] + 1
   - For all j != sender: VC_msg[j] <= local_VC[j]
2. Then deliver and update local_VC`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Causal vs Other Consistency Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Sequential</th>
            <th className="p-3 border">Causal</th>
            <th className="p-3 border">Eventual</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Total Order</td>
            <td className="p-3 border text-green-600">Required</td>
            <td className="p-3 border text-yellow-600">Only for causal ops</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrent Ops</td>
            <td className="p-3 border">Same order everywhere</td>
            <td className="p-3 border">May differ</td>
            <td className="p-3 border">May differ</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border text-red-600">Lower</td>
            <td className="p-3 border text-yellow-600">Higher</td>
            <td className="p-3 border text-green-600">Highest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border text-red-600">High</td>
            <td className="p-3 border text-yellow-600">Moderate</td>
            <td className="p-3 border text-green-600">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Transactions</td>
            <td className="p-3 border">Social, messaging</td>
            <td className="p-3 border">Caching, DNS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMS USING CAUSAL CONSISTENCY:
=================================

1. MongoDB (with read concern "majority")
   - Causal consistency sessions
   - Tracks operation times
   - afterClusterTime parameter

2. CockroachDB
   - Supports causal consistency
   - Uses hybrid logical clocks
   - Provides serializable by default

3. Riak
   - Vector clocks for causality
   - Supports causal context

4. COPS (Causal+ Consistency)
   - Research system from CMU
   - Demonstrates causal+ in geo-replicated stores

5. Facebook/Meta
   - TAO: Social graph store
   - Provides "read-your-writes" (weaker form)
   - Some causal guarantees for feeds


CAUSAL+ CONSISTENCY:
====================
Causal consistency + convergent conflict resolution

When concurrent writes conflict:
- Causal: May see different values
- Causal+: Eventually converge to same value
           (using LWW, merge, or CRDT)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Causal consistency preserves cause-and-effect relationships</li>
        <li>Based on the "happens-before" relation: same process, message passing, transitivity</li>
        <li>Causally related operations must be seen in order by all processes</li>
        <li>Concurrent operations may be seen in different orders</li>
        <li>Weaker than sequential consistency but often sufficient</li>
        <li>Can be implemented with vector clocks or dependency tracking</li>
        <li>Offers better availability and performance than sequential consistency</li>
        <li>Ideal for social media, messaging, and collaborative applications</li>
      </ul>
    </div>
  </div>
);

export default CausalConsistency;
