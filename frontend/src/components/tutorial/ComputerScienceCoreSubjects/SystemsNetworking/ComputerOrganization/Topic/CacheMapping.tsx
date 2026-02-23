import React from 'react';

const CacheMapping: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cache Mapping Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cache mapping determines how memory blocks are placed in cache. Since cache is
      much smaller than main memory, multiple memory blocks must share cache locations.
      The mapping technique defines the relationship between memory addresses and cache
      locations, affecting hit rate, complexity, and access time.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Mapping Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Mapping Challenge:

Main Memory: 2^32 bytes (4 GB with 32-bit addresses)
Cache: 32 KB = 32,768 bytes
Block size: 64 bytes

Memory blocks: 4 GB / 64 = 64 million blocks
Cache lines: 32 KB / 64 = 512 lines

Problem: Map 64 million blocks to 512 cache locations

Question: Where can memory block N be placed in cache?

Three Answers (Mapping Techniques):
1. Direct Mapping: Block N -> Only line (N mod 512)
2. Fully Associative: Block N -> Any cache line
3. Set Associative: Block N -> Any line in set (N mod S)

Trade-offs:
- Flexibility vs. Complexity
- Hit rate vs. Access time
- Hardware cost vs. Performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Overview of Mapping Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Visual Comparison of Mapping Techniques:

Direct Mapped:
Memory Block  ->  Cache Line (only one option)
     0        ->      0
     1        ->      1
     2        ->      2
     .        ->      .
   511        ->    511
   512        ->      0  (conflict with block 0!)
   513        ->      1
     .        ->      .

Fully Associative:
Memory Block  ->  Cache Line (any line)
     0        ->  0, 1, 2, ... 511
     1        ->  0, 1, 2, ... 511
     2        ->  0, 1, 2, ... 511
     .        ->      .
  Any block   ->  Any line

Set Associative (4-way, 128 sets):
Memory Block  ->  Set  ->  Any line in set (4 lines)
     0        ->   0   ->  Lines 0, 1, 2, 3
     1        ->   1   ->  Lines 4, 5, 6, 7
     2        ->   2   ->  Lines 8, 9, 10, 11
     .        ->   .   ->      .
   127        ->  127  ->  Lines 508-511
   128        ->   0   ->  Lines 0, 1, 2, 3 (same set as block 0)
     .        ->   .   ->      .`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Direct Mapping</h2>
    <p className="leading-relaxed">
      Each memory block maps to exactly one cache line. The mapping is determined
      by the block address modulo the number of cache lines.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Mapping:

Cache Line = Block Address mod Number_of_Lines

Address Format:
+-------------+-----------+-----------+
|    Tag      |   Index   |  Offset   |
+-------------+-----------+-----------+

Example: 8 cache lines, 4 bytes/line

Block 0  -> Line 0 (0 mod 8)
Block 1  -> Line 1 (1 mod 8)
Block 7  -> Line 7 (7 mod 8)
Block 8  -> Line 0 (8 mod 8)  <- Conflicts with Block 0
Block 15 -> Line 7 (15 mod 8) <- Conflicts with Block 7

Cache Structure:
Line | Valid | Tag    | Data Block |
-----|-------|--------|------------|
  0  |   1   | 0x100  | [data]     | <- Block 0 or 8 or 16...
  1  |   1   | 0x203  | [data]     |
  2  |   0   |  ---   |   ---      |
  3  |   1   | 0x045  | [data]     |
  ...

Pros:
+ Simple hardware (direct index lookup)
+ Fast access (no searching)
+ Low cost

Cons:
- High conflict misses
- Thrashing when accessing blocks with same index`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fully Associative Mapping</h2>
    <p className="leading-relaxed">
      Any memory block can be placed in any cache line. Provides maximum flexibility
      but requires searching all cache lines to find data.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fully Associative Mapping:

Any Block -> Any Line (complete freedom)

Address Format:
+------------------+-----------+
|       Tag        |  Offset   |
+------------------+-----------+
(No index field - can go anywhere)

Cache Lookup:
- Compare tag with ALL cache lines simultaneously
- Uses Content Addressable Memory (CAM) or parallel comparators

Example: 4 cache lines

Block 0  -> Any of lines 0, 1, 2, 3
Block 5  -> Any of lines 0, 1, 2, 3
Block 100-> Any of lines 0, 1, 2, 3

Cache Structure:
Line | Valid | Tag      | Data Block |
-----|-------|----------|------------|
  0  |   1   | 0x00100  | [Block 256]|
  1  |   1   | 0x00005  | [Block 5]  |
  2  |   1   | 0x00064  | [Block 100]|
  3  |   1   | 0x00000  | [Block 0]  |

Lookup: Search all tags in parallel

Pros:
+ No conflict misses (only capacity misses)
+ Best utilization of cache space
+ Flexible placement

