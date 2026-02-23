import React from "react";

const SwiftTuplesTypeAliases: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Tuples & Type Aliases
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Group values into lightweight records with tuples, and name complex types using <code>typealias</code> for clarity.
    </p>

    {/* Tuples */}
    <h2 className="text-2xl font-bold  mt-6">Tuples</h2>
    <p className=" leading-relaxed mt-3">
      Tuples bundle multiple values into a single compound value without defining a struct.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let user: (String, Int) = ("Morgan", 30)
// labels: (name: String, age: Int)`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`let user: (name: String, age: Int) = ("Morgan", 30)
print(user.name)
print(user.age)

let http: (code: Int, message: String) = (200, "OK")
let (code, msg) = http
print(code)
print(msg)`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example creates labeled tuples, accesses fields by name, and destructures into separate variables.
    </p>

    {/* Type Aliases */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Type Aliases</h2>
    <p className=" leading-relaxed mt-3">
      Give a readable name to an existing type using <code>typealias</code>.
    </p>

    <h3 className="text-xl font-bold  mt-4">Syntax</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`typealias Completion = (Result<Void, Error>) -> Void`}</pre>
    </div>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`typealias JSON = [String: Any]
typealias Completion = (Result<Void, Error>) -> Void

func parse(_ data: Data) -> JSON { return [:] }

func save(completion: Completion) {
  completion(.success(()))
}`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example defines aliases for a JSON dictionary and a completion closure to make function signatures clearer.
    </p>
  </>
);

export default SwiftTuplesTypeAliases;
