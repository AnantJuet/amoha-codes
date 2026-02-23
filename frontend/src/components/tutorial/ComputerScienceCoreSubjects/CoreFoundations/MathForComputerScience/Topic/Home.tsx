import React from 'react';

const Home: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mathematics for Computer Science
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Mathematics forms the backbone of computer science. From designing efficient algorithms to understanding
      cryptographic systems, mathematical concepts are essential for every computer scientist and software engineer.
      This comprehensive tutorial covers all the mathematical foundations you need to excel in computer science.
    </p>

    <h2 className="text-2xl font-bold mt-8">Why Learn Mathematics for Computer Science?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Application Area</th>
            <th className="p-2 border">Mathematical Foundation</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">Algorithm Design</td><td className="p-2 border">Complexity analysis and optimization</td></tr>
          <tr><td className="p-2 border">Cryptography</td><td className="p-2 border">Number theory powers modern encryption</td></tr>
          <tr><td className="p-2 border">Machine Learning</td><td className="p-2 border">Linear algebra and probability</td></tr>
          <tr><td className="p-2 border">Database Systems</td><td className="p-2 border">Set theory and relations underpin SQL</td></tr>
          <tr><td className="p-2 border">Computer Graphics</td><td className="p-2 border">Linear transformations and matrices</td></tr>
          <tr><td className="p-2 border">Networking</td><td className="p-2 border">Graph theory for routing algorithms</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">1. Number Theory</h2>
    <p className="leading-relaxed mt-3">
      Number theory is the study of integers and their properties. It's crucial for cryptography,
      hashing algorithms, and understanding computer arithmetic. Topics include prime numbers,
      modular arithmetic, and the Euclidean algorithm.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Introduction to Number Systems</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Binary, Octal, Hexadecimal Conversions</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Prime Numbers and Primality Testing</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">GCD and LCM</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Modular Arithmetic</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Euclidean Algorithm</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Extended Euclidean Algorithm</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Fermat's Little Theorem</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Chinese Remainder Theorem</td></tr>
          <tr><td className="p-2 border">10</td><td className="p-2 border">Euler's Totient Function</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">2. Combinatorics</h2>
    <p className="leading-relaxed mt-3">
      Combinatorics deals with counting, arrangement, and combination of objects. It's essential
      for analyzing algorithm complexity, probability calculations, and solving optimization problems.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Fundamental Counting Principles</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Permutations</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Combinations</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Binomial Theorem</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Pascal's Triangle</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Pigeonhole Principle</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Inclusion-Exclusion Principle</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Recurrence Relations</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Generating Functions</td></tr>
          <tr><td className="p-2 border">10</td><td className="p-2 border">Catalan Numbers</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">3. Set Theory & Logic</h2>
    <p className="leading-relaxed mt-3">
      Set theory provides the foundation for modern mathematics and is essential for understanding
      databases, type systems, and formal verification. Logic forms the basis of programming and
      circuit design.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Introduction to Sets</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Set Operations</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Venn Diagrams</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Propositional Logic</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Truth Tables</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Logical Equivalences</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Predicate Logic</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Quantifiers</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Mathematical Proofs</td></tr>
          <tr><td className="p-2 border">10</td><td className="p-2 border">Proof Techniques</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">4. Relations & Functions</h2>
    <p className="leading-relaxed mt-3">
      Relations and functions are fundamental concepts that appear throughout computer science,
      from database design to functional programming and algorithm analysis.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Introduction to Relations</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Properties of Relations</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Relation Representation</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Equivalence Relations</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Partial Orders</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Introduction to Functions</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Types of Functions</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Function Composition</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">5. Graph Theory</h2>
    <p className="leading-relaxed mt-3">
      Graph theory is one of the most applicable areas of mathematics in computer science.
      It's used in networking, social media analysis, route planning, and countless algorithms.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Introduction to Graphs</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Graph Terminology</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Graph Representation</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Trees</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Graph Traversals (BFS & DFS)</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Shortest Path Algorithms</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Minimum Spanning Trees</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Eulerian and Hamiltonian Paths</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Graph Coloring</td></tr>
          <tr><td className="p-2 border">10</td><td className="p-2 border">Planarity</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">6. Linear Algebra</h2>
    <p className="leading-relaxed mt-3">
      Linear algebra is essential for computer graphics, machine learning, data science,
      and scientific computing. Understanding vectors and matrices is crucial for modern computing.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Vectors and Matrices</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Matrix Operations</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Systems of Linear Equations</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Determinants</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Matrix Inverse</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Vector Spaces</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Linear Transformations</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Eigenvalues and Eigenvectors</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Boolean Algebra</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">7. Probability</h2>
    <p className="leading-relaxed mt-3">
      Probability theory is fundamental to machine learning, randomized algorithms,
      cryptography, and understanding system reliability.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Introduction to Probability</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Conditional Probability</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Bayes' Theorem</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">Random Variables</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Expected Value</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Common Distributions</td></tr>
          <tr><td className="p-2 border">7</td><td className="p-2 border">Variance and Standard Deviation</td></tr>
          <tr><td className="p-2 border">8</td><td className="p-2 border">Law of Large Numbers</td></tr>
          <tr><td className="p-2 border">9</td><td className="p-2 border">Central Limit Theorem</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">8. Algorithms & Complexity</h2>
    <p className="leading-relaxed mt-3">
      Understanding algorithm complexity is essential for writing efficient code and
      making informed decisions about algorithm selection.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">S.No</th>
            <th className="p-2 border">Topic</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr><td className="p-2 border">1</td><td className="p-2 border">Big O Notation</td></tr>
          <tr><td className="p-2 border">2</td><td className="p-2 border">Master Theorem</td></tr>
          <tr><td className="p-2 border">3</td><td className="p-2 border">Solving Recurrences</td></tr>
          <tr><td className="p-2 border">4</td><td className="p-2 border">P vs NP</td></tr>
          <tr><td className="p-2 border">5</td><td className="p-2 border">Computability Basics</td></tr>
          <tr><td className="p-2 border">6</td><td className="p-2 border">Amortized Analysis</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-8">Prerequisites</h2>
    <ul className="list-disc list-inside leading-relaxed mt-3 space-y-1">
      <li>Basic arithmetic operations</li>
      <li>High school algebra</li>
      <li>Familiarity with basic programming concepts (helpful but not required)</li>
    </ul>

  </div>
);

export default Home;
