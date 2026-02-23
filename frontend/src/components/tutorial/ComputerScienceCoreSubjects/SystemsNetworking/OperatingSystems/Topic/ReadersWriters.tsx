import React from 'react';

const ReadersWriters: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Readers-Writers Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Readers-Writers Problem is a classic synchronization problem that deals with
      situations where a shared resource (like a database or file) is accessed by two
      types of processes: readers who only read data and writers who can modify data.
    </p>

    {/* Problem Description */}
    <h2 className="text-3xl font-bold mt-8">Problem Description</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Readers:</strong> Only read the shared data, do not modify it</li>
      <li><strong>Writers:</strong> Both read and write (modify) the shared data</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Constraints:</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-1 mt-2">
      <li>Multiple readers can read simultaneously (no conflict)</li>
      <li>Only one writer can write at a time (exclusive access)</li>
      <li>When a writer is writing, no reader can read</li>
      <li>When readers are reading, no writer can write</li>
    </ul>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Access Rules Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Scenario 1: Multiple Readers (ALLOWED)
────────────────────────────────────────────────────────────
    Reader 1 ─────►┌─────────────────────┐
    Reader 2 ─────►│    SHARED DATA      │  All can read
    Reader 3 ─────►│   (Read-Only Mode)  │  simultaneously
                   └─────────────────────┘

Scenario 2: Single Writer (ALLOWED)
────────────────────────────────────────────────────────────
    Writer 1 ─────►┌─────────────────────┐
                   │    SHARED DATA      │  Exclusive access
       (only one)  │   (Write Mode)      │
                   └─────────────────────┘

Scenario 3: Reader + Writer (NOT ALLOWED)
────────────────────────────────────────────────────────────
    Reader 1 ─────►┌─────────────────────┐◄───── Writer 1
                   │    SHARED DATA      │
                   │   (CONFLICT!)       │  Cannot happen
                   └─────────────────────┘
`}
      </pre>
    </div>

    {/* Problem Variants */}
    <h2 className="text-3xl font-bold mt-8">Problem Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variant</th>
            <th className="p-3 border">Priority</th>
            <th className="p-3 border">Issue</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">First Readers-Writers</td>
            <td className="p-3 border">Readers have priority</td>
            <td className="p-3 border">Writers may starve</td>
          </tr>
          <tr>
            <td className="p-3 border">Second Readers-Writers</td>
            <td className="p-3 border">Writers have priority</td>
            <td className="p-3 border">Readers may starve</td>
          </tr>
          <tr>
            <td className="p-3 border">Third Readers-Writers</td>
            <td className="p-3 border">Fair (no priority)</td>
            <td className="p-3 border">Complex implementation</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* First Solution - Readers Priority */}
    <h2 className="text-3xl font-bold mt-8">First Readers-Writers Solution</h2>
    <p className="leading-relaxed">
      In this solution, readers have priority. No reader is kept waiting unless a writer
      is already in the critical section.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variables
semaphore mutex = 1;      // Protects read_count
semaphore wrt = 1;        // Mutual exclusion for writers
int read_count = 0;       // Number of active readers

// Writer Process
void writer() {
    while (true) {
        wait(wrt);            // Wait for exclusive access

        // Writing is performed
        write_data();

        signal(wrt);          // Release exclusive access
    }
}

// Reader Process
void reader() {
    while (true) {
        wait(mutex);          // Lock read_count
        read_count++;
        if (read_count == 1)  // First reader?
            wait(wrt);        // Block writers
        signal(mutex);        // Unlock read_count

        // Reading is performed
        read_data();

        wait(mutex);          // Lock read_count
        read_count--;
        if (read_count == 0)  // Last reader?
            signal(wrt);      // Allow writers
        signal(mutex);        // Unlock read_count
    }
}`}
      </pre>
    </div>

    {/* Execution Trace */}
    <h2 className="text-3xl font-bold mt-8">Execution Trace: First Readers-Writers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">mutex</th>
            <th className="p-2 border">wrt</th>
            <th className="p-2 border">read_count</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">T0</td>
            <td className="p-2 border">Initial</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T1</td>
            <td className="p-2 border">R1: wait(mutex)</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T2</td>
            <td className="p-2 border">R1: read_count++, wait(wrt)</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">1</td>
          </tr>
          <tr>
            <td className="p-2 border">T3</td>
            <td className="p-2 border">R1: signal(mutex), reading</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">1</td>
          </tr>
          <tr>
            <td className="p-2 border">T4</td>
            <td className="p-2 border">W1: wait(wrt) - BLOCKED</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">1</td>
          </tr>
          <tr>
            <td className="p-2 border">T5</td>
            <td className="p-2 border">R2: enters, read_count++</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">2</td>
          </tr>
          <tr>
            <td className="p-2 border">T6</td>
            <td className="p-2 border">R1: exits, read_count--</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">1</td>
          </tr>
          <tr>
            <td className="p-2 border">T7</td>
            <td className="p-2 border">R2: exits, read_count--, signal(wrt)</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
          </tr>
          <tr>
            <td className="p-2 border">T8</td>
            <td className="p-2 border">W1: gets wrt, writing</td>
            <td className="p-2 border">1</td>
            <td className="p-2 border">0</td>
            <td className="p-2 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Second Solution - Writers Priority */}
    <h2 className="text-3xl font-bold mt-8">Second Readers-Writers Solution</h2>
    <p className="leading-relaxed">
      In this solution, writers have priority. Once a writer is waiting, no new readers
      can start reading.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Shared variables
