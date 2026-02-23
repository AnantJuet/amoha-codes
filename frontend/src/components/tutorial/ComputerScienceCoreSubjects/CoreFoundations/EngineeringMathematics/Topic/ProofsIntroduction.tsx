import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Introduction to Proofs ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Introduction to Proofs
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Mathematical proof is an argument we give logically to validate a mathematical statement. 
      To validate a statement, we consider two things: a statement and logical operators.
    </p>

    <p className="leading-relaxed">
      A statement is either true or false but not both. Logical operators include AND, OR, NOT, 
      IF-THEN, and IF AND ONLY IF. Coupled with quantifiers like "for all" and "there exists", 
      we apply logical operators to check correctness. A proof is a logically sound, step-by-step 
      argument showing that a theorem must be true, based on axioms and previously proven results.
    </p>

    {/* Main Heading */}
    <h2 className="text-3xl font-bold  mt-8">Types of Mathematical Proofs</h2>
    <p className="leading-relaxed">
      Mathematicians use several styles of proof, depending on the nature of the statement. 
      The most common types are:
    </p>

    {/* Proof by Cases */}
    <h3 className="text-2xl font-semibold mt-4 ">Proof by Cases</h3>
    <p className="leading-relaxed">
      In this method, we evaluate every case of the statement to conclude its correctness.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> For every integer x, the integer x(x + 1) is even.  
      If x is even → x = 2k → expression is even.  
      If x is odd → x = 2k + 1 → expression is still even.  
      Used in algorithm analysis when different inputs lead to different behaviors.
    </p>

    {/* Proof by Contradiction */}
    <h3 className="text-2xl font-semibold mt-4 ">Proof by Contradiction</h3>
    <p className="leading-relaxed">
      We assume the negation of the statement and show it leads to a contradiction.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> Prove that √2 is irrational.  
      Assume √2 = a/b in lowest terms → both a and b become even → contradiction.  
      Therefore, √2 is irrational.
    </p>

    {/* Proof by Induction */}
    <h3 className="text-2xl font-semibold mt-4 ">Proof by Induction</h3>
    <p className="leading-relaxed">
      The Principle of Mathematical Induction states that if a base case is true and 
      P(n) → P(n+1), then the statement is true for all positive integers.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> Prove 1 + 2 + ... + n = n(n + 1)/2.  
      Base case n = 1 is true.  
      Inductive step shows P(n) → P(n+1).  
      Hence proved.
    </p>

    {/* Direct Proof */}
    <h3 className="text-2xl font-semibold mt-4 ">Direct Proof</h3>
    <p className="leading-relaxed">
      To prove p → q, assume p is true and use logical steps to reach q.
    </p>
    <p className="leading-relaxed">
      <strong>Theorem:</strong> If m is even and n is odd, then m + n is odd.  
      Write m = 2j and n = 2k + 1 → sum is odd.
    </p>

    {/* Indirect Proof */}
    <h3 className="text-2xl font-semibold mt-4 ">Indirect Proof</h3>
    <p className="leading-relaxed">
      Also called proof by contraposition.  
      To prove p → q, prove ¬q → ¬p.
    </p>
    <p className="leading-relaxed">
      <strong>Example:</strong> If 3n + 2 is even → n is even.  
      Assume n is odd → leads to 3n + 2 being odd → contradiction.
    </p>

    {/* Disproof by Counterexample */}
    <h3 className="text-2xl font-semibold mt-4 ">Disproof by Counterexample</h3>
    <p className="leading-relaxed">
      Used to disprove statements by providing a single counterexample.
    </p>
    <p className="leading-relaxed">
  <strong>Example:</strong> Claim: n! ≤ n² for all n.  
    Take n = 4 → 4! = 24 {">"} 16 → false.
    </p>


    {/* Solved Examples */}
    <h2 className="text-3xl font-bold  mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      If n is odd → n = 2k + 1 → n² = 4k² + 4k + 1 → odd.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p className="leading-relaxed">
      There is no smallest positive rational number.  
      Assume r is smallest → r/2 is smaller → contradiction.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 3</h3>
    <p className="leading-relaxed">
      If n² is divisible by 3 → n is divisible by 3.  
      Follows from properties of prime divisibility.
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Introduction to Proofs – Practice Problems
    </h2>

    <ul className="list-disc pl-8 space-y-2 leading-relaxed">
      <li>Prove that the product of two odd integers is odd.</li>
      <li>Prove that there is no integer n such that n² = 2n + 1.</li>
      <li>Prove that if n² is even, then n is even.</li>
      <li>Prove that there are infinitely many primes.</li>
      <li>Prove that √3 is irrational.</li>
      <li>Prove that x² + y² = 3 has no integer solution.</li>
      <li>Prove that if a triangle is not equilateral, then its angles are not all equal.</li>
      <li>Prove that 3n + 2 is divisible by 4 for all natural n.</li>
      <li>Prove that the square of any even integer is divisible by 4.</li>
      <li>Prove that if n is divisible by 6, then it is divisible by 2 and 3.</li>
    </ul>

  </div>
);

export default Home;
