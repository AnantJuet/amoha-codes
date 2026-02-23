import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Relations in Mathematics
    </h1>
    <p className="text-sm text-gray-600">Last Updated : 10 Nov, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A relation in Mathematics is defined as the relationship between two sets.
      If we are given two sets, set A and set B, and set A has a relation with set B,
      then each value of set A is related to a value of set B through some unique relation.
      Here, set A is called the domain of the relation, and set B is called the range of the relation.
    </p>

    {/* Image Placeholder */}
    <p className="text-sm text-gray-500">Relation-Crousel-1.webp</p>

    {/* Example of a Relation */}
    <h2 className="text-3xl font-bold  mt-8">Example of a Relation</h2>
    <p className="leading-relaxed">
      Suppose there are two sets X = {'{4, 36, 49, 50}'} and Y = {'{1, -2, -6, -7, 7, 6, 2}'}.
      A relation R states that "(x, y) is in the relation R if x is a square of y" and can be
      represented as:
    </p>

    <p className="leading-relaxed font-semibold">
      R = {'{(4, -2), (4, 2), (36, -6), (36, 6), (49, -7), (49, 7)}'}
    </p>

    <p className="leading-relaxed">
      Another illustration shows two sets, A = {'{x, y, z}'} and B = {'{1, 2, 3}'} and the relation between them.
    </p>

    {/* Representation of Relations */}
    <h2 className="text-3xl font-bold  mt-8">Representation of Relations</h2>
    <p className="leading-relaxed">
      In mathematics or set theory, we can represent the relation using different techniques.
      The two important ways are:
    </p>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Set Builder Notation</li>
      <li>Roaster Notation</li>
    </ul>

    {/* Set Builder Notation */}
    <h3 className="text-2xl font-semibold mt-4 ">Set Builder Notation</h3>
    <p className="leading-relaxed">
      If a relation is represented using a logical formula, it is called set builder notation.
      Example: For sets X = {'{2, 4, 6}'} and Y = {'{4, 8, 12}'}, relation is:
    </p>

    <p className="leading-relaxed font-semibold">
      R = {'{(a, b): b is twice of a, a ∈ X, b ∈ Y}'}
    </p>

    {/* Roaster Form */}
    <h3 className="text-2xl font-semibold mt-4 ">Roaster Form</h3>
    <p className="leading-relaxed">
      Roaster form uses ordered pairs to represent the relation.  
      Example:
    </p>

    <p className="leading-relaxed font-semibold">
      R = {'{(2, 4), (4, 8), (6, 12)}'}
    </p>

    {/* Types of Relation */}
    <h2 className="text-3xl font-bold  mt-8">Types of Relation</h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Empty Relation</li>
      <li>Reflexive Relation</li>
      <li>Symmetric Relation</li>
      <li>Transitive Relation</li>
      <li>Equivalence Relation</li>
      <li>Universal Relation</li>
      <li>Identity Relation</li>
      <li>Inverse Relation</li>
    </ul>

    {/* Graphing Relations */}
    <h2 className="text-3xl font-bold  mt-8">Graphing Relations</h2>
    <p className="leading-relaxed">
      Relations can be plotted using coordinates on the Cartesian plane. Steps to graph a relation:
    </p>

    <ul className="list-decimal pl-6 leading-relaxed">
      <li>Substitute x with values</li>
      <li>Find the corresponding y</li>
      <li>Write ordered pair (x, y)</li>
      <li>Plot and join points</li>
    </ul>

    <p className="text-sm text-gray-500">parabolic-function.webp</p>

    {/* Importance in Computer Science */}
    <h2 className="text-3xl font-bold  mt-8">Importance in Computer Science</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Databases (Relational Model)</h3>
    <p className="leading-relaxed">
      A database table is a set of tuples — exactly what a relation is.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Graphs and Networks</h3>
    <p className="leading-relaxed">
      A graph is a relation between vertices.  
      - Undirected: symmetric  
      - Directed: not symmetric
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">State Machines</h3>
    <p className="leading-relaxed">
      In automata theory, the transition function is a relation between states and inputs.
    </p>

    {/* Solved Examples */}
    <h2 className="text-3xl font-bold  mt-8">Solved Examples of Relations</h2>

    <p className="leading-relaxed">
      <strong>Q1:</strong> Inverse of R = {'{(1,3),(2,4),(3,5)}'}  
      <br />
      <strong>Ans:</strong> R⁻¹ = {'{(3,1),(4,2),(5,3)}'}
    </p>

    <p className="leading-relaxed">
      <strong>Q2:</strong> Inverse of R = {'{(a,x),(b,y),(c,z)}'}  
      <br />
      <strong>Ans:</strong> R⁻¹ = {'{(x,a),(y,b),(z,c)}'}
    </p>

    <p className="leading-relaxed">
      <strong>Q3:</strong> Is R equivalence?  
      <br />
      <strong>Ans:</strong> No. Reflexive + Symmetric, but not Transitive.
    </p>

    <p className="leading-relaxed">
      <strong>Q4:</strong> Domain & Range of R = {'{(1,2),(2,3),(3,4),(4,5)}'}  
      <br />
      <strong>Ans:</strong> Domain = {'{1,2,3,4}'} , Range = {'{2,3,4,5}'}
    </p>

    {/* Unsolved Examples */}
    <h2 className="text-3xl font-bold  mt-8">Unsolved Examples of Relations</h2>

    <ul className="list-disc pl-6 leading-relaxed">
      <li>Find inverse of R = {'{(2,5),(3,6),(4,7)}'}.</li>
      <li>Find inverse of R = {'{(p,q),(r,s),(t,u)}'}.</li>
      <li>Check reflexive, symmetric, transitive for R = {'{(1,1),(2,2),(3,3),(1,2),(2,3)}'}.</li>
      <li>Find domain & range of R = {'{(2,4),(3,9),(4,16),(5,25)}'}.</li>
      <li>Find inverse of R = {'{(1,2),(2,3),(3,4),(4,5)}'}.</li>
      <li>Check if relation x + y even is equivalence.</li>
      <li>Check if “a divides b” is transitive.</li>
      <li>Find composition R∘S for given sets.</li>
      <li>Find reflexive closure of R on set {'{a,b,c}'}.</li>
    </ul>
  </div>
);

export default Home;
