import React from "react";

const CsharpMethods: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Methods
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is a Method?</h2>
    <p className="text-lg leading-relaxed mt-2">
      A method is a block of code that only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions and are also called functions. Using methods allows code reuse: define once, use multiple times.
    </p>

    <h2 className="text-2xl font-bold mt-6">Create a Method</h2>
    <p className="text-lg  mt-2">
      A method is defined with its name followed by parentheses <code>()</code>. You can create your own methods inside a class:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`class Program
{
  static void MyMethod() 
  {
    // code to be executed
  }
}`}</code>
    </pre>
    <p className="text-lg  mt-2">
      <strong>Explanation:</strong><br/>
      <code>MyMethod()</code> is the method name.<br/>
      <code>static</code> means the method belongs to the class itself, not an object.<br/>
      <code>void</code> means it does not return a value.<br/>
      It's good practice to start method names with an uppercase letter for readability.
    </p>

    <h2 className="text-2xl font-bold mt-6">Call a Method</h2>
    <p className="text-lg  mt-2">
      To execute a method, write its name followed by <code>()</code> and a semicolon:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
}

// Outputs "I just got executed!"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Call a Method Multiple Times</h2>
    <p className="text-lg  mt-2">
      A method can be called as many times as needed:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static void MyMethod() 
{
  Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
  MyMethod();
  MyMethod();
  MyMethod();
}

// I just got executed!
// I just got executed!
// I just got executed!`}</code>
    </pre>
  </div>
);

export default CsharpMethods;
