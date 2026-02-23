import React from 'react';

const MemoryHierarchy: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Memory Hierarchy
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Memory hierarchy is a structure that organizes different types of memory based on
      their speed, cost, and capacity. It exploits the principle of locality to provide
      the illusion of a large, fast, and affordable memory system. The hierarchy ranges
      from small, fast, expensive memory (registers, cache) near the CPU to large, slow,
      cheap storage (hard drives, tape) farther away.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Memory Hierarchy?</h2>
    <p className="leading-relaxed">
      An ideal memory would be infinitely large, infinitely fast, and cost nothing.
      Unfortunately, no single memory technology satisfies all these requirements.
      Fast memory is expensive and small; large memory is slow and cheap.
      Memory hierarchy bridges this gap by using multiple levels of memory.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`The Memory Trade-off Triangle:

                Speed
                  /\\
                 /  \\
                /    \\
               /      \\
              /   ??   \\
             /          \\
            /____________\\
         Cost            Capacity

We cannot have all three optimally!

Solution: Memory Hierarchy
- Use fast memory for frequently accessed data
- Use large memory for bulk storage
- Move data between levels as needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Hierarchy Pyramid</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Hierarchy Structure:

        Fastest, Smallest, Most Expensive
                    /\\
                   /  \\
                  /    \\        Registers
                 / CPU  \\       (< 1 KB, < 1 ns)
                /________\\
               /          \\
              /    L1      \\    L1 Cache
             /    Cache     \\   (32-64 KB, 1-2 ns)
            /______________\\
           /                \\
          /      L2          \\  L2 Cache
         /      Cache         \\ (256 KB-1 MB, 3-10 ns)
        /______________________\\
       /                        \\
      /         L3               \\ L3 Cache
     /         Cache              \\ (4-64 MB, 10-30 ns)
    /______________________________\\
   /                                \\
  /        Main Memory               \\ RAM
 /           (RAM)                    \\ (4-64 GB, 50-100 ns)
/______________________________________\\
|                                      |
|        Secondary Storage             | SSD/HDD
|         (SSD, HDD)                   | (256 GB-8 TB, ms)
|______________________________________|
|                                      |
|        Tertiary Storage              | Tape/Cloud
|      (Tape, Cloud, Archive)          | (Unlimited, seconds-minutes)
|______________________________________|

        Slowest, Largest, Cheapest`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hierarchy Levels Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Typical Size</th>
            <th className="p-3 border">Access Time</th>
            <th className="p-3 border">Cost/GB</th>
            <th className="p-3 border">Technology</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Registers</td>
            <td className="p-3 border">~1 KB</td>
            <td className="p-3 border">&lt; 1 ns</td>
            <td className="p-3 border">Very High</td>
            <td className="p-3 border">Custom CMOS</td>
          </tr>
          <tr>
            <td className="p-3 border">L1 Cache</td>
            <td className="p-3 border">32-64 KB</td>
            <td className="p-3 border">1-2 ns</td>
            <td className="p-3 border">$1000+</td>
            <td className="p-3 border">SRAM</td>
          </tr>
          <tr>
            <td className="p-3 border">L2 Cache</td>
            <td className="p-3 border">256 KB-1 MB</td>
            <td className="p-3 border">3-10 ns</td>
            <td className="p-3 border">$100-500</td>
            <td className="p-3 border">SRAM</td>
          </tr>
          <tr>
            <td className="p-3 border">L3 Cache</td>
            <td className="p-3 border">4-64 MB</td>
            <td className="p-3 border">10-30 ns</td>
            <td className="p-3 border">$50-100</td>
            <td className="p-3 border">SRAM</td>
          </tr>
          <tr>
            <td className="p-3 border">Main Memory</td>
            <td className="p-3 border">8-128 GB</td>
            <td className="p-3 border">50-100 ns</td>
            <td className="p-3 border">$3-10</td>
            <td className="p-3 border">DRAM</td>
          </tr>
          <tr>
            <td className="p-3 border">SSD</td>
            <td className="p-3 border">256 GB-4 TB</td>
            <td className="p-3 border">50-150 us</td>
            <td className="p-3 border">$0.10-0.30</td>
            <td className="p-3 border">Flash NAND</td>
          </tr>
          <tr>
            <td className="p-3 border">HDD</td>
            <td className="p-3 border">1-16 TB</td>
            <td className="p-3 border">5-10 ms</td>
            <td className="p-3 border">$0.02-0.05</td>
            <td className="p-3 border">Magnetic</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Principle of Locality</h2>
    <p className="leading-relaxed">
      The effectiveness of memory hierarchy relies on the principle of locality,
      which states that programs tend to access a relatively small portion of
      their address space at any given time.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Types of Locality:

