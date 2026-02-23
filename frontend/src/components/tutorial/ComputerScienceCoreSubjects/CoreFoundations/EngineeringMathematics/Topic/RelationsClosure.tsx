import React from "react";

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Closure of Relations ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Closure of Relations
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 27 Sep, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Closure of Relations: In mathematics, especially in the context of set
      theory and algebra, the closure of relations is a crucial concept. It
      involves extending a given relation to include additional elements based
      on specific properties, such as reflexivity, symmetry, and transitivity.
    </p>

    <p className="leading-relaxed">
      Understanding the closure of relations is essential in fields like
      computer science, database theory, and formal logic, where relational
      structures are frequently analyzed and manipulated.
    </p>

    {/* Table of Content */}
    <h2 className="text-3xl font-bold  mt-8">Table of Content</h2>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>What is the Closure of Relations?</li>
      <li>Types of Closure</li>
      <li>Algorithm (Warshall's Algorithm)</li>
      <li>Applications in Engineering</li>
      <li>Sample Problems on Closure of Relations</li>
      <li>Practice Problems on Closure of Relations</li>
    </ul>

    {/* What is the Closure of Relations */}
    <h2 className="text-3xl font-bold  mt-8">
      What is the Closure of Relations?
    </h2>
    <p className="leading-relaxed">
      A relation R on a set A is a subset of the Cartesian product A × A. It
      consists of ordered pairs of elements from A. The closure of a relation
      refers to the smallest relation that contains R and satisfies certain
      properties.
    </p>

    {/* Types of Closure */}
    <h2 className="text-3xl font-bold  mt-8">Types of Closure</h2>

    {/* Reflexive Closure */}
    <h3 className="text-2xl font-semibold mt-4 ">
      1. Reflexive Closure
    </h3>
    <p className="leading-relaxed">
      The reflexive closure of a relation R on a set A is the smallest relation
      R′ that contains R and is reflexive. This means that every element in A is
      related to itself.
    </p>

    <p className="leading-relaxed">
      <strong>Formula:</strong> R′ = R ∪ {'{'}(a,a) ∣ a ∈ A{'}'}
    </p>

    <p className="leading-relaxed">
      <strong>Example:</strong> Let A = {'{'}1,2{'}'} and R = {'{'}(1,2){'}'}.
      The reflexive closure of R is:
      <br />
      R′ = {'{'}(1,2),(1,1),(2,2){'}'}
    </p>

    {/* Symmetric Closure */}
    <h3 className="text-2xl font-semibold mt-4 ">
      2. Symmetric Closure
    </h3>
    <p className="leading-relaxed">
      The symmetric closure of a relation R on a set A is the smallest relation
      R′ that contains R and is symmetric. This means that if (a,b) ∈ R′, then
      (b,a) ∈ R′.
    </p>

    <p className="leading-relaxed">
      <strong>Formula:</strong> R′ = R ∪ {'{'}(b,a) ∣ (a,b) ∈ R{'}'}
    </p>

    <p className="leading-relaxed">
      <strong>Example:</strong> Let A = {'{'}1,2{'}'} and R = {'{'}(1,2){'}'}.
      The symmetric closure is:
      <br />
      R′ = {'{'}(1,2),(2,1){'}'}
    </p>

    {/* Transitive Closure */}
    <h3 className="text-2xl font-semibold mt-4 ">
      3. Transitive Closure
    </h3>
    <p className="leading-relaxed">
      The transitive closure of a relation R on a set A is the smallest relation
      R′ that contains R and is transitive. This means that if (a,b) ∈ R and
      (b,c) ∈ R′, then (a,c) ∈ R′.
    </p>

    {/* Algorithm */}
    <h2 className="text-3xl font-bold  mt-8">
      Algorithm (Warshall's Algorithm)
    </h2>

    <ul className="list-decimal ml-6 leading-relaxed">
      <li>Initialize R′ = R.</li>
      <li>For each (a,b) ∈ R′ and (b,c) ∈ R, add (a,c) to R′.</li>
    </ul>

    <p className="leading-relaxed mt-2">
      <strong>Example:</strong>  
      A = {'{'}1,2,3{'}'} and R = {'{'}(1,2),(2,3){'}'}  
      <br />
      Transitive closure:
      <br />
      R′ = {'{'}(1,2),(2,3),(1,3){'}'}
    </p>

    {/* Applications */}
    <h2 className="text-3xl font-bold  mt-8">
      Applications in Engineering
    </h2>

    <h3 className="text-2xl font-semibold mt-4">1. Database Theory</h3>
    <p className="leading-relaxed">
      Used in query optimization and ensuring transitive dependencies for
      normalization.
    </p>

    <h3 className="text-2xl font-semibold mt-4">2. Computer Networks</h3>
    <p className="leading-relaxed">
      Transitive closure helps in routing and shortest-path calculations.
    </p>

    <h3 className="text-2xl font-semibold mt-4">3. Formal Verification</h3>
    <p className="leading-relaxed">
      Used to verify system correctness under all transitions.
    </p>

    <h3 className="text-2xl font-semibold mt-4">4. Compiler Design</h3>
    <p className="leading-relaxed">
      Used in reaching definitions and data-flow analysis.
    </p>

    <h3 className="text-2xl font-semibold mt-4">5. Social Network Analysis</h3>
    <p className="leading-relaxed">
      Helps find indirect connections and influence chains.
    </p>

    {/* Sample Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Sample Problems on Closure of Relations
    </h2>

    <p className="leading-relaxed whitespace-pre-line">

      <strong>Example 1: Reflexive Closure</strong>
      {'\n'}
      R = {'{'}(1,2),(2,3),(3,4){'}'} on A = {'{'}1,2,3,4{'}'}
      {'\n'}
      Reflexive closure = R ∪ {'{'}(1,1),(2,2),(3,3),(4,4){'}'}

      {'\n\n'}
      <strong>Example 2: Symmetric Closure</strong>
      {'\n'}
      R = {'{'}(1,2),(2,3),(1,3){'}'}
      {'\n'}
      Symmetric closure = R ∪ {'{'}(2,1),(3,2),(3,1){'}'}

      {'\n\n'}
      <strong>Example 3: Transitive Closure</strong>
      {'\n'}
      R = {'{'}(1,2),(2,3),(3,4){'}'}
      {'\n'}
      Transitive closure = {'{'}(1,2),(2,3),(3,4),(1,3),(1,4),(2,4){'}'}

      {'\n\n'}
      <strong>Example 4: All Closures</strong>
      {'\n'}
      R = {'{'}(1,2),(2,1){'}'} on A = {'{'}1,2,3{'}'}
      {'\n'}
      Reflexive: Add (1,1),(2,2),(3,3)
      {'\n'}
      Symmetric: Already symmetric
      {'\n'}
      Transitive: Already transitive

      {'\n\n'}
      <strong>Example 5: Reflexive Closure</strong>
      {'\n'}
      R = {'{'}(1,2),(2,3){'}'} on A={'{'}1,2,3{'}'}
      {'\n'}
      Reflexive closure = R ∪ {'{'}(1,1),(2,2),(3,3){'}'}
    </p>

    {/* Practice Problems */}
    <h2 className="text-3xl font-bold  mt-8">
      Practice Problems on Closure of Relations
    </h2>

    <ol className="list-decimal ml-6 leading-relaxed">
      <li>Find the reflexive closure of R = {'{'}(1,2),(2,3),(3,1){'}'} on A = {'{'}1,2,3{'}'}.</li>
      <li>Determine the symmetric closure of R = {'{'}(a,b),(b,c),(c,d){'}'}.</li>
      <li>Calculate the transitive closure of R = {'{'}(1,2),(2,3),(3,4){'}'}.</li>
      <li>Find the reflexive & symmetric closure of R = {'{'}(x,y),(y,z){'}'}.</li>
      <li>Determine transitive closure of R = {'{'}(a,b),(b,c),(c,a),(a,d){'}'}.</li>
      <li>Calculate all closures of R = {'{'}(1,2),(2,3){'}'} on A={'{'}1,2,3{'}'}.</li>
      <li>Find symmetric closure of R={'{'}(1,1),(1,2),(2,3),(3,1){'}'}.</li>
      <li>Determine reflexive closure of R={'{'}(a,b),(b,a),(b,c),(c,c){'}'}.</li>
      <li>Find transitive closure of R={'{'}(1,2),(2,1),(2,3),(3,4){'}'}.</li>
      <li>Find reflexive & transitive closure of R={'{'}(x,y),(y,z),(z,x){'}'}.</li>
    </ol>

    {/* Summary */}
    <h2 className="text-3xl font-bold  mt-8">Summary</h2>
    <p className="leading-relaxed">
      The closure of relations is a powerful concept in mathematics and computer
      science. It helps extend relations to satisfy essential properties like
      reflexivity, symmetry, and transitivity. These closures are widely used in
      database theory, network routing, formal verification, compiler design,
      and social network analysis. Understanding closure operations allows for
      efficient and accurate modeling of complex systems.
    </p>

  </div>
);

export default Home;
