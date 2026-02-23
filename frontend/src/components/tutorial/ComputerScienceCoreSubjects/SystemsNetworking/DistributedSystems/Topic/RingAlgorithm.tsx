import React from "react";

const RingAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ring Algorithm for Leader Election
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Ring Algorithm is a leader election algorithm for distributed systems where processes
      are organized in a logical ring. When a coordinator failure is detected, an election message
      circulates around the ring, collecting candidate information, until the highest-ID process
      is determined and announced as the new leader.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ring Topology</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Logical Ring Structure:

              ┌──────────────────────────┐
              │                          │
              ▼                          │
          ┌───────┐                  ┌───────┐
          │  P1   │─────────────────►│  P6   │
          └───────┘                  └───────┘
              │                          ▲
              ▼                          │
          ┌───────┐                  ┌───────┐
          │  P2   │                  │  P5   │
          └───────┘                  └───────┘
              │                          ▲
              ▼                          │
          ┌───────┐                  ┌───────┐
          │  P3   │─────────────────►│  P4   │
          └───────┘                  └───────┘

Each process knows its successor in the ring.
Messages travel clockwise: P1→P2→P3→P4→P5→P6→P1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Overview</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Two-Phase Process</h3>
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Phase 1: Election Message Circulation</p>
          <p className="text-sm">Election message travels around the ring, each process adds its ID to the list</p>
        </div>
        <div>
          <p className="font-semibold">Phase 2: Coordinator Announcement</p>
          <p className="text-sm">When message returns to initiator, highest ID is selected and announced</p>
        </div>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ring Election Algorithm:

When Process P detects coordinator failure:
  1. Create ELECTION message with list containing own ID: [P]
  2. Send ELECTION to successor in ring
  3. Mark self as "participating" in election

When Process Q receives ELECTION(list):
  if Q's ID is already in list:
      // Message has circulated back to initiator
      winner = max(list)
      Create COORDINATOR(winner) message
      Send COORDINATOR to successor
  else:
      // Add own ID and forward
      list.append(Q)
      Send ELECTION(list) to successor

When Process receives COORDINATOR(winner):
  Set coordinator = winner
  if not already seen this COORDINATOR:
      Forward COORDINATOR(winner) to successor`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: 6 processes in ring, P3 detects coordinator (P6) failure

Phase 1: ELECTION message circulation

Step 1: P3 starts election
        P3 creates ELECTION[3]
        P3 → P4

Step 2: P4 receives, adds ID
        ELECTION[3,4]
        P4 → P5

Step 3: P5 receives, adds ID
        ELECTION[3,4,5]
        P5 → P6 (crashed, skip to P1)

Step 4: P1 receives, adds ID
        ELECTION[3,4,5,1]
        P1 → P2

Step 5: P2 receives, adds ID
        ELECTION[3,4,5,1,2]
        P2 → P3

Step 6: P3 receives message with own ID
        Finds max([3,4,5,1,2]) = 5
        P5 is the winner!

Phase 2: COORDINATOR announcement

Step 7: P3 sends COORDINATOR(5)
        P3 → P4: "P5 is coordinator"

Step 8-11: COORDINATOR circulates
        Each process sets coordinator = P5
        Eventually reaches P3 again, stops

Final: P5 is the new coordinator`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Failed Processes</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Skipping Failed Processes in Ring:

Each process maintains:
  - successor: next process in ring
  - successor_list: backup successors [next, next+1, ...]

When sending to successor fails:
  1. Try next in successor_list
  2. Continue until a live process responds
  3. Update successor pointer

Example with P6 crashed:

Before: P5.successor = P6
After:  P5.successor = P1 (P6 skipped)

          ┌─────────────────────────────────┐
          │                                 │
          ▼                                 │
      ┌───────┐     ┌───────┐          ┌───────┐
      │  P1   │────►│  P2   │   ...    │  P5   │
      └───────┘     └───────┘          └───────┘
                                           │
                              ┌───────┐    │
                              │  P6   │────┘
                              │   ✗   │ (crashed)
                              └───────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Messages</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Election Phase</td>
            <td className="p-3 border">N-1</td>
            <td className="p-3 border">
              ELECTION visits each process once (N processes, initiator sees it twice)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordinator Phase</td>
            <td className="p-3 border">N-1</td>
            <td className="p-3 border">
              COORDINATOR visits each process once
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total (Single Initiator)</td>
            <td className="p-3 border">2(N-1)</td>
            <td className="p-3 border">
              Both messages traverse the ring
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total (Multiple Initiators)</td>
            <td className="p-3 border">2N per initiator</td>
            <td className="p-3 border">
              Each election runs independently
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Simultaneous Elections</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: P2 and P5 both detect failure and start elections

    P2 starts: ELECTION[2] →
    P5 starts: ELECTION[5] →

