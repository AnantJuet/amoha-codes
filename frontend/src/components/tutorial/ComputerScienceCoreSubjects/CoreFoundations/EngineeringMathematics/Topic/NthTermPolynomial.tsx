import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Finding nth term of any Polynomial Sequence ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Finding nth term of any Polynomial Sequence
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Mar, 2024</p>

    {/* Intro */}
    <p className="leading-relaxed">
      Given a few terms of a sequence, we are often asked to find the expression for the nth term. 
      There are multiple ways to do so, but here we discuss an algorithmic approach that gives the 
      correct answer for any <strong>polynomial</strong> sequence. Note that this method does not 
      apply to trigonometric, exponential, or other transcendental sequences.
    </p>
    <p className="leading-relaxed">
      The method is based on the fact that for an nth-order polynomial sequence, the nth-order 
      forward difference is constant, and all higher-order differences become zero.
    </p>

    {/* ================= Example 1 ================= */}
    <h2 className="text-3xl font-bold mt-6 ">Example 1</h2>

    <p className="leading-relaxed">
      Consider the sequence: <strong>3, 9, 15, 21, ...</strong>
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Trivial Solution</h3>
    <p className="leading-relaxed">
      This is an Arithmetic Progression (A.P) with first term 3 and common difference 6.<br />
      Hence, the nth term is:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      Sₙ = 3 + (n - 1) × 6
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Our Polynomial Method</h3>
    <p className="leading-relaxed">
      A first-order polynomial has the form:
    </p>
    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      Sₙ = a₀ + a₁n
    </p>

    <p className="leading-relaxed">Using n = 1 and n = 2:</p>
    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
3 = a₀ + a₁  
9 = a₀ + 2a₁
    </pre>

    <p className="leading-relaxed">
      Solving the equations gives:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
a₁ = 6  
a₀ = –3
    </pre>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      ⇒ Sₙ = −3 + 6n
    </p>

    {/* ================= Example 2 ================= */}
    <h2 className="text-3xl font-bold mt-6 ">Example 2</h2>

    <p className="leading-relaxed">
      Sequence: <strong>9, 24, 47, 78, 117, 164, 219...</strong>
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Forward Differences</h3>
    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
9   24   47   78   117   164   219
   15   23   31   39    47    55
       8    8    8     8     8
    </pre>

    <p className="leading-relaxed">
      Since the 2nd order forward difference is constant, the sequence is a 
      <strong>2nd-order polynomial</strong>:
    </p>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      S = a₀ + a₁n + a₂n²
    </p>

    <p className="leading-relaxed">Substituting n = 1, 2, 3 gives:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
9  = a₀ +  a₁ +   a₂
24 = a₀ + 2a₁ + 4a₂
47 = a₀ + 3a₁ + 9a₂
    </pre>

    <p className="leading-relaxed">Matrix solution gives:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
[a₀  a₁  a₂] = [2   3   4]
    </pre>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      ⇒ S = 2 + 3n + 4n²
    </p>

    {/* ================= Example 3 ================= */}
    <h2 className="text-3xl font-bold mt-6 ">Example 3</h2>

    <p className="leading-relaxed">
      Sequence: <strong>28, 168, 516, 1168, 2220...</strong>
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Forward Differences</h3>
    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
28   168   516   1168   2220
   140   348   652    1052
        208   304    400
            96    96
    </pre>

    <p className="leading-relaxed">
      Since the 3rd-order difference is constant, the sequence is a 
      <strong>3rd-order polynomial</strong>:
    </p>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      S = a₀ + a₁n + a₂n² + a₃n³
    </p>

    <p className="leading-relaxed">Using n = 1, 2, 3, 4 gives a 4×4 matrix. Solving yields:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm text-gray-900">
[a₀  a₁  a₂  a₃] = [0   4   8   16]
    </pre>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
      ⇒ S = 4n + 8n² + 16n³
    </p>

    <p className="leading-relaxed italic">
      To solve an nth-order sequence, we need n equations. These can be solved manually 
      or using matrix-based tools like MATLAB, Octave, etc.
    </p>

  </div>
);

export default Home;
