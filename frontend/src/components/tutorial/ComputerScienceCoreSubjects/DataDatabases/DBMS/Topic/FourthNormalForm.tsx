import React from "react";

const FourthNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Fourth Normal Form (4NF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fourth Normal Form (4NF) deals with multi-valued dependencies. A table is in 4NF
      if it is in BCNF and has no non-trivial multi-valued dependencies. 4NF eliminates
      redundancy caused by independent multi-valued facts about an entity.
    </p>

    <h2 className="text-3xl font-bold mt-8">Multi-Valued Dependency (MVD)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multi-Valued Dependency: A →→ B

Means: For a given A value, there is a well-defined
set of B values, independent of other attributes.

Notation: A →→ B (A multi-determines B)

Trivial MVD:
- A →→ B is trivial if B ⊆ A or A ∪ B = all attributes

Non-trivial MVD:
- A →→ B where B is independent of other attributes
- These cause redundancy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">MVD Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Table: Employee_Skills_Hobbies
+--------+---------+---------+
| EmpID  | Skill   | Hobby   |
+--------+---------+---------+
| E1     | Java    | Reading |
| E1     | Java    | Tennis  |
| E1     | Python  | Reading |
| E1     | Python  | Tennis  |
| E2     | C++     | Music   |
+--------+---------+---------+

Multi-Valued Dependencies:
EmpID →→ Skill    (Employee multi-determines skills)
EmpID →→ Hobby    (Employee multi-determines hobbies)

Problem: Skills and Hobbies are independent!
- To add a new skill for E1, must add rows for ALL hobbies
- To add a new hobby for E1, must add rows for ALL skills
- Massive redundancy!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4NF Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A relation R is in 4NF if:

1. R is in BCNF, AND
2. For every non-trivial MVD A →→ B:
   A is a superkey of R

In simple terms:
- No independent multi-valued facts
- If A →→ B exists, A must be a key

Rule: One multi-valued fact per table`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Decomposition to 4NF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Table (NOT in 4NF):
Employee_Skills_Hobbies(EmpID, Skill, Hobby)

MVDs: EmpID →→ Skill, EmpID →→ Hobby

Decomposition:

Table 1: Employee_Skills
+--------+---------+
| EmpID  | Skill   |
+--------+---------+
| E1     | Java    |
| E1     | Python  |
| E2     | C++     |
+--------+---------+

Table 2: Employee_Hobbies
+--------+---------+
| EmpID  | Hobby   |
+--------+---------+
| E1     | Reading |
| E1     | Tennis  |
| E2     | Music   |
+--------+---------+

Now each table has only one multi-valued fact!
Both tables are in 4NF.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Table: Course_Teacher_Book
+--------+---------+------------+
| Course | Teacher | Textbook   |
+--------+---------+------------+
| CS101  | Smith   | DB Book    |
| CS101  | Smith   | SQL Guide  |
| CS101  | Jones   | DB Book    |
| CS101  | Jones   | SQL Guide  |
+--------+---------+------------+

MVDs: Course →→ Teacher, Course →→ Textbook

Teachers and Textbooks are independent.
Adding a teacher requires adding all textbook combinations!

Decompose to 4NF:

Course_Teachers(Course, Teacher)
Course_Textbooks(Course, Textbook)

Both MVDs now have Course as key.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying MVDs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Look for independence:</strong> Are two sets of values related independently to a key?</li>
        <li><strong>Check Cartesian products:</strong> Is the table a Cartesian product of two relationships?</li>
        <li><strong>Count redundancy:</strong> Does adding one value require multiple rows?</li>
        <li><strong>Ask domain experts:</strong> Are these facts really independent?</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">4NF vs BCNF</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">BCNF</th>
            <th className="p-3 border">4NF</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Based On</td>
            <td className="p-3 border">Functional Dependencies</td>
            <td className="p-3 border">Multi-Valued Dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Notation</td>
            <td className="p-3 border">A → B</td>
            <td className="p-3 border">A →→ B</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Eliminates</td>
            <td className="p-3 border">Partial/transitive dependencies</td>
            <td className="p-3 border">Independent multi-valued facts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Prerequisite</td>
            <td className="p-3 border">3NF</td>
            <td className="p-3 border">BCNF</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>4NF eliminates multi-valued dependencies</li>
        <li>MVD: A →→ B means B is multi-determined by A</li>
        <li>4NF = BCNF + no non-trivial MVDs</li>
        <li>One multi-valued fact per table</li>
        <li>Decompose independent facts into separate tables</li>
      </ul>
    </div>
  </div>
);

export default FourthNormalForm;
