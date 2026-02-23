import React from 'react';

const Buffering: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Buffering in I/O Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Buffering is a technique where data is temporarily stored in memory (a buffer) during
      transfer between two devices or between a device and an application. Buffers help
      handle speed mismatches between producers and consumers of data, and improve overall
      I/O efficiency.
    </p>

    {/* Why Buffering */}
    <h2 className="text-3xl font-bold mt-8">Why Buffering is Needed</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Speed Mismatch Problem:

Without Buffering:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Fast Producer              Slow Consumer                             │
│   (100 MB/s)                 (10 MB/s)                                 │
│                                                                         │
│   ┌─────────┐                ┌─────────┐                               │
│   │ Network │  ─────────────►│   CPU   │                               │
│   │  Card   │   Data flow    │ Process │                               │
│   └─────────┘                └─────────┘                               │
│                                                                         │
│   Problem: Fast producer must wait for slow consumer!                  │
│   Network card can't slow down incoming packets.                       │
│   Result: Data loss, retransmissions, or producer blocks.              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

With Buffering:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Fast Producer        Buffer           Slow Consumer                  │
│   (100 MB/s)          (Memory)          (10 MB/s)                      │
│                                                                         │
│   ┌─────────┐      ┌───────────┐      ┌─────────┐                      │
│   │ Network │ ────►│  Buffer   │─────►│   CPU   │                      │
│   │  Card   │ Fast │  [Data]   │ Slow │ Process │                      │
│   └─────────┘      └───────────┘      └─────────┘                      │
│                                                                         │
│   Solution: Buffer absorbs the speed difference!                       │
│   Producer fills buffer at its speed.                                  │
│   Consumer reads buffer at its speed.                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Reasons for Buffering */}
    <h2 className="text-3xl font-bold mt-8">Reasons for Buffering</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Speed Mismatch:</strong> Buffer data when producer and consumer operate
        at different speeds.
      </li>
      <li>
        <strong>Transfer Size Mismatch:</strong> Accumulate small writes into larger
        blocks for efficient I/O.
      </li>
      <li>
        <strong>Decoupling:</strong> Allow producer and consumer to operate independently
        without waiting for each other.
      </li>
      <li>
        <strong>Copy Semantics:</strong> Preserve data snapshot at time of system call
        even if user modifies the buffer.
      </li>
    </ul>

    {/* Single Buffering */}
    <h2 className="text-3xl font-bold mt-8">1. Single Buffering</h2>
    <p className="leading-relaxed">
      One buffer is used for data transfer. While the buffer is being filled, the consumer
      must wait, and vice versa.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Single Buffering Operation:

