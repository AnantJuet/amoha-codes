import React from 'react';

const LogicalEquivalences: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Logical Equivalences</h1>

    <p className="text-lg leading-relaxed">
      Two logical expressions are equivalent (denoted p &equiv; q) if they have the same truth value
      for all possible assignments of truth values to their variables. Equivalences allow us to
      simplify expressions and prove logical statements.
    </p>

    <h2 className="text-2xl font-bold mt-8">Identity Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Identity with True</td><td className="p-2 border font-mono text-gray-900">p &and; T &equiv; p</td></tr>
        <tr><td className="p-2 border">Identity with False</td><td className="p-2 border font-mono text-gray-900">p &or; F &equiv; p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Domination Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Domination by True</td><td className="p-2 border font-mono text-gray-900">p &or; T &equiv; T</td></tr>
        <tr><td className="p-2 border">Domination by False</td><td className="p-2 border font-mono text-gray-900">p &and; F &equiv; F</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Idempotent Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Idempotent OR</td><td className="p-2 border font-mono text-gray-900">p &or; p &equiv; p</td></tr>
        <tr><td className="p-2 border">Idempotent AND</td><td className="p-2 border font-mono text-gray-900">p &and; p &equiv; p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Double Negation</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Double Negation</td><td className="p-2 border font-mono text-gray-900">&not;(&not;p) &equiv; p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Commutative Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Commutative OR</td><td className="p-2 border font-mono text-gray-900">p &or; q &equiv; q &or; p</td></tr>
        <tr><td className="p-2 border">Commutative AND</td><td className="p-2 border font-mono text-gray-900">p &and; q &equiv; q &and; p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Associative Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Associative OR</td><td className="p-2 border font-mono text-gray-900">(p &or; q) &or; r &equiv; p &or; (q &or; r)</td></tr>
        <tr><td className="p-2 border">Associative AND</td><td className="p-2 border font-mono text-gray-900">(p &and; q) &and; r &equiv; p &and; (q &and; r)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Distributive Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Distributive OR over AND</td><td className="p-2 border font-mono text-gray-900">p &or; (q &and; r) &equiv; (p &or; q) &and; (p &or; r)</td></tr>
        <tr><td className="p-2 border">Distributive AND over OR</td><td className="p-2 border font-mono text-gray-900">p &and; (q &or; r) &equiv; (p &and; q) &or; (p &and; r)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">De Morgan's Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Negation of AND</td><td className="p-2 border font-mono text-gray-900">&not;(p &and; q) &equiv; &not;p &or; &not;q</td></tr>
        <tr><td className="p-2 border">Negation of OR</td><td className="p-2 border font-mono text-gray-900">&not;(p &or; q) &equiv; &not;p &and; &not;q</td></tr>
      </tbody>
    </table>
    <p className="mt-2 text-sm">Key insight: Negation "flips" AND to OR and vice versa.</p>

    <h2 className="text-2xl font-bold mt-8">Absorption Laws</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Law</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Absorption 1</td><td className="p-2 border font-mono text-gray-900">p &or; (p &and; q) &equiv; p</td></tr>
        <tr><td className="p-2 border">Absorption 2</td><td className="p-2 border font-mono text-gray-900">p &and; (p &or; q) &equiv; p</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Implication Equivalences</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Equivalence</th>
          <th className="p-2 border">Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Implication as Disjunction</td><td className="p-2 border font-mono text-gray-900">p &rarr; q &equiv; &not;p &or; q</td></tr>
        <tr><td className="p-2 border">Contrapositive</td><td className="p-2 border font-mono text-gray-900">p &rarr; q &equiv; &not;q &rarr; &not;p</td></tr>
        <tr><td className="p-2 border">Biconditional</td><td className="p-2 border font-mono text-gray-900">p &harr; q &equiv; (p &rarr; q) &and; (q &rarr; p)</td></tr>
        <tr><td className="p-2 border">Negation of Implication</td><td className="p-2 border font-mono text-gray-900">&not;(p &rarr; q) &equiv; p &and; &not;q</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Example: Simplification</h2>
    <p className="mt-3"><strong>Simplify:</strong> &not;(p &or; &not;q) &or; (&not;p &and; &not;q)</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900 overflow-x-auto">
{`= (¬p ∧ q) ∨ (¬p ∧ ¬q)    [De Morgan]
= ¬p ∧ (q ∨ ¬q)           [Distributive]
= ¬p ∧ T                  [Negation law]
= ¬p                      [Identity]`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Simplify: (p &and; q) &or; (p &and; &not;q)</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Show that &not;(p &rarr; q) &equiv; p &and; &not;q</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Prove: (p &rarr; q) &and; (p &rarr; r) &equiv; p &rarr; (q &and; r)</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Simplify using De Morgan's: &not;(&not;p &or; &not;q)</td></tr>
      </tbody>
    </table>
  </div>
);

export default LogicalEquivalences;
