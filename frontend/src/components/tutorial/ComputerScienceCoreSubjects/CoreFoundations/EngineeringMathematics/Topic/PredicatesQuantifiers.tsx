import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* =============== Predicates and Quantifiers =============== */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 ">
      Predicates and Quantifiers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Aug, 2025</p>

    <p className="leading-relaxed">
      Predicates and Quantifiers are fundamental concepts in mathematical logic, essential for expressing
      statements and reasoning about the properties of objects within a domain. These concepts are widely
      used in computer science, engineering, and mathematics to formulate precise and logical statements.
    </p>

    {/* =============== Predicates =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Predicates</h2>
    <p className="leading-relaxed">
      A predicate is a statement that contains variables and becomes a proposition when specific values are
      substituted for those variables. Predicates express properties or relations among objects.
    </p>

    <p className="font-mono bg-gray-400 p-4 rounded-md text-gray-900">
      P(x) = "x is an even number"
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li>When x = 2, P(2) is True.</li>
      <li>When x = 3, P(3) is False.</li>
    </ul>

    {/* =============== Quantifiers =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Quantifiers</h2>
    <p className="leading-relaxed">
      Quantifiers are used in logic to show how much a statement is true for a set of things. They indicate
      whether something is true for all members of a group or only for some of them.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Types of Quantifiers</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Universal Quantifier (∀):</strong> Indicates that a predicate is true for all elements in a
        domain. <br /> Example: ∀x ∈ N, P(x) — “For all natural numbers x, x is even.”
      </li>
      <li>
        <strong>Existential Quantifier (∃):</strong> Indicates that there exists at least one element in a
        domain for which the predicate is true. <br /> Example: ∃x ∈ N, P(x) — “There exists a natural number
        x such that x is even.”
      </li>
    </ul>

    {/* =============== Comparison Table =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Predicates vs Quantifiers</h2>
    <table className="w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-400 text-left text-gray-900">
          <th className="border border-gray-300 p-2">Predicate</th>
          <th className="border border-gray-300 p-2">Quantifier</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">A statement containing variables</td>
          <td className="border border-gray-300 p-2">A symbol indicating the scope of the predicate</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Describes a property or relation</td>
          <td className="border border-gray-300 p-2">Specifies the extent to which the predicate is true</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">P(x): "x is an even number"</td>
          <td className="border border-gray-300 p-2">∀: "For all" or ∃: "There exists"</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">No specific symbol</td>
          <td className="border border-gray-300 p-2">∀ (Universal), ∃ (Existential)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Used to form logical statements</td>
          <td className="border border-gray-300 p-2">Used to quantify logical statements</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">P(x), Q(x, y)</td>
          <td className="border border-gray-300 p-2">∀x, ∃y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Describes properties of individual elements</td>
          <td className="border border-gray-300 p-2">Extends predicates over a range of elements</td>
        </tr>
      </tbody>
    </table>

    {/* =============== Applications =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Applications in Computer Science</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Formal Proofs:</strong> Predicate logic forms the basis for program verification and AI
        reasoning systems.
      </li>
      <li>
        <strong>Databases & Query Languages:</strong> SQL uses predicate logic — WHERE clauses are predicates,
        and EXISTS / ALL are quantifiers.
      </li>
      <li>
        <strong>Algorithms & Data Structures:</strong> Used to define preconditions and postconditions.
      </li>
      <li>
        <strong>Artificial Intelligence:</strong> Predicates and quantifiers form the foundation of
        first-order logic (FOL).
      </li>
      <li>
        <strong>Compiler Design:</strong> Used in static analysis tools to check code rules.
      </li>
    </ul>

    {/* =============== Solved Questions =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Solved Questions on Predicates and Quantifiers</h2>

    <ol className="list-decimal list-inside space-y-4">
      <li>
        <strong>P(x):</strong> “x &gt; 5”, where x ∈ ℝ. <br />
        <strong>Solution:</strong> P(7) is true; P(3) is false.
      </li>

      <li>
        <strong>Q(x, y):</strong> “x + y = 10”, x, y ∈ ℤ. <br />
        Q(3, 7) = true; Q(4, 5) = false.
      </li>

      <li>
        <strong>R(x):</strong> “x² ≥ 0”, x ∈ ℝ. <br />
        ∀x R(x) is true (since squares are always non-negative).
      </li>

      <li>
        <strong>S(x):</strong> “x² = 4”, x ∈ ℝ. <br />
        ∃x S(x) is true (x = 2, -2).
      </li>

      <li>
        <strong>Q(x):</strong> “x + 3 = 5”, x ∈ ℤ. <br />
        ∀x Q(x) — False; ∃x Q(x) — True (x = 2).
      </li>

      <li>
        <strong>Q(x):</strong> “x is prime”, x ∈ ℕ. <br />
        ∀x Q(x) — False; ∃x Q(x) — True (2, 3, 5, ...).
      </li>

      <li>
        <strong>R(x, y):</strong> “x &lt; y”, x, y ∈ ℝ. <br />
        ∀x∀y R(x, y) — False; ∃x∃y R(x, y) — True (e.g., 1 &lt; 2).
      </li>

      <li>
        <strong>P(x):</strong> “x divisible by 3”, x ∈ ℤ. <br />
        ∀x P(x) — False; ∃x P(x) — True (0, 3, 6...).
      </li>

      <li>
        <strong>Q(x, y):</strong> “x + y &gt; 10”, x, y ∈ ℝ. <br />
        ∀x∃y Q(x, y) — True (choose y = 11 - x).
      </li>

      <li>
        <strong>R(x):</strong> “x is a vowel”, x is a letter. <br />
        Statement: ∃x R(x) — “There exists a vowel in the English alphabet.”
      </li>
    </ol>

    {/* =============== Unsolved Questions =============== */}
    <h2 className="text-3xl font-bold mt-8 ">Unsolved Questions on Predicates and Quantifiers</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Determine the truth value of ∃x (x² - 1 = 0).</li>
      <li>Interpret ∀x ∃y (x &lt; y) for integers.</li>
      <li>Write "All integers are even" in predicate logic.</li>
      <li>Express "Some mammals can fly" using predicate logic.</li>
      <li>Write "Everyone has a parent" using predicate logic.</li>
      <li>Find the negation of ∀x (x is prime).</li>
      <li>Determine truth of ∀x∀y (x + y = 10).</li>
      <li>Write "No integer is a multiple of 5" using predicate logic.</li>
      <li>Write "Nobody is taller than themselves" using predicate logic.</li>
    </ul>
  </div>
);

export default Home;
