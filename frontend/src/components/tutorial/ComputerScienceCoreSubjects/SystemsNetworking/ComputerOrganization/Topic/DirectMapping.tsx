import React from 'react';

const DirectMapping: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Direct Mapping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Direct mapping is the simplest cache mapping technique where each memory block
      can only be placed in one specific cache line. The cache line is determined
      by the block address modulo the number of cache lines. While simple and fast,
      direct mapping can suffer from high conflict miss rates when multiple frequently
      accessed blocks map to the same cache line.
    </p>

    <h2 className="text-3xl font-bold mt-8">Direct Mapping Principle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Mapping Formula:

Cache Line = Block Address mod Number_of_Cache_Lines

Or equivalently:
Cache Line = (Memory Address / Block Size) mod Number_of_Lines

Example with 8 cache lines:
Block 0  -> Line 0 mod 8 = Line 0
Block 1  -> Line 1 mod 8 = Line 1
Block 7  -> Line 7 mod 8 = Line 7
Block 8  -> Line 8 mod 8 = Line 0  (same as Block 0)
Block 9  -> Line 9 mod 8 = Line 1  (same as Block 1)
Block 15 -> Line 15 mod 8 = Line 7 (same as Block 7)
Block 16 -> Line 16 mod 8 = Line 0 (same as Block 0, 8)

Visual Mapping:
Memory Blocks          Cache Lines
+----------+           +----------+
| Block 0  |---------->| Line 0   |<-- Block 0, 8, 16, 24...
| Block 1  |---------->| Line 1   |<-- Block 1, 9, 17, 25...
| Block 2  |---------->| Line 2   |<-- Block 2, 10, 18, 26...
| Block 3  |---------->| Line 3   |
| Block 4  |---------->| Line 4   |
| Block 5  |---------->| Line 5   |
| Block 6  |---------->| Line 6   |
| Block 7  |---------->| Line 7   |<-- Block 7, 15, 23, 31...
| Block 8  |-----+
| Block 9  |---+ |
|   ...    |   | |
+----------+   | +---->(wraps to Line 0)
               +------>(wraps to Line 1)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Format in Direct Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Division:

|<----------- Memory Address ----------->|
+--------------+------------+------------+
|     Tag      |   Index    |   Offset   |
+--------------+------------+------------+
      |              |             |
      |              |             +-> Byte within block
      |              +--------------> Cache line selection
      +-----------------------------> Block identification

Field Functions:
- Offset: Selects byte within the cache line (block)
- Index: Selects which cache line to check
- Tag: Distinguishes blocks mapping to same line

Bit Calculations:
Given:
- Total address bits: A
- Block size: B bytes
- Number of cache lines: L

Offset bits = log2(B)
Index bits = log2(L)
Tag bits = A - Index bits - Offset bits

Example:
- 32-bit addresses
- 64-byte blocks
- 1024 cache lines

Offset = log2(64) = 6 bits
Index = log2(1024) = 10 bits
Tag = 32 - 10 - 6 = 16 bits

Address: |--Tag (16 bits)--|--Index (10 bits)--|--Offset (6 bits)--|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Direct Mapped Cache Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cache Organization:

Index  | Valid | Tag (16 bits) | Data Block (64 bytes)    |
-------|-------|---------------|--------------------------|
  0    |   1   |    0x1234     | [64 bytes of data]       |
  1    |   1   |    0xABCD     | [64 bytes of data]       |
  2    |   0   |    ------     | [invalid]                |
  3    |   1   |    0x5678     | [64 bytes of data]       |
  ...  |  ...  |    ...        | ...                      |
 1023  |   1   |    0x9ABC     | [64 bytes of data]       |

Total Cache Size = Lines x (Valid + Tag + Data)
                 = 1024 x (1 + 16 + 64x8) bits
                 = 1024 x 529 bits
                 = 66.125 KB (overhead for tags and valid bits)

Actual data capacity = 1024 x 64 bytes = 64 KB`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Lookup Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Mapped Cache Lookup:

Address: 0x12345678 (example)
         |----Tag----|--Index--|--Offset--|
Binary:  0001001000110100 0101100111 111000

Step 1: Extract fields
- Tag: 0x1234 (bits 31-16)
- Index: 359 (bits 15-6)
- Offset: 56 (bits 5-0)

Step 2: Use Index to select cache line
- Access cache line 359

Step 3: Check Valid bit
- If Valid = 0: MISS (line empty)
- If Valid = 1: Continue to Step 4

Step 4: Compare Tags
- Compare address tag with stored tag
- If tags match: HIT
- If tags differ: MISS (wrong block in line)

Step 5: On HIT
- Use Offset to select byte within block
- Return data at offset 56

Hardware Implementation:
            Address
               |
    +----------+----------+
    |          |          |
   Tag       Index     Offset
    |          |          |
    |    +-----+-----+    |
    |    |           |    |
    |    v           v    |
    |  +---+      +-----+ |
    |  |MUX|      |Cache| |
    |  |   |<-----|Array| |
    |  +---+      +-----+ |
    |    |           |    |
    |    v           v    |
    |  +---+      +-----+ |
    +->|CMP|      | MUX |<+
       +---+      +-----+
         |           |
     +---+---+       |
     |       |       |
   Valid   Match     v
     |       |     Data
     v       v       |
    AND------+       |
     |               |
     v               v
    HIT            DATA`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Complete Walkthrough</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example Cache Configuration:
