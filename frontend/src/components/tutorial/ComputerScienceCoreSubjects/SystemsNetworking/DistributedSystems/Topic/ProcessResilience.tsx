import React from "react";

const ProcessResilience: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Resilience in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Process resilience refers to the ability of a distributed system to
      continue providing correct service despite the failure of some processes.
      This is achieved primarily through process replication, where multiple
      processes work together to mask failures.
    </p>

    <h2 className="text-3xl font-bold mt-8">Process Groups</h2>
    <p className="text-lg leading-relaxed mt-2">
      Processes are organized into groups to provide fault tolerance. When
      a message is sent to a group, all members receive it. If some members
      fail, the remaining ones continue to provide service.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Process Group Concept:

                    ┌─────────────────────────┐
                    │     Process Group G     │
                    │                         │
   Request          │  ┌───┐ ┌───┐ ┌───┐    │
   ─────────────────▶  │ P1│ │ P2│ │ P3│    │
                    │  └───┘ └───┘ └───┘    │
                    │    │     │     │       │
                    │    ▼     ▼     ▼       │
                    │  ┌─────────────────┐   │
                    │  │ Group Response  │   │
                    │  └─────────────────┘   │
                    └─────────────────────────┘
                              │
                              ▼
                          Response

If P2 fails, P1 and P3 continue serving requests.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Group Organization Types</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Flat Groups</h3>
        <p className="leading-relaxed mb-2">
          All processes are equal peers with no distinguished leader.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Symmetric - no single point of failure</li>
          <li>Decisions require voting/consensus</li>
          <li>More complex coordination</li>
          <li>Higher message overhead</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Hierarchical Groups</h3>
        <p className="leading-relaxed mb-2">
          One process acts as coordinator/leader.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Coordinator makes decisions</li>
          <li>Simpler coordination</li>
          <li>Coordinator is single point of failure</li>
          <li>Requires leader election on failure</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Group Membership</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Challenge</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Join</td>
            <td className="p-3 border">
              New process becomes group member
            </td>
            <td className="p-3 border">State synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Leave</td>
            <td className="p-3 border">
              Process voluntarily exits group
            </td>
            <td className="p-3 border">Graceful handoff</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fail</td>
            <td className="p-3 border">
              Process crashes unexpectedly
            </td>
            <td className="p-3 border">Failure detection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">View Change</td>
            <td className="p-3 border">
              Membership list is updated
            </td>
            <td className="p-3 border">Consistency among members</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Strategies</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Primary-Backup Replication:

   Client                Primary              Backups
     │                      │                  │ │
     │───Request───────────▶│                  │ │
     │                      │                  │ │
     │                      │───Update────────▶│ │
     │                      │                  │ │
     │                      │◀───Ack───────────│ │
     │                      │                  │ │
     │◀──Response───────────│                  │ │
     │                      │                  │ │

Active Replication (State Machine):

   Client              Replicas (all active)
     │                   │     │     │
     │───Request────────▶│     │     │
     │───Request─────────│────▶│     │
     │───Request─────────│─────│────▶│
     │                   │     │     │
     │  (all execute     │     │     │
     │   same operation) │     │     │
     │                   │     │     │
     │◀──Response────────│     │     │
     │                   │     │     │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary-Backup vs Active Replication</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Primary-Backup</th>
            <th className="p-3 border">Active Replication</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Request Handling</td>
            <td className="p-3 border">Only primary processes</td>
            <td className="p-3 border">All replicas process</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failover</td>
            <td className="p-3 border">Promote backup to primary</td>
            <td className="p-3 border">Continue with remaining replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Determinism Required</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Byzantine Fault Tolerance</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (with enough replicas)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Usage</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Tolerance Degree</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Number of Replicas Required:

For Crash Failures:
  k fault tolerance requires k+1 replicas

  Example: To tolerate 2 crashes, need 3 replicas

  ┌───┐ ┌───┐ ┌───┐
  │ R1│ │ R2│ │ R3│
  └───┘ └─×─┘ └─×─┘
    │
    └─── Still operational with 1 replica

For Byzantine Failures:
  k fault tolerance requires 3k+1 replicas

  Example: To tolerate 1 Byzantine fault, need 4 replicas

  ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ R1│ │ R2│ │ R3│ │ R4│
  └───┘ └───┘ └───┘ └───┘
    │     │     │     ×
    │     │     │   malicious
    └─────┴─────┴─── 3 honest can outvote 1 malicious

Why 3k+1 for Byzantine?
- Need majority of honest nodes
- Must exceed k malicious + k uncertain
- 2k+1 honest > k malicious when total = 3k+1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Machine Replication</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Requirements</h3>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>
          <strong>Deterministic:</strong> Same input produces same output
        </li>
        <li>
          <strong>Total Order:</strong> All replicas process requests in same order
        </li>
        <li>
          <strong>Same Initial State:</strong> All replicas start identically
        </li>
      </ol>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900 mt-4">
        <pre className="whitespace-pre-wrap text-gray-900">
{`State Machine Replication Flow:

Initial State: S0 (same for all replicas)

Request R1, R2, R3 arrive (possibly in different orders)

Total Order Broadcast ensures all see: [R1, R2, R3]

Replica 1: S0 ──R1──▶ S1 ──R2──▶ S2 ──R3──▶ S3
Replica 2: S0 ──R1──▶ S1 ──R2──▶ S2 ──R3──▶ S3
Replica 3: S0 ──R1──▶ S1 ──R2──▶ S2 ──R3──▶ S3

All replicas reach same final state S3`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quorum-Based Systems</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Quorum Requirements:

Given N replicas:
  Read Quorum (R): minimum replicas to read from
  Write Quorum (W): minimum replicas to write to

Constraints:
  R + W > N    (read and write quorums overlap)
  W > N/2      (writes overlap with each other)

Example: N=5, R=3, W=3

Write Operation:
  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ ✓ │ │ ✓ │ │ ✓ │ │   │ │   │
  └───┘ └───┘ └───┘ └───┘ └───┘
  Write to any 3 replicas (W=3)

Read Operation:
  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │   │ │ ✓ │ │ ✓ │ │ ✓ │ │   │
  └───┘ └───┘ └───┘ └───┘ └───┘
  Read from any 3 replicas (R=3)

  At least one read replica has latest write!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Leader Election</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Message Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bully Algorithm</td>
            <td className="p-3 border">
              Highest ID wins, challenges lower IDs
            </td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ring Algorithm</td>
            <td className="p-3 border">
              Token circulates, highest ID becomes leader
            </td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Raft Election</td>
            <td className="p-3 border">
              Random timeouts, majority vote
            </td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Process groups mask failures through redundancy</li>
        <li>Flat groups have no single point of failure but need consensus</li>
        <li>Hierarchical groups are simpler but need leader election</li>
        <li>k crash faults require k+1 replicas</li>
        <li>k Byzantine faults require 3k+1 replicas</li>
        <li>State machine replication needs determinism and total order</li>
        <li>Quorums ensure reads see latest writes</li>
      </ul>
    </div>
  </div>
);

export default ProcessResilience;
