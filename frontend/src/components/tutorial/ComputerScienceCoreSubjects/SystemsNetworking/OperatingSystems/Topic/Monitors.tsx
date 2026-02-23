import React from 'react';

const Monitors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Monitors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Monitor is a high-level synchronization construct that provides a convenient and
      effective mechanism for thread synchronization. Developed by Tony Hoare and Per
      Brinch Hansen, monitors encapsulate shared data with the procedures that operate
      on it, automatically ensuring mutual exclusion.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Monitor?</h2>
    <p className="leading-relaxed">
      A monitor is an abstract data type that contains:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Shared variables:</strong> Data that needs to be accessed by multiple processes</li>
      <li><strong>Procedures:</strong> Operations that access the shared variables</li>
      <li><strong>Initialization code:</strong> Code that runs when the monitor is created</li>
      <li><strong>Condition variables:</strong> For waiting and signaling within the monitor</li>
    </ul>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Monitor Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`monitor monitor_name {
    // Shared variable declarations
    shared_data_type shared_variable;

    // Condition variables
    condition x, y;

    // Procedures (entry points)
    procedure P1(...) {
        // ... code ...
    }

    procedure P2(...) {
        // ... code ...
    }

    // Initialization code
    initialization_code() {
        // ... initialize shared variables ...
    }
}`}
      </pre>
    </div>

    {/* Key Property */}
    <h2 className="text-3xl font-bold mt-8">Key Property: Automatic Mutual Exclusion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
┌───────────────────────────────────────────────────────┐
│                     MONITOR                            │
│                                                         │
│   ┌─────────────────────────────────────────────────┐  │
│   │         Shared Variables                        │  │
│   │         ─────────────────                       │  │
│   │         int counter;                            │  │
│   │         bool flag;                              │  │
│   └─────────────────────────────────────────────────┘  │
│                         │                               │
│                         │ Only one process              │
│                         ▼ can be active at a time       │
│   ┌───────────────┐  ┌───────────────┐                 │
│   │  Procedure 1  │  │  Procedure 2  │  ...            │
│   └───────────────┘  └───────────────┘                 │
│                                                         │
│              ▲                ▲                ▲        │
└──────────────│────────────────│────────────────│────────┘
               │                │                │
        ┌──────┴─────┐   ┌──────┴─────┐   ┌──────┴─────┐
        │  Process 1 │   │  Process 2 │   │  Process 3 │
        │  (waiting) │   │  (inside)  │   │  (waiting) │
        └────────────┘   └────────────┘   └────────────┘
