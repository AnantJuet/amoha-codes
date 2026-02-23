import React from "react";

const ARIESRecovery: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ARIES Recovery Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ARIES (Algorithm for Recovery and Isolation Exploiting Semantics) is a sophisticated
      recovery algorithm used in many commercial database systems. It provides efficient
      recovery while supporting fine-grained locking and concurrent transactions.
    </p>

    <h2 className="text-3xl font-bold mt-8">ARIES Key Concepts</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Write-Ahead Logging (WAL):</strong> Log before modifying data</li>
        <li><strong>Repeating History:</strong> Redo all actions during recovery</li>
        <li><strong>Logging During Undo:</strong> Log undo actions to handle crash during recovery</li>
        <li><strong>LSN (Log Sequence Number):</strong> Unique ID for each log record</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Structures</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Log Record Fields:
- LSN: Unique log sequence number
- TransID: Transaction identifier
- PrevLSN: Previous LSN of same transaction
- Type: UPDATE, COMMIT, ABORT, END, CLR
- PageID: Modified page
- Offset: Position within page
- Before-image: Old value
- After-image: New value

Transaction Table (TT):
- TransID: Transaction identifier
- Status: Running, Committed, Aborted
- LastLSN: Last log record for this transaction

Dirty Page Table (DPT):
- PageID: Modified page
- RecLSN: First LSN that made page dirty`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Three Phases of Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Phase 1: ANALYSIS
- Start from last checkpoint
- Scan forward through log
- Reconstruct Transaction Table and Dirty Page Table
- Identify: Winners (committed) and Losers (active at crash)

Phase 2: REDO
- Start from smallest RecLSN in Dirty Page Table
- Redo ALL logged updates (including uncommitted)
- Re-establish state at crash time
- This is "repeating history"

Phase 3: UNDO
- Undo uncommitted transactions
- Scan log backward
- Use PrevLSN chain to find all updates
- Write CLR (Compensation Log Records) for undo actions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Analysis Phase</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Analysis Phase Algorithm:

1. Initialize TT and DPT from checkpoint
2. Scan log forward from checkpoint

For each log record:
  - If transaction not in TT, add it (Running)
  - Update LastLSN for transaction

  - If END record: Remove from TT
  - If COMMIT record: Change status to Committed

  - If UPDATE/CLR record:
    - If page not in DPT, add with RecLSN = current LSN

At end:
- TT has all active transactions (losers)
- DPT has all potentially dirty pages`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Redo Phase</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Redo Phase Algorithm:

Start from smallest RecLSN in DPT
Scan forward through log

For each UPDATE or CLR record:
  1. If page not in DPT: Skip
  2. If RecLSN > record LSN: Skip
  3. Read page from disk
  4. If pageLSN >= record LSN: Skip (already applied)
  5. Apply the change
  6. Update pageLSN

Note: Redo even uncommitted transactions!
This restores database to exact state at crash.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Undo Phase</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Undo Phase Algorithm:

ToUndo = set of LastLSNs from losing transactions

While ToUndo not empty:
  1. Pick largest LSN from ToUndo
  2. If it's a CLR:
     - If UndoNextLSN is null: Write END record
     - Else: Add UndoNextLSN to ToUndo
  3. If it's an UPDATE:
     - Write a CLR for the undo
     - Perform the undo (restore old value)
     - Add PrevLSN to ToUndo

CLR ensures we don't undo the same thing twice
if crash occurs during recovery.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why ARIES is Effective</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Flexible buffer management:</strong> No force at commit, steal allowed</li>
        <li><strong>Fine-grained locking:</strong> Supports record-level locking</li>
        <li><strong>Efficient recovery:</strong> Only redo necessary operations</li>
        <li><strong>Nested top actions:</strong> Supports partial rollback</li>
        <li><strong>Crash during recovery:</strong> CLRs ensure correct re-recovery</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ARIES has three phases: Analysis, Redo, Undo</li>
        <li>"Repeat history" - redo everything, then undo losers</li>
        <li>LSN uniquely identifies log records</li>
        <li>CLRs prevent repeated undo on crash during recovery</li>
        <li>Used in DB2, SQL Server, Oracle, and others</li>
        <li>Supports efficient concurrent transaction processing</li>
      </ul>
    </div>
  </div>
);

export default ARIESRecovery;
