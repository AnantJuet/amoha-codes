import React from 'react';

const ContextSwitching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Context Switching
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Context switching is the mechanism by which an operating system stores and restores
      the state of a process so that execution can be resumed from the same point later.
      This allows multiple processes to share a single CPU effectively, creating the
      illusion of parallel execution.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is Context Switching?</h2>
    <p className="leading-relaxed">
      A context switch occurs when the CPU switches from executing one process to another.
      The context of the current process must be saved so it can be restored later, and
      the context of the next process must be loaded. The context includes all information
      needed to resume a process exactly where it left off.
    </p>

    {/* Process Context */}
    <h2 className="text-3xl font-bold mt-8">What is Process Context?</h2>
    <p className="leading-relaxed">
      The process context is all the information the OS needs to manage the process and
      resume its execution. This information is stored in the Process Control Block (PCB).
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Program Counter:</strong> Address of the next instruction</li>
      <li><strong>CPU Registers:</strong> Values of all processor registers</li>
      <li><strong>Stack Pointer:</strong> Current position in the call stack</li>
      <li><strong>Memory Management Info:</strong> Page tables, segment registers</li>
      <li><strong>Process State:</strong> Running, ready, waiting, etc.</li>
      <li><strong>I/O State:</strong> Open files and device allocations</li>
      <li><strong>Accounting Information:</strong> CPU time used, limits</li>
    </ul>

    {/* Steps in Context Switching */}
    <h2 className="text-3xl font-bold mt-8">Steps in Context Switching</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Save Current Context:</strong> The OS saves all CPU registers, program
        counter, and stack pointer of the currently running process to its PCB.
      </li>
      <li>
        <strong>Update PCB:</strong> The state of the current process is changed (e.g.,
        from Running to Ready or Waiting) in its PCB.
      </li>
      <li>
        <strong>Move PCB to Queue:</strong> The current process's PCB is moved to the
        appropriate queue (ready queue or wait queue).
      </li>
      <li>
        <strong>Select Next Process:</strong> The scheduler selects the next process to
        run from the ready queue.
      </li>
      <li>
        <strong>Update New Process State:</strong> The selected process's state is changed
        to Running in its PCB.
      </li>
      <li>
        <strong>Restore Context:</strong> The saved context of the new process is loaded
        from its PCB into the CPU registers.
      </li>
      <li>
        <strong>Resume Execution:</strong> The CPU begins executing the new process from
        where it previously stopped.
      </li>
    </ul>

    {/* Context Switch Diagram */}
    <h2 className="text-3xl font-bold mt-8">Context Switch Illustration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process P0                  Operating System                  Process P1
    |                              |                              |
    |  Executing                   |                              |
    |                              |                              |
    |-------- Interrupt/Syscall ---|                              |
    |                              |                              |
    |         Save state to PCB0   |                              |
    |                              |                              |
    |         Load state from PCB1 |                              |
    |                              |                              |
    |                              |-------- Resume P1 -----------|
    |                              |                              |
    |      (Idle/Waiting)          |                    Executing |
    |                              |                              |
    |                              |-------- Interrupt/Syscall ---|
    |                              |                              |
    |         Save state to PCB1   |                              |
    |                              |                              |
    |         Load state from PCB0 |                              |
    |                              |                              |
    |-------- Resume P0 -----------|                              |
    |                              |                              |
    |  Executing                   |                              |
