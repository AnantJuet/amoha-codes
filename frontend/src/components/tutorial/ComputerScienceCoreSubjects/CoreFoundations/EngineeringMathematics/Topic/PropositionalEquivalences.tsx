import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Propositional Equivalences ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Propositional Equivalences
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Apr, 2025</p>

    <p className="text-lg leading-relaxed">
      Propositional equivalences are fundamental concepts in logic that allow us to simplify and manipulate logical statements.
      Understanding these equivalences is crucial in computer science, engineering, and mathematics, as they are used to
      design circuits, optimize algorithms, and prove theorems. This article explores the main propositional equivalences,
      their applications, and examples.
    </p>

    <p className="leading-relaxed">
      Propositional equivalences are logical statements that are true for the same set of truth values. Two propositions P and Q
      are said to be logically equivalent if they have the same truth table. This is denoted as P ≡ Q.
    </p>

    {/* ================= Types of Propositions ================= */}
    <h2 className="text-3xl font-bold  mt-8">Types of Propositions</h2>
    <p className="text-gray-700 italic">
      Note: Propositional logic helps in simplifying and solving logical expressions.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">1. Atomic Propositions</h3>
    <p className="leading-relaxed">
      These are also called primitive propositions or basic statements. They are the simplest form of propositions
      and cannot be divided further. They represent a single fact or idea.
    </p>
    <ul className="list-disc list-inside">
      <li>"The sun is shining." (True)</li>
      <li>"It is raining today." (False)</li>
      <li>"2 + 2 = 4" (True)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">2. Compound Propositions</h3>
    <p className="leading-relaxed">
      These are created by combining atomic propositions using logical connectives such as “and”, “or”, “not”, and “implies”.
    </p>
    <ul className="list-disc list-inside">
      <li>"The sun is shining and it is raining today."</li>
      <li>"It is raining today or the sun is shining."</li>
      <li>"It is not raining today."</li>
    </ul>

    {/* ================= Key Propositional Equivalences ================= */}
    <h2 className="text-3xl font-bold  mt-8">Key Propositional Equivalences</h2>

    <ol className="list-decimal list-inside space-y-1">
      <li><strong>Identity Laws:</strong> P ∧ true ≡ P, P ∨ false ≡ P</li>
      <li><strong>Domination Laws:</strong> P ∨ true ≡ true, P ∧ false ≡ false</li>
      <li><strong>Idempotent Laws:</strong> P ∨ P ≡ P, P ∧ P ≡ P</li>
      <li><strong>Double Negation Law:</strong> ¬(¬P) ≡ P</li>
      <li><strong>Commutative Laws:</strong> P ∨ Q ≡ Q ∨ P, P ∧ Q ≡ Q ∧ P</li>
      <li><strong>Associative Laws:</strong> (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R), (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)</li>
      <li><strong>Distributive Laws:</strong> P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R), P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)</li>
      <li><strong>De Morgan’s Laws:</strong> ¬(P ∧ Q) ≡ ¬P ∨ ¬Q, ¬(P ∨ Q) ≡ ¬P ∧ ¬Q</li>
      <li><strong>Absorption Laws:</strong> P ∨ (P ∧ Q) ≡ P, P ∧ (P ∨ Q) ≡ P</li>
      <li><strong>Negation Laws:</strong> P ∨ ¬P ≡ true, P ∧ ¬P ≡ false</li>
    </ol>

    {/* ================= Applications ================= */}
    <h2 className="text-3xl font-bold  mt-8">Applications in Engineering</h2>

    <h3 className="text-2xl font-semibold mt-4 ">1. Digital Logic Design</h3>
    <p>Used to simplify Boolean expressions for efficient circuit designs.</p>

    <h3 className="text-2xl font-semibold mt-4 ">2. Software Engineering</h3>
    <p>Helps in optimizing conditional statements in programming, improving efficiency.</p>

    <h3 className="text-2xl font-semibold mt-4 ">3. Theoretical Computer Science</h3>
    <p>Used in proofs, algorithm optimization, and computational complexity analysis.</p>

    <h3 className="text-2xl font-semibold mt-4 ">4. Control Systems</h3>
    <p>Applied to simplify logical conditions for reliable control algorithms.</p>

    {/* ================= Solved Examples ================= */}
    <h2 className="text-3xl font-bold  mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p>Show that p ∧ (p ∨ q) ≡ p</p>
    <p><strong>Solution:</strong> p ∧ (p ∨ q) ≡ (p ∧ p) ∨ (p ∧ q) ≡ p ∨ (p ∧ q) ≡ p</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p>Prove that ¬(p ∧ q) ≡ ¬p ∨ ¬q (De Morgan’s Law)</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 3</h3>
    <p>Show that p → q ≡ ¬p ∨ q</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 4</h3>
    <p>Prove that (p → q) ∧ (p → r) ≡ p → (q ∧ r)</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 5</h3>
    <p>Show that ¬(p ↔ q) ≡ p ↔ ¬q</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 6</h3>
    <p>Show that (p → q) ∧ (q → r) → (p → r) is a tautology.</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 7</h3>
    <p>Prove that ¬(p ∨ q) ≡ ¬p ∧ ¬q</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 8</h3>
    <p>Show that (p ∧ q) → r ≡ p → (q → r)</p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 9</h3>
    <p>Prove that (p ↔ q) ≡ (p → q) ∧ (q → p)</p>

    {/* ================= Practice Problems ================= */}
    <h2 className="text-3xl font-bold  mt-8">Practice Problems on Propositional Equivalences</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Prove that p → (q → r) ≡ (p ∧ q) → r.</li>
      <li>Show that (p → q) ∨ (p → r) ≡ p → (q ∨ r).</li>
      <li>Demonstrate that ¬(p → q) ≡ p ∧ ¬q.</li>
      <li>Prove that (p → q) ∧ (p → ¬q) ≡ ¬p.</li>
      <li>Show that (p ∨ q) ∧ (p ∨ r) ≡ p ∨ (q ∧ r).</li>
      <li>Prove that (p → q) ∧ (r → s) ≡ (p ∧ r) → (q ∧ s).</li>
      <li>Demonstrate that p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q).</li>
      <li>Show that ¬(p ↔ q) ≡ p ↔ ¬q.</li>
      <li>Prove that (p → q) → r ≡ (¬p → r) ∧ (q → r).</li>
      <li>Demonstrate that (p ∨ q) → r ≡ (p → r) ∧ (q → r).</li>
    </ul>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold  mt-8">Conclusion</h2>
    <p className="leading-relaxed">
      These problems cover a variety of propositional equivalences involving implications,
      conjunctions, disjunctions, negations, and biconditionals.
      Working through them helps strengthen understanding of logical equivalences and
      enhances skills in simplifying logical expressions — a crucial ability in computer science,
      mathematics, and formal logic.
    </p>
  </div>
);

export default Home;
