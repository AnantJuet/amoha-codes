import React from "react";

const ConflictSerializability: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Conflict Serializability
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Conflict serializability is a property of a schedule that guarantees it will
      produce the same result as some serial schedule. It is the most common criterion
      used to ensure correct concurrent execution of transactions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        A schedule S is <strong>conflict serializable</strong> if it can be transformed
        into a serial schedule by swapping non-conflicting adjacent operations.
      </p>
      <p className="leading-relaxed mt-2">
        Equivalently, S is conflict serializable if its precedence graph is acyclic.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence Graph Method</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm to build Precedence Graph:

1. Create a node for each transaction Ti
2. For each pair of conflicting operations:
   If operation of Ti comes before operation of Tj,
   add a directed edge from Ti to Tj

3. If the graph has a cycle: NOT conflict serializable
   If the graph is acyclic: Conflict serializable

Topological sort of acyclic graph gives equivalent serial order.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 1: Serializable Schedule</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule S: R1(A), W1(A), R2(A), W2(A), R2(B), W2(B), R1(B), W1(B)

Step 1: Identify conflicts
On A: W1(A) before R2(A) -> T1 -> T2
      W1(A) before W2(A) -> T1 -> T2
On B: W2(B) before R1(B) -> T2 -> T1
      W2(B) before W1(B) -> T2 -> T1

Step 2: Build precedence graph
    T1 -----> T2  (from A operations)
    T1 <----- T2  (from B operations)

Step 3: Check for cycles
    T1 -> T2 -> T1 (CYCLE EXISTS!)

Conclusion: Schedule S is NOT conflict serializable.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 2: Serializable Schedule</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule S: R1(A), R2(A), W1(A), R1(B), R2(B), W2(B)

Step 1: Identify conflicts
On A: R2(A) before W1(A)? No, R2 is a read
      Actually conflicts:
      - W1(A) after R2(A) -> T2 -> T1 (write after read by different txn)
      Wait, R2(A) is before W1(A), so T2 -> T1
On B: R1(B) before W2(B) -> T1 -> T2

Step 2: Build precedence graph
    T1 -----> T2  (from B)
    T2 -----> T1  (from A)

Step 3: Cycle? T1 -> T2 -> T1 (YES, CYCLE!)

NOT serializable.

Let's try another schedule:
S': R1(A), W1(A), R2(A), W2(A), R1(B), W1(B), R2(B), W2(B)

Conflicts on A: T1 -> T2
Conflicts on B: T1 -> T2

Graph: T1 -> T2 (no cycle)

S' IS conflict serializable (equivalent to T1, T2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three Transaction Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule: R1(A), R2(B), W3(A), W1(A), W2(B), W3(B)

Conflicts:
On A: R1(A) before W3(A) -> T1 precedes T3
      W3(A) before W1(A) -> T3 precedes T1 (CONFLICT!)
On B: R2(B) before W3(B) -> T2 precedes T3
      W2(B) before W3(B) -> T2 precedes T3

Wait, recheck A:
- R1(A) then W3(A): T1 -> T3
- W3(A) then W1(A): T3 -> T1

Graph edges:
T1 -> T3 and T3 -> T1 (CYCLE!)

NOT conflict serializable.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Properties</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Every serial schedule is conflict serializable</li>
        <li>Conflict serializable implies view serializable</li>
        <li>View serializable does NOT imply conflict serializable</li>
        <li>Testing conflict serializability: O(n^2) using precedence graph</li>
        <li>Lock-based protocols ensure conflict serializability</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Build precedence graph from conflicting operations</li>
        <li>Acyclic graph = conflict serializable</li>
        <li>Cyclic graph = NOT conflict serializable</li>
        <li>Topological sort gives equivalent serial order</li>
        <li>Most concurrency control protocols enforce conflict serializability</li>
        <li>Check all pairs of transactions for conflicts on each data item</li>
      </ul>
    </div>
  </div>
);

export default ConflictSerializability;
