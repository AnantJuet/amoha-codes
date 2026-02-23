import React from 'react';

const SchedulingCriteria: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Scheduling Criteria
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Different CPU scheduling algorithms have different properties and may favor one
      class of processes over another. To compare scheduling algorithms, we use several
      criteria that measure different aspects of system performance and user satisfaction.
    </p>

    {/* Main Criteria */}
    <h2 className="text-3xl font-bold mt-8">Primary Scheduling Criteria</h2>

    {/* CPU Utilization */}
    <h3 className="text-2xl font-semibold mt-6">1. CPU Utilization</h3>
    <p className="leading-relaxed">
      CPU utilization measures the percentage of time the CPU is actively executing
      processes. The goal is to keep the CPU as busy as possible.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Range: 0% to 100%</li>
      <li>In real systems, typically ranges from 40% (light load) to 90% (heavy load)</li>
      <li>100% utilization is rarely achievable due to overhead</li>
      <li><strong>Goal:</strong> Maximize CPU utilization</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`CPU Utilization = (Total CPU Active Time / Total Time) x 100%

Example:
If CPU was active for 45 seconds out of 60 seconds:
Utilization = (45/60) x 100% = 75%`}
      </pre>
    </div>

    {/* Throughput */}
    <h3 className="text-2xl font-semibold mt-6">2. Throughput</h3>
    <p className="leading-relaxed">
      Throughput is the number of processes completed per unit time. It measures the
      work done by the system.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Measured in processes per second/minute/hour</li>
      <li>Depends on process characteristics and scheduling algorithm</li>
      <li>For long processes, throughput might be 1 per hour</li>
      <li>For short transactions, might be 100 per second</li>
      <li><strong>Goal:</strong> Maximize throughput</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Throughput = Number of Processes Completed / Total Time

Example:
If 15 processes complete in 60 seconds:
Throughput = 15/60 = 0.25 processes per second`}
      </pre>
    </div>

    {/* Turnaround Time */}
    <h3 className="text-2xl font-semibold mt-6">3. Turnaround Time</h3>
    <p className="leading-relaxed">
      Turnaround time is the total time from submission of a process to its completion.
      It includes all the time spent waiting, executing, and doing I/O.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Includes waiting time, execution time, and I/O time</li>
      <li>Important for batch systems</li>
      <li>Users want their jobs completed quickly</li>
      <li><strong>Goal:</strong> Minimize turnaround time</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Turnaround Time (TAT) = Completion Time - Arrival Time

Or equivalently:
TAT = Waiting Time + Burst Time

Example:
Process arrives at time 0, completes at time 24
TAT = 24 - 0 = 24 time units`}
      </pre>
    </div>

    {/* Waiting Time */}
    <h3 className="text-2xl font-semibold mt-6">4. Waiting Time</h3>
    <p className="leading-relaxed">
      Waiting time is the total time a process spends waiting in the ready queue.
      It does not include time spent running on CPU or doing I/O.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Sum of all periods spent waiting in ready queue</li>
      <li>CPU scheduling only affects waiting time, not execution time</li>
      <li>Key metric for comparing scheduling algorithms</li>
      <li><strong>Goal:</strong> Minimize waiting time</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Waiting Time = Turnaround Time - Burst Time

Or:
Waiting Time = Start Time - Arrival Time (for non-preemptive)

Example:
TAT = 24, Burst Time = 8
Waiting Time = 24 - 8 = 16 time units`}
      </pre>
    </div>

    {/* Response Time */}
    <h3 className="text-2xl font-semibold mt-6">5. Response Time</h3>
    <p className="leading-relaxed">
      Response time is the time from submission of a request until the first response
      is produced. This is especially important for interactive systems.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Critical for interactive applications</li>
      <li>Different from turnaround time (first response vs. completion)</li>
      <li>Users perceive system responsiveness through this metric</li>
      <li><strong>Goal:</strong> Minimize response time</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Response Time = Time of First Response - Arrival Time

Example:
Process arrives at time 5, first output at time 8
Response Time = 8 - 5 = 3 time units`}
      </pre>
    </div>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Criteria Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Criterion</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Importance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Utilization</td>
            <td className="p-3 border">% time CPU is busy</td>
            <td className="p-3 border">Maximize</td>
            <td className="p-3 border">System efficiency</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Processes completed per time</td>
            <td className="p-3 border">Maximize</td>
            <td className="p-3 border">System productivity</td>
          </tr>
          <tr>
            <td className="p-3 border">Turnaround Time</td>
            <td className="p-3 border">Total time from submission to completion</td>
            <td className="p-3 border">Minimize</td>
            <td className="p-3 border">Batch systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Waiting Time</td>
            <td className="p-3 border">Time spent in ready queue</td>
            <td className="p-3 border">Minimize</td>
            <td className="p-3 border">Algorithm comparison</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Time to first response</td>
            <td className="p-3 border">Minimize</td>
            <td className="p-3 border">Interactive systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <p className="leading-relaxed">
      Consider three processes with the following characteristics:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival Time</th>
            <th className="p-3 border">Burst Time</th>
            <th className="p-3 border">Completion Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">5</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">8</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">12</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Calculations:

Turnaround Time:
P1: 5 - 0 = 5
P2: 8 - 1 = 7
P3: 12 - 2 = 10
Average TAT = (5 + 7 + 10) / 3 = 7.33

Waiting Time:
P1: 5 - 5 = 0
P2: 7 - 3 = 4
P3: 10 - 4 = 6
Average WT = (0 + 4 + 6) / 3 = 3.33

Throughput:
3 processes in 12 time units = 0.25 processes/unit

CPU Utilization:
Total burst time = 5 + 3 + 4 = 12
Total time = 12
Utilization = 12/12 = 100%`}
      </pre>
    </div>

    {/* Trade-offs */}
    <h2 className="text-3xl font-bold mt-8">Trade-offs Between Criteria</h2>
    <p className="leading-relaxed">
      It is generally impossible to optimize all criteria simultaneously. Different
      systems prioritize different criteria:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Batch Systems:</strong> Prioritize throughput and turnaround time.
        Response time is less important.
      </li>
      <li>
        <strong>Interactive Systems:</strong> Prioritize response time. Users expect
        quick feedback.
      </li>
      <li>
        <strong>Real-Time Systems:</strong> Prioritize meeting deadlines. Other criteria
        are secondary.
      </li>
      <li>
        <strong>General Purpose:</strong> Balance all criteria, often optimizing for
        average case.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>CPU utilization and throughput should be maximized</li>
      <li>Turnaround, waiting, and response times should be minimized</li>
      <li>Different systems have different priorities</li>
      <li>Average values are typically used for comparison</li>
      <li>Variance in response time matters for interactive systems</li>
      <li>Trade-offs exist between different criteria</li>
      <li>The choice of algorithm depends on system requirements</li>
    </ul>
  </div>
);

export default SchedulingCriteria;
