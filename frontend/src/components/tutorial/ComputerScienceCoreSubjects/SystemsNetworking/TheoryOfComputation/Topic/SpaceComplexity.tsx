import React from 'react';

const SpaceComplexity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Space Complexity</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Space complexity measures the amount of memory a computation requires. Like time complexity,
      it's expressed as a function of input size. Space and time are related but distinct resources
      with their own complexity hierarchies.
    </p>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Space Complexity of a TM:

Let M be a TM that halts on all inputs.
The space complexity of M is the function:

s_M(n) = max{tape cells used by M on input w : |w| = n}

For sublinear space, use separate read-only input tape:
- Count only work tape cells
- Allows SPACE(log n) etc.

SPACE(f(n)) = class of languages decidable using O(f(n)) space`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Common Space Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Important space classes:

L = SPACE(log n)
   - Logarithmic space
   - Very limited memory
   - Example: Graph reachability in undirected graphs

PSPACE = ∪_k SPACE(n^k)
   - Polynomial space
   - Very powerful class
   - Example: TQBF (True Quantified Boolean Formulas)

EXPSPACE = ∪_k SPACE(2^(n^k))
   - Exponential space

Hierarchy:
L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE ⊆ EXPSPACE`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Time-Space Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Fundamental relationships:

1. SPACE(f(n)) ⊆ TIME(2^O(f(n)))
   - A TM using s space has at most 2^O(s) configurations
   - Must halt or loop within that many steps

2. TIME(f(n)) ⊆ SPACE(f(n))
   - Cannot use more space than time steps
   - Each step visits at most one new cell

3. Consequence: L ⊆ P ⊆ PSPACE ⊆ EXPTIME

Space can be reused; time cannot!
This makes space sometimes "cheaper" than time.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Space Hierarchy Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: More space means more power.

If f(n) = o(g(n)) and f(n) >= log n, then:
SPACE(f(n)) ⊊ SPACE(g(n))

Example: SPACE(n) ⊊ SPACE(n²)

Savitch's Theorem:
NSPACE(f(n)) ⊆ SPACE(f(n)²)

For space, nondeterminism gives at most quadratic advantage!
(Compare: For time, nondeterminism's advantage is unknown)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Important Results</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>NL = coNL:</strong> Nondeterministic log-space closed under complement</li>
      <li><strong>PSPACE = NPSPACE:</strong> Nondeterminism doesn't help for polynomial space</li>
      <li><strong>L vs P:</strong> Unknown if equal (analogous to P vs NP)</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Space complexity counts memory cells used</li>
        <li>L ⊆ P ⊆ PSPACE ⊆ EXPTIME</li>
        <li>PSPACE = NPSPACE (Savitch's theorem)</li>
        <li>Space is reusable; time is not</li>
      </ul>
    </div>
  </div>
);
export default SpaceComplexity;
