import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ========== Propositions Laws and Algebra ========== */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Propositions Laws and Algebra
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 20 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Propositional logic is the foundation of logical reasoning, playing a vital
      role in understanding mathematical proofs and algorithms.
    </p>

    <p className="leading-relaxed">
      This article explores:
    </p>
    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>Fundamental laws and concepts in the algebra of propositions like Idempotent, Associative, Distributive, and Commutative Laws.</li>
      <li>Special conditional statements essential for understanding logical reasoning.</li>
      <li>Prerequisites: Propositional Logic</li>
    </ul>

    {/* Laws of Algebra */}
    <h2 className="text-3xl font-bold  mt-8">
      Laws of Algebra of Propositions
    </h2>
    <p className="leading-relaxed">
      Below mentioned are the laws of Algebra of Propositions.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Idempotent Law</h3>
    <p className="leading-relaxed">
      p ∨ p ≅ p <br />
      p ∧ p ≅ p <br />
      The truth table of conjunction and disjunction of a proposition with itself will equal the proposition.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Associative Law</h3>
    <p className="leading-relaxed">
      (p ∨ q) ∨ r ≅ p ∨ (q ∨ r) <br />
      (p ∧ q) ∧ r ≅ p ∧ (q ∧ r) <br />
      Associative Law states that propositions also follow associativity and can be written as mentioned above.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Distributive Law</h3>
    <p className="leading-relaxed">
      p ∨ (q ∧ r) ≅ (p ∨ q) ∧ (p ∨ r) <br />
      p ∧ (q ∨ r) ≅ (p ∧ q) ∨ (p ∧ r) <br />
      Distributive Law states that propositions also follow distribution and can be written as mentioned above.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Commutative Law</h3>
    <p className="leading-relaxed">
      p ∨ q ≅ q ∨ p <br />
      p ∧ q ≅ q ∧ p <br />
      It states that propositions follow the commutative property i.e., if a = b then b = a.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Identity Law</h3>
    <p className="leading-relaxed">
      p ∨ T ≅ T <br />
      p ∨ F ≅ p <br />
      p ∧ T ≅ p <br />
      p ∧ F ≅ F <br />
      where T is a Tautology, F is a Contradiction, and p is a proposition.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">De Morgan's Law</h3>
    <p className="leading-relaxed">
      In propositional logic and Boolean algebra, De Morgan's laws are valid rules
      of inference named after Augustus De Morgan. They express conjunctions and
      disjunctions using negation:
      <br />
      ¬(p ∧ q) ≡ ¬p ∨ ¬q <br />
      ¬(p ∨ q) ≡ ¬p ∧ ¬q
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Involution Law</h3>
    <p className="leading-relaxed">~~p ≅ p</p>

    <h3 className="text-2xl font-semibold mt-4 ">Complement Law</h3>
    <p className="leading-relaxed">
      p ∨ ~p ≅ T <br />
      p ∧ ~p ≅ F <br />
      ~T ≅ F <br />
      ~F ≅ T
    </p>

    {/* Conditional Statements */}
    <h2 className="text-3xl font-bold  mt-8">
      Special Conditional Statements
    </h2>
    <p className="leading-relaxed">
      New conditional statements can be formed starting with a conditional statement p → q.
      There are three related conditional statements that occur often and have special names:
    </p>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>Implication: p → q</li>
      <li>Converse: q → p</li>
      <li>Contrapositive: ¬q → ¬p</li>
      <li>Inverse: ¬p → ¬q</li>
    </ul>

    <p className="leading-relaxed">
      Note: The truth value of p → q is the same as its contrapositive. Similarly,
      the converse and inverse also share the same truth value.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example</h3>
    <p className="leading-relaxed">
      If today is Friday, then it is raining. (p → q)
      <br />
      Converse: If it is raining, then today is Friday. (q → p)
      <br />
      Contrapositive: If it is not raining, then today is not Friday. (¬q → ¬p)
      <br />
      Inverse: If today is not Friday, then it is not raining. (¬p → ¬q)
    </p>

    {/* Biconditionals */}
    <h2 className="text-3xl font-bold  mt-8">
      Implicit Use of Biconditionals
    </h2>
    <p className="leading-relaxed">
      In natural language, “if and only if” is often implied. For example:
      “If you complete your homework, then you can go out and play” means
      “You can go out and play if and only if you complete your homework.”
    </p>

    {/* Precedence */}
    <h2 className="text-3xl font-bold  mt-8">
      Precedence Order of Logical Connectives
    </h2>
    <p className="leading-relaxed">
      Logical connectives are used to construct compound propositions by joining
      existing propositions. The precedence order is:
    </p>

    <table className="w-full border border-gray-400">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Operator</th>
          <th className="border px-4 py-2">Precedence</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">¬</td><td className="border px-4 py-2">1</td></tr>
        <tr><td className="border px-4 py-2">∧</td><td className="border px-4 py-2">2</td></tr>
        <tr><td className="border px-4 py-2">∨</td><td className="border px-4 py-2">3</td></tr>
        <tr><td className="border px-4 py-2">→</td><td className="border px-4 py-2">4</td></tr>
        <tr><td className="border px-4 py-2">↔</td><td className="border px-4 py-2">5</td></tr>
      </tbody>
    </table>

    {/* Translating Sentences */}
    <h2 className="text-3xl font-bold  mt-8">
      Translating English Sentences
    </h2>
    <p className="leading-relaxed">
      Natural languages such as English are ambiguous, so they should be converted
      into logical expressions to analyze their truth values.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example</h3>
    <p className="leading-relaxed">
      "You can access the Internet from campus only if you are a computer science
      major or you are not a freshman."
      <br />
      Logical Expression: p → (q ∨ ¬r)
      <br />
      Where:
      <br />
      p = "You can access the Internet from campus." <br />
      q = "You are a computer science major." <br />
      r = "You are a freshman."
    </p>

    {/* Unsolved Problems */}
    <h2 className="text-3xl font-bold  mt-8">Unsolved Problems</h2>
    <ul className="list-decimal ml-6 leading-relaxed space-y-1">
      <li>Simplify ¬(p ∨ ¬q)</li>
      <li>Prove p ∧ (p ∨ q) ≅ p</li>
      <li>What is the inverse of p → q?</li>
      <li>Simplify ¬p ∨ (p ∧ q)</li>
      <li>Prove (p ∧ T) ≅ p</li>
      <li>Determine the contrapositive of p → q</li>
      <li>Simplify ¬(p ∧ ¬q)</li>
      <li>Prove (p ∨ F) ≅ p</li>
      <li>What is the converse of p → ¬q?</li>
      <li>Simplify ¬(p ∨ q)</li>
    </ul>

  </div>
);

export default Home;
