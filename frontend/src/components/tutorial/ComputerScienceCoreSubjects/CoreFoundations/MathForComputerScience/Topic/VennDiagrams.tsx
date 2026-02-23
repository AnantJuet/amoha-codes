import React from 'react';

const VennDiagrams: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Venn Diagrams</h1>

    <p className="text-lg leading-relaxed">
      Venn diagrams are visual representations of sets using overlapping circles or shapes.
      They help visualize set relationships, operations, and are widely used for problem-solving
      in logic, probability, and database queries.
    </p>

    <h2 className="text-2xl font-bold mt-8">Basic Structure</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Component</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Rectangle</td><td className="p-2 border">Represents the universal set U</td></tr>
        <tr><td className="p-2 border">Circles</td><td className="p-2 border">Represent individual sets inside the rectangle</td></tr>
        <tr><td className="p-2 border">Overlapping regions</td><td className="p-2 border">Show intersections between sets</td></tr>
        <tr><td className="p-2 border">Shaded regions</td><td className="p-2 border">Represent the result of operations</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Two-Set Venn Diagram Regions</h2>
    <p className="mt-3">For sets A and B, there are 4 distinct regions:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Region</th>
          <th className="p-2 border">Notation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">A only</td><td className="p-2 border font-mono text-gray-900">A - B</td><td className="p-2 border">Elements in A but not B</td></tr>
        <tr><td className="p-2 border">B only</td><td className="p-2 border font-mono text-gray-900">B - A</td><td className="p-2 border">Elements in B but not A</td></tr>
        <tr><td className="p-2 border">Both</td><td className="p-2 border font-mono text-gray-900">A &cap; B</td><td className="p-2 border">Intersection</td></tr>
        <tr><td className="p-2 border">Neither</td><td className="p-2 border font-mono text-gray-900">(A &cup; B)'</td><td className="p-2 border">Outside both circles</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Three-Set Venn Diagram</h2>
    <p className="mt-3">For sets A, B, and C, there are 8 distinct regions:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Region</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">A only</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">B only</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">C only</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">A &cap; B only</td></tr>
        <tr><td className="p-2 border">5</td><td className="p-2 border">A &cap; C only</td></tr>
        <tr><td className="p-2 border">6</td><td className="p-2 border">B &cap; C only</td></tr>
        <tr><td className="p-2 border">7</td><td className="p-2 border">A &cap; B &cap; C</td></tr>
        <tr><td className="p-2 border">8</td><td className="p-2 border">Outside all</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Visualizing Operations</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Operation</th>
          <th className="p-2 border">What to Shade</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-mono text-gray-900">A &cup; B (Union)</td><td className="p-2 border">All of circle A and all of circle B</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">A &cap; B (Intersection)</td><td className="p-2 border">Only the overlapping region</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">A - B (Difference)</td><td className="p-2 border">Part of A that doesn't overlap with B</td></tr>
        <tr><td className="p-2 border font-mono text-gray-900">A' (Complement)</td><td className="p-2 border">Everything outside circle A</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Survey Problem Example</h2>
    <p className="mt-3"><strong>Problem:</strong> In a class of 50 students: 30 like Math, 25 like Science, 15 like both. How many like:</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Question</th>
          <th className="p-2 border">Calculation</th>
          <th className="p-2 border">Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Only Math?</td><td className="p-2 border font-mono text-gray-900">30 - 15</td><td className="p-2 border">15</td></tr>
        <tr><td className="p-2 border">Only Science?</td><td className="p-2 border font-mono text-gray-900">25 - 15</td><td className="p-2 border">10</td></tr>
        <tr><td className="p-2 border">At least one subject?</td><td className="p-2 border font-mono text-gray-900">15 + 15 + 10</td><td className="p-2 border">40</td></tr>
        <tr><td className="p-2 border">Neither subject?</td><td className="p-2 border font-mono text-gray-900">50 - 40</td><td className="p-2 border">10</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Applications</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Field</th>
          <th className="p-2 border">Application</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Database queries</td><td className="p-2 border">Visualizing JOIN operations</td></tr>
        <tr><td className="p-2 border">Logic</td><td className="p-2 border">Truth conditions for compound statements</td></tr>
        <tr><td className="p-2 border">Probability</td><td className="p-2 border">Event relationships</td></tr>
        <tr><td className="p-2 border">Problem solving</td><td className="p-2 border">Counting and categorization problems</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Draw a Venn diagram showing A &cap; (B &cup; C)</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">In a survey of 100 people: 60 drink coffee, 50 drink tea, 30 drink both. Find all regions.</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Use a Venn diagram to verify: (A &cap; B)' = A' &cup; B' (De Morgan's Law)</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">How many regions are in a 4-set Venn diagram?</td></tr>
      </tbody>
    </table>
  </div>
);

export default VennDiagrams;
