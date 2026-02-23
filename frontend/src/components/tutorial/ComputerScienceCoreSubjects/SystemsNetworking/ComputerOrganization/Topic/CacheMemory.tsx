import React from 'react';

const CacheMemory: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cache Memory Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cache memory is a small, fast memory located between the CPU and main memory that
      stores copies of frequently accessed data. It exploits the principle of locality
      to reduce average memory access time. When the CPU needs data, it first checks
      the cache; if found (cache hit), access is fast, otherwise (cache miss), data
      is fetched from main memory and stored in the cache.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Cache Memory?</h2>
    <p className="leading-relaxed">
      There is a significant speed gap between CPU and main memory. CPUs operate at
      GHz frequencies while DRAM has access times of 50-100 ns. Without cache, the CPU
      would spend most of its time waiting for memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`The Processor-Memory Speed Gap:

Year  | CPU Speed  | DRAM Speed | Gap
------|------------|------------|--------
1980  | 10 MHz     | 100 ns     | ~10x
1990  | 100 MHz    | 80 ns      | ~125x
2000  | 1 GHz      | 60 ns      | ~170x
2010  | 3 GHz      | 50 ns      | ~450x
2020  | 5 GHz      | 50 ns      | ~750x

Without cache:
- CPU clock cycle: 0.2 ns (5 GHz)
- Memory access: 50 ns
- Memory access = 250 CPU cycles wasted!

With cache (90% hit rate):
- Cache hit: 1-4 cycles
- Effective access time = 0.9 * 4 + 0.1 * 250 = 28.6 cycles
- Major improvement!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Operation Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Memory Position:

    +-------+     +-------+     +-------------+
    |  CPU  |<--->| Cache |<--->| Main Memory |
    +-------+     +-------+     +-------------+
                  (Fast,Small)  (Slow,Large)

CPU Memory Request Flow:

    CPU requests address X
            |
            v
    +-------+-------+
    | Check Cache   |
    | for address X |
    +-------+-------+
            |
       +----+----+
       |         |
       v         v
    HIT        MISS
    |            |
    v            v
 Return      Fetch from
 data to     main memory
 CPU (fast)       |
                  v
              Store in
              cache
                  |
                  v
              Return to
              CPU (slow)

Cache Terminology:
- Hit: Data found in cache
- Miss: Data not in cache
- Hit Rate: % of accesses found in cache
- Miss Rate: % of accesses not in cache (1 - Hit Rate)
- Hit Time: Time to access cache
- Miss Penalty: Time to fetch from memory on miss`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Structure</h2>
    <p className="leading-relaxed">
      Cache memory is organized into cache lines (or cache blocks). Each line contains
      a block of data from main memory along with a tag indicating which memory address
      the data came from, and status bits.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Line Structure:

+-------+-----+------------------+
| Valid | Tag | Data Block       |
| (1bit)|(bits)| (64 bytes typ.) |
+-------+-----+------------------+

Components:
1. Valid Bit: Indicates if line contains valid data
2. Tag: Upper bits of address (identifies which block)
3. Data Block: Actual cached data (cache line)
4. Dirty Bit: (for write-back) Indicates if modified

Cache Organization:
+------+-------+-----+------------------------------+
|Line 0| Valid | Tag |    Data (64 bytes)           |
+------+-------+-----+------------------------------+
|Line 1| Valid | Tag |    Data (64 bytes)           |
+------+-------+-----+------------------------------+
|Line 2| Valid | Tag |    Data (64 bytes)           |
+------+-------+-----+------------------------------+
|  .   |   .   |  .  |           .                  |
|  .   |   .   |  .  |           .                  |
+------+-------+-----+------------------------------+
|Line n| Valid | Tag |    Data (64 bytes)           |
+------+-------+-----+------------------------------+

Example: 32 KB cache with 64-byte lines
- Total lines = 32 KB / 64 B = 512 lines
- Each line: 1 valid + tag bits + 64 bytes data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Division</h2>
    <p className="leading-relaxed">
      The memory address is divided into fields that determine where to look in
      the cache and how to identify the data.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Address Fields:

|<-------- Memory Address -------->|
+-------------+--------+-----------+
|    Tag      | Index  | Offset    |
+-------------+--------+-----------+
     |            |          |
     |            |          +-> Selects byte within block
     |            +------------> Selects cache line/set
     +-------------------------> Identifies memory block

Example: 32-bit address, 32 KB cache, 64-byte lines, direct-mapped

Address: 32 bits
Offset:  log2(64) = 6 bits (byte within 64-byte line)
Index:   log2(512) = 9 bits (which of 512 lines)
Tag:     32 - 6 - 9 = 17 bits (remaining bits)

|<-------- 32 bits -------->|
+--------+--------+---------+
|  Tag   | Index  | Offset  |
| 17 bits| 9 bits | 6 bits  |
+--------+--------+---------+

Address 0x12345678:
Binary: 0001 0010 0011 0100 0101 0110 0111 1000
Tag:    0001 0010 0011 0100 0 = 0x091A0
Index:  10 0101 011 = 299
Offset: 0 0111 1000 = 56`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Hit and Miss</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Lookup Process:

1. Extract index and tag from address
2. Use index to locate cache line(s)
3. Compare tag with stored tag(s)
4. Check valid bit

                Address
                   |
        +----------+----------+
        |          |          |
       Tag       Index     Offset
        |          |          |
        |          v          |
        |    +----------+     |
        |    | Index to |     |
        |    | Line(s)  |     |
        |    +----+-----+     |
        |         |           |
        |         v           |
        |    +----------+     |
        +--->| Compare  |     |
             | Tag      |     |
             +----+-----+     |
                  |           |
            +-----+-----+     |
            |           |     |
           HIT        MISS    |
            |           |     |
            v           |     |
    +-----------+       |     |
    | Select    |<------+-----+
    | byte via  |
    | offset    |
    +-----------+
         |
         v
       Data

Hit: Tag matches AND Valid=1
Miss: Tag doesn't match OR Valid=0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Cache Misses</h2>
    <p className="leading-relaxed">
      Cache misses are categorized into three types, often called the "3 Cs":
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`The Three Cs of Cache Misses:

