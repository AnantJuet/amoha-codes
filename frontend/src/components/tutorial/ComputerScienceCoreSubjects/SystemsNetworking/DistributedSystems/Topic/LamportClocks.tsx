import React from "react";

const LamportClocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Lamport's Logical Clocks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Lamport's Logical Clocks, introduced by Leslie Lamport in 1978, provide a mechanism for
      ordering events in a distributed system without relying on synchronized physical clocks.
      They capture the "happened-before" relationship between events.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem</h2>
    <p className="leading-relaxed">
      In distributed systems, processes run on different machines with independent clocks.
      Physical clocks cannot be perfectly synchronized, making it impossible to determine
      the exact order of events across different processes using timestamps alone.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Clock Synchronization Problem:

Process P1 (Clock A)     Process P2 (Clock B)
         |                        |
    T=100| Send msg              |
         +---------------------->|
         |                  T=90 | Receive msg
         |                       |
         v                       v

Physical time at P1: 100 (earlier)
Physical time at P2: 90  (later)

Problem: P2's clock says 90, but the message
was sent at time 100 on P1's clock!

This violates causality in physical timestamps.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Happened-Before Relation</h2>
    <p className="leading-relaxed">
      Lamport defined the "happened-before" relation (denoted as →) to capture causality:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Happened-Before Rules:

1. If a and b are events in the same process,
   and a occurs before b, then a → b

2. If a is the sending of a message m,
   and b is the receipt of m, then a → b

3. If a → b and b → c, then a → c (transitivity)

Concurrent Events:
If neither a → b nor b → a, then a and b
are concurrent (a || b)

Example:
P1: [e1] -----> [e2] ----------> [e3]
                  |
                  | send
                  v
P2:            [f1] -----> [f2]

Relations:
- e1 → e2 → e3 (same process)
- e2 → f1 (message send/receive)
- e1 → f1 (transitivity)
- e1 || f2? No, e1 → f1 → f2, so e1 → f2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lamport Clock Algorithm</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Initialize</td>
            <td className="p-3 border">Each process starts with clock C = 0</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local Event</td>
            <td className="p-3 border">Before any event, increment: C = C + 1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Send Message</td>
            <td className="p-3 border">Increment clock, attach timestamp to message</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Receive Message</td>
            <td className="p-3 border">C = max(C, msg_timestamp) + 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Execution</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lamport Clock Example:

Process P1          Process P2          Process P3
    |                   |                   |
(0) | Init              | (0)               | (0)
    |                   |                   |
(1) | e1: local         |                   |
    |                   |                   |
(2) | e2: send -------->| (3) f1: receive   |
    |                   |                   |
    |                   | (4) f2: send ---->| (5) g1: receive
    |                   |                   |
    |              (8)  | f3: receive <-----| (6) g2: send
    |                   |     max(4,6)+1=7? |
    |                   |     Actually:     |
(3) | e3: local         |     max(4,6)+1=7  |
    |                   |                   |
(4) | e4: send -------->| (8) f4: receive   |
    |                   |     max(7,4)+1=8  |
    v                   v                   v

Clock values ensure: if a → b, then C(a) < C(b)

Step-by-step:
1. P1 has local event e1: C1 = 0 + 1 = 1
2. P1 sends msg to P2: C1 = 1 + 1 = 2
3. P2 receives: C2 = max(0, 2) + 1 = 3
4. P2 sends to P3: C2 = 3 + 1 = 4
5. P3 receives: C3 = max(0, 4) + 1 = 5
6. P3 sends to P2: C3 = 5 + 1 = 6
7. P2 receives: C2 = max(4, 6) + 1 = 7
8. P1 local event: C1 = 2 + 1 = 3
9. P1 sends to P2: C1 = 3 + 1 = 4
10. P2 receives: C2 = max(7, 4) + 1 = 8`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Lamport Clocks</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Property 1: Clock Consistency
If a → b, then C(a) < C(b)
(Happened-before implies smaller timestamp)

Property 2: NOT the Converse!
C(a) < C(b) does NOT imply a → b
(Events may be concurrent)

Example:
P1: [e1(1)] --------------------> [e2(2)]
P2:         [f1(1)] ---> [f2(2)]

C(e1) = 1, C(f1) = 1
Neither e1 → f1 nor f1 → e1
They are concurrent (e1 || f1)

Limitation:
Lamport clocks cannot determine if events are
concurrent. For that, use Vector Clocks.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Total Ordering with Lamport Clocks</h2>
    <p className="leading-relaxed">
      To achieve total ordering (useful for mutual exclusion), we can break ties using process IDs:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Total Ordering Rule:

For events a (in process Pi) and b (in process Pj):
a < b if and only if:
  C(a) < C(b)  OR
  (C(a) = C(b) AND i < j)

Example:
Event e1 in P1 with timestamp 5
Event f1 in P2 with timestamp 5

Total order: e1 < f1 (because P1 < P2)

This creates a consistent total ordering
across all processes in the system.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Distributed Mutual Exclusion:</strong> Ordering requests to enter critical sections</li>
      <li><strong>Distributed Database:</strong> Ordering transactions for consistency</li>
      <li><strong>Event Logging:</strong> Creating consistent logs across distributed systems</li>
      <li><strong>Debugging:</strong> Understanding event ordering in distributed applications</li>
      <li><strong>Causal Message Ordering:</strong> Ensuring messages are delivered in causal order</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lamport clocks provide logical time without synchronized physical clocks</li>
        <li>If a → b, then C(a) {"<"} C(b) (Clock Condition)</li>
        <li>The converse is not true: C(a) {"<"} C(b) doesn't imply a → b</li>
        <li>Cannot detect concurrent events (use Vector Clocks for that)</li>
        <li>Total ordering achieved by adding process IDs as tie-breaker</li>
        <li>Simple to implement: just increment on events and update on receive</li>
      </ul>
    </div>
  </div>
);

export default LamportClocks;
