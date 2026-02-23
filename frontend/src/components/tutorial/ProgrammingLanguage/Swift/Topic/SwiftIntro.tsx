import React from "react";

const SwiftIntroduction: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Introduction
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Swift</b> is a modern, fast, and safe programming language designed by Apple for building
      apps across iOS, macOS, watchOS, tvOS, and even server-side platforms.
    </p>

    <h2 className="text-2xl font-bold text-White mt-6">What is Swift?</h2>

    <p className=" leading-relaxed mt-3">
      Swift is a powerful and intuitive language created by Apple. You can use it to build
      applications for iPhone, iPad, Mac, Apple Watch, and Apple TV. It also runs on servers
      using Linux, Windows, and macOS.
    </p>

    <p className=" leading-relaxed mt-3">
      Swift includes modern features like <b>type inference</b>, <b>optionals</b>,
      <b> value types</b>, and <b>protocol-oriented programming</b> to help you write clean,
      reliable, and efficient code.
    </p>

    <h2 className="text-2xl font-bold text-White mt-6">Example</h2>

    <p className=" leading-relaxed mt-3">
      Here’s a simple Swift program that prints text to the console:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`print("Hello, Swift!")`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-White mt-6">Why Use Swift?</h2>

    <p className=" leading-relaxed mt-3">
      Swift is designed with a strong focus on safety, performance, and expressiveness. Its
      features help developers avoid common bugs and write clear, efficient code.
    </p>

    <ul className="list-disc ml-6  leading-relaxed mt-3">
      <li>Great for building apps on iPhone, iPad, Mac, Apple Watch, and Apple TV</li>
      <li>Open source and available cross-platform</li>
      <li>Expressive syntax with optionals and value semantics</li>
      <li>Robust ecosystem and powerful developer tools in Xcode</li>
    </ul>

    <h2 className="text-2xl font-bold text-White mt-6">Swift History</h2>

    <p className=" leading-relaxed mt-3">
      A brief timeline of important milestones in Swift’s evolution:
    </p>

    <ul className="list-disc ml-6  leading-relaxed mt-3">
      <li><b>2014:</b> Swift 1.0 announced as a modern replacement for Objective-C</li>
      <li><b>2015:</b> Swift becomes open source with Linux support</li>
      <li><b>2019:</b> Swift 5 introduces ABI stability on Apple platforms</li>
      <li><b>2021:</b> Swift 5.5 brings structured concurrency (async/await, Task, actor)</li>
      <li><b>Today:</b> Widely used across iOS, macOS, and server-side development</li>
    </ul>
  </>
);

export default SwiftIntroduction;
