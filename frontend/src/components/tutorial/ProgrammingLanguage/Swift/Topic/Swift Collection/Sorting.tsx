import React from "react";

const SwiftSorting: React.FC = () => (

<>
  {/* Heading */}
  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Sorting
  </h1>

  <p className="text-lg">
    Sort arrays using <code className="font-mono">sorted()</code> to return a new array,  
    or <code className="font-mono">sort()</code> to modify the array in-place.
  </p>

  <p>
    Provide a closure for custom sorting order.
  </p>

  {/* Sort */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">
    Sort
  </h2>

  <p>
    Sort ascending with <code className="font-mono">sorted()</code> and descending in-place  
    using <code className="font-mono">sort(by:)</code>.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var nums = [3, 1, 2] <br />
    let ascending = nums.sorted() <br />
    print(ascending)      // [1, 2, 3] <br />
    nums.sort(by: &gt;) <br />
    print(nums)           // [3, 2, 1]
  </div>

  <p>
    This example sorts ascending using <code className="font-mono">sorted()</code>  
    and descending in-place using <code className="font-mono">sort(by:)</code>.
  </p>

  {/* Case-Insensitive Sort */}
  <h2 className="text-2xl font-bold  dark:text-white mt-8">
    Case-Insensitive Sort
  </h2>

  <p>
    Sort strings without considering letter case by comparing{" "}
    <code className="font-mono">lowercased()</code> values.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let names = ["bob", "Alice", "dave"] <br />
    let caseInsensitive = names.sorted &#123; <br />
    &nbsp;&nbsp;$0.lowercased() &lt; $1.lowercased() <br />
    &#125; <br />
    print(caseInsensitive) // ["Alice", "bob", "dave"]
  </div>

</>
)
export default SwiftSorting