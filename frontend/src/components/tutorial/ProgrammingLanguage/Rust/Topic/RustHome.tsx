import React from "react";

const RustHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17">
      Learn Rust
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Rust</b> is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety. It empowers everyone to build reliable and efficient software.
    </p>

    <p className="leading-relaxed mt-3">
      Rust has been voted the "most loved programming language" in the Stack Overflow Developer Survey for multiple consecutive years.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Rust?</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>Memory Safety:</b> Rust guarantees memory safety without garbage collection</li>
      <li><b>Zero-Cost Abstractions:</b> High-level features with no runtime overhead</li>
      <li><b>Fearless Concurrency:</b> Write parallel code without data races</li>
      <li><b>Performance:</b> As fast as C and C++</li>
      <li><b>Modern Tooling:</b> Cargo package manager, rustfmt, clippy, and more</li>
      <li><b>Great Documentation:</b> Comprehensive docs and helpful compiler messages</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>

    <p className="leading-relaxed mt-3">
      Here's a simple Rust program that prints "Hello, World!" to the console:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    println!("Hello, World!");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>fn main():</b> The main function is the entry point of every Rust program</li>
      <li><b>println!:</b> This is a macro (note the !) that prints text to the console</li>
      <li><b>Curly braces:</b> Define the function body</li>
      <li><b>Semicolons:</b> Most statements end with a semicolon</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Rust is Used For</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Operating Systems (Redox OS, parts of Linux kernel)</li>
      <li>Web Browsers (Firefox, Servo)</li>
      <li>Game Engines</li>
      <li>Command Line Tools</li>
      <li>WebAssembly</li>
      <li>Embedded Systems</li>
      <li>Blockchain and Cryptocurrency</li>
      <li>Cloud Infrastructure</li>
    </ul>
  </>
);

export default RustHome;
