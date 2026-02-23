import React from "react";

const RecoveryTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Recovery Techniques in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Recovery techniques enable distributed systems to restore their state
      after failures and continue operating correctly. These techniques are
      essential for building resilient systems that can survive crashes,
      network failures, and other disruptions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Recovery Strategies Overview</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Recovery Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Backward Recovery</td>
            <td className="p-3 border">
              Roll back to a previous correct state
            </td>
            <td className="p-3 border">Checkpointing, logging</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Forward Recovery</td>
            <td className="p-3 border">
              Continue from current state, fix errors
            </td>
            <td className="p-3 border">Error correction, redundancy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compensation</td>
            <td className="p-3 border">
              Execute compensating actions to undo effects
            </td>
            <td className="p-3 border">Sagas, compensating transactions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Backward vs Forward Recovery</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Backward Recovery</h3>
        <p className="leading-relaxed mb-2">
          Return system to a previously saved correct state.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Requires periodic state saves (checkpoints)</li>
          <li>May lose work done after checkpoint</li>
          <li>General-purpose, works for any failure</li>
          <li>Commonly used in databases</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Forward Recovery</h3>
        <p className="leading-relaxed mb-2">
          Continue execution from current state with corrections.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Requires knowledge of possible errors</li>
          <li>No work lost (if successful)</li>
          <li>Failure-specific handling needed</li>
          <li>Used in real-time systems</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Visualization</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery Approaches:

Time →  ────────────────────────────────────────────────▶

Backward Recovery:
         checkpoint        failure
              │                │
    S0 ──────►S1 ─────────────►╳
              │                │
              └────────────────┘ rollback to S1
                               │
                    continue from S1

Forward Recovery:
                           failure
                              │
    S0 ────────────────────►╳─┬─────────►S'
                              │
                         error correction
                         applied to reach S'

Key:
  S0, S1 = System states
  ╳ = Failure point
  S' = Corrected state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stable Storage</h2>

    <p className="text-lg leading-relaxed mt-2">
      Recovery requires stable storage that survives failures. Stable storage
      abstracts away the details of achieving durability through replication
      or other techniques.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stable Storage Hierarchy:

┌─────────────────────────────────────────────────────────┐
│                  Stable Storage                          │
│   (conceptually never loses data)                       │
│                                                          │
│   Implementation:                                        │
│   ┌──────────────────┐    ┌──────────────────┐          │
│   │   Disk 1         │    │   Disk 2         │          │
│   │   (mirrored)     │◄──▶│   (mirrored)     │          │
│   └──────────────────┘    └──────────────────┘          │
│              │                     │                     │
│              └──────────┬──────────┘                     │
│                         │                                │
│                  Write Protocol:                         │
│                  1. Write to Disk 1                      │
│                  2. Write to Disk 2                      │
│                  3. Verify both writes                   │
│                                                          │
│                  Read Protocol:                          │
│                  1. Read from Disk 1                     │
│                  2. If error, read from Disk 2          │
│                  3. Repair inconsistencies               │
└─────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery in Distributed Transactions</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Recovery Action</th>
            <th className="p-3 border">Mechanism</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Crash before commit</td>
            <td className="p-3 border">Abort transaction</td>
            <td className="p-3 border">Undo log entries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Crash after commit</td>
            <td className="p-3 border">Redo transaction</td>
            <td className="p-3 border">Redo log entries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Participant failure (2PC)</td>
            <td className="p-3 border">Query coordinator</td>
            <td className="p-3 border">Recovery protocol</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordinator failure (2PC)</td>
            <td className="p-3 border">Wait or elect new</td>
            <td className="p-3 border">Termination protocol</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARIES Recovery Algorithm</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Algorithm for Recovery and Isolation Exploiting Semantics</h3>
      <p className="leading-relaxed mb-4">
        ARIES is a widely-used recovery algorithm that combines undo and redo
        logging with write-ahead logging (WAL).
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`ARIES Recovery Phases:

1. ANALYSIS Phase:
   - Scan log from last checkpoint
   - Identify dirty pages and active transactions
   - Build transaction table and dirty page table

2. REDO Phase:
   - Repeat history: redo all logged operations
   - Start from oldest LSN in dirty page table
   - Brings database to state at crash time

3. UNDO Phase:
   - Undo uncommitted transactions
   - Process in reverse chronological order
   - Write compensation log records (CLRs)

Timeline:
   ──────────────────────────────────────────▶
           │            │          │    ╳
      Checkpoint    Oldest      Last   Crash
                   dirty LSN    LSN

   Analysis: [checkpoint ──────────────▶ crash]
   Redo:     [oldest dirty LSN ────────▶ crash]
   Undo:     [crash ◀──────────── uncommitted txns]`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Saga Pattern for Long Transactions</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Saga: Sequence of Local Transactions with Compensations

