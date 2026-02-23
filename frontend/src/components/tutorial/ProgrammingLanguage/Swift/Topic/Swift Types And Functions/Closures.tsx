import React from "react";

const SwiftClosures: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Closures
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Capture values and pass behavior as first-class functions using closure expressions and trailing closure syntax.
    </p>

    {/* Closure Expressions */}
    <h2 className="text-2xl font-bold  mt-6">Closure Expressions</h2>
    <p className=" leading-relaxed mt-3">
      Closures are self-contained blocks of functionality that can be passed and stored.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`{ (params) -> Return in statements } 
// Shorthand args: $0, $1, and type inference`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let nums = [3, 1, 2]
let sorted = nums.sorted { $0 < $1 }
let strings = sorted.map { "#\\($0)" }
print(strings) // ["#1", "#2", "#3"]`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example sorts numbers using a closure with shorthand arguments and maps them to strings.
    </p>

    {/* Capturing Values */}
    <h2 className="text-2xl font-bold mt-6">Capturing Values</h2>
    <p className=" leading-relaxed mt-3">
      Closures capture constants and variables from the surrounding context by reference.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func makeCounter() -> () -> Int {
  var n = 0
  return { n += 1; return n }
}`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func makeCounter() -> () -> Int {
  var n = 0
  return {
    n += 1
    return n
  }
}

let next = makeCounter()
print(next()) // 1
print(next()) // 2`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ The closure remembers <code>n</code> between calls, producing an incrementing counter.
    </p>

    {/* Trailing Closures */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Trailing Closures</h2>
    <p className=" leading-relaxed mt-3">
      If the last parameter is a closure, you can use trailing closure syntax for readability.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`fn(x) { ... } // instead of fn(x, closure: { ... })`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func repeatTimes(_ n: Int, _ work: () -> Void) {
  for _ in 0..<n { work() }
}

repeatTimes(3) {
  print("Hi")
}`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example uses trailing closure syntax to pass a block that runs three times.
    </p>

    <p className=" leading-relaxed mt-4 italic">
      Tip: Use shorthand argument names (<code>$0, $1</code>) and trailing closures for readability.
    </p>
  </>
);

export default SwiftClosures;
