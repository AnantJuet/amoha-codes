import React from "react";

const CsharpMath: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      C# Math
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The <b>C# Math</b> class provides many methods that allow you to perform
      mathematical operations on numbers.
    </p>

    {/* Math.Max */}
    <h2 className="text-2xl font-bold mt-6">Math.Max(x, y)</h2>
    <p className=" leading-relaxed mt-3">
      The <b>Math.Max(x, y)</b> method is used to find the highest value between{" "}
      <b>x</b> and <b>y</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Math.Max(5, 10);`}</pre>
    </div>

    {/* Math.Min */}
    <h2 className="text-2xl font-bold  mt-8">Math.Min(x, y)</h2>
    <p className=" leading-relaxed mt-3">
      The <b>Math.Min(x, y)</b> method can be used to find the lowest value
      between <b>x</b> and <b>y</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Math.Min(5, 10);`}</pre>
    </div>

    {/* Math.Sqrt */}
    <h2 className="text-2xl font-bold mt-8">Math.Sqrt(x)</h2>
    <p className=" leading-relaxed mt-3">
      The <b>Math.Sqrt(x)</b> method returns the <b>square root</b> of a number{" "}
      <b>x</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Math.Sqrt(64);`}</pre>
    </div>

    {/* Math.Abs */}
    <h2 className="text-2xl font-bold  mt-8">Math.Abs(x)</h2>
    <p className="leading-relaxed mt-3">
      The <b>Math.Abs(x)</b> method returns the <b>absolute (positive)</b> value
      of <b>x</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Math.Abs(-4.7);`}</pre>
    </div>

    {/* Math.Round */}
    <h2 className="text-2xl font-bold  mt-8">Math.Round()</h2>
    <p className=" leading-relaxed mt-3">
      The <b>Math.Round()</b> method rounds a number to the nearest whole
      number.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Math.Round(9.99);`}</pre>
    </div>
  </>
);

export default CsharpMath;
