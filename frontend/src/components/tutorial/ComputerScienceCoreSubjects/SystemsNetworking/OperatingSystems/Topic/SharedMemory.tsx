import React from 'react';

const SharedMemory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shared Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shared memory is an inter-process communication mechanism where multiple processes
      can access a common memory region. It is the fastest form of IPC because data does
      not need to be copied between processes - they can directly read and write to the
      shared region.
    </p>

    {/* How Shared Memory Works */}
    <h2 className="text-3xl font-bold mt-8">How Shared Memory Works</h2>
    <p className="leading-relaxed">
      Normally, the operating system prevents processes from accessing each other's memory
      for protection. Shared memory creates an exception by mapping the same physical memory
      into the virtual address space of multiple processes.
    </p>

    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Creation:</strong> One process creates a shared memory segment using
        system calls (like shmget() in POSIX).
      </li>
      <li>
        <strong>Attachment:</strong> Processes attach the segment to their address
        space (using shmat()).
      </li>
      <li>
        <strong>Usage:</strong> Processes read from and write to the shared memory
        like regular memory.
      </li>
      <li>
        <strong>Detachment:</strong> When done, processes detach the segment (shmdt()).
      </li>
      <li>
        <strong>Removal:</strong> The segment is removed when no longer needed (shmctl()).
      </li>
    </ul>

    {/* Memory Mapping Diagram */}
    <h2 className="text-3xl font-bold mt-8">Shared Memory Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process A                           Process B
Virtual Address Space               Virtual Address Space

┌─────────────────┐                ┌─────────────────┐
│     Stack       │                │     Stack       │
├─────────────────┤                ├─────────────────┤
│                 │                │                 │
│     Heap        │                │     Heap        │
├─────────────────┤                ├─────────────────┤
│                 │                │                 │
│  ┌───────────┐  │                │  ┌───────────┐  │
│  │  Shared   │  │                │  │  Shared   │  │
│  │  Memory   │←─┼────────────────┼─→│  Memory   │  │
│  │  Region   │  │                │  │  Region   │  │
│  └───────────┘  │                │  └───────────┘  │
│                 │                │                 │
├─────────────────┤                ├─────────────────┤
│     Data        │                │     Data        │
├─────────────────┤                ├─────────────────┤
│     Text        │                │     Text        │
└─────────────────┘                └─────────────────┘
         │                                  │
         └──────────┬───────────────────────┘
                    ↓
         ┌─────────────────────┐
         │   Physical Memory   │
         │   (Shared Region)   │
         └─────────────────────┘