Example: Book a Trip

Forward Flow (success):
  T1: Book Flight    ──────────────────────────────────▶
  T2: Book Hotel        ──────────────────────────────▶
  T3: Book Car              ──────────────────────────▶
  T4: Charge Card               ─────────────────────▶

Compensation Flow (T3 fails):
  T1: Book Flight    ──────────────────────────────────▶
  T2: Book Hotel        ──────────────────────────────▶
  T3: Book Car              ────╳ (fails)
                                │
  C2: Cancel Hotel   ◀──────────┤ (compensate T2)
  C1: Cancel Flight  ◀──────────┘ (compensate T1)

Saga Coordination:
┌─────────────────────────────────────────────────────┐
│  Choreography: Events trigger next step            │
│  (decentralized, services react to events)         │
│                                                     │
│  Orchestration: Central coordinator directs flow   │
│  (centralized, easier to understand/manage)        │
└─────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Coordination</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Orphan Messages</td>
            <td className="p-3 border">
              Messages from rolled-back sender
            </td>
            <td className="p-3 border">Coordinated checkpointing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lost Messages</td>
            <td className="p-3 border">
              Messages to rolled-back receiver
            </td>
            <td className="p-3 border">Message logging</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Domino Effect</td>
            <td className="p-3 border">
              Cascading rollbacks across processes
            </td>
            <td className="p-3 border">Consistent global checkpoints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Livelock</td>
            <td className="p-3 border">
              Endless recovery-failure cycles
            </td>
            <td className="p-3 border">Limit rollback depth</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domino Effect Illustration</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Domino Effect (Cascading Rollback):

Process P1:   ○─────○─────○──────────○─────╳
              C1    │     C2         │    failure
                    │m1              │m3
                    ▼                ▼
Process P2:   ○──────────○─────○─────────────────
              C3         C4   │C5
                              │m2
                              ▼
Process P3:   ○─────────────────○────────────────
              C6                C7

Recovery attempt:
1. P1 crashes, rolls back to C2
2. But m3 was sent after C2 → P2 must roll back
3. P2 rolls back to C5, but m2 was sent after C5
4. P3 must roll back to before receiving m2
5. This cascades back...

Worst case: All processes roll back to initial state!

Solution: Coordinated checkpoints ensure consistency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Line</h2>

    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Consistent Global State</h3>
      <p className="leading-relaxed mb-4">
        A recovery line is a consistent cut across all processes that forms
        a valid global state. All processes can roll back to this line
        without inconsistencies.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Finding Recovery Line:

P1: ──○───────○────────────╳
      C1.1    C1.2
              │
P2: ────○─────│──○─────────
        C2.1  │  C2.2
              │
P3: ──────○───│────○───────
          C3.1│    C3.2

Valid Recovery Line: {C1.2, C2.1, C3.1}
  - No message crosses the line inconsistently
  - All processes have consistent view

Invalid Line: {C1.1, C2.2, C3.1}
  - Message from P1(after C1.1) to P2(before C2.2)
    would be lost after recovery`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Backward recovery rolls back; forward recovery continues with corrections</li>
        <li>Stable storage is essential for durable state preservation</li>
        <li>ARIES uses analysis-redo-undo phases for database recovery</li>
        <li>Sagas use compensating transactions for long-running operations</li>
        <li>The domino effect can cause cascading rollbacks</li>
        <li>Recovery lines define consistent global states for rollback</li>
        <li>Coordinated checkpointing prevents orphan messages</li>
      </ul>
    </div>
  </div>
);

export default RecoveryTechniques;
