import React from "react";

const SwiftArraysIndices: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Arrays: Indices & Bounds
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift arrays have <code>startIndex</code> and <code>endIndex</code> properties. 
      <code>endIndex</code> is one past the last valid element. Accessing an index out of bounds 
      will cause a runtime crash.
    </p>

    {/* Valid Indices */}
    <h2 className="text-2xl font-bold mt-6">Valid Indices</h2>

    <p className=" leading-relaxed mt-3">
      Use <code>indices</code> to safely loop through all valid positions, without needing 
      <code>enumerated()</code>. Valid subscript indices range from <code>0</code> up to 
      but not including <code>items.count</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let items = [10, 20, 30]
print(items.startIndex)       // 0

for i in items.indices {
  print("index: \\(i), value: \\(items[i])")
}

// Valid subscript
print(items[0])   // OK
// print(items[3]) // Error: out of bounds`}
      </pre>
    </div>

    {/* Last Valid Index */}
    <h2 className="text-2xl font-bold mt-6">Last Valid Index</h2>

    <p className=" leading-relaxed mt-3">
      The <code>endIndex</code> itself is not valid for subscripting. To get the last valid 
      index, use <code>index(before: endIndex)</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let items = [10, 20, 30]
let lastIndex = items.index(before: items.endIndex)
print(lastIndex)        // 2
print(items[lastIndex]) // 30`}
      </pre>
    </div>
  </>
);

export default SwiftArraysIndices;
