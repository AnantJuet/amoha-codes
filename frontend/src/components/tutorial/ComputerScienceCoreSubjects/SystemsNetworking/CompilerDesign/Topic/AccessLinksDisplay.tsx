import React from "react";

const AccessLinksDisplay: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Access Links and Displays ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access Links and Displays
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Access links</strong> (also called <strong>static links</strong>) and <strong>displays</strong>
      are two techniques used to implement access to non-local variables in languages with nested
      procedures and static scoping. Both mechanisms allow a procedure to access variables from
      lexically enclosing scopes, but they differ in their implementation approach and performance
      characteristics.
    </p>

    {/* Access Links */}
    <h2 className="text-3xl font-bold mt-8">Access Links (Static Links)</h2>
    <p className="leading-relaxed">
      An access link is a pointer stored in each activation record that points to the activation
      record of the lexically enclosing procedure:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Each activation record contains one access link</li>
      <li>Points to the most recent activation of the enclosing scope</li>
      <li>Forms a chain following the static nesting structure</li>
      <li>Different from control links which follow the call sequence</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Nested Procedures Example:

procedure A;          // Nesting level 1
var x: integer;
    procedure B;      // Nesting level 2
    var y: integer;
        procedure C;  // Nesting level 3
        var z: integer;
        begin
            z := x + y;  // Access x (level 1) and y (level 2)
        end;
    begin
        B or C calls here
    end;
begin
    A body
end;

Access Link Structure:
+------------------+
| A's Frame        |
| x = 10           |
| Access Link: nil |  <- Top level, no enclosing scope
+------------------+
         ^
         |  (access link)
+------------------+
| B's Frame        |
| y = 20           |
| Access Link -----|-----> A's Frame
+------------------+
         ^
         |  (access link)
+------------------+
| C's Frame        |
| z = ?            |
| Access Link -----|-----> B's Frame
+------------------+`}
      </pre>
    </div>

    {/* Following Access Links */}
    <h2 className="text-3xl font-bold mt-8">Following Access Links</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Accessing Non-Local Variables via Access Links:

From C (level 3), to access:
- z (local):     FP + offset_z           (0 links)
- y (level 2):   [FP + AL] + offset_y    (1 link)
- x (level 1):   [[FP + AL] + AL] + offset_x  (2 links)

Algorithm:
access_variable(name, current_level, def_level):
    temp = FP
    for i = current_level down to def_level + 1:
        temp = temp->access_link  // Follow link
    return temp + offset_of(name)

Generated Code for z := x + y in C:

; Access y (1 level up)
MOV  R1, [FP + ACCESS_LINK]       ; R1 = B's frame
MOV  R2, [R1 + OFFSET_Y]          ; R2 = y

; Access x (2 levels up)
MOV  R1, [FP + ACCESS_LINK]       ; R1 = B's frame
MOV  R1, [R1 + ACCESS_LINK]       ; R1 = A's frame
MOV  R3, [R1 + OFFSET_X]          ; R3 = x

; Compute and store
ADD  R2, R3                       ; R2 = x + y
MOV  [FP + OFFSET_Z], R2          ; z = x + y`}
      </pre>
    </div>

    {/* Setting Access Links */}
    <h2 className="text-3xl font-bold mt-8">Setting Up Access Links</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`When calling a nested procedure, the access link must be set:

Case 1: Caller directly contains callee
        Caller level = n, Callee level = n+1

        Callee's access link = Caller's FP

        Example: A (level 1) calls B (level 2)
        B's access link = A's FP


Case 2: Caller and callee at same or outer level
        Need to find the appropriate enclosing activation

        Example: C (level 3) calls B (level 2)
        B is nested in A, so B's access link should point to A

        Find A by following C's access links:
        C's AL -> B's frame
        B's AL -> A's frame
        Use A's frame as B's access link

Code for setting access link:
    ; Caller at level Lc calls callee at level Lp

    if Lc = Lp - 1:
        ; Caller directly encloses callee
        new_access_link = FP
    else:
        ; Follow caller's access links
        temp = FP
        for i = Lc down to Lp:
            temp = temp->access_link
        new_access_link = temp`}
      </pre>
    </div>

    {/* Displays */}
    <h2 className="text-3xl font-bold mt-8">Displays</h2>
    <p className="leading-relaxed">
      A display is a global array where each entry d[i] contains a pointer to the most recent
      activation record at nesting level i:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Display Array Structure:

d[0] -> Most recent activation at level 0 (global/program)
d[1] -> Most recent activation at level 1
d[2] -> Most recent activation at level 2
d[3] -> Most recent activation at level 3
...

Example with A (level 1), B (level 2), C (level 3):

When C is executing:
+--------+      +------------------+
| d[0]   | ---> | Global/Program   |
+--------+      +------------------+
| d[1]   | ---> | A's Frame        |
+--------+      | x = 10           |
| d[2]   | ---> +------------------+
+--------+      | B's Frame        |
| d[3]   | ---> | y = 20           |
+--------+      +------------------+
                | C's Frame        |
                | z = ?            |
                +------------------+

To access variable at level L:
    address = d[L] + offset_of_variable

