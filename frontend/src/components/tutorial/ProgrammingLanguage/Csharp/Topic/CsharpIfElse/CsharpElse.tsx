import React from "react";

const CsharpElse: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# The else Statement
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The <b>else</b> statement is used to specify a block of code that will be executed when the
      <b>if</b> condition evaluates to <b>False</b>.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>
    <p className=" leading-relaxed mt-3">
      The <b>else</b> block always comes after the <b>if</b> block:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`if (condition)
{
  // block of code to be executed if the condition is True
} 
else 
{
  // block of code to be executed if the condition is False
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-8">Example</h2>
    <p className=" leading-relaxed mt-3">
      In the example below, the <b>if</b> condition checks if <b>time</b> is less than 18. If the
      condition is False, the <b>else</b> block is executed:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int time = 20;
if (time < 18) 
{
  Console.WriteLine("Good day.");
} 
else 
{
  Console.WriteLine("Good evening.");
}
// Outputs "Good evening."`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ Here, since <b>time</b> is 20 (not less than 18), the <b>else</b> block runs and prints
      <b>"Good evening."</b>
    </p>
  </>
);

export default CsharpElse;
