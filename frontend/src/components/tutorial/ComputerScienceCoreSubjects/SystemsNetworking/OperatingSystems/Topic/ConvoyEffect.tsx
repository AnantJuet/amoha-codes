import React from 'react';

const ConvoyEffect: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Convoy Effect
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The convoy effect is a phenomenon that occurs in CPU scheduling when a long-running
      process holds the CPU, causing all shorter processes to wait behind it like vehicles
      stuck behind a slow truck. This primarily affects non-preemptive scheduling algorithms
      like First Come First Serve (FCFS).
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Understanding the Convoy Effect</h2>
    <p className="leading-relaxed">
      Imagine a highway with one lane. A slow-moving truck is at the front, and faster
      cars are stuck behind it. Even though the cars could move faster, they must wait
      until the truck reaches its destination. This is exactly what happens with CPU
      scheduling when a CPU-bound process holds the processor.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Convoy Effect Visualization:

Slow Process (CPU-bound)     Fast Processes (I/O-bound)
        ┌────┐               ┌────┐┌────┐┌────┐┌────┐
        │ P1 │               │ P2 ││ P3 ││ P4 ││ P5 │
        │SLOW│               │WAIT││WAIT││WAIT││WAIT│
        └────┘               └────┘└────┘└────┘└────┘
           │                    │     │     │     │
           └────────────────────┴─────┴─────┴─────┘
                        All waiting for P1

P1: Long CPU burst (e.g., 100ms)
P2-P5: Short CPU bursts (e.g., 2ms each)

Result: Average waiting time = (0 + 100 + 102 + 104 + 106) / 5 = 82.4ms

Without convoy (if P2-P5 ran first):
Average waiting time = (0 + 2 + 4 + 6 + 8) / 5 = 4ms for P2-P5
`}
      </pre>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <p className="leading-relaxed">
      Consider a system with FCFS scheduling:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival Time</th>
            <th className="p-3 border">Burst Time</th>
            <th className="p-3 border">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">50</td>
            <td className="p-3 border">CPU-bound</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">I/O-bound</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">I/O-bound</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">I/O-bound</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">FCFS Execution (Convoy Effect):</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Gantt Chart:
|          P1 (CPU-bound)          | P2 | P3|  P4  |
0                                 50   53  55     59

Waiting Times:
P1: 0
P2: 50 - 1 = 49
P3: 53 - 2 = 51
P4: 55 - 3 = 52

Average Waiting Time: (0 + 49 + 51 + 52) / 4 = 38ms
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">If I/O-bound processes ran first (SJF):</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Gantt Chart:
| P3| P2 |  P4  |          P1 (CPU-bound)          |
0   2    5     9                                   59

Waiting Times:
P1: 9 - 0 = 9
P2: 2 - 1 = 1
P3: 0 - 2 = (wait from arrival) = 0 (if we consider 0)
P4: 5 - 3 = 2

Average Waiting Time: (9 + 1 + 0 + 2) / 4 = 3ms

Reduction: 38ms → 3ms (12x improvement!)
`}
      </pre>
    </div>

    {/* Impact on System */}
    <h2 className="text-3xl font-bold mt-8">Impact on System Performance</h2>

    <h3 className="text-2xl font-semibold mt-4">1. CPU Utilization</h3>
    <p className="leading-relaxed">
      While the CPU-bound process runs, the CPU is 100% utilized. But when I/O-bound
      processes finally run, they quickly block for I/O, leaving the CPU idle.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. I/O Device Utilization</h3>
    <p className="leading-relaxed">
      I/O devices remain idle while waiting for their processes to get CPU time,
      leading to poor overall device utilization.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. System Throughput</h3>
    <p className="leading-relaxed">
      The convoy effect reduces system throughput because resources are not used
      efficiently. Multiple short jobs could have completed during the time one
      long job held the CPU.
    </p>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Resource Utilization Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
WITH CONVOY EFFECT:

CPU:    |█████████████████████████████████████████████|░░░░░░░░░|
I/O-1:  |░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|████|░░░░░|
I/O-2:  |░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░|███|░|
        0                                              50      60

        Long CPU-bound process runs, I/O devices idle

WITHOUT CONVOY EFFECT (better scheduling):

CPU:    |██|███|████|██|███|████|██████████████████████████|░░░|
I/O-1:  |░░|███|░░░░|██|███|░░░░|░░░░░░░░░░░░░░░░░░░░░░░░░░░|░░░|
I/O-2:  |░░░░░|████|░░░|████|░░░|░░░░░░░░░░░░░░░░░░░░░░░░░░░|░░░|
        0                                                    60

        Interleaved execution, better device utilization
`}
      </pre>
    </div>

    {/* When Does It Occur */}
    <h2 className="text-3xl font-bold mt-8">When Does the Convoy Effect Occur?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Non-preemptive scheduling:</strong> FCFS is the primary culprit</li>
      <li><strong>Mix of CPU-bound and I/O-bound processes:</strong> The effect is most pronounced</li>
      <li><strong>CPU-bound process arrives first:</strong> Blocks all others</li>
      <li><strong>Single queue systems:</strong> No priority differentiation</li>
    </ul>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to the Convoy Effect</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Solution</th>
            <th className="p-3 border">How It Helps</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Preemptive Scheduling</td>
            <td className="p-3 border">Long processes are interrupted, allowing short processes to run</td>
          </tr>
          <tr>
            <td className="p-3 border">Round Robin</td>
            <td className="p-3 border">Time slicing ensures all processes get CPU time</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Job First (SJF)</td>
            <td className="p-3 border">Short processes run before long ones</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority Scheduling</td>
            <td className="p-3 border">I/O-bound processes can have higher priority</td>
          </tr>
          <tr>
            <td className="p-3 border">Multilevel Feedback Queue</td>
            <td className="p-3 border">CPU-bound processes naturally move to lower priority</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Convoy Effect in Other Contexts */}
    <h2 className="text-3xl font-bold mt-8">Convoy Effect Beyond CPU Scheduling</h2>
    <p className="leading-relaxed">
      The convoy effect can occur in any resource sharing scenario:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Database locks:</strong> Long transaction blocks many short transactions</li>
      <li><strong>Disk I/O:</strong> Large file transfer blocks many small reads/writes</li>
      <li><strong>Network:</strong> Large packet delays many small packets</li>
      <li><strong>Memory allocation:</strong> Large allocation request blocks smaller ones</li>
    </ul>

    {/* Real-World Example */}
    <h2 className="text-3xl font-bold mt-8">Real-World Analogy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Grocery Store Checkout:

CONVOY EFFECT:
Customer 1: 100 items (15 minutes)
Customer 2: 3 items (1 minute)
Customer 3: 2 items (1 minute)
Customer 4: 5 items (2 minutes)

Total wait for Customer 4: 17+ minutes!

WITH EXPRESS LANE (like preemptive scheduling):
Express Lane: Customers 2, 3, 4 (4 minutes total)
Regular Lane: Customer 1 (15 minutes)

Customer 4 total wait: 2 minutes!

The express lane is like using SJF or Round Robin
to prevent the convoy effect.
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Convoy effect occurs when short processes wait behind long processes</li>
      <li>Primarily affects non-preemptive algorithms like FCFS</li>
      <li>Results in high average waiting time</li>
      <li>Causes poor utilization of I/O devices</li>
      <li>Reduces overall system throughput</li>
      <li>Preemptive scheduling and SJF are effective solutions</li>
      <li>The effect can occur in any queued resource access scenario</li>
    </ul>
  </div>
);

export default ConvoyEffect;
