import React from "react";

const GoFunctionParams: React.FC = () => (
  <div className="mt-17 space-y-6 dark:text-white">

    {/* Heading */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2  dark:text-white">
      Go Function Parameters and Arguments
    </h1>

    {/* Introduction */}
    <p className="leading-relaxed  dark:text-white">
      Information can be passed to functions as a parameter. Parameters act as variables inside the function.
    </p>

    <p className="leading-relaxed  dark:text-white">
      Parameters and their types are specified after the function name, inside the parentheses.  
      You can add as many parameters as you want, separated with commas.
    </p>

    {/* Syntax */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">Syntax</h2>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`func FunctionName(param1 type, param2 type, param3 type) {
  // code to be executed
}`}
    </pre>

    {/* Function With Parameter */}
    <h2 className="text-2xl font-bold mt-6  dark:text-white">
      Function With Parameter Example
    </h2>

    <p className="leading-relaxed  dark:text-white">
      The example below has a function with one parameter (<b>fname</b>) of type <b>string</b>.
      When the function is called, we pass a name which is used inside the function.
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func familyName(fname string) {
  fmt.Println("Hello", fname, "Refsnes")
}

func main() {
  familyName("Liam")
  familyName("Jenny")
  familyName("Anja")
}`}
    </pre>

    <p className="mt-2  dark:text-white">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello Liam Refsnes
Hello Jenny Refsnes
Hello Anja Refsnes
    </pre>

    <p className="leading-relaxed  dark:text-white">
      <b>Note:</b> When a value is passed to the function, it is called an <b>argument</b>.  
      From the example above: <b>fname</b> is a parameter, while <b>Liam, Jenny, and Anja</b> are arguments.
    </p>

    {/* Multiple Parameters */}
    <h2 className="text-2xl font-bold mt-10  dark:text-white">
      Multiple Parameters
    </h2>

    <p className="leading-relaxed  dark:text-white">
      Inside the function, you can add as many parameters as you want:
    </p>

    <h3 className="text-xl font-semibold  dark:text-white">Example</h3>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func familyName(fname string, age int) {
  fmt.Println("Hello", age, "year old", fname, "Refsnes")
}

func main() {
  familyName("Liam", 3)
  familyName("Jenny", 14)
  familyName("Anja", 30)
}`}
    </pre>

    <p className="mt-2  dark:text-white">Result:</p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Hello 3 year old Liam Refsnes
Hello 14 year old Jenny Refsnes
Hello 30 year old Anja Refsnes
    </pre>

  </div>
);

export default GoFunctionParams;
