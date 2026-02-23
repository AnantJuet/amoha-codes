import React from "react";

const HeartbeatMechanisms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heartbeat Mechanisms in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heartbeat mechanisms are the foundation of failure detection in distributed
      systems. They work by having processes periodically send signals to indicate
      they are alive. The absence of heartbeats triggers failure suspicion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Heartbeat Concept</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Heartbeat Timeline:

Process A (Monitor)          Process B (Monitored)
     │                            │
     │      Heartbeat (t=0)      │
     │◀───────────────────────────│
     │                            │
     │      Heartbeat (t=T)      │
     │◀───────────────────────────│
     │                            │
     │      Heartbeat (t=2T)     │
     │◀───────────────────────────│
     │                            │
     │   No heartbeat received   │ ← Process B crashes
     │                            ╳
     │                            │
     │   Timeout at t=3T+delta   │
     │                            │
     ▼                            │
  Suspect B                       │

T = Heartbeat interval
delta = Timeout margin for network delay`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Heartbeat Architectures</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Architecture</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Centralized</td>
            <td className="p-3 border">
              All nodes send heartbeats to a central monitor
            </td>
            <td className="p-3 border">Simple, consistent view</td>
            <td className="p-3 border">Single point of failure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ring</td>
            <td className="p-3 border">
              Each node monitors its neighbor in a ring
            </td>
            <td className="p-3 border">Distributed, O(1) messages per node</td>
            <td className="p-3 border">Slow detection, single link failure</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">All-to-All</td>
            <td className="p-3 border">
              Every node monitors every other node
            </td>
            <td className="p-3 border">Fast detection, robust</td>
            <td className="p-3 border">O(n^2) message overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Gossip</td>
            <td className="p-3 border">
              Nodes randomly exchange heartbeat information
            </td>
            <td className="p-3 border">Scalable, robust</td>
            <td className="p-3 border">Probabilistic guarantees</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Centralized Heartbeat</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Centralized Heartbeat Architecture:

                    ┌──────────────┐
                    │   Central    │
                    │   Monitor    │
                    └──────────────┘
                         ▲ ▲ ▲
             ┌───────────┘ │ └───────────┐
             │             │             │
         heartbeat     heartbeat     heartbeat
             │             │             │
         ┌───┴───┐     ┌───┴───┐     ┌───┴───┐
         │ Node1 │     │ Node2 │     │ Node3 │
         └───────┘     └───────┘     └───────┘

Monitor maintains:
┌─────────┬───────────────┬─────────────┬────────┐
│ Node ID │ Last Heartbeat│ Timeout     │ Status │
├─────────┼───────────────┼─────────────┼────────┤
│ Node1   │ 10:00:05.123  │ 10:00:06.123│ Alive  │
│ Node2   │ 10:00:05.456  │ 10:00:06.456│ Alive  │
│ Node3   │ 10:00:03.789  │ 10:00:04.789│ DEAD   │
└─────────┴───────────────┴─────────────┴────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Ring-Based Heartbeat</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ring Heartbeat Architecture:

              ┌─────┐
              │  A  │◀─────────────────┐
              └─────┘                  │
                 │                     │
             heartbeat                 │
                 ▼                     │
              ┌─────┐              heartbeat
              │  B  │                  │
              └─────┘                  │
                 │                     │
             heartbeat             ┌─────┐
                 ▼                 │  D  │
              ┌─────┐              └─────┘
              │  C  │─────────────────▶
              └─────┘

Each node monitors exactly one other node:
  A monitors B
  B monitors C
  C monitors D
  D monitors A

If B crashes:
  A detects B's failure (no heartbeat)
  A takes over monitoring C (ring repair)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Push vs Pull Heartbeats</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Push Model</h3>
        <p className="leading-relaxed mb-2">
          Monitored process actively sends heartbeats without being asked.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Lower latency detection</li>
          <li>Monitored node controls timing</li>
          <li>More network traffic</li>
          <li>Cannot detect unresponsive but running nodes</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Pull Model (Ping)</h3>
        <p className="leading-relaxed mb-2">
          Monitor sends requests and waits for responses.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Monitor controls timing</li>
          <li>Can detect frozen processes</li>
          <li>RTT adds to detection time</li>
          <li>More accurate liveness check</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Heartbeat Message Content</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Field</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Sender ID</td>
            <td className="p-3 border">Identify the sending node</td>
            <td className="p-3 border">node-42</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequence Number</td>
            <td className="p-3 border">Detect missing heartbeats</td>
            <td className="p-3 border">12345</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timestamp</td>
            <td className="p-3 border">Measure latency, detect clock skew</td>
            <td className="p-3 border">1705401234567</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Load Info</td>
            <td className="p-3 border">Health and resource status</td>
            <td className="p-3 border">CPU: 45%, Mem: 60%</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Membership View</td>
            <td className="p-3 border">Gossip protocol data</td>
            <td className="p-3 border">List of known nodes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Heartbeat Interval Selection</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Factors Affecting Heartbeat Interval:

1. Detection Time Requirement:
   detection_time >= heartbeat_interval + network_latency + processing_time

   Example: If you need 5-second detection with 100ms network latency:
   heartbeat_interval <= 4.9 seconds

2. Network Bandwidth:
   bandwidth_used = (message_size * num_nodes) / heartbeat_interval

   Example: 100 bytes, 1000 nodes, 1-second interval:
   bandwidth = 100 * 1000 / 1 = 100 KB/s

3. CPU Overhead:
   overhead = (processing_time * num_nodes) / heartbeat_interval

Trade-off Graph:
                    ▲
   False Positives  │
                    │      ×
                    │    ×
                    │  ×
                    │×
                    └──────────────────▶
                       Heartbeat Interval

Shorter interval = More false positives from network jitter
Longer interval = Slower failure detection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lease-Based Heartbeat</h2>

    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Lease Mechanism</h3>
      <p className="leading-relaxed mb-4">
        Instead of just heartbeats, the monitor grants time-limited leases
        that the monitored process must renew. This provides stronger guarantees
        about mutual knowledge of liveness.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Lease Flow:

  Client                    Server
     │                         │
     │──── Request Lease ─────▶│
     │                         │
     │◀─── Grant(10 seconds) ──│
     │                         │
     │  (work while lease valid)│
     │                         │
     │──── Renew Lease ────────▶│ (before expiration)
     │                         │
     │◀─── Grant(10 seconds) ──│
     │                         │

If client crashes, server knows after lease expires.
If server crashes, client stops operations at expiration.`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">SWIM Protocol</h2>

    <p className="text-lg leading-relaxed mt-2">
      SWIM (Scalable Weakly-consistent Infection-style process group Membership)
      combines direct probing with indirect probing for robust failure detection.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SWIM Protocol Flow:

