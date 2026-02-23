import React from "react";

const GenerationalGC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Generational Garbage Collection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Generational garbage collection</strong> is based on the observation that
      most objects die young (the generational hypothesis). The heap is divided into
      generations, with younger generations collected more frequently. This approach
      significantly improves GC performance by focusing collection efforts where most
      garbage is found.
    </p>

    <h2 className="text-3xl font-bold mt-8">Generational Hypothesis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The Generational Hypothesis:
"Most objects die young"

Object Survival Rate by Age:
                  |
  % surviving     |**
                  | **
                  |   ****
                  |       *******
                  |              *******************
                  +---------------------------------->
                        Object age

~80-90% of objects die within their first GC cycle
Long-lived objects tend to stay alive

Implications:
- Young objects should be collected frequently
- Old objects should be collected rarely
- Most collection effort should focus on young generation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Heap Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Typical Generational Heap (e.g., JVM):

+--------------------------------------------------+
|                     HEAP                          |
+--------------------------------------------------+
|                                                   |
| +--------------------+ +------------------------+ |
| | YOUNG GENERATION   | | OLD GENERATION         | |
| |                    | | (Tenured)              | |
| | +------+ +-------+ | |                        | |
| | | Eden | |Survivor| | |  Long-lived objects   | |
| | |      | | S0|S1 | | |                        | |
| | +------+ +-------+ | |                        | |
| +--------------------+ +------------------------+ |
|                                                   |
| +-----------------------------------------------+ |
| | PERMANENT/METASPACE (class metadata)          | |
| +-----------------------------------------------+ |
+--------------------------------------------------+

Young Gen: ~1/3 of heap, collected frequently
Old Gen: ~2/3 of heap, collected rarely`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Minor vs Major GC</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Minor GC</th>
            <th className="p-3 border">Major GC</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Scope</td>
            <td className="p-3 border">Young generation only</td>
            <td className="p-3 border">Old generation (+ young)</td>
          </tr>
          <tr>
            <td className="p-3 border">Frequency</td>
            <td className="p-3 border">Very frequent</td>
            <td className="p-3 border">Rare</td>
          </tr>
          <tr>
            <td className="p-3 border">Duration</td>
            <td className="p-3 border">Short (ms)</td>
            <td className="p-3 border">Long (100s of ms)</td>
          </tr>
          <tr>
            <td className="p-3 border">Algorithm</td>
            <td className="p-3 border">Copying</td>
            <td className="p-3 border">Mark-sweep-compact</td>
          </tr>
          <tr>
            <td className="p-3 border">Trigger</td>
            <td className="p-3 border">Eden full</td>
            <td className="p-3 border">Old gen full or threshold</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Promotion and Aging</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Object Lifecycle:

1. NEW OBJECT -> Allocated in Eden
   +-------+
   | Eden  |  <- New object here
   +-------+

2. SURVIVES MINOR GC -> Copied to Survivor
   +-------+  +----+----+
   | Eden  |  | S0 | S1 |
   +-------+  +----+----+
                 ^
              Survivor (age = 1)

3. SURVIVES N GCs -> Promoted to Old Gen
   +----+----+  +------------------+
   | S0 | S1 |  | Old Generation   |
   +----+----+  +------------------+
                       ^
                  Promoted (age > threshold)

Age Threshold:
- Default: 15 (JVM -XX:MaxTenuringThreshold)
- Object survives 15 minor GCs -> promoted
- Some objects promoted early if survivor space is full`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write Barriers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Old objects pointing to young objects

If old object points to young object:
+---------------+       +---------------+
| Old Gen       |       | Young Gen     |
| +---+         |       |     +---+     |
| | A |---------+-------+---->| B |     |
| +---+         |       |     +---+     |
+---------------+       +---------------+

During minor GC:
- Only scanning young gen
- Must know about old -> young pointers
- Otherwise B appears unreachable!

Solution: Card Table (Remembered Set)
+---+---+---+---+---+---+---+---+
| 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
+---+---+---+---+---+---+---+---+
      ^       ^
  dirty cards: old -> young pointer here

Write barrier: when old.field = young_obj
  mark_card_dirty(old)`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Most objects die young (generational hypothesis)</li>
        <li>Heap divided into young and old generations</li>
        <li>Minor GC collects young gen frequently</li>
        <li>Objects surviving N collections are promoted</li>
        <li>Write barriers track old-to-young references</li>
      </ul>
    </div>
  </div>
);

export default GenerationalGC;
