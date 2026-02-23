import React from 'react';

const ParallelIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Parallel Processing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Parallel processing is a computing technique where multiple processors or processing elements
      execute instructions simultaneously to solve a computational problem. Instead of processing
      tasks sequentially, parallel processing divides a large problem into smaller sub-problems
      that can be solved concurrently, significantly reducing the overall computation time.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      Parallel processing refers to the simultaneous execution of multiple tasks or processes
      using multiple processors or cores. It is based on the principle that large problems can
      often be divided into smaller ones, which can then be solved at the same time. The goal
      is to increase computational speed and throughput by exploiting concurrency in both
      hardware and software.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Sequential vs Parallel Processing:

Sequential Processing (Single Processor):
+----------+    +----------+    +----------+    +----------+
|  Task 1  | -> |  Task 2  | -> |  Task 3  | -> |  Task 4  |
+----------+    +----------+    +----------+    +----------+
   Time 1         Time 2         Time 3         Time 4
                                           Total Time: 4 units

Parallel Processing (Multiple Processors):
+----------+
|  Task 1  |  Processor 1
+----------+
+----------+
|  Task 2  |  Processor 2
+----------+
+----------+
|  Task 3  |  Processor 3
+----------+
+----------+
|  Task 4  |  Processor 4
+----------+
   Time 1                      Total Time: 1 unit (ideally)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Parallel Processing?</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Speed Improvement:</strong> Reduces execution time by performing multiple
        operations simultaneously instead of sequentially.
      </li>
      <li>
        <strong>Physical Limitations:</strong> Single processor speed has physical limits
        (heat dissipation, power consumption, transistor size) - parallel processing overcomes these.
      </li>
      <li>
        <strong>Large-Scale Computing:</strong> Essential for scientific simulations, weather
        forecasting, genomics, AI/ML training, and big data analytics.
      </li>
      <li>
        <strong>Cost-Effectiveness:</strong> Using multiple commodity processors can be more
        economical than a single supercomputer.
      </li>
      <li>
        <strong>Reliability:</strong> If one processor fails, others can continue the computation.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Levels of Parallelism</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Granularity</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bit-Level</td>
            <td className="p-3 border">Processing multiple bits simultaneously</td>
            <td className="p-3 border">Very Fine</td>
            <td className="p-3 border">32-bit vs 64-bit processors</td>
          </tr>
          <tr>
            <td className="p-3 border">Instruction-Level (ILP)</td>
            <td className="p-3 border">Executing multiple instructions at once</td>
            <td className="p-3 border">Fine</td>
            <td className="p-3 border">Pipelining, Superscalar</td>
          </tr>
          <tr>
            <td className="p-3 border">Data-Level (DLP)</td>
            <td className="p-3 border">Same operation on multiple data elements</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">SIMD, Vector processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Thread-Level (TLP)</td>
            <td className="p-3 border">Multiple threads executing in parallel</td>
            <td className="p-3 border">Medium-Coarse</td>
            <td className="p-3 border">Multi-threading, Multi-core</td>
          </tr>
          <tr>
            <td className="p-3 border">Task-Level</td>
            <td className="p-3 border">Independent tasks on different processors</td>
            <td className="p-3 border">Coarse</td>
            <td className="p-3 border">Distributed computing, Clusters</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallelism Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Parallelism Hierarchy (from fine to coarse grain):

+------------------------------------------------------------------+
|                    TASK-LEVEL PARALLELISM                        |
|        (Multiple independent programs/jobs)                      |
|  +------------------------------------------------------------+  |
|  |                  THREAD-LEVEL PARALLELISM                  |  |
|  |         (Multiple threads within a process)                |  |
|  |  +------------------------------------------------------+  |  |
|  |  |               DATA-LEVEL PARALLELISM                 |  |  |
|  |  |      (Same operation on multiple data items)         |  |  |
|  |  |  +------------------------------------------------+  |  |  |
|  |  |  |         INSTRUCTION-LEVEL PARALLELISM          |  |  |  |
|  |  |  |    (Multiple instructions in one cycle)        |  |  |  |
|  |  |  |  +------------------------------------------+  |  |  |  |
|  |  |  |  |        BIT-LEVEL PARALLELISM             |  |  |  |  |
|  |  |  |  |   (Processing multiple bits at once)     |  |  |  |  |
|  |  |  |  +------------------------------------------+  |  |  |  |
|  |  |  +------------------------------------------------+  |  |  |
|  |  +------------------------------------------------------+  |  |
|  +------------------------------------------------------------+  |
+------------------------------------------------------------------+

