import React from "react";

const LL1ParsingTable: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      LL(1) Parsing Table
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The <strong>LL(1) parsing table</strong> is a two-dimensional array that guides
      the predictive parser. It maps each (non-terminal, terminal) pair to the production
      to be used, enabling deterministic parsing decisions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Table Construction Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`LL(1) Parsing Table Construction:

For each production A → α:
  1. For each terminal a in FIRST(α):
     Add A → α to M[A, a]

  2. If ε ∈ FIRST(α):
     For each terminal b in FOLLOW(A):
       Add A → α to M[A, b]
     If $ ∈ FOLLOW(A):
       Add A → α to M[A, $]

All undefined entries are error entries.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Expression Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E  → TE'
  E' → +TE' | ε
  T  → FT'
  T' → *FT' | ε
  F  → (E) | id

FIRST Sets:
  FIRST(E)  = FIRST(T) = FIRST(F) = { (, id }
  FIRST(E') = { +, ε }
  FIRST(T') = { *, ε }

FOLLOW Sets:
  FOLLOW(E)  = { ), $ }
  FOLLOW(E') = { ), $ }
  FOLLOW(T)  = { +, ), $ }
  FOLLOW(T') = { +, ), $ }
  FOLLOW(F)  = { *, +, ), $ }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parsing Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border"></th>
            <th className="p-2 border">id</th>
            <th className="p-2 border">+</th>
            <th className="p-2 border">*</th>
            <th className="p-2 border">(</th>
            <th className="p-2 border">)</th>
            <th className="p-2 border">$</th>
          </tr>
        </thead>
        <tbody className="bg-white font-mono text-gray-900">
          <tr>
            <td className="p-2 border font-semibold">E</td>
            <td className="p-2 border">{`E→TE'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`E→TE'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">{`E'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`E'→+TE'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`E'→ε`}</td>
            <td className="p-2 border">{`E'→ε`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">T</td>
            <td className="p-2 border">{`T→FT'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`T→FT'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">{`T'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`T'→ε`}</td>
            <td className="p-2 border">{`T'→*FT'`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`T'→ε`}</td>
            <td className="p-2 border">{`T'→ε`}</td>
          </tr>
          <tr>
            <td className="p-2 border font-semibold">F</td>
            <td className="p-2 border">{`F→id`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 border">{`F→(E)`}</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Construction Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step-by-step construction:

Production E → TE':
  FIRST(TE') = { (, id }
  M[E, (] = E → TE'
  M[E, id] = E → TE'

Production E' → +TE':
  FIRST(+TE') = { + }
  M[E', +] = E' → +TE'

Production E' → ε:
  ε ∈ FIRST(ε)
  FOLLOW(E') = { ), $ }
  M[E', )] = E' → ε
  M[E', $] = E' → ε

Production T → FT':
  FIRST(FT') = { (, id }
  M[T, (] = T → FT'
  M[T, id] = T → FT'

Production T' → *FT':
  FIRST(*FT') = { * }
  M[T', *] = T' → *FT'

Production T' → ε:
  FOLLOW(T') = { +, ), $ }
  M[T', +] = T' → ε
  M[T', )] = T' → ε
  M[T', $] = T' → ε

Production F → (E):
  FIRST((E)) = { ( }
  M[F, (] = F → (E)

Production F → id:
  FIRST(id) = { id }
  M[F, id] = F → id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">LL(1) Grammar Verification</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A grammar is LL(1) if and only if:

For every pair of productions A → α | β:

1. FIRST(α) ∩ FIRST(β) = ∅
   (No two alternatives start with same terminal)

2. At most one of α, β derives ε

3. If β ⇒* ε, then FIRST(α) ∩ FOLLOW(A) = ∅
   (If one alternative is nullable, the other
    doesn't start with anything in FOLLOW)

The table has NO multiply-defined entries
if and only if the grammar is LL(1).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conflict Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Non-LL(1) Grammar:
  S → iEtS | iEtSeS | a
  E → b

FIRST(iEtS) = { i }
FIRST(iEtSeS) = { i }

M[S, i] = S → iEtS    // Conflict!
M[S, i] = S → iEtSeS  // Multiple entries

This is the "dangling else" ambiguity.
Grammar is NOT LL(1).

Resolution: Use additional rules or
different parsing technique.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using the Parsing Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm for parsing with table:

Input: String w, Parsing table M
Output: Leftmost derivation or error

push($)
push(S)
a = first symbol of w

while (stack not empty) {
    X = top of stack

    if (X is terminal) {
        if (X == a) {
            pop()
            a = next symbol
        } else {
            error()
        }
    } else if (X == $) {
        if (a == $) accept()
        else error()
    } else {  // X is non-terminal
        if (M[X, a] == X → Y₁...Yₖ) {
            pop()
            push(Yₖ...Y₁)  // right to left
            output(X → Y₁...Yₖ)
        } else {
            error()
        }
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Parsing table M[A, a] maps non-terminal A and terminal a to production</li>
        <li>Built using FIRST and FOLLOW sets</li>
        <li>No multiply-defined entries means grammar is LL(1)</li>
        <li>Empty entries indicate syntax errors</li>
        <li>Enables efficient O(n) deterministic parsing</li>
      </ul>
    </div>
  </div>
);

export default LL1ParsingTable;
