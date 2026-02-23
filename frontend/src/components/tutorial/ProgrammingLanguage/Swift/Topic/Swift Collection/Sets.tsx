import React from "react";

const SwiftSets: React.FC = () => (

<>

  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Sets
  </h1>

  <p className="text-lg">
    Sets store unique values with no defined order.  
    They are useful for fast lookups and removing duplicates.
  </p>

  {/* Membership Testing */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Deduplicate Values</h2>

  <p>
    Sets automatically remove duplicates.  
    Use <code className="font-mono">.contains()</code> to test membership.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white mt-3">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var letters: Set&lt;Character&gt; = ["a", "b", "a"] <br />
    print(letters.contains("a"))
  </div>

  <p>
    This example creates a <code className="font-mono">Set</code> that deduplicates repeated values and checks if a character exists.
  </p>

  {/* Set Operations */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Set Operations</h2>

  <p>
    Combine or compare sets using operations like  
    <code className="font-mono">union</code>,  
    <code className="font-mono">intersection</code>, and  
    <code className="font-mono">subtracting</code>.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white mt-3">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let a: Set&lt;Int&gt; = [1, 2, 3] <br />
    let b: Set&lt;Int&gt; = [3, 4] <br />
    print(a.union(b).sorted())         // [1, 2, 3, 4] <br />
    print(a.intersection(b).sorted())  // [3] <br />
    print(a.subtracting(b).sorted())   // [1, 2]
  </div>

  <p>
    This example shows how to combine or compare sets:
  </p>

  <ul className="list-disc list-inside space-y-1">
    <li><strong>union</strong> → combines sets</li>
    <li><strong>intersection</strong> → finds common elements</li>
    <li><strong>subtracting</strong> → removes elements that appear in both</li>
  </ul>

</>
)
export default SwiftSets