1. Direct Ping:
   A ────ping────▶ B
   A ◀───ack─────  B

   If ack received: B is alive

2. If no ack, Indirect Ping:
   A ──ping-req(B)──▶ C
   C ────ping────────▶ B
   C ◀───ack──────────  B
   A ◀──ack(B)────────  C

   If C reports B alive: B is alive

3. If indirect ping fails: Suspect B

   ┌─────┐              ┌─────┐
   │  A  │──────×──────▶│  B  │
   └─────┘              └─────┘
      │                    ▲
      │                    │
   ping-req(B)           ping
      │                    │
      ▼                    │
   ┌─────┐─────────────────┘
   │  C  │ (relay node)
   └─────┘

Benefits: Detects network issues vs node failures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Heartbeats are periodic signals indicating a process is alive</li>
        <li>Push heartbeats are sent proactively; pull requires requests</li>
        <li>Heartbeat interval affects detection time and network overhead</li>
        <li>Centralized monitoring is simple but has single point of failure</li>
        <li>Gossip-based heartbeats scale better for large systems</li>
        <li>Leases provide stronger guarantees than simple heartbeats</li>
        <li>SWIM combines direct and indirect probing for robustness</li>
      </ul>
    </div>
  </div>
);

export default HeartbeatMechanisms;
