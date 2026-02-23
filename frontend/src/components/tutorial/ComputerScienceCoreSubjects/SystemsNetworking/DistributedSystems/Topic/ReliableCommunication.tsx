import React from "react";

const ReliableCommunication: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reliable Communication in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Reliable communication ensures that messages are delivered correctly
      despite failures in the network or processes. This is fundamental to
      building fault-tolerant distributed systems where data integrity and
      consistency must be maintained.
    </p>

    <h2 className="text-3xl font-bold mt-8">Communication Failures</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Handling Mechanism</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Message Loss</td>
            <td className="p-3 border">
              Message never arrives at destination
            </td>
            <td className="p-3 border">Retransmission, acknowledgments</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Corruption</td>
            <td className="p-3 border">
              Message data is altered in transit
            </td>
            <td className="p-3 border">Checksums, error correction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Duplication</td>
            <td className="p-3 border">
              Same message delivered multiple times
            </td>
            <td className="p-3 border">Sequence numbers, deduplication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Reordering</td>
            <td className="p-3 border">
              Messages arrive out of order
            </td>
            <td className="p-3 border">Sequence numbers, buffering</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Point-to-Point Communication</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Reliable Point-to-Point Communication:

Sender                              Receiver
   │                                    │
   │─────Message (seq=1)───────────────▶│
   │                                    │
   │◀─────ACK (seq=1)───────────────────│
   │                                    │
   │─────Message (seq=2)────────×       │ (lost)
   │                                    │
   │       (timeout)                    │
   │                                    │
   │─────Message (seq=2)───────────────▶│ (retransmit)
   │                                    │
   │◀─────ACK (seq=2)───────────────────│
   │                                    │

Key Mechanisms:
1. Sequence numbers for ordering and deduplication
2. Acknowledgments to confirm receipt
3. Timeouts to detect losses
4. Retransmission for recovery`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reliable Broadcast Primitives</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Best-Effort Broadcast</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>No delivery guarantees if sender crashes</li>
          <li>Some receivers may get message, others not</li>
          <li>Simplest form of broadcast</li>
          <li>Sufficient for non-critical messages</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Reliable Broadcast</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>All-or-nothing delivery</li>
          <li>If one correct process delivers, all do</li>
          <li>Handles sender crashes</li>
          <li>No ordering guarantees</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Broadcast Properties</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Validity</td>
            <td className="p-3 border">
              If a correct process broadcasts m, it eventually delivers m
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Duplication</td>
            <td className="p-3 border">
              No message is delivered more than once
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Creation</td>
            <td className="p-3 border">
              No message is delivered unless it was broadcast
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Agreement</td>
            <td className="p-3 border">
              If one correct process delivers m, all correct processes deliver m
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reliable Broadcast Algorithm</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Eager Reliable Broadcast:

To broadcast(m):
  send m to all processes (including self)

Upon receive(m) from p:
  if m not already delivered:
    deliver(m)
    send m to all processes  ← key: forward to everyone

Example with sender crash:

Process A (sender)      B              C              D
     │                  │              │              │
     │────m────────────▶│              │              │
     │────m─────────────│─────────────▶│              │
     ╳ (crash)          │              │              │
                        │              │              │
                        │────m────────▶│              │
                        │────m─────────│─────────────▶│
                        │              │              │
                        │              │────m────────▶│
                        │◀───m─────────│              │
                        │              │◀───m─────────│
                        │              │              │

Despite A's crash, all surviving processes deliver m
(because B and C forward to D)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ordered Broadcast Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">FIFO Broadcast</td>
            <td className="p-3 border">
              Messages from same sender delivered in send order
            </td>
            <td className="p-3 border">Session-based communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causal Broadcast</td>
            <td className="p-3 border">
              Respects causality (if m1 causes m2, deliver m1 first)
            </td>
            <td className="p-3 border">Collaborative editing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total Order Broadcast</td>
            <td className="p-3 border">
              All processes deliver all messages in same order
            </td>
            <td className="p-3 border">State machine replication</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ordering Comparison</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ordering Examples:

FIFO Order:
  A sends: m1, m2
  B sends: m3

  Process C can deliver: m1, m3, m2 ✗ (violates FIFO from A)
                         m1, m2, m3 ✓
                         m3, m1, m2 ✓

Causal Order:
  A sends m1
  B receives m1, then sends m2 (m1 → m2)

  Process C must deliver m1 before m2

Total Order:
  A sends m1
  B sends m2 (concurrent)

  All processes must agree on order:
  Either all deliver [m1, m2] or all deliver [m2, m1]

Relationship:
┌────────────────────────────────────┐
│        Total Order Broadcast       │
│   ┌────────────────────────────┐   │
│   │    Causal Broadcast        │   │
│   │   ┌────────────────────┐   │   │
│   │   │   FIFO Broadcast   │   │   │
│   │   │   ┌────────────┐   │   │   │
│   │   │   │ Reliable   │   │   │   │
│   │   │   │ Broadcast  │   │   │   │
│   │   │   └────────────┘   │   │   │
│   │   └────────────────────┘   │   │
│   └────────────────────────────┘   │
└────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Total Order Broadcast Implementation</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Sequencer-Based Approach</h3>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Sequencer Assigns Total Order:

Process A                Sequencer              All Processes
    │                        │                       │
    │────broadcast(m)───────▶│                       │
    │                        │                       │
    │                        │─────(m, seq=42)──────▶│
    │                        │                       │
    │                        │      (all deliver     │
    │                        │      in seq order)    │

Sequencer maintains:
  next_sequence = 43

On broadcast(m):
  assign seq = next_sequence++
  send (m, seq) to all processes

On receive (m, seq):
  buffer m
  deliver all messages in sequence order

Trade-off: Sequencer is single point of failure`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Atomic Multicast</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Atomic Multicast to Groups:

Message m sent to groups G1 and G2:

  ┌─────────────────┐         ┌─────────────────┐
  │   Group G1      │         │   Group G2      │
  │  ┌───┐ ┌───┐   │         │  ┌───┐ ┌───┐   │
  │  │ A │ │ B │   │         │  │ C │ │ D │   │
  │  └───┘ └───┘   │         │  └───┘ └───┘   │
  └─────────────────┘         └─────────────────┘
         ▲                           ▲
         │                           │
         └──────────m────────────────┘

Requirements:
1. All members of G1 deliver m
2. All members of G2 deliver m
3. If m delivered before m' in G1,
   then m delivered before m' in G2 (if both go to both)

Used for: Distributed transactions across partitions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Reliable communication handles message loss, corruption, and duplication</li>
        <li>Reliable broadcast ensures all-or-nothing delivery semantics</li>
        <li>FIFO order preserves sender's message order</li>
        <li>Causal order respects happens-before relationships</li>
        <li>Total order ensures all processes see same message sequence</li>
        <li>Total order broadcast is equivalent to consensus</li>
        <li>Sequencer-based implementations have single point of failure</li>
      </ul>
    </div>
  </div>
);

export default ReliableCommunication;
