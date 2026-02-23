import React from 'react';

const HardwareSynchronization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Hardware Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Hardware synchronization uses special atomic instructions provided by the processor to
      implement critical section solutions. These hardware-based approaches are faster and
      more reliable than software-only solutions, especially on multiprocessor systems.
    </p>

    {/* Why Hardware Support */}
    <h2 className="text-3xl font-bold mt-8">Why Hardware Support?</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Atomicity:</strong> Hardware instructions execute as a single, uninterruptible
        unit, preventing race conditions.
      </li>
      <li>
        <strong>Performance:</strong> Hardware solutions are faster than software-based approaches.
      </li>
      <li>
        <strong>Multiprocessor Support:</strong> Works correctly across multiple processors.
      </li>
      <li>
        <strong>Simplicity:</strong> Easier to implement correct synchronization.
      </li>
    </ul>

    {/* Disabling Interrupts */}
    <h2 className="text-3xl font-bold mt-8">Method 1: Disabling Interrupts</h2>
    <p className="leading-relaxed">
      The simplest hardware approach is to disable interrupts during the critical section.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Process in Critical Section
disable_interrupts();    // No context switch possible

// Critical Section
// ... access shared resources ...

enable_interrupts();     // Allow context switches again`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple to implement</li>
      <li>Guarantees mutual exclusion on single processor</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Does not work on multiprocessor systems</li>
      <li>User processes should not have privilege to disable interrupts</li>
      <li>System clock may be affected</li>
      <li>Decreases system efficiency</li>
    </ul>

    {/* Test and Set */}
    <h2 className="text-3xl font-bold mt-8">Method 2: Test-and-Set (TAS)</h2>
    <p className="leading-relaxed">
      Test-and-Set is an atomic instruction that tests and modifies a memory word in one
      uninterruptible operation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Test-and-Set Instruction (executed atomically)
bool test_and_set(bool *target) {
    bool rv = *target;    // Save old value
    *target = true;       // Set to true
    return rv;            // Return old value
}

// This ENTIRE function executes as ONE atomic instruction
// It cannot be interrupted in the middle`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Using Test-and-Set for Mutual Exclusion:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
bool lock = false;

// Process Pi
do {
    // Entry Section: Spin until we get the lock
    while (test_and_set(&lock))
        ; // Busy wait (spin)

    // Critical Section
    // ... access shared resources ...

    // Exit Section
    lock = false;

    // Remainder Section
} while (true);`}
      </pre>
    </div>

    {/* TAS Visualization */}
    <h2 className="text-3xl font-bold mt-8">Test-and-Set Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Initial: lock = false

Process P1                      Process P2
─────────────────────────       ─────────────────────────
test_and_set(&lock)
  └→ returns false
  └→ lock = true
  └→ Exits while loop
  └→ ENTERS CS                  test_and_set(&lock)
                                  └→ returns true (lock was true)
                                  └→ lock = true (no change)
                                  └→ Continues spinning...
       │
P1 in Critical Section          P2 spinning...
       │
lock = false (P1 exits)         test_and_set(&lock)
                                  └→ returns false (lock was false)
                                  └→ lock = true
                                  └→ ENTERS CS
`}
      </pre>
    </div>

    {/* Compare and Swap */}
    <h2 className="text-3xl font-bold mt-8">Method 3: Compare-and-Swap (CAS)</h2>
    <p className="leading-relaxed">
      Compare-and-Swap (also called Compare-and-Exchange) is a more flexible atomic instruction
      that compares a memory location to an expected value and, if equal, swaps in a new value.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Compare-and-Swap Instruction (executed atomically)
int compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected)
        *value = new_value;
    return temp;         // Return original value
}

// Atomically: if value equals expected, set it to new_value`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Using Compare-and-Swap for Mutual Exclusion:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variable
int lock = 0;  // 0 = unlocked, 1 = locked

// Process Pi
do {
    // Entry Section: Try to acquire lock
    while (compare_and_swap(&lock, 0, 1) != 0)
        ; // Spin if lock was already held

    // Critical Section
    // ... access shared resources ...

    // Exit Section
    lock = 0;

    // Remainder Section
} while (true);`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Hardware Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Disable Interrupts</th>
            <th className="p-3 border">Test-and-Set</th>
            <th className="p-3 border">Compare-and-Swap</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Multiprocessor</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">User Mode</td>
            <td className="p-3 border">No (kernel only)</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Bounded Waiting</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Not guaranteed</td>
            <td className="p-3 border">Not guaranteed</td>
          </tr>
          <tr>
            <td className="p-3 border">Busy Waiting</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (spinlock)</td>
            <td className="p-3 border">Yes (spinlock)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Bounded Waiting Solution */}
    <h2 className="text-3xl font-bold mt-8">Test-and-Set with Bounded Waiting</h2>
    <p className="leading-relaxed">
      The basic Test-and-Set does not guarantee bounded waiting. Here is an improved version:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variables
bool waiting[n];           // waiting[i] = true if process i is waiting
bool lock = false;

// Process Pi
do {
    // Entry Section
    waiting[i] = true;
    bool key = true;
    while (waiting[i] && key)
        key = test_and_set(&lock);
    waiting[i] = false;

    // Critical Section
    // ... access shared resources ...

    // Exit Section
    int j = (i + 1) % n;
    while ((j != i) && !waiting[j])
        j = (j + 1) % n;

    if (j == i)
        lock = false;      // No one waiting
    else
        waiting[j] = false; // Let next waiting process in

    // Remainder Section
} while (true);`}
      </pre>
    </div>

    {/* Memory Barriers */}
    <h2 className="text-3xl font-bold mt-8">Memory Barriers</h2>
    <p className="leading-relaxed">
      Modern processors use memory barriers (or fences) to ensure proper ordering of memory
      operations:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Memory Barrier Types
─────────────────────────────────────────────────────────────
Store Barrier:  Ensures all stores before the barrier complete
                before any stores after the barrier.

Load Barrier:   Ensures all loads before the barrier complete
                before any loads after the barrier.

Full Barrier:   Combines both - no memory operations cross
                the barrier in either direction.

// Example usage:
flag = true;
memory_barrier();    // Ensure flag is visible before proceeding
// ... proceed knowing flag is set ...`}
      </pre>
    </div>

    {/* Atomic Variables */}
    <h2 className="text-3xl font-bold mt-8">Atomic Variables</h2>
    <p className="leading-relaxed">
      Modern programming languages provide atomic variable types:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// C11 Atomic Operations
#include <stdatomic.h>

atomic_int counter = 0;

// Atomic operations
atomic_fetch_add(&counter, 1);    // counter++ atomically
atomic_fetch_sub(&counter, 1);    // counter-- atomically
atomic_load(&counter);            // Read atomically
atomic_store(&counter, 5);        // Write atomically
atomic_compare_exchange_strong(&counter, &expected, desired);

// Java Atomic Classes
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();        // counter++ atomically
counter.compareAndSet(expected, newValue);`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Hardware atomic instructions cannot be interrupted</li>
      <li>Test-and-Set and Compare-and-Swap are the most common atomic operations</li>
      <li>Basic implementations use busy waiting (spinlocks)</li>
      <li>Bounded waiting requires additional mechanisms</li>
      <li>Memory barriers ensure proper visibility across processors</li>
      <li>Modern languages provide atomic types built on these primitives</li>
    </ul>
  </div>
);

export default HardwareSynchronization;
