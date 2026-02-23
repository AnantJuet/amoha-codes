import React from "react";

const CsharpIfElse: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# If ... Else
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In C#, you can use comparison conditions from mathematics to make decisions in your code. Some common conditions are:
    </p>

    <ul className="list-disc list-inside  mt-2">
      <li>Less than: <b>a &lt; b</b></li>
      <li>Less than or equal to: <b>a &lt;= b</b></li>
      <li>Greater than: <b>a &gt; b</b></li>
      <li>Greater than or equal to: <b>a &gt;= b</b></li>
      <li>Equal to: <b>a == b</b></li>
      <li>Not equal to: <b>a != b</b></li>
    </ul>

    <p className=" leading-relaxed mt-4">
      These conditions can be used to perform different actions depending on the logic of your program.
    </p>

    <h2 className="text-2xl font-bold mt-6">Conditional Statements in C#</h2>
    <ul className="list-disc list-inside mt-2">
      <li><b>if</b>: Executes a block of code if a condition is True</li>
      <li><b>else</b>: Executes a block of code if the same condition is False</li>
      <li><b>else if</b>: Tests a new condition if the first condition is False</li>
      <li><b>switch</b>: Specifies many alternative blocks of code to be executed</li>
    </ul>

    <h2 className="text-2xl font-bold  mt-6">The if Statement</h2>
    <p className="leading-relaxed mt-3">
      The <b>if</b> statement executes a block of code only if the condition evaluates to True.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`if (condition) 
{
  // block of code to be executed if the condition is True
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ⚠️ Note: The <b>if</b> keyword must be in lowercase letters. Using uppercase (If or IF) will cause an error.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example with values:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`if (20 > 18) 
{
  Console.WriteLine("20 is greater than 18");
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Example with variables:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int x = 20;
int y = 18;
if (x > y) 
{
  Console.WriteLine("x is greater than y");
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ In both examples, the block inside the <b>if</b> statement executes only if the condition is True.
    </p>
  </>
);

export default CsharpIfElse;
