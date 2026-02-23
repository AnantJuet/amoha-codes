import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Graph Types ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Graphs with Examples
    </h1>

    <p className="text-sm text-gray-500">Last Updated : 27 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A graph is a mathematical structure used to represent relationships between objects. 
      It consists of two main components:
      <br />• <strong>Vertices</strong> (nodes): The points representing entities.  
      <br />• <strong>Edges</strong>: The lines connecting pairs of vertices, representing relationships.
      <br /><br />
      Graphs can be categorized in various ways based on their properties and structure.
    </p>

    {/* ================= Based on Size ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Size</h2>

    <h3 className="text-2xl font-semibold mt-4">Finite Graphs</h3>
    <p className="leading-relaxed">
      A finite graph has a limited number of vertices and edges. It represents real-world systems 
      with a countable number of components, such as computer networks, social networks, and maps.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Infinite Graphs</h3>
    <p className="leading-relaxed">
      An infinite graph contains infinitely many vertices or edges. Such graphs extend indefinitely 
      and are mostly used in theoretical mathematics.
    </p>

    {/* ================= Based on Structure ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Structure</h2>

    <h3 className="text-2xl font-semibold mt-4">Trivial Graph</h3>
    <p className="leading-relaxed">
      A trivial graph contains only one vertex and no edges. It is the simplest possible graph.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Simple Graph</h3>
    <p className="leading-relaxed">
      A simple graph has no loops and no multiple edges between the same pair of vertices. 
      Example: A railway network connecting cities once.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Multigraph</h3>
    <p className="leading-relaxed">
      A multigraph allows multiple edges between two vertices but does not allow loops.  
      Example: A road map where multiple routes connect the same two locations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Null Graph</h3>
    <p className="leading-relaxed">
      A null graph contains vertices but no edges. All vertices are isolated.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Complete Graph</h3>
    <p className="leading-relaxed">
      In a complete graph, each vertex is connected to every other vertex. 
      A complete graph with n vertices has degree n−1 at each vertex.
    </p>

    {/* ================= Based on Direction ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Direction</h2>

    <h3 className="text-2xl font-semibold mt-4">Directed Graph</h3>
    <p className="leading-relaxed">
      A directed graph (digraph) contains edges with direction, represented by arrows.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Undirected Graph</h3>
    <p className="leading-relaxed">
      An undirected graph has edges without direction.  
      If two vertices are connected, traversal is possible both ways.
    </p>

    {/* ================= Based on Edge Weights ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Edge Weights</h2>

    <h3 className="text-2xl font-semibold mt-4">Weighted Graphs</h3>
    <p className="leading-relaxed">
      In a weighted graph, each edge is assigned a numerical value representing cost, time, or distance.
      Used in Google Maps, airline networks, and delivery systems.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Unweighted Graphs</h3>
    <p className="leading-relaxed">
      All edges carry equal weight. Only the presence or absence of connections matters.
    </p>

    {/* ================= Special Graphs ================= */}
    <h2 className="text-3xl font-bold mt-10">Special Graphs</h2>

    <h3 className="text-2xl font-semibold mt-4">Pseudograph</h3>
    <p className="leading-relaxed">
      A pseudograph allows both loops and multiple edges. It is more flexible than simple graphs.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Regular Graph</h3>
    <p className="leading-relaxed">
      A regular graph has all vertices with the same degree.  
      For example, in a 3-regular graph, every vertex has exactly three edges.
    </p>

    {/* ================= Based on Density ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Density</h2>

    <h3 className="text-2xl font-semibold mt-4">Sparse Graph</h3>
    <p className="leading-relaxed">
      A sparse graph contains few edges relative to the number of vertices.  
      Example: Chemical reaction graphs.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Dense Graph</h3>
    <p className="leading-relaxed">
      A dense graph has many edges.  
      Example: Social networks where many users are interconnected.
    </p>

    {/* ================= Based on Connectivity ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Connectivity</h2>

    <h3 className="text-2xl font-semibold mt-4">Connected and Disconnected Graphs</h3>
    <p className="leading-relaxed">
      A graph is connected if any vertex can be reached from any other vertex.  
      A disconnected graph has isolated components.
    </p>

    {/* ================= Based on Cycles ================= */}
    <h2 className="text-3xl font-bold mt-10">Based on Cycles</h2>

    <h3 className="text-2xl font-semibold mt-4">Cyclic Graph</h3>
    <p className="leading-relaxed">
      A cyclic graph forms a closed loop with at least three vertices.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Trees</h3>
    <p className="leading-relaxed">
      A tree is a connected graph with no cycles.  
      There is exactly one unique path between any two vertices.
    </p>
  </div>
);

export default Home;
