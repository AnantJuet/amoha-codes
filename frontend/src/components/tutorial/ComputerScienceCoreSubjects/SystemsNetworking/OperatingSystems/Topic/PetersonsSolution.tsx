import React from 'react';

const PetersonsSolution: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Peterson's Solution
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Peterson's Solution is a classic software-based solution to the critical section problem
      for two processes. Developed by Gary Peterson in 1981, it provides a simple and elegant
      way to achieve mutual exclusion without requiring special hardware instructions.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Overview</h2>
    <p className="leading-relaxed">
      Peterson's Solution uses two shared variables:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>flag[2]:</strong> An array of boolean values where flag[i] indicates that
        process Pi wants to enter its critical section.
      </li>
      <li>
        <strong>turn:</strong> An integer variable that indicates whose turn it is to enter
        the critical section when both processes want to enter.
      </li>
    </ul>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold mt-8">The Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared Variables
bool flag[2] = {false, false};  // Initially no one wants to enter
int turn;                        // Whose turn to enter

// Process P0                           // Process P1
do {                                    do {
    // Entry Section                        // Entry Section
    flag[0] = true;                         flag[1] = true;
    turn = 1;                               turn = 0;
    while (flag[1] && turn == 1);           while (flag[0] && turn == 0);

    // Critical Section                     // Critical Section
    // Access shared resources              // Access shared resources

    // Exit Section                         // Exit Section
    flag[0] = false;                        flag[1] = false;

    // Remainder Section                    // Remainder Section
} while (true);                         } while (true);`}
      </pre>
    </div>

    {/* General Form */}
    <h2 className="text-3xl font-bold mt-8">General Form for Process Pi</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Process Pi (i = 0 or 1, j = 1 - i)
do {
    // Entry Section
    flag[i] = true;              // I want to enter
    turn = j;                    // Give priority to the other
    while (flag[j] && turn == j) // Wait if other wants and it's their turn
        ; // Busy wait

    // Critical Section
    // ... access shared resources ...

    // Exit Section
    flag[i] = false;             // I'm done

    // Remainder Section
    // ... other operations ...
} while (true);`}
      </pre>
    </div>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Scenario 1: Only P0 wants to enter
───────────────────────────────────────────────────────────
P0: flag[0] = true          // P0 wants to enter
P0: turn = 1                // Offers turn to P1
P0: while (flag[1] && turn == 1)  // flag[1]=false, so exits loop
P0: Enters Critical Section // Success!

Scenario 2: Only P1 wants to enter
───────────────────────────────────────────────────────────
P1: flag[1] = true          // P1 wants to enter
P1: turn = 0                // Offers turn to P0
P1: while (flag[0] && turn == 0)  // flag[0]=false, so exits loop
P1: Enters Critical Section // Success!

Scenario 3: Both want to enter (P0 sets turn last)
───────────────────────────────────────────────────────────
P0: flag[0] = true
P1: flag[1] = true
P0: turn = 1
P1: turn = 0                // P1 sets turn LAST
P0: while (flag[1] && turn == 1) → turn=0, exits loop → ENTERS
P1: while (flag[0] && turn == 0) → both true, WAITS
P0: Exits, flag[0] = false
P1: while (flag[0] && turn == 0) → flag[0]=false, exits → ENTERS

