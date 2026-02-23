import React from 'react';

const ComputabilityBasics: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Computability Basics</h1>

    <p className="text-lg leading-relaxed">
      Computability theory studies what problems can be solved by algorithms. Some problems
      are fundamentally unsolvable—no algorithm can ever solve them.
    </p>

    <h2 className="text-2xl font-bold mt-8">Key Concepts</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Concept</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Decidable</td><td className="p-2 border">An algorithm can always give yes/no answer</td></tr>
        <tr><td className="p-2 border">Undecidable</td><td className="p-2 border">No algorithm can solve all instances</td></tr>
        <tr><td className="p-2 border">Turing Machine</td><td className="p-2 border">Abstract model of computation</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">The Halting Problem</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">The Famous Undecidable Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p className="font-semibold">Given a program and input, does it halt or run forever?</p>
            <p className="mt-2">This is undecidable! Proven by Alan Turing via diagonalization.</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Other Undecidable Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Post Correspondence Problem</td></tr>
        <tr><td className="p-2 border">Determining if two programs are equivalent</td></tr>
        <tr><td className="p-2 border">Determining if a program has bugs</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Why can't we solve the halting problem?</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Is "does this program output 42" decidable?</td></tr>
      </tbody>
    </table>
  </div>
);

export default ComputabilityBasics;
