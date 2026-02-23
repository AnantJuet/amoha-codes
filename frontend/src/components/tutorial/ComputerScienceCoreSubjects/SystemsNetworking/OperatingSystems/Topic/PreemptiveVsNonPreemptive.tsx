import React from 'react';

const PreemptiveVsNonPreemptive: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Preemptive vs Non-Preemptive Scheduling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CPU scheduling algorithms can be classified into two categories based on whether
      a running process can be interrupted: preemptive and non-preemptive. This fundamental
      distinction affects system responsiveness, complexity, and the types of applications
      that can be effectively supported.
    </p>

    {/* Non-Preemptive Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Non-Preemptive Scheduling</h2>
    <p className="leading-relaxed">
      In non-preemptive (also called cooperative) scheduling, once a process starts
      executing, it continues to run until it voluntarily releases the CPU. The process
      keeps the CPU until it terminates or switches to a waiting state.
    </p>

    <h3 className="text-2xl font-semibold mt-4">When Does CPU Switch Occur?</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Process terminates (completes execution)</li>
      <li>Process blocks for I/O or other event</li>
      <li>Process voluntarily yields the CPU</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Non-Preemptive Scheduling Example:

Time:  0    5   10   15   20   25   30
       │    │    │    │    │    │    │
P1:    ████████████████████
                           │
P2:    (waiting)          ████████████
                                      │
                          P1 finishes, P2 starts

Process P1 runs until completion, even if P2 has higher priority.
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple to implement</li>
      <li>Lower overhead (fewer context switches)</li>
      <li>No race conditions on shared kernel data</li>
      <li>Poor response time for interactive systems</li>
      <li>A long process can monopolize the CPU</li>
    </ul>

    {/* Preemptive Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Preemptive Scheduling</h2>
    <p className="leading-relaxed">
      In preemptive scheduling, the operating system can forcibly remove a process
      from the CPU even if it has not finished executing. This allows the scheduler
      to ensure fair CPU allocation and quick response to high-priority events.
    </p>

    <h3 className="text-2xl font-semibold mt-4">When Can Preemption Occur?</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Time quantum expires (in Round Robin)</li>
      <li>Higher priority process becomes ready</li>
      <li>Process with shorter remaining time arrives (in SRTF)</li>
      <li>Interrupt occurs requiring attention</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Preemptive Scheduling Example:

Time:  0    5   10   15   20   25   30
       │    │    │    │    │    │    │
P1:    ██████████      ████████
              │        ↑
P2:           ████████
              ↑       │
         P2 preempts   P1 resumes
         P1 (higher
         priority)

P1 is interrupted when higher priority P2 arrives.
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Better response time for interactive processes</li>
      <li>Fairer CPU allocation</li>
      <li>More complex to implement</li>
      <li>Higher overhead due to context switches</li>
      <li>Requires careful handling of shared data</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Non-Preemptive</th>
            <th className="p-3 border">Preemptive</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Release</td>
            <td className="p-3 border">Voluntary by process</td>
            <td className="p-3 border">Forced by OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Interruption</td>
            <td className="p-3 border">Not possible during execution</td>
            <td className="p-3 border">Can happen anytime</td>
          </tr>
          <tr>
            <td className="p-3 border">Response Time</td>
            <td className="p-3 border">Potentially high</td>
            <td className="p-3 border">Generally low</td>
          </tr>
          <tr>
            <td className="p-3 border">Context Switches</td>
            <td className="p-3 border">Fewer</td>
            <td className="p-3 border">More frequent</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU Monopoly</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Prevented</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">More likely</td>
            <td className="p-3 border">Can be prevented</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Consistency</td>
            <td className="p-3 border">Easier to maintain</td>
            <td className="p-3 border">Requires synchronization</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Algorithm Classification */}
    <h2 className="text-3xl font-bold mt-8">Algorithm Classification</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Non-Preemptive Algorithms</th>
            <th className="p-3 border">Preemptive Algorithms</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">First Come First Serve (FCFS)</td>
            <td className="p-3 border">Round Robin (RR)</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Job First (SJF)</td>
            <td className="p-3 border">Shortest Remaining Time First (SRTF)</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority (Non-preemptive)</td>
            <td className="p-3 border">Priority (Preemptive)</td>
          </tr>
          <tr>
            <td className="p-3 border">Highest Response Ratio Next (HRRN)</td>
            <td className="p-3 border">Multilevel Feedback Queue</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Challenges with Preemption */}
    <h2 className="text-3xl font-bold mt-8">Challenges with Preemptive Scheduling</h2>

    <h3 className="text-2xl font-semibold mt-4">Race Conditions</h3>
    <p className="leading-relaxed">
      When a process is preempted while updating shared data, inconsistencies can occur:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Example: Kernel data structure update

Process A:                    Process B:
─────────                     ─────────
1. Read counter = 10
2. Increment to 11
   ← PREEMPTED →
                              1. Read counter = 10
                              2. Increment to 11
                              3. Write counter = 11
   ← RESUMED →
3. Write counter = 11

Result: counter = 11 (should be 12!)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Solutions</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Disable Interrupts:</strong> Prevent preemption during critical sections</li>
      <li><strong>Locks/Mutexes:</strong> Protect shared data structures</li>
      <li><strong>Atomic Operations:</strong> Use hardware-supported atomic instructions</li>
      <li><strong>Non-preemptive Kernel:</strong> Kernel code runs without preemption</li>
    </ul>

    {/* System Type Preferences */}
    <h2 className="text-3xl font-bold mt-8">Preferred Scheduling by System Type</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Type</th>
            <th className="p-3 border">Preferred</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Batch Systems</td>
            <td className="p-3 border">Non-preemptive</td>
            <td className="p-3 border">Lower overhead, simpler</td>
          </tr>
          <tr>
            <td className="p-3 border">Interactive/Time-sharing</td>
            <td className="p-3 border">Preemptive</td>
            <td className="p-3 border">Better response time</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-time Systems</td>
            <td className="p-3 border">Preemptive</td>
            <td className="p-3 border">Must meet deadlines</td>
          </tr>
          <tr>
            <td className="p-3 border">Desktop OS</td>
            <td className="p-3 border">Preemptive</td>
            <td className="p-3 border">Responsiveness needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Embedded Systems</td>
            <td className="p-3 border">Varies</td>
            <td className="p-3 border">Depends on requirements</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Modern OS Approach */}
    <h2 className="text-3xl font-bold mt-8">Modern Operating System Approach</h2>
    <p className="leading-relaxed">
      Modern operating systems like Linux, Windows, and macOS use preemptive scheduling:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>User processes are always preemptable</li>
      <li>Kernel code may be preemptable (preemptive kernels)</li>
      <li>Critical sections are protected with spinlocks</li>
      <li>Real-time processes have highest preemption priority</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Non-preemptive scheduling is simpler but can lead to poor response time</li>
      <li>Preemptive scheduling provides better responsiveness but adds complexity</li>
      <li>Race conditions must be handled carefully in preemptive systems</li>
      <li>Most modern systems use preemptive scheduling for user processes</li>
      <li>The choice depends on system requirements and priorities</li>
      <li>Some algorithms can operate in both modes (e.g., Priority Scheduling)</li>
    </ul>
  </div>
);

export default PreemptiveVsNonPreemptive;
