import React from "react";

const TransactionSchedules: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transaction Schedules
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A schedule is a sequence of operations (read, write, commit, abort) from multiple
      concurrent transactions. The order of these operations determines whether the
      schedule is correct and produces consistent results.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Schedules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Schedule Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Serial</td>
            <td className="p-3 border">Transactions execute one after another</td>
            <td className="p-3 border">Always correct, no concurrency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-Serial</td>
            <td className="p-3 border">Operations interleaved</td>
            <td className="p-3 border">Concurrent, may or may not be correct</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Serializable</td>
            <td className="p-3 border">Equivalent to some serial schedule</td>
            <td className="p-3 border">Concurrent and correct</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Serial Schedule Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Transaction T1:          Transaction T2:
R(A)
A = A - 50
W(A)
R(B)
B = B + 50
W(B)
Commit
                         R(A)
                         A = A * 1.1
                         W(A)
                         Commit

Serial Schedule S1: T1 then T2
This is always correct as transactions don't interfere.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Serial Schedule Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Interleaved Schedule S2:
T1: R(A)
T1: A = A - 50
T2:           R(A)     <- T2 reads old value of A
T1: W(A)
T2:           A = A * 1.1
T1: R(B)
T2:           W(A)     <- T2 overwrites T1's update!
T1: B = B + 50
T1: W(B)
T1: Commit
T2:           Commit

This schedule may produce incorrect results!
(Lost Update Problem)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Schedule Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Operations:
R_i(X) - Transaction i reads data item X
W_i(X) - Transaction i writes data item X
C_i    - Transaction i commits
A_i    - Transaction i aborts

Example Schedule:
S = R1(A), R2(A), W1(A), W2(A), R1(B), W1(B), C1, C2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Operations</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Two operations conflict if they:
      </p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>Belong to different transactions</li>
        <li>Access the same data item</li>
        <li>At least one is a write operation</li>
      </ol>
      <div className="mt-4 font-mono text-gray-900">
        <p>Conflict Pairs:</p>
        <ul className="list-disc list-inside mt-2">
          <li>R1(X) and W2(X) - Read-Write conflict</li>
          <li>W1(X) and R2(X) - Write-Read conflict</li>
          <li>W1(X) and W2(X) - Write-Write conflict</li>
        </ul>
        <p className="mt-2">Non-Conflict:</p>
        <ul className="list-disc list-inside mt-2">
          <li>R1(X) and R2(X) - Both reads (no conflict)</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Equivalent Schedules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two schedules are conflict equivalent if:
- They contain the same transactions
- Every pair of conflicting operations is ordered the same way

Example:
S1: R1(A), W1(A), R2(A), W2(A)
S2: R1(A), W1(A), R2(A), W2(A)

Conflicting pairs and their order:
- (W1(A), R2(A)): W1 before R2 in both ✓
- (W1(A), W2(A)): W1 before W2 in both ✓

S1 and S2 are conflict equivalent.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Serializability</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        A schedule is <strong>conflict serializable</strong> if it is conflict equivalent
        to some serial schedule. This can be tested using a precedence graph:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li>Create a node for each transaction</li>
        <li>Add edge Ti {`->`} Tj if Ti has a conflicting operation before Tj</li>
        <li>If graph is acyclic, schedule is conflict serializable</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Serial schedules are always correct but have no concurrency</li>
        <li>Serializable schedules allow concurrency while ensuring correctness</li>
        <li>Conflict operations involve same data item with at least one write</li>
        <li>Use precedence graph to test conflict serializability</li>
        <li>Acyclic graph means conflict serializable</li>
        <li>There are other types of serializability (view serializability)</li>
      </ul>
    </div>
  </div>
);

export default TransactionSchedules;
