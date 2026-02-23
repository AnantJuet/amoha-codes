import React from "react";

const NonLocalData: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Access to Non-Local Data ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access to Non-Local Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Non-local data</strong> refers to variables that are accessible within a procedure
      but are not local to that procedure. In languages with nested procedures or block-structured
      scoping, a procedure can access variables from enclosing scopes. The runtime system must
      provide mechanisms to locate and access these non-local variables, which can be in different
      activation records on the stack.
    </p>

    {/* Types of Variable Access */}
    <h2 className="text-3xl font-bold mt-8">Types of Variable Access</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Access Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Location</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Local</td>
            <td className="p-3 border">Declared in current procedure</td>
            <td className="p-3 border">Current activation record</td>
          </tr>
          <tr>
            <td className="p-3 border">Non-local</td>
            <td className="p-3 border">Declared in enclosing scope</td>
            <td className="p-3 border">Enclosing activation record</td>
          </tr>
          <tr>
            <td className="p-3 border">Global</td>
            <td className="p-3 border">Declared at program level</td>
            <td className="p-3 border">Static data area</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example of Non-Local Access */}
    <h2 className="text-3xl font-bold mt-8">Example of Non-Local Access</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Nested Procedures (Pascal-like syntax):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`program Example;
var g: integer;              { Global variable }

procedure Outer;
var x: integer;              { Local to Outer }

    procedure Middle;
    var y: integer;          { Local to Middle }

        procedure Inner;
        var z: integer;      { Local to Inner }
        begin
            z := 1;          { Local access }
            y := 2;          { Non-local (1 level up) }
            x := 3;          { Non-local (2 levels up) }
            g := 4;          { Global access }
        end;

    begin
        y := 10;
        Inner;
    end;

begin
    x := 100;
    Middle;
end;

begin
    g := 0;
    Outer;
end.`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Nesting Depth Analysis:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Nesting Levels:

Level 0: Program (global scope)
         - g: integer

Level 1: Outer
         - x: integer

Level 2: Middle
         - y: integer

Level 3: Inner
         - z: integer

Access from Inner:
- z: local (level 3)
- y: non-local, 1 level up (level 2)
- x: non-local, 2 levels up (level 1)
- g: global, in static area (level 0)`}
      </pre>
    </div>

    {/* The Problem */}
    <h2 className="text-3xl font-bold mt-8">The Non-Local Access Problem</h2>
    <p className="leading-relaxed">
      When Inner executes and needs to access variable y from Middle, it cannot simply use its
      current frame pointer because y is in Middle's activation record, not Inner's:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack when Inner is executing:

+----------------------------+
| Outer's Activation Record  |
| +------------------------+ |
| | x = 100                | |  <- Inner needs to access x
| +------------------------+ |
+----------------------------+
| Middle's Activation Record |
| +------------------------+ |
| | y = 10                 | |  <- Inner needs to access y
| +------------------------+ |
+----------------------------+
| Inner's Activation Record  |
| +------------------------+ |
| | z = 1                  | |  <- Direct access via FP
| +------------------------+ |
+----------------------------+ <- FP (current)

Problem: How does Inner find y and x?

Using control links (dynamic chain) WON'T work
if calling pattern differs from nesting!`}
      </pre>
    </div>

    {/* Why Control Links Don't Work */}
    <h2 className="text-3xl font-bold mt-8">Why Control Links Are Insufficient</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Consider this scenario:

procedure A;
var x: integer;

    procedure B;
    begin
        x := 1;  { Access x from A }
    end;

    procedure C;
    begin
        B;       { C calls B }
    end;

begin
    C;           { A calls C }
end;

Call sequence: A -> C -> B

Stack:
+----------+
| A        |  <- Contains x
| x = ?    |
+----------+
| C        |  <- Control link to A
+----------+
| B        |  <- Control link to C (NOT A!)
+----------+ <- FP

B's control link points to C, not A!
But B needs to access x from A.

Control link chain: B -> C -> A
Static scope chain: B -> A (B is nested in A, not C)

Solution: Use ACCESS LINKS (static links)`}
      </pre>
    </div>

    {/* Solutions for Non-Local Access */}
    <h2 className="text-3xl font-bold mt-8">Solutions for Non-Local Access</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Access Links (Static Links)</h3>
    <p className="leading-relaxed">
      Each activation record contains an access link pointing to the activation record of the
      lexically enclosing procedure:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack with Access Links:

+----------+      +----------+
| A        | <----|- Access  |
| x = ?    |      | Link     |
+----------+      +----------+
| C        | <----|- Access  |
+----------+      | Link     |
| B        |------+----------+
+----------+ <- FP

B's access link points directly to A's frame!

To access x from B:
1. Follow access link to A's frame
2. Use known offset to find x`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Display</h3>
    <p className="leading-relaxed">
      A display is a global array where entry d[i] points to the most recent activation record
      at nesting depth i:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Display Array:

d[0] -> Global/Program level
d[1] -> Most recent level-1 activation
d[2] -> Most recent level-2 activation
d[3] -> Most recent level-3 activation

Example:
When Inner (level 3) executes:

d[1] -> Outer's frame (has x)
d[2] -> Middle's frame (has y)
d[3] -> Inner's frame (has z)

Access y from Inner:
  address = d[2] + offset_of_y

Advantages:
- O(1) access time for any nesting depth
- Simple addressing

Disadvantages:
- Must save/restore display on each call
- Limited by display size`}
      </pre>
    </div>

    {/* Access Link Implementation */}
    <h2 className="text-3xl font-bold mt-8">Access Link Chain Traversal</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Accessing a non-local variable:

Variable at nesting level L_def
Current procedure at nesting level L_use

Steps = L_use - L_def (number of links to follow)

Example: Inner (level 3) accessing x (level 1)
Steps = 3 - 1 = 2

Code to access x:
    temp = FP                    ; Start at current frame
    temp = [temp + ACCESS_LINK]  ; Follow link (now at Middle)
    temp = [temp + ACCESS_LINK]  ; Follow link (now at Outer)
    value = [temp + OFFSET_X]    ; Load x

Generalized (k levels up):
    temp = FP
    for i = 1 to k:
        temp = [temp + ACCESS_LINK]
    value = [temp + offset]

Cost: O(nesting depth difference)`}
      </pre>
    </div>

    {/* Setting Up Access Links */}
    <h2 className="text-3xl font-bold mt-8">Setting Up Access Links</h2>
    <p className="leading-relaxed">
      When a procedure is called, the callee's access link must be set correctly:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Setting Access Links:

Case 1: Caller's level = Callee's level - 1
        (Caller directly encloses callee)

        Callee's access link = Caller's FP

        Example: Middle calls Inner
        Inner's access link -> Middle's frame


Case 2: Caller's level >= Callee's level
        (Callee is at same or outer level)

        Follow caller's access links
        until reaching level (callee_level - 1)

        Example: If D (level 3) calls B (level 2)
        B's access link should point to level-1 frame

        Find it by: following D's access links
        until reaching level 1, then use that frame

Compiler generates code to:
1. Compute access link value before call
2. Pass it as hidden parameter or store in callee's frame`}
      </pre>
    </div>

    {/* Comparison: Access Links vs Display */}
    <h2 className="text-3xl font-bold mt-8">Access Links vs Display</h2>

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
            <td className="p-3 border">Access Time</td>
            <td className="p-3 border">O(nesting difference)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space per Frame</td>
            <td className="p-3 border">1 pointer</td>
            <td className="p-3 border">1 saved display entry</td>
          </tr>
          <tr>
            <td className="p-3 border">Call Overhead</td>
            <td className="p-3 border">Set access link</td>
            <td className="p-3 border">Save/update display entry</td>
          </tr>
          <tr>
            <td className="p-3 border">Depth Limit</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Display array size</td>
          </tr>
          <tr>
            <td className="p-3 border">Deep Nesting</td>
            <td className="p-3 border">Slower access</td>
            <td className="p-3 border">Same speed</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Languages Without Nested Procedures */}
    <h2 className="text-3xl font-bold mt-8">Languages Without Nested Procedures</h2>
    <p className="leading-relaxed">
      Languages like C and Java (for regular methods) don't have nested procedures, simplifying
      non-local access:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`In C:

int globalVar;           // Global - in static data area

void foo() {
    int localVar;        // Local - in current frame
    // No nested functions in standard C!
    // Only 2 options: local or global
}

No access links needed because:
- All procedures at same nesting level
- Non-local means global (static address)

Java instance methods:
- Access instance variables via 'this' pointer
- 'this' is passed as implicit parameter
- No nested methods (except inner classes)`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What is the purpose of access links (static links)?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To return to the calling procedure</li>
      <li>(B) To access variables in lexically enclosing scopes</li>
      <li>(C) To allocate heap memory</li>
      <li>(D) To implement recursion</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) To access variables in lexically enclosing scopes - Access links follow static nesting.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      If procedure P at nesting level 5 wants to access a variable at level 2, how many access links must be followed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 2</li>
      <li>(B) 3</li>
      <li>(C) 5</li>
      <li>(D) 7</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) 3 - The difference in nesting levels: 5 - 2 = 3 links.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Which approach provides O(1) access time for non-local variables regardless of nesting depth?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Access links</li>
      <li>(B) Control links</li>
      <li>(C) Display</li>
      <li>(D) Global table</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Display - Display provides constant-time access by indexing into an array.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Non-local variables are in enclosing scopes but not the current procedure</li>
      <li>Control links follow dynamic call sequence, not static nesting</li>
      <li>Access links follow static nesting to reach enclosing scope's frames</li>
      <li>Display provides O(1) access but requires save/restore on calls</li>
      <li>Languages without nested procedures don't need access links</li>
      <li>Access time with links is O(nesting depth difference)</li>
    </ul>

  </div>
);

export default NonLocalData;
