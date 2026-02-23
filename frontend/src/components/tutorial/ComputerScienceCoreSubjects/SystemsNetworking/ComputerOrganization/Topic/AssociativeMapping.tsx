import React from 'react';

const AssociativeMapping: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fully Associative Mapping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fully associative mapping allows any memory block to be placed in any cache line.
      This provides maximum flexibility in block placement, eliminating conflict misses
      entirely. However, it requires comparing the tag of the requested address with
      tags of all cache lines simultaneously, making it expensive for large caches.
    </p>

    <h2 className="text-3xl font-bold mt-8">Fully Associative Principle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fully Associative Mapping:

Any Block -> Any Cache Line (complete freedom)

Example with 4 cache lines:
Block 0   can be placed in -> Line 0, 1, 2, or 3
Block 1   can be placed in -> Line 0, 1, 2, or 3
Block 100 can be placed in -> Line 0, 1, 2, or 3
Block N   can be placed in -> Line 0, 1, 2, or 3

No mapping formula - placement is arbitrary!

Visual:
    Memory Blocks              Cache Lines
    +----------+              +----------+
    | Block 0  |----+-------->| Line 0   |
    | Block 1  |----+----+--->| Line 1   |
    | Block 2  |----+----+--->| Line 2   |
    | Block 3  |----+----+--->| Line 3   |
    |   ...    |    |    |    +----------+
    | Block N  |----+----+
    +----------+

All blocks can go to all lines (full connectivity)

Key Insight:
- No conflict misses possible
- Only compulsory and capacity misses remain
- But requires searching all lines for every access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Format</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Division (Fully Associative):

|<----------- Memory Address ----------->|
+------------------------+---------------+
|          Tag           |    Offset     |
+------------------------+---------------+
           |                     |
           |                     +-> Byte within block
           +----------------------> Block identification

NO INDEX FIELD!
- Block can go anywhere, so no index to select line
- Tag must identify entire block uniquely
- Larger tag compared to direct mapping

Bit Calculations:
Given:
- Total address bits: A
- Block size: B bytes

Offset bits = log2(B)
Tag bits = A - Offset bits

Example:
- 32-bit addresses
- 64-byte blocks

Offset = log2(64) = 6 bits
Tag = 32 - 6 = 26 bits

Address: |-------- Tag (26 bits) --------|-Offset (6)-|

Compare with Direct Mapped (1024 lines):
Direct:    Tag = 16 bits
Fully Assoc: Tag = 26 bits
Extra 10 bits per cache line for tags!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Structure and Lookup</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fully Associative Cache Organization:

Line | Valid | Tag (26 bits)    | Data Block (64 bytes) |
-----|-------|------------------|----------------------|
  0  |   1   | 0x01234567       | [64 bytes of data]   |
  1  |   1   | 0x0ABCDEF0       | [64 bytes of data]   |
  2  |   0   | ----------       | [invalid]            |
  3  |   1   | 0x05678901       | [64 bytes of data]   |
  4  |   1   | 0x02345678       | [64 bytes of data]   |
...  |  ...  | ...              | ...                  |

Lookup Process:
1. Extract Tag and Offset from address
2. Compare Tag with ALL cache line tags simultaneously
3. Check Valid bit for matching line
4. If match found (Hit): Use Offset to get data
5. If no match (Miss): Fetch from memory, place in cache

Parallel Tag Comparison:
           Address Tag
                |
    +-----------+-----------+
    |     |     |     |     |
    v     v     v     v     v
  +---+ +---+ +---+ +---+ +---+
  |CMP| |CMP| |CMP| |CMP| |CMP|  <- Comparators
  +---+ +---+ +---+ +---+ +---+
    |     |     |     |     |
  Line  Line  Line  Line  Line
   0     1     2     3     4
   Tags

All comparisons happen in parallel!
Only one (or zero) should match.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Content Addressable Memory (CAM) Implementation:

CAM = Memory that searches by content, not address

Standard RAM:          CAM:
Address -> Data        Data -> Address (if present)

CAM Structure for Fully Associative Cache:

        Address Tag (search key)
              |
              v
+----------------------------+
|    Content Addressable     |
|         Memory             |
|  +----------------------+  |
|  | Tag 0 | Compare |    |  |---> Match 0?
|  +----------------------+  |
|  | Tag 1 | Compare |    |  |---> Match 1?
|  +----------------------+  |
|  | Tag 2 | Compare |    |  |---> Match 2?
|  +----------------------+  |
|  | Tag 3 | Compare |    |  |---> Match 3?
|  +----------------------+  |
+----------------------------+
              |
              v
         Match Logic
              |
    +---------+---------+
    |                   |
   HIT               Line #
                  (for data access)

Alternative: Parallel Comparator Array

                Tag from Address
                      |
         +------------+------------+
         |            |            |
         v            v            v
      +-----+      +-----+      +-----+
      |Tag 0|      |Tag 1|      |Tag 2|
      +--+--+      +--+--+      +--+--+
         |            |            |
         v            v            v
      +-----+      +-----+      +-----+
      | CMP |      | CMP |      | CMP |   n comparators
      +--+--+      +--+--+      +--+--+   for n lines
         |            |            |
         v            v            v
      Match0       Match1       Match2
         |            |            |
         +------+-----+-----+------+
                |           |
                v           v
            Priority      Data
            Encoder       MUX
                |           |
                v           v
            Line #        Data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replacement Policy</h2>
    <p className="leading-relaxed">
      Unlike direct mapping, fully associative caches must decide which line to evict
      when the cache is full. This requires a replacement policy.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Replacement is Required:

