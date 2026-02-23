import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Generalized PnC Set 2 ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Generalized PnC Set 2
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Dec, 2019</p>

    {/* Intro */}
    <p className="leading-relaxed">
      Many combinatorial problems can be interpreted as distributing balls into boxes.
      Both balls and boxes may be distinguishable or indistinguishable, and the
      distribution may allow or restrict multiple balls in the same box. Throughout
      this section, assume there are <strong>m balls</strong> and <strong>n boxes</strong>.
    </p>

    {/* 1. Distinguishable Balls, Distinguishable Boxes */}
    <h2 className="text-3xl font-bold  mt-6">
      1. Distinguishable Balls and Distinguishable Boxes
    </h2>

    <h3 className="text-2xl font-semibold mt-4 ">With Exclusion</h3>
    <p className="leading-relaxed">
      Exclusion means each box can contain at most one ball.  
      This is equivalent to counting <strong>r-permutations</strong>, since:
      the first ball has n choices, the second has (n − 1), and so on.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Without Exclusion</h3>
    <p className="leading-relaxed">
      Without exclusion, each ball can go into any of the n boxes.  
      Thus the number of ways is:
      <br />
      <strong>n<sup>m</sup></strong>
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Fixed Number of Balls in Each Box</h3>
    <p className="leading-relaxed">
      If box k must contain <strong>mₖ</strong> balls (with all m₁ + m₂ + ... = m),  
      the number of distributions is:
    </p>
    <p className="leading-relaxed font-semibold">
      m! / (m₁! × m₂! × ... × mₙ!)
    </p>

    {/* Example 1 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      In how many ways can 10 prizes be distributed among 5 people (without exclusion)?
    </p>
    <p className="leading-relaxed font-semibold">
      Each prize has 5 choices → Total ways = 5<sup>10</sup>.
    </p>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p className="leading-relaxed">
      How many ways to distribute hands of 5 cards to each of four players from 52 cards?
    </p>
    <p className="leading-relaxed">
      Each player must get exactly 5 cards.  
      Total ways =
    </p>
    <p className="leading-relaxed font-semibold">
      C(52,5) × C(47,5) × C(42,5) × C(37,5)
    </p>
    <p className="leading-relaxed">
      The remaining 32 cards form the last group.  
      This matches the formula for fixed group sizes 5,5,5,5,32.
    </p>

    {/* 2. Indistinguishable Balls, Distinguishable Boxes */}
    <h2 className="text-3xl font-bold  mt-8">
      2. Indistinguishable Balls and Distinguishable Boxes
    </h2>
    <p className="leading-relaxed">
      With exclusion → same as combinations without repetition.  
      Without exclusion → same as combinations with repetition  
      (covered under Stars & Bars in Set-1).
    </p>

    {/* 3. Distinguishable Balls, Indistinguishable Boxes */}
    <h2 className="text-3xl font-bold  mt-8">
      3. Distinguishable Balls and Indistinguishable Boxes
    </h2>
    <p className="leading-relaxed">
      No simple closed formula exists.  
      The count uses <strong>Stirling Numbers of the Second Kind</strong> S(m, j),
      where j is the number of non-empty boxes.
    </p>

    <p className="leading-relaxed font-semibold">
      Total ways = Σ S(m, j), for j = 1 to n
    </p>

    {/* Example 1 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      How many ways to put 4 distinct balls into 3 identical boxes without exclusion?
    </p>
    <p className="leading-relaxed">
      Easier to enumerate manually. Total ways = <strong>14</strong>.
    </p>

    {/* 4. Indistinguishable Balls, Indistinguishable Boxes */}
    <h2 className="text-3xl font-bold  mt-8">
      4. Indistinguishable Balls and Indistinguishable Boxes
    </h2>
    <p className="leading-relaxed">
      This reduces to finding the <strong>number of partitions of m</strong>  
      (with number of parts ≤ n).  
      No general formula exists; enumeration is often simpler.
    </p>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p className="leading-relaxed">
      How many ways to put 4 identical balls into 3 identical boxes?
    </p>

    <p className="leading-relaxed">
      Partitions of 4 with at most 3 parts:
      <br />
      4  
      <br />
      3 + 1  
      <br />
      2 + 2  
      <br />
      2 + 1 + 1
    </p>

    <p className="leading-relaxed font-semibold">
      Total ways = 4
    </p>

    {/* GATE Section */}
    <h2 className="text-3xl font-bold  mt-8">
      GATE CS Corner Questions
    </h2>
    <p className="leading-relaxed">
      These questions are from previous GATE papers and mock tests:
      <br />
      • GATE CS 2003 – Question 34  
      • GATE CS 2015 (Set-3) – Question 15  
      <br />
      Practicing these will strengthen your understanding of generalized PnC.
    </p>

  </div>
);

export default Home;
