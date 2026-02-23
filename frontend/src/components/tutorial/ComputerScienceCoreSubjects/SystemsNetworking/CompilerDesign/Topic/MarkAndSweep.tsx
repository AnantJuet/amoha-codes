import React from "react";

const MarkAndSweep: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Mark and Sweep GC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mark and Sweep Garbage Collection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Mark and Sweep</strong> is a tracing garbage collection algorithm that operates
      in two phases: first it marks all reachable objects starting from the root set, then it
      sweeps through the entire heap freeing unmarked objects. Unlike reference counting, mark
      and sweep can correctly handle circular references since it determines liveness based on
      reachability rather than reference counts.
    </p>

    {/* How Mark and Sweep Works */}
    <h2 className="text-3xl font-bold mt-8">How Mark and Sweep Works</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Mark and Sweep Algorithm:

Phase 1: MARK
  - Start from root set (globals, stack, registers)
  - Traverse all reachable objects
  - Mark each visited object as "alive"

Phase 2: SWEEP
  - Scan entire heap linearly
  - Free all unmarked objects
  - Clear marks for next collection

Pseudocode:

function markAndSweep():
    // Phase 1: Mark
    for each root in rootSet:
        mark(root)

    // Phase 2: Sweep
    for each object in heap:
        if object.marked:
            object.marked = false  // Clear for next GC
        else:
            free(object)

function mark(object):
    if object == null or object.marked:
        return
    object.marked = true
    for each reference in object:
        mark(reference)  // Recursive marking`}
      </pre>
    </div>

    {/* Visual Example */}
    <h2 className="text-3xl font-bold mt-8">Visual Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Initial State:
                                    Root Set
                                   +--------+
                                   | global |----+
                                   | stack  |--+ |
                                   +--------+  | |
                                               | |
Heap:                                          | |
+-----+-----+-----+-----+-----+-----+-----+    | |
|  A  |  B  |  C  |  D  |  E  |  F  |  G  |    | |
|     |     |     |     |     |     |     |    | |
+--+--+--+--+-----+--+--+-----+--+--+-----+    | |
   |     |           |           |             | |
   +---->+           +---------->+<------------+ |
         |                                       |
         +<--------------------------------------+

A -> B, D -> F, stack -> B, global -> A


After MARK Phase:
+-----+-----+-----+-----+-----+-----+-----+
|  A  |  B  |  C  |  D  |  E  |  F  |  G  |
| [M] | [M] |     |     |     |     |     |
+-----+-----+-----+-----+-----+-----+-----+

Only A and B are reachable from roots!
C, D, E, F, G are NOT marked.


After SWEEP Phase:
+-----+-----+-----+-----+-----+-----+-----+
|  A  |  B  |FREE |FREE |FREE |FREE |FREE |
|     |     |     |     |     |     |     |
+-----+-----+-----+-----+-----+-----+-----+

Unmarked objects (C, D, E, F, G) are freed.
Marks on A, B are cleared.`}
      </pre>
    </div>

    {/* Handling Circular References */}
    <h2 className="text-3xl font-bold mt-8">Handling Circular References</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Mark and Sweep correctly handles cycles:

Initial:
Root -> A -> B -> C
              ^   |
              +---+  (cycle: B <-> C)

        D -> E
         ^   |
         +---+  (unreachable cycle: D <-> E)


After MARK (starting from Root):
- A is marked (reachable from Root)
- B is marked (reachable from A)
- C is marked (reachable from B)
- D is NOT marked (no path from Root)
- E is NOT marked (no path from Root)

+---+   +---+   +---+
| A |-->| B |<->| C |   All marked (reachable)
|[M]|   |[M]|   |[M]|
+---+   +---+   +---+

+---+   +---+
| D |<->| E |   NOT marked (unreachable cycle)
|   |   |   |
+---+   +---+


After SWEEP:
- A, B, C: marks cleared, kept
- D, E: freed (despite pointing to each other!)

Cycles are collected because marking is based on
reachability from roots, not on reference counts!`}
      </pre>
    </div>

    {/* Implementation Variations */}
    <h2 className="text-3xl font-bold mt-8">Implementation Variations</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Recursive vs Iterative Marking</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Recursive Marking (simple but can overflow stack):

function mark(obj):
    if obj == null or obj.marked: return
    obj.marked = true
    for each ref in obj.references:
        mark(ref)  // Recursive call - may overflow!


Iterative Marking (uses explicit worklist):

function mark(root):
    worklist = new Stack()
    worklist.push(root)

    while not worklist.empty():
        obj = worklist.pop()
        if obj == null or obj.marked:
            continue
        obj.marked = true
        for each ref in obj.references:
            worklist.push(ref)

// No stack overflow, uses heap for worklist`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Tri-Color Marking</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Tri-Color Abstraction (for concurrent GC):

Colors:
- WHITE: Not yet visited (potentially garbage)
- GRAY:  Visited but references not yet scanned
- BLACK: Visited and all references scanned

Algorithm:
1. Initially all objects are WHITE
2. Root objects become GRAY
3. While GRAY objects exist:
   a. Pick a GRAY object
   b. Mark all its WHITE references as GRAY
   c. Mark the object BLACK
