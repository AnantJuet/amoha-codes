import React from "react";

const MultiVersionCC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multi-Version Concurrency Control (MVCC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multi-Version Concurrency Control (MVCC) maintains multiple versions of data items
      to increase concurrency. Readers don't block writers and writers don't block readers,
      making it ideal for read-heavy workloads.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Concept</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Instead of updating data in place, MVCC creates new versions of data items.
        Each transaction sees a consistent snapshot of the database based on its start time.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li><strong>Readers:</strong> See appropriate version based on timestamp</li>
        <li><strong>Writers:</strong> Create new versions without blocking readers</li>
        <li><strong>No read-write conflicts:</strong> Readers access old versions</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Version Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Each version of data item X contains:
- Value: The actual data
- W-timestamp: Timestamp of transaction that created it
- R-timestamp: Largest timestamp of any transaction that read it

Data Item X Versions:
+----------+---------+----------+
| Version  | W-TS    | R-TS     |
+----------+---------+----------+
| X1 = 100 | 10      | 20       |
| X2 = 150 | 25      | 30       |
| X3 = 200 | 35      | 35       |
+----------+---------+----------+

Transaction with TS=27 would read X2 (version created at 25)
Transaction with TS=40 would read X3 (version created at 35)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MVCC Read Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When Transaction Ti with timestamp TS(Ti) reads X:

1. Find version Xk where:
   - W-TS(Xk) <= TS(Ti)
   - W-TS(Xk) is the largest such value
   (Most recent version not newer than Ti's timestamp)

2. Return value of Xk

3. Update R-TS(Xk) = max(R-TS(Xk), TS(Ti))

Example:
Ti with TS=27 reads X
Versions: X1(W-TS=10), X2(W-TS=25), X3(W-TS=35)

W-TS <= 27: X1(10), X2(25)
Largest: X2

Ti reads X2, R-TS(X2) updated if needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MVCC Write Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When Transaction Ti with timestamp TS(Ti) writes X:

1. Find version Xk (most recent version with W-TS <= TS(Ti))

2. If TS(Ti) < R-TS(Xk):
   - Another transaction with later timestamp already read Xk
   - Ti's write would be "too late"
   - ROLLBACK Ti

3. If TS(Ti) = W-TS(Xk):
   - Ti is updating its own version
   - Overwrite Xk

4. Else:
   - Create new version Xj
   - Set W-TS(Xj) = TS(Ti)
   - Set R-TS(Xj) = TS(Ti)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of MVCC</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Read-Write Coexistence:</strong> Readers never block writers</li>
        <li><strong>High Concurrency:</strong> Multiple versions allow more parallel access</li>
        <li><strong>Consistent Reads:</strong> Each transaction sees a snapshot</li>
        <li><strong>No Read Locks:</strong> Improved performance for reads</li>
        <li><strong>Time Travel:</strong> Can query historical data</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of MVCC</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Storage Overhead:</strong> Multiple versions consume space</li>
        <li><strong>Garbage Collection:</strong> Old versions must be cleaned up</li>
        <li><strong>Write Overhead:</strong> Creating versions is more expensive</li>
        <li><strong>Complexity:</strong> More complex implementation</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">MVCC in Real Databases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Database</th>
            <th className="p-3 border">MVCC Implementation</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">PostgreSQL</td>
            <td className="p-3 border">Tuple-level MVCC with xmin/xmax</td>
          </tr>
          <tr>
            <td className="p-3 border">MySQL (InnoDB)</td>
            <td className="p-3 border">MVCC with undo logs</td>
          </tr>
          <tr>
            <td className="p-3 border">Oracle</td>
            <td className="p-3 border">MVCC with rollback segments</td>
          </tr>
          <tr>
            <td className="p-3 border">SQL Server</td>
            <td className="p-3 border">Row versioning in tempdb</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>MVCC keeps multiple versions of each data item</li>
        <li>Readers see consistent snapshots without blocking writers</li>
        <li>Writers create new versions instead of updating in place</li>
        <li>Garbage collection removes old, unneeded versions</li>
        <li>Most modern databases use some form of MVCC</li>
        <li>Trades storage space for better concurrency</li>
      </ul>
    </div>
  </div>
);

export default MultiVersionCC;
