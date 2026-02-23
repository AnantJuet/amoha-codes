import React from 'react';

const ProcessVsThread: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process vs Thread
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Processes and threads are both units of execution in an operating system, but they
      differ significantly in their characteristics, resource sharing, and overhead.
      Understanding these differences is crucial for designing efficient concurrent
      applications.
    </p>

    {/* What is a Process */}
    <h2 className="text-3xl font-bold mt-8">What is a Process?</h2>
    <p className="leading-relaxed">
      A process is an independent execution unit with its own memory space, resources,
      and state. Each process runs in its own address space, isolated from other processes.
      Processes are heavyweight entities that require significant system resources to
      create and manage.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Has its own virtual address space</li>
      <li>Owns system resources (files, devices, memory)</li>
      <li>Contains at least one thread of execution</li>
      <li>Isolated from other processes for protection</li>
      <li>Has its own Process Control Block (PCB)</li>
    </ul>

    {/* What is a Thread */}
    <h2 className="text-3xl font-bold mt-8">What is a Thread?</h2>
    <p className="leading-relaxed">
      A thread is a lightweight unit of execution within a process. Multiple threads
      within the same process share the process's memory space and resources while
      maintaining their own execution context. Threads are sometimes called lightweight
      processes.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Shares address space with other threads in the same process</li>
      <li>Has its own program counter and stack</li>
      <li>Has its own register set</li>
      <li>Shares code, data, and heap sections</li>
      <li>Has its own Thread Control Block (TCB)</li>
    </ul>

    {/* Memory Layout Comparison */}
    <h2 className="text-3xl font-bold mt-8">Memory Layout Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Two Processes:                     One Process with Two Threads:

Process A        Process B         Thread 1         Thread 2
┌─────────┐     ┌─────────┐       ┌─────────────────────────┐
│  Stack  │     │  Stack  │       │  Stack1   │   Stack2   │
├─────────┤     ├─────────┤       ├───────────┴────────────┤
│  Heap   │     │  Heap   │       │         Heap           │
├─────────┤     ├─────────┤       │     (shared)           │
│  Data   │     │  Data   │       ├────────────────────────┤
├─────────┤     ├─────────┤       │         Data           │
│  Code   │     │  Code   │       │     (shared)           │
└─────────┘     └─────────┘       ├────────────────────────┤
                                  │         Code           │
