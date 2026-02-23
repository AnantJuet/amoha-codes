import React from 'react';

const Caching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Caching in I/O Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Caching is a technique where frequently accessed data is stored in faster storage
      (cache) to reduce access time for future requests. In I/O systems, caching bridges
      the speed gap between fast CPU/memory and slow I/O devices, dramatically improving
      performance.
    </p>

    {/* Cache Concept */}
    <h2 className="text-3xl font-bold mt-8">The Caching Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Memory/Storage Hierarchy with Caching:

                    ┌───────────────────┐
                    │    CPU Registers  │  Fastest
                    │    (few bytes)    │  ~1 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    L1 Cache       │
                    │    (32-64 KB)     │  ~1-4 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    L2 Cache       │
                    │    (256-512 KB)   │  ~10-20 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    L3 Cache       │
                    │    (8-64 MB)      │  ~30-50 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    Main Memory    │
                    │    (RAM - GBs)    │  ~100 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    Disk Cache     │◄─── I/O Cache
                    │    (Buffer Cache) │     (in RAM)
                    │    (MBs to GBs)   │     ~100 ns
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    SSD            │
                    │                   │  ~100 μs (100,000 ns)
                    └─────────┬─────────┘
                              │
                    ┌─────────▼─────────┐
                    │    Hard Disk      │  Slowest
                    │    (TBs)          │  ~10 ms (10,000,000 ns)
                    └───────────────────┘