1. Compulsory Misses (Cold Misses)
   - First access to a block
   - Would occur even with infinite cache
   - Cannot be avoided
   - Solution: Prefetching

2. Capacity Misses
   - Cache cannot hold all needed blocks
   - Working set exceeds cache size
   - Solution: Increase cache size

3. Conflict Misses (Collision Misses)
   - Multiple blocks map to same location
   - Occur due to limited associativity
   - Would not occur with fully associative cache
   - Solution: Increase associativity

Example:
Cache: 4 lines, direct-mapped
Access sequence: A, B, C, D, E, A (E maps to same line as A)

Access A: Compulsory miss, load A
Access B: Compulsory miss, load B
Access C: Compulsory miss, load C
Access D: Compulsory miss, load D
Access E: Compulsory miss, load E (evicts A if same index)
Access A: Conflict miss! (A was evicted by E)

Miss Classification:
             | Infinite cache | Finite, fully assoc | Finite, limited assoc
-------------|----------------|---------------------|----------------------
Compulsory   |       X        |          X          |          X
Capacity     |                |          X          |          X
Conflict     |                |                     |          X`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Levels</h2>
    <p className="leading-relaxed">
      Modern processors use multiple levels of cache (L1, L2, L3) to balance
      speed, size, and cost.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Multi-Level Cache Hierarchy:

    +-------+
    |  CPU  |
    +---+---+
        |
    +---+---+     L1: Fastest, smallest
    |  L1   |     - 32-64 KB per core
    | Cache |     - 1-4 cycle latency
    +---+---+     - Split I-cache/D-cache
        |
    +---+---+     L2: Larger, slower
    |  L2   |     - 256 KB - 1 MB per core
    | Cache |     - 10-20 cycle latency
    +---+---+     - Unified (instructions + data)
        |
    +---+---+     L3: Largest on-chip cache
    |  L3   |     - 4-64 MB shared
    | Cache |     - 30-50 cycle latency
    +---+---+     - Shared among all cores
        |
    +---+---+
    | Main  |     Main Memory
    |Memory |     - 50-100 ns latency
    +-------+

Typical Configuration (Modern Desktop CPU):
Level | Size        | Latency  | Associativity
------|-------------|----------|---------------
L1-I  | 32 KB/core  | 4 cycles | 8-way
L1-D  | 32 KB/core  | 4 cycles | 8-way
L2    | 256 KB/core | 12 cycles| 4-8 way
L3    | 16 MB shared| 40 cycles| 16-way`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Performance Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Performance Calculations:

Average Memory Access Time (AMAT):
AMAT = Hit_Time + Miss_Rate * Miss_Penalty

Multi-level AMAT:
AMAT = L1_hit_time + L1_miss_rate * (
         L2_hit_time + L2_miss_rate * (
           L3_hit_time + L3_miss_rate * Memory_time))

Example:
L1: Hit time = 1 cycle, Miss rate = 5%
L2: Hit time = 10 cycles, Miss rate = 20%
Memory: Access time = 200 cycles

AMAT = 1 + 0.05 * (10 + 0.20 * 200)
     = 1 + 0.05 * (10 + 40)
     = 1 + 0.05 * 50
     = 1 + 2.5
     = 3.5 cycles

Without cache: 200 cycles
With cache: 3.5 cycles
Speedup: 57x!

CPU Time with Memory Stalls:
CPU_Time = (CPU_cycles + Memory_stall_cycles) * Cycle_time

Memory_stall_cycles = Memory_accesses * Miss_rate * Miss_penalty
                    = Instructions * Misses/Instruction * Miss_penalty`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Design Parameters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Effect of Increase</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cache Size</td>
            <td className="p-3 border">Lower miss rate</td>
            <td className="p-3 border">Higher hit time, cost, power</td>
          </tr>
          <tr>
            <td className="p-3 border">Block Size</td>
            <td className="p-3 border">Better spatial locality</td>
            <td className="p-3 border">Higher miss penalty, pollution</td>
          </tr>
          <tr>
            <td className="p-3 border">Associativity</td>
            <td className="p-3 border">Fewer conflict misses</td>
            <td className="p-3 border">Higher hit time, complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">Number of Levels</td>
            <td className="p-3 border">Better filtering</td>
            <td className="p-3 border">Design complexity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Cache bridges the CPU-memory speed gap using fast SRAM</li>
        <li>Exploits locality: temporal (recent) and spatial (nearby)</li>
        <li>Cache line includes valid bit, tag, and data block</li>
        <li>Address divided into tag, index, and offset fields</li>
        <li>Three types of misses: compulsory, capacity, conflict</li>
        <li>Modern CPUs use multiple cache levels (L1, L2, L3)</li>
        <li>Performance measured by hit rate and AMAT</li>
        <li>Design involves trade-offs between size, speed, and complexity</li>
      </ul>
    </div>
  </div>
);

export default CacheMemory;
