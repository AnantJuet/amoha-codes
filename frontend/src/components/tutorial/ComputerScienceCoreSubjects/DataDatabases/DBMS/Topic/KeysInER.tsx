import React from "react";

const KeysInER: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Keys in ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Keys are attributes or set of attributes that uniquely identify an entity within an
      entity set. They play a crucial role in database design for identification and
      establishing relationships.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Keys</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Hierarchy:

Super Key (All possible unique identifiers)
    |
    +-- Candidate Key (Minimal super keys)
            |
            +-- Primary Key (Chosen candidate key)
            |
            +-- Alternate Key (Non-chosen candidate keys)

Other Keys:
    +-- Foreign Key (References primary key of another table)
    +-- Composite Key (Multiple attributes as key)
    +-- Partial Key (For weak entities)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Super Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Super Key:
Any set of attributes that uniquely identifies a tuple.

STUDENT Table: (ID, Name, Email, Phone)

Super Keys:
- {ID}                    -- Unique
- {Email}                 -- Unique
- {ID, Name}              -- Unique (contains ID)
- {ID, Email}             -- Unique
- {ID, Name, Email}       -- Unique
- {ID, Name, Email, Phone} -- All attributes

Note: Super key may contain extra (redundant) attributes.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Candidate Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Candidate Key:
Minimal super key (no redundant attributes).

STUDENT Table: (ID, Name, Email, Phone)

Candidate Keys:
- {ID}     -- Minimal, uniquely identifies
- {Email}  -- Minimal, uniquely identifies

NOT Candidate Keys:
- {ID, Name}  -- Not minimal (ID alone is sufficient)
- {ID, Email} -- Not minimal (redundant)

Properties:
1. Uniqueness: No two tuples have same value
2. Minimality: Cannot remove any attribute`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Primary Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Primary Key:
One candidate key chosen as main identifier.

STUDENT Table:
+--------+---------+------------------+------------+
|   ID   |  Name   |      Email       |   Phone    |
+--------+---------+------------------+------------+
|  101   |  John   | john@email.com   | 1234567890 |
|  102   |  Alice  | alice@email.com  | 0987654321 |
+--------+---------+------------------+------------+
    ^
    |
Primary Key (underlined in ER diagram)

Properties:
- Cannot be NULL
- Must be unique
- Should be stable (rarely changes)
- Preferably a single attribute`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Alternate Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Alternate Key:
Candidate keys not chosen as primary key.

STUDENT:
Candidate Keys: {ID}, {Email}
Primary Key: ID
Alternate Key: Email

Alternate keys can be used for:
- Secondary indexes
- Unique constraints
- Alternative lookup methods`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Foreign Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Foreign Key:
Attribute that references primary key of another table.

STUDENT                          ENROLLMENT
+------+-------+                 +------+------+-------+
|  ID  | Name  |                 | EID  | SID  | Grade |
+------+-------+                 +------+------+-------+
| 101  | John  | <-------------- | E1   | 101  |  A    |
| 102  | Alice |                 | E2   | 102  |  B    |
+------+-------+                 | E3   | 101  |  A    |
    ^                            +------+------+-------+
    |                                     ^
Primary Key                         Foreign Key

Referential Integrity:
- Foreign key must match existing primary key
- Or be NULL (if allowed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">6. Composite Key</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Composite Key:
Primary key made of multiple attributes.

ENROLLMENT Table:
+------------+------------+-------+------+
| Student_ID | Course_ID  | Year  | Grade|
+------------+------------+-------+------+
|    101     |   CS101    | 2024  |  A   |
|    101     |   CS102    | 2024  |  B   |
|    102     |   CS101    | 2024  |  A   |
+------------+------------+-------+------+
      |            |
      +------------+
           |
    Composite Primary Key: (Student_ID, Course_ID)

Neither alone is unique, but together they are.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key Type</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Can be Multiple?</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Super Key</td>
            <td className="p-3 border">Any unique identifier</td>
            <td className="p-3 border">Yes (many)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Candidate Key</td>
            <td className="p-3 border">Minimal super key</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Key</td>
            <td className="p-3 border">Chosen candidate key</td>
            <td className="p-3 border">No (only one)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Alternate Key</td>
            <td className="p-3 border">Non-primary candidates</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Foreign Key</td>
            <td className="p-3 border">References other table</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Super Key ⊇ Candidate Key ⊇ Primary Key</li>
        <li>All candidate keys are super keys, but not vice versa</li>
        <li>Primary key cannot be NULL and must be unique</li>
        <li>Foreign key establishes relationships between tables</li>
        <li>Composite key uses multiple attributes together</li>
      </ul>
    </div>
  </div>
);

export default KeysInER;
