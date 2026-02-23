import React from 'react';

const ProducerConsumer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Producer-Consumer Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Producer-Consumer Problem (also known as the Bounded Buffer Problem) is a classic
      synchronization problem. It involves two types of processes: producers that generate
      data and place it into a buffer, and consumers that remove and process data from the buffer.
    </p>

    {/* Problem Description */}
    <h2 className="text-3xl font-bold mt-8">Problem Description</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Producer:</strong> Creates items and adds them to a shared buffer</li>
      <li><strong>Consumer:</strong> Removes items from the buffer and processes them</li>
      <li><strong>Buffer:</strong> A shared, fixed-size storage area</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Constraints:</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-1 mt-2">
      <li>Producer must wait if the buffer is full</li>
      <li>Consumer must wait if the buffer is empty</li>
      <li>Only one process can access the buffer at a time (mutual exclusion)</li>
    </ul>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Problem Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
                     Bounded Buffer (size N)
                  ┌───┬───┬───┬───┬───┬───┐
Producer ───────► │ A │ B │ C │   │   │   │ ───────► Consumer
   │              └───┴───┴───┴───┴───┴───┘              │
   │                                                      │
   │              count = 3, in = 3, out = 0             │
   │                                                      │
   │  If full, producer waits                            │
   │                          If empty, consumer waits ──┘
   └──────────────────────────────────────────────────────

