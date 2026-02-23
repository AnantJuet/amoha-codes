import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Representing Relations ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Discrete Mathematics | Representing Relations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Prerequisite – <strong>Introduction and Types of Relations</strong>
    </p>
    <p className="leading-relaxed">
      Relations can be represented using <strong>ordered pairs</strong>, 
      <strong>matrices</strong>, and <strong>digraphs</strong>. Each method helps in 
      analyzing the properties of relations easily.
    </p>

    {/* Ordered Pairs */}
    <h2 className="text-3xl font-bold  mt-8">
      Ordered Pairs
    </h2>
    <p className="leading-relaxed">
      In this method, ordered pairs (x, y) are used to represent the relation. 
      Corresponding values of x and y are enclosed in parentheses.
    </p>
    <p className="leading-relaxed">
      Example: <strong>{`{(1, 1), (2, 4), (3, 9), (4, 16), (5, 25)}`}</strong> <br />
      This represents the square relation, meaning if x = 1, then y = x × x = 1, and so on.
    </p>

    {/* Matrix Representation */}
    <h2 className="text-3xl font-bold  mt-8">
      Representing Using Matrix
    </h2>
    <p className="leading-relaxed">
      In this method, a zero-one matrix is used. If an element belongs to the relation, 
      it is represented by <strong>1</strong>; otherwise, <strong>0</strong>. This helps determine 
      reflexive, symmetric, and transitive properties easily.
    </p>
    <p className="leading-relaxed">
      Suppose R is a relation from X = {`{x1, x2, ... xn}`} to Y = {`{y1, y2, ... yn}`}.  
      It is represented as:
    </p>
    <p className="leading-relaxed">
      <strong>
        M[i, j] = 1, if (Xi, Yj) ∈ R <br />
        M[i, j] = 0, if (Xi, Yj) ∉ R
      </strong>
    </p>

    <p className="leading-relaxed">
      Example: If A = {`{1, 2, 3}`}, B = {`{1, 2}`}, and  
      R = {`{(2, 1), (3, 1), (3, 2)}`},  
      then corresponding values are marked as <strong>1</strong> in the matrix.
    </p>

    {/* Digraph Representation */}
    <h2 className="text-3xl font-bold  mt-8">
      Digraph Representation
    </h2>
    <p className="leading-relaxed">
      A digraph (directed graph) consists of vertices (V) and directed edges (E).  
      Each edge is represented by an ordered pair.  
      In (a, b), ‘a’ is the initial vertex and ‘b’ is the final vertex.  
      If an edge is (a, a), it represents a loop.
    </p>

    <p className="leading-relaxed">
      Example:  
      R = {`{(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)}`}  
      This relation is represented using a digraph.
    </p>

  </div>
);

export default Home;