1. Temporal Locality (Locality in Time)
   - Recently accessed items likely to be accessed again soon
   - Example: Loop variables, frequently called functions

   for (i = 0; i < 1000; i++) {
       sum += arr[i];    // 'sum' accessed 1000 times
   }

2. Spatial Locality (Locality in Space)
   - Items near recently accessed items likely to be accessed soon
   - Example: Array elements, sequential instructions

   for (i = 0; i < 1000; i++) {
       sum += arr[i];    // arr[0], arr[1], arr[2]... accessed sequentially
   }

Why Locality Matters:
- Temporal: Keep recently used data in fast memory
- Spatial: Fetch blocks of data (cache lines) together
- Together they make hierarchy effective

Locality Statistics:
- Typical programs show 90%+ hit rate in cache
- 10% of code executes 90% of the time
- Working set of data usually fits in cache`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Hierarchy Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`How Data Moves Through Hierarchy:

CPU Request for Data:

    CPU needs data at address X
           |
           v
    +------+------+
    | Check L1    |  Hit? -> Data to CPU (fast!)
    | Cache       |
    +------+------+
           | Miss
           v
    +------+------+
    | Check L2    |  Hit? -> Copy to L1, send to CPU
    | Cache       |
    +------+------+
           | Miss
           v
    +------+------+
    | Check L3    |  Hit? -> Copy to L2, L1, send to CPU
    | Cache       |
    +------+------+
           | Miss
           v
    +------+------+
    | Main Memory |  Found? -> Copy to caches, send to CPU
    +------+------+
           | Page Fault
           v
    +------+------+
    | SSD/HDD     |  Load page to memory, then cache
    +------+------+

Data Movement:
- Read: Data moves UP the hierarchy (toward CPU)
- Write: Data moves DOWN (write-back) or both (write-through)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hit and Miss Rates</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Performance Metrics:

Hit Rate (H):
  H = (Number of Hits) / (Total Accesses)

Miss Rate (M):
  M = (Number of Misses) / (Total Accesses) = 1 - H

Average Access Time (AMAT):
  AMAT = Hit_Time + (Miss_Rate x Miss_Penalty)

Example Calculation:
  L1 Cache:
    Hit time = 1 ns
    Miss rate = 5%
    Miss penalty = 10 ns (L2 access)

  AMAT_L1 = 1 + (0.05 x 10) = 1.5 ns

Multi-level AMAT:
  AMAT = H1*T1 + M1*(H2*T2 + M2*(H3*T3 + M3*TM))

Where:
  Hi = Hit rate at level i
  Ti = Access time at level i
  Mi = Miss rate at level i
  TM = Main memory access time

Example with 3 cache levels:
  L1: H=0.95, T=1ns
  L2: H=0.90, T=5ns
  L3: H=0.95, T=20ns
  Memory: T=100ns

  AMAT = 0.95*1 + 0.05*(0.90*5 + 0.10*(0.95*20 + 0.05*100))
       = 0.95 + 0.05*(4.5 + 0.10*(19 + 5))
       = 0.95 + 0.05*(4.5 + 2.4)
       = 0.95 + 0.345
       = 1.295 ns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Transfer Units</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Transfer Units at Each Level:

