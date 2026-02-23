import React from 'react';

const ACIDProperties: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ACID Properties
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ACID is an acronym that stands for Atomicity, Consistency, Isolation, and Durability.
      These four properties are fundamental to database transactions and ensure reliable
      processing of data even in the face of errors, power failures, or system crashes.
    </p>

    <h2 className="text-2xl font-bold mt-6">What is a Transaction?</h2>
    <p className="leading-relaxed">
      A transaction is a sequence of database operations that are treated as a single logical
      unit of work. Either all operations in a transaction succeed, or none of them do.
      Transactions help maintain data integrity in concurrent and failure-prone environments.
    </p>

    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Example Transaction (Bank Transfer):</p>
      <pre className="mt-2 text-sm overflow-x-auto">
{`BEGIN TRANSACTION;
  -- Deduct from Account A
  UPDATE accounts SET balance = balance - 100 WHERE id = 'A';

  -- Add to Account B
  UPDATE accounts SET balance = balance + 100 WHERE id = 'B';
COMMIT;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">The Four ACID Properties</h2>

    <div className="grid grid-cols-1 gap-6 mt-4">
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-bold text-blue-800">1. Atomicity</h3>
        <p className="mt-2 leading-relaxed">
          Atomicity guarantees that a transaction is treated as a single, indivisible unit.
          Either all operations within the transaction are completed successfully, or none
          of them are applied. There is no partial completion.
        </p>
        <div className="mt-4 bg-white p-3 rounded">
          <p className="font-semibold text-sm">Example:</p>
          <p className="text-sm mt-1">
            In a bank transfer, if deducting from Account A succeeds but adding to Account B
            fails, atomicity ensures both operations are rolled back. Money does not disappear.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Ensures:</strong> All-or-nothing execution</p>
          <p className="text-gray-600"><strong>Mechanism:</strong> Transaction logs, rollback</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h3 className="text-xl font-bold text-green-800">2. Consistency</h3>
        <p className="mt-2 leading-relaxed">
          Consistency ensures that a transaction brings the database from one valid state to
          another valid state. All data integrity constraints, rules, and triggers must be
          satisfied before and after the transaction.
        </p>
        <div className="mt-4 bg-white p-3 rounded">
          <p className="font-semibold text-sm">Example:</p>
          <p className="text-sm mt-1">
            If a constraint says account balance cannot be negative, a transaction that would
            result in a negative balance will be rejected, maintaining consistency.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Ensures:</strong> Data integrity is preserved</p>
          <p className="text-gray-600"><strong>Mechanism:</strong> Constraints, triggers, foreign keys</p>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-bold text-purple-800">3. Isolation</h3>
        <p className="mt-2 leading-relaxed">
          Isolation ensures that concurrent transactions execute independently without
          interfering with each other. Each transaction should appear to execute in isolation,
          even when multiple transactions run simultaneously.
        </p>
        <div className="mt-4 bg-white p-3 rounded">
          <p className="font-semibold text-sm">Example:</p>
          <p className="text-sm mt-1">
            If two users try to book the same seat simultaneously, isolation ensures only
            one succeeds. The other sees the seat as unavailable after the first commits.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Ensures:</strong> Concurrent transactions do not conflict</p>
          <p className="text-gray-600"><strong>Mechanism:</strong> Locks, MVCC, isolation levels</p>
        </div>
      </div>

      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-orange-800">4. Durability</h3>
        <p className="mt-2 leading-relaxed">
          Durability guarantees that once a transaction is committed, it will remain
          committed even in the case of a system failure, power outage, or crash. The
          changes are permanently recorded in non-volatile storage.
        </p>
        <div className="mt-4 bg-white p-3 rounded">
          <p className="font-semibold text-sm">Example:</p>
          <p className="text-sm mt-1">
            After a bank transfer is committed, even if the server crashes immediately
            after, the transfer will still be recorded when the system restarts.
          </p>
        </div>
        <div className="mt-2 text-sm">
          <p className="text-green-700"><strong>Ensures:</strong> Committed data survives failures</p>
          <p className="text-gray-600"><strong>Mechanism:</strong> Write-ahead logging, disk persistence</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Isolation Levels</h2>
    <p className="leading-relaxed">
      SQL defines four isolation levels that determine how transactions interact:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Isolation Level</th>
            <th className="p-3 border">Dirty Read</th>
            <th className="p-3 border">Non-Repeatable Read</th>
            <th className="p-3 border">Phantom Read</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
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

    <h3 className="text-xl font-semibold mt-4">Read Phenomena Explained:</h3>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Dirty Read:</strong> Reading uncommitted changes from another transaction</li>
      <li><strong>Non-Repeatable Read:</strong> Reading the same row twice yields different data</li>
      <li><strong>Phantom Read:</strong> New rows appear in subsequent queries within same transaction</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">ACID vs BASE</h2>
    <p className="leading-relaxed">
      NoSQL databases often follow BASE (Basically Available, Soft state, Eventually consistent)
      instead of ACID for better scalability:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">ACID (SQL Databases)</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Strong consistency</li>
          <li>Pessimistic locking</li>
          <li>Vertical scaling primarily</li>
          <li>Complex transactions</li>
          <li>Examples: PostgreSQL, MySQL, Oracle</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">BASE (NoSQL Databases)</h4>
        <ul className="mt-2 text-sm list-disc list-inside">
          <li>Eventual consistency</li>
          <li>Optimistic approach</li>
          <li>Horizontal scaling</li>
          <li>Simple operations</li>
          <li>Examples: Cassandra, MongoDB, DynamoDB</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementing ACID</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-semibold">Common Techniques:</p>
      <ul className="mt-2 space-y-2">
        <li><strong>Write-Ahead Logging (WAL):</strong> Changes logged before applied</li>
        <li><strong>Two-Phase Commit (2PC):</strong> Distributed transaction coordination</li>
        <li><strong>MVCC:</strong> Multi-Version Concurrency Control for isolation</li>
        <li><strong>Locking:</strong> Row-level and table-level locks</li>
        <li><strong>Checkpointing:</strong> Periodic state snapshots for recovery</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of ACID</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Data Integrity:</strong> Guarantees correct and consistent data</li>
      <li><strong>Reliability:</strong> System recovers gracefully from failures</li>
      <li><strong>Predictability:</strong> Transactions behave consistently</li>
      <li><strong>Error Recovery:</strong> Automatic rollback on failures</li>
      <li><strong>Concurrency Safety:</strong> Multiple users work without conflicts</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of ACID</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Performance Overhead:</strong> Locking and logging add latency</li>
      <li><strong>Scalability Limits:</strong> Difficult to scale horizontally</li>
      <li><strong>Deadlocks:</strong> Transactions can block each other</li>
      <li><strong>Complexity:</strong> Distributed ACID is hard to implement</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Real-World Examples</h2>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <ul className="space-y-3">
        <li><strong>Banking:</strong> Money transfers require strict ACID compliance</li>
        <li><strong>E-commerce:</strong> Order processing with inventory updates</li>
        <li><strong>Healthcare:</strong> Patient records must be accurate and consistent</li>
        <li><strong>Airline Reservations:</strong> Seat booking must prevent double-booking</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Keep transactions short to reduce lock contention</li>
      <li>Choose appropriate isolation level for your use case</li>
      <li>Handle transaction errors with proper rollback</li>
      <li>Use connection pooling to manage database connections</li>
      <li>Monitor for deadlocks and optimize queries accordingly</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> ACID properties come with performance trade-offs. For
        applications that can tolerate eventual consistency, consider NoSQL databases
        with BASE properties for better scalability.
      </p>
    </div>
  </div>
);

export default ACIDProperties;