Cons:
- Expensive hardware (parallel comparators)
- Slow for large caches
- Complex replacement logic`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Set Associative Mapping</h2>
    <p className="leading-relaxed">
      A compromise between direct and fully associative. Cache is divided into sets,
      each containing multiple lines. A block maps to one set but can go in any
      line within that set.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Set Associative Mapping:

Set = Block Address mod Number_of_Sets
Block can be in any line within the set

Address Format:
+-------------+-----------+-----------+
|    Tag      | Set Index |  Offset   |
+-------------+-----------+-----------+

Example: 8 lines, 2-way set associative (4 sets)

Set 0: Lines 0, 1 (2 ways)
Set 1: Lines 2, 3
Set 2: Lines 4, 5
Set 3: Lines 6, 7

Block 0  -> Set 0 (0 mod 4) -> Lines 0 or 1
Block 1  -> Set 1 (1 mod 4) -> Lines 2 or 3
Block 4  -> Set 0 (4 mod 4) -> Lines 0 or 1
Block 5  -> Set 1 (5 mod 4) -> Lines 2 or 3

Cache Structure (2-way):
Set  | Way 0                  | Way 1                  |
-----|------------------------|------------------------|
  0  | V|Tag  |Data           | V|Tag  |Data           |
  1  | V|Tag  |Data           | V|Tag  |Data           |
  2  | V|Tag  |Data           | V|Tag  |Data           |
  3  | V|Tag  |Data           | V|Tag  |Data           |

Lookup: Index selects set, compare tag with all ways in set

Common Configurations:
- 2-way: L1 caches
- 4-way: L2 caches
- 8-16 way: L3 caches`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mapping Techniques Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Direct Mapped</th>
            <th className="p-3 border">Fully Associative</th>
            <th className="p-3 border">Set Associative</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Placement</td>
            <td className="p-3 border">One location</td>
            <td className="p-3 border">Any location</td>
            <td className="p-3 border">One set, any way</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparators</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">N (all lines)</td>
            <td className="p-3 border">k (ways per set)</td>
          </tr>
          <tr>
            <td className="p-3 border">Conflict Misses</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Low-Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Cost</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Hit Time</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slow (large)</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Replacement</td>
            <td className="p-3 border">Trivial</td>
            <td className="p-3 border">Complex</td>
            <td className="p-3 border">Moderate</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Field Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Field Bit Calculations:

Given:
- Address size: A bits (total address)
- Block size: B bytes
- Cache size: C bytes
- Associativity: k ways

Calculations:
- Number of blocks in cache: N = C / B
- Number of sets: S = N / k = C / (B * k)
- Offset bits: log2(B)
- Index bits: log2(S)
- Tag bits: A - Index bits - Offset bits

Example: 32-bit address, 64 KB cache, 64-byte blocks, 4-way

N = 64 KB / 64 B = 1024 blocks
S = 1024 / 4 = 256 sets
Offset = log2(64) = 6 bits
Index = log2(256) = 8 bits
Tag = 32 - 8 - 6 = 18 bits

Address: |----Tag (18)----|-Index (8)-|-Offset (6)-|

Special Cases:
Direct Mapped (k=1):   Index = log2(N)
Fully Associative:     Index = 0, Tag = A - Offset`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Effect of Associativity on Miss Rate</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Miss Rate vs Associativity (Typical Results):

Associativity | Miss Rate (relative)
--------------|---------------------
Direct (1-way)|      1.00
2-way         |      0.85
4-way         |      0.80
8-way         |      0.78
16-way        |      0.77
Fully Assoc.  |      0.76

Observations:
- Going from direct to 2-way gives biggest improvement
- Diminishing returns beyond 4-8 way
- 8-way often close to fully associative
- Actual values depend on workload

Rule of Thumb:
2:1 Cache Size Rule
- Direct mapped cache of size N has similar miss rate
  as 2-way cache of size N/2
- Example: 32 KB direct ≈ 16 KB 2-way in miss rate

Implication:
- Doubling associativity ≈ Doubling cache size
- But associativity increases hit time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Design Trade-offs:

L1 Cache (Speed Critical):
- Keep simple for fast access
- 2-4 way typical
- Small size acceptable
- Hit time dominates

L2/L3 Cache (Miss Rate Critical):
- Can afford more complexity
- 8-16 way typical
- Larger size beneficial
- Miss rate dominates

Modern CPU Cache Configurations:
Processor    | L1D Assoc | L2 Assoc | L3 Assoc
-------------|-----------|----------|----------
Intel Core   | 8-12 way  | 4-8 way  | 12-16 way
AMD Ryzen    | 8 way     | 8 way    | 16 way
ARM Cortex   | 4 way     | 8 way    | 16 way

Why Not Always Fully Associative?
1. Hardware cost (comparators for all lines)
2. Increased hit time (parallel comparison)
3. Power consumption (all tags read)
4. Diminishing returns beyond 8-16 way`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Cache mapping defines where memory blocks can be placed in cache</li>
        <li>Direct mapping: one location per block, simple but high conflicts</li>
        <li>Fully associative: any location, no conflicts but expensive</li>
        <li>Set associative: balance of flexibility and cost</li>
        <li>Higher associativity reduces conflict misses</li>
        <li>Diminishing returns beyond 8-way associativity</li>
        <li>Choice depends on cache level and design constraints</li>
        <li>L1 uses lower associativity; L3 uses higher associativity</li>
      </ul>
    </div>
  </div>
);

export default CacheMapping;
