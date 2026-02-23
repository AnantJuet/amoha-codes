import React from "react";

const DistributedCommit: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Commit Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed commit protocols ensure that all participants in a distributed
      transaction reach a consistent decision to either commit or abort. These protocols
      address the fundamental challenge of achieving atomicity across multiple nodes
      that can fail independently. The most widely used protocols are Two-Phase Commit
      (2PC) and Three-Phase Commit (3PC), each with different trade-offs between
      simplicity, performance, and fault tolerance.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Atomic Commit Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Atomic Commit Problem:

All participants must reach the SAME decision:
Either ALL COMMIT or ALL ABORT

Requirements:
1. AGREEMENT: All participants decide the same value
2. VALIDITY: If all vote YES, decision is COMMIT
             If any votes NO, decision is ABORT
3. TERMINATION: All non-failed participants eventually decide

Challenge:
+----------+                    +----------+
| Node A   |  -- Network --    | Node B   |
| Commit?  |       X           | Commit?  |
+----------+      FAIL!        +----------+

If communication fails:
- Node A might commit
- Node B might abort
- INCONSISTENT STATE!

Solution: Commit Protocols (2PC, 3PC, Paxos Commit)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Commit (2PC)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Commit Protocol:

Participants: Coordinator (C), Participants (P1, P2, ..., Pn)

PHASE 1: VOTING (Prepare Phase)
+-------------+                    +-------------+
| Coordinator |                    | Participant |
+-------------+                    +-------------+
      |                                   |
      |  -------- PREPARE ------->        |
      |                                   |
      |                          Can commit?
      |                          Write to log
      |                          Acquire locks
      |                                   |
      |  <-------- VOTE YES ------        | (ready)
      |       or   VOTE NO                | (cannot)
      |                                   |

PHASE 2: DECISION (Commit Phase)
      |                                   |
      |  If all YES:                      |
      |  -------- COMMIT -------->        |
      |                                   |
      |  If any NO:                       |
      |  -------- ABORT --------->        |
      |                                   |
      |                          Execute decision
      |                          Write to log
      |                          Release locks
      |                                   |
      |  <-------- ACK -----------        |
      |                                   |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Coordinator State Transitions:

                    Start
                      |
                      v
                 +--------+
                 | INIT   |
                 +--------+
                      |
              send PREPARE to all
                      |
                      v
                 +--------+
                 | WAIT   | <-- waiting for votes
                 +--------+
                /         \\
    all YES    /           \\ any NO or timeout
              v             v
         +---------+    +---------+
         | COMMIT  |    | ABORT   |
         +---------+    +---------+
              |              |
        send COMMIT     send ABORT
              |              |
              v              v
         +---------+    +---------+
         |  DONE   |    |  DONE   |
         +---------+    +---------+

Participant State Transitions:

         +--------+
         | INIT   |
         +--------+
              |
       receive PREPARE
              |
              v
         +--------+
         | READY  | (voted YES)
         +--------+
         /        \\
   COMMIT          ABORT
        |          |
        v          v
  +---------+ +---------+
  |COMMITTED| | ABORTED |
  +---------+ +---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC Message Flow</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Coordinator</th>
            <th className="p-3 border">Participant</th>
            <th className="p-3 border">Log Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Write START-2PC to log</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">START-2PC</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Send PREPARE to all</td>
            <td className="p-3 border">Receive PREPARE</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Write READY/ABORT to log</td>
            <td className="p-3 border">READY or ABORT</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Receive all votes</td>
            <td className="p-3 border">Send YES/NO vote</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Write COMMIT/ABORT to log</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">COMMIT or ABORT</td>
          </tr>
          <tr>
            <td className="p-3 border">6</td>
            <td className="p-3 border">Send decision to all</td>
            <td className="p-3 border">Receive decision</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr>
            <td className="p-3 border">7</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Write COMMIT/ABORT, send ACK</td>
            <td className="p-3 border">COMMIT or ABORT</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PC Failure Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Scenarios and Recovery:

1. PARTICIPANT FAILS BEFORE VOTING
   Coordinator: Timeout --> ABORT
   Recovery: Participant aborts (no READY in log)

2. PARTICIPANT FAILS AFTER VOTING YES
   Coordinator: Has vote, continues protocol
   Recovery: Participant in READY state
            - Query coordinator for decision
            - Or wait for coordinator message

3. COORDINATOR FAILS IN WAIT STATE
   Participants: In READY state, BLOCKED!
   This is the BLOCKING PROBLEM

   Recovery: New coordinator from log
            - If COMMIT/ABORT logged, resend decision
            - If only START-2PC, abort transaction

4. COORDINATOR FAILS AFTER DECIDING
   Participants: May or may not have decision
   Recovery: Coordinator resends decision on recovery

