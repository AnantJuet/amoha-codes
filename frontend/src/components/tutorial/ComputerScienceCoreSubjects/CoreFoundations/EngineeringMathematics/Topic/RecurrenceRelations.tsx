import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Discrete Mathematics | Types of Recurrence Relations ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Discrete Mathematics | Types of Recurrence Relations - Set 2
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="leading-relaxed">
      A sequence defined by relating its terms such as <strong>aₙ</strong> with previous terms 
      <strong>aₙ₋₁, aₙ₋₂</strong>, etc. is called a <strong>recurrence relation</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-6 ">Types of Recurrence Relations</h2>

    {/* ================= First Order Recurrence Relation ================= */}
    <h3 className="text-2xl font-semibold mt-4 ">
      1. First Order Recurrence Relation
    </h3>

    <p className="leading-relaxed">
      A recurrence relation of the form:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
aₙ = c·aₙ₋₁ + f(n),   n ≥ 1
    </pre>

    <p className="leading-relaxed">
      where <strong>c</strong> is a constant and <strong>f(n)</strong> is a known function.
    </p>

    <p className="leading-relaxed">
      If f(n) = 0 → the recurrence is <strong>homogeneous</strong>.  
      Otherwise → <strong>non-homogeneous</strong>.
    </p>

    <p className="leading-relaxed">
      Examples:  
      <span className="font-mono text-gray-900">xₙ = 2xₙ₋₁ − 1</span>,  
      <span className="font-mono text-gray-900">aₙ = n·aₙ₋₁ + 1</span>
    </p>

    {/* === Solved Question 1 === */}
    <h3 className="text-xl font-bold mt-4 ">Solved Question</h3>

    <p className="leading-relaxed font-semibold">
      Solve: T(2k) = 3T(2k − 1) + 1,   T(1) = 1
    </p>

    <p className="leading-relaxed">
      Let T(2k) = aₖ.  
      Then:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
aₖ = 3aₖ₋₁ + 1
    </pre>

    <p className="leading-relaxed">
      Multiply by xᵏ and take summation:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
Σ aₖ xᵏ = 3 Σ aₖ₋₁ xᵏ + Σ xᵏ        (1)

Σ aₖ₋₁ xᵏ = x·G(x)

(1) becomes:

G(x) − 3xG(x) − x/(1−x) = 0
G(x) (1 − 3x) = x/(1−x)

G(x) = x / [(1 − x)(1 − 3x)]
    </pre>

    <p className="leading-relaxed">Write partial fractions:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
G(x) = A/(1−x) + B/(1−3x)

A = −1/2  
B = 3/2

G(x) = (3/2) Σ (3x)ᵏ − (1/2) Σ (x)ᵏ
    </pre>

    <p className="leading-relaxed">
      So coefficient of xᵏ is:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
aₖ = (3/2)·3ᵏ − (1/2)·1ᵏ
aₖ = (3ᵏ⁺¹ − 1) / 2
    </pre>

    {/* ================= Second Order Recurrence Relation ================= */}
    <h3 className="text-2xl font-semibold mt-6 ">
      2. Second Order Linear Homogeneous Recurrence Relation
    </h3>

    <p className="leading-relaxed">
      A recurrence relation of the form:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
cₙ aₙ + cₙ₋₁ aₙ₋₁ + cₙ₋₂ aₙ₋₂ = 0,   n ≥ 2
    </pre>

    <p className="leading-relaxed">
      where the coefficients are constants and <strong>cₙ ≠ 0</strong>.
    </p>

    <p className="leading-relaxed">
      Try solution: <strong>aₙ = c·kⁿ</strong>.
    </p>

    <p className="leading-relaxed">
      Substituting gives the <strong>characteristic equation</strong>:
    </p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
cₙ k² + cₙ₋₁ k + cₙ₋₂ = 0
    </pre>

    <h3 className="text-xl font-bold mt-4 ">Cases:</h3>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Case 1 – Real and distinct roots (k₁, k₂):</strong><br />
        aₙ = A k₁ⁿ + B k₂ⁿ
      </li>

      <li><strong>Case 2 – Real and equal roots (k):</strong><br />
        aₙ = (A + Bn) kⁿ
      </li>

      <li><strong>Case 3 – Complex roots:</strong><br />
        k = p ± iq  
        ⇒ aₙ = rⁿ (A cos(nθ) + B sin(nθ))  
        where r = √(p² + q²), θ = tan⁻¹(q/p)
      </li>
    </ul>

    {/* === Solved Question 2 === */}
    <h3 className="text-xl font-bold mt-6 ">Solved Question</h3>

    <p className="leading-relaxed font-semibold">
      Solve: aₙ + aₙ₋₁ − 6aₙ₋₂ = 0,   n ≥ 2  
      Given: a₀ = −1, a₁ = 8
    </p>

    <p className="leading-relaxed">Characteristic equation:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
k² + k − 6 = 0
(k + 3)(k − 2) = 0

Roots: k₁ = −3,  k₂ = 2
    </pre>

    <p className="leading-relaxed">General solution:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
aₙ = A(−3)ⁿ + B(2)ⁿ
    </pre>

    <p className="leading-relaxed">Using initial conditions:</p>

    <pre className="bg-gray-400 p-3 rounded text-sm font-mono text-gray-900">
a₀ = A + B = −1
a₁ = −3A + 2B = 8

Solving:
A = −2  
B = 1
    </pre>

    <p className="leading-relaxed font-mono bg-gray-400 p-3 rounded text-gray-900">
aₙ = −2(−3)ⁿ + 2ⁿ
    </p>

  </div>
);

export default Home;
