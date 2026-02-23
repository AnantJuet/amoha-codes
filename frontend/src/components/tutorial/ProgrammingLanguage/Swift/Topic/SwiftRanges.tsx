import React from "react";

const SwiftRanges: React.FC = () => (


<>

  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Ranges
  </h1>

  <p className="text-lg">
    Swift ranges let you represent a sequence of values. They are commonly used in loops,
    slicing arrays, and checking membership.
  </p>

  {/* Closed & Half-Open Ranges */}
  <h2 className="text-2xl font-bold mt-4  dark:text-white">Closed & Half-Open Ranges</h2>

  <p>
    Swift supports two main types of ranges:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li><strong>a...b</strong> — Closed range (includes both a and b)</li>
    <li><strong>a..&lt;b</strong> — Half-open range (includes a but not b)</li>
  </ul>

  <h3 className="text-xl font-semibold mt-3  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    for n in 1...5 &#123; <br />
    &nbsp;&nbsp;print(n) <br />
    &#125; <br /><br />

    for n in 1..&lt;5 &#123; <br />
    &nbsp;&nbsp;print(n) <br />
    &#125; <br /><br />

    let r = 10...12 <br />
    print(r.contains(11)) <br />
    print(r.contains(13))
  </div>

  <p>
    This example iterates using both closed and half-open ranges and checks values using
    <code className="font-mono">contains()</code>.
  </p>

  {/* One-Sided Ranges */}
  <h2 className="text-2xl font-bold mt-4  dark:text-white">One-Sided Ranges</h2>

  <p>
    Swift also supports one-sided ranges, where one end is left open:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li><strong>...b</strong> — from the beginning up to b</li>
    <li><strong>a...</strong> — from a to the end</li>
  </ul>

  <h3 className="text-xl font-semibold mt-3  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let arr = [0, 1, 2, 3, 4] <br />
    print(arr[...2])  // first three elements (0...2) <br />
    print(arr[2...])  // from index 2 to the end
  </div>

</>
)
export default SwiftRanges;
