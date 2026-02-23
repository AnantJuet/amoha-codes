import React from "react";

const LR0Parsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LR(0) Items and Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>LR(0) items</strong> are the foundation of all LR parsing techniques. An LR(0)
      item represents a production with a dot indicating how much has been seen so far.
      The collection of LR(0) items forms the basis for constructing the parsing automaton.
    </p>

    <h2 className="text-3xl font-bold mt-8">LR(0) Items</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`An LR(0) item is a production with a dot (•) at some position.

Production: A → XYZ

All LR(0) items for this production:
  A → •XYZ    (Nothing seen yet)
  A → X•YZ    (X has been seen)
  A → XY•Z    (XY has been seen)
  A → XYZ•    (Complete item - ready to reduce)

The dot indicates parsing progress:
  • Before symbol: Symbol expected
  • At end: Ready to reduce by this production`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`CLOSURE(I) where I is a set of items:

repeat
  for each item A → α•Bβ in I:
    for each production B → γ:
      add B → •γ to I (if not already there)
until no more items can be added

Example:
Grammar: E' → E, E → E+T | T, T → T*F | F, F → (E) | id

CLOSURE({E' → •E}):
  E' → •E
  E  → •E+T    (from E' → •E, E → E+T)
  E  → •T      (from E' → •E, E → T)
  T  → •T*F    (from E → •T, T → T*F)
  T  → •F      (from E → •T, T → F)
  F  → •(E)    (from T → •F, F → (E))
  F  → •id     (from T → •F, F → id)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">GOTO Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`GOTO(I, X) where I is an item set and X is a grammar symbol:

GOTO(I, X) = CLOSURE({A → αX•β | A → α•Xβ is in I})

Move dot past X, then take closure.

Example:
I₀ = CLOSURE({E' → •E}) = {E' → •E, E → •E+T, E → •T, ...}

GOTO(I₀, E):
  Items with E after dot: E' → •E, E → •E+T
  Move dot: E' → E•, E → E•+T
  Closure: {E' → E•, E → E•+T}

GOTO(I₀, T):
  Items with T after dot: E → •T, T → •T*F
  Move dot: E → T•, T → T•*F
  Closure: {E → T•, T → T•*F}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Canonical LR(0) Collection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm to build canonical collection:

C = {CLOSURE({S' → •S})}

repeat
  for each item set I in C:
    for each grammar symbol X:
      if GOTO(I, X) is not empty and not in C:
        add GOTO(I, X) to C
until no more sets can be added

This creates the states of the LR(0) automaton.

Example states for expression grammar:
I₀: E' → •E, E → •E+T, E → •T, T → •T*F, T → •F, F → •(E), F → •id
I₁: E' → E•, E → E•+T
I₂: E → T•, T → T•*F
I₃: T → F•
I₄: F → (•E), E → •E+T, E → •T, T → •T*F, T → •F, F → •(E), F → •id
I₅: F → id•
...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR(0) Automaton</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`The LR(0) automaton (DFA):

States: Item sets from canonical collection
Start: I₀ = CLOSURE({S' → •S})
Transitions: GOTO function

        E           +
I₀ ─────────→ I₁ ─────────→ I₆
 │            │
 │ T          │ T
 ↓            ↓
I₂ ────*────→ I₇

Each state represents what the parser has seen.
Transitions show how input changes state.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR(0) Parsing Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Building the LR(0) parsing table:

1. GOTO entries:
   If GOTO(Iᵢ, A) = Iⱼ for non-terminal A:
     GOTO[i, A] = j

2. ACTION entries:
   a) If A → α•aβ is in Iᵢ and GOTO(Iᵢ, a) = Iⱼ:
      ACTION[i, a] = shift j

   b) If A → α• is in Iᵢ (complete item, A ≠ S'):
      ACTION[i, a] = reduce A → α
      for ALL terminals a (including $)

   c) If S' → S• is in Iᵢ:
      ACTION[i, $] = accept

LR(0) Limitation:
  Rule 2b puts reduce in ALL columns.
  This causes conflicts if shift is also valid!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LR(0) Conflicts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LR(0) conflicts occur when a state has:

Shift-Reduce Conflict:
  State contains both A → α•aβ and B → γ•
  Can either shift 'a' or reduce B → γ

  Example state:
    E → T•
    T → T•*F

  On input '*': shift or reduce?

Reduce-Reduce Conflict:
  State contains both A → α• and B → β•
  Can reduce by either production

Most grammars are NOT LR(0)!
Need lookahead to resolve conflicts → SLR, LALR, CLR`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: LR(0) Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simple LR(0) grammar (no conflicts):

S' → S
S  → (S)S | ε

Item sets:
I₀: S' → •S, S → •(S)S, S → •
I₁: S' → S•
I₂: S → (•S)S, S → •(S)S, S → •
I₃: S → (S•)S
I₄: S → (S)•S, S → •(S)S, S → •
I₅: S → (S)S•

This grammar is LR(0) because:
- Complete items appear alone in their states
- No state has both shift and reduce`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LR(0) items show parsing progress with a dot marker</li>
        <li>CLOSURE adds items for non-terminals after the dot</li>
        <li>GOTO moves the dot past a symbol</li>
        <li>Canonical collection forms the parsing automaton states</li>
        <li>LR(0) has no lookahead, causing many conflicts</li>
        <li>LR(0) items are the basis for SLR, LALR, and CLR parsers</li>
      </ul>
    </div>
  </div>
);

export default LR0Parsing;
