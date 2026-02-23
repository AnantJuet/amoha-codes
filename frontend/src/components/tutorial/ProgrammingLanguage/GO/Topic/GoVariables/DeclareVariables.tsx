import React from "react";

const GoDeclareVariables: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Go Variables</h1>

    <p>
      Variables are containers for storing data values.
    </p>

    <h2 className="text-2xl font-bold mt-6">Go Variable Types</h2>
    <p>In Go, there are different types of variables, for example:</p>
    <ul className="list-disc list-inside ml-6 space-y-1">
      <li><b>int</b> - stores integers (whole numbers), such as 123 or -123</li>
      <li><b>float32</b> - stores floating point numbers, such as 19.99 or -19.99</li>
      <li><b>string</b> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
      <li><b>bool</b> - stores values with two states: true or false</li>
    </ul>
    <p>
      More about different variable types will be explained in the Go Data Types chapter.
    </p>

    <h2 className="text-2xl font-bold mt-6">Declaring (Creating) Variables</h2>
    <p>In Go, there are two ways to declare a variable:</p>

    <h3 className="text-xl font-semibold mt-4">1. With the var keyword</h3>
    <p>
      Use the <b>var</b> keyword, followed by the variable name and type:
    </p>

    <h4 className="font-semibold">Syntax</h4>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">var variable name type = value</div>
    <p><b>Note:</b> You always have to specify either type or value (or both).</p>

    <h3 className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">2. With the := sign</h3>
    <p>
      Use the <b>:=</b> sign, followed by the variable value:
    </p>

    <h4 className="font-semibold">Syntax</h4>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">variablename := value</div>
    <p>
      <b>Note:</b> The type of the variable is inferred from the value (the compiler decides the type).
      <br />
      It is not possible to declare a variable using <b>:=</b> without assigning a value.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variable Declaration With Initial Value</h2>
    <p>
      If the value of a variable is known from the start, you can declare the variable and assign a value to it on one line:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var student1 string = "John" // type is string
      <br />
      &nbsp;&nbsp;var student2 = "Jane" // type is inferred
      <br />
      &nbsp;&nbsp;x := 2 // type is inferred
      <br />
      <br />
      &nbsp;&nbsp;fmt.Println(student1)
      <br />
      &nbsp;&nbsp;fmt.Println(student2)
      <br />
      &nbsp;&nbsp;fmt.Println(x)
      <br />
      &#125;
    </div>

    <p>
      <b>Note:</b> The variable types of <b>student2</b> and <b>x</b> are inferred from their values.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variable Declaration Without Initial Value</h2>
    <p>
      In Go, all variables are initialized. If you declare a variable without an initial value, it will be set to the default value of its type:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var a string
      <br />
      &nbsp;&nbsp;var b int
      <br />
      &nbsp;&nbsp;var c bool
      <br />
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &nbsp;&nbsp;fmt.Println(b)
      <br />
      &nbsp;&nbsp;fmt.Println(c)
      <br />
      &#125;
    </div>

    <h3 className="text-xl font-semibold mt-4">Example explained</h3>
    <p>
      In this example there are 3 variables (<b>a</b>, <b>b</b>, and <b>c</b>).  
      They are declared but not assigned initial values.  
      When running the code, they automatically take their default values:
    </p>

    <ul className="list-disc list-inside ml-6 space-y-1">
      <li>a is ""</li>
      <li>b is 0</li>
      <li>c is false</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Value Assignment After Declaration</h2>
    <p>
      You can assign a value to a variable after it is declared. This is helpful when the value is not initially known.
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;var student1 string
      <br />
      &nbsp;&nbsp;student1 = "John"
      <br />
      &nbsp;&nbsp;fmt.Println(student1)
      <br />
      &#125;
    </div>

    <p>
      <b>Note:</b> It is not possible to declare a variable using <b>:=</b> without assigning a value to it.
    </p>

    <h2 className="text-2xl font-bold mt-6">Difference Between var and :=</h2>
    <p>There are some small differences between <b>var</b> and <b>:=</b>:</p>

    <table className="table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">var</th>
          <th className="border border-gray-300 px-4 py-2">:=</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Can be used inside and outside of functions</td>
          <td className="border border-gray-300 px-4 py-2">Can only be used inside functions</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Declaration and assignment can be done separately</td>
          <td className="border border-gray-300 px-4 py-2">Declaration and assignment must be done together</td>
        </tr>
      </tbody>
    </table>

    <h3 className="text-xl font-semibold mt-4">Example (using var outside a function)</h3>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      var a int
      <br />
      var b int = 2
      <br />
      var c = 3
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;a = 1
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &nbsp;&nbsp;fmt.Println(b)
      <br />
      &nbsp;&nbsp;fmt.Println(c)
      <br />
      &#125;
    </div>

    <h3 className="text-xl font-semibold mt-4">Example (using := outside a function)</h3>
    <p>
      Since <b>:=</b> is used outside of a function, running the program results in an error:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      a := 1
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println(a)
      <br />
      &#125;
    </div>

    <div className="bg-red-100 p-3 rounded-md font-mono text-red-700">
      ./prog.go:5:1: syntax error: non-declaration statement outside function body
    </div>
  </div>
);

export default GoDeclareVariables;
