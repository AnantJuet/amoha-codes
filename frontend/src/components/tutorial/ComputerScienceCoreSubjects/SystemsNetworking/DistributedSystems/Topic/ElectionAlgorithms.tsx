import React from "react";

const ElectionAlgorithms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Election Algorithms in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Election algorithms are used in distributed systems to select a single process to act as a
      coordinator or leader among a group of processes. They are essential when the coordinator
      fails and a new one must be chosen, or when the system starts and needs to establish leadership.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Election Algorithms?</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Coordinator Failure</h4>
        <p className="text-sm">When the current coordinator crashes, a new one must be elected</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">System Startup</h4>
        <p className="text-sm">Initial leader selection when the system first starts</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Network Partition Recovery</h4>
        <p className="text-sm">Reconciling leadership after network splits heal</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Load Balancing</h4>
        <p className="text-sm">Selecting coordinators for different partitions or tasks</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Election Requirements</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Safety</td>
            <td className="p-3 border">
              At most one leader is elected at any time (uniqueness)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Liveness</td>
            <td className="p-3 border">
              Every election eventually terminates with a leader elected
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Agreement</td>
            <td className="p-3 border">
              All non-faulty processes agree on the same leader
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">
              The elected leader is consistent with the election criteria (e.g., highest ID)
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Assumptions</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Standard Election Algorithm Assumptions:

1. Each process has a unique identifier (ID)
   - Often the process ID, IP address, or combination
   - Example: P1, P2, P3, ... or 192.168.1.1, 192.168.1.2, ...

2. Every process knows all other processes
   - Complete membership knowledge
   - Or at least can discover neighbors

3. Processes can communicate reliably
   - Messages eventually delivered
   - Or failure is detected via timeout

4. Election criterion is deterministic
   - Usually: elect process with HIGHEST ID
   - All processes agree on the criterion

5. Processes can detect coordinator failure
   - Via timeout or heartbeat mechanism
   - Missing response triggers election`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Election Algorithms</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Bully Algorithm</h3>
        <p className="leading-relaxed text-sm">
          Higher-ID processes "bully" lower-ID processes. Highest available ID always wins.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Works with any topology</li>
          <li>O(N^2) messages worst case</li>
          <li>Fast when highest ID starts</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Ring Algorithm</h3>
        <p className="leading-relaxed text-sm">
          Election message circulates around a ring, collecting participants.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Requires ring topology</li>
          <li>O(N) messages</li>
          <li>Higher latency (full ring traversal)</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Raft/Paxos</h3>
        <p className="leading-relaxed text-sm">
          Consensus-based leader election with term numbers and majority votes.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Handles network partitions</li>
          <li>Used in production systems</li>
          <li>More complex but robust</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Election Trigger Scenarios</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When does election start?

1. Coordinator Timeout
   Process P sends request to coordinator
   No response within TIMEOUT
   P initiates election

   ┌───────┐          ┌───────────┐
   │   P   │─Request─►│Coordinator│ (crashed)
   │       │          │    ✗      │
   │       │ TIMEOUT! │           │
   │       │          │           │
   │       │─── Start Election ───┘
   └───────┘

2. Explicit Crash Notification
   Failure detector announces coordinator crash
   All processes learn simultaneously
   Prevents multiple elections

3. New Process Joins
   Higher-ID process joins the system
   May trigger re-election if appropriate

4. Recovery from Partition
   Network heals, multiple leaders discovered
   Re-election needed to unify`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Used In</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">ELECTION</td>
            <td className="p-3 border">Bully, Ring</td>
            <td className="p-3 border">
              Announce election is in progress
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OK (ALIVE)</td>
            <td className="p-3 border">Bully</td>
            <td className="p-3 border">
              Response to indicate process is alive and taking over
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">COORDINATOR</td>
            <td className="p-3 border">Bully, Ring</td>
            <td className="p-3 border">
              Announce the new coordinator/leader
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RequestVote</td>
            <td className="p-3 border">Raft</td>
            <td className="p-3 border">
              Candidate requests votes from other processes
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Bully</th>
            <th className="p-3 border">Ring</th>
            <th className="p-3 border">Raft</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Message Complexity</td>
            <td className="p-3 border">O(N^2)</td>
            <td className="p-3 border">O(N)</td>
            <td className="p-3 border">O(N)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time Complexity</td>
            <td className="p-3 border">O(N)</td>
            <td className="p-3 border">O(N)</td>
            <td className="p-3 border">O(N)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Topology</td>
            <td className="p-3 border">Any</td>
            <td className="p-3 border">Ring</td>
            <td className="p-3 border">Any</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partition Tolerant</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Favors</td>
            <td className="p-3 border">Highest ID</td>
            <td className="p-3 border">Highest ID</td>
            <td className="p-3 border">Majority vote</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network Partitions:</strong> Simple algorithms may elect multiple leaders in different partitions</li>
      <li><strong>Failure Detection:</strong> Accurate and timely detection is crucial for triggering elections</li>
      <li><strong>Election Storms:</strong> Frequent coordinator failures can cause excessive elections</li>
      <li><strong>Consistency:</strong> Ensure operations during election are handled correctly</li>
      <li><strong>Join/Leave:</strong> Dynamic membership requires careful handling</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications of Election</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Distributed Databases</h4>
        <p className="text-sm">Primary replica selection for writes (e.g., MongoDB, PostgreSQL)</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Coordination Services</h4>
        <p className="text-sm">Leader election in ZooKeeper, etcd, Consul</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Message Queues</h4>
        <p className="text-sm">Partition leader selection in Apache Kafka</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Cluster Management</h4>
        <p className="text-sm">Master node selection in Kubernetes, Hadoop</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Elections choose a coordinator when current one fails or system starts</li>
        <li>Safety: at most one leader; Liveness: election terminates with a leader</li>
        <li>Bully algorithm: higher IDs dominate, O(N^2) messages worst case</li>
        <li>Ring algorithm: message circulates ring, O(N) messages</li>
        <li>Modern systems use consensus-based algorithms (Raft, Paxos) for robustness</li>
        <li>Network partitions can cause split-brain (multiple leaders)</li>
        <li>Failure detection quality directly impacts election performance</li>
      </ul>
    </div>
  </div>
);

export default ElectionAlgorithms;
