import React from "react";

const CLRParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CLR (Canonical LR) Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>CLR (Canonical LR)</strong> parsing, also called LR(1), is the most powerful
      LR parsing method. It uses LR(1) items that include a lookahead symbol to make more
      precise parsing decisions.
    </p>

    <h2 className="text-3xl font-bold mt-8">LR(1) Items</h2>
    <p className="leading-relaxed">
      An LR(1) item is an LR(0) item augmented with a lookahead symbol:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR(1) Item: [A → α•β, a]

where:
• A → αβ is a production
• • marks the parsing position
• a is the lookahead (terminal or $)

The lookahead indicates what symbol should follow
if we reduce using this production.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure for LR(1)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLOSURE(I):
  repeat
    for each item [A → α•Bβ, a] in I:
      for each production B → γ:
        for each terminal b in FIRST(βa):
          add [B → •γ, b] to I
  until no new items added
  return I

Key difference from LR(0):
Lookahead is computed from FIRST(βa), not FOLLOW(B)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CLR Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLR Parsing Table Construction:

1. Start with [S' → •S, $]
2. Compute closure to get initial state I₀
3. For each state I and symbol X:
   GOTO(I, X) = CLOSURE({[A → αX•β, a] | [A → α•Xβ, a] ∈ I})
4. For state I with [A → α•aβ, b]:
   ACTION[I, a] = shift (to GOTO(I, a))
5. For state I with [A → α•, a]:
   ACTION[I, a] = reduce A → α
6. If [S' → S•, $] in state I:
   ACTION[I, $] = accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  S' → S
  S → CC
  C → cC | d

Initial state I₀:
  [S' → •S, $]
  [S → •CC, $]
  [C → •cC, c]
  [C → •cC, d]
  [C → •d, c]
  [C → •d, d]

After GOTO operations, we get states I₀ through I₉.

Notice: Different lookaheads create different items,
even with same LR(0) core. This is why CLR has more states.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CLR vs SLR</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SLR</th>
            <th className="p-3 border">CLR</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Items</td>
            <td className="p-3 border">LR(0)</td>
            <td className="p-3 border">LR(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookahead</td>
            <td className="p-3 border">FOLLOW sets</td>
            <td className="p-3 border">Per-item lookahead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">States</td>
            <td className="p-3 border">Fewer</td>
            <td className="p-3 border">Many more</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Less</td>
            <td className="p-3 border">Most powerful</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolving SLR Conflicts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar that SLR cannot parse:
  S → L = R | R
  L → * R | id
  R → L

SLR conflict state:
  S → L•=R
  R → L•        reduce on FOLLOW(R) = { =, $ }

CLR resolves this:
  [S → L•=R, $]   (shift on =)
  [R → L•, $]     (reduce only on $, not =)

No conflict! CLR can parse this grammar.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CLR uses LR(1) items with per-item lookahead</li>
        <li>Most powerful LR parsing method</li>
        <li>Can parse all deterministic CFLs</li>
        <li>Produces many states (exponentially more than SLR)</li>
        <li>LALR merges states to reduce table size</li>
      </ul>
    </div>
  </div>
);

export default CLRParser;
