import React from 'react';

const CsharpWhileLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# While Loop
    </h1>

    <h2 className="text-2xl font-bold mt-6">Loops</h2>
    <p className="text-lg leading-relaxed mt-3">
      Loops can execute a block of code as long as a specified condition is reached.
      They are useful because they save time, reduce errors, and make your code more readable.
    </p>

    <h2 className="text-2xl font-bold  mt-6">C# While Loop</h2>
    <p className=" leading-relaxed mt-3">
      The <b>while</b> loop runs through a block of code as long as a specified condition is <b>True</b>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`while (condition)
{
  // code block to be executed
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      In the example below, the loop will continue to run as long as the variable <b>i</b> is less than 5:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int i = 0;
while (i < 5)
{
  Console.WriteLine(i);
  i++;
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ⚠️ <b>Note:</b> Do not forget to increase the variable used in the condition, otherwise the loop will never end!
    </p>

    <h2 className="text-2xl font-bold  mt-8">The Do/While Loop</h2>
    <p className=" leading-relaxed mt-3">
      The <b>do/while</b> loop is a variant of the while loop. It executes the code block once before checking the condition.
      Then, it repeats the loop as long as the condition remains true.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`do
{
  // code block to be executed
}
while (condition);`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      The example below will execute the loop at least once, even if the condition is false, because the code block runs
      before the condition is checked.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int i = 0;
do
{
  Console.WriteLine(i);
  i++;
}
while (i < 5);`}
      </pre>
    </div>
  </>
);

export default CsharpWhileLoop;
