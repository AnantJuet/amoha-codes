import React from 'react';

const ClassNP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Class NP: Nondeterministic Polynomial Time</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Class NP contains problems where solutions can be verified quickly, even if finding them might
      be hard. NP stands for "Nondeterministic Polynomial time" and includes many important
      optimization and decision problems.
    </p>
    <h2 className="text-3xl font-bold mt-8">Two Equivalent Definitions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Definition 1: Nondeterministic TM

NP = ∪_k NTIME(n^k)

L ∈ NP if there exists a nondeterministic TM M that:
- Decides L in polynomial time
- On yes-instances, SOME computation path accepts
- On no-instances, ALL computation paths reject

Definition 2: Polynomial-time verifier

L ∈ NP if there exists a deterministic TM V such that:
- V runs in polynomial time
- L = {w | ∃ certificate c: V(w, c) accepts}
- Certificate c has polynomial length in |w|

"NP = problems with efficiently verifiable solutions"`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Certificate/Witness Intuition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For a yes-instance, a "certificate" proves it:

SAT: Certificate = satisfying assignment
     Verify: Check all clauses satisfied

HAMPATH: Certificate = ordering of vertices
         Verify: Check it's a valid Hamiltonian path

COMPOSITE: Certificate = a factor
           Verify: Check it divides the number

Finding certificate may be hard.
Verifying certificate is easy (polynomial time).`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Problems in NP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`NP contains (among many others):

All of P (trivially - no certificate needed!)

Plus:
- SAT: Is Boolean formula satisfiable?
- CLIQUE: Does graph have k-clique?
- HAMPATH: Does graph have Hamiltonian path?
- SUBSET-SUM: Does subset sum to target?
- 3-COLORING: Can graph be 3-colored?
- TRAVELING SALESMAN (decision version)
- INTEGER PROGRAMMING
- GRAPH ISOMORPHISM`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">NP vs coNP</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`coNP = {L | L' ∈ NP}

In coNP, NO-instances have short certificates.

Example: TAUTOLOGY (formula always true)
- In coNP: give falsifying assignment as certificate
- Probably not in NP (no short "always true" proof)

Unknown: Does NP = coNP?
If P = NP, then NP = coNP.
If NP ≠ coNP, then P ≠ NP.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NP = problems with polynomial-time verifiable certificates</li>
        <li>Equivalent to nondeterministic poly-time</li>
        <li>P ⊆ NP (trivially)</li>
        <li>Whether P = NP is the biggest open question in CS</li>
      </ul>
    </div>
  </div>
);
export default ClassNP;
