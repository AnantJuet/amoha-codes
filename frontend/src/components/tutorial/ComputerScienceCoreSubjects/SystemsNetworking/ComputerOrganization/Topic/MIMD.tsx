import React from 'react';

const MIMD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      MIMD - Multiple Instruction Multiple Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      MIMD (Multiple Instruction, Multiple Data) is the most flexible and widely used parallel
      computing architecture. In MIMD systems, multiple autonomous processors simultaneously
      execute different instructions on different data. Each processor operates independently
      with its own control unit, making MIMD capable of handling diverse workloads including
      both task parallelism and data parallelism.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      In MIMD architecture, each processor has its own instruction stream and data stream.
      Processors can execute different programs or different parts of the same program
      concurrently. Communication between processors occurs through shared memory or
      message passing, enabling coordination on complex parallel tasks.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MIMD Architecture Block Diagram:

+-------------+   +-------------+   +-------------+   +-------------+
| Instruction |   | Instruction |   | Instruction |   | Instruction |
|  Stream 1   |   |  Stream 2   |   |  Stream 3   |   |  Stream 4   |
| I1a,I1b,I1c |   | I2a,I2b,I2c |   | I3a,I3b,I3c |   | I4a,I4b,I4c |
+------+------+   +------+------+   +------+------+   +------+------+
       |                 |                 |                 |
       v                 v                 v                 v
  +--------+        +--------+        +--------+        +--------+
  | CU 1   |        | CU 2   |        | CU 3   |        | CU 4   |
  +--------+        +--------+        +--------+        +--------+
  | PU 1   |        | PU 2   |        | PU 3   |        | PU 4   |
  +----+---+        +----+---+        +----+---+        +----+---+
       |                 |                 |                 |
       v                 v                 v                 v
  +--------+        +--------+        +--------+        +--------+
  | Data 1 |        | Data 2 |        | Data 3 |        | Data 4 |
  |D1a,D1b |        |D2a,D2b |        |D3a,D3b |        |D4a,D4b |
  +--------+        +--------+        +--------+        +--------+

Each processor:
- Has its own Control Unit (CU)
- Executes its own instruction stream
- Operates on its own data stream
- Works asynchronously (not lockstep)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of MIMD Architectures</h2>
    <p className="leading-relaxed">
      MIMD systems are classified based on how processors communicate and share data:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Shared Memory MIMD</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Shared Memory Architecture:

+--------+  +--------+  +--------+  +--------+
| CPU 0  |  | CPU 1  |  | CPU 2  |  | CPU 3  |
| Cache  |  | Cache  |  | Cache  |  | Cache  |
+---+----+  +---+----+  +---+----+  +---+----+
    |           |           |           |
    +-----+-----+-----+-----+-----+-----+
          |                       |
    +-----+-----+           +-----+-----+
    | Memory    |           |  Memory   |
    | Controller|           | Controller|
    +-----+-----+           +-----+-----+
          |                       |
    +-----+-----+           +-----+-----+
    |  Memory   |           |  Memory   |
    |  Bank 0   |           |  Bank 1   |
    +-----------+           +-----------+

Types:
a) UMA (Uniform Memory Access)
   - All processors have equal access time to all memory
   - Example: Traditional SMP systems

