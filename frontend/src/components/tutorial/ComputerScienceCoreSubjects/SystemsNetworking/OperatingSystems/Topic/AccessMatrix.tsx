import React from 'react';

const AccessMatrix: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access Matrix Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Access Matrix is a fundamental security model that represents the protection
      state of a system. It provides a framework for specifying and controlling access
      rights that subjects (users, processes) have over objects (files, devices, memory).
      This model, introduced by Butler Lampson in 1971, forms the theoretical foundation
      for access control in modern operating systems.
    </p>

    {/* Basic Concepts */}
    <h2 className="text-3xl font-bold mt-8">Basic Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Subject</td>
            <td className="p-3 border">Active entity that accesses objects</td>
            <td className="p-3 border">Users, processes, programs</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Object</td>
            <td className="p-3 border">Passive entity being accessed</td>
            <td className="p-3 border">Files, devices, memory, processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Access Right</td>
            <td className="p-3 border">Permission to perform an operation</td>
            <td className="p-3 border">Read, write, execute, delete, own</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Domain</td>
            <td className="p-3 border">Set of (object, rights) pairs</td>
            <td className="p-3 border">A row in the access matrix</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Access Matrix Structure */}
    <h2 className="text-3xl font-bold mt-8">Access Matrix Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Access Matrix:
===============================================================================

The access matrix A is a 2D matrix where:
- Rows represent subjects (domains/users/processes)
- Columns represent objects (files/devices/resources)
- A[i,j] contains the access rights that subject i has over object j

                              OBJECTS
               ┌──────────────────────────────────────────────────────┐
               │   File1    File2    File3   Printer   Memory   CPU  │
          ┌────┼──────────────────────────────────────────────────────┤
          │    │                                                      │
 S   User1│ D1 │   r,w       r        -       print       -       -  │
 U        │    │                                                      │
 B   ─────┼────┼──────────────────────────────────────────────────────┤
 J        │    │                                                      │
 E   User2│ D2 │    r       r,w      r,w,x    print       -       -  │
 C        │    │                                                      │
 T   ─────┼────┼──────────────────────────────────────────────────────┤
 S        │    │                                                      │
     Admin│ D3 │   r,w,x    r,w,x    r,w,x    print     r,w,x   alloc│
          │    │                                                      │
          └────┴──────────────────────────────────────────────────────┘

Legend:
r = read      w = write     x = execute
print = print             alloc = allocate
- = no access (empty cell)


Interpretation:
─────────────────────────────────────────────────────────────────────────────
A[User1, File1] = {read, write}    → User1 can read and write File1
A[User1, File3] = {}               → User1 has no access to File3
A[Admin, CPU] = {alloc}            → Admin can allocate CPU time
`}
      </pre>
    </div>

    {/* Detailed Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Access Matrix Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Real-World Example - University File Server:
===============================================================================

Subjects: Professor, TA, Student, Admin
Objects: grades.txt, lecture.pdf, exam.doc, Printer, Server

                          OBJECTS
         ┌─────────────────────────────────────────────────────────────┐
         │  grades.txt   lecture.pdf   exam.doc    Printer    Server  │
    ┌────┼─────────────────────────────────────────────────────────────┤
    │    │                                                             │
    │Prof│   r,w,d          r,w          r,w,d       print      -     │
    │    │   owner         owner        owner                          │
    │────┼─────────────────────────────────────────────────────────────┤
    │    │                                                             │
    │ TA │    r             r,w           r          print      -     │
    │    │                                                             │
    │────┼─────────────────────────────────────────────────────────────┤
    │    │                                                             │
    │Stud│    -              r            -          print      -     │
    │    │                                                             │
    │────┼─────────────────────────────────────────────────────────────┤
    │    │                                                             │
    │Admn│   r,w,d         r,w,d        r,w,d       print    admin   │
    │    │  (backup)       (backup)    (backup)              (full)   │
    │    │                                                             │
    └────┴─────────────────────────────────────────────────────────────┘

Legend:
r = read    w = write    d = delete    owner = full control
admin = administrative access (start, stop, configure)


Access Decision:
─────────────────────────────────────────────────────────────────────────────
Student tries to read grades.txt:
  1. Find A[Student, grades.txt]
  2. Result: {} (empty set)
  3. Decision: DENY

TA tries to modify lecture.pdf:
  1. Find A[TA, lecture.pdf]
  2. Result: {r, w}
  3. 'w' (write) is in the set
  4. Decision: ALLOW
`}
      </pre>
    </div>

    {/* Domains as Objects */}
    <h2 className="text-3xl font-bold mt-8">Domains as Objects: The Switch Right</h2>
    <p className="leading-relaxed">
      Domains themselves can be treated as objects in the access matrix. This allows
      controlled switching between domains, implementing the ability to change
      privileges in a controlled manner.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Access Matrix with Domain Switching:
