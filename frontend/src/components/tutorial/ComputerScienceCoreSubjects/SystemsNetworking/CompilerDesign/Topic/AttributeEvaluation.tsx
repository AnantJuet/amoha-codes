import React from "react";

const AttributeEvaluation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attribute Evaluation Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attribute Evaluation refers to the process of computing attribute values in an
      attribute grammar. The evaluation order must respect dependencies between attributes
      to ensure each attribute is computed only after all attributes it depends on are available.
      Various methods exist for evaluating attributes efficiently during or after parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Evaluation Strategies Overview</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Parse Tree Methods</td>
            <td className="p-3 border">Build full parse tree, then evaluate</td>
            <td className="p-3 border">Complex dependencies</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Rule-Based Methods</td>
            <td className="p-3 border">Precompute order at compiler-construction time</td>
            <td className="p-3 border">Static attribute grammars</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Oblivious Methods</td>
            <td className="p-3 border">Fixed traversal strategy (e.g., bottom-up)</td>
            <td className="p-3 border">S-attributed, L-attributed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">On-the-Fly Evaluation</td>
            <td className="p-3 border">Evaluate during parsing</td>
            <td className="p-3 border">Efficient single-pass compilation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dependency Graph Based Evaluation</h2>
    <p className="leading-relaxed">
      Build the dependency graph for the parse tree and use topological sorting to
      determine a valid evaluation order.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dependency Graph Method:

1. Build parse tree for input
2. Construct dependency graph
   - Node for each attribute instance
   - Edge from A to B if B depends on A
3. Topologically sort the graph
4. Evaluate attributes in sorted order

Example: Expression "3 * 5 + 4"

Dependencies:
  digit.lexval(3) --> F.val --> T.val ----\\
  digit.lexval(5) --> F.val --/            \\
                                            --> E.val
  digit.lexval(4) --> F.val --> T.val -----/

Topological Order:
  1. digit.lexval for all digits
  2. F.val for all F nodes (bottom)
  3. T.val for multiplication result
  4. T.val for addition operand
  5. E.val (final result)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">S-Attributed Evaluation (Bottom-Up)</h2>
    <p className="leading-relaxed">
      For S-attributed grammars, synthesized attributes can be evaluated during
      bottom-up parsing using a stack to store attribute values.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`S-Attributed Evaluation with LR Parser:

Parser Stack Structure:
  Each entry: (symbol, attribute_value)

Evaluation During Reduction:
  When reducing A -> X1 X2 ... Xn:
  1. Pop n entries from stack
  2. Compute A's synthesized attributes from Xi's attributes
  3. Push (A, A.attributes) onto stack

Example: Grammar for arithmetic
  E -> E1 + T    { E.val = E1.val + T.val }
  E -> T         { E.val = T.val }
  T -> T1 * F    { T.val = T1.val * F.val }
  T -> F         { T.val = F.val }
  F -> digit     { F.val = digit.lexval }

Input: 2 * 3 + 4

Stack Trace:
Step  Stack (symbol.val)          Action
----  --------------------        ------
1     digit.2                     shift
2     F.2                         reduce F->digit
3     T.2                         reduce T->F
4     T.2 * digit.3               shift, shift
5     T.2 * F.3                   reduce F->digit
6     T.6                         reduce T->T*F (2*3=6)
7     E.6                         reduce E->T
8     E.6 + digit.4               shift, shift
9     E.6 + F.4                   reduce F->digit
10    E.6 + T.4                   reduce T->F
11    E.10                        reduce E->E+T (6+4=10)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">L-Attributed Evaluation (Top-Down)</h2>
    <p className="leading-relaxed">
      L-attributed grammars can be evaluated in a single left-to-right depth-first
      traversal, making them suitable for LL parsing and recursive descent.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`L-Attributed Evaluation Strategy:

For production A -> X1 X2 ... Xn:
1. Compute inherited attributes of X1 (from A or prior context)
2. Recursively evaluate X1
3. Compute inherited attributes of X2 (from A, X1)
4. Recursively evaluate X2
5. ... continue for all Xi
6. Compute synthesized attributes of A from Xi's attributes

Example: Type Declaration
  D -> T L       { L.in = T.type }
  T -> int       { T.type = integer }
  L -> L1, id    { L1.in = L.in; addtype(id, L.in) }
  L -> id        { addtype(id, L.in) }

Input: "int x, y"

