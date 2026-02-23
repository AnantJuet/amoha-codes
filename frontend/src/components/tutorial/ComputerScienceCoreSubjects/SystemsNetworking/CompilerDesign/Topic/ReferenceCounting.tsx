import React from "react";

const ReferenceCounting: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Reference Counting GC ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Reference Counting Garbage Collection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Reference counting</strong> is a garbage collection technique where each object
      maintains a count of how many references point to it. When the count drops to zero, the
      object is immediately reclaimed. This approach provides deterministic, incremental memory
      management but has challenges with circular references. Reference counting is used in
      Python, Swift, Objective-C, and C++ (via shared_ptr).
    </p>

    {/* How Reference Counting Works */}
    <h2 className="text-3xl font-bold mt-8">How Reference Counting Works</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Reference Counting Basic Operations:

Object Structure:
+------------------+
| Reference Count  |  <- Number of pointers to this object
+------------------+
| Object Data      |
+------------------+

Operations:

1. Creating a reference:
   ptr = new Object()
   // Object created with refcount = 1

2. Copying a reference:
   ptr2 = ptr
   // ptr's object: refcount++  (now 2)

3. Overwriting a reference:
   ptr = other_object
   // Old object: refcount--   (1 -> 0, freed if 0)
   // New object: refcount++

4. Deleting a reference:
   delete ptr  (or ptr goes out of scope)
   // Object: refcount--   (freed if 0)`}
      </pre>
    </div>

    {/* Example Execution */}
    <h2 className="text-3xl font-bold mt-8">Example Execution</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step-by-Step Reference Counting:

1. A = new Object()
   +-------+
   | A [1] |   <- A points to object, count = 1
   +-------+

2. B = A
   +-------+
   | A [2] |   <- B also points, count = 2
   | B     |
   +-------+

3. C = new Object()
   +-------+    +-------+
   | A [2] |    | C [1] |
   | B     |    +-------+
   +-------+

4. A = C
   +-------+    +-------+
   |   [1] |    | C [2] |  <- A now points to C's object
   | B     |    | A     |     Old object count: 2->1
   +-------+    +-------+

5. B = null
   +-------+    +-------+
   |   [0] |    | C [2] |
   | FREED |    | A     |  <- Old object freed (count = 0)
   +-------+    +-------+

6. A = null, C = null
   All objects freed when counts reach 0.`}
      </pre>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation Details</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// C++ style pseudocode

class RefCounted {
    int refCount;
    // object data...

public:
    RefCounted() : refCount(1) {}

    void addRef() {
        refCount++;
    }

    void release() {
        refCount--;
        if (refCount == 0) {
            // Release any objects this object references
            for (each reference r in this) {
                r->release();
            }
            delete this;
        }
    }
};

// Smart pointer wrapper
template<typename T>
class RefPtr {
    T* ptr;

public:
    RefPtr(T* p = nullptr) : ptr(p) {}

    RefPtr(const RefPtr& other) : ptr(other.ptr) {
        if (ptr) ptr->addRef();
    }

    ~RefPtr() {
        if (ptr) ptr->release();
    }

    RefPtr& operator=(const RefPtr& other) {
        if (other.ptr) other.ptr->addRef();
        if (ptr) ptr->release();
        ptr = other.ptr;
        return *this;
    }
};`}
      </pre>
    </div>

    {/* The Cycle Problem */}
    <h2 className="text-3xl font-bold mt-8">The Circular Reference Problem</h2>
    <p className="leading-relaxed">
      The major weakness of reference counting is that it cannot collect circular references:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Circular Reference Example:

class Node {
    Node* next;
    int data;
};

Node* A = new Node();  // A.refcount = 1
Node* B = new Node();  // B.refcount = 1

A->next = B;           // B.refcount = 2
B->next = A;           // A.refcount = 2

// Create a cycle:
//    +---+     +---+
//    | A |---->| B |
//    | 2 |<----| 2 |
//    +---+     +---+

A = null;              // A.refcount = 2 -> 1 (not freed!)
B = null;              // B.refcount = 2 -> 1 (not freed!)

// No external references, but both have count = 1
// MEMORY LEAK! Objects keep each other alive.

+---+     +---+
| A |---->| B |   <- Unreachable cycle
| 1 |<----| 1 |      Both counts = 1, not 0
+---+     +---+      Cannot be collected!`}
      </pre>
    </div>

    {/* Solutions to Cycles */}
    <h2 className="text-3xl font-bold mt-8">Solutions to Circular References</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Weak References</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Weak references don't increment the count:

class Node {
    shared_ptr<Node> next;   // Strong reference (counts)
    weak_ptr<Node> parent;   // Weak reference (doesn't count)
};

// Child points to parent with weak reference
// Parent can be freed even if child holds weak ref

// Swift example:
class Person {
    var apartment: Apartment?  // Strong
}
class Apartment {
    weak var tenant: Person?   // Weak - won't prevent deallocation
}`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Cycle Detection</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Python's approach: Reference counting + cycle detector

