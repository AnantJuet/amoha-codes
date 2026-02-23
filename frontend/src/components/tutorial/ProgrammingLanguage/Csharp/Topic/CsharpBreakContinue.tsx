import React from "react";

const CsharpBreakContinue: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Break and Continue
    </h1>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">C# Break</h2>
    <p className="text-lg  leading-relaxed mt-4">
      You have already seen the <b>break</b> statement used in a previous chapter to "jump out" of a{" "}
      <b>switch</b> statement. The <b>break</b> statement can also be used inside loops to stop execution when a certain condition is met.
    </p>

    <p className=" leading-relaxed mt-4">
      In the following example, the loop stops when <b>i</b> becomes equal to 4:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    break;
  }
  Console.WriteLine(i);
}`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      👉 This code prints numbers from <b>0</b> to <b>3</b>. When <b>i</b> becomes 4, the <b>break</b> statement stops the loop.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">C# Continue</h2>
    <p className=" leading-relaxed mt-3">
      The <b>continue</b> statement skips the current iteration of a loop if a specific condition is met, and then continues with the next iteration.
    </p>

    <p className=" leading-relaxed mt-4">
      In the example below, the value <b>4</b> is skipped:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`for (int i = 0; i < 10; i++) 
{
  if (i == 4) 
  {
    continue;
  }
  Console.WriteLine(i);
}`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ This code prints all numbers from <b>0</b> to <b>9</b> except <b>4</b>.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">
      Break and Continue in While Loop
    </h2>
    <p className="leading-relaxed mt-3">
      The <b>break</b> and <b>continue</b> statements can also be used in <b>while loops</b> to control the loop flow.
    </p>

    <h3 className="text-xl font-semibold mt-4">Break Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int i = 0;
while (i < 10) 
{
  Console.WriteLine(i);
  i++;
  if (i == 4) 
  {
    break;
  }
}`}</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ⚡ This loop stops completely when <b>i</b> becomes <b>4</b>.
    </p>

    <h3 className="text-xl font-semibold mt-6">Continue Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int i = 0;
while (i < 10) 
{
  if (i == 4) 
  {
    i++;
    continue;
  }
  Console.WriteLine(i);
  i++;
}`}</pre>
    </div>

    <p className="text-gray-700 leading-relaxed mt-4">
      ✅ In this loop, when <b>i</b> equals 4, that iteration is skipped — so the number 4 is not printed.
    </p>
  </>
);

export default CsharpBreakContinue;
