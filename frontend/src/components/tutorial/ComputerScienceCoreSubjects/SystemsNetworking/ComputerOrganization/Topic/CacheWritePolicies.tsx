import React from 'react';

const CacheWritePolicies: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cache Write Policies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cache write policies determine how and when modified data in the cache is written
      back to main memory. The choice of write policy affects system performance,
      memory bandwidth usage, data consistency, and cache complexity. There are two
      main decisions: what to do on a write hit, and what to do on a write miss.
    </p>

    <h2 className="text-3xl font-bold mt-8">Write Policy Decisions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Two Key Questions:

1. Write Hit Policy: What happens when writing to data in cache?
   - Write-Through: Update cache AND memory immediately
   - Write-Back: Update only cache, memory later

2. Write Miss Policy: What happens when writing to data NOT in cache?
   - Write-Allocate: Load block into cache, then write
   - No-Write-Allocate: Write directly to memory, don't load

Common Combinations:
- Write-Through + No-Write-Allocate (simpler)
- Write-Back + Write-Allocate (higher performance)

Decision Flow:
            Write Request
                 |
            +----+----+
            |         |
         HIT        MISS
            |         |
            v         v
    +-------+---+ +---+-------+
    |Write-     | |Write-     |
    |Through or | |Allocate or|
    |Write-Back | |No-Allocate|
    +-----------+ +-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write-Through Policy</h2>
    <p className="leading-relaxed">
      In write-through, every write updates both the cache and main memory simultaneously.
      This keeps memory always consistent with the cache but generates more memory traffic.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write-Through Operation:

On Write Hit:
    +-------+     +-------+     +--------+
    |  CPU  |---->| Cache |---->| Memory |
    +-------+  |  +-------+  |  +--------+
               |             |
               +-- Write ----+-- Write
               to Cache      to Memory

Both updated on every write!

Example:
CPU writes value 42 to address 0x1000
1. Update cache line containing 0x1000
2. Send write to memory (0x1000 = 42)
Both operations happen together

Write-Through Flow:
1. CPU issues write
2. Check cache for address
3. If Hit:
   - Update cache with new data
   - Send write to memory
4. If Miss:
   - Write directly to memory
   - (With Write-Allocate: also load into cache)

Advantages:
+ Memory always has current data
+ Simple to implement
+ Cache and memory always consistent
+ Easier multiprocessor support
+ No dirty bits needed

Disadvantages:
- High memory bandwidth usage
- Every write goes to memory
- CPU may stall waiting for memory
- More power consumption`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write-Back Policy</h2>
    <p className="leading-relaxed">
      In write-back, writes only update the cache. Modified (dirty) blocks are
      written to memory only when evicted from the cache.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write-Back Operation:

On Write Hit:
    +-------+     +-------+     +--------+
    |  CPU  |---->| Cache |     | Memory |
    +-------+     +-------+     +--------+
                    |
                 Update      (Memory not updated yet)
                 + Set
                 Dirty=1

On Cache Line Eviction (if Dirty=1):
    +-------+     +-------+     +--------+
    |  CPU  |     | Cache |---->| Memory |
    +-------+     +-------+     +--------+
                    |              |
                 Evicting      Write-back
                 dirty line    dirty data

Cache Line with Dirty Bit:
+-------+-------+-------+------------------+
| Valid | Dirty |  Tag  |   Data Block     |
+-------+-------+-------+------------------+
    1       1    0x1234   [modified data]

Write-Back Flow:
1. CPU issues write
2. Check cache for address
3. If Hit:
   - Update cache with new data
   - Set dirty bit = 1
   - (Memory NOT updated)
4. If Miss:
   - With Write-Allocate: Load block, then update
   - If evicting dirty block: Write it to memory first
5. On Eviction:
   - If dirty: Write block to memory
   - If clean: Just discard

Advantages:
+ Lower memory bandwidth
+ Multiple writes to same block absorbed
+ Better performance for write-intensive workloads
+ Less power (fewer memory writes)

Disadvantages:
- Memory may have stale data
- Complexity (dirty bits, write-back logic)
- On eviction, must check and write-back
- Harder multiprocessor coherence`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write-Allocate vs No-Write-Allocate</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write Miss Handling:

Write-Allocate (Fetch on Write):
1. Load the block from memory into cache
2. Update the relevant bytes in cache
3. (For write-back: set dirty bit)

    Write Miss to 0x1000:
    1. Fetch block containing 0x1000
    2. Place in cache
    3. Modify the word at 0x1000
    4. Cache now has modified block

No-Write-Allocate (Write Around):
1. Write directly to memory
2. Do NOT load block into cache

    Write Miss to 0x1000:
    1. Send write directly to memory
    2. Cache unchanged
    (Block loaded only on read miss)

Typical Pairings:

Write-Through + No-Write-Allocate:
- Writes go to memory anyway
- Why load block just to write through?
- Reduces cache pollution

Write-Back + Write-Allocate:
- Block will be in cache with new data
- Further writes hit in cache (fast)
- Exploits temporal locality of writes

Example Comparison:
Sequence: Write A, Write A, Write A (same address)

Write-Through + No-Write-Allocate:
- Write 1: Miss, write to memory
- Write 2: Miss, write to memory
- Write 3: Miss, write to memory
Total: 3 memory writes

