import React from "react";

const InteractionModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interaction Models in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Interaction models describe how processes in distributed systems communicate
      and coordinate with each other. They address the timing of events and the
      performance characteristics of communication channels.
    </p>

    <h2 className="text-3xl font-bold mt-8">Performance of Communication Channels</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border">
              Time delay for a message to travel from sender to receiver
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bandwidth</td>
            <td className="p-3 border">
              Total amount of data that can be transmitted per unit time
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Jitter</td>
            <td className="p-3 border">
              Variation in delay experienced by messages
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Interaction Models</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Synchronous Model</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Known upper bound on message delay</li>
          <li>Known bounds on execution speed</li>
          <li>Synchronized clocks with bounded drift</li>
          <li>Easier to reason about</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Asynchronous Model</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>No bounds on message delays</li>
          <li>No bounds on process execution</li>
          <li>No synchronized clocks</li>
          <li>More realistic but harder to analyze</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous vs Asynchronous</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Synchronous System:
┌─────────────────────────────────────────────┐
│  Process A         Network          Process B│
│     │                                    │   │
│     │──── Message ──────────────────────►│   │
│     │      (delay ≤ D max)               │   │
│     │                                    │   │
│     │◄───── Response ───────────────────│   │
│     │      (within timeout T)            │   │
└─────────────────────────────────────────────┘
Guarantees: Message delivered within known time

Asynchronous System:
┌─────────────────────────────────────────────┐
│  Process A         Network          Process B│
│     │                                    │   │
│     │──── Message ─────?────────────────►│   │
│     │      (delay unknown)               │   │
│     │                                    │   │
│     │◄───── Response ────?──────────────│   │
│     │      (no timeout guarantee)        │   │
└─────────────────────────────────────────────┘
No guarantees on message delivery time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ordering of Events</h2>
    <p className="leading-relaxed">
      In distributed systems, establishing the order of events is challenging
      due to lack of a global clock. Two approaches are used:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Physical Clocks</h3>
        <p className="leading-relaxed">
          Use synchronized physical time. Requires clock synchronization
          protocols like NTP. Subject to clock drift.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Logical Clocks</h3>
        <p className="leading-relaxed">
          Use logical timestamps to order events. Lamport clocks and vector
          clocks capture causal relationships.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Most systems are partially synchronous:</strong> Bounds exist but are not always known</li>
      <li><strong>Network conditions vary:</strong> Latency and bandwidth change over time</li>
      <li><strong>Timeouts are essential:</strong> Help detect failures in asynchronous systems</li>
      <li><strong>Logical time is sufficient:</strong> For many coordination problems</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Interaction models define timing and communication assumptions</li>
        <li>Synchronous systems have known bounds on delays</li>
        <li>Asynchronous systems make no timing guarantees</li>
        <li>Real systems are often partially synchronous</li>
        <li>Understanding the model is crucial for algorithm design</li>
      </ul>
    </div>
  </div>
);

export default InteractionModels;
