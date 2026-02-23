import React from 'react';

const MutexLocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mutex Locks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Mutex (Mutual Exclusion) Lock is the simplest synchronization tool used to protect
      critical sections. It is a locking mechanism that ensures only one process or thread
      can access a shared resource at a time, preventing race conditions.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Mutex?</h2>
    <p className="leading-relaxed">
      A mutex is a binary lock with two states:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Locked (1):</strong> The mutex is held by a process</li>
      <li><strong>Unlocked (0):</strong> The mutex is available</li>
    </ul>
    <p className="leading-relaxed mt-3">
      Only the process that locks a mutex can unlock it, ensuring ownership semantics.
    </p>

    {/* Basic Operations */}
    <h2 className="text-3xl font-bold mt-8">Basic Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Mutex Structure
typedef struct {
    int locked;           // 0 = unlocked, 1 = locked
    // Additional fields for owner, waiting queue, etc.
} mutex_t;

// acquire() - also called lock() or wait()
void acquire(mutex_t *mutex) {
    while (test_and_set(&mutex->locked))
        ; // Busy wait (spinlock)
}

// release() - also called unlock() or signal()
void release(mutex_t *mutex) {
    mutex->locked = 0;
}`}
      </pre>
    </div>

    {/* Usage Pattern */}
    <h2 className="text-3xl font-bold mt-8">Usage Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`mutex_t lock;

// Process/Thread Code
void process() {
    // Entry Section
    acquire(&lock);           // Wait until lock is available

    // Critical Section
    // ... access shared resource ...
    counter++;
    shared_data = new_value;

    // Exit Section
    release(&lock);           // Release the lock

    // Remainder Section
    // ... non-critical operations ...
}`}
      </pre>
    </div>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Mutex Operation Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Thread T1                    Mutex State                    Thread T2
─────────────────────────────────────────────────────────────────────────

acquire(lock)    ──────►    ┌─────────────┐
                            │  UNLOCKED   │
                            │   locked=0  │
                            └──────┬──────┘
                                   │
Success!         ◄──────           ▼
                            ┌─────────────┐
IN CRITICAL SECTION         │   LOCKED    │    ──────►    acquire(lock)
                            │   locked=1  │
                            │  owner: T1  │               BLOCKED!
                            └──────┬──────┘               (spinning)
        │                          │                           │
        │                          │                           │
        ▼                          │                           │
release(lock)    ──────►           ▼                           │
                            ┌─────────────┐                    │
                            │  UNLOCKED   │    ◄──────    Success!
                            │   locked=0  │
                            └─────────────┘
                                                    IN CRITICAL SECTION
`}
      </pre>
    </div>

    {/* Spinlock vs Blocking Mutex */}
    <h2 className="text-3xl font-bold mt-8">Spinlock vs Blocking Mutex</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Spinlock</th>
            <th className="p-3 border">Blocking Mutex</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Wait Method</td>
            <td className="p-3 border">Busy waiting (loop)</td>
            <td className="p-3 border">Process sleeps in queue</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU Usage</td>
            <td className="p-3 border">High (wastes CPU cycles)</td>
            <td className="p-3 border">Low (CPU available for others)</td>
          </tr>
          <tr>
            <td className="p-3 border">Context Switch</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Required (overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Short critical sections</td>
            <td className="p-3 border">Long critical sections</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiprocessor</td>
            <td className="p-3 border">Efficient</td>
            <td className="p-3 border">May be less efficient</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Blocking Mutex Implementation */}
    <h2 className="text-3xl font-bold mt-8">Blocking Mutex Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`typedef struct {
    int locked;
    queue_t waiting_queue;    // Queue of waiting processes
} blocking_mutex_t;

void acquire(blocking_mutex_t *mutex) {
    disable_interrupts();
    if (mutex->locked) {
        // Add current process to waiting queue
        enqueue(&mutex->waiting_queue, current_process);
        enable_interrupts();
        block();              // Put process to sleep
    } else {
        mutex->locked = 1;
        enable_interrupts();
    }
}

void release(blocking_mutex_t *mutex) {
    disable_interrupts();
    if (!empty(&mutex->waiting_queue)) {
        // Wake up next waiting process
        process_t *p = dequeue(&mutex->waiting_queue);
        wakeup(p);
    } else {
        mutex->locked = 0;
    }
    enable_interrupts();
}`}
      </pre>
    </div>

    {/* Example: Thread-Safe Counter */}
    <h2 className="text-3xl font-bold mt-8">Example: Thread-Safe Counter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Without Mutex (Race Condition!)
int counter = 0;

void increment() {
    counter++;    // NOT atomic - race condition!
}

// With Mutex (Thread-Safe)
int counter = 0;
mutex_t lock;

void increment() {
    acquire(&lock);
    counter++;    // Protected by mutex
    release(&lock);
}

// Multiple threads can safely call increment()
// The counter will always have the correct value`}
      </pre>
    </div>

    {/* Common Mistakes */}
    <h2 className="text-3xl font-bold mt-8">Common Mistakes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Mistake 1: Forgetting to release
void bad_function() {
    acquire(&lock);
    // ... critical section ...
    if (error_condition)
        return;          // OOPS! Lock never released - DEADLOCK
    release(&lock);
}

// Mistake 2: Double acquire (self-deadlock)
void recursive_function() {
    acquire(&lock);
    // ... some code ...
    recursive_function();  // DEADLOCK! Already holding lock
    release(&lock);
}

// Mistake 3: Wrong order (potential deadlock with multiple locks)
// Thread 1:              // Thread 2:
acquire(&lock_A);         acquire(&lock_B);
acquire(&lock_B);         acquire(&lock_A);  // DEADLOCK!

// Solution: Always acquire locks in same order`}
      </pre>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Best Practices</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Always release:</strong> Use try-finally or RAII pattern to ensure
        locks are always released.
      </li>
      <li>
        <strong>Minimize critical section:</strong> Keep the code between acquire
        and release as short as possible.
      </li>
      <li>
        <strong>Consistent ordering:</strong> Always acquire multiple locks in the
        same order to prevent deadlocks.
      </li>
      <li>
        <strong>Avoid nested locks:</strong> Try to design code that doesn't require
        holding multiple locks.
      </li>
      <li>
        <strong>Use recursive mutex if needed:</strong> For functions that may be
        called recursively while holding the lock.
      </li>
    </ul>

    {/* Mutex Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Mutexes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Normal Mutex</td>
            <td className="p-3 border">Basic lock, deadlocks on re-acquire</td>
            <td className="p-3 border">Simple mutual exclusion</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursive Mutex</td>
            <td className="p-3 border">Same thread can acquire multiple times</td>
            <td className="p-3 border">Recursive functions</td>
          </tr>
          <tr>
            <td className="p-3 border">Error-Checking</td>
            <td className="p-3 border">Returns error on double acquire</td>
            <td className="p-3 border">Debugging</td>
          </tr>
          <tr>
            <td className="p-3 border">Timed Mutex</td>
            <td className="p-3 border">Try to acquire with timeout</td>
            <td className="p-3 border">Avoiding indefinite blocking</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Mutex provides mutual exclusion for critical sections</li>
      <li>Only the thread that acquired a mutex can release it</li>
      <li>Spinlocks are suitable for short waits; blocking mutexes for long waits</li>
      <li>Always ensure proper acquire/release pairing</li>
      <li>Deadlocks occur with incorrect ordering or missing releases</li>
      <li>Modern languages provide mutex implementations (pthread_mutex, std::mutex)</li>
    </ul>
  </div>
);

export default MutexLocks;
