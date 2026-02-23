import React from "react";

const NestedTransactions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Nested Transactions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Nested transactions extend the flat transaction model by allowing transactions
      to contain subtransactions, forming a hierarchical tree structure. This model
      provides greater flexibility by enabling partial rollbacks, independent failure
      handling, and better concurrency. Nested transactions are particularly valuable
      in distributed systems where operations span multiple services and partial
      failures need to be handled gracefully.
    </p>

    <h2 className="text-3xl font-bold mt-8">Nested Transaction Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nested Transaction Hierarchy:

                    +------------------+
                    |   Top-Level T    |
                    | (Root Transaction)|
                    +------------------+
                    /         |         \\
                   /          |          \\
                  v           v           v
          +-------+     +-------+     +-------+
          |  T.1  |     |  T.2  |     |  T.3  |
          | Sub   |     | Sub   |     | Sub   |
          +-------+     +-------+     +-------+
          /      \\           |
         /        \\          |
        v          v         v
    +------+   +------+  +------+
    | T.1.1|   | T.1.2|  | T.2.1|
    +------+   +------+  +------+

Rules:
- Root transaction starts the hierarchy
- Subtransactions can spawn their own children
- Parent waits for children to complete
- Child abort doesn't force parent abort
- Parent abort forces all children abort`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nested Transaction Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Partial Rollback</td>
            <td className="p-3 border">Failed subtransaction can be rolled back independently</td>
            <td className="p-3 border">Retry alternatives without full restart</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Modularity</td>
            <td className="p-3 border">Complex operations broken into logical units</td>
            <td className="p-3 border">Better code organization</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Intra-transaction Parallelism</td>
            <td className="p-3 border">Sibling subtransactions can run concurrently</td>
            <td className="p-3 border">Improved performance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Failure Isolation</td>
            <td className="p-3 border">Child failures contained within their scope</td>
            <td className="p-3 border">Better fault tolerance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Commit and Abort Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nested Transaction Commit/Abort Rules:

COMMIT Rules:
1. Subtransaction commits are PROVISIONAL
   - Results held until parent commits
   - Not visible outside transaction tree

2. Only TOP-LEVEL commit is PERMANENT
   - When root commits, all provisional commits finalize
   - Results become visible to other transactions

3. Parent must wait for all children
   - Cannot commit while children are active

ABORT Rules:
1. Subtransaction abort is LOCAL
   - Only affects that subtransaction
   - Parent can retry or try alternative

2. Parent abort is CASCADING
   - Aborts all descendants (children, grandchildren, etc.)
   - Releases all held resources

Visual:
          T (Root)
         /   \\
       T.1   T.2
        |     |
      T.1.1  T.2.1

If T.1.1 aborts: Only T.1.1 rolled back, T.1 can retry
If T.1 aborts:   T.1 and T.1.1 rolled back
If T aborts:     EVERYTHING rolled back`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Travel Booking</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nested Transaction: Book Complete Trip

BEGIN TRANSACTION BookTrip (Root)
  |
  +-- BEGIN SUBTRANSACTION BookFlight
  |     |
  |     +-- Try Airline A: FAIL (no seats)
  |     |   (Subtransaction aborted, try alternative)
  |     |
  |     +-- Try Airline B: SUCCESS
  |     |   (Subtransaction committed provisionally)
  |
  +-- BEGIN SUBTRANSACTION BookHotel
  |     |
  |     +-- Try Hotel X: SUCCESS
  |         (Subtransaction committed provisionally)
  |
  +-- BEGIN SUBTRANSACTION BookCar
        |
        +-- Try Rental Y: SUCCESS
            (Subtransaction committed provisionally)

  All subtransactions successful

COMMIT BookTrip (Root)
  --> All provisional commits become permanent
  --> Flight, Hotel, Car all confirmed

If BookHotel had failed after BookFlight succeeded:
- BookFlight remains provisionally committed
- BookHotel aborted
- Parent (BookTrip) can:
  - Try different hotel
  - Abort entire trip (cascades to BookFlight)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visibility and Locking</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Visibility Rules in Nested Transactions:

INTERNAL VISIBILITY:
- Parent can see child's committed results
- Siblings can see each other's results (after sibling commits)
- Children can see parent's uncommitted changes

EXTERNAL VISIBILITY:
- Outside transactions see NOTHING until root commits
- Provisional commits are invisible externally

LOCKING:
           T
          / \\
        T.1  T.2
         |
       T.1.1

Lock Inheritance:
- T.1.1 acquires lock on X
- When T.1.1 commits, lock passes to T.1
- When T.1 commits, lock passes to T
- When T commits, lock released

Lock Inheritance Diagram:
+--------+     +--------+     +--------+     +---------+
| T.1.1  | --> |  T.1   | --> |   T    | --> | Release |
| holds  |     | holds  |     | holds  |     |         |
| lock X |     | lock X |     | lock X |     |         |
+--------+     +--------+     +--------+     +---------+
 commit         commit         commit

Benefit: Prevents other transactions from interfering
         while maintaining subtransaction isolation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Moss Nested Transaction Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Moss Model (Closed Nested Transactions):

Characteristics:
1. Subtransactions are closed (results hidden until parent commits)
2. Strict hierarchy - children cannot outlive parents
3. Locks inherited up the tree on commit
4. Abort is local to subtransaction

