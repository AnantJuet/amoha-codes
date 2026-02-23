import React from "react";

const VerticalFragmentation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Vertical Fragmentation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Vertical Fragmentation divides a relation by columns (attributes), creating fragments that
      contain subsets of attributes. Each fragment must include the primary key to enable
      reconstruction through natural joins. This is analogous to the PROJECT operation in
      relational algebra.
    </p>

    <h2 className="text-3xl font-bold mt-8">Vertical Fragmentation Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Vertical Fragmentation:

Original EMPLOYEE Table:
+-----+--------+------------+--------+----------+-----------+
| EID | Name   | Department | Salary | SSN      | Address   |
+-----+--------+------------+--------+----------+-----------+
| 101 | Alice  | Sales      | 50000  | 123-45-1 | 123 Main  |
| 102 | Bob    | IT         | 65000  | 123-45-2 | 456 Oak   |
| 103 | Carol  | Sales      | 55000  | 123-45-3 | 789 Pine  |
| 104 | Dave   | Marketing  | 60000  | 123-45-4 | 321 Elm   |
+-----+--------+------------+--------+----------+-----------+

Vertical Fragments:

F1 (General Info) - Public Access:
+-----+--------+------------+
| EID | Name   | Department |
+-----+--------+------------+
| 101 | Alice  | Sales      |
| 102 | Bob    | IT         |
| 103 | Carol  | Sales      |
| 104 | Dave   | Marketing  |
+-----+--------+------------+

F2 (Payroll Info) - HR Access Only:
+-----+--------+----------+
| EID | Salary | SSN      |
+-----+--------+----------+
| 101 | 50000  | 123-45-1 |
| 102 | 65000  | 123-45-2 |
| 103 | 55000  | 123-45-3 |
| 104 | 60000  | 123-45-4 |
+-----+--------+----------+

F3 (Contact Info) - Admin Access:
+-----+-----------+
| EID | Address   |
+-----+-----------+
| 101 | 123 Main  |
| 102 | 456 Oak   |
| 103 | 789 Pine  |
| 104 | 321 Elm   |
+-----+-----------+

Note: Primary Key (EID) must be in ALL fragments for reconstruction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mathematical Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Vertical Fragmentation Definition:

Given: Relation R(A1, A2, ..., An) with primary key K

Vertical Fragment Fi = PROJECT(R, Ai)
Where Ai is a subset of attributes including K

Example:
R(EID, Name, Dept, Salary, SSN, Address)
K = {EID}

F1 = PROJECT(R, {EID, Name, Dept})
F2 = PROJECT(R, {EID, Salary, SSN})
F3 = PROJECT(R, {EID, Address})

Reconstruction:
R = F1 NATURAL JOIN F2 NATURAL JOIN F3

or using explicit join:

R = (F1 JOIN F2 ON F1.EID = F2.EID)
       JOIN F3 ON F2.EID = F3.EID

Properties:
- Each Fi must contain primary key K
- UNION of all attribute sets (minus key duplication) = all attributes
- Join on primary key reconstructs original relation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Rules for Vertical Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule</th>
            <th className="p-3 border">Vertical Fragmentation Check</th>
            <th className="p-3 border">Formula</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">Completeness</td>
            <td className="p-3 border">Every attribute in at least one fragment</td>
            <td className="p-3 border">UNION(Attrs(Fi)) = Attrs(R)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Reconstruction</td>
            <td className="p-3 border">Natural join of all fragments = R</td>
            <td className="p-3 border">R = F1 JOIN F2 JOIN ... Fn</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Disjointness</td>
            <td className="p-3 border">Only PK shared across fragments</td>
            <td className="p-3 border">Fi INTERSECT Fj = PK (for i != j)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attribute Affinity Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Affinity Analysis for Vertical Fragmentation:

Step 1: Create Attribute Usage Matrix
(Which queries use which attributes)

         | Q1 | Q2 | Q3 | Q4 | Q5 |
---------|----|----|----|----|----|
Name     | 1  | 1  | 0  | 0  | 1  |
Dept     | 1  | 1  | 0  | 0  | 0  |
Salary   | 0  | 0  | 1  | 1  | 0  |
SSN      | 0  | 0  | 1  | 0  | 0  |
Address  | 0  | 1  | 0  | 0  | 1  |

Step 2: Calculate Attribute Affinity
aff(Ai, Aj) = SUM over all queries q of:
              acc(q) * (Ai used in q AND Aj used in q)

Where acc(q) = access frequency of query q

Example Affinity Matrix:
         | Name | Dept | Salary | SSN | Address |
---------|------|------|--------|-----|---------|
Name     |  -   |  20  |   0    |  0  |   15    |
Dept     |  20  |  -   |   0    |  0  |    5    |
Salary   |   0  |   0  |   -    | 10  |    0    |
SSN      |   0  |   0  |  10    |  -  |    0    |
Address  |  15  |   5  |   0    |  0  |    -    |

Step 3: Cluster Attributes with High Affinity
Cluster 1: {Name, Dept}        - High affinity (20)
Cluster 2: {Salary, SSN}       - High affinity (10)
Cluster 3: {Address}           - Low affinity with others