Each level caches data from the level below!
`}
      </pre>
    </div>

    {/* Cache vs Buffer */}
    <h2 className="text-3xl font-bold mt-8">Cache vs Buffer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Cache</th>
            <th className="p-3 border">Buffer</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Purpose</td>
            <td className="p-3 border">Speed up repeated access to same data</td>
            <td className="p-3 border">Handle speed mismatch, data in transit</td>
          </tr>
          <tr>
            <td className="p-3 border">Data</td>
            <td className="p-3 border">Copy of existing data</td>
            <td className="p-3 border">May be only copy of data</td>
          </tr>
          <tr>
            <td className="p-3 border">Retention</td>
            <td className="p-3 border">Kept as long as useful</td>
            <td className="p-3 border">Temporary, until consumed</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Pattern</td>
            <td className="p-3 border">Multiple accesses expected</td>
            <td className="p-3 border">Usually single producer/consumer</td>
          </tr>
          <tr>
            <td className="p-3 border">Example</td>
            <td className="p-3 border">Disk block cache, web page cache</td>
            <td className="p-3 border">Keyboard buffer, print buffer</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Disk Cache / Buffer Cache */}
    <h2 className="text-3xl font-bold mt-8">Disk Cache (Buffer Cache)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Disk Cache Operation:

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Application requests block 42                                        │
│         │                                                               │
│         ▼                                                               │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                      Disk Cache (in RAM)                        │  │
│   │                                                                 │  │
│   │   ┌───────┬───────┬───────┬───────┬───────┬───────┬───────┐   │  │
│   │   │Blk 10 │Blk 42 │Blk 7  │Blk 99 │Blk 15 │Blk 31 │ ...   │   │  │
│   │   │       │  ◄────┼───────┼───────┼───────┼───────┼───────┤   │  │
│   │   └───────┴───────┴───────┴───────┴───────┴───────┴───────┘   │  │
│   │                                                                 │  │
│   │   Is block 42 in cache?                                        │  │
│   │                                                                 │  │
│   │   YES (Cache Hit):                                             │  │
│   │   ┌────────────────────────────────────────────────────────┐   │  │
│   │   │  Return data directly from cache                       │   │  │
│   │   │  Time: ~100 ns (RAM speed)                             │   │  │
│   │   │  NO disk access needed!                                │   │  │
│   │   └────────────────────────────────────────────────────────┘   │  │
│   │                                                                 │  │
│   │   NO (Cache Miss):                                             │  │
│   │   ┌────────────────────────────────────────────────────────┐   │  │
│   │   │  1. Read block 42 from disk                            │   │  │
│   │   │  2. Store copy in cache (evict old block if full)      │   │  │
│   │   │  3. Return data to application                         │   │  │
│   │   │  Time: ~10 ms (disk seek + transfer)                   │   │  │
│   │   └────────────────────────────────────────────────────────┘   │  │
│   │                                                                 │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│   Performance Impact:                                                   │
│   • Cache hit: 100 ns                                                  │
│   • Cache miss: 10,000,000 ns (10 ms)                                  │
│   • Speed difference: 100,000x faster on cache hit!                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Cache Replacement Policies */}
    <h2 className="text-3xl font-bold mt-8">Cache Replacement Policies</h2>
    <p className="leading-relaxed">
      When the cache is full and a new block must be brought in, a replacement policy
      determines which existing block to evict.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Policy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LRU (Least Recently Used)</td>
            <td className="p-3 border">Evict block not accessed longest</td>
            <td className="p-3 border">Good temporal locality</td>
            <td className="p-3 border">Overhead to track access time</td>
          </tr>
          <tr>
            <td className="p-3 border">LFU (Least Frequently Used)</td>
            <td className="p-3 border">Evict block with fewest accesses</td>
            <td className="p-3 border">Keeps hot data</td>
            <td className="p-3 border">Old popular data never evicted</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO (First In, First Out)</td>
            <td className="p-3 border">Evict oldest block</td>
            <td className="p-3 border">Simple to implement</td>
            <td className="p-3 border">May evict frequently used blocks</td>
          </tr>
          <tr>
            <td className="p-3 border">Clock (Second Chance)</td>
            <td className="p-3 border">FIFO with reference bit</td>
            <td className="p-3 border">Approximates LRU, efficient</td>
            <td className="p-3 border">Not as accurate as true LRU</td>
          </tr>
          <tr>
            <td className="p-3 border">Random</td>
            <td className="p-3 border">Evict random block</td>
            <td className="p-3 border">Very simple, no overhead</td>
            <td className="p-3 border">Unpredictable, may evict hot data</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Write Policies */}
    <h2 className="text-3xl font-bold mt-8">Write Policies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Cache Write Policies:

1. WRITE-THROUGH:
───────────────────────────────────────────────────────────────────────
   Every write updates both cache AND disk immediately.

   Application writes block
         │
         ▼
   ┌─────────────┐
   │   Cache     │◄── Update cache
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │    Disk     │◄── Also write to disk immediately
   └─────────────┘

   + Data always consistent (cache = disk)
   + Safe on crash (data on disk)
   - Slow writes (must wait for disk)


2. WRITE-BACK (WRITE-BEHIND):
───────────────────────────────────────────────────────────────────────
   Write only to cache; write to disk later (when evicted or flushed).

   Application writes block
         │
         ▼
   ┌─────────────┐
   │   Cache     │◄── Update cache, mark as "dirty"
   │  [Dirty Bit]│
   └─────────────┘
         │
         │ (Later, when evicted or flushed)
         ▼
   ┌─────────────┐
   │    Disk     │◄── Write dirty block to disk
   └─────────────┘

   + Fast writes (return immediately after cache update)
   + Multiple writes to same block only need one disk write
   - Risk of data loss on crash (dirty data not yet on disk)
   - Must track dirty blocks


3. WRITE-ALLOCATE vs NO-WRITE-ALLOCATE:
───────────────────────────────────────────────────────────────────────
   On a write miss (block not in cache):

   Write-Allocate: Load block into cache, then write
   No-Write-Allocate: Write directly to disk, don't load into cache

   Common combinations:
   • Write-back + Write-allocate (most common for disk cache)
   • Write-through + No-write-allocate
`}
      </pre>
    </div>

    {/* Cache Coherency */}
    <h2 className="text-3xl font-bold mt-8">Cache Coherency</h2>
    <p className="leading-relaxed">
      Cache coherency is the problem of keeping multiple copies of the same data consistent.
      This is critical in multi-processor systems and distributed systems.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Cache Coherency Problem:

Multi-CPU System with Per-CPU Caches:

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   CPU 0                           CPU 1                                │
│   ┌─────────┐                     ┌─────────┐                          │
│   │ X = 10  │                     │ X = 10  │  Both caches have X = 10 │
│   │ (Cache) │                     │ (Cache) │                          │
│   └────┬────┘                     └────┬────┘                          │
│        │                               │                               │
│        └───────────┬───────────────────┘                               │
│                    │                                                   │
│                    ▼                                                   │
│              ┌───────────┐                                             │
│              │  Memory   │  X = 10                                     │
│              │           │                                             │
│              └───────────┘                                             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

