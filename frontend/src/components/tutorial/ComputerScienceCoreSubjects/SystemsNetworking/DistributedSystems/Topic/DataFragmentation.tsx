import React from "react";

const DataFragmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Fragmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Fragmentation is the process of dividing a database relation (table) into smaller
      pieces called fragments, which can be stored at different sites in a distributed database
      system. Fragmentation improves performance by allowing data to be stored close to where
      it is most frequently accessed.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Data Fragmentation?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Fragmentation Overview:

Original Relation R:
+----+--------+-----------+--------+
| ID | Name   | Dept      | Salary |
+----+--------+-----------+--------+
| 1  | Alice  | Sales     | 50000  |
| 2  | Bob    | Sales     | 55000  |
| 3  | Carol  | Marketing | 60000  |
| 4  | Dave   | Marketing | 58000  |
| 5  | Eve    | IT        | 70000  |
+----+--------+-----------+--------+

After Fragmentation:

Fragment F1 (Site A)     Fragment F2 (Site B)    Fragment F3 (Site C)
+----+-------+------+    +----+-------+------+   +----+-------+------+
| 1  | Alice | 50000|    | 3  | Carol | 60000|   | 5  | Eve   | 70000|
| 2  | Bob   | 55000|    | 4  | Dave  | 58000|   +----+-------+------+
+----+-------+------+    +----+-------+------+

Benefits:
- Data locality (data near users)
- Improved query performance
- Better resource utilization
- Parallel processing capability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Horizontal</td>
            <td className="p-3 border">Divides rows into subsets</td>
            <td className="p-3 border">Selection (sigma)</td>
            <td className="p-3 border">Regional data distribution</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Vertical</td>
            <td className="p-3 border">Divides columns into subsets</td>
            <td className="p-3 border">Projection (pi)</td>
            <td className="p-3 border">Security, access patterns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Mixed/Hybrid</td>
            <td className="p-3 border">Combination of both</td>
            <td className="p-3 border">Selection + Projection</td>
            <td className="p-3 border">Complex requirements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Derived</td>
            <td className="p-3 border">Based on another relation</td>
            <td className="p-3 border">Semi-join</td>
            <td className="p-3 border">Related data co-location</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Visualization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HORIZONTAL FRAGMENTATION:
(Rows are divided based on a condition)

Original Table:
+---+------+--------+
| A | B    | C      |
+---+------+--------+
| 1 | X    | North  |  -----> Fragment 1 (Rows where C='North')
| 2 | Y    | North  |  -----> Fragment 1
| 3 | Z    | South  |  -----> Fragment 2 (Rows where C='South')
| 4 | W    | South  |  -----> Fragment 2
+---+------+--------+

-------------------------------------------

VERTICAL FRAGMENTATION:
(Columns are divided)

Original Table:
+---+------+--------+-------+
| A | B    | C      | D     |
+---+------+--------+-------+
| 1 | X    | data1  | priv  |
| 2 | Y    | data2  | priv  |
+---+------+--------+-------+
    |   |      |        |
    +---+------+        +----> Fragment 2 (Sensitive: A, D)
        |
        +-------------------> Fragment 1 (General: A, B, C)

-------------------------------------------

MIXED (HYBRID) FRAGMENTATION:
(Combination of Horizontal and Vertical)

Original Table -> Horizontal -> Then Vertical
                     OR
Original Table -> Vertical -> Then Horizontal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Correctness Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mathematical Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Completeness</td>
            <td className="p-3 border">All data must be in at least one fragment</td>
            <td className="p-3 border">R = F1 UNION F2 UNION ... UNION Fn</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Reconstruction</td>
            <td className="p-3 border">Original relation can be rebuilt from fragments</td>
            <td className="p-3 border">R = Reconstruct(F1, F2, ..., Fn)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Disjointness</td>
            <td className="p-3 border">Fragments should not overlap (for horizontal)</td>
            <td className="p-3 border">Fi INTERSECT Fj = EMPTY (i not equal j)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Rules Illustrated</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`COMPLETENESS:
Every tuple in R must appear in at least one fragment.

Original R: {t1, t2, t3, t4, t5}
F1: {t1, t2}
F2: {t3, t4}
F3: {t5}

Check: F1 UNION F2 UNION F3 = {t1, t2, t3, t4, t5} = R  [PASS]

-------------------------------------------

RECONSTRUCTION:
Can rebuild original relation from fragments.

Horizontal: R = F1 UNION F2 UNION F3
Vertical:   R = F1 JOIN F2 JOIN F3 (using common key)

-------------------------------------------

DISJOINTNESS (Horizontal Fragmentation):
No tuple should appear in more than one fragment.

F1: {t1, t2}
F2: {t3, t4}
F3: {t5}

Check:
F1 INTERSECT F2 = {} [PASS]
F2 INTERSECT F3 = {} [PASS]
F1 INTERSECT F3 = {} [PASS]

Note: For vertical fragmentation, the primary key
is replicated across fragments (allowed overlap).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Fragmentation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. DATA LOCALITY
   - Data stored where most accessed
   - Reduces network traffic
   - Faster query response

2. PARALLEL PROCESSING
   - Multiple fragments processed simultaneously
   - Better CPU utilization
   - Improved throughput

3. SECURITY
   - Sensitive columns in separate fragments
   - Different access controls per fragment
   - Physical isolation possible

4. REDUCED I/O
   - Smaller fragments = less disk reads
   - Only relevant data transferred
   - Better buffer utilization

5. AVAILABILITY
   - Failure of one site doesn't affect other fragments
   - Partial operation possible
   - Easier recovery`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Disadvantage</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Mitigation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Increased Complexity</td>
            <td className="p-3 border">More complex query processing</td>
            <td className="p-3 border">Good DDBMS with optimizer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Join Performance</td>
            <td className="p-3 border">Cross-fragment joins expensive</td>
            <td className="p-3 border">Careful fragmentation design</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Integrity Constraints</td>
            <td className="p-3 border">Harder to enforce across fragments</td>
            <td className="p-3 border">Distributed constraint checking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Design Difficulty</td>
            <td className="p-3 border">Choosing optimal fragmentation is hard</td>
            <td className="p-3 border">Access pattern analysis</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Design Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fragmentation Design Steps:

1. ANALYZE APPLICATION
   +------------------+
   | Application      |
   | Requirements     |
   +--------+---------+
            |
            v
   +------------------+
   | Query Analysis   |
   | - Access patterns|
   | - Frequency      |
   | - Locality       |
   +--------+---------+
            |
2. CHOOSE FRAGMENTATION TYPE
            |
            v
   +--------+---------+--------+
   |        |         |        |
   v        v         v        v
Horizontal Vertical  Mixed   Derived

3. DEFINE FRAGMENTS
            |
            v
   +------------------+
   | Fragmentation    |
   | Predicates       |
   | - WHERE clauses  |
   | - Column groups  |
   +--------+---------+
            |
4. VALIDATE CORRECTNESS
            |
            v
   +------------------+
   | Check:           |
   | - Completeness   |
   | - Reconstruction |
   | - Disjointness   |
   +------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Fragmentation divides a relation into smaller fragments for distributed storage</li>
        <li>Three main types: Horizontal (rows), Vertical (columns), and Mixed (both)</li>
        <li>Three correctness rules: Completeness, Reconstruction, and Disjointness</li>
        <li>Benefits include data locality, parallel processing, improved security, and availability</li>
        <li>Challenges include complex query processing and cross-fragment join performance</li>
        <li>Fragmentation design should be based on application access patterns and query requirements</li>
      </ul>
    </div>
  </div>
);

export default DataFragmentation;