Blocking Scenario (2PC's main weakness):
  Coordinator   P1        P2
      |          |         |
   PREPARE --->  |         |
   PREPARE ------------>   |
      |     YES  |         |
      | <--------|    YES  |
      | <------------------|
      X (crash)  |         |
                 |         |
          BLOCKED! (waiting for decision)
          Cannot proceed until coordinator recovers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three-Phase Commit (3PC)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three-Phase Commit Protocol:

Adds PRE-COMMIT phase to avoid blocking

PHASE 1: CAN COMMIT (Voting)
Coordinator --> Participants: "Can you commit?"
Participants --> Coordinator: "Yes" or "No"

PHASE 2: PRE-COMMIT
If all YES:
  Coordinator --> Participants: "Prepare to commit"
  Participants: Enter pre-commit state
  Participants --> Coordinator: "ACK"

PHASE 3: DO COMMIT
Coordinator --> Participants: "Commit"
Participants: Commit and release locks
Participants --> Coordinator: "Done"

State Diagram:
       INIT
         |
    CAN COMMIT?
         |
       WAIT
      /    \\
   YES      NO
    |        |
PRE-COMMIT ABORT
    |
  COMMIT

Key Insight:
- Before PRE-COMMIT: Can safely abort (no one committed)
- After PRE-COMMIT: Can safely commit (all are prepared)
- Allows timeout-based recovery without blocking`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3PC Timeout Actions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Coordinator Timeout</th>
            <th className="p-3 border">Participant Timeout</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">WAIT</td>
            <td className="p-3 border">ABORT (missing votes)</td>
            <td className="p-3 border">ABORT (no decision yet)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PRE-COMMIT</td>
            <td className="p-3 border">Proceed to COMMIT</td>
            <td className="p-3 border">Proceed to COMMIT</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">READY (waiting)</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Query other participants</td>
          </tr>
        </tbody>
      </table>
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
            <td className="p-3 border font-semibold">Phases</td>
            <td className="p-3 border">2 (Prepare, Commit)</td>
            <td className="p-3 border">3 (CanCommit, PreCommit, DoCommit)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blocking</td>
            <td className="p-3 border text-red-600">Yes (coordinator failure)</td>
            <td className="p-3 border text-green-600">No (timeout-based recovery)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Complexity</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n) per phase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Latency</td>
            <td className="p-3 border">2 round trips</td>
            <td className="p-3 border">3 round trips</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Partition</td>
            <td className="p-3 border">Can cause inconsistency</td>
            <td className="p-3 border text-red-600">Can still cause issues</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Practical Use</td>
            <td className="p-3 border text-green-600">Widely used</td>
            <td className="p-3 border">Rarely used (Paxos preferred)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Paxos Commit</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Paxos Commit: Non-Blocking Alternative

Uses Paxos consensus to decide commit/abort

Architecture:
+-------------+
| Coordinator |
+-------------+
      |
      v
+-----+-----+-----+
| A1  | A2  | A3  | <-- Paxos Acceptors
+-----+-----+-----+
      |
      v
+-----+-----+-----+
| P1  | P2  | P3  | <-- Participants
+-----+-----+-----+

Protocol:
1. Coordinator acts as Paxos Proposer
2. Each participant votes via Paxos
3. Acceptors form consensus on decision
4. Decision is fault-tolerant (majority)

Advantages over 2PC/3PC:
- Tolerates coordinator failure
- Tolerates minority participant failures
- Non-blocking in asynchronous network
- Used in Google Spanner, CockroachDB

Trade-off:
- Higher message complexity
- More round trips
- Requires Paxos infrastructure`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Implementations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Real-World Distributed Commit:

1. XA TRANSACTIONS (2PC Standard)
   - X/Open DTP specification
   - Supported by most databases
   - Used for cross-database transactions

   Interface:
   - xa_start()    : Begin transaction
   - xa_end()      : End work
   - xa_prepare()  : Prepare to commit
   - xa_commit()   : Commit
   - xa_rollback() : Abort

2. GOOGLE SPANNER (Paxos + 2PC)
   - TrueTime for global timestamps
   - Paxos groups for replication
   - 2PC across Paxos groups
   - Externally consistent transactions

3. COCKROACHDB (Parallel Commits)
   - Optimistic write pipelining
   - Single round trip for most commits
   - Parallel consensus on multiple ranges

4. SAGA PATTERN (No distributed commit)
   - Each service commits locally
   - Compensating transactions for rollback
   - Eventually consistent
   - Used in microservices (Uber, etc.)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed commit ensures all participants reach the same decision</li>
        <li>2PC is simple but can block if coordinator fails after collecting votes</li>
        <li>3PC adds a pre-commit phase to enable timeout-based recovery</li>
        <li>3PC is non-blocking but not partition-tolerant</li>
        <li>Paxos Commit combines Paxos consensus with commit protocol</li>
        <li>Write-ahead logging is essential for crash recovery</li>
        <li>XA is the standard interface for distributed transactions</li>
        <li>Modern systems often prefer Sagas for better availability</li>
      </ul>
    </div>
  </div>
);

export default DistributedCommit;
