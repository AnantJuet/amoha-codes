import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Title ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Set Theory Formulas
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Oct, 2025</p>

    {/* ================= Introduction ================= */}
    <p className="text-lg leading-relaxed">
      In mathematics, a set is a collection of well-defined individual objects.
      A set can contain numbers, days of the week, vehicles, etc.
      Example: A = {'{'}2, 4, 6, 8{'}'}. Here, 2, 4, 6 and 8 are elements of A.
      Elements in a set may appear in any order, but cannot repeat.
    </p>

    {/* ================= Section Heading ================= */}
    <h2 className="text-3xl font-bold  mt-8">Set Formulas</h2>
    <p className="leading-relaxed">
      Set formulas help in areas like statistics, probability, geometry, and sequences.
    </p>

    {/* ================= Number of Elements ================= */}
    <h3 className="text-2xl font-semibold mt-4 ">
      Set Formulas on the Number of Elements of Sets
    </h3>

    <p className="leading-relaxed">
      If n(A) and n(B) represent the number of elements in finite sets A and B, then:
    </p>

    <ul className="list-disc ml-8 space-y-1">
      <li>n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</li>
      <li>n(A) = n(A ∪ B) + n(A ∩ B) - n(B)</li>
      <li>n(B) = n(A ∪ B) + n(A ∩ B) - n(A)</li>
    </ul>

    <p className="leading-relaxed mt-2">If A and B are disjoint:</p>

    <ul className="list-disc ml-8 space-y-1">
      <li>n(A ∪ B) = n(A) + n(B)</li>
      <li>A ∩ B = ∅</li>
      <li>n(A − B) = n(A)</li>
    </ul>

    {/* ================= Properties of Sets ================= */}
    <h3 className="text-2xl font-semibold mt-6 ">
      Set Formulas on Properties of Sets
    </h3>

    <h4 className="text-xl font-bold mt-4">Commutativity</h4>
    <ul className="list-disc ml-8">
      <li>A ∩ B = B ∩ A</li>
      <li>A ∪ B = B ∪ A</li>
    </ul>

    <h4 className="text-xl font-bold mt-4">Associativity</h4>
    <ul className="list-disc ml-8">
      <li>A ∩ (B ∩ C) = (A ∩ B) ∩ C</li>
      <li>A ∪ (B ∪ C) = (A ∪ B) ∪ C</li>
    </ul>

    <h4 className="text-xl font-bold mt-4">Distributivity</h4>
    <ul className="list-disc ml-8">
      <li>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</li>
    </ul>

    <h4 className="text-xl font-bold mt-4">Idempotent Law</h4>
    <ul className="list-disc ml-8">
      <li>A ∩ A = A</li>
      <li>A ∪ A = A</li>
    </ul>

    <h4 className="text-xl font-bold mt-4">Law of ∅ and U</h4>
    <ul className="list-disc ml-8">
      <li>A ∩ ∅ = ∅</li>
      <li>U ∩ A = A</li>
      <li>A ∪ ∅ = A</li>
      <li>U ∪ A = U</li>
    </ul>

    {/* ================= Complement Sets ================= */}
    <h3 className="text-2xl font-semibold mt-6 ">
      Sets Formulas of Complement Sets
    </h3>

    <ul className="list-disc ml-8 space-y-1">
      <li>Complement Law: A ∪ A' = U, A ∩ A' = ∅, A' = U − A</li>
      <li>De Morgan's Laws: (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'</li>
      <li>Double Complement: (A')' = A</li>
      <li>Empty & Universal: ∅' = U, U' = ∅</li>
    </ul>

    {/* ================= Difference of Sets ================= */}
    <h3 className="text-2xl font-semibold mt-6 ">
      Sets Formulas of Difference of Sets
    </h3>

    <ul className="list-disc ml-8 space-y-1">
      <li>A − A = ∅</li>
      <li>B − A = B ∩ A'</li>
      <li>B − A = B − (A ∩ B)</li>
      <li>(A − B) = A if A ∩ B = ∅</li>
      <li>(A − B) ∩ C = (A ∩ C) − (B ∩ C)</li>
      <li>A Δ B = (A − B) ∪ (B − A)</li>
      <li>n(A ∪ B) = n(A − B) + n(B − A) + n(A ∩ B)</li>
      <li>n(A − B) = n(A) − n(A ∩ B)</li>
      <li>n(A') = n(U) − n(A)</li>
    </ul>

    {/* ================= Related Reads ================= */}
    <h2 className="text-3xl font-bold  mt-10">Related Reads</h2>

    <ul className="list-disc ml-8 space-y-1">
      <li>Cardinality of a Set</li>
      <li>Representation of a Set</li>
      <li>Types of Sets</li>
      <li>Operation on Sets</li>
    </ul>

    {/* ================= Sample Questions ================= */}
    <h2 className="text-3xl font-bold  mt-10">Sample Questions – Set Theory Formulas</h2>

    {/* Q1 */}
    <h3 className="text-xl font-semibold mt-4">Question 1</h3>
    <p className="leading-relaxed">
      A set is a collection of elements enclosed in braces.
      Example: A = {'{'}1, 2, 3, 4{'}'}.
    </p>

    {/* Q2 */}
    <h3 className="text-xl font-semibold mt-4">Question 2</h3>
    <p className="leading-relaxed">
      Sets represent groups of related objects like natural numbers, rational numbers, etc.
    </p>

    {/* Q3 */}
    <h3 className="text-xl font-semibold mt-4">Question 3</h3>
    <p className="leading-relaxed">
      Union of sets A and B contains elements of both.
      Example: A = {'{'}2, 3{'}'}, B = {'{'}5, 6{'}'}, A ∪ B = {'{'}2, 3, 5, 6{'}'}.
    </p>

    {/* Q4 */}
    <h3 className="text-xl font-semibold mt-4">Question 4</h3>
    <p className="leading-relaxed">
      A = {'{'}1, 3, 5, 7, 9{'}'} in set-builder form is:
      {' '}A = {'{'}x | x is an odd natural number less than 10{'}'}.
    </p>

    {/* Q5 */}
    <h3 className="text-xl font-semibold mt-4">Question 5</h3>
    <p className="leading-relaxed">
      A = {'{'}10, 12, 14, 16, 18{'}'}, B = {'{'}14, 16{'}'}.
      A ∪ B = {'{'}10, 12, 14, 16, 18{'}'},
      A ∩ B = {'{'}14, 16{'}'},
      A − B = {'{'}10, 12, 18{'}'}.
    </p>

    {/* Q6 */}
    <h3 className="text-xl font-semibold mt-4">Question 6</h3>
    <p className="leading-relaxed">
      Intersection formula:
      n(A ∩ B) = n(A) + n(B) − n(A ∪ B).
    </p>

    {/* Q7 */}
    <h3 className="text-xl font-semibold mt-4">Question 7</h3>
    <p className="leading-relaxed">
      Set formulas apply in abstract math.
      Example: R − Q = set of irrationals.  
      Probability: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
    </p>

    {/* Q8 */}
    <h3 className="text-xl font-semibold mt-4">Question 8</h3>
    <p className="leading-relaxed">
      Total students: 240, with various sports groups.  
      Students playing all three = 11.  
      Badminton but not rugby = 76.  
      Badminton & rugby but not table tennis = 5.
    </p>

    {/* Q9 */}
    <h3 className="text-xl font-semibold mt-4">Question 9</h3>
    <p className="leading-relaxed">
      Total students = 800.  
      Drinking neither mojito nor juice = 200.
    </p>

  </div>
);

export default Home;
