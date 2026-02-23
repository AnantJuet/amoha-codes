import React from "react";

const CartesianProduct: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cartesian Product Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Cartesian Product (also called Cross Product or Cross Join) is a binary operation
      in relational algebra that combines every tuple of one relation with every tuple of
      another relation. It produces all possible combinations of tuples.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> R x S or R TIMES S
      </p>
      <p className="leading-relaxed mt-2">
        The Cartesian product of relations R and S is a new relation that contains all
        possible combinations of tuples from R and S.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li>If R has m tuples and S has n tuples, R x S has m * n tuples</li>
        <li>If R has p attributes and S has q attributes, R x S has p + q attributes</li>
        <li>Attribute names are prefixed with relation name if there are conflicts</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relation R (STUDENT):        Relation S (COURSE):
+------+--------+           +------+---------+
| S_ID | S_Name |           | C_ID | C_Name  |
+------+--------+           +------+---------+
| S1   | Alice  |           | C1   | DBMS    |
| S2   | Bob    |           | C2   | OS      |
+------+--------+           +------+---------+

R x S (Cartesian Product):
+------+--------+------+---------+
| S_ID | S_Name | C_ID | C_Name  |
+------+--------+------+---------+
| S1   | Alice  | C1   | DBMS    |
| S1   | Alice  | C2   | OS      |
| S2   | Bob    | C1   | DBMS    |
| S2   | Bob    | C2   | OS      |
+------+--------+------+---------+

Result: 2 x 2 = 4 tuples, 2 + 2 = 4 attributes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Commutative:</strong> R x S = S x R (attributes may be ordered differently)</li>
      <li><strong>Associative:</strong> (R x S) x T = R x (S x T)</li>
      <li><strong>Not directly useful alone:</strong> Usually combined with Selection</li>
      <li><strong>Expensive operation:</strong> Produces large result sets</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">SQL Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Cartesian Product in SQL
SELECT * FROM Student, Course;

-- Or using CROSS JOIN
SELECT * FROM Student CROSS JOIN Course;

-- Often combined with WHERE clause (becomes a join)
SELECT * FROM Student, Course
WHERE Student.Dept_ID = Course.Dept_ID;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Use Cases</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Generating all possible pairings (e.g., tournament matchups)</li>
        <li>Creating combination tables for reporting</li>
        <li>Base operation for implementing joins</li>
        <li>Generating test data combinations</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship with Join</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Join can be expressed as:
R ⋈ S = σ(join_condition)(R x S)

Example:
STUDENT ⋈(STUDENT.Dept_ID = DEPARTMENT.Dept_ID) DEPARTMENT

Is equivalent to:
σ(STUDENT.Dept_ID = DEPARTMENT.Dept_ID)(STUDENT x DEPARTMENT)

The join operation is more efficient than computing
the full Cartesian product and then filtering.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cartesian product combines every tuple with every other tuple</li>
        <li>Result size = m x n tuples (can be very large)</li>
        <li>Rarely used alone; usually combined with selection (for joins)</li>
        <li>In SQL, use CROSS JOIN or list multiple tables without WHERE</li>
        <li>Be cautious with large tables - result can be enormous</li>
        <li>Attribute name conflicts are resolved with relation name prefix</li>
      </ul>
    </div>
  </div>
);

export default CartesianProduct;
