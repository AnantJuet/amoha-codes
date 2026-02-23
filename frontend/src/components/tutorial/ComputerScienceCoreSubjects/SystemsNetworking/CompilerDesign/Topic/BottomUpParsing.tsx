import React from "react";

const BottomUpParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bottom-Up Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Bottom-up parsing</strong> starts with the input tokens (leaves) and builds the
      parse tree upward to the root (start symbol). It constructs a rightmost derivation in
      reverse by repeatedly finding and reducing handles.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Builds parse tree from leaves to root</li>
      <li>Produces rightmost derivation in reverse</li>
      <li>Uses shift-reduce technique</li>
      <li>More powerful than top-down parsing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Shift-Reduce Parsing</h2>
    <p className="leading-relaxed">
      The parser uses a stack and performs two main operations:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Operations:

SHIFT:  Push next input symbol onto stack
REDUCE: Replace handle on stack top with non-terminal
ACCEPT: Parsing complete (stack has start symbol)
ERROR:  No valid action possible

Handle: A substring that matches RHS of a production
        and can be reduced to the LHS`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E → E + T | T
  T → T * F | F
  F → ( E ) | id

Input: id + id * id

Stack           Input           Action
─────────────────────────────────────────
$               id+id*id$       Shift
$id             +id*id$         Reduce F → id
$F              +id*id$         Reduce T → F
$T              +id*id$         Reduce E → T
$E              +id*id$         Shift
$E+             id*id$          Shift
$E+id           *id$            Reduce F → id
$E+F            *id$            Reduce T → F
$E+T            *id$            Shift
$E+T*           id$             Shift
$E+T*id         $               Reduce F → id
$E+T*F          $               Reduce T → T * F
$E+T            $               Reduce E → E + T
$E              $               Accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handle</h2>
    <p className="leading-relaxed">
      A <strong>handle</strong> is a substring that matches the right side of a production
      and whose reduction represents one step in the reverse rightmost derivation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rightmost derivation (forward):
E ⇒ E+T ⇒ E+T*F ⇒ E+T*id ⇒ E+F*id ⇒ E+id*id
  ⇒ T+id*id ⇒ F+id*id ⇒ id+id*id

Handles (in order of reduction):
1. id (reduce to F)
2. F (reduce to T)
3. T (reduce to E)
... and so on`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR Parsing Family</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parser</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Power</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">LR(0)</td>
            <td className="p-3 border">No lookahead</td>
            <td className="p-3 border">Weakest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SLR(1)</td>
            <td className="p-3 border">Uses FOLLOW sets</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LALR(1)</td>
            <td className="p-3 border">Merged LR(1) states</td>
            <td className="p-3 border">Strong</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CLR(1)</td>
            <td className="p-3 border">Full LR(1) items</td>
            <td className="p-3 border">Strongest</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Can handle larger class of grammars than LL</li>
      <li>Handles left recursion naturally</li>
      <li>Most programming language constructs can be parsed</li>
      <li>Efficient table-driven implementation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Bottom-up builds parse tree from leaves to root</li>
        <li>Uses shift and reduce operations</li>
        <li>Handle is the substring being reduced</li>
        <li>Produces reverse rightmost derivation</li>
        <li>LR parsers are the most common bottom-up parsers</li>
      </ul>
    </div>
  </div>
);

export default BottomUpParsing;
