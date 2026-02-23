import React from "react";

const Aggregation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Aggregation in ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Aggregation is an abstraction in which a relationship is treated as a higher-level entity.
      It allows relationships to participate in other relationships, enabling more complex
      modeling scenarios.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Aggregation?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Problem: Need to express relationship between a relationship and entity

Scenario: Employees work on projects and managers manage this work

Without Aggregation (Problematic):
+----------+     WORKS_ON    +----------+
| EMPLOYEE |--------<>-------| PROJECT  |
+----------+                  +----------+
                |
                ?  How to connect MANAGER?
                |
          +----------+
          | MANAGER  |
          +----------+

We cannot directly connect MANAGER to the WORKS_ON relationship!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aggregation Solution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`With Aggregation:
Treat the relationship as a higher-level entity

+--------------------------------------------------+
|                  AGGREGATION                      |
|                                                   |
|  +----------+     WORKS_ON    +----------+       |
|  | EMPLOYEE |--------<>-------| PROJECT  |       |
|  +----------+                  +----------+       |
|                                                   |
+--------------------------------------------------+
                      |
                   MANAGES
                      |
               +----------+
               | MANAGER  |
               +----------+

The entire WORKS_ON relationship becomes
an entity that MANAGER can relate to.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aggregation Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Standard Aggregation Notation:

         +------------------------------------+
         |         (Dashed Box)               |
         |                                    |
         |  +------+              +------+   |
         |  |  E1  |-----<R1>-----|  E2  |   |
         |  +------+              +------+   |
         |                                    |
         +----------------+-------------------+
                          |
                        <R2>
                          |
                      +------+
                      |  E3  |
                      +------+

- Dashed box encloses the aggregated relationship
- The aggregation can now participate in R2
- E3 relates to the entire E1-R1-E2 combination`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example: Project Management System

Entities:
- EMPLOYEE: Workers on projects
- PROJECT: Company projects
- MANAGER: People who oversee work

Relationships:
- WORKS_ON: Employee works on Project
- MANAGES: Manager manages the work assignment

+-----------------------------------------------+
|                  ASSIGNMENT                    |
|                                                |
|  (EmpID)  (Hours)         (ProjID) (Budget)   |
|     |        |               |        |       |
|  +----------+    WORKS_ON   +----------+      |
|  | EMPLOYEE |------<>-------| PROJECT  |      |
|  +----------+               +----------+      |
|                                                |
+----------------------+------------------------+
                       |
                    MANAGES
                       |
                    (Since)
                       |
                 +----------+
                 | MANAGER  |
                 +----------+
                 |   (MgrID)|
                 |   (Name) |
                 +----------+

Manager doesn't just manage Employee or Project,
but manages the SPECIFIC ASSIGNMENT (who works on what).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Aggregation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Aggregation When</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Entity relates to a relationship</td>
            <td className="p-3 border">Manager manages employee-project assignments</td>
          </tr>
          <tr>
            <td className="p-3 border">Relationship between relationships</td>
            <td className="p-3 border">Sponsor funds research collaborations</td>
          </tr>
          <tr>
            <td className="p-3 border">Ternary relationship alternative</td>
            <td className="p-3 border">Clearer than 3-way relationship</td>
          </tr>
          <tr>
            <td className="p-3 border">Adding attributes to participation</td>
            <td className="p-3 border">Track meta-information about assignments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aggregation vs Ternary Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Ternary Relationship (Alternative):

+----------+
| EMPLOYEE |---+
+----------+   |
               |
+----------+   +---< MANAGES >
| PROJECT  |---+       |
+----------+           |
                       |
+----------+           |
| MANAGER  |-----------+
+----------+

Aggregation is preferred when:
1. There's a clear binary relationship first
2. Third entity relates to the combination
3. Need to show hierarchy of relationships
4. Better semantic clarity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Aggregation treats a relationship as an entity</li>
        <li>Used when entity needs to relate to a relationship</li>
        <li>Shown with dashed box enclosing the relationship</li>
        <li>Alternative to complex ternary relationships</li>
        <li>Provides clearer semantic meaning in complex scenarios</li>
      </ul>
    </div>
  </div>
);

export default Aggregation;
