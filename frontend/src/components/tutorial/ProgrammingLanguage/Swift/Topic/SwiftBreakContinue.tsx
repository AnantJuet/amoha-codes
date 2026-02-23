import React from "react";

const SwiftBreakContinue: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Swift Break/Continue
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Use <b>break</b> to exit a loop early, and <b>continue</b> to skip to the next iteration.
    </p>

    {/* Break */}
    <h2 className="text-2xl font-bold  mt-6">break</h2>

    <p className=" leading-relaxed mt-3">
      Stop the loop immediately when a condition is met.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for i in 1...10 {
  if i == 4 { break }
  print(i)
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ This example stops printing when <code>i</code> reaches 4.
    </p>

    {/* Continue */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">continue</h2>

    <p className=" leading-relaxed mt-3">
      Skip the rest of the current iteration but keep looping.
    </p>

    <h3 className="text-xl font-bold  mt-4">Example</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for i in 1...5 {
  if i % 2 == 0 { continue }
  print(i) // only odd numbers
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ This example prints only odd numbers using <code>continue</code>.
    </p>

    <p className=" leading-relaxed mt-4 italic">
      Tip: Prefer clear conditions and early exits to reduce nested branching.
    </p>
  </>
);

export default SwiftBreakContinue;
