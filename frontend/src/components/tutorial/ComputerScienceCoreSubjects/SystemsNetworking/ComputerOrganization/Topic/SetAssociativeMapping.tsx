import React from 'react';

const SetAssociativeMapping: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Set Associative Mapping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Set associative mapping is a compromise between direct mapping and fully associative
      mapping. The cache is divided into sets, each containing multiple lines (ways).
      A memory block maps to a specific set but can be placed in any line within that set.
      This reduces conflict misses while keeping hardware complexity manageable.
    </p>

    <h2 className="text-3xl font-bold mt-8">Set Associative Principle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Set Associative Mapping:

Set = Block Address mod Number_of_Sets
Block can be in ANY line within that set

Terminology:
- k-way set associative: k lines per set
- Direct mapped = 1-way set associative
- Fully associative = N-way (one set with all N lines)

Example: 8-line cache, 2-way set associative
- 4 sets (8 lines / 2 ways = 4 sets)
- Each set has 2 lines

Set 0: Line 0, Line 1  (2 ways)
Set 1: Line 2, Line 3
Set 2: Line 4, Line 5
Set 3: Line 6, Line 7

Mapping:
Block 0  -> Set 0 (0 mod 4) -> Can be in Line 0 or Line 1
Block 1  -> Set 1 (1 mod 4) -> Can be in Line 2 or Line 3
Block 4  -> Set 0 (4 mod 4) -> Can be in Line 0 or Line 1
Block 5  -> Set 1 (5 mod 4) -> Can be in Line 2 or Line 3

Visual:
    Memory Blocks         Sets              Cache Lines
    +----------+         +--------+         +----------+
    | Block 0  |-------->|  Set 0 |-------->| Way 0    |
    | Block 4  |-------->|        |-------->| Way 1    |
    | Block 8  |-------->+--------+         +----------+
    |   ...    |         +--------+         +----------+
    | Block 1  |-------->|  Set 1 |-------->| Way 0    |
    | Block 5  |-------->|        |-------->| Way 1    |
    +----------+         +--------+         +----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Format</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Division (Set Associative):

|<----------- Memory Address ----------->|
+--------------+-----------+-------------+
|     Tag      | Set Index |   Offset    |
+--------------+-----------+-------------+
      |              |            |
      |              |            +-> Byte within block
      |              +-------------> Set selection
      +----------------------------> Block identification

Bit Calculations:
Given:
- Total address bits: A
- Block size: B bytes
- Cache size: C bytes
- Associativity: k ways

Number of lines = C / B
Number of sets = (C / B) / k = C / (B * k)

Offset bits = log2(B)
Index bits = log2(Number of sets) = log2(C / (B * k))
Tag bits = A - Index bits - Offset bits

Example: 32-bit address, 64 KB cache, 64-byte blocks, 4-way

Lines = 64 KB / 64 B = 1024 lines
Sets = 1024 / 4 = 256 sets

Offset = log2(64) = 6 bits
Index = log2(256) = 8 bits
Tag = 32 - 8 - 6 = 18 bits

|---Tag (18 bits)---|--Index (8 bits)--|--Offset (6 bits)--|

Comparison:
                    | Direct | 2-way | 4-way | 8-way | Full
--------------------|--------|-------|-------|-------|------
Index bits          |   10   |   9   |   8   |   7   |   0
Tag bits            |   16   |   17  |   18  |   19  |   26
Comparators needed  |    1   |   2   |   4   |   8   | 1024`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cache Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`4-Way Set Associative Cache Structure:

       |       Way 0        |       Way 1        |       Way 2        |       Way 3        |
Set    | V | Tag | Data     | V | Tag | Data     | V | Tag | Data     | V | Tag | Data     |
-------|---|-----|----------|---|-----|----------|---|-----|----------|---|-----|----------|
  0    | 1 |0x12 |[block]   | 1 |0x45 |[block]   | 0 | --  |  --      | 1 |0x78 |[block]   |
  1    | 1 |0xAB |[block]   | 1 |0xCD |[block]   | 1 |0xEF |[block]   | 0 | --  |  --      |
  2    | 1 |0x34 |[block]   | 0 | --  |  --      | 1 |0x56 |[block]   | 1 |0x9A |[block]   |
 ...   |...|.... |.....     |...|.... |.....     |...|.... |.....     |...|.... |.....     |
 255   | 1 |0xBC |[block]   | 1 |0xDE |[block]   | 1 |0xF0 |[block]   | 1 |0x23 |[block]   |

