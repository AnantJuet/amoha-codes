import React from "react";

const LL1Parser: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LL(1) Parser
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An <strong>LL(1) parser</strong> is a table-driven predictive parser that reads input
      Left to right, produces a Leftmost derivation, and uses 1 symbol of lookahead. It is
      one of the most practical top-down parsing techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">LL(1) Meaning</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>First L:</strong> Scan input Left to right</li>
      <li><strong>Second L:</strong> Produce Leftmost derivation</li>
      <li><strong>(1):</strong> Use 1 lookahead symbol</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Parsing Table Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm to construct LL(1) parsing table:

For each production A → α:
  1. For each terminal a in FIRST(α):
     Add A → α to M[A, a]

  2. If ε ∈ FIRST(α):
     For each terminal b in FOLLOW(A):
       Add A → α to M[A, b]

  3. If ε ∈ FIRST(α) and $ ∈ FOLLOW(A):
     Add A → α to M[A, $]

Empty entries indicate syntax errors.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Parsing Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E  → T E'
  E' → + T E' | ε
  T  → F T'
  T' → * F T' | ε
  F  → ( E ) | id

FIRST and FOLLOW:
  FIRST(E) = FIRST(T) = FIRST(F) = { (, id }
  FIRST(E') = { +, ε }
  FIRST(T') = { *, ε }
  FOLLOW(E) = FOLLOW(E') = { ), $ }
  FOLLOW(T) = FOLLOW(T') = { +, ), $ }
  FOLLOW(F) = { *, +, ), $ }

LL(1) Parsing Table M:
┌─────┬──────────┬──────────┬──────┬──────┬──────┐
│     │    id    │    +     │   *  │   (  │   )  │   $  │
├─────┼──────────┼──────────┼──────┼──────┼──────┤
│  E  │  E→TE'   │          │      │ E→TE'│      │      │
│  E' │          │ E'→+TE'  │      │      │ E'→ε │ E'→ε │
│  T  │  T→FT'   │          │      │ T→FT'│      │      │
│  T' │          │  T'→ε    │T'→*FT'│     │ T'→ε │ T'→ε │
│  F  │  F→id    │          │      │F→(E) │      │      │
└─────┴──────────┴──────────┴──────┴──────┴──────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LL(1) Parsing Algorithm:

push $ onto stack
push start symbol onto stack
a = next input symbol

while stack not empty:
    X = top of stack
    if X is terminal:
        if X == a:
            pop X
            a = next input symbol
        else:
            error()
    else:  // X is non-terminal
        if M[X, a] = X → Y₁Y₂...Yₖ:
            pop X
            push Yₖ, Yₖ₋₁, ..., Y₁ (in reverse)
        else:
            error()

if a == $ and stack empty:
    accept()
else:
    error()`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: id + id * id $

Stack         Input           Action
─────────────────────────────────────────
$E            id+id*id$       E → TE'
$E'T          id+id*id$       T → FT'
$E'T'F        id+id*id$       F → id
$E'T'id       id+id*id$       match id
$E'T'         +id*id$         T' → ε
$E'           +id*id$         E' → +TE'
$E'T+         +id*id$         match +
$E'T          id*id$          T → FT'
$E'T'F        id*id$          F → id
$E'T'id       id*id$          match id
$E'T'         *id$            T' → *FT'
$E'T'F*       *id$            match *
$E'T'F        id$             F → id
$E'T'id       id$             match id
$E'T'         $               T' → ε
$E'           $               E' → ε
$             $               Accept!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LL(1) Grammar Conditions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A grammar is LL(1) if and only if:

For every pair of productions A → α | β:

1. FIRST(α) ∩ FIRST(β) = ∅
   (No ambiguity in choosing production)

2. At most one of α, β derives ε

3. If β ⇒* ε, then FIRST(α) ∩ FOLLOW(A) = ∅
   (No ambiguity when nullable)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>LL(1) uses parsing table indexed by non-terminal and lookahead</li>
        <li>Table constructed from FIRST and FOLLOW sets</li>
        <li>Stack-based algorithm processes input left to right</li>
        <li>No conflicts means grammar is LL(1)</li>
        <li>Grammar must be non-left-recursive and left-factored</li>
      </ul>
    </div>
  </div>
);

export default LL1Parser;
