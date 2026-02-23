import React from 'react';

const ClosureCFL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Closure Properties of CFLs</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Context-free languages are closed under some operations but NOT under others.
      Understanding these properties helps in proving language membership and non-membership.
    </p>
    <h2 className="text-3xl font-bold mt-8">CFLs are CLOSED under</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Union: If L1 and L2 are CFLs, then L1 U L2 is CFL
2. Concatenation: If L1 and L2 are CFLs, then L1.L2 is CFL
3. Kleene Star: If L is CFL, then L* is CFL
4. Reversal: If L is CFL, then L^R is CFL
5. Homomorphism: h(L) is CFL if L is CFL
6. Intersection with Regular: If L is CFL and R is regular, L ∩ R is CFL`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">CFLs are NOT CLOSED under</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Intersection: L1 ∩ L2 may not be CFL even if both are CFLs
   Example: {a^n b^n c^m} ∩ {a^m b^n c^n} = {a^n b^n c^n} (not CFL)

2. Complement: L' may not be CFL even if L is CFL

3. Difference: L1 - L2 may not be CFL`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Closed under: union, concatenation, star, reversal</li>
        <li>NOT closed under: intersection, complement</li>
        <li>CFL ∩ Regular = CFL (useful for proofs)</li>
      </ul>
    </div>
  </div>
);
export default ClosureCFL;
