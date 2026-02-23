import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Sets in Maths ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Sets in Maths
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Aug, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In mathematics, a set is simply a collection of distinct objects, called elements or members,
      grouped together because they share some property or characteristic. You can think of it like
      a "basket" where you collect items that fit a certain rule or idea.
    </p>

    <p className="leading-relaxed font-medium">Some other examples:</p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A set of all vowels in the English alphabet: {`{a, e, i, o, u}`}</li>
      <li>A set of numbers greater than 5: {`{6, 7, 8, 9, 10, ...}`}</li>
    </ul>

    {/* Definition */}
    <h2 className="text-3xl font-bold  mt-8">Definition of Sets</h2>
    <p className="leading-relaxed">
      A set A is written as:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900 ">
      A = {'{x ∣ property of x}'}
    </p>

    <p className="leading-relaxed">
      This means A is the set of all x such that x satisfies a certain property.
    </p>

    {/* Key Characteristics */}
    <h2 className="text-3xl font-bold  mt-8">Key Characteristics of Sets</h2>

    <ul className="list-disc ml-6 leading-relaxed space-y-2">
      <li>
        <strong>Well-defined:</strong> The contents of the set are specified and identifiable.<br />
        Example: The set of natural numbers less than 5 is {`{1, 2, 3, 4}`}.
      </li>

      <li>
        <strong>Distinct Elements:</strong> A set cannot have duplicate elements.<br />
        Example: {`{1, 2, 2, 3}`} is the same as {`{1, 2, 3}`}.
      </li>

      <li>
        <strong>Order of Elements:</strong> The order of elements does not matter.<br />
        Example: {`{1, 2, 3}`} is the same as {`{3, 2, 1}`}.
      </li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold  mt-8">Examples of Sets</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Finite Sets</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>A = {`{a, e, i, o, u}`}</li>
      <li>B = {`{1, 2, 3, 4, 5}`}</li>
      <li>C = {`{red, blue, yellow}`}</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Infinite Sets</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>N = {`{1, 2, 3, 4, ...}`}</li>
      <li>Z = {`{..., -3, -2, -1, 0, 1, 2, 3, ...}`}</li>
      <li>R⁺ = {`{x ∣ x > 0}`}</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Empty (Null) Set</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>∅ = {`{}`}</li>
      <li>A set of months with 32 days: ∅</li>
    </ul>

    {/* Real World Examples */}
    <h3 className="text-2xl font-semibold mt-4 ">Real-World Examples of Sets</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>D = {`{Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}`}</li>
      <li>T = {`{red, yellow, green}`}</li>
    </ul>

    {/* Types */}
    <h2 className="text-3xl font-bold  mt-8">Types of Sets</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Singleton Set</li>
      <li>Empty Set</li>
      <li>Finite Set</li>
      <li>Infinite Set</li>
      <li>Equal Set</li>
      <li>Equivalent Set</li>
    </ul>

    {/* Operations */}
    <h2 className="text-3xl font-bold  mt-8">Operations on Sets</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>Union:</strong> A ∪ B = {`{x ∣ x ∈ A or x ∈ B}`}</li>
      <li><strong>Intersection:</strong> A ∩ B = {`{x ∣ x ∈ A and x ∈ B}`}</li>
      <li><strong>Difference:</strong> A − B = {`{x ∣ x ∈ A and x ∉ B}`}</li>
      <li><strong>Complement:</strong> Aᶜ = U − A</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold  mt-8">Solved Examples on Sets</h2>

    <h3 className="text-xl font-semibold mt-4">Question 1</h3>
    <p>A = {`{1, 2, 3, 4, 5}`}</p>
    <p><strong>Solution:</strong> Finite Set.</p>

    <h3 className="text-xl font-semibold mt-4">Question 2</h3>
    <p>A = {`{1, 2, 3}`}, B = {`{3, 4, 5}`}</p>
    <p><strong>Solution:</strong> A ∪ B = {`{1, 2, 3, 4, 5}`}</p>

    <h3 className="text-xl font-semibold mt-4">Question 3</h3>
    <p>A = {`{2, 4, 6, 8}`}, B = {`{1, 2, 3, 4}`}</p>
    <p><strong>Solution:</strong> A ∩ B = {`{2, 4}`}</p>

    <h3 className="text-xl font-semibold mt-4">Question 4</h3>
    <p>A = {`{1, 2, 3, 4, 5}`}, B = {`{3, 4, 5, 6, 7}`}</p>
    <p><strong>Solution:</strong> A − B = {`{1, 2}`}</p>

    <h3 className="text-xl font-semibold mt-4">Question 5</h3>
    <p>U = {`{1, 2, 3, 4, 5, 6, 7}`}, A = {`{2, 4, 6}`}</p>
    <p><strong>Solution:</strong> Aᶜ = {`{1, 3, 5, 7}`}</p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold  mt-8">Unsolved Practice Questions</h2>

    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
      <li>Given B = {`{a, e, i, o, u}`}, identify the type of set.</li>
      <li>Find X ∪ Y for X = {`{1, 2, 3, 4}`}, Y = {`{3, 4, 5, 6}`}</li>
      <li>Find M ∩ N for M = {`{2, 5, 7, 10}`}, N = {`{1, 5, 9, 10}`}</li>
      <li>Find P − Q for P = {`{1, 3, 5, 7, 9}`}, Q = {`{2, 4, 6, 8, 10}`}</li>
      <li>Find Sᶜ for U = {`{2, 4, 6, 8, 10, 12, 14}`}, S = {`{6, 8, 12}`}</li>
    </ol>

  </div>
);

export default Home;
