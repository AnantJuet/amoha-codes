import React from 'react';

const ProcessConcept: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Concept
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A process is a fundamental concept in operating systems. It represents a program in execution
      and serves as the basic unit of work in most systems. Understanding processes is essential for
      grasping how operating systems manage program execution and system resources.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Process?</h2>
    <p className="leading-relaxed">
      A process is a program in execution. While a program is a passive entity (an executable file
      stored on disk), a process is an active entity with a program counter specifying the next
      instruction to execute and a set of associated resources.
    </p>

    {/* Process vs Program */}
    <h2 className="text-3xl font-bold mt-8">Process vs Program</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Program</th>
            <th className="p-3 border">Process</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Nature</td>
            <td className="p-3 border">Passive entity</td>
            <td className="p-3 border">Active entity</td>
          </tr>
          <tr>
            <td className="p-3 border">Existence</td>
            <td className="p-3 border">Stored on disk</td>
            <td className="p-3 border">Exists in memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Resources</td>
            <td className="p-3 border">No resources allocated</td>
            <td className="p-3 border">Has allocated resources</td>
          </tr>
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Permanent until deleted</td>
            <td className="p-3 border">Temporary, terminates</td>
          </tr>
          <tr>
            <td className="p-3 border">Instance</td>
            <td className="p-3 border">Single copy</td>
            <td className="p-3 border">Multiple instances possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Process Memory Layout */}
    <h2 className="text-3xl font-bold mt-8">Process Memory Layout</h2>
    <p className="leading-relaxed">
      A process in memory consists of multiple sections:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Text Section (Code Segment):</strong> Contains the executable code of the program.
        This section is typically read-only and shared among processes running the same program.
      </li>
      <li>
        <strong>Data Section:</strong> Contains global and static variables.
        <ul className="list-disc list-inside ml-6 mt-1">
          <li><strong>Initialized Data:</strong> Global variables with initial values</li>
          <li><strong>Uninitialized Data (BSS):</strong> Global variables without initial values</li>
        </ul>
      </li>
      <li>
        <strong>Heap:</strong> Memory dynamically allocated during runtime. Grows upward (toward
        higher addresses). Used by malloc(), new, etc.
      </li>
      <li>
        <strong>Stack:</strong> Contains temporary data such as function parameters, return addresses,
        and local variables. Grows downward (toward lower addresses).
      </li>
    </ul>

    {/* Memory Layout Diagram */}
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
High Address
┌─────────────────────┐
│       Stack         │  ← Function calls, local variables
│         ↓           │    (grows downward)
├─────────────────────┤
│                     │
│    Free Space       │
│                     │
├─────────────────────┤
│         ↑           │
│        Heap         │  ← Dynamic memory allocation
│                     │    (grows upward)
├─────────────────────┤
│   Uninitialized     │
│   Data (BSS)        │  ← Global variables (uninitialized)
├─────────────────────┤
│   Initialized       │
│      Data           │  ← Global variables (initialized)
├─────────────────────┤
│       Text          │  ← Program code (read-only)
└─────────────────────┘
Low Address
`}
      </pre>
    </div>

    {/* Process Attributes */}
    <h2 className="text-3xl font-bold mt-8">Process Attributes</h2>
    <p className="leading-relaxed">
      Each process has several attributes maintained by the operating system:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Process ID (PID):</strong> Unique identifier for the process</li>
      <li><strong>Process State:</strong> Current state (running, waiting, ready, etc.)</li>
      <li><strong>Program Counter:</strong> Address of next instruction to execute</li>
      <li><strong>CPU Registers:</strong> Contents of processor registers</li>
      <li><strong>Memory Management Info:</strong> Page tables, segment tables</li>
      <li><strong>Accounting Information:</strong> CPU time used, time limits</li>
      <li><strong>I/O Status:</strong> Open files, allocated devices</li>
      <li><strong>Parent Process ID:</strong> ID of the process that created this process</li>
    </ul>

    {/* Types of Processes */}
    <h2 className="text-3xl font-bold mt-8">Types of Processes</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Foreground Process:</strong> Runs in the foreground and requires user input.
        User interacts directly with these processes.
      </li>
      <li>
        <strong>Background Process:</strong> Runs without user interaction. Examples include
        system daemons and services.
      </li>
      <li>
        <strong>User Process:</strong> Processes started by users to run applications.
      </li>
      <li>
        <strong>System Process:</strong> Processes started by the OS to perform system tasks.
      </li>
      <li>
        <strong>I/O-Bound Process:</strong> Spends more time doing I/O than computations.
      </li>
      <li>
        <strong>CPU-Bound Process:</strong> Spends more time doing computations than I/O.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>A process is created when a program is loaded into memory and begins execution</li>
      <li>Multiple processes can be created from the same program</li>
      <li>Each process has its own address space isolated from other processes</li>
      <li>The OS maintains a Process Control Block (PCB) for each process</li>
      <li>Processes can create child processes, forming a process tree</li>
    </ul>
  </div>
);

export default ProcessConcept;
