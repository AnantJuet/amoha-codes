import React from "react";

const TopDownParsing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Top-Down Parsing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Top-down parsing</strong> builds the parse tree from the root (start symbol)
      downward to the leaves (terminals). It attempts to find a leftmost derivation for the
      input string by starting with the start symbol and predicting which production to apply.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Starts from the start symbol</li>
      <li>Builds parse tree top to bottom, left to right</li>
      <li>Produces leftmost derivation</li>
      <li>Uses lookahead to predict productions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Top-Down Parsers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Recursive Descent</td>
            <td className="p-3 border">One function per non-terminal, with backtracking</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Predictive Parser</td>
            <td className="p-3 border">No backtracking, uses lookahead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LL(1) Parser</td>
            <td className="p-3 border">Table-driven, one symbol lookahead</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Descent Parsing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Grammar:
  E  → T E'
  E' → + T E' | ε
  T  → F T'
  T' → * F T' | ε
  F  → ( E ) | id

Recursive Descent Parser:

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
    // else: ε production (do nothing)
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
    // else: ε production
}

void F() {
    if (lookahead == '(') {
        match('(');
        E();
        match(')');
    } else if (lookahead == 'id') {
        match('id');
    } else {
        error();
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Predictive Parsing</h2>
    <p className="leading-relaxed">
      Predictive parsing eliminates backtracking by using the current lookahead symbol to
      decide which production to use.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Requirements for predictive parsing:
1. Grammar must not be left recursive
2. Grammar must be left factored
3. For A → α | β:
   - FIRST(α) ∩ FIRST(β) = ∅
   - If ε ∈ FIRST(α), then FIRST(β) ∩ FOLLOW(A) = ∅`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Tree Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: id + id * id

Parsing steps:
1. Start with E
2. E → TE' (lookahead = id ∈ FIRST(T))
3. T → FT' (lookahead = id ∈ FIRST(F))
4. F → id (match id)
5. T' → ε (lookahead = + ∉ FIRST(*FT'))
6. E' → +TE' (match +)
7. T → FT'
8. F → id (match id)
9. T' → *FT' (match *)
10. F → id (match id)
11. T' → ε
12. E' → ε
13. Accept (input consumed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Limitations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Limitations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Easy to implement by hand</td>
            <td className="p-3 border">Cannot handle left recursion</td>
          </tr>
          <tr>
            <td className="p-3 border">Good error messages</td>
            <td className="p-3 border">Limited to LL grammars</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficient (no backtracking)</td>
            <td className="p-3 border">Requires grammar transformation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Top-down parsing builds tree from root to leaves</li>
        <li>Produces leftmost derivation</li>
        <li>Recursive descent: one function per non-terminal</li>
        <li>Predictive parsing uses lookahead, no backtracking</li>
        <li>Grammar must be non-left-recursive and left-factored</li>
      </ul>
    </div>
  </div>
);

export default TopDownParsing;
