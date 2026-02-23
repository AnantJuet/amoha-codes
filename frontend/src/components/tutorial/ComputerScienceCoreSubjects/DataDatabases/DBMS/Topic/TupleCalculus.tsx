import React from "react";

const TupleCalculus: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tuple Relational Calculus
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Tuple Relational Calculus (TRC) is a non-procedural query language where queries
      describe what data to retrieve rather than how to retrieve it. It uses tuple
      variables that range over tuples of a relation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`General Form:
{ t | P(t) }

Where:
- t is a tuple variable
- P(t) is a predicate (condition) involving t
- Result: Set of all tuples t that satisfy P(t)

Alternative notation:
{ t.A1, t.A2, ... | P(t) }
- Returns only specified attributes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tuple Variables and Membership</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>t ∈ R:</strong> Tuple variable t ranges over relation R</li>
        <li><strong>t.A:</strong> Value of attribute A in tuple t</li>
        <li><strong>t[i]:</strong> Value of i-th attribute in tuple t</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Queries</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given Relations:
Employee(ID, Name, Dept, Salary)
Department(DeptID, DeptName, Location)

Query 1: Find all employees with salary > 50000
{ t | t ∈ Employee ∧ t.Salary > 50000 }

Query 2: Find names of employees in 'Sales' department
{ t.Name | t ∈ Employee ∧ t.Dept = 'Sales' }

Query 3: Find employees in departments located in 'NYC'
{ t | t ∈ Employee ∧
      ∃d (d ∈ Department ∧ d.DeptID = t.Dept ∧ d.Location = 'NYC') }

Query 4: Find employees who earn more than some employee in 'IT'
{ t | t ∈ Employee ∧
      ∃s (s ∈ Employee ∧ s.Dept = 'IT' ∧ t.Salary > s.Salary) }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quantifiers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Quantifier</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Existential</td>
            <td className="p-3 border font-mono text-gray-900">∃t (P(t))</td>
            <td className="p-3 border">There exists at least one tuple t satisfying P</td>
          </tr>
          <tr>
            <td className="p-3 border">Universal</td>
            <td className="p-3 border font-mono text-gray-900">∀t (P(t))</td>
            <td className="p-3 border">For all tuples t, P is satisfied</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Logical Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`∧ (AND)  - Conjunction
∨ (OR)   - Disjunction
¬ (NOT)  - Negation
→ (IMPLIES) - Implication
↔ (IFF)  - If and only if

Implication equivalence:
P → Q ≡ ¬P ∨ Q`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advanced Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Query 5: Find employees who earn MORE THAN ALL employees in 'HR'
{ t | t ∈ Employee ∧
      ∀s (s ∈ Employee ∧ s.Dept = 'HR' → t.Salary > s.Salary) }

Query 6: Find departments with at least one employee
{ d | d ∈ Department ∧
      ∃e (e ∈ Employee ∧ e.Dept = d.DeptID) }

Query 7: Find employees NOT in 'IT' department
{ t | t ∈ Employee ∧ ¬(t.Dept = 'IT') }
or equivalently:
{ t | t ∈ Employee ∧ t.Dept ≠ 'IT' }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safe Expressions</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed mb-2">
        A TRC expression is safe if it produces a finite result:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>All tuple variables must be bound to finite relations</li>
        <li>Avoid queries like {"{ t | ¬(t ∈ R) }"} which return infinite results</li>
        <li>Domain independence ensures safety</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>TRC is non-procedural (declarative)</li>
        <li>Tuple variables range over entire tuples</li>
        <li>Uses existential (∃) and universal (∀) quantifiers</li>
        <li>Equivalent in expressive power to relational algebra</li>
        <li>SQL is based on TRC concepts</li>
        <li>Only safe expressions guarantee finite results</li>
      </ul>
    </div>
  </div>
);

export default TupleCalculus;
