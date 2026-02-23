import React from 'react';

const TruthTables: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Truth Tables</h1>

    <p className="text-lg leading-relaxed">
      A truth table is a tabular representation that shows all possible truth values of a
      logical expression. It systematically lists every combination of input values and their
      corresponding output, making it essential for analyzing logical statements.
    </p>

    <h2 className="text-2xl font-bold mt-8">Negation (&not;p)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">&not;p</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Conjunction (p &and; q)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">q</th>
          <th className="p-2 border text-center">p &and; q</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">F</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Disjunction (p &or; q)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">q</th>
          <th className="p-2 border text-center">p &or; q</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">F</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Implication (p &rarr; q)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">q</th>
          <th className="p-2 border text-center">p &rarr; q</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Biconditional (p &harr; q)</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">q</th>
          <th className="p-2 border text-center">p &harr; q</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
      </tbody>
    </table>
    <p className="mt-2 text-center text-sm">True when both sides have the same value</p>

    <h2 className="text-2xl font-bold mt-8">Compound Expression Example</h2>
    <p className="mt-3"><strong>Expression:</strong> (p &and; q) &rarr; r</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border text-center">p</th>
          <th className="p-2 border text-center">q</th>
          <th className="p-2 border text-center">r</th>
          <th className="p-2 border text-center">p &and; q</th>
          <th className="p-2 border text-center">(p &and; q) &rarr; r</th>
        </tr>
      </thead>
      <tbody className="font-mono text-center text-sm text-gray-900">
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
        <tr><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">F</td><td className="p-2 border">T</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Important Classifications</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Classification</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Tautology</td><td className="p-2 border">Always true (all T in output column)</td></tr>
        <tr><td className="p-2 border">Contradiction</td><td className="p-2 border">Always false (all F in output column)</td></tr>
        <tr><td className="p-2 border">Contingency</td><td className="p-2 border">Sometimes true, sometimes false (mixed output)</td></tr>
        <tr><td className="p-2 border">Equivalence</td><td className="p-2 border">Two expressions with identical truth tables</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Number of Rows</h2>
    <p className="mt-3">For n variables, a truth table has 2&#8319; rows:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Variables</th>
          <th className="p-2 border">Rows</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1 variable</td><td className="p-2 border">2 rows</td></tr>
        <tr><td className="p-2 border">2 variables</td><td className="p-2 border">4 rows</td></tr>
        <tr><td className="p-2 border">3 variables</td><td className="p-2 border">8 rows</td></tr>
        <tr><td className="p-2 border">4 variables</td><td className="p-2 border">16 rows</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Construct a truth table for &not;(p &and; q)</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Verify that p &rarr; q &equiv; &not;p &or; q using truth tables</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Is (p &rarr; q) &and; (q &rarr; p) equivalent to p &harr; q?</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Show that p &or; &not;p is a tautology</td></tr>
      </tbody>
    </table>
  </div>
);

export default TruthTables;
