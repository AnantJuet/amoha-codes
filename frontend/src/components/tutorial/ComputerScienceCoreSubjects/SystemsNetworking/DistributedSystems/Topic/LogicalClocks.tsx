import React from "react";

const LogicalClocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Logical Clocks in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Logical clocks provide a mechanism for ordering events in distributed systems without relying
      on synchronized physical clocks. Instead of tracking real time, logical clocks capture the
      causal relationships between events, which is often more important for maintaining consistency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Logical Clocks?</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Problem with Physical Clocks:

Process A (Clock = 100)     Process B (Clock = 98)
         │                           │
    T=100│ Send message m            │
         │─────────────────────────► │
         │                      T=98 │ Receive m
         │                           │
         v                           v

Physical timestamps say: Send at 100, Receive at 98
This is IMPOSSIBLE - message received before sent!

Problem: Clock skew makes physical timestamps unreliable
Solution: Use logical time that respects causality`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Causality and Happened-Before</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">The Happened-Before Relation (→)</h3>
      <p className="leading-relaxed">
        Introduced by Leslie Lamport in 1978, the happened-before relation captures causal ordering:
      </p>
      <div className="font-mono mt-4 space-y-2 text-gray-900">
        <p><strong>Rule 1:</strong> If a and b are in the same process and a occurs before b, then a → b</p>
        <p><strong>Rule 2:</strong> If a is sending message m and b is receiving m, then a → b</p>
        <p><strong>Rule 3:</strong> If a → b and b → c, then a → c (transitivity)</p>
      </div>
      <p className="mt-4 italic">
        If neither a → b nor b → a, then a and b are concurrent (a || b)
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Logical Clocks</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Can Detect Concurrency?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Lamport Clocks</td>
            <td className="p-3 border">Single integer counter per process</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Vector Clocks</td>
            <td className="p-3 border">Array of counters (one per process)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Matrix Clocks</td>
            <td className="p-3 border">Matrix of counters (process x process)</td>
            <td className="p-3 border">Yes + knowledge tracking</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lamport Clocks</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lamport Clock Algorithm:

Each process P maintains a counter C(P)

Initialize: C = 0

On local event:
  C = C + 1

On send message:
  C = C + 1
  attach C to message as timestamp

On receive message with timestamp T:
  C = max(C, T) + 1

Property: If a → b, then C(a) < C(b)
Warning: C(a) < C(b) does NOT imply a → b`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lamport Clock Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Processes with Lamport Clocks:

P1:  (1)─────(2)─────────────────(3)────────(4)
              │                              ▲
              │ msg                          │ msg
              ▼                              │
P2:        (3)─────(4)─────(5)───────────────┘
                    │
                    │ msg
                    ▼
P3:              (5)─────(6)─────(7)

Event timeline:
P1: e1(1) → e2(2) → send → e4(3) → e5(4)
P2: recv(3) → e6(4) → send → e8(5) → send
P3: recv(5) → e10(6) → e11(7)

Clock values in parentheses show Lamport timestamps.
Note: P2 starts at 3 after receiving from P1's timestamp 2.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vector Clocks</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Vector Clock Algorithm</h3>
      <p className="leading-relaxed">
        Each process maintains a vector of N counters (for N processes):
      </p>
      <div className="font-mono mt-4 space-y-2 text-gray-900">
        <p><strong>Initialize:</strong> V = [0, 0, ..., 0]</p>
        <p><strong>On local event at Pi:</strong> V[i] = V[i] + 1</p>
        <p><strong>On send at Pi:</strong> V[i] = V[i] + 1; attach V to message</p>
        <p><strong>On receive at Pi with vector U:</strong></p>
        <p className="ml-4">V[j] = max(V[j], U[j]) for all j</p>
        <p className="ml-4">V[i] = V[i] + 1</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vector Clock Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Processes with Vector Clocks:

P1: [1,0,0]──[2,0,0]──────────────────[3,2,0]
                │                          ▲
                │ msg [2,0,0]              │ msg
                ▼                          │
P2:         [2,1,0]──[2,2,0]──────────────┘
                        │
                        │ msg [2,2,0]
                        ▼
P3:                 [2,2,1]──[2,2,2]

Comparing vectors:
V1 = [2,0,0], V2 = [2,2,0]
V1 < V2? Check: V1[i] ≤ V2[i] for all i, AND V1 ≠ V2
  [2≤2, 0≤2, 0≤0] and [2,0,0]≠[2,2,0] → YES, V1 < V2

V1 = [3,2,0], V2 = [2,2,2]
V1 < V2? [3≤2?] NO
V2 < V1? [2≤3, 2≤2, 2≤0?] NO
Conclusion: V1 || V2 (concurrent)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Vector Clock Comparison Rules</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Comparing Two Vector Clocks V and W</h3>
      <div className="font-mono space-y-3 text-gray-900">
        <p><strong>V = W:</strong> V[i] = W[i] for all i</p>
        <p><strong>V ≤ W:</strong> V[i] ≤ W[i] for all i</p>
        <p><strong>V {"<"} W:</strong> V ≤ W and V ≠ W (means V happened-before W)</p>
        <p><strong>V || W:</strong> NOT(V ≤ W) and NOT(W ≤ V) (concurrent)</p>
      </div>
      <p className="mt-4 italic">
        Key advantage: V {"<"} W if and only if the event with timestamp V happened before the event with timestamp W
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lamport vs Vector Clocks</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Lamport Clocks</th>
            <th className="p-3 border">Vector Clocks</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Size</td>
            <td className="p-3 border">Single integer</td>
            <td className="p-3 border">N integers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Overhead</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(N)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causality Detection</td>
            <td className="p-3 border">a → b implies L(a) {"<"} L(b)</td>
            <td className="p-3 border">a → b iff V(a) {"<"} V(b)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency Detection</td>
            <td className="p-3 border">Cannot detect</td>
            <td className="p-3 border">Can detect</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Highly scalable</td>
            <td className="p-3 border">Limited by N</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Logical Clocks</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Distributed Mutual Exclusion</h4>
        <p className="text-sm">Order requests for entering critical sections fairly</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Distributed Databases</h4>
        <p className="text-sm">Detect conflicts in concurrent updates (vector clocks)</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Event Ordering</h4>
        <p className="text-sm">Reconstruct order of events for debugging/auditing</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Causal Message Delivery</h4>
        <p className="text-sm">Ensure messages are delivered in causal order</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Total Ordering with Lamport Clocks</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Creating Total Order from Lamport Clocks:

Lamport clocks only give partial order.
To create total order, break ties with process ID:

For events a (at Pi) and b (at Pj):
  a < b  iff  L(a) < L(b)  OR  (L(a) = L(b) AND i < j)

Example:
Event e1 at P1: L(e1) = 5
Event e2 at P2: L(e2) = 5
Event e3 at P3: L(e3) = 5

Total order: e1 < e2 < e3
(All have same timestamp, ordered by process ID)

This ensures all processes agree on the same total order,
which is essential for distributed mutual exclusion.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Logical clocks track causality, not real time</li>
        <li>Lamport clocks: If a → b, then L(a) {"<"} L(b) (but not converse)</li>
        <li>Vector clocks: a → b if and only if V(a) {"<"} V(b)</li>
        <li>Vector clocks can detect concurrent events; Lamport clocks cannot</li>
        <li>Lamport clocks use O(1) space; vector clocks use O(N) space</li>
        <li>Total ordering can be achieved by adding process ID as tiebreaker</li>
        <li>Applications: mutual exclusion, databases, debugging, message ordering</li>
      </ul>
    </div>
  </div>
);

export default LogicalClocks;
