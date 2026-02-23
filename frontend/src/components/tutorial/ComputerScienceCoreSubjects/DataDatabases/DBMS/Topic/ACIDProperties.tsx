import React from "react";

const ACIDProperties: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ACID Properties in DBMS
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ACID is an acronym that represents four key properties that guarantee database transactions
      are processed reliably. These properties ensure data validity despite errors, power failures,
      or other mishaps. ACID compliance is essential for maintaining data integrity in relational databases.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is ACID?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">A - Atomicity</td>
            <td className="p-3 border">All operations complete successfully or none do</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">C - Consistency</td>
            <td className="p-3 border">Database moves from one valid state to another</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">I - Isolation</td>
            <td className="p-3 border">Concurrent transactions don't interfere with each other</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">D - Durability</td>
            <td className="p-3 border">Committed changes persist even after system failure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Atomicity</h2>
    <p className="leading-relaxed">
      Atomicity ensures that a transaction is treated as a single, indivisible unit of work.
      Either all operations within the transaction succeed, or none of them do. There is no
      partial completion.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Bank Transfer

Transaction: Transfer $100 from Account A to Account B

Operations:
1. Deduct $100 from Account A
2. Add $100 to Account B

Atomicity Guarantee:
- Either BOTH operations complete successfully
- Or NEITHER operation takes effect

If system fails after Step 1:
- Transaction is rolled back
- Account A balance is restored
- No money is "lost"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Consistency</h2>
    <p className="leading-relaxed">
      Consistency ensures that a transaction can only bring the database from one valid state
      to another valid state. All data integrity constraints, rules, and triggers must be
      satisfied before and after the transaction.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Consistency in Bank Database

Constraint: Total money in bank must remain constant

Before Transaction:
  Account A: $500
  Account B: $300
  Total: $800

After Transfer of $100:
  Account A: $400
  Account B: $400
  Total: $800 ✓ (Consistency maintained)

If constraint violated:
  Transaction is rejected
  Database remains unchanged`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Isolation</h2>
    <p className="leading-relaxed">
      Isolation ensures that concurrent execution of transactions leaves the database in the
      same state as if the transactions were executed sequentially. Each transaction is
      isolated from other transactions until it completes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Concurrent Transactions

Initial Balance: Account A = $1000

Transaction T1: Withdraw $100
Transaction T2: Withdraw $200

Without Isolation (Problem):
  T1 reads: $1000
  T2 reads: $1000
  T1 writes: $900
  T2 writes: $800  (Lost T1's update!)

With Isolation (Correct):
  T1 reads: $1000
  T1 writes: $900
  T2 reads: $900
  T2 writes: $700  ✓`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Isolation Levels</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Level</th>
            <th className="p-3 border">Dirty Read</th>
            <th className="p-3 border">Non-Repeatable</th>
            <th className="p-3 border">Phantom</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Read Uncommitted</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Read Committed</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-red-600">Possible</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Repeatable Read</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-red-600">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Serializable</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
            <td className="p-3 border text-green-600">Prevented</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Durability</h2>
    <p className="leading-relaxed">
      Durability guarantees that once a transaction has been committed, it will remain
      committed even in the case of a system failure (e.g., power outage or crash).
      Committed data is written to non-volatile storage.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Durability

Transaction: Insert new customer record
  COMMIT executed successfully

Immediately after COMMIT:
  System crashes!
  Power failure!

After System Recovery:
  Customer record still exists ✓
  Transaction was durable

How it works:
1. Transaction log written to disk
2. Log persists across failures
3. Recovery process replays committed transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ACID in Practice</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- SQL Transaction Example
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 'A';
UPDATE accounts SET balance = balance + 100 WHERE id = 'B';

-- If both succeed
COMMIT;

-- If any fails
ROLLBACK;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Atomicity:</strong> All or nothing - no partial transactions</li>
        <li><strong>Consistency:</strong> Database integrity constraints always satisfied</li>
        <li><strong>Isolation:</strong> Transactions appear to run serially even when concurrent</li>
        <li><strong>Durability:</strong> Committed data survives system failures</li>
        <li>ACID properties are fundamental to reliable database systems</li>
        <li>Trade-off exists between strict ACID compliance and performance</li>
        <li>NoSQL databases may relax some ACID properties for scalability (BASE model)</li>
      </ul>
    </div>
  </div>
);

export default ACIDProperties;
