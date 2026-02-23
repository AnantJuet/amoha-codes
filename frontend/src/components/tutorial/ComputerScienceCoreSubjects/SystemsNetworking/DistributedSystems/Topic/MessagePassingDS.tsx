import React from "react";

const MessagePassingDS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Passing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Message passing is the fundamental communication mechanism in distributed
      systems. It enables processes running on different machines to exchange
      data and coordinate their actions through explicit send and receive
      operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Message Passing Primitives</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">send(destination, message)</h3>
        <p className="leading-relaxed">
          Transmits a message to the specified destination process. May be
          blocking (synchronous) or non-blocking (asynchronous).
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">receive(source, message)</h3>
        <p className="leading-relaxed">
          Receives a message from a specified source or any source. May block
          until a message arrives or return immediately.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Message Passing</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Unicast</td>
            <td className="p-3 border">One sender to one receiver</td>
            <td className="p-3 border">Direct communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multicast</td>
            <td className="p-3 border">One sender to multiple receivers</td>
            <td className="p-3 border">Group updates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Broadcast</td>
            <td className="p-3 border">One sender to all processes</td>
            <td className="p-3 border">System announcements</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous vs Asynchronous</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Synchronous Message Passing:
┌────────────────────────────────────────────┐
│ Process A                      Process B   │
│    │                              │        │
│    │──── send(B, msg) ───────────►│        │
│    │     [BLOCKED]                │        │
│    │                      recv(A, msg)     │
│    │◄───── ack ──────────────────│        │
│    │     [CONTINUES]              │        │
│ Both processes synchronized at message     │
└────────────────────────────────────────────┘

Asynchronous Message Passing:
┌────────────────────────────────────────────┐
│ Process A                      Process B   │
│    │                              │        │
│    │──── send(B, msg) ────►[BUFFER]        │
│    │     [CONTINUES]              │        │
│    │     ...                      │        │
│    │     (other work)     recv(msg)        │
│    │                              │        │
│ Sender continues without waiting           │
└────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Ordering</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">FIFO Order</h3>
        <p className="leading-relaxed">
          Messages from same sender are received in the order they were sent.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Causal Order</h3>
        <p className="leading-relaxed">
          If message m1 causally precedes m2, then m1 is delivered before m2.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Total Order</h3>
        <p className="leading-relaxed">
          All processes receive all messages in the same order.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reliability Guarantees</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>At-most-once:</strong> Message delivered zero or one time</li>
      <li><strong>At-least-once:</strong> Message delivered one or more times</li>
      <li><strong>Exactly-once:</strong> Message delivered exactly one time</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Message passing is the primary communication mechanism in distributed systems</li>
        <li>Can be synchronous (blocking) or asynchronous (non-blocking)</li>
        <li>Supports unicast, multicast, and broadcast communication</li>
        <li>Message ordering guarantees affect application design</li>
        <li>Reliability semantics determine how failures are handled</li>
      </ul>
    </div>
  </div>
);

export default MessagePassingDS;