Write-Back + Write-Allocate:
- Write 1: Miss, load block, update cache (dirty)
- Write 2: Hit, update cache
- Write 3: Hit, update cache
- (Later eviction: 1 memory write)
Total: 1 memory read, 1 memory write`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write Buffer</h2>
    <p className="leading-relaxed">
      Write buffers are used to improve write-through performance by allowing the
      CPU to continue without waiting for memory writes to complete.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write Buffer for Write-Through:

Without Write Buffer:
    CPU --> Cache --> Memory
    CPU waits for each memory write to complete
    Memory write takes ~100 cycles!

With Write Buffer:
    CPU --> Cache --> Write Buffer --> Memory
    CPU continues immediately
    Buffer drains to memory in background

    +-------+     +-------+     +--------+     +--------+
    |  CPU  |---->| Cache |---->| Write  |---->| Memory |
    +-------+     +-------+     | Buffer |     +--------+
                                +--------+
                                | Entry1 |
                                | Entry2 |
                                | Entry3 |
                                |  ...   |
                                +--------+

Write Buffer Operation:
1. CPU writes to cache
2. Write data + address added to buffer
3. CPU continues (no wait)
4. Buffer sends writes to memory (background)
5. If buffer full, CPU must stall

Write Buffer with Forwarding:
- On read, check write buffer first
- If address in buffer, use buffer data
- Ensures correct data even before memory write

Typical Write Buffer: 4-8 entries
Each entry: address + data (block or word)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Write Policies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Write-Through</th>
            <th className="p-3 border">Write-Back</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Bandwidth</td>
            <td className="p-3 border">High (every write)</td>
            <td className="p-3 border">Low (only evictions)</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Consistency</td>
            <td className="p-3 border">Always consistent</td>
            <td className="p-3 border">May be stale</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Complexity</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">Complex (dirty bits)</td>
          </tr>
          <tr>
            <td className="p-3 border">Write Performance</td>
            <td className="p-3 border">Limited by memory</td>
            <td className="p-3 border">Cache speed</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiprocessor</td>
            <td className="p-3 border">Easier coherence</td>
            <td className="p-3 border">Harder coherence</td>
          </tr>
          <tr>
            <td className="p-3 border">Power Consumption</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Level Cache Write Policies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Policies Across Cache Levels:

Typical Modern Configuration:
+-----+    +-----+    +-----+    +--------+
| L1  |--->| L2  |--->| L3  |--->| Memory |
+-----+    +-----+    +-----+    +--------+
  |          |          |
Write-     Write-     Write-
Back to    Back to    Back to
L2         L3         Memory

L1 -> L2: Often write-back
- Fast L2 can absorb writes
- Reduces L1 stalls

L2 -> L3: Usually write-back
- L3 acts as victim cache
- Dirty blocks written on eviction

L3 -> Memory: Write-back
- Minimize memory traffic
- Batch writes on eviction

Inclusive vs Exclusive Impact:
Inclusive Cache:
- L1 eviction may not require write-back
- L2 has copy of L1 dirty data
- L2 handles write-back to memory

Exclusive Cache:
- L1 eviction always writes to L2
- No duplication between levels
- More complex write-back paths`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write Policy Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Trace with Different Policies

Operations: Write A, Read B (B maps to A's line), Write A

Write-Through + No-Write-Allocate:
1. Write A: Miss, write to memory
   Cache: [empty], Memory: A updated
2. Read B: Miss, load B into cache
   Cache: [B], Memory: A,B
3. Write A: Miss (A not in cache), write to memory
   Cache: [B], Memory: A updated
Memory writes: 2

Write-Back + Write-Allocate:
1. Write A: Miss, load A's block, update, dirty=1
   Cache: [A dirty], Memory: A
2. Read B: Miss, evict A (write-back), load B
   Cache: [B clean], Memory: A updated
3. Write A: Miss, load A's block, update, dirty=1
   Cache: [A dirty], Memory: A
Memory writes: 1 (on eviction)
Memory reads: 2 (load A, load B)

Note: Write-back reduced memory writes but
      required loading blocks on write miss.

For write-intensive code (many writes to same data):
Write-Back >> Write-Through in performance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Usage in Real Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Real-World Cache Write Policies:

Intel/AMD x86 Processors:
- L1, L2, L3: Write-back + Write-allocate
- Write-combining for frame buffers (special case)
- UC (Uncacheable) regions: Write-through or no cache

ARM Processors:
- Configurable per region
- L1: Often write-back
- Some embedded: Write-through for simplicity

GPU Caches:
- L1: Often write-through (simpler coherence)
- L2: Write-back
- Texture caches: Read-only (no write policy)

Embedded Systems:
- Often write-through for simplicity
- Data integrity more important than performance
- Some use write-back with battery backup

Memory-Mapped I/O:
- Must be uncached or write-through
- Writes must reach device immediately
- Read must get current device state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Write-through: Updates both cache and memory on every write</li>
        <li>Write-back: Updates only cache; memory updated on eviction</li>
        <li>Write-allocate: Loads block into cache on write miss</li>
        <li>No-write-allocate: Writes directly to memory on miss</li>
        <li>Write-through is simpler but uses more bandwidth</li>
        <li>Write-back is more efficient but complex (dirty bits)</li>
        <li>Write buffers hide write-through latency</li>
        <li>Modern CPUs typically use write-back with write-allocate</li>
      </ul>
    </div>
  </div>
);

export default CacheWritePolicies;
