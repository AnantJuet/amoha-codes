import React from "react";

const DSChallenges: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Challenges in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      While distributed systems offer numerous benefits, they also present significant
      challenges that must be addressed during design and implementation. Understanding
      these challenges is crucial for building robust and reliable distributed applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Major Design Challenges</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network Latency</td>
            <td className="p-3 border">
              Communication delays between nodes can cause synchronization issues
            </td>
            <td className="p-3 border">Affects response time and user experience</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partial Failures</td>
            <td className="p-3 border">
              Some components may fail while others continue operating
            </td>
            <td className="p-3 border">Requires fault detection and handling mechanisms</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">
              Maintaining data consistency across replicas is complex
            </td>
            <td className="p-3 border">Data integrity and correctness concerns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Security</td>
            <td className="p-3 border">
              Protecting data in transit and at rest across multiple nodes
            </td>
            <td className="p-3 border">Increased attack surface and vulnerability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Coordination</td>
            <td className="p-3 border">
              Synchronizing actions across multiple nodes
            </td>
            <td className="p-3 border">Complexity in achieving consensus</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Failures</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">1. Method/Process Failure</h3>
        <p className="leading-relaxed mb-2">
          The distributed system halts and is unable to perform execution.
          Sometimes leads to incorrect outcomes.
        </p>
        <p className="text-sm italic">
          <strong>Recovery:</strong> Abort the process or restart from prior state
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">2. System Failure</h3>
        <p className="leading-relaxed mb-2">
          The processor fails to perform execution due to software errors or
          hardware issues (CPU/memory/bus failure).
        </p>
        <p className="text-sm italic">
          <strong>Recovery:</strong> Reboot the system and configure the failure point
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">3. Storage Device Failure</h3>
        <p className="leading-relaxed mb-2">
          Stored information cannot be accessed, typically caused by parity errors,
          head crashes, or dust particles on storage medium.
        </p>
        <p className="text-sm italic">
          <strong>Recovery:</strong> Reconstruct content from archives and activity logs
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">4. Communication Failure</h3>
        <p className="leading-relaxed mb-2">
          A site cannot communicate with another operational site in the network,
          caused by failure of nodes or communication links.
        </p>
        <p className="text-sm italic">
          <strong>Recovery:</strong> Reroute using error-resistant communication protocols
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Additional Failure Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Timing Failure</td>
            <td className="p-3 border">
              A node sends a correct response, but it arrives earlier or later than anticipated.
              Also known as performance failures.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Response Failure</td>
            <td className="p-3 border">
              The server's response is flawed - the value could be incorrect or transmitted
              using inappropriate control flow.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Omission Failure</td>
            <td className="p-3 border">
              An "infinite late" failure where the node's response never appears to have been sent.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Crash Failure</td>
            <td className="p-3 border">
              A node encounters an omission failure and then totally stops responding,
              becoming unresponsive.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Issues Categories</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Design Issues of Distributed Systems:

1. COMMUNICATION ISSUES
   ├── Message Passing: Exchange information through sending/receiving messages
   ├── Communication Latency: Delay in data transmission between processes
   ├── Bandwidth: Maximum data transfer rate available
   └── Protocols: TCP/IP for reliable, UDP for faster communication

2. PROCESS MANAGEMENT
   ├── Process Coordination: Managing interaction and synchronization
   ├── Process Migration: Moving processes between nodes for load balancing
   └── Thread Management: Controlling execution and scheduling of threads

3. DATA MANAGEMENT
   ├── Data Storage: Managing data across multiple nodes
   ├── Data Access: Efficient retrieval and manipulation
   ├── Consistency & Replication: Maintaining identical copies
   └── Data Integrity: Ensuring accuracy throughout lifecycle

4. FAULT TOLERANCE
   ├── Failure Detection: Identifying when components fail
   ├── Redundancy: Duplicating critical components
   ├── Recovery: Restoring normal operations
   └── Consensus: Agreement among distributed nodes

5. SECURITY
   ├── Authentication: Verifying identity of users/systems
   ├── Authorization: Controlling access to resources
   ├── Cryptography: Securing communication and data
   └── Data Privacy: Protecting sensitive information

6. SCALABILITY
   ├── Horizontal Scaling: Adding more nodes
   ├── Vertical Scaling: Adding resources to existing nodes
   └── Load Balancing: Distributing workload evenly

7. SYNCHRONIZATION
   ├── Clock Synchronization: Aligning time across nodes
   ├── Event Ordering: Establishing sequence of events
   └── Mutual Exclusion: Controlling access to shared resources

8. TRANSPARENCY
   ├── Location: Hiding where resources are located
   ├── Access: Uniform resource access methods
   └── Failure: Hiding failures and recovery`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Challenges</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Network Latency & Partitioning</td>
            <td className="p-3 border">
              Network delays cause synchronization issues. Partitions can isolate nodes,
              leading to potential data divergence.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">
              As nodes increase, maintaining synchronization becomes more complex
              and resource-intensive. Load balancing adds difficulty.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concurrency Control</td>
            <td className="p-3 border">
              Managing simultaneous updates without conflicts is difficult.
              Preventing deadlocks requires careful design.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clock Drift</td>
            <td className="p-3 border">
              Differences in system clocks cause issues with time-based synchronization.
              Accurate timekeeping is essential for time-sensitive applications.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Network latency and partitioning are fundamental challenges</li>
        <li>Multiple types of failures must be anticipated and handled</li>
        <li>Consistency vs availability trade-offs (CAP theorem) must be considered</li>
        <li>Security becomes more complex with increased attack surface</li>
        <li>Clock synchronization is essential but challenging</li>
        <li>Careful design is required to prevent deadlocks and race conditions</li>
      </ul>
    </div>
  </div>
);

export default DSChallenges;