===============================================================================

                            OBJECTS                      DOMAINS
         ┌─────────────────────────────────────┬────────────────────────┐
         │   File1     File2     Printer       │    D1      D2      D3  │
    ┌────┼─────────────────────────────────────┼────────────────────────┤
    │    │                                     │                        │
    │ D1 │    r,w        r        print        │     -     switch    -  │
    │    │                                     │                        │
D   │────┼─────────────────────────────────────┼────────────────────────┤
O   │    │                                     │                        │
M   │ D2 │     r        r,w       print        │     -       -     switch│
A   │    │                                     │                        │
I   │────┼─────────────────────────────────────┼────────────────────────┤
N   │    │                                     │                        │
S   │ D3 │    r,w       r,w,x     print        │  switch    -       -   │
    │    │                                     │   (own)                 │
    └────┴─────────────────────────────────────┴────────────────────────┘


Interpretation:
─────────────────────────────────────────────────────────────────────────────

D1 can switch to D2:
┌─────────┐             ┌─────────┐
│   D1    │  ──────────►│   D2    │
│ (User)  │   switch    │ (Sudo)  │
└─────────┘             └─────────┘

D2 can switch to D3:
┌─────────┐             ┌─────────┐
│   D2    │  ──────────►│   D3    │
│ (Sudo)  │   switch    │ (Root)  │
└─────────┘             └─────────┘

D3 has 'own' on D1, meaning D3 can modify D1's rights:
- Admin (D3) can grant/revoke User (D1) permissions
`}
      </pre>
    </div>

    {/* Access Rights Operations */}
    <h2 className="text-3xl font-bold mt-8">Special Access Rights</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Right</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Effect</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-bold">Owner (*)</td>
            <td className="p-3 border">Full control over object</td>
            <td className="p-3 border">Can modify column (grant rights to others)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Copy (c)</td>
            <td className="p-3 border">Can copy right to other subjects</td>
            <td className="p-3 border">Transfer rights within column</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Control</td>
            <td className="p-3 border">Can modify rights in a domain</td>
            <td className="p-3 border">Modify row (change domain's rights)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Switch</td>
            <td className="p-3 border">Can switch to this domain</td>
            <td className="p-3 border">Domain transition allowed</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Copy Right Example */}
    <h2 className="text-3xl font-bold mt-8">Copy Right Mechanism</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Copy Right Variations:
===============================================================================

1. Right without copy flag (r):
   - Subject can use the right
   - Cannot grant it to others

2. Right with copy flag (r*):
   - Subject can use the right
   - Can grant right to others (without copy)

3. Right with transfer (r+):
   - Subject can transfer right to others
   - Loses the right after transfer


Example - Sharing a Document:
─────────────────────────────────────────────────────────────────────────────

Initial State:
                │   doc.txt   │
         ┌──────┼─────────────┤
         │ Alice│   r,w,*     │  Alice owns doc.txt
         │──────┼─────────────┤
         │  Bob │      -      │  Bob has no access
         └──────┴─────────────┘

Alice grants read with copy to Bob:
                │   doc.txt   │
         ┌──────┼─────────────┤
         │ Alice│   r,w,*     │  Alice still owns
         │──────┼─────────────┤
         │  Bob │    r*       │  Bob can read AND grant read
         └──────┴─────────────┘

Bob grants read to Carol (without copy):
                │   doc.txt   │
         ┌──────┼─────────────┤
         │ Alice│   r,w,*     │
         │──────┼─────────────┤
         │  Bob │    r*       │
         │──────┼─────────────┤
         │Carol │     r       │  Carol can read, but NOT grant
         └──────┴─────────────┘
`}
      </pre>
    </div>

    {/* State Transitions */}
    <h2 className="text-3xl font-bold mt-8">Access Matrix Operations</h2>
    <p className="leading-relaxed">
      The access matrix can be modified through a set of primitive operations. These
      operations define how the protection state of the system can change.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Primitive Operations:
