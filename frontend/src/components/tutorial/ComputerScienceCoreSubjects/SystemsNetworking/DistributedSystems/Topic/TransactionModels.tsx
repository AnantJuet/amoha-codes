import React from "react";

const TransactionModels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transaction Models in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Transaction models define the structure and behavior of transactions in distributed
      systems. Different models provide varying levels of flexibility, failure handling,
      and complexity. Understanding these models helps in choosing the right approach
      for specific application requirements, from simple all-or-nothing operations to
      complex long-running business processes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of Transaction Models</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction Model Hierarchy:

                    Transactions
                         |
        +----------------+----------------+
        |                |                |
   Flat Trans.     Nested Trans.    Advanced Models
        |                |                |
        v                v                v
  +---------+      +---------+      +---------+
  | Simple  |      | Parent/ |      | Sagas   |
  | All-or- |      | Child   |      | Chained |
  | Nothing |      | Subtrans|      | Long-   |
  +---------+      +---------+      | Running |
                                    +---------+

Complexity:  Low -----> Medium -----> High
Flexibility: Low -----> Medium -----> High`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Models Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Structure</th>
            <th className="p-3 border">Partial Rollback</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Flat</td>
            <td className="p-3 border">Single level, linear</td>
            <td className="p-3 border">No - all or nothing</td>
            <td className="p-3 border">Simple CRUD operations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Nested</td>
            <td className="p-3 border">Hierarchical tree</td>
            <td className="p-3 border">Yes - subtransaction level</td>
            <td className="p-3 border">Complex operations with alternatives</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Chained</td>
            <td className="p-3 border">Sequential chain</td>
            <td className="p-3 border">Partial - from current point</td>
            <td className="p-3 border">Long-running batch jobs</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Saga</td>
            <td className="p-3 border">Compensating actions</td>
            <td className="p-3 border">Via compensation</td>
            <td className="p-3 border">Microservices, long transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Multilevel</td>
            <td className="p-3 border">Abstraction layers</td>
            <td className="p-3 border">Level-specific</td>
            <td className="p-3 border">Database systems, semantic ops</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flat Transaction Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Transaction: Simplest Model

Structure:
+------------------------------------------+
|              TRANSACTION T               |
| +------+  +------+  +------+  +------+   |
| | Op 1 |->| Op 2 |->| Op 3 |->| Op 4 |   |
| +------+  +------+  +------+  +------+   |
+------------------------------------------+
      |                              |
   BEGIN                          COMMIT
                                    or
                                  ABORT

Characteristics:
- Single unit of work
- All operations or none
- No savepoints
- No partial commits

Example:
BEGIN TRANSACTION
  Debit(AccountA, $100)
  Credit(AccountB, $100)
  Log(Transfer)
COMMIT

If any operation fails -> All operations rolled back`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flat Transaction with Savepoints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Transaction with Savepoints:

+------------------------------------------+
|              TRANSACTION T               |
| +------+  SP1  +------+  SP2  +------+   |
| | Op 1 |-->o-->| Op 2 |-->o-->| Op 3 |   |
| +------+       +------+       +------+   |
+------------------------------------------+
      |            |       |         |
   BEGIN       Savepoint  Partial  COMMIT
                          Rollback
                          to SP1

Operations:
- BEGIN TRANSACTION
- SAVEPOINT sp_name
- ROLLBACK TO SAVEPOINT sp_name
- COMMIT

Example:
BEGIN TRANSACTION
  INSERT INTO orders (id, total) VALUES (1, 100);
  SAVEPOINT after_order;

  INSERT INTO order_items (...);  -- Fails!
  ROLLBACK TO SAVEPOINT after_order;

  INSERT INTO order_items (...);  -- Retry
COMMIT

