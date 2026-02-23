import React from "react";

const HorizontalFragmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Horizontal Fragmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Horizontal Fragmentation divides a relation into subsets of tuples (rows) based on selection
      predicates. Each fragment contains a subset of rows that satisfy a particular condition.
      This is analogous to the SELECT operation in relational algebra.
    </p>

    <h2 className="text-3xl font-bold mt-8">Horizontal Fragmentation Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Horizontal Fragmentation:

Original EMPLOYEE Table:
+-----+--------+------------+--------+---------+
| EID | Name   | Department | Salary | Region  |
+-----+--------+------------+--------+---------+
| 101 | Alice  | Sales      | 50000  | North   |
| 102 | Bob    | IT         | 65000  | North   |
| 103 | Carol  | Sales      | 55000  | South   |
| 104 | Dave   | Marketing  | 60000  | South   |
| 105 | Eve    | IT         | 70000  | East    |
| 106 | Frank  | Marketing  | 58000  | East    |
| 107 | Grace  | Sales      | 52000  | West    |
| 108 | Henry  | IT         | 68000  | West    |
+-----+--------+------------+--------+---------+

Fragmentation by Region:

F1 = SELECT * FROM EMPLOYEE WHERE Region = 'North'
+-----+-------+------------+--------+-------+
| 101 | Alice | Sales      | 50000  | North |
| 102 | Bob   | IT         | 65000  | North |
+-----+-------+------------+--------+-------+

F2 = SELECT * FROM EMPLOYEE WHERE Region = 'South'
+-----+-------+------------+--------+-------+
| 103 | Carol | Sales      | 55000  | South |
| 104 | Dave  | Marketing  | 60000  | South |
+-----+-------+------------+--------+-------+

F3 = SELECT * FROM EMPLOYEE WHERE Region = 'East'
+-----+-------+------------+--------+-------+
| 105 | Eve   | IT         | 70000  | East  |
| 106 | Frank | Marketing  | 58000  | East  |
+-----+-------+------------+--------+-------+

F4 = SELECT * FROM EMPLOYEE WHERE Region = 'West'
+-----+-------+------------+--------+-------+
| 107 | Grace | Sales      | 52000  | West  |
| 108 | Henry | IT         | 68000  | West  |
+-----+-------+------------+--------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Horizontal Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Based On</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Primary</td>
            <td className="p-3 border">Based on predicates on own attributes</td>
            <td className="p-3 border">Relation's own columns</td>
            <td className="p-3 border">EMPLOYEE by Region</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Derived</td>
            <td className="p-3 border">Based on another relation's fragmentation</td>
            <td className="p-3 border">Foreign key relationship</td>
            <td className="p-3 border">ORDERS by Customer location</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary Horizontal Fragmentation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Primary Horizontal Fragmentation Process:

Given: Relation R with attributes (A1, A2, ..., An)
       Set of simple predicates P = {p1, p2, ..., pm}

Step 1: Define Simple Predicates
   p1: Region = 'North'
   p2: Region = 'South'
   p3: Region = 'East'
   p4: Region = 'West'

Step 2: Generate Minterm Predicates
   Minterms are conjunctions of all predicates or their negations.
   For mutually exclusive predicates (like Region values):

   m1 = p1                     (Region = 'North')
   m2 = p2                     (Region = 'South')
   m3 = p3                     (Region = 'East')
   m4 = p4                     (Region = 'West')

Step 3: Apply Selection to Create Fragments
   F1 = sigma_m1(R) = {t in R | m1(t) is true}
   F2 = sigma_m2(R) = {t in R | m2(t) is true}
   F3 = sigma_m3(R) = {t in R | m3(t) is true}
   F4 = sigma_m4(R) = {t in R | m4(t) is true}

Mathematical Definition:
   Fi = sigma_Pi(R)

Where:
   sigma = selection operation
   Pi = predicate for fragment i
   R = original relation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Derived Horizontal Fragmentation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Derived Horizontal Fragmentation:

Used when a relation needs to be fragmented based on
another (owner) relation's fragmentation.

Example:
CUSTOMER (owner) fragmented by Region:
+-----+----------+--------+
| CID | Name     | Region |
+-----+----------+--------+
| C1  | Acme     | North  |
| C2  | Beta     | South  |
| C3  | Gamma    | North  |
+-----+----------+--------+

ORDERS (member) derives fragmentation from CUSTOMER:
+-----+-----+--------+--------+
| OID | CID | Amount | Date   |
+-----+-----+--------+--------+
| O1  | C1  | 1000   | Jan-01 |  --> North (C1 is in North)
| O2  | C2  | 2000   | Jan-02 |  --> South (C2 is in South)
| O3  | C1  | 1500   | Jan-03 |  --> North (C1 is in North)
| O4  | C3  | 3000   | Jan-04 |  --> North (C3 is in North)
+-----+-----+--------+--------+

Derived Fragments:
ORDERS_North = ORDERS SEMIJOIN CUSTOMER_North
             = {O1, O3, O4}

ORDERS_South = ORDERS SEMIJOIN CUSTOMER_South
             = {O2}