b) NUMA (Non-Uniform Memory Access)
   - Access time depends on memory location relative to processor
   - Local memory is faster; remote memory is slower
   - Example: Modern multi-socket servers`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Distributed Memory MIMD</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Distributed Memory Architecture:

+---------------+    +---------------+    +---------------+
|   Node 0      |    |   Node 1      |    |   Node 2      |
| +-----------+ |    | +-----------+ |    | +-----------+ |
| |   CPU     | |    | |   CPU     | |    | |   CPU     | |
| +-----------+ |    | +-----------+ |    | +-----------+ |
| +-----------+ |    | +-----------+ |    | +-----------+ |
| |  Memory   | |    |  |  Memory   | |    | |  Memory   | |
| | (Local)   | |    | | (Local)   | |    | | (Local)   | |
| +-----------+ |    | +-----------+ |    | +-----------+ |
+-------+-------+    +-------+-------+    +-------+-------+
        |                    |                    |
        +----------+---------+----------+---------+
                   |                    |
           +-------+--------+   +-------+--------+
           | Interconnection|   |    Network     |
           |    Network     |   |   Interface    |
           +----------------+   +----------------+

- Each processor has its own private memory
- Processors communicate via message passing (MPI)
- Examples: Computer clusters, Supercomputers (Top500)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Architecture Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Shared Memory</th>
            <th className="p-3 border">Distributed Memory</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Model</td>
            <td className="p-3 border">Single address space</td>
            <td className="p-3 border">Multiple address spaces</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">Read/write shared variables</td>
            <td className="p-3 border">Message passing (send/receive)</td>
          </tr>
          <tr>
            <td className="p-3 border">Programming</td>
            <td className="p-3 border">Easier (OpenMP, threads)</td>
            <td className="p-3 border">More complex (MPI)</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">Limited (memory contention)</td>
            <td className="p-3 border">High (thousands of nodes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cache Coherence</td>
            <td className="p-3 border">Required (hardware overhead)</td>
            <td className="p-3 border">Not needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Higher per node</td>
            <td className="p-3 border">Lower (commodity hardware)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MIMD Programming Models</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Programming Model Examples:

1. Shared Memory - OpenMP (C/C++)
-------------------------------------
#include <omp.h>

int main() {
    int sum = 0;
    int data[1000];

    #pragma omp parallel for reduction(+:sum)
    for (int i = 0; i < 1000; i++) {
        sum += data[i];  // Each thread processes part of array
    }

    return sum;
}

2. Distributed Memory - MPI (C)
-------------------------------------
#include <mpi.h>

int main(int argc, char** argv) {
    int rank, size;
    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int local_data[100];  // Each process has its own data
    int local_sum = 0;

    for (int i = 0; i < 100; i++) {
        local_sum += local_data[i];
    }

    int global_sum;
    MPI_Reduce(&local_sum, &global_sum, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

    MPI_Finalize();
    return 0;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Task vs Data Parallelism in MIMD</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`MIMD can exploit both types of parallelism:

