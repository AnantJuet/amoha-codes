import React from 'react';

const PredicateLogic: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Predicate Logic</h1>

    <p className="text-lg leading-relaxed">
      Predicate logic (first-order logic) extends propositional logic by introducing predicates,
      variables, and quantifiers. It allows us to express statements about objects and their
      properties, making it more expressive than propositional logic.
    </p>

    <h2 className="text-2xl font-bold mt-8">Predicates</h2>
    <p className="mt-3">A predicate is a statement containing variables that becomes a proposition when values are substituted.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Predicate</th>
          <th className="p-2 border">Substitution</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">P(x) = "x is greater than 5"</td><td className="p-2 border">P(3)</td><td className="p-2 border">"3 is greater than 5" &rarr; False</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">P(x) = "x is greater than 5"</td><td className="p-2 border">P(7)</td><td className="p-2 border">"7 is greater than 5" &rarr; True</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Multi-variable Predicates</h2>
    <p className="mt-3">Predicates can have multiple variables:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Predicate</th>
          <th className="p-2 border">Meaning</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">Q(x, y)</td><td className="p-2 border">"x is greater than y"</td><td className="p-2 border">Q(5, 3) = True</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">R(x, y, z)</td><td className="p-2 border">"x + y = z"</td><td className="p-2 border">R(2, 3, 5) = True</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">Divides(x, y)</td><td className="p-2 border">"x divides y"</td><td className="p-2 border">Divides(3, 9) = True</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Domain (Universe of Discourse)</h2>
    <p className="mt-3">The domain specifies the possible values for variables:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Domain</th>
          <th className="p-2 border">Predicate</th>
          <th className="p-2 border">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Integers</td><td className="p-2 border font-mono text-gray-900">P(x) = "x&sup2; &ge; 0"</td><td className="p-2 border">Always true</td></tr>
        <tr><td className="p-2 border">Real numbers</td><td className="p-2 border font-mono text-gray-900">Q(x) = "x&sup2; = 2 has solution"</td><td className="p-2 border">True (&radic;2 exists)</td></tr>
        <tr><td className="p-2 border">Integers</td><td className="p-2 border font-mono text-gray-900">Q(x) = "x&sup2; = 2 has solution"</td><td className="p-2 border">False (&radic;2 is irrational)</td></tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm"><strong>Note:</strong> The truth value depends on the domain!</p>

    <h2 className="text-2xl font-bold mt-8">Common Predicates in CS</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Predicate</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">Even(n)</td><td className="p-2 border">n is even</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">Prime(n)</td><td className="p-2 border">n is prime</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">Sorted(A)</td><td className="p-2 border">Array A is sorted</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">Member(x, S)</td><td className="p-2 border">x is a member of set S</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">Connected(G)</td><td className="p-2 border">Graph G is connected</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Propositional Functions</h2>
    <p className="mt-3">Predicates can be combined using logical connectives:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Expression</th>
          <th className="p-2 border">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">P(x) &and; Q(x)</td><td className="p-2 border">"x is positive AND x is even"</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">P(x) &rarr; Q(x)</td><td className="p-2 border">"IF x is positive THEN x&sup2; is positive"</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">&not;P(x)</td><td className="p-2 border">"x is NOT greater than 5"</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Bound vs Free Variables</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Description</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Free variable</td><td className="p-2 border">Not bound by a quantifier, can take any value from domain</td><td className="p-2 border font-mono text-gray-900">P(x): x is free</td></tr>
        <tr><td className="p-2 border">Bound variable</td><td className="p-2 border">Controlled by a quantifier (&forall; or &exist;)</td><td className="p-2 border font-mono text-gray-900">&forall;x P(x): x is bound</td></tr>
        <tr><td className="p-2 border">Mixed</td><td className="p-2 border">Some bound, some free</td><td className="p-2 border font-mono text-gray-900">&forall;x (P(x) &rarr; Q(y)): x bound, y free</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Field</th>
          <th className="p-2 border">Application</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Database queries</td><td className="p-2 border">SQL WHERE clauses are predicates</td></tr>
        <tr><td className="p-2 border">Program specification</td><td className="p-2 border">Pre/post conditions</td></tr>
        <tr><td className="p-2 border">Type systems</td><td className="p-2 border">Type predicates</td></tr>
        <tr><td className="p-2 border">AI & Logic programming</td><td className="p-2 border">Prolog uses predicate logic</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Define a predicate for "x is a multiple of 3"</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">If P(x) = "x {"<"} 10" and domain is {'{'}1, 5, 12{'}'}, find truth values for all elements</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Write Q(x, y) = "x is the square of y" and evaluate Q(9, 3) and Q(8, 2)</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Identify free and bound variables in: &forall;x &exist;y (P(x, y) &rarr; Q(y, z))</td></tr>
      </tbody>
    </table>
  </div>
);

export default PredicateLogic;
