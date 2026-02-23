import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Mathematics | Sequence, Series and Summations ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Mathematics | Sequence, Series and Summations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    <p className="text-lg leading-relaxed">
      Sequences, series, and summations are fundamental concepts of mathematical analysis and 
      have practical applications in science, engineering, and finance.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold mt-6">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is Sequence?</li>
      <li>Theorems on Sequences</li>
      <li>Properties of Sequences</li>
      <li>What is Series?</li>
      <li>Properties of Series</li>
      <li>Theorems on Series</li>
      <li>Summation Definition</li>
      <li>Properties of Summation Formula</li>
      <li>Examples of Summation Formula</li>
      <li>Applications</li>
      <li>Types of Series</li>
    </ul>

    {/* What is Sequence */}
    <h2 className="text-3xl font-bold mt-8">What is Sequence?</h2>
    <p className="leading-relaxed">
      A sequence is a set of numbers arranged in a definite order according to a rule. Each number
      is called a term. A sequence can be finite or infinite.
    </p>

    <p className="leading-relaxed mt-2">
      Examples:
      <br />• 2, 4, 6, 8 ..., 20 → finite sequence  
      <br />• 10, 6, 2, -2, ... → infinite sequence  
      <br />• 1, 1, 2, 3, 5, 8, ... → Fibonacci sequence
    </p>

    {/* Theorems on Sequences */}
    <h2 className="text-3xl font-bold mt-8">Theorems on Sequences</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>If f(n) = aₙ and lim f(x) = L, then lim aₙ = L.</li>
      <li>If aₙ ≤ cₙ ≤ bₙ and limits of aₙ, bₙ are equal, then limit of cₙ is same.</li>
      <li>If |aₙ| → 0 then aₙ → 0.</li>
      <li>If lim aₙ = L and f is continuous, then lim f(aₙ) = f(L).</li>
      <li>The sequence rⁿ converges if −1 &lt; r ≤ 1.</li>
    </ul>

    {/* Properties of Sequences */}
    <h2 className="text-3xl font-bold mt-8">Properties of Sequences</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>lim(aₙ ± bₙ) = lim(aₙ) ± lim(bₙ)</li>
      <li>lim(c·aₙ) = c · lim(aₙ)</li>
      <li>lim(aₙ·bₙ) = lim(aₙ) · lim(bₙ)</li>
      <li>lim(aₙᵖ) = (lim aₙ)ᵖ</li>
    </ul>

    {/* What is Series */}
    <h2 className="text-3xl font-bold mt-8">What is Series?</h2>
    <p className="leading-relaxed">
      A series is the sum of terms of a sequence. It may be finite or infinite.
    </p>

    <p className="leading-relaxed mt-2">
      Examples:  
      <br />• 5 + 2 + (-1) + (-4) → finite series  
      <br />• 1 + 1 + 2 + 3 + 5 + ... → Fibonacci series  
    </p>

    {/* Properties of Series */}
    <h2 className="text-3xl font-bold mt-8">Properties of Series</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∑(aₙ + bₙ) = ∑aₙ + ∑bₙ</li>
      <li>∑(aₙ − bₙ) = ∑aₙ − ∑bₙ</li>
      <li>∑(c·aₙ) = c·∑aₙ</li>
      <li>If aₙ ≤ bₙ then sum of aₙ ≤ sum of bₙ</li>
    </ul>

    {/* Theorems on Series */}
    <h2 className="text-3xl font-bold mt-8">Theorems on Series</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Comparison Test</li>
      <li>Limit Comparison Test</li>
      <li>Ratio Test</li>
      <li>Root Test</li>
      <li>Absolute Convergence Test</li>
      <li>Conditional Convergence Test</li>
      <li>Alternating Series Test</li>
    </ul>

    {/* Summation */}
    <h2 className="text-3xl font-bold mt-8">Summation Definition</h2>
    <p className="leading-relaxed">
      Summation ( ∑ ) means adding elements of a sequence across an interval.
    </p>

    {/* Properties of Summation */}
    <h2 className="text-3xl font-bold mt-8">Properties of Summation</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∑ c·aᵢ = c · ∑ aᵢ</li>
      <li>∑ (aᵢ ± bᵢ) = ∑ aᵢ ± ∑ bᵢ</li>
      <li>∑ c (constant) = n·c</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of Summation Formula</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∑ i = n(n+1)/2</li>
      <li>∑ i² = n(n+1)(2n+1)/6</li>
      <li>∑ i³ = [n(n+1)/2]²</li>
      <li>∑ log(i) = log(n!)</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <p className="leading-relaxed">
      Used in computer algorithms, statistics, physics, engineering, data analysis,
      and financial modeling.
    </p>

    {/* Types of Series */}
    <h2 className="text-3xl font-bold mt-8">Types of Series</h2>
    <h3 className="text-2xl font-semibold mt-4">Finite Series</h3>
    <p className="leading-relaxed">A series that ends after finite number of terms.</p>

    <h3 className="text-2xl font-semibold mt-4">Infinite Series</h3>
    <p className="leading-relaxed">A series that continues indefinitely.</p>

  </div>
);

export default Home;
