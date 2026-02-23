import React from "react";

const FailureDetection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Failure Detection in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Failure detection is the process of identifying when a component in a
      distributed system has failed. This is a fundamental challenge because
      in asynchronous distributed systems, it is impossible to distinguish
      between a slow process and a failed one with certainty.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Failure Detection Problem</h2>
    <p className="text-lg leading-relaxed mt-2">
      In distributed systems, failure detection faces a fundamental limitation:
      we cannot distinguish between a crashed process and a very slow one.
      This uncertainty leads to the design of failure detectors with different
      properties and trade-offs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Failure Detector Properties</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Variants</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Completeness</td>
            <td className="p-3 border">
              Every failed process is eventually suspected
            </td>
            <td className="p-3 border">Strong, Weak</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accuracy</td>
            <td className="p-3 border">
              Correct processes are not wrongly suspected
            </td>
            <td className="p-3 border">Strong, Weak, Eventual</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Completeness Types</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Strong Completeness</h3>
        <p className="leading-relaxed">
          Eventually, every process that crashes is permanently suspected by
          every correct process. All correct processes will detect all failures.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Weak Completeness</h3>
        <p className="leading-relaxed">
          Eventually, every process that crashes is permanently suspected by
          at least one correct process. Only one process needs to detect failure.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Accuracy Types</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Accuracy Spectrum:

Strong Accuracy ─────────────────────────────────────▶ No Accuracy
       │                    │                    │
       ▼                    ▼                    ▼
┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
│   Strong    │    │   Eventual   │    │      Weak       │
│   Accuracy  │    │   Accuracy   │    │    Accuracy     │
├─────────────┤    ├──────────────┤    ├─────────────────┤
│ No correct  │    │ After some   │    │ Some correct    │
│ process is  │    │ time, no     │    │ process is      │
│ ever        │    │ correct      │    │ never           │
│ suspected   │    │ process is   │    │ suspected       │
│             │    │ suspected    │    │                 │
└─────────────┘    └──────────────┘    └─────────────────┘
     Most               Practical           Least
  restrictive          (commonly            restrictive
                        used)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Detector Classes</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Class</th>
            <th className="p-3 border">Completeness</th>
            <th className="p-3 border">Accuracy</th>
            <th className="p-3 border">Symbol</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Perfect</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">P</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strong</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Weak</td>
            <td className="p-3 border">S</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eventually Perfect</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Eventual Strong</td>
            <td className="p-3 border">&#9671;P</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eventually Strong</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Eventual Weak</td>
            <td className="p-3 border">&#9671;S</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failure Detection Process</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Failure Detection Flow:

    Process A                Process B
        │                        │
        │   Heartbeat/Ping      │
        │───────────────────────▶│
        │                        │
        │   Response/Pong       │
        │◀───────────────────────│
        │                        │
        │   Heartbeat/Ping      │
        │───────────────────────▶│
        │                        │
        │   Response/Pong       │
        │◀───────────────────────│
        │                        │
        │   Heartbeat/Ping      │
        │───────────────────────▶│
        │                        │ ← B crashes
        │                        ╳
        │   Timeout!            │
        │                        │
        ▼                        │
   Suspect B failed              │

Timeout = Detection threshold for suspecting failure`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timeout-Based Detection</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Short Timeout</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Fast failure detection</li>
          <li>Higher false positive rate</li>
          <li>More false suspicions of slow processes</li>
          <li>Good for real-time systems</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Long Timeout</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Slower failure detection</li>
          <li>Lower false positive rate</li>
          <li>More accurate but delayed</li>
          <li>Good for high-latency networks</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Adaptive Failure Detection</h2>

    <p className="text-lg leading-relaxed mt-2">
      Adaptive failure detectors dynamically adjust their timeout based on
      observed network conditions, improving the trade-off between detection
      speed and accuracy.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Adaptive Timeout Calculation:

timeout(i+1) = alpha * timeout(i) + (1 - alpha) * RTT(i)

Where:
  alpha = smoothing factor (0 < alpha < 1)
  RTT(i) = measured round-trip time for sample i

Safety Margin:
  detection_timeout = timeout + beta * deviation

Where:
  deviation = estimated RTT variance
  beta = safety factor (typically 4)

Example with alpha = 0.8, beta = 4:
┌─────────┬─────────┬────────────┬────────────────────┐
│ Sample  │ RTT(ms) │ Timeout(ms)│ Detection(ms)      │
├─────────┼─────────┼────────────┼────────────────────┤
│ 1       │ 100     │ 100        │ 100 + 4*10 = 140   │
│ 2       │ 120     │ 104        │ 104 + 4*12 = 152   │
│ 3       │ 80      │ 99         │ 99 + 4*15 = 159    │
│ 4       │ 150     │ 109        │ 109 + 4*20 = 189   │
└─────────┴─────────┴────────────┴────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Gossip-Based Failure Detection</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Gossip Protocol for Failure Detection:

1. Each node maintains a membership list with heartbeat counters

   Node A's View:
   ┌────────┬───────────┬────────────┐
   │ Node   │ Heartbeat │ Local Time │
   ├────────┼───────────┼────────────┤
   │ A      │ 45        │ 100        │
   │ B      │ 42        │ 98         │
   │ C      │ 44        │ 99         │
   │ D      │ 38        │ 85         │ ← Stale! Suspect
   └────────┴───────────┴────────────┘

2. Periodically gossip membership list to random peers

   A ──gossip──▶ B
   B updates its list by taking max(heartbeats)
   B ──gossip──▶ C
   ...

3. If heartbeat not updated within T_fail, suspect failure
4. If suspected for T_cleanup, remove from list

Benefits:
- Scalable (O(log n) dissemination time)
- No single point of failure
- Handles network partitions gracefully`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Accrual Failure Detector</h2>

    <p className="text-lg leading-relaxed mt-2">
      Instead of binary suspicion, accrual failure detectors output a
      suspicion level that increases over time without heartbeats.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Binary Detector</th>
            <th className="p-3 border">Accrual Detector</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Output</td>
            <td className="p-3 border">Suspected / Not suspected</td>
            <td className="p-3 border">Suspicion level (0 to infinity)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Threshold</td>
            <td className="p-3 border">Fixed timeout</td>
            <td className="p-3 border">Application-specific</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High - different apps use different thresholds</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Perfect failure detection is impossible in asynchronous systems</li>
        <li>Completeness ensures failed processes are eventually detected</li>
        <li>Accuracy ensures correct processes are not wrongly suspected</li>
        <li>There is a trade-off between detection speed and accuracy</li>
        <li>Adaptive detectors adjust timeout based on network conditions</li>
        <li>Gossip-based detection provides scalability and fault tolerance</li>
        <li>Accrual detectors provide flexible suspicion levels</li>
      </ul>
    </div>
  </div>
);

export default FailureDetection;