1. Primary: Reference counting for immediate collection
2. Secondary: Periodic cycle detection for circular refs

Cycle Detection Algorithm:
1. Find objects that might be in cycles
   (objects with refcount > 0 that participate in references)

2. Tentatively decrement counts for internal references
   // Simulate removing internal pointers

3. Objects with count still > 0 are reachable from outside
   // Keep these alive

4. Objects with count = 0 are in unreachable cycles
   // Collect these

Python gc module:
import gc
gc.collect()          # Force cycle collection
gc.disable()          # Disable automatic cycle detection
gc.get_count()        # See generation counts`}
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
            <td className="p-3 border">Immediate reclamation</td>
            <td className="p-3 border">Cannot handle cycles</td>
          </tr>
          <tr>
            <td className="p-3 border">Incremental (no pauses)</td>
            <td className="p-3 border">Space overhead (count per object)</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple implementation</td>
            <td className="p-3 border">Time overhead on every pointer op</td>
          </tr>
          <tr>
            <td className="p-3 border">Good locality (use just freed)</td>
            <td className="p-3 border">Cascading deletions can cause pauses</td>
          </tr>
          <tr>
            <td className="p-3 border">Deterministic destruction</td>
            <td className="p-3 border">Thread safety overhead</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Optimizations */}
    <h2 className="text-3xl font-bold mt-8">Reference Counting Optimizations</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Deferred Reference Counting
   - Don't update counts for stack references
   - Only track heap-to-heap references
   - Periodically scan stack to find true root set
   - Reduces overhead significantly

2. Coalesced Reference Counting
   - Buffer count updates
   - Merge multiple inc/dec operations
   - Reduces update frequency

3. Sticky Reference Counts
   - Use small counter (e.g., 3 bits)
   - If count "overflows", mark as permanent
   - Never free permanently marked objects
   - Works well with generational hypothesis

4. Biased Reference Counting
   - Maintain local count per thread
   - Only synchronize periodically
   - Reduces lock contention

5. Weighted Reference Counting
   - Assign weights to references
   - Total weight = sum of all reference weights
   - Splitting reference divides weight
   - Reduces communication in distributed systems`}
      </pre>
    </div>

    {/* Languages Using Reference Counting */}
    <h2 className="text-3xl font-bold mt-8">Languages Using Reference Counting</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Python:
- Immediate refcount for most objects
- Cycle detector runs periodically
- sys.getrefcount(obj) to see count

Swift:
- Automatic Reference Counting (ARC)
- Compiler inserts retain/release calls
- weak and unowned for breaking cycles

Objective-C:
- ARC (modern) or manual retain/release (legacy)
- @autoreleasepool for deferred release

C++ (shared_ptr):
- std::shared_ptr: strong reference counting
- std::weak_ptr: non-owning reference
- Thread-safe atomic operations

Rust (Rc/Arc):
- Rc<T>: single-threaded reference counting
- Arc<T>: atomic (thread-safe) ref counting
- Weak<T>: weak references
- Compile-time borrow checker prevents most issues

PHP:
- Reference counting with cycle collector
- Copy-on-write optimization`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What happens when an object's reference count reaches zero?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The object is marked for future collection</li>
      <li>(B) The object is immediately freed</li>
      <li>(C) The object is moved to a special area</li>
      <li>(D) Nothing until GC runs</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The object is immediately freed - This is the key benefit of reference counting.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the main problem with pure reference counting?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) It is too slow</li>
      <li>(B) It uses too much memory</li>
      <li>(C) It cannot collect circular references</li>
      <li>(D) It requires stop-the-world pauses</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) It cannot collect circular references - Objects in a cycle keep each other alive.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      How do weak references help with circular references?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) They increment the reference count by 2</li>
      <li>(B) They don't prevent the referenced object from being freed</li>
      <li>(C) They automatically break all cycles</li>
      <li>(D) They convert objects to stack allocation</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) They don't prevent the referenced object from being freed - Weak refs don't count toward keeping object alive.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Each object maintains a count of references pointing to it</li>
      <li>Objects are freed immediately when count reaches zero</li>
      <li>Cannot handle circular references without additional mechanisms</li>
      <li>Weak references break cycles by not incrementing counts</li>
      <li>Cycle detectors can supplement reference counting</li>
      <li>Used in Python, Swift, Objective-C, and C++ shared_ptr</li>
    </ul>

  </div>
);

export default ReferenceCounting;
