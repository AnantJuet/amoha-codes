import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Predicates and Quantifiers Rules ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Predicates and Quantifiers Rules
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Before diving into Predicates and Quantifiers Rules, you need to know about predicates and quantifiers, and propositional logic rules.
    </p>

    {/* Logical Equivalences */}
    <h2 className="text-3xl font-bold  mt-8">
      Logical Equivalences involving Quantifiers
    </h2>
    <p className="leading-relaxed">
      Two logical statements involving predicates and quantifiers are considered equivalent if and only if they have the same truth value, no matter which predicates are substituted into these statements, irrespective of the domain used for the variables in the propositions.
    </p>

    <p className="leading-relaxed mt-4">
      There are two very important equivalences involving quantifiers:
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>∀x (P(x) ∧ Q(x)) ≡ ∀x P(x) ∧ ∀x Q(x)</li>
      <li>∃x (P(x) ∨ Q(x)) ≡ ∃x P(x) ∨ ∃x Q(x)</li>
    </ul>

    <p className="leading-relaxed mt-4">
      The question arises whether the equivalences would hold if the conjunction is replaced with disjunction in (1) and disjunction is replaced with conjunction in (2).
    </p>

    <p className="leading-relaxed">
      The answer may seem like Yes, but actually it’s No. To prove why they are not equivalent, we must understand what makes two statements equivalent.
    </p>

    <p className="leading-relaxed">
      Let us first check for ∀x (P(x) ∨ Q(x)) ⇔ ∀x P(x) ∨ ∀x Q(x). Is this true? The answer is No.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Proof</h3>
    <p className="leading-relaxed">
      Suppose the hypothesis ∀x (P(x) ∨ Q(x)) is true. This means there are certain x values for which P(x) is true and others where Q(x) is true. It is also possible that for some x values, both P(x) and Q(x) are true.
    </p>
    <p className="leading-relaxed">
      However, ∀x P(x) and ∀x Q(x) are false since neither holds for all x. Hence, the conditional fails, proving the biconditional is false:
    </p>
    <p className="font-medium">∀x(P(x) ∨ Q(x)) ≢ ∀xP(x) ∨ ∀xQ(x)</p>

    <p className="leading-relaxed mt-2">
      Similarly, it can be proved that ∃x(P(x) ∧ Q(x)) ≢ ∃xP(x) ∧ ∃xQ(x).
    </p>

    {/* Negation of Quantifiers */}
    <h2 className="text-3xl font-bold  mt-8">Negation of Quantifiers</h2>
    <h3 className="text-2xl font-semibold mt-4 ">Rules of Negations</h3>
    <p className="leading-relaxed">
      When we negate statements with quantifiers, the type of quantifier is reversed. A negated universal quantifier turns into an existential quantifier, and vice versa.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>¬∀x P(x) ≡ ∃x ¬P(x)</li>
      <li>¬∃x P(x) ≡ ∀x ¬P(x)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Example of Negating Universal Quantifier</h3>
    <p className="leading-relaxed">
      Consider the statement: ∀x P(x) as “Every Computer Science Graduate has taken a course in Discrete Mathematics.”
    </p>
    <p className="leading-relaxed">
      The negation of this statement ¬∀x P(x) can be expressed as ∃x ¬P(x): “There exists a computer science graduate who has not taken a course in Discrete Mathematics.”
    </p>

    {/* Nested Quantifiers */}
    <h2 className="text-3xl font-bold  mt-8">Nested Quantifiers</h2>
    <p className="leading-relaxed">
      It is possible to use two quantifiers such that one quantifier is within the scope of the other one. For example:
    </p>

    <p className="font-medium">∀x ∃y (x + y = 0)</p>

    <p className="leading-relaxed">
      The above statement is interpreted as “For all x, there exists a y such that x + y = 0”. The relative order of quantifiers matters unless they are all of the same kind.
    </p>
  </div>
);

export default Home;
