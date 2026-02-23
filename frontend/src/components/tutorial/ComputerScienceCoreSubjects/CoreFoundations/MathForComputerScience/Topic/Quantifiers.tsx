import React from 'react';

const Quantifiers: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Quantifiers</h1>

    <p className="text-lg leading-relaxed">
      Quantifiers specify the quantity of elements in a domain for which a predicate is true.
      The two main quantifiers are the universal quantifier (for all) and the existential
      quantifier (there exists).
    </p>

    <h2 className="text-2xl font-bold mt-8">Universal Quantifier (&forall;)</h2>
    <p className="mt-3"><strong>&forall;x P(x)</strong> means "For all x, P(x) is true"</p>
    <p className="mt-2">True only if P(x) is true for EVERY element in the domain.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">Statement</th>
          <th className="p-2 border">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">All real numbers</td><td className="p-2 border font-mono text-gray-900">&forall;x (x&sup2; &ge; 0)</td><td className="p-2 border">True</td></tr>
        <tr><td className="p-2 border">All real numbers</td><td className="p-2 border font-mono text-gray-900">&forall;x (x {">"} 0)</td><td className="p-2 border">False (counterexample: -1)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Existential Quantifier (&exist;)</h2>
    <p className="mt-3"><strong>&exist;x P(x)</strong> means "There exists an x such that P(x) is true"</p>
    <p className="mt-2">True if P(x) is true for AT LEAST ONE element in the domain.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">Statement</th>
          <th className="p-2 border">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">All integers</td><td className="p-2 border font-mono text-gray-900">&exist;x (x&sup2; = 4)</td><td className="p-2 border">True (x = 2 or x = -2)</td></tr>
        <tr><td className="p-2 border">All integers</td><td className="p-2 border font-mono text-gray-900">&exist;x (x&sup2; = -1)</td><td className="p-2 border">False (no integer works)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Uniqueness Quantifier (&exist;!)</h2>
    <p className="mt-3"><strong>&exist;!x P(x)</strong> means "There exists exactly one x such that P(x)"</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Equivalent to</td><td className="p-2 border font-mono text-gray-900">&exist;x (P(x) &and; &forall;y (P(y) &rarr; y = x))</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border font-mono text-gray-900">&exist;!x (x + 1 = 5) &rarr; True (only x = 4)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Negating Quantifiers</h2>
    <p className="mt-3">Negation swaps quantifiers:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Original</th>
          <th className="p-2 border">Negation</th>
          <th className="p-2 border">English</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">&not;(&forall;x P(x))</td><td className="p-2 border font-mono text-gray-900">&exist;x &not;P(x)</td><td className="p-2 border">"Not everyone passed" = "Someone failed"</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&not;(&exist;x P(x))</td><td className="p-2 border font-mono text-gray-900">&forall;x &not;P(x)</td><td className="p-2 border">"Nobody passed" = "Everyone failed"</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Nested Quantifiers</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Expression</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">&forall;x &forall;y P(x, y)</td><td className="p-2 border">For all x and all y, P(x, y) is true</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&forall;x &exist;y P(x, y)</td><td className="p-2 border">For every x, there exists some y (may differ)</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&exist;x &forall;y P(x, y)</td><td className="p-2 border">There exists an x that works for ALL y</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&exist;x &exist;y P(x, y)</td><td className="p-2 border">There exist some x and some y</td></tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm"><strong>Important:</strong> Order matters! &forall;x &exist;y &ne; &exist;y &forall;x in general</p>

    <h2 className="text-2xl font-bold mt-8">Order Example</h2>
    <p className="mt-3"><strong>Let P(x, y) = "x + y = 0" over integers:</strong></p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Statement</th>
          <th className="p-2 border">Reasoning</th>
          <th className="p-2 border">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">&forall;x &exist;y P(x, y)</td><td className="p-2 border">For any x, choose y = -x</td><td className="p-2 border">True</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&exist;y &forall;x P(x, y)</td><td className="p-2 border">No single y works for all x</td><td className="p-2 border">False</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Translating English</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">English Statement</th>
          <th className="p-2 border">Predicate Logic</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">"All students study"</td><td className="p-2 border font-mono text-gray-900">&forall;x (Student(x) &rarr; Studies(x))</td></tr>
        <tr><td className="p-2 border">"Some student studies"</td><td className="p-2 border font-mono text-gray-900">&exist;x (Student(x) &and; Studies(x))</td></tr>
        <tr><td className="p-2 border">"No student fails"</td><td className="p-2 border font-mono text-gray-900">&not;&exist;x (Student(x) &and; Fails(x)) or &forall;x (Student(x) &rarr; &not;Fails(x))</td></tr>
        <tr><td className="p-2 border">"Not all pass"</td><td className="p-2 border font-mono text-gray-900">&not;&forall;x (Student(x) &rarr; Passes(x))</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Translate: "Every integer has a successor" into predicate logic</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Negate: &forall;x &exist;y (x + y = 0)</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Is &exist;x &forall;y (x &le; y) true over natural numbers? Over integers?</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Translate: "There is a smallest positive integer"</td></tr>
      </tbody>
    </table>
  </div>
);

export default Quantifiers;
