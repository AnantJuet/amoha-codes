import React from "react";

const ShiftReduceParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shift-Reduce Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Shift-reduce parsing</strong> is a bottom-up parsing technique that builds
      the parse tree from leaves to root. It uses a stack to hold grammar symbols and
      applies two main operations: shift (push) and reduce (apply production in reverse).
    </p>

    <h2 className="text-3xl font-bold mt-8">Four Actions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Shift</td>
            <td className="p-3 border">Push current input symbol onto stack, advance input</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reduce</td>
            <td className="p-3 border">Replace symbols on stack with non-terminal (apply production backward)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Accept</td>
            <td className="p-3 border">Parsing complete successfully</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error</td>
            <td className="p-3 border">Syntax error detected</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A "handle" is a substring that matches the RHS of a production
and whose reduction represents one step in a rightmost derivation.

Definition:
  If S ⇒*rm αAw ⇒rm αβw, then β is a handle of αβw

Example:
  Grammar: E → E + T | T,  T → T * F | F,  F → (E) | id

  Rightmost derivation:
    E ⇒ E + T ⇒ E + T * F ⇒ E + T * id

  In "E + T * id", the handle is "id" (reduces to F)

Finding the handle is the key challenge in shift-reduce parsing!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E → E + T | T
  T → T * F | F
  F → ( E ) | id

Input: id + id * id $

Stack         Input           Action
──────────────────────────────────────────────────
$             id+id*id$       Shift
$id           +id*id$         Reduce F → id
$F            +id*id$         Reduce T → F
$T            +id*id$         Reduce E → T
$E            +id*id$         Shift
$E+           id*id$          Shift
$E+id         *id$            Reduce F → id
$E+F          *id$            Reduce T → F
$E+T          *id$            Shift
$E+T*         id$             Shift
$E+T*id       $               Reduce F → id
$E+T*F        $               Reduce T → T * F
$E+T          $               Reduce E → E + T
$E            $               Accept

Productions used (bottom-up): F→id, T→F, E→T, F→id, T→F, F→id, T→T*F, E→E+T`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viable Prefix</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A viable prefix is a prefix of a right sentential form
that can appear on the stack during parsing.

Properties:
1. Does not extend beyond the rightmost handle
2. Can always be extended to form a valid sentence
3. The set of viable prefixes forms a regular language

Example (from above parse):
Viable prefixes: $, $id, $F, $T, $E, $E+, $E+id, ...

The parser maintains that the stack always contains
a viable prefix. If not, there's a syntax error.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflicts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Two types of conflicts in shift-reduce parsing:

1. Shift-Reduce Conflict:
   Parser can't decide whether to shift or reduce

   Example: Dangling else
     stmt → if expr then stmt
          | if expr then stmt else stmt

   Stack: ...if expr then stmt    Input: else...

   Option 1: Reduce (if expr then stmt)
   Option 2: Shift else

2. Reduce-Reduce Conflict:
   Parser can't decide which production to reduce by

   Example:
     A → α
     B → α

   Stack: ...α    Input: ...

   Option 1: Reduce A → α
   Option 2: Reduce B → α`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stack Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic Shift-Reduce Parser:

void parse() {
    push($);

    while (true) {
        if (canReduce()) {
            reduce();  // Apply production backward
        } else if (canShift()) {
            shift();   // Push next input symbol
        } else if (stack == "$S" && input == "$") {
            accept();
            return;
        } else {
            error();
            return;
        }
    }
}

void shift() {
    push(nextInput());
    advanceInput();
}

void reduce(Production p) {
    // p: A → β
    pop |β| symbols from stack
    push(A);
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parsing Overview</h2>
    <p className="leading-relaxed">
      LR parsers are the most powerful shift-reduce parsers. They use a parsing table
      to make deterministic decisions:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>LR(0):</strong> No lookahead</li>
      <li><strong>SLR(1):</strong> Uses FOLLOW sets for lookahead</li>
      <li><strong>LALR(1):</strong> Lookahead LR (used by YACC)</li>
      <li><strong>CLR(1):</strong> Canonical LR (most powerful)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Shift-reduce is a bottom-up parsing technique</li>
        <li>Four actions: shift, reduce, accept, error</li>
        <li>Handle is the key substring to identify for reduction</li>
        <li>Stack always contains a viable prefix</li>
        <li>Conflicts (shift-reduce, reduce-reduce) must be resolved</li>
      </ul>
    </div>
  </div>
);

export default ShiftReduceParsing;
