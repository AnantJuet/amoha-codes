import React from "react";

const HeapAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Heap-Based Dynamic Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heap-Based Dynamic Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Heap allocation</strong> is a dynamic memory allocation strategy where memory is
      allocated and deallocated at runtime from a region of memory called the heap. Unlike stack
      allocation, heap memory can be allocated and freed in any order, making it suitable for
      data structures whose size is not known at compile time or whose lifetime extends beyond
      the scope of a single function call.
    </p>

    {/* What is the Heap */}
    <h2 className="text-3xl font-bold mt-8">What is the Heap?</h2>
    <p className="leading-relaxed">
      The heap is a region of memory used for dynamic memory allocation. It is separate from
      the stack and provides more flexibility at the cost of performance:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Memory can be allocated in any size at runtime</li>
      <li>Memory can be freed in any order (not LIFO)</li>
      <li>Allocated memory persists until explicitly freed or garbage collected</li>
      <li>Typically much larger than the stack</li>
      <li>Managed by allocator algorithms</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Layout with Heap:

+---------------------------+  High Address
|          STACK            |
|             |             |
|             v             |
|                           |
|       (Free Space)        |
|                           |
|             ^             |
|             |             |
|          HEAP             |
|   +-------------------+   |
|   | Allocated Block 3 |   |
|   +-------------------+   |
|   |      (Free)       |   |
|   +-------------------+   |
|   | Allocated Block 2 |   |
|   +-------------------+   |
|   | Allocated Block 1 |   |
|   +-------------------+   |
+---------------------------+
|     Static/Global Data    |
+---------------------------+
|          Code             |
+---------------------------+  Low Address`}
      </pre>
    </div>

    {/* Dynamic Allocation Functions */}
    <h2 className="text-3xl font-bold mt-8">Dynamic Allocation Functions</h2>
    <p className="leading-relaxed">
      Different programming languages provide various mechanisms for heap allocation:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C Memory Allocation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// malloc - Allocate uninitialized memory
int *arr = (int*)malloc(100 * sizeof(int));

// calloc - Allocate and zero-initialize
int *arr2 = (int*)calloc(100, sizeof(int));

// realloc - Resize previously allocated memory
arr = (int*)realloc(arr, 200 * sizeof(int));

// free - Deallocate memory
free(arr);
free(arr2);`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C++ Memory Allocation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// new - Allocate with constructor call
int* ptr = new int(42);           // Single object
int* arr = new int[100];          // Array

// delete - Deallocate with destructor call
delete ptr;                        // Single object
delete[] arr;                      // Array

// Smart pointers (automatic deallocation)
std::unique_ptr<int> uptr = std::make_unique<int>(42);
std::shared_ptr<int> sptr = std::make_shared<int>(42);`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Java/Python (Garbage Collected):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Java - new allocates on heap, GC handles deallocation
int[] arr = new int[100];
String str = new String("Hello");
// No explicit free - garbage collector reclaims memory

# Python - Objects allocated on heap automatically
arr = [0] * 100
obj = MyClass()
# No explicit free - reference counting + GC`}
      </pre>
    </div>

    {/* Heap Allocation Algorithms */}
    <h2 className="text-3xl font-bold mt-8">Heap Allocation Algorithms</h2>
    <p className="leading-relaxed">
      The heap manager uses various algorithms to find suitable free blocks for allocation:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. First Fit</h3>
    <p className="leading-relaxed">
      Searches from the beginning and allocates the first block that is large enough.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`First Fit Algorithm:

Free List: [100 bytes] -> [50 bytes] -> [200 bytes] -> [75 bytes]

Request: 60 bytes

Search: 100 >= 60? Yes! Use this block.

Result:
[40 free] [60 used] -> [50 bytes] -> [200 bytes] -> [75 bytes]

Pros: Fast (stops at first match)
Cons: Can cause fragmentation at start of heap`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Best Fit</h3>
    <p className="leading-relaxed">
      Searches entire list to find the smallest block that is large enough.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Best Fit Algorithm:

Free List: [100 bytes] -> [50 bytes] -> [200 bytes] -> [75 bytes]

Request: 60 bytes

Search: Check all blocks:
  - 100 bytes: fits (40 left over)
  - 50 bytes:  too small
  - 200 bytes: fits (140 left over)
  - 75 bytes:  fits (15 left over) <- Best!

Result: Use 75-byte block
[100 bytes] -> [50 bytes] -> [200 bytes] -> [15 free][60 used]

Pros: Minimizes waste
Cons: Slow (must search entire list), causes small fragments`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Worst Fit</h3>
    <p className="leading-relaxed">
      Allocates from the largest available block.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Worst Fit Algorithm:

Free List: [100 bytes] -> [50 bytes] -> [200 bytes] -> [75 bytes]

Request: 60 bytes

Search: Find largest: 200 bytes

Result: Use 200-byte block
[100 bytes] -> [50 bytes] -> [140 free][60 used] -> [75 bytes]

Pros: Leaves larger remaining fragments (more useful)
Cons: Slow, quickly uses up large blocks`}
      </pre>
    </div>

    {/* Free List Management */}
    <h2 className="text-3xl font-bold mt-8">Free List Management</h2>
    <p className="leading-relaxed">
      The heap manager maintains a data structure to track free and allocated blocks:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Block Header Structure:

Each heap block has a header containing metadata:

+------------------+
| Size (4 bytes)   |  <- Total block size including header
+------------------+
| Flags (4 bytes)  |  <- Allocated/Free, prev allocated, etc.
+------------------+
| Prev Ptr         |  <- Pointer to previous free block
+------------------+
| Next Ptr         |  <- Pointer to next free block
+------------------+
|                  |
|   User Data      |  <- Actual usable memory
|                  |
+------------------+
| Footer (size)    |  <- For coalescing (optional)
+------------------+