CPU 0 writes X = 20:
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   CPU 0                           CPU 1                                │
│   ┌─────────┐                     ┌─────────┐                          │
│   │ X = 20  │ ← Updated           │ X = 10  │ ← STALE! Inconsistent!   │
│   │ (Cache) │                     │ (Cache) │                          │
│   └────┬────┘                     └────┬────┘                          │
│        │                               │                               │
│        └───────────┬───────────────────┘                               │
│                    │                                                   │
│                    ▼                                                   │
│              ┌───────────┐                                             │
│              │  Memory   │  X = 10 or 20?                              │
│              └───────────┘                                             │
│                                                                         │
│   CPU 1 reads X: Gets stale value 10 instead of correct value 20!     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Solutions (Hardware Cache Coherency Protocols):

1. SNOOPING:
   • All caches monitor (snoop) the shared bus
   • When one cache writes, others invalidate or update their copies
   • Examples: MESI, MOESI protocols

2. DIRECTORY-BASED:
   • Central directory tracks which caches have which blocks
   • On write, directory sends invalidations to relevant caches
   • Scales better than snooping for many CPUs

MESI Protocol States:
┌────────────────────────────────────────────────────────────────────┐
│  M (Modified):  Only this cache has it, dirty (different from mem) │
│  E (Exclusive): Only this cache has it, clean (same as memory)    │
│  S (Shared):    Multiple caches may have it, clean                │
│  I (Invalid):   This cache's copy is not valid                    │
└────────────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* I/O Cache Coherency */}
    <h2 className="text-3xl font-bold mt-8">I/O Cache Coherency Issues</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
DMA and Cache Coherency:

Problem: DMA transfers bypass CPU cache!

Scenario 1: DMA Read (Device → Memory)
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   1. CPU has block X in cache (X = 10)                                 │
│   2. DMA transfers new data to memory for block X (X = 20)             │
│   3. CPU reads X from cache, gets stale value 10!                      │
│                                                                         │
│   ┌─────────┐                     ┌─────────────┐                      │
│   │  CPU    │                     │   Device    │                      │
│   │ Cache   │                     │   (DMA)     │                      │
│   │ X = 10  │                     └──────┬──────┘                      │
│   └────┬────┘                            │                             │
│        │                                 │                             │
│        │      ┌─────────────┐            │                             │
│        └─────►│   Memory    │◄───────────┘                             │
│               │   X = 20    │  DMA writes directly to memory           │
│               └─────────────┘                                          │
│                                                                         │
│   Solution: Invalidate cache before DMA read completes                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Scenario 2: DMA Write (Memory → Device)
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   1. CPU writes X = 30 to cache (write-back, not yet in memory)        │
│   2. DMA reads block X from memory, gets old value 20!                 │
│   3. Device receives stale data!                                       │
│                                                                         │
│   ┌─────────┐                     ┌─────────────┐                      │
│   │  CPU    │                     │   Device    │                      │
│   │ Cache   │                     │   (DMA)     │                      │
│   │ X = 30  │ (dirty)             └──────┬──────┘                      │
│   └────┬────┘                            ▲                             │
│        │                                 │                             │
│        │      ┌─────────────┐            │                             │
│        └─────►│   Memory    │────────────┘                             │
│               │   X = 20    │  DMA reads old value from memory         │
│               └─────────────┘                                          │
│                                                                         │
│   Solution: Flush (write back) cache before DMA write                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Modern Solutions:
• Cache-coherent DMA: Hardware ensures DMA and cache are coherent
• Software management: OS explicitly flushes/invalidates cache
• DMA-coherent memory regions: Memory marked as uncached for DMA
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Caching stores frequently accessed data in faster storage to reduce access time</li>
      <li>Disk cache (buffer cache) can speed up disk access by 100,000x on cache hits</li>
      <li>Replacement policies (LRU, FIFO, Clock) determine which blocks to evict</li>
      <li>Write-through ensures consistency but is slow; write-back is fast but risks data loss</li>
      <li>Cache coherency ensures multiple copies of data remain consistent</li>
      <li>DMA operations can bypass cache, requiring explicit cache management</li>
      <li>MESI and similar protocols handle coherency in multi-processor systems</li>
    </ul>
  </div>
);

export default Caching;
