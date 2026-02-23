import React from 'react';

const MultilevelFeedbackQueue: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multilevel Feedback Queue Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multilevel Feedback Queue (MLFQ) is the most sophisticated and flexible CPU
      scheduling algorithm. Unlike the basic multilevel queue, it allows processes
      to move between queues based on their behavior. This enables the scheduler
      to adapt to process characteristics without prior knowledge.
    </p>

    {/* Core Concept */}
    <h2 className="text-3xl font-bold mt-8">Core Concept</h2>
    <p className="leading-relaxed">
      The key innovation of MLFQ is the ability to separate processes based on observed
      behavior. It uses feedback from process execution to adjust priorities dynamically.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
MLFQ Structure:

Queue 0 (Highest Priority) - Quantum = 8ms
┌────────────────────────────────────────┐
│ New processes enter here │ RR (q=8)    │
└────────────────────────────────────────┘
        │ (if uses full quantum)
        ↓
Queue 1 - Quantum = 16ms
┌────────────────────────────────────────┐
│ Processes demoted here │ RR (q=16)     │
└────────────────────────────────────────┘
        │ (if uses full quantum)
        ↓
Queue 2 (Lowest Priority) - FCFS
┌────────────────────────────────────────┐
│ Long-running processes │ FCFS          │
└────────────────────────────────────────┘

Movement Rules:
• New processes → Queue 0 (highest priority)
• Use full quantum → Demoted to lower queue
• Give up CPU early (I/O) → Stay in current queue or promoted
• Periodic boost → All processes back to Queue 0
`}
      </pre>
    </div>

    {/* Rules of MLFQ */}
    <h2 className="text-3xl font-bold mt-8">MLFQ Rules</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Rule 1:</strong> If Priority(A) &gt; Priority(B), A runs.
      </li>
      <li>
        <strong>Rule 2:</strong> If Priority(A) = Priority(B), A and B run in Round Robin.
      </li>
      <li>
        <strong>Rule 3:</strong> New processes enter at the highest priority queue.
      </li>
      <li>
        <strong>Rule 4:</strong> If a process uses its entire time quantum, it is
        demoted to a lower priority queue.
      </li>
      <li>
        <strong>Rule 5:</strong> If a process gives up the CPU before the quantum
        expires (e.g., for I/O), it stays at the current priority level.
      </li>
    </ul>

    {/* Behavior Adaptation */}
    <h2 className="text-3xl font-bold mt-8">How MLFQ Adapts to Behavior</h2>

    <h3 className="text-2xl font-semibold mt-4">Interactive/I/O-Bound Processes</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Enter at highest priority</li>
      <li>Frequently give up CPU for I/O</li>
      <li>Stay in high priority queues</li>
      <li>Get good response time</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">CPU-Bound Processes</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Enter at highest priority</li>
      <li>Use full time quantum</li>
      <li>Get demoted to lower queues</li>
      <li>Eventually end up in lowest queue (FCFS)</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Three Queues: Q0 (q=4), Q1 (q=8), Q2 (FCFS)
Processes: P1 (CPU-bound, burst=20), P2 (Interactive, bursts of 2)

Timeline:

Time 0: P1 arrives, enters Q0
Time 0-4: P1 runs in Q0, uses full quantum → demoted to Q1

Time 4: P2 arrives, enters Q0
Time 4-6: P2 runs in Q0, gives up CPU (I/O), stays in Q0

Time 6-14: P1 runs in Q1, uses full quantum → demoted to Q2

Time 14: P2 returns from I/O, runs in Q0
Time 14-16: P2 runs, gives up CPU, stays in Q0

Time 16-28: P1 runs in Q2 (FCFS until complete)

Gantt Chart:
| P1 |P2| P1 (Q1) |P2| P1 (Q2)...
0    4  6        14 16

Observation:
• P2 (interactive) gets fast response, stays in Q0
• P1 (CPU-bound) progressively moves to lower queues
`}
      </pre>
    </div>

    {/* Starvation and Priority Boost */}
    <h2 className="text-3xl font-bold mt-8">Preventing Starvation: Priority Boost</h2>
    <p className="leading-relaxed">
      A major problem with basic MLFQ is starvation. CPU-bound processes in lower
      queues may never run if interactive processes keep arriving. The solution
      is periodic priority boosting.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Priority Boost:

Rule 6: After some time period S, move all processes to Queue 0.

