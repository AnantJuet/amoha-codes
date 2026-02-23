import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Set Symbols ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Set Symbols
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Set symbols are special mathematical symbols used in set theory, a branch of mathematics that deals with collections of objects,
      called sets. These symbols help to describe relationships between sets, elements, and operations involving sets.
    </p>

    <p className="leading-relaxed">
      Some of the commonly used set symbols:
    </p>

    {/* Example Section */}
    <h2 className="text-3xl font-bold  mt-8">
      Example of Set Symbols
    </h2>

    <p className="leading-relaxed">
      Let E = {'{1, 3, 5, 7}'} and F = {'{3, 6, 9}'}.  
      The ∩ symbol represents the intersection of sets.  
      So, E ∩ F = {'{3}'}, which includes the common elements of both sets.
    </p>

    <p className="leading-relaxed">
      In conclusion, the ∩ symbol is used to identify the elements shared by two or more sets.
      The intersection only includes elements that appear in all sets being intersected.
    </p>

    {/* Core Concepts */}
    <h2 className="text-3xl font-bold  mt-8">
      Core Concepts in Set Theory
    </h2>

    <h3 className="text-2xl font-semibold mt-4 ">Universal Set</h3>
    <p className="leading-relaxed">
      A Universal Set, usually represented by U, contains all elements relevant to a particular discussion.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Complement of Set</h3>
    <p className="leading-relaxed">
      The complement of set A includes all elements of the universal set U that are not in A.  
      It is written as A′ or Ac.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Set Builder Notation</h3>
    <p className="leading-relaxed">
      Set builder notation expresses sets by describing the properties of their elements.  
      Example: A = {'{x : x ∈ R}'}.
    </p>

    {/* Number System Symbols Table */}
    <h2 className="text-3xl font-bold  mt-8">Number System Symbols in Set Theory</h2>

    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Symbol</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Meaning/Definition</th>
          <th className="border p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">W</td>
          <td className="border p-2">Whole Numbers</td>
          <td className="border p-2">Natural numbers including zero</td>
          <td className="border p-2">0 ∈ W</td>
        </tr>
        <tr>
          <td className="border p-2">ℕ</td>
          <td className="border p-2">Natural Numbers</td>
          <td className="border p-2">Counting numbers starting from 1</td>
          <td className="border p-2">1 ∈ ℕ</td>
        </tr>
        <tr>
          <td className="border p-2">ℤ</td>
          <td className="border p-2">Integers</td>
          <td className="border p-2">Whole numbers + negative numbers</td>
          <td className="border p-2">-3 ∈ ℤ</td>
        </tr>
        <tr>
          <td className="border p-2">ℚ</td>
          <td className="border p-2">Rational Numbers</td>
          <td className="border p-2">Numbers in form a/b</td>
          <td className="border p-2">2/6 ∈ ℚ</td>
        </tr>
        <tr>
          <td className="border p-2">ℙ</td>
          <td className="border p-2">Irrational Numbers</td>
          <td className="border p-2">Cannot be expressed as a/b</td>
          <td className="border p-2">π ∈ ℙ</td>
        </tr>
        <tr>
          <td className="border p-2">ℝ</td>
          <td className="border p-2">Real Numbers</td>
          <td className="border p-2">All rational + irrational numbers</td>
          <td className="border p-2">6.34 ∈ ℝ</td>
        </tr>
        <tr>
          <td className="border p-2">ℂ</td>
          <td className="border p-2">Complex Numbers</td>
          <td className="border p-2">a + bi form</td>
          <td className="border p-2">6 + 2i ∈ ℂ</td>
        </tr>
      </tbody>
    </table>

    {/* Basic Set Notation */}
    <h2 className="text-3xl font-bold  mt-8">Basic Set Notation</h2>

    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Symbol</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Meaning</th>
          <th className="border p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">{'{}'}</td>
          <td className="border p-2">Set</td>
          <td className="border p-2">Represents a group of elements</td>
          <td className="border p-2">{'{15, 22, c, d}'}</td>
        </tr>
        <tr>
          <td className="border p-2">|</td>
          <td className="border p-2">Such That</td>
          <td className="border p-2">Used in set builder notation</td>
          <td className="border p-2">{'{ q | q > 6 }'}</td>
        </tr>
        <tr>
          <td className="border p-2">:</td>
          <td className="border p-2">Such That</td>
          <td className="border p-2">Alternative to |</td>
          <td className="border p-2">{'{ q : q > 6 }'}</td>
        </tr>
      </tbody>
    </table>

    {/* Relational Symbols */}
    <h2 className="text-3xl font-bold  mt-8">Relational Symbols in Set Theory</h2>

    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Symbol</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Meaning</th>
          <th className="border p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">a ∈ A</td>
          <td className="border p-2">Element of</td>
          <td className="border p-2">Element belongs to set A</td>
          <td className="border p-2">27 ∈ A</td>
        </tr>

        <tr>
          <td className="border p-2">b ∉ B</td>
          <td className="border p-2">Not Element of</td>
          <td className="border p-2">Element does NOT belong</td>
          <td className="border p-2">18 ∉ B</td>
        </tr>

        <tr>
          <td className="border p-2">A ⊆ B</td>
          <td className="border p-2">Subset</td>
          <td className="border p-2">All elements of A exist in B</td>
          <td className="border p-2">{'{31, b} ⊆ {a, b, 31, 54}'}</td>
        </tr>

        <tr>
          <td className="border p-2">A ⊂ B</td>
          <td className="border p-2">Proper Subset</td>
          <td className="border p-2">A is subset but not equal</td>
          <td className="border p-2">{'{24, c} ⊂ {a, c, 24, 50}'}</td>
        </tr>

        <tr>
          <td className="border p-2">Ø</td>
          <td className="border p-2">Empty Set</td>
          <td className="border p-2">No elements</td>
          <td className="border p-2">{'{22, y} ∩ {33, a} = Ø'}</td>
        </tr>

        <tr>
          <td className="border p-2">U</td>
          <td className="border p-2">Universal Set</td>
          <td className="border p-2">Contains all elements</td>
          <td className="border p-2">{'U = {1,2,3,a,b,c}'}</td>
        </tr>
      </tbody>
    </table>

    {/* Set Operations Symbols Table */}
    <h2 className="text-3xl font-bold  mt-8">Set Operations Symbols</h2>

    <table className="w-full border mt-4 text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Symbol</th>
          <th className="border p-2">Name</th>
          <th className="border p-2">Meaning</th>
          <th className="border p-2">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">A ∪ B</td>
          <td className="border p-2">Union</td>
          <td className="border p-2">Combines two sets</td>
          <td className="border p-2">{'{p, q} ∪ {r, s}'}</td>
        </tr>

        <tr>
          <td className="border p-2">A ∩ B</td>
          <td className="border p-2">Intersection</td>
          <td className="border p-2">Common elements</td>
          <td className="border p-2">{'{8, b}'}</td>
        </tr>

        <tr>
          <td className="border p-2">A - B</td>
          <td className="border p-2">Set Difference</td>
          <td className="border p-2">Elements in A not in B</td>
          <td className="border p-2">{'{12, 19}'}</td>
        </tr>

        <tr>
          <td className="border p-2">A × B</td>
          <td className="border p-2">Cartesian Product</td>
          <td className="border p-2">Ordered pairs</td>
          <td className="border p-2">{'(4, r)'}</td>
        </tr>

        <tr>
          <td className="border p-2">A ∆ B</td>
          <td className="border p-2">Symmetric Difference</td>
          <td className="border p-2">Elements not common</td>
          <td className="border p-2">{'{19, 28, 37, 55, 31}'}</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default Home;
