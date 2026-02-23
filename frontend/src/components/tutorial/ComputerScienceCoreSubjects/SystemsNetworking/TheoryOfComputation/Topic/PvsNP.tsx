import React from 'react';

const PvsNP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">P vs NP Problem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The P vs NP problem asks whether every problem whose solution can be quickly verified can also
      be quickly solved. It's the most important open problem in computer science and one of the
      seven Millennium Prize Problems with a $1 million prize.
    </p>
    <h2 className="text-3xl font-bold mt-8">The Question</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`P vs NP:

Does P = NP?

Informal: If you can CHECK a solution quickly,
can you FIND a solution quickly?

What we know:
- P ⊆ NP (definitely)
- P = NP or P ⊊ NP (unknown which!)

Most researchers believe P ≠ NP, but nobody has proved it.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Implications if P = NP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If P = NP were proved true:

Positive:
- Efficient algorithms for optimization problems
- Fast protein folding, drug discovery
- Perfect scheduling and planning
- Automated theorem proving

Negative:
- Cryptography would collapse
- RSA, AES, etc. would be breakable
- Secure communication threatened
- Digital economy disrupted

Most experts think this scenario is unlikely.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Implications if P ≠ NP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If P ≠ NP were proved true:

- NP-complete problems have no efficient algorithms
- Cryptography remains secure (assuming other things)
- Must use approximations or heuristics for hard problems
- Fundamental barrier to certain computations

This is what most researchers expect.
Would resolve the question but life continues mostly same.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why So Hard to Prove?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Need to prove impossibility:</strong> Show no algorithm exists among infinitely many</li>
      <li><strong>Relativization barrier:</strong> Simple diagonalization won't work</li>
      <li><strong>Natural proofs barrier:</strong> Certain proof techniques won't work</li>
      <li><strong>Algebrization barrier:</strong> Yet another technique ruled out</li>
      <li>Any proof requires fundamentally new techniques</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Relation to Other Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Known containments:
P ⊆ NP ⊆ PSPACE ⊆ EXPTIME

Known separations:
P ≠ EXPTIME (time hierarchy theorem)

Unknown:
P vs NP
NP vs coNP
NP vs PSPACE
P vs PSPACE

If P ≠ NP, then NP ≠ PSPACE (one must differ from P).
But we don't know which!`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>P vs NP: Can verifiable problems be solved quickly?</li>
        <li>Most believe P ≠ NP but no proof exists</li>
        <li>Millennium Prize Problem ($1 million)</li>
        <li>Known barriers prevent simple proof approaches</li>
      </ul>
    </div>
  </div>
);
export default PvsNP;
