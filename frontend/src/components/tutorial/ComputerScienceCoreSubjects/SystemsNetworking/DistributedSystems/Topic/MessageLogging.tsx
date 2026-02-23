import React from "react";

const MessageLogging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Message Logging in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Message logging is a fault tolerance technique that records messages
      exchanged between processes. Combined with checkpointing, it enables
      recovery by replaying logged messages from the last checkpoint,
      reducing the amount of lost work after a failure.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Message Logging?</h2>
    <p className="text-lg leading-relaxed mt-2">
      Checkpointing alone may lose significant work between checkpoints.
      Message logging captures the computation that occurred after the
      last checkpoint, allowing it to be replayed during recovery.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Checkpoint Only vs Checkpoint + Message Logging:

Checkpoint Only:
  ──────○────────────────────────────╳
        C1                         failure
        │                           │
        └───────── lost work ───────┘

Checkpoint + Message Logging:
  ──────○────m1───m2───m3───m4──────╳
        C1   │     │    │    │    failure
        │    ▼     ▼    ▼    ▼
        │  ┌─────────────────────┐
        │  │   Message Log       │
        │  │ m1, m2, m3, m4     │
        │  └─────────────────────┘
        │           │
        └───────────┴── Recovery: Restore C1, replay m1-m4

Result: No work lost (deterministic replay)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Logging Approaches</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Pessimistic</td>
            <td className="p-3 border">
              Log synchronously before processing
            </td>
            <td className="p-3 border">Simple recovery, high overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optimistic</td>
            <td className="p-3 border">
              Log asynchronously in background
            </td>
            <td className="p-3 border">Low overhead, complex recovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Causal</td>
            <td className="p-3 border">
              Log when causally necessary
            </td>
            <td className="p-3 border">Balanced overhead and recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pessimistic Logging</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Synchronous Message Logging</h3>
      <p className="leading-relaxed mb-4">
        Each message is logged to stable storage before it is processed.
        This ensures that all processed messages can be replayed during recovery.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Pessimistic Logging Flow:

Sender                  Receiver              Stable Storage
   │                        │                       │
   │────message────────────▶│                       │
   │                        │                       │
   │                        │───log(message)───────▶│
   │                        │                       │
   │                        │◀───ack────────────────│
   │                        │                       │
   │                        │ process message       │
   │                        │                       │

Properties:
  + Simple recovery: replay all logged messages
  + No orphan processes
  + No domino effect
  - High latency (synchronous log)
  - Bottleneck on stable storage`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimistic Logging</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Asynchronous Message Logging</h3>
      <p className="leading-relaxed mb-4">
        Messages are logged asynchronously in the background. Processing
        continues without waiting for the log to complete.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Optimistic Logging Flow:

Sender                  Receiver              Stable Storage
   │                        │                       │
   │────message────────────▶│                       │
   │                        │                       │
   │                        │ process message       │
   │                        │ (immediately)         │
   │                        │                       │
   │                        │───log(message)───────▶│
   │                        │   (asynchronous)      │
   │                        │                       │

Properties:
  + Low latency (async log)
  + Better throughput
  - May lose unlogged messages on crash
  - Orphan processes possible
  - Complex recovery with rollbacks`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Orphan Processes</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Orphan Process Problem (Optimistic Logging):

P1: ────○───────────────────────╳
        C1          │         crash
                    │ m1 (not logged)
                    ▼
P2: ────○───────────────○─────────────
        C2.1       │    C2.2
                   │
             processed m1
             (in current state)

After P1 crashes and recovers to C1:
  - P1 has no record of sending m1
  - P2's state depends on m1
  - P2 is an "orphan" (depends on lost message)

