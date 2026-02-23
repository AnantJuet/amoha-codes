import React from 'react';

const MultithreadingModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multithreading Models
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multithreading models define the relationship between user-level threads and
      kernel-level threads. The way these two types of threads are mapped determines
      the threading model used by the operating system and affects performance,
      concurrency, and implementation complexity.
    </p>

    {/* User vs Kernel Threads */}
    <h2 className="text-3xl font-bold mt-8">User Threads vs Kernel Threads</h2>
    <p className="leading-relaxed">
      Before understanding the models, it is essential to know the difference between
      user-level and kernel-level threads.
    </p>

    <h3 className="text-2xl font-semibold mt-4">User-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Managed entirely by user-level thread library</li>
      <li>Kernel is unaware of their existence</li>
      <li>Fast to create and manage (no system calls needed)</li>
      <li>Examples: POSIX Pthreads (user-level), Java Green Threads (historical)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Kernel-Level Threads</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Managed directly by the operating system kernel</li>
      <li>Kernel handles creation, scheduling, and management</li>
      <li>Slower to create and manage (requires system calls)</li>
      <li>Examples: Windows threads, Linux native threads</li>
    </ul>

    {/* Many-to-One Model */}
    <h2 className="text-3xl font-bold mt-8">1. Many-to-One Model</h2>
    <p className="leading-relaxed">
      In this model, many user-level threads are mapped to a single kernel thread.
      Thread management is done by the thread library in user space.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    User Space            Kernel Space

    ┌───────┐
    │Thread1│──┐
    └───────┘  │
    ┌───────┐  │         ┌─────────────┐
    │Thread2│──┼────────→│Kernel Thread│
    └───────┘  │         └─────────────┘
    ┌───────┐  │
    │Thread3│──┘
    └───────┘

    Many User Threads → One Kernel Thread
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Thread management is very efficient (no kernel involvement)</li>
      <li>Can run on any operating system (portable)</li>
      <li>Very low overhead for thread operations</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>If one thread blocks, all threads block (entire process blocks)</li>
      <li>Cannot run in parallel on multicore systems</li>
      <li>A system call by one thread blocks all threads</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Solaris Green Threads, GNU Portable Threads
    </p>

    {/* One-to-One Model */}
    <h2 className="text-3xl font-bold mt-8">2. One-to-One Model</h2>
    <p className="leading-relaxed">
      Each user-level thread maps to exactly one kernel thread. This provides more
      concurrency than the many-to-one model.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    User Space            Kernel Space

    ┌───────┐            ┌─────────────┐
    │Thread1│───────────→│Kernel Thr 1 │
    └───────┘            └─────────────┘
    ┌───────┐            ┌─────────────┐
    │Thread2│───────────→│Kernel Thr 2 │
    └───────┘            └─────────────┘
    ┌───────┐            ┌─────────────┐
    │Thread3│───────────→│Kernel Thr 3 │
    └───────┘            └─────────────┘

    One User Thread → One Kernel Thread
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>True parallelism on multicore processors</li>
      <li>If one thread blocks, others can continue</li>
      <li>Better throughput on multiprocessor systems</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Creating user thread requires creating kernel thread (overhead)</li>
      <li>Number of threads may be limited by the OS</li>
      <li>Higher resource consumption</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Windows, Linux (NPTL), Solaris 9 and later
    </p>

    {/* Many-to-Many Model */}
    <h2 className="text-3xl font-bold mt-8">3. Many-to-Many Model</h2>
    <p className="leading-relaxed">
      Many user-level threads are multiplexed onto a smaller or equal number of kernel
      threads. The developer can create as many user threads as needed, and the kernel
      threads can run in parallel.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    User Space            Kernel Space

    ┌───────┐
    │Thread1│──┐         ┌─────────────┐
    └───────┘  ├────────→│Kernel Thr 1 │
    ┌───────┐  │         └─────────────┘
    │Thread2│──┤
    └───────┘  │         ┌─────────────┐
    ┌───────┐  ├────────→│Kernel Thr 2 │
    │Thread3│──┤         └─────────────┘
    └───────┘  │
    ┌───────┐  │
    │Thread4│──┘
    └───────┘

    Many User Threads → Many Kernel Threads (M ≥ N)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Can create as many user threads as needed</li>
      <li>Corresponding kernel threads can run in parallel</li>
      <li>When a thread blocks, kernel can schedule another</li>
      <li>Best of both worlds approach</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Complex to implement</li>
      <li>Requires careful coordination between user and kernel libraries</li>
      <li>Debugging can be challenging</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Solaris before version 9, Windows ThreadFiber package
    </p>

    {/* Two-Level Model */}
    <h2 className="text-3xl font-bold mt-8">4. Two-Level Model</h2>
    <p className="leading-relaxed">
      A variation of the many-to-many model that also allows a user thread to be bound
      directly to a kernel thread. This provides flexibility for threads that need
      guaranteed kernel-level scheduling.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    User Space            Kernel Space

    ┌───────┐            ┌─────────────┐
    │Thread1│───────────→│Kernel Thr 1 │  (bound)
    └───────┘            └─────────────┘
    ┌───────┐
    │Thread2│──┐         ┌─────────────┐
    └───────┘  ├────────→│Kernel Thr 2 │  (multiplexed)
    ┌───────┐  │         └─────────────┘
    │Thread3│──┘
    └───────┘

    Combination: Bound + Multiplexed
`}
      </pre>
    </div>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> HP-UX, Tru64 UNIX, older Solaris versions
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Model Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Many-to-One</th>
            <th className="p-3 border">One-to-One</th>
            <th className="p-3 border">Many-to-Many</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">True Parallelism</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Blocking Behavior</td>
            <td className="p-3 border">All threads block</td>
            <td className="p-3 border">Only one blocks</td>
            <td className="p-3 border">Only one blocks</td>
          </tr>
          <tr>
            <td className="p-3 border">Thread Creation</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slow</td>
            <td className="p-3 border">Moderate</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">High (user)</td>
            <td className="p-3 border">Limited (kernel)</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Portability</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Modern Trends */}
    <h2 className="text-3xl font-bold mt-8">Modern Implementations</h2>
    <p className="leading-relaxed">
      Most modern operating systems use the one-to-one model due to its simplicity
      and ability to leverage multicore processors effectively. The many-to-many model,
      while theoretically superior, proved too complex to implement and debug.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Linux:</strong> NPTL (Native POSIX Thread Library) - One-to-One</li>
      <li><strong>Windows:</strong> Native threads - One-to-One</li>
      <li><strong>macOS:</strong> Pthreads over Mach threads - One-to-One</li>
      <li><strong>Go:</strong> Goroutines use Many-to-Many (M:N scheduling)</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Many-to-One maps all user threads to one kernel thread - no parallelism</li>
      <li>One-to-One provides true parallelism but with higher overhead</li>
      <li>Many-to-Many offers flexibility but is complex to implement</li>
      <li>Modern OSes primarily use One-to-One for simplicity</li>
      <li>The choice of model affects performance on multicore systems</li>
      <li>Blocking behavior differs significantly between models</li>
    </ul>
  </div>
);

export default MultithreadingModels;
