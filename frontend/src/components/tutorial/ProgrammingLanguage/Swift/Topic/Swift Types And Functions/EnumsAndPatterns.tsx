import React from "react";

const SwiftEnumsPatternMatching: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Enums & Pattern Matching
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Model finite sets of cases with <code>enum</code>, add associated values, and match using <code>switch</code> with patterns.
    </p>

    {/* Basic Enums */}
    <h2 className="text-2xl font-bold  mt-6">Basic Enums</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>enum</code> to define a type with a fixed set of cases.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum Direction { case north, south, east, west }`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum Direction { case north, south, east, west }

let d: Direction = .east
print(d)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example defines an enum of directions and creates a value using the short dot syntax.
    </p>

    {/* Associated Values */}
    <h2 className="text-2xl font-bold  mt-6">Associated Values</h2>
    <p className=" leading-relaxed mt-3">
      Attach data to each case using associated values.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum Result { case success(T), failure(Error) }`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum Barcode {
  case upc(Int, Int, Int, Int)
  case qr(String)
}

let b1 = Barcode.upc(8, 85909, 51226, 3)
let b2 = Barcode.qr("HELLO")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example shows a barcode which may be a UPC with four integers or a QR code with a string.
    </p>

    {/* Pattern Matching */}
    <h2 className="text-2xl font-bold mt-6">Pattern Matching</h2>
    <p className=" leading-relaxed mt-3">
      Use <code>switch</code> with patterns to extract associated values. Use <code>if case</code> for single-case checks.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`func describe(_ code: Barcode) {
  switch code {
  case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: \\(numberSystem)-\\(manufacturer)-\\(product)-\\(check)")
  case .qr(let text):
    print("QR: \\(text)")
  }
}

describe(b1)
describe(b2)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example uses pattern matching to bind associated values and print a formatted description.
    </p>

    {/* Raw Values */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Raw Values</h2>
    <p className=" leading-relaxed mt-3">
      Provide default raw values (e.g., <code>Int</code> or <code>String</code>) and initialize from them.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum HTTPStatus: Int { case ok = 200, notFound = 404 }
HTTPStatus(rawValue: 200)`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`enum HTTPStatus: Int { case ok = 200, notFound = 404 }

let status = HTTPStatus(rawValue: 200)
print(status == .ok)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example maps an integer status code back to an enum value using a failable initializer.
    </p>

    <p className=" leading-relaxed mt-4 italic">
      Tip: Prefer associated values when each case needs different data; use raw values only when mapping to a primitive like an API code.
    </p>
  </>
);

export default SwiftEnumsPatternMatching;
