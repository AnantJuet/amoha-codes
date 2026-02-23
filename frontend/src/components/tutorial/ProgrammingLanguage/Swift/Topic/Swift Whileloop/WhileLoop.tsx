import React from "react";

const SwiftWhileLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift While Loop
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Repeat code while a condition is true using <code>while</code>. Use <code>repeat while</code> to check the condition after the loop body.
    </p>

    {/* while loop */}
    <h2 className="text-2xl font-bold mt-6">while</h2>
    <p className=" leading-relaxed mt-3">
      The <code>while</code> loop checks the condition before each iteration.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var n = 3
while n > 0 {
  print(n)
  n -= 1
}
print("Liftoff!")`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example counts down from 3 using a while loop.
    </p>

    {/* repeat while */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">repeat { } while</h2>
    <p className=" leading-relaxed mt-3">
      <code>repeat</code> runs the body first, then checks the condition.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`var attempts = 0
repeat {
  attempts += 1
  print("Attempt #\(attempts)")
} while attempts < 3`}</pre>
    </div>
    <p className=" leading-relaxed mt-4">
      ✅ This example demonstrates a repeat loop (do-while style). <br />
      💡 Tip: Avoid infinite loops. Ensure the loop condition will eventually become false.
    </p>
  </>
);

export default SwiftWhileLoop;
