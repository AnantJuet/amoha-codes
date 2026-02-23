import React from 'react';

const DeadlockIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Deadlock
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A deadlock is a situation in a multiprogramming environment where a set of processes
      are blocked because each process is holding a resource and waiting for another resource
      held by some other process. Deadlocks are one of the most challenging problems in
      operating systems and concurrent programming.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is Deadlock?</h2>
    <p className="leading-relaxed">
      A deadlock occurs when two or more processes are unable to proceed because each is
      waiting for the other to release a resource. In this state:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>No process can make progress</li>
      <li>No process can release any resources</li>
      <li>The situation persists indefinitely without external intervention</li>
    </ul>

    {/* Simple Example */}
    <h2 className="text-3xl font-bold mt-8">Simple Deadlock Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Two-Process Deadlock:
─────────────────────────────────────────────────────────────

Process P1:                    Process P2:
  lock(A);                       lock(B);
  lock(B);  ← BLOCKED            lock(A);  ← BLOCKED
  ...                            ...
  unlock(B);                     unlock(A);
  unlock(A);                     unlock(B);

                ┌───────────────────────────────────┐
                │                                   │
    ┌───────────┴───────────┐       ┌───────────────┴───────────┐
    │      Process P1       │       │       Process P2          │
    │                       │       │                           │
    │  Holds: Resource A    │       │  Holds: Resource B        │
    │  Wants: Resource B    │       │  Wants: Resource A        │
    └───────────────────────┘       └───────────────────────────┘
                │                               │
                │       ┌───────────┐           │
                └──────►│ DEADLOCK! │◄──────────┘
                        └───────────┘

Neither process can proceed - circular wait!
`}
      </pre>
    </div>

    {/* Real-World Analogy */}
    <h2 className="text-3xl font-bold mt-8">Real-World Analogy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Traffic Deadlock (Four-way Intersection):
─────────────────────────────────────────────────────────────

                    │  Car B  │
                    │    ▼    │
                    │         │
        ────────────┼─────────┼────────────
                    │         │
        Car A  ───► │    X    │ ◄─── Car D
                    │         │
        ────────────┼─────────┼────────────
                    │         │
                    │    ▲    │
                    │  Car C  │

Each car is blocking the path of another:
  - Car A waits for Car B to move
  - Car B waits for Car D to move
  - Car D waits for Car C to move
  - Car C waits for Car A to move

No car can proceed → DEADLOCK!
`}
      </pre>
    </div>

    {/* System Model */}
    <h2 className="text-3xl font-bold mt-8">System Model</h2>
    <p className="leading-relaxed">
      A system consists of a finite number of resources distributed among competing processes:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Resource Types:</strong> R1, R2, ..., Rm (CPU cycles, memory, I/O devices, files, etc.)
      </li>
      <li>
        <strong>Resource Instances:</strong> Each type Ri has Wi instances (e.g., 3 printers, 2 tape drives)
      </li>
      <li>
        <strong>Process Operations:</strong> Request, Use, Release
      </li>
    </ul>

    {/* Resource Usage Protocol */}
    <h2 className="text-3xl font-bold mt-8">Resource Usage Protocol</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Normal Resource Usage:
─────────────────────────────────────────────────────────────
    ┌─────────────┐
    │   Request   │  ← Process requests the resource
    │  (may wait) │     (blocks if not available)
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │     Use     │  ← Process uses the resource
    │             │     (performs operations)
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   Release   │  ← Process releases the resource
    │             │     (makes it available for others)
    └─────────────┘
`}
      </pre>
    </div>

    {/* Resource Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Resources</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Preemptable</td>
            <td className="p-3 border">Can be taken away from process without ill effects</td>
            <td className="p-3 border">CPU, Memory (with swapping)</td>
          </tr>
          <tr>
            <td className="p-3 border">Non-preemptable</td>
            <td className="p-3 border">Cannot be taken away without process failure</td>
            <td className="p-3 border">Printers, Tape drives, DVD writers</td>
          </tr>
          <tr>
            <td className="p-3 border">Reusable</td>
            <td className="p-3 border">Can be used repeatedly by multiple processes</td>
            <td className="p-3 border">CPU, Memory, I/O channels</td>
          </tr>
          <tr>
            <td className="p-3 border">Consumable</td>
            <td className="p-3 border">Created and destroyed (consumed)</td>
            <td className="p-3 border">Messages, Signals, Interrupts</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Deadlock vs Similar Concepts */}
    <h2 className="text-3xl font-bold mt-8">Deadlock vs Related Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Recovery</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Deadlock</td>
            <td className="p-3 border">Circular wait - processes block forever</td>
            <td className="p-3 border">Requires intervention</td>
          </tr>
          <tr>
            <td className="p-3 border">Starvation</td>
            <td className="p-3 border">Process never gets resource due to priority</td>
            <td className="p-3 border">May resolve over time</td>
          </tr>
          <tr>
            <td className="p-3 border">Livelock</td>
            <td className="p-3 border">Processes change state but make no progress</td>
            <td className="p-3 border">May resolve with randomization</td>
          </tr>
          <tr>
            <td className="p-3 border">Blocking</td>
            <td className="p-3 border">Temporary wait for resource</td>
            <td className="p-3 border">Resolves when resource available</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Livelock Example */}
    <h2 className="text-3xl font-bold mt-8">Livelock Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Livelock: Two people in a hallway
─────────────────────────────────────────────────────────────
Time 1:  Person A ──►  ◄── Person B
         "I'll go left"  "I'll go right"

Time 2:  Person A (goes left)    Person B (goes right)
         ◄──                              ──►
         Still blocked!

Time 3:  "I'll go right"  "I'll go left"
         ──►              ◄──
         Still blocked!

They keep moving but never pass each other!
Unlike deadlock, they are ACTIVE but making no PROGRESS.
`}
      </pre>
    </div>

    {/* Consequences of Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Consequences of Deadlock</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Resource Waste:</strong> Resources held by deadlocked processes cannot be used</li>
      <li><strong>System Freeze:</strong> Part or all of the system becomes unresponsive</li>
      <li><strong>Process Starvation:</strong> Other processes waiting for deadlocked resources also starve</li>
      <li><strong>Data Loss:</strong> Uncommitted transactions may be lost if processes are killed</li>
      <li><strong>User Frustration:</strong> Applications appear to hang indefinitely</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Deadlock is a permanent blocking of processes due to circular waiting</li>
      <li>It occurs when processes hold resources while waiting for others</li>
      <li>Deadlocks primarily involve non-preemptable resources</li>
      <li>Different from starvation (indefinite postponement) and livelock</li>
      <li>Requires OS intervention to detect and resolve</li>
    </ul>
  </div>
);

export default DeadlockIntro;
