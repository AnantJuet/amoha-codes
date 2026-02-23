import React from "react";

const HeapManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Heap Memory Management ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heap Memory Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Heap memory management</strong> is the process of allocating, tracking, and
      deallocating memory from the heap region during program execution. Unlike stack allocation
      which is automatic, heap memory must be explicitly managed by the programmer or automatically
      by a garbage collector. Efficient heap management is crucial for program performance and
      avoiding memory-related bugs.
    </p>

    {/* Heap Manager Responsibilities */}
    <h2 className="text-3xl font-bold mt-8">Heap Manager Responsibilities</h2>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Allocation:</strong> Find and provide suitable free memory blocks</li>
      <li><strong>Deallocation:</strong> Return freed memory for future use</li>
      <li><strong>Tracking:</strong> Maintain information about free and allocated blocks</li>
      <li><strong>Coalescing:</strong> Merge adjacent free blocks</li>
      <li><strong>Splitting:</strong> Divide large blocks for smaller requests</li>
      <li><strong>Minimizing Fragmentation:</strong> Reduce wasted memory</li>
    </ul>

    {/* Memory Block Structure */}
    <h2 className="text-3xl font-bold mt-8">Memory Block Structure</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Heap Block Organization:

Each block has a header (and optionally a footer):

+------------------------+
| Header                 |
| +--------------------+ |
| | Size (31 bits)     | |  <- Total block size
| | Allocated (1 bit)  | |  <- 0 = free, 1 = allocated
| +--------------------+ |
+------------------------+
|                        |
| Payload                |  <- User data (for allocated blocks)
| (or free list ptrs)    |  <- Prev/next pointers (for free blocks)
|                        |
+------------------------+
| Footer (optional)      |
| +--------------------+ |
| | Size               | |  <- Copy of header size
| +--------------------+ |
+------------------------+

Example 32-byte block (allocated):
+--------+---------------------------+--------+
| Header | Payload (24 bytes)        | Footer |
| 32 | 1 |                           | 32     |
+--------+---------------------------+--------+

Minimum block size = header + footer + min payload
(often 16 or 32 bytes due to alignment)`}
      </pre>
    </div>

    {/* Free List Organizations */}
    <h2 className="text-3xl font-bold mt-8">Free List Organizations</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Implicit Free List</h3>
    <p className="leading-relaxed">
      All blocks (free and allocated) are linked by their sizes:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Implicit Free List:

Start -> [32|A] -> [64|F] -> [32|A] -> [96|F] -> [48|A] -> End

Traverse ALL blocks to find free ones:
- Start at beginning of heap
- Use size to find next block: next = current + size
- Check allocated bit to identify free blocks

Pros: Simple, minimal overhead
Cons: O(n) allocation time (must search all blocks)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Explicit Free List</h3>
    <p className="leading-relaxed">
      Only free blocks are linked together:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Explicit Free List:

Free blocks contain prev/next pointers in payload area:

+--------+------+------+------------------+--------+
| Header | Prev | Next | (unused payload) | Footer |
+--------+------+------+------------------+--------+

Free List:
HEAD -> [Free Block 1] <-> [Free Block 2] <-> [Free Block 3] -> NULL

Allocated blocks only need header/footer (no pointers).

Pros: O(free blocks) allocation time
Cons: Minimum block size must hold pointers`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Segregated Free Lists</h3>
    <p className="leading-relaxed">
      Multiple free lists organized by block size:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Segregated Free Lists:

Size Class 1 (1-32 bytes):
  -> [16] -> [24] -> [32] -> NULL

Size Class 2 (33-64 bytes):
  -> [48] -> [64] -> NULL

Size Class 3 (65-128 bytes):
  -> [96] -> [128] -> NULL

Size Class 4 (129-256 bytes):
  -> [200] -> NULL

Size Class 5 (257+ bytes):
  -> [512] -> [1024] -> NULL

Allocation:
1. Determine size class for request
2. Search that class's list
3. If empty, try larger classes
4. Split if necessary

Pros: Fast allocation (O(1) for common sizes)
Cons: More complex, potential internal fragmentation`}
      </pre>
    </div>

    {/* Allocation Strategies */}
    <h2 className="text-3xl font-bold mt-8">Allocation Strategies</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros/Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">First Fit</td>
            <td className="p-3 border">Use first block that fits</td>
            <td className="p-3 border">Fast but fragments start</td>
          </tr>
          <tr>
            <td className="p-3 border">Next Fit</td>
            <td className="p-3 border">Start from last position</td>
            <td className="p-3 border">Distributes fragments</td>
          </tr>
          <tr>
            <td className="p-3 border">Best Fit</td>
            <td className="p-3 border">Use smallest fitting block</td>
            <td className="p-3 border">Less waste, but slow</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Fit</td>
            <td className="p-3 border">Use largest block</td>
            <td className="p-3 border">Leaves usable fragments</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Block Splitting */}
    <h2 className="text-3xl font-bold mt-8">Block Splitting</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Splitting a Block:

Request: 32 bytes
Found: 128-byte free block

Before splitting:
+--------------------------------+
| 128 bytes (free)               |
+--------------------------------+

After splitting:
+----------------+---------------+
| 32 bytes (used)| 96 bytes(free)|
+----------------+---------------+

Algorithm:
1. Check if remainder >= minimum block size
2. If yes, split and update headers/footers
3. If no, allocate entire block (internal fragmentation)

Splitting code (pseudocode):
if (block.size - request >= MIN_BLOCK):
    newFreeBlock.size = block.size - request
    newFreeBlock.allocated = 0
    block.size = request
    block.allocated = 1
    addToFreeList(newFreeBlock)
else:
    block.allocated = 1  // Use entire block`}
      </pre>
    </div>

    {/* Coalescing */}
    <h2 className="text-3xl font-bold mt-8">Coalescing Free Blocks</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Coalescing merges adjacent free blocks:

