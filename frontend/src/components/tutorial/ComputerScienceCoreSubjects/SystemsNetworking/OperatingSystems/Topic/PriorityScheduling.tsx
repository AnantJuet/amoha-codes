import React from 'react';

const PriorityScheduling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Priority Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Priority scheduling is a CPU scheduling algorithm where each process is assigned
      a priority, and the CPU is allocated to the process with the highest priority.
      It allows important processes to be executed before less important ones, making
      it suitable for systems where some tasks are more critical than others.
    </p>

    {/* Priority Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding Priority</h2>
    <p className="leading-relaxed">
      Priority is a number assigned to each process indicating its importance. The
      convention for priority values varies:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Lower number = Higher priority:</strong> Priority 1 is most important (common in many systems)</li>
      <li><strong>Higher number = Higher priority:</strong> Priority 100 is most important (some systems)</li>
    </ul>
    <p className="leading-relaxed mt-3">
      In this discussion, we will use the convention where <strong>lower numbers indicate
      higher priority</strong> (priority 1 is highest).
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">How Priority Scheduling Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Each process is assigned a priority value</li>
      <li>The scheduler selects the process with highest priority from ready queue</li>
      <li>CPU is allocated to this process</li>
      <li>Process runs until completion (non-preemptive) or until preempted (preemptive)</li>
      <li>In case of equal priority, FCFS is typically used</li>
    </ul>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Priority Scheduling</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Non-Preemptive Priority Scheduling</h3>
    <p className="leading-relaxed">
      Once a process starts executing, it continues until it completes or blocks,
      regardless of whether a higher priority process arrives.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Preemptive Priority Scheduling</h3>
    <p className="leading-relaxed">
      If a new process arrives with higher priority than the currently running process,
      the running process is preempted and the new process runs.
    </p>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Non-Preemptive Example</h2>
    <p className="leading-relaxed">
      Consider the following processes (lower priority number = higher priority):
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival Time</th>
            <th className="p-3 border">Burst Time</th>
            <th className="p-3 border">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">5</td>
          </tr>
          <tr>
            <td className="p-3 border">P5</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Gantt Chart:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
|P2|   P5   |    P1    |P3| P4|
0  1        6         16  18  19

Execution Order (by priority):
P2 (priority 1) → P5 (priority 2) → P1 (priority 3)
→ P3 (priority 4) → P4 (priority 5)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Calculations:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Completion</th>
            <th className="p-3 border">Turnaround</th>
            <th className="p-3 border">Waiting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">6</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">18</td>
            <td className="p-3 border">18</td>
            <td className="p-3 border">16</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">19</td>
            <td className="p-3 border">19</td>
            <td className="p-3 border">18</td>
          </tr>
          <tr>
            <td className="p-3 border">P5</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">6</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Average Waiting Time:</strong> (6 + 0 + 16 + 18 + 1) / 5 = 8.2 ms<br/>
      <strong>Average Turnaround Time:</strong> (16 + 1 + 18 + 19 + 6) / 5 = 12 ms
    </p>

    {/* Priority Assignment */}
    <h2 className="text-3xl font-bold mt-8">How Priorities are Assigned</h2>

    <h3 className="text-2xl font-semibold mt-4">Internal Factors</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Time limits</li>
      <li>Memory requirements</li>
      <li>Number of open files</li>
      <li>Ratio of I/O burst to CPU burst</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">External Factors</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Importance of the process</li>
      <li>Type of process (system vs user)</li>
      <li>Department paying for computer use</li>
      <li>Political factors</li>
    </ul>

    {/* Static vs Dynamic Priority */}
    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Priority</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static Priority</th>
            <th className="p-3 border">Dynamic Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Assignment</td>
            <td className="p-3 border">Fixed at creation</td>
            <td className="p-3 border">Changes during execution</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Can be prevented</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Starvation Problem */}
    <h2 className="text-3xl font-bold mt-8">The Starvation Problem</h2>
    <p className="leading-relaxed">
      A major problem with priority scheduling is indefinite blocking or starvation.
      A low priority process may wait indefinitely because higher priority processes
      keep arriving.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Starvation Example:

Low priority process P1 (priority 10) waits in queue
Higher priority processes keep arriving:
  P2 (priority 2) arrives → runs
  P3 (priority 3) arrives → runs
  P4 (priority 1) arrives → runs
  ...

P1 may never get to run!
Legend has it: When MIT's IBM 7094 was shut down in 1973,
a low-priority process submitted in 1967 had not yet run!
`}
      </pre>
    </div>

    {/* Aging Solution */}
    <h2 className="text-3xl font-bold mt-8">Solution: Aging</h2>
    <p className="leading-relaxed">
      Aging is a technique to prevent starvation by gradually increasing the priority
      of waiting processes over time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Aging Algorithm:

Initial:  P1 has priority 100 (very low)
After 1 minute waiting: P1 priority becomes 99
After 2 minutes: P1 priority becomes 98
...
Eventually: P1 priority reaches 1 (highest)

Formula example:
new_priority = initial_priority - (waiting_time / aging_factor)

This ensures every process eventually runs!
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Important processes get CPU attention first</li>
      <li>Useful for real-time systems with critical tasks</li>
      <li>Can be used for both batch and interactive systems</li>
      <li>Flexible - priority can be based on various factors</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Low priority processes may suffer starvation</li>
      <li>Determining appropriate priorities is challenging</li>
      <li>Priority assignment can be subjective</li>
      <li>Context switching overhead (in preemptive version)</li>
    </ul>

    {/* SJF as Priority Scheduling */}
    <h2 className="text-3xl font-bold mt-8">SJF as Priority Scheduling</h2>
    <p className="leading-relaxed">
      SJF is actually a special case of priority scheduling where:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Priority is defined as the inverse of predicted CPU burst time</li>
      <li>Shorter burst = Higher priority</li>
      <li>All the properties of SJF apply</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Each process is assigned a priority value</li>
      <li>Highest priority process runs first</li>
      <li>Can be preemptive or non-preemptive</li>
      <li>Priority can be static or dynamic</li>
      <li>Starvation is a major concern</li>
      <li>Aging prevents starvation by increasing priority over time</li>
      <li>SJF is priority scheduling where priority = 1/burst_time</li>
    </ul>
  </div>
);

export default PriorityScheduling;