1. Task Parallelism (Different tasks on different processors)
-------------------------------------------------------------
Task Distribution:
+--------+    +--------+    +--------+    +--------+
| Task A |    | Task B |    | Task C |    | Task D |
| (Read  |    |(Process|    |(Analyze|    | (Write |
|  Data) |    |  Data) |    | Results|    | Output)|
+--------+    +--------+    +--------+    +--------+
   CPU 0        CPU 1         CPU 2         CPU 3

2. Data Parallelism (Same task, different data)
-------------------------------------------------------------
Data Distribution:
Array: [0....249][250..499][500..749][750..999]
         |          |          |          |
         v          v          v          v
      +------+   +------+   +------+   +------+
      |Sort  |   |Sort  |   |Sort  |   |Sort  |
      |Part 1|   |Part 2|   |Part 3|   |Part 4|
      +------+   +------+   +------+   +------+
        CPU 0     CPU 1      CPU 2      CPU 3

3. Hybrid (Pipeline + Data Parallel)
-------------------------------------------------------------
    Stage 1         Stage 2         Stage 3
  (Data Par)      (Data Par)      (Data Par)
     |                |                |
     v                v                v
[Task A x4] -----> [Task B x4] -----> [Task C x4]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization in MIMD</h2>
    <p className="leading-relaxed">
      Since MIMD processors operate asynchronously, synchronization mechanisms are essential:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutex/Lock</td>
            <td className="p-3 border">Mutual exclusion for critical sections</td>
            <td className="p-3 border">Protecting shared data</td>
          </tr>
          <tr>
            <td className="p-3 border">Semaphore</td>
            <td className="p-3 border">Counter-based synchronization</td>
            <td className="p-3 border">Resource management</td>
          </tr>
          <tr>
            <td className="p-3 border">Barrier</td>
            <td className="p-3 border">All threads wait until all arrive</td>
            <td className="p-3 border">Phase synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border">Condition Variable</td>
            <td className="p-3 border">Wait for specific condition</td>
            <td className="p-3 border">Producer-consumer</td>
          </tr>
          <tr>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Send/Receive operations</td>
            <td className="p-3 border">Distributed coordination</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Synchronization Example - Barrier:

Time   CPU 0    CPU 1    CPU 2    CPU 3
  |      |        |        |        |
  |    Work     Work     Work     Work
  |      |        |        |        |
  |    Done       |        |        |
  |    WAIT       |        |        |
  |      |      Done       |        |
  |    WAIT     WAIT       |        |
  |      |        |      Done       |
  |    WAIT     WAIT     WAIT       |
  |      |        |        |      Done
  v    ------ BARRIER RELEASED ------
       Continue  Continue Continue Continue

All processors must reach barrier before any can proceed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples of MIMD Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Scale</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Multi-core CPU</td>
            <td className="p-3 border">Intel Core i9, AMD Ryzen 9, Apple M3</td>
            <td className="p-3 border">4-24 cores</td>
          </tr>
          <tr>
            <td className="p-3 border">Multi-socket Server</td>
            <td className="p-3 border">Intel Xeon, AMD EPYC systems</td>
            <td className="p-3 border">64-256 cores</td>
          </tr>
          <tr>
            <td className="p-3 border">Compute Cluster</td>
            <td className="p-3 border">Beowulf clusters, HPC clusters</td>
            <td className="p-3 border">100s-1000s nodes</td>
          </tr>
          <tr>
            <td className="p-3 border">Supercomputer</td>
            <td className="p-3 border">Frontier, Fugaku, Aurora</td>
            <td className="p-3 border">Millions of cores</td>
          </tr>
          <tr>
            <td className="p-3 border">Cloud Computing</td>
            <td className="p-3 border">AWS, Azure, Google Cloud</td>
            <td className="p-3 border">Virtually unlimited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">MIMD Challenges</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Race Conditions:</strong> Multiple processors accessing shared data can
        cause unpredictable results without proper synchronization.
      </li>
      <li>
        <strong>Deadlock:</strong> Processors waiting for resources held by each other,
        causing all to block indefinitely.
      </li>
      <li>
        <strong>Load Balancing:</strong> Uneven work distribution leads to some processors
        idle while others are busy.
      </li>
      <li>
        <strong>Cache Coherence:</strong> Ensuring all caches have consistent view of shared
        memory requires complex protocols.
      </li>
      <li>
        <strong>Communication Overhead:</strong> Data exchange between processors adds latency
        and can become bottleneck.
      </li>
      <li>
        <strong>Debugging Difficulty:</strong> Non-deterministic behavior makes bugs hard
        to reproduce and fix.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of MIMD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Maximum Flexibility:</strong> Each processor can execute different programs
        or algorithms.
      </li>
      <li>
        <strong>High Scalability:</strong> Can scale from few cores to millions of processors.
      </li>
      <li>
        <strong>Fault Tolerance:</strong> Failure of one processor does not necessarily halt
        the entire system.
      </li>
      <li>
        <strong>Resource Sharing:</strong> Processors can share memory, I/O devices, and other
        resources.
      </li>
      <li>
        <strong>Both Task and Data Parallelism:</strong> Can handle diverse workloads
        effectively.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of MIMD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Programming Complexity:</strong> Writing correct parallel programs is
        challenging.
      </li>
      <li>
        <strong>Synchronization Overhead:</strong> Coordinating processors adds time and
        complexity.
      </li>
      <li>
        <strong>Hardware Cost:</strong> Multiple independent processors with control units
        are expensive.
      </li>
      <li>
        <strong>Memory Contention:</strong> In shared memory systems, memory bus can become
        bottleneck.
      </li>
      <li>
        <strong>Non-determinism:</strong> Execution order can vary, making testing difficult.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>MIMD has multiple instruction streams and multiple data streams</li>
        <li>Most flexible parallel architecture; dominates modern computing</li>
        <li>Two main types: Shared Memory (UMA/NUMA) and Distributed Memory</li>
        <li>Supports both task parallelism and data parallelism</li>
        <li>Examples include multi-core CPUs, clusters, and supercomputers</li>
        <li>Programming models: OpenMP (shared), MPI (distributed)</li>
        <li>Challenges include synchronization, deadlocks, and debugging</li>
        <li>Powers everything from laptops to world's fastest supercomputers</li>
      </ul>
    </div>
  </div>
);

export default MIMD;
