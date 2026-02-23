import React from "react";

const DataCentricConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data-Centric Consistency Models
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data-centric consistency models define rules for how a data store behaves when
      accessed by multiple processes. These models specify the order in which operations
      appear to execute from a global, data-store perspective, regardless of which client
      performed them. They focus on the guarantees provided by the system itself.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Data-Centric Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DATA-CENTRIC VS CLIENT-CENTRIC VIEW:

Data-Centric Perspective:
=========================
              DATA STORE
+----------------------------------+
|                                  |
|   How does the data store       |
|   ensure ALL processes see      |
|   a consistent view of data?    |
|                                  |
+----------------------------------+
    ^       ^       ^       ^
    |       |       |       |
  P1      P2      P3      P4
(Global ordering of ALL operations)


Client-Centric Perspective:
===========================
              DATA STORE
+----------------------------------+
|                                  |
|   What guarantees does a        |
|   SINGLE client get about       |
|   its own operations?           |
|                                  |
+----------------------------------+
    ^
    |
  Client (focused on own operations)


DATA-CENTRIC MODELS focus on:
- Global ordering of operations
- What ALL processes see
- System-wide invariants
- Synchronization between replicas`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Spectrum of Consistency Models</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CONSISTENCY SPECTRUM:

STRONG                                                    WEAK
|<-------------------------------------------------------->|
|                                                          |
|  Strict   Sequential   Causal   FIFO   Eventual         |
|    |          |          |        |        |            |
|    |          |          |        |        |            |
|    v          v          v        v        v            |
|  Most      Strong     Moderate  Weak   Weakest          |
| Restrictive                              (Most relaxed) |
|                                                          |
+----------------------------------------------------------+

Trade-offs as you move right:
- More availability
- Better performance
- Higher throughput
- But weaker guarantees

Trade-offs as you move left:
- Stronger guarantees
- More predictable behavior
- But lower performance
- Higher latency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Consistency Models Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-red-600">Strict</td>
            <td className="p-3 border">Reads see most recent write instantly</td>
            <td className="p-3 border">Absolute time ordering</td>
            <td className="p-3 border">Theoretical only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Linearizable</td>
            <td className="p-3 border">Real-time ordering of operations</td>
            <td className="p-3 border">Appears as single copy</td>
            <td className="p-3 border">Consensus, leader election</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-yellow-600">Sequential</td>
            <td className="p-3 border">All processes see same order</td>
            <td className="p-3 border">Global total order exists</td>
            <td className="p-3 border">Distributed transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Causal</td>
            <td className="p-3 border">Causally related ops ordered</td>
            <td className="p-3 border">Cause precedes effect</td>
            <td className="p-3 border">Social media, messaging</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">FIFO/PRAM</td>
            <td className="p-3 border">Per-process order preserved</td>
            <td className="p-3 border">Own writes ordered</td>
            <td className="p-3 border">Session consistency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Eventual</td>
            <td className="p-3 border">Eventually all see same value</td>
            <td className="p-3 border">Convergence over time</td>
            <td className="p-3 border">DNS, shopping carts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Formal Notation and Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NOTATION FOR CONSISTENCY ANALYSIS:

Operations:
- W(x)a  : Write value 'a' to variable x
- R(x)a  : Read variable x, returns value 'a'
- R(x)-  : Read variable x (value unspecified)

Process Timeline:
P1: |----W(x)a-------------------|
P2: |----------R(x)a--R(x)b------|
P3: |---------------W(x)b--------|

Reading the diagram:
- Time flows left to right (-->)
- Each row is a process
- Operations on the timeline show when they occur

Example Analysis:
=================
P1: |--W(x)1----------------------|
P2: |--------R(x)1----R(x)2-------|
P3: |------------------W(x)2------|

Questions to ask:
1. Is R(x)1 valid? (Yes, if W(x)1 completed)
2. Is R(x)2 valid? (Yes, if W(x)2 completed)
3. What about ordering guarantees?`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linearizability (Strong Consistency)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LINEARIZABILITY:
================
Operations appear to execute atomically at some point
between their start and end times.

