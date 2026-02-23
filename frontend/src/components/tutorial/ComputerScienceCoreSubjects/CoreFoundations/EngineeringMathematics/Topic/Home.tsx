import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Engineering Mathematics Tutorials ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Engineering Mathematics Tutorials
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Engineering mathematics is a vital component of the engineering discipline, offering the analytical
      tools and techniques necessary for solving complex problems across various fields. Whether you're
      designing a bridge, optimizing a manufacturing process, or developing algorithms for computer systems,
      a solid understanding of mathematical principles is crucial.
    </p>

    {/* Propositional and First-Order Logic */}
    <h2 className="text-3xl font-bold  mt-8">Propositional and First-Order Logic</h2>
    <p className="leading-relaxed">
      This section covers the basics of propositional and first-order logic, including logical equivalences, 
      predicates, quantifiers, and rules of inference, helping you understand their applications and key concepts.
    </p>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Introduction to Propositional Logic</li>
      <li>Propositions Laws and Algebra</li>
      <li>Propositional Equivalences</li>
      <li>PDNF and PCNF</li>
      <li>Predicates and Quantifiers</li>
      <li>Predicates and Quantifiers Rules</li>
      <li>Theorems on Nested Quantifiers</li>
      <li>Rules of Inference</li>
    </ol>

    {/* Set Theory */}
    <h2 className="text-3xl font-bold  mt-8">Set Theory</h2>
    <p className="leading-relaxed">
      This section introduces key concepts in set theory and algebra, including set operations, relations, 
      functions, generating functions, and various algebraic structures, focusing on their properties and applications.
    </p>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Sets in Maths</li>
      <li>Representation of Sets</li>
      <li>Set Theory Symbols</li>
      <li>Subsets & Supersets</li>
      <li>Power Set</li>
      <li>Properties of Power Set</li>
      <li>Set Theory Formulas</li>
      <li>Inclusion-Exclusion</li>
      <li>Introduction to Proofs</li>
      <li>Sequence, Series, and Summations</li>
      <li>Introduction to Relations</li>
      <li>Representing Relations</li>
      <li>Representing Relations in Matrices and Graphs</li>
      <li>Closure of Relations</li>
      <li>Partial Orders and Lattices</li>
      <li>Hasse Diagrams</li>
      <li>Equivalence Relations on a finite set</li>
      <li>Total number of Possible Functions</li>
      <li>Classes of Functions</li>
      <li>Generating Functions</li>
      <li>Groups</li>
      <li>Rings, Integral Domains and Fields</li>
      <li>Independent Sets, Covering and Matching</li>
    </ol>

    {/* Combinatorics */}
    <h2 className="text-3xl font-bold  mt-8">Combinatorics</h2>
    <p className="leading-relaxed">
      This section covers essential combinatorics concepts, including the pigeonhole principle, permutations, 
      combinations, binomial coefficients, recurrence relations, and problem-solving techniques.
    </p>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Combinatorics Basics</li>
      <li>PnC and Binomial Coefficients</li>
      <li>Generalized PnC- [Set 1] & [Set 2]</li>
      <li>Corollaries of Binomial Theorem</li>
      <li>Pigeon Hole Principle</li>
      <li>Sum of squares of even and odd natural numbers</li>
      <li>Finding the nth term of any Polynomial Sequence</li>
      <li>Types of Recurrence Relations</li>
    </ol>

    {/* Probability */}
    <h2 className="text-3xl font-bold  mt-8">Probability</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Probability</li>
      <li>Conditional Probability</li>
      <li>Bayes’s Formula</li>
      <li>Random Variables</li>
    </ol>

    {/* Graph Theory */}
    <h2 className="text-3xl font-bold  mt-8">Graph Theory</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Graph Theory Basics</li>
      <li>Graph Types</li>
      <li>Walks, Trails, Paths, Cycles, and Circuits in Graph</li>
      <li>Graph Isomorphisms and Connectivity</li>
      <li>Euler and Hamiltonian Paths</li>
      <li>Planar Graphs and Graph Coloring</li>
      <li>Matching</li>
      <li>Graph Measurements</li>
      <li>Betweenness Centrality</li>
      <li>Number of nodes and height of binary tree</li>
    </ol>

    {/* Linear Algebra */}
    <h2 className="text-3xl font-bold  mt-8">Linear Algebra</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Matrix Introduction</li>
      <li>Different Operations on Matrices</li>
      <li>Representations of Matrices and Graphs in Relations</li>
      <li>System of Linear Equations</li>
      <li>LU Decomposition of a System of Linear Equations</li>
      <li>Doolittle Algorithm: LU Decomposition</li>
      <li>Eigen Values and Eigen Vectors</li>
    </ol>

    {/* Calculus */}
    <h2 className="text-3xl font-bold  mt-8">Calculus</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Limits, Continuity, and Differentiability</li>
      <li>Inverse functions and composition of functions</li>
      <li>Rolle’s Mean Value Theorem</li>
      <li>Lagrange’s Mean Value Theorem</li>
      <li>Cauchy’s Mean Value Theorem</li>
      <li>Unimodal functions and Bimodal functions</li>
      <li>Indefinite Integrals</li>
    </ol>

    {/* Statistics and Numerical Methods */}
    <h2 className="text-3xl font-bold  mt-8">Statistics and Numerical Methods</h2>
    <ol className="list-decimal ml-6 mt-2 space-y-1">
      <li>Scales of Measurement</li>
      <li>Univariate, Bivariate, and Multivariate Data</li>
      <li>Mean, Variance, and Standard Deviation</li>
      <li>Covariance and Correlation</li>
      <li>Law of Total Probability</li>
      <li>Binomial Distribution</li>
      <li>Hypergeometric Distribution Model</li>
      <li>Probability Poisson Distribution</li>
      <li>Uniform Distribution</li>
      <li>Exponential Distribution</li>
      <li>Normal Distribution</li>
      <li>Homogeneous Poisson Process</li>
      <li>Nonhomogeneous Poisson Processes</li>
      <li>Renewal processes in Probability</li>
      <li>Newton’s Divided Difference Interpolation Formula</li>
    </ol>
    
  </div>
);

export default Home;
