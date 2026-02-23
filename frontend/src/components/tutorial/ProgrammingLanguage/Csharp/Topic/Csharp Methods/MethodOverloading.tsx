import React from "react";

const CsharpMethodOverloading: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Method Overloading
    </h1>

    <h2 className="text-2xl font-bold mt-6">What is Method Overloading?</h2>
    <p className="text-lg leading-relaxed mt-2">
      Method overloading allows multiple methods to have the same name but different parameters. This makes the code cleaner and more reusable.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Different Parameter Types</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`int MyMethod(int x)
float MyMethod(float x)
double MyMethod(double x, double y)`}</code>
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example: Adding Numbers with Separate Methods</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static int PlusMethodInt(int x, int y)
{
  return x + y;
}

static double PlusMethodDouble(double x, double y)
{
  return x + y;
}

static void Main(string[] args)
{
  int myNum1 = PlusMethodInt(8, 5);
  double myNum2 = PlusMethodDouble(4.3, 6.26);
  Console.WriteLine("Int: " + myNum1);
  Console.WriteLine("Double: " + myNum2);
}`}</code>
    </pre>

    <h3 className="text-xl font-semibold mt-4">Better Approach: Overloaded Method</h3>
    <p className="text-lg  mt-2">
      Instead of defining separate methods for similar functionality, you can overload a single method:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static int PlusMethod(int x, int y)
{
  return x + y;
}

static double PlusMethod(double x, double y)
{
  return x + y;
}

static void Main(string[] args)
{
  int myNum1 = PlusMethod(8, 5);
  double myNum2 = PlusMethod(4.3, 6.26);
  Console.WriteLine("Int: " + myNum1);
  Console.WriteLine("Double: " + myNum2);
}`}</code>
    </pre>
  </div>
);

export default CsharpMethodOverloading;