Result: Three vertical fragments`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bond Energy Algorithm (BEA)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Bond Energy Algorithm for Vertical Fragmentation:

Purpose: Cluster attributes to maximize affinity within clusters

Algorithm:
1. Start with affinity matrix AA
2. Place columns to maximize bond energy
3. Identify clusters of high-affinity attributes

Bond Energy Formula:
BE = SUM over all i,j of: aff(Ai,Aj) * [aff(Ai,Aj-1) + aff(Ai,Aj+1)
                                       + aff(Ai-1,Aj) + aff(Ai+1,Aj)]

Example Clustering Result:
Original Order: Name, Dept, Salary, SSN, Address

After BEA Reordering:
         | Name | Dept | Address | Salary | SSN |
---------|------|------|---------|--------|-----|
Name     |  -   |  20  |   15    |    0   |  0  |
Dept     |  20  |  -   |    5    |    0   |  0  |
Address  |  15  |   5  |    -    |    0   |  0  |
Salary   |   0  |   0  |    0    |    -   | 10  |
SSN      |   0  |   0  |    0    |   10   |  -  |

Clusters identified:
+------------------+     +---------------+
| Name, Dept, Addr |     | Salary, SSN   |
| (High internal   |     | (High internal|
|  affinity)       |     |  affinity)    |
+------------------+     +---------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Fragment</th>
            <th className="p-3 border">Attributes</th>
            <th className="p-3 border">Access Level</th>
            <th className="p-3 border">Site</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-green-600">F1</td>
            <td className="p-3 border">EID, Name, Dept</td>
            <td className="p-3 border">Public</td>
            <td className="p-3 border">Application Server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-blue-600">F2</td>
            <td className="p-3 border">EID, Salary, SSN</td>
            <td className="p-3 border">HR Only</td>
            <td className="p-3 border">Secure HR Server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">F3</td>
            <td className="p-3 border">EID, Address, Phone</td>
            <td className="p-3 border">Admin</td>
            <td className="p-3 border">Admin Server</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Query Processing Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query Processing with Vertical Fragments:

Query 1: SELECT Name, Dept FROM EMPLOYEE
-----------------------------------------
- Only F1 needed (contains Name, Dept)
- Access: Single fragment
- Fast, minimal I/O

Query 2: SELECT Name, Salary FROM EMPLOYEE WHERE Salary > 60000
----------------------------------------------------------------
- F1 needed for Name
- F2 needed for Salary
- Requires JOIN on EID

Execution Plan:
1. Filter F2: Salary > 60000 --> {102, 104}
2. Join with F1 on EID
3. Project Name, Salary

Result:
+------+--------+
| Name | Salary |
+------+--------+
| Bob  | 65000  |
| Dave | 60000  |
+------+--------+

Query 3: SELECT * FROM EMPLOYEE WHERE EID = 101
------------------------------------------------
- All fragments needed
- Join all on EID = 101

Execution:
F1(101): {101, Alice, Sales}
F2(101): {101, 50000, 123-45-1}
F3(101): {101, 123 Main}

Join Result:
{101, Alice, Sales, 50000, 123-45-1, 123 Main}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases for Vertical Fragmentation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Security Isolation</td>
            <td className="p-3 border">Separate sensitive data</td>
            <td className="p-3 border">SSN, Salary in secure fragment</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Access Pattern Optimization</td>
            <td className="p-3 border">Group frequently co-accessed columns</td>
            <td className="p-3 border">Name+Address for mailing apps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Wide Tables</td>
            <td className="p-3 border">Split tables with many columns</td>
            <td className="p-3 border">Product catalog with 100+ attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Different Storage Needs</td>
            <td className="p-3 border">BLOB data separate from regular data</td>
            <td className="p-3 border">Documents, images in separate fragment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages vs Disadvantages</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ADVANTAGES:

1. Security
   - Sensitive columns in protected fragments
   - Different access controls per fragment
   - Physical separation possible

2. Performance
   - Smaller fragments = less I/O
   - Only needed columns retrieved
   - Better buffer utilization

3. Flexibility
   - Different storage strategies per fragment
   - Independent optimization possible
   - Easier to manage large tables

4. Parallel Access
   - Different fragments accessed simultaneously
   - Column-oriented operations faster
   - Better for analytical queries

-----------------------------------------

DISADVANTAGES:

1. Reconstruction Cost
   - Joins required for full row access
   - SELECT * queries expensive
   - Network overhead for distributed joins

2. Key Replication
   - Primary key in every fragment
   - Storage overhead
   - Update overhead

3. Complexity
   - More complex query optimization
   - Transaction management harder
   - Schema changes more complex

4. Not Always Beneficial
   - If queries often need all columns
   - Join cost may exceed benefits
   - Overhead for small tables`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Vertical fragmentation divides columns/attributes into separate fragments</li>
        <li>Primary key must be replicated in every fragment for reconstruction</li>
        <li>Reconstruction uses NATURAL JOIN: R = F1 JOIN F2 JOIN ... Fn</li>
        <li>Attribute Affinity Analysis and BEA help identify optimal groupings</li>
        <li>Key use cases: security isolation, access pattern optimization, wide tables</li>
        <li>Trade-off: Single-column queries faster, full-row queries require joins</li>
        <li>Best suited for tables with clear attribute groupings and different access patterns</li>
      </ul>
    </div>
  </div>
);

export default VerticalFragmentation;
