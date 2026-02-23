import React from "react";

const GoConstants: React.FC = () => (
  <div className="mt-17  dark:text-white space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Go Constants</h1>

    <p>
      If a variable should have a fixed value that cannot be changed, you can use the <b>const</b> keyword.
    </p>
    <p>
      The <b>const</b> keyword declares the variable as <b>constant</b>, which means that it is unchangeable and read-only.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">const CONSTNAME type = value</div>
    <p>
      <b>Note:</b> The value of a constant must be assigned when you declare it.
    </p>

    <h2 className="text-2xl font-bold mt-6">Declaring a Constant</h2>
    <p>Here is an example of declaring a constant in Go:</p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      const PI = 3.14
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println(PI)
      <br />
      &#125;
    </div>

    <h2 className="text-2xl font-bold mt-6">Constant Rules</h2>
    <ul className="list-disc list-inside ml-6 space-y-1">
      <li>Constant names follow the same naming rules as variables.</li>
      <li>Constant names are usually written in uppercase letters (for easy identification and differentiation from variables).</li>
      <li>Constants can be declared both inside and outside of a function.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Constant Types</h2>
    <p>There are two types of constants in Go:</p>
    <ul className="list-disc list-inside ml-6 space-y-1">
      <li>Typed constants</li>
      <li>Untyped constants</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Typed Constants</h3>
    <p>Typed constants are declared with a defined type:</p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      const A int = 1
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println(A)
      <br />
      &#125;
    </div>

    <h3 className="text-xl font-semibold mt-4">Untyped Constants</h3>
    <p>Untyped constants are declared without a type:</p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      const A = 1
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println(A)
      <br />
      &#125;
    </div>

    <p>
      <b>Note:</b> In this case, the type of the constant is inferred from the value 
      (meaning the compiler decides the type based on the value).
    </p>

    <h2 className="text-2xl font-bold mt-6">Constants: Unchangeable and Read-only</h2>
    <p>
      When a constant is declared, it is not possible to change its value later:
    </p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;const A = 1
      <br />
      &nbsp;&nbsp;A = 2
      <br />
      &nbsp;&nbsp;fmt.Println(A)
      <br />
      &#125;
    </div>

    <div className="bg-red-100 p-3 rounded-md font-mono text-red-700">
      ./prog.go:8:7: cannot assign to A
    </div>

    <h2 className="text-2xl font-bold mt-6">Multiple Constants Declaration</h2>
    <p>Multiple constants can be grouped together into a block for better readability:</p>

    <div className="bg-gray-100 text-black dark:bg-gray-100 dark:text-black p-3 rounded-md font-mono">
      package main
      <br />
      import ("fmt")
      <br />
      <br />
      const (
      <br />
      &nbsp;&nbsp;A int = 1
      <br />
      &nbsp;&nbsp;B = 3.14
      <br />
      &nbsp;&nbsp;C = "Hi!"
      <br />
      )
      <br />
      <br />
      func main() &#123;
      <br />
      &nbsp;&nbsp;fmt.Println(A)
      <br />
      &nbsp;&nbsp;fmt.Println(B)
      <br />
      &nbsp;&nbsp;fmt.Println(C)
      <br />
      &#125;
    </div>
  </div>
);

export default GoConstants;
