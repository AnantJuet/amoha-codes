import React from "react";

const StrictConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Strict Consistency
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Strict consistency is the strongest consistency model in distributed systems. It
      requires that any read operation on a data item returns the value of the most recent
      write operation on that item, according to absolute global time. While theoretically
      ideal, strict consistency is impossible to achieve in real distributed systems due
      to the physical limitations of information propagation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition of Strict Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STRICT CONSISTENCY DEFINITION:
==============================

"Any read on a data item x returns the value stored
 by the most recent write operation on x."

Where "most recent" is defined by absolute global time.

Formally:
---------
For any read R(x) returning value v at time t:
  v = the value written by W(x)v' where W(x)v' is the
  latest write to x that completed before time t.


VISUAL REPRESENTATION:
======================

Absolute Global Time: ------>
                      0    1    2    3    4    5    (time units)

P1: |---W(x)1----|
P2:                  |---R(x)???---|

What value must R(x) return?
Under Strict Consistency: R(x) MUST return 1
                         (the most recent write as of time 2)


The Key Requirement:
====================
+------------------------------------------+
|  INSTANTANEOUS PROPAGATION OF WRITES     |
|                                          |
|  When a write completes at time T,       |
|  ALL processes see that value at time T  |
|  (No propagation delay allowed!)         |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strict vs Linearizable Consistency</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Strict Consistency</th>
            <th className="p-3 border">Linearizability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Time Reference</td>
            <td className="p-3 border">Absolute global time</td>
            <td className="p-3 border">Real-time ordering</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Write Visibility</td>
            <td className="p-3 border">Instantaneous everywhere</td>
            <td className="p-3 border">Within operation bounds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementable</td>
            <td className="p-3 border text-red-600">No (theoretical only)</td>
            <td className="p-3 border text-green-600">Yes (with cost)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Propagation Delay</td>
            <td className="p-3 border">Zero (impossible)</td>
            <td className="p-3 border">Allowed within bounds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Strict Consistency is Impossible</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`THE PHYSICS PROBLEM:
====================

Consider two nodes 3000km apart:

  Node A (New York)                 Node B (Los Angeles)
  +-----------+                     +-----------+
  |           |                     |           |
  |  W(x)=5   | ------ 3000 km ---> |   R(x)=?  |
  |  at T=0   |                     |   at T=0  |
  +-----------+                     +-----------+

Speed of light: ~300,000 km/s
Minimum propagation time: 3000/300000 = 10 milliseconds

STRICT CONSISTENCY REQUIRES:
- R(x) at T=0 sees W(x)=5 written at T=0
- But information takes 10ms to travel!
- This violates the laws of physics

CONCLUSION:
===========
Strict consistency requires information to travel
faster than the speed of light, which is impossible.

  +--------------------------------------------+
  |  EINSTEIN'S SPECIAL RELATIVITY SAYS NO!   |
  |                                            |
  |  Information cannot travel faster than    |
  |  the speed of light (299,792,458 m/s)     |
  +--------------------------------------------+

Therefore:
- Strict consistency is a THEORETICAL model
- It serves as an ideal benchmark
- Real systems use linearizability or weaker`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples: Strict vs Non-Strict</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EXAMPLE 1: STRICTLY CONSISTENT
==============================

Time:    0     1     2     3     4     5
         |     |     |     |     |     |
P1:      W(x)1 |     |     W(x)2 |     |
P2:            R(x)1 |           R(x)2 |

Analysis:
- R(x) at time 1 returns 1 (written at time 0) ✓
- R(x) at time 4 returns 2 (written at time 3) ✓
This IS strictly consistent.


EXAMPLE 2: NOT STRICTLY CONSISTENT
==================================

Time:    0     1     2     3     4     5
         |     |     |     |     |     |
P1:      W(x)1 |     |     W(x)2 |     |
P2:            R(x)0 |           R(x)1 |

Analysis:
- R(x) at time 1 returns 0 (but 1 was written at time 0) ✗
- R(x) at time 4 returns 1 (but 2 was written at time 3) ✗
This is NOT strictly consistent!


EXAMPLE 3: CONCURRENT OPERATIONS
================================

Time:    0     1     2     3     4     5
         |     |     |     |     |     |
P1:      W(x)1-|-----|     |     |     |
P2:      |-----R(x)? |     |     |     |

If the write completes at time 1:
- R(x) during [0,1] should return previous value
- R(x) after time 1 should return 1

