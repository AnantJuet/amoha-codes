import React from "react";

const LockBasedProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Lock-Based Protocols</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Lock-based protocols use locks to control concurrent access to data items. A transaction
      must acquire a lock on a data item before accessing it, ensuring isolation between
      concurrent transactions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Locks</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lock Types:

1. Shared Lock (S-lock / Read Lock)
   - Multiple transactions can hold simultaneously
   - Used for reading data
   - Other transactions can also read

2. Exclusive Lock (X-lock / Write Lock)
   - Only one transaction can hold
   - Used for writing data
   - No other transaction can read or write

Lock Compatibility Matrix:
              Requested
              S      X
Held    S    Yes    No
        X    No     No`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lock Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lock Operations:

lock-S(X): Request shared lock on X
lock-X(X): Request exclusive lock on X
unlock(X): Release lock on X

Example:
T1:                         T2:
lock-S(A)
Read(A)                     lock-S(A)  ← OK (S compatible)
                            Read(A)
unlock(A)
lock-X(A)
Write(A)                    lock-X(A)  ← WAIT (X not compatible)
unlock(A)
                            Write(A)
                            unlock(A)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Locking (2PL)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Locking Protocol:

Phase 1: Growing Phase
- Transaction can acquire locks
- Cannot release any locks

Phase 2: Shrinking Phase
- Transaction can release locks
- Cannot acquire any locks

Lock Point: The point where transaction has all its locks
            (transition from growing to shrinking)

Example:
        Growing Phase          |  Shrinking Phase
lock(A) lock(B) lock(C)        |  unlock(A) unlock(B) unlock(C)
                               |
                          Lock Point

2PL guarantees conflict serializability!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PL Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variant</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Basic 2PL</td>
            <td className="p-3 border">Release locks after lock point</td>
            <td className="p-3 border">Serializability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strict 2PL</td>
            <td className="p-3 border">Release X-locks at commit only</td>
            <td className="p-3 border">No cascading rollback</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rigorous 2PL</td>
            <td className="p-3 border">Release ALL locks at commit</td>
            <td className="p-3 border">Strictest, simplest recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Deadlock</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Deadlock: Circular waiting for locks

Example:
T1: lock-X(A)               T2: lock-X(B)
T1: lock-X(B) → WAIT        T2: lock-X(A) → WAIT
    ↓                           ↓
    Waiting for T2              Waiting for T1

    DEADLOCK! Neither can proceed.

Deadlock Prevention:
- Wait-Die: Older waits, younger dies (rollback)
- Wound-Wait: Older wounds (rollback) younger, younger waits

Deadlock Detection:
- Build wait-for graph
- Detect cycles
- Rollback one transaction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lock Granularity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Lock Granularity Hierarchy:

Database
   |
   +-- Table
          |
          +-- Page
                |
                +-- Row (Tuple)
                      |
                      +-- Field

Fine Granularity (Row-level):
+ More concurrency
- More lock overhead

Coarse Granularity (Table-level):
+ Less lock overhead
- Less concurrency

Intent Locks for hierarchy:
IS: Intent Shared
IX: Intent Exclusive
SIX: Shared + Intent Exclusive`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>S-lock: Shared, multiple holders, for reading</li>
        <li>X-lock: Exclusive, single holder, for writing</li>
        <li>2PL: Growing phase → Shrinking phase</li>
        <li>2PL guarantees serializability</li>
        <li>Deadlocks must be prevented or detected</li>
      </ul>
    </div>
  </div>
);

export default LockBasedProtocols;
