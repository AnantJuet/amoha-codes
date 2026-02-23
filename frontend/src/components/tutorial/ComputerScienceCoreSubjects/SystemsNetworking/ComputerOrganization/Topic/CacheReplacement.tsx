import React from 'react';

const CacheReplacement: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cache Replacement Policies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cache replacement policies determine which cache line to evict when the cache
      is full and a new block needs to be loaded. The choice of replacement policy
      significantly affects cache hit rates and overall system performance. Different
      policies offer various trade-offs between implementation complexity, hardware
      cost, and effectiveness.
    </p>

    <h2 className="text-3xl font-bold mt-8">When is Replacement Needed?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Replacement Scenarios:

Direct Mapped Cache:
- No choice! Only one possible location per block
- "Replacement" is automatic (overwrite)

Set Associative Cache:
- Multiple ways per set
- On miss, if set is full, must choose a victim

Fully Associative Cache:
- Any line can hold any block
- On miss, if cache is full, must choose a victim

When Replacement Occurs:
1. Cache miss happens
2. Need to fetch block from memory
3. Target set/cache is full (all valid)
4. Must select a "victim" line to evict
5. If victim is dirty, write it back first
6. Load new block into victim's location

Replacement Policy Goals:
- Evict blocks least likely to be used again
- Minimize future miss rate
- Keep frequently used blocks in cache`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LRU (Least Recently Used)</h2>
    <p className="leading-relaxed">
      LRU replaces the cache line that has not been accessed for the longest time.
      It exploits temporal locality by keeping recently used blocks.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LRU Policy:

Principle: The block least recently accessed is least likely
           to be accessed in the near future.

Example: 4-way set associative, LRU replacement

Access sequence: A, B, C, D, E, A, F

State after each access (LRU order: 0=most recent):
         Way0  Way1  Way2  Way3   LRU Stack (bottom=evict)
A:       A(0)   -     -     -     [A]
B:       A(1)  B(0)   -     -     [B,A]
C:       A(2)  B(1)  C(0)   -     [C,B,A]
D:       A(3)  B(2)  C(1)  D(0)   [D,C,B,A] <- Full!
E:       E(0)  B(3)  C(2)  D(1)   [E,D,C,B] (A evicted - was LRU)
A:       E(1)  A(0)  C(3)  D(2)   [A,E,D,C] (B evicted for A)
F:       E(2)  A(1)  F(0)  D(3)   [F,A,E,D] (C evicted for F)

LRU Implementation (for 4-way):
- Track access order of 4 blocks
- 4! = 24 possible orderings
- Need log2(24) ≈ 5 bits of state per set

LRU Hardware Options:
1. Counter per line (update on access)
2. Matrix method (NxN bits for N ways)
3. Stack/linked list simulation`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">LRU Implementation Methods</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Method 1: Counter-based LRU (4-way example)

Each way has a 2-bit counter (values 0-3)
On access to way i:
  - Set counter[i] = 0 (most recent)
  - Increment all counters < old counter[i]
On replacement:
  - Evict way with counter = 3 (oldest)

Example:
Initial: [0, 1, 2, 3] (Way 0 most recent)
Access Way 2:
  - Old counter[2] = 2
  - Set counter[2] = 0
  - Increment counters 0,1 (were < 2)
  - Result: [1, 2, 0, 3]

Method 2: NxN Matrix (4-way example)

4x4 bit matrix M
On access to way i:
  - Set row i to all 1s
  - Set column i to all 0s
LRU way has all 0s in its row

       W0  W1  W2  W3
    +----------------+
W0  |  0   1   1   1 |
W1  |  0   0   1   1 |
W2  |  0   0   0   1 |
W3  |  0   0   0   0 | <- LRU (all 0s)
    +----------------+

Interpretation: M[i][j]=1 means i accessed more recently than j`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FIFO (First In First Out)</h2>
    <p className="leading-relaxed">
      FIFO replaces the block that has been in the cache the longest, regardless
      of how recently it was accessed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`FIFO Policy:

Principle: The oldest block (first loaded) is evicted first.
           Does NOT consider access patterns.

Example: 4-way set associative, FIFO replacement

Access sequence: A, B, C, D, A, E, A

State after each access (FIFO queue):
         Way0  Way1  Way2  Way3   Queue (front=evict)
A:       A      -     -     -     [A]
B:       A     B      -     -     [A,B]
C:       A     B     C      -     [A,B,C]
D:       A     B     C     D      [A,B,C,D] <- Full!
A:       A     B     C     D      [A,B,C,D] (Hit! Queue unchanged)
E:       E     B     C     D      [B,C,D,E] (A evicted - oldest)
A:       E     A     C     D      [C,D,E,A] (B evicted for A)

FIFO Implementation:
- Simple circular pointer
- Points to next line to replace
- Increment pointer after replacement
- log2(k) bits for k-way cache

Belady's Anomaly:
- More cache can cause MORE misses with FIFO!
- Example: Sequence 1,2,3,4,1,2,5,1,2,3,4,5
  - 3 frames: 9 misses
  - 4 frames: 10 misses (!?)
