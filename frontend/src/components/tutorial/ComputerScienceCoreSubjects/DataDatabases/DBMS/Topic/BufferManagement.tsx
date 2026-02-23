import React from "react";

const BufferManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Buffer Management</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Buffer management handles the transfer of data between disk and main memory.
      The buffer manager maintains a buffer pool in memory to cache frequently accessed
      disk pages, significantly reducing disk I/O and improving database performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Buffer Pool Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Buffer Pool: In-memory cache of disk pages

Memory:
+-------+-------+-------+-------+-------+
| Frame | Frame | Frame | Frame | Frame |
|   0   |   1   |   2   |   3   |   4   |
| PageA | PageB | Free  | PageC | PageD |
+-------+-------+-------+-------+-------+
     ↑       ↑               ↑       ↑
     |       |               |       |
     +-------+-------+-------+-------+
             Disk Pages

Frame: Memory slot for one page
Page: Fixed-size block from disk
Typical page size: 4KB, 8KB, or 16KB`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Buffer Manager Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Page Request:

1. Check if page in buffer pool
   - If yes: Return pointer (buffer hit)
   - If no: Buffer miss

2. On Buffer Miss:
   - Find free frame or evict a page
   - Read requested page from disk
   - Place in frame
   - Return pointer

3. Page Eviction:
   - Choose victim frame (replacement policy)
   - If dirty: Write to disk first
   - Free the frame

Page Operations:
pin(pageId)   - Request page, increment pin count
unpin(pageId) - Done with page, decrement pin count
markDirty()   - Page has been modified`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pin Count and Dirty Flag</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Frame Metadata:

+-------+-------+-------+-------+
| Page  | Pin   | Dirty | Last  |
| ID    | Count | Flag  | Access|
+-------+-------+-------+-------+
| P101  |   2   | true  | 10:15 |
| P205  |   0   | false | 10:10 |
| P307  |   1   | true  | 10:14 |
+-------+-------+-------+-------+

Pin Count:
- Number of current users of page
- Cannot evict if pin_count > 0
- Transactions pin pages they use

Dirty Flag:
- true if page modified in memory
- Must write to disk before eviction
- Ensures durability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Page Replacement Policies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When buffer is full, choose victim for eviction:

1. LRU (Least Recently Used)
   - Evict page unused longest
   - Good for general workloads
   - Uses access timestamp

2. Clock (Second Chance)
   - Circular buffer with reference bit
   - If referenced: clear bit, move on
   - If not: evict
   - Approximates LRU, cheaper

3. MRU (Most Recently Used)
   - Evict most recently used
   - Good for sequential scans

4. LRU-K
   - Track last K references
   - Better for mixed workloads

Constraint: Only evict pages with pin_count = 0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LRU Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LRU with Doubly-Linked List:

Most Recent → ... → Least Recent
    ↓                    ↓
  [Head]    ...      [Tail]

On Access:
- Move page to head of list

On Eviction:
- Remove from tail (oldest)
- Must have pin_count = 0

Example:
Access sequence: A, B, C, B, A, D

Step 1: A         List: [A]
Step 2: B, A      List: [B, A]
Step 3: C, B, A   List: [C, B, A]
Step 4: B, C, A   List: [B, C, A] (B moved to head)
Step 5: A, B, C   List: [A, B, C] (A moved to head)
Step 6: D, A, B   List: [D, A, B] (C evicted)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Clock (Second Chance) Algorithm:

Frames arranged in circle with clock hand:

         [1:P1]
        /      \\
    [1:P5]    [0:P2] ← hand
        \\      /
         [1:P3]

Reference bit: 1 = recently used, 0 = not

Algorithm:
1. Check frame at clock hand
2. If ref_bit = 0 and pin_count = 0: EVICT
3. If ref_bit = 1: Set to 0, advance hand
4. Repeat until victim found

Cheaper than LRU (no list maintenance)
Still provides good hit rate`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Buffer Pool Configuration</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Tuning Buffer Pool:

Size:
- Larger = fewer disk I/Os
- Typical: 70-80% of available RAM
- MySQL: innodb_buffer_pool_size
- PostgreSQL: shared_buffers

Multiple Buffer Pools:
- Separate pools for different purposes
- Index pages vs data pages
- Reduces contention

Prefetching:
- Read ahead sequential pages
- Anticipate future requests

Write Strategies:
- Write-through: Immediate disk write
- Write-back: Delay, batch writes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Buffer Manager Metrics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Goal</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hit Ratio</td>
            <td className="p-3 border">Hits / (Hits + Misses)</td>
            <td className="p-3 border">&gt; 95%</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Miss Rate</td>
            <td className="p-3 border">Misses requiring disk I/O</td>
            <td className="p-3 border">Minimize</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dirty Ratio</td>
            <td className="p-3 border">Dirty pages / Total pages</td>
            <td className="p-3 border">Balance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Evictions/sec</td>
            <td className="p-3 border">Pages evicted per second</td>
            <td className="p-3 border">Low</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Buffer pool caches disk pages in memory</li>
        <li>Pin count prevents eviction of in-use pages</li>
        <li>Dirty pages must be written before eviction</li>
        <li>LRU and Clock are common replacement policies</li>
        <li>Higher hit ratio = better performance</li>
      </ul>
    </div>
  </div>
);

export default BufferManagement;