Phase 1: Device fills buffer
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   Device               Buffer                  Process                 │
│   ┌─────────┐         ┌──────────┐            ┌─────────┐             │
│   │ Reading │ ═══════►│ [Data    │            │ WAITING │             │
│   │ Data... │         │  filling]│            │         │             │
│   └─────────┘         └──────────┘            └─────────┘             │
│                                                                        │
│   Device: Active (filling buffer)                                      │
│   Process: Blocked (waiting for data)                                  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Phase 2: Process reads buffer
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   Device               Buffer                  Process                 │
│   ┌─────────┐         ┌──────────┐            ┌─────────┐             │
│   │ WAITING │         │ [Data]   │═══════════►│ Reading │             │
│   │         │         │          │            │ Data... │             │
│   └─────────┘         └──────────┘            └─────────┘             │
│                                                                        │
│   Device: Blocked (can't fill until buffer is empty)                  │
│   Process: Active (processing data)                                    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Timeline:
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│  Device  │          │  Device  │          │  Device  │          │
│  Fills   │ Process  │  Fills   │ Process  │  Fills   │ Process  │
│  Buffer  │  Reads   │  Buffer  │  Reads   │  Buffer  │  Reads   │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│    T     │    C     │    T     │    C     │    T     │    C     │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
     │          │
     │          └── Process computation time (C)
     └───────────── Transfer time (T)

Total time per block: T + C (sequential, no overlap)
`}
      </pre>
    </div>

    {/* Double Buffering */}
    <h2 className="text-3xl font-bold mt-8">2. Double Buffering</h2>
    <p className="leading-relaxed">
      Two buffers are used alternately. While one buffer is being filled, the other can
      be emptied. This allows overlap between I/O and processing.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Double Buffering Operation:

┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   Device           Buffer A        Buffer B         Process           │
│   ┌─────────┐     ┌──────────┐   ┌──────────┐     ┌─────────┐        │
│   │ Reading │═══►│ [Filling]│   │ [Data]   │════►│ Reading │        │
│   │ Data... │     │          │   │          │     │ Data... │        │
│   └─────────┘     └──────────┘   └──────────┘     └─────────┘        │
│                                                                        │
│   Device fills Buffer A while Process reads Buffer B simultaneously!  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Next phase: Swap buffers
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│   Device           Buffer A        Buffer B         Process           │
│   ┌─────────┐     ┌──────────┐   ┌──────────┐     ┌─────────┐        │
│   │ Reading │════►│ [Data]   │   │ [Filling]│◄═══│ Reading │        │
│   │ Data... │     │          │   │          │     │ Data... │        │
│   └─────────┘     └──────────┘   └──────────┘     └─────────┘        │
│                        │                               │               │
│                        └─────────◄─────────────────────┘               │
│                        (Now process reads A, device fills B)           │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

Timeline Comparison:

Single Buffering:
┌────────┬────────┬────────┬────────┬────────┬────────┐
│   T    │   C    │   T    │   C    │   T    │   C    │
│ (Fill) │ (Read) │ (Fill) │ (Read) │ (Fill) │ (Read) │
└────────┴────────┴────────┴────────┴────────┴────────┘
Total: 3T + 3C (sequential)

Double Buffering:
┌────────┬────────┬────────┬────────┐
│   T    │   T    │   T    │   C    │
│ (Fill) │ (Fill) │ (Fill) │ (Read) │
├────────┼────────┼────────┼────────┤
│        │   C    │   C    │   C    │
│        │ (Read) │ (Read) │ (last) │
└────────┴────────┴────────┴────────┘
Total: max(T, C) × N + overhead (overlapped!)

If T = C: Double buffering takes half the time!
`}
      </pre>
    </div>

    {/* Circular Buffering */}
    <h2 className="text-3xl font-bold mt-8">3. Circular Buffering (Ring Buffer)</h2>
    <p className="leading-relaxed">
      Multiple buffers arranged in a circular queue. This provides more flexibility and
      can handle bursty I/O patterns better than double buffering.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Circular Buffer Structure:

