import React from 'react';

const ReductionTechniques: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Reduction Techniques</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Reduction is a powerful technique to prove undecidability by showing that solving a new problem
      would enable solving a known undecidable problem. If we can reduce problem A to problem B,
      then B is at least as hard as A.
    </p>
    <h2 className="text-3xl font-bold mt-8">Mapping Reduction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Definition: A ≤_m B (A mapping reduces to B)

There exists a computable function f such that:
  w ∈ A ⟺ f(w) ∈ B

Properties:
- f transforms A-instances to B-instances
- f preserves yes/no answers
- f must be computable (by a TM that halts)

Key Theorem:
If A ≤_m B and B is decidable, then A is decidable.
Contrapositive: If A is undecidable and A ≤_m B, then B is undecidable.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Reduction Proof Template</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`To prove B is undecidable:

1. Choose known undecidable problem A (often HALT or A_TM)
2. Construct computable function f mapping A to B
3. Prove: w ∈ A ⟺ f(w) ∈ B
4. Conclude: Since A is undecidable, so is B

Diagram:
  w ∈ A?  ---f--->  f(w) ∈ B?
    ↓                   ↓
  Yes/No  <---same---  Yes/No`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Proving E_TM Undecidable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`E_TM = {<M> | L(M) = ∅}  (emptiness problem)

Reduction from A_TM:
Given <M, w>, construct TM M':
  M'(x) =
    1. Ignore x
    2. Simulate M on w
    3. If M accepts, accept

Then:
- If M accepts w: M' accepts everything → L(M') ≠ ∅
- If M doesn't accept w: M' accepts nothing → L(M') = ∅

So: <M, w> ∈ A_TM ⟺ <M'> ∉ E_TM

Since A_TM is undecidable, E_TM complement is undecidable.
Therefore E_TM is undecidable.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Common Undecidable Problems by Reduction</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>E_TM:</strong> Is L(M) empty? (from A_TM)</li>
      <li><strong>EQ_TM:</strong> Do two TMs accept same language? (from E_TM)</li>
      <li><strong>REGULAR_TM:</strong> Is L(M) regular? (from A_TM)</li>
      <li><strong>ALL_TM:</strong> Does M accept all strings? (from A_TM)</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Reduction: A ≤_m B means B is at least as hard as A</li>
        <li>If A undecidable and A ≤_m B, then B undecidable</li>
        <li>Reduction function must be computable</li>
        <li>HALT and A_TM are common starting points</li>
      </ul>
    </div>
  </div>
);
export default ReductionTechniques;
