import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Sum of Squares of n Natural Numbers ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Sum of Squares of n Natural Numbers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro */}
    <p className="leading-relaxed">
      The sum of squares of the first <strong>n natural numbers</strong> is given by:
    </p>

    <p className="text-lg font-semibold">
      Sₙ = n(n + 1)(2n + 1) / 6
    </p>

    <p className="leading-relaxed">
      This formula helps in finding the total of: 1² + 2² + 3² + … + n².
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold  mt-8">Examples</h2>

    <p className="leading-relaxed"><strong>n = 1:</strong> S₁ = 1</p>
    <p className="leading-relaxed"><strong>n = 2:</strong> S₂ = 5</p>
    <p className="leading-relaxed"><strong>n = 3:</strong> S₃ = 14</p>

    {/* Table of Formulas */}
    <h2 className="text-3xl font-bold  mt-8">
      Sum of Squares – Formula Table
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>First n natural numbers: n(n + 1)(2n + 1) / 6</li>
      <li>First n even numbers: 2n(n + 1)(2n + 1) / 3</li>
      <li>First n odd numbers: n(2n + 1)(2n − 1) / 3</li>
    </ul>

    {/* Proof */}
    <h2 className="text-3xl font-bold  mt-8">Proof (Using Induction)</h2>

    <p className="leading-relaxed">
      Let P(n): 1² + 2² + ... + n² = n(n + 1)(2n + 1) / 6.
      P(1) is true.  
      Assume P(k) is true.  
      Adding (k + 1)² to both sides gives the expression for P(k + 1), which simplifies to:
    </p>

    <p className="font-semibold">P(k + 1) = (k + 1)(k + 2)(2k + 3) / 6</p>

    <p className="leading-relaxed">
      Thus, P(n) holds for all natural numbers n.
    </p>

    {/* Even Squares */}
    <h2 className="text-3xl font-bold  mt-8">
      Sum of Squares of Even Natural Numbers
    </h2>

    <p className="leading-relaxed">
      Formula: <strong>2n(n + 1)(2n + 1) / 3</strong>
    </p>

    <p className="leading-relaxed"><strong>Example:</strong> For n = 3:</p>
    <p className="font-semibold">2 × 3 × 4 × 7 / 3 = 56</p>

    {/* Odd Squares */}
    <h2 className="text-3xl font-bold  mt-8">
      Sum of Squares of Odd Natural Numbers
    </h2>

    <p className="leading-relaxed">
      Formula: <strong>n(2n + 1)(2n − 1) / 3</strong>
    </p>

    <p className="leading-relaxed"><strong>Example:</strong> For n = 3:</p>
    <p className="font-semibold">3 × 7 × 5 / 3 = 35</p>

    {/* Sum of Squares Using Identities */}
    <h2 className="text-3xl font-bold  mt-8">
      Sum of Squares Using Algebraic Identities
    </h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>a² + b² = (a + b)² − 2ab</li>
      <li>a² + b² + c² = (a + b + c)² − 2(ab + bc + ca)</li>
    </ul>

    {/* Geometry */}
    <h2 className="text-3xl font-bold  mt-8">Sum of Squares in Geometry</h2>

    <p className="leading-relaxed">
      In a right-angled triangle:  
      <strong>(Base)² + (Perpendicular)² = (Hypotenuse)²</strong>  
      This is also a form of sum of squares.
    </p>

    {/* Solved Questions */}
    <h2 className="text-3xl font-bold  mt-8">
      Solved Questions
    </h2>

    <p className="leading-relaxed">
      <strong>Q1:</strong> Find the sum of squares of 9 and 11.  
      Using identity: (9 + 11)² − 2 × 9 × 11 = 202
    </p>

    <p className="leading-relaxed">
      <strong>Q2:</strong> Three consecutive natural numbers whose sum of squares is 50 are:  
      <strong>3, 4, 5</strong>
    </p>

    <p className="leading-relaxed">
      <strong>Q3:</strong> Sum of squares of first 14 odd numbers = <strong>3654</strong>
    </p>

    {/* Conclusion */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>

    <p className="leading-relaxed">
      The sum of squares of natural numbers is widely used in geometry, physics, 
      statistics, and engineering. It plays an important role in variance, power 
      calculation, Pythagoras theorem, and structural analysis.
    </p>
  </div>
);

export default Home;
