import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Rings, Integral Domains and Fields ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Mathematics | Rings, Integral Domains and Fields
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Prerequisite: Mathematics | Algebraic Structure
    </p>

    <p className="leading-relaxed">
      A <strong>Ring</strong> is a non-empty set \(R\) with two binary operations (addition and multiplication)
      satisfying group, semigroup, and distributive properties.
    </p>

    {/* Ring Definition */}
    <h2 className="text-3xl font-bold  mt-8">Definition of Ring</h2>

    <p className="leading-relaxed">
      Let + and · be two binary operations on a non-empty set \(R\). Then \(R\) is a ring if:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>\( (R, +) \) is an abelian (commutative) group.</li>
      <li>\( (R, \cdot) \) is a semigroup.</li>
      <li>Left distributive: \(a(b + c) = ab + ac\).</li>
      <li>Right distributive: \((b + c)a = ba + ca\).</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Detailed Conditions</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li>\(a + b \in R\), closure under addition.</li>
      <li>\(a + (b + c) = (a + b) + c\).</li>
      <li>There exists an additive identity \(0\) such that \(a + 0 = a\).</li>
      <li>For every \(a\), there exists \(-a\) such that \(a + (-a) = 0\).</li>
      <li>\(a + b = b + a\).</li>
      <li>\(ab \in R\), closure under multiplication.</li>
      <li>\(a(bc) = (ab)c\), associativity of multiplication.</li>
      <li>Distributive laws hold.</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold  mt-8">Examples of Rings</h2>

    <p className="leading-relaxed">
      <strong>\(\mathbb{"Z"}\)</strong> (integers) form a ring since addition is an abelian group, multiplication is a semigroup, and distributive laws hold.
    </p>

    <p className="leading-relaxed">
    <strong>Ring of Integers modulo n:</strong>
    {" "}
    Z<sub>n</sub> = {"{0̄, 1̄, 2̄, ..., (n-1)̄}"} is a ring under addition and
    multiplication modulo n.
    </p>


    <p className="leading-relaxed">
      The set {"{0, 1, 2, 3, 4}"} is a ring under addition and multiplication modulo 5.
    </p>

    {/* Divisors of Zero */}
    <h2 className="text-3xl font-bold  mt-8">Divisors of Zero</h2>

    <p className="leading-relaxed">
      A non-zero element \(a\) in a ring \(R\) is a divisor of zero if there exists a non-zero \(b\) such that \(ab = 0\).
    </p>

    <p className="leading-relaxed">
      Example: In \( \mathbb{"Z"}_6 \), the elements {"{2̄, 3̄, 4̄}"} are divisors of zero because  
      \(2̄ \cdot 3̄ = 6̄ = 0̄\).
    </p>

    {/* Units */}
    <h2 className="text-3xl font-bold  mt-8">Units</h2>

    <p className="leading-relaxed">
      An element \(a\) in a ring with unity is called a <strong>unit</strong> if there exists \(b\) such that  
      \(ab = ba = 1\).  
      The element \(b\) is called the multiplicative inverse of \(a\).
    </p>

    {/* Types of Rings */}
    <h2 className="text-3xl font-bold  mt-8">Types of Rings</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Null Ring:</strong> {"{0}"} with 0+0=0 and 0·0=0.</li>
      <li><strong>Ring with Unity:</strong> Contains multiplicative identity 1.</li>
      <li><strong>Commutative Ring:</strong> Multiplication is commutative.</li>
      <li><strong>Boolean Ring:</strong> \(a^2 = a\) for all \(a\).</li>
    </ul>

    {/* Integral Domain */}
    <h2 className="text-3xl font-bold  mt-8">Integral Domain</h2>

    <p className="leading-relaxed">
      A non-trivial ring with unity is an <strong>integral domain</strong> if:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>It is commutative.</li>
      <li>It has no divisors of zero.</li>
    </ul>

    <p className="leading-relaxed">
      Examples: \( \mathbb{"Z"}, \mathbb{"R"}, \mathbb{"Q"} \)
    </p>

    {/* Field */}
    <h2 className="text-3xl font-bold  mt-8">Field</h2>

    <p className="leading-relaxed">
      A non-empty set \(F\) is a <strong>field</strong> if every non-zero element has a multiplicative inverse and both operations are commutative.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>All field axioms of addition and multiplication hold.</li>
      <li>Every non-zero element is a unit.</li>
    </ul>

    <p className="leading-relaxed">
      Examples: \( \mathbb{"Q"}, \mathbb{"R"} \)
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Important Results</h3>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Every field is an integral domain.</li>
      <li>Every finite integral domain is a field.</li>
      <li>A finite commutative ring with no divisors of zero is an integral domain.</li>
    </ul>

  </div>
);

export default Home;
