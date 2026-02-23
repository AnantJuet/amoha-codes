import React from "react";

const RustIntro: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Introduction</h1>

    <h2 className="text-2xl font-bold mt-6">What is Rust?</h2>
    <p>
      Rust is a multi-paradigm, general-purpose programming language designed for performance and safety, especially safe concurrency. It was created by Graydon Hoare at Mozilla Research, with contributions from others.
    </p>

    <p className="mt-3">
      Rust syntactically similar to C++, but can guarantee memory safety by using a borrow checker to validate references. It achieves memory safety without garbage collection.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Features</h2>

    <h3 className="text-xl font-semibold mt-4">1. Ownership System</h3>
    <p>
      Rust's most unique feature is its ownership system, which enables memory safety guarantees without needing a garbage collector.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Zero-Cost Abstractions</h3>
    <p>
      You can write high-level code without sacrificing performance. The abstractions you use compile down to roughly the same assembly as if you'd written the lower-level code by hand.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Pattern Matching</h3>
    <p>
      Rust has powerful pattern matching with the <code>match</code> expression, allowing for expressive and safe handling of different cases.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Type Safety</h3>
    <p>
      Rust's strong type system catches many bugs at compile time, including null pointer dereferences and data races.
    </p>

    <h2 className="text-2xl font-bold mt-6">History of Rust</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2006</td>
          <td className="border border-gray-300 px-4 py-2">Rust started as a personal project by Graydon Hoare</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2009</td>
          <td className="border border-gray-300 px-4 py-2">Mozilla began sponsoring the project</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2010</td>
          <td className="border border-gray-300 px-4 py-2">Rust was announced publicly</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2015</td>
          <td className="border border-gray-300 px-4 py-2">Rust 1.0 was released</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2021</td>
          <td className="border border-gray-300 px-4 py-2">Rust Foundation was established</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Rust vs Other Languages</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Rust</th>
          <th className="border border-gray-300 px-4 py-2 text-left">C/C++</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Go</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Memory Safety</td>
          <td className="border border-gray-300 px-4 py-2">Compile-time</td>
          <td className="border border-gray-300 px-4 py-2">Manual</td>
          <td className="border border-gray-300 px-4 py-2">GC</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Performance</td>
          <td className="border border-gray-300 px-4 py-2">High</td>
          <td className="border border-gray-300 px-4 py-2">High</td>
          <td className="border border-gray-300 px-4 py-2">Medium</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Concurrency</td>
          <td className="border border-gray-300 px-4 py-2">Fearless</td>
          <td className="border border-gray-300 px-4 py-2">Manual</td>
          <td className="border border-gray-300 px-4 py-2">Goroutines</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RustIntro;
