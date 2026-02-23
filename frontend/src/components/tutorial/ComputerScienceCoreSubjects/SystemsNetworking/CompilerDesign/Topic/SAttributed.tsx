import React from "react";

const SAttributed: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      S-Attributed Definitions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An S-Attributed Definition is a Syntax-Directed Definition that uses only
      synthesized attributes. These attributes are computed in a bottom-up manner,
      making them ideal for implementation with bottom-up (LR) parsers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Only Synthesized Attributes:</strong> No inherited attributes used</li>
        <li><strong>Bottom-Up Evaluation:</strong> Children computed before parents</li>
        <li><strong>LR Parser Compatible:</strong> Easy to implement with shift-reduce</li>
        <li><strong>Post-Order Traversal:</strong> Evaluation follows parse tree order</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Expression Evaluation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
S-Attributed Grammar for Arithmetic:

Production          Semantic Rule
──────────────────────────────────────────
E → E₁ + T          E.val = E₁.val + T.val
E → T               E.val = T.val
T → T₁ * F          T.val = T₁.val * F.val
T → F               T.val = F.val
F → ( E )           F.val = E.val
F → num             F.val = num.lexval

All attributes (val) are SYNTHESIZED
Computed bottom-up during parsing
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Tree Evaluation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Input: 3 * 5 + 2

Parse Tree with Synthesized Attributes:
                    E.val = 17
                   /    \\
              E.val=15   +   T.val=2
                 |            |
              T.val=15     F.val=2
             /    \\          |
         T.val=3  * F.val=5  num(2)
            |         |
         F.val=3   num(5)
            |
         num(3)

Bottom-up computation order:
1. num(3) → F.val=3 → T.val=3
2. num(5) → F.val=5
3. T * F  → T.val=15
4. T → E  → E.val=15
5. num(2) → F.val=2 → T.val=2
6. E + T  → E.val=17
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation with LR Parser</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Stack</th>
            <th className="p-3 border">Value Stack</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border font-mono text-gray-900">num</td>
            <td className="p-3 border font-mono text-gray-900">[3]</td>
            <td className="p-3 border">shift</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border font-mono text-gray-900">F</td>
            <td className="p-3 border font-mono text-gray-900">[3]</td>
            <td className="p-3 border">reduce</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border font-mono text-gray-900">T</td>
            <td className="p-3 border font-mono text-gray-900">[3]</td>
            <td className="p-3 border">reduce</td>
          </tr>
          <tr>
            <td className="p-3 border">...</td>
            <td className="p-3 border font-mono text-gray-900">...</td>
            <td className="p-3 border font-mono text-gray-900">...</td>
            <td className="p-3 border">...</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>S-Attributed uses only synthesized attributes</li>
        <li>Evaluated in bottom-up (post-order) manner</li>
        <li>Perfect for LR parser implementation</li>
        <li>Semantic actions at end of productions</li>
        <li>Stack-based implementation is straightforward</li>
      </ul>
    </div>
  </div>
);

export default SAttributed;