- Does not occur with LRU`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Random Replacement</h2>
    <p className="leading-relaxed">
      Random replacement selects a victim line randomly. Despite its simplicity,
      it performs surprisingly well in practice.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Random Replacement Policy:

Principle: Select a random line to evict.
           No tracking of access history.

Implementation:
- Simple LFSR (Linear Feedback Shift Register)
- Or use system counter bits
- Essentially zero overhead

Example: 4-way, Random replacement (PRNG sequence: 2,0,3,1,...)

         Way0  Way1  Way2  Way3   Random sequence
A:       A      -     -     -
B:       A     B      -     -
C:       A     B     C      -
D:       A     B     C     D     <- Full!
E:       A     B     E     D     (Random=2, Way 2 evicted)
F:       F     B     E     D     (Random=0, Way 0 evicted)
G:       F     B     E     G     (Random=3, Way 3 evicted)

Performance vs LRU:
For 2-way: Random has ~1.1x miss rate of LRU
For 4-way: Random has ~1.05x miss rate of LRU
For 8-way: Random has ~1.02x miss rate of LRU

As associativity increases, random approaches LRU!

Why Random Works:
- Avoids worst-case patterns that hurt FIFO
- No Belady's anomaly
- Average case is good
- Extremely cheap to implement`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pseudo-LRU (PLRU)</h2>
    <p className="leading-relaxed">
      Pseudo-LRU approximates LRU behavior with less hardware overhead. Several
      variants exist, with tree-based PLRU being common.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Tree-based Pseudo-LRU (4-way example):

Use a binary tree with 3 bits (k-1 bits for k ways):
           [b0]
          /    \\
       [b1]    [b2]
       /  \\    /  \\
     W0   W1  W2   W3

Bit meaning: 0 = left path, 1 = right path
"Points toward" recently accessed side

On access to Way:
  W0: Set b0=1, b1=1  (point away from W0)
  W1: Set b0=1, b1=0  (point away from W1)
  W2: Set b0=0, b2=1  (point away from W2)
  W3: Set b0=0, b2=0  (point away from W3)

On replacement, follow bits to find victim:
  Path: b0 -> (b1 or b2) -> Way

Example sequence:
Access W0: [b0,b1,b2] = [1,1,_]
Access W2: [b0,b1,b2] = [0,1,1]
Access W1: [b0,b1,b2] = [1,0,1]
Access W3: [b0,b1,b2] = [0,0,0]

Victim selection: Follow [0,0,_] -> W0 (left,left)

Advantages:
- Only k-1 bits per set (vs log2(k!) for true LRU)
- Simple update logic
- 90%+ as effective as true LRU

8-way PLRU: 7 bits per set
True LRU: log2(8!) = 15.3 bits per set`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Other Replacement Policies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Additional Replacement Policies:

1. LFU (Least Frequently Used)
   - Track access count per line
   - Evict line with lowest count
   - Problem: Old lines with high count never evicted
   - Variant: Decay counts over time

2. MRU (Most Recently Used)
   - Opposite of LRU
   - Useful for specific access patterns (e.g., looping)
   - Rarely used as default policy

3. CLOCK (Second Chance)
   - FIFO with a "use" bit
   - On eviction: If use=1, clear and skip; if use=0, evict
   - Approximates LRU
   - Common in OS page replacement

4. NRU (Not Recently Used)
   - 2 bits per line: Referenced, Modified
   - Priority: (0,0) > (0,1) > (1,0) > (1,1)
   - Evict from lowest priority class

5. RRIP (Re-Reference Interval Prediction)
   - Predict when block will be reused
   - Used in Intel processors
   - Better for scan-resistant behavior

6. DRRIP (Dynamic RRIP)
   - Adapts between SRRIP and BRRIP
   - Modern high-performance caches`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Policies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Policy</th>
            <th className="p-3 border">Miss Rate</th>
            <th className="p-3 border">Hardware Cost</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">LRU</td>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Pseudo-LRU</td>
            <td className="p-3 border">Near-Best</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Random</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Lowest</td>
            <td className="p-3 border">Lowest</td>
          </tr>
          <tr>
            <td className="p-3 border">LFU</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Performance Comparison Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Comparison for 4-way Set Associative Cache:

Access sequence: A B C D A B E A B C D E

LRU:
Initial: [_, _, _, _]
A: [A, _, _, _] Miss
B: [B, A, _, _] Miss
C: [C, B, A, _] Miss
D: [D, C, B, A] Miss
A: [A, D, C, B] Hit
B: [B, A, D, C] Hit
E: [E, B, A, D] Miss (C evicted)
A: [A, E, B, D] Hit
B: [B, A, E, D] Hit
C: [C, B, A, E] Miss (D evicted)
D: [D, C, B, A] Miss (E evicted)
E: [E, D, C, B] Miss (A evicted)
Total: 8 misses, 4 hits

FIFO:
A: [A, _, _, _] Miss
B: [A, B, _, _] Miss
C: [A, B, C, _] Miss
D: [A, B, C, D] Miss
A: [A, B, C, D] Hit
B: [A, B, C, D] Hit
E: [E, B, C, D] Miss
A: [E, A, C, D] Miss
B: [E, A, B, D] Miss
C: [E, A, B, C] Miss
D: [D, A, B, C] Miss
E: [D, E, B, C] Miss
Total: 10 misses, 2 hits

LRU outperforms FIFO for this pattern!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Replacement needed when cache/set is full on miss</li>
        <li>LRU: Best performance but expensive hardware</li>
        <li>FIFO: Simple but can suffer from Belady's anomaly</li>
        <li>Random: Surprisingly effective with minimal cost</li>
        <li>Pseudo-LRU: Good balance of cost and performance</li>
        <li>Higher associativity reduces policy importance</li>
        <li>Modern caches often use PLRU or advanced policies like RRIP</li>
        <li>Policy choice depends on workload characteristics</li>
      </ul>
    </div>
  </div>
);

export default CacheReplacement;
