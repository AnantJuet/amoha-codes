import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Subsets
    </h1>
    <p className="text-sm text-gray-600">Last Updated : 01 Oct, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A subset is a set whose all elements are contained within another set.
      A subset is indicated by the symbol <strong>⊆</strong> and read as "is a subset of" in set theory.
    </p>

    <p className="leading-relaxed">
      A subset may contain some or all elements of another set. Every set is a subset of itself,
      and the empty set ∅ is a subset of all sets.
    </p>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-6 ">Examples</h2>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        For a set S = {'{x, y, z}'}, possible subsets are: {'{}, {x}, {y}, {z}, {x, y}, {y, z}, {z, x}, {x, y, z}'}
      </li>
      <li>
        If A = {'{odd numbers}'} and B = {'{1, 3, 5}'}, then B ⊆ A; A is a superset of B.
      </li>
      <li>
        If A = {'{apple, banana}'} and B = {'{all fruits}'}, then A is a subset of B.
      </li>
    </ul>

    {/* Subsets of Real Numbers */}
    <h2 className="text-3xl font-bold mt-10 ">Subsets of Real Numbers</h2>
    <p className="leading-relaxed">
      Real numbers can be expressed as decimal numbers and include fractions, decimals,
      whole numbers, integers, rational numbers, and irrational numbers.
    </p>

    {/* Subsets of Integers */}
    <h2 className="text-3xl font-bold mt-10 ">Subsets of Integers</h2>
    <p className="leading-relaxed">
      Integers include all whole numbers (positive, negative, and zero). They do not include
      fractions or decimals. The set of integers is denoted by <strong>Z</strong>.
    </p>

    <p className="leading-relaxed">
      Example: <strong>-5</strong> is a rational number and an integer.
    </p>

    {/* Power Set */}
    <h2 className="text-3xl font-bold mt-10 ">Power Set of a Set</h2>
    <p className="leading-relaxed">
      A power set contains all subsets of a set, including the empty set and the set itself.
      P(A) denotes the power set of A.
    </p>

    <p className="leading-relaxed">
      Example: If A = {'{1, 2}'}, then P(A) = {'{{ }, {1}, {2}, {1, 2}}'}.
    </p>

    {/* Number of subsets */}
    <h2 className="text-3xl font-bold mt-10 ">Number of Subsets</h2>
    <p className="leading-relaxed">
      The number of subsets of a set with <strong>n</strong> elements is:
      <br />
      <strong>2ⁿ</strong>
    </p>

    <p className="leading-relaxed">
      Example: A set with four elements has 2⁴ = 16 subsets.
    </p>

    {/* Types of Subsets */}
    <h2 className="text-3xl font-bold mt-10 ">Types of Subsets in Maths</h2>

    {/* Proper Subset */}
    <h3 className="text-2xl font-semibold mt-6 ">Proper Subset</h3>
    <p className="leading-relaxed">
      A proper subset contains some but not all elements of a set. It is denoted by the symbol <strong>⊂</strong>.
    </p>

    <p className="leading-relaxed">
      Example: If A = {'{1, 3, 5}'}, proper subsets are:
      {' {}, {1}, {3}, {5}, {1,3}, {3,5}, {1,5}'}
    </p>

    <h4 className="text-xl font-semibold mt-4">Proper Subset Formula</h4>
    <p className="leading-relaxed">
      Number of proper subsets = <strong>2ⁿ - 1</strong>
    </p>

    {/* Improper Subset */}
    <h3 className="text-2xl font-semibold mt-6 ">Improper Subset</h3>
    <p className="leading-relaxed">
      An improper subset is the set itself. It includes all elements of the original set.
      Symbol used: <strong>⊆</strong>.
    </p>

    <p className="leading-relaxed">
      Example: If A = {'{1,3,5}'}, improper subset is A itself.
    </p>

    <h4 className="text-xl font-semibold mt-4">Improper Subset Formula</h4>
    <p className="leading-relaxed">
      Number of improper subsets = <strong>1</strong>
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-10 ">Proper vs Improper Subsets</h2>

    <table className="w-full border border-gray-400">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Proper Subset</th>
          <th className="border px-4 py-2">Improper Subset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Contains some elements</td>
          <td className="border px-4 py-2">Contains all elements</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Never equal to the set</td>
          <td className="border px-4 py-2">Always equal to the set</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">2ⁿ - 1 subsets</td>
          <td className="border px-4 py-2">Always 1</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Symbol: ⊂</td>
          <td className="border px-4 py-2">Symbol: ⊆</td>
        </tr>
      </tbody>
    </table>

    {/* Subsets vs Supersets */}
    <h2 className="text-3xl font-bold mt-10 ">Subsets vs Supersets</h2>

    <table className="w-full border border-gray-400">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Subset</th>
          <th className="border px-4 py-2">Superset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Contains fewer or same elements</td>
          <td className="border px-4 py-2">Contains all or more elements</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">A ⊆ B</td>
          <td className="border px-4 py-2">A ⊇ B</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">{'{1,2}'} is subset of {'{1,2,3}'}</td>
          <td className="border px-4 py-2">{'{1,2,3}'} is superset of {'{1,2}'}</td>
        </tr>
      </tbody>
    </table>

    {/* Subset Formulas */}
    <h2 className="text-3xl font-bold mt-10 ">Subset Formulas</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>The number of subsets of a set with n elements is <strong>2ⁿ</strong>.</li>
      <li>The number of proper subsets is <strong>2ⁿ - 1</strong>.</li>
      <li>The number of improper subsets is always <strong>1</strong>.</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-10 ">Solved Examples</h2>

    <ol className="list-decimal pl-6 space-y-4">
      <li>
        <strong>How many subsets does a set with 4 elements have?</strong>  
        <br />→ 2⁴ = 16
      </li>

      <li>
        <strong>How many subsets does a set with 5 elements have?</strong>  
        <br />→ 2⁵ = 32
      </li>

      <li>
        <strong>Proper subsets of A = {'{5,6,7,8}'}</strong>  
        <br />→ 2⁴ - 1 = 15
      </li>

      <li>
        <strong>Is X = {'{a,b,c}'} a proper subset of Y = {'{a,b,c}'}?</strong>  
        <br />→ No, because both sets are equal.
      </li>

      <li>
        <strong>A = {`{even naturals}`}, B = {`{naturals}`}</strong>  
        <br />→ A ⊆ B, correct.
      </li>
    </ol>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-10 ">Practice Problems</h2>

    <ol className="list-decimal pl-6 space-y-2">
      <li>Find the number of subsets of A = {'{1,2,3,4}'}.</li>
      <li>List all subsets of B = {'{a,b}'}.</li>
      <li>How many proper subsets does C = {'{x,y,z}'} have?</li>
      <li>Is {'{2,3}'} a subset of {'{1,2,3,4}'}?</li>
      <li>Is Q = {'{}'} a proper subset of P = {'{red, blue, green}'}?</li>
    </ol>


   <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Superset ================= */}    
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Superset
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Sep, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A superset is a set that contains all the elements of another set. For example,
      if set A = {'{21, 22, 23, 24}'} and set B = {'{21, 23, 24}'}, then A is the superset of B
      because all elements of B are present in A.
    </p>
    <p className="leading-relaxed">
      The following illustration explains the relationship between a set and its superset using a Venn Diagram.
    </p>

    {/* Definition */}
    <p className="leading-relaxed">
      Set A is a superset of set B (A ⊇ B) if every element of B is also present in A.
    </p>

    {/* Superset Symbol */}
    <h2 className="text-3xl font-bold  mt-8">
      Superset Symbol
    </h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li><strong>⊃ (Superset Symbol):</strong> Strict superset, A contains extra elements not in B.</li>
      <li><strong>⊇ (Superset or Equal Symbol):</strong> A is a superset of B and may be equal to B.</li>
    </ul>

    {/* Example */}
    <p className="leading-relaxed mt-4">
      Example: Let Y = {'{21, 22, 23, 24, 25, 26}'} and X = {'{21, 22, 23, 25, 26}'}.  
      Every element of X is in Y, so Y is the superset of X.
    </p>

    <p className="leading-relaxed">
      General form of supersets:
      <br />
      N ⊃ W ⊃ Z ⊃ Q ⊃ R ⊃ C
    </p>

    {/* Proper and Improper Superset */}
    <h2 className="text-3xl font-bold  mt-8">
      Proper and Improper Superset
    </h2>

    <p className="leading-relaxed">
      A proper superset contains all elements of another set and at least one extra element.
      Example:
      <br />
      W = {'{u, v, w}'}, X = {'{u, v, w, x}'}, Y = {'{u, v, w}'}, Z = {'{u, v, y}'}
      <br />
      X is a proper superset of W.
    </p>

    {/* Superset vs Subset Table */}
    <h2 className="text-3xl font-bold  mt-8">
      Superset vs Subset
    </h2>

    <table className="w-full border border-gray-300 text-left text-sm">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-3 py-2 font-semibold">Superset</th>
          <th className="border px-3 py-2 font-semibold">Subset</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-3 py-2">Contains all elements of another set (and possibly more)</td>
          <td className="border px-3 py-2">Contains part or all of another set</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Usually bigger</td>
          <td className="border px-3 py-2">Usually smaller</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Uses ⊇ or ⊃</td>
          <td className="border px-3 py-2">Uses ⊆ or ⊂</td>
        </tr>
        <tr>
          <td className="border px-3 py-2">Example: B is superset of A</td>
          <td className="border px-3 py-2">Example: A is subset of B</td>
        </tr>
      </tbody>
    </table>

    {/* Properties */}
    <h2 className="text-3xl font-bold  mt-8">
      Properties of Superset
    </h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Every set is a superset of itself.</li>
      <li>Each set is a subset of itself.</li>
      <li>A set has infinite supersets.</li>
      <li>Every set is a superset of the empty set.</li>
      <li>B is a superset of A if A is a subset of B.</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Practice Problems on Supersets
    </h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Problem 1: Compare A = {'{1,2,3,4,5}'} and B = {'{2,4}'}</li>
      <li>Problem 2: Compare C = {'{red, green, blue}'} and D = {'{red, green, blue, yellow}'}</li>
      <li>Problem 3: Sets E = {'{a,b,c,d}'}, F = {'{c,d,e}'}, G = {'{a,e}'}</li>
      <li>Problem 4: Power set of H = {'{x, y}'}; find supersets of {'{x}'}</li>
      <li>Problem 5: Mammals (M) and Carnivores (C)</li>
    </ul>
    </div>
  </div>
);

export default Home;
