import React from "react";

const Serializability: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Serializability</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Serializability is the correctness criterion for concurrent transaction
      execution. A schedule is serializable if its effect is equivalent to some
      serial execution of the same transactions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Schedule Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule: Sequence of operations from concurrent transactions

Operations: Read(X), Write(X), Commit, Abort

Serial Schedule:
- Transactions execute one after another
- No interleaving
- Always correct, but slow

Concurrent Schedule:
- Operations interleaved
- Better performance
- Must verify correctness`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Serial vs Concurrent Schedules</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Serial Schedule (T1 then T2):
T1: R(A) W(A) R(B) W(B) Commit
T2:                     R(A) W(A) Commit

Serial Schedule (T2 then T1):
T2: R(A) W(A) Commit
T1:                 R(A) W(A) R(B) W(B) Commit

Concurrent Schedule:
T1: R(A) W(A)      R(B) W(B) Commit
T2:      R(A) W(A)                Commit

This concurrent schedule may or may not be correct.
It's correct if equivalent to some serial schedule.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two operations CONFLICT if:
1. They belong to different transactions
2. They access the same data item
3. At least one is a write

Conflict Types:
+------+------+----------+
|  Ti  |  Tj  | Conflict |
+------+------+----------+
| R(X) | R(X) |    No    |  Both read
| R(X) | W(X) |   Yes    |  Read-Write
| W(X) | R(X) |   Yes    |  Write-Read
| W(X) | W(X) |   Yes    |  Write-Write
+------+------+----------+

Non-conflicting operations can be swapped
without changing the result.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Serializability</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Conflict Equivalent:
Two schedules are conflict equivalent if one can be
transformed into the other by swapping non-conflicting
adjacent operations.

Conflict Serializable:
A schedule is conflict serializable if it is conflict
equivalent to some serial schedule.

Example:
Schedule S: R1(A) W1(A) R2(A) W2(A) R1(B) W1(B)

Can we swap to get serial schedule?
R1(A) W1(A) R2(A) W2(A) R1(B) W1(B)
         ↓ swap R2(A) and R1(B)? NO! Different data items, OK
R1(A) W1(A) R1(B) R2(A) W2(A) W1(B)
         ↓ swap W2(A) and W1(B)? YES, different data
R1(A) W1(A) R1(B) R2(A) W1(B) W2(A)
         ↓ continue...
→ Serial: T1 then T2? Check with precedence graph.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Graph</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Precedence Graph (Serialization Graph):
- Nodes: Transactions
- Edges: Ti → Tj if Ti has operation that conflicts
         with and precedes operation of Tj

Building the Graph:
For each pair of conflicting operations:
- If Ti's operation comes before Tj's: Add edge Ti → Tj

Test for Conflict Serializability:
Schedule is conflict serializable ⟺ Graph is acyclic

Example:
Schedule: R1(A) R2(A) W1(A) W2(A) R1(B) W1(B)

Conflicts:
- R2(A) before W1(A): T2 → T1
- W1(A) before W2(A): T1 → T2

Graph:
T1 ←→ T2 (cycle!)

Result: NOT conflict serializable!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Graph Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule: R1(A) W1(A) R2(A) W2(A) R2(B) W2(B)

Step 1: Find conflicts
- W1(A) before R2(A): T1 → T2
- W1(A) before W2(A): T1 → T2

Step 2: Build graph
T1 → T2

Step 3: Check for cycle
No cycle!

Step 4: Topological order
T1, T2

Conclusion: Conflict serializable
Equivalent to serial schedule: T1 then T2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">View Serializability</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`View Serializability (Less restrictive):

Two schedules are view equivalent if:
1. Same initial reads (first read of each item)
2. Same read-from relationships
3. Same final writes (last write of each item)

View Serializable ⊇ Conflict Serializable

Every conflict serializable schedule is view serializable.
But some view serializable schedules are not conflict serializable.

Example (View but not Conflict serializable):
W1(A) W2(A) W3(A)

- Not conflict serializable (all writes conflict)
- View equivalent to: W1(A) W2(A) W3(A) (same final write)

Note: Testing view serializability is NP-complete!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Serializability Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Conflict</th>
            <th className="p-3 border">View</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Definition</td>
            <td className="p-3 border">Swap non-conflicting ops</td>
            <td className="p-3 border">Same reads-from, final writes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Testing</td>
            <td className="p-3 border">Polynomial (graph)</td>
            <td className="p-3 border">NP-complete</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schedules</td>
            <td className="p-3 border">Subset of view</td>
            <td className="p-3 border">Larger set</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Practical</td>
            <td className="p-3 border text-green-500">Used in practice</td>
            <td className="p-3 border text-red-500">Theoretical</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Serializable = equivalent to serial schedule</li>
        <li>Conflict serializable: tested via precedence graph</li>
        <li>Acyclic graph = conflict serializable</li>
        <li>View serializable is more permissive</li>
        <li>Databases use conflict serializability</li>
      </ul>
    </div>
  </div>
);

export default Serializability;
