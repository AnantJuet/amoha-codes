import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Random Variable ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Random Variable
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      A <strong>random variable</strong> is a key concept in statistics that connects theoretical probability with
      real-world data. It is a function that assigns a real number to each outcome in the sample space of a random experiment.
    </p>

    <p className="leading-relaxed">
      For example, when you roll a die, the outcome is one of the six faces. A random variable assigns a number (1 to 6)
      to each outcome so that we can analyze the experiment mathematically.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-6 ">Definition</h2>
    <p className="leading-relaxed">
      A Random Variable is a function:
    </p>
    <p className="font-mono text-lg text-gray-900 bg-gray-400 p-2 rounded-lg inline-block">
      X: S → R
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>X is a random variable (denoted with a capital letter)</li>
      <li>S is the Sample Space</li>
      <li>R is the set of real numbers</li>
    </ul>

    {/* Example 1 */}
    <h3 className="text-2xl font-semibold  mt-6">Example 1</h3>
    <p className="leading-relaxed">
      Two unbiased coins are tossed. Let X = number of heads.
      <br />Sample space S = {"{HH, HT, TH, TT}"}
    </p>

    <p className="leading-relaxed">
      If a random variable X takes m values {`{x1, x2, ..., xm}`} with probabilities pi, then:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>0 ≤ pi ≤ 1</li>
      <li>p₁ + p₂ + ... + pm = 1</li>
    </ul>

    {/* Example 2 */}
    <h3 className="text-2xl font-semibold  mt-6">Example 2</h3>
    <p className="leading-relaxed">
      A die is thrown. Sample space S = {"{1, 2, 3, 4, 5, 6}"}.
      <br />Since each outcome is equally likely:
    </p>

    <ul className="list-disc ml-6 leading-relaxed">
      <li>P(X = k) = 1/6 for k = 1,2,3,4,5,6</li>
    </ul>

    {/* Variate */}
    <h2 className="text-3xl font-bold mt-6 ">Variate</h2>
    <p className="leading-relaxed">
      A <strong>variate</strong> is a general term used like a random variable, especially when the probability 
      distribution is not yet defined.
    </p>

    <p className="leading-relaxed">
      If X takes values in a range Rₓ, each value is called a quantile.
      Probability of X = x is written as P(X = x).
    </p>

    {/* Types */}
    <h2 className="text-3xl font-bold mt-6 ">Types of Random Variables</h2>

    <h3 className="text-2xl font-semibold mt-4 ">1. Discrete Random Variable</h3>
    <p className="leading-relaxed">
      Takes finite or countably infinite values. Its probability function is called the
      <strong> Probability Mass Function (PMF)</strong>.
    </p>

    <p className="leading-relaxed font-semibold">Example:</p>
    <table className="table-auto border border-gray-300">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">xi</th>
          <th className="border px-4 py-2">0</th>
          <th className="border px-4 py-2">1</th>
          <th className="border px-4 py-2">2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2 font-semibold">P(X = xi)</td>
          <td className="border px-4 py-2">P₁</td>
          <td className="border px-4 py-2">0.3</td>
          <td className="border px-4 py-2">0.5</td>
        </tr>
      </tbody>
    </table>

    <p className="mt-2 leading-relaxed">
      P₁ + 0.3 + 0.5 = 1 ⇒ P₁ = 0.2
    </p>

    {/* Continuous RV */}
    <h3 className="text-2xl font-semibold mt-6 ">2. Continuous Random Variable</h3>
    <p className="leading-relaxed">
      Takes infinitely many values. Its function is the
      <strong> Probability Density Function (PDF)</strong>.
    </p>

    <p className="font-mono bg-gray-400 p-2 inline-block rounded-lg text-gray-900">
      ∫ f(x) dx = 1
    </p>

    <h4 className="text-xl font-semibold mt-4 ">Example:</h4>
    <p className="leading-relaxed">
      f(x) = kx³ for 0 ≤ x ≤ 3  
      <br />Find k.
    </p>

    <p className="leading-relaxed">
      ∫₀³ kx³ dx = 1  
      <br />k(81/4) = 1  
      <br /><strong>k = 4/81</strong>
    </p>

    <p className="leading-relaxed">
      P(1 &lt; X &lt; 2) = (4/81) × (16 - 1)/4 = 15/81
    </p>

    {/* Formulas */}
    <h2 className="text-3xl font-bold mt-6 ">Random Variable Formulas</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Mean</h3>
    <p className="font-mono bg-gray-400 p-2 inline-block rounded-lg text-gray-900">
      μ = ∑ X·P
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Variance</h3>
    <p className="font-mono bg-gray-400 p-2 inline-block rounded-lg text-gray-900">
      Var(X) = E(X²) - (E(X))²
    </p>

    {/* Random Variables in CS */}
    <h2 className="text-3xl font-bold mt-6 ">Random Variables in Computer Science</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>Used in randomized algorithms like QuickSort</li>
      <li>Used in machine learning to model data and errors</li>
      <li>Used in simulations for networks & queues</li>
      <li>Used in cryptography to generate secure keys</li>
      <li>Used in hashing, gaming, and animations</li>
    </ul>

    {/* Solved Questions */}
    <h2 className="text-3xl font-bold mt-6 ">Solved Questions</h2>

    <h3 className="text-2xl font-semibold mt-4">Question 1</h3>
    <p>Find mean of f(x) = x², 1 ≤ x ≤ 3</p>
    <p>E(x) = 20</p>

    <h3 className="text-2xl font-semibold mt-4">Question 2</h3>
    <p>Find mean of f(x) = eˣ, 1 ≤ x ≤ 3</p>

    <h3 className="text-2xl font-semibold mt-4">Question 3</h3>
    <p>Discrete RV: Mean = 2.9</p>

    <h3 className="text-2xl font-semibold mt-4">Question 4</h3>
    <p>Discrete RV: Mean = 3.2</p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-6 ">Practice Problems</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>624.8</li>
      <li>21</li>
      <li>2.4</li>
      <li>1.7</li>
    </ul>

  </div>
);

export default Home;
