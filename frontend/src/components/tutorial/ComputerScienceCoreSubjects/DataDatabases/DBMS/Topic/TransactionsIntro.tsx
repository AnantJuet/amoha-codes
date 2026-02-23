import React from "react";

const TransactionsIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Transactions</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A transaction is a logical unit of work that consists of one or more database operations.
      Transactions ensure data integrity by following the ACID properties, even in case of
      system failures or concurrent access.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Transaction?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction Definition:

A transaction is a sequence of operations performed as a single
logical unit of work that either:
- Completes entirely (COMMIT), or
- Has no effect at all (ROLLBACK)

Example: Bank Transfer
BEGIN TRANSACTION
    1. Read Account A balance
    2. Deduct $100 from Account A
    3. Read Account B balance
    4. Add $100 to Account B
COMMIT

Either ALL steps complete, or NONE do.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ACID Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Ensures</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Atomicity</td>
            <td className="p-3 border">All or nothing execution</td>
            <td className="p-3 border">No partial updates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency</td>
            <td className="p-3 border">Valid state to valid state</td>
            <td className="p-3 border">Integrity constraints</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Isolation</td>
            <td className="p-3 border">Concurrent transactions isolated</td>
            <td className="p-3 border">No interference</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Durability</td>
            <td className="p-3 border">Committed changes permanent</td>
            <td className="p-3 border">Survives failures</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction States</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction State Diagram:

  +--------+
  | Active |-----+
  +--------+     |
      |          |
      v          | (failure)
  +-----------+  |
  | Partially |--+----> +--------+
  | Committed |         | Failed |
  +-----------+         +--------+
      |                     |
      v                     v
  +-----------+         +---------+
  | Committed |         | Aborted |
  +-----------+         +---------+

States:
- Active: Transaction executing
- Partially Committed: Final statement executed
- Committed: Successfully completed
- Failed: Error occurred
- Aborted: Rolled back, changes undone`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Transaction Operations:

Read(X):  Read data item X from database
Write(X): Write data item X to database

Transaction Control:
BEGIN TRANSACTION  - Start a transaction
COMMIT            - Make changes permanent
ROLLBACK          - Undo all changes
SAVEPOINT         - Create a checkpoint

Example:
BEGIN TRANSACTION;
    UPDATE Account SET Balance = Balance - 100 WHERE AccNo = 'A';
    UPDATE Account SET Balance = Balance + 100 WHERE AccNo = 'B';
COMMIT;

-- Or if error:
ROLLBACK;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bank Transfer Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transfer $100 from Account A to Account B:

Initial State:
Account A: $500
Account B: $200

Transaction T:
T: Read(A)        → A = 500
T: A = A - 100    → A = 400
T: Write(A)       → Account A = 400
T: Read(B)        → B = 200
T: B = B + 100    → B = 300
T: Write(B)       → Account B = 300
COMMIT

Final State (if committed):
Account A: $400
Account B: $300
Total: $700 (unchanged - consistency!)

If failure after Write(A) but before Write(B):
ROLLBACK → Both accounts unchanged
Account A: $500, Account B: $200 (atomicity!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Transactions Matter</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>System Crashes:</strong> Atomicity ensures no partial updates</li>
        <li><strong>Concurrent Access:</strong> Isolation prevents interference</li>
        <li><strong>Power Failures:</strong> Durability ensures committed data survives</li>
        <li><strong>Application Errors:</strong> Rollback capability allows recovery</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Transaction is a logical unit of work</li>
        <li>ACID properties ensure reliability</li>
        <li>Either all operations complete or none</li>
        <li>COMMIT makes changes permanent</li>
        <li>ROLLBACK undoes all changes</li>
      </ul>
    </div>
  </div>
);

export default TransactionsIntro;
