import React from 'react';

const ProcessStates: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process States
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      As a process executes, it changes state. The state of a process is defined by its current
      activity. Understanding process states is fundamental to understanding how the operating
      system manages processes and allocates CPU time.
    </p>

    {/* Basic States */}
    <h2 className="text-3xl font-bold mt-8">Basic Process States</h2>
    <p className="leading-relaxed">
      A process can be in one of the following states:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>New:</strong> The process is being created. The OS is allocating resources and
        initializing the process control block.
      </li>
      <li>
        <strong>Ready:</strong> The process is waiting to be assigned to a processor. It has all
        resources it needs except CPU time.
      </li>
      <li>
        <strong>Running:</strong> Instructions are being executed. The process has the CPU and is
        actively executing its code.
      </li>
      <li>
        <strong>Waiting (Blocked):</strong> The process is waiting for some event to occur, such as
        I/O completion or a signal.
      </li>
      <li>
        <strong>Terminated:</strong> The process has finished execution. The OS is deallocating
        resources and removing the process.
      </li>
    </ul>

    {/* State Diagram */}
    <h2 className="text-3xl font-bold mt-8">Process State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
        ┌─────────────────────────────────────────────────┐
        │                                                 │
        │    ┌─────┐     admitted     ┌───────┐          │
        │    │ New │ ───────────────→ │ Ready │          │
        │    └─────┘                  └───┬───┘          │
        │                                 │              │
        │                    scheduler    │              │
        │                    dispatch     ↓              │
        │                            ┌─────────┐        │
        │         interrupt          │ Running │        │
        │         ┌─────────────────│         │        │
        │         │                  └────┬────┘        │
        │         │                       │             │
        │         ↓                       │ exit        │
        │    ┌─────────┐                  ↓             │
        │    │  Ready  │←──────     ┌────────────┐     │
        │    └─────────┘  I/O or    │ Terminated │     │
        │         ↑       event     └────────────┘     │
        │         │     completion                      │
        │         │                                     │
        │    ┌─────────┐                               │
        │    │ Waiting │ ←── I/O or event wait        │
        │    └─────────┘                               │
        │                                               │
        └───────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* State Transitions */}
    <h2 className="text-3xl font-bold mt-8">State Transitions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transition</th>
            <th className="p-3 border">From → To</th>
            <th className="p-3 border">Trigger</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Admitted</td>
            <td className="p-3 border">New → Ready</td>
            <td className="p-3 border">Process creation completed</td>
          </tr>
          <tr>
            <td className="p-3 border">Dispatch</td>
            <td className="p-3 border">Ready → Running</td>
            <td className="p-3 border">Scheduler selects process for CPU</td>
          </tr>
          <tr>
            <td className="p-3 border">Interrupt</td>
            <td className="p-3 border">Running → Ready</td>
            <td className="p-3 border">Time quantum expired, higher priority process</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Wait</td>
            <td className="p-3 border">Running → Waiting</td>
            <td className="p-3 border">Process requests I/O or waits for event</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Complete</td>
            <td className="p-3 border">Waiting → Ready</td>
            <td className="p-3 border">I/O operation or event completed</td>
          </tr>
          <tr>
            <td className="p-3 border">Exit</td>
            <td className="p-3 border">Running → Terminated</td>
            <td className="p-3 border">Process completes or is killed</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Additional States */}
    <h2 className="text-3xl font-bold mt-8">Additional Process States</h2>
    <p className="leading-relaxed">
      Some operating systems include additional states:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Suspended Ready:</strong> Process is in secondary storage but ready to execute
        when brought to main memory.
      </li>
      <li>
        <strong>Suspended Waiting:</strong> Process is in secondary storage and waiting for
        an event.
      </li>
    </ul>

    {/* Seven State Model */}
    <h2 className="text-3xl font-bold mt-8">Seven-State Process Model</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">New</td>
            <td className="p-3 border">Process is being created</td>
          </tr>
          <tr>
            <td className="p-3 border">Ready</td>
            <td className="p-3 border">In memory, waiting for CPU</td>
          </tr>
          <tr>
            <td className="p-3 border">Running</td>
            <td className="p-3 border">Currently executing on CPU</td>
          </tr>
          <tr>
            <td className="p-3 border">Blocked</td>
            <td className="p-3 border">Waiting for I/O in memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Blocked Suspend</td>
            <td className="p-3 border">Waiting for I/O, swapped to disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Ready Suspend</td>
            <td className="p-3 border">Ready but swapped to disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Exit</td>
            <td className="p-3 border">Process terminated</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Only one process can be running on a single CPU at any instant</li>
      <li>Many processes can be ready and waiting simultaneously</li>
      <li>Transitions are triggered by events or scheduler decisions</li>
      <li>The OS maintains queues for ready and waiting processes</li>
      <li>State information is stored in the Process Control Block (PCB)</li>
    </ul>
  </div>
);

export default ProcessStates;
