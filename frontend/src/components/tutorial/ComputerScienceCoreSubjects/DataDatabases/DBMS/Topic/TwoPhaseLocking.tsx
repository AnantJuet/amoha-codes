import React from "react";

const TwoPhaseLocking: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Two-Phase Locking (2PL)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Two-Phase Locking (2PL) is a concurrency control protocol that guarantees
      serializability. It divides transaction execution into two phases: growing
      (acquiring locks) and shrinking (releasing locks).
    </p>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Locking Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two-Phase Locking Protocol:

Phase 1: Growing Phase
- Transaction may acquire locks
- Transaction may NOT release any lock

Phase 2: Shrinking Phase
- Transaction may release locks
- Transaction may NOT acquire any lock

Lock Point: Moment when transaction has acquired
            all locks (transition from growing to shrinking)

      Growing        Lock         Shrinking
       Phase        Point          Phase
   ←───────────────→ │ ←─────────────────→
   [Lock][Lock][Lock]│[Unlock][Unlock]
                     │
`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PL Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction T1:
Lock(A)      ─┐
Read(A)       │ Growing
Lock(B)       │ Phase
Read(B)      ─┘
             ← Lock Point
Unlock(A)   ─┐
Write(B)     │ Shrinking
Unlock(B)   ─┘ Phase
Commit

Valid 2PL: All locks before any unlock ✓

Invalid (Not 2PL):
Lock(A)
Read(A)
Unlock(A)   ← Released lock
Lock(B)     ← Acquiring after release! ✗
Read(B)
Unlock(B)

This violates 2PL - lock acquired after release.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why 2PL Ensures Serializability</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Serializability Guarantee:

Lock points define serialization order.
If T1's lock point < T2's lock point:
  T1 comes before T2 in equivalent serial schedule.

Example:
T1: Lock(A) Lock(B) [LP1] Unlock(A) Unlock(B)
T2:              Lock(B) Lock(C) [LP2] Unlock(B) Unlock(C)

Since T2 waits for T1's Lock(B):
LP1 < LP2, so T1 → T2 in serial order.

Proof sketch:
- Conflicting operations require same lock
- One transaction must wait for the other
- Lock points create total order
- Order matches some serial schedule`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Variants of 2PL</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variant</th>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Basic 2PL</td>
            <td className="p-3 border">Two phases, may release before commit</td>
            <td className="p-3 border">Serializability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strict 2PL</td>
            <td className="p-3 border">Hold exclusive locks until commit</td>
            <td className="p-3 border">No cascading rollback</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rigorous 2PL</td>
            <td className="p-3 border">Hold ALL locks until commit</td>
            <td className="p-3 border">Simplest recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strict 2PL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Strict 2PL: Hold exclusive (X) locks until commit/abort

Transaction T1:
Lock-S(A)    ─┐
Read(A)       │
Lock-X(B)     │ Growing
Read(B)       │
Write(B)     ─┘
              ← Lock Point
Unlock-S(A)  (can release shared locks)
...
COMMIT
Unlock-X(B)  (exclusive locks released at commit)

Benefits:
1. Prevents cascading rollback
   - No other transaction reads uncommitted data
   - If T1 aborts, others don't need to abort

2. Provides recoverable schedules

3. Most commonly used in practice`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascading Rollback Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic 2PL allows cascading rollback:

T1: Lock(A) Write(A) Unlock(A)      ABORT
T2:                   Lock(A) Read(A) Write(A)

T2 read uncommitted value from T1.
When T1 aborts, T2 must also abort!

With Strict 2PL:
T1: Lock-X(A) Write(A)              ABORT → Unlock(A)
T2:                   Wait...        Lock(A) Read(A)

T2 waits for T1's lock, so never sees dirty data.
T1's abort doesn't affect T2.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2PL and Deadlock</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`2PL can cause deadlock:

T1: Lock(A)          Wait for B...
T2:          Lock(B)          Wait for A...

Deadlock! Both waiting forever.

Deadlock Handling:
1. Prevention: Acquire all locks at once (not practical)

2. Detection: Wait-for graph
   T1 → T2 (T1 waits for T2)
   Cycle = Deadlock → Abort one transaction

3. Timeout: Abort if waiting too long

4. Lock ordering: Acquire locks in fixed order
   All transactions lock A before B
   Prevents cycles in wait-for graph`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>2PL: Growing phase then shrinking phase</li>
        <li>Guarantees conflict serializability</li>
        <li>Strict 2PL prevents cascading rollback</li>
        <li>Rigorous 2PL holds all locks until commit</li>
        <li>2PL can cause deadlocks</li>
      </ul>
    </div>
  </div>
);

export default TwoPhaseLocking;