Note: Still single transaction, just internal checkpoints`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chained Transaction Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chained Transactions: Committed Segments

+--------+   +--------+   +--------+   +--------+
|  T1    |-->|  T2    |-->|  T3    |-->|  T4    |
| Op1,2  |   | Op3,4  |   | Op5,6  |   | Op7,8  |
+--------+   +--------+   +--------+   +--------+
    |            |            |            |
 COMMIT       COMMIT       COMMIT       COMMIT
    |            |            |
 Durable      Durable      Durable

Key Features:
- Each segment commits independently
- Locks released between segments (optional)
- Cannot rollback committed segments
- Reduces lock holding time

Transition:
COMMIT WORK AND CHAIN

T1: Work --> COMMIT AND CHAIN --> T2: Work --> COMMIT

Example: Monthly Report Generation
+----------------+   +----------------+   +----------------+
| Process Jan    |-->| Process Feb    |-->| Process Mar    |
| Commit Jan     |   | Commit Feb     |   | Commit Mar     |
+----------------+   +----------------+   +----------------+
      |                    |                    |
   Durable              Durable              Durable

If March fails, Jan and Feb data is preserved!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Saga Transaction Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Saga: Long-Running Transactions with Compensation

Structure:
T1 --> T2 --> T3 --> T4 --> T5
 |      |      |      |      |
C1     C2     C3     C4     C5  (Compensating Transactions)

Forward Execution (Success):
T1 --> T2 --> T3 --> T4 --> T5 --> COMPLETE

Backward Recovery (T3 fails):
T1 --> T2 --> T3 (FAIL!)
              |
              v
        C2 <-- C1 <-- ABORT

Example: Travel Booking Saga
+------------------+   +------------------+   +------------------+
| T1: Book Flight  |-->| T2: Book Hotel   |-->| T3: Book Car     |
+------------------+   +------------------+   +------------------+
        |                      |                      |
        v                      v                      v
+------------------+   +------------------+   +------------------+
| C1: Cancel Flight|   | C2: Cancel Hotel |   | C3: Cancel Car   |
+------------------+   +------------------+   +------------------+

If Hotel booking fails:
1. Execute C1 (Cancel Flight)
2. User notified of failure

Saga Types:
1. Choreography - Services react to events
2. Orchestration - Central coordinator manages flow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Saga Implementation Patterns</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Pros</th>
            <th className="p-3 border">Cons</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Choreography</td>
            <td className="p-3 border">Each service publishes events, others react</td>
            <td className="p-3 border">Decoupled, simple for few services</td>
            <td className="p-3 border">Hard to track, cyclic dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Orchestration</td>
            <td className="p-3 border">Central orchestrator coordinates all steps</td>
            <td className="p-3 border">Easy to understand, centralized logic</td>
            <td className="p-3 border">Single point of failure, coupling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Choreography vs Orchestration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CHOREOGRAPHY (Event-Driven):

Order          Inventory        Payment         Shipping
  |                |               |               |
  | OrderCreated   |               |               |
  |--------------->|               |               |
  |                | InventoryRes. |               |
  |                |-------------->|               |
  |                |               | PaymentProc.  |
  |                |               |-------------->|
  |                |               |               | ShippingInit
  |                |               |               |------>

Each service:
- Listens for relevant events
- Performs its action
- Publishes completion event


ORCHESTRATION (Central Control):

          +------------------+
          |   Orchestrator   |
          +------------------+
               /  |  |  \\
              /   |  |   \\
             v    v  v    v
         +----+ +----+ +----+ +----+
         |Ord | |Inv | |Pay | |Ship|
         +----+ +----+ +----+ +----+

Orchestrator:
1. CreateOrder() --> Order Service
2. ReserveInventory() --> Inventory Service
3. ProcessPayment() --> Payment Service
4. InitiateShipping() --> Shipping Service

On failure: Orchestrator calls compensations in reverse`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multilevel Transaction Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multilevel Transactions: Abstraction Layers

Level 2 (Semantic):    Transfer(A, B, $100)
                             |
                             v
Level 1 (Logical):     Debit(A, $100)  Credit(B, $100)
                          |     |          |     |
                          v     v          v     v
Level 0 (Physical):    Read  Write     Read  Write

Each level has its own:
- Operations
- Commit/Abort semantics
- Compensating actions

Example: Database System
+----------------------------------------+
| User Level:  TRANSFER(account1->account2, $500)
+----------------------------------------+
        |
        v
+----------------------------------------+
| SQL Level:   UPDATE accounts SET ...
|              INSERT INTO audit_log ...
+----------------------------------------+
        |
        v
+----------------------------------------+
| Page Level:  Write Page 123
|              Write Page 456
+----------------------------------------+
        |
        v
+----------------------------------------+
| Disk Level:  Block I/O operations
+----------------------------------------+

Benefits:
- Better concurrency (release low-level locks early)
- Semantic compensations (undo at higher level)
- Modularity in transaction design`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Model Selection Guidelines</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Recommended Model</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple CRUD operations</td>
            <td className="p-3 border">Flat Transaction</td>
            <td className="p-3 border">Simplicity, strong guarantees</td>
          </tr>
          <tr>
            <td className="p-3 border">Retry alternative on failure</td>
            <td className="p-3 border">Nested Transaction</td>
            <td className="p-3 border">Partial rollback capability</td>
          </tr>
          <tr>
            <td className="p-3 border">Long batch processing</td>
            <td className="p-3 border">Chained Transaction</td>
            <td className="p-3 border">Preserve progress, reduce lock time</td>
          </tr>
          <tr>
            <td className="p-3 border">Microservices workflow</td>
            <td className="p-3 border">Saga Pattern</td>
            <td className="p-3 border">No distributed locks, compensation</td>
          </tr>
          <tr>
            <td className="p-3 border">Complex with abstractions</td>
            <td className="p-3 border">Multilevel Transaction</td>
            <td className="p-3 border">Better concurrency, semantic undo</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Flat Transactions:</strong> Simple, all-or-nothing, suitable for short operations</li>
        <li><strong>Savepoints:</strong> Allow partial rollback within a flat transaction</li>
        <li><strong>Nested Transactions:</strong> Hierarchical subtransactions with independent commit/abort</li>
        <li><strong>Chained Transactions:</strong> Sequential committed segments for long-running processes</li>
        <li><strong>Sagas:</strong> Use compensating transactions for rollback in distributed systems</li>
        <li><strong>Choreography:</strong> Event-driven saga with decoupled services</li>
        <li><strong>Orchestration:</strong> Central coordinator manages saga workflow</li>
        <li>Choose model based on duration, complexity, and failure handling requirements</li>
      </ul>
    </div>
  </div>
);

export default TransactionModels;
