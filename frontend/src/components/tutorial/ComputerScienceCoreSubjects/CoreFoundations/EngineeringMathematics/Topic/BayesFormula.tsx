import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Bayes's Theorem ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Bayes's Theorem for Conditional Probability
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro */}
    <p className="text-lg leading-relaxed">
      Bayes's Theorem is a fundamental concept in probability theory that helps update the probability 
      of a hypothesis based on new evidence. Named after Reverend Thomas Bayes, this theorem plays an 
      important role in statistics, engineering, artificial intelligence, and machine learning.
    </p>

    {/* Table of Content */}
    <h2 className="text-2xl font-bold mt-6">Table of Content</h2>
    <ul className="list-disc ml-8 leading-relaxed">
      <li>What is Bayes's Theorem?</li>
      <li>Mathematical Formulation</li>
      <li>Solved Examples</li>
      <li>Practice Problems</li>
      <li>Applications in Engineering</li>
    </ul>

    {/* What is Bayes Theorem */}
    <h2 className="text-3xl font-bold mt-8">What is Bayes's Theorem?</h2>
    <p className="leading-relaxed">
      Bayes's Theorem gives a method to update the probability of event A when event B has already occurred.
    </p>

    <p className="font-semibold mt-4">
      Mathematically:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(A|B) = [ P(B|A) × P(A) ] / P(B)
    </p>

    <ul className="list-disc ml-8 leading-relaxed">
      <li><strong>P(A|B):</strong> Posterior probability</li>
      <li><strong>P(B|A):</strong> Likelihood</li>
      <li><strong>P(A):</strong> Prior probability</li>
      <li><strong>P(B):</strong> Marginal probability</li>
    </ul>

    {/* Mathematical Formulation */}
    <h2 className="text-3xl font-bold mt-8">Mathematical Formulation</h2>
    <p className="leading-relaxed">
      Using the definition of conditional probability:
    </p>

    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(A|B) = P(A ∩ B) / P(B)<br/>
      P(B|A) = P(A ∩ B) / P(A)
    </p>

    <p className="leading-relaxed">
      Substitute P(A ∩ B) = P(B|A) × P(A) into the first equation to get Bayes’s Theorem.
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples of Bayes's Theorem</h2>

    {/* Problem 1 */}
    <h3 className="text-2xl font-semibold mt-4">Problem 1: Simple Disease Test</h3>
    <p className="leading-relaxed">
      A disease affects 1% people. Test accuracy is 95%. If a person tests positive, find the probability they have the disease.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(D) = 0.01, P(T|D) = 0.95, P(T|not D) = 0.05<br/>
      P(T) = 0.0585<br/>
      P(D|T) = 0.1624 (16.24%)
    </p>

    {/* Problem 2 */}
    <h3 className="text-2xl font-semibold mt-4">Problem 2: Factory Quality Control</h3>
    <p className="leading-relaxed">
      Two lines produce items. If an item is defective, find probability it came from Line A.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(A|D) ≈ 0.6923 (69.23%)
    </p>

    {/* Problem 3 */}
    <h3 className="text-2xl font-semibold mt-4">Problem 3: Weather Forecast</h3>
    <p className="leading-relaxed">
      If the app predicts sunny, find probability it's actually sunny.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(S|P) ≈ 0.8235 (82.35%)
    </p>

    {/* Problem 4 */}
    <h3 className="text-2xl font-semibold mt-4">Problem 4: Email Classification</h3>
    <p className="leading-relaxed">
      If an email is marked important, find probability it's actually important.
    </p>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(I|M) = 0.6 (60%)
    </p>

    {/* Problem 5 */}
    <h3 className="text-2xl font-semibold mt-4">Problem 5: Drug Test</h3>
    <p className="bg-gray-400 p-4 rounded-lg font-mono text-gray-900">
      P(D|T) ≈ 0.5238 (52.38%)
    </p>

    {/* Problems 6-10 Summary */}
    <h3 className="text-xl font-semibold mt-4">More Solved Problems (6 to 10)</h3>
    <ul className="list-disc ml-8 leading-relaxed">
      <li><strong>Customer Loyalty:</strong> 63.16%</li>
      <li><strong>Fire Alarm:</strong> 16.52%</li>
      <li><strong>College Admissions:</strong> 64%</li>
      <li><strong>Car Insurance:</strong> 41.38%</li>
      <li><strong>Software Bug Detection:</strong> 56.89%</li>
    </ul>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems on Bayes's Theorem</h2>
    <ol className="list-decimal ml-8 leading-relaxed">
      <li>Dog ownership and daily walking probability.</li>
      <li>Genetic disorder rare test accuracy problem.</li>
      <li>Factory defect from machine A.</li>
      <li>Sports and exam result relation.</li>
      <li>Spam filter classification accuracy.</li>
      <li>Medical condition test accuracy.</li>
      <li>Three production lines defect probability.</li>
      <li>Winning probability among players.</li>
      <li>Security system false alarm analysis.</li>
      <li>Dating app user activity probability.</li>
    </ol>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Bayes's Theorem in Engineering</h2>
    <ul className="list-disc ml-8 leading-relaxed">
      <li><strong>Signal Processing:</strong> Used in filters like Kalman Filter.</li>
      <li><strong>Machine Learning:</strong> Basis of Naive Bayes classifier.</li>
      <li><strong>Reliability Engineering:</strong> Failure prediction and maintenance.</li>
      <li><strong>Medical Diagnosis:</strong> Helps interpret test results.</li>
      <li><strong>Robotics:</strong> Used in localization and mapping (SLAM).</li>
    </ul>

  </div>
);

export default Home;