Valid Linearizable Execution:
-----------------------------
Real time: ------>

P1: |--[W(x)1]------------------|
P2: |------[R(x)1]-[R(x)2]------|
P3: |---------------[W(x)2]----|

Linearization points:
     W(x)1    R(x)1    W(x)2    R(x)2
       |        |        |        |
       v        v        v        v
       *--------*--------*--------*
       |        |        |        |
       1        1        2        2  <- value of x


Invalid (NOT Linearizable):
---------------------------
P1: |--[W(x)1]------------------|
P2: |------[R(x)2]--------------|  <- Can't read 2 before W(x)2
P3: |---------------[W(x)2]----|

Why invalid? R(x)2 in P2 returns 2, but W(x)2 hasn't
happened yet in real time!

KEY PROPERTY: Real-time ordering must be preserved.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparing Consistency Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Linearizable</th>
            <th className="p-3 border">Sequential</th>
            <th className="p-3 border">Causal</th>
            <th className="p-3 border">Eventual</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Real-time order</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Global total order</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causal order</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-green-600">Yes</td>
            <td className="p-3 border text-red-600">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border text-red-600">Low</td>
            <td className="p-3 border text-yellow-600">Medium</td>
            <td className="p-3 border text-green-600">High</td>
            <td className="p-3 border text-green-600">Highest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Performance</td>
            <td className="p-3 border text-red-600">Low</td>
            <td className="p-3 border text-yellow-600">Medium</td>
            <td className="p-3 border text-green-600">Good</td>
            <td className="p-3 border text-green-600">Best</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CONSISTENCY MODEL HIERARCHY:

          +------------------+
          | Strict/Atomic    |  <- Theoretical ideal
          +------------------+
                  |
                  | (implies)
                  v
          +------------------+
          | Linearizable     |  <- Strongest practical
          +------------------+
                  |
                  | (implies)
                  v
          +------------------+
          | Sequential       |
          +------------------+
                  |
                  | (implies)
                  v
          +------------------+
          | Causal           |
          +------------------+
                  |
                  | (implies)
                  v
          +------------------+
          | FIFO/PRAM        |
          +------------------+
                  |
                  | (implies)
                  v
          +------------------+
          | Eventual         |  <- Weakest guarantee
          +------------------+

Arrow direction: Stronger implies weaker
- If a system is Linearizable, it's also Sequential
- If a system is Sequential, it's also Causal
- And so on...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Choosing a Consistency Model</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DECISION FRAMEWORK:

Question 1: Do you need real-time ordering?
|
+-- Yes --> Linearizable (expensive, but necessary)
|            Examples: Bank transfers, leader election
|
+-- No  --> Question 2

Question 2: Do you need a global total order?
|
+-- Yes --> Sequential Consistency
|            Examples: Shared counters, inventory
|
+-- No  --> Question 3

Question 3: Do you need causal relationships preserved?
|
+-- Yes --> Causal Consistency
|            Examples: Social media comments, chat
|
+-- No  --> Question 4

Question 4: Is some staleness acceptable?
|
+-- Yes --> Eventual Consistency
|            Examples: DNS, content caching, likes count
|
+-- No  --> Reconsider requirements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data-centric models define global behavior across all processes</li>
        <li>Consistency forms a spectrum from strict to eventual</li>
        <li>Stronger consistency means better guarantees but worse performance</li>
        <li>Linearizability is the strongest practical consistency model</li>
        <li>Sequential consistency relaxes real-time ordering requirements</li>
        <li>Causal consistency only orders causally related operations</li>
        <li>Eventual consistency guarantees convergence but no ordering</li>
        <li>Choose based on application requirements, not just performance</li>
      </ul>
    </div>
  </div>
);

export default DataCentricConsistency;