===============================================================================

1. CREATE object O
   - Adds new column for object O
   - Creator becomes owner

2. DELETE object O
   - Removes column for object O
   - Requires owner right

3. CREATE domain D
   - Adds new row for domain D

4. DELETE domain D
   - Removes row for domain D

5. ENTER right R into A[D, O]
   - Adds right R to cell A[D, O]
   - Requires owner or copy right

6. DELETE right R from A[D, O]
   - Removes right R from cell A[D, O]
   - Requires owner or control right


Example - File Creation:
─────────────────────────────────────────────────────────────────────────────

Before:                          After CREATE "report.txt" by User1:
      │ File1 │                        │ File1 │ report.txt │
┌─────┼───────┤                  ┌─────┼───────┼────────────┤
│User1│  r,w  │                  │User1│  r,w  │   r,w,*    │
│─────┼───────┤                  │─────┼───────┼────────────┤
│User2│   r   │                  │User2│   r   │     -      │
└─────┴───────┘                  └─────┴───────┴────────────┘

User1 automatically gets owner right (*) on newly created file
`}
      </pre>
    </div>

    {/* Security Analysis */}
    <h2 className="text-3xl font-bold mt-8">Safety Problem</h2>
    <p className="leading-relaxed">
      The safety problem asks: given an initial access matrix and a set of commands,
      is there a sequence of operations that would grant a specific right to an
      unauthorized subject? This is generally undecidable for arbitrary systems.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Safety Problem:
===============================================================================

Question: Can subject S ever gain right R to object O?

Initial State:
                │  Secret.doc  │
         ┌──────┼──────────────┤
         │ Alice│    r,w,*     │
         │──────┼──────────────┤
         │  Bob │      -       │  Can Bob ever read Secret.doc?
         │──────┼──────────────┤
         │ Eve  │      -       │  Can Eve ever read Secret.doc?
         └──────┴──────────────┘

Analysis:
─────────────────────────────────────────────────────────────────────────────
- If Alice can grant rights → Bob could potentially get access
- If Alice cannot grant rights → Access is impossible
- The safety problem is undecidable in general
- Restricted systems (mono-operational) can be analyzed

Restricted Safety (Decidable):
- Only single operations per command
- Analysis possible in polynomial time

General Safety (Undecidable):
- Arbitrary command sequences
- Equivalent to Turing machine halting problem
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Access matrix is a theoretical model for representing access control</li>
      <li>Rows represent subjects (domains), columns represent objects</li>
      <li>Each cell contains the set of access rights</li>
      <li>Domains themselves can be objects, enabling controlled domain switching</li>
      <li>Special rights include owner, copy, control, and switch</li>
      <li>The safety problem (can a right leak?) is generally undecidable</li>
      <li>Real implementations use ACLs or capability lists (discussed next)</li>
    </ul>
  </div>
);

export default AccessMatrix;
