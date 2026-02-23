import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= PnC and Binomial Coefficients ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Mathematics | PnC and Binomial Coefficients
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Aug, 2024</p>

    {/* Intro */}
    <p className="leading-relaxed">
      Permutations and Combinations (PnC) are fundamental concepts in combinatorics that
      help in counting and arranging objects. Binomial coefficients are closely related and
      appear in the Binomial Theorem. These ideas are widely used in engineering, computer
      science, probability, statistics, and optimization problems.
    </p>

    <h2 className="text-3xl font-bold mt-6">Table of Content</h2>
    <ul className="list-disc pl-6 leading-relaxed">
      <li>What are Permutations?</li>
      <li>What are Combinations?</li>
      <li>Binomial Coefficients</li>
      <li>Binomial Coefficient Example</li>
      <li>Solved Examples</li>
      <li>Applications in Engineering</li>
    </ul>

    {/* ================= Permutations ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Permutations?</h2>
    <p className="leading-relaxed">
      A permutation is an arrangement of objects in a specific order. The formula for
      permutations of n distinct objects taken r at a time is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded text-gray-900">
      P(n, r) = n! / (n − r)!
    </p>
    <p className="leading-relaxed">
      Example: Number of ways to arrange 3 out of 5 objects:
      <br />
      P(5,3) = 5! / 2! = 60.
    </p>

    {/* ================= Combinations ================= */}
    <h2 className="text-3xl font-bold mt-8">What are Combinations?</h2>
    <p className="leading-relaxed">
      A combination is a selection of objects where order does not matter. The formula is:
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded text-gray-900">
      C(n, r) = n! / (r!(n − r)!)
    </p>
    <p className="leading-relaxed">
      Example: Number of ways to choose 3 out of 5 objects:
      <br />
      C(5,3) = 10.
    </p>

    {/* ================= Binomial Coefficients ================= */}
    <h2 className="text-3xl font-bold mt-8">Binomial Coefficients</h2>
    <p className="leading-relaxed">
      Binomial coefficients appear in the expansion of (x + y)ⁿ and are given by C(n, k).
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded leading-relaxed text-gray-900">
      (x + y)ⁿ = Σ from k = 0 to n of [ C(n, k) × xⁿ⁻ᵏ × yᵏ ]
    </p>

    {/* ================= Binomial Example ================= */}
    <h2 className="text-3xl font-bold mt-8">Binomial Coefficient Example</h2>
    <p className="leading-relaxed">
      Example: Expand (x + y)³
    </p>
    <p className="font-mono bg-gray-400 p-2 rounded leading-relaxed text-gray-900">
      (x + y)³ = C(3,0)x³ + C(3,1)x²y + C(3,2)xy² + C(3,3)y³<br />
      = x³ + 3x²y + 3xy² + y³
    </p>

    {/* ================= Solved Examples ================= */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4">Permutation</h3>
    <p className="leading-relaxed">
      Problem: How many ways can 5 books be arranged on a shelf?
      <br />
      Solution: 5! = 120 ways.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Combination</h3>
    <p className="leading-relaxed">
      Problem: How many ways can a committee of 3 be chosen from 10 people?
      <br />
      C(10,3) = 120.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Binomial Coefficient</h3>
    <p className="leading-relaxed">
      Problem: Coefficient of x³y² in (x + y)⁵?
      <br />
      5C3 = 10.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Permutation with Repetition</h3>
    <p className="leading-relaxed">
      Using digits 1, 2, 3 to form 4-digit numbers with repetition:
      <br />
      3⁴ = 81.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Combination with Repetition</h3>
    <p className="leading-relaxed">
      Select 4 scoops from 5 flavors:
      <br />
      C(8,4) = 70.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Binomial Theorem Application</h3>
    <p className="leading-relaxed">
      Evaluate (1 + 0.1)¹⁰ ≈ 2.5937.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Permutation with Restrictions</h3>
    <p className="leading-relaxed">
      8 people seated in a row; 2 must sit together:
      <br />
      7! × 2! = 10,080 ways.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Combination — Cards</h3>
    <p className="leading-relaxed">
      5-card hands with exactly 2 hearts:
      <br />
      C(13,2) × C(39,3) = 712,842 hands.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Binomial Probability</h3>
    <p className="leading-relaxed">
      Probability of exactly 2 defectives in 5 items (p = 0.1):
      <br />
      5C2 × (0.1)² × (0.9)³ = 0.0729
    </p>

    <h3 className="text-2xl font-semibold mt-4">Permutation with Indistinguishable Objects</h3>
    <p className="leading-relaxed">
      Arrangements of the word "MISSISSIPPI":
      <br />
      11! / (4! × 4! × 2!) = 34,650 ways.
    </p>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold mt-8">Applications in Engineering</h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li><strong>Probability & Statistics:</strong> Used for calculating event likelihood.</li>
      <li><strong>Computer Science:</strong> Used in algorithms, recursion, and combinatorial problems.</li>
      <li><strong>Operations Research:</strong> Used in scheduling and resource allocation.</li>
      <li><strong>Cryptography:</strong> Used to generate secure keys.</li>
      <li><strong>Network Design:</strong> Helps determine optimal connections and layouts.</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      Permutations, combinations, and binomial coefficients are powerful tools in combinatorics.
      Mastering them helps solve complex problems across engineering, computer science, probability,
      statistics, and optimization domains.
    </p>

  </div>
);

export default Home;
