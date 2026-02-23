import React from 'react';

const TypesOfOS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Operating Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating systems are classified based on their capabilities, the environment they're designed for,
      and the way they process tasks. Understanding these types helps in selecting the appropriate OS
      for specific applications and understanding their design principles.
    </p>

    {/* Batch Operating System */}
    <h2 className="text-3xl font-bold mt-8">1. Batch Operating System</h2>
    <p className="leading-relaxed">
      In batch operating systems, similar jobs are grouped together into batches and executed sequentially
      without user interaction. This was the earliest type of operating system developed.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Jobs with similar requirements are batched together</li>
      <li>No direct interaction between user and computer during execution</li>
      <li>Operator groups jobs with similar needs and runs them as a batch</li>
      <li>CPU remains idle during I/O operations (major disadvantage)</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Payroll systems, Bank statement generation
    </p>

    {/* Multiprogramming OS */}
    <h2 className="text-3xl font-bold mt-8">2. Multiprogramming Operating System</h2>
    <p className="leading-relaxed">
      Multiprogramming increases CPU utilization by keeping multiple programs in memory simultaneously.
      When one program waits for I/O, the CPU switches to execute another program.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Multiple programs reside in main memory concurrently</li>
      <li>CPU switches between programs when one is waiting</li>
      <li>Increases CPU utilization significantly</li>
      <li>Requires memory management and CPU scheduling</li>
    </ul>

    {/* Multitasking/Time-sharing OS */}
    <h2 className="text-3xl font-bold mt-8">3. Time-Sharing Operating System</h2>
    <p className="leading-relaxed">
      Time-sharing (or multitasking) OS extends multiprogramming by rapidly switching CPU among processes,
      giving each user or process a small time slice, creating the illusion of simultaneous execution.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>CPU time is shared among multiple users/processes</li>
      <li>Each process gets a time quantum (typically 10-100 milliseconds)</li>
      <li>Provides interactive computing experience</li>
      <li>Response time is typically less than one second</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> UNIX, Linux, Windows (modern versions)
    </p>

    {/* Multiprocessor OS */}
    <h2 className="text-3xl font-bold mt-8">4. Multiprocessor Operating System</h2>
    <p className="leading-relaxed">
      Multiprocessor systems have two or more CPUs that share memory and peripherals. These systems
      provide increased throughput and reliability.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Types of Multiprocessor Systems:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Symmetric Multiprocessing (SMP):</strong> All processors are peers; any processor can
        run any task. OS code runs on any processor.
      </li>
      <li>
        <strong>Asymmetric Multiprocessing:</strong> One master processor controls the system; other
        slave processors execute assigned tasks.
      </li>
    </ul>

    {/* Distributed OS */}
    <h2 className="text-3xl font-bold mt-8">5. Distributed Operating System</h2>
    <p className="leading-relaxed">
      A distributed OS manages a collection of independent computers and makes them appear as a single
      coherent system to users. Resources and tasks are distributed across multiple machines.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Multiple autonomous computers connected via network</li>
      <li>Provides resource sharing across machines</li>
      <li>Offers improved reliability through redundancy</li>
      <li>Enables parallel processing capabilities</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> LOCUS, Amoeba, Google's infrastructure
    </p>

    {/* Real-Time OS */}
    <h2 className="text-3xl font-bold mt-8">6. Real-Time Operating System</h2>
    <p className="leading-relaxed">
      Real-time operating systems guarantee that critical tasks complete within strict time constraints.
      They are used in applications where timing is crucial.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Types:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Hard Real-Time:</strong> Guarantees critical tasks complete within time limits.
        Missing a deadline causes system failure. Examples: Aircraft control systems, Medical devices
      </li>
      <li>
        <strong>Soft Real-Time:</strong> Critical tasks get priority but deadlines are not absolute.
        Missing a deadline degrades performance but doesn't cause failure. Examples: Multimedia systems,
        Video conferencing
      </li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> VxWorks, QNX, RTLinux, FreeRTOS
    </p>

    {/* Network OS */}
    <h2 className="text-3xl font-bold mt-8">7. Network Operating System</h2>
    <p className="leading-relaxed">
      Network OS provides features for managing network resources and enabling computers to communicate
      and share resources over a network.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Manages network resources and connections</li>
      <li>Provides file sharing and printer sharing</li>
      <li>Supports remote administration</li>
      <li>Each computer maintains its own OS with networking capabilities</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Windows Server, Novell NetWare, Unix/Linux servers
    </p>

    {/* Mobile OS */}
    <h2 className="text-3xl font-bold mt-8">8. Mobile Operating System</h2>
    <p className="leading-relaxed">
      Mobile operating systems are designed specifically for mobile devices like smartphones and tablets,
      optimizing for touch interfaces, battery life, and wireless connectivity.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Optimized for touch-based interaction</li>
      <li>Power management for battery efficiency</li>
      <li>Support for sensors (GPS, accelerometer, etc.)</li>
      <li>App ecosystem with sandboxed applications</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Android, iOS, HarmonyOS
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of OS Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Key Feature</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Batch</td>
            <td className="p-3 border">Sequential job execution</td>
            <td className="p-3 border">Bulk data processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Time-Sharing</td>
            <td className="p-3 border">CPU time slicing</td>
            <td className="p-3 border">Interactive computing</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-Time</td>
            <td className="p-3 border">Timing guarantees</td>
            <td className="p-3 border">Critical systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Distributed</td>
            <td className="p-3 border">Multiple computer coordination</td>
            <td className="p-3 border">Cloud computing</td>
          </tr>
          <tr>
            <td className="p-3 border">Mobile</td>
            <td className="p-3 border">Touch and mobility</td>
            <td className="p-3 border">Smartphones, tablets</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TypesOfOS;
