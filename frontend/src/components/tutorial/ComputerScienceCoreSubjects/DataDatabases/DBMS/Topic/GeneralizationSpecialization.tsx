import React from "react";

const GeneralizationSpecialization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Generalization and Specialization</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Generalization and Specialization are fundamental concepts in EER modeling that
      allow hierarchical representation of entities. They enable the modeling of IS-A
      relationships between entity types.
    </p>

    <h2 className="text-3xl font-bold mt-8">Specialization (Top-Down)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Specialization Process:

Step 1: Start with superclass
            +----------+
            | EMPLOYEE |
            +----------+

Step 2: Identify distinguishing characteristics
    - Some employees are engineers
    - Some employees are managers
    - Some employees are secretaries

Step 3: Create subclasses
            +----------+
            | EMPLOYEE |
            +----d-----+
              /  |  \\
             /   |   \\
    +--------+ +--------+ +-----------+
    |ENGINEER| |MANAGER | | SECRETARY |
    +--------+ +--------+ +-----------+

Step 4: Add specific attributes
    ENGINEER: EngineerType, Certification
    MANAGER: Budget, Department
    SECRETARY: TypingSpeed, Skills`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Generalization (Bottom-Up)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Generalization Process:

Step 1: Start with specific entity types
    +-------+   +-------+   +---------+
    |  CAR  |   | TRUCK |   |MOTORCYCLE|
    +-------+   +-------+   +---------+
    |LicPlate|  |LicPlate|  |LicPlate |
    |Make   |   |Make    |   |Make     |
    |Model  |   |Model   |   |Model    |
    |NumDoors|  |Tonnage |   |EngineCC |
    +-------+   +-------+   +---------+

Step 2: Identify common attributes
    Common: LicensePlate, Make, Model

Step 3: Create generalized superclass
                +---------+
                | VEHICLE |
                +---------+
                |LicPlate |
                |Make     |
                |Model    |
                +----d----+
                 /   |   \\
    +-------+ +-------+ +---------+
    |  CAR  | | TRUCK | |MOTORCYCLE|
    +-------+ +-------+ +---------+
    |NumDoors| |Tonnage| |EngineCC |
    +-------+ +-------+ +---------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Specialization</th>
            <th className="p-3 border">Generalization</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Direction</td>
            <td className="p-3 border">Top-Down (Superclass → Subclass)</td>
            <td className="p-3 border">Bottom-Up (Subclass → Superclass)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Process</td>
            <td className="p-3 border">Divide into subgroups</td>
            <td className="p-3 border">Combine into supergroup</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Focus</td>
            <td className="p-3 border">Distinguishing features</td>
            <td className="p-3 border">Common features</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attributes</td>
            <td className="p-3 border">Add specific attributes to subclasses</td>
            <td className="p-3 border">Move common attributes to superclass</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">When you have a general concept</td>
            <td className="p-3 border">When you have similar entities</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Specialization Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Attribute-Defined Specialization:
   Based on a defining attribute value

   +----------+
   | EMPLOYEE |
   +----------+
   | JobType  |  <-- Defining attribute
   +----d-----+
       |
   JobType = ?
       |
   +---+---+---+
   |       |       |
JobType= JobType= JobType=
'ENG'   'MGR'    'SEC'
   |       |       |
+------+ +------+ +------+
| ENG  | | MGR  | | SEC  |
+------+ +------+ +------+


2. User-Defined Specialization:
   No defining attribute, membership defined by user

   +----------+
   | PROJECT  |
   +----d-----+
      /    \\
+--------+ +--------+
| FUNDED | |INTERNAL|
+--------+ +--------+
(Membership determined by user)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multiple Inheritance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multiple Inheritance (Shared Subclass):

    +----------+        +----------+
    | EMPLOYEE |        | STUDENT  |
    +-----+----+        +----+-----+
          |                  |
          +------+    +------+
                 |    |
             +----------+
             |STUDENT_  |
             |EMPLOYEE  |  <-- Shared subclass
             +----------+

STUDENT_EMPLOYEE inherits from both:
- EMPLOYEE attributes (EmpID, Salary, etc.)
- STUDENT attributes (StudentID, GPA, etc.)

Also called: Category or Union Type`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Specialization Hierarchy vs Lattice</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Hierarchy: Each subclass has only one superclass
           (Single Inheritance)

         PERSON
        /      \\
   EMPLOYEE  STUDENT

Lattice: Subclass can have multiple superclasses
         (Multiple Inheritance)

    EMPLOYEE    STUDENT
          \\    /
       STUDENT_EMP

    ENGINEER   MANAGER
          \\    /
       ENG_MGR`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Specialization: General → Specific (top-down)</li>
        <li>Generalization: Specific → General (bottom-up)</li>
        <li>Both result in IS-A hierarchies</li>
        <li>Subclasses inherit all attributes from superclass</li>
        <li>Can be attribute-defined or user-defined</li>
        <li>Multiple inheritance creates lattice structures</li>
      </ul>
    </div>
  </div>
);

export default GeneralizationSpecialization;
