import React from "react";

const LogBasedRecovery: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Log-Based Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Log-based recovery is a technique that maintains a log of all database modifications
      to enable recovery from failures. The log records all operations and allows the
      database to be restored to a consistent state after a crash.
    </p>

    <h2 className="text-3xl font-bold mt-8">Log Record Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Log Record Formats:

<Ti, start>           - Transaction Ti started
<Ti, X, old_val, new_val> - Ti changed X from old to new
<Ti, commit>          - Ti committed
<Ti, abort>           - Ti aborted

Example Log:
<T1, start>
<T1, A, 100, 150>     - T1 changed A from 100 to 150
<T1, B, 200, 250>     - T1 changed B from 200 to 250
<T2, start>
<T2, C, 300, 350>
<T1, commit>
<T2, A, 150, 200>     - T2 changed A from 150 to 200
<T2, commit>`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Write-Ahead Logging (WAL)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">WAL Protocol Rules:</p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li><strong>Before modifying database:</strong> Log record must be written first</li>
        <li><strong>Before commit:</strong> All log records for transaction must be on stable storage</li>
        <li><strong>Undo information:</strong> Old values written to log before new values to database</li>
        <li><strong>Redo information:</strong> New values in log before commit</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Uses</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Undo</td>
            <td className="p-3 border">Restore old values</td>
            <td className="p-3 border">Uncommitted transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Redo</td>
            <td className="p-3 border">Re-apply new values</td>
            <td className="p-3 border">Committed transactions</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Undo/Redo</td>
            <td className="p-3 border">Both operations</td>
            <td className="p-3 border">Full recovery</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Algorithm (ARIES-like)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery has three phases:

Phase 1: Analysis
- Scan log from last checkpoint
- Identify active transactions at crash
- Build dirty page table

Phase 2: Redo
- Replay all logged updates from checkpoint
- Even for aborted transactions
- Brings database to crash state

Phase 3: Undo
- Roll back incomplete transactions
- Scan log backward
- Apply undo for uncommitted transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Log at crash time:
<T1, start>
<T1, A, 100, 150>
<T2, start>
<T1, B, 200, 250>
<T1, commit>
<T2, C, 300, 350>
<T3, start>
<T3, D, 400, 450>
--- CRASH ---

Analysis:
- T1: committed (done)
- T2: active (not committed)
- T3: active (not committed)

Redo Phase:
- Apply A=150, B=250, C=350, D=450

Undo Phase:
- T2 not committed: C = 300 (undo)
- T3 not committed: D = 400 (undo)

Final state: A=150, B=250, C=300, D=400`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpointing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Checkpoint reduces recovery time by:
1. Writing dirty pages to disk
2. Recording active transactions in log
3. Log record: <checkpoint, L> where L = list of active txns

Recovery only needs to scan from last checkpoint.

Checkpoint types:
- Consistent: Stop all transactions, flush all pages
- Fuzzy: Allow transactions to continue, track dirty pages`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>WAL: Write log before database modification</li>
        <li>Log contains old and new values for each change</li>
        <li>Redo replays committed transactions</li>
        <li>Undo reverses uncommitted transactions</li>
        <li>Checkpoints reduce recovery time</li>
        <li>Recovery ensures ACID properties after crash</li>
      </ul>
    </div>
  </div>
);

export default LogBasedRecovery;
