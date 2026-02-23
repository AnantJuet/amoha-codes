import React from "react";

const QueryProcessing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Query Processing</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Query processing transforms a high-level SQL query into an efficient execution plan.
      It involves parsing, optimization, and execution phases to retrieve results from
      the database efficiently.
    </p>

    <h2 className="text-3xl font-bold mt-8">Query Processing Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Processing Pipeline:

SQL Query
    |
    v
+-------------+
|   Parser    | → Syntax checking, parse tree
+-------------+
    |
    v
+-------------+
| Translator  | → Relational algebra expression
+-------------+
    |
    v
+-------------+
| Optimizer   | → Best execution plan
+-------------+
    |
    v
+-------------+
|  Executor   | → Execute plan, return results
+-------------+
    |
    v
Results`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 1: Parsing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Parser Tasks:

1. Lexical Analysis: Break query into tokens
   "SELECT name FROM student WHERE age > 20"
   → [SELECT] [name] [FROM] [student] [WHERE] [age] [>] [20]

2. Syntax Analysis: Check grammar, build parse tree

   SELECT
   ├── columns: [name]
   ├── FROM: [student]
   └── WHERE: age > 20

3. Semantic Analysis:
   - Check table exists
   - Check column exists
   - Check data types compatible`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 2: Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Translate SQL to Relational Algebra:

SQL:
SELECT name FROM student WHERE age > 20;

Relational Algebra:
π name (σ age>20 (student))

Query Tree:
        π name
           |
        σ age>20
           |
        student`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 3: Optimization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Optimizer:

Choose best execution strategy from many possibilities.

Example Query:
SELECT * FROM A, B WHERE A.id = B.id AND A.x > 10;

Plan 1: (A × B) then filter
- Cartesian product: expensive!
- Cost: O(n × m)

Plan 2: Filter A first, then join
- σ x>10 (A) ⋈ B
- Much cheaper if filter reduces A significantly

Plan 3: Use index on A.x
- Even cheaper with index scan

Optimizer considers:
- Table sizes and statistics
- Available indexes
- Join algorithms
- Memory constraints`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimization Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Selection Pushdown</td>
            <td className="p-3 border">Apply WHERE early to reduce data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Projection Pushdown</td>
            <td className="p-3 border">Select only needed columns early</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Join Reordering</td>
            <td className="p-3 border">Join smaller tables first</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Index Selection</td>
            <td className="p-3 border">Use indexes when beneficial</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Join Algorithm</td>
            <td className="p-3 border">Choose best join method</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Execution Plans</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EXPLAIN command shows execution plan:

EXPLAIN SELECT * FROM employee WHERE dept_id = 5;

Output:
+----+-------------+----------+------+---------------+
| id | select_type | table    | type | possible_keys |
+----+-------------+----------+------+---------------+
| 1  | SIMPLE      | employee | ref  | idx_dept      |
+----+-------------+----------+------+---------------+

Key indicators:
- type: How table is accessed (ALL, index, ref, const)
- key: Which index is used
- rows: Estimated rows to examine
- Extra: Additional info (Using index, Using where)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Query processing: Parse → Translate → Optimize → Execute</li>
        <li>Optimizer chooses best execution plan</li>
        <li>Push selections and projections early</li>
        <li>Use EXPLAIN to understand query plans</li>
        <li>Indexes significantly affect query performance</li>
      </ul>
    </div>
  </div>
);

export default QueryProcessing;
