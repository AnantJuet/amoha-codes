import React from 'react';

const SJF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shortest Job First (SJF) Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shortest Job First (SJF), also known as Shortest Job Next (SJN) or Shortest
      Process Next (SPN), is a scheduling algorithm that selects the process with
      the smallest execution time (burst time) to run next. It is provably optimal
      for minimizing average waiting time.
    </p>

    {/* Algorithm Description */}
    <h2 className="text-3xl font-bold mt-8">How SJF Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>When the CPU becomes available, examine all processes in the ready queue</li>
      <li>Select the process with the shortest next CPU burst</li>
      <li>Allocate the CPU to this process</li>
      <li>The process runs to completion (non-preemptive SJF)</li>
      <li>Repeat when the process terminates or blocks</li>
    </ul>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Non-preemptive:</strong> Once started, process runs to completion</li>
      <li><strong>Optimal:</strong> Provably gives minimum average waiting time</li>
      <li><strong>Requires prediction:</strong> Burst time must be known or estimated</li>
      <li><strong>May cause starvation:</strong> Long processes may wait indefinitely</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <p className="leading-relaxed">
      Consider the following processes with their arrival and burst times:
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
            <td className="p-3 border">7</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Gantt Chart:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
|   P1   | P3 |   P2   |   P4   |
0        7    8        12       16

Execution Order:
- At t=0: Only P1 available, P1 runs (burst=7)
- At t=7: P2, P3, P4 available. P3 has shortest burst (1), P3 runs
- At t=8: P2, P4 available. P2 has shorter burst (4), P2 runs
- At t=12: Only P4 remaining, P4 runs
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Calculations:</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Completion Time</th>
            <th className="p-3 border">Turnaround Time</th>
            <th className="p-3 border">Waiting Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">7 - 0 = 7</td>
            <td className="p-3 border">7 - 7 = 0</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">12</td>
            <td className="p-3 border">12 - 2 = 10</td>
            <td className="p-3 border">10 - 4 = 6</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">8 - 4 = 4</td>
            <td className="p-3 border">4 - 1 = 3</td>
          </tr>
          <tr>
            <td className="p-3 border">P4</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">16 - 5 = 11</td>
            <td className="p-3 border">11 - 4 = 7</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Average Waiting Time:</strong> (0 + 6 + 3 + 7) / 4 = 4 ms<br/>
      <strong>Average Turnaround Time:</strong> (7 + 10 + 4 + 11) / 4 = 8 ms
    </p>

    {/* Burst Time Estimation */}
    <h2 className="text-3xl font-bold mt-8">Estimating Burst Time</h2>
    <p className="leading-relaxed">
      The main challenge with SJF is that the next CPU burst is not known in advance.
      The algorithm requires prediction of burst times, typically using exponential
      averaging of previous bursts.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Exponential Averaging Formula:

τ(n+1) = α * t(n) + (1 - α) * τ(n)

Where:
- τ(n+1) = predicted value for next burst
- t(n) = actual length of nth burst
- τ(n) = predicted value for nth burst
- α = weight (0 ≤ α ≤ 1)

Example with α = 0.5:
Previous prediction τ(n) = 10
Actual burst t(n) = 6
Next prediction τ(n+1) = 0.5 * 6 + 0.5 * 10 = 8

If α = 0: Recent history ignored, τ(n+1) = τ(n)
If α = 1: Only last burst matters, τ(n+1) = t(n)
`}
      </pre>
    </div>

    {/* Optimality Proof */}
    <h2 className="text-3xl font-bold mt-8">Why SJF is Optimal</h2>
    <p className="leading-relaxed">
      SJF minimizes average waiting time because short jobs complete quickly,
      reducing the wait for all jobs behind them.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Consider processes with burst times: 3, 5, 2

Order by burst time (SJF): 2, 3, 5
Waiting times: 0, 2, 5 → Average = 2.33

Any other order, e.g., 5, 3, 2:
Waiting times: 0, 5, 8 → Average = 4.33

SJF places short jobs first, so they contribute less
to total waiting time accumulated by subsequent jobs.
`}
      </pre>
    </div>

    {/* Comparison with FCFS */}
    <h2 className="text-3xl font-bold mt-8">SJF vs FCFS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SJF</th>
            <th className="p-3 border">FCFS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Selection Criteria</td>
            <td className="p-3 border">Shortest burst time</td>
            <td className="p-3 border">Arrival order</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Waiting Time</td>
            <td className="p-3 border">Minimum (optimal)</td>
            <td className="p-3 border">Often high</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">Possible for long jobs</td>
            <td className="p-3 border">No starvation</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Complex (needs prediction)</td>
            <td className="p-3 border">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Convoy Effect</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Optimal for minimizing average waiting time</li>
      <li>Reduces average turnaround time</li>
      <li>Avoids convoy effect seen in FCFS</li>
      <li>Good throughput for short processes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Difficult to know exact burst time in advance</li>
      <li>Long processes may suffer starvation</li>
      <li>Not practical without good burst time prediction</li>
      <li>May lead to increased variance in waiting times</li>
    </ul>

    {/* Variants */}
    <h2 className="text-3xl font-bold mt-8">Variants of SJF</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Shortest Remaining Time First (SRTF):</strong> Preemptive version
        of SJF. If a new process arrives with shorter burst than remaining time
        of current process, preemption occurs.
      </li>
      <li>
        <strong>Highest Response Ratio Next (HRRN):</strong> Considers waiting
        time to prevent starvation. Response ratio = (Waiting + Burst) / Burst.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>SJF selects the process with shortest burst time</li>
      <li>It is provably optimal for average waiting time</li>
      <li>Main challenge is knowing or predicting burst times</li>
      <li>Exponential averaging is used for burst prediction</li>
      <li>Long processes may starve if short processes keep arriving</li>
      <li>Non-preemptive SJF is also called Shortest Job Next (SJN)</li>
    </ul>
  </div>
);

export default SJF;
