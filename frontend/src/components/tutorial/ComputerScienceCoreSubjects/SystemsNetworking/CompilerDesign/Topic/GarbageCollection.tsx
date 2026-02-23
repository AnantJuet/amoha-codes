import React from "react";

const GarbageCollection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Garbage Collection Overview ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Garbage Collection Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Garbage Collection (GC)</strong> is automatic memory management that identifies
      and reclaims memory that is no longer in use by the program. Instead of requiring programmers
      to explicitly free memory, the garbage collector automatically determines when objects
      are unreachable and safely reclaims their memory. GC is used in many modern languages
      including Java, Python, Go, JavaScript, and C#.
    </p>

    {/* Why Garbage Collection */}
    <h2 className="text-3xl font-bold mt-8">Why Garbage Collection?</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Manual Memory Management</th>
            <th className="p-3 border">Garbage Collection</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Programmer calls malloc/free</td>
            <td className="p-3 border">Runtime automatically manages memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Risk of memory leaks</td>
            <td className="p-3 border">No memory leaks (for reachable refs)</td>
          </tr>
          <tr>
            <td className="p-3 border">Risk of dangling pointers</td>
            <td className="p-3 border">No dangling pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Risk of double free</td>
            <td className="p-3 border">No double free errors</td>
          </tr>
          <tr>
            <td className="p-3 border">More control, more complexity</td>
            <td className="p-3 border">Less control, simpler code</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Reachability */}
    <h2 className="text-3xl font-bold mt-8">Reachability</h2>
    <p className="leading-relaxed">
      The fundamental concept in garbage collection is <strong>reachability</strong>. An object
      is considered alive (reachable) if it can be accessed from the program's root set.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Reachability Concept:

Root Set:
- Global/static variables
- Local variables on stack
- CPU registers

+----------------+
|   Root Set     |
+----------------+
| global_ptr ----|--+
| stack_var -----|--|--+
| register_r1 ---|--|--|--+
+----------------+  |  |  |
                    |  |  |
                    v  v  v
              +---+ +---+ +---+
              | A | | B | | C |   <- Reachable objects
              +---+ +---+ +---+
                |     |
                v     v
              +---+ +---+
              | D | | E |         <- Reachable (via A, B)
              +---+ +---+

              +---+ +---+
              | F | | G |         <- UNREACHABLE (garbage)
              +---+ +---+

Objects F and G have no path from root set.
They are garbage and can be collected.`}
      </pre>
    </div>

    {/* Types of Garbage Collection */}
    <h2 className="text-3xl font-bold mt-8">Types of Garbage Collection</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Reference Counting</td>
            <td className="p-3 border">Track reference count per object</td>
            <td className="p-3 border">Python, Swift, C++ (shared_ptr)</td>
          </tr>
          <tr>
            <td className="p-3 border">Mark and Sweep</td>
            <td className="p-3 border">Mark reachable, sweep unmarked</td>
            <td className="p-3 border">Lisp, some JVM phases</td>
          </tr>
          <tr>
            <td className="p-3 border">Copying Collection</td>
            <td className="p-3 border">Copy live objects to new space</td>
            <td className="p-3 border">JVM young gen, Go</td>
          </tr>
          <tr>
            <td className="p-3 border">Generational</td>
            <td className="p-3 border">Separate young/old generations</td>
            <td className="p-3 border">JVM, .NET, Go</td>
          </tr>
          <tr>
            <td className="p-3 border">Concurrent/Incremental</td>
            <td className="p-3 border">Collect while program runs</td>
            <td className="p-3 border">G1GC, ZGC, Shenandoah</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* GC Metrics */}
    <h2 className="text-3xl font-bold mt-8">Garbage Collection Metrics</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Key GC Performance Metrics:

1. Throughput
   - Percentage of time spent in application (vs GC)
   - Goal: Maximize (95%+ for batch processing)

2. Latency (Pause Time)
   - Time application is stopped during GC
   - Goal: Minimize (< 10ms for interactive apps)

3. Memory Footprint
   - Total memory used by application + GC overhead
   - Goal: Minimize

4. Promptness
   - Time between object becoming garbage and being collected
   - Goal: Minimize for memory-constrained systems

Trade-offs:
+------------------+------------+----------+
| GC Type          | Throughput | Latency  |
+------------------+------------+----------+
| Stop-the-world   | High       | High     |
| Incremental      | Medium     | Medium   |
| Concurrent       | Medium-Low | Low      |
+------------------+------------+----------+`}
      </pre>
    </div>

    {/* Generational GC */}
    <h2 className="text-3xl font-bold mt-8">Generational Garbage Collection</h2>
    <p className="leading-relaxed">
      Based on the <strong>generational hypothesis</strong>: most objects die young.
      Objects are divided into generations, and younger generations are collected more frequently.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Generational GC Structure (e.g., JVM):

+--------------------------------------------------+
|                    HEAP                          |
+--------------------------------------------------+
|                                                  |
|  +----------------+  +------------------------+  |
|  | Young Gen      |  | Old Gen (Tenured)      |  |
|  |                |  |                        |  |
|  | +---+ +------+ |  |                        |  |
|  | |   | |      | |  |                        |  |
|  | |Edn| |Surviv| |  |   Long-lived objects   |  |
|  | |   | |  or  | |  |                        |  |
|  | +---+ +------+ |  |                        |  |
|  +----------------+  +------------------------+  |
|                                                  |
+--------------------------------------------------+

