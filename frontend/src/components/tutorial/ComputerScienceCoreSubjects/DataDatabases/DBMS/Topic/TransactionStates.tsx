import React from "react";

const TransactionStates: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Transaction States</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A transaction goes through different states during its lifecycle. Understanding these
      states helps in managing transactions effectively and handling failures appropriately.
    </p>

    <h2 className="text-3xl font-bold mt-8">Transaction State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Complete Transaction State Diagram:

                    +--------+
           +------->| Active |<-------+
           |        +--------+        |
           |            |             |
        (restart)       | (execute)   |
           |            v             |
           |    +--------------+      |
           |    | Partially    |      |
           |    | Committed    |      |
           |    +--------------+      |
           |       /        \\         |
           |      /          \\        |
           | (commit ok)  (failure)   |
           |    /              \\      |
           v   v                v     |
    +-----------+            +--------+
    | Committed |            | Failed |
    +-----------+            +--------+
                                  |
                                  v
                             +---------+
                             | Aborted |-----(restart?)
                             +---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Descriptions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Next State</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Active</td>
            <td className="p-3 border">Transaction is executing operations</td>
            <td className="p-3 border">Partially Committed / Failed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partially Committed</td>
            <td className="p-3 border">Final statement executed</td>
            <td className="p-3 border">Committed / Failed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Committed</td>
            <td className="p-3 border">Changes made permanent</td>
            <td className="p-3 border">Terminal (end)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failed</td>
            <td className="p-3 border">Error occurred, cannot proceed</td>
            <td className="p-3 border">Aborted</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Aborted</td>
            <td className="p-3 border">Rolled back, changes undone</td>
            <td className="p-3 border">Terminal / Restart</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Active State</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Active State:
- Initial state of every transaction
- Transaction is executing read/write operations
- Changes are made to local buffer (not yet permanent)

Example:
BEGIN TRANSACTION;                    -- Enter Active
    SELECT Balance FROM Account;      -- Active (read)
    UPDATE Account SET Balance = 400; -- Active (write)
    -- Still in Active state...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partially Committed State</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Partially Committed State:
- Final statement of transaction executed
- All operations completed but not yet committed
- Changes still in buffer, not on disk
- COMMIT requested

Example:
BEGIN TRANSACTION;
    UPDATE Account SET Balance = 400;
    UPDATE Account SET Balance = 600;
    -- Last statement executed
    -- Now in Partially Committed state
COMMIT;  -- Request to commit

At this point:
- Success → Committed state
- Failure (disk error, etc.) → Failed state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Committed State</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Committed State:
- Transaction completed successfully
- All changes written to disk
- Changes are permanent and durable
- Transaction cannot be rolled back

After Commit:
- Log record written for recovery
- Locks released
- Other transactions can see changes

This state guarantees:
- Durability: Changes survive system failures
- Visibility: Other transactions see new data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Failed State</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failed State:
- Normal execution cannot continue
- Error detected during execution or commit

Causes of Failure:
- System crash
- Disk failure
- Deadlock detected
- Constraint violation
- Application error
- User abort (ROLLBACK)

Example:
BEGIN TRANSACTION;
    UPDATE Account SET Balance = -100;  -- Constraint violation!
    -- Transaction enters Failed state
    -- Must be rolled back`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aborted State</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Aborted State:
- Transaction rolled back
- All changes undone
- Database restored to state before transaction

After Abort:
- All modified data restored
- All acquired locks released
- Log contains abort record

Options after Abort:
1. Restart transaction (if recoverable error)
2. Kill transaction (if permanent error)

Example:
BEGIN TRANSACTION;
    UPDATE Account SET Balance = 400;
    -- System crash occurs
    -- After recovery: Transaction aborted
    -- Balance restored to original value`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Transitions Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Successful Transaction:
Active → Partially Committed → Committed

Failed Transaction:
Active → Failed → Aborted

Failed at Commit:
Active → Partially Committed → Failed → Aborted

Restarted Transaction:
Active → Failed → Aborted → Active (restart)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Active: Transaction executing operations</li>
        <li>Partially Committed: Last operation done, awaiting commit</li>
        <li>Committed: Changes permanent and visible</li>
        <li>Failed: Error occurred, must abort</li>
        <li>Aborted: Changes undone, may restart</li>
      </ul>
    </div>
  </div>
);

export default TransactionStates;