Resolution:
  - P2 must roll back to before receiving m1
  - Or: track message dependencies and detect orphans`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Causal Logging</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Balanced Approach</h3>
      <p className="leading-relaxed mb-4">
        Causal logging ensures that a message is logged to stable storage
        before any message that causally depends on it is sent. This
        prevents orphans while reducing synchronous logging.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Causal Logging Rule:

Before sending message m2 that depends on m1:
  Ensure m1 (and all its dependencies) are logged

P1: ──────────────────m1──────────────────m2────────▶
                       │                   │
                       │ depends on        │
                       ▼                   │
P2: ──────────────────────────────────────▶│
                           ▲               │
                           │               │
                     m1 must be      only then
                     logged          send m2

Properties:
  + No orphans (dependencies always logged)
  + Lower overhead than pessimistic
  + Simpler recovery than optimistic
  - Tracks causal dependencies (piggybacking)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Logging Protocols</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Pessimistic</th>
            <th className="p-3 border">Optimistic</th>
            <th className="p-3 border">Causal</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Runtime Overhead</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recovery Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Orphan Processes</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domino Effect</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Limited</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Output Commit</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sender-Based vs Receiver-Based Logging</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Sender-Based Logging</h3>
        <p className="leading-relaxed mb-2">
          Sender logs message before sending.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Message available at sender for replay</li>
          <li>Works well with volatile logging</li>
          <li>Receiver requests replay after crash</li>
          <li>Requires sender to be alive</li>
        </ul>
      </div>

      <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Receiver-Based Logging</h3>
        <p className="leading-relaxed mb-2">
          Receiver logs message after receiving.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Message logged at point of use</li>
          <li>Receiver can replay independently</li>
          <li>Additional stable storage writes</li>
          <li>More independent recovery</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Logging with Determinants</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Determinant-Based Logging:

Instead of logging entire messages, log "determinants":
  - Message ID
  - Sender process
  - Receive order
  - Non-deterministic choices

Example:
┌───────────────────────────────────────────────────┐
│ Full Message Log Entry:                           │
│   Source: P1                                      │
│   Dest: P2                                        │
│   Content: [1000 bytes of data]                   │
│   Timestamp: 1705401234567                        │
│   Seq: 42                                         │
│   Size: ~1020 bytes                               │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ Determinant Log Entry:                            │
│   Source: P1                                      │
│   Seq: 42                                         │
│   Receive_order: 7                                │
│   Size: ~20 bytes                                 │
└───────────────────────────────────────────────────┘

Recovery: Request message 42 from P1, process in order 7
Benefit: Much smaller log, but requires sender availability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combining Checkpointing and Logging</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Integrated Recovery Protocol:

Time: ──────────────────────────────────────────────────▶

P1: ─○──────────○──m1──m2──m3──m4──m5──m6──╳
     C1         C2  │   │   │   │   │   │  failure
                    ▼   ▼   ▼   ▼   ▼   ▼
                  ┌─────────────────────────┐
                  │      Message Log        │
                  │ m1, m2, m3, m4, m5, m6  │
                  └─────────────────────────┘

Recovery Steps:
1. Restore checkpoint C2
2. Replay messages m1 through m6 from log
3. Deterministic re-execution reaches pre-failure state

Garbage Collection:
  - After C2, can discard C1
  - After C2, can discard messages before C2
  - Keep: C2 + messages after C2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Consideration</th>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Log Storage</td>
            <td className="p-3 border">
              Logs can grow unbounded
            </td>
            <td className="p-3 border">Garbage collection after checkpoint</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Determinism</td>
            <td className="p-3 border">
              Non-deterministic operations
            </td>
            <td className="p-3 border">Log results of non-det operations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Output Commit</td>
            <td className="p-3 border">
              External outputs before crash
            </td>
            <td className="p-3 border">Delay output until logging complete</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recovery Time</td>
            <td className="p-3 border">
              Long message replay
            </td>
            <td className="p-3 border">More frequent checkpoints</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Message logging captures computation between checkpoints</li>
        <li>Pessimistic logging is safe but has high overhead</li>
        <li>Optimistic logging is fast but may create orphan processes</li>
        <li>Causal logging balances performance and recoverability</li>
        <li>Determinant logging reduces log size but needs sender</li>
        <li>Combine checkpointing and logging for practical recovery</li>
        <li>Non-deterministic operations must be specially handled</li>
      </ul>
    </div>
  </div>
);

export default MessageLogging;