This is where linearizability differs:
- Linearizability allows any consistent linearization point
- Strict requires exact global time ordering`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Global Clock Assumption</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STRICT CONSISTENCY REQUIRES A PERFECT GLOBAL CLOCK:

Real World Problem:
===================

Node A's Clock       Node B's Clock       Actual Time
     |                    |                    |
     v                    v                    v
  10:00:00.000        10:00:00.003         10:00:00.001
     |                    |                    |
  (3ms behind)        (2ms ahead)          (truth)


Clock Synchronization Challenges:
================================
1. Network latency varies unpredictably
2. Clock drift occurs in all hardware
3. GPS synchronization has ~100ns accuracy (best case)
4. NTP typically achieves ~1ms accuracy

Even with GPS:
+------------------------------------------------+
|  100 nanoseconds = 30 meters of light travel   |
|  Not enough for truly strict consistency!      |
+------------------------------------------------+


What Happens in Practice:
========================
- We use logical clocks (Lamport, Vector)
- We use bounded clock drift assumptions
- We accept weaker consistency models
- We use consensus protocols (Paxos, Raft)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Single-Processor Analogy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WHERE STRICT CONSISTENCY EXISTS: SINGLE MACHINE

Single-Core Processor:
======================
+---------------------------+
|         CPU Core          |
|     +---------------+     |
|     |   Registers   |     |
|     +---------------+     |
|            |              |
|     +---------------+     |
|     |    Cache     |      |
|     +---------------+     |
|            |              |
+---------------------------+
             |
      +-------------+
      |    RAM      |
      +-------------+

Within a single core:
- All operations are ordered by the processor
- Memory writes are visible in order
- Effectively strict consistency!


Multi-Core Challenge:
=====================
+-------+  +-------+  +-------+
| Core1 |  | Core2 |  | Core3 |
+---+---+  +---+---+  +---+---+
    |          |          |
+---v----------v----------v---+
|         L3 Cache            |
+-------------+---------------+
              |
       +------v------+
       |    RAM      |
       +-------------+

Even on multi-core:
- Cache coherence protocols needed
- Memory barriers required
- Still approximates strict consistency locally`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Approximations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">How It Works</th>
            <th className="p-3 border">Limitation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Node</td>
            <td className="p-3 border">All data on one machine</td>
            <td className="p-3 border">No fault tolerance, no scaling</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Synchronous Replication</td>
            <td className="p-3 border">Wait for all replicas before ACK</td>
            <td className="p-3 border">High latency, availability issues</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Atomic Broadcast</td>
            <td className="p-3 border">Total order broadcast to all nodes</td>
            <td className="p-3 border">Performance overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Google Spanner</td>
            <td className="p-3 border">TrueTime API with GPS + atomic clocks</td>
            <td className="p-3 border">Complex, expensive infrastructure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Google Spanner's TrueTime</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TRUETIME: GOOGLE'S APPROACH TO NEAR-STRICT CONSISTENCY

TrueTime API:
=============
TT.now()  -> returns [earliest, latest] time interval
TT.after(t) -> true if t is definitely in the past
TT.before(t) -> true if t is definitely in the future

The Insight:
============
Instead of perfect time, use TIME UNCERTAINTY BOUNDS

+--------------------------------------------+
|  Current time is somewhere in [e, l]       |
|                                            |
|  earliest     TRUE TIME     latest         |
|     |<-----------|----------->|            |
|                  ?                         |
|     uncertainty bound: typically ~7ms      |
+--------------------------------------------+

How Spanner Uses TrueTime:
==========================
1. Transaction gets commit timestamp
2. Wait until TT.after(commit_timestamp) is true
3. This guarantees ordering even across nodes

Trade-off:
==========
- Adds latency (wait for uncertainty bound)
- But provides external consistency (similar to strict)
- Requires expensive GPS/atomic clock infrastructure`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Strict consistency requires reads to return the most recent write by absolute time</li>
        <li>It is theoretically impossible in distributed systems due to physics</li>
        <li>Information cannot propagate faster than the speed of light</li>
        <li>Strict consistency serves as an ideal benchmark for other models</li>
        <li>Linearizability is the closest practical approximation</li>
        <li>Single-node systems effectively provide strict consistency</li>
        <li>Google Spanner uses TrueTime to approximate strict consistency</li>
        <li>Real systems trade strict consistency for availability and performance</li>
      </ul>
    </div>
  </div>
);

export default StrictConsistency;