Free List Organization:

Explicit Free List:
HEAD -> [Free Block 1] <-> [Free Block 2] <-> [Free Block 3] -> NULL

Segregated Free Lists (by size):
Small (1-32):    -> [Block] -> [Block]
Medium (33-128): -> [Block] -> [Block] -> [Block]
Large (129+):    -> [Block]`}
      </pre>
    </div>

    {/* Fragmentation */}
    <h2 className="text-3xl font-bold mt-8">Heap Fragmentation</h2>
    <p className="leading-relaxed">
      Fragmentation is a major challenge in heap management. There are two types:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Internal Fragmentation</h3>
    <p className="leading-relaxed">
      Wasted space inside allocated blocks due to alignment or minimum size requirements.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Internal Fragmentation Example:

Request: 1 byte
Minimum allocation: 16 bytes (for alignment)

+------------------+
| Header (8 bytes) |
+------------------+
| 1 byte (used)    |
| 15 bytes (waste) |  <- Internal fragmentation
+------------------+

Wasted: 15 bytes per small allocation`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">External Fragmentation</h3>
    <p className="leading-relaxed">
      Free memory split into small non-contiguous blocks that cannot satisfy large requests.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`External Fragmentation Example:

Heap state after many allocations and frees:

+-------+------+-------+------+-------+------+-------+
| Used  | Free | Used  | Free | Used  | Free | Used  |
| 100B  | 50B  | 100B  | 30B  | 100B  | 40B  | 100B  |
+-------+------+-------+------+-------+------+-------+

Total free: 50 + 30 + 40 = 120 bytes
Request: 100 bytes

FAILS! Even though 120 bytes free, no contiguous 100-byte block!

Solution: Coalescing - Merge adjacent free blocks`}
      </pre>
    </div>

    {/* Coalescing */}
    <h2 className="text-3xl font-bold mt-8">Coalescing Free Blocks</h2>
    <p className="leading-relaxed">
      Coalescing merges adjacent free blocks to reduce external fragmentation:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Coalescing Example:

Before freeing middle block:
+-------+------+-------+
| Used  | Used | Free  |
|  A    |  B   |  C    |
+-------+------+-------+

Free block B:
+-------+------+-------+
| Used  | Free | Free  |
|  A    |  B   |  C    |
+-------+------+-------+

After coalescing (immediate):
+-------+-------------+
| Used  |    Free     |  <- B and C merged
|  A    |   B + C     |
+-------+-------------+

Four cases when freeing block B:
1. Both neighbors allocated:    No coalescing
2. Next block free:            Merge with next
3. Previous block free:        Merge with previous
4. Both neighbors free:        Merge all three`}
      </pre>
    </div>

    {/* Comparison: Stack vs Heap */}
    <h2 className="text-3xl font-bold mt-8">Stack vs Heap Allocation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Stack</th>
            <th className="p-3 border">Heap</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Allocation Speed</td>
            <td className="p-3 border">Very fast (pointer adjustment)</td>
            <td className="p-3 border">Slower (search for block)</td>
          </tr>
          <tr>
            <td className="p-3 border">Deallocation</td>
            <td className="p-3 border">Automatic (function return)</td>
            <td className="p-3 border">Manual or GC</td>
          </tr>
          <tr>
            <td className="p-3 border">Order</td>
            <td className="p-3 border">LIFO only</td>
            <td className="p-3 border">Any order</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Limited (1-8 MB)</td>
            <td className="p-3 border">Large (available RAM)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Function scope</td>
            <td className="p-3 border">Arbitrary</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Common Heap Errors */}
    <h2 className="text-3xl font-bold mt-8">Common Heap Errors</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Memory Leak - Forgetting to free allocated memory
   int* ptr = malloc(100);
   // ... use ptr ...
   // Forgot: free(ptr);  <- Memory leaked!

2. Use After Free - Using memory after it's freed
   int* ptr = malloc(100);
   free(ptr);
   *ptr = 42;  // Undefined behavior!

3. Double Free - Freeing the same memory twice
   free(ptr);
   free(ptr);  // Crash or corruption!

4. Buffer Overflow - Writing beyond allocated bounds
   int* arr = malloc(10 * sizeof(int));
   arr[100] = 42;  // Writing out of bounds!

5. Dangling Pointer - Pointer to freed memory
   int* ptr = malloc(100);
   int* ptr2 = ptr;  // Both point to same memory
   free(ptr);
   *ptr2 = 42;  // ptr2 is now dangling!`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which allocation algorithm finds the smallest suitable free block?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) First Fit</li>
      <li>(B) Best Fit</li>
      <li>(C) Worst Fit</li>
      <li>(D) Next Fit</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Best Fit - It searches for the smallest block that satisfies the request.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is coalescing in heap management?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Splitting large blocks</li>
      <li>(B) Merging adjacent free blocks</li>
      <li>(C) Compacting all memory</li>
      <li>(D) Garbage collection</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Merging adjacent free blocks - Coalescing combines neighboring free blocks to reduce fragmentation.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Which error occurs when memory is freed but still accessed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Memory leak</li>
      <li>(B) Double free</li>
      <li>(C) Use after free</li>
      <li>(D) Buffer overflow</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Use after free - Accessing memory that has already been deallocated.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Heap allocation provides flexible, arbitrary-lifetime memory allocation</li>
      <li>Common algorithms: First Fit, Best Fit, Worst Fit</li>
      <li>Fragmentation (internal and external) is a major challenge</li>
      <li>Coalescing merges adjacent free blocks to reduce fragmentation</li>
      <li>Common errors include memory leaks, use after free, and double free</li>
      <li>Garbage collection automates heap management in managed languages</li>
    </ul>

  </div>
);

export default HeapAllocation;
