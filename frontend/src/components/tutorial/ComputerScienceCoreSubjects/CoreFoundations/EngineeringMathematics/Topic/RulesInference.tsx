import React from "react";

const RulesOfInference: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">
    {/* =============== Rules of Inference =============== */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Rules of Inference
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Aug, 2025</p>

    <p className="text-lg leading-relaxed">
      Rules of inference are standard logical patterns that allow us to derive a conclusion from one
      or more given premises in a logically valid way.
    </p>

    <p className="leading-relaxed">
      Rules of inference are important because these are the building blocks for formal proofs in
      mathematics, computer science, and logic. They ensure that every step in your reasoning is valid,
      so your conclusion is guaranteed to be true if your premises are true.
    </p>

    <p className="leading-relaxed">
      The two main categories of Rules of Inference are:
    </p>
    <ul className="list-disc pl-8 space-y-1">
      <li>
        <strong>Rules for Propositional Logic →</strong> Work with whole statements (propositions).
      </li>
      <li>
        <strong>Rules for Predicate Logic →</strong> Extend propositional rules to include quantifiers.
      </li>
    </ul>

    {/* ---------- Rules of Inference for Propositional Logic ---------- */}
    <h2 className="text-3xl font-bold mt-10 ">
      Rules of Inference for Propositional Logic
    </h2>
    <p className="leading-relaxed">
      These deal with statements (propositions) that are either true or false. They use logical
      connectives like ∧ (and), ∨ (or), → (implies), and ¬ (not).
    </p>

    <img
      src="rules_of_inference_2.webp"
      alt="Rules of inference illustration"
      className="rounded-lg shadow-md mx-auto my-4"
    />

    <h3 className="text-2xl font-semibold mt-8 ">1. Modus Ponens (Law of Detachment)</h3>
    <p className="leading-relaxed">
      If a conditional statement (“if-then” statement) is true, and its antecedent is true, then its
      consequent must also be true.
    </p>
    <p className="leading-relaxed font-medium">Form: If p → q and p, then q.</p>
    <p className="leading-relaxed italic">
      Example: If it rains, the ground will be wet. It is raining. ∴ The ground is wet.
    </p>

    <h3 className="text-2xl font-semibold mt-8 ">2. Modus Tollens (Law of Contrapositive)</h3>
    <p className="leading-relaxed">
      If a conditional statement is true, and its consequent is false, then its antecedent must also
      be false.
    </p>
    <p className="leading-relaxed font-medium">Form: If p → q and ¬q, then ¬p.</p>

    <h3 className="text-2xl font-semibold mt-8 ">3. Hypothetical Syllogism</h3>
    <p className="leading-relaxed">
      If two conditional statements are true, where the consequent of the first is the antecedent of
      the second, then the combination is also true.
    </p>
    <p className="leading-relaxed font-medium">Form: If p → q and q → r, then p → r.</p>

    <h3 className="text-2xl font-semibold mt-8 ">4. Disjunctive Syllogism</h3>
    <p className="leading-relaxed">
      If a disjunction (an “or” statement) is true, and one part is false, then the other part is true.
    </p>
    <p className="leading-relaxed font-medium">Form: If p ∨ q and ¬p, then q.</p>

    <h3 className="text-2xl font-semibold mt-8 ">5. Conjunction</h3>
    <p className="leading-relaxed">If two statements are true, then their conjunction is also true.</p>
    <p className="leading-relaxed font-medium">Form: If p and q, then p ∧ q.</p>

    <h3 className="text-2xl font-semibold mt-8 ">6. Simplification</h3>
    <p className="leading-relaxed">
      If a conjunction (an "and" statement) is true, then each of its conjuncts is also true.
    </p>
    <p className="leading-relaxed font-medium">Form: If p ∧ q, then p.</p>

    <h3 className="text-2xl font-semibold mt-8 ">7. Addition</h3>
    <p className="leading-relaxed">
      If a statement is true, then the disjunction (an “or” statement) of that statement with any other
      statement is also true.
    </p>
    <p className="leading-relaxed font-medium">Form: If p, then p ∨ q.</p>

    <h3 className="text-2xl font-semibold mt-8 ">8. Absorption (Abs)</h3>
    <p className="leading-relaxed">
      If a conditional statement is true, then the antecedent implies a conjunction of itself and the
      consequent.
    </p>
    <p className="leading-relaxed font-medium">Form: If p → q, then p → (p ∧ q).</p>

    <h3 className="text-2xl font-semibold mt-8 ">9. Resolution</h3>
    <p className="leading-relaxed">
      If two disjunctions are true and one contains a proposition (P) while the other contains its
      negation (¬P), then the disjunction of the remaining parts is true.
    </p>
    <p className="leading-relaxed font-medium">Form: If P ∨ Q and ¬P ∨ R, then Q ∨ R.</p>

    {/* ---------- Table: Rules of Inference ---------- */}
    <h2 className="text-3xl font-bold mt-10 ">Summary Table: Rules of Inference</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-400 text-gray-900">
          <tr>
            <th className="border px-4 py-2">Rule of Inference</th>
            <th className="border px-4 py-2">Form</th>
            <th className="border px-4 py-2">Tautology</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-medium">Modus Ponens (MP)</td>
            <td className="border px-4 py-2">If p → q and p, then q.</td>
            <td className="border px-4 py-2">p ∧ (p → q)) → ¬q</td>
            <td className="border px-4 py-2">If P implies Q, and P is true, then Q is true.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">Modus Tollens (MT)</td>
            <td className="border px-4 py-2">If p → q and ¬q, then ¬p.</td>
            <td className="border px-4 py-2">(¬q ∧ (p → q)) → ¬p</td>
            <td className="border px-4 py-2">
              If P implies Q, and Q is false, then P is false.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">Hypothetical Syllogism (HS)</td>
            <td className="border px-4 py-2">If p → q and q → r, then p → r.</td>
            <td className="border px-4 py-2">((p → q) ∧ (q → r)) → (p → r)</td>
            <td className="border px-4 py-2">
              If P implies Q and Q implies R, then P implies R.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ---------- Rules for Predicate Logic ---------- */}
    <h2 className="text-3xl font-bold mt-10 ">
      Rules of Inference for Predicate Logic
    </h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-400 text-gray-900">
          <tr>
            <th className="border px-4 py-2">Rule of Inference</th>
            <th className="border px-4 py-2">Form</th>
            <th className="border px-4 py-2">Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-medium">Universal Instantiation</td>
            <td className="border px-4 py-2">∀xP(x) ⇒ P(c)</td>
            <td className="border px-4 py-2">
              If something is true for all x, it’s true for a particular case c.
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-medium">Existential Generalization</td>
            <td className="border px-4 py-2">P(c) ⇒ ∃xP(x)</td>
            <td className="border px-4 py-2">
              If something is true for a particular c, it’s true for some x.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ---------- Examples Section ---------- */}
    <h2 className="text-3xl font-bold mt-10 ">Sample Problems on Rules of Inference</h2>
    <p className="leading-relaxed">
      Below are solved examples illustrating how to apply different rules logically:
    </p>

    <ul className="list-decimal pl-8 space-y-3 leading-relaxed">
      <li>
        <strong>Destructive Dilemma:</strong> Given (P → Q) ∧ (R → S), ¬Q ∨ ¬S. ∴ ¬P ∨ ¬R
      </li>
      <li>
        <strong>Constructive Dilemma:</strong> Given (P → Q) ∧ (R → S), P ∨ R. ∴ Q ∨ S
      </li>
      <li>
        <strong>Modus Ponens:</strong> Given P → Q, P. ∴ Q
      </li>
      <li>
        <strong>Modus Tollens:</strong> Given P → Q, ¬Q. ∴ ¬P
      </li>
    </ul>
  </div>
);

export default RulesOfInference;