Both messages circulate:

      ┌────────────────────────────────────────┐
      │            ELECTION[5,1,2]             │
      ▼               ↑                        │
  ┌───────┐──────►┌───────┐                ┌───────┐
  │  P1   │       │  P2   │       ...      │  P5   │
  └───────┘       └───────┘                └───────┘
                      │                        ▲
                      ▼                        │
                ELECTION[2,3,4,5]──────────────┘

Both elections complete:
  - P2's election: max([2,3,4,5,1]) = 5 → COORD(5)
  - P5's election: max([5,1,2,3,4]) = 5 → COORD(5)

Same winner! Multiple COORDINATOR messages are harmless.
Each process sets coordinator = 5 (may receive twice, idempotent)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimization: Chang-Roberts Algorithm</h2>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Reducing Message Count</h3>
      <p className="leading-relaxed">
        The Chang-Roberts algorithm optimizes the ring election by stopping messages early:
      </p>
      <div className="font-mono mt-4 text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Chang-Roberts Optimization:

On receiving ELECTION(candidate_id):
  if candidate_id > my_id:
      Forward ELECTION(candidate_id)
  else if candidate_id < my_id:
      if not participating:
          Start own election: ELECTION(my_id)
      // Don't forward the lower ID
  else:  // candidate_id == my_id
      I am the winner!
      Send COORDINATOR(my_id)

Benefit: Messages with lower IDs get absorbed
Average messages: O(N log N) instead of O(N^2)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Basic Ring vs Chang-Roberts</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Basic Ring</th>
            <th className="p-3 border">Chang-Roberts</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Single Initiator</td>
            <td className="p-3 border">2(N-1)</td>
            <td className="p-3 border">2(N-1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">All Start Simultaneously</td>
            <td className="p-3 border">2N * N = O(N^2)</td>
            <td className="p-3 border">O(N log N)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Message Content</td>
            <td className="p-3 border">List of all IDs</td>
            <td className="p-3 border">Single ID</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Space per Message</td>
            <td className="p-3 border">O(N)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Advantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Simple and elegant design</li>
          <li>O(N) messages with single initiator</li>
          <li>Guaranteed to elect highest-ID process</li>
          <li>No single point of failure</li>
          <li>Handles multiple simultaneous elections</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Disadvantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Requires ring topology maintenance</li>
          <li>High latency (message must traverse ring)</li>
          <li>Ring must be reconfigured on failures</li>
          <li>Message size grows with N (basic version)</li>
          <li>Not partition tolerant</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ring vs Bully Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Ring Algorithm</th>
            <th className="p-3 border">Bully Algorithm</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Topology</td>
            <td className="p-3 border">Ring required</td>
            <td className="p-3 border">Any (complete graph)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Messages (worst)</td>
            <td className="p-3 border">O(N^2) or O(N log N)</td>
            <td className="p-3 border">O(N^2)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Messages (best)</td>
            <td className="p-3 border">2(N-1)</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time to Complete</td>
            <td className="p-3 border">2N message delays</td>
            <td className="p-3 border">~5 message delays</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Knowledge Required</td>
            <td className="p-3 border">Successor only</td>
            <td className="p-3 border">All process IDs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Processes organized in logical ring; each knows its successor</li>
        <li>ELECTION message collects IDs as it traverses the ring</li>
        <li>When message returns to initiator, highest ID becomes coordinator</li>
        <li>COORDINATOR message announces the winner to all</li>
        <li>Single initiator: 2(N-1) messages total</li>
        <li>Chang-Roberts optimization: absorb lower-ID messages early</li>
        <li>Multiple simultaneous elections converge to same winner</li>
        <li>Ring must be maintained when processes join/leave/fail</li>
      </ul>
    </div>
  </div>
);

export default RingAlgorithm;
