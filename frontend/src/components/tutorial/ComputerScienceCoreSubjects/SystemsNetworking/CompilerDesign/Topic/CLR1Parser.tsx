import React from "react";

const CLR1Parser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      CLR(1) Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>CLR(1)</strong> (Canonical LR with 1 lookahead) is the most powerful
      LR parsing technique. It uses LR(1) items that include specific lookahead
      symbols, providing the most precise information for parsing decisions.
    </p>

    <h2 className="text-3xl font-bold mt-8">LR(1) Items</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`An LR(1) item is an LR(0) item plus a lookahead symbol:

  [A → α•β, a]

where:
  A → αβ is a production
  • indicates parsing progress
  a is the lookahead symbol (terminal or $)

The lookahead is used only when β is empty (complete item).
For [A → α•, a], reduce only when input is 'a'.

Example LR(1) items:
  [S → •CC, $]     - expect to see CC, then $
  [C → c•C, c]     - seen c, expect C, lookahead c
  [C → d•, c/d/$]  - ready to reduce, on c, d, or $`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure for LR(1)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLOSURE for LR(1) items:

For each item [A → α•Bβ, a] in I:
  For each production B → γ:
    For each terminal b in FIRST(βa):
      Add [B → •γ, b] to I

The lookahead propagates through FIRST(βa).

Example:
Grammar: S → CC, C → cC | d

CLOSURE({[S → •CC, $]}):
  [S → •CC, $]
  [C → •cC, c]    // FIRST(C$) = {c, d}
  [C → •cC, d]
  [C → •d, c]
  [C → •d, d]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GOTO for LR(1)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`GOTO(I, X) for LR(1) items:

GOTO(I, X) = CLOSURE({[A → αX•β, a] | [A → α•Xβ, a] ∈ I})

Same as LR(0) GOTO, but preserves lookaheads.

Example:
I₀ = {[S → •CC, $], [C → •cC, c/d], [C → •d, c/d]}

GOTO(I₀, c):
  [C → c•C, c/d]
  [C → •cC, c/d]
  [C → •d, c/d]

GOTO(I₀, d):
  [C → d•, c/d]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CLR(1) States Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar: S' → S, S → CC, C → cC | d

I₀: [S' → •S, $]
    [S → •CC, $]
    [C → •cC, c/d]
    [C → •d, c/d]

I₁: [S' → S•, $]

I₂: [S → C•C, $]
    [C → •cC, $]
    [C → •d, $]

I₃: [C → c•C, c/d]
    [C → •cC, c/d]
    [C → •d, c/d]

I₄: [C → d•, c/d]

I₅: [S → CC•, $]

I₆: [C → c•C, $]
    [C → •cC, $]
    [C → •d, $]

I₇: [C → d•, $]

I₈: [C → cC•, c/d]

I₉: [C → cC•, $]

Note: I₃ and I₆ have same core but different lookaheads!
      I₄ and I₇ have same core but different lookaheads!
      I₈ and I₉ have same core but different lookaheads!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CLR(1) Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLR(1) Parsing Table Construction:

1. Build canonical LR(1) item sets

2. For state Iᵢ:
   a) If [A → α•aβ, b] is in Iᵢ and GOTO(Iᵢ, a) = Iⱼ:
      ACTION[i, a] = shift j

   b) If [A → α•, a] is in Iᵢ (A ≠ S'):
      ACTION[i, a] = reduce A → α
      (Note: reduce only on specific lookahead 'a')

   c) If [S' → S•, $] is in Iᵢ:
      ACTION[i, $] = accept

3. GOTO entries:
   If GOTO(Iᵢ, A) = Iⱼ for non-terminal A:
     GOTO[i, A] = j`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CLR(1) vs SLR(1)</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">SLR(1)</th>
            <th className="p-3 border">CLR(1)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Items</td>
            <td className="p-3 border">LR(0) items</td>
            <td className="p-3 border">LR(1) items with lookahead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">States</td>
            <td className="p-3 border">Few (same as LR(0))</td>
            <td className="p-3 border">Many (can be much larger)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reduce</td>
            <td className="p-3 border">On FOLLOW(A)</td>
            <td className="p-3 border">On specific lookahead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Power</td>
            <td className="p-3 border">Weaker</td>
            <td className="p-3 border">Strongest LR</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Explosion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLR(1) State Explosion Problem:

For expression grammar:
  SLR/LALR: ~12 states
  CLR(1):   ~25+ states

States with same LR(0) core but different lookaheads
are kept separate in CLR(1).

Example:
  State A: [C → d•, c/d]  (lookahead c or d)
  State B: [C → d•, $]    (lookahead $)

These are DIFFERENT states in CLR(1) but would be
merged in LALR(1).

This is why LALR(1) is preferred in practice.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use CLR(1)</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Grammar is not LALR(1) but is LR(1)</li>
      <li>Need maximum parsing power</li>
      <li>Table size is not a concern</li>
      <li>Academic study of parsing theory</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CLR(1) uses LR(1) items with explicit lookahead symbols</li>
        <li>Most powerful LR parsing technique</li>
        <li>Can parse all deterministic CFLs</li>
        <li>Produces larger tables than SLR or LALR</li>
        <li>Rarely used in practice due to table size</li>
      </ul>
    </div>
  </div>
);

export default CLR1Parser;
