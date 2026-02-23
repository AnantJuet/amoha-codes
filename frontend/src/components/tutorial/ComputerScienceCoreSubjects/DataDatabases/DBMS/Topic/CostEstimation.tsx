import React from "react";

const CostEstimation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cost Estimation in Query Processing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cost estimation is the process of predicting the resources required to execute
      a query plan. The query optimizer uses cost estimates to compare different
      execution strategies and select the most efficient one.
    </p>

    <h2 className="text-3xl font-bold mt-8">Cost Components</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Disk I/O:</strong> Number of block reads/writes (dominant factor)</li>
        <li><strong>CPU:</strong> Processing time for comparisons, computations</li>
        <li><strong>Memory:</strong> Buffer space required</li>
        <li><strong>Network:</strong> Data transfer cost (distributed systems)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Statistics Used for Estimation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For each relation R:
- n_R: Number of tuples
- b_R: Number of blocks
- l_R: Size of each tuple (bytes)
- f_R: Blocking factor (tuples per block)
- V(A, R): Number of distinct values of attribute A

For each index I:
- Height of index (for B+ tree)
- Number of leaf pages
- Number of distinct keys

Relationship:
b_R = ceil(n_R / f_R)
f_R = floor(block_size / l_R)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Selection Cost Estimation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`σ(A = v)(R):

Method 1: Table Scan
- Cost = b_R (read all blocks)

Method 2: Primary Index (equality on key)
- Cost = Height + 1

Method 3: Primary Index (equality on non-key)
- Cost = Height + b_R / V(A,R)

Method 4: Secondary Index (equality)
- Cost = Height + 1 (key) or Height + n_R/V(A,R) (non-key)

Selectivity for A = v:
sel = 1 / V(A, R) (uniform distribution assumption)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Join Cost Estimation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For R ⋈ S on R.A = S.B:

Nested Loop Join:
- Cost = b_R + n_R * b_S (R is outer)
- Cost = b_S + n_S * b_R (S is outer)

Block Nested Loop:
- Cost = b_R + ceil(b_R / (M-2)) * b_S
  where M = memory buffers available

Hash Join:
- Cost = 3 * (b_R + b_S) for partitioning + matching

Sort-Merge Join:
- Cost = Sort_R + Sort_S + b_R + b_S`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Result Size Estimation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Selection: σ(A = v)(R)
- Result size = n_R / V(A, R)

Range Selection: σ(A >= v)(R)
- Result size = n_R * selectivity
- Selectivity estimated from histograms

Join: R ⋈(R.A = S.B) S
- If A is key of R: Result size <= n_S
- If B is key of S: Result size <= n_R
- Otherwise: Result size = n_R * n_S / max(V(A,R), V(B,S))

Cartesian Product: R × S
- Result size = n_R * n_S`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Histograms</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        Histograms provide more accurate statistics than simple counts:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Equi-width:</strong> Equal value ranges, varying frequencies</li>
        <li><strong>Equi-depth:</strong> Equal frequencies, varying ranges</li>
        <li>Help estimate selectivity for range queries</li>
        <li>Handle non-uniform value distributions</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Maintaining Statistics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Gather statistics manually
ANALYZE TABLE Employee;

-- SQL Server
UPDATE STATISTICS Employee;

-- Oracle
EXEC DBMS_STATS.GATHER_TABLE_STATS('schema', 'Employee');

Statistics become stale over time.
Most DBMSs have auto-update features.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Disk I/O is usually the dominant cost factor</li>
        <li>Statistics must be kept up-to-date for good estimates</li>
        <li>Histograms improve estimation for skewed data</li>
        <li>Estimates are approximations, not exact</li>
        <li>Wrong estimates lead to poor plan choices</li>
        <li>Use ANALYZE/UPDATE STATISTICS regularly</li>
      </ul>
    </div>
  </div>
);

export default CostEstimation;
