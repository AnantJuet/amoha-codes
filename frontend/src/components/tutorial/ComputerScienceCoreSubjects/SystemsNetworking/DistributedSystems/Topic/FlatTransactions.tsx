import React from "react";

const FlatTransactions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Flat Transactions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Flat transactions are the simplest and most common transaction model used in
      database systems. They provide a straightforward all-or-nothing semantic where
      a sequence of operations is treated as a single indivisible unit. In distributed
      systems, flat transactions form the foundation for more complex transaction models
      and are coordinated using protocols like Two-Phase Commit.
    </p>

    <h2 className="text-3xl font-bold mt-8">Flat Transaction Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Transaction: Linear Sequence of Operations

+--------------------------------------------------+
|                  TRANSACTION                      |
|  +--------+    +--------+    +--------+          |
|  |  Op 1  | -> |  Op 2  | -> |  Op 3  | -> ...   |
|  +--------+    +--------+    +--------+          |
+--------------------------------------------------+
     ^                                        |
     |                                        v
   BEGIN                               COMMIT or ABORT

Lifecycle:
1. BEGIN TRANSACTION
2. Execute operations (reads, writes)
3. Either:
   - COMMIT: All changes made permanent
   - ABORT: All changes rolled back

Key Property: ATOMICITY
- All operations succeed -> COMMIT
- Any operation fails   -> ABORT all`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flat Transaction Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Implication</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Single Level</td>
            <td className="p-3 border">No subtransactions or nesting</td>
            <td className="p-3 border">Simple execution model</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">All-or-Nothing</td>
            <td className="p-3 border">Complete success or complete failure</td>
            <td className="p-3 border">No partial commits</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Sequential</td>
            <td className="p-3 border">Operations executed in order</td>
            <td className="p-3 border">Predictable execution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">ACID Compliant</td>
            <td className="p-3 border">Full ACID guarantees</td>
            <td className="p-3 border">Strong consistency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Short Duration</td>
            <td className="p-3 border">Best for brief operations</td>
            <td className="p-3 border">Minimizes lock contention</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Bank Transfer</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Transaction: Transfer $500 from Account A to Account B

BEGIN TRANSACTION T1

  -- Read current balances
  balance_A = READ(Account_A.balance)  -- Returns 1000
  balance_B = READ(Account_B.balance)  -- Returns 500

  -- Validate
  IF balance_A < 500 THEN
    ABORT  -- Insufficient funds
  END IF

  -- Perform transfer
  WRITE(Account_A.balance, balance_A - 500)  -- Now 500
  WRITE(Account_B.balance, balance_B + 500)  -- Now 1000

  -- Log the transaction
  INSERT INTO transfer_log (from, to, amount, timestamp)
  VALUES ('A', 'B', 500, NOW())

COMMIT

Transaction States:
+--------+     +--------+     +---------+
| Active | --> | Partial| --> |Committed|
+--------+     |Commit  |     +---------+
    |          +--------+
    |               |
    v               v
+--------+     +--------+
| Failed | --> | Aborted|
+--------+     +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributed Flat Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Flat Transaction Across Multiple Nodes:

Client: "Transfer $500 from Bank X to Bank Y"

           +------------------+
           |   Coordinator    |
           | (Transaction Mgr)|
           +------------------+
                /        \\
               /          \\
              v            v
      +----------+    +----------+
      |  Bank X  |    |  Bank Y  |
      | (Node A) |    | (Node B) |
      +----------+    +----------+
      | Debit    |    | Credit   |
      | $500     |    | $500     |
      +----------+    +----------+

Execution Flow:
1. Coordinator starts transaction T1
2. Coordinator sends DEBIT to Bank X
3. Coordinator sends CREDIT to Bank Y
4. Both banks prepare (lock resources)
5. Coordinator initiates 2PC:
   - Phase 1: Can you commit?
   - Bank X: YES
   - Bank Y: YES
   - Phase 2: COMMIT
6. Both banks commit, release locks

Challenge: What if Bank Y fails after Bank X committed?
Solution: Two-Phase Commit ensures atomicity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Effect</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">BEGIN</td>
            <td className="p-3 border">Start a new transaction</td>
            <td className="p-3 border">Allocate TID, initialize state</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">READ(x)</td>
            <td className="p-3 border">Read value of data item x</td>
            <td className="p-3 border">Acquire read lock, return value</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">WRITE(x, v)</td>
            <td className="p-3 border">Write value v to data item x</td>
            <td className="p-3 border">Acquire write lock, buffer change</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">COMMIT</td>
            <td className="p-3 border">Make all changes permanent</td>
            <td className="p-3 border">Flush to disk, release locks</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">ABORT</td>
            <td className="p-3 border">Undo all changes</td>
            <td className="p-3 border">Rollback, release locks</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery in Flat Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery Mechanisms for Flat Transactions:

WRITE-AHEAD LOGGING (WAL):
Before modifying data, write log record to stable storage

Log Format:
+-------+-------+----------+-----------+----------+
| LSN   | TID   | Operation| Old Value | New Value|
+-------+-------+----------+-----------+----------+
| 001   | T1    | BEGIN    |    -      |    -     |
| 002   | T1    | WRITE(A) |   1000    |   500    |
| 003   | T1    | WRITE(B) |    500    |  1000    |
| 004   | T1    | COMMIT   |    -      |    -     |
+-------+-------+----------+-----------+----------+

Recovery Operations:

UNDO (Rollback uncommitted):
- Scan log backwards
- For uncommitted transactions:
  - Restore old values

REDO (Replay committed):
- Scan log forwards
- For committed transactions:
  - Apply new values

ARIES Recovery:
1. Analysis: Determine state at crash
2. Redo: Replay history
3. Undo: Rollback active transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limitations of Flat Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Limitations and Solutions:

1. NO PARTIAL ROLLBACK
   Problem: Cannot retry just failed part
   +----+----+----+----+
   | OK | OK |FAIL| -- |
   +----+----+----+----+
   Must restart entire transaction!

   Solution: Use nested transactions

2. LONG DURATION ISSUES
   Problem: Long transactions hold locks
   T1: BEGIN ... (1 hour of work) ... COMMIT
   Other transactions: BLOCKED!

   Solution: Use chained transactions

3. NO INTERMEDIATE RESULTS
   Problem: Cannot see partial progress
   T1: Process 1M records ... COMMIT
   (All or nothing visible)

   Solution: Use sagas or chained transactions

4. WASTED WORK ON FAILURE
   Problem: Late failure loses all work
   T1: 99% complete ... FAILURE ... 0% saved

   Solution: Use savepoints or chained transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flat Transactions with Savepoints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Enhanced Flat Transactions: Savepoints

+----------------------------------------------------------+
|                    TRANSACTION T1                         |
|  +----+    SP1    +----+    SP2    +----+    +----+      |
|  |Op1 |---->o---->|Op2 |---->o---->|Op3 |--->|Op4 |      |
|  +----+           +----+           +----+    +----+      |
+----------------------------------------------------------+
     ^        ^          ^       ^               |
   BEGIN   Savepoint   Partial  Savepoint     COMMIT

Example:
BEGIN TRANSACTION
  INSERT INTO orders (id, customer) VALUES (1, 'John');
  SAVEPOINT order_created;

  -- Try to add items
  INSERT INTO order_items (order_id, item) VALUES (1, 'Widget');
  SAVEPOINT items_added;

  -- Payment processing fails
  CALL process_payment(100);  -- ERROR!

  -- Rollback to savepoint, not entire transaction
  ROLLBACK TO SAVEPOINT items_added;

  -- Try different payment method
  CALL process_payment_alternative(100);  -- SUCCESS

COMMIT

Savepoint Operations:
- SAVEPOINT name        : Create checkpoint
- ROLLBACK TO SAVEPOINT : Partial rollback
- RELEASE SAVEPOINT     : Remove checkpoint`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Flat vs Other Transaction Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Flat</th>
            <th className="p-3 border">Nested</th>
            <th className="p-3 border">Saga</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Structure</td>
            <td className="p-3 border">Linear</td>
            <td className="p-3 border">Hierarchical</td>
            <td className="p-3 border">Sequential steps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partial Rollback</td>
            <td className="p-3 border">No (with savepoints: limited)</td>
            <td className="p-3 border">Yes (subtransaction)</td>
            <td className="p-3 border">Via compensation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Isolation</td>
            <td className="p-3 border">Full ACID</td>
            <td className="p-3 border">Full ACID</td>
            <td className="p-3 border">Relaxed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lock Duration</td>
            <td className="p-3 border">Until commit/abort</td>
            <td className="p-3 border">Until subtrans ends</td>
            <td className="p-3 border">Per step only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Flat Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Best Use Cases for Flat Transactions:

1. SHORT OPERATIONS
   - Simple CRUD operations
   - Single-table updates
   - Brief computations

2. SIMPLE WORKFLOWS
   - Debit/Credit operations
   - Single-resource modifications
   - Atomic counters

3. HIGH CONSISTENCY REQUIREMENTS
   - Financial transactions
   - Inventory updates
   - Critical data modifications

4. SINGLE DATABASE
   - Local transactions
   - No cross-service operations

NOT Recommended For:
- Long-running processes (> seconds)
- Complex multi-step workflows
- Operations requiring partial commits
- Cross-service microservices operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Flat transactions are the simplest transaction model with all-or-nothing semantics</li>
        <li>They provide full ACID guarantees but limited flexibility</li>
        <li>Operations include BEGIN, READ, WRITE, COMMIT, and ABORT</li>
        <li>Recovery uses Write-Ahead Logging (WAL) with UNDO/REDO operations</li>
        <li>Savepoints add partial rollback capability within a flat transaction</li>
        <li>Best suited for short, simple operations requiring strong consistency</li>
        <li>Distributed flat transactions require coordination protocols like 2PC</li>
        <li>For complex workflows, consider nested transactions or sagas instead</li>
      </ul>
    </div>
  </div>
);

export default FlatTransactions;
