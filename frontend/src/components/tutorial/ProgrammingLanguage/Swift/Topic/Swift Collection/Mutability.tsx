
import React from "react";

const SwiftMutable: React.FC = () => (

<>

  {/* Heading */}
  <h1 className="text-4xl font-extrabold  dark:text-white border-b-2 pb-2 mt-20">
    Swift Mutability (let vs var)
  </h1>

  <p className="text-lg">
    Use <code className="font-mono">let</code> to declare constants and  
    <code className="font-mono">var</code> to declare variables.  
    Collections declared with <code className="font-mono">var</code> can change;  
    those declared with <code className="font-mono">let</code> cannot.
  </p>

  {/* Mutable vs Immutable */}
  <h2 className="text-2xl font-bold  dark:text-white mt-6">
    Mutable vs Immutable
  </h2>

  <p>
    Use <code className="font-mono">var</code> when you need to add, remove,  
    or modify elements.  
    Use <code className="font-mono">let</code> to prevent changes.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    let fixed = [1, 2] <br />
    print(fixed.count) <br /><br />
    var bag = [1, 2] <br />
    bag.append(3) <br />
    print(bag.count)
  </div>

  <p>
    <code className="font-mono">fixed</code> is immutable,  
    while <code className="font-mono">bag</code> allows mutations like{" "}
    <code className="font-mono">append</code>.
  </p>

  {/* Dictionary Mutability */}
  <h2 className="text-2xl font-bold  dark:text-white mt-8">
    Dictionary Mutability
  </h2>

  <p>
    Dictionaries declared with <code className="font-mono">var</code>  
    can have keys inserted or updated.
  </p>

  <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

  <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
    var user = ["name": "Kai"] <br />
    user["city"] = "Oslo" <br />
    print(user.count)
  </div>

</>
)
export default SwiftMutable