New objects allocated in Eden.
Survivors promoted through survivor spaces.
Long-lived objects promoted to Old Gen.

Collection frequency:
- Young Gen (Minor GC): Frequent, fast
- Old Gen (Major GC): Infrequent, slower

Age threshold:
Object survives N minor GCs -> promoted to Old Gen`}
      </pre>
    </div>

    {/* Stop-the-World vs Concurrent */}
    <h2 className="text-3xl font-bold mt-8">Stop-the-World vs Concurrent GC</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stop-the-World GC:
+-------+     +---+     +-------+     +---+     +-------+
| App   |---->| GC|---->| App   |---->| GC|---->| App   |
|running|     |   |     |running|     |   |     |running|
+-------+     +---+     +-------+     +---+     +-------+
               ^                       ^
          All threads              All threads
            paused                   paused

Problem: Long pauses affect user experience


Concurrent GC:
+-----------------------------------------------+
| Application threads running                   |
+-----------------------------------------------+
     +--+          +--+          +--+
     |GC|          |GC|          |GC|
     +--+          +--+          +--+
      ^             ^             ^
   GC works      GC works      GC works
  alongside      alongside     alongside
    app            app           app

Challenge: Handle mutations during GC
Solution: Write barriers, tri-color marking`}
      </pre>
    </div>

    {/* Write Barriers */}
    <h2 className="text-3xl font-bold mt-8">Write Barriers</h2>
    <p className="leading-relaxed">
      Write barriers are code inserted before/after pointer writes to help GC track mutations:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Write Barrier Types:

1. Pre-write barrier (snapshot-at-beginning):
   Before: obj.field = new_value
   record_pointer(obj.field)  // Remember old value
   obj.field = new_value

2. Post-write barrier (incremental update):
   After: obj.field = new_value
   obj.field = new_value
   mark_card(obj)  // Mark containing region as dirty

3. Remembered sets (generational GC):
   If (new_value is in young gen) and (obj is in old gen):
       add_to_remembered_set(obj)
   // Track old->young pointers for minor GC

Card Table (efficient remembered set):
+---+---+---+---+---+---+---+---+
| 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |  <- Card table
+---+---+---+---+---+---+---+---+
  ^   ^
  |   |
512 bytes   <- Each card covers 512 bytes of heap
per card        1 = contains old->young pointer`}
      </pre>
    </div>

    {/* Languages and Their GC */}
    <h2 className="text-3xl font-bold mt-8">GC in Different Languages</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Java:
- Multiple GC options: Serial, Parallel, G1, ZGC, Shenandoah
- Generational by default
- JVM flags: -XX:+UseG1GC

Python:
- Reference counting (immediate collection)
- + Cycle detector (for circular references)
- gc module for manual control

Go:
- Concurrent, tri-color mark-sweep
- Low latency focus (< 1ms pause goal)
- No generational (simpler, faster allocator)

JavaScript (V8):
- Generational with Orinoco GC
- Young: Scavenger (copying)
- Old: Mark-sweep-compact

C# (.NET):
- Generational (Gen 0, 1, 2)
- Background GC for Gen 2
- Large Object Heap (LOH) separate

Rust:
- No GC! Ownership system + borrow checker
- Compile-time memory management`}
      </pre>
    </div>

    {/* GC Tuning */}
    <h2 className="text-3xl font-bold mt-8">GC Tuning Considerations</h2>

    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Heap Size:</strong> Larger heap = fewer GCs but longer pauses</li>
      <li><strong>Young Gen Size:</strong> Larger = fewer minor GCs, but longer minor GC pauses</li>
      <li><strong>GC Algorithm:</strong> Choose based on latency vs throughput requirements</li>
      <li><strong>Promotion Threshold:</strong> Higher = objects stay in young gen longer</li>
      <li><strong>Concurrent GC Threads:</strong> More threads = faster GC but more CPU competition</li>
    </ul>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What is the generational hypothesis in garbage collection?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) All objects live forever</li>
      <li>(B) Most objects die young</li>
      <li>(C) Objects get smaller over time</li>
      <li>(D) Memory grows each generation</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Most objects die young - This is why young generation is collected frequently.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What does a write barrier help with during concurrent GC?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Preventing memory allocation</li>
      <li>(B) Tracking pointer modifications during GC</li>
      <li>(C) Compressing objects</li>
      <li>(D) Defragmenting memory</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Tracking pointer modifications during GC - Write barriers ensure correctness during concurrent collection.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Which GC metric is most important for interactive applications?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Throughput</li>
      <li>(B) Memory footprint</li>
      <li>(C) Latency (pause time)</li>
      <li>(D) Promptness</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Latency (pause time) - Long pauses cause visible lag in interactive apps.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Garbage collection automatically reclaims unreachable memory</li>
      <li>Reachability from root set determines which objects are alive</li>
      <li>Main algorithms: reference counting, mark-sweep, copying, generational</li>
      <li>Generational GC exploits the fact that most objects die young</li>
      <li>Concurrent GC reduces pause times but requires write barriers</li>
      <li>GC tuning involves trade-offs between throughput, latency, and memory</li>
    </ul>

  </div>
);

export default GarbageCollection;
