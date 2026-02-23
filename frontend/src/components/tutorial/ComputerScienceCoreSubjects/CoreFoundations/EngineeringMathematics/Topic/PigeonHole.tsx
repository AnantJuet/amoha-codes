import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Pigeonhole Principle ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Pigeonhole Principle
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 21 Jul, 2025</p>

    {/* Intro */}
    <p className="leading-relaxed text-lg">
      The pigeonhole principle states that if more objects (pigeons) are placed into fewer
      containers (pigeonholes), then at least one container must contain more than one object.
    </p>

    <p className="leading-relaxed">
      Formally, if <strong>n</strong> items are placed into <strong>m</strong> containers and
      <strong> n &gt; m</strong>, then at least one container must contain more than one item.
    </p>

    {/* Example 1 */}
    <h2 className="text-3xl font-bold mt-8">Example 1</h2>
    <p className="leading-relaxed">
      Suppose 13 pigeons fly into 12 pigeonholes. At least one pigeonhole must have at least
      two pigeons. If each pigeonhole held at most one pigeon, only 12 pigeons could be placed,
      contradicting the assumption. Thus one hole must contain at least two birds.
    </p>

    {/* Example 2 */}
    <h2 className="text-3xl font-bold mt-8">Example 2</h2>
    <p className="leading-relaxed">
      If you have 10 black socks and 12 blue socks in a drawer, how many socks must you pick
      to guarantee a matching pair?
    </p>
    <p className="leading-relaxed">
      Here, <strong>k = 2</strong> colors (pigeonholes). According to the pigeonhole principle,
      <strong>n &gt; 2</strong>. Hence the minimum <strong>n = 3</strong>.  
      Thus, <strong>3 socks</strong> guarantee at least one matching pair.
    </p>

    {/* Generalized Pigeonhole Principle */}
    <h2 className="text-3xl font-bold mt-8">
      Generalized Pigeonhole Principle
    </h2>
    <p className="leading-relaxed">
      If <strong>n</strong> items are placed into <strong>k</strong> containers, then at least
      one container must contain at least <strong>⌈n / k⌉</strong> items.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example</h3>
    <p className="leading-relaxed">
      If there are 100 students and 12 months, then at least:
      <br />⌈100 / 12⌉ = <strong>9 students</strong> share a birth month.
    </p>

    {/* Pigeonhole Principle Theorem */}
    <h2 className="text-3xl font-bold mt-8">Pigeonhole Principle Theorem</h2>
    <p className="leading-relaxed">
      If the average number of pigeons per hole is <strong>A</strong> (not an integer), then:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>At least one pigeonhole contains ≥ ⌈A⌉ pigeons.</li>
      <li>The remaining contain ≤ ⌊A⌋ pigeons.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Example 1</h3>
    <p className="leading-relaxed">
      If (Kn + 1) pigeons are placed in n pigeonholes:
      <br />
      Average = (Kn + 1)/n = K + 1/n
      <br />
      So at least one hole contains K+1 pigeons.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2</h3>
    <p className="leading-relaxed">
      A bag contains 10 red, 10 white, and 10 blue marbles.  
      Minimum marbles to ensure 4 of the same color:
      <br />
      Here, k = 3 pigeonholes, K+1 = 4.
      <br />
      Minimum = 3K + 1 = 3×3 + 1 = <strong>10</strong>.
    </p>

    {/* Strong Form */}
    <h2 className="text-3xl font-bold mt-8">Strong Form of Pigeonhole Principle</h2>
    <p className="leading-relaxed">
      Let q₁, q₂, …, qₙ be positive integers.  
      If <strong>(q₁ + q₂ + ... + qₙ − n + 1)</strong> objects are placed into n boxes,
      then at least one box contains qᵢ objects for some i.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 1</h3>
    <p className="leading-relaxed">
      A club can be formed with 10 first-years or 8 second-years or 6 third-years or 4 final-year students.  
      Minimum students needed:
      <br />
      10 + 8 + 6 + 4 − 4 + 1 = <strong>25</strong>
    </p>

    <h3 className="text-2xl font-semibold mt-4">Example 2</h3>
    <p className="leading-relaxed">
      A box has 6 red, 8 green, 10 blue, 12 yellow, 15 white balls.  
      Minimum to guarantee 9 of same color?
      <br />
      Only blue, yellow, white ≥ 9.
      <br />
      So apply strong PHP:
      <br />
      9 + 9 + 9 − 3 + 1 = 25
      <br />
      But we may pick all red & green first: 6 + 8 = 14.
      <br />
      Total = 25 + 14 = <strong>39 balls</strong>
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Pigeonhole Principle</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Computer Science:</strong> Hashing collisions.</li>
      <li><strong>Coding Theory:</strong> Error detection/correction limits.</li>
      <li><strong>Number Theory:</strong> Existence of divisible differences.</li>
      <li><strong>Graph Theory:</strong> Friendship/anti-friendship structures.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <h3 className="text-xl font-semibold mt-4">1. Among any 52 integers…</h3>
    <p className="leading-relaxed">
      51 possible remainders; 52 numbers → two have same remainder → difference divisible by 51.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Among 1001 people…</h3>
    <p className="leading-relaxed">
      Possible friend counts: 0 to 1000 → 1001 values → two people share same friend count.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Five points in a unit square…</h3>
    <p className="leading-relaxed">
      4 sub-squares → at least two points in one → max distance ≤ 1/√2.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. 101 distinct numbers…</h3>
    <p className="leading-relaxed">
      Must have increasing or decreasing subsequence of length ≥ 11.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Two subsets with same sum…</h3>
    <p className="leading-relaxed">
      2¹⁰ = 1024 subsets; possible sums ≤ 90 → two subsets share a sum.
    </p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-8">Practice Questions</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Drawer with 10 black & 10 blue socks — minimum socks for a pair?</li>
      <li>For x students with grades 0–100, what is minimum x for a repeated score?</li>
      <li>City of 500k → show two people share same hair count.</li>
      <li>Group of 6 → show 3 mutual friends or strangers.</li>
      <li>Store sells 3 types of shoes — minimum shoes for matching pair?</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Answer Key</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>3 socks</li>
      <li>102 students</li>
      <li>Because 500,000 &gt; 150,001</li>
      <li>At least 3 same relationships</li>
      <li>4 shoes</li>
    </ul>

    {/* Landmark Problems */}
    <h2 className="text-3xl font-bold mt-8">
      Landmark Open Questions in Number Theory
    </h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Riemann Hypothesis</li>
      <li>P vs NP Problem</li>
      <li>Hodge Conjecture</li>
      <li>Birch and Swinnerton–Dyer Conjecture</li>
      <li>Collatz Conjecture</li>
      <li>Goldbach Conjecture</li>
      <li>Twin Prime Conjecture</li>
      <li>Unique Games Conjecture</li>
      <li>Egyptian Fraction Conjecture</li>
      <li>Invariant Subspace Problem</li>
    </ol>

  </div>
);

export default Home;
