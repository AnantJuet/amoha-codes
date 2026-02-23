import React from "react";

const CsharpSwitch: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Switch
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The <b>switch statement</b> in C# is used to select one of many code blocks to be executed,
      depending on the value of an expression.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`switch(expression) 
{
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    break;
}`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      Here's how it works:
    </p>
    <ul className="list-disc ml-6 leading-relaxed">
      <li>The switch expression is evaluated once.</li>
      <li>The value of the expression is compared with each case value.</li>
      <li>If a match is found, the corresponding block of code is executed.</li>
      <li>
        The <b>break</b> and <b>default</b> keywords help control the flow of the switch statement.
      </li>
    </ul>

    <h2 className="text-2xl font-bold  mt-8">Example</h2>
    <p className="text-gray-700 leading-relaxed mt-3">
      The example below uses the weekday number to display the weekday name:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int day = 4;
switch (day) 
{
  case 1:
    Console.WriteLine("Monday");
    break;
  case 2:
    Console.WriteLine("Tuesday");
    break;
  case 3:
    Console.WriteLine("Wednesday");
    break;
  case 4:
    Console.WriteLine("Thursday");
    break;
  case 5:
    Console.WriteLine("Friday");
    break;
  case 6:
    Console.WriteLine("Saturday");
    break;
  case 7:
    Console.WriteLine("Sunday");
    break;
}
// Outputs "Thursday" (day 4)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">The break Keyword</h2>
    <p className=" leading-relaxed mt-3">
      The <b>break</b> keyword tells C# to exit the switch block once a matching case is executed.
      Without it, the program would continue executing the next case statements.
    </p>

    <p className="leading-relaxed mt-4">
      It helps improve performance by stopping unnecessary code execution after a match is found.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">The default Keyword</h2>
    <p className=" leading-relaxed mt-3">
      The <b>default</b> keyword specifies the code to run if no case matches the expression.
      It is optional but useful for handling unexpected values.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int day = 4;
switch (day) 
{
  case 6:
    Console.WriteLine("Today is Saturday.");
    break;
  case 7:
    Console.WriteLine("Today is Sunday.");
    break;
  default:
    Console.WriteLine("Looking forward to the Weekend.");
    break;
}

// Outputs "Looking forward to the Weekend."`}
      </pre>
    </div>
  </>
);

export default CsharpSwitch;