4. All remaining WHITE objects are garbage

+-------+     +-------+     +-------+
| WHITE | --> | GRAY  | --> | BLACK |
|  (?)  |     |(visit)|     | (done)|
+-------+     +-------+     +-------+

Invariant: BLACK objects never point to WHITE objects
(A BLACK-to-WHITE pointer means we missed something!)

This enables incremental and concurrent collection.`}
      </pre>
    </div>

    {/* Mark-Sweep-Compact */}
    <h2 className="text-3xl font-bold mt-8">Mark-Sweep-Compact</h2>
    <p className="leading-relaxed">
      Basic mark-sweep causes fragmentation. Mark-sweep-compact adds a compaction phase:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`After Mark-Sweep (fragmented):
+---+     +---+     +---+          +---+
| A |     | B |     | C |          | D |
+---+-----+---+-----+---+----------+---+-----
        ^         ^            ^         ^
       free     free         free      free

Fragmentation problem:
Total free = 100 bytes
Largest contiguous = 30 bytes
Request for 50 bytes FAILS!


After Compaction:
+---+---+---+---+
| A | B | C | D |                            |
+---+---+---+---+----------------------------+
                ^
              free (contiguous!)

Compaction steps:
1. Compute new addresses for live objects
2. Update all pointers to new addresses
3. Move objects to new locations

Cost: Requires scanning heap twice + moving data
Benefit: No fragmentation, fast allocation (bump pointer)`}
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
            <td className="p-3 border">Handles circular references</td>
            <td className="p-3 border">Stop-the-world pauses</td>
          </tr>
          <tr>
            <td className="p-3 border">No overhead on pointer operations</td>
            <td className="p-3 border">Must scan entire heap</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple conceptually</td>
            <td className="p-3 border">Causes fragmentation</td>
          </tr>
          <tr>
            <td className="p-3 border">Good cache behavior during sweep</td>
            <td className="p-3 border">Non-deterministic collection time</td>
          </tr>
          <tr>
            <td className="p-3 border">Can be made concurrent</td>
            <td className="p-3 border">Space for mark bits</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Optimization Techniques */}
    <h2 className="text-3xl font-bold mt-8">Optimization Techniques</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Bitmap Marking
   Instead of mark bit per object, use separate bitmap:

   Heap:      [Obj1][Obj2][Obj3][Obj4][Obj5]
   Bitmap:    [  1  ][  0  ][  1  ][  1  ][  0  ]

   Benefits: Better cache locality, can scan bitmap quickly


2. Lazy Sweeping
   Don't sweep immediately after marking.
   Sweep incrementally during allocation:

   allocate():
       while current_block.marked:
           current_block.marked = false
           advance to next block
       if current_block is free:
           return current_block
       // Continue sweeping...


3. Concurrent Marking
   Mark while application runs:
   - Use tri-color marking
   - Write barriers track mutations
   - Short stop-the-world for roots only


4. Parallel Marking
   Multiple GC threads mark simultaneously:
   - Shared worklist with load balancing
   - Each thread processes subset of objects
   - Scales with CPU cores`}
      </pre>
    </div>

    {/* Comparison with Reference Counting */}
    <h2 className="text-3xl font-bold mt-8">Mark-Sweep vs Reference Counting</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Mark-Sweep</th>
            <th className="p-3 border">Reference Counting</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cycles</td>
            <td className="p-3 border">Handled correctly</td>
            <td className="p-3 border">Not handled</td>
          </tr>
          <tr>
            <td className="p-3 border">Reclamation</td>
            <td className="p-3 border">Batch (during GC)</td>
            <td className="p-3 border">Immediate</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">During GC only</td>
            <td className="p-3 border">Every pointer op</td>
          </tr>
          <tr>
            <td className="p-3 border">Pauses</td>
            <td className="p-3 border">Yes (can be reduced)</td>
            <td className="p-3 border">No (incremental)</td>
          </tr>
          <tr>
            <td className="p-3 border">Throughput</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
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
      In the mark phase, what determines if an object should be marked?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Its reference count</li>
      <li>(B) Its size</li>
      <li>(C) Reachability from the root set</li>
      <li>(D) Its age</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Reachability from the root set - Objects reachable from roots are marked as alive.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the main purpose of the sweep phase?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Mark reachable objects</li>
      <li>(B) Free unmarked objects and clear marks</li>
      <li>(C) Move objects together</li>
      <li>(D) Update pointers</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Free unmarked objects and clear marks - Sweep reclaims garbage and prepares for next collection.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      In tri-color marking, what color represents objects that are fully processed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) White</li>
      <li>(B) Gray</li>
      <li>(C) Black</li>
      <li>(D) Red</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Black - Black objects have been visited and all their references have been scanned.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Mark phase traces from roots; sweep phase frees unmarked objects</li>
      <li>Correctly handles circular references (unlike reference counting)</li>
      <li>Basic algorithm causes stop-the-world pauses</li>
      <li>Can cause heap fragmentation (solved by compaction)</li>
      <li>Tri-color marking enables concurrent collection</li>
      <li>Optimizations: bitmap marking, lazy sweeping, parallel marking</li>
    </ul>

  </div>
);

export default MarkAndSweep;
