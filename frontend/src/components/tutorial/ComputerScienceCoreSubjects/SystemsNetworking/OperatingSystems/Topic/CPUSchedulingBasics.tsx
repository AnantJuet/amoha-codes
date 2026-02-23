import React from 'react';

const CPUSchedulingBasics: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CPU Scheduling Basics
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CPU scheduling is a fundamental operating system function that determines which
      process runs on the CPU at any given time. In a multiprogramming environment,
      multiple processes compete for CPU time, and the scheduler must decide how to
      allocate this valuable resource efficiently and fairly.
    </p>

    {/* Why CPU Scheduling */}
    <h2 className="text-3xl font-bold mt-8">Why is CPU Scheduling Necessary?</h2>
    <p className="leading-relaxed">
      The CPU is one of the most critical computer resources. Effective scheduling ensures:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Maximum CPU Utilization:</strong> Keep the CPU as busy as possible</li>
      <li><strong>Fair Allocation:</strong> Give each process a reasonable share of CPU time</li>
      <li><strong>Responsiveness:</strong> Ensure interactive processes respond quickly</li>
      <li><strong>Efficiency:</strong> Complete as many processes as possible in a given time</li>
      <li><strong>Balance:</strong> Keep all system resources utilized</li>
    </ul>

    {/* CPU-I/O Burst Cycle */}
    <h2 className="text-3xl font-bold mt-8">CPU-I/O Burst Cycle</h2>
    <p className="leading-relaxed">
      Process execution consists of alternating cycles of CPU execution and I/O wait.
      Understanding this pattern is crucial for effective scheduling.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process Execution Pattern:

┌───────────┐   ┌───────────┐   ┌───────────┐   ┌───────────┐
│ CPU Burst │───│ I/O Burst │───│ CPU Burst │───│ I/O Burst │───...
└───────────┘   └───────────┘   └───────────┘   └───────────┘

CPU Burst: Process executing instructions on CPU
I/O Burst: Process waiting for I/O operation to complete

Burst Duration Distribution:
┌─────────────────────────────────────────────────────────────┐
│ Frequency                                                    │
│    │                                                         │
│    │ ████                                                    │
│    │ ████████                                                │
│    │ ████████████                                            │
│    │ ████████████████                                        │
│    │ ██████████████████████                                  │
│    │ ██████████████████████████████                          │
│    └─────────────────────────────────────────────────────→   │
│         Short           Medium          Long                 │
│                     Burst Duration                           │
└─────────────────────────────────────────────────────────────┘
Most bursts are short; few are very long.
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">CPU-Bound vs I/O-Bound Processes</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">CPU-Bound Process</th>
            <th className="p-3 border">I/O-Bound Process</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Bursts</td>
            <td className="p-3 border">Long, few</td>
            <td className="p-3 border">Short, many</td>
          </tr>
          <tr>
            <td className="p-3 border">Primary Activity</td>
            <td className="p-3 border">Computation</td>
            <td className="p-3 border">I/O operations</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Scientific computing, video encoding</td>
            <td className="p-3 border">Text editors, web browsers</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* CPU Scheduler */}
    <h2 className="text-3xl font-bold mt-8">The CPU Scheduler</h2>
    <p className="leading-relaxed">
      The CPU scheduler (also called short-term scheduler) selects a process from the
      ready queue and allocates the CPU to it. This decision happens very frequently,
      often hundreds of times per second.
    </p>

    <h3 className="text-2xl font-semibold mt-4">When Does Scheduling Occur?</h3>
    <p className="leading-relaxed">
      CPU scheduling decisions may take place when a process:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Switches from running to waiting state</strong> (e.g., I/O request)
        - Non-preemptive
      </li>
      <li>
        <strong>Switches from running to ready state</strong> (e.g., interrupt)
        - Preemptive
      </li>
      <li>
        <strong>Switches from waiting to ready state</strong> (e.g., I/O completion)
        - Preemptive
      </li>
      <li>
        <strong>Terminates</strong>
        - Non-preemptive
      </li>
    </ul>

    {/* Dispatcher */}
    <h2 className="text-3xl font-bold mt-8">The Dispatcher</h2>
    <p className="leading-relaxed">
      The dispatcher is the module that gives control of the CPU to the process
      selected by the scheduler. Its functions include:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Switching context between processes</li>
      <li>Switching to user mode</li>
      <li>Jumping to the proper location in the user program to resume execution</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Dispatch Latency</h3>
    <p className="leading-relaxed">
      Dispatch latency is the time it takes for the dispatcher to stop one process
      and start another. This should be minimized as it represents overhead.
    </p>

    {/* Scheduling Queues */}
    <h2 className="text-3xl font-bold mt-8">Scheduling Queues</h2>
    <p className="leading-relaxed">
      The operating system maintains several queues to manage processes:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  Job Queue: All processes in the system                         │
