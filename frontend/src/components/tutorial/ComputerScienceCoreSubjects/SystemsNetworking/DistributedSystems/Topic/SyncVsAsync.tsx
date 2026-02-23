import React from "react";

const SyncVsAsync: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Synchronous vs Asynchronous Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The distinction between synchronous and asynchronous distributed systems
      is fundamental to understanding how processes communicate and coordinate.
      This distinction affects algorithm design, fault detection, and overall
      system behavior.
    </p>

    <h2 className="text-3xl font-bold mt-8">Synchronous Distributed Systems</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Characteristics</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Bounded message delay:</strong> Maximum time for message transmission is known</li>
        <li><strong>Bounded process speed:</strong> Upper and lower limits on execution time</li>
        <li><strong>Synchronized clocks:</strong> Clock drift is bounded and known</li>
        <li><strong>Timeouts are meaningful:</strong> Can reliably detect failures using timeouts</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Asynchronous Distributed Systems</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Characteristics</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Unbounded message delay:</strong> No guarantee on message delivery time</li>
        <li><strong>Variable process speed:</strong> Processes may execute at any speed</li>
        <li><strong>No global clock:</strong> No synchronized time reference</li>
        <li><strong>Cannot distinguish slow from failed:</strong> Timeouts may be misleading</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Synchronous</th>
            <th className="p-3 border">Asynchronous</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Message Delay</td>
            <td className="p-3 border">Bounded</td>
            <td className="p-3 border">Unbounded</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Detection</td>
            <td className="p-3 border">Perfect (using timeouts)</td>
            <td className="p-3 border">Imperfect</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Algorithm Design</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Realism</td>
            <td className="p-3 border">Less realistic</td>
            <td className="p-3 border">More realistic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consensus</td>
            <td className="p-3 border">Solvable</td>
            <td className="p-3 border">Impossible (FLP result)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Passing Semantics</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Blocking (Synchronous) Communication:
┌────────────────────────────────────────┐
│ Sender                      Receiver   │
│   │                            │       │
│   │──── send() ────────────────►       │
│   │     [BLOCKED]              │       │
│   │                     receive()      │
│   │◄──── ack ──────────────────│       │
│   │     [UNBLOCKED]            │       │
│   │                            │       │
│ Sender waits until receiver gets msg   │
└────────────────────────────────────────┘

Non-blocking (Asynchronous) Communication:
┌────────────────────────────────────────┐
│ Sender                      Receiver   │
│   │                            │       │
│   │──── send() ─────────►buffer│       │
│   │     [CONTINUES]            │       │
│   │     ...                    │       │
│   │     (other work)    receive()      │
│   │                            │       │
│ Sender continues immediately           │
└────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FLP Impossibility Result</h2>

    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Fischer, Lynch, and Paterson (1985)</strong> proved that in a
        purely asynchronous system, it is impossible to solve consensus if even
        one process can fail. This fundamental result shapes the design of
        distributed algorithms.
      </p>
      <p className="mt-4 leading-relaxed">
        Practical systems work around this by:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>Using partial synchrony assumptions</li>
        <li>Employing randomized algorithms</li>
        <li>Using failure detectors</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Synchronous systems have bounded delays and synchronized clocks</li>
        <li>Asynchronous systems make no timing assumptions</li>
        <li>Real systems are typically partially synchronous</li>
        <li>Asynchronous model is more realistic but harder to work with</li>
        <li>FLP result proves consensus is impossible in pure async systems</li>
      </ul>
    </div>
  </div>
);

export default SyncVsAsync;