- 16 cache lines (4 index bits)
- 16-byte blocks (4 offset bits)
- 16-bit addresses (8 tag bits)

Address format: | Tag (8) | Index (4) | Offset (4) |

Initial State (all invalid):
Line | V | Tag | Data
-----|---|-----|------
 0   | 0 |  -  |  -
 1   | 0 |  -  |  -
...  | 0 |  -  |  -
15   | 0 |  -  |  -

Access Sequence:

1. Read address 0x1234
   Tag=0x12, Index=3, Offset=4
   Line 3: Valid=0 -> MISS
   Fetch block from memory, store in line 3
   Line 3: V=1, Tag=0x12, Data=[block]
   Return byte at offset 4

2. Read address 0x1238
   Tag=0x12, Index=3, Offset=8
   Line 3: Valid=1, Tag=0x12 matches -> HIT
   Return byte at offset 8 (same block)

3. Read address 0x5634
   Tag=0x56, Index=3, Offset=4
   Line 3: Valid=1, Tag=0x12 != 0x56 -> MISS (conflict!)
   Evict block 0x12xx, load block 0x56xx
   Line 3: V=1, Tag=0x56, Data=[new block]

4. Read address 0x1234 again
   Tag=0x12, Index=3, Offset=4
   Line 3: Valid=1, Tag=0x56 != 0x12 -> MISS (conflict!)
   Block was evicted in step 3!

Final State:
Line | V | Tag  | Contains
-----|---|------|----------
 3   | 1 | 0x56 | Block 0x5630-0x563F`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Miss Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Thrashing Example:

Consider code accessing two arrays:
int A[1024], B[1024];  // Both arrays

If A and B are aligned such that A[i] and B[i]
map to the same cache line:

for (int i = 0; i < 1024; i++) {
    sum += A[i] + B[i];  // Alternating access
}

Access pattern: A[0], B[0], A[1], B[1], A[2], B[2]...

If A[i] and B[i] map to same line:
- Access A[0]: Miss, load A's block
- Access B[0]: Miss, evict A, load B's block
- Access A[1]: Miss, evict B, load A's block
- Access B[1]: Miss, evict A, load B's block
- ... (continuous misses!)

This is called "cache thrashing"

Solutions:
1. Use set associative cache (more ways)
2. Array padding (change alignment)
3. Loop tiling (change access pattern)
4. Compiler optimizations

Array Padding Example:
int A[1024];
int padding[16];  // Shift B's alignment
int B[1024];

Now A[i] and B[i] map to different lines!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple hardware implementation</td>
            <td className="p-3 border">High conflict miss rate</td>
          </tr>
          <tr>
            <td className="p-3 border">Fast lookup (single comparison)</td>
            <td className="p-3 border">Thrashing with certain patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">Low power (read one line)</td>
            <td className="p-3 border">Poor cache utilization</td>
          </tr>
          <tr>
            <td className="p-3 border">No replacement decision needed</td>
            <td className="p-3 border">Sensitive to address alignment</td>
          </tr>
          <tr>
            <td className="p-3 border">Cheap (one comparator)</td>
            <td className="p-3 border">May not use all cache space</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Direct Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Mapping is Good For:

1. Very small, fast caches
   - L1 instruction cache (predictable access)
   - TLB (Translation Lookaside Buffer)

2. Cost-sensitive designs
   - Embedded systems
   - Simple microcontrollers

3. When hit time is critical
   - First-level caches where speed matters most

4. Workloads with good locality
   - Sequential access patterns
   - Small working sets

Direct Mapping is Bad For:

1. Data caches with irregular access
   - Random access patterns
   - Multiple data structures at conflicting addresses

2. Large caches
   - L2, L3 caches (miss rate more important)

3. Multi-threaded workloads
   - Different threads may conflict

Modern Usage:
- Rarely used alone in modern CPUs
- Instruction caches sometimes direct-mapped
- Most caches are at least 2-way set associative`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Each memory block maps to exactly one cache line</li>
        <li>Line = Block Address mod Number of Lines</li>
        <li>Address divided into: Tag, Index, Offset</li>
        <li>Only one tag comparison needed (fast lookup)</li>
        <li>No replacement decision needed (only one option)</li>
        <li>Suffers from conflict misses when blocks share same index</li>
        <li>Cache thrashing occurs with certain access patterns</li>
        <li>Simple and cheap but limited performance</li>
      </ul>
    </div>
  </div>
);

export default DirectMapping;
