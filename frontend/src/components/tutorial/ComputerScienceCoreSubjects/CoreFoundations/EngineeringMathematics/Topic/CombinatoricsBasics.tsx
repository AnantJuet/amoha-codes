import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Combinatorics ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Combinatorics
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 07 Apr, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Combinatorics is the branch of Mathematics that deals with the study of finite or countable
      discrete structures. It mainly includes the enumeration or counting of objects having certain
      properties. Counting helps us solve various types of real-life and computational problems such
      as calculating the number of IPv4 or IPv6 addresses.
    </p>

    <p className="leading-relaxed">
      <strong>Permutation</strong> and <strong>Combination</strong> are fundamental concepts in combinatorics.
      Permutation deals with arranging objects in a specific order, while combination focuses on selecting
      objects without considering the order.
    </p>

    {/* Section Heading */}
    <h2 className="text-3xl font-bold  mt-8">
      Permutation and Combination for Students and Beginners
    </h2>
    <p className="leading-relaxed">
      This section introduces essential concepts such as factorial, permutations, and combinations
      with simple explanations for beginners.
    </p>

    {/* Key Topics */}
    <h3 className="text-2xl font-semibold mt-4 ">Key Concepts</h3>
    <p className="leading-relaxed">
      • Factorial <br />
      • Fundamental Counting Principle <br />
      • Permutation <br />
      • Permutation Formulas <br />
      • Combination <br />
      • Combination Formulas <br />
      • Difference between Permutations and Combinations <br />
      • Principle of Inclusion and Exclusion <br />
      • Real-Life Applications of Permutations and Combinations
    </p>

    {/* Aptitude Section */}
    <h2 className="text-3xl font-bold  mt-8">
      Permutation and Combination for Aptitude Preparation
    </h2>
    <p className="leading-relaxed">
      Practice aptitude-style problems and quizzes to prepare for competitive exams using
      permutations and combinations.
    </p>
    <p className="leading-relaxed">
      • Aptitude Questions and Answers <br />
      • Problems on Permutations and Combinations – Set 1 & Set 2 <br />
      • Problems on Permutations – Set 1 <br />
      • Permutation and Combination Quiz
    </p>

    {/* Advanced Topics */}
    <h2 className="text-3xl font-bold  mt-8">
      Advanced Topics of Permutation and Combination
    </h2>
    <p className="leading-relaxed">
      Explore advanced combinatorics concepts like permutation groups, their properties, and related theorems.
    </p>

    <p className="leading-relaxed">
      • Permutation Groups and Multiplication of Permutations <br />
      • Inverse of a Permutation Group <br />
      • Order of a Permutation Group <br />
      • Even and Odd Permutations and their Theorems
    </p>

    {/* Programmers Section */}
    <h2 className="text-3xl font-bold  mt-8">
      Permutation and Combination for Programmers
    </h2>
    <p className="leading-relaxed">
      This section includes programming-based problems using permutations and combinations.
      These help in implementing logic and solving real-world software challenges.
    </p>

    <p className="leading-relaxed">
      • Program to calculate nCr using recursion <br />
      • Permutations of a given string <br />
      • All permutations of an array <br />
      • Ways to sum to N using natural numbers up to K (with repetitions) <br />
      • Count all possible N-length vowel permutations <br />
      • Generate a combination of minimum coins <br />
      • Number of ways to go from one point to another in a grid <br />
      • Different ways to represent N as the sum of K non-zero integers <br />
      • Number of arrays of size N whose elements are positive integers and sum to K <br />
      • Generate all cyclic permutations of a number
    </p>

  </div>
);

export default Home;
