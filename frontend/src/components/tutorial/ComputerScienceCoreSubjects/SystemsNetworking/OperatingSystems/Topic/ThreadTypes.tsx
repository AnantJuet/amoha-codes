import React from 'react';

const ThreadTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Threads
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Threads can be categorized based on where they are managed: at the user level or
      at the kernel level. Each type has distinct characteristics, advantages, and
      limitations that affect how applications are designed and how they perform.
    </p>

    {/* User Level Threads */}
    <h2 className="text-3xl font-bold mt-8">User-Level Threads (ULT)</h2>
    <p className="leading-relaxed">
      User-level threads are managed entirely by a user-space thread library without
      any kernel involvement. The kernel is completely unaware of these threads and
      sees only the process as a single entity.
    </p>

    <h3 className="text-2xl font-semibold mt-4">How User-Level Threads Work</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Thread Library:</strong> A runtime library handles all thread operations
        including creation, scheduling, and synchronization.
      </li>
      <li>
        <strong>Thread Table:</strong> The library maintains a thread table with each
        thread's registers, state, and other information.
      </li>
      <li>
        <strong>Scheduling:</strong> The library uses its own scheduler to decide
        which thread runs, without kernel intervention.
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    ┌─────────────────────────────────────────┐
    │              User Space                  │
    │                                          │
    │   ┌─────────────────────────────────┐   │
    │   │      Thread Library             │   │
    │   │  ┌─────┐ ┌─────┐ ┌─────┐       │   │
    │   │  │Thr 1│ │Thr 2│ │Thr 3│       │   │
    │   │  └─────┘ └─────┘ └─────┘       │   │
    │   │         Thread Table            │   │
    │   └─────────────────────────────────┘   │
    │                                          │
    └──────────────────────────────────────────┘
    ┌──────────────────────────────────────────┐
    │              Kernel Space                 │
    │   ┌─────────────────────────────────┐    │
    │   │   Sees Only ONE Process         │    │
    │   └─────────────────────────────────┘    │
    └──────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages of User-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Thread switching does not require kernel mode switch - very fast</li>
      <li>Scheduling can be application-specific and customized</li>
      <li>Can run on any operating system (portable)</li>
      <li>No modification to OS required</li>
      <li>Simple and efficient thread management</li>
      <li>Scalable - can have thousands of threads</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of User-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>If one thread makes a blocking system call, entire process blocks</li>
      <li>Cannot take advantage of multiprocessing - no true parallelism</li>
      <li>Kernel schedules the process, not individual threads</li>
      <li>Page faults block all threads in the process</li>
      <li>Requires non-blocking I/O wrappers for best performance</li>
    </ul>

    {/* Kernel Level Threads */}
    <h2 className="text-3xl font-bold mt-8">Kernel-Level Threads (KLT)</h2>
    <p className="leading-relaxed">
      Kernel-level threads are managed directly by the operating system kernel. The
      kernel has complete knowledge of all threads and handles their creation, scheduling,
      and synchronization.
    </p>

    <h3 className="text-2xl font-semibold mt-4">How Kernel-Level Threads Work</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Kernel Support:</strong> The kernel maintains a thread table with
        information about all threads in the system.
      </li>
      <li>
        <strong>System Calls:</strong> Thread operations require system calls,
        transitioning to kernel mode.
      </li>
      <li>
        <strong>Kernel Scheduling:</strong> The kernel's scheduler manages all threads,
        considering them as schedulable entities.
      </li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    ┌─────────────────────────────────────────┐
    │              User Space                  │
    │   ┌─────┐ ┌─────┐ ┌─────┐              │
    │   │Thr 1│ │Thr 2│ │Thr 3│              │
    │   └──┬──┘ └──┬──┘ └──┬──┘              │
    │      │       │       │                  │
    └──────┼───────┼───────┼──────────────────┘
           │       │       │
    ┌──────┼───────┼───────┼──────────────────┐
    │      ↓       ↓       ↓                  │
    │   ┌─────────────────────────────────┐   │
    │   │      Kernel Thread Table        │   │
    │   │  ┌─────┐ ┌─────┐ ┌─────┐       │   │
    │   │  │KT 1 │ │KT 2 │ │KT 3 │       │   │
    │   │  └─────┘ └─────┘ └─────┘       │   │
    │   └─────────────────────────────────┘   │
    │              Kernel Space                │
    └──────────────────────────────────────────┘
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Kernel-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>If one thread blocks, others in the process can continue</li>
      <li>Can run threads on different processors - true parallelism</li>
      <li>Kernel can schedule threads based on system-wide priorities</li>
      <li>Better handling of blocking operations</li>
      <li>No need for application-level scheduling</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Kernel-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Thread operations are slower (require system calls)</li>
      <li>Higher overhead for thread creation and management</li>
      <li>Context switching involves full kernel mode switch</li>
      <li>Less portable across different operating systems</li>
      <li>Limited scalability compared to user-level threads</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">User-Level Threads</th>
            <th className="p-3 border">Kernel-Level Threads</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Management</td>
            <td className="p-3 border">Thread library in user space</td>
            <td className="p-3 border">Operating system kernel</td>
          </tr>
          <tr>
            <td className="p-3 border">Kernel Awareness</td>
            <td className="p-3 border">Kernel unaware of threads</td>
            <td className="p-3 border">Kernel aware of all threads</td>
          </tr>
          <tr>
            <td className="p-3 border">Creation Speed</td>
            <td className="p-3 border">Fast (no syscall)</td>
            <td className="p-3 border">Slower (syscall required)</td>
          </tr>
          <tr>
            <td className="p-3 border">Context Switch</td>
            <td className="p-3 border">Very fast</td>
            <td className="p-3 border">Slower (mode switch)</td>
          </tr>
          <tr>
            <td className="p-3 border">Blocking</td>
            <td className="p-3 border">Blocks entire process</td>
            <td className="p-3 border">Blocks only that thread</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiprocessor Support</td>
            <td className="p-3 border">Cannot utilize</td>
            <td className="p-3 border">Can run in parallel</td>
          </tr>
          <tr>
            <td className="p-3 border">Portability</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Limited by OS</td>
          </tr>
          <tr>
            <td className="p-3 border">Scheduling</td>
            <td className="p-3 border">Application controlled</td>
            <td className="p-3 border">Kernel controlled</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hybrid Approaches */}
    <h2 className="text-3xl font-bold mt-8">Hybrid Threading Approaches</h2>
    <p className="leading-relaxed">
      Some systems combine both approaches to get the benefits of each:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Scheduler Activations:</strong> Kernel notifies user-level scheduler
        of events (blocking, unblocking) so it can make better decisions.
      </li>
      <li>
        <strong>M:N Threading:</strong> Multiple user threads map to multiple kernel
        threads, combining scalability with parallelism.
      </li>
      <li>
        <strong>Lightweight Processes (LWP):</strong> An intermediate layer between
        user threads and kernel threads.
      </li>
    </ul>

    {/* Thread Libraries */}
    <h2 className="text-3xl font-bold mt-8">Common Thread Libraries</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Library</th>
            <th className="p-3 border">Platform</th>
            <th className="p-3 border">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">POSIX Pthreads</td>
            <td className="p-3 border">Unix/Linux</td>
            <td className="p-3 border">Can be either (usually kernel)</td>
          </tr>
          <tr>
            <td className="p-3 border">Windows Threads</td>
            <td className="p-3 border">Windows</td>
            <td className="p-3 border">Kernel-level</td>
          </tr>
          <tr>
            <td className="p-3 border">Java Threads</td>
            <td className="p-3 border">Cross-platform</td>
            <td className="p-3 border">Maps to native (usually kernel)</td>
          </tr>
          <tr>
            <td className="p-3 border">Go Goroutines</td>
            <td className="p-3 border">Cross-platform</td>
            <td className="p-3 border">User-level (M:N mapped)</td>
          </tr>
          <tr>
            <td className="p-3 border">GNU Pth</td>
            <td className="p-3 border">Unix</td>
            <td className="p-3 border">User-level</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each Type</h2>

    <h3 className="text-2xl font-semibold mt-4">User-Level Threads Best For:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>High-concurrency applications with many lightweight tasks</li>
      <li>Applications requiring custom scheduling algorithms</li>
      <li>Cross-platform applications needing consistent behavior</li>
      <li>Cooperative multitasking scenarios</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Kernel-Level Threads Best For:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Applications needing true parallel execution</li>
      <li>Programs with significant blocking I/O</li>
      <li>CPU-intensive tasks on multicore systems</li>
      <li>Real-time applications requiring predictable scheduling</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>User-level threads are fast but cannot achieve true parallelism</li>
      <li>Kernel-level threads enable parallelism but have higher overhead</li>
      <li>Blocking system calls are problematic for user-level threads</li>
      <li>Modern systems often use kernel-level threads for simplicity</li>
      <li>Hybrid approaches attempt to combine benefits of both types</li>
      <li>The choice depends on application requirements and system characteristics</li>
    </ul>
  </div>
);

export default ThreadTypes;
