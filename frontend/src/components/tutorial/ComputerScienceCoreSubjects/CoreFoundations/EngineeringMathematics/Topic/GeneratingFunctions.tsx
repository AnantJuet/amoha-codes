import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

  {/* ================= Generating Functions - Introduction and Prerequisites ================= */}
  <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
    Discrete Maths | Generating Functions – Introduction and Prerequisites
  </h1>
  <p className="text-sm text-gray-500">Last Updated : 08 Aug, 2024</p>

  <p className="text-lg leading-relaxed">
    Generating functions are powerful mathematical tools used to represent sequences by
    encoding the terms of a sequence as coefficients of powers of a variable in a formal power series.
    They provide an efficient way to translate problems about sequences into problems about functions.
  </p>

  <p className="leading-relaxed">
    This concept is widely used in solving counting problems, recurrence relations, and proving
    combinatorial identities. Generating functions help simplify complex mathematical operations and
    form the foundation for various advanced concepts in algebra and computer science.
  </p>

  <h2 className="text-3xl font-bold  mt-8">Definition</h2>
  <p className="leading-relaxed">
    A generating function is a formal power series in which the variable <strong>x</strong> acts as
    a placeholder. We usually do not evaluate the series for a numeric value of <strong>x</strong>,
    so issues like convergence are ignored.
  </p>

  <p className="leading-relaxed">
    A sequence such as [g₀, g₁, g₂, g₃, ...] corresponds to the series:
    <br />
    g₀ + g₁x + g₂x² + g₃x³ + ...
  </p>

  <h2 className="text-3xl font-bold  mt-8">
    Some Basic Prerequisites
  </h2>
  <p className="leading-relaxed">
    Before learning generating functions, it helps to understand basic combinatorics formulas and
    principles such as permutations, combinations, and recurrence relations.
  </p>

  <h2 className="text-3xl font-bold  mt-8">
    Important Sequences and Their Results
  </h2>
  <p className="leading-relaxed">
    Consider the geometric series:
    <br />
    G(x) = 1 + x + x² + x³ + ...  
    This infinite series simplifies to:
    <br />
    <strong>G(x) = 1 / (1 - x)</strong>
  </p>

  <h2 className="text-3xl font-bold  mt-8">Operations on Generating Functions</h2>

  {/* Scaling */}
  <h3 className="text-2xl font-semibold  mt-4">1. Scaling</h3>
  <p className="leading-relaxed">
    Multiplying a generating function by a constant multiplies every term in the sequence by that constant.
  </p>

  <p className="leading-relaxed">
    Example:  
    Sequence → [1, 0, 1, 0, 1, 0, ...]  
    Generating Function → 1 + x² + x⁴ + x⁶ + ... = 1 / (1 - x²)
  </p>

  <p className="leading-relaxed">
    Multiplying by 2 gives:
    <br />
    2 / (1 - x²) = 2 + 2x² + 2x⁴ + 2x⁶ + ...
  </p>

  {/* Addition */}
  <h3 className="text-2xl font-semibold  mt-4">2. Addition</h3>
  <p className="leading-relaxed">
    Adding generating functions adds their sequences term by term.
  </p>

  <p className="leading-relaxed">
    Example:
    <br />
    [1, 1, 1, 1, ...] ↔ 1 / (1 - x)
    <br />
    [1, −1, 1, −1, ...] ↔ 1 / (1 + x)
  </p>

  <p className="leading-relaxed">
    Adding gives:
    <br />
    [2, 0, 2, 0, ...] ↔ 2 / (1 - x²)
  </p>

  {/* Right Shifting */}
  <h3 className="text-2xl font-semibold  mt-4">3. Right Shifting</h3>
  <p className="leading-relaxed">
    Shifting the sequence right by k places multiplies the generating function by xᵏ.
  </p>

  <p className="leading-relaxed">
    Example:
    <br />
    [0, 0, ..., 1, 1, 1, ...] ↔ xᵏ / (1 - x)
  </p>

  {/* Differentiation */}
  <h3 className="text-2xl font-semibold  mt-4">4. Differentiation</h3>
  <p className="leading-relaxed">
    Differentiating a generating function multiplies each term by its index and shifts the sequence left.
  </p>

  <p className="leading-relaxed">
    Example:
    <br />
    1 + x + x² + x³ + ... = 1 / (1 - x)
    <br />
    Differentiating gives:
    <br />
    1 + 2x + 3x² + 4x³ + ... = 1 / (1 - x)²
  </p>

  {/* Solved Examples */}
  <h2 className="text-3xl font-bold  mt-8">Solved Examples</h2>

  <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
  <p className="leading-relaxed">
    Sequence: {`{1, 1, 1, 1, ...}`}  
    G(x) = 1 / (1 - x)
  </p>

  <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
  <p className="leading-relaxed">
    Sequence: {`{0, 1, 2, 3, ...}`}  
    G(x) = x / (1 - x)²
  </p>

  <h3 className="text-2xl font-semibold mt-4 ">Example 3</h3>
  <p className="leading-relaxed">
    Sequence: {`{1, 2, 4, 8, ...}`}  
    G(x) = 1 / (1 - 2x)
  </p>

  <h3 className="text-2xl font-semibold mt-4 ">Example 4</h3>
  <p className="leading-relaxed">
  Sequence: {"(n choose k)"} <br />
  G(x) = {"(1 + x)ⁿ"}
</p>


  <h3 className="text-2xl font-semibold mt-4 ">Example 5</h3>
  <p className="leading-relaxed">
    Sequence: {`{0, 1, 1, 1, ...}`}  
    G(x) = x / (1 - x)
  </p>

  {/* Practice Problems */}
  <h2 className="text-3xl font-bold  mt-8">Practice Problems</h2>

  <ul className="list-disc ml-6 space-y-2 leading-relaxed">
    <li>Find the generating function for the sequence {`{1, 2, 3, 4, ...}`}</li>
    <li>Determine the generating function for {`{1, −1, 1, −1, ...}`}</li>
    <li>Find the generating function for {`{1, 0, 1, 0, ...}`}</li>
    <li>Find the generating function for odd numbers {`{1, 3, 5, 7, ...}`}</li>
    <li>Find the generating function for squares {`{1, 4, 9, 16, ...}`}</li>
    <li>Find the generating function for {`{0, 1, 0, 1, ...}`}</li>
    <li>Find the generating function for {`{1, 1/2, 1/4, 1/8, ...}`}</li>
    <li>Find the generating function for {`{1, 1, 0, 0, 1, 1, ...}`}</li>
    <li>Find the generating function for {`{1, 2, 1, 2, 1, 2, ...}`}</li>
    <li>Find the generating function for triangular numbers {`{1, 3, 6, 10, 15, ...}`}</li>
  </ul>

  </div>
);

export default Home;

