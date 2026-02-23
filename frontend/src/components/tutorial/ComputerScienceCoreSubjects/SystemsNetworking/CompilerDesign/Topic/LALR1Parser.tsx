import React from "react";

const LALR1Parser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LALR(1) Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LALR(1)</strong> (Look-Ahead LR with 1 token) combines the power of CLR(1)
      with the compact table size of SLR(1). It merges CLR(1) states that have the same
      LR(0) core, making it the most practical LR parsing method.
    </p>

    <h2 className="text-3xl font-bold mt-8">LALR(1) Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Two approaches to build LALR(1):

Method 1: From CLR(1)
  1. Build canonical LR(1) item sets
  2. Merge states with same LR(0) core
  3. Combine lookahead sets

Method 2: Direct construction (more efficient)
  1. Build LR(0) item sets
  2. Compute lookaheads separately
  3. Propagate lookaheads through states

Method 2 is used by tools like YACC and Bison.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Merging Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLR(1) States (from S → CC, C → cC | d):

I₃: [C → c•C, c/d]        I₆: [C → c•C, $]
    [C → •cC, c/d]            [C → •cC, $]
    [C → •d, c/d]             [C → •d, $]

I₄: [C → d•, c/d]         I₇: [C → d•, $]

I₈: [C → cC•, c/d]        I₉: [C → cC•, $]

Same LR(0) cores, different lookaheads!

LALR(1) Merged States:
I₃₆: [C → c•C, c/d/$]
     [C → •cC, c/d/$]
     [C → •d, c/d/$]

I₄₇: [C → d•, c/d/$]

I₈₉: [C → cC•, c/d/$]

Lookaheads are unioned together.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LALR(1) vs Other Parsers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">SLR(1)</th>
            <th className="p-3 border">LALR(1)</th>
            <th className="p-3 border">CLR(1)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">States</td>
            <td className="p-3 border">LR(0) count</td>
            <td className="p-3 border">LR(0) count</td>
            <td className="p-3 border">Large</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Weakest</td>
            <td className="p-3 border">Strong</td>
            <td className="p-3 border">Strongest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookahead</td>
            <td className="p-3 border">FOLLOW</td>
            <td className="p-3 border">Specific</td>
            <td className="p-3 border">Specific</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Practical</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Most used</td>
            <td className="p-3 border">Rare</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">LALR(1) Conflicts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LALR(1) can introduce reduce-reduce conflicts:

When merging creates conflict:

CLR(1) State A: [X → α•, a]    reduce on a
CLR(1) State B: [Y → α•, b]    reduce on b

If A and B have same core and are merged:
LALR(1): [X → α•, a], [Y → α•, b]

If a = b (same lookahead after merge):
  Reduce-reduce conflict!
  (Cannot happen in original CLR(1))

This is rare in practice.
Most CLR(1) grammars are also LALR(1).

Note: Merging NEVER creates shift-reduce conflicts
(shift decisions are based on core, not lookahead)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">YACC/Bison Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`YACC and Bison use LALR(1):

%token NUMBER ID
%left '+' '-'
%left '*' '/'

%%
expr : expr '+' expr    { $$ = $1 + $3; }
     | expr '-' expr    { $$ = $1 - $3; }
     | expr '*' expr    { $$ = $1 * $3; }
     | expr '/' expr    { $$ = $1 / $3; }
     | '(' expr ')'     { $$ = $2; }
     | NUMBER           { $$ = $1; }
     ;
%%

Bison reports:
  "State X contains Y shift/reduce conflicts"

Use -v flag for detailed state information.
Conflicts often resolved by %left, %right, %prec.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lookahead Propagation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Efficient LALR(1) construction (direct method):

1. Build LR(0) automaton

2. For each item [A → α•Bβ] in state I:
   If β = ε (B at end):
     Lookahead propagates from A to B
   Else:
     Spontaneous lookahead = FIRST(β)
     If FIRST(β) contains ε:
       Also propagate from A

3. Iteratively propagate until stable

This avoids building full CLR(1) automaton!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why LALR(1) is Preferred</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Same state count as SLR(1) and LR(0)</li>
      <li>Almost as powerful as CLR(1)</li>
      <li>Handles most real programming languages</li>
      <li>Efficient table size and parsing speed</li>
      <li>Well-supported by tools (YACC, Bison, etc.)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LALR(1) merges CLR(1) states with same LR(0) core</li>
        <li>Combines power of CLR(1) with small table size</li>
        <li>May introduce reduce-reduce conflicts (rare)</li>
        <li>Used by YACC, Bison, and most parser generators</li>
        <li>The practical choice for compiler construction</li>
      </ul>
    </div>
  </div>
);

export default LALR1Parser;
