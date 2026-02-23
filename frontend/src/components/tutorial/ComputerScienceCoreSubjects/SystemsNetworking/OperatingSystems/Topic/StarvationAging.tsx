import React from 'react';

const StarvationAging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Starvation and Aging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Starvation is a critical problem in scheduling where a process waits indefinitely
      for CPU time because other processes continuously take precedence. Aging is the
      primary technique used to prevent starvation by gradually increasing the priority
      of waiting processes.
    </p>

    {/* Starvation Definition */}
    <h2 className="text-3xl font-bold mt-8">What is Starvation?</h2>
    <p className="leading-relaxed">
      Starvation, also known as indefinite blocking or lived lock, occurs when a process
      is ready to execute but is unable to obtain CPU time because resources are continuously
      allocated to other processes. The starving process may theoretically wait forever.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Starvation Scenario:

Ready Queue with Priority Scheduling (lower = higher priority):

Time 0:  P1(pri=5) arrives    → P1 runs
Time 2:  P2(pri=2) arrives    → P1 preempted, P2 runs
Time 5:  P3(pri=3) arrives    → P3 waits
Time 7:  P4(pri=1) arrives    → P2 preempted, P4 runs
Time 10: P5(pri=2) arrives    → P5 waits
Time 12: P6(pri=1) arrives    → P4 done, P6 runs
...

P1 (priority 5) keeps getting pushed back!
If high-priority processes keep arriving, P1 may NEVER run.

Timeline for P1:
├── Started at 0
├── Preempted at 2
├── Still waiting at 100
├── Still waiting at 1000
└── May wait forever... (STARVATION)
`}
      </pre>
    </div>

    {/* When Does Starvation Occur */}
    <h2 className="text-3xl font-bold mt-8">When Does Starvation Occur?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Priority Scheduling:</strong> Low-priority processes wait indefinitely
        as high-priority processes keep arriving.
      </li>
      <li>
        <strong>Shortest Job First (SJF):</strong> Long processes never run if short
        processes keep arriving.
      </li>
      <li>
        <strong>Multilevel Queue:</strong> Lower priority queues may never get CPU
        time in fixed-priority scheduling.
      </li>
      <li>
        <strong>Resource Allocation:</strong> Processes waiting for resources held
        by others in a deadlock-free but unfair manner.
      </li>
    </ul>

    {/* Famous Example */}
    <h2 className="text-3xl font-bold mt-8">The MIT IBM 7094 Story</h2>
    <p className="leading-relaxed">
      A famous example of starvation: When MIT shut down their IBM 7094 computer in
      1973, they discovered a low-priority process that had been submitted in 1967
      and had never run - it had been starving for 6 years!
    </p>

    {/* Aging Solution */}
    <h2 className="text-3xl font-bold mt-8">What is Aging?</h2>
    <p className="leading-relaxed">
      Aging is a technique to prevent starvation by gradually increasing the priority
      of waiting processes over time. The longer a process waits, the higher its priority
      becomes, eventually guaranteeing it will run.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Aging in Action:

Process P1 with initial priority 100 (very low)

Time 0:    Priority = 100
Time 10:   Priority = 99  (aged by 1)
Time 20:   Priority = 98  (aged by 1)
Time 30:   Priority = 97  (aged by 1)
...
Time 900:  Priority = 10
Time 990:  Priority = 1   (now highest priority!)
Time 991:  P1 RUNS!

Formula:
new_priority = original_priority - (waiting_time / aging_factor)

With aging_factor = 10:
After 100 time units: priority = 100 - (100/10) = 90
After 500 time units: priority = 100 - (500/10) = 50
After 900 time units: priority = 100 - (900/10) = 10
`}
      </pre>
    </div>

    {/* Aging Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementing Aging</h2>

    <h3 className="text-2xl font-semibold mt-4">Periodic Priority Update</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Algorithm: Periodic Aging

every T time units do:
    for each process P in ready queue:
        if P.waiting_time > threshold:
            P.priority = P.priority - aging_increment
            // or
            P.priority = max(1, P.priority - 1)
        end if
    end for
end every

Example with T=100ms, aging_increment=1:

Process   Initial    After 100ms   After 200ms   After 300ms
  P1         50          49            48            47
  P2         30          29            28            27
  P3         20          19            18            17
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Continuous Aging (Wait-time Based)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Algorithm: Wait-time Based Priority

function calculate_effective_priority(process P):
    wait_time = current_time - P.arrival_time - P.cpu_time_used
    age_bonus = wait_time / aging_factor
    effective_priority = P.base_priority - age_bonus
    return max(1, effective_priority)
end function

Example:
P.base_priority = 50
wait_time = 200
aging_factor = 10

effective_priority = 50 - (200/10) = 50 - 20 = 30
`}
      </pre>
    </div>

    {/* Aging Parameters */}
    <h2 className="text-3xl font-bold mt-8">Aging Parameters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Aging Factor</td>
            <td className="p-3 border">How fast priority increases</td>
            <td className="p-3 border">Too fast: defeats priority purpose; Too slow: starvation still possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Update Interval</td>
            <td className="p-3 border">How often priorities are updated</td>
            <td className="p-3 border">Frequent: more overhead; Infrequent: delayed response</td>
          </tr>
          <tr>
            <td className="p-3 border">Maximum Priority</td>
            <td className="p-3 border">Highest priority achievable through aging</td>
            <td className="p-3 border">May need limits to protect system processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority Cap</td>
            <td className="p-3 border">Limit on aged priority</td>
            <td className="p-3 border">Ensures some processes always have higher priority</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example with Aging */}
    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Arrival</th>
            <th className="p-3 border">Burst</th>
            <th className="p-3 border">Initial Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">40</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">5</td>
            <td className="p-3 border">30</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Without Aging (Priority Scheduling, lower = higher):

