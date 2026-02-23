import React from 'react';

const IPC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Inter-Process Communication (IPC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Inter-Process Communication (IPC) refers to mechanisms that allow processes to
      communicate with each other and synchronize their actions. Since processes have
      separate address spaces, they cannot directly access each other's memory, making
      IPC mechanisms essential for cooperative processes.
    </p>

    {/* Why IPC is Needed */}
    <h2 className="text-3xl font-bold mt-8">Why is IPC Needed?</h2>
    <p className="leading-relaxed">
      Processes often need to work together to accomplish a task. IPC enables:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Information Sharing:</strong> Multiple processes accessing common data</li>
      <li><strong>Computation Speedup:</strong> Breaking tasks into parallel subtasks</li>
      <li><strong>Modularity:</strong> Dividing system functions into separate processes</li>
      <li><strong>Convenience:</strong> Users working on many tasks simultaneously</li>
      <li><strong>Privilege Separation:</strong> Isolating sensitive operations</li>
    </ul>

    {/* Types of Processes */}
    <h2 className="text-3xl font-bold mt-8">Cooperating vs Independent Processes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Independent Process</th>
            <th className="p-3 border">Cooperating Process</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Sharing</td>
            <td className="p-3 border">Cannot affect or be affected by others</td>
            <td className="p-3 border">Can affect or be affected by others</td>
          </tr>
          <tr>
            <td className="p-3 border">State</td>
            <td className="p-3 border">Does not share state</td>
            <td className="p-3 border">Shares data or messages</td>
          </tr>
          <tr>
            <td className="p-3 border">IPC Need</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required for communication</td>
          </tr>
          <tr>
            <td className="p-3 border">Determinism</td>
            <td className="p-3 border">Deterministic execution</td>
            <td className="p-3 border">May be non-deterministic</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* IPC Models */}
    <h2 className="text-3xl font-bold mt-8">Two Fundamental IPC Models</h2>
    <p className="leading-relaxed">
      There are two primary models for IPC:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Shared Memory Model:              Message Passing Model:

┌─────────┐   ┌─────────┐        ┌─────────┐      ┌─────────┐
│Process A│   │Process B│        │Process A│      │Process B│
│         │   │         │        │         │      │         │
│  ┌───┐  │   │  ┌───┐  │        │ send()  │      │ recv()  │
│  │   │←─┼───┼──│   │  │        │    │    │      │    ↑    │
│  └───┘  │   │  └───┘  │        │    ↓    │      │    │    │
└────┬────┘   └────┬────┘        └────┼────┘      └────┼────┘
     │             │                  │                │
     └──────┬──────┘                  │    ┌──────┐    │
            ↓                         └───→│Kernel│←───┘
    ┌──────────────┐                       │      │
    │Shared Memory │                       │Queue │
    │   Region     │                       └──────┘
    └──────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">1. Shared Memory</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Processes share a region of memory</li>
      <li>Communication is through reading/writing shared data</li>
      <li>Fast - no kernel intervention after setup</li>
      <li>Requires synchronization to avoid race conditions</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Message Passing</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Processes exchange messages through the kernel</li>
      <li>No shared memory between processes</li>
      <li>Easier to implement without race conditions</li>
      <li>Slower due to kernel involvement for each message</li>
    </ul>

    {/* IPC Mechanisms */}
    <h2 className="text-3xl font-bold mt-8">Common IPC Mechanisms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pipes</td>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Unidirectional byte stream between processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Named Pipes (FIFOs)</td>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Pipes accessible by name in filesystem</td>
          </tr>
          <tr>
            <td className="p-3 border">Message Queues</td>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Kernel-managed queue of messages</td>
          </tr>
          <tr>
            <td className="p-3 border">Shared Memory</td>
            <td className="p-3 border">Shared Memory</td>
            <td className="p-3 border">Memory region mapped to multiple processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Semaphores</td>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Synchronization primitive for coordination</td>
          </tr>
          <tr>
            <td className="p-3 border">Signals</td>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Asynchronous notification to a process</td>
          </tr>
          <tr>
            <td className="p-3 border">Sockets</td>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Bidirectional communication, even across network</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory-Mapped Files</td>
            <td className="p-3 border">Shared Memory</td>
            <td className="p-3 border">File content mapped to process memory</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Pipes */}
    <h2 className="text-3xl font-bold mt-8">Pipes</h2>
    <p className="leading-relaxed">
      Pipes are the simplest form of IPC. They provide a unidirectional communication
      channel between processes, typically used between parent and child processes.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Ordinary Pipes</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Communication is unidirectional (one-way)</li>
      <li>Require parent-child relationship</li>
      <li>Exist only while processes are running</li>
      <li>Cannot be accessed by unrelated processes</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Named Pipes (FIFOs)</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Exist as special files in the filesystem</li>
      <li>Can be used by unrelated processes</li>
      <li>Persist even after processes terminate</li>
      <li>Communication can be bidirectional (with two FIFOs)</li>
    </ul>

    {/* Signals */}
    <h2 className="text-3xl font-bold mt-8">Signals</h2>
    <p className="leading-relaxed">
      Signals are software interrupts sent to a process to notify it of events.
      They provide asynchronous notification and limited information transfer.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>SIGINT (2):</strong> Interrupt from keyboard (Ctrl+C)</li>
      <li><strong>SIGKILL (9):</strong> Forceful termination (cannot be caught)</li>
      <li><strong>SIGSEGV (11):</strong> Invalid memory reference</li>
      <li><strong>SIGTERM (15):</strong> Request to terminate</li>
      <li><strong>SIGCHLD:</strong> Child process terminated</li>
      <li><strong>SIGUSR1/SIGUSR2:</strong> User-defined signals</li>
    </ul>

    {/* Sockets */}
    <h2 className="text-3xl font-bold mt-8">Sockets</h2>
    <p className="leading-relaxed">
      Sockets provide bidirectional communication and can work across different machines
      over a network. They are the most flexible IPC mechanism.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Stream Sockets (TCP):</strong> Reliable, connection-oriented</li>
      <li><strong>Datagram Sockets (UDP):</strong> Unreliable, connectionless</li>
      <li><strong>Unix Domain Sockets:</strong> IPC on the same machine, faster than network sockets</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">IPC Mechanism Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Cross-Machine</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Shared Memory</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border">Complex (sync needed)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Pipes</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Message Queues</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Signals</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Sockets</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>IPC enables processes to communicate and coordinate</li>
      <li>Two main models: Shared Memory and Message Passing</li>
      <li>Shared Memory is faster but requires synchronization</li>
      <li>Message Passing is safer but involves more overhead</li>
      <li>Choice of IPC depends on requirements (speed, complexity, scope)</li>
      <li>Sockets are the only mechanism that works across network</li>
      <li>Multiple IPC mechanisms can be used together in complex systems</li>
    </ul>
  </div>
);

export default IPC;
