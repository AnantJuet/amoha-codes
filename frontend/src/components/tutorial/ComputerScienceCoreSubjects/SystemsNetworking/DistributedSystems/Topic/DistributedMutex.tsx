import React from "react";

const DistributedMutex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Mutex Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed Mutex Algorithms achieve mutual exclusion without relying on a central coordinator.
      All processes participate equally in the decision-making process, using message passing and
      logical timestamps to ensure safe and fair access to the critical section.
    </p>

    <h2 className="text-3xl font-bold mt-8">Lamport's Distributed Mutex Algorithm</h2>

    <p className="leading-relaxed">
      Proposed by Leslie Lamport in 1978, this algorithm uses logical clocks and a total ordering
      of events to achieve mutual exclusion. Each process maintains a request queue and uses
      timestamped messages to coordinate.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algorithm Overview</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lamport's Distributed Mutual Exclusion:

Each process Pi maintains:
  - Lamport clock: Li
  - Request queue: Qi (ordered by timestamp)

To enter Critical Section:
  1. Pi sends REQUEST(Ti, i) to ALL other processes
  2. Pi adds own request to Qi
  3. Pi waits until:
     a. Own request is at head of Qi
     b. Received REPLY from ALL other processes

To exit Critical Section:
  1. Remove own request from Qi
  2. Send RELEASE to ALL other processes

On receiving REQUEST(Tj, j):
  1. Add request to Qi
  2. Send REPLY to Pj

On receiving RELEASE(j):
  1. Remove Pj's request from Qi`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Flow Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Three Processes: P1, P2, P3 (N=3)

P1 wants CS at time T=5:

P1                      P2                      P3
│                       │                       │
│ REQUEST(5,1)─────────►│                       │
│ REQUEST(5,1)──────────┼──────────────────────►│
│                       │                       │
│                       │◄─────REPLY────────────│
│◄──────REPLY───────────│                       │
│◄──────────────────────┼──────REPLY────────────│
│                       │                       │
│ [Head of Q, all REPLY received]               │
│ Enter CS              │                       │
│ ...                   │                       │
│ Exit CS               │                       │
│                       │                       │
│ RELEASE──────────────►│                       │
│ RELEASE───────────────┼──────────────────────►│
│                       │                       │

