import React from 'react';

const Multiprocessors: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multiprocessor Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A multiprocessor system is a computer system that contains two or more processors
      (CPUs) that share access to main memory and are capable of executing programs
      simultaneously. Multiprocessors enable parallel processing of tasks, improving
      system throughput, reliability, and performance. They are the foundation of modern
      computing, from multi-core laptops to massive data center servers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      A multiprocessor system consists of multiple independent processors interconnected
      in a way that allows them to share system resources such as memory, I/O devices,
      and buses. The processors can work on different parts of the same program or
      execute different programs entirely, coordinating through shared memory or message
      passing mechanisms.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Multiprocessor System Overview:

                    +-----------------------------------+
                    |          Operating System         |
                    |    (Manages all processors)       |
                    +-----------------------------------+
                                    |
          +------------+------------+------------+
          |            |            |            |
     +----+----+  +----+----+  +----+----+  +----+----+
     |  CPU 0  |  |  CPU 1  |  |  CPU 2  |  |  CPU 3  |
     | +-----+ |  | +-----+ |  | +-----+ |  | +-----+ |
     | |Cache| |  | |Cache| |  | |Cache| |  | |Cache| |
     | +-----+ |  | +-----+ |  | +-----+ |  | +-----+ |
     +---------+  +---------+  +---------+  +---------+
          |            |            |            |
          +------------+------------+------------+
                              |
                    +---------+---------+
                    | Interconnection   |
                    | Network (Bus,     |
                    | Crossbar, etc.)   |
                    +---------+---------+
                              |
          +------------+------+------+------------+
          |            |             |            |
     +----+----+  +----+----+   +----+----+  +----+----+
     | Memory  |  | Memory  |   |   I/O   |  |   I/O   |
     | Module 0|  | Module 1|   | Device 1|  | Device 2|
     +---------+  +---------+   +---------+  +---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Multiprocessor Systems</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Symmetric Multiprocessing (SMP)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SMP (Symmetric Multiprocessing) / UMA Architecture:

+--------+  +--------+  +--------+  +--------+
| CPU 0  |  | CPU 1  |  | CPU 2  |  | CPU 3  |
|  L1$   |  |  L1$   |  |  L1$   |  |  L1$   |
+---+----+  +---+----+  +---+----+  +---+----+
    |           |           |           |
    +-----+-----+-----+-----+-----+-----+
          |                       |
    +-----+-----+           +-----+-----+
    |    L2$    |           |    L2$    |
    +-----------+           +-----------+
          |                       |
          +----------+------------+
                     |
               +-----+-----+
               | Shared L3 |
               |   Cache   |
               +-----+-----+
                     |
               +-----+-----+
               |  Memory   |
               |Controller |
               +-----+-----+
                     |
              +------+------+
              |   DRAM      |
              | (Shared)    |
              +-------------+

Characteristics:
- All CPUs have equal access time to memory (Uniform Memory Access)
- Single shared memory address space
- All CPUs are identical and interchangeable
- OS runs on any/all processors
- Examples: Most desktop/laptop multi-core CPUs`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. NUMA (Non-Uniform Memory Access)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`NUMA Architecture:

Node 0                                    Node 1
+---------------------------+    +---------------------------+
| +--------+    +--------+  |    |  +--------+    +--------+ |
| | CPU 0  |    | CPU 1  |  |    |  | CPU 2  |    | CPU 3  | |
| |  L1$   |    |  L1$   |  |    |  |  L1$   |    |  L1$   | |
| +---+----+    +---+----+  |    |  +---+----+    +---+----+ |
|     |             |       |    |      |             |      |
| +---+-------------+---+   |    |  +---+-------------+---+  |
| |      L3 Cache       |   |    |  |      L3 Cache       |  |
| +---------+-----------+   |    |  +---------+-----------+  |
|           |               |    |            |              |
| +---------+-----------+   |    |  +---------+-----------+  |
| |   Memory Controller |   |    |  |   Memory Controller |  |
| +---------+-----------+   |    |  +---------+-----------+  |
|           |               |    |            |              |
| +---------+-----------+   |    |  +---------+-----------+  |
| |   Local Memory      |   |    |  |   Local Memory      |  |
| |   (Fast Access)     |   |    |  |   (Fast Access)     |  |
| +---------------------+   |    |  +---------------------+  |
+-----------+---------------+    +------------+--------------+
            |                                 |
            +---------- Interconnect ---------+
                     (QPI, UPI, HyperTransport)

Access Times (example):
- Local memory access:  ~80 ns
- Remote memory access: ~150 ns (1.8x slower)

