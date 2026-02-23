import React from 'react';

const ClassP: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Class P: Polynomial Time</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Class P contains all decision problems solvable in polynomial time by a deterministic Turing
      Machine. P is considered the class of "efficiently solvable" or "tractable" problems - those
      that can be solved in reasonable time for practical input sizes.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`P = ∪_k TIME(n^k)

P is the class of languages L such that:
- There exists a deterministic TM M
- There exists a polynomial p(n)
- M decides L
- For all inputs w: M halts in at most p(|w|) steps

"Polynomial time" = O(n^k) for some constant k
Examples: O(n), O(n²), O(n³), O(n^100)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Problems in P</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Classic problems in P:

1. Sorting - O(n log n)
2. Searching sorted array - O(log n)
3. Shortest path (Dijkstra) - O(n²) or O(n log n + m)
4. Primality testing (AKS) - O(n^6)
5. Maximum flow - O(n³)
6. Linear programming - polynomial
7. Context-free parsing (CYK) - O(n³)
8. Graph connectivity - O(n + m)
9. Bipartite matching - O(n³)
10. 2-SAT - O(n)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why P is Important</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Tractability:</strong> P represents "feasibly computable"</li>
      <li><strong>Robustness:</strong> Same class for TMs, RAMs, most models</li>
      <li><strong>Closure:</strong> P is closed under complement, union, intersection</li>
      <li><strong>Composition:</strong> Polynomial calls to P algorithms stay in P</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">P vs Efficient in Practice</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Caveats about "polynomial = efficient":

1. Large exponents: O(n^1000) is polynomial but impractical
2. Large constants: O(10^100 × n) is technically O(n)
3. Some exponential algorithms are practical for real inputs
4. Average case may differ from worst case

Still, P vs not-P is fundamental distinction:
- Polynomial scales "reasonably" with input size
- Exponential eventually becomes infeasible
- n^10 for n=1000 is huge but finite
- 2^n for n=1000 exceeds atoms in universe`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>P = polynomial time decidable problems</li>
        <li>Represents "efficiently solvable" problems</li>
        <li>Closed under complement and Boolean operations</li>
        <li>Robust across reasonable computational models</li>
      </ul>
    </div>
  </div>
);
export default ClassP;
