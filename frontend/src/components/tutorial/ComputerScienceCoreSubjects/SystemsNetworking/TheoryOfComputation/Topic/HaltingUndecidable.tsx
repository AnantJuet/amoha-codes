import React from 'react';

const HaltingUndecidable: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Proving the Halting Problem Undecidable</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The undecidability of the Halting Problem is proven using a clever diagonalization argument.
      This proof technique has been adapted to show many other problems are undecidable.
    </p>
    <h2 className="text-3xl font-bold mt-8">The Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`HALT = {<M, w> | TM M halts on input w}

Question: Can we build a TM that decides HALT?
- Input: Description of TM M and string w
- Output: "yes" if M halts on w, "no" if M loops forever

Intuition: Seems simple - just simulate M on w!
Problem: If M loops, our simulation never finishes.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proof by Contradiction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Assume HALT is decidable
  Let H be a TM that decides HALT.
  H(<M, w>) = "yes" if M halts on w
  H(<M, w>) = "no" if M loops on w

Step 2: Construct a "paradox machine" D
  D(<M>) =
    1. Run H(<M, <M>>)  // Does M halt on its own description?
    2. If H says "yes": go into infinite loop
    3. If H says "no": halt

Step 3: Run D on its own description
  D(<D>) = ?

  Case 1: Suppose D halts on <D>
    Then H(<D, <D>>) = "yes"
    Then D enters infinite loop (by step 2)
    But we assumed D halts - CONTRADICTION!

  Case 2: Suppose D loops on <D>
    Then H(<D, <D>>) = "no"
    Then D halts (by step 3)
    But we assumed D loops - CONTRADICTION!

Step 4: Conclusion
  Both cases lead to contradiction.
  Therefore, our assumption is false.
  HALT is undecidable.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Diagonalization Table:

         Input description
          <M1> <M2> <M3> ...
TM M1  [  H    L    H   ... ]
TM M2  [  L    H    L   ... ]
TM M3  [  H    H    H   ... ]
  ...

H = halts, L = loops

D is designed to differ from EVERY row on the diagonal:
- If M_i halts on <M_i>, then D loops on <M_i>
- If M_i loops on <M_i>, then D halts on <M_i>

D cannot be in the table! But D is a valid TM.
Contradiction → H cannot exist.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Proof uses contradiction and self-reference</li>
        <li>The "paradox machine" D does opposite of what H predicts</li>
        <li>D on its own description creates contradiction</li>
        <li>Same technique proves many undecidability results</li>
      </ul>
    </div>
  </div>
);
export default HaltingUndecidable;
