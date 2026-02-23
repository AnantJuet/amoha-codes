import React from "react";

const SDT: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Syntax-Directed Translation (SDT)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Syntax-Directed Translation (SDT) is a method of translating source code by
      attaching semantic actions to grammar productions. These actions are executed
      during parsing to perform tasks like type checking, intermediate code generation,
      and symbol table management.
    </p>

    <h2 className="text-3xl font-bold mt-8">SDT vs SDD</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SDD</th>
            <th className="p-3 border">SDT</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Actions</td>
            <td className="p-3 border">Only attribute computation</td>
            <td className="p-3 border">Can have side effects</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Placement</td>
            <td className="p-3 border">At end of production</td>
            <td className="p-3 border">Anywhere in production</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">Specification</td>
            <td className="p-3 border">Implementation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Semantic Actions in SDT</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
SDT Notation (actions in curly braces):

E → E₁ + T    { E.val = E₁.val + T.val; print('+'); }
E → T         { E.val = T.val; }
T → T₁ * F    { T.val = T₁.val * F.val; print('*'); }
T → F         { T.val = F.val; }
F → ( E )     { F.val = E.val; }
F → digit     { F.val = digit.lexval; print(digit.lexval); }

Input: 3 + 5 * 2

Postfix Output: 3 5 2 * +
Computed Value: 13
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of SDT Schemes</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">S-Attributed SDT</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Uses only synthesized attributes</li>
          <li>Actions at end of productions</li>
          <li>Evaluated bottom-up</li>
          <li>Easy to implement with LR parsers</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">L-Attributed SDT</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Uses synthesized and inherited</li>
          <li>Actions can be anywhere</li>
          <li>Evaluated left-to-right</li>
          <li>Compatible with LL parsers</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation with Parsing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Bottom-Up Parsing with SDT:
────────────────────────────────────────
1. Parse input using shift-reduce
2. On reduction, execute semantic action
3. Store attribute values on parse stack

Stack-Based Evaluation:
────────────────────────────────────────
Input: 3 + 5 * 2

Step  Stack              Action
────  ─────────────────  ──────────────────
1     3                  shift
2     F(3)               reduce F → digit
3     T(3)               reduce T → F
4     E(3)               reduce E → T
5     E(3) +             shift
6     E(3) + 5           shift
7     E(3) + F(5)        reduce F → digit
8     E(3) + T(5)        reduce T → F
9     E(3) + T(5) *      shift
10    E(3) + T(5) * 2    shift
11    E(3) + T(5) * F(2) reduce F → digit
12    E(3) + T(10)       reduce T → T * F
13    E(13)              reduce E → E + T
      `}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SDT attaches semantic actions to grammar rules</li>
        <li>Actions can perform type checking, code generation</li>
        <li>S-attributed: synthesized only, bottom-up</li>
        <li>L-attributed: left-to-right evaluation</li>
        <li>Implementation uses parse stack for attributes</li>
      </ul>
    </div>
  </div>
);

export default SDT;