Before Boost:                    After Boost (time S):
Q0: [P1, P2] (interactive)       Q0: [P1, P2, P3, P4, P5]
Q1: [P3]                         Q1: []
Q2: [P4, P5] (starving)          Q2: []

Benefits:
1. Prevents starvation
2. Handles processes that change behavior
3. Provides opportunity for CPU-bound processes
4. Resets the learning about process behavior

Typical S value: 1-100 seconds
`}
      </pre>
    </div>

    {/* Gaming Prevention */}
    <h2 className="text-3xl font-bold mt-8">Preventing Gaming</h2>
    <p className="leading-relaxed">
      A clever program could game the scheduler by giving up the CPU just before
      the quantum expires, staying in high-priority queues while still using lots
      of CPU time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Gaming Attack:
Process repeatedly:
1. Use 99% of time quantum
2. Issue dummy I/O just before quantum expires
3. Stay in high priority queue
4. Repeat

Prevention (Better Rule 4):

Old Rule 4: If uses entire quantum, demote.

New Rule 4: Track TOTAL time used at each level.
            Once a process uses its allotment, demote it.

Allotment = Sum of all time slices at current priority

Example:
Q0 allotment = 10ms
P uses: 3ms (I/O), 4ms (I/O), 3ms (I/O) = 10ms total
P is demoted even though it never used full quantum!
`}
      </pre>
    </div>

    {/* Configuration Parameters */}
    <h2 className="text-3xl font-bold mt-8">MLFQ Configuration Parameters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Number of Queues</td>
            <td className="p-3 border">How many priority levels</td>
            <td className="p-3 border">3-8</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Quantum per Queue</td>
            <td className="p-3 border">Slice size at each level</td>
            <td className="p-3 border">Increasing (8, 16, 32ms)</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Allotment</td>
            <td className="p-3 border">Total time before demotion</td>
            <td className="p-3 border">Varies by queue</td>
          </tr>
          <tr>
            <td className="p-3 border">Boost Period (S)</td>
            <td className="p-3 border">Time between priority boosts</td>
            <td className="p-3 border">1-100 seconds</td>
          </tr>
          <tr>
            <td className="p-3 border">Algorithm per Queue</td>
            <td className="p-3 border">Scheduling within each queue</td>
            <td className="p-3 border">RR (high), FCFS (low)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Adapts to process behavior without prior knowledge</li>
      <li>Good response time for interactive processes</li>
      <li>Fair treatment for CPU-bound processes (with boost)</li>
      <li>Combines benefits of multiple algorithms</li>
      <li>Self-tuning based on workload</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Complex to implement</li>
      <li>Many parameters to tune</li>
      <li>Can be gamed (without proper protections)</li>
      <li>Harder to analyze mathematically</li>
      <li>Higher overhead than simpler algorithms</li>
    </ul>

    {/* MLFQ vs Multilevel Queue */}
    <h2 className="text-3xl font-bold mt-8">MLFQ vs Multilevel Queue</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Multilevel Queue</th>
            <th className="p-3 border">Multilevel Feedback Queue</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Queue Movement</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">Allowed (feedback)</td>
          </tr>
          <tr>
            <td className="p-3 border">Process Assignment</td>
            <td className="p-3 border">Permanent</td>
            <td className="p-3 border">Dynamic</td>
          </tr>
          <tr>
            <td className="p-3 border">Adaptability</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Prior Knowledge</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Not needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Usage */}
    <h2 className="text-3xl font-bold mt-8">Real-World Implementations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>BSD Unix:</strong> Uses MLFQ variant with 32 priority queues
      </li>
      <li>
        <strong>Solaris:</strong> Interactive scheduling class uses MLFQ principles
      </li>
      <li>
        <strong>Windows:</strong> Priority boost mechanisms similar to MLFQ
      </li>
      <li>
        <strong>Linux CFS:</strong> Different approach but achieves similar goals
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Processes can move between queues based on behavior</li>
      <li>Uses feedback to learn process characteristics</li>
      <li>Short/interactive processes stay in high-priority queues</li>
      <li>Long/CPU-bound processes sink to lower-priority queues</li>
      <li>Priority boost prevents starvation</li>
      <li>Allotment tracking prevents gaming</li>
      <li>Most sophisticated and commonly used scheduling algorithm</li>
    </ul>
  </div>
);

export default MultilevelFeedbackQueue;