Each set: 4 lines (4-way)
Total: 256 sets x 4 ways = 1024 lines

Lookup: Index selects a SET (row), then compare tag with all 4 ways

Set Selection:
Index = 2 -> Access Set 2 (row 2)
Compare tag with: 0x34, --, 0x56, 0x9A (only valid ones)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lookup Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Set Associative Cache Lookup:

                    Address
                       |
         +-------------+-------------+
         |             |             |
        Tag          Index        Offset
         |             |             |
         |             v             |
         |    +----------------+     |
         |    | Set Selection  |     |
         |    +-------+--------+     |
         |            |              |
         |            v              |
         |    +----------------+     |
         |    | Selected Set   |     |
         |    | (4 ways)       |     |
         |    +----+---+---+---+     |
         |         |   |   |   |     |
         |    Way0 Way1 Way2 Way3    |
         |         |   |   |   |     |
         |         v   v   v   v     |
         +-------->| CMP CMP CMP CMP |
                   +---+---+---+---+
                       |   |   |   |
                     Match signals
                       |   |   |   |
                   +---+---+---+---+
                   |               |
                   v               v
                 HIT?          Data MUX
                   |               |
              +----+----+          |
              |         |          v
            Yes        No        Data
              |         |
              v         v
           Return     MISS
           Data     (fetch from memory)

k-way requires k comparators (not N for fully associative)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: 2-way Set Associative, 4 sets, LRU replacement

Initial State (all invalid):
Set | Way 0 (V|Tag) | Way 1 (V|Tag) | LRU
----|---------------|---------------|----
  0 |   0 |  --     |   0 |  --     |  -
  1 |   0 |  --     |   0 |  --     |  -
  2 |   0 |  --     |   0 |  --     |  -
  3 |   0 |  --     |   0 |  --     |  -

Access Block with Tag=0xA, Set=0:
Miss - Place in Way 0 of Set 0

Set | Way 0 (V|Tag) | Way 1 (V|Tag) | LRU
----|---------------|---------------|------
  0 |   1 | 0xA     |   0 |  --     | Way0
  1 |   0 |  --     |   0 |  --     |  -

Access Block with Tag=0xB, Set=0:
Miss - Place in Way 1 of Set 0

Set | Way 0 (V|Tag) | Way 1 (V|Tag) | LRU
----|---------------|---------------|------
  0 |   1 | 0xA     |   1 | 0xB     | Way1

Access Block with Tag=0xA, Set=0 again:
Hit! - Found in Way 0, update LRU

Set | Way 0 (V|Tag) | Way 1 (V|Tag) | LRU
----|---------------|---------------|------
  0 |   1 | 0xA     |   1 | 0xB     | Way0

Access Block with Tag=0xC, Set=0:
Miss - Set full! Replace LRU (Way 1)

Set | Way 0 (V|Tag) | Way 1 (V|Tag) | LRU
----|---------------|---------------|------
  0 |   1 | 0xA     |   1 | 0xC     | Way1

Key difference from direct mapped:
- Block 0xA and 0xC can coexist (different ways)
- No thrashing between them!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Configurations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Cache Level</th>
            <th className="p-3 border">Typical Size</th>
            <th className="p-3 border">Associativity</th>
            <th className="p-3 border">Reasoning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">L1 I-Cache</td>
            <td className="p-3 border">32 KB</td>
            <td className="p-3 border">4-8 way</td>
            <td className="p-3 border">Fast access, predictable patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">L1 D-Cache</td>
            <td className="p-3 border">32 KB</td>
            <td className="p-3 border">8-12 way</td>
            <td className="p-3 border">Higher assoc for data conflicts</td>
          </tr>
          <tr>
            <td className="p-3 border">L2 Cache</td>
            <td className="p-3 border">256 KB-1 MB</td>
            <td className="p-3 border">4-8 way</td>
            <td className="p-3 border">Balance speed and miss rate</td>
          </tr>
          <tr>
            <td className="p-3 border">L3 Cache</td>
            <td className="p-3 border">4-64 MB</td>
            <td className="p-3 border">12-20 way</td>
            <td className="p-3 border">Miss rate critical, latency OK</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Miss Rate Reduction with Associativity:

For a typical workload (SPEC benchmarks):
Associativity | Miss Rate | Miss Rate Reduction
--------------|-----------|--------------------
1-way (direct)|   5.0%    |      baseline
2-way         |   4.0%    |       20%
4-way         |   3.5%    |       30%
8-way         |   3.2%    |       36%
16-way        |   3.1%    |       38%
Fully assoc   |   3.0%    |       40%

Key Observations:
1. Biggest gain: Direct -> 2-way (20% reduction)
2. Diminishing returns beyond 8-way
3. 8-way is often "good enough"

The 2:1 Cache Rule:
- N KB direct-mapped ≈ N/2 KB 2-way set associative
- 32 KB direct ≈ 16 KB 2-way in miss rate
- Doubling associativity ≈ doubling size (for miss rate)

Hit Time Trade-off:
Associativity | Hit Time (relative)
--------------|--------------------
1-way         |      1.0
2-way         |      1.1
4-way         |      1.2
8-way         |      1.4
16-way        |      1.6

Higher associativity = Lower miss rate but higher hit time
Design requires balancing these factors`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`4-Way Set Associative Hardware:

                        Address
                           |
              +------------+------------+
              |            |            |
             Tag         Index       Offset
              |            |            |
              |     +------+------+     |
              |     |             |     |
              |     v             v     |
              |  +------+     +------+  |
              |  | Tag  |     | Data |  |
              |  | RAM  |     | RAM  |  |
              |  |(4 way)|    |(4 way)|  |
              |  +------+     +------+  |
              |     |             |     |
              |   Tag0,1,2,3   Data0,1,2,3
              |     |             |     |
              |     v             |     |
              +-->+----+          |     |
                  |CMP0|          |     |
                  +----+          |     |
              +-->+----+          v     |
                  |CMP1|       +-----+  |
                  +----+       | MUX |<-+
              +-->+----+       |4to1 |
                  |CMP2|       +--+--+
                  +----+          |
              +-->+----+          |
                  |CMP3|          |
                  +----+          |
                  | | | |         |
                  v v v v         v
               +--------+      +-----+
               |Priority|      | Byte|
               |Encoder |      | Sel |
               +---+----+      +--+--+
                   |              |
                   v              v
                  HIT           DATA

Parallel Operations:
1. Index selects set in both Tag RAM and Data RAM
2. All 4 tags read and compared simultaneously
3. Match signal selects correct data via MUX
4. Offset selects byte within block`}
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
            <td className="p-3 border">Lower conflict misses than direct</td>
            <td className="p-3 border">More complex than direct mapping</td>
          </tr>
          <tr>
            <td className="p-3 border">Lower cost than fully associative</td>
            <td className="p-3 border">Slower hit time than direct</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalable design</td>
            <td className="p-3 border">Requires replacement policy</td>
          </tr>
          <tr>
            <td className="p-3 border">Good balance of flexibility/cost</td>
            <td className="p-3 border">Higher power than direct</td>
          </tr>
          <tr>
            <td className="p-3 border">Most common in modern CPUs</td>
            <td className="p-3 border">k comparators per access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Cache divided into sets, each with k ways (lines)</li>
        <li>Block maps to one set, can go in any way within set</li>
        <li>Set = Block mod Number_of_Sets</li>
        <li>Balances direct mapping simplicity and full associativity</li>
        <li>Most common cache organization in modern CPUs</li>
        <li>k-way needs k comparators (manageable cost)</li>
        <li>Diminishing returns beyond 8-way associativity</li>
        <li>L1 typically 4-8 way; L3 typically 12-20 way</li>
      </ul>
    </div>
  </div>
);

export default SetAssociativeMapping;