Transaction Tree States:
+----------+     +----------+     +----------+
|  Active  | --> | Committed| --> |  Final   |
|          |     |(Provisional)   |(Top-level)|
+----------+     +----------+     +----------+
     |
     v
+----------+
| Aborted  |
+----------+

Formal Rules:
- Begin(T) - Start transaction T
- Commit(T) - Provisionally commit T
- Abort(T) - Rollback T and descendants
- T.parent - Parent of T
- T.children - Set of child transactions

Commit Propagation:
Commit(T):
  Wait for all T.children to complete
  If any child aborted AND not handled:
    Abort(T)
  Else:
    Pass T's locks to T.parent
    Mark T as committed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Open vs Closed Nested Transactions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Closed (Moss Model)</th>
            <th className="p-3 border">Open</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Visibility</td>
            <td className="p-3 border">Results hidden until root commits</td>
            <td className="p-3 border">Subtrans results visible externally</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Isolation</td>
            <td className="p-3 border">Full isolation</td>
            <td className="p-3 border">Relaxed isolation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rollback</td>
            <td className="p-3 border">Parent can rollback child commits</td>
            <td className="p-3 border">Committed subtrans cannot be rolled back</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compensation</td>
            <td className="p-3 border">Not needed (uncommitted)</td>
            <td className="p-3 border">Required for semantic undo</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Traditional DBMS</td>
            <td className="p-3 border">Sagas, long-running processes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Nested Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Nested Transactions Across Distributed Nodes:

         Coordinator (Root T)
               Node 0
              /      \\
             /        \\
            v          v
      Participant    Participant
        Node 1         Node 2
      (Subtrans T.1) (Subtrans T.2)
          |              |
          v              v
      Participant    Participant
        Node 3         Node 4
      (T.1.1)        (T.2.1)

Coordination Protocol (Nested 2PC):

1. Root initiates commit
2. Each internal node acts as sub-coordinator
3. Commit propagates down the tree
4. Votes propagate up the tree
5. Final decision propagates down

Message Flow:
Root --> T.1: PREPARE
Root --> T.2: PREPARE
T.1 --> T.1.1: PREPARE
T.2 --> T.2.1: PREPARE
T.1.1 --> T.1: VOTE YES
T.2.1 --> T.2: VOTE YES
T.1 --> Root: VOTE YES
T.2 --> Root: VOTE YES
Root --> T.1, T.2: COMMIT
T.1 --> T.1.1: COMMIT
T.2 --> T.2.1: COMMIT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implementation Challenges and Solutions:

1. TRANSACTION ID STRUCTURE
   Root: T
   Children: T.1, T.2, T.3
   Grandchildren: T.1.1, T.1.2, T.2.1

   TID encodes hierarchy: Coordinator.Sequence.Sequence...

2. LOCK TABLE MANAGEMENT
   Lock Entry:
   +----------+----------+----------+
   | Resource | Holder   | Mode     |
   +----------+----------+----------+
   | X        | T.1.1    | Write    |
   +----------+----------+----------+

   On T.1.1 commit: Update holder to T.1
   On T.1 commit: Update holder to T

3. LOG STRUCTURE
   +-----+--------+--------+---------+
   | LSN | TID    | Type   | Data    |
   +-----+--------+--------+---------+
   | 1   | T      | BEGIN  |         |
   | 2   | T.1    | BEGIN  |         |
   | 3   | T.1    | WRITE  | X=100   |
   | 4   | T.1    | COMMIT |         |
   | 5   | T.2    | BEGIN  |         |
   | 6   | T.2    | WRITE  | Y=200   |
   | 7   | T.2    | ABORT  |         |
   | 8   | T      | COMMIT |         |
   +-----+--------+--------+---------+

4. RECOVERY
   - Must reconstruct transaction tree
   - Uncommitted children rolled back
   - Root commit/abort determines final state`}
      </pre>
    </div>

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
            <td className="p-3 border">Partial rollback without losing all work</td>
            <td className="p-3 border">More complex implementation</td>
          </tr>
          <tr>
            <td className="p-3 border">Modular transaction design</td>
            <td className="p-3 border">Higher overhead (managing hierarchy)</td>
          </tr>
          <tr>
            <td className="p-3 border">Parallel execution of subtransactions</td>
            <td className="p-3 border">Lock inheritance complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">Better failure handling</td>
            <td className="p-3 border">Longer lock holding times</td>
          </tr>
          <tr>
            <td className="p-3 border">Natural mapping to distributed systems</td>
            <td className="p-3 border">Recovery more complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Nested transactions form a tree hierarchy with parent-child relationships</li>
        <li>Subtransaction commits are provisional until the root commits</li>
        <li>Child abort is local; parent abort cascades to all descendants</li>
        <li>Locks are inherited up the tree when subtransactions commit</li>
        <li>Closed nesting hides results until root commits (full ACID)</li>
        <li>Open nesting allows visible subtransaction commits (requires compensation)</li>
        <li>Enables partial rollback and retry of failed operations</li>
        <li>Well-suited for distributed systems with hierarchical operation structures</li>
      </ul>
    </div>
  </div>
);

export default NestedTransactions;
