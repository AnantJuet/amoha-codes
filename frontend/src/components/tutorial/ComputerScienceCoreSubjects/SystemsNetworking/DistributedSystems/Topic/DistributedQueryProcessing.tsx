import React from "react";

const DistributedQueryProcessing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Query Processing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed Query Processing involves decomposing, optimizing, and executing queries across
      multiple sites in a distributed database system. The goal is to minimize data transfer costs
      and total execution time while producing correct results that appear as if from a single
      centralized database.
    </p>

    <h2 className="text-3xl font-bold mt-8">Query Processing Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Query Processing Pipeline:

+------------------+
|   SQL Query      |
+--------+---------+
         |
         v
+------------------+
| 1. Query Parsing |  Syntax check, validate
+--------+---------+
         |
         v
+------------------+
| 2. Query         |  Convert to relational
|    Translation   |  algebra expression
+--------+---------+
         |
         v
+------------------+
| 3. Data          |  Identify fragments
|    Localization  |  containing needed data
+--------+---------+
         |
         v
+------------------+
| 4. Global        |  Determine best
|    Optimization  |  execution strategy
+--------+---------+
         |
         v
+------------------+
| 5. Local         |  Optimize at each
|    Optimization  |  participating site
+--------+---------+
         |
         v
+------------------+
| 6. Distributed   |  Execute across sites
|    Execution     |  and combine results
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Decomposition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Decomposition Example:

Original Query:
SELECT E.Name, D.DeptName, E.Salary
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DeptID = D.DeptID
  AND E.Salary > 50000
  AND D.Location = 'New York'

Step 1: Parse and Validate
- Check syntax
- Verify table and column names
- Check user permissions

Step 2: Convert to Relational Algebra
pi_{Name, DeptName, Salary}(
  sigma_{Salary > 50000 AND Location = 'New York'}(
    EMPLOYEE JOIN_{DeptID} DEPARTMENT
  )
)

Step 3: Normalize and Restructure
- Push selections down (closer to base tables)
- Order operations for efficiency

Optimized Algebra Tree:
         pi_{Name, DeptName, Salary}
                   |
              JOIN_{DeptID}
             /            \\
sigma_{Salary>50000}    sigma_{Location='NY'}
        |                      |
    EMPLOYEE               DEPARTMENT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Localization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Localization Process:

Replace global relations with their fragments.

Given Fragments:
EMPLOYEE:
  - EMP_North: Region = 'North'  (Site A)
  - EMP_South: Region = 'South'  (Site B)
  - EMP_West:  Region = 'West'   (Site C)

DEPARTMENT:
  - DEPT_NY: Location = 'New York'  (Site A)
  - DEPT_LA: Location = 'LA'        (Site C)

Localized Query:
              pi_{Name, DeptName, Salary}
                        |
                   JOIN_{DeptID}
                  /            \\
                 /              \\
         UNION                DEPT_NY (Site A)
        /  |  \\
       /   |   \\
EMP_N  EMP_S  EMP_W
(A)     (B)    (C)

With selection push-down:
         pi_{Name, DeptName, Salary}
                   |
              JOIN_{DeptID}
             /            \\
         UNION          DEPT_NY
        / | \\             (A)
       /  |  \\
sigma  sigma  sigma
  |      |      |
EMP_N  EMP_S  EMP_W
 (A)    (B)    (C)

where sigma = {Salary > 50000}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Global Query Optimization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">When to Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Ship-Whole</td>
            <td className="p-3 border">Move entire relation to one site</td>
            <td className="p-3 border">Small relations, one-time transfer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Fetch-As-Needed</td>
            <td className="p-3 border">Request tuples incrementally</td>
            <td className="p-3 border">Selective queries, limited results</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Semi-Join</td>
            <td className="p-3 border">Reduce data before transfer</td>
            <td className="p-3 border">Large relations, selective joins</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Bloom Join</td>
            <td className="p-3 border">Use bloom filter for pre-filtering</td>
            <td className="p-3 border">Very large relations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Join Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Join Strategies:

1. SHIP-WHOLE STRATEGY
   Site A has R (1000 tuples)
   Site B has S (500 tuples)

   Option A: Ship R to B, join at B
   Cost = 1000 * tuple_size * network_cost

   Option B: Ship S to A, join at A
   Cost = 500 * tuple_size * network_cost

   Choose smaller relation to ship.

2. SEMI-JOIN STRATEGY
   Reduce data before shipping.

   R at Site A, S at Site B
   R JOIN S needed

   Steps:
   a. Project join attributes from R: pi_{A}(R) -> R'
   b. Ship R' to Site B
   c. Compute R' JOIN S -> S' (tuples that will match)
   d. Ship S' to Site A
   e. Compute final R JOIN S'

   R (1000)        S (500)
   Site A          Site B
     |               |
   pi_A(R)          |
   (50 unique)      |
     |------------->|
                 S' = R' JOIN S
                 (100 tuples match)
     |<-------------|
   R JOIN S'
   = Result

   Data transferred: 50 + 100 = 150 tuples
   vs Ship-Whole: 500 tuples

