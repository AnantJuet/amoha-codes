import React from "react";

const CheckpointRecovery: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Checkpoint-Based Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Checkpointing is a technique to reduce recovery time by periodically saving the
      database state. After a crash, recovery only needs to process the log from the
      last checkpoint rather than from the beginning.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Checkpoints?</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Without checkpoints, recovery scans entire log (potentially huge)</li>
        <li>Checkpoints create known good states</li>
        <li>Reduces recovery time significantly</li>
        <li>Allows old log records to be discarded</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Simple Checkpoint (Quiescent):

1. Stop accepting new transactions
2. Wait for active transactions to complete
3. Flush all dirty buffers to disk
4. Write <CHECKPOINT> to log
5. Flush log to stable storage
6. Resume normal operation

Log after checkpoint:
<T1, start>
<T1, A, 100, 150>
<T1, commit>
<CHECKPOINT>          <- All prior txns complete
<T2, start>
<T2, B, 200, 250>
--- CRASH ---

Recovery: Only need to handle T2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Quiescent Checkpoint</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Quiescent (Fuzzy) Checkpoint:

1. Write <CHECKPOINT START, L> where L = active transactions
2. Continue processing transactions
3. Flush dirty buffers in background
4. Write <CHECKPOINT END> when flushing complete

Log example:
<T1, start>
<T1, A, 100, 150>
<CHECKPOINT START, {T1}>  <- T1 active at checkpoint
<T2, start>
<T1, B, 200, 250>
<T1, commit>
<CHECKPOINT END>
<T2, C, 300, 350>
--- CRASH ---

Recovery: Must check T1 (was active at checkpoint start)
          Must handle T2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery with Checkpoints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery Algorithm:

1. Find last <CHECKPOINT> in log
2. Build lists:
   - Undo-list: Active txns at checkpoint
   - Redo-list: Empty initially

3. Scan forward from checkpoint:
   - <Ti, start>: Add Ti to undo-list
   - <Ti, commit>: Move Ti from undo to redo-list
   - <Ti, abort>: Remove Ti from undo-list

4. Redo phase:
   - Scan forward, redo all operations of redo-list txns

5. Undo phase:
   - Scan backward, undo all operations of undo-list txns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Recovery</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Log:
<T1, start>
<T1, A, 10, 20>
<CHECKPOINT START, {T1}>
<T2, start>
<T1, B, 30, 40>
<T3, start>
<T2, C, 50, 60>
<T1, commit>
<T2, D, 70, 80>
<T3, E, 90, 100>
<T2, commit>
<CHECKPOINT END>
<T4, start>
<T4, F, 110, 120>
--- CRASH ---

At checkpoint start: undo-list = {T1}

Scanning forward:
- T2 start: undo = {T1, T2}
- T3 start: undo = {T1, T2, T3}
- T1 commit: redo = {T1}, undo = {T2, T3}
- T2 commit: redo = {T1, T2}, undo = {T3}
- T4 start: undo = {T3, T4}

Final: Redo {T1, T2}, Undo {T3, T4}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checkpoint Frequency</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Trade-offs in checkpoint frequency:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>More frequent:</strong> Faster recovery, more overhead during normal operation</li>
        <li><strong>Less frequent:</strong> Longer recovery time, less runtime overhead</li>
        <li><strong>Typical:</strong> Based on log size or time interval</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Checkpoints limit how much log to scan during recovery</li>
        <li>Quiescent checkpoint stops all activity (simpler, higher overhead)</li>
        <li>Fuzzy checkpoint allows concurrent transactions (complex, lower overhead)</li>
        <li>Recovery only processes log after last checkpoint</li>
        <li>Active transactions at checkpoint need special handling</li>
        <li>Checkpoint frequency is a performance trade-off</li>
      </ul>
    </div>
  </div>
);

export default CheckpointRecovery;