Messages for one CS entry:
  (N-1) REQUEST + (N-1) REPLY + (N-1) RELEASE = 3(N-1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Request Queue Example</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Queue State at Each Process</h3>
      <div className="font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: P1 requests at T=5, P2 requests at T=3

All processes eventually have queue:
  Q = [(3, P2), (5, P1)]

P2 is at head (earlier timestamp)
P2 enters CS first

After P2's RELEASE:
  Q = [(5, P1)]

P1 is now at head
P1 enters CS

Ordering rule: (Ti, i) < (Tj, j) iff
  Ti < Tj  OR  (Ti = Tj AND i < j)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ricart-Agrawala Algorithm</h2>

    <p className="leading-relaxed">
      An optimization of Lamport's algorithm that reduces messages by eliminating RELEASE messages.
      Permission is implicitly granted through deferred REPLY messages.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ricart-Agrawala Algorithm:

Each process Pi maintains:
  - State: RELEASED, WANTED, or HELD
  - Timestamp of own request: Ti

To enter Critical Section:
  1. State = WANTED
  2. Ti = current_timestamp
  3. Send REQUEST(Ti, i) to all
  4. Wait for REPLY from all (N-1) processes

To exit Critical Section:
  1. State = RELEASED
  2. Send REPLY to all deferred requests

On receiving REQUEST(Tj, j):
  if (State == HELD) OR
     (State == WANTED AND (Ti, i) < (Tj, j)):
      Defer REPLY (add j to deferred list)
  else:
      Send REPLY to Pj immediately

Messages per CS: 2(N-1) [REQUEST + REPLY only]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ricart-Agrawala Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`P1 and P2 both want CS (P1 at T=5, P2 at T=7):

P1                           P2                          P3
│ State=WANTED, T=5          │ State=WANTED, T=7         │
│                            │                           │
│ REQUEST(5,1)──────────────►│                           │
│ REQUEST(5,1)───────────────┼──────────────────────────►│
│                            │ REQUEST(7,2)─────────────►│
│◄───────────REQUEST(7,2)────│                           │
│                            │                           │
│ (5,1) < (7,2)?             │ (7,2) < (5,1)?            │
│ Yes! Defer P2's reply      │ No! Send REPLY to P1      │
│                            │                           │
│◄───────────REPLY───────────│                           │
│◄───────────────────────────┼───────────REPLY───────────│
│                            │                           │
│ Received all REPLY         │ Waiting for P1's REPLY    │
│ Enter CS                   │                           │
│ ...                        │                           │
│ Exit CS, State=RELEASED    │                           │
│                            │                           │
│ REPLY──────────────────────►│ (deferred reply sent)    │
│                            │ Now has all REPLY         │
│                            │ Enter CS                  │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Lamport's</th>
            <th className="p-3 border">Ricart-Agrawala</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Messages per CS</td>
            <td className="p-3 border">3(N-1)</td>
            <td className="p-3 border">2(N-1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Types</td>
            <td className="p-3 border">REQUEST, REPLY, RELEASE</td>
            <td className="p-3 border">REQUEST, REPLY</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local State</td>
            <td className="p-3 border">Request Queue</td>
            <td className="p-3 border">State + Deferred List</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Synchronization Delay</td>
            <td className="p-3 border">2 message times</td>
            <td className="p-3 border">2 message times</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Properties</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Safety (Mutual Exclusion)</h3>
        <p className="leading-relaxed text-sm">
          Two processes cannot be in CS simultaneously. Proof: If Pi and Pj both in CS,
          both must have received REPLY from each other. But one must have earlier timestamp
          and would defer the other's REPLY.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Liveness (No Deadlock)</h3>
        <p className="leading-relaxed text-sm">
          No circular wait possible. Total ordering of requests ensures that the process
          with smallest timestamp will eventually get all REPLYs.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fairness (No Starvation)</h3>
        <p className="leading-relaxed text-sm">
          Requests are granted in timestamp order. A request with timestamp T will be
          served before any request with timestamp greater than T.
        </p>
      </div>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fault Tolerance</h3>
        <p className="leading-relaxed text-sm">
          Limited. Crash of any process blocks all others (waiting for REPLY). Can be
          improved with timeouts and failure detectors.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Maekawa's Algorithm (Quorum-Based)</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Reducing Message Complexity</h3>
      <p className="leading-relaxed">
        Instead of requesting permission from ALL processes, request from a subset (quorum):
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Each process has a voting set (quorum) of size ~sqrt(N)</li>
        <li>Quorums of any two processes must overlap</li>
        <li>Only need permission from own quorum</li>
        <li>Messages per CS: O(sqrt(N)) instead of O(N)</li>
      </ul>
      <div className="mt-4 font-mono text-sm text-gray-900">
        <p>For N processes, quorum size K where: K(K-1) + 1 = N</p>
        <p>Example: N=7, K=3 (each quorum has 3 processes)</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Messages</th>
            <th className="p-3 border">Synchronization Delay</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Centralized</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lamport's</td>
            <td className="p-3 border">3(N-1)</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ricart-Agrawala</td>
            <td className="p-3 border">2(N-1)</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Maekawa's</td>
            <td className="p-3 border">3*sqrt(N)</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Token Ring</td>
            <td className="p-3 border">1 to N-1</td>
            <td className="p-3 border">0 to N-1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed algorithms have no single point of failure</li>
        <li>Lamport's algorithm uses REQUEST, REPLY, RELEASE (3(N-1) messages)</li>
        <li>Ricart-Agrawala optimizes by deferring REPLY (2(N-1) messages)</li>
        <li>Both use logical timestamps for total ordering of requests</li>
        <li>Permission is based on having smallest timestamp among requesters</li>
        <li>Maekawa's quorum-based approach reduces to O(sqrt(N)) messages</li>
        <li>All provide mutual exclusion, deadlock freedom, and fairness</li>
      </ul>
    </div>
  </div>
);

export default DistributedMutex;