Benefit: Related data stored together (better join performance)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Verification</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Horizontal Fragmentation Check</th>
            <th className="p-3 border">Formula</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Completeness</td>
            <td className="p-3 border">Every row in at least one fragment</td>
            <td className="p-3 border">R = F1 UNION F2 UNION ... UNION Fn</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Reconstruction</td>
            <td className="p-3 border">Original table from UNION of fragments</td>
            <td className="p-3 border">R = UNION(Fi) for all i</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Disjointness</td>
            <td className="p-3 border">No row in multiple fragments</td>
            <td className="p-3 border">Fi INTERSECT Fj = {} for i != j</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation of Horizontal Fragments</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fragment Allocation to Sites:

Fragmented EMPLOYEE Table:
                                        Allocation
F1 (North): {Alice, Bob}     ------>   Site_North (New York)
F2 (South): {Carol, Dave}    ------>   Site_South (Atlanta)
F3 (East):  {Eve, Frank}     ------>   Site_East (Boston)
F4 (West):  {Grace, Henry}   ------>   Site_West (Seattle)

Physical Distribution:

  Site_North          Site_South          Site_East           Site_West
  (New York)          (Atlanta)           (Boston)            (Seattle)
  +----------+        +----------+        +----------+        +----------+
  |    F1    |        |    F2    |        |    F3    |        |    F4    |
  | Alice    |        | Carol    |        | Eve      |        | Grace    |
  | Bob      |        | Dave     |        | Frank    |        | Henry    |
  +----------+        +----------+        +----------+        +----------+
       |                   |                   |                   |
       +-------------------+-------------------+-------------------+
                                   |
                              Network
                                   |
                        +-------------------+
                        | Global EMPLOYEE   |
                        | (Virtual View)    |
                        +-------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Processing Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Processing with Horizontal Fragments:

Query: SELECT * FROM EMPLOYEE WHERE Region = 'North'

Without Fragmentation:
- Scan entire EMPLOYEE table
- Filter rows where Region = 'North'
- Return results

With Fragmentation (Region-based):
- Query router identifies: Region = 'North' maps to F1
- Query sent only to Site_North
- Full fragment F1 returned (all rows match)
- No data transfer from other sites

Performance Comparison:
+------------------+------------------+------------------+
| Metric           | No Fragmentation | With Fragments   |
+------------------+------------------+------------------+
| Sites Accessed   | All sites        | 1 site only      |
| Data Scanned     | All rows         | F1 rows only     |
| Network Traffic  | High             | Minimal          |
| Response Time    | Slower           | Faster           |
+------------------+------------------+------------------+

Query: SELECT * FROM EMPLOYEE WHERE Salary > 60000

With Fragmentation:
- Predicate not on fragmentation attribute
- Must query ALL fragments
- Each site filters locally: Salary > 60000
- Results merged at coordinator

Result: {Bob(65k), Eve(70k), Henry(68k)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Predicates Selection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Criteria</th>
            <th className="p-3 border">Good Predicate</th>
            <th className="p-3 border">Poor Predicate</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Query Alignment</td>
            <td className="p-3 border">Matches common WHERE clauses</td>
            <td className="p-3 border">Rarely used in queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Selectivity</td>
            <td className="p-3 border">Creates balanced fragments</td>
            <td className="p-3 border">Creates skewed fragments</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stability</td>
            <td className="p-3 border">Values rarely change</td>
            <td className="p-3 border">Frequently updated column</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Locality</td>
            <td className="p-3 border">Maps to physical locations</td>
            <td className="p-3 border">No correlation with access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ADVANTAGES:

1. Data Locality
   - Regional data at regional sites
   - Reduced network latency
   - Better response times

2. Parallel Processing
   - Each fragment processed independently
   - Aggregate queries parallelized
   - Better throughput

3. Security
   - Physical isolation by region/criteria
   - Different access controls per fragment
   - Regulatory compliance easier

4. Availability
   - Fragment failure is isolated
   - Other regions continue operating
   - Easier disaster recovery

-----------------------------------------

DISADVANTAGES:

1. Non-Matching Queries
   - Queries not on fragmentation attribute
   - Must access all fragments
   - Performance degradation

2. Fragment Skew
   - Uneven data distribution
   - Some sites overloaded
   - Load balancing issues

3. Cross-Fragment Operations
   - Joins across fragments expensive
   - Aggregates need merging
   - Complex query optimization

4. Migration Overhead
   - When fragmentation attribute changes
   - Row moves to different fragment
   - Network and consistency overhead`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Horizontal fragmentation divides rows based on selection predicates</li>
        <li>Two types: Primary (own attributes) and Derived (from related table)</li>
        <li>Reconstruction uses UNION operation: R = F1 UNION F2 UNION ... Fn</li>
        <li>Fragments should be disjoint (no overlapping rows)</li>
        <li>Best performance when queries match fragmentation predicates</li>
        <li>Choose stable, frequently queried attributes for fragmentation</li>
        <li>Derived fragmentation keeps related data together for better join performance</li>
      </ul>
    </div>
  </div>
);

export default HorizontalFragmentation;
