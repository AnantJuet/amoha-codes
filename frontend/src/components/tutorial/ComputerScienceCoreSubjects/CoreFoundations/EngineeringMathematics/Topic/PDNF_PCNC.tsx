import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">
    
    {/* ================= PDNF and PCNF in Discrete Mathematics ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      PDNF and PCNF in Discrete Mathematics
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================= PDNF ================= */}
    <h2 className="text-3xl font-bold  mt-8">PDNF (Principal Disjunctive Normal Form)</h2>
    <p className="leading-relaxed">
      It stands for <strong>Principal Disjunctive Normal Form</strong>. It refers to the <strong>Sum of Products (SOP)</strong>.
      For example, if P, Q, and R are variables, then:
    </p>

    <div className="bg-gray-400 p-4 rounded-md font-mono text-gray-900">
      (P . Q' . R) + (P' . Q . R) + (P . Q . R')
    </div>

    <p className="leading-relaxed mt-4">
      is an example of an expression in PDNF. Here, the ‘+’ (sum) is the main operator.
      You might be wondering about the difference between <strong>DNF</strong> and <strong>PDNF</strong>.
      The key difference is that in DNF, the length of all variables in each product term does not need to be the same.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Examples:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>(P . Q' . R) + (P' . Q . R) + (P . Q) → DNF but not PDNF</li>
      <li>(P . Q' . R) + (P' . Q . R) + (P . Q . R') → both DNF and PDNF</li>
    </ul>

    {/* ================= PCNF ================= */}
    <h2 className="text-3xl font-bold  mt-8">PCNF (Principal Conjunctive Normal Form)</h2>
    <p className="leading-relaxed">
      It stands for <strong>Principal Conjunctive Normal Form</strong>. It refers to the <strong>Product of Sums (POS)</strong>.
      For example, if P, Q, and R are variables, then:
    </p>

    <div className="bg-gray-400 p-4 rounded-md font-mono text-gray-900">
      (P + Q' + R) . (P' + Q + R) . (P + Q + R')
    </div>

    <p className="leading-relaxed mt-4">
      is an example of an expression in PCNF. Here, the ‘.’ (product) is the main operator.
      Just like before, the key difference between CNF and PCNF is that in CNF, the number of variables in each sum term
      does not need to be the same.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Examples:</h3>
    <ul className="list-disc list-inside space-y-1">
      <li>(P + Q' + R) . (P' + Q + R) . (P + Q) → CNF but not PCNF</li>
      <li>(P + Q' + R) . (P' + Q + R) . (P + Q + R') → both CNF and PCNF</li>
    </ul>

    {/* ================= Properties ================= */}
    <h2 className="text-3xl font-bold  mt-8">Properties of PCNF and PDNF</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Every PDNF or PCNF corresponds to a unique Boolean expression and vice versa.</li>
      <li>If X and Y are two Boolean expressions, then X ≡ Y if and only if PDNF(X) = PDNF(Y) or PCNF(X) = PCNF(Y).</li>
      <li>
        For a Boolean expression, if PCNF has m terms and PDNF has n terms, then the number of variables =
        log₂(m + n).
      </li>
    </ul>

    {/* ================= Solved Examples ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      PDNF and PCNF in Discrete Mathematics - Solved Examples
    </h2>

    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      <strong>Convert the following Boolean expression to PDNF:</strong> A . (B + C')
    </p>

    <p className="mt-2 font-semibold">Solution:</p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Distribute A → A . B + A . C'</li>
      <li>Ensure each product term contains all variables:</li>
    </ol>

    <div className="bg-gray-400 p-4 rounded-md font-mono text-gray-900">
      (A . B . C') + (A . B . C) + (A . B' . C')
    </div>

    <h3 className="text-2xl font-semibold mt-6 ">Example 2</h3>
    <p className="leading-relaxed">
      <strong>Convert the following Boolean expression to PCNF:</strong> (A + B') . (B + C)
    </p>

    <p className="mt-2 font-semibold">Solution:</p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Distribute the product → (A + B' + C) . (A + B' + C')</li>
      <li>Ensure each sum term contains all variables:</li>
    </ol>

    <div className="bg-gray-400 p-4 rounded-md font-mono text-gray-900">
      (A + B' + C) . (A + B' + C') . (A' + B + C) . (A' + B + C')
    </div>

    {/* ================= Practice Problems ================= */}
    <h2 className="text-3xl font-bold  mt-8">
      Practice Problems on PDNF and PCNF in Discrete Mathematics
    </h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Convert (A + B) . (B' + C) to PCNF.</li>
      <li>Convert A . (B + C) + A' . B . C' to PDNF.</li>
      <li>Simplify (P . Q' . R) + (P' . Q) to PDNF.</li>
      <li>Express (X + Y') . (Y + Z') . (X + Z) in PCNF.</li>
      <li>Convert (M . N + M' . N') . (P + Q') to PDNF.</li>
      <li>Simplify (P + Q) . (Q' + R) . (R + P') to PCNF.</li>
      <li>Express A . (B + C) + A' . (B . C') in PDNF.</li>
      <li>Convert (A + B) . (B + C) . (C + A') to PCNF.</li>
      <li>Simplify P . (Q + R') + Q' . R to PDNF.</li>
      <li>Convert (X + Y) . (Y + Z) . (Z + X') to PCNF.</li>
    </ul>
  </div>
);

export default Home;
