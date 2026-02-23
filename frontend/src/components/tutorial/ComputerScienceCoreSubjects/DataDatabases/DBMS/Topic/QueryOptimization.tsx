import React from "react";

const QueryOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Query Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Query optimization is the process of selecting the most efficient execution plan
      for a SQL query. The query optimizer evaluates multiple strategies and chooses
      the one with the lowest estimated cost.
    </p>

    <h2 className="text-3xl font-bold mt-8">Query Processing Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL Query
    |
    v
+-------------+
|   Parser    |  -> Syntax check, create parse tree
+-------------+
    |
    v
+-------------+
| Translator  |  -> Convert to relational algebra
+-------------+
    |
    v
+-------------+
| Optimizer   |  -> Generate execution plans, choose best
+-------------+
    |
    v
+-------------+
|  Executor   |  -> Execute the chosen plan
+-------------+
    |
    v
  Result`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimization Techniques</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Selection Pushdown:</strong> Apply selections early to reduce data</li>
        <li><strong>Projection Pushdown:</strong> Remove unnecessary columns early</li>
        <li><strong>Join Ordering:</strong> Choose optimal order for multiple joins</li>
        <li><strong>Index Selection:</strong> Use indexes when beneficial</li>
        <li><strong>Join Method Selection:</strong> Choose nested loop, hash, or merge join</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equivalence Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Equivalence Rules:

1. Selection Cascade:
   σ(c1 AND c2)(R) = σ(c1)(σ(c2)(R))

2. Selection Commutativity:
   σ(c1)(σ(c2)(R)) = σ(c2)(σ(c1)(R))

3. Selection Pushdown (with Join):
   σ(c)(R ⋈ S) = σ(c)(R) ⋈ S  (if c involves only R)

4. Projection Pushdown:
   π(a1)(R ⋈ S) = π(a1)(π(a1,join_attrs)(R) ⋈ S)

5. Join Commutativity:
   R ⋈ S = S ⋈ R

6. Join Associativity:
   (R ⋈ S) ⋈ T = R ⋈ (S ⋈ T)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Selection Pushdown</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Query:
SELECT E.Name, D.Dept_Name
FROM Employee E, Department D
WHERE E.Dept_ID = D.ID AND E.Salary > 50000

Before optimization:
σ(E.Salary > 50000)(E ⋈(Dept_ID=ID) D)
- Join ALL employees with departments (expensive)
- Then filter by salary

After optimization (Selection Pushdown):
σ(E.Salary > 50000)(E) ⋈(Dept_ID=ID) D
- Filter employees by salary first (reduces data)
- Then join with departments

If Employee has 10000 rows and 1000 earn > 50000:
- Before: Join 10000 rows, then filter
- After: Join 1000 rows (10x faster!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cost-Based Optimization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cost factors:
- Disk I/O (number of block accesses)
- CPU time
- Memory usage
- Network transfer (distributed)

Cost estimation uses statistics:
- Table size (number of tuples)
- Block size and blocking factor
- Index availability and type
- Selectivity of predicates
- Distribution of values (histograms)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Join Order Optimization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For query: R ⋈ S ⋈ T

Possible orders:
1. (R ⋈ S) ⋈ T
2. (R ⋈ T) ⋈ S
3. (S ⋈ T) ⋈ R
4. R ⋈ (S ⋈ T)
... and more

For n tables: (2n-2)!/(n-1)! possible join orders

Optimization approaches:
- Exhaustive (for small n)
- Dynamic programming
- Greedy heuristics
- Left-deep trees only`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">EXPLAIN Plan</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- View execution plan
EXPLAIN SELECT * FROM Employee WHERE Dept_ID = 5;

-- Output shows:
- Access method (table scan, index scan)
- Join method
- Estimated rows
- Estimated cost

-- Use ANALYZE for actual execution stats
EXPLAIN ANALYZE SELECT ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Push selections and projections down to reduce data early</li>
        <li>Join order significantly affects performance</li>
        <li>Cost-based optimization uses statistics</li>
        <li>Use EXPLAIN to understand query plans</li>
        <li>Indexes can dramatically improve performance</li>
        <li>Query optimizer is automatic but can be guided</li>
      </ul>
    </div>
  </div>
);

export default QueryOptimization;
