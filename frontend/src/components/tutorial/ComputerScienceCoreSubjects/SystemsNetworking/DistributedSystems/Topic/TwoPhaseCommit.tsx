import React from "react";

const TwoPhaseCommit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Two-Phase Commit Protocol (2PC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Two-Phase Commit (2PC) is a distributed algorithm that coordinates all
      participants in a distributed transaction to either commit or abort the
      transaction atomically. It ensures that all nodes agree on the outcome,
      providing atomicity across multiple systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem 2PC Solves</h2>
    <p className="text-lg leading-relaxed mt-2">
      In distributed transactions spanning multiple databases or services,
      we need to ensure that either all participants commit their local
      transactions or all abort. Partial commits would leave the system
      in an inconsistent state.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem Scenario:

Transfer $100 from Account A (Bank 1) to Account B (Bank 2)

Without Coordination:
  Bank 1: Deduct $100 from A  ✓
  Bank 2: Add $100 to B       ✗ (fails)

  Result: $100 lost! (inconsistent)

With 2PC:
  Either both succeed or both abort
  Money is never lost or created`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC Participants</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Responsibilities</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Coordinator</td>
            <td className="p-3 border">
              Single node that orchestrates the protocol
            </td>
            <td className="p-3 border">
              Send prepare/commit, collect votes, decide outcome
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Participants</td>
            <td className="p-3 border">
              Nodes that execute parts of the transaction
            </td>
            <td className="p-3 border">
              Prepare local transaction, vote, commit/abort on command
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Two Phases</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Phase 1: Prepare (Voting)</h3>
        <ol className="list-decimal list-inside leading-relaxed space-y-1">
          <li>Coordinator sends PREPARE to all participants</li>
          <li>Each participant prepares transaction locally</li>
          <li>Participant writes to durable log</li>
          <li>Participant votes YES (prepared) or NO (abort)</li>
        </ol>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Phase 2: Commit (Decision)</h3>
        <ol className="list-decimal list-inside leading-relaxed space-y-1">
          <li>Coordinator collects all votes</li>
          <li>If all YES: send COMMIT to all</li>
          <li>If any NO: send ABORT to all</li>
          <li>Participants execute decision and ACK</li>
        </ol>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC Protocol Flow</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Commit Flow (Success Case):

Coordinator          Participant A        Participant B
     │                    │                    │
     │────PREPARE────────▶│                    │
     │────PREPARE─────────│───────────────────▶│
     │                    │                    │
     │   (prepare local   │   (prepare local   │
     │    transaction)    │    transaction)    │
     │                    │                    │
     │◀───YES─────────────│                    │
     │◀───YES─────────────│────────────────────│
     │                    │                    │
     │  (all voted YES,   │                    │
     │   decide COMMIT)   │                    │
     │                    │                    │
     │────COMMIT─────────▶│                    │
     │────COMMIT──────────│───────────────────▶│
     │                    │                    │
     │   (commit local)   │   (commit local)   │
     │                    │                    │
     │◀───ACK─────────────│                    │
     │◀───ACK─────────────│────────────────────│
     │                    │                    │
     ▼                    ▼                    ▼
Transaction Committed Successfully`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC Abort Scenario</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Commit Flow (Abort Case):

Coordinator          Participant A        Participant B
     │                    │                    │
     │────PREPARE────────▶│                    │
     │────PREPARE─────────│───────────────────▶│
     │                    │                    │
     │   (prepare fails   │   (prepare OK)     │
     │    e.g., constraint│                    │
     │    violation)      │                    │
     │                    │                    │
     │◀───NO──────────────│                    │
     │◀───YES─────────────│────────────────────│
     │                    │                    │
     │  (received NO,     │                    │
     │   decide ABORT)    │                    │
     │                    │                    │
     │────ABORT──────────▶│                    │
     │────ABORT───────────│───────────────────▶│
     │                    │                    │
     │   (abort local)    │   (abort local)    │
     │                    │                    │
     │◀───ACK─────────────│                    │
     │◀───ACK─────────────│────────────────────│
     │                    │                    │
     ▼                    ▼                    ▼
Transaction Aborted (no changes made)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Participant State Machine</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Participant State Transitions:

                    ┌─────────┐
                    │  INIT   │
                    └────┬────┘
                         │ receive PREPARE
                         ▼
              ┌──────────┴──────────┐
              │                     │
        vote YES               vote NO
              │                     │
              ▼                     ▼
        ┌─────────┐           ┌─────────┐
        │ PREPARED│           │ ABORTED │
        └────┬────┘           └─────────┘
             │
    ┌────────┴────────┐
    │                 │
 COMMIT            ABORT
    │                 │
    ▼                 ▼
┌─────────┐     ┌─────────┐
│COMMITTED│     │ ABORTED │
└─────────┘     └─────────┘

Key: Once PREPARED, participant must wait for coordinator decision
     (the "uncertainty period")`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Coordinator State Machine</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Coordinator State Transitions:

                    ┌─────────┐
                    │  INIT   │
                    └────┬────┘
                         │ send PREPARE to all
                         ▼
                    ┌─────────┐
                    │ WAITING │
                    └────┬────┘
                         │
          ┌──────────────┴──────────────┐
          │                             │
     all YES                       any NO or timeout
          │                             │
          ▼                             ▼
    ┌───────────┐                 ┌───────────┐
    │ COMMITTING│                 │ ABORTING  │
    └─────┬─────┘                 └─────┬─────┘
          │ send COMMIT                 │ send ABORT
          ▼                             ▼
    ┌───────────┐                 ┌───────────┐
    │ COMMITTED │                 │ ABORTED   │
    └───────────┘                 └───────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Scenarios</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure</th>
            <th className="p-3 border">When</th>
            <th className="p-3 border">Resolution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Participant before PREPARE</td>
            <td className="p-3 border">Before voting</td>
            <td className="p-3 border">Coordinator times out, aborts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Participant after YES</td>
            <td className="p-3 border">In prepared state</td>
            <td className="p-3 border">Wait for coordinator recovery (BLOCKING)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordinator before decision</td>
            <td className="p-3 border">In waiting state</td>
            <td className="p-3 border">Participants blocked until recovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordinator after decision</td>
            <td className="p-3 border">Decision logged</td>
            <td className="p-3 border">Recover and resend decision</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Blocking Problem</h2>

    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">2PC is Blocking</h3>
      <p className="leading-relaxed mb-4">
        If the coordinator fails after participants have voted YES but before
        sending the decision, participants are stuck. They cannot safely
        commit (another might have voted NO) or abort (coordinator might
        have decided COMMIT).
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Blocking Scenario:

Coordinator              A (voted YES)      B (voted YES)
     │                        │                  │
     │◀──YES──────────────────│                  │
     │◀──YES──────────────────│──────────────────│
     │                        │                  │
     ╳ (crash)               │                  │
                              │                  │
                         BLOCKED!            BLOCKED!
                              │                  │
                    Cannot decide alone   Cannot decide alone

Both A and B must wait for coordinator to recover.
Resources (locks) held during this time.`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Logging Requirements</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Log Entry</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Before voting YES</td>
            <td className="p-3 border">PREPARE record</td>
            <td className="p-3 border">Know we voted YES after recovery</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Before sending decision</td>
            <td className="p-3 border">COMMIT/ABORT record</td>
            <td className="p-3 border">Coordinator remembers decision</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">After completing</td>
            <td className="p-3 border">END record</td>
            <td className="p-3 border">Transaction is fully done</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>2PC ensures atomic commit across distributed participants</li>
        <li>Phase 1 gathers votes; Phase 2 executes decision</li>
        <li>Coordinator is single point of failure and bottleneck</li>
        <li>2PC is a blocking protocol - participants can be stuck</li>
        <li>All participants must write to durable log before voting YES</li>
        <li>Once voted YES, participant cannot unilaterally abort</li>
        <li>3PC addresses blocking but adds complexity and messages</li>
      </ul>
    </div>
  </div>
);

export default TwoPhaseCommit;
