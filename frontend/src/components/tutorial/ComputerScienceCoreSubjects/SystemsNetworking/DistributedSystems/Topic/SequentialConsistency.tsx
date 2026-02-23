import React from "react";

const SequentialConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sequential Consistency
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sequential consistency, introduced by Leslie Lamport in 1979, is a memory consistency
      model that provides a weaker guarantee than strict consistency but is still strong
      enough for many applications. It requires that all operations appear to execute in
      some sequential order that is consistent with the program order of each individual
      process.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition of Sequential Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LAMPORT'S DEFINITION (1979):
============================

"The result of any execution is the same as if the
operations of all processors were executed in some
sequential order, and the operations of each individual
processor appear in this sequence in the order specified
by its program."

Two Key Requirements:
=====================

1. GLOBAL SEQUENTIAL ORDER
   All operations appear to execute in a single
   sequential order (total order)

2. PROGRAM ORDER PRESERVED
   Each process's operations appear in program order
   within the global sequence


VISUAL REPRESENTATION:
======================

Individual Process Views:
P1: |--a--|--b--|--c--|     (program order: a, b, c)
P2: |--x--|--y--|--z--|     (program order: x, y, z)
P3: |--m--|--n--|--p--|     (program order: m, n, p)

Valid Sequential Order:
Global: a -> x -> m -> b -> y -> n -> c -> z -> p

Check:
- P1's order preserved: a -> b -> c ✓
- P2's order preserved: x -> y -> z ✓
- P3's order preserved: m -> n -> p ✓

ALL processes must agree on THIS order!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sequential vs Strict Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`KEY DIFFERENCE: REAL-TIME ORDERING

STRICT CONSISTENCY:
==================
Time:    0     1     2     3
P1:      W(x)1 |     |     |
P2:      |     R(x)? |     |

R(x) MUST return 1 (based on absolute time)


SEQUENTIAL CONSISTENCY:
=======================
Time:    0     1     2     3
P1:      W(x)1 |     |     |
P2:      |     R(x)? |     |

R(x) could return 0 OR 1!

Why? The valid sequential orders could be:
  Order A: R(x)=0 -> W(x)1    (read happens "before" write)
  Order B: W(x)1 -> R(x)=1    (write happens "before" read)

Both are valid as long as ALL processes agree!


THE KEY INSIGHT:
================
+---------------------------------------------------+
|  Sequential consistency does NOT require          |
|  operations to respect real-time ordering.        |
|                                                   |
|  It only requires a CONSISTENT ordering that      |
|  all processes agree on, where each process's    |
|  program order is preserved.                      |
+---------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Valid vs Invalid Executions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EXAMPLE 1: VALID SEQUENTIAL EXECUTION
======================================

P1: W(x)1 ---------------
P2: ------- W(x)2 -------
P3: ------------- R(x)2 - R(x)1
P4: ------------- R(x)2 - R(x)1

Valid sequential order: W(x)1 -> W(x)2 -> R(x)2 -> R(x)1
Wait... R(x)1 after R(x)2? Let's try another:

Valid order: W(x)2 -> W(x)1 -> R(x)1 -> R(x)1
Hmm, but P3 sees R(x)2 first...

Actually VALID order: W(x)1 -> W(x)2 -> R(x)2 -> R(x)1
This means: After both writes, reads could still
interleave arbitrarily... but wait, once you see 2,
you shouldn't see 1 again!

Let me reconsider...

CORRECTED: This execution is INVALID!
Once a process sees W(x)2, subsequent reads cannot
return the older value 1.


EXAMPLE 2: DEFINITELY INVALID
=============================

P1: W(x)1 ---------------
P2: ------- W(x)2 -------
P3: ------------- R(x)1 - R(x)2
P4: ------------- R(x)2 - R(x)1

P3 sees order: W(x)1 -> W(x)2
P4 sees order: W(x)2 -> W(x)1

These orderings contradict each other!
No valid global sequential order exists.
INVALID under sequential consistency.


EXAMPLE 3: VALID EXECUTION
==========================

P1: W(x)1 ---------------
P2: ------- W(x)2 -------
P3: ------------- R(x)1 - R(x)2
P4: ------------- R(x)1 - R(x)2

Both P3 and P4 agree: W(x)1 happened before W(x)2
Valid global order: W(x)1 -> W(x)2
VALID under sequential consistency.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Sequential Consistency</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Sequencer</td>
            <td className="p-3 border">All ops go through one node</td>
            <td className="p-3 border">Bottleneck, single point of failure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total Order Broadcast</td>
            <td className="p-3 border">Atomic broadcast protocol</td>
            <td className="p-3 border">Message overhead, latency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logical Timestamps</td>
            <td className="p-3 border">Lamport clocks for ordering</td>
            <td className="p-3 border">Additional metadata per operation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consensus Protocol</td>
            <td className="p-3 border">Paxos/Raft for agreement</td>
            <td className="p-3 border">Multiple round trips</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Single Sequencer Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SINGLE SEQUENCER APPROACH:
==========================

All operations serialized through one node:

     +-------+       +-------+       +-------+
     |  P1   |       |  P2   |       |  P3   |
     +---+---+       +---+---+       +---+---+
         |               |               |
         |   Write(x,1)  |   Read(x)     |
         |       \       |       |       |
         |        \      |       |       |
         |         \     |       |       |
         v          v    v       v       v
     +------------------------------------------+
     |            SEQUENCER NODE                |
     |                                          |
     |  Queue: [W(x,1), R(x), W(y,2), ...]     |
     |                                          |
     |  Processes operations in FIFO order     |
     +------------------------------------------+
                        |
                        v
     +------------------------------------------+
     |              DATA STORE                  |
     |         x=1, y=2, z=0, ...              |
     +------------------------------------------+

Guarantees:
- All operations totally ordered
- Program order preserved (FIFO to sequencer)
- All replicas see same order

Problems:
- Sequencer is bottleneck
- Single point of failure
- Latency for remote clients`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Dekker's Algorithm Test</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DEKKER'S ALGORITHM (Classic SC Test):
=====================================

