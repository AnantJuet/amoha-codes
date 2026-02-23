import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Propositional Logic ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Propositional Logic
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Propositional logic is a branch of mathematics that studies the logical relationships
      between propositions (or statements, sentences, assertions) taken as a whole, and connected
      via logical connectives.
    </p>
    <p className="leading-relaxed">
      It focuses on how these propositions relate to each other through logical connectives such as
      <strong> AND, OR, NOT, IF…THEN, </strong> etc.
    </p>

    {/* Examples of Propositions */}
    <h2 className="text-3xl font-bold  mt-8">Examples of Propositions</h2>
    <table className="w-full text-left border border-gray-300 mt-3">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Statement</th>
          <th className="border px-4 py-2">Truth Value</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">The sun rises in the East and sets in the West.</td><td className="border px-4 py-2">True</td></tr>
        <tr><td className="border px-4 py-2">1 + 1 = 2</td><td className="border px-4 py-2">True</td></tr>
        <tr><td className="border px-4 py-2">‘b’ is a vowel.</td><td className="border px-4 py-2">False</td></tr>
      </tbody>
    </table>

    {/* Non-Propositions */}
    <h2 className="text-3xl font-bold  mt-8">Non-Propositions</h2>
    <p className="leading-relaxed">
      Some sentences are not propositions because they don’t have a definite truth value or may vary depending on context:
    </p>
    <ul className="list-decimal ml-6 mt-2 space-y-1">
      <li>“What time is it?” (Question)</li>
      <li>“Go out and play.” (Command)</li>
      <li>“x + 1 = 2” (Open sentence — depends on the value of x)</li>
    </ul>

    {/* Logical Connectives */}
    <h2 className="text-3xl font-bold  mt-8">Logical Connectives</h2>
    <p className="leading-relaxed">
      In propositional logic, logical connectives are symbols used to build compound propositions from atomic ones.
    </p>

    {/* Truth Tables */}
    <h2 className="text-3xl font-bold  mt-8">Truth Table of Propositional Logic</h2>

    {/* Negation */}
    <h3 className="text-2xl font-semibold mt-6 ">1. Negation (¬p)</h3>
    <table className="w-1/2 text-left border border-gray-300 mt-2">
      <thead className="bg-gray-400 text-gray-900"><tr><th className="border px-4 py-2">p</th><th className="border px-4 py-2">¬p</th></tr></thead>
      <tbody><tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td></tr><tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td></tr></tbody>
    </table>

    {/* Conjunction */}
    <h3 className="text-2xl font-semibold mt-6 ">2. Conjunction (p ∧ q)</h3>
    <table className="w-1/2 text-left border border-gray-300 mt-2">
      <thead className="bg-gray-400 text-gray-900"><tr><th className="border px-4 py-2">p</th><th className="border px-4 py-2">q</th><th className="border px-4 py-2">p ∧ q</th></tr></thead>
      <tbody>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td></tr>
      </tbody>
    </table>

    {/* Disjunction */}
    <h3 className="text-2xl font-semibold mt-6 ">3. Disjunction (p ∨ q)</h3>
    <table className="w-1/2 text-left border border-gray-300 mt-2">
      <thead className="bg-gray-400 text-gray-900"><tr><th className="border px-4 py-2">p</th><th className="border px-4 py-2">q</th><th className="border px-4 py-2">p ∨ q</th></tr></thead>
      <tbody>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td></tr>
      </tbody>
    </table>

    {/* ================= Propositional Logic Examples ================= */}
    <h2 className="text-3xl font-bold  mt-10 border-b pb-2">
      Propositional Logic Examples
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Example 1</h3>
    <p className="leading-relaxed">
      Consider the following statements:  
      <br /> P: Good mobile phones are not cheap.  
      <br /> Q: Cheap mobile phones are not good.  
      <br /> L: P implies Q  
      <br /> M: Q implies P  
      <br /> N: P is equivalent to Q
    </p>

    <p className="mt-2">Which one of the following is correct?</p>
    <ul className="list-disc ml-6">
      <li>(A) Only L is TRUE</li>
      <li>(B) Only M is TRUE</li>
      <li>(C) Only N is TRUE</li>
      <li>(D) L, M and N are TRUE</li>
    </ul>

    <h4 className="text-xl font-semibold mt-4">Solution:</h4>
    <p>
      Let a and b be two propositions:  
      <br /> a: Good Mobile Phones  
      <br /> b: Cheap Mobile Phones  
      <br /> Then, P: a → ¬b and Q: b → ¬a
    </p>

    <table className="w-2/3 text-left border border-gray-300 mt-3">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border px-4 py-2">a</th>
          <th className="border px-4 py-2">b</th>
          <th className="border px-4 py-2">¬a</th>
          <th className="border px-4 py-2">¬b</th>
          <th className="border px-4 py-2">P</th>
          <th className="border px-4 py-2">Q</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td></tr>
        <tr><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
        <tr><td className="border px-4 py-2">F</td><td className="border px-4 py-2">F</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td><td className="border px-4 py-2">T</td></tr>
      </tbody>
    </table>

    <p className="mt-3">It clearly shows that P and Q are equivalent. So, option <strong>D</strong> is correct.</p>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold mt-6">Example 2</h3>
    <p>Which one of the following is not equivalent to p ↔ q?</p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) (¬p ∨ q) ∧ (p ∨ ¬q)</li>
      <li>(B) (¬p ∨ q) ∧ (q → p)</li>
      <li>(C) (¬p ∧ q) ∨ (p ∧ ¬q)</li>
      <li>(D) (¬p ∧ ¬q) ∨ (p ∧ q)</li>
    </ul>

    <p className="mt-3">
      A biconditional is true when both propositions have the same truth value:  
      <strong>p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)</strong>  
      Option (D) matches this directly.
    </p>

    <p>
      Option (A): (¬p∨q) ∧ (p∨¬q) is equivalent to (¬p∨q) ∧ (¬q∨p), which is p ↔ q.  
      Option (B): q → p is ¬q∨p, so (B) is same as (A).  
      Option (C): (¬p∧q) ∨ (p∧¬q) is true when p and q have opposite truth values → p⊕q = ¬(p↔q)
    </p>

    <p className="mt-2"><strong>Hence, option (C) is correct.</strong></p>

    {/* ================= Unsolved Questions ================= */}
    <h2 className="text-3xl font-bold  mt-10 border-b pb-2">
      Unsolved Questions on Propositional Logic
    </h2>

    <ol className="list-decimal ml-6 space-y-2 mt-4">
      <li>
        Given P: “It is raining” (r), Q: “The ground is wet” (w).  
        Check if (r→w) ∧ (w→r) is logically equivalent to ¬r∨w. Justify with a truth table.
      </li>
      <li>
        Simplify (p∨q) ∧ (¬p∨q) to an equivalent expression using logical laws.
      </li>
      <li>
        P: "If I study, I will pass." (s→p)  
        Q: "If I do not pass, then I did not study." (¬p→¬s)  
        R: "If I pass, then I studied." (p→s)  
        Which of the following is true?  
        (A) P and Q are equivalent, but not R  
        (B) P and R are equivalent, but not Q  
        (C) All three are equivalent  
        (D) None are equivalent
      </li>
      <li>
        Given P: p→(q∨r), Q: (p→q)∨(p→r).  
        Are P and Q logically equivalent? Justify using a truth table.
      </li>
    </ol>

  </div>
);

export default Home;