`}
      </pre>
    </div>

    {/* POSIX Shared Memory */}
    <h2 className="text-3xl font-bold mt-8">POSIX Shared Memory API</h2>
    <p className="leading-relaxed">
      POSIX provides two ways to implement shared memory: System V shared memory and
      POSIX shared memory objects. The POSIX approach is more modern and portable.
    </p>

    <h3 className="text-2xl font-semibold mt-4">POSIX Shared Memory Functions</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">shm_open()</td>
            <td className="p-3 border">Create or open shared memory object</td>
          </tr>
          <tr>
            <td className="p-3 border">ftruncate()</td>
            <td className="p-3 border">Set size of shared memory object</td>
          </tr>
          <tr>
            <td className="p-3 border">mmap()</td>
            <td className="p-3 border">Map shared memory into address space</td>
          </tr>
          <tr>
            <td className="p-3 border">munmap()</td>
            <td className="p-3 border">Unmap shared memory from address space</td>
          </tr>
          <tr>
            <td className="p-3 border">shm_unlink()</td>
            <td className="p-3 border">Remove shared memory object</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* System V Shared Memory */}
    <h3 className="text-2xl font-semibold mt-6">System V Shared Memory Functions</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">shmget()</td>
            <td className="p-3 border">Create or get shared memory segment</td>
          </tr>
          <tr>
            <td className="p-3 border">shmat()</td>
            <td className="p-3 border">Attach segment to process address space</td>
          </tr>
          <tr>
            <td className="p-3 border">shmdt()</td>
            <td className="p-3 border">Detach segment from process</td>
          </tr>
          <tr>
            <td className="p-3 border">shmctl()</td>
            <td className="p-3 border">Control operations on segment</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Example */}
    <h2 className="text-3xl font-bold mt-8">Example: POSIX Shared Memory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Producer Process
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main() {
    const char *name = "/my_shm";
    const int SIZE = 4096;

    // Create shared memory object
    int shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666);

    // Set size
    ftruncate(shm_fd, SIZE);

    // Map to address space
    void *ptr = mmap(0, SIZE, PROT_WRITE, MAP_SHARED, shm_fd, 0);

    // Write to shared memory
    sprintf(ptr, "Hello from producer!");

    return 0;
}

// Consumer Process
#include <sys/mman.h>
#include <fcntl.h>
#include <stdio.h>

int main() {
    const char *name = "/my_shm";
    const int SIZE = 4096;

    // Open shared memory object
    int shm_fd = shm_open(name, O_RDONLY, 0666);

    // Map to address space
    void *ptr = mmap(0, SIZE, PROT_READ, MAP_SHARED, shm_fd, 0);

    // Read from shared memory
    printf("Received: %s\\n", (char *)ptr);

    // Cleanup
    shm_unlink(name);

    return 0;
}`}
      </pre>
    </div>

    {/* Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Synchronization Requirement</h2>
    <p className="leading-relaxed">
      Shared memory does not provide built-in synchronization. Processes must use
      additional mechanisms to avoid race conditions:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Semaphores:</strong> Control access to shared resources</li>
      <li><strong>Mutexes:</strong> Ensure mutual exclusion</li>
      <li><strong>Condition Variables:</strong> Wait for specific conditions</li>
      <li><strong>Spin Locks:</strong> For short critical sections</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Race Condition Example:

Process A                    Process B
─────────                    ─────────
Read X = 5                   Read X = 5
Compute X + 1 = 6            Compute X + 1 = 6
Write X = 6                  Write X = 6

Result: X = 6 (Should be 7!)

With Synchronization:

Process A                    Process B
─────────                    ─────────
Acquire Lock
Read X = 5                   (Waiting for lock)
Compute X + 1 = 6
Write X = 6
Release Lock
                             Acquire Lock
                             Read X = 6
                             Compute X + 1 = 7
                             Write X = 7
                             Release Lock

Result: X = 7 (Correct!)
`}
      </pre>
    </div>

    {/* Producer-Consumer Problem */}
    <h2 className="text-3xl font-bold mt-8">Producer-Consumer with Shared Memory</h2>
    <p className="leading-relaxed">
      The producer-consumer problem is a classic example of shared memory usage. A bounded
      buffer in shared memory is used to pass data between producer and consumer processes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Shared Buffer Structure:

┌───────────────────────────────────────┐
│  Shared Memory Segment                │
│  ┌─────────────────────────────────┐  │
│  │ in  │ out │ count │             │  │
│  ├─────┴─────┴───────┤             │  │
│  │ Buffer Array                    │  │
│  │ ┌───┬───┬───┬───┬───┬───┬───┐  │  │
│  │ │ 0 │ 1 │ 2 │ 3 │ 4 │...│ N │  │  │
│  │ └───┴───┴───┴───┴───┴───┴───┘  │  │
│  └─────────────────────────────────┘  │
└───────────────────────────────────────┘

Producer:                    Consumer:
─────────                    ─────────
while (count == N)           while (count == 0)
    wait();                      wait();
buffer[in] = item;           item = buffer[out];
in = (in + 1) % N;           out = (out + 1) % N;
count++;                     count--;
`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Fastest IPC method - no data copying between processes</li>
      <li>Efficient for large amounts of data</li>
      <li>After initial setup, no kernel involvement needed</li>
      <li>Supports multiple readers and writers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Requires careful synchronization to avoid race conditions</li>
      <li>Only works between processes on the same machine</li>
      <li>Complex to manage properly</li>
      <li>Security concerns - processes can access shared data</li>
      <li>Harder to debug than message passing</li>
    </ul>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Common Use Cases</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Database systems for shared buffer pools</li>
      <li>High-performance computing applications</li>
      <li>Video processing pipelines</li>
      <li>Real-time systems requiring low latency</li>
      <li>Web servers sharing session data</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Shared memory maps the same physical memory to multiple processes</li>
      <li>It is the fastest IPC mechanism available</li>
      <li>Synchronization must be implemented separately</li>
      <li>POSIX and System V provide different APIs for shared memory</li>
      <li>Proper cleanup is important to avoid resource leaks</li>
      <li>Race conditions are a major concern and must be handled carefully</li>
    </ul>
  </div>
);

export default SharedMemory;
