import React from "react";

const LRParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LR Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LR parsing</strong> is the most powerful technique for deterministic bottom-up
      parsing. The "L" stands for left-to-right scanning, and "R" for producing a rightmost
      derivation in reverse.
    </p>

    <h2 className="text-3xl font-bold mt-8">LR Parser Components</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Input buffer:</strong> Holds remaining input</li>
      <li><strong>Stack:</strong> Holds states and grammar symbols</li>
      <li><strong>Parsing table:</strong> ACTION and GOTO tables</li>
      <li><strong>Driver routine:</strong> Executes parsing algorithm</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Parsing Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ACTION[state, terminal]:
  - shift s:  Shift and go to state s
  - reduce r: Reduce by production r
  - accept:   Accept the input
  - error:    Report syntax error

GOTO[state, non-terminal]:
  - Returns state to push after a reduction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parsing Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`push state 0 onto stack
a = next input symbol

while true:
    s = top of stack
    if ACTION[s, a] = shift t:
        push a, push t
        a = next input symbol
    else if ACTION[s, a] = reduce A → β:
        pop 2*|β| symbols (symbols and states)
        t = top of stack
        push A, push GOTO[t, A]
        output production A → β
    else if ACTION[s, a] = accept:
        return success
    else:
        error()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR(0) Items</h2>
    <p className="leading-relaxed">
      An LR(0) item is a production with a dot indicating parsing progress.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For production A → XYZ:

A → •XYZ    (about to see X)
A → X•YZ   (seen X, about to see Y)
A → XY•Z   (seen XY, about to see Z)
A → XYZ•   (seen entire RHS, ready to reduce)

Items form the basis of LR parser states.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure and Goto</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLOSURE(I):
  repeat
    for each item A → α•Bβ in I:
      for each production B → γ:
        add B → •γ to I
  until no new items added
  return I

GOTO(I, X):
  J = empty set
  for each item A → α•Xβ in I:
    add A → αX•β to J
  return CLOSURE(J)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parsing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  (1) E → E + T
  (2) E → T
  (3) T → T * F
  (4) T → F
  (5) F → ( E )
  (6) F → id

Input: id + id * id $

Stack         Input           Action
──────────────────────────────────────────
0             id+id*id$       shift 5
0id5          +id*id$         reduce 6 (F→id)
0F3           +id*id$         reduce 4 (T→F)
0T2           +id*id$         reduce 2 (E→T)
0E1           +id*id$         shift 6
0E1+6         id*id$          shift 5
0E1+6id5      *id$            reduce 6 (F→id)
0E1+6F3       *id$            reduce 4 (T→F)
0E1+6T9       *id$            shift 7
0E1+6T9*7     id$             shift 5
0E1+6T9*7id5  $               reduce 6 (F→id)
0E1+6T9*7F10  $               reduce 3 (T→T*F)
0E1+6T9       $               reduce 1 (E→E+T)
0E1           $               accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parser Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Items</th>
            <th className="p-3 border">Table Size</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SLR(1)</td>
            <td className="p-3 border">LR(0) + FOLLOW</td>
            <td className="p-3 border">Small</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LALR(1)</td>
            <td className="p-3 border">Merged LR(1)</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CLR(1)</td>
            <td className="p-3 border">Full LR(1)</td>
            <td className="p-3 border">Large</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LR parsing is the most powerful deterministic bottom-up method</li>
        <li>Uses ACTION and GOTO tables for decisions</li>
        <li>Items track parsing progress within productions</li>
        <li>Closure and Goto build the state machine</li>
        <li>SLR, LALR, CLR differ in conflict resolution power</li>
      </ul>
    </div>
  </div>
);

export default LRParsing;