Level              | Transfer Unit    | Typical Size
-------------------|------------------|-------------
Register <-> ALU   | Word             | 4-8 bytes
L1 <-> CPU         | Word             | 4-8 bytes
L1 <-> L2          | Cache Line       | 64 bytes
L2 <-> L3          | Cache Line       | 64 bytes
L3 <-> Memory      | Cache Line       | 64 bytes
Memory <-> SSD/HDD | Page             | 4 KB
HDD <-> Tape       | File/Block       | Variable

Why Different Sizes?
- Exploit spatial locality (fetch nearby data)
- Amortize access overhead
- Balance bandwidth and latency

Cache Line Example:
Request: Read byte at address 0x1000
Action:  Fetch entire 64-byte line (0x1000 - 0x103F)
Benefit: Next 63 bytes likely needed (spatial locality)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inclusive vs Exclusive Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Inclusion Policies:

1. Inclusive (Intel approach):
   - L2 contains all data in L1
   - L3 contains all data in L2 (and L1)

   L1: [A, B, C]
   L2: [A, B, C, D, E, F]      L2 includes L1
   L3: [A, B, C, D, E, F, G, H] L3 includes L2

   Advantage: Simple coherence (check outer level)
   Disadvantage: Duplication wastes space

2. Exclusive (AMD approach):
   - Data exists in only one cache level
   - Evicted data moves to next level

   L1: [A, B, C]
   L2: [D, E, F]               No overlap
   L3: [G, H, I, J]            No overlap

   Advantage: More total cache capacity
   Disadvantage: Complex coherence

3. Non-Inclusive Non-Exclusive (NINE):
   - No strict requirement
   - Data may or may not be duplicated
   - Most flexible, used in some modern designs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Hierarchy Design Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Block Size:</strong> Larger blocks exploit spatial locality but increase miss penalty</li>
      <li><strong>Cache Size:</strong> Larger caches reduce miss rate but increase hit time and cost</li>
      <li><strong>Associativity:</strong> Higher associativity reduces conflict misses but adds complexity</li>
      <li><strong>Number of Levels:</strong> More levels can reduce AMAT but add complexity</li>
      <li><strong>Write Policy:</strong> Write-through vs write-back affects performance and complexity</li>
      <li><strong>Replacement Policy:</strong> LRU, FIFO, Random affect hit rates differently</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modern Memory Hierarchy Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Intel Core i9 Memory Hierarchy (Example):

Level      | Size        | Latency | Associativity | Line Size
-----------|-------------|---------|---------------|----------
Registers  | ~1 KB       | 0 cycles| N/A           | N/A
L1-D Cache | 32 KB/core  | 4 cycles| 8-way         | 64 B
L1-I Cache | 32 KB/core  | 4 cycles| 8-way         | 64 B
L2 Cache   | 256 KB/core | 12 cycles| 4-way        | 64 B
L3 Cache   | 16 MB shared| 40 cycles| 16-way       | 64 B
DDR4 RAM   | 64 GB       | 200+ cycles| N/A        | 64 B
NVMe SSD   | 2 TB        | 100,000+ cycles| N/A    | 4 KB

Access Time Comparison (approximate):
Registers: 0.3 ns
L1 Cache:  1 ns
L2 Cache:  4 ns
L3 Cache:  12 ns
RAM:       60 ns
SSD:       30,000 ns (30 us)
HDD:       5,000,000 ns (5 ms)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Memory hierarchy bridges the gap between fast/expensive and slow/cheap memory</li>
        <li>Levels: Registers, L1/L2/L3 Cache, Main Memory, Secondary Storage</li>
        <li>Based on principle of locality (temporal and spatial)</li>
        <li>Data moves between levels in blocks (cache lines, pages)</li>
        <li>Performance measured by hit rate, miss rate, and AMAT</li>
        <li>Higher levels are faster, smaller, and more expensive</li>
        <li>Effective hierarchy provides illusion of large, fast memory</li>
        <li>Design trade-offs involve size, speed, cost, and complexity</li>
      </ul>
    </div>
  </div>
);

export default MemoryHierarchy;
