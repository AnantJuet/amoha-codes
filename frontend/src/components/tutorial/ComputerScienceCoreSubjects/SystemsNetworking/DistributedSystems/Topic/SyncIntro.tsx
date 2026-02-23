import React from "react";

const SyncIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Synchronization in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Synchronization in distributed systems is crucial for ensuring consistency, coordination,
      and cooperation among distributed components. It addresses the challenges of maintaining
      data consistency, managing concurrent processes, and achieving coherent system behavior
      across different nodes in a network.
    </p>

    <h2 className="text-3xl font-bold mt-8">Importance of Synchronization</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Data Integrity</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Ensures data consistency across all nodes</li>
          <li>Prevents conflicts and inconsistencies</li>
          <li>Maintains coherent state across components</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Task Coordination</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Coordinates tasks among distributed nodes</li>
          <li>Ensures harmonious operation</li>
          <li>Manages access to shared resources</li>
        </ul>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fault Tolerance</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Ensures redundant systems are synchronized</li>
          <li>Improves system reliability</li>
          <li>Facilitates effective recovery</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Performance</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Optimizes resource utilization</li>
          <li>Supports load balancing</li>
          <li>Enables scalable operations</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Synchronization</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Time Synchronization</td>
            <td className="p-3 border">
              Ensures all nodes have consistent view of time
            </td>
            <td className="p-3 border">
              Coordinating events, logging, maintaining consistency
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Synchronization</td>
            <td className="p-3 border">
              Ensures multiple data copies remain consistent
            </td>
            <td className="p-3 border">
              Coordinating updates, resolving conflicts
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Process Synchronization</td>
            <td className="p-3 border">
              Coordinates execution of processes
            </td>
            <td className="p-3 border">
              Managing shared resource access, preventing race conditions
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges in Synchronization</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Synchronization Challenges:

1. NETWORK LATENCY & PARTITIONING
   ├── Network delays cause synchronization issues
   ├── Partitions can isolate nodes
   └── Leads to potential data divergence

2. SCALABILITY
   ├── Maintaining sync becomes complex with more nodes
   ├── Resource-intensive operations
   └── Load balancing challenges

3. FAULT TOLERANCE
   ├── Node failures during synchronization
   ├── Data recovery complexities
   └── Maintaining consistency during recovery

4. CONCURRENCY CONTROL
   ├── Managing simultaneous updates
   ├── Preventing deadlocks
   └── Avoiding race conditions

5. DATA CONSISTENCY
   ├── Implementing consistency models
   ├── Achieving eventual consistency
   └── Balancing consistency vs availability

6. TIME SYNCHRONIZATION
   ├── Clock drift between nodes
   ├── Accurate timekeeping challenges
   └── Time-sensitive application support`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Techniques</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Time Synchronization</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>NTP (Network Time Protocol)</li>
          <li>Cristian's Algorithm</li>
          <li>Berkeley Algorithm</li>
          <li>Logical Clocks</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Data Synchronization</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Replication Protocols</li>
          <li>Conflict Resolution</li>
          <li>Version Vectors</li>
          <li>Merkle Trees</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Process Synchronization</h4>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Mutual Exclusion</li>
          <li>Distributed Locks</li>
          <li>Semaphores</li>
          <li>Barrier Synchronization</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Coordination Mechanisms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Leader Election</td>
            <td className="p-3 border">
              Selecting a coordinator node to manage distributed operations
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consensus Protocols</td>
            <td className="p-3 border">
              Achieving agreement among distributed nodes (e.g., Paxos, Raft)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Distributed Transactions</td>
            <td className="p-3 border">
              Ensuring atomic operations across multiple nodes (2PC, 3PC)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Event Ordering</td>
            <td className="p-3 border">
              Establishing causal relationships between events
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Distributed Databases:</strong> Synchronizing data across replicas (Cassandra, MongoDB)</li>
      <li><strong>Cloud Storage:</strong> Keeping files synchronized across devices (Dropbox, Google Drive)</li>
      <li><strong>Financial Systems:</strong> Ensuring transaction consistency across banking systems</li>
      <li><strong>Collaborative Tools:</strong> Real-time document editing (Google Docs)</li>
      <li><strong>Gaming:</strong> Multiplayer game state synchronization</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Synchronization ensures consistency across distributed components</li>
        <li>Three main types: Time, Data, and Process synchronization</li>
        <li>Network latency and partitioning are major challenges</li>
        <li>Multiple techniques exist for different synchronization needs</li>
        <li>Trade-offs between consistency, availability, and performance</li>
        <li>Coordination mechanisms help manage distributed operations</li>
      </ul>
    </div>
  </div>
);

export default SyncIntro;
