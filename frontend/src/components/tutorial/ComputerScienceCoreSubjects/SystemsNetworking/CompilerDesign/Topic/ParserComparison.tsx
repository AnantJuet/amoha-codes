import React from "react";

const ParserComparison: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Parser Comparison
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Different parsing techniques have different strengths and are suited for different
      types of grammars. This comparison helps you choose the right parser for your needs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Grammar Class Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar Classes (from most restrictive to most general):

    LL(1) ⊂ LL(k) ⊂ LL(*)
       ↓
    LR(0) ⊂ SLR(1) ⊂ LALR(1) ⊂ LR(1)
       ↓              ↓
    Unambiguous CFGs

All deterministic CFLs can be parsed by LR(1).
Most are also LALR(1).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detailed Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Parser</th>
            <th className="p-2 border">Direction</th>
            <th className="p-2 border">Derivation</th>
            <th className="p-2 border">Power</th>
            <th className="p-2 border">Table Size</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border font-semibold">LL(1)</td>
            <td className="p-2 border">Top-down</td>
            <td className="p-2 border">Leftmost</td>
            <td className="p-2 border">Limited</td>
            <td className="p-2 border">Small</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">LR(0)</td>
            <td className="p-2 border">Bottom-up</td>
            <td className="p-2 border">Rightmost</td>
            <td className="p-2 border">Very limited</td>
            <td className="p-2 border">Small</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">SLR(1)</td>
            <td className="p-2 border">Bottom-up</td>
            <td className="p-2 border">Rightmost</td>
            <td className="p-2 border">Medium</td>
            <td className="p-2 border">Small</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">LALR(1)</td>
            <td className="p-2 border">Bottom-up</td>
            <td className="p-2 border">Rightmost</td>
            <td className="p-2 border">Strong</td>
            <td className="p-2 border">Small</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">CLR(1)</td>
            <td className="p-2 border">Bottom-up</td>
            <td className="p-2 border">Rightmost</td>
            <td className="p-2 border">Strongest</td>
            <td className="p-2 border">Large</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Recommended Parser</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Hand-written parser</td>
            <td className="p-3 border">Recursive Descent / LL(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Parser generator (YACC/Bison)</td>
            <td className="p-3 border">LALR(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Maximum power needed</td>
            <td className="p-3 border">GLR or Earley</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple expressions</td>
            <td className="p-3 border">Operator Precedence</td>
          </tr>
          <tr>
            <td className="p-3 border">Modern parser combinator</td>
            <td className="p-3 border">PEG / Packrat</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Top-Down vs Bottom-Up</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Top-Down (LL)</th>
            <th className="p-3 border">Bottom-Up (LR)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Easy to write by hand</td>
            <td className="p-3 border">Usually generated</td>
          </tr>
          <tr>
            <td className="p-3 border">Cannot handle left recursion</td>
            <td className="p-3 border">Handles left recursion</td>
          </tr>
          <tr>
            <td className="p-3 border">Good error messages</td>
            <td className="p-3 border">Error recovery harder</td>
          </tr>
          <tr>
            <td className="p-3 border">Less powerful</td>
            <td className="p-3 border">More powerful</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Counts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Typical state counts for expression grammar:

Parser    States
─────────────────
LR(0)     ~10
SLR(1)    ~10 (same as LR(0))
LALR(1)   ~10 (same as LR(0))
CLR(1)    ~25+ (can be much larger)

CLR states can explode; LALR merges them back.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LL(1) is simple but limited; good for hand-written parsers</li>
        <li>LALR(1) is the practical choice for generated parsers</li>
        <li>CLR(1) is most powerful but has large tables</li>
        <li>Most programming languages can be parsed with LALR(1)</li>
        <li>Choose based on power needed and implementation method</li>
      </ul>
    </div>
  </div>
);

export default ParserComparison;