┌─────────────────────────────────────────────────────────────────────────┐
│                          Circular Buffer (N slots)                      │
│                                                                         │
│                            ┌───────┐                                    │
│                         ┌──┤ Buf 0 ├──┐                                │
│                        │  └───────┘   │                                │
│                 ┌──────┴──┐       ┌───┴─────┐                          │
│                 │  Buf 5  │       │  Buf 1  │                          │
│                 └────┬────┘       └────┬────┘                          │
│                      │                 │                               │
│                 ┌────┴────┐       ┌────┴────┐                          │
│                 │  Buf 4  │       │  Buf 2  │                          │
│                 └────┬────┘       └────┬────┘                          │
│                      │  ┌───────┐     │                                │
│                      └──┤ Buf 3 ├─────┘                                │
│                         └───────┘                                      │
│                                                                         │
│   Producer (Device)              Consumer (Process)                    │
│        │                              │                                │
│        ▼                              ▼                                │
│    Write Pointer                  Read Pointer                         │
│        │                              │                                │
│        └──────────► │ ◄───────────────┘                                │
│                                                                         │
│   ┌───────┬───────┬───────┬───────┬───────┬───────┐                    │
│   │ Buf 0 │ Buf 1 │ Buf 2 │ Buf 3 │ Buf 4 │ Buf 5 │                    │
│   │ [Full]│ [Full]│ [Full]│[Empty]│[Empty]│[Empty]│                    │
│   └───────┴───────┴───────┴───────┴───────┴───────┘                    │
│       ▲                       ▲                                        │
│       │                       │                                        │
│    Read Ptr                Write Ptr                                   │
│                                                                         │
│   Full buffers: 3 (Buf 0, 1, 2)                                        │
│   Empty buffers: 3 (Buf 3, 4, 5)                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Operation:
1. Producer writes to buffer at Write Pointer, advances pointer
2. Consumer reads from buffer at Read Pointer, advances pointer
3. Pointers wrap around when reaching the end
4. If Write catches up to Read: buffer full, producer waits
5. If Read catches up to Write: buffer empty, consumer waits
`}
      </pre>
    </div>

    {/* Circular Buffer Implementation */}
    <h2 className="text-3xl font-bold mt-8">Circular Buffer Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
// Circular Buffer Implementation (Pseudocode)

#define BUFFER_SIZE 8

typedef struct {
    char data[BUFFER_SIZE];
    int read_ptr;    // Where to read next
    int write_ptr;   // Where to write next
    int count;       // Number of items in buffer
    semaphore empty; // Counts empty slots
    semaphore full;  // Counts full slots
    mutex lock;      // Protects pointers
} circular_buffer;

void init(circular_buffer *cb) {
    cb->read_ptr = 0;
    cb->write_ptr = 0;
    cb->count = 0;
    init_semaphore(&cb->empty, BUFFER_SIZE);  // All slots empty
    init_semaphore(&cb->full, 0);             // No slots full
}

// Producer: Add data to buffer
void produce(circular_buffer *cb, char item) {
    wait(&cb->empty);           // Wait for empty slot
    lock(&cb->lock);

    cb->data[cb->write_ptr] = item;
    cb->write_ptr = (cb->write_ptr + 1) % BUFFER_SIZE;  // Wrap around
    cb->count++;

    unlock(&cb->lock);
    signal(&cb->full);          // Signal that slot is now full
}

// Consumer: Remove data from buffer
char consume(circular_buffer *cb) {
    wait(&cb->full);            // Wait for full slot
    lock(&cb->lock);

    char item = cb->data[cb->read_ptr];
    cb->read_ptr = (cb->read_ptr + 1) % BUFFER_SIZE;    // Wrap around
    cb->count--;

    unlock(&cb->lock);
    signal(&cb->empty);         // Signal that slot is now empty
    return item;
}

Example operation:
Initial:  [_][_][_][_][_][_][_][_]  R=0, W=0, count=0
                 ^R  ^W

Produce A: [A][_][_][_][_][_][_][_]  R=0, W=1, count=1
Produce B: [A][B][_][_][_][_][_][_]  R=0, W=2, count=2
Produce C: [A][B][C][_][_][_][_][_]  R=0, W=3, count=3
Consume:   [_][B][C][_][_][_][_][_]  R=1, W=3, count=2  -> returns A
Produce D: [_][B][C][D][_][_][_][_]  R=1, W=4, count=3
Consume:   [_][_][C][D][_][_][_][_]  R=2, W=4, count=2  -> returns B
`}
      </pre>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Buffering Techniques Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Single Buffer</th>
            <th className="p-3 border">Double Buffer</th>
            <th className="p-3 border">Circular Buffer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Usage</td>
            <td className="p-3 border">Lowest (1 buffer)</td>
            <td className="p-3 border">Medium (2 buffers)</td>
            <td className="p-3 border">Highest (N buffers)</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Overlap</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Full</td>
            <td className="p-3 border">Full</td>
          </tr>
          <tr>
            <td className="p-3 border">Burst Handling</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Excellent</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Simple I/O</td>
            <td className="p-3 border">Audio, video</td>
            <td className="p-3 border">Network, streaming</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Buffering Examples</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Video Streaming:</strong> Large circular buffer (several seconds) to handle
        network jitter and bandwidth variations.
      </li>
      <li>
        <strong>Audio Playback:</strong> Double buffering to ensure glitch-free audio while
        loading next chunk.
      </li>
      <li>
        <strong>Keyboard Input:</strong> Small circular buffer (type-ahead buffer) so keystrokes
        are not lost when CPU is busy.
      </li>
      <li>
        <strong>Disk I/O:</strong> Block buffers in the buffer cache to reduce disk accesses.
      </li>
      <li>
        <strong>Network Packets:</strong> Ring buffers in network drivers (e.g., NIC receive ring).
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Buffering handles speed mismatches between producer and consumer</li>
      <li>Single buffering is simple but does not allow I/O and processing overlap</li>
      <li>Double buffering enables overlap: one buffer fills while another is processed</li>
      <li>Circular buffers provide flexibility for bursty, streaming workloads</li>
      <li>Buffer size affects performance: too small causes blocking, too large wastes memory</li>
      <li>Synchronization (semaphores, locks) is needed for concurrent access</li>
      <li>Modern systems use buffering extensively in file systems, networking, and multimedia</li>
    </ul>
  </div>
);

export default Buffering;
