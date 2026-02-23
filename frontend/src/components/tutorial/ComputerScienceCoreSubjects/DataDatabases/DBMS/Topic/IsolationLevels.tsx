import React from "react";

const IsolationLevels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Isolation Levels</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Isolation levels define the degree to which a transaction is isolated from
      other concurrent transactions. Higher isolation provides more consistency
      but less concurrency. SQL standard defines four isolation levels.
    </p>

    <h2 className="text-3xl font-bold mt-8">Concurrency Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Concurrency Anomalies:

1. Dirty Read
   - Read uncommitted data from another transaction
   - Data might be rolled back

2. Non-Repeatable Read
   - Same query returns different results
   - Another transaction modified data between reads

3. Phantom Read
   - Same query returns different rows
   - Another transaction inserted/deleted rows`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dirty Read Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`T1:                           T2:
BEGIN                         BEGIN
UPDATE account
SET balance = 500
WHERE id = 1
                              SELECT balance FROM account
                              WHERE id = 1
                              -- Reads 500 (dirty data)
ROLLBACK
-- balance back to 1000
                              -- T2 used wrong value!

Problem: T2 read data that was never committed.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Repeatable Read Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`T1:                           T2:
BEGIN                         BEGIN
SELECT balance FROM account
WHERE id = 1
-- Returns 1000
                              UPDATE account
                              SET balance = 500
                              WHERE id = 1
                              COMMIT
SELECT balance FROM account
WHERE id = 1
-- Returns 500 (different!)
COMMIT

Problem: Same query, different results within T1.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phantom Read Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`T1:                           T2:
BEGIN                         BEGIN
SELECT COUNT(*) FROM employee
WHERE dept = 'IT'
-- Returns 5
                              INSERT INTO employee
                              (name, dept) VALUES
                              ('John', 'IT')
                              COMMIT
SELECT COUNT(*) FROM employee
WHERE dept = 'IT'
-- Returns 6 (phantom row!)
COMMIT

Problem: New rows appeared between same queries.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Isolation Levels</h2>
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
            <td className="p-3 border font-semibold">READ UNCOMMITTED</td>
            <td className="p-3 border text-red-500">Possible</td>
            <td className="p-3 border text-red-500">Possible</td>
            <td className="p-3 border text-red-500">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">READ COMMITTED</td>
            <td className="p-3 border text-green-500">Prevented</td>
            <td className="p-3 border text-red-500">Possible</td>
            <td className="p-3 border text-red-500">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">REPEATABLE READ</td>
            <td className="p-3 border text-green-500">Prevented</td>
            <td className="p-3 border text-green-500">Prevented</td>
            <td className="p-3 border text-red-500">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SERIALIZABLE</td>
            <td className="p-3 border text-green-500">Prevented</td>
            <td className="p-3 border text-green-500">Prevented</td>
            <td className="p-3 border text-green-500">Prevented</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Setting Isolation Level</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Set for current transaction
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Set for session
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- MySQL
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
START TRANSACTION;
-- operations
COMMIT;

-- PostgreSQL
BEGIN;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- operations
COMMIT;

-- Check current level (MySQL)
SELECT @@transaction_isolation;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Isolation Level Details</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. READ UNCOMMITTED
   - Lowest isolation, highest concurrency
   - No read locks
   - Can read uncommitted changes
   - Use: Non-critical reads, analytics

2. READ COMMITTED (Default for most DBs)
   - Reads only committed data
   - Read locks released immediately after read
   - Same query may return different data
   - Use: General purpose

3. REPEATABLE READ
   - Read locks held until transaction ends
   - Same data reads consistently
   - Phantoms still possible
   - Use: Financial calculations

4. SERIALIZABLE
   - Highest isolation, lowest concurrency
   - Range locks prevent phantoms
   - Transactions appear to run serially
   - Use: Critical operations, inventory`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`How Databases Implement Isolation:

1. Locking
   - Share locks for reads
   - Exclusive locks for writes
   - Lock duration controls isolation

2. MVCC (Multiversion Concurrency Control)
   - Keep multiple versions
   - Each transaction sees a snapshot
   - Used by PostgreSQL, Oracle, MySQL InnoDB

3. Snapshot Isolation
   - Transaction sees database as of start time
   - Write-write conflicts detected at commit
   - No read blocking

Trade-off:
Higher Isolation → More Locking → Less Concurrency
Lower Isolation  → Less Locking → More Concurrency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>4 levels: Read Uncommitted to Serializable</li>
        <li>Higher isolation = more consistency, less concurrency</li>
        <li>READ COMMITTED is default for most databases</li>
        <li>SERIALIZABLE prevents all anomalies</li>
        <li>Choose level based on application needs</li>
      </ul>
    </div>
  </div>
);

export default IsolationLevels;
