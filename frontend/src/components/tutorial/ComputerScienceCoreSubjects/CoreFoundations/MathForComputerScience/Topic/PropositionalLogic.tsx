import React from 'react';

const PropositionalLogic: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Propositional Logic</h1>

    <p className="text-lg leading-relaxed">
      Propositional logic (also called sentential logic) is the study of propositions and their
      logical relationships. A proposition is a declarative statement that is either true or false,
      but not both. It forms the foundation of mathematical reasoning and computer science.
    </p>

    <h2 className="text-2xl font-bold mt-8">Propositions</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border" rowSpan={3}>Propositions</td><td className="p-2 border">"2 + 2 = 4"</td><td className="p-2 border">True</td></tr>
        <tr><td className="p-2 border">"The Earth is flat"</td><td className="p-2 border">False</td></tr>
        <tr><td className="p-2 border">"Paris is the capital of France"</td><td className="p-2 border">True</td></tr>
        <tr><td className="p-2 border" rowSpan={3}>NOT Propositions</td><td className="p-2 border">"What time is it?"</td><td className="p-2 border">Question</td></tr>
        <tr><td className="p-2 border">"Close the door."</td><td className="p-2 border">Command</td></tr>
        <tr><td className="p-2 border">"x + 1 = 5"</td><td className="p-2 border">Variable, not definite</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Logical Connectives</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Connective</th>
          <th className="p-2 border">Symbol</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Negation (NOT)</td><td className="p-2 border font-mono text-gray-900">&not;p or ~p</td><td className="p-2 border">Reverses the truth value. If p is true, &not;p is false.</td></tr>
        <tr><td className="p-2 border">Conjunction (AND)</td><td className="p-2 border font-mono text-gray-900">p &and; q</td><td className="p-2 border">True only when both p AND q are true.</td></tr>
        <tr><td className="p-2 border">Disjunction (OR)</td><td className="p-2 border font-mono text-gray-900">p &or; q</td><td className="p-2 border">True when at least one of p OR q is true (inclusive OR).</td></tr>
        <tr><td className="p-2 border">Implication (IF...THEN)</td><td className="p-2 border font-mono text-gray-900">p &rarr; q</td><td className="p-2 border">False only when p is true and q is false. "If p, then q"</td></tr>
        <tr><td className="p-2 border">Biconditional (IFF)</td><td className="p-2 border font-mono text-gray-900">p &harr; q</td><td className="p-2 border">True when p and q have the same truth value. "p if and only if q"</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Implication Deep Dive</h2>
    <p className="mt-3"><strong>p &rarr; q</strong> has related statements:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Statement</th>
          <th className="p-2 border">Form</th>
          <th className="p-2 border">Equivalence</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Original</td><td className="p-2 border font-mono text-gray-900">p &rarr; q</td><td className="p-2 border">-</td></tr>
        <tr><td className="p-2 border">Converse</td><td className="p-2 border font-mono text-gray-900">q &rarr; p</td><td className="p-2 border">Not equivalent</td></tr>
        <tr><td className="p-2 border">Inverse</td><td className="p-2 border font-mono text-gray-900">&not;p &rarr; &not;q</td><td className="p-2 border">Not equivalent</td></tr>
        <tr><td className="p-2 border">Contrapositive</td><td className="p-2 border font-mono text-gray-900">&not;q &rarr; &not;p</td><td className="p-2 border">Logically equivalent to p &rarr; q</td></tr>
      </tbody>
    </table>
    <p className="mt-3 text-sm">Example: "If it rains, then the ground is wet"</p>
    <p className="text-sm">Contrapositive: "If the ground is not wet, then it did not rain"</p>

    <h2 className="text-2xl font-bold mt-8">Operator Precedence</h2>
    <p className="mt-3">From highest to lowest:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Priority</th>
          <th className="p-2 border">Operator</th>
          <th className="p-2 border">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1 (Highest)</td><td className="p-2 border font-mono text-gray-900">&not;</td><td className="p-2 border">Negation</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border font-mono text-gray-900">&and;</td><td className="p-2 border">Conjunction</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border font-mono text-gray-900">&or;</td><td className="p-2 border">Disjunction</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border font-mono text-gray-900">&rarr;</td><td className="p-2 border">Implication</td></tr>
        <tr><td className="p-2 border">5 (Lowest)</td><td className="p-2 border font-mono text-gray-900">&harr;</td><td className="p-2 border">Biconditional</td></tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm">Use parentheses to override precedence.</p>

    <h2 className="text-2xl font-bold mt-8">Applications in CS</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Boolean expressions</td><td className="p-2 border font-mono text-gray-900">if (x {">"} 0 && y {"<"} 10)</td></tr>
        <tr><td className="p-2 border">Circuit design</td><td className="p-2 border">AND, OR, NOT gates</td></tr>
        <tr><td className="p-2 border">Database queries</td><td className="p-2 border">WHERE conditions</td></tr>
        <tr><td className="p-2 border">Program verification</td><td className="p-2 border">Proving correctness</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Express "I will go if it doesn't rain" using logical symbols</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Find the contrapositive of "If x is even, then x&sup2; is even"</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Evaluate: (T &and; F) &or; &not;F</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Write the negation of "p &and; q" and simplify</td></tr>
      </tbody>
    </table>
  </div>
);

export default PropositionalLogic;
