import React from "react";

const NormalFormsOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Normal Forms Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Normal forms are a series of guidelines for organizing data in relational databases
      to minimize redundancy and dependency. Each successive normal form imposes stricter
      requirements for data organization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Summary of Normal Forms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Normal Form</th>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Eliminates</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1NF</td>
            <td className="p-3 border">Atomic values, no repeating groups</td>
            <td className="p-3 border">Multi-valued attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2NF</td>
            <td className="p-3 border">1NF + No partial dependencies</td>
            <td className="p-3 border">Partial key dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3NF</td>
            <td className="p-3 border">2NF + No transitive dependencies</td>
            <td className="p-3 border">Transitive dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">BCNF</td>
            <td className="p-3 border">Every determinant is a candidate key</td>
            <td className="p-3 border">Remaining FD anomalies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4NF</td>
            <td className="p-3 border">BCNF + No multi-valued dependencies</td>
            <td className="p-3 border">Multi-valued dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5NF</td>
            <td className="p-3 border">4NF + No join dependencies</td>
            <td className="p-3 border">Join dependencies</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Progression Through Normal Forms</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Unnormalized Table
        |
        v
   +----+----+
   |   1NF   |  <- Atomic values
   +----+----+
        |
        v
   +----+----+
   |   2NF   |  <- No partial dependencies
   +----+----+
        |
        v
   +----+----+
   |   3NF   |  <- No transitive dependencies
   +----+----+
        |
        v
   +----+----+
   |  BCNF   |  <- Every determinant is a key
   +----+----+
        |
        v
   +----+----+
   |   4NF   |  <- No multi-valued dependencies
   +----+----+
        |
        v
   +----+----+
   |   5NF   |  <- No join dependencies
   +----+----+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Progressive Normalization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Unnormalized:
+------+-------+----------------+----------+------------+
| S_ID | Name  | Courses        | Dept     | Dept_Head  |
+------+-------+----------------+----------+------------+
| 1    | Alice | DBMS, OS, Math | CSE      | Dr. Smith  |
| 2    | Bob   | DBMS, Networks | CSE      | Dr. Smith  |
+------+-------+----------------+----------+------------+

1NF (Atomic values):
+------+-------+---------+----------+------------+
| S_ID | Name  | Course  | Dept     | Dept_Head  |
+------+-------+---------+----------+------------+
| 1    | Alice | DBMS    | CSE      | Dr. Smith  |
| 1    | Alice | OS      | CSE      | Dr. Smith  |
| 1    | Alice | Math    | CSE      | Dr. Smith  |
| 2    | Bob   | DBMS    | CSE      | Dr. Smith  |
| 2    | Bob   | Networks| CSE      | Dr. Smith  |
+------+-------+---------+----------+------------+

2NF (Remove partial dependencies):
STUDENT: (S_ID, Name, Dept, Dept_Head)
ENROLLMENT: (S_ID, Course)

3NF (Remove transitive dependencies):
STUDENT: (S_ID, Name, Dept)
DEPARTMENT: (Dept, Dept_Head)
ENROLLMENT: (S_ID, Course)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Stop Normalizing</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>3NF is usually sufficient</strong> for most practical applications</li>
        <li><strong>BCNF</strong> when you have overlapping candidate keys</li>
        <li><strong>4NF/5NF</strong> rarely needed in practice</li>
        <li><strong>Consider denormalization</strong> for read-heavy workloads</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Trade-offs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">More Normalization</th>
            <th className="p-3 border">Less Normalization</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Less data redundancy</td>
            <td className="p-3 border">Faster read queries</td>
          </tr>
          <tr>
            <td className="p-3 border">Better data integrity</td>
            <td className="p-3 border">Fewer joins needed</td>
          </tr>
          <tr>
            <td className="p-3 border">More tables and joins</td>
            <td className="p-3 border">More redundancy</td>
          </tr>
          <tr>
            <td className="p-3 border">Complex queries</td>
            <td className="p-3 border">Update anomalies possible</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Higher normal forms include all lower normal form requirements</li>
        <li>3NF/BCNF is typically the target for OLTP databases</li>
        <li>Normalization reduces redundancy and update anomalies</li>
        <li>Over-normalization can hurt query performance</li>
        <li>Consider workload patterns when deciding normalization level</li>
        <li>Data warehouses often use denormalized designs</li>
      </ul>
    </div>
  </div>
);

export default NormalFormsOverview;
