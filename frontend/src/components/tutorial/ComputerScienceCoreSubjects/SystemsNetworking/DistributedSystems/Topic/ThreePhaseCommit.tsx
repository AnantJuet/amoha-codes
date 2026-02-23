import React from "react";

const ThreePhaseCommit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Three-Phase Commit Protocol (3PC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Three-Phase Commit (3PC) is an extension of the Two-Phase Commit protocol
      designed to avoid the blocking problem. By adding an extra phase, 3PC
      allows participants to make progress even if the coordinator fails,
      though it comes with increased message complexity.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why 3PC?</h2>
    <p className="text-lg leading-relaxed mt-2">
      In 2PC, when the coordinator fails after participants vote YES but before
      announcing the decision, participants are blocked indefinitely. 3PC
      introduces a pre-commit phase that allows participants to recover
      independently from coordinator failures.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Three Phases</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Phase 1</td>
            <td className="p-3 border">CanCommit (Voting)</td>
            <td className="p-3 border">
              Coordinator asks if participants can commit; they vote YES/NO
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phase 2</td>
            <td className="p-3 border">PreCommit</td>
            <td className="p-3 border">
              If all voted YES, coordinator sends PreCommit; participants prepare
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phase 3</td>
            <td className="p-3 border">DoCommit</td>
            <td className="p-3 border">
              Coordinator sends final commit; participants commit and acknowledge
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">3PC Protocol Flow</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three-Phase Commit Flow (Success Case):

Coordinator          Participant A        Participant B
     │                    │                    │
     │                    │                    │
     │    PHASE 1: CanCommit (Voting)         │
     │────canCommit?─────▶│                    │
     │────canCommit?──────│───────────────────▶│
     │                    │                    │
     │◀───YES─────────────│                    │
     │◀───YES─────────────│────────────────────│
     │                    │                    │
     │    PHASE 2: PreCommit                  │
     │────preCommit──────▶│                    │
     │────preCommit───────│───────────────────▶│
     │                    │                    │
     │   (participants    │   (participants    │
     │    prepare but     │    prepare but     │
     │    don't commit)   │    don't commit)   │
     │                    │                    │
     │◀───ACK─────────────│                    │
     │◀───ACK─────────────│────────────────────│
     │                    │                    │
     │    PHASE 3: DoCommit                   │
     │────doCommit───────▶│                    │
     │────doCommit────────│───────────────────▶│
     │                    │                    │
     │   (commit local)   │   (commit local)   │
     │                    │                    │
     │◀───haveCommitted───│                    │
     │◀───haveCommitted───│────────────────────│
     │                    │                    │
     ▼                    ▼                    ▼
Transaction Committed Successfully`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3PC State Machine</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Participant State Machine:

              ┌────────────┐
              │   INIT     │◀──────────────────────────────┐
              └─────┬──────┘                               │
                    │ canCommit?                           │
                    ▼                                      │
              ┌────────────┐                               │
        ┌─────│  WAITING   │─────┐                        │
        │     └────────────┘     │                        │
   vote NO                  vote YES                      │
        │                        │                        │
        ▼                        ▼                        │
  ┌────────────┐          ┌────────────┐                  │
  │  ABORTED   │          │  PREPARED  │                  │
  └────────────┘          └─────┬──────┘                  │
                                │ preCommit               │
                                ▼                         │
                          ┌────────────┐                  │
                ┌─────────│ PRECOMMIT  │──────────┐       │
                │         └────────────┘          │       │
           doCommit                           timeout     │
                │                                 │       │
                ▼                                 ▼       │
          ┌────────────┐                    ┌────────────┐│
          │ COMMITTED  │                    │(recovery)  ├┘
          └────────────┘                    └────────────┘

Key Insight: In PRECOMMIT state, participant knows:
- All participants voted YES
- Coordinator decided to commit
- Safe to commit on timeout (non-blocking!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How 3PC Avoids Blocking</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">2PC Blocking Scenario</h3>
        <p className="leading-relaxed mb-2">
          Coordinator crashes after receiving all YES votes but before
          sending decision.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Participants in PREPARED state</li>
          <li>Cannot commit (maybe someone voted NO)</li>
          <li>Cannot abort (coordinator might commit)</li>
          <li>BLOCKED until coordinator recovers</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">3PC Non-Blocking</h3>
        <p className="leading-relaxed mb-2">
          PreCommit phase ensures all participants know the decision
          before committing.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Participants in PRECOMMIT state</li>
          <li>Know all voted YES</li>
          <li>Know coordinator decided commit</li>
          <li>Can safely commit on timeout</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Scenarios</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State When Failure</th>
            <th className="p-3 border">Recovery Action</th>
            <th className="p-3 border">Rationale</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Any in INIT/WAITING</td>
            <td className="p-3 border">ABORT</td>
            <td className="p-3 border">No one has committed yet</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Any in PREPARED</td>
            <td className="p-3 border">ABORT</td>
            <td className="p-3 border">No one received preCommit, safe to abort</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">All in PRECOMMIT</td>
            <td className="p-3 border">COMMIT</td>
            <td className="p-3 border">All voted YES and got preCommit</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Any COMMITTED</td>
            <td className="p-3 border">COMMIT</td>
            <td className="p-3 border">Must honor committed participant</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">3PC Termination Protocol</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Termination Protocol (when coordinator fails):

Surviving participants elect new coordinator:

1. New coordinator queries all participants for state

2. Decision rules:
   ┌────────────────────────────────────────────────────────┐
   │ If any participant is COMMITTED → COMMIT all          │
   │ If any participant is ABORTED → ABORT all             │
   │ If all participants are PRECOMMIT → COMMIT all        │
   │ If any participant is INIT or WAITING → ABORT all     │
   │ If any participant is PREPARED (not PRECOMMIT)        │
   │   and none are COMMITTED → ABORT all                  │
   └────────────────────────────────────────────────────────┘

Example:
  Participant states: [PRECOMMIT, PRECOMMIT, PRECOMMIT]

  New coordinator: "All in PRECOMMIT, sending doCommit"

  All participants commit successfully!

Key: The extra PRECOMMIT state provides enough information
     for recovery without coordinator.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC vs 3PC Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">2PC</th>
            <th className="p-3 border">3PC</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Message Rounds</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Messages per Participant</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">6</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (in synchronous system)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Partitions</td>
            <td className="p-3 border">Safe</td>
            <td className="p-3 border">Can violate safety</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">3PC Limitations</h2>

    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Network Partition Problem</h3>
      <p className="leading-relaxed mb-4">
        3PC can violate safety in the presence of network partitions. If the
        network splits, different partitions might reach different decisions.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Network Partition Scenario:

                    NETWORK PARTITION
                          ╳
  ┌─────────────────┐     │     ┌─────────────────┐
  │  Partition A    │     │     │  Partition B    │
  │                 │     │     │                 │
  │  Coordinator    │     │     │  Participant C  │
  │  Participant A  │     │     │  (in PREPARED)  │
  │  (in PRECOMMIT) │     │     │                 │
  │                 │     │     │                 │
  │  Times out →    │     │     │  Elect new     │
  │  COMMIT!        │     │     │  coordinator   │
  │                 │     │     │  See PREPARED  │
  │                 │     │     │  → ABORT!      │
  └─────────────────┘     │     └─────────────────┘

Result: A commits, C aborts → INCONSISTENT!

This is why 3PC requires a synchronous system model
(bounded message delays) for correctness.`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Usage</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">When to Use 3PC?</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>
          <strong>Use 2PC:</strong> When network partitions are possible
          (most real systems), and blocking is acceptable
        </li>
        <li>
          <strong>Use 3PC:</strong> In synchronous systems with bounded
          delays, where blocking is unacceptable
        </li>
        <li>
          <strong>Modern Alternative:</strong> Paxos-based or Raft-based
          consensus for partition-tolerant atomic commit
        </li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>3PC adds PreCommit phase between voting and commit</li>
        <li>PreCommit ensures participants know the decision before committing</li>
        <li>3PC is non-blocking in synchronous systems</li>
        <li>Network partitions can cause inconsistency in 3PC</li>
        <li>3PC requires 3 message rounds vs 2 for 2PC</li>
        <li>Practical systems often prefer 2PC or consensus protocols</li>
        <li>The termination protocol enables recovery without coordinator</li>
      </ul>
    </div>
  </div>
);

export default ThreePhaseCommit;
