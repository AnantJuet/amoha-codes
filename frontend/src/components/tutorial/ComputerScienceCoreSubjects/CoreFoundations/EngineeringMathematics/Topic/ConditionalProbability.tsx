import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Conditional Probability ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Conditional Probability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 24 Sep, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Conditional probability defines the probability of an event occurring based on a given 
      condition or prior knowledge of another event.
    </p>
    <p className="leading-relaxed">
      It is the likelihood of an event occurring, given that another event has already occurred. 
      In probability, this is denoted as <strong>P(A | B)</strong>, indicating the probability 
      of event A when event B has already occurred.
    </p>

    {/* Explanation Carousel */}
    <h2 className="text-3xl font-bold mt-6">Explanation</h2>
    <p className="leading-relaxed font-semibold">Question: What are the chances that it's raining given that you carry an umbrella?</p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>It rains 30% of the time.</li>
      <li>You carry an umbrella 50% of the time.</li>
      <li>When it rains, you carry an umbrella 80% of the time.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Implies (for 10 days):</h3>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>3/10 days are rainy.</li>
      <li>5/10 days you carry an umbrella.</li>
      <li>You carry an umbrella 2/3 rainy days (≈80%).</li>
    </ul>

    <p className="leading-relaxed">
      Out of all umbrella days (5), only 2 days were rainy.  
      Therefore,
      <strong> P(Rain | Carry Umbrella) = 2/5 = 40% </strong>.
    </p>

    {/* Conditional Probability Formula */}
    <h2 className="text-3xl font-bold mt-6">Conditional Probability Formula</h2>
    <p className="leading-relaxed">
      For two events A and B:
    </p>
    <p className="text-center font-semibold text-xl">
      P(B | A) = P(A ∩ B) / P(A)
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li><strong>P(A ∩ B)</strong>: Probability both A and B occur.</li>
      <li><strong>P(A)</strong>: Probability event A occurs.</li>
    </ul>

    {/* Steps */}
    <h2 className="text-3xl font-bold mt-6">Steps to Find Conditional Probability</h2>
    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Identify Events A and B.</li>
      <li>Find P(A).</li>
      <li>Find P(B).</li>
      <li>Find P(A ∩ B).</li>
      <li>Apply the formula.</li>
    </ol>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-6">Conditional Probability Examples</h2>

    {/* Example 1 */}
    <h3 className="text-xl font-semibold mt-4">Example 1: Tossing Two Coins</h3>
    <p className="leading-relaxed">
      A = Head on first coin, B = Head on second coin.  
      Since outcomes are independent:
      <br />
      <strong>P(B|A) = P(B) = 0.5</strong>
    </p>

    {/* Example 2 */}
    <h3 className="text-xl font-semibold mt-4">Example 2: Drawing Cards</h3>
    <p className="leading-relaxed">
      After drawing one red card, remaining red cards = 25, total = 51  
      <strong>P(B|A) = 25/51 ≈ 0.49</strong>
    </p>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-6">Properties of Conditional Probability</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>P(S | A) = P(A | A) = 1</li>
      <li>P((A ∪ B) | X) = P(A | X) + P(B | X) - P(A ∩ B | X)</li>
      <li>P(A | B) ≠ P(B | A)</li>
      <li>P(A' | B) = 1 - P(A | B)</li>
      <li>P(A ∩ B) = P(A)P(B) for independent events.</li>
    </ul>

    {/* Table */}
    <h2 className="text-3xl font-bold mt-6">Conditional Probability vs Joint vs Marginal</h2>

    <table className="table-auto border-collapse border border-gray-400 w-full text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border p-2">Parameter</th>
          <th className="border p-2">Conditional Probability</th>
          <th className="border p-2">Joint Probability</th>
          <th className="border p-2">Marginal Probability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">Definition</td>
          <td className="border p-2">Probability of A given B</td>
          <td className="border p-2">Probability of A and B</td>
          <td className="border p-2">Probability of single event</td>
        </tr>
        <tr>
          <td className="border p-2">Formula</td>
          <td className="border p-2">P(A | B)</td>
          <td className="border p-2">P(A ∩ B)</td>
          <td className="border p-2">P(A)</td>
        </tr>
        <tr>
          <td className="border p-2">Variables</td>
          <td className="border p-2">Two or more</td>
          <td className="border p-2">Two or more</td>
          <td className="border p-2">Single</td>
        </tr>
      </tbody>
    </table>

    {/* Multiplication Rule */}
    <h2 className="text-3xl font-bold mt-6">Multiplication Rule of Probability</h2>
    
    <p className="text-center text-xl font-semibold">
      P(A ∩ B) = P(A) × P(B | A)
    </p>

    <p className="leading-relaxed mt-2">
      Use this when probability of B depends on A.
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications of Conditional Probability</h2>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>Finance & Risk Management</li>
      <li>Healthcare & Diagnostics</li>
      <li>Marketing & CRM</li>
      <li>Machine Learning & AI</li>
      <li>Weather Forecasting</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-6">Solved Examples</h2>

    <h3 className="text-xl font-semibold mt-3">Example 1</h3>
    <p>P(Second red | First red) = 4/11</p>

    <h3 className="text-xl font-semibold mt-3">Example 2</h3>
    <p>P(A|B) = 40/60 = 2/3</p>

    <h3 className="text-xl font-semibold mt-3">Example 3</h3>
    <p>P(R|F) = 0.7742</p>

    <h3 className="text-xl font-semibold mt-3">Example 4</h3>
    <p>P(First even | Sum even) = 1/2</p>

    <h3 className="text-xl font-semibold mt-3">Example 5</h3>
    <p>P(Second red | First blue) = 4/9</p>

    {/* Unsolved Questions */}
    <h2 className="text-3xl font-bold mt-6">Unsolved Questions</h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Probability second card is a heart given first card was heart.</li>
      <li>Probability a person likes cake given they like ice cream.</li>
      <li>Probability second ball is green given first was red.</li>
      <li>Probability selected student is male given they wear glasses.</li>
      <li>Probability product is defective given it’s from the warehouse.</li>
    </ol>

  </div>
);

export default Home;
