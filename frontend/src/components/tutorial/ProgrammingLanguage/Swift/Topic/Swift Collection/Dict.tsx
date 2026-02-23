import React from "react";

const Swiftdic: React.FC = () => (



<>

  {/* Heading */}
  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Dictionaries
  </h1>

  <p className="text-lg">
    Dictionaries store key–value pairs.  
    Lookups are extremely fast because values are accessed using keys.
  </p>

  <p>
    Use subscripting (<code className="font-mono">dict[key]</code>) to read and write values.
  </p>

  {/* Basics */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Basics</h2>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var ages: [String: Int] = ["Kai": 30] <br />
    ages["Elisabeth"] = 25 <br />
    print(ages["Kai"] ?? 0)
  </div>

  <p>
    This example creates a <code className="font-mono">[String: Int]</code> dictionary,  
    inserts a key, and reads a value using <code className="font-mono">??</code> to avoid nil.
  </p>

  {/* Iteration */}
  <h2 className="text-2xl font-bold  dark:text-white mt-8">Iterate Keys and Values</h2>

  <p>
    Loop through a dictionary to access keys and their values.  
    Use <code className="font-mono">sorted()</code> if you want ordered output.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let ages = ["Kai": 30, "Elisabeth": 25] <br />
    for k in ages.keys.sorted() &#123; <br />
    &nbsp;&nbsp;print("\(k): \(ages[k]!)") <br />
    &#125;
  </div>

</>
)
export default  Swiftdic