Separate         Separate         │     (shared)           │
Address          Address          └────────────────────────┘
Spaces           Spaces                 Same Address Space
`}
      </pre>
    </div>

    {/* Detailed Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Process</th>
            <th className="p-3 border">Thread</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Definition</td>
            <td className="p-3 border">Program in execution</td>
            <td className="p-3 border">Lightweight process, unit within process</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Separate address space</td>
            <td className="p-3 border">Shared address space</td>
          </tr>
          <tr>
            <td className="p-3 border">Creation Time</td>
            <td className="p-3 border">Slower (more resources)</td>
            <td className="p-3 border">Faster (less overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Context Switch</td>
            <td className="p-3 border">Expensive (TLB flush, etc.)</td>
            <td className="p-3 border">Cheaper (same address space)</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">IPC mechanisms needed</td>
            <td className="p-3 border">Direct through shared memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Isolation</td>
            <td className="p-3 border">Complete isolation</td>
            <td className="p-3 border">No isolation within process</td>
          </tr>
          <tr>
            <td className="p-3 border">Failure Impact</td>
            <td className="p-3 border">Does not affect other processes</td>
            <td className="p-3 border">Can crash entire process</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Overhead</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Scheduling</td>
            <td className="p-3 border">Scheduled by OS</td>
            <td className="p-3 border">May be scheduled by OS or user-level</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Sharing</td>
            <td className="p-3 border">Complex (requires IPC)</td>
            <td className="p-3 border">Simple (shared variables)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* What is Shared vs Private */}
    <h2 className="text-3xl font-bold mt-8">Shared vs Private Resources</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Shared by Threads</th>
            <th className="p-3 border">Private to Each Thread</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Code section (text)</td>
            <td className="p-3 border">Thread ID</td>
          </tr>
          <tr>
            <td className="p-3 border">Data section</td>
            <td className="p-3 border">Program counter</td>
          </tr>
          <tr>
            <td className="p-3 border">Heap</td>
            <td className="p-3 border">Register set</td>
          </tr>
          <tr>
            <td className="p-3 border">Open files</td>
            <td className="p-3 border">Stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal handlers</td>
            <td className="p-3 border">Thread-local storage</td>
          </tr>
          <tr>
            <td className="p-3 border">Global variables</td>
            <td className="p-3 border">Priority</td>
          </tr>
          <tr>
            <td className="p-3 border">Working directory</td>
            <td className="p-3 border">State</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages of Threads */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Using Threads</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Responsiveness:</strong> A multithreaded application can continue
        running even if part of it is blocked. GUI applications benefit greatly.
      </li>
      <li>
        <strong>Resource Sharing:</strong> Threads share the memory and resources of
        their process, making data sharing simpler and faster.
      </li>
      <li>
        <strong>Economy:</strong> Creating and context-switching threads is cheaper
        than doing so for processes.
      </li>
      <li>
        <strong>Scalability:</strong> Threads can run in parallel on multiple CPU
        cores, improving performance on multiprocessor systems.
      </li>
    </ul>

    {/* When to Use Each */}
    <h2 className="text-3xl font-bold mt-8">When to Use Processes vs Threads</h2>

    <h3 className="text-2xl font-semibold mt-4">Use Processes When:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Strong isolation is required for security or fault tolerance</li>
      <li>Tasks are unrelated and do not need to share data</li>
      <li>You need to use different programming languages</li>
      <li>A crash in one unit should not affect others</li>
      <li>Running on distributed systems across machines</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Use Threads When:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Tasks need to share data frequently</li>
      <li>Low overhead for creation and communication is important</li>
      <li>Tasks are tightly coupled and part of the same program</li>
      <li>You want to utilize multiple CPU cores efficiently</li>
      <li>Responsiveness is critical (e.g., GUI applications)</li>
    </ul>

    {/* Challenges with Threads */}
    <h2 className="text-3xl font-bold mt-8">Challenges with Multithreading</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Race Conditions:</strong> Multiple threads accessing shared data can
        lead to inconsistent results if not properly synchronized.
      </li>
      <li>
        <strong>Deadlocks:</strong> Threads waiting for each other to release resources
        can cause the program to hang.
      </li>
      <li>
        <strong>Debugging Difficulty:</strong> Thread-related bugs are often hard to
        reproduce and diagnose.
      </li>
      <li>
        <strong>Synchronization Overhead:</strong> Using locks and other mechanisms
        adds complexity and can reduce performance.
      </li>
    </ul>

    {/* Example Comparison */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">Process vs Thread Usage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Web Browser</td>
            <td className="p-3 border">Separate processes for tabs (isolation), threads within each tab</td>
          </tr>
          <tr>
            <td className="p-3 border">Web Server</td>
            <td className="p-3 border">Thread pool to handle concurrent requests</td>
          </tr>
          <tr>
            <td className="p-3 border">Database Server</td>
            <td className="p-3 border">Processes for isolation, threads for parallel queries</td>
          </tr>
          <tr>
            <td className="p-3 border">Video Player</td>
            <td className="p-3 border">Threads for decoding, rendering, audio playback</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>A process is a heavyweight unit with its own address space</li>
      <li>A thread is a lightweight unit sharing address space with sibling threads</li>
      <li>Threads have lower creation and context-switching overhead</li>
      <li>Processes provide better isolation and fault tolerance</li>
      <li>Threads share memory, making communication easier but requiring synchronization</li>
      <li>A crash in one thread can bring down the entire process</li>
      <li>Modern applications often use a combination of both</li>
    </ul>
  </div>
);

export default ProcessVsThread;
