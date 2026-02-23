import React from "react";

const SwiftMap: React.FC = () => (

<>
  {/* Heading */}
  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift map, filter, reduce
  </h1>

  <p className="text-lg">
    Transform and aggregate collections with <code className="font-mono">map</code>,{" "}
    <code className="font-mono">filter</code>, and <code className="font-mono">reduce</code>.
  </p>

  <p>
    Use <code className="font-mono">map</code> to transform elements,{" "}
    <code className="font-mono">filter</code> to select a subset, and{" "}
    <code className="font-mono">reduce</code> to combine values into a single result.
  </p>

  {/* Example 1 */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">
    Example
  </h2>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let nums = [1, 2, 3, 4] <br />
    let doubled = nums.map &#123; $0 * 2 &#125; <br />
    print(doubled) <br />
    let evens = nums.filter &#123; $0 % 2 == 0 &#125; <br />
    print(evens) <br />
    let sum = nums.reduce(0, +) <br />
    print(sum)
  </div>

  {/* Convert & Sum */}
  <h2 className="text-2xl font-bold  dark:text-white mt-8">
    Convert and Sum
  </h2>

  <p>
    Use <code className="font-mono">compactMap</code> to convert valid strings to numbers,  
    then <code className="font-mono">reduce</code> to sum them.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let raw = ["1", "x", "2", "3"] <br />
    let ints = raw.compactMap &#123; Int($0) &#125;   // [1, 2, 3] <br />
    let total = ints.reduce(0, +) <br />
    print(total)
  </div>

</>
)
export default SwiftMap