Initial: x = 0, y = 0

P1:                      P2:
x = 1;                   y = 1;
r1 = y;                  r2 = x;

Question: Can r1 = 0 AND r2 = 0?

Under Sequential Consistency: NO!

Proof by enumeration of all valid sequential orders:

Order 1: x=1 -> r1=y -> y=1 -> r2=x
         r1=0, r2=1  (P1 sees old y, P2 sees new x)

Order 2: x=1 -> y=1 -> r1=y -> r2=x
         r1=1, r2=1  (both see new values)

Order 3: x=1 -> y=1 -> r2=x -> r1=y
         r1=1, r2=1

Order 4: y=1 -> r2=x -> x=1 -> r1=y
         r1=1, r2=0  (P2 sees old x, P1 sees new y)

Order 5: y=1 -> x=1 -> r1=y -> r2=x
         r1=1, r2=1

Order 6: y=1 -> x=1 -> r2=x -> r1=y
         r1=1, r2=1

No valid order produces r1=0 AND r2=0!

+---------------------------------------------------+
|  On modern CPUs without memory barriers,          |
|  r1=0 AND r2=0 CAN happen due to reordering!     |
|  This shows CPUs don't provide SC by default.    |
+---------------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sequential Consistency in Practice</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMS PROVIDING SEQUENTIAL CONSISTENCY:
=========================================

1. ZooKeeper
   - Uses ZAB protocol (Zookeeper Atomic Broadcast)
   - All writes go through leader
   - Reads can be served by any replica
   - Guarantees: writes are sequentially consistent

2. etcd
   - Uses Raft consensus
   - All operations through leader
   - Provides linearizable reads (stronger than SC)

3. Single-threaded programs
   - By definition sequentially consistent
   - No concurrency = natural total order

4. Databases with serializable isolation
   - Transactions appear to execute in sequence
   - MySQL with SERIALIZABLE isolation level


WHY NOT ALWAYS USE SEQUENTIAL CONSISTENCY?
==========================================

+---------------+------------------+------------------+
|   Metric      |  Sequential      |  Eventual        |
+---------------+------------------+------------------+
| Latency       |  High (sync)     |  Low (async)     |
| Throughput    |  Lower           |  Higher          |
| Availability  |  Lower           |  Higher          |
| Complexity    |  Simpler logic   |  Conflict res.   |
+---------------+------------------+------------------+

Trade-off: Stronger consistency = Lower performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Models and Hardware</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HARDWARE MEMORY MODELS:
=======================

Most modern CPUs do NOT provide sequential consistency!

x86/x64 (Intel/AMD):
- Provides Total Store Order (TSO)
- Weaker than SC but close
- Stores can be reordered after loads

ARM/POWER:
- Much weaker memory model
- Extensive reordering allowed
- Requires explicit barriers for SC

To get SC on hardware:
+--------------------------------------------+
|  // Pseudo-code for SC on weak memory      |
|                                            |
|  write(x, v):                              |
|      STORE x, v                            |
|      MEMORY_BARRIER  // Full fence         |
|                                            |
|  read(x):                                  |
|      MEMORY_BARRIER  // Full fence         |
|      return LOAD x                         |
+--------------------------------------------+

Cost of memory barriers:
- 10-100 CPU cycles per barrier
- Flushes store buffers
- Stalls pipeline

This is why most languages/frameworks offer
weaker memory models by default!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Linearizable</th>
            <th className="p-3 border">Sequential</th>
            <th className="p-3 border">Causal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Real-time order</td>
            <td className="p-3 border text-green-600">Required</td>
            <td className="p-3 border text-red-600">Not required</td>
            <td className="p-3 border text-red-600">Not required</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total order</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">Partial only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Program order</td>
            <td className="p-3 border text-green-600">Preserved</td>
            <td className="p-3 border text-green-600">Preserved</td>
            <td className="p-3 border text-green-600">Preserved</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation cost</td>
            <td className="p-3 border text-red-600">Highest</td>
            <td className="p-3 border text-yellow-600">High</td>
            <td className="p-3 border text-green-600">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Sequential consistency requires a global total order of all operations</li>
        <li>Each process's program order must be preserved in the global order</li>
        <li>Unlike strict consistency, real-time ordering is not required</li>
        <li>All processes must agree on the same sequential order</li>
        <li>Can be implemented via single sequencer or total order broadcast</li>
        <li>Modern CPUs do not provide SC by default (need memory barriers)</li>
        <li>Still expensive to implement in distributed systems</li>
        <li>Weaker than linearizability but often sufficient for applications</li>
      </ul>
    </div>
  </div>
);

export default SequentialConsistency;