When cache is full and new block arrives:
- In direct mapped: Replace the only possible line
- In fully associative: Choose ANY line to replace

Common Replacement Policies:

1. LRU (Least Recently Used)
   - Replace the line not accessed for longest time
   - Needs usage tracking hardware
   - Best performance, highest complexity

2. FIFO (First In First Out)
   - Replace the oldest line
   - Simpler than LRU
   - Can evict frequently used blocks

3. Random
   - Replace a randomly selected line
   - Simplest to implement
   - Surprisingly good performance

4. LFU (Least Frequently Used)
   - Replace line with fewest accesses
   - Needs counter per line
   - Can keep old but unused blocks

LRU Implementation (for 4 lines):
- Need to track order of last 4 accesses
- 4! = 24 possible orderings
- log2(24) ≈ 5 bits of state

For large caches, LRU becomes expensive:
- n lines -> O(n log n) bits for exact LRU
- Often use pseudo-LRU approximations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Walkthrough</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 4-line Fully Associative Cache with LRU

Initial State:
Line | V | Tag | LRU Order (0=most recent)
-----|---|-----|----------
  0  | 0 |  -  |    -
  1  | 0 |  -  |    -
  2  | 0 |  -  |    -
  3  | 0 |  -  |    -

Access A (Tag=0xA):
Miss - Load into Line 0 (first empty)
Line | V | Tag | LRU
  0  | 1 | 0xA |  0  (most recent)
  1  | 0 |  -  |  -
  2  | 0 |  -  |  -
  3  | 0 |  -  |  -

Access B (Tag=0xB):
Miss - Load into Line 1
Line | V | Tag | LRU
  0  | 1 | 0xA |  1
  1  | 1 | 0xB |  0  (most recent)
  2  | 0 |  -  |  -
  3  | 0 |  -  |  -

Access C, D (Tags 0xC, 0xD):
Miss, Miss - Load into Lines 2, 3
Line | V | Tag | LRU
  0  | 1 | 0xA |  3  (least recent)
  1  | 1 | 0xB |  2
  2  | 1 | 0xC |  1
  3  | 1 | 0xD |  0  (most recent)

Access A again (Tag=0xA):
Hit! - Update LRU
Line | V | Tag | LRU
  0  | 1 | 0xA |  0  (now most recent)
  1  | 1 | 0xB |  3  (shifted)
  2  | 1 | 0xC |  2
  3  | 1 | 0xD |  1

Access E (Tag=0xE):
Miss - Cache full! Replace LRU (Line 1 with Tag 0xB)
Line | V | Tag | LRU
  0  | 1 | 0xA |  1
  1  | 1 | 0xE |  0  (new block)
  2  | 1 | 0xC |  3  (now least recent)
  3  | 1 | 0xD |  2

No conflict misses! Block B evicted due to capacity.`}
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
            <td className="p-3 border">No conflict misses</td>
            <td className="p-3 border">High hardware cost (n comparators)</td>
          </tr>
          <tr>
            <td className="p-3 border">Best cache utilization</td>
            <td className="p-3 border">Slow lookup for large caches</td>
          </tr>
          <tr>
            <td className="p-3 border">Lowest miss rate possible</td>
            <td className="p-3 border">High power consumption</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexible placement</td>
            <td className="p-3 border">Complex replacement logic</td>
          </tr>
          <tr>
            <td className="p-3 border">No thrashing</td>
            <td className="p-3 border">Large tag storage overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Where Fully Associative is Used:

1. TLB (Translation Lookaside Buffer)
   - Typically 32-128 entries
   - Miss penalty is very high (page table walk)
   - Small enough for full associativity
   - Worth the hardware cost

2. Victim Cache
   - Small cache (4-16 entries) holding evicted blocks
   - Fully associative to catch conflicts
   - Second chance for conflicting blocks

3. Branch Target Buffer
   - Stores branch target addresses
   - Small, frequently accessed
   - Full associativity reduces mispredictions

4. Write Buffers
   - Hold pending writes
   - Small number of entries
   - Need to search on reads (store forwarding)

5. Small L1 Caches
   - Very small caches where miss rate is critical
   - Rare in modern designs (set-associative preferred)

Why Not for Large Caches:
- 1024-line fully associative = 1024 comparators
- Power: All comparators active every access
- Area: Comparators take significant space
- Speed: Priority encoding from 1024 signals is slow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Any memory block can be placed in any cache line</li>
        <li>No index field - only tag and offset in address</li>
        <li>Eliminates conflict misses completely</li>
        <li>Requires parallel comparison of all tags</li>
        <li>Uses CAM (Content Addressable Memory) hardware</li>
        <li>Must implement replacement policy (LRU, FIFO, Random)</li>
        <li>Expensive for large caches (comparators, power)</li>
        <li>Used for small caches like TLB, victim cache</li>
      </ul>
    </div>
  </div>
);

export default AssociativeMapping;
