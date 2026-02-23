import React from "react";

const ViewSerializability: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      View Serializability
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      View serializability is a less restrictive criterion than conflict serializability
      for determining schedule correctness. A schedule is view serializable if it produces
      the same "view" of the database as some serial schedule.
    </p>

    <h2 className="text-3xl font-bold mt-8">View Equivalence Conditions</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Two schedules S and S' are view equivalent if:
      </p>
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li><strong>Initial Read:</strong> If Ti reads initial value of X in S, Ti must read initial value of X in S'</li>
        <li><strong>Updated Read:</strong> If Ti reads value written by Tj in S, Ti must read value written by Tj in S'</li>
        <li><strong>Final Write:</strong> If Ti performs final write on X in S, Ti must perform final write on X in S'</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: View Serializable but NOT Conflict Serializable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Schedule S: R1(A), W2(A), W1(A), W3(A)

Is S conflict serializable?
Conflicts on A:
- R1(A) before W2(A): T1 -> T2
- W2(A) before W1(A): T2 -> T1
- W1(A) before W3(A): T1 -> T3
- W2(A) before W3(A): T2 -> T3

Precedence graph: T1 -> T2 -> T1 (CYCLE!)
NOT conflict serializable.

Is S view serializable?
Check against serial schedule: T1, T2, T3

Serial S': R1(A), W1(A), W2(A), W3(A)

1. Initial Read: T1 reads initial A in both ✓
2. Updated Read: No transaction reads a written value in S
3. Final Write: T3 performs final write in both ✓

S is view equivalent to S' (T1, T2, T3)
Therefore, S IS view serializable!

This is a "blind write" example - writes without reading.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship Between Serializability Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`         +------------------+
         |  All Schedules   |
         +------------------+
                  |
         +------------------+
         | View Serializable |
         +------------------+
                  |
         +------------------+
         |Conflict Serializable|
         +------------------+
                  |
         +------------------+
         | Serial Schedules |
         +------------------+

- Every serial schedule is conflict serializable
- Every conflict serializable schedule is view serializable
- NOT every view serializable is conflict serializable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Testing View Serializability</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Testing view serializability is NP-Complete</li>
        <li>No efficient polynomial-time algorithm exists</li>
        <li>Must check against all possible serial schedules</li>
        <li>For n transactions: n! possible serial schedules</li>
        <li>Conflict serializability is preferred (polynomial time check)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Blind Writes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A blind write is a write operation that is NOT preceded
by a read of the same data item in the same transaction.

Example of blind write:
T2: W2(A)  -- writes A without reading it first

Blind writes allow view serializability without
conflict serializability because:
- The written value doesn't depend on previous reads
- Order of blind writes may not matter for final result

Schedule with blind writes:
S: R1(A), W2(A), W1(A)
This overwrites T2's blind write, producing same result
as serial T1, T2 or T2, T1.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Conflict Serializable</th>
            <th className="p-3 border">View Serializable</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Testing</td>
            <td className="p-3 border">O(n^2) - Polynomial</td>
            <td className="p-3 border">NP-Complete</td>
          </tr>
          <tr>
            <td className="p-3 border">Strictness</td>
            <td className="p-3 border">More restrictive</td>
            <td className="p-3 border">Less restrictive</td>
          </tr>
          <tr>
            <td className="p-3 border">Blind Writes</td>
            <td className="p-3 border">May cause non-serializability</td>
            <td className="p-3 border">Can be handled</td>
          </tr>
          <tr>
            <td className="p-3 border">Practical Use</td>
            <td className="p-3 border">Widely used</td>
            <td className="p-3 border">Theoretical interest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>View serializability is less restrictive than conflict serializability</li>
        <li>A schedule can be view serializable but not conflict serializable</li>
        <li>Testing view serializability is NP-Complete (computationally hard)</li>
        <li>Blind writes can make a schedule view serializable</li>
        <li>Conflict serializability is preferred in practice</li>
        <li>All conflict serializable schedules are view serializable</li>
      </ul>
    </div>
  </div>
);

export default ViewSerializability;
