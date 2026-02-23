import React from "react";

const PredictiveParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Predictive Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Predictive parsing</strong> is a special form of recursive descent parsing that
      uses lookahead to determine which production to use. It eliminates backtracking by
      making deterministic decisions based on the current input symbol.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>No backtracking required</li>
      <li>Uses lookahead (typically one token)</li>
      <li>Requires LL(1) grammar</li>
      <li>Can be table-driven or recursive</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Predictive Parser Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Non-recursive Predictive Parser:

┌─────────────────────────────────┐
│         Input Buffer            │
│    a + b * c $                  │
└─────────────────────────────────┘
              ↓
        ┌─────────────┐
        │   Parser    │←──── Parsing Table M
        └─────────────┘
              ↓
        ┌─────────────┐
        │    Stack    │
        │  $, E       │
        └─────────────┘
              ↓
           Output`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Predictive Parsing Algorithm:

1. Initialize stack with $ and start symbol S
2. Let a be the first input symbol
3. Let X be the top stack symbol
4. Repeat:
   If X = a = $:
     Accept (successful parse)
   Else if X = a:
     Pop stack
     Advance input (a = next symbol)
   Else if X is a terminal:
     Error (X ≠ a)
   Else if M[X, a] is empty:
     Error (no production)
   Else if M[X, a] = X → Y₁Y₂...Yₖ:
     Pop X from stack
     Push Yₖ, ..., Y₂, Y₁ (right to left)
     Output production X → Y₁Y₂...Yₖ`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Parse</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E  → TE'
  E' → +TE' | ε
  T  → FT'
  T' → *FT' | ε
  F  → (E) | id

Input: id + id * id $

Stack         Input           Action
──────────────────────────────────────────
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
$             $               Accept`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Grammar Requirements</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For predictive parsing, grammar must be LL(1):

1. No left recursion
   Bad:  A → Aα | β
   Good: A → βA', A' → αA' | ε

2. Left factored
   Bad:  A → αβ | αγ
   Good: A → αA', A' → β | γ

3. For each non-terminal A with productions A → α | β:
   - FIRST(α) ∩ FIRST(β) = ∅
   - If ε ∈ FIRST(α), then FIRST(β) ∩ FOLLOW(A) = ∅`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Predictive parser for E → TE', E' → +TE' | ε

void E() {
    T();
    E_prime();
}

void E_prime() {
    if (lookahead == '+') {
        match('+');
        T();
        E_prime();
    }
    // else: E' → ε (do nothing)
}

void T() {
    F();
    T_prime();
}

void T_prime() {
    if (lookahead == '*') {
        match('*');
        F();
        T_prime();
    }
    // else: T' → ε (do nothing)
}

void F() {
    if (lookahead == '(') {
        match('(');
        E();
        match(')');
    } else if (lookahead == ID) {
        match(ID);
    } else {
        error();
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Backtracking</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Backtracking</th>
            <th className="p-3 border">Predictive</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Decision</td>
            <td className="p-3 border">Try and retry</td>
            <td className="p-3 border">Deterministic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Efficiency</td>
            <td className="p-3 border">Can be exponential</td>
            <td className="p-3 border">Linear O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Grammar</td>
            <td className="p-3 border">Any CFG</td>
            <td className="p-3 border">LL(1) only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookahead</td>
            <td className="p-3 border">Not used</td>
            <td className="p-3 border">Required</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Predictive parsing uses lookahead for deterministic decisions</li>
        <li>No backtracking means linear time complexity</li>
        <li>Requires LL(1) grammar (no left recursion, left factored)</li>
        <li>Can be implemented recursively or with a parsing table</li>
        <li>Stack-based implementation pushes symbols right to left</li>
      </ul>
    </div>
  </div>
);

export default PredictiveParsing;