Finer granularity = More parallelism, but more overhead
Coarser granularity = Less overhead, but harder to exploit`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Parallel Computer Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Memory Model</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Shared Memory Systems</td>
            <td className="p-3 border">Multiple processors share a common memory space</td>
            <td className="p-3 border">UMA (Uniform), NUMA (Non-Uniform)</td>
          </tr>
          <tr>
            <td className="p-3 border">Distributed Memory Systems</td>
            <td className="p-3 border">Each processor has its own local memory</td>
            <td className="p-3 border">Message passing</td>
          </tr>
          <tr>
            <td className="p-3 border">Hybrid Systems</td>
            <td className="p-3 border">Combination of shared and distributed memory</td>
            <td className="p-3 border">Cluster of SMPs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Memory Organization in Parallel Systems:

Shared Memory (SMP/UMA):                 Distributed Memory:
+--------+  +--------+  +--------+       +--------+  +--------+  +--------+
|  CPU 1 |  |  CPU 2 |  |  CPU 3 |       |  CPU 1 |  |  CPU 2 |  |  CPU 3 |
+--------+  +--------+  +--------+       +---+----+  +---+----+  +---+----+
    |           |           |                |           |           |
    +-----+-----+-----+-----+            +---+----+  +---+----+  +---+----+
          |                              | Mem 1  |  | Mem 2  |  | Mem 3  |
    +-----+-----+                        +---+----+  +---+----+  +---+----+
    | Shared    |                            |           |           |
    | Memory    |                            +-----------+-----------+
    +-----------+                                  Interconnection
                                                     Network`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Amdahl's Law</h2>
    <p className="leading-relaxed">
      Amdahl's Law describes the theoretical maximum speedup that can be achieved by parallelizing
      a program. It states that the speedup is limited by the portion of the program that cannot
      be parallelized.
    </p>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-mono text-center text-lg text-gray-900">
        Speedup = 1 / (S + P/N)
      </p>
      <p className="text-center mt-2">
        Where: S = Serial fraction, P = Parallel fraction (S + P = 1), N = Number of processors
      </p>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Amdahl's Law Example:

If 90% of a program can be parallelized (P = 0.9, S = 0.1):

N=2:   Speedup = 1/(0.1 + 0.9/2)  = 1/0.55  = 1.82x
N=4:   Speedup = 1/(0.1 + 0.9/4)  = 1/0.325 = 3.08x
N=8:   Speedup = 1/(0.1 + 0.9/8)  = 1/0.2125 = 4.71x
N=16:  Speedup = 1/(0.1 + 0.9/16) = 1/0.156 = 6.40x
N=inf: Speedup = 1/(0.1 + 0)      = 1/0.1   = 10x (maximum)

Even with infinite processors, speedup is limited to 10x
because 10% of the code must run sequentially!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Gustafson's Law</h2>
    <p className="leading-relaxed">
      Gustafson's Law provides an alternative perspective. It suggests that as the problem size
      grows, the parallel portion of the computation also grows, potentially achieving better
      speedup than Amdahl's Law suggests.
    </p>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-mono text-center text-lg text-gray-900">
        Speedup = S + P * N = S + (1 - S) * N
      </p>
      <p className="text-center mt-2">
        Where: S = Serial time fraction, P = Parallel time fraction, N = Number of processors
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel Processing Challenges</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Communication Overhead:</strong> Data exchange between processors takes time
        and can reduce overall efficiency.
      </li>
      <li>
        <strong>Load Balancing:</strong> Distributing work evenly among processors to avoid
        idle time.
      </li>
      <li>
        <strong>Synchronization:</strong> Coordinating processors when they need to access
        shared resources or exchange data.
      </li>
      <li>
        <strong>Data Dependencies:</strong> Some tasks must wait for results from other tasks,
        limiting parallelism.
      </li>
      <li>
        <strong>Race Conditions:</strong> Multiple processors accessing shared data can cause
        unpredictable results.
      </li>
      <li>
        <strong>Deadlocks:</strong> Processors waiting indefinitely for resources held by others.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications of Parallel Processing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Domain</th>
            <th className="p-3 border">Applications</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Scientific Computing</td>
            <td className="p-3 border">Weather prediction, Climate modeling, Molecular dynamics</td>
          </tr>
          <tr>
            <td className="p-3 border">Artificial Intelligence</td>
            <td className="p-3 border">Deep learning training, Neural network inference</td>
          </tr>
          <tr>
            <td className="p-3 border">Graphics & Multimedia</td>
            <td className="p-3 border">Real-time rendering, Video encoding, Image processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Finance</td>
            <td className="p-3 border">Risk analysis, High-frequency trading, Portfolio optimization</td>
          </tr>
          <tr>
            <td className="p-3 border">Bioinformatics</td>
            <td className="p-3 border">Genome sequencing, Protein folding, Drug discovery</td>
          </tr>
          <tr>
            <td className="p-3 border">Big Data</td>
            <td className="p-3 border">Data mining, Real-time analytics, Search engines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Parallel processing uses multiple processors to execute tasks simultaneously</li>
        <li>Parallelism exists at multiple levels: bit, instruction, data, thread, and task</li>
        <li>Amdahl's Law shows that speedup is limited by the sequential portion of code</li>
        <li>Shared memory and distributed memory are two main parallel architectures</li>
        <li>Challenges include communication overhead, synchronization, and load balancing</li>
        <li>Modern applications in AI, scientific computing, and big data heavily rely on parallelism</li>
      </ul>
    </div>
  </div>
);

export default ParallelIntro;
