import React from "react";

const CopyingCollectors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Copying Garbage Collectors ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Copying Garbage Collectors
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Copying garbage collection</strong> (also called <strong>semi-space collection</strong>)
      is a tracing garbage collection technique that divides the heap into two equal-sized spaces
      and copies all live objects from one space to the other. This approach eliminates fragmentation,
      enables fast bump-pointer allocation, and is particularly effective for collecting short-lived
      objects. It is commonly used for the young generation in generational garbage collectors.
    </p>

    {/* How Copying Collection Works */}
    <h2 className="text-3xl font-bold mt-8">How Copying Collection Works</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Copying Collection Overview:

Heap divided into two semi-spaces:
- FROM-space: Currently in use (contains objects)
- TO-space: Empty (target for copying)

+---------------------------+---------------------------+
|        FROM-SPACE         |         TO-SPACE          |
|   (Active, allocating)    |    (Empty, waiting)       |
+---------------------------+---------------------------+

During Collection:
1. Start from root set
2. Copy each reachable object from FROM-space to TO-space
3. Update all pointers to new locations
4. Swap spaces (TO becomes FROM, FROM becomes TO)

After Collection:
+---------------------------+---------------------------+
|         TO-SPACE          |        FROM-SPACE         |
| (Now empty, waiting)      | (Now active, compacted)   |
+---------------------------+---------------------------+`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before Collection:

FROM-SPACE:
+---+---+---+---+---+---+---+---+
| A | B | C | D | E | F | G | H |  (fragmented)
+---+---+---+---+---+---+---+---+
  ^   ^       ^           ^
  |   |       |           |
Root Set: A, B          Reachable via A

A -> D, B -> (nothing), D -> G

Reachable: A, B, D, G
Garbage: C, E, F, H


During Collection:

1. Copy A to TO-SPACE
   FROM: [A'|B|C|D|E|F|G|H]   (A marked as forwarded)
   TO:   [A|           ]

2. Scan A, find reference to D, copy D
   FROM: [A'|B|C|D'|E|F|G|H]
   TO:   [A|D|       ]

3. Copy B (from roots)
   FROM: [A'|B'|C|D'|E|F|G|H]
   TO:   [A|D|B|     ]

4. Scan D, find reference to G, copy G
   FROM: [A'|B'|C|D'|E|F|G'|H]
   TO:   [A|D|B|G|   ]

5. All reachable objects copied, collection done


After Collection:

NEW FROM-SPACE (was TO):          NEW TO-SPACE (was FROM):
+---+---+---+---+               +---------------------------+
| A | D | B | G |   (compact!)  | (empty, available)        |
+---+---+---+---+               +---------------------------+
                ^
          allocation pointer (bump allocation!)`}
      </pre>
    </div>

    {/* Cheney's Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Cheney's Algorithm</h2>
    <p className="leading-relaxed">
      Cheney's algorithm is an efficient iterative copying collector that uses the TO-space
      itself as the work queue:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cheney's Algorithm:

TO-SPACE is used as a queue:
- 'free' pointer: where to copy next object
- 'scan' pointer: next object to process

+---+---+---+---+---+---+---+---+---+---+
|   copied objects   |   unprocessed   |   empty   |
+---+---+---+---+---+---+---+---+---+---+
                     ^                 ^
                   scan              free


function cheney_collect():
    scan = to_space_start
    free = to_space_start

    // Copy root objects
    for each root in rootSet:
        root = copy(root)

    // Process copied objects (BFS traversal)
    while scan < free:
        for each reference ref in object_at(scan):
            ref = copy(ref)
        scan = scan + size_of(object_at(scan))

function copy(obj):
    if obj is in FROM-SPACE:
        if obj has forwarding pointer:
            return obj.forwarding_pointer
        else:
            // Copy object to TO-SPACE
            new_addr = free
            copy_bytes(obj, new_addr)
            free = free + size_of(obj)
            // Leave forwarding pointer in old location
            obj.forwarding_pointer = new_addr
            return new_addr
    else:
        return obj  // Already in TO-SPACE

// Breadth-first traversal, no recursion, no separate stack!`}
      </pre>
    </div>

    {/* Forwarding Pointers */}
    <h2 className="text-3xl font-bold mt-8">Forwarding Pointers</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Forwarding Pointers prevent double-copying:

Problem: Multiple references to same object
A -> C, B -> C  (both point to C)

Without forwarding:
- Copy C when processing A: C copied to TO-space
- Copy C when processing B: C copied AGAIN! (duplicate)

Solution: Leave forwarding pointer at old location

FROM-SPACE:                    TO-SPACE:
+-------------+                +-------------+
| Object C    |                | Object C    |
| (original)  |  -- COPY -->   | (new copy)  |
+-------------+                +-------------+
      |
      v
+-------------+
| FORWARDING  |
| ptr to new C|
+-------------+

Now when processing B's reference to C:
1. Look at C's old location
2. See forwarding pointer
3. Update B's reference to new location
4. No re-copying needed!