`}
      </pre>
    </div>

    {/* Condition Variables */}
    <h2 className="text-3xl font-bold mt-8">Condition Variables</h2>
    <p className="leading-relaxed">
      Condition variables allow processes to wait inside a monitor for a specific condition
      to become true. They support two operations:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">x.wait()</td>
            <td className="p-3 border">
              The process invoking this operation is suspended until another
              process invokes x.signal(). The monitor lock is released while waiting.
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x.signal()</td>
            <td className="p-3 border">
              Resumes exactly one suspended process waiting on x. If no process
              is waiting, the signal has no effect (is lost).
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Condition Variable Visualization */}
    <h2 className="text-3xl font-bold mt-8">Condition Variable Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
                    MONITOR
    ┌─────────────────────────────────────┐
    │                                     │
    │    Condition x                      │
    │    ┌───────────────────────────┐    │
    │    │  Waiting Queue for x      │    │
    │    │  [P2] → [P4] → [P5]       │    │
    │    └───────────────────────────┘    │
    │              ▲                      │
    │              │ x.wait()             │
    │              │                      │
    │    ┌─────────┴─────────┐            │
    │    │  Active Process   │            │
    │    │       (P1)        │            │
    │    └───────────────────┘            │
    │              │                      │
    │              │ x.signal()           │
    │              ▼                      │
    │    P2 wakes up (if P1 uses         │
    │    Signal-and-Wait semantics)       │
    │                                     │
    └─────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Signal Semantics */}
    <h2 className="text-3xl font-bold mt-8">Signal Semantics</h2>
    <p className="leading-relaxed">
      When x.signal() is called and a process P is waiting on x, what happens?
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Semantics</th>
            <th className="p-3 border">Behavior</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Signal-and-Wait (Hoare)</td>
            <td className="p-3 border">
              Signaler waits; signaled process runs immediately
            </td>
            <td className="p-3 border">Original Hoare monitors</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal-and-Continue (Mesa)</td>
            <td className="p-3 border">
              Signaler continues; signaled process runs later
            </td>
            <td className="p-3 border">Java, Pthreads</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal-and-Urgent-Wait</td>
            <td className="p-3 border">
              Signaler gets priority when signaled process finishes
            </td>
            <td className="p-3 border">Some languages</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Mesa vs Hoare */}
    <h2 className="text-3xl font-bold mt-8">Mesa vs Hoare Semantics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Hoare Semantics (Signal-and-Wait)
// Condition is guaranteed to be true after wait()
procedure remove() {
    if (count == 0)
        notEmpty.wait();
    // count > 0 is GUARANTEED here
    item = buffer[--count];
    notFull.signal();
}

// Mesa Semantics (Signal-and-Continue)
// Condition MAY have changed - use while loop!
procedure remove() {
    while (count == 0)      // while, not if!
        notEmpty.wait();
    // count > 0 is true, but check was needed
    item = buffer[--count];
    notFull.signal();
}`}
      </pre>
    </div>

    {/* Example: Bounded Buffer */}
    <h2 className="text-3xl font-bold mt-8">Example: Bounded Buffer Monitor</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`monitor BoundedBuffer {
    // Shared data
    item buffer[N];
    int count = 0;
    int in = 0, out = 0;

    // Condition variables
    condition notFull;    // Buffer has space
    condition notEmpty;   // Buffer has items

    procedure insert(item x) {
        while (count == N)         // Buffer full?
            notFull.wait();        // Wait for space

        buffer[in] = x;
        in = (in + 1) % N;
        count++;

        notEmpty.signal();         // Notify consumers
    }

    procedure remove() returns item {
        while (count == 0)         // Buffer empty?
            notEmpty.wait();       // Wait for item

        item x = buffer[out];
        out = (out + 1) % N;
        count--;

        notFull.signal();          // Notify producers
        return x;
    }
}`}
      </pre>
    </div>

    {/* Comparison with Semaphores */}
    <h2 className="text-3xl font-bold mt-8">Monitors vs Semaphores</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Monitors</th>
            <th className="p-3 border">Semaphores</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mutual Exclusion</td>
            <td className="p-3 border">Automatic (built-in)</td>
            <td className="p-3 border">Manual (programmer's job)</td>
          </tr>
          <tr>
            <td className="p-3 border">Level</td>
            <td className="p-3 border">High-level construct</td>
            <td className="p-3 border">Low-level primitive</td>
          </tr>
          <tr>
            <td className="p-3 border">Error-prone</td>
            <td className="p-3 border">Less (compiler helps)</td>
            <td className="p-3 border">More (easy to misuse)</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal Behavior</td>
            <td className="p-3 border">Lost if no waiter</td>
            <td className="p-3 border">Remembered (increments counter)</td>
          </tr>
          <tr>
            <td className="p-3 border">Language Support</td>
            <td className="p-3 border">Required</td>
            <td className="p-3 border">Library-based</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Java Example */}
    <h2 className="text-3xl font-bold mt-8">Monitor in Java</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Java implements monitors using synchronized keyword
public class BoundedBuffer {
    private Object[] buffer;
    private int count = 0, in = 0, out = 0;

    public synchronized void insert(Object item)
            throws InterruptedException {
        while (count == buffer.length)
            wait();                  // Release lock and wait

        buffer[in] = item;
        in = (in + 1) % buffer.length;
        count++;

        notifyAll();                 // Signal all waiters
    }

    public synchronized Object remove()
            throws InterruptedException {
        while (count == 0)
            wait();

        Object item = buffer[out];
        out = (out + 1) % buffer.length;
        count--;

        notifyAll();
        return item;
    }
}`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Monitors encapsulate shared data with synchronized access procedures</li>
      <li>Mutual exclusion is automatic - only one process active in monitor at a time</li>
      <li>Condition variables allow waiting inside a monitor</li>
      <li>wait() releases the monitor lock; signal() wakes a waiting process</li>
      <li>Mesa semantics (used by Java) requires while loops, not if statements</li>
      <li>Monitors are safer and easier to use than semaphores</li>
    </ul>
  </div>
);

export default Monitors;
