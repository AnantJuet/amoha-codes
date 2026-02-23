import React from 'react';

const SRTF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shortest Remaining Time First (SRTF) Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shortest Remaining Time First (SRTF), also known as Shortest Remaining Time (SRT)
      or Preemptive Shortest Job First, is the preemptive version of SJF scheduling.
      It always selects the process with the smallest remaining execution time.
      When a new process arrives, if its burst time is less than the remaining time
      of the currently executing process, preemption occurs.
    </p>

    {/* Algorithm Description */}
    <h2 className="text-3xl font-bold mt-8">How SRTF Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>At any time, the process with the shortest remaining CPU burst runs</li>
      <li>When a new process arrives, compare its burst time with remaining time of current process</li>
      <li>If new process has shorter burst, preempt current process</li>
      <li>Preempted process returns to ready queue</li>
      <li>Continue until all processes complete</li>
    </ul>

    {/* Preemption Diagram */}
    <h2 className="text-3xl font-bold mt-8">Preemption Illustration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
At time 0: P1 starts (burst = 8)
At time 2: P2 arrives (burst = 4)
           P1 remaining = 6, P2 burst = 4
           4 < 6, so P1 is preempted, P2 runs

Timeline:
Time:    0    2    6    ...
P1:      ████
              ↓ preempted
P2:           ████████

P2 (burst 4) preempts P1 (remaining 6) at time 2
`}
      </pre>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <p className="leading-relaxed">
      Consider the following processes:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival Time</th>
            <th className="p-3 border">Burst Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">8</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Step-by-Step Execution:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Time 0: Only P1 available. P1 runs.
        P1 remaining = 8

Time 1: P2 arrives (burst = 4)
        P1 remaining = 7
        Compare: P2(4) < P1(7) → P1 preempted, P2 runs

Time 2: P3 arrives (burst = 2)
        P2 remaining = 3
        Compare: P3(2) < P2(3) → P2 preempted, P3 runs

Time 3: P4 arrives (burst = 1)
        P3 remaining = 1
        Compare: P4(1) = P3(1) → No preemption (tie), P3 continues

Time 4: P3 completes
        Ready: P1(7), P2(3), P4(1)
        P4 has smallest remaining, P4 runs

Time 5: P4 completes
        Ready: P1(7), P2(3)
        P2 has smallest remaining, P2 runs

Time 8: P2 completes
        Only P1(7) remaining, P1 runs

Time 15: P1 completes
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Gantt Chart:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
|P1|  P2  |P3| P4|   P2   |      P1       |
0  1      2  4   5        8               15
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
            <td className="p-3 border">15</td>
            <td className="p-3 border">15 - 0 = 15</td>
            <td className="p-3 border">15 - 8 = 7</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">8 - 1 = 7</td>
            <td className="p-3 border">7 - 4 = 3</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4 - 2 = 2</td>
            <td className="p-3 border">2 - 2 = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">5 - 3 = 2</td>
            <td className="p-3 border">2 - 1 = 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Average Waiting Time:</strong> (7 + 3 + 0 + 1) / 4 = 2.75 ms<br/>
      <strong>Average Turnaround Time:</strong> (15 + 7 + 2 + 2) / 4 = 6.5 ms
    </p>

    {/* SRTF vs SJF Comparison */}
    <h2 className="text-3xl font-bold mt-8">SRTF vs Non-Preemptive SJF</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SRTF (Preemptive)</th>
            <th className="p-3 border">SJF (Non-Preemptive)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Preemption</td>
            <td className="p-3 border">Yes, when shorter job arrives</td>
            <td className="p-3 border">No, runs to completion</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Wait Time</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Context Switches</td>
            <td className="p-3 border">More frequent</td>
            <td className="p-3 border">Fewer</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Better for short jobs</td>
            <td className="p-3 border">Variable</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">More likely for long jobs</td>
            <td className="p-3 border">Possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Comparison with Same Example */}
    <h2 className="text-3xl font-bold mt-8">Same Example with Non-Preemptive SJF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Using the same process set:

Non-Preemptive SJF:
|    P1    |P4|  P3  |    P2    |
0          8  9      11         15

SRTF:
|P1|  P2  |P3| P4|   P2   |      P1       |
0  1      2  4   5        8               15

Waiting Times:
                 SRTF    SJF
P1:               7       0
P2:               3      10
P3:               0       7
P4:               1       5

Average:        2.75    5.5

SRTF has significantly lower average waiting time!
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Optimal average waiting time among all scheduling algorithms</li>
      <li>Short processes get excellent response time</li>
      <li>Better than non-preemptive SJF in most cases</li>
      <li>Responsive to new short processes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Requires knowing or estimating remaining burst time</li>
      <li>Higher overhead due to frequent context switches</li>
      <li>Long processes may suffer indefinite starvation</li>
      <li>More complex to implement than non-preemptive algorithms</li>
      <li>Continuous monitoring of remaining times needed</li>
    </ul>

    {/* Starvation Issue */}
    <h2 className="text-3xl font-bold mt-8">Starvation Problem</h2>
    <p className="leading-relaxed">
      SRTF is particularly prone to starvation. A long process may never run if
      short processes keep arriving.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Starvation Example:

P1 (burst = 100) arrives at time 0
P2 (burst = 2) arrives at time 2
P3 (burst = 2) arrives at time 4
P4 (burst = 2) arrives at time 6
...more short processes keep arriving...

P1 keeps getting preempted and may never complete!

Solution: Aging
- Increase priority of waiting processes over time
- Eventually, P1's effective remaining time decreases
- Ensures all processes eventually run
`}
      </pre>
    </div>

    {/* Implementation Considerations */}
    <h2 className="text-3xl font-bold mt-8">Implementation Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Maintain remaining burst time for each process</li>
      <li>Check for preemption on every new process arrival</li>
      <li>Use priority queue based on remaining time</li>
      <li>Consider overhead of frequent context switches</li>
      <li>May use exponential averaging for burst prediction</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>SRTF is the preemptive version of SJF</li>
      <li>It provides optimal average waiting time</li>
      <li>Preemption occurs when a shorter job arrives</li>
      <li>More context switches than non-preemptive SJF</li>
      <li>Starvation of long processes is a significant concern</li>
      <li>Aging can be used to prevent starvation</li>
      <li>Practical implementation requires burst time prediction</li>
    </ul>
  </div>
);

export default SRTF;
