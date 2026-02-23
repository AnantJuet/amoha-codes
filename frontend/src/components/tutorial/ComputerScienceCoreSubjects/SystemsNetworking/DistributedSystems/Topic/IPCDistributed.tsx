import React from "react";

const IPCDistributed: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interprocess Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Interprocess Communication (IPC) in distributed systems enables processes
      running on different machines to exchange data and coordinate their actions.
      Unlike local IPC, distributed IPC must handle network latency, failures,
      and the absence of shared memory.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Distributed IPC</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Message Passing</td>
            <td className="p-3 border">
              Communication through explicit messages since no shared memory
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Synchronization</td>
            <td className="p-3 border">
              Can be synchronous (blocking) or asynchronous (non-blocking)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reliability</td>
            <td className="p-3 border">
              Must handle message loss, duplication, and ordering
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Addressing</td>
            <td className="p-3 border">
              Processes identified by network addresses and ports
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">IPC Mechanisms</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Message Passing</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>send() and receive() primitives</li>
          <li>Explicit data exchange</li>
          <li>Supports various protocols</li>
          <li>Can be point-to-point or multicast</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Remote Procedure Call</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Call remote functions like local</li>
          <li>Request-response pattern</li>
          <li>Abstracts communication details</li>
          <li>Examples: gRPC, XML-RPC</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Message Queuing</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Asynchronous messaging</li>
          <li>Decouples sender and receiver</li>
          <li>Persistent message storage</li>
          <li>Examples: RabbitMQ, Kafka</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Publish-Subscribe</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>One-to-many communication</li>
          <li>Topic-based filtering</li>
          <li>Loose coupling</li>
          <li>Event-driven systems</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Structure</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Message Format in Distributed IPC:

┌─────────────────────────────────────────────┐
│                MESSAGE                       │
├─────────────────────────────────────────────┤
│ HEADER                                       │
│  ├── Sender Address                         │
│  ├── Receiver Address                       │
│  ├── Message ID / Sequence Number           │
│  ├── Message Type                           │
│  └── Timestamp                              │
├─────────────────────────────────────────────┤
│ BODY                                         │
│  └── Data Payload (serialized)              │
├─────────────────────────────────────────────┤
│ CHECKSUM (for integrity)                    │
└─────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous vs Asynchronous IPC</h2>

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
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border">Sender blocks until received</td>
            <td className="p-3 border">Sender continues immediately</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Buffering</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required for storing messages</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Simpler to reason about</td>
            <td className="p-3 border">More complex programming model</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed IPC uses message passing (no shared memory)</li>
        <li>Must handle network failures and message ordering</li>
        <li>RPC provides transparent remote function calls</li>
        <li>Message queuing enables decoupled, reliable communication</li>
        <li>Choice of mechanism depends on application requirements</li>
      </ul>
    </div>
  </div>
);

export default IPCDistributed;
