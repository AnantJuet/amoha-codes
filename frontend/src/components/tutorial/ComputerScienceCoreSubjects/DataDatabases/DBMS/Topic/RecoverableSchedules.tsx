import React from "react";

const RecoverableSchedules: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Recoverable Schedules
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A recoverable schedule ensures that if a transaction T reads data written by
      transaction T', then T' must commit before T commits. This property is essential
      for maintaining database consistency during transaction failures.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        A schedule is <strong>recoverable</strong> if for every pair of transactions Ti and Tj,
        if Tj reads a data item written by Ti, then Ti must commit before Tj commits.
      </p>
      <p className="leading-relaxed mt-2 font-mono text-gray-900">
        If Tj reads from Ti, then Commit(Ti) must precede Commit(Tj)
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Recoverable Schedule Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Recoverable Schedule:
T1: W1(A)
T2:      R2(A)    <- T2 reads A written by T1
T2:      W2(A)
T2:      Commit   <- T2 commits before T1!
T1: Abort         <- T1 aborts!

Problem:
- T2 read uncommitted data from T1
- T2 committed based on that data
- T1 aborted, making T2's data invalid
- But T2 already committed - cannot be undone!

This is called a "dirty read" that leads to
non-recoverable situation.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recoverable Schedule Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recoverable Schedule:
T1: W1(A)
T2:      R2(A)    <- T2 reads A written by T1
T2:      W2(A)
T1: Commit        <- T1 commits first!
T2:      Commit   <- T2 commits after T1

This IS recoverable because:
T2 reads from T1, and T1 commits before T2.

If T1 aborts instead:
T1: W1(A)
T2:      R2(A)
T2:      W2(A)
T1: Abort         <- T1 aborts
T2:      Abort    <- T2 must also abort (cascading rollback)

Recoverable, but has cascading rollback issue.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Recoverable Schedules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Cascading Rollback?</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Recoverable</td>
            <td className="p-3 border">Reader commits after writer</td>
            <td className="p-3 border">Possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cascadeless (ACA)</td>
            <td className="p-3 border">Read only committed data</td>
            <td className="p-3 border">Not possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strict</td>
            <td className="p-3 border">Read/Write only committed data</td>
            <td className="p-3 border">Not possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cascadeless (Avoid Cascading Aborts)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cascadeless Schedule:
A transaction can only read data that has been committed.

Example:
T1: W1(A)
T1: Commit        <- T1 commits
T2:      R2(A)    <- T2 reads AFTER T1 commits
T2:      W2(A)
T2:      Commit

Benefits:
- No dirty reads
- If T1 aborts, T2 is not affected (hasn't read T1's data yet)
- No cascading rollbacks needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strict Schedules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Strict Schedule:
A transaction can only read OR write data that
has been committed (or data it wrote itself).

Example:
T1: W1(A)
T1: Commit
T2:      R2(A)    <- Read after commit
T2:      W2(A)    <- Write after commit

Strict is stronger than cascadeless:
- Cascadeless: Only reads must wait for commit
- Strict: Both reads AND writes must wait

Strict ⊂ Cascadeless ⊂ Recoverable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hierarchy of Schedule Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`         All Schedules
              |
         Recoverable
              |
      Cascadeless (ACA)
              |
           Strict
              |
      Serial Schedules

From top to bottom:
- More restrictive
- Safer
- Less concurrency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Recoverable: Reader commits after writer commits</li>
        <li>Cascadeless: Only read committed data</li>
        <li>Strict: Only read/write committed data</li>
        <li>Strict ensures easy recovery (just restore old value)</li>
        <li>Most DBMSs use strict schedules by default</li>
        <li>Recoverable schedules may require cascading rollbacks</li>
      </ul>
    </div>
  </div>
);

export default RecoverableSchedules;
