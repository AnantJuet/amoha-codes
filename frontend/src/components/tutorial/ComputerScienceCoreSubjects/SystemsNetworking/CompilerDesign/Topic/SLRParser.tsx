import React from "react";

const SLRParser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SLR Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>SLR (Simple LR)</strong> parsing is an improvement over LR(0) that uses FOLLOW
      sets to resolve conflicts. It uses LR(0) items to build the parser states but makes
      reduce decisions based on FOLLOW sets.
    </p>

    <h2 className="text-3xl font-bold mt-8">SLR Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SLR Parsing Table Construction:

1. Construct canonical collection of LR(0) item sets
2. For state I with item A → α•aβ:
   If GOTO(I, a) = J, then ACTION[I, a] = shift J
3. For state I with item A → α•:
   For each a in FOLLOW(A), ACTION[I, a] = reduce A → α
4. If S' → S• is in state I:
   ACTION[I, $] = accept
5. For state I and non-terminal A:
   If GOTO(I, A) = J, then GOTO[I, A] = J`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Augmented Grammar:
  (0) S' → E
  (1) E → E + T
  (2) E → T
  (3) T → T * F
  (4) T → F
  (5) F → ( E )
  (6) F → id

FOLLOW Sets:
  FOLLOW(E) = { +, ), $ }
  FOLLOW(T) = { +, *, ), $ }
  FOLLOW(F) = { +, *, ), $ }

State I₀: { S'→•E, E→•E+T, E→•T, T→•T*F, T→•F, F→•(E), F→•id }
State I₁: { S'→E•, E→E•+T }
State I₂: { E→T•, T→T•*F }
...

SLR Table (partial):
┌───────┬──────┬──────┬──────┬──────┬──────┬──────┬───┬───┬───┐
│ State │  id  │   +  │   *  │   (  │   )  │   $  │ E │ T │ F │
├───────┼──────┼──────┼──────┼──────┼──────┼──────┼───┼───┼───┤
│   0   │  s5  │      │      │  s4  │      │      │ 1 │ 2 │ 3 │
│   1   │      │  s6  │      │      │      │ acc  │   │   │   │
│   2   │      │  r2  │  s7  │      │  r2  │  r2  │   │   │   │
│   3   │      │  r4  │  r4  │      │  r4  │  r4  │   │   │   │
│   ...                                                        │
└───────┴──────┴──────┴──────┴──────┴──────┴──────┴───┴───┴───┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SLR vs LR(0)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR(0): Reduce on ALL terminals when item A → α• is in state
       (Often causes conflicts)

SLR:   Reduce only on terminals in FOLLOW(A) when A → α• is in state
       (Fewer conflicts)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SLR Conflicts</h2>
    <p className="leading-relaxed">
      SLR cannot handle all deterministic context-free languages. Conflicts occur when:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Shift-reduce: shift and reduce both possible on same symbol</li>
      <li>Reduce-reduce: multiple reductions possible on same symbol</li>
    </ul>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SLR Conflict Example:
  S → L = R | R
  L → * R | id
  R → L

State with items:
  S → L•=R    (shift on =)
  R → L•      (reduce on FOLLOW(R) which includes =)

Conflict: On '=', both shift and reduce are valid!
SLR cannot parse this grammar (but LALR can).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>SLR uses LR(0) items with FOLLOW sets for reduce decisions</li>
        <li>More powerful than LR(0), fewer conflicts</li>
        <li>Simple to implement, small table size</li>
        <li>Cannot handle some deterministic languages</li>
        <li>LALR and CLR are more powerful alternatives</li>
      </ul>
    </div>
  </div>
);

export default SLRParser;