│  ┌────┬────┬────┬────┬────┬────┐                               │
│  │ P1 │ P2 │ P3 │ P4 │ P5 │... │                               │
│  └────┴────┴────┴────┴────┴────┘                               │
│                                                                  │
│  Ready Queue: Processes in memory, ready to execute             │
│  ┌────┬────┬────┐                                               │
│  │ P1 │ P3 │ P5 │ ──────→ [CPU]                                │
│  └────┴────┴────┘                                               │
│                                                                  │
│  Device Queues: Processes waiting for I/O devices               │
│  Disk: ┌────┬────┐                                              │
│        │ P2 │ P4 │                                              │
│        └────┴────┘                                              │
│  Network: ┌────┐                                                │
│           │ P6 │                                                │
│           └────┘                                                │
└─────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Types of Schedulers */}
    <h2 className="text-3xl font-bold mt-8">Types of Schedulers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scheduler</th>
            <th className="p-3 border">Also Called</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Frequency</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Long-term</td>
            <td className="p-3 border">Job Scheduler</td>
            <td className="p-3 border">Selects processes to bring into memory</td>
            <td className="p-3 border">Infrequent (seconds/minutes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Short-term</td>
            <td className="p-3 border">CPU Scheduler</td>
            <td className="p-3 border">Selects process to run next on CPU</td>
            <td className="p-3 border">Very frequent (milliseconds)</td>
          </tr>
          <tr>
            <td className="p-3 border">Medium-term</td>
            <td className="p-3 border">Swapper</td>
            <td className="p-3 border">Swaps processes in/out of memory</td>
            <td className="p-3 border">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Degree of Multiprogramming */}
    <h2 className="text-3xl font-bold mt-8">Degree of Multiprogramming</h2>
    <p className="leading-relaxed">
      The degree of multiprogramming refers to the number of processes in memory at
      any time. The long-term scheduler controls this:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Too few processes: CPU may be idle</li>
      <li>Too many processes: Memory thrashing may occur</li>
      <li>Good mix of I/O-bound and CPU-bound processes is optimal</li>
    </ul>

    {/* Scheduling Flow */}
    <h2 className="text-3xl font-bold mt-8">Process Scheduling Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
                    ┌─────────────────┐
                    │   New Process   │
                    └────────┬────────┘
                             │ Long-term
                             │ Scheduler
                             ↓
┌──────────────────────────────────────────────────────────────┐
│                       Ready Queue                             │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐                             │
│  │ P1 │──│ P2 │──│ P3 │──│ P4 │──→                          │
│  └────┘  └────┘  └────┘  └────┘                             │
└──────────────────────────────────────────────────────────────┘
                             │ Short-term
                             │ Scheduler
                             ↓
                    ┌─────────────────┐
                    │      CPU        │
                    └────────┬────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ↓                ↓                ↓
       I/O Request      Time Slice       Terminated
            │           Expired               │
            ↓                │                ↓
       Device Queue     Ready Queue       Exit
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>CPU scheduling is essential for multiprogramming systems</li>
      <li>Process execution alternates between CPU bursts and I/O bursts</li>
      <li>The short-term scheduler makes very frequent decisions</li>
      <li>The dispatcher handles the actual context switch</li>
      <li>Different schedulers operate at different time scales</li>
      <li>A good mix of CPU-bound and I/O-bound processes maximizes efficiency</li>
      <li>Scheduling decisions can be preemptive or non-preemptive</li>
    </ul>
  </div>
);

export default CPUSchedulingBasics;
