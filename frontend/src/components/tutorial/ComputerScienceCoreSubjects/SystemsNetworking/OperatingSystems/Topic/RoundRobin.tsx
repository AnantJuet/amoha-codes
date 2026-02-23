import React from 'react';

const RoundRobin: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Round Robin (RR) Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Round Robin (RR) is one of the oldest, simplest, and most widely used CPU scheduling
      algorithms. It is specifically designed for time-sharing systems and allocates CPU
      time to each process in equal portions called time quantum or time slice.
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">How Round Robin Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>Define a fixed time quantum (e.g., 10-100 milliseconds)</li>
      <li>Maintain a circular ready queue (FIFO)</li>
      <li>Allocate CPU to the first process in queue for one time quantum</li>
      <li>If process completes within quantum, move to next process</li>
      <li>If quantum expires, preempt the process and add it to the end of queue</li>
      <li>Move to next process in queue</li>
      <li>Repeat until all processes complete</li>
    </ul>

    {/* Circular Queue Diagram */}
    <h2 className="text-3xl font-bold mt-8">Circular Queue Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Ready Queue (Circular):

       ┌──────────────────────────────────────┐
       │                                      │
       ↓                                      │
    ┌────┐   ┌────┐   ┌────┐   ┌────┐        │
    │ P1 │ → │ P2 │ → │ P3 │ → │ P4 │────────┘
    └────┘   └────┘   └────┘   └────┘
       ↑
     Head (next to run)

Timer Interrupt after Time Quantum:
1. Save context of current process
2. Move current process to end of queue
3. Load context of next process at head
4. Reset timer
`}
      </pre>
    </div>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">Example with Time Quantum = 4</h2>
    <p className="leading-relaxed">
      Consider the following processes (all arriving at time 0):
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Burst Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P1</td>
            <td className="p-3 border">24</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">3</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Execution Trace:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Time 0-4:   P1 runs (24-4=20 remaining), P1 goes to end of queue
Time 4-7:   P2 runs (3-3=0, completes)
Time 7-10:  P3 runs (3-3=0, completes)
Time 10-14: P1 runs (20-4=16 remaining)
Time 14-18: P1 runs (16-4=12 remaining)
Time 18-22: P1 runs (12-4=8 remaining)
Time 22-26: P1 runs (8-4=4 remaining)
Time 26-30: P1 runs (4-4=0, completes)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Gantt Chart:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
| P1 | P2 | P3 | P1 | P1 | P1 | P1 | P1 |
0    4    7   10   14   18   22   26   30
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
            <td className="p-3 border">30</td>
            <td className="p-3 border">30 - 0 = 30</td>
            <td className="p-3 border">30 - 24 = 6</td>
          </tr>
          <tr>
            <td className="p-3 border">P2</td>
            <td className="p-3 border">7</td>
            <td className="p-3 border">7 - 0 = 7</td>
            <td className="p-3 border">7 - 3 = 4</td>
          </tr>
          <tr>
            <td className="p-3 border">P3</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">10 - 0 = 10</td>
            <td className="p-3 border">10 - 3 = 7</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-4">
      <strong>Average Waiting Time:</strong> (6 + 4 + 7) / 3 = 5.67 ms<br/>
      <strong>Average Turnaround Time:</strong> (30 + 7 + 10) / 3 = 15.67 ms
    </p>

    {/* Time Quantum Selection */}
    <h2 className="text-3xl font-bold mt-8">Choosing the Time Quantum</h2>
    <p className="leading-relaxed">
      The time quantum size is critical for RR performance:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Time Quantum too SMALL:
┌────────────────────────────────────────┐
│ Context Switch │ Context Switch │ ...  │
│ Overhead       │ Overhead       │      │
└────────────────────────────────────────┘
• Too many context switches
• High overhead, low actual work done
• Most time spent switching, not executing

Time Quantum too LARGE:
┌────────────────────────────────────────┐
│         Long Process Running           │
│         (others waiting)               │
└────────────────────────────────────────┘
• Degenerates to FCFS
• Poor response time
• Short processes wait too long

OPTIMAL: Quantum > 80% of CPU bursts
┌────────────────────────────────────────┐
│ P1 run │ P2 run │ P3 run │ P1 run │...│
└────────────────────────────────────────┘
• Most processes complete within quantum
• Few context switches
• Good response time
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Time Quantum Guidelines</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Typical values: 10-100 milliseconds</li>
      <li>Should be large compared to context switch time</li>
      <li>Rule of thumb: 80% of CPU bursts should complete within one quantum</li>
      <li>Must be small enough for good response time</li>
    </ul>

    {/* Effect of Quantum Size */}
    <h2 className="text-3xl font-bold mt-8">Effect of Time Quantum on Performance</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Time Quantum</th>
            <th className="p-3 border">Response Time</th>
            <th className="p-3 border">Context Switches</th>
            <th className="p-3 border">Turnaround</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Very Small (1ms)</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Poor (overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Small (10ms)</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border">Optimal (50-100ms)</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Very Large</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Very Low</td>
            <td className="p-3 border">Similar to FCFS</td>
          </tr>
          <tr>
            <td className="p-3 border">Infinite</td>
            <td className="p-3 border">FCFS behavior</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">FCFS behavior</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Characteristics */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Round Robin</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Preemptive:</strong> Processes are preempted after time quantum</li>
      <li><strong>No starvation:</strong> Every process gets CPU time</li>
      <li><strong>Fair:</strong> All processes treated equally</li>
      <li><strong>Time-sharing:</strong> Designed for interactive systems</li>
      <li><strong>FIFO based:</strong> Uses circular queue structure</li>
    </ul>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Fair allocation of CPU to all processes</li>
      <li>No starvation - every process runs</li>
      <li>Good response time for short processes</li>
      <li>Suitable for time-sharing systems</li>
      <li>Easy to implement</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Average waiting time is often high</li>
      <li>Performance depends heavily on quantum size</li>
      <li>Context switching overhead</li>
      <li>Does not consider priority or burst time</li>
      <li>Long processes take much longer than with FCFS</li>
    </ul>

    {/* RR vs Other Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Round Robin</th>
            <th className="p-3 border">FCFS</th>
            <th className="p-3 border">SJF</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Preemption</td>
            <td className="p-3 border">Yes (time quantum)</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">Good for short</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Time-sharing</td>
            <td className="p-3 border">Batch</td>
            <td className="p-3 border">Short processes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Each process gets equal time slice (quantum)</li>
      <li>Uses circular ready queue for fairness</li>
      <li>Time quantum selection is critical for performance</li>
      <li>No starvation - all processes get CPU time</li>
      <li>Higher average turnaround than SJF but better response time</li>
      <li>Very large quantum degenerates to FCFS</li>
      <li>Most common in interactive and time-sharing systems</li>
    </ul>
  </div>
);

export default RoundRobin;