Before freeing block B:
+--------+--------+--------+
| A(used)| B(used)| C(free)|
+--------+--------+--------+

After freeing B - Case: Next block free
+--------+------------------+
| A(used)|   B+C (free)     |
+--------+------------------+

Four Cases when Freeing Block B:

Case 1: Both neighbors allocated
+--------+--------+--------+
| A(used)| B->free| C(used)|
+--------+--------+--------+
Result: Just mark B as free

Case 2: Previous free, next allocated
+--------+--------+--------+
| A(free)| B->free| C(used)|
+--------+--------+--------+
Result: Merge A and B

Case 3: Previous allocated, next free
+--------+--------+--------+
| A(used)| B->free| C(free)|
+--------+--------+--------+
Result: Merge B and C

Case 4: Both neighbors free
+--------+--------+--------+
| A(free)| B->free| C(free)|
+--------+--------+--------+
Result: Merge A, B, and C

Immediate vs Deferred Coalescing:
- Immediate: Coalesce on every free
- Deferred: Coalesce periodically or on allocation failure`}
      </pre>
    </div>

    {/* Memory Alignment */}
    <h2 className="text-3xl font-bold mt-8">Memory Alignment</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Alignment Requirements:

Most systems require specific alignment:
- 8-byte alignment for 64-bit systems
- 16-byte alignment for SIMD operations

Example: 8-byte alignment
Request: 13 bytes
Actual allocation: 16 bytes (next multiple of 8)

Aligned address:
addr & 0x7 == 0  (last 3 bits are zero)

Padding calculation:
padding = (align - (size % align)) % align
aligned_size = size + padding

Impact on block structure:
+--------+---------------------------+--------+
| Header | Payload (aligned)         |Padding |
| 8 bytes| User data                 |0-7 byte|
+--------+---------------------------+--------+
         ^
         Aligned to 8-byte boundary`}
      </pre>
    </div>

    {/* Memory Pool Allocators */}
    <h2 className="text-3xl font-bold mt-8">Specialized Allocators</h2>

    <h3 className="text-2xl font-semibold mt-6">Slab Allocator</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Slab Allocator (for fixed-size objects):

Slab = Large block pre-divided into fixed-size slots

+----+----+----+----+----+----+----+----+
| O1 | O2 |FREE| O3 |FREE|FREE| O4 |FREE|
+----+----+----+----+----+----+----+----+

Each slot = sizeof(object)

Free slots linked together:
HEAD -> slot[2] -> slot[4] -> slot[5] -> slot[7] -> NULL

Allocation: O(1) - pop from free list
Deallocation: O(1) - push to free list
No external fragmentation!

Used for: kernel objects, frequently allocated structures`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Buddy Allocator</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Buddy Allocator:

Memory is split into power-of-2 sized buddies:

Initial: 1024 bytes
         [          1024          ]

Allocate 100 bytes (rounds to 128):
         [512      ][512          ]
         [256][256 ][512          ]
         [128][128][256 ][512      ]
         [A  ][128][256 ][512      ]  (A = allocated 128)

When freed, merge with buddy if both free:
         [128][128][256 ][512      ]
         [256      ][256 ][512      ]
         [512            ][512      ]
         [          1024          ]

Pros: Fast coalescing, no external fragmentation
Cons: Internal fragmentation (power-of-2 rounding)`}
      </pre>
    </div>

    {/* Common Issues */}
    <h2 className="text-3xl font-bold mt-8">Common Heap Management Issues</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Memory Leaks
   ptr = malloc(100);
   ptr = malloc(200);  // First allocation leaked!

2. Dangling Pointers
   ptr = malloc(100);
   free(ptr);
   *ptr = 42;  // Undefined behavior!

3. Double Free
   free(ptr);
   free(ptr);  // Corruption or crash!

4. Buffer Overflow
   ptr = malloc(10);
   strcpy(ptr, "This string is too long!");  // Overflow!

5. Fragmentation
   // Many alloc/free cycles
   // Total free memory = 100MB
   // Largest contiguous block = 1MB
   // Cannot allocate 10MB!

Prevention:
- Use smart pointers (C++)
- Use garbage collection (Java, Go)
- Use memory sanitizers (ASan, Valgrind)
- Follow allocation/free discipline`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What is the purpose of coalescing in heap management?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To split large blocks into smaller ones</li>
      <li>(B) To merge adjacent free blocks</li>
      <li>(C) To move allocated blocks together</li>
      <li>(D) To zero out freed memory</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) To merge adjacent free blocks - Coalescing reduces external fragmentation.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Which free list organization provides O(1) allocation for common sizes?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Implicit free list</li>
      <li>(B) Explicit free list</li>
      <li>(C) Segregated free lists</li>
      <li>(D) Single linked list</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Segregated free lists - Size classes enable fast lookup.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What is internal fragmentation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Free memory split into non-contiguous pieces</li>
      <li>(B) Wasted space inside an allocated block</li>
      <li>(C) Memory leaks</li>
      <li>(D) Corrupted heap metadata</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Wasted space inside an allocated block - Due to alignment or minimum sizes.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Heap managers track free and allocated blocks using headers/footers</li>
      <li>Free lists (implicit, explicit, segregated) organize free blocks</li>
      <li>Allocation strategies: first fit, best fit, next fit, worst fit</li>
      <li>Splitting divides large blocks; coalescing merges adjacent free blocks</li>
      <li>Specialized allocators (slab, buddy) optimize for specific patterns</li>
      <li>Common issues: leaks, dangling pointers, double free, fragmentation</li>
    </ul>

  </div>
);

export default HeapManagement;
