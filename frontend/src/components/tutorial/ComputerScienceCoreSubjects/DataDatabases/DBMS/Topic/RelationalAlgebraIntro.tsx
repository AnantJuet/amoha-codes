import React from "react";

const RelationalAlgebraIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Relational Algebra</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Relational Algebra is a procedural query language that provides a theoretical foundation
      for relational databases. It consists of a set of operators that take one or more relations
      as input and produce a new relation as output.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Relational Algebra?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Algebra:

- Procedural query language (specifies HOW)
- Based on set theory and first-order predicate logic
- Foundation for SQL and query optimization
- Operations on relations produce relations (closure property)

Query Flow:
Relation(s) → Operator → Result Relation → Operator → ... → Final Result`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Algebra Operations:

1. Unary Operations (Single Relation)
   - Selection (σ)    : Filter rows
   - Projection (π)   : Select columns
   - Rename (ρ)       : Rename relation/attributes

2. Binary Operations (Two Relations)
   - Set Operations:
     * Union (∪)          : Combine tuples
     * Intersection (∩)   : Common tuples
     * Difference (-)     : Remove common tuples

   - Join Operations:
     * Cartesian Product (×) : All combinations
     * Natural Join (⋈)      : Match on common attrs
     * Theta Join (⋈θ)       : Join with condition

3. Extended Operations
   - Division (÷)
   - Aggregate Functions
   - Outer Joins`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sample Relations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`We'll use these relations for examples:

STUDENT                          COURSE
+------+-------+------+          +------+---------+------+
| SID  | Name  | Age  |          | CID  | Title   | Cr   |
+------+-------+------+          +------+---------+------+
| S1   | John  | 20   |          | C1   | DBMS    | 3    |
| S2   | Alice | 21   |          | C2   | OS      | 4    |
| S3   | Bob   | 22   |          | C3   | Networks| 3    |
+------+-------+------+          +------+---------+------+

ENROLLMENT
+------+------+-------+
| SID  | CID  | Grade |
+------+------+-------+
| S1   | C1   | A     |
| S1   | C2   | B     |
| S2   | C1   | A     |
| S3   | C3   | B     |
+------+------+-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operation Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Selection</td>
            <td className="p-3 border">σ (sigma)</td>
            <td className="p-3 border">Filter rows by condition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Projection</td>
            <td className="p-3 border">π (pi)</td>
            <td className="p-3 border">Select specific columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Union</td>
            <td className="p-3 border">∪</td>
            <td className="p-3 border">Combine all tuples</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Intersection</td>
            <td className="p-3 border">∩</td>
            <td className="p-3 border">Common tuples only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Difference</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Tuples in first, not second</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cartesian Product</td>
            <td className="p-3 border">×</td>
            <td className="p-3 border">All possible combinations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Natural Join</td>
            <td className="p-3 border">⋈</td>
            <td className="p-3 border">Join on common attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rename</td>
            <td className="p-3 border">ρ (rho)</td>
            <td className="p-3 border">Rename relation/attributes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure Property</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Closure Property:
Result of any relational algebra operation is always a relation.

This allows:
- Nesting operations: π Name (σ Age>20 (STUDENT))
- Building complex queries from simple operations
- Query composition

Example:
σ Grade='A' (ENROLLMENT) → Returns a relation
π SID (σ Grade='A' (ENROLLMENT)) → Also returns a relation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relational Algebra is procedural (specifies how)</li>
        <li>All operations produce relations (closure)</li>
        <li>Foundation for SQL query processing</li>
        <li>Unary: Selection, Projection, Rename</li>
        <li>Binary: Union, Intersection, Difference, Product, Join</li>
      </ul>
    </div>
  </div>
);

export default RelationalAlgebraIntro;
