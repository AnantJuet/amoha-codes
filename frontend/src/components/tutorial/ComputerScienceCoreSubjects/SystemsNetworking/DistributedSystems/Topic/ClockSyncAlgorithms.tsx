import React from "react";

const ClockSyncAlgorithms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Clock Synchronization Algorithms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Clock synchronization algorithms are essential mechanisms in distributed systems that ensure
      all participating nodes maintain a consistent view of time. These algorithms compensate for
      clock drift and network delays to achieve acceptable time accuracy across the system.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Clock Synchronization?</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Event Ordering</h4>
        <p className="text-sm">Determine the sequence of events across different machines</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Distributed Transactions</h4>
        <p className="text-sm">Ensure consistent commit ordering in databases</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Security Protocols</h4>
        <p className="text-sm">Timestamps for authentication and certificate validation</p>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Log Correlation</h4>
        <p className="text-sm">Match events across distributed system logs</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Classification of Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Centralized</td>
            <td className="p-3 border">Single time server provides reference</td>
            <td className="p-3 border">Cristian's Algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Distributed</td>
            <td className="p-3 border">Nodes cooperatively determine time</td>
            <td className="p-3 border">Berkeley Algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hierarchical</td>
            <td className="p-3 border">Multi-level time distribution</td>
            <td className="p-3 border">NTP (Network Time Protocol)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hardware-Based</td>
            <td className="p-3 border">GPS or atomic clock reference</td>
            <td className="p-3 border">GPS Time, PTP</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cristian's Algorithm</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cristian's Algorithm (Client-Server):

Client                              Time Server
   │                                     │
   │ T0 = local_time()                   │
   │                                     │
   │ ──────── Request Time ────────────► │
   │                                     │
   │                                     │ Process
   │                                     │
   │ ◄─────── T_server ─────────────────│
   │                                     │
   │ T1 = local_time()                   │
   │                                     │

RTT = T1 - T0
Estimated_Time = T_server + RTT/2

Accuracy: ± RTT/2`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Cristian's Algorithm Properties</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Advantages:</strong> Simple, low overhead, works well with low-latency networks</li>
        <li><strong>Disadvantages:</strong> Single point of failure, server must be trusted</li>
        <li><strong>Best for:</strong> Intranets with reliable time server</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Berkeley Algorithm</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Berkeley Algorithm (Distributed Average):

Step 1: Master polls all slaves for their time
   ┌─────────┐
   │ Master  │ ────► Request time from all
   │ (M)     │
   └─────────┘
       │
   ┌───┴───┬───────┬───────┐
   ▼       ▼       ▼       ▼
┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐
│ S1  │ │ S2  │ │ S3  │ │ S4  │
│T=10 │ │T=25 │ │T=20 │ │T=5  │
└─────┘ └─────┘ └─────┘ └─────┘

Step 2: Slaves respond with their time
        Master calculates RTT for each

Step 3: Master computes average (excluding outliers)
        Master: T=15
        Times: 10, 25, 20, 5, 15
        Average = (10+25+20+5+15)/5 = 15

Step 4: Master sends adjustments to each node
        S1: +5, S2: -10, S3: -5, S4: +10, M: 0`}
      </pre>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Berkeley Algorithm Properties</h3>
      <ul className="list-disc list-inside leading-relaxed space-y-1">
        <li><strong>Advantages:</strong> No need for accurate time server, fault tolerant to outliers</li>
        <li><strong>Disadvantages:</strong> Master is single point of failure, not synchronized to UTC</li>
        <li><strong>Best for:</strong> Internal synchronization where absolute time is not critical</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Cristian's</th>
            <th className="p-3 border">Berkeley</th>
            <th className="p-3 border">NTP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Architecture</td>
            <td className="p-3 border">Client-Server</td>
            <td className="p-3 border">Master-Slave</td>
            <td className="p-3 border">Hierarchical</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Initiator</td>
            <td className="p-3 border">Client</td>
            <td className="p-3 border">Master</td>
            <td className="p-3 border">Client</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time Source</td>
            <td className="p-3 border">Server (accurate)</td>
            <td className="p-3 border">Average of all</td>
            <td className="p-3 border">Stratum servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accuracy</td>
            <td className="p-3 border">~1-10 ms (LAN)</td>
            <td className="p-3 border">~10-50 ms</td>
            <td className="p-3 border">~1 ms - 50 ms</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Network Delays</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Network Delay Components:

Total Delay = T_send + T_network + T_receive + T_process

┌────────┐                           ┌────────┐
│ Client │                           │ Server │
└───┬────┘                           └───┬────┘
    │                                    │
    │ T_send (prepare & transmit)        │
    │────────────────────────────────────┤
    │        T_network (propagation)     │
    ├────────────────────────────────────│
    │                                    │ T_process
    │                                    │
    │        T_network (return)          │
    │◄───────────────────────────────────┤
    │ T_receive (receive & process)      │
    │                                    │

Assumptions for simple algorithms:
1. T_network(request) ≈ T_network(response)
2. Processing time is negligible
3. RTT/2 approximates one-way delay`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Adjustment Strategies</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Sudden Jump</h3>
        <p className="leading-relaxed">
          Immediately set clock to new value. Simple but can cause:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Duplicate timestamps (if going back)</li>
          <li>Gaps in time sequence</li>
          <li>Application errors</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Gradual Adjustment (Slewing)</h3>
        <p className="leading-relaxed">
          Slowly speed up or slow down the clock. Better because:
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>No time jumps or duplicates</li>
          <li>Monotonic time progression</li>
          <li>Applications remain stable</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Bounds</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Calculating Maximum Skew</h3>
      <p className="leading-relaxed">
        For internal synchronization with drift rate rho and sync interval delta:
      </p>
      <div className="font-mono mt-4 text-gray-900">
        <p>Maximum skew after sync: S = RTT (due to measurement)</p>
        <p>Skew growth between syncs: delta_S = 2 * rho * delta</p>
        <p className="mt-2">Total maximum skew: S_max = RTT + 2 * rho * delta</p>
      </div>
      <p className="mt-4 text-sm italic">
        To keep skew below bound D: sync every (D - RTT) / (2 * rho) time units
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Network Jitter:</strong> Variable delays require multiple samples and statistical filtering</li>
      <li><strong>Asymmetric Paths:</strong> Upload and download paths may have different delays</li>
      <li><strong>Server Load:</strong> Processing time varies with server load</li>
      <li><strong>Security:</strong> Time servers can be spoofed; use authentication</li>
      <li><strong>Leap Seconds:</strong> Must handle UTC adjustments correctly</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cristian's uses a single accurate time server (client-initiated)</li>
        <li>Berkeley computes average time among all nodes (master-initiated)</li>
        <li>NTP uses hierarchical stratum servers for scalability</li>
        <li>RTT estimation is key to accuracy in all algorithms</li>
        <li>Gradual clock adjustment is preferred over sudden jumps</li>
        <li>Synchronization frequency depends on drift rate and required accuracy</li>
        <li>No algorithm can achieve perfect synchronization due to network uncertainty</li>
      </ul>
    </div>
  </div>
);

export default ClockSyncAlgorithms;
