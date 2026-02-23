import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Representation of a Set ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Representation of a Set
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 06 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In Math, a Set is a tool that helps to classify and collect data belonging to the same category. 
      Even though the elements used in sets are all different from each other, they are all similar as 
      they belong to one group.
    </p>

    <p className="leading-relaxed">
      For instance, a set of different outdoor games, say set A = {'{Football, basketball, volleyball, cricket, badminton}'}, 
      all the games are different but belong to the same group (outdoor games). Sets can be represented in two ways: 
      <strong> Set-Builder form</strong> and <strong>Roster form</strong>.
    </p>

    {/* Roster Form */}
    <h2 className="text-3xl font-bold  mt-8">Roster Form</h2>
    <p className="leading-relaxed">
      In Roster Form, the elements are written inside {'{}'} (curly brackets) and separated by commas.
      It is the simplest way to represent data in groups.
    </p>

    <p className="leading-relaxed">
      Example: A = {'{5, 10, 15, 20, 25, 30, 35...}'}
    </p>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>The order of elements does not matter.</li>
      <li>Elements are not repeated.</li>
      <li>Finite sets list all elements; infinite sets use dots (...).</li>
    </ul>

    {/* Set-Builder Form */}
    <h2 className="text-3xl font-bold  mt-8">Set-Builder Form</h2>
    <p className="leading-relaxed">
      In Set-builder form, elements are represented using a statement that describes the rule or property 
      of the elements.
    </p>

    <p className="leading-relaxed">
      Example: A = {'{x : x = a³, a ∈ N, a < 9}'}
    </p>

    <ul className="list-disc ml-6 space-y-2 leading-relaxed">
      <li>Data must follow a specific pattern.</li>
      <li>Colon ':' is necessary.</li>
      <li>The statement is written after the colon.</li>
    </ul>

    {/* Order of Set */}
    <h2 className="text-3xl font-bold  mt-8">Order of the Set</h2>
    <p className="leading-relaxed">
      The order of a Set represents the number of elements present in the Set.  
      For finite sets, the order is finite; for infinite sets, the order is infinite.
    </p>

    {/* Sample Problems */}
    <h2 className="text-3xl font-bold  mt-8">Sample Problems on Representation of Sets</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Question 1</h3>
    <p className="leading-relaxed">
      Determine which of the following are considered sets:
    </p>

    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>All even numbers on the number line. — ✔ Set</li>
      <li>All the good basketball players from class 9th. — ✖ Not a Set</li>
      <li>The bad performers from dancers batch. — ✖ Not a Set</li>
      <li>All prime numbers from 1 to 100. — ✔ Set</li>
      <li>Numbers greater than 5 and less than 15. — ✔ Set</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Question 2</h3>
    <p className="leading-relaxed">Represent in Roster Form:</p>

    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>A = {'{1, 2, 3, 4, 5, ...}'}</li>
      <li>B = {'{}'} (Null set)</li>
      <li>C = {'{10, 12, 14, 16, 18, 20, 22, 24}'}</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Question 3</h3>
    <p className="leading-relaxed">Set-Builder Form:</p>

    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>A = {'{a : a ∈ N and 10 < a < 20}'}</li>
      <li>B = {'{b : b ∈ N and b > 25}'}</li>
      <li>C = {'{c : c is a vowel of English Alphabet}'}</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">Question 4</h3>
    <p className="leading-relaxed">Convert Roster → Set-Builder</p>

    <ul className="list-disc ml-6 space-y-1 leading-relaxed">
      <li>A = {'{a : a is a consonant}'}</li>
      <li>B = {'{b : b is even and 2 ≤ b ≤ 10}'}</li>
      <li>C = {'{c : c is odd and 5 ≤ c ≤ 19}'}</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">Practice Problems on Representation of Sets</h2>

    <ul className="list-disc ml-6 space-y-3 leading-relaxed">
      <li>Determine which statements represent sets.</li>
      <li>Convert between Set-Builder and Roster forms.</li>
      <li>Find the order of given Sets.</li>
      <li>Write examples of finite, infinite, universal sets.</li>
    </ul>

  </div>
);

export default Home;