semaphore mutex1 = 1;     // Protects read_count
semaphore mutex2 = 1;     // Protects write_count
semaphore mutex3 = 1;     // Queues readers while writers waiting
semaphore wrt = 1;        // Writer access
semaphore rd = 1;         // Reader access
int read_count = 0;
int write_count = 0;

// Writer Process
void writer() {
    while (true) {
        wait(mutex2);
        write_count++;
        if (write_count == 1)
            wait(rd);         // Block new readers
        signal(mutex2);

        wait(wrt);            // Get exclusive write access
        // Writing is performed
        write_data();
        signal(wrt);

        wait(mutex2);
        write_count--;
        if (write_count == 0)
            signal(rd);       // Allow readers
        signal(mutex2);
    }
}

// Reader Process
void reader() {
    while (true) {
        wait(mutex3);         // Queue if writers waiting
        wait(rd);             // Wait for reader access
        wait(mutex1);
        read_count++;
        if (read_count == 1)
            wait(wrt);        // Block writers
        signal(mutex1);
        signal(rd);
        signal(mutex3);

        // Reading is performed
        read_data();

        wait(mutex1);
        read_count--;
        if (read_count == 0)
            signal(wrt);      // Allow writers
        signal(mutex1);
    }
}`}
      </pre>
    </div>

    {/* Starvation Issues */}
    <h2 className="text-3xl font-bold mt-8">Starvation Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`First Solution (Readers Priority) - Writer Starvation:
─────────────────────────────────────────────────────────────
Time  R1   R2   R3   R4   R5   W1
  │   ████ ████ ████ ████ ████
  │        ████ ████ ████ ████ │
  │             ████ ████ ████ │ W1 blocked
  │                  ████ ████ │ indefinitely
  │                       ████ │ as new readers
  ▼                            │ keep arriving
                               ▼

Second Solution (Writers Priority) - Reader Starvation:
─────────────────────────────────────────────────────────────
Time  W1   W2   W3   R1
  │   ████            │
  │        ████       │ R1 blocked
  │             ████  │ indefinitely
  │                   │ as new writers
  ▼                   ▼ keep arriving`}
      </pre>
    </div>

    {/* Fair Solution */}
    <h2 className="text-3xl font-bold mt-8">Fair Solution (No Starvation)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Fair solution using FIFO ordering
semaphore order = 1;      // Preserves arrival order
semaphore mutex = 1;      // Protects read_count
semaphore wrt = 1;        // Writer access
int read_count = 0;

// Writer Process
void writer() {
    while (true) {
        wait(order);          // Wait in queue
        wait(wrt);            // Get exclusive access
        signal(order);        // Allow next in queue

        write_data();

        signal(wrt);
    }
}

// Reader Process
void reader() {
    while (true) {
        wait(order);          // Wait in queue
        wait(mutex);
        read_count++;
        if (read_count == 1)
            wait(wrt);
        signal(order);        // Allow next in queue
        signal(mutex);

        read_data();

        wait(mutex);
        read_count--;
        if (read_count == 0)
            signal(wrt);
        signal(mutex);
    }
}

// This ensures FIFO order: processes are served
// in the order they arrive`}
      </pre>
    </div>

    {/* Real-World Applications */}
    <h2 className="text-3xl font-bold mt-8">Real-World Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Database Systems:</strong> Multiple queries (readers) vs updates (writers)</li>
      <li><strong>File Systems:</strong> Reading files vs modifying files</li>
      <li><strong>Caching Systems:</strong> Cache reads vs cache updates</li>
      <li><strong>Web Applications:</strong> Page views vs content updates</li>
      <li><strong>Configuration Files:</strong> Reading config vs modifying config</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Multiple readers can access shared data simultaneously</li>
      <li>Writers require exclusive access (no other readers or writers)</li>
      <li>First solution favors readers - can starve writers</li>
      <li>Second solution favors writers - can starve readers</li>
      <li>Fair solutions prevent starvation but are more complex</li>
      <li>Read-write locks in modern systems implement this pattern</li>
    </ul>
  </div>
);

export default ReadersWriters;
