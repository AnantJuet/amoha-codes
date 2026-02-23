import React from "react";

const DomainCalculus: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Domain Relational Calculus
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Domain Relational Calculus (DRC) is a non-procedural query language where
      variables range over individual domain values (attributes) rather than entire
      tuples. It provides an alternative way to express relational queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`General Form:
{ <x1, x2, ..., xn> | P(x1, x2, ..., xn) }

Where:
- x1, x2, ..., xn are domain variables
- P is a predicate involving these variables
- Result: Set of all value combinations satisfying P

Each variable represents a single attribute value,
not an entire tuple.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tuple vs Domain Calculus</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Tuple Calculus</th>
            <th className="p-3 border">Domain Calculus</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Variables</td>
            <td className="p-3 border">Range over tuples</td>
            <td className="p-3 border">Range over domain values</td>
          </tr>
          <tr>
            <td className="p-3 border">Access</td>
            <td className="p-3 border">t.Attribute</td>
            <td className="p-3 border">Individual variable x</td>
          </tr>
          <tr>
            <td className="p-3 border">Membership</td>
            <td className="p-3 border">t ∈ R</td>
            <td className="p-3 border">R(x, y, z)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Membership Notation</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`R(x1, x2, ..., xn) means:
"There exists a tuple in R with values x1, x2, ..., xn"

Example:
Employee(id, name, dept, salary)
means: <id, name, dept, salary> is a tuple in Employee`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Queries</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given Relations:
Employee(ID, Name, Dept, Salary)
Department(DeptID, DeptName, Location)

Query 1: Find all employee names and salaries
{ <n, s> | ∃i, d (Employee(i, n, d, s)) }

Query 2: Find names of employees with salary > 50000
{ <n> | ∃i, d, s (Employee(i, n, d, s) ∧ s > 50000) }

Query 3: Find employees in 'Sales' department
{ <i, n, d, s> | Employee(i, n, d, s) ∧ d = 'Sales' }

Query 4: Find names of employees in departments in 'NYC'
{ <n> | ∃i, d, s, dn, l (
    Employee(i, n, d, s) ∧
    Department(d, dn, l) ∧
    l = 'NYC'
)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quantifiers in DRC</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Existential Quantifier (∃):
∃x (P(x)) - "There exists a value x such that P(x) is true"

Universal Quantifier (∀):
∀x (P(x)) - "For all values x, P(x) is true"

Example: Find employees earning more than ALL in 'HR'
{ <n> | ∃i, d, s (
    Employee(i, n, d, s) ∧
    ∀i2, n2, s2 (
        Employee(i2, n2, 'HR', s2) → s > s2
    )
)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">More Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query 5: Find department names with employees
{ <dn> | ∃d, l (
    Department(d, dn, l) ∧
    ∃i, n, s (Employee(i, n, d, s))
)}

Query 6: Find employees NOT in 'IT' department
{ <i, n, d, s> | Employee(i, n, d, s) ∧ d ≠ 'IT' }

Query 7: Find pairs (emp_name, dept_name)
{ <n, dn> | ∃i, d, s, l (
    Employee(i, n, d, s) ∧
    Department(d, dn, l)
)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">QBE Connection</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Query-By-Example (QBE) is based on Domain Relational Calculus. In QBE,
        users fill in table templates with example values and conditions,
        which are internally translated to DRC expressions.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Variables range over individual domain values</li>
        <li>Uses R(x, y, z) notation for membership</li>
        <li>Equivalent in power to TRC and relational algebra</li>
        <li>QBE is based on domain calculus</li>
        <li>Free variables appear in result</li>
        <li>Bound variables are quantified (∃ or ∀)</li>
      </ul>
    </div>
  </div>
);

export default DomainCalculus;
