import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Basic Concepts of Probability ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Basic Concepts of Probability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 04 Nov, 2025</p>

    {/* Intro */}
    <p className="leading-relaxed text-lg">
      Probability is defined as the likelihood of the occurrence of any event. It gives a numerical value
      to the chance of something happening. Probability is denoted by <strong>P(E)</strong>, where E is an event.
    </p>

    <p className="leading-relaxed">
      It is expressed between <strong>0 and 1</strong>:
      <br />• <strong>0</strong> → impossible  
      <br />• <strong>1</strong> → certain  
      <br />• Values between 0 and 1 → partial chances.
    </p>

    {/* Real-life applications */}
    <h2 className="text-3xl font-bold mt-6">Real-life Uses of Probability</h2>
    <p className="leading-relaxed">
      Concepts of probability are used in:
    </p>
    <ul className="list-disc pl-6 leading-relaxed">
      <li><strong>Stock Market:</strong> Used to predict price movement patterns.</li>
      <li><strong>Insurance:</strong> Used to estimate risks and set premiums.</li>
      <li><strong>Weather Forecasting:</strong> Used to predict events such as rain, storms, etc.</li>
    </ul>

    {/* Formula */}
    <h2 className="text-3xl font-bold mt-6">Formula for Probability</h2>
    <p className="leading-relaxed">
      Probability of an event:  
      <br />
      <strong>P(E) = (Number of Favorable Outcomes) / (Total Outcomes)</strong>
    </p>

    <p className="leading-relaxed">
      If P(E) = 0 → impossible  
      <br />If P(E) = 1 → certain  
      <br />If 0 &lt; P(E) &lt; 1 → possible but not guaranteed
    </p>

    <p className="leading-relaxed">
      <strong>Note:</strong> The sum of probabilities of all outcomes in a sample space is always 1.
    </p>

    {/* Sample Space & Events */}
    <h2 className="text-3xl font-bold mt-6">Sample Space and Event</h2>

    <p className="leading-relaxed">
      <strong>Sample Space (S):</strong> Set of all possible outcomes.
      <br />Example: Rolling a die → S = {'{1, 2, 3, 4, 5, 6}'}
    </p>

    <p className="leading-relaxed">
      <strong>Event (E):</strong> Any subset of the sample space.
      <br />Example: Getting an even number → E = {'{2, 4, 6}'}
    </p>

    {/* Basic rules */}
    <h2 className="text-3xl font-bold mt-6">Basic Probability Rules</h2>
    <ul className="list-disc pl-6 leading-relaxed">
      <li><strong>Addition Rule:</strong> P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</li>
      <li><strong>Multiplication Rule (Independent):</strong> P(A ∩ B) = P(A) × P(B)</li>
      <li><strong>Complement Rule:</strong> P(A′) = 1 − P(A)</li>
    </ul>

    {/* Probability Distribution */}
    <h2 className="text-3xl font-bold mt-6">Probability Distribution</h2>
    <p className="leading-relaxed">
      A probability distribution describes how probabilities are assigned to each possible value of a random variable.
      It can be <strong>discrete</strong> or <strong>continuous</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types:</h3>
    <ul className="list-disc pl-6 leading-relaxed">
      <li>Bernoulli Distribution</li>
      <li>Binomial Distribution</li>
      <li>Poisson Distribution</li>
      <li>Uniform Distribution</li>
      <li>Normal (Gaussian) Distribution</li>
      <li>Exponential Distribution</li>
    </ul>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-6">Applications of Probability</h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Choosing a card from a deck</li>
      <li>Flipping a coin</li>
      <li>Throwing a dice</li>
      <li>Selecting colored balls from a bucket</li>
      <li>Winning a lucky draw</li>
    </ul>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-6">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-3">Example 1</h3>
    <p className="leading-relaxed">
      A bed has 3 red, 2 yellow, and 1 blue pillow. Probability of picking yellow:
      <br />P = 2/6 = 1/3
    </p>

    <h3 className="text-2xl font-semibold mt-3">Example 2</h3>
    <p className="leading-relaxed">
      In 1000 picks, Sumit gets: 450 green, 300 blue, 200 red, 50 orange.
      <br /><strong>a)</strong> Probability of picking green = 450/1000 = 0.45  
      <br /><strong>b)</strong> Out of 100 bottles → 45 are green.
    </p>

    <h3 className="text-2xl font-semibold mt-3">Example 3</h3>
    <p className="leading-relaxed">
      Probability of getting 3 when rolling a die:
      <br />P = 1/6
    </p>

    <h3 className="text-2xl font-semibold mt-3">Example 4</h3>
    <p className="leading-relaxed">
      Vessel contains 4 blue, 5 red, 11 white balls.
      <br />P(red → blue → white) = (5/20) × (4/19) × (11/18)
      <br />= 11/342  
      <br />= 0.032 (3.2%)
    </p>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-6">Practice Problems</h2>

    <ol className="list-decimal pl-6 leading-relaxed">
      <li>A jar has 8 green, 5 red, 7 blue marbles. Probability of red?</li>
      <li>Probability of getting sum = 8 when rolling two dice?</li>
      <li>1000 students: 600 like online, 300 offline, 100 like both. Probability of liking either?</li>
      <li>A student has 75% chance of passing. Probability of NOT passing?</li>
    </ol>

    <h3 className="text-2xl font-semibold mt-4">Answers:</h3>
    <ul className="list-disc pl-6 leading-relaxed">
      <li>0.25</li>
      <li>5/36</li>
      <li>0.8</li>
      <li>0.25</li>
    </ul>

  </div>
);

export default Home;
