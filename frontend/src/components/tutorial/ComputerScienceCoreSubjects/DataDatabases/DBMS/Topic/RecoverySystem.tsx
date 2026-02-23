import React from "react";

const RecoverySystem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Recovery System</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The recovery system ensures database consistency and durability after failures.
      It uses techniques like logging and checkpointing to restore the database to a
      consistent state after crashes or errors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Failures</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Types:

1. Transaction Failure
   - Logical error (division by zero, constraint violation)
   - System error (deadlock)
   - Recovery: Rollback transaction

2. System Failure (Soft Crash)
   - Power failure, OS crash
   - Memory contents lost
   - Disk data intact
   - Recovery: Redo/Undo from log

3. Media Failure (Hard Crash)
   - Disk crash, head failure
   - Data on disk lost
   - Recovery: Restore from backup + apply log`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Log-Based Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction Log (Write-Ahead Log):
Sequential record of all database modifications.

Log Records:
<Ti, start>              Transaction Ti started
<Ti, X, old, new>        Ti changed X from old to new
<Ti, commit>             Ti committed
<Ti, abort>              Ti aborted

Example Log:
<T1, start>
<T1, A, 100, 50>         T1 changed A: 100 → 50
<T1, B, 200, 250>        T1 changed B: 200 → 250
<T1, commit>
<T2, start>
<T2, C, 300, 200>
-- CRASH --

Write-Ahead Logging (WAL) Rule:
Log record must be written BEFORE data modification.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">When Used</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">UNDO</td>
            <td className="p-3 border">Transaction not committed</td>
            <td className="p-3 border">Restore old values</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">REDO</td>
            <td className="p-3 border">Transaction committed</td>
            <td className="p-3 border">Apply new values</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpointing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Checkpoint: Periodic synchronization point

Process:
1. Stop accepting new transactions
2. Wait for active transactions to complete/flush
3. Flush all modified buffers to disk
4. Write checkpoint record to log
5. Resume normal operation

Checkpoint Record:
<checkpoint, L>
Where L = list of active transactions at checkpoint

Benefit:
- Don't need to examine entire log
- Start recovery from last checkpoint
- Reduces recovery time significantly`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery After Crash:

Log:
<T1, start>
<T1, A, 10, 20>
<checkpoint, {T1}>
<T2, start>
<T2, B, 30, 40>
<T1, commit>
<T3, start>
<T3, C, 50, 60>
-- CRASH --

Recovery Steps:
1. Find last checkpoint: {T1}
2. Identify transactions after checkpoint:
   - T1: committed → REDO
   - T2: no commit → UNDO
   - T3: no commit → UNDO

3. UNDO phase (backward scan):
   - T3: C = 50 (restore old value)
   - T2: B = 30 (restore old value)

4. REDO phase (forward scan):
   - T1: A = 20 (apply new value)

Final: A=20, B=30, C=50`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ARIES Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ARIES (Algorithm for Recovery and Isolation
        Exploiting Semantics)

Three Phases:
1. Analysis Phase
   - Scan log from last checkpoint
   - Identify dirty pages
   - Identify active transactions

2. Redo Phase
   - Redo all actions from log
   - Bring database to crash state
   - Repeat history

3. Undo Phase
   - Undo incomplete transactions
   - Scan backward
   - Write CLRs (Compensation Log Records)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>WAL: Log before data modification</li>
        <li>UNDO: Rollback uncommitted transactions</li>
        <li>REDO: Replay committed transactions</li>
        <li>Checkpoints reduce recovery time</li>
        <li>ARIES: Analysis, Redo, Undo phases</li>
      </ul>
    </div>
  </div>
);

export default RecoverySystem;
