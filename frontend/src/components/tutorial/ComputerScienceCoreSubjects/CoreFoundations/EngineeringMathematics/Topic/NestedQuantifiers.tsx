import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Some Theorems on Nested Quantifiers ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Mathematics | Some Theorems on Nested Quantifiers
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Quantifiers are expressions that indicate the scope of the term to which they are attached — they are predicates.
    </p>
    <p className="leading-relaxed">
      A predicate is a property the subject of the statement can have. For example, in the statement 
      "the sum of x and y is greater than 5", the predicate <strong>Q</strong> is “sum is greater than 5”, 
      and the statement can be represented as Q(x, y), where x and y are variables. 
      The scope of a quantifier or quantification is the range in the formula that the quantifier engages in.
    </p>

    {/* Types of Quantification */}
    <h2 className="text-3xl font-bold  mt-8">Types of Quantification or Scopes</h2>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Universal (∀)</strong> – The predicate is true for all values of x in the domain.</li>
      <li><strong>Existential (∃)</strong> – The predicate is true for at least one x in the domain.</li>
    </ul>
    <p className="leading-relaxed mt-4">
      To know the scope of a quantifier in a formula, make use of <strong>Parse Trees</strong>. 
      Two quantifiers are nested if one is within the scope of the other.
    </p>

    {/* Examples */}
    <h3 className="text-2xl font-semibold mt-6 ">Example 1</h3>
    <p className="leading-relaxed">
      ∀x ∃y (x + y = 5) — Here '∃' (there exists) and '∀' (for all) are quantifiers for variables x and y.
      The statement can be represented as ∀x Q(x), where Q(x) is ∃y P(x, y), and P(x, y) is (x + y = 5).
    </p>

    <h3 className="text-2xl font-semibold mt-6 ">Example 2</h3>
    <p className="leading-relaxed">
      ∀x ∀y ((x &gt; 0) ∧ (y &lt; 0) → (xy &lt; 0))  
      (For every real number x and y, if x is positive and y is negative, then xy is negative.)  
      Again, ∀x Q(x), where Q(x) is ∀y P(x, y).
    </p>

    <h3 className="text-2xl font-semibold mt-6 ">
      Example to Convert a Statement into a Nested Quantifiers Formula
    </h3>
    <p className="leading-relaxed">
      “There is a pupil in this lecture who has taken at least one course in Discrete Maths.”  
      Split it into its two constituents: x (pupil) and y (course).  
      Write it as ∃x ∃y P(x, y), where P(x, y) is "x has taken y".
    </p>

    {/* Theorems */}
    <h2 className="text-3xl font-bold  mt-8">Theorems on Nested Quantifiers</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Theorem 1</h3>
    <p className="leading-relaxed">
      The order of nested existential quantifiers can be changed without changing the meaning of the statement.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Theorem 2</h3>
    <p className="leading-relaxed">
      The order of nested universal quantifiers can be changed without changing the meaning of the statement.
    </p>

    <p className="leading-relaxed mt-4">
      Example: Assume P(x, y) is xy = 8.  
      ∃x ∃y P(x, y) (domain: integers) means “There is an integer x for which there is an integer y such that xy = 8.”  
      This is equivalent to ∃y ∃x P(x, y).  
      Similarly, for P(x, y) = (xy = yx), ∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y).
    </p>

    <p className="leading-relaxed mt-2">
      However, when the nested quantifiers are not the same, changing the order changes the meaning of the statement.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 4</h3>
    <p className="leading-relaxed">
      Assume P(x, y, z) = (x + y = z).  
      ∀x ∀y ∃z P(x, y, z): For all real numbers x and y, there exists a real number z such that x + y = z (True).  
      But ∀z ∃x ∃y P(x, y, z): There exists a real number z such that for all real numbers x and y, x + y = z (False).
    </p>

    {/* Negation */}
    <h2 className="text-3xl font-bold  mt-8">Negation of Nested Quantifiers</h2>
    <h3 className="text-2xl font-semibold mt-4 ">Theorem 3</h3>
    <p className="leading-relaxed">
      To negate a sequence of nested quantifiers, change each quantifier in the sequence to the other type and then negate the predicate.
      So the negation of ∀x ∃y : P(x, y) is ∃x ∀y : ¬P(x, y).
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold  mt-8">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Example 1</h3>
    <p className="leading-relaxed">
      Statement: (∀x∃y, (x + y = 10))  
      Solution: For every x, there exists a y such that (x + y = 10).  
      Choosing y = 10 − x will satisfy the equation for any x.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 2</h3>
    <p className="leading-relaxed">
      Statement: (∃y∀x, (x + y &gt; x))  
      Solution: There exists a y such that for every x, (x + y &gt; x).  
      Choosing any y &gt; 0 satisfies this condition because adding a positive number makes the result greater.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 3</h3>
    <p className="leading-relaxed">
      Statement: (∀x∃y, (x⋅y = 1))  
      Solution: For every x (where x ≠ 0), there exists a y such that (x⋅y = 1).  
      Choosing y = 1/x satisfies the equation.
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Practice Problems - Some Theorems on Nested Quantifiers
    </h2>
    <ol className="list-decimal list-inside leading-relaxed">
      <li>(∀x∃y, (x² + y² = 1))</li>
      <li>(∃y∀x, (x + y ≥ 0))</li>
      <li>(∀x∃y, (xy = x + y))</li>
      <li>(∃y∀x, (x − y ≤ x))</li>
      <li>(∀x∃y, (x³ + y = 0))</li>
      <li>(∃y∀x, (x² + y ≥ 1))</li>
      <li>(∀x∃y, (x + y &gt; 1))</li>
      <li>(∃y∀x, (x − y &lt; 0))</li>
      <li>(∀x∃y, (x² + xy = y))</li>
      <li>(∃y∀x, (x + y ≤ 1))</li>
    </ol>
  </div>
);

export default Home;
