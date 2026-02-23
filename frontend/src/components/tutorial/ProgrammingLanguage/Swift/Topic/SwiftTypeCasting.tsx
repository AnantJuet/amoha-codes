import React from "react";

const SwiftTypeCasting: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Type Casting
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Swift allows you to convert between types using <code>as</code>, <code>as?</code>, 
      and <code>as!</code>. This is particularly useful when working with protocols or 
      values of type <code>Any</code>.
    </p>

    {/* Upcasting and Downcasting */}
    <h2 className="text-2xl font-bold  mt-6">
      Upcasting and Downcasting
    </h2>

    <p className=" leading-relaxed mt-3">
      You can convert a value to a supertype (<b>upcasting</b>) or attempt to convert it 
      back to a subtype using optional downcasting (<code>as?</code>).
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`let items: [Any] = [1, "Swift"]

for item in items {
  if let i = item as? Int {
    print("Int: \\(i)")
  } else if let s = item as? String {
    print("String: \\(s)")
  }
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example demonstrates optional downcasting: each element in the array is checked 
      and safely cast to its type before use.
    </p>
  </>
);

export default SwiftTypeCasting;
