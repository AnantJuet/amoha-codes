import React from "react";

const CsharpBooleans: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Booleans
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In programming, you often need a data type that can hold only one of two
      values, like <b>YES / NO</b>, <b>ON / OFF</b>, or <b>TRUE / FALSE</b>.  
      For this, C# provides the <b>bool</b> data type, which can take the values{" "}
      <b>true</b> or <b>false</b>.
    </p>

    {/* Boolean Values */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Boolean Values</h2>
    <p className=" leading-relaxed mt-3">
      A boolean type is declared using the <b>bool</b> keyword and can only take
      the values <b>true</b> or <b>false</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`bool isCSharpFun = true;
bool isFishTasty = false;
Console.WriteLine(isCSharpFun);   // Outputs True
Console.WriteLine(isFishTasty);   // Outputs False`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      However, in most cases, boolean values are the result of{" "}
      <b>boolean expressions</b> used in conditional testing.
    </p>

    {/* Boolean Expression */}
    <h2 className="text-2xl font-bold  mt-8">
      Boolean Expression
    </h2>
    <p className=" leading-relaxed mt-3">
      A <b>Boolean expression</b> returns a boolean value — <b>True</b> or{" "}
      <b>False</b> — by comparing values or variables.  
      This is useful for building logic and making decisions in code.
    </p>

    <p className=" leading-relaxed mt-4">
      For example, using a comparison operator like <b>&gt;</b> (greater than)
      helps determine whether an expression is true:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`int x = 10;
int y = 9;
Console.WriteLine(x > y); // returns True, because 10 is higher than 9`}</pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      You can also write it directly:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`Console.WriteLine(10 > 9); // returns True, because 10 is higher than 9`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      In the examples below, we use the equality operator <b>==</b> to check if
      values are equal:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`int x = 10;
Console.WriteLine(x == 10); // returns True, because the value of x is equal to 10`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-900 text-red-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>{`Console.WriteLine(10 == 15); // returns False, because 10 is not equal to 15`}</pre>
    </div>

    {/* Real Life Example */}
    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Real Life Example</h2>
    <p className=" leading-relaxed mt-3">
      Let’s look at a real-world scenario where we need to find out if a person
      is old enough to vote.
    </p>

    <p className=" leading-relaxed mt-4">
      Here, we’ll use the <b>&gt;=</b> comparison operator to check if{" "}
      <b>myAge</b> is greater than or equal to <b>votingAge</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`int myAge = 25;
int votingAge = 18;
Console.WriteLine(myAge >= votingAge);`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ Cool, right? Let’s take it one step further — we can use an{" "}
      <b>if...else</b> statement to display a message based on the result.
    </p>

    <h3 className="text-xl font-semibold mt-4">
      Example (using if...else statement):
    </h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`int myAge = 25;
int votingAge = 18;

if (myAge >= votingAge) 
{
  Console.WriteLine("Old enough to vote!");
} 
else 
{
  Console.WriteLine("Not old enough to vote.");
}`}</pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ This program checks if a person meets the voting age requirement and
      prints the appropriate message based on the condition.
    </p>
  </>
);

export default CsharpBooleans;