This is O(1) regardless of nesting depth!`}
      </pre>
    </div>

    {/* Display Management */}
    <h2 className="text-3xl font-bold mt-8">Display Management</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Display Update Protocol:

On Entry to Procedure at Level L:
1. Save d[L] in the activation record
2. Set d[L] = FP (current frame pointer)

On Exit from Procedure at Level L:
1. Restore d[L] from saved value in activation record

Example: Sequence A -> B -> C -> B (C calls B)

Initial:        After A:       After B:        After C:
d[1] = nil      d[1] = A       d[1] = A        d[1] = A
d[2] = nil      d[2] = nil     d[2] = B        d[2] = B
d[3] = nil      d[3] = nil     d[3] = nil      d[3] = C

C calls B again:
d[2] must point to the NEW B activation!

Before new B:   After new B:
d[2] = old_B    d[2] = new_B
                saved_d2 = old_B (in new B's frame)

After new B returns:
d[2] = old_B (restored)`}
      </pre>
    </div>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Access Links vs Display Comparison</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Access Links</th>
            <th className="p-3 border">Display</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Variable Access Time</td>
            <td className="p-3 border">O(nesting depth diff)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space per Frame</td>
            <td className="p-3 border">1 pointer</td>
            <td className="p-3 border">1 saved display entry</td>
          </tr>
          <tr>
            <td className="p-3 border">Global Space</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Array of max depth</td>
          </tr>
          <tr>
            <td className="p-3 border">Call Overhead</td>
            <td className="p-3 border">Compute & set link</td>
            <td className="p-3 border">Save & update d[L]</td>
          </tr>
          <tr>
            <td className="p-3 border">Return Overhead</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Restore d[L]</td>
          </tr>
          <tr>
            <td className="p-3 border">Deep Nesting</td>
            <td className="p-3 border">Slower access</td>
            <td className="p-3 border">Same speed</td>
          </tr>
          <tr>
            <td className="p-3 border">Many Non-local Access</td>
            <td className="p-3 border">Repeated traversal</td>
            <td className="p-3 border">Direct access</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practical Considerations */}
    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`When to Use Each:

Access Links are better when:
- Nesting depth is shallow (2-3 levels)
- Few non-local variable accesses
- Memory for display array is costly
- Languages: Pascal, Ada

Display is better when:
- Deep nesting is common
- Many non-local variable accesses
- Fast access is critical
- Fixed maximum nesting depth

Modern Practice:
- Most languages avoid deep nesting
- C/C++/Java don't have nested functions
- Closures use different mechanisms
- Displays rarely used in modern compilers

Example Optimization:
If non-local access pattern is known at compile time,
cache the enclosing frame pointer in a register:

; Instead of following links each time
MOV  R4, [FP + AL]           ; Cache A's frame in R4
; Multiple accesses to A's variables
MOV  R1, [R4 + OFFSET_X]     ; Use cached pointer
MOV  R2, [R4 + OFFSET_Y]     ; Use cached pointer`}
      </pre>
    </div>

    {/* Lambda/Closure Implementation */}
    <h2 className="text-3xl font-bold mt-8">Closures and Access Links</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Closures need to capture their environment:

function makeAdder(x) {
    return function(y) {
        return x + y;  // Needs to access x
    };
}

var add5 = makeAdder(5);
add5(3);  // Returns 8

When add5 is called, makeAdder has already returned!
The stack frame for makeAdder is gone.

Solution: Closure = Code + Environment

+------------------+
| Closure Object   |
+------------------+
| Code Pointer ----|----> function(y) { return x + y; }
+------------------+
| Environment -----|----> +----------------+
+------------------+      | x = 5          |
                          +----------------+
                          (Heap-allocated)

The "access link" points to a heap-allocated
environment, not a stack frame!

This is why closures are more complex than
simple nested procedures.`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      If a procedure at nesting level 4 needs to access a variable at level 1, how many access links must be followed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 1</li>
      <li>(B) 3</li>
      <li>(C) 4</li>
      <li>(D) 5</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) 3 - The difference in nesting levels: 4 - 1 = 3 links.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is the time complexity for accessing a non-local variable using a display?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) O(1)</li>
      <li>(B) O(log n)</li>
      <li>(C) O(n)</li>
      <li>(D) O(n^2)</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (A) O(1) - Display provides constant-time access via array indexing.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      When does the display entry d[L] need to be restored?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) When entering a procedure at level L</li>
      <li>(B) When returning from a procedure at level L</li>
      <li>(C) When accessing a variable at level L</li>
      <li>(D) When calling a procedure at level L+1</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) When returning from a procedure at level L - The saved value must be restored on exit.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Access links form a chain through activation records following static nesting</li>
      <li>To access a variable k levels up, follow k access links</li>
      <li>Display provides O(1) access via an array indexed by nesting level</li>
      <li>Display requires save/restore on procedure entry/exit</li>
      <li>Access links are simpler but slower for deep nesting</li>
      <li>Modern languages often avoid deep nesting, reducing need for these mechanisms</li>
      <li>Closures require heap-allocated environments, not just stack-based links</li>
    </ul>

  </div>
);

export default AccessLinksDisplay;
