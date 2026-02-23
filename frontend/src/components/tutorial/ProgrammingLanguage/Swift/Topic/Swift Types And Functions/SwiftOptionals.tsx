import React from "react";

const SwiftOptionals: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Optionals
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Represent missing values safely with optionals, and unwrap them with <code>??</code>, <code>if let</code>, or <code>guard let</code>.
    </p>

    {/* What Are Optionals? */}
    <h2 className="text-2xl font-bold mt-6">What Are Optionals?</h2>
    <p className=" leading-relaxed mt-3">
      An optional is a type that can hold either a value or <code>nil</code> (no value). Use <code>?</code> to declare an optional, and nil-coalescing (<code>??</code>) or binding (<code>if let</code>) to safely read it.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var x: String?
x ?? "default"
if let v = x { ... }
guard let v = x else { return }`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var nickname: String? = nil
print(nickname ?? "(none)")

nickname = "Ace"
if let name = nickname {
  print(name)
}`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example prints a default using <code>??</code> and unwraps an optional safely with <code>if let</code>.
    </p>

    <p className=" leading-relaxed mt-4 italic">
      Tip: Use <code>guard let</code> inside functions to early-exit on missing values.
    </p>

    {/* Guard Let */}
    <h2 className="text-2xl font-bold  mt-6">Guard Let</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>guard let</code> for early exit when required values are missing.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func greet(_ input: String?) {
  guard let name = input else {
    print("Missing name")
    return
  }
  print("Hello, \\(name)")
}

greet(nil)
greet("Swift")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example uses <code>guard let</code> to safely unwrap an optional and exit early if the value is missing.
    </p>
  </>
);

export default SwiftOptionals;
