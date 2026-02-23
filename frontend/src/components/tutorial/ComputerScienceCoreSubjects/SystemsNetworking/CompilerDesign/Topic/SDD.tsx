import React from "react";

const SDD: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Syntax-Directed Definitions (SDD)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Syntax-Directed Definition (SDD) is a context-free grammar together with attributes
      and rules. Attributes are associated with grammar symbols, and rules are associated
      with productions to compute attribute values during parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Components of SDD</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Attributes</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Values associated with grammar symbols</li>
          <li>Can be of any type (int, string, etc.)</li>
          <li>Terminals have synthesized attributes only</li>
          <li>Non-terminals can have both types</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Semantic Rules</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Define how to compute attributes</li>
          <li>Associated with grammar productions</li>
          <li>Execute during parsing</li>
          <li>Can have side effects</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Attributes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute Type</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Computed From</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Synthesized</td>
            <td className="p-3 border">Bottom-up (↑)</td>
            <td className="p-3 border">Children's attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inherited</td>
            <td className="p-3 border">Top-down (↓)</td>
            <td className="p-3 border">Parent/sibling attributes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Calculator SDD</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Grammar with Semantic Rules:

Production              Semantic Rule
─────────────────────────────────────────────
L → E n                 L.val = E.val
E → E₁ + T              E.val = E₁.val + T.val
E → T                   E.val = T.val
T → T₁ * F              T.val = T₁.val * F.val
T → F                   T.val = F.val
F → ( E )               F.val = E.val
F → digit               F.val = digit.lexval

Example: 3 + 5 * 2
─────────────────────────────────────────────
Parse and compute bottom-up:
digit(3).lexval = 3   →   F.val = 3
                      →   T.val = 3
digit(5).lexval = 5   →   F.val = 5
digit(2).lexval = 2   →   F.val = 2
T * F                 →   T.val = 5 * 2 = 10
E + T                 →   E.val = 3 + 10 = 13

Result: 13
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dependency Graph</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <p className="mb-2">A dependency graph shows how attributes depend on each other:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Nodes represent attribute instances</li>
        <li>Edges represent dependencies</li>
        <li>Must be acyclic for evaluation</li>
        <li>Determines evaluation order</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SDD = CFG + Attributes + Semantic Rules</li>
        <li>Synthesized attributes flow bottom-up</li>
        <li>Inherited attributes flow top-down</li>
        <li>Dependency graph determines evaluation order</li>
        <li>Used for type checking, code generation, etc.</li>
      </ul>
    </div>
  </div>
);

export default SDD;
