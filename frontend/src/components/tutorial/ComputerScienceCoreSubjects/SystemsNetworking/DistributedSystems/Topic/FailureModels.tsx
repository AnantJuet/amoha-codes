import React from "react";

const FailureModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Failure Models in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Failure models describe the types of failures that can occur in a
      distributed system. Understanding these models is crucial for designing
      fault-tolerant systems and choosing appropriate recovery mechanisms.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Failures</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Severity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Crash Failure</td>
            <td className="p-3 border">
              Process halts and does not perform any further actions
            </td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Omission Failure</td>
            <td className="p-3 border">
              Process fails to send or receive messages
            </td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timing Failure</td>
            <td className="p-3 border">
              Process responds too early or too late
            </td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Failure</td>
            <td className="p-3 border">
              Process produces incorrect response
            </td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Byzantine Failure</td>
            <td className="p-3 border">
              Process behaves arbitrarily (may be malicious)
            </td>
            <td className="p-3 border">Highest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Hierarchy</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Severity Hierarchy:

        Byzantine (Arbitrary)
              │
              ▼
        ┌─────────────┐
        │  Response   │  ← Incorrect values/states
        └─────────────┘
              │
              ▼
        ┌─────────────┐
        │   Timing    │  ← Too early/late
        └─────────────┘
              │
              ▼
        ┌─────────────┐
        │  Omission   │  ← Messages not sent/received
        └─────────────┘
              │
              ▼
        ┌─────────────┐
        │   Crash     │  ← Process stops (fail-stop)
        └─────────────┘

Each level includes all failures below it.
Byzantine includes all possible failure modes.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Crash vs Fail-Stop</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Crash Failure</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Process stops executing</li>
          <li>Other processes may not know it failed</li>
          <li>Difficult to detect</li>
          <li>May lose state</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fail-Stop Failure</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Process stops and notifies others</li>
          <li>Failure is detected reliably</li>
          <li>Easier to handle</li>
          <li>Ideal but often unrealistic</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Omission Failures</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Send Omission</h3>
        <p className="leading-relaxed">
          Process fails to send a message that it was supposed to send.
          The message is lost between the process and the network.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Receive Omission</h3>
        <p className="leading-relaxed">
          Process fails to receive a message that was sent to it.
          The message is lost between the network and the process.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Mechanisms</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Checkpointing:</strong> Periodically save process state for recovery</li>
      <li><strong>Message Logging:</strong> Record messages to replay after recovery</li>
      <li><strong>Replication:</strong> Maintain multiple copies of data/services</li>
      <li><strong>Failover:</strong> Switch to backup system on failure</li>
      <li><strong>Consensus Protocols:</strong> Agree on values despite failures</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Failure models form a hierarchy from crash to Byzantine</li>
        <li>More severe failures are harder to tolerate</li>
        <li>Crash failures are the most common assumption</li>
        <li>Byzantine failures require special protocols (BFT)</li>
        <li>Understanding failure models is key to fault-tolerant design</li>
      </ul>
    </div>
  </div>
);

export default FailureModels;
