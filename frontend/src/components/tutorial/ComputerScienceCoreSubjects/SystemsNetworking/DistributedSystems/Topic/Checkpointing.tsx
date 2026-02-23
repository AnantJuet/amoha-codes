import React from "react";

const Checkpointing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Checkpointing in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Checkpointing is a fault tolerance technique that periodically saves
      the state of a process to stable storage. Upon failure, the process
      can recover by restoring its state from the most recent checkpoint,
      avoiding the need to restart from the beginning.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Checkpoint?</h2>
    <p className="text-lg leading-relaxed mt-2">
      A checkpoint is a snapshot of a process state at a specific point in
      time. It includes all information needed to restart the process from
      that point: memory contents, register values, open files, and
      communication state.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Checkpoint Concept:

Time →  ──────────────────────────────────────────────▶

Process: ────○────────○────────○────────╳
              C1        C2       C3     failure
              │         │        │
              ▼         ▼        ▼
         ┌────────┐ ┌────────┐ ┌────────┐
         │ State  │ │ State  │ │ State  │
         │ at C1  │ │ at C2  │ │ at C3  │
         └────────┘ └────────┘ └────────┘
              │         │        │
              └─────────┴────────┴─────▶ Stable Storage

Recovery: Restore from C3, continue execution
          (work between C3 and failure is lost)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Types</h2>

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
            <td className="p-3 border font-semibold">Uncoordinated</td>
            <td className="p-3 border">
              Each process checkpoints independently
            </td>
            <td className="p-3 border">Simple, low overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordinated</td>
            <td className="p-3 border">
              Processes synchronize checkpoints
            </td>
            <td className="p-3 border">Consistent global state</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Communication-Induced</td>
            <td className="p-3 border">
              Triggered by message patterns
            </td>
            <td className="p-3 border">Hybrid approach</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Incremental</td>
            <td className="p-3 border">
              Save only changes since last checkpoint
            </td>
            <td className="p-3 border">Reduce storage and time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Uncoordinated Checkpointing</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Advantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>No synchronization overhead</li>
          <li>Each process decides when to checkpoint</li>
          <li>Simple implementation</li>
          <li>Lower runtime overhead</li>
        </ul>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Disadvantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>May not form consistent global state</li>
          <li>Domino effect possible</li>
          <li>Complex recovery (find recovery line)</li>
          <li>May need to keep multiple checkpoints</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Uncoordinated Checkpoint Problem</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Domino Effect with Uncoordinated Checkpoints:

P1: ──○──────────○─────────────────╳
      C1.1       C1.2           failure
              ╱   │
         m1  ╱    │ m2
            ╱     ▼
P2: ────○──────────○────────────────
        C2.1      C2.2
        │     ╲
   m0   │      ╲ m3
        ▼       ╲
P3: ──────○───────────○─────────────
          C3.1        C3.2

Recovery attempt from latest checkpoints {C1.2, C2.2, C3.2}:
- m2: sent by P1 after C1.2, received by P2 before C2.2
  → P2 must roll back to C2.1 (orphan message)
- m3: sent by P2 after C2.1, received by P3 before C3.2
  → P3 must roll back to C3.1
- m1: sent by P2 before C2.1, received by P1 before C1.2
  → Okay
- m0: sent by P1 before C1.1, received by P2 before C2.1
  → P1 must roll back to C1.1

Final recovery line: {C1.1, C2.1, C3.1} - massive rollback!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Coordinated Checkpointing</h2>

    <p className="text-lg leading-relaxed mt-2">
      In coordinated checkpointing, all processes synchronize to create
      checkpoints at the same logical time, ensuring a consistent global state.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Coordinated Checkpointing:

Coordinator         Process A         Process B
     │                  │                  │
     │  PHASE 1: Prepare                   │
     │──prepare────────▶│                  │
     │──prepare─────────│─────────────────▶│
     │                  │                  │
     │  (take tentative │  (take tentative │
     │   checkpoint)    │   checkpoint)    │
     │                  │                  │
     │◀──ready──────────│                  │
     │◀──ready──────────│──────────────────│
     │                  │                  │
     │  PHASE 2: Commit                    │
     │──commit─────────▶│                  │
     │──commit──────────│─────────────────▶│
     │                  │                  │
     │  (make checkpoint│  (make checkpoint│
     │   permanent)     │   permanent)     │
     │                  │                  │