OS must be NUMA-aware for optimal performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Architectures Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">UMA/SMP</th>
            <th className="p-3 border">NUMA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Access Time</td>
            <td className="p-3 border">Uniform for all processors</td>
            <td className="p-3 border">Varies based on memory location</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Limited (4-8 processors typical)</td>
            <td className="p-3 border">High (100s of processors)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Bandwidth</td>
            <td className="p-3 border">Shared, can be bottleneck</td>
            <td className="p-3 border">Distributed, higher aggregate</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming Model</td>
            <td className="p-3 border">Simpler, uniform view</td>
            <td className="p-3 border">Complex, locality-aware</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Lower for small systems</td>
            <td className="p-3 border">Higher but scales better</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Desktop CPUs, single-socket servers</td>
            <td className="p-3 border">Multi-socket servers, HPC</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Coherence</h2>
    <p className="leading-relaxed">
      When multiple processors have private caches, copies of the same memory location
      can exist in multiple caches. Cache coherence ensures all processors see a consistent
      view of memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Cache Coherence Problem:

Initial State: Memory location X = 5

+--------+           +--------+           +--------+
| CPU 0  |           | CPU 1  |           | Memory |
|Cache:  |           |Cache:  |           |        |
|  X = 5 |           |  X = 5 |           | X = 5  |
+--------+           +--------+           +--------+

CPU 0 writes X = 10:
+--------+           +--------+           +--------+
| CPU 0  |           | CPU 1  |           | Memory |
|Cache:  |           |Cache:  |           |        |
|  X = 10|  (new)    |  X = 5 | (stale!)  | X = ?  |
+--------+           +--------+           +--------+

Problem: CPU 1 has stale data!
CPU 1 reads X -> gets 5, but should be 10

Solution: Cache Coherence Protocols`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">MESI Protocol</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MESI Cache Coherence Protocol:

Four States for each cache line:
+----------+------------------------------------------------+
| State    | Description                                    |
+----------+------------------------------------------------+
| Modified | Only copy, dirty (differs from memory)         |
|          | This cache has written to the line             |
+----------+------------------------------------------------+
| Exclusive| Only copy, clean (same as memory)              |
|          | Can be written without bus transaction         |
+----------+------------------------------------------------+
| Shared   | Multiple copies may exist, all clean           |
|          | Must invalidate others before writing          |
+----------+------------------------------------------------+
| Invalid  | Cache line not valid                           |
|          | Must fetch from memory or other cache          |
+----------+------------------------------------------------+

State Transitions:
                    +-------+
        Read Miss   |       | Write Hit
          +-------->|   M   |<--------+
          |         |       |         |
          |         +---+---+         |
          |             |             |
     +----+---+    Write|Back    +----+---+
     |        |         |        |        |
     |   E    |<--------+------->|   S    |
     |        |   Snoop Read     |        |
     +---+----+                  +---+----+
         |                           |
    Read |Miss                  Read |Miss
         |         +---+             |
         +-------->| I |<------------+
                   +---+
              Snoop Invalidate`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Mechanisms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Hardware Support</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Test-and-Set</td>
            <td className="p-3 border">Atomically read and set a lock</td>
            <td className="p-3 border">TAS instruction</td>
          </tr>
          <tr>
            <td className="p-3 border">Compare-and-Swap</td>
            <td className="p-3 border">Atomically compare and update if match</td>
            <td className="p-3 border">CAS / CMPXCHG instruction</td>
          </tr>
          <tr>
            <td className="p-3 border">Load-Linked/Store-Conditional</td>
            <td className="p-3 border">Detect if location was modified</td>
            <td className="p-3 border">LL/SC instructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Fetch-and-Add</td>
            <td className="p-3 border">Atomically increment and return old value</td>
            <td className="p-3 border">XADD instruction</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Barriers</td>
            <td className="p-3 border">Enforce ordering of memory operations</td>
            <td className="p-3 border">MFENCE, DMB instructions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Spinlock Implementation with Test-and-Set:

// Acquire lock
acquire(lock):
    while (test_and_set(lock) == 1):
        // Spin (busy wait)
        pass
    // Lock acquired

// Release lock
release(lock):
    lock = 0


Compare-and-Swap (CAS) for Lock-Free Counter:

atomic_increment(counter):
    do:
        old_value = *counter
        new_value = old_value + 1
    while (!CAS(counter, old_value, new_value))
    // CAS returns true if *counter was still old_value
    // and sets it to new_value atomically`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiprocessor Operating Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`OS Models for Multiprocessors:

1. Asymmetric Multiprocessing (AMP)
   - One master CPU runs OS
   - Other CPUs run user applications
   - Simple but unbalanced

   +--------+    +--------+    +--------+
   | Master |    | Slave  |    | Slave  |
   |  OS    |    | App 1  |    | App 2  |
   +--------+    +--------+    +--------+

