import React from 'react';

const SemaphoreTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Semaphores
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Semaphores come in different types, each designed for specific synchronization needs.
      Understanding the differences helps in choosing the right type for solving various
      concurrency problems.
    </p>

    {/* Binary Semaphore */}
    <h2 className="text-3xl font-bold mt-8">Binary Semaphore</h2>
    <p className="leading-relaxed">
      A binary semaphore can only have two values: 0 and 1. It is commonly used for
      implementing mutual exclusion.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Binary Semaphore Structure
typedef struct {
    int value;      // Can only be 0 or 1
    queue_t queue;  // Waiting processes
} binary_semaphore;

// Initialize to 1 (available)
binary_semaphore mutex = {1, empty_queue};

// Operations ensure value stays in {0, 1}
void wait(binary_semaphore *S) {
    if (S->value == 1) {
        S->value = 0;  // Acquire
    } else {
        block();       // Wait
    }
}

void signal(binary_semaphore *S) {
    if (queue_empty(S->queue)) {
        S->value = 1;  // Release
    } else {
        wakeup(dequeue(S->queue));
    }
}`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Binary Semaphore States:</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
State Diagram:
                         wait()
             ┌────────────────────────────┐
             │                            │
             ▼                            │
      ┌─────────────┐              ┌─────────────┐
      │  value = 0  │   signal()   │  value = 1  │
      │  (LOCKED)   │ ──────────► │ (UNLOCKED)  │
      └─────────────┘              └─────────────┘
             │                            ▲
             │                            │
             └────────────────────────────┘
                        signal()
`}
      </pre>
    </div>

    {/* Counting Semaphore */}
    <h2 className="text-3xl font-bold mt-8">Counting Semaphore</h2>
    <p className="leading-relaxed">
      A counting semaphore can have any non-negative integer value. It is used to control
      access to resources that have multiple instances.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Counting Semaphore
typedef struct {
    int value;      // Can be 0, 1, 2, ... N
    queue_t queue;
} counting_semaphore;

// Initialize to number of available resources
counting_semaphore resources = {5, empty_queue};  // 5 resources

void wait(counting_semaphore *S) {
    S->value--;
    if (S->value < 0) {
        enqueue(S->queue, current_process);
        block();
    }
}

void signal(counting_semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        process *P = dequeue(S->queue);
        wakeup(P);
    }
}`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Example: Database Connection Pool</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Managing a pool of 10 database connections
counting_semaphore db_connections = {10, empty_queue};

void query_database() {
    wait(&db_connections);      // Acquire a connection

    // Execute database query
    execute_query();

    signal(&db_connections);    // Release the connection
}

// Value interpretation:
// value > 0: Number of available connections
// value = 0: All connections in use, next wait() blocks
// value < 0: |value| processes waiting for connection`}
      </pre>
    </div>

    {/* Strong vs Weak Semaphore */}
    <h2 className="text-3xl font-bold mt-8">Strong vs Weak Semaphore</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Strong Semaphore</th>
            <th className="p-3 border">Weak Semaphore</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Wake-up Order</td>
            <td className="p-3 border">FIFO (First-In-First-Out)</td>
            <td className="p-3 border">Unspecified (any order)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fairness</td>
            <td className="p-3 border">Guaranteed bounded waiting</td>
            <td className="p-3 border">Possible starvation</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Queue-based</td>
            <td className="p-3 border">Set or random selection</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Higher (maintain order)</td>
            <td className="p-3 border">Lower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Strong Semaphore (FIFO Queue):
───────────────────────────────────────────────────────────
Waiting Queue: [P1] → [P2] → [P3] → [P4]
                ↑
             signal() always wakes P1 (first in queue)

Weak Semaphore (Any Order):
───────────────────────────────────────────────────────────
Waiting Set: {P1, P2, P3, P4}
              ↑
           signal() may wake ANY process (P3 could be chosen)

// Problem with weak semaphore:
// P1 may never be woken up if new processes keep getting priority
// This leads to STARVATION`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Complete Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Binary</th>
            <th className="p-3 border">Counting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Value Range</td>
            <td className="p-3 border">0, 1</td>
            <td className="p-3 border">0 to N</td>
          </tr>
          <tr>
            <td className="p-3 border">Primary Use</td>
            <td className="p-3 border">Mutual exclusion</td>
            <td className="p-3 border">Resource pools</td>
          </tr>
          <tr>
            <td className="p-3 border">Concurrent Access</td>
            <td className="p-3 border">1 process</td>
            <td className="p-3 border">N processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Similar To</td>
            <td className="p-3 border">Mutex lock</td>
            <td className="p-3 border">Resource manager</td>
          </tr>
          <tr>
            <td className="p-3 border">Signaling</td>
            <td className="p-3 border">Yes (ordering)</td>
            <td className="p-3 border">Yes (ordering)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Implementing Counting with Binary */}
    <h2 className="text-3xl font-bold mt-8">Implementing Counting Semaphore Using Binary</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Implementing counting semaphore using binary semaphores
typedef struct {
    int value;
    binary_semaphore S1;  // For mutual exclusion on value
    binary_semaphore S2;  // For blocking
} counting_from_binary;

void init(counting_from_binary *S, int n) {
    S->value = n;
    init_binary(&S->S1, 1);
    init_binary(&S->S2, 0);
}

void wait(counting_from_binary *S) {
    wait(&S->S1);         // Lock
    S->value--;
    if (S->value < 0) {
        signal(&S->S1);   // Unlock before blocking
        wait(&S->S2);     // Block
    } else {
        signal(&S->S1);   // Unlock
    }
}

void signal(counting_from_binary *S) {
    wait(&S->S1);         // Lock
    S->value++;
    if (S->value <= 0) {
        signal(&S->S2);   // Wake up one waiting process
    }
    signal(&S->S1);       // Unlock
}`}
      </pre>
    </div>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">When to Use Each Type</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Semaphore Type</th>
            <th className="p-3 border">Initial Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Protect critical section</td>
            <td className="p-3 border">Binary</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">Ensure P1 runs before P2</td>
            <td className="p-3 border">Binary</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">Pool of N printers</td>
            <td className="p-3 border">Counting</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border">Buffer with N slots</td>
            <td className="p-3 border">Counting</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border">Empty buffer tracking</td>
            <td className="p-3 border">Counting</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Visualization of Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example 1: Parking Lot (Counting Semaphore)
───────────────────────────────────────────────────────────
Parking lot with 3 spaces:  semaphore parking = 3;

Car 1 enters: wait(parking) → parking = 2  [   ] [C1] [   ]
Car 2 enters: wait(parking) → parking = 1  [C2] [C1] [   ]
Car 3 enters: wait(parking) → parking = 0  [C2] [C1] [C3]
Car 4 arrives: wait(parking) → parking = -1, BLOCKED (waiting)
Car 1 leaves: signal(parking) → Car 4 enters [C2] [C4] [C3]

Example 2: Signaling (Binary Semaphore = 0)
───────────────────────────────────────────────────────────
semaphore data_ready = 0;

Producer:                    Consumer:
prepare_data();              wait(data_ready);  // Blocks
signal(data_ready);  ───────► Consumer unblocks
                             process_data();`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Binary semaphores are limited to values 0 and 1</li>
      <li>Counting semaphores can have any non-negative value</li>
      <li>Strong semaphores guarantee FIFO ordering and prevent starvation</li>
      <li>Weak semaphores may cause starvation but are simpler</li>
      <li>Counting semaphores can be built from binary semaphores</li>
      <li>Choose the type based on the synchronization requirements</li>
    </ul>
  </div>
);

export default SemaphoreTypes;
