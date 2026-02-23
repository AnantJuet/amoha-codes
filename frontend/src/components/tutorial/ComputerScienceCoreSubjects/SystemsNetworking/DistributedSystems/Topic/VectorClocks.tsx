import React from "react";

const VectorClocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vector Clocks in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vector clocks are a fundamental concept in distributed systems for tracking the partial
      ordering of events and preserving causality across various nodes. Unlike conventional
      timestamps, vector clocks provide a means of establishing the sequence of events even
      when there is no global clock.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are Vector Clocks?</h2>
    <p className="leading-relaxed">
      Vector clocks are a mechanism used in distributed systems to track the causality and
      ordering of events across multiple nodes or processes. Each process maintains a vector
      of logical clocks, with each element representing the state of that process's clock.
      When events occur, these clocks are incremented, and vectors are exchanged during
      communication between processes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Vector Clock Concept (3 Processes):

Process P1: [P1_clock, P2_clock, P3_clock]
Process P2: [P1_clock, P2_clock, P3_clock]
Process P3: [P1_clock, P2_clock, P3_clock]

Initial State:
  P1: [0, 0, 0]
  P2: [0, 0, 0]
  P3: [0, 0, 0]

After P1 sends message to P2:
  P1: [1, 0, 0]  (incremented own clock before send)
  P2: [1, 1, 0]  (received, took max, incremented own)

After P2 sends message to P3:
  P2: [1, 2, 0]  (incremented own clock before send)
  P3: [1, 2, 1]  (received, took max, incremented own)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Vector Clocks Work</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Initialization</td>
            <td className="p-3 border">
              All clocks are initially set to zero: [0, 0, ..., 0]
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Internal Event</td>
            <td className="p-3 border">
              Increment the process's own logical clock value by 1
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Send Message</td>
            <td className="p-3 border">
              Increment own clock by 1, then attach vector to the message
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Receive Message</td>
            <td className="p-3 border">
              Take element-wise maximum of own vector and received vector, then increment own clock by 1
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example with Three Processes</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Vector Clocks Example:

P1 ──●──────●──────────●──────────────────►
     [1,0,0]  [2,0,0]    [3,2,1]
               │           ▲
               │           │ (message from P3)
               │           │
P2 ──────●────┼────●──────┼─────────────────►
         [0,1,0]   [2,2,0] │
               │     │     │
               │     │     │
               ▼     ▼     │
P3 ──────────●─────●──────●────────────────►
             [2,1,1]  [2,2,2]

Legend:
● = Event
→ = Message sent
Comparing [3,2,1] vs [2,2,2]:
  - Cannot determine which happened first (concurrent events)
  - 3 > 2 in position 1, but 1 < 2 in position 3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparing Vector Clocks</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Comparison</th>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">VC(a) &lt; VC(b)</td>
            <td className="p-3 border">
              All elements of VC(a) ≤ VC(b) and at least one is strictly less
            </td>
            <td className="p-3 border">Event a happened before event b</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">VC(a) = VC(b)</td>
            <td className="p-3 border">
              All elements are equal
            </td>
            <td className="p-3 border">Same event</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrent</td>
            <td className="p-3 border">
              Neither VC(a) &lt; VC(b) nor VC(b) &lt; VC(a)
            </td>
            <td className="p-3 border">Events are concurrent (no causal relationship)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Distributed Databases</h3>
        <p className="leading-relaxed">
          Used in databases like Cassandra and Amazon DynamoDB to settle disputes
          when multiple data replicas are updated independently.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Collaborative Editing</h3>
        <p className="leading-relaxed">
          Applications like Google Docs use vector clocks to handle concurrent edits
          from multiple users.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Event-Driven Systems</h3>
        <p className="leading-relaxed">
          Distributed logging and monitoring systems where the sequence of events
          is important.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Distributed File Systems</h3>
        <p className="leading-relaxed">
          Systems like HDFS and GFS use vector clocks when multiple clients read
          and edit files simultaneously.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Causality Tracking:</strong> Accurately track causal relationships between events</li>
      <li><strong>Conflict Resolution:</strong> Systematic way to detect and resolve conflicts</li>
      <li><strong>Efficiency:</strong> Manage event ordering without central coordinator</li>
      <li><strong>Fault Tolerance:</strong> Handle network partitions gracefully</li>
      <li><strong>Scalability:</strong> No need for global synchronization</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Limitations</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Scalability Issue:</strong> Vector size grows linearly with number of nodes</li>
      <li><strong>Implementation Difficulty:</strong> Challenging in dynamic environments</li>
      <li><strong>Partial Ordering:</strong> Can only provide partial ordering, not total</li>
      <li><strong>Communication Overhead:</strong> Vector must be sent with each message</li>
      <li><strong>Network Dynamics:</strong> Problematic when nodes frequently join/leave</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Vector Clocks vs Lamport Clocks</h2>

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
            <td className="p-3 border font-semibold">Structure</td>
            <td className="p-3 border">Single integer</td>
            <td className="p-3 border">Array of integers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causality Detection</td>
            <td className="p-3 border">Cannot detect concurrent events</td>
            <td className="p-3 border">Can detect concurrent events</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Space Complexity</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n) where n = number of processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ordering</td>
            <td className="p-3 border">Total ordering</td>
            <td className="p-3 border">Partial ordering with concurrency</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Vector clocks maintain an array with one entry per process</li>
        <li>They can determine if events are causally related or concurrent</li>
        <li>Each process increments its own element on local events</li>
        <li>On receive, take element-wise maximum then increment own element</li>
        <li>Widely used in distributed databases for conflict resolution</li>
        <li>Trade-off between space overhead and causality tracking ability</li>
      </ul>
    </div>
  </div>
);

export default VectorClocks;