2. Symmetric Multiprocessing (SMP)
   - OS runs on all CPUs
   - Any CPU can execute any task
   - Better load balancing

   +--------+    +--------+    +--------+
   | CPU 0  |    | CPU 1  |    | CPU 2  |
   |OS+Apps |    |OS+Apps |    |OS+Apps |
   +--------+    +--------+    +--------+
        |            |            |
        +-----+------+------+-----+
              |             |
        +-----+------+ +----+-----+
        | Shared OS  | | Shared   |
        | Data Structs| | Memory  |
        +------------+ +----------+

3. Clustered (Distributed OS)
   - Multiple OS instances
   - Message passing between nodes
   - High scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scheduling in Multiprocessors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros/Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Single Queue (Global)</td>
            <td className="p-3 border">All CPUs share one ready queue</td>
            <td className="p-3 border">Simple, poor cache affinity</td>
          </tr>
          <tr>
            <td className="p-3 border">Per-CPU Queues</td>
            <td className="p-3 border">Each CPU has own ready queue</td>
            <td className="p-3 border">Good affinity, may imbalance</td>
          </tr>
          <tr>
            <td className="p-3 border">Work Stealing</td>
            <td className="p-3 border">Idle CPUs steal from busy ones</td>
            <td className="p-3 border">Balanced, some overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Gang Scheduling</td>
            <td className="p-3 border">Co-schedule related threads together</td>
            <td className="p-3 border">Good for parallel apps</td>
          </tr>
          <tr>
            <td className="p-3 border">NUMA-Aware</td>
            <td className="p-3 border">Schedule near thread's memory</td>
            <td className="p-3 border">Optimizes memory access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Multiprocessor Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Processor</th>
            <th className="p-3 border">Cores</th>
            <th className="p-3 border">Memory Type</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Intel Core i9-14900K</td>
            <td className="p-3 border">24 (8P+16E)</td>
            <td className="p-3 border">UMA</td>
            <td className="p-3 border">Desktop, Gaming</td>
          </tr>
          <tr>
            <td className="p-3 border">AMD EPYC 9654</td>
            <td className="p-3 border">96</td>
            <td className="p-3 border">NUMA (8 dies)</td>
            <td className="p-3 border">Server, Cloud</td>
          </tr>
          <tr>
            <td className="p-3 border">Apple M3 Ultra</td>
            <td className="p-3 border">24</td>
            <td className="p-3 border">Unified Memory</td>
            <td className="p-3 border">Workstation</td>
          </tr>
          <tr>
            <td className="p-3 border">AWS Graviton3</td>
            <td className="p-3 border">64</td>
            <td className="p-3 border">NUMA</td>
            <td className="p-3 border">Cloud instances</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Multiprocessor Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Increased Throughput:</strong> Multiple processors handle more work per unit
        time.
      </li>
      <li>
        <strong>Improved Response Time:</strong> Parallel execution reduces latency for
        multi-threaded applications.
      </li>
      <li>
        <strong>Fault Tolerance:</strong> System continues operating if one processor fails.
      </li>
      <li>
        <strong>Resource Sharing:</strong> Processors share memory and I/O devices efficiently.
      </li>
      <li>
        <strong>Cost Effective:</strong> Multiple commodity processors cheaper than single
        high-end processor.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Challenges in Multiprocessor Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Cache Coherence Overhead:</strong> Maintaining consistency across caches
        consumes bandwidth and adds latency.
      </li>
      <li>
        <strong>Synchronization Complexity:</strong> Locks, barriers, and atomic operations
        can become bottlenecks.
      </li>
      <li>
        <strong>Memory Contention:</strong> Multiple processors competing for memory bandwidth.
      </li>
      <li>
        <strong>NUMA Effects:</strong> Remote memory access significantly slower than local.
      </li>
      <li>
        <strong>Software Scalability:</strong> Not all applications scale well with more
        processors.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Multiprocessor systems have multiple CPUs sharing memory and I/O resources</li>
        <li>UMA/SMP provides uniform memory access; NUMA has local/remote memory latency differences</li>
        <li>Cache coherence protocols (MESI) ensure consistent view of shared memory</li>
        <li>Atomic operations and memory barriers enable synchronization</li>
        <li>SMP operating systems run on all processors with shared scheduling</li>
        <li>Modern systems range from 4-core desktops to 100+ core servers</li>
        <li>Performance depends on cache affinity, NUMA awareness, and synchronization efficiency</li>
      </ul>
    </div>
  </div>
);

export default Multiprocessors;
