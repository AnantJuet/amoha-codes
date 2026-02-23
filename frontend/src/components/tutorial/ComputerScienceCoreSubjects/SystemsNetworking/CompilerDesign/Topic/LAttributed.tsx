import React from "react";

const LAttributed: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      L-Attributed Definitions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An L-Attributed Definition allows both synthesized and inherited attributes,
      with the restriction that inherited attributes can only depend on attributes
      of symbols to the left in the production or inherited attributes of the parent.
    </p>

    <h2 className="text-3xl font-bold mt-8">L-Attributed Rule</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
For production: A → X₁ X₂ X₃ ... Xₙ

Inherited attribute of Xᵢ can depend on:
  1. Inherited attributes of A (parent)
  2. Attributes of X₁, X₂, ..., Xᵢ₋₁ (left siblings)
  3. NOT on Xᵢ₊₁, ..., Xₙ (right siblings)

This allows LEFT-TO-RIGHT evaluation!
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">S-Attributed vs L-Attributed</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">S-Attributed</th>
            <th className="p-3 border">L-Attributed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Attributes</td>
            <td className="p-3 border">Synthesized only</td>
            <td className="p-3 border">Synthesized + Inherited</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Evaluation</td>
            <td className="p-3 border">Bottom-up</td>
            <td className="p-3 border">Left-to-right, depth-first</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parser</td>
            <td className="p-3 border">LR parsers</td>
            <td className="p-3 border">LL parsers, recursive descent</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Less expressive</td>
            <td className="p-3 border">More expressive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Type Declaration</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
L-Attributed Grammar for Type Declarations:

D → T L          { L.inh = T.type }
T → int          { T.type = integer }
T → float        { T.type = float }
L → L₁ , id      { L₁.inh = L.inh; addtype(id, L.inh) }
L → id           { addtype(id, L.inh) }

Attributes:
  T.type    - synthesized (type of declaration)
  L.inh     - inherited (type passed down to identifiers)

Example: "int a, b, c"
──────────────────────────────────────────
1. T → int       : T.type = integer
2. D → T L       : L.inh = integer
3. L → L₁, id(c) : L₁.inh = integer, addtype(c, integer)
4. L → L₂, id(b) : L₂.inh = integer, addtype(b, integer)
5. L → id(a)     : addtype(a, integer)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evaluation Order</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <p className="mb-2 font-semibold">Depth-First Left-to-Right Traversal:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Visit node</li>
        <li>Compute inherited attributes of children (left to right)</li>
        <li>Recursively visit children (left to right)</li>
        <li>Compute synthesized attributes of current node</li>
      </ol>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>L-Attributed allows inherited attributes with restrictions</li>
        <li>Inherited can depend on left siblings and parent only</li>
        <li>Every S-Attributed is also L-Attributed</li>
        <li>Suitable for LL parsers and recursive descent</li>
        <li>Enables passing context down the parse tree</li>
      </ul>
    </div>
  </div>
);

export default LAttributed;
