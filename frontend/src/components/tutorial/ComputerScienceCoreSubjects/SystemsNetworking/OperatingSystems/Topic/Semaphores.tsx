import React from 'react';

const Semaphores: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Semaphores
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Semaphore is a synchronization tool introduced by Edsger Dijkstra in 1965. It is an
      integer variable that, apart from initialization, is accessed only through two standard
      atomic operations: wait (P) and signal (V). Semaphores provide a more powerful and
      flexible mechanism than simple mutex locks.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Semaphore?</h2>
    <p className="leading-relaxed">
      A semaphore S is an integer variable that can only be accessed via two atomic operations:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>wait(S) or P(S):</strong> Decrements S. If S becomes negative, the process blocks.
      </li>
      <li>
        <strong>signal(S) or V(S):</strong> Increments S. If there are blocked processes, wake one up.
      </li>
    </ul>
    <p className="leading-relaxed mt-3">
      The names P and V come from Dutch: Proberen (to test) and Verhogen (to increment).
    </p>

    {/* Operations */}
    <h2 className="text-3xl font-bold mt-8">Semaphore Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Classical Definition (Busy Waiting)
wait(S) {
    while (S <= 0)
        ; // Busy wait
    S--;
}

signal(S) {
    S++;
}

// Modern Definition (No Busy Waiting)
typedef struct {
    int value;
    queue_t waiting_list;
} semaphore;

wait(semaphore *S) {
    S->value--;
    if (S->value < 0) {
        // Add this process to S->waiting_list
        block();  // Suspend the process
    }
}

signal(semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        // Remove a process P from S->waiting_list
        wakeup(P);
    }
}`}
      </pre>
    </div>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Semaphore Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Semaphore S = 2 (allows 2 concurrent accesses)

Process      Operation      S Value     Waiting Queue     Result
─────────────────────────────────────────────────────────────────────
P1           wait(S)        2 → 1       []                P1 proceeds
P2           wait(S)        1 → 0       []                P2 proceeds
P3           wait(S)        0 → -1      [P3]              P3 BLOCKED
P4           wait(S)        -1 → -2     [P3, P4]          P4 BLOCKED
P1           signal(S)      -2 → -1     [P4]              P3 wakes up
P2           signal(S)      -1 → 0      []                P4 wakes up
P3           signal(S)      0 → 1       []                (no one waiting)
P4           signal(S)      1 → 2       []                (no one waiting)

Note: Negative value indicates number of processes waiting
`}
      </pre>
    </div>

    {/* Binary vs Counting */}
    <h2 className="text-3xl font-bold mt-8">Types of Semaphores</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Binary Semaphore</th>
            <th className="p-3 border">Counting Semaphore</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Value Range</td>
            <td className="p-3 border">0 or 1</td>
            <td className="p-3 border">0 to N (any positive integer)</td>
          </tr>
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Mutual exclusion</td>
            <td className="p-3 border">Resource counting, synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border">Similar To</td>
            <td className="p-3 border">Mutex lock</td>
            <td className="p-3 border">Multiple resource pool</td>
          </tr>
          <tr>
            <td className="p-3 border">Initial Value</td>
            <td className="p-3 border">Usually 1</td>
            <td className="p-3 border">Number of available resources</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Usage Examples */}
    <h2 className="text-3xl font-bold mt-8">Usage Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Mutual Exclusion (Binary Semaphore)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`semaphore mutex = 1;  // Binary semaphore initialized to 1

// Process Pi
do {
    wait(mutex);          // Entry section

    // Critical Section
    // ... access shared resource ...

    signal(mutex);        // Exit section

    // Remainder Section
} while (true);`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">2. Resource Access Control (Counting Semaphore)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Example: Managing 5 identical printers
semaphore printers = 5;

void use_printer() {
    wait(printers);       // Acquire a printer

    // Use the printer
    print_document();

    signal(printers);     // Release the printer
}

// Up to 5 processes can print simultaneously
// 6th process will block until one finishes`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">3. Process Synchronization (Ordering)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Ensure S1 executes before S2
semaphore sync = 0;  // Initialized to 0!

// Process P1                // Process P2
S1;                          wait(sync);
signal(sync);                S2;

// P2 will block on wait() until P1 executes signal()
// This guarantees: S1 happens before S2`}
      </pre>
    </div>

    {/* Semaphore vs Mutex */}
    <h2 className="text-3xl font-bold mt-8">Semaphore vs Mutex</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Mutex</th>
            <th className="p-3 border">Semaphore</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Mutual exclusion only</td>
            <td className="p-3 border">Mutual exclusion + Synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border">Ownership</td>
            <td className="p-3 border">Yes (only owner can unlock)</td>
            <td className="p-3 border">No (any process can signal)</td>
          </tr>
          <tr>
            <td className="p-3 border">Value</td>
            <td className="p-3 border">Binary (locked/unlocked)</td>
            <td className="p-3 border">Integer (can be any value)</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiple Resources</td>
            <td className="p-3 border">Not supported</td>
            <td className="p-3 border">Supported (counting)</td>
          </tr>
          <tr>
            <td className="p-3 border">Priority Inversion</td>
            <td className="p-3 border">Can be handled</td>
            <td className="p-3 border">Harder to handle</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Implementation Details */}
    <h2 className="text-3xl font-bold mt-8">Implementation Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// wait() and signal() must be ATOMIC
// Two approaches:

// 1. Using hardware atomic instructions
wait(S) {
    disable_interrupts();
    S->value--;
    if (S->value < 0) {
        add_to_queue(S->waiting_list, current_process);
        enable_interrupts();
        block();
    } else {
        enable_interrupts();
    }
}

// 2. Using spinlock for the semaphore operations
typedef struct {
    int value;
    spinlock_t guard;
    queue_t waiting_list;
} semaphore;

wait(semaphore *S) {
    spin_lock(&S->guard);
    S->value--;
    if (S->value < 0) {
        add_to_queue(&S->waiting_list, current);
        spin_unlock(&S->guard);
        block();
    } else {
        spin_unlock(&S->guard);
    }
}`}
      </pre>
    </div>

    {/* Common Problems */}
    <h2 className="text-3xl font-bold mt-8">Common Problems with Semaphores</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Problem 1: Deadlock (wrong order)
semaphore S = 1, Q = 1;

// Process P1                // Process P2
wait(S);                     wait(Q);
wait(Q);                     wait(S);    // DEADLOCK!
...                          ...
signal(S);                   signal(Q);
signal(Q);                   signal(S);

// Problem 2: Missing signal (forgetting to release)
wait(mutex);
// ... critical section ...
// Missing: signal(mutex);  ← Causes permanent blocking

// Problem 3: Missing wait (no protection)
// Missing: wait(mutex);
// ... critical section ...  ← Race condition!
signal(mutex);

// Problem 4: Wrong semaphore (typo)
wait(mutex1);
// ... critical section ...
signal(mutex2);  // Wrong semaphore! mutex1 never released`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Semaphores use an integer value to control access</li>
      <li>wait() decrements and may block; signal() increments and may wake</li>
      <li>Binary semaphores (0/1) work like mutex locks</li>
      <li>Counting semaphores manage pools of identical resources</li>
      <li>Semaphores can enforce execution ordering between processes</li>
      <li>Improper use can lead to deadlocks or race conditions</li>
      <li>Modern implementations use blocking instead of busy waiting</li>
    </ul>
  </div>
);

export default Semaphores;
