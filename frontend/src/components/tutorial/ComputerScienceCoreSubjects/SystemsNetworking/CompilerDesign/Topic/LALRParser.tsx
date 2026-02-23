import React from "react";

const LALRParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LALR Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LALR (Look-Ahead LR)</strong> parsing combines the power of CLR with the compact
      table size of SLR. It merges CLR states that have the same LR(0) core, making it the
      most practical LR parsing method.
    </p>

    <h2 className="text-3xl font-bold mt-8">LALR Construction</h2>
    <p className="leading-relaxed">
      LALR can be constructed in two ways:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>From CLR:</strong> Merge states with same LR(0) core</li>
      <li><strong>Directly:</strong> Compute lookaheads without building full CLR</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">State Merging</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLR States with same core are merged:

CLR State I₄:                CLR State I₇:
  [C → c•C, c]                 [C → c•C, $]
  [C → c•C, d]                 [C → •cC, $]
  [C → •cC, c]                 [C → •d, $]
  [C → •cC, d]
  [C → •d, c]
  [C → •d, d]

Same LR(0) core:
  C → c•C
  C → •cC
  C → •d

LALR Merged State I₄₇:
  [C → c•C, c/d/$]
  [C → •cC, c/d/$]
  [C → •d, c/d/$]

Lookaheads are combined (union).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LALR Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">LALR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">States</td>
            <td className="p-3 border">Same as SLR (LR(0) cores)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookaheads</td>
            <td className="p-3 border">More precise than SLR</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Between SLR and CLR</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tools</td>
            <td className="p-3 border">YACC, Bison use LALR</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parser Comparison:

        States      Power         Practical
SLR     Small       Weakest       Limited use
LALR    Small       Strong        Most used
CLR     Large       Strongest     Rarely used

LALR is the sweet spot:
• Same number of states as SLR
• Almost as powerful as CLR
• Handles most programming language grammars`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LALR Conflicts</h2>
    <p className="leading-relaxed">
      LALR can introduce conflicts that CLR doesn't have, due to merging:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Rare case: Reduce-reduce conflict from merging

CLR State I₁: [A → α•, a]    Reduce on a
CLR State I₂: [B → α•, b]    Reduce on b

LALR merged: [A → α•, a], [B → α•, b]

If merging causes a = b in some merged state:
  Reduce-reduce conflict!
  (But this is rare in practice)

Note: Merging never introduces shift-reduce conflicts.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">YACC/Bison Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// YACC/Bison uses LALR(1)
%token NUMBER IDENTIFIER

%%
expr : expr '+' term    { $$ = $1 + $3; }
     | term
     ;

term : term '*' factor  { $$ = $1 * $3; }
     | factor
     ;

factor : '(' expr ')'   { $$ = $2; }
       | NUMBER         { $$ = $1; }
       | IDENTIFIER
       ;
%%

Bison generates LALR(1) parser tables automatically.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LALR merges CLR states with same LR(0) core</li>
        <li>Same state count as SLR, more powerful</li>
        <li>Handles most programming language grammars</li>
        <li>Used by YACC, Bison, and most parser generators</li>
        <li>May introduce reduce-reduce conflicts (rare)</li>
      </ul>
    </div>
  </div>
);

export default LALRParser;
