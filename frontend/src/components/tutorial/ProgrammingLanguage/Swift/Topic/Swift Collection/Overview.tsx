import React from "react";

const SwiftOverview: React.FC = () => (


<>

  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Collections
  </h1>

  <p className="text-lg">
    Swift provides three primary collection types: arrays, dictionaries, and sets. 
    They help store ordered lists, key-value pairs, and unique items.
  </p>

  {/* Arrays */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Arrays</h2>

  <p>
    Arrays store ordered lists of values.  
    Use <code className="font-mono">[Type]</code> for declaration,
    <code className="font-mono">.append</code> to add values,
    <code className="font-mono">.count</code> to check size,
    and subscripting <code className="font-mono">array[index]</code> to access elements.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white mt-3">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var nums: [Int] = [1, 2, 3] <br />
    nums.append(4) <br />
    print(nums.count)    // 4 <br />
    print(nums[0])       // 1
  </div>

  <p>
    This example creates an <code className="font-mono">[Int]</code> array, appends a value,
    reads the count, and accesses the first element.
  </p>

  {/* Dictionaries */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Dictionaries</h2>

  <p>
    Dictionaries store key-value pairs.  
    Use <code className="font-mono">[Key: Value]</code> as the type.  
    Insert with <code className="font-mono">dict[key] = value</code>,  
    read with <code className="font-mono">dict[key] ?? default</code>.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white mt-3">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var ages: [String: Int] = ["Kai": 30] <br />
    ages["Elisabeth"] = 25 <br />
    print(ages["Kai"] ?? 0)
  </div>

  <p>
    This dictionary example inserts a new key and safely reads values using nil-coalescing.
  </p>

  {/* Sets */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">Sets</h2>

  <p>
    Sets store unique values without any specific order.  
    Use <code className="font-mono">Set&lt;Element&gt;</code> or a literal to create one.  
    Check membership with <code className="font-mono">.contains</code>.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white mt-3">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var letters: Set&lt;Character&gt; = ["a", "b", "a"] <br />
    print(letters.contains("a"))
  </div>

</>
)
export default SwiftOverview
