import React from "react";

const SuperCandidateKey: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Super Key and Candidate Key
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Super keys and candidate keys are essential concepts in the relational model for
      uniquely identifying tuples in a relation. Understanding the difference between them
      is crucial for proper database design.
    </p>

    <h2 className="text-3xl font-bold mt-8">Super Key</h2>
    <p className="leading-relaxed mt-2">
      A super key is any set of one or more attributes that can uniquely identify a tuple
      in a relation. It may contain additional attributes that are not strictly necessary
      for uniqueness.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Super Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Uniquely identifies each tuple in the relation</li>
        <li>May contain redundant attributes</li>
        <li>Every relation has at least one super key (the set of all attributes)</li>
        <li>Any superset of a super key is also a super key</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Candidate Key</h2>
    <p className="leading-relaxed mt-2">
      A candidate key is a minimal super key - a super key from which no attribute can
      be removed without losing the uniqueness property. It is an irreducible identifier.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Properties of Candidate Key:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Uniquely identifies each tuple (like super key)</li>
        <li>Minimal - no subset of it can uniquely identify tuples</li>
        <li>No NULL values allowed in candidate key attributes</li>
        <li>A relation can have multiple candidate keys</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Table:
+--------+--------+------------------+--------+
| Emp_ID | SSN    | Email            | Name   |
+--------+--------+------------------+--------+
| E001   | 111-11 | john@company.com | John   |
| E002   | 222-22 | jane@company.com | Jane   |
| E003   | 333-33 | bob@company.com  | Bob    |
+--------+--------+------------------+--------+

Super Keys (examples):
- {Emp_ID}                    <- Also candidate key
- {SSN}                       <- Also candidate key
- {Email}                     <- Also candidate key
- {Emp_ID, Name}              <- Super key only (Name is redundant)
- {Emp_ID, SSN}               <- Super key only
- {Emp_ID, SSN, Email}        <- Super key only
- {Emp_ID, SSN, Email, Name}  <- Super key only (all attributes)

Candidate Keys:
- {Emp_ID}   <- Minimal, uniquely identifies tuples
- {SSN}      <- Minimal, uniquely identifies tuples
- {Email}    <- Minimal, uniquely identifies tuples

Note: {Name} is NOT a candidate key (not unique - multiple Johns possible)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Candidate Keys Using Functional Dependencies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given: R(A, B, C, D, E)
Functional Dependencies:
  A -> B
  BC -> D
  D -> E

Step 1: Identify attribute types
- Appears only on LEFT: A, B, C (never on right alone)
- Appears only on RIGHT: E (never determines anything)
- Appears on BOTH: B, C, D

Step 2: Start with attributes only on left
- A must be in every candidate key
- C must be in every candidate key (never on right)

Step 3: Check closure of {A, C}
- {A, C}+ = {A, C, B, D, E} = All attributes!

Therefore: {A, C} is the only candidate key`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Super Key vs Candidate Key</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Super Key</th>
            <th className="p-3 border">Candidate Key</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Uniqueness</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Minimality</td>
            <td className="p-3 border">No (may have redundant attrs)</td>
            <td className="p-3 border">Yes (no redundant attrs)</td>
          </tr>
          <tr>
            <td className="p-3 border">Count per relation</td>
            <td className="p-3 border">Many (often infinite)</td>
            <td className="p-3 border">One or more (finite)</td>
          </tr>
          <tr>
            <td className="p-3 border">Relationship</td>
            <td className="p-3 border">Superset of candidate keys</td>
            <td className="p-3 border">Subset of super keys</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Every candidate key is a super key, but not vice versa</li>
        <li>Candidate keys are minimal super keys</li>
        <li>Primary key is chosen from candidate keys</li>
        <li>Use attribute closure to verify candidate keys</li>
        <li>Attributes that never appear on right side of FDs must be in every candidate key</li>
        <li>Understanding keys is essential for normalization</li>
      </ul>
    </div>
  </div>
);

export default SuperCandidateKey;
