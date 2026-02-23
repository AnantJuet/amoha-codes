import React from "react";

const ConcurrencyControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Concurrency Control</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Concurrency control manages simultaneous execution of transactions while maintaining
      database consistency. It prevents problems that arise when multiple transactions
      access the same data concurrently.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Concurrency Control?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Without Concurrency Control:

T1: Read(A)=100     T2: Read(A)=100
T1: A = A - 50          |
T1: Write(A)=50         |
    |              T2: A = A - 30
    |              T2: Write(A)=70  ← Overwrites T1!

Expected: 100 - 50 - 30 = 20
Actual: 70 (Lost Update!)

Concurrency Control ensures:
- Isolation between transactions
- Serializable execution
- No anomalies or conflicts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concurrency Problems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Cause</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Lost Update</td>
            <td className="p-3 border">One update overwrites another</td>
            <td className="p-3 border">Concurrent writes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dirty Read</td>
            <td className="p-3 border">Read uncommitted data</td>
            <td className="p-3 border">Read before commit</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unrepeatable Read</td>
            <td className="p-3 border">Same query, different results</td>
            <td className="p-3 border">Update between reads</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Phantom Read</td>
            <td className="p-3 border">New rows appear in query</td>
            <td className="p-3 border">Insert between queries</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lost Update Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lost Update Example:

Time  T1                    T2
----  --                    --
t1    Read(A) → 100
t2                          Read(A) → 100
t3    A = A - 50
t4    Write(A) = 50
t5                          A = A - 30
t6                          Write(A) = 70

T1's update is lost! (50 overwritten by 70)
Expected final value: 20
Actual final value: 70`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dirty Read Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dirty Read Example:

Time  T1                    T2
----  --                    --
t1    Read(A) → 100
t2    A = A - 50
t3    Write(A) = 50
t4                          Read(A) → 50 (dirty!)
t5    ROLLBACK
t6    (A restored to 100)   Uses invalid value 50!

T2 read uncommitted data that was later rolled back.
T2's decision based on data that never existed!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concurrency Control Techniques</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Main Concurrency Control Methods:

1. Lock-Based Protocols
   - Shared locks (read)
   - Exclusive locks (write)
   - Two-Phase Locking (2PL)

2. Timestamp-Based Protocols
   - Each transaction gets timestamp
   - Order by timestamp

3. Validation-Based (Optimistic)
   - Execute without locks
   - Validate before commit

4. Multi-Version Concurrency Control (MVCC)
   - Maintain multiple versions
   - Readers don't block writers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Schedule and Serializability</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule: Order of operations from concurrent transactions

Serial Schedule:
- Transactions execute one after another
- No interleaving
- Always correct but slow

Serializable Schedule:
- Interleaved but equivalent to some serial schedule
- Goal of concurrency control

Conflict Serializable:
- Can be transformed to serial by swapping non-conflicting operations
- Most common serializability check`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Concurrency allows multiple transactions simultaneously</li>
        <li>Problems: Lost update, dirty read, unrepeatable read</li>
        <li>Goal: Serializable execution</li>
        <li>Methods: Locking, timestamps, validation, MVCC</li>
        <li>Trade-off between concurrency and consistency</li>
      </ul>
    </div>
  </div>
);

export default ConcurrencyControl;
