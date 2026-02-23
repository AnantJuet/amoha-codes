import React from 'react';

const HaltingProblem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">The Halting Problem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The Halting Problem is the most famous undecidable problem. It asks whether a given Turing
      Machine will halt on a given input. Alan Turing proved in 1936 that no algorithm can solve
      this problem in general.
    </p>
    <h2 className="text-3xl font-bold mt-8">Problem Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The Halting Problem:

HALT = {<M, w> | M is a TM and M halts on input w}

Question: Is HALT decidable?
Answer: NO!

Informally:
"Given any program P and input I, can we determine
if P will eventually stop when run on I?"

There is no general algorithm that solves this.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proof by Diagonalization</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Proof that HALT is undecidable:

Assume (for contradiction) that H decides HALT.
H(<M, w>) = accept if M halts on w
H(<M, w>) = reject if M loops on w

Construct D:
D(<M>) =
  Run H(<M, <M>>)
  If H accepts (M halts on <M>): LOOP forever
  If H rejects (M loops on <M>): HALT

Now run D on itself: D(<D>)

If D(<D>) halts:
  → H accepts <D, <D>>
  → D loops (by construction)
  Contradiction!

If D(<D>) loops:
  → H rejects <D, <D>>
  → D halts (by construction)
  Contradiction!

Therefore, H cannot exist. HALT is undecidable.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Intuition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The self-referential paradox:

"This program halts if and only if it doesn't halt."

Similar to:
- "This statement is false" (liar paradox)
- "The barber shaves all who don't shave themselves"

Self-reference + negation = contradiction`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Consequences</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>HALT is RE but not recursive</li>
      <li>HALT' (complement) is not even RE</li>
      <li>Many problems reducible from HALT are undecidable</li>
      <li>No perfect debugger/verifier can exist</li>
      <li>Fundamental limit of computation</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Halting problem: Does TM halt on given input?</li>
        <li>Proved undecidable by diagonalization</li>
        <li>HALT is RE but not decidable</li>
        <li>Foundation for many undecidability proofs</li>
      </ul>
    </div>
  </div>
);
export default HaltingProblem;