Timeline Example:
─────────────────────────────────────────────────────────────
Time    Producer                Buffer          Consumer
T1      produce(A)              [A]             -
T2      produce(B)              [A,B]           -
T3      -                       [A,B]           consume() → A
T4      produce(C)              [B,C]           -
T5      produce(D)              [B,C,D]         -
T6      ... (if full, WAIT)     [B,C,D]         consume() → B
`}
      </pre>
    </div>

    {/* Naive Solution - Wrong */}
    <h2 className="text-3xl font-bold mt-8">Incorrect Solution (Race Condition)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variables (INCORRECT - has race conditions)
#define N 10
int buffer[N];
int count = 0;
int in = 0, out = 0;

// Producer
void producer() {
    while (true) {
        item = produce_item();
        while (count == N);     // Wait if full
        buffer[in] = item;
        in = (in + 1) % N;
        count++;                // Race condition!
    }
}

// Consumer
void consumer() {
    while (true) {
        while (count == 0);     // Wait if empty
        item = buffer[out];
        out = (out + 1) % N;
        count--;                // Race condition!
        consume_item(item);
    }
}

// Problem: count++ and count-- are not atomic!
// Can lead to lost updates and incorrect buffer state`}
      </pre>
    </div>

    {/* Semaphore Solution */}
    <h2 className="text-3xl font-bold mt-8">Solution Using Semaphores</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`#define N 10
int buffer[N];
int in = 0, out = 0;

// Semaphores
semaphore mutex = 1;      // Mutual exclusion for buffer access
semaphore empty = N;      // Count of empty slots
semaphore full = 0;       // Count of full slots

// Producer
void producer() {
    while (true) {
        item = produce_item();

        wait(empty);          // Wait for empty slot
        wait(mutex);          // Enter critical section

        buffer[in] = item;
        in = (in + 1) % N;

        signal(mutex);        // Exit critical section
        signal(full);         // Increment full count
    }
}

// Consumer
void consumer() {
    while (true) {
        wait(full);           // Wait for filled slot
        wait(mutex);          // Enter critical section

        item = buffer[out];
        out = (out + 1) % N;

        signal(mutex);        // Exit critical section
        signal(empty);        // Increment empty count

        consume_item(item);
    }
}`}
      </pre>
    </div>

    {/* Semaphore Operation Trace */}
    <h2 className="text-3xl font-bold mt-8">Execution Trace</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">mutex</th>
            <th className="p-2 border">empty</th>
            <th className="p-2 border">full</th>
            <th className="p-2 border">Buffer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">T0</td>
            <td className="p-2 border">Initial</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T1</td>
            <td className="p-2 border">P: wait(empty)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T2</td>
            <td className="p-2 border">P: wait(mutex)</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T3</td>
            <td className="p-2 border">P: insert A</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[A][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T4</td>
            <td className="p-2 border">P: signal(mutex)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[A][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T5</td>
            <td className="p-2 border">P: signal(full)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">[A][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T6</td>
            <td className="p-2 border">C: wait(full)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[A][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T7</td>
            <td className="p-2 border">C: wait(mutex)</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[A][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T8</td>
            <td className="p-2 border">C: remove A</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T9</td>
            <td className="p-2 border">C: signal(mutex)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
          <tr>
            <td className="p-2 border">T10</td>
            <td className="p-2 border">C: signal(empty)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">[ ][ ][ ]</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Monitor Solution */}
    <h2 className="text-3xl font-bold mt-8">Solution Using Monitor</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`monitor ProducerConsumer {
    int buffer[N];
    int count = 0;
    int in = 0, out = 0;

    condition notFull, notEmpty;

    procedure insert(item) {
        while (count == N)
            notFull.wait();     // Wait if buffer full

        buffer[in] = item;
        in = (in + 1) % N;
        count++;

        notEmpty.signal();      // Wake up consumer
    }

    procedure remove() {
        while (count == 0)
            notEmpty.wait();    // Wait if buffer empty

        item = buffer[out];
        out = (out + 1) % N;
        count--;

        notFull.signal();       // Wake up producer
        return item;
    }
}

// Producer
void producer() {
    while (true) {
        item = produce_item();
        ProducerConsumer.insert(item);
    }
}

// Consumer
void consumer() {
    while (true) {
        item = ProducerConsumer.remove();
        consume_item(item);
    }
}`}
      </pre>
    </div>

    {/* Common Mistakes */}
    <h2 className="text-3xl font-bold mt-8">Common Mistakes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Mistake 1: Wrong semaphore order (causes deadlock!)
// Producer
wait(mutex);          // Gets mutex
wait(empty);          // Blocks if full - DEADLOCK!
// ... never releases mutex

// Consumer
wait(mutex);          // Blocks waiting for producer's mutex
wait(full);
// Neither can proceed

// Correct: Always wait for resource semaphore BEFORE mutex

// Mistake 2: Forgetting mutex (causes race condition)
wait(empty);
// No mutex here!
buffer[in] = item;    // Race condition if consumer reads simultaneously
in = (in + 1) % N;
signal(full);

// Mistake 3: Signal wrong semaphore
wait(empty);
wait(mutex);
buffer[in] = item;
in = (in + 1) % N;
signal(mutex);
signal(empty);        // Should be signal(full)!`}
      </pre>
    </div>

    {/* Multiple Producers and Consumers */}
    <h2 className="text-3xl font-bold mt-8">Multiple Producers and Consumers</h2>
    <p className="leading-relaxed">
      The semaphore solution works correctly for any number of producers and consumers:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
                       ┌─────────────────┐
    Producer 1 ───────►│                 │────────► Consumer 1
    Producer 2 ───────►│  Bounded Buffer │────────► Consumer 2
    Producer 3 ───────►│   (Protected)   │────────► Consumer 3
         ...          │                 │         ...
                       └─────────────────┘

The mutex semaphore ensures only ONE process (producer or consumer)
accesses the buffer at any time, preventing race conditions.`}
      </pre>
    </div>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Print Spooler:</strong> Applications produce print jobs, printer consumes them</li>
      <li><strong>Network Buffers:</strong> Network card produces packets, OS consumes them</li>
      <li><strong>Pipe Communication:</strong> One process writes, another reads</li>
      <li><strong>Web Server:</strong> Incoming requests queued, worker threads consume</li>
      <li><strong>Message Queues:</strong> Senders produce, receivers consume messages</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>The producer-consumer problem requires coordination of two process types</li>
      <li>Three semaphores are used: mutex (exclusion), empty (slots), full (items)</li>
      <li>Order of wait operations is critical to avoid deadlock</li>
      <li>The solution scales to multiple producers and consumers</li>
      <li>Monitors provide a cleaner, less error-prone solution</li>
    </ul>
  </div>
);

export default ProducerConsumer;
