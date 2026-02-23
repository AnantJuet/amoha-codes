import React from "react";

const RelationalCalculus: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Relational Calculus</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Relational Calculus is a non-procedural query language that describes what data
      to retrieve without specifying how to retrieve it. It uses mathematical logic
      to express queries and is equivalent in power to relational algebra.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algebra vs Calculus</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational Algebra vs Relational Calculus:

Relational Algebra (Procedural):
- HOW to get the result
- Sequence of operations
- σ, π, ⋈, ∪, ∩, -

Relational Calculus (Non-Procedural):
- WHAT result is needed
- Declarative specification
- Based on predicate logic

Both are equivalent in expressive power!
SQL is based on relational calculus.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Relational Calculus</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two Types:

1. Tuple Relational Calculus (TRC)
   - Variables represent tuples
   - {t | P(t)} - set of tuples satisfying P

2. Domain Relational Calculus (DRC)
   - Variables represent domain values (attributes)
   - {<x1, x2, ...> | P(x1, x2, ...)}

Both are equivalent in power.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tuple Relational Calculus</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TRC Syntax: {t | P(t)}

t = tuple variable
P(t) = predicate (condition)

Notation:
t ∈ R     - t is a tuple in relation R
t.A       - attribute A of tuple t
t[A]      - alternative notation

Example: Find all employees in IT department
{t | t ∈ Employee ∧ t.dept = 'IT'}

Example: Find names of employees earning > 50000
{t.name | t ∈ Employee ∧ t.salary > 50000}

Example: Find employees in IT earning > 50000
{t | t ∈ Employee ∧ t.dept = 'IT' ∧ t.salary > 50000}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TRC with Quantifiers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Universal Quantifier: ∀ (for all)
Existential Quantifier: ∃ (there exists)

Example: Employees who work in some department
{t | t ∈ Employee ∧ ∃d (d ∈ Department ∧ t.dept_id = d.dept_id)}

Example: Departments with at least one employee
{d | d ∈ Department ∧ ∃e (e ∈ Employee ∧ e.dept_id = d.dept_id)}

Example: Employees who earn more than ALL employees in HR
{t | t ∈ Employee ∧ ∀h (h ∈ Employee ∧ h.dept = 'HR' → t.salary > h.salary)}

Implication: P → Q is equivalent to ¬P ∨ Q`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domain Relational Calculus</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DRC Syntax: {<x1, x2, ..., xn> | P(x1, x2, ..., xn)}

Variables represent attribute values, not tuples.

Example: Find all IT employee names
{<n> | ∃i ∃s (Employee(i, n, 'IT', s))}

Where Employee(id, name, dept, salary)

Example: Find name and salary of IT employees
{<n, s> | ∃i (Employee(i, n, 'IT', s))}

Example: Find employees earning more than Bob
{<n, s> | ∃i ∃d (Employee(i, n, d, s) ∧
         ∃s2 (Employee(_, 'Bob', _, s2) ∧ s > s2))}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query: Find IT employees earning > 50000

SQL:
SELECT * FROM Employee
WHERE dept = 'IT' AND salary > 50000;

Relational Algebra:
σ dept='IT' ∧ salary>50000 (Employee)

TRC:
{t | t ∈ Employee ∧ t.dept = 'IT' ∧ t.salary > 50000}

DRC:
{<i, n, d, s> | Employee(i, n, d, s) ∧ d = 'IT' ∧ s > 50000}


Query: Find names of employees in departments located in NYC

SQL:
SELECT e.name FROM Employee e
JOIN Department d ON e.dept_id = d.dept_id
WHERE d.location = 'NYC';

TRC:
{t.name | t ∈ Employee ∧ ∃d (d ∈ Department ∧
         t.dept_id = d.dept_id ∧ d.location = 'NYC')}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safe Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Safety in Relational Calculus:

Unsafe expression: Can produce infinite results

Example (Unsafe):
{t | ¬(t ∈ Employee)}
= All tuples NOT in Employee = Infinite!

Safe Expression Rules:
1. Domain of each variable must be finite
2. Result tuples must come from database relations
3. Use bounded quantifiers

Safe version:
{t | t ∈ Person ∧ ¬(t ∈ Employee)}
= Persons who are not employees (finite)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Relational calculus is declarative (what, not how)</li>
        <li>TRC: Variables are tuples</li>
        <li>DRC: Variables are domain values</li>
        <li>Equivalent to relational algebra</li>
        <li>Must use safe expressions for finite results</li>
      </ul>
    </div>
  </div>
);

export default RelationalCalculus;
