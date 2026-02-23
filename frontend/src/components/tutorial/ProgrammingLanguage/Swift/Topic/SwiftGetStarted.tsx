import React from "react";

const SwiftGetStarted: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Get Started
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Install the Swift toolchain and run your first <b>"Hello, Swift!"</b> program using the
      terminal or Xcode.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Install Swift</h2>

    <p className=" leading-relaxed mt-3">
      Swift can be installed on macOS, Windows, and Linux.
    </p>

    <ul className="list-disc ml-6  leading-relaxed mt-3">
      <li>
        <b>macOS (Xcode):</b> Install Xcode from the App Store — it includes the Swift compiler,
        SDKs, and tools.
      </li>
      <li>
        <b>macOS (Command Line):</b> Download the Swift toolchain and verify using{" "}
        <code>swift --version</code>.
      </li>
      <li>
        <b>Windows/Linux:</b> Download the appropriate toolchain from swift.org/install and ensure{" "}
        <code>swift</code> is added to your PATH.
      </li>
      <li>
        <b>Check installation:</b> Run <code>swift --version</code> in the terminal to confirm.
      </li>
    </ul>

    <p className=" leading-relaxed mt-3">
      If installed correctly, the terminal will display the Swift version and platform target.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Hello World</h2>

    <p className=" leading-relaxed mt-3">
      You can run Swift code directly from the terminal or inside Xcode.
    </p>

    <p className=" leading-relaxed mt-3">
      Syntax example:  
      <code className="bg-gray-100 text-black p-1 rounded-md font-mono"> print("Hello, Swift!")</code>
    </p>

    <p className=" leading-relaxed mt-3">
      Run using:
      <br />
      <code className="bg-gray-100 text-black p-1 rounded-md font-mono">swift main.swift</code>
    </p>

    <h2 className="text-2xl font-bold  mt-6">Example</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`// main.swift
print("Hello, Swift!")`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-6">Example Explained</h2>

    <ul className="list-disc ml-6  leading-relaxed mt-3">
      <li>
        <b>main.swift:</b> A Swift file. Code at the top level runs automatically.
      </li>
      <li>
        <b>print:</b> Outputs text to the console. Strings are wrapped in double quotes.
      </li>
    </ul>
  </>
);

export default SwiftGetStarted;