Evaluation Order:
1. Enter D
2. Evaluate T -> int: T.type = integer
3. Compute L.in = T.type = integer
4. Enter L -> L1, id
5. Compute L1.in = L.in = integer
6. Enter L1 -> id(x): addtype(x, integer)
7. Return to L: addtype(y, integer)
8. Return to D`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Descent with Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implementing L-Attributed Grammar in Recursive Descent:

// Grammar: E -> T E'
//          E' -> + T E' | epsilon
//          T -> num

// Synthesized attribute: val
// E'.in is inherited, E'.syn is synthesized

function E(): number {
    let tval = T();           // Get T.val
    return Eprime(tval);      // Pass as inherited to E'
}

function Eprime(inherited: number): number {
    if (lookahead === '+') {
        match('+');
        let tval = T();
        let newInherited = inherited + tval;  // Compute new value
        return Eprime(newInherited);          // Continue with E'
    } else {
        return inherited;     // E' -> epsilon: return accumulated
    }
}

function T(): number {
    if (lookahead is number) {
        let val = parseNumber();
        match(number);
        return val;
    }
    error();
}

// Input: "3 + 5 + 2"
// Trace:
// E() calls T() -> 3
// Eprime(3) sees '+', calls T() -> 5
// Eprime(3+5=8) sees '+', calls T() -> 2
// Eprime(8+2=10) returns 10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Schemes</h2>
    <p className="leading-relaxed">
      Translation schemes embed semantic actions within production rules at specific
      positions to control when actions are executed during parsing.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Translation Scheme Notation:

Actions in curly braces placed within production:
  A -> X { action1 } Y { action2 } Z { action3 }

Action execution order matches position in rule.

Example: Postfix Notation Generator
  E -> T R
  R -> + T { print('+') } R | - T { print('-') } R | epsilon
  T -> num { print(num.val) }

Input: "5 + 3 - 2"

Output: 5 3 + 2 -

Trace:
1. E -> T R
2. T -> num(5): print("5") -> Output: "5"
3. R -> + T { print('+') } R
4. T -> num(3): print("3") -> Output: "5 3"
5. { print('+') } -> Output: "5 3 +"
6. R -> - T { print('-') } R
7. T -> num(2): print("2") -> Output: "5 3 + 2"
8. { print('-') } -> Output: "5 3 + 2 -"
9. R -> epsilon`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evaluation Order Constraints</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Grammar Class</th>
            <th className="p-3 border">Evaluation Order</th>
            <th className="p-3 border">Parser Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">S-Attributed</td>
            <td className="p-3 border">Post-order (bottom-up)</td>
            <td className="p-3 border">LR parsers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">L-Attributed</td>
            <td className="p-3 border">Pre-order + In-order (depth-first L-R)</td>
            <td className="p-3 border">LL parsers, recursive descent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">General</td>
            <td className="p-3 border">Topological sort of dependency graph</td>
            <td className="p-3 border">Multi-pass evaluation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Circular Dependencies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Circular Dependency Detection:

An attribute grammar is circular if there exists
some parse tree where the dependency graph has a cycle.

Example of Circular Grammar (Invalid):
  A -> B      { A.s = B.i }
  B -> C      { B.i = A.s; C.i = B.s }

This creates cycle: A.s -> B.i -> A.s

Detection Methods:
1. Build dependency graph for all possible parse trees
2. Check for cycles in any dependency graph
3. Use static analysis on grammar rules

Well-formed attribute grammars must be non-circular
to guarantee evaluation terminates.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Pass Evaluation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When Single Pass is Insufficient:

Some grammars require multiple passes over the parse tree.

Example: Forward References in Declarations

  program:
    x = foo();      // Uses foo before declaration
    ...
    function foo() { ... }  // Declaration comes later

Solution - Two Pass Evaluation:
  Pass 1: Collect all declarations (synthesized)
          Build symbol table with function names

  Pass 2: Check usage (inherited from symbol table)
          Verify all identifiers are declared

Implementation:
  Pass 1: Depth-first, collect declarations bottom-up
  Pass 2: Depth-first, check references top-down`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Attribute evaluation respects dependencies between attribute instances</li>
        <li>S-attributed grammars evaluate bottom-up during LR parsing</li>
        <li>L-attributed grammars evaluate in left-to-right depth-first order</li>
        <li>Dependency graphs determine valid evaluation orders via topological sort</li>
        <li>Recursive descent naturally supports L-attributed evaluation</li>
        <li>Translation schemes control action execution during parsing</li>
        <li>Circular dependencies make evaluation impossible - grammars must be non-circular</li>
        <li>Complex dependencies may require multiple passes over the parse tree</li>
      </ul>
    </div>
  </div>
);

export default AttributeEvaluation;