Implementation:
Object header can include:
- Mark bit: indicates if forwarded
- Forwarding address: new location`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
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
            <td className="p-3 border">No fragmentation</td>
            <td className="p-3 border">50% memory overhead (two spaces)</td>
          </tr>
          <tr>
            <td className="p-3 border">Fast bump-pointer allocation</td>
            <td className="p-3 border">Copies all live objects (even long-lived)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost proportional to live objects</td>
            <td className="p-3 border">Needs contiguous space</td>
          </tr>
          <tr>
            <td className="p-3 border">Good cache locality after copy</td>
            <td className="p-3 border">All pointers must be updated</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple allocation (no free list)</td>
            <td className="p-3 border">Stop-the-world pause</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Generational Context */}
    <h2 className="text-3xl font-bold mt-8">Copying Collectors in Generational GC</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Copying collection is ideal for young generation:

Young Generation (Nursery):
+----------------+----------------+
|    Eden        |   Survivor     |
|                | S0  |   S1     |
+----------------+-----+----------+

Allocation: Bump pointer in Eden (very fast!)

Minor GC (Young Gen Collection):
1. Copy live objects from Eden to S0
2. Copy live objects from S1 to S0
3. Swap S0 and S1
4. Objects surviving N collections -> Old Gen

Why copying works well for young gen:
- Most objects die young (generational hypothesis)
- Only ~10% survive -> copy only 10%
- Cost is O(survivors), not O(total)
- Fast allocation via bump pointer

Old Generation uses different algorithm:
- Mark-Sweep or Mark-Compact
- Objects are long-lived, copying would be expensive
- Less frequent collection`}
      </pre>
    </div>

    {/* Bump Pointer Allocation */}
    <h2 className="text-3xl font-bold mt-8">Bump Pointer Allocation</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Bump Pointer Allocation:

After copying collection, space is contiguous:

+---+---+---+---+                          |
| A | B | C | D |         free space       |
+---+---+---+---+--------------------------+
                ^                          ^
            alloc_ptr                    limit


Allocate(size):
    if alloc_ptr + size > limit:
        trigger_gc()
    result = alloc_ptr
    alloc_ptr = alloc_ptr + size
    return result

// Just 3 instructions! Compare + Add + Return

Comparison with free list allocation:
+------------------+---------------+------------------+
| Free List        | Bump Pointer  | Difference       |
+------------------+---------------+------------------+
| Search for fit   | No search     | Much faster      |
| Update list      | Increment ptr | Simpler          |
| Fragmentation    | No fragments  | Better           |
| ~20 instructions | ~3 instructions| 7x faster       |
+------------------+---------------+------------------+`}
      </pre>
    </div>

    {/* Variants */}
    <h2 className="text-3xl font-bold mt-8">Copying Collector Variants</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Appel-style Generational Collector
   - Variable-sized semi-spaces
   - Young gen can be much smaller than old gen
   - Reduces 50% overhead

2. Baker's Incremental Copying
   - Copy incrementally (not all at once)
   - Use read barriers to handle forwarding
   - Reduces pause times

3. Compressor (Hybrid)
   - Mark-sweep with occasional copying
   - Copy when fragmentation is high
   - Best of both worlds

4. Concurrent Copying
   - Copy while application runs
   - Use load barriers for consistency
   - Examples: C4 (Azul), Shenandoah

5. Parallel Copying
   - Multiple GC threads copy simultaneously
   - Divide TO-space among threads
   - Scales with cores`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparing GC Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Mark-Sweep</th>
            <th className="p-3 border">Copying</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Overhead</td>
            <td className="p-3 border">Mark bits only</td>
            <td className="p-3 border">50% (two spaces)</td>
          </tr>
          <tr>
            <td className="p-3 border">Allocation</td>
            <td className="p-3 border">Free list (slow)</td>
            <td className="p-3 border">Bump pointer (fast)</td>
          </tr>
          <tr>
            <td className="p-3 border">Collection Cost</td>
            <td className="p-3 border">O(heap size)</td>
            <td className="p-3 border">O(live objects)</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Long-lived objects</td>
            <td className="p-3 border">Short-lived objects</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What is the main space overhead of copying garbage collection?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 10% for mark bits</li>
      <li>(B) 25% for headers</li>
      <li>(C) 50% for the second semi-space</li>
      <li>(D) 100% for copying buffer</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) 50% for the second semi-space - Half the heap is always unused, waiting for copying.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the purpose of forwarding pointers in copying collection?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To speed up allocation</li>
      <li>(B) To prevent copying the same object twice</li>
      <li>(C) To mark objects as garbage</li>
      <li>(D) To track reference counts</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) To prevent copying the same object twice - Forwarding pointers indicate an object was already copied.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is copying collection particularly effective for young generation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Young generation is larger</li>
      <li>(B) Most young objects die, so few are copied</li>
      <li>(C) Young objects are smaller</li>
      <li>(D) Young generation uses more memory</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Most young objects die, so few are copied - Cost is proportional to survivors, which is low for young gen.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Copying collection divides heap into FROM-space and TO-space</li>
      <li>Live objects are copied to TO-space; spaces are then swapped</li>
      <li>Eliminates fragmentation; enables fast bump-pointer allocation</li>
      <li>50% space overhead is the main disadvantage</li>
      <li>Cheney's algorithm uses TO-space as the work queue (no extra stack)</li>
      <li>Ideal for young generation where most objects are short-lived</li>
    </ul>

  </div>
);

export default CopyingCollectors;