All checkpoints form consistent global state:
  - No orphan messages
  - No lost messages
  - Single recovery line`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chandy-Lamport Algorithm</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Distributed Snapshot Algorithm</h3>
      <p className="leading-relaxed mb-4">
        The Chandy-Lamport algorithm captures a consistent global state
        without stopping execution, using marker messages.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Chandy-Lamport Algorithm:

1. Initiator saves local state
2. Sends marker on all outgoing channels
3. On receiving first marker on channel c:
   - Save local state
   - Start recording messages on other channels
   - Send marker on all outgoing channels
4. On receiving marker on channel c (not first):
   - Stop recording on c
   - Messages recorded on c are part of channel state

Example:
        ┌─────┐  marker  ┌─────┐
        │  A  │─────────▶│  B  │
        └─────┘          └─────┘
           │                │
    save   │                │ save state
    state  │                │ record incoming
           │                │ send marker
           ▼                ▼
    ┌───────────┐     ┌───────────┐
    │ State A   │     │ State B   │
    │ Channel   │     │ Channel   │
    │ states    │     │ states    │
    └───────────┘     └───────────┘

Global state = Union of all local states and channel states`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Overhead</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Overhead Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border">
              Time to save checkpoint
            </td>
            <td className="p-3 border">Incremental, async I/O</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Storage</td>
            <td className="p-3 border">
              Space for checkpoint data
            </td>
            <td className="p-3 border">Compression, incremental</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CPU</td>
            <td className="p-3 border">
              Processing for serialization
            </td>
            <td className="p-3 border">Copy-on-write, background</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network</td>
            <td className="p-3 border">
              Coordination messages
            </td>
            <td className="p-3 border">Non-blocking protocols</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Optimization Techniques</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Copy-on-Write</h3>
        <p className="leading-relaxed">
          Instead of copying all memory, mark pages as read-only. Only copy
          pages when they are modified, allowing checkpoint to proceed
          while process continues.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Incremental Checkpointing</h3>
        <p className="leading-relaxed">
          Only save pages that changed since the last checkpoint. Requires
          tracking dirty pages but significantly reduces checkpoint size
          and time.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Incremental Checkpointing</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Incremental Checkpoint Example:

Full Checkpoint C1:
┌──────────────────────────────────────────────────────┐
│ Page 1 │ Page 2 │ Page 3 │ Page 4 │ Page 5 │ Page 6 │
└──────────────────────────────────────────────────────┘
   100KB    100KB    100KB    100KB    100KB    100KB
   Total: 600KB

Between C1 and C2, only Pages 2 and 5 changed.

Incremental Checkpoint C2:
┌──────────────────────────────────────────────────────┐
│ Page 2' │ Page 5' │ Metadata                         │
└──────────────────────────────────────────────────────┘
   100KB     100KB      1KB
   Total: 201KB (vs 600KB for full)

Recovery: Apply C1, then apply C2 changes

Trade-off:
  + Faster checkpoints, less storage
  - Slower recovery (must apply chain)
  - Must keep checkpoint chain intact`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Interval Selection</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimal Checkpoint Interval:

Too Frequent:
  ┌─○─○─○─○─○─○─○─○─○─○─╳
  High overhead, little work between checkpoints

Too Infrequent:
  ┌───────────────────○─────────────────────╳
  Low overhead, but much work lost on failure

Optimization Model:
  Total cost = Checkpoint cost + Recovery cost

  Let:
    C = cost of one checkpoint
    R = cost of recovery
    T = checkpoint interval
    λ = failure rate

  Expected cost per unit time:
    E = C/T + λ * (R + T/2)
          │           │
    checkpoint    recovery + lost work
    overhead

  Optimal T = sqrt(2C/λ)

Example:
  C = 10 seconds (checkpoint time)
  λ = 1/3600 (one failure per hour)

  Optimal T = sqrt(2 * 10 * 3600) = 268 seconds ≈ 4.5 minutes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Checkpoints save process state for failure recovery</li>
        <li>Uncoordinated checkpoints may suffer from domino effect</li>
        <li>Coordinated checkpoints ensure consistent global state</li>
        <li>Chandy-Lamport algorithm captures snapshots without stopping</li>
        <li>Incremental checkpoints reduce overhead by saving only changes</li>
        <li>Copy-on-write allows checkpoint while process continues</li>
        <li>Optimal checkpoint interval balances overhead and recovery cost</li>
      </ul>
    </div>
  </div>
);

export default Checkpointing;