Scenario 4: Both want to enter (P1 sets turn last)
───────────────────────────────────────────────────────────
P1: flag[1] = true
P0: flag[0] = true
P1: turn = 0
P0: turn = 1                // P0 sets turn LAST
P1: while (flag[0] && turn == 0) → turn=1, exits loop → ENTERS
P0: while (flag[1] && turn == 1) → both true, WAITS
P1: Exits, flag[1] = false
P0: while (flag[1] && turn == 1) → flag[1]=false, exits → ENTERS
`}
      </pre>
    </div>

    {/* Proof of Correctness */}
    <h2 className="text-3xl font-bold mt-8">Proof of Correctness</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Mutual Exclusion</h3>
    <p className="leading-relaxed mt-2">
      Both processes cannot be in the critical section simultaneously because:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>For P0 to enter: either flag[1] = false OR turn = 0</li>
      <li>For P1 to enter: either flag[0] = false OR turn = 1</li>
      <li>If both flag values are true, turn can only be 0 or 1, not both</li>
      <li>So only one process can satisfy its condition and enter</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Progress</h3>
    <p className="leading-relaxed mt-2">
      If one process wants to enter and the other does not:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>The waiting condition becomes false (flag[j] = false)</li>
      <li>The process immediately enters the critical section</li>
      <li>No indefinite postponement occurs</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Bounded Waiting</h3>
    <p className="leading-relaxed mt-2">
      A process waits at most one turn:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>When P0 sets turn = 1, it gives P1 priority</li>
      <li>After P1 exits and wants to re-enter, it sets turn = 0</li>
      <li>This guarantees P0 will enter next</li>
      <li>Maximum wait: one iteration of the other process</li>
    </ul>

    {/* Execution Timeline */}
    <h2 className="text-3xl font-bold mt-8">Execution Timeline Example</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">P0 Action</th>
            <th className="p-2 border">P1 Action</th>
            <th className="p-2 border">flag[0]</th>
            <th className="p-2 border">flag[1]</th>
            <th className="p-2 border">turn</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">T0</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">false</td>
            <td className="p-2 border">false</td>
            <td className="p-2 border">-</td>
          </tr>
          <tr>
            <td className="p-2 border">T1</td>
            <td className="p-2 border">flag[0] = true</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">false</td>
            <td className="p-2 border">-</td>
          </tr>
          <tr>
            <td className="p-2 border">T2</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">flag[1] = true</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">-</td>
          </tr>
          <tr>
            <td className="p-2 border">T3</td>
            <td className="p-2 border">turn = 1</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">1</td>
          </tr>
          <tr>
            <td className="p-2 border">T4</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">turn = 0</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T5</td>
            <td className="p-2 border">Enters CS (turn != 1)</td>
            <td className="p-2 border">Waits</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T6</td>
            <td className="p-2 border">flag[0] = false</td>
            <td className="p-2 border">Waits</td>
            <td className="p-2 border">false</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T7</td>
            <td className="p-2 border">-</td>
            <td className="p-2 border">Enters CS (flag[0]=false)</td>
            <td className="p-2 border">false</td>
            <td className="p-2 border">true</td>
            <td className="p-2 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple and easy to understand</li>
      <li>Satisfies all three requirements of critical section problem</li>
      <li>No special hardware instructions required</li>
      <li>Works for two processes reliably</li>
      <li>Provides bounded waiting guarantee</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Limited to two processes only</li>
      <li>Uses busy waiting (spinlock), wasting CPU cycles</li>
      <li>May not work correctly on modern processors due to instruction reordering</li>
      <li>Not suitable for multiprocessor systems without memory barriers</li>
      <li>Does not scale well for more than two processes</li>
    </ul>

    {/* Modern Considerations */}
    <h2 className="text-3xl font-bold mt-8">Modern Considerations</h2>
    <p className="leading-relaxed">
      On modern architectures, Peterson's Solution may fail due to:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Compiler Optimizations:</strong> The compiler may reorder instructions
        for optimization.
      </li>
      <li>
        <strong>CPU Instruction Reordering:</strong> Modern CPUs may execute instructions
        out of order for performance.
      </li>
      <li>
        <strong>Cache Coherence:</strong> Changes may not be immediately visible to other
        processors.
      </li>
    </ul>
    <p className="leading-relaxed mt-3">
      To make it work on modern systems, memory barriers or volatile variables must be used.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Peterson's Solution works for exactly two processes</li>
      <li>It uses two variables: flag array and turn</li>
      <li>Each process offers priority to the other before entering</li>
      <li>Satisfies mutual exclusion, progress, and bounded waiting</li>
      <li>Primarily of theoretical importance on modern systems</li>
    </ul>
  </div>
);

export default PetersonsSolution;