`}
      </pre>
    </div>

    {/* When Context Switch Occurs */}
    <h2 className="text-3xl font-bold mt-8">When Does Context Switching Occur?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Multitasking:</strong> When the scheduler decides to give CPU time to
        another process (time slice expiration).
      </li>
      <li>
        <strong>Interrupt Handling:</strong> When a hardware interrupt occurs and needs
        to be serviced.
      </li>
      <li>
        <strong>System Call:</strong> When a process requests an OS service that requires
        waiting (e.g., I/O operation).
      </li>
      <li>
        <strong>Preemption:</strong> When a higher-priority process becomes ready in a
        preemptive scheduling system.
      </li>
      <li>
        <strong>Process Blocking:</strong> When a process cannot continue due to resource
        unavailability.
      </li>
    </ul>

    {/* Context Switch Time */}
    <h2 className="text-3xl font-bold mt-8">Context Switch Time</h2>
    <p className="leading-relaxed">
      Context switch time is the time taken to switch from one process to another.
      During this time, the system is doing useful administrative work but no user
      process is executing, making it pure overhead.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Factors Affecting Context Switch Time</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Memory speed and CPU speed</li>
      <li>Number of registers to save and restore</li>
      <li>Hardware support for context switching</li>
      <li>Operating system design and efficiency</li>
      <li>Memory management complexity (e.g., TLB flush required)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Typical Context Switch Times</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Type</th>
            <th className="p-3 border">Context Switch Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Modern Desktop/Server</td>
            <td className="p-3 border">1-10 microseconds</td>
          </tr>
          <tr>
            <td className="p-3 border">Embedded Systems</td>
            <td className="p-3 border">0.5-5 microseconds</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-Time Systems</td>
            <td className="p-3 border">Sub-microsecond possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hardware Support */}
    <h2 className="text-3xl font-bold mt-8">Hardware Support for Context Switching</h2>
    <p className="leading-relaxed">
      Modern processors provide hardware features to speed up context switching:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>
        <strong>Multiple Register Sets:</strong> Some CPUs have multiple register banks,
        allowing quick switching between contexts.
      </li>
      <li>
        <strong>Hardware Task State Segment:</strong> x86 processors support hardware
        task switching using Task State Segment (TSS).
      </li>
      <li>
        <strong>TLB with ASID:</strong> Address Space Identifiers help avoid full TLB
        flush during context switch.
      </li>
      <li>
        <strong>Fast System Call Instructions:</strong> SYSENTER/SYSEXIT and SYSCALL/SYSRET
        provide faster kernel entry.
      </li>
    </ul>

    {/* Context Switch vs Mode Switch */}
    <h2 className="text-3xl font-bold mt-8">Context Switch vs Mode Switch</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Context Switch</th>
            <th className="p-3 border">Mode Switch</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Definition</td>
            <td className="p-3 border">Switching between processes</td>
            <td className="p-3 border">Switching between user and kernel mode</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Higher (full context save/restore)</td>
            <td className="p-3 border">Lower (only privilege change)</td>
          </tr>
          <tr>
            <td className="p-3 border">Process Change</td>
            <td className="p-3 border">Yes, different process runs</td>
            <td className="p-3 border">No, same process continues</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Space</td>
            <td className="p-3 border">Changes</td>
            <td className="p-3 border">Same</td>
          </tr>
          <tr>
            <td className="p-3 border">Trigger</td>
            <td className="p-3 border">Scheduler decision</td>
            <td className="p-3 border">System call, interrupt</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Impact on Performance */}
    <h2 className="text-3xl font-bold mt-8">Impact on System Performance</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Direct Overhead:</strong> Time spent saving and restoring context is
        time not spent executing user processes.
      </li>
      <li>
        <strong>Cache Effects:</strong> Context switch may invalidate CPU caches, causing
        cache misses when the new process runs.
      </li>
      <li>
        <strong>TLB Flush:</strong> Virtual memory translation lookaside buffer may need
        to be flushed, increasing memory access time.
      </li>
      <li>
        <strong>Pipeline Effects:</strong> CPU pipeline may need to be flushed, wasting
        in-flight instructions.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Context switching enables multiprogramming and time-sharing</li>
      <li>The context is saved in the PCB and restored when process resumes</li>
      <li>Context switch time is pure overhead - no useful work is done</li>
      <li>Hardware support can significantly reduce context switch time</li>
      <li>Frequent context switches impact system performance negatively</li>
      <li>Thread context switches are faster than process context switches</li>
      <li>Mode switching is different and less expensive than context switching</li>
    </ul>
  </div>
);

export default ContextSwitching;
