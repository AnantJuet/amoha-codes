import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Independent Sets, Covering and Matching ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Independent Sets, Covering and Matching
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* ========== Independent Sets ========== */}
    <h2 className="text-3xl font-bold  mt-6">1. Independent Sets</h2>
    <p className="leading-relaxed">
      A set of vertices <strong>I</strong> is called an independent set if no two vertices in the set are
      adjacent. It is also called a <strong>stable set</strong>.
    </p>

    <p className="leading-relaxed">
      The parameter <strong>α₀(G)</strong> = max(|I| : I is an independent set in G) is called the
      <strong> independence number</strong> of G.
    </p>

    <p className="leading-relaxed">
      Any independent set I with |I| = α₀(G) is called a <strong>maximum independent set</strong>.
    </p>

    <p className="leading-relaxed">
      For the given graph G, independent sets are:
      <br />
      I₁ = {"{1}"}, I₂ = {"{2}"}, I₃ = {"{3}"}, I₄ = {"{4}"}, I₅ = {"{1, 3}"}, I₆ = {"{2, 4}"}
      <br />
      Therefore, independence number α₀(G) = <strong>2</strong>.
    </p>

    {/* ========== Vertex Cover ========== */}
    <h2 className="text-3xl font-bold  mt-6">2. Vertex Covering</h2>
    <p className="leading-relaxed">
      A set of vertices <strong>K</strong> that covers all edges of graph G is called a <strong>vertex cover</strong>.
    </p>

    <p className="leading-relaxed">
      The parameter <strong>β₀(G)</strong> = min(|K| : K is a vertex cover of G) is the
      <strong> vertex covering number</strong>.
    </p>

    <p className="leading-relaxed">
      For the given graph G:
      <br />
      V₁ = {"{1, 3}"}, V₂ = {"{2, 4}"}, V₃ = {"{1, 2, 3}"}, V₄ = {"{1, 2, 3, 4}"}
      <br />
      Minimum vertex cover β₀(G) = <strong>2</strong>.
    </p>

    {/* Notes */}
    <h3 className="text-2xl font-semibold mt-4 ">Important Notes</h3>
    <p className="leading-relaxed">
      • A set I is independent in G if V(G) − I is a vertex cover. <br />
      • For any graph G, α₀(G) + β₀(G) = n (number of vertices).
    </p>

    {/* ========== Edge Covering ========== */}
    <h2 className="text-3xl font-bold  mt-6">Edge Covering</h2>
    <p className="leading-relaxed">
      A set of edges <strong>F</strong> that covers all vertices of graph G is called an <strong>edge cover</strong>.
    </p>

    <p className="leading-relaxed">
      The parameter <strong>β₁(G)</strong> = min(|F| : F is an edge cover) is the
      <strong> edge covering number</strong>.
    </p>

    <p className="leading-relaxed">
      For the given graph G:
      <br />
      E₁ = {"{a, b, c, d}"}, E₂ = {"{a, d}"}, E₃ = {"{b, c}"}
      <br />
      Minimum edge cover β₁(G) = <strong>2</strong>.
    </p>

    <p className="leading-relaxed">
      Note: For any graph G, α₁(G) + β₁(G) = n.
    </p>

    {/* ========== Matching ========== */}
    <h2 className="text-3xl font-bold  mt-6">3. Matching</h2>
    <p className="leading-relaxed">
      A matching is a set of non-adjacent edges (independent edges).
    </p>

    <p className="leading-relaxed">
      The parameter <strong>α₁(G)</strong> = max(|M| : M is a matching in G) is called the
      <strong> matching number</strong>.
    </p>

    <p className="leading-relaxed">
      For the given graph G:
      <br />
      M₁ = {"{a}"}, M₂ = {"{b}"}, M₃ = {"{c}"}, M₄ = {"{d}"}, M₅ = {"{a, d}"}, M₆ = {"{b, c}"}
      <br />
      Matching number α₁(G) = <strong>2</strong>.
    </p>

    {/* Complete Matching */}
    <h3 className="text-2xl font-semibold mt-4 ">Complete Matching</h3>
    <p className="leading-relaxed">
      A matching is called <strong>complete (perfect)</strong> if it covers all vertices of the graph.
    </p>

    {/* Hall's Theorem */}
    <h3 className="text-2xl font-semibold mt-4 ">Hall’s Marriage Theorem</h3>
    <p className="leading-relaxed">
      A bipartite graph G with partition (V₁, V₂) has a complete matching from V₁ to V₂ if and only if
      |N(A)| ≥ |A| for every subset A ⊆ V₁.
    </p>

    {/* ========== Examples ========== */}
    <h2 className="text-3xl font-bold  mt-6">Solved Examples</h2>

    <h3 className="text-2xl font-semibold mt-4 ">Example 1: Independent Set</h3>
    <p className="leading-relaxed">
      Graph:
      <br />
      1—2  
      <br />
      |  |  
      <br />
      3—4
      <br />
      Independent sets: {"{1}"}, {"{2}"}, {"{3}"}, {"{4}"}, {"{1,3}"}, {"{2,4}"}
      <br />
      Independence number α₀(G) = <strong>2</strong>.
    </p>

    <h3 className="text-2xl font-semibold mt-4 ">Example 2: Vertex Cover</h3>
    <p className="leading-relaxed">
      Vertex covers: {"{1,3}"}, {"{2,4}"}, {"{1,2,3}"}, {"{1,2,3,4}"}
      <br />
      Minimum vertex cover β₀(G) = <strong>2</strong>.
    </p>

    {/* ========== Practice Problems ========== */}
    <h2 className="text-3xl font-bold  mt-6">Practice Problems</h2>
    <p className="leading-relaxed space-y-2">
      1. Find α₀(G) for G with edges (1,2), (1,3), (2,4), (3,5). <br />
      2. Find β₀(G) for the same graph. <br />
      3. Find β₁(G) (edge covering number). <br />
      4. Find α₁(G) (maximum matching). <br />
      5. Independent sets of cycle graph with 6 vertices. <br />
      6. Minimum vertex cover of the same cycle graph. <br />
      7. Edge covering number of cycle graph. <br />
      8. Maximum matching of cycle graph. <br />
      9. Independence number & vertex cover of K₅. <br />
      10. Matching number & edge cover of bipartite K₃,₄.
    </p>

  </div>
);

export default Home;