Time 0-8:  P3 runs (priority 20)
Time 8-13: P2 runs (priority 30)
Time 13-23: P1 runs (priority 40)

Average Waiting Time: (13 + 8 + 0) / 3 = 7


With Aging (priority decreases by 2 every 5 time units):

Time 0:  Priorities: P1=40, P2=30, P3=20 → P3 runs

Time 5:  P1=38, P2=28, P3=20 (running)

Time 8:  P3 completes
         P1=36, P2=26 → P2 runs (26 < 36)

Time 10: P1=34, P2=26 (running)

Time 13: P2 completes
         P1=30 → P1 runs

Time 23: P1 completes

Same result in this case, but if more high-priority
processes kept arriving, aging would eventually let P1 run!
`}
      </pre>
    </div>

    {/* Aging in Different Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Aging in Different Scheduling Algorithms</h2>

    <h3 className="text-2xl font-semibold mt-4">SJF with Aging</h3>
    <p className="leading-relaxed">
      In SJF, aging can be implemented by reducing the effective burst time or increasing
      a response ratio over time.
    </p>

    <h3 className="text-2xl font-semibold mt-4">MLFQ Priority Boost</h3>
    <p className="leading-relaxed">
      In Multilevel Feedback Queue, the priority boost mechanism is a form of aging where
      all processes periodically move to the highest priority queue.
    </p>

    <h3 className="text-2xl font-semibold mt-4">HRRN (Highest Response Ratio Next)</h3>
    <p className="leading-relaxed">
      HRRN inherently implements aging through its response ratio formula:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Response Ratio = (Waiting Time + Burst Time) / Burst Time

As waiting time increases, response ratio increases,
giving long-waiting processes higher priority.
`}
      </pre>
    </div>

    {/* Starvation vs Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Starvation vs Deadlock</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Starvation</th>
            <th className="p-3 border">Deadlock</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Definition</td>
            <td className="p-3 border">Process waits indefinitely</td>
            <td className="p-3 border">Processes waiting for each other</td>
          </tr>
          <tr>
            <td className="p-3 border">Cause</td>
            <td className="p-3 border">Unfair scheduling</td>
            <td className="p-3 border">Circular wait for resources</td>
          </tr>
          <tr>
            <td className="p-3 border">Resolution</td>
            <td className="p-3 border">May eventually resolve</td>
            <td className="p-3 border">Requires intervention</td>
          </tr>
          <tr>
            <td className="p-3 border">Prevention</td>
            <td className="p-3 border">Aging</td>
            <td className="p-3 border">Break one of four conditions</td>
          </tr>
          <tr>
            <td className="p-3 border">System Progress</td>
            <td className="p-3 border">Some processes make progress</td>
            <td className="p-3 border">No process makes progress</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Starvation is indefinite blocking of a process due to unfair scheduling</li>
      <li>It commonly occurs in priority scheduling and SJF</li>
      <li>Aging gradually increases priority of waiting processes</li>
      <li>Aging guarantees all processes will eventually run</li>
      <li>The aging factor must be carefully tuned</li>
      <li>HRRN inherently prevents starvation through its formula</li>
      <li>MLFQ uses priority boost as a form of aging</li>
      <li>Unlike deadlock, starvation may naturally resolve if conditions change</li>
    </ul>
  </div>
);

export default StarvationAging;
