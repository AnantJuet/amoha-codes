import React from 'react';

const CriticalSection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Critical Section Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Critical Section Problem is a fundamental synchronization problem in operating systems.
      It involves designing a protocol that processes can use to cooperate and access shared
      resources without causing race conditions or data inconsistency.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Critical Section?</h2>
    <p className="leading-relaxed">
      A critical section is a segment of code in which a process accesses shared resources
      (such as shared memory, files, or devices) that must not be accessed by other processes
      simultaneously. When a process is executing in its critical section, no other process
      should be allowed to execute in its critical section.
    </p>

    {/* Process Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure of a Process</h2>
    <p className="leading-relaxed">
      Each process can be divided into four sections:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`do {
    ┌──────────────────────────────────┐
    │     Entry Section                │  ← Request permission to enter
    │     (Request to enter CS)        │
    └──────────────────────────────────┘
                    │
                    ▼
    ┌──────────────────────────────────┐
    │     Critical Section             │  ← Access shared resources
    │     (Access shared data)         │
    └──────────────────────────────────┘
                    │
                    ▼
    ┌──────────────────────────────────┐
    │     Exit Section                 │  ← Signal completion
    │     (Release access)             │
    └──────────────────────────────────┘
                    │
                    ▼
    ┌──────────────────────────────────┐
    │     Remainder Section            │  ← Non-critical code
    │     (Other operations)           │
    └──────────────────────────────────┘
} while (true);`}
      </pre>
    </div>

    {/* Code Example */}
    <h2 className="text-3xl font-bold mt-8">Code Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`do {
    // Entry Section
    acquire_lock();              // Request access

    // Critical Section
    // Access shared resources
    // Only one process at a time
    counter++;
    shared_data = new_value;

    // Exit Section
    release_lock();              // Release access

    // Remainder Section
    // Other non-critical operations
    process_local_data();

} while (true);`}
      </pre>
    </div>

    {/* Requirements */}
    <h2 className="text-3xl font-bold mt-8">Requirements for Solution</h2>
    <p className="leading-relaxed">
      A solution to the critical section problem must satisfy three essential requirements:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">1. Mutual Exclusion</td>
            <td className="p-3 border">
              If process Pi is executing in its critical section, no other process can
              be executing in their critical sections.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">2. Progress</td>
            <td className="p-3 border">
              If no process is in its critical section and some processes wish to enter,
              only those processes not in their remainder section can participate in
              deciding who enters next, and this selection cannot be postponed indefinitely.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">3. Bounded Waiting</td>
            <td className="p-3 border">
              There must be a limit on the number of times other processes are allowed
              to enter their critical sections after a process has made a request and
              before that request is granted.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Visual Explanation */}
    <h2 className="text-3xl font-bold mt-8">Requirements Illustrated</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MUTUAL EXCLUSION:
────────────────────────────────────────────────
                    ┌─────────────┐
                    │  Critical   │
     P1 ─────────►  │   Section   │  ◄───────── P2 (BLOCKED)
                    │  (P1 only)  │
                    └─────────────┘

PROGRESS:
────────────────────────────────────────────────
     P1 wants to enter ──┐      ┌── P2 wants to enter
                         │      │
                         ▼      ▼
              ┌─────────────────────────┐
              │  Decision must be made  │
              │  (Cannot delay forever) │
              └─────────────────────────┘
                         │
                         ▼
              One process MUST be allowed to enter

BOUNDED WAITING:
────────────────────────────────────────────────
     P1 requests ─────┐
                      │
     Time ────────────│──────────────────────►
                      │
     P2 enters  P2 enters  P2 enters ... (MAX N times)
     ────────────────────────────────────────
                      │
                      └───► P1 MUST eventually enter`}
      </pre>
    </div>

    {/* Violation Examples */}
    <h2 className="text-3xl font-bold mt-8">Violation Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">Mutual Exclusion Violation:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Both processes in critical section simultaneously
P1: counter = 5           // Both read counter = 5
P2: counter = 5           // Race condition!
P1: counter = 6           // P1 writes
P2: counter = 6           // P2 overwrites with same logic
// Lost update: should be 7`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Progress Violation (Deadlock):</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Both processes waiting for each other
P1: waiting for P2 to release flag
P2: waiting for P1 to release flag
// Neither can proceed - DEADLOCK`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Bounded Waiting Violation (Starvation):</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// P1 keeps getting priority
P1: enters CS
P2: waiting...
P1: exits, immediately re-enters
P2: still waiting...
P1: exits, immediately re-enters
P2: STARVING (never gets a chance)`}
      </pre>
    </div>

    {/* Software Solutions */}
    <h2 className="text-3xl font-bold mt-8">Approaches to Solutions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Solutions</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Software Solutions</td>
            <td className="p-3 border">Peterson's Solution, Dekker's Algorithm, Bakery Algorithm</td>
            <td className="p-3 border">No special hardware needed, but complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Solutions</td>
            <td className="p-3 border">Test-and-Set, Compare-and-Swap, Disable Interrupts</td>
            <td className="p-3 border">Fast but require hardware support</td>
          </tr>
          <tr>
            <td className="p-3 border">OS/Language Support</td>
            <td className="p-3 border">Mutex, Semaphores, Monitors</td>
            <td className="p-3 border">High-level, easier to use</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Simple but Incorrect Solutions */}
    <h2 className="text-3xl font-bold mt-8">Simple but Incorrect Attempts</h2>

    <h3 className="text-2xl font-semibold mt-4">Attempt 1: Using a Single Flag</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
bool lock = false;

// Process Pi
while (lock == true);    // Busy wait
lock = true;             // Enter CS
// Critical Section
lock = false;            // Exit CS

// Problem: Race condition between check and set!
// Both can read lock=false and both enter CS`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Attempt 2: Using Turn Variable</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
int turn = 0;  // 0 for P0, 1 for P1

// Process P0                   // Process P1
while (turn != 0);              while (turn != 1);
// Critical Section             // Critical Section
turn = 1;                       turn = 0;

// Problem: Strict alternation
// If P0 doesn't want to enter, P1 cannot enter twice in a row
// Violates PROGRESS`}
      </pre>
    </div>

    {/* Assumptions */}
    <h2 className="text-3xl font-bold mt-8">Assumptions Made</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Each process executes at a non-zero speed</li>
      <li>No assumption about relative speed of processes</li>
      <li>Memory load and store are atomic operations</li>
      <li>Processes may share common variables for synchronization</li>
      <li>A process in its critical section will eventually exit</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>The critical section is where shared resources are accessed</li>
      <li>Three requirements must be satisfied: mutual exclusion, progress, bounded waiting</li>
      <li>Simple flag-based solutions often fail due to race conditions</li>
      <li>Proper solutions require careful design or hardware support</li>
      <li>The goal is to allow concurrent execution while preventing conflicts</li>
    </ul>
  </div>
);

export default CriticalSection;
