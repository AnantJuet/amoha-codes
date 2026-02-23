import React from "react";

const AmbiguousGrammars: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ambiguous Grammars
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A grammar is <strong>ambiguous</strong> if there exists a string that can have more than
      one parse tree (or equivalently, more than one leftmost derivation or rightmost derivation).
      Ambiguity can lead to incorrect interpretation of programs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A CFG G = (V, T, P, S) is ambiguous if:
∃ string w ∈ L(G) that has two or more:
  • Different parse trees, OR
  • Different leftmost derivations, OR
  • Different rightmost derivations

Otherwise, the grammar is unambiguous.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Ambiguous Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar: E → E + E | E * E | id

String: id + id * id

Parse Tree 1:          Parse Tree 2:
      E                      E
    / | \\                  / | \\
   E  +  E                E  *  E
   |    /|\\              /|\\    |
  id   E * E            E + E  id
       |   |            |   |
      id  id           id  id

Tree 1: (id + id) * id  - Addition first
Tree 2: id + (id * id)  - Multiplication first

Different semantics! Which is correct?`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Ambiguity is a Problem</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Different parse trees may have different meanings</li>
      <li>Parser cannot decide which derivation to use</li>
      <li>Program behavior becomes unpredictable</li>
      <li>Cannot generate correct code</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Removing Ambiguity</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Enforce Precedence</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Ambiguous:
  E → E + E | E * E | id

Unambiguous (with precedence):
  E → E + T | T
  T → T * F | F
  F → id

Now * has higher precedence than +
"id + id * id" has only one parse tree`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Enforce Associativity</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Ambiguous for "id - id - id":
  E → E - E | id

Left-associative (correct):
  E → E - T | T
  T → id
Produces: (id - id) - id

Right-associative:
  E → T - E | T
  T → id
Produces: id - (id - id)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Dangling Else Problem</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Ambiguous:
  S → if E then S | if E then S else S | other

"if E1 then if E2 then S1 else S2"

Parse 1: if E1 then (if E2 then S1 else S2)
Parse 2: if E1 then (if E2 then S1) else S2

Solution - match else with nearest unmatched if:
  S → M | U
  M → if E then M else M | other
  U → if E then S | if E then M else U`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inherent Ambiguity</h2>
    <p className="leading-relaxed">
      Some languages are <strong>inherently ambiguous</strong> - every grammar for them is
      ambiguous. Example: {`{a^n b^n c^m} ∪ {a^n b^m c^m}`}
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Ambiguous grammar produces multiple parse trees for some string</li>
        <li>Ambiguity causes semantic confusion</li>
        <li>Remove ambiguity by enforcing precedence and associativity</li>
        <li>Dangling else is a classic ambiguity problem</li>
        <li>Some languages are inherently ambiguous</li>
      </ul>
    </div>
  </div>
);

export default AmbiguousGrammars;
