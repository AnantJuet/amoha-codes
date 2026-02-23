import React from 'react';

const SynchronizationIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Process Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Process Synchronization is a mechanism to coordinate the execution of processes that share resources
      or data. In a multiprogramming environment, multiple processes execute concurrently and may need to
      access shared data, leading to potential inconsistencies. Synchronization ensures orderly execution
      and data integrity.
    </p>

    {/* Why Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Why is Process Synchronization Needed?</h2>
    <p className="leading-relaxed">
      When multiple processes access shared resources concurrently, several problems can arise:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Data Inconsistency:</strong> Without proper coordination, concurrent access to shared
        data can result in inconsistent or incorrect values.
      </li>
      <li>
        <strong>Race Conditions:</strong> When the outcome depends on the relative timing of events,
        unpredictable results may occur.
      </li>
      <li>
        <strong>Lost Updates:</strong> One process may overwrite changes made by another process.
      </li>
      <li>
        <strong>Dirty Reads:</strong> A process may read data that is being modified by another process.
      </li>
    </ul>

    {/* Cooperating Processes */}
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
            <td className="p-3 border">Does not share data with others</td>
            <td className="p-3 border">Shares data with other processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Effect on Others</td>
            <td className="p-3 border">Cannot affect other processes</td>
            <td className="p-3 border">Can affect or be affected by others</td>
          </tr>
          <tr>
            <td className="p-3 border">Execution</td>
            <td className="p-3 border">Deterministic</td>
            <td className="p-3 border">May be non-deterministic</td>
          </tr>
          <tr>
            <td className="p-3 border">Reproducibility</td>
            <td className="p-3 border">Always reproducible</td>
            <td className="p-3 border">May not be reproducible</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required for correct execution</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Reasons for Cooperation */}
    <h2 className="text-3xl font-bold mt-8">Reasons for Process Cooperation</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Information Sharing:</strong> Multiple users may need access to the same data
        (e.g., shared files, databases).
      </li>
      <li>
        <strong>Computation Speedup:</strong> A task can be divided into subtasks that run
        concurrently on multiple processors.
      </li>
      <li>
        <strong>Modularity:</strong> System can be divided into separate cooperating processes
        for better organization.
      </li>
      <li>
        <strong>Convenience:</strong> Users can work on multiple tasks simultaneously
        (e.g., editing, compiling, printing).
      </li>
    </ul>

    {/* Concurrent Execution Example */}
    <h2 className="text-3xl font-bold mt-8">Example: Concurrent Access Problem</h2>
    <p className="leading-relaxed">
      Consider two processes P1 and P2 accessing a shared variable counter:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
int counter = 5;

// Process P1 (Producer)          // Process P2 (Consumer)
counter = counter + 1;            counter = counter - 1;

// Expected final value: counter = 5
// But actual value could be 4, 5, or 6 depending on execution order!`}
      </pre>
    </div>

    {/* Machine Level Operations */}
    <h2 className="text-3xl font-bold mt-8">At Machine Level</h2>
    <p className="leading-relaxed">
      The statement <code>counter = counter + 1</code> is not atomic. It translates to multiple
      machine instructions:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Process P1 (counter++)           Process P2 (counter--)
─────────────────────            ─────────────────────
R1 = counter    // Load          R2 = counter    // Load
R1 = R1 + 1     // Increment     R2 = R2 - 1     // Decrement
counter = R1    // Store         counter = R2    // Store`}
      </pre>
    </div>

    {/* Interleaving Scenarios */}
    <h2 className="text-3xl font-bold mt-8">Possible Interleaving Scenarios</h2>
    <p className="leading-relaxed">
      If counter = 5 initially, different interleavings produce different results:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Scenario 1: Result = 6 (P1 completes first, then P2 doesn't see update)
──────────────────────────────────────────────────────────────────────
Time    P1                      P2                      counter
T1      R1 = counter (5)        -                       5
T2      R1 = R1 + 1 (6)         -                       5
T3      counter = R1            -                       6
T4      -                       R2 = counter (6)        6
T5      -                       R2 = R2 - 1 (5)         6
T6      -                       counter = R2            5

Scenario 2: Result = 4 (P2's value persists)
──────────────────────────────────────────────────────────────────────
Time    P1                      P2                      counter
T1      R1 = counter (5)        -                       5
T2      -                       R2 = counter (5)        5
T3      -                       R2 = R2 - 1 (4)         5
T4      -                       counter = R2            4
T5      R1 = R1 + 1 (6)         -                       4
T6      counter = R1            -                       6

Scenario 3: Result = 6 (P1's value persists - Lost Update for P2)
──────────────────────────────────────────────────────────────────────
Time    P1                      P2                      counter
T1      R1 = counter (5)        -                       5
T2      -                       R2 = counter (5)        5
T3      R1 = R1 + 1 (6)         -                       5
T4      -                       R2 = R2 - 1 (4)         5
T5      -                       counter = R2            4
T6      counter = R1            -                       6`}
      </pre>
    </div>

    {/* Goals of Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Goals of Process Synchronization</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Mutual Exclusion:</strong> Ensure that only one process accesses the critical
        section at a time.
      </li>
      <li>
        <strong>Progress:</strong> If no process is in the critical section, a waiting process
        should be allowed to enter.
      </li>
      <li>
        <strong>Bounded Waiting:</strong> There should be a limit on how long a process waits
        to enter its critical section.
      </li>
      <li>
        <strong>No Deadlock:</strong> Processes should not be blocked forever waiting for each other.
      </li>
    </ul>

    {/* Synchronization Mechanisms */}
    <h2 className="text-3xl font-bold mt-8">Synchronization Mechanisms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Locks / Mutex</td>
            <td className="p-3 border">Binary locks for mutual exclusion</td>
          </tr>
          <tr>
            <td className="p-3 border">Semaphores</td>
            <td className="p-3 border">Integer-based signaling mechanism</td>
          </tr>
          <tr>
            <td className="p-3 border">Monitors</td>
            <td className="p-3 border">High-level synchronization construct</td>
          </tr>
          <tr>
            <td className="p-3 border">Condition Variables</td>
            <td className="p-3 border">Wait and signal mechanisms</td>
          </tr>
          <tr>
            <td className="p-3 border">Message Passing</td>
            <td className="p-3 border">Communication through send/receive</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Process synchronization is essential for cooperating processes</li>
      <li>Concurrent access to shared data can lead to data inconsistency</li>
      <li>A single high-level statement may translate to multiple machine instructions</li>
      <li>The order of execution in concurrent systems is non-deterministic</li>
      <li>Proper synchronization ensures mutual exclusion, progress, and bounded waiting</li>
    </ul>
  </div>
);

export default SynchronizationIntro;
