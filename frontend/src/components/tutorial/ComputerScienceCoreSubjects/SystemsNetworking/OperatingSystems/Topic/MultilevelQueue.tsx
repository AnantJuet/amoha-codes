import React from 'react';

const MultilevelQueue: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multilevel Queue Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multilevel Queue Scheduling partitions the ready queue into several separate
      queues, each with its own scheduling algorithm and priority level. Processes
      are permanently assigned to a queue based on their characteristics, such as
      process type, memory requirements, or priority.
    </p>

    {/* Concept */}
    <h2 className="text-3xl font-bold mt-8">Core Concept</h2>
    <p className="leading-relaxed">
      Instead of a single ready queue, the system maintains multiple queues, each
      designed for a specific type of process. Each queue can have its own scheduling
      algorithm optimized for the processes it contains.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Multilevel Queue Structure:

Priority Level      Queue                    Algorithm
─────────────────────────────────────────────────────────
    1 (Highest)    System Processes           FCFS
                         ↓
    2              Interactive Processes      Round Robin
                         ↓
    3              Interactive Editing        Round Robin
                         ↓
    4              Batch Processes            FCFS
                         ↓
    5 (Lowest)     Student Processes          FCFS


Higher priority queues are serviced before lower priority ones.
Each queue has its own scheduling algorithm.
`}
      </pre>
    </div>

    {/* Queue Organization */}
    <h2 className="text-3xl font-bold mt-8">Queue Organization</h2>

    <h3 className="text-2xl font-semibold mt-4">Common Queue Categories</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Queue Type</th>
            <th className="p-3 border">Process Examples</th>
            <th className="p-3 border">Typical Algorithm</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Real-time</td>
            <td className="p-3 border">Critical system tasks, device drivers</td>
            <td className="p-3 border">Priority-based</td>
          </tr>
          <tr>
            <td className="p-3 border">System</td>
            <td className="p-3 border">Kernel processes, daemons</td>
            <td className="p-3 border">FCFS or Priority</td>
          </tr>
          <tr>
            <td className="p-3 border">Interactive</td>
            <td className="p-3 border">GUI apps, editors, shells</td>
            <td className="p-3 border">Round Robin</td>
          </tr>
          <tr>
            <td className="p-3 border">Batch</td>
            <td className="p-3 border">Compilation, data processing</td>
            <td className="p-3 border">FCFS</td>
          </tr>
          <tr>
            <td className="p-3 border">Background</td>
            <td className="p-3 border">Maintenance, updates</td>
            <td className="p-3 border">FCFS</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Scheduling Between Queues */}
    <h2 className="text-3xl font-bold mt-8">Scheduling Between Queues</h2>
    <p className="leading-relaxed">
      There are two main approaches for scheduling across different queues:
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Fixed Priority Scheduling</h3>
    <p className="leading-relaxed">
      Higher priority queues are completely serviced before lower priority queues.
      A lower queue only runs when all higher queues are empty.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>System processes run before interactive processes</li>
      <li>Interactive processes run before batch processes</li>
      <li>May lead to starvation of lower priority queues</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Time Slice Between Queues</h3>
    <p className="leading-relaxed">
      Each queue gets a certain portion of CPU time, which it can schedule among
      its processes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Time Slice Distribution Example:

Foreground (Interactive): 80% of CPU time
Background (Batch):       20% of CPU time

Within 100ms window:
- Interactive processes get 80ms (Round Robin)
- Batch processes get 20ms (FCFS)

This prevents starvation while maintaining priorities.
`}
      </pre>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <p className="leading-relaxed">
      Consider a system with three queues:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Queue 1 (Highest Priority): System Processes - FCFS
  - P1: burst = 4

Queue 2: Interactive Processes - Round Robin (quantum = 3)
  - P2: burst = 6
  - P3: burst = 4

Queue 3 (Lowest Priority): Batch Processes - FCFS
  - P4: burst = 5

Using Fixed Priority (no time slicing):

Execution Order:
1. Queue 1 (P1) runs first: 0-4
2. Queue 2 (P2, P3) runs with RR:
   - P2: 4-7
   - P3: 7-10
   - P2: 10-13
   - P3: 13-14
3. Queue 3 (P4) runs last: 14-19

Gantt Chart:
|  P1  |  P2  |  P3  |  P2  | P3|   P4   |
0      4      7     10     13  14       19
`}
      </pre>
    </div>

    {/* Process Assignment */}
    <h2 className="text-3xl font-bold mt-8">Process Assignment to Queues</h2>
    <p className="leading-relaxed">
      Processes are typically assigned to queues based on:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Process Type:</strong> System, interactive, batch</li>
      <li><strong>Process Priority:</strong> User-defined or system-assigned</li>
      <li><strong>Memory Requirements:</strong> Large vs small memory footprint</li>
      <li><strong>User Identity:</strong> Admin, regular user, guest</li>
      <li><strong>Job Characteristics:</strong> Expected CPU burst, I/O behavior</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Important:</strong> In basic multilevel queue scheduling, once a process
      is assigned to a queue, it stays in that queue permanently. It cannot move
      between queues.
    </p>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Different scheduling for different process types</li>
      <li>Low scheduling overhead within each queue</li>
      <li>System processes get priority over user processes</li>
      <li>Interactive processes get better response time</li>
      <li>Flexible and configurable</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Starvation possible in fixed priority mode</li>
      <li>Processes cannot move between queues</li>
      <li>Inflexible - process behavior may change over time</li>
      <li>Requires accurate initial classification</li>
      <li>Complex to configure and tune</li>
    </ul>

    {/* Starvation */}
    <h2 className="text-3xl font-bold mt-8">Starvation Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Starvation in Fixed Priority:

Queue 1: [P1, P2, P3] ← Continuous arrivals
Queue 2: [P4] ← Waiting
Queue 3: [P5, P6] ← Starving

If high priority processes keep arriving in Queue 1,
processes in Queue 2 and Queue 3 may never run!

Solutions:
1. Time slicing between queues (e.g., 70%, 20%, 10%)
2. Aging: Increase priority of waiting processes
3. Use Multilevel Feedback Queue (allows queue movement)
`}
      </pre>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Multilevel Queue</th>
            <th className="p-3 border">Single Queue</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Structure</td>
            <td className="p-3 border">Multiple separate queues</td>
            <td className="p-3 border">One ready queue</td>
          </tr>
          <tr>
            <td className="p-3 border">Algorithm</td>
            <td className="p-3 border">Different per queue</td>
            <td className="p-3 border">One algorithm</td>
          </tr>
          <tr>
            <td className="p-3 border">Process Movement</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">N/A</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Windows:</strong> Uses priority queues (0-31) with different scheduling
        for real-time, system, and user processes.
      </li>
      <li>
        <strong>Linux:</strong> Uses completely fair scheduler (CFS) with nice values,
        plus real-time scheduling classes.
      </li>
      <li>
        <strong>Mainframes:</strong> Separate queues for batch jobs, time-sharing users,
        and system tasks.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Ready queue is divided into multiple separate queues</li>
      <li>Each queue has its own scheduling algorithm</li>
      <li>Processes are permanently assigned to queues</li>
      <li>Scheduling between queues can use fixed priority or time slicing</li>
      <li>Starvation is possible with fixed priority</li>
      <li>Provides flexibility for handling different process types</li>
      <li>Multilevel Feedback Queue extends this by allowing queue movement</li>
    </ul>
  </div>
);

export default MultilevelQueue;
