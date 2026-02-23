import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Generalized PnC Set 1 ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Generalized PnC (Permutation & Combination) – Set 1
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 15 Dec, 2021</p>

    {/* Intro */}
    <p className="leading-relaxed">
      In most counting problems, elements are distinct. But in many real-life
      situations, elements may be identical or repeated. This chapter discusses
      permutations and combinations when repetition is allowed or elements are identical.
    </p>

    {/* Permutations with Repetition */}
    <h2 className="text-3xl font-bold  mt-6">Permutations with Repetition</h2>
    <p className="leading-relaxed">
      Permutations with repetition follow the product rule. If there are <strong>n</strong> choices
      for every position and we must fill <strong>r</strong> positions, the total number of
      possible strings is <strong>n<sup>r</sup></strong>.
    </p>
    <p className="leading-relaxed">
      Example: Number of strings of length <strong>r</strong> using 26 English letters ={" "}
      <strong>26<sup>r</sup></strong>.
    </p>

    {/* Combinations with Repetition */}
    <h2 className="text-3xl font-bold  mt-6">Combinations with Repetition</h2>
    <p className="leading-relaxed">
      When repetition is allowed while choosing items, combinations are counted using the
      concept of <strong>Stars and Bars</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Stars and Bars Method</h3>
    <p className="leading-relaxed">
      Consider arranging <strong>r stars</strong> (items) and <strong>(n – 1) bars</strong>
      (divisions). The total arrangements equal:
    </p>

    <p className="leading-relaxed font-semibold">
      C(r + n − 1, r) = C(r + n − 1, n − 1)
    </p>

    <p className="leading-relaxed">
      This is the count of r-combinations from n types of identical objects.
    </p>

    {/* Example 1 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      In how many ways can 4 drinks be chosen from 6 types (with repetition)?
    </p>
    <p className="leading-relaxed font-semibold">
      Number of ways = C(4 + 6 − 1, 4) = C(9, 4) = 126
    </p>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p className="leading-relaxed">
      Number of non-negative integer solutions to:
      <br />
      <strong>x₁ + x₂ + x₃ = 11</strong>
    </p>
    <p className="leading-relaxed font-semibold">
      Number of solutions = C(11 + 3 − 1, 11) = C(13, 11) = C(13, 2) = 78
    </p>

    {/* Example 3 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 3</h3>
    <p className="leading-relaxed">
      Solve x₁ + x₂ + x₃ = 10 where <strong>x₁ ≥ 1</strong>.
    </p>
    <p className="leading-relaxed font-semibold">
      Number of solutions = C(10 + 3 − 1, 10) = C(12, 10) = C(12, 2) = 66
    </p>

    {/* Example 4 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 4</h3>
    <p className="leading-relaxed">
      Solve x₁ + x₂ + x₃ = 11 with <strong>x₁ &lt; 2</strong>.
    </p>
    <p className="leading-relaxed">
      Since x₁ can be 0 or 1, we handle this using generating functions.
      The final number of valid solutions is:
    </p>
    <p className="leading-relaxed font-semibold">23</p>

    {/* Example 5 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 5</h3>
    <p className="leading-relaxed">
      Number of non-negative solutions to:
      <br />
      <strong>x₁ + x₂ + x₃ ≤ 11</strong>
    </p>
    <p className="leading-relaxed">
      Convert into an equality using an extra variable x₄:
    </p>
    <p className="leading-relaxed font-semibold">
      x₁ + x₂ + x₃ + x₄ = 11
      <br />
      Solutions = C(11 + 4 − 1, 4 − 1) = C(14, 3) = 364
    </p>

  </div>
);

export default Home;
