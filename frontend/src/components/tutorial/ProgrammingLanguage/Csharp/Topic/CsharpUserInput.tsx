import React from 'react';

const CsharpUserInput: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# User Input
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      You have already learned that <b>Console.WriteLine()</b> is used to output (print) values.
      Now we will use <b>Console.ReadLine()</b> to get user input from the keyboard.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Get User Input</h2>
    <p className=" leading-relaxed mt-3">
      In the following example, the user can input their username, which is stored in the variable
      <b> userName</b>. Then we print the value of that variable:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`// Type your username and press enter
Console.WriteLine("Enter username:");

// Create a string variable and get user input from the keyboard
string userName = Console.ReadLine();

// Print the value of the variable (userName)
Console.WriteLine("Username is: " + userName);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">User Input and Numbers</h2>
    <p className=" leading-relaxed mt-3">
      The <b>Console.ReadLine()</b> method returns a string. Therefore, you cannot directly get input of another data type like <b>int</b>.  
      For example, the following code will cause an error:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example (with error):</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`Console.WriteLine("Enter your age:");
int age = Console.ReadLine();
Console.WriteLine("Your age is: " + age);`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      The error message will be something like this:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>Cannot implicitly convert type 'string' to 'int'</pre>
    </div>

    <p className=" leading-relaxed mt-4">
      As the error says, you cannot <b>implicitly convert</b> type <b>string</b> to <b>int</b>.  
      However, you can fix this using <b>explicit conversion</b> with <code>Convert.ToInt32()</code>.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example (fixed):</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`Console.WriteLine("Enter your age:");
int age = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Your age is: " + age);`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ Here, the input from <b>Console.ReadLine()</b> is converted from a string to an integer using
      <b> Convert.ToInt32()</b>, allowing you to safely work with numeric input.
    </p>
  </>
);

export default CsharpUserInput;