3. HASH-BASED DISTRIBUTED JOIN
   - Partition both relations by join key hash
   - Ship partitions to designated sites
   - Local joins at each partition site
   - Enables parallel execution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cost Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Query Cost Model:

Total Cost = CPU Cost + I/O Cost + Communication Cost

CPU Cost:
- Tuple processing time
- Comparison operations
- Local computation

I/O Cost:
- Disk reads/writes
- Buffer management
- Sequential vs random access

Communication Cost (DOMINANT in distributed):
- Message initialization: C0 (fixed overhead)
- Data transmission: C1 * data_size
- Network latency

Cost Formula:
Comm_Cost = C0 + C1 * |data|

Where:
- C0 = message setup cost (significant)
- C1 = per-byte transmission cost
- |data| = amount of data transferred

Example Comparison:
                    Ship-Whole      Semi-Join
Data transferred:   500 tuples      150 tuples
Messages:           1               2
Cost calculation:
Ship-Whole: C0 + C1*500 = 100 + 1*500 = 600
Semi-Join:  2*C0 + C1*150 = 200 + 1*150 = 350

Semi-join cheaper when selectivity is low.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Optimization Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Benefit</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Selection Push-down</td>
            <td className="p-3 border">Apply filters early</td>
            <td className="p-3 border">Reduces intermediate data</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Projection Push-down</td>
            <td className="p-3 border">Project only needed columns</td>
            <td className="p-3 border">Reduces tuple size</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Join Ordering</td>
            <td className="p-3 border">Order joins by selectivity</td>
            <td className="p-3 border">Minimizes intermediate results</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Site Selection</td>
            <td className="p-3 border">Choose optimal execution sites</td>
            <td className="p-3 border">Minimizes data movement</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parallel Execution</td>
            <td className="p-3 border">Execute sub-queries concurrently</td>
            <td className="p-3 border">Reduces total time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Execution Plan Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Execution Plan:

Query: Find employees in Sales dept with salary > 60000

SELECT E.Name, E.Salary
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DeptID = D.DeptID
  AND D.DeptName = 'Sales'
  AND E.Salary > 60000

Fragments:
- EMP_1 at Site A, EMP_2 at Site B
- DEPT at Site C

Execution Plan:

Time  |  Site A        |  Site B        |  Site C
------+----------------+----------------+----------------
  T1  | Scan EMP_1     | Scan EMP_2     | Scan DEPT
      | Filter: Sal>60k| Filter: Sal>60k| Filter: Sales
      |                |                |
  T2  | Wait           | Wait           | Send DEPT_Filtered
      |                |                | (DeptID values)
      |                |                | to A and B
  T3  | Receive Dept   | Receive Dept   |
      | IDs            | IDs            |
      |                |                |
  T4  | Semi-join with | Semi-join with |
      | DEPT IDs       | DEPT IDs       |
      | -> EMP_1'      | -> EMP_2'      |
      |                |                |
  T5  | Send EMP_1' to | Send EMP_2' to |
      | coordinator    | coordinator    |
      |                |                |
  T6  |       Final UNION at Coordinator
      |       Return Results

Parallel execution at T1 saves time.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimizer Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Optimizer Approaches:

1. EXHAUSTIVE SEARCH
   - Enumerate all possible plans
   - Evaluate cost of each
   - Select minimum cost plan

   Pros: Optimal solution
   Cons: Exponential complexity O(n!)
   Use: Small number of relations

2. HEURISTIC-BASED
   - Apply transformation rules
   - Push selections/projections down
   - Use rule-based ordering

   Pros: Fast, predictable
   Cons: May miss optimal plan
   Use: Complex queries, real-time

3. DYNAMIC PROGRAMMING
   - Build optimal sub-plans bottom-up
   - Reuse sub-plan costs
   - Prune suboptimal paths

   Pros: Polynomial complexity
   Cons: Still expensive for many joins
   Use: Moderate complexity queries

4. RANDOMIZED/GENETIC
   - Start with random plans
   - Mutate and select better plans
   - Iterate until convergence

   Pros: Handles large search space
   Cons: Not guaranteed optimal
   Use: Very complex queries`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed query processing: parsing, localization, optimization, and execution</li>
        <li>Communication cost typically dominates in distributed systems</li>
        <li>Key strategies: Ship-Whole, Semi-Join, Hash Partitioned Join</li>
        <li>Semi-join reduces data transfer by pre-filtering with join attributes</li>
        <li>Optimization techniques: selection/projection push-down, join ordering</li>
        <li>Parallel execution across sites can significantly reduce total query time</li>
        <li>Optimizer must balance plan quality vs optimization time</li>
      </ul>
    </div>
  </div>
);

export default DistributedQueryProcessing;
