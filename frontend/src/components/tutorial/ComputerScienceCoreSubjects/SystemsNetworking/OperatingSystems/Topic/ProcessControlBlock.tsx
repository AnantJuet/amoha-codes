import React from 'react';

const ProcessControlBlock: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Control Block (PCB)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Process Control Block (PCB), also called Task Control Block, is a data structure
      maintained by the operating system for every process. It contains all the information
      needed to manage and control a process.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is PCB?</h2>
    <p className="leading-relaxed">
      The PCB is the manifestation of a process in an operating system. It serves as a repository
      for all information needed about a process. When a process is created, the OS creates a
      corresponding PCB; when the process terminates, its PCB is deallocated.
    </p>

    {/* PCB Contents */}
    <h2 className="text-3xl font-bold mt-8">Contents of PCB</h2>
    <p className="leading-relaxed">
      A typical PCB contains the following information:
    </p>

    <h3 className="text-2xl font-semibold mt-4">1. Process Identification</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Process ID (PID):</strong> Unique identifier for the process</li>
      <li><strong>Parent Process ID (PPID):</strong> ID of the process that created this process</li>
      <li><strong>User ID:</strong> Identifier of the user who owns the process</li>
      <li><strong>Group ID:</strong> Identifier of the user group</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Process State Information</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Process State:</strong> Current state (New, Ready, Running, Waiting, Terminated)</li>
      <li><strong>Process Priority:</strong> Priority level for scheduling</li>
      <li><strong>Scheduling Parameters:</strong> Information used by scheduler</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. CPU State (Context)</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Program Counter (PC):</strong> Address of next instruction to execute</li>
      <li><strong>CPU Registers:</strong> Contents of all process-centric registers</li>
      <li><strong>Stack Pointer:</strong> Points to top of process stack</li>
      <li><strong>Condition Codes:</strong> Status flags from last CPU operation</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Memory Management Information</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Base Register:</strong> Starting address of process memory</li>
      <li><strong>Limit Register:</strong> Size of process memory</li>
      <li><strong>Page Table:</strong> Reference to process page table</li>
      <li><strong>Segment Table:</strong> Reference to segment table</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. I/O Status Information</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Open Files List:</strong> List of files opened by the process</li>
      <li><strong>I/O Devices:</strong> Devices allocated to the process</li>
      <li><strong>Pending I/O Requests:</strong> Outstanding I/O operations</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Accounting Information</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>CPU Time Used:</strong> Total CPU time consumed</li>
      <li><strong>Time Limits:</strong> Maximum allowed execution time</li>
      <li><strong>Account Numbers:</strong> For billing purposes</li>
      <li><strong>Process Start Time:</strong> When process was created</li>
    </ul>

    {/* PCB Structure Diagram */}
    <h2 className="text-3xl font-bold mt-8">PCB Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
┌────────────────────────────────┐
│      Process Control Block      │
├────────────────────────────────┤
│  Process ID (PID)              │
├────────────────────────────────┤
│  Process State                  │
├────────────────────────────────┤
│  Program Counter               │
├────────────────────────────────┤
│  CPU Registers                 │
│  - General purpose registers   │
│  - Stack pointer               │
│  - Condition codes             │
├────────────────────────────────┤
│  Memory Management Info        │
│  - Page table base             │
│  - Memory limits               │
├────────────────────────────────┤
│  Scheduling Information        │
│  - Priority                    │
│  - Scheduling queue pointers   │
├────────────────────────────────┤
│  I/O Status Information        │
│  - Open file descriptors       │
│  - Pending I/O                 │
├────────────────────────────────┤
│  Accounting Information        │
│  - CPU time used               │
│  - Time limits                 │
└────────────────────────────────┘
`}
      </pre>
    </div>

    {/* PCB Usage */}
    <h2 className="text-3xl font-bold mt-8">How PCB is Used</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Context Switching:</strong> When switching between processes, the OS saves
        the current process's context to its PCB and loads the new process's context from
        its PCB.
      </li>
      <li>
        <strong>Process Scheduling:</strong> The scheduler uses PCB information (priority,
        state) to decide which process runs next.
      </li>
      <li>
        <strong>Process Termination:</strong> PCB helps in resource cleanup when a process
        terminates.
      </li>
      <li>
        <strong>Inter-Process Communication:</strong> PCB pointers help in sending signals
        and messages between processes.
      </li>
    </ul>

    {/* PCB Table */}
    <h2 className="text-3xl font-bold mt-8">Process Table</h2>
    <p className="leading-relaxed">
      The operating system maintains a Process Table (or Process Table Array) containing
      pointers to all PCBs in the system. This table allows the OS to quickly access any
      process's information.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>PCB is created when a process is created and deleted when it terminates</li>
      <li>PCB is stored in kernel memory, protected from user processes</li>
      <li>Context switching involves saving and restoring PCB contents</li>
      <li>PCB size varies based on OS design and supported features</li>
      <li>Efficient PCB management is crucial for system performance</li>
    </ul>
  </div>
);

export default ProcessControlBlock;
