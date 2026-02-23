import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================== TITLE ================== */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Walks, Trails, Paths, Cycles and Circuits in Graph
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ================== INTRO ================== */}
    <p className="text-lg leading-relaxed">
      Walks, trails, paths, cycles, and circuits in a graph are sequences of vertices 
      and edges with different properties. Some allow repetition of vertices and edges, 
      while others do not. In this article, we will explore these concepts with examples.
    </p>

    {/* ================== WALK ================== */}
    <h2 className="text-3xl font-bold mt-8">What is Walk?</h2>
    <p className="leading-relaxed">
      A <strong>walk</strong> in a graph is a sequence of vertices and edges where both 
      edges and vertices can be repeated. The length of the walk refers to the number 
      of edges covered in the sequence.
    </p>

    <ul className="list-disc list-inside leading-relaxed mt-2">
      <li>Edges <strong>can</strong> be repeated.</li>
      <li>Vertices <strong>can</strong> be repeated.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Example: <strong>1 → 2 → 3 → 4 → 2 → 1 → 3</strong> is a walk.
    </p>

    <p className="leading-relaxed">
      A walk can be <strong>open</strong> or <strong>closed</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of Walks</h3>
    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Open Walk</strong>: start and end vertices are different.</li>
      <li><strong>Closed Walk</strong>: start and end vertices are same.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Example:  
      <br />Open walk: <strong>1 → 2 → 3 → 4 → 5 → 3</strong>  
      <br />Closed walk: <strong>1 → 2 → 3 → 4 → 5 → 3 → 1</strong>
    </p>

    {/* ================== TRAIL ================== */}
    <h2 className="text-3xl font-bold mt-8">What is Trail?</h2>
    <p className="leading-relaxed">
      A <strong>trail</strong> is an open walk in which no edge is repeated.
      Vertices may be repeated.
    </p>

    <p className="leading-relaxed mt-2"><strong>Key Point:</strong> Edges cannot be repeated.</p>

    <ul className="list-disc list-inside leading-relaxed">
      <li><strong>Open Trail</strong>: start and end vertices differ.</li>
      <li><strong>Closed Trail</strong>: start and end vertices same.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Example Trail: <strong>1 → 3 → 8 → 6 → 3 → 2</strong>  
      <br />Closed Trail: <strong>1 → 3 → 8 → 6 → 3 → 2 → 1</strong>
    </p>

    {/* ================== CIRCUIT ================== */}
    <h2 className="text-3xl font-bold mt-8">What is Circuit?</h2>
    <p className="leading-relaxed">
      A <strong>circuit</strong> is a closed trail where no edge is repeated.
      Vertices may be repeated.
    </p>

    <p className="leading-relaxed mt-2">
      Example: <strong>1 → 2 → 4 → 3 → 6 → 8 → 3 → 1</strong> is a circuit.
    </p>

    {/* ================== PATH ================== */}
    <h2 className="text-3xl font-bold mt-8">What is Path?</h2>
    <p className="leading-relaxed">
      A <strong>path</strong> is a trail in which neither vertices nor edges 
      are repeated.
    </p>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Vertices are not repeated.</li>
      <li>Edges are not repeated.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      Example Path: <strong>6 → 8 → 3 → 1 → 2 → 4</strong>
    </p>

    {/* ================== CYCLE ================== */}
    <h2 className="text-3xl font-bold mt-8">What is Cycle?</h2>
    <p className="leading-relaxed">
      A <strong>cycle</strong> is a closed path (start and end at same vertex) 
      with no repetition of vertices or edges except first–last vertex.
    </p>

    <p className="leading-relaxed mt-2">
      Example Cycle: <strong>1 → 2 → 4 → 3 → 1</strong>
    </p>

    {/* ================== TABLE ================== */}
    <h2 className="text-3xl font-bold mt-8">Table: Walk vs Trail vs Path</h2>

    <table className="w-full border border-gray-400 text-left">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border p-2">Category</th>
          <th className="border p-2">Edges</th>
          <th className="border p-2">Vertices</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border p-2">Walk</td>
          <td className="border p-2">Can be repeated</td>
          <td className="border p-2">Can be repeated</td>
        </tr>
        <tr>
          <td className="border p-2">Trail</td>
          <td className="border p-2">Cannot be repeated</td>
          <td className="border p-2">Can be repeated</td>
        </tr>
        <tr>
          <td className="border p-2">Path</td>
          <td className="border p-2">Cannot be repeated</td>
          <td className="border p-2">Cannot be repeated</td>
        </tr>
      </tbody>
    </table>

    {/* ================== SOLVED EXAMPLES ================== */}
    <h2 className="text-3xl font-bold mt-8">Solved Examples</h2>

    <p className="leading-relaxed">
      1. <strong>Find a trail from A to D</strong>  
      <br />One possible trail: <strong>A → B → D → C → A → B → D</strong>
    </p>

    <p className="leading-relaxed mt-2">
      2. <strong>Find the shortest path from A to C:</strong>  
      <br />Shortest path: <strong>A → B → C</strong>
    </p>

    <p className="leading-relaxed mt-2">
      3. <strong>All possible paths from A to C:</strong>  
      <ul className="list-disc list-inside">
        <li>A → B → C</li>
        <li>A → E → C</li>
        <li>A → B → E → C</li>
      </ul>
    </p>

    {/* ================== PRACTICE ================== */}
    <h2 className="text-3xl font-bold mt-8">Practice Problems</h2>

    <ul className="list-disc list-inside leading-relaxed">
      <li>Find a path from A to F.</li>
      <li>Find a simple path from B to F.</li>
      <li>Find a trail that uses every edge exactly once.</li>
      <li>Identify a cycle in the graph.</li>
      <li>Find the shortest path from A to E.</li>
      <li>List all possible paths from E to F.</li>
      <li>Find a trail from C to F.</li>
      <li>Find the longest simple path in the graph.</li>
      <li>Count the number of distinct cycles.</li>
      <li>Find a path from A to F with exactly 3 edges.</li>
    </ul>

  </div>
);

export default Home;
