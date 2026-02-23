import React from "react";


export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}
// Main structure of the sidebar navigation
export const tutorialData: SidebarItem[] = [
  { label: "Typescript home ", href: "cpp_home.asp" },
  { label: " TypescriptIntro", href: "cpp_intro.asp" },
  { label: "Typescript Get Started", href: "cpp_get_started.asp" },
  {
    label: "Typescript Syntax",
    href: "cpp_syntax.asp",
    isHeader: true,
    children: [
      { label: "Typescript Syntax", href: "cpp_syntax.asp" },
      { label: "Typescript Statements", href: "cpp_statements.asp" },
    ]
  },
  {
    label: "Typescript Output",
    href: "cpp_output.asp",
    isHeader: true,
    children: [

      { label: "Print Text", href: "cpp_output.asp" },
      { label: "Print Numbers", href: "cpp_output_numbers.asp" },
      { label: "New Lines", href: "cpp_new_lines.asp" },
    ]
  },
  { label: "Typescript Comments", href: "cpp_comments.asp" },
  {
    label: "Typescript Variables",
    href: "cpp_variables.asp",
    isHeader: true,
    children: [
      { label: "Declare Variables", href: "cpp_variables.asp" },
      { label: "Multiple Variables", href: "cpp_variables_multiple.asp" },
      { label: "Identifiers", href: "cpp_variables_identifiers.asp" },
      { label: "Constants", href: "cpp_variables_constants.asp" },
      { label: "Real-Life Examples", href: "cpp_variables_reallife.asp" },
    ]
  },
  { label: "Typescript User Input", href: "cpp_user_input.asp" },
  {
    label: "Typescript Data Types",
    href: "cpp_data_types.asp",
    isHeader: true,
    children: [
      { label: "Basic Data Types", href: "cpp_data_types.asp" },
      { label: "Numbers", href: "cpp_data_types_numeric.asp" },
      { label: "Boolean", href: "cpp_booleans.asp" },
      { label: "Characters", href: "cpp_data_types_char.asp" },
      { label: "Strings", href: "cpp_data_types_string.asp" },
    ]
  },
  {
    label: "Typescript Operators",
    href: "cpp_operators.asp",
    isHeader: true,
    children: [
      { label: "Operators", href: "cpp_operators.asp" },
      { label: "Arithmetic", href: "cpp_operators_arithmetic.asp" },
      { label: "Assignment", href: "cpp_operators_assignment.asp" },
      { label: "Comparison", href: "cpp_operators_comparison.asp" },
      { label: "Logical", href: "cpp_operators_logical.asp" },
    ]
  },
  {
    label: "Typescript Strings",
    href: "cpp_strings.asp",
    isHeader: true,
    children: [
      { label: "Strings Intro", href: "cpp_strings.asp" },
      { label: "Concatenation", href: "cpp_strings_concatenation.asp" },
      { label: "Number and Strings", href: "cpp_strings_number_and_string_.asp" },
      { label: "String Length", href: "cpp_strings_string_length_.asp" },
      { label: "Access Strings ", href: "cpp_strings_access_strings_.asp" },
      { label: "User Input Strings ", href: "cpp_strings_user_input_strings_.asp" },
    ]
  },
  { label: "Typescript Math", href: "cpp_math.asp" },
  {
    label: "Typescript If..Else",
    href: "cpp_conditions.asp",
    isHeader: true,
    children: [
      { label: "If", href: "cpp_conditions.asp" },
      { label: "Else", href: "cpp_conditions_else.asp" },
      { label: "Else If", href: "cpp_conditions_elseif.asp" },
      { label: "Short hand if..else", href: "cpp_conditions_shorthand.asp" },
      { label: "Nested If", href: "cpp_conditions_nested.asp" },
    ]
  },
  {
    label: "Typescript While loop",
    href: "cpp_while.asp",
    isHeader: true,
    children: [
      { label: "While", href: "cpp_while.asp" },
      { label: "Do/While", href: "cpp_do_while_loop.asp" },

    ]
  },
  {
    label: "Typescript For loop",
    href: "cpp_For_loop.asp",
    isHeader: true,
    children: [
      { label: "For Loop", href: "cpp_For_loop.asp" },
      { label: "Nested Loop", href: "cpp_nested_loop.asp" },
      { label: "The Foreach Loop", href: "cpp_for_each_loop.asp" },

    ]
  },

  { label: "Typescript Break/Continue", href: "cpp_break_continue.asp" },
  {
    label: "Typescript Arrays",
    href: "cpp_arrays.asp",
    isHeader: true,
    children: [
      { label: "Array", href: "cpp_arrays.asp" },
      { label: "Array and Loop", href: "cpp_arrays_loops.asp" },

    ]
  },


  {
    label: "Typescript Functions",
    href: "cpp_functions.asp",
    isHeader: true,
    children: [
      { label: "Functions", href: "cpp_functions.asp" },
      { label: "Functions Parameters", href: "cpp_functions_parameters.asp" },
      
      { label: "Scope ", href: "cpp_functions_scope.asp" },
      { label: "Recursion ", href: "cpp_functions_recursion.asp" },
      { label: "Arrow function ", href: "cpp_functions_lambda.asp" },

    ]
  },
  {
    label: "Typescript Classes",
    href: "cpp_oops.asp",
    isHeader: true,
    children: [
      { label: "Typescript OOP", href: "cpp_oops.asp" },
      { label: "Classes / Object", href: "cpp_object.asp" },
      { label: "Class Methods", href: "cpp_class_methods.asp" },
      { label: "Constructor", href: "cpp_constructor.asp", },
      { label: "Access Specifiers", href: "cpp_access_specifiers.asp" },
      { label: "Encapsulation", href: "cpp_encapsulation.asp" },
      { label: "Inheritance", href: "cpp_inheritance.asp" },
      { label: "Polymorphism", href: "cpp_polymorphism.asp" },
    ],
  },
  {
    label: "Typescript Data Structures",
    href: "cpp_data_structures.asp",
    isHeader: true,
    children: [
      { label: "Typescript Data Structures ", href: "cpp_data_structures.asp" },
      
      { label: "List ", href: "cpp_list.asp" },
      { label: "Stack", href: "cpp_stack.asp" },
      { label: "Queue", href: "cpp_queue.asp" },
      { label: "Dequeue", href: "cpp_dequeue.asp" },
      { label: "Sets", href: "cpp_sets.asp" },
      { label: "Iterators", href: "cpp_iterators.asp" },

    ]
  },

];
export const tutorialContent: Record<string, TopicContent> = {
  "cpp_home.asp": {
    title: "Typescript tutorial",

    content: (
      <>
        {/* Overview */}
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Typescript Tutorial
        </h2>

        <p className=" leading-relaxed mb-4 ">
          <strong>Typescript </strong> is a popular programming language. It is widely used in web development and is one of the most used languages in <strong> frontend</strong>.
        </p>

       

        {/* Example Code */}
       {/* Example Code */}
       <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">// Typescript program to print Hello World</span>
    <br />
    <span className="text-green-600 dark:text-green-400">console</span>
    <span className="text-gray-100">.log("Hello, World!");</span>
  </pre>
</div>



      </>
    ),
  }
  ,
  "cpp_intro.asp": {
    title: "Typescript Introduction",
    // subtitle: "What is javascript?",
    content: (
      <>
     <>
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    What is TypeScript?
  </h2>

  <p className="leading-relaxed mb-4">
    <strong>TypeScript</strong> is a <strong>superset of JavaScript</strong> developed by{" "}
    <strong>Microsoft</strong> that adds <strong>static typing</strong> and advanced features to the
    language. It helps developers catch errors early and write more reliable, scalable code.
  </p>

  <p className="leading-relaxed mb-4">
    In simple terms — TypeScript = JavaScript + Type Safety.
    <br />
    That means all valid JavaScript code also works in TypeScript, but TypeScript gives you the
    extra power of types, interfaces, and compile-time checks.
  </p>

  <p className="leading-relaxed mb-8">
    TypeScript makes large-scale applications easier to maintain by reducing bugs and improving
    developer productivity — which is why it’s widely used in modern frameworks like{" "}
    <strong>React</strong>, <strong>Angular</strong>, and <strong>Next.js</strong>.
  </p>

  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
    Why Use TypeScript?
  </h2>

  <ul className="list-disc list-inside space-y-2 ml-4">
    <li>Detects errors during compile-time instead of runtime.</li>
    <li>Supports object-oriented programming with classes and interfaces.</li>
    <li>Improves code readability, maintainability, and scalability.</li>
    <li>Has great tooling and IntelliSense support in editors like VS Code.</li>
    <li>Transpiles to clean, modern JavaScript for all browsers.</li>
  </ul>

  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    Get Started With TypeScript
  </h2>

  <p className="leading-relaxed mb-4">
    TypeScript code runs after being <strong>compiled</strong> to JavaScript.  
    You can try it directly in your browser using{" "}
    <a
      href="https://www.typescriptlang.org/play"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 dark:text-blue-400 underline"
    >
      TypeScript Playground
    </a>
    , or set it up locally on your system.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-100 whitespace-pre-wrap break-words">
{`// TypeScript program to print Hello World
let message: string = "Hello, World!";
console.log(message);`}
    </pre>
  </div>

  <h3 className="text-xl font-medium mb-3">Install TypeScript</h3>
  <p className="leading-relaxed mb-4">
    To run TypeScript on your computer, you’ll need{" "}
    <strong>Node.js</strong> and the <strong>TypeScript compiler</strong> (tsc).
  </p>

  <ul className="list-disc ml-6 mb-4 leading-relaxed">
    <li>Download and install Node.js from{" "}
      <a
        href="https://nodejs.org"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        https://nodejs.org
      </a>.
    </li>
    <li>Open your terminal and install TypeScript globally:</li>
  </ul>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-100 whitespace-pre-wrap break-words">
{`npm install -g typescript`}
    </pre>
  </div>

  <h3 className="text-xl font-medium mb-3">Set Up Your TypeScript Project</h3>
  <p className="leading-relaxed mb-4">
    1️⃣ Create a new folder and open it in your terminal.
    <br />
    2️⃣ Initialize a TypeScript project using:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-100 whitespace-pre-wrap break-words">
{`tsc --init`}
    </pre>
  </div>

  <p className="leading-relaxed mb-4">
    This creates a <code>tsconfig.json</code> file — which controls how TypeScript compiles your code.
  </p>

  <h3 className="text-xl font-medium mb-3">TypeScript Quickstart</h3>
  <p className="leading-relaxed mb-4">
    Now let’s create our first TypeScript file!  
    Open your text editor, write the following code, and save it as{" "}
    <code>hello.ts</code>:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`// hello.ts - A simple TypeScript example

function greet(name: string): void {
  console.log("Hello, " + name + "!");
}

greet("Ayush");`}
    </pre>
  </div>

  <p className="leading-relaxed mb-4">
    To run it, first compile the TypeScript file to JavaScript:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`tsc hello.ts`}
    </pre>
  </div>

  <p className="leading-relaxed mb-4">
    This creates a new file <code>hello.js</code>. Run it using Node.js:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`node hello.js`}
    </pre>
  </div>

  <p className="leading-relaxed mb-4">
    ✅ Output: <strong>Hello, Ayush!</strong>
  </p>

  <h3 className="text-xl font-medium mb-3">Recommended IDE</h3>
  <p className="leading-relaxed mb-4">
    The best IDE for TypeScript is <strong>Visual Studio Code (VS Code)</strong> — developed by
    Microsoft, it has built-in support for TypeScript syntax, debugging, and IntelliSense.
  </p>

  <p className="leading-relaxed mb-4">
    Download it from{" "}
    <a
      href="https://code.visualstudio.com/"
      className="text-blue-600 dark:text-blue-400 underline"
    >
      https://code.visualstudio.com/
    </a>.
  </p>
</>


      </>
    ),
  },


  // --- Syntax (New Content) ---
  "cpp_syntax.asp": {
    title: "typescript Syntax",


    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Syntax
</h2>

<p className="leading-relaxed mb-4">
  Let's break down a simple TypeScript program to understand how it works:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span>{" "}
    <span className="text-green-600 dark:text-green-400">message</span>:{" "}
    <span className="text-purple-600 dark:text-purple-400">string</span> ={" "}
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>;
    <br />
    <span className="text-blue-600 dark:text-blue-400">console</span>.
    <span className="text-green-600 dark:text-green-400">log</span>(message);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Line 1:</strong> We declare a variable{" "}
  <span className="font-mono">message</span> using{" "}
  <span className="font-mono">let</span> and specify its type as{" "}
  <span className="font-mono">string</span>.  
  This is what makes TypeScript different — it adds *type safety* to JavaScript.
</p>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Line 2:</strong> The{" "}
  <span className="font-mono">console.log()</span> function prints output to the console.  
  TypeScript automatically checks that <span className="font-mono">message</span> is a string before running the code.
</p>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Type Annotation:</strong>  
  You can explicitly define variable types using a colon (<span className="font-mono">:</span>),  
  for example — <span className="font-mono">let age: number = 25;</span>
</p>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Functions with Types:</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">function</span>{" "}
    <span className="text-green-600 dark:text-green-400">greet</span>(
    name: <span className="text-purple-600 dark:text-purple-400">string</span>
    ): <span className="text-purple-600 dark:text-purple-400">void</span> {"{"}
    <br />
    &nbsp;&nbsp;
    <span className="text-blue-600 dark:text-blue-400">console</span>.
    <span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-purple-600 dark:text-purple-400">`Hello, ${'{'}name{'}'}!`</span>);
    <br />
    {"}"}
    <br />
    <br />
    <span className="text-green-600 dark:text-green-400">greet</span>(
    <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Explanation:</strong>
  <ul className="list-disc ml-6">
    <li><span className="font-mono">function</span> defines a new function named <span className="font-mono">greet</span>.</li>
    <li><span className="font-mono">(name: string)</span> means the function takes a <strong>string</strong> parameter.</li>
    <li><span className="font-mono">: void</span> means the function does not return anything.</li>
    <li><span className="font-mono">`Hello, ${'{'}name{'}'}!`</span> is a template string — supports variable interpolation.</li>
  </ul>
</p>

<p className="leading-relaxed mb-4">
  TypeScript’s syntax looks like JavaScript — but with an added layer of type checking that helps prevent bugs before runtime.
</p>


      </>
    ),
  },
  // --- Statements (New Content) ---
  "cpp_statements.asp": {
    title: "typescript Syntax",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Statements
</h2>

<p className="leading-relaxed mb-4">
  A <strong className="font-semibold">computer program</strong> is a list of "instructions" to be executed by a computer.  
  In <strong>TypeScript</strong>, these programming instructions are called <strong className="font-semibold">statements</strong> — 
  just like in JavaScript, but with added <strong>type safety</strong> and compiler checks.
</p>

<p className="leading-relaxed mb-4">
  The following statement instructs the console to print the text <strong>"Hello World"</strong>:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Ends with a semicolon in TypeScript</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  Like JavaScript, TypeScript statements usually end with a <strong>semicolon (;)</strong>.  
  While it’s optional in many cases, adding it improves readability and avoids potential parsing issues.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)
    <br />
    <span className="text-red-500 dark:text-red-400">
      // Might cause issues if followed by another statement immediately
    </span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Type-Annotated Statements</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you can also add <strong>types</strong> to your variables and function parameters.  
  This ensures your statements are type-safe and errors are caught before runtime.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> message:
    <span className="text-green-600 dark:text-green-400"> string</span> =
    <span className="text-purple-600 dark:text-purple-400"> "Hello TypeScript!"</span>;<br />
    console.log(message);
  </p>
</div>

<p className="leading-relaxed mb-4">
  Here, <code>message</code> is explicitly declared as a <strong>string</strong>.  
  If you try to assign a number or any other type to it, the TypeScript compiler will throw an error.
</p>

<h3 className="text-xl font-medium mb-3">Multiple Statements</h3>
<p className="leading-relaxed mb-4">
  Most TypeScript programs contain multiple statements.  
  They are executed one by one, in the same order as they appear:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> name:
    <span className="text-green-600 dark:text-green-400"> string</span> =
    <span className="text-purple-600 dark:text-purple-400"> "Ayush"</span>;<br />
    <span className="text-blue-600 dark:text-blue-400">let</span> age:
    <span className="text-green-600 dark:text-green-400"> number</span> = 
    <span className="text-purple-600 dark:text-purple-400"> 22</span>;<br />
    console.log(
      <span className="text-purple-600 dark:text-purple-400">`Hello, my name is ${"{name}"} and I am ${"{age}"} years old.`</span>
    );
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Explanation:</strong><br />
  <ul className="list-disc ml-6">
    <li>Each statement ends with a semicolon (<code>;</code>).</li>
    <li><code>name</code> and <code>age</code> are declared with explicit types (<code>string</code> and <code>number</code>).</li>
    <li>Template literals (backticks) are used to embed variables directly into strings.</li>
    <li>TypeScript checks for type consistency at compile time.</li>
  </ul>
</p>

<p className="leading-relaxed mb-4">
  So, in TypeScript, statements not only define your program’s behavior but also make your code more reliable, structured, and type-safe.
</p>

      </>
    ),
  },


  // --- Output (Print Text) ---
  "cpp_output.asp": {
    title: "typescript Output",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Output (Print Text)
</h2>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">console.log()</span> function is used to
  display output or print text in JavaScript. You can use single quotes (
  <span className="font-mono">' '</span>) or double quotes (
  <span className="font-mono">" "</span>) for strings.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">
      // This is a simple JavaScript program
    </span>
    <br />
    <br />
    <span className="text-red-600 dark:text-red-400">function</span> main() {"{"}
    <br />
    &nbsp;&nbsp;console.log(
    <span className="text-purple-600 dark:text-purple-400">
      "Hello World!"
    </span>
    );
    <br />
    {"}"}
    <br />
    <br />
    main();
  </pre>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Result: Hello World!
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can call <span className="font-mono">console.log()</span> multiple times.
  Each call prints on a <strong className="font-semibold">new line</strong> by
  default. To print on the same line, you can use{" "}
  <span className="font-mono">process.stdout.write()</span> in Node.js or
  concatenate strings.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">
      // Print multiple statements without new line (Node.js)
    </span>
    <br />
    <br />
    process.stdout.write(
    <span className="text-purple-600 dark:text-purple-400">
      "Hello World!"
    </span>
    );
    <br />
    process.stdout.write(
    <span className="text-purple-600 dark:text-purple-400">
      " I am learning JavaScript"
    </span>
    );
  </pre>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Result: Hello World! I am learning JavaScript
  </p>
</div>

      </>
    ),
  },


  // --- Output Numbers (New Content) ---
  "cpp_output_numbers.asp": {
    title: "typescript Output",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Print Numbers
</h2>

<p className="leading-relaxed mb-4">
  You can use the <span className="font-mono">console.log()</span> function to print numbers.{" "}
  <strong className="font-semibold">Unlike text, numbers are NOT put inside quotes.</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">// Print a number</span>
    <br />
    <br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-blue-600 dark:text-blue-400">3</span>);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 3</p>
</div>

<h3 className="text-xl font-medium mb-3">Mathematical Calculations</h3>

<p className="leading-relaxed mb-4">
  You can also perform mathematical calculations directly inside the{" "}
  <span className="font-mono">console.log()</span> function:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.<span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-blue-600 dark:text-blue-400">3</span> +{" "}
    <span className="text-blue-600 dark:text-blue-400">3</span>);
    <br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-blue-600 dark:text-blue-400">2</span> *{" "}
    <span className="text-blue-600 dark:text-blue-400">5</span>);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 6 and 10</p>
</div>


      </>
    ),
  },
  // --- Output New Lines (New Content) ---
  "cpp_new_lines.asp": {
    title: "typescript Output",

    content: (
      <>
        <section className="text-gray-800 dark:text-gray-100">
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    New Lines in JavaScript
  </h2>

  <p className="leading-relaxed mb-4">
    To insert a new line in JavaScript, you can use the 
    <strong className="font-semibold"> \n </strong> 
    character inside your string.
  </p>

  <h3 className="text-xl font-medium mb-3">Using \n Character</h3>

  <p className="leading-relaxed mb-4">
    You can place <span className="font-mono">\n</span> inside the string to create a new line:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      <span className="text-blue-600 dark:text-blue-400">// JavaScript program demonstrating new lines</span><br /><br />
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!\nI am learning JavaScript"</span>);
    </p>
    <p className="mt-2 font-semibold text-black dark:text-gray-100">
      Result:<br />Hello World!<br />I am learning JavaScript
    </p>
  </div>

  <p className="leading-relaxed mb-4">
    You can also use multiple <span className="font-mono">\n</span> characters to create blank lines.
  </p>

  <h3 className="text-xl font-medium mb-3">Using Multiple console.log() Statements</h3>

  <p className="leading-relaxed mb-4">
    In JavaScript, instead of using <span className="font-mono">endl</span> or <span className="font-mono">print()</span>, 
    you can simply call multiple <span className="font-mono">console.log()</span> statements — 
    each automatically moves to a new line:
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);<br />
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"I am learning JavaScript"</span>);
    </p>
    <p className="mt-2 font-semibold text-black dark:text-gray-100">
      Result:<br />Hello World!<br />I am learning JavaScript
    </p>
  </div>
</section>


      </>
    ),
  },

  // --- Comments (New Content) ---
  "cpp_comments.asp": {
    title: "typescript comments",

    content: (
      <>
      <section className=" dark:text-gray-100">
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    JavaScript Comments
  </h2>

  <p className="leading-relaxed mb-4">
    Comments are used to explain JavaScript code and are ignored by the browser or interpreter. 
    They help make your code easier to understand and can be used to temporarily disable code during testing or debugging.
  </p>

  <h3 className="text-xl font-medium mb-3">Single-line Comments</h3>
  <p className="leading-relaxed mb-4">
    Start with <strong className="font-semibold">//</strong>. Any text after <strong>//</strong> on the same line is ignored by JavaScript.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      <span className="text-gray-500">// This is a comment</span><br />
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);<br /><br />
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>); <span className="text-gray-500 dark:text-gray-400">// Comment at the end of a line</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Multi-line Comments</h3>
  <p className="leading-relaxed mb-4">
    JavaScript supports multi-line comments using 
    <strong className="font-semibold"> /* ... */ </strong>. 
    Everything between these symbols is ignored by the interpreter.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      <span className="text-gray-500 dark:text-gray-400">/*<br />
      The code below will print "Hello World!"<br />
      to the console, and it is amazing.<br />
      */</span><br />
      console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
    </p>
  </div>
</section>


      </>
    ),
  },


  // --- Variables (New Content) ---
  "cpp_variables.asp": {
    title: "typescript Variables",

    content: (
      <>
     <section className="text-gray-800 dark:text-gray-100">
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    TypeScript Variables
  </h2>

  <p className="leading-relaxed mb-4">
    In <strong>TypeScript</strong>, variables are used to store data values, just like in JavaScript. 
    However, TypeScript adds <strong>static typing</strong> — meaning you can define what type of value a variable holds.
  </p>

  <p className="leading-relaxed mb-4">
    You can declare variables using 
    <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">let</code>, 
    <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">const</code>, or 
    <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">var</code> 
    (though <strong>let</strong> and <strong>const</strong> are preferred).
  </p>

  <h3 className="text-xl font-medium mb-3">Declaring Variables with Types</h3>
  <p className="leading-relaxed mb-4">
    TypeScript allows you to declare a variable along with its type using a colon (<code>:</code>):
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let age: <span className="text-blue-600 dark:text-blue-400">number</span> = 25;<br />
      let name: <span className="text-blue-600 dark:text-blue-400">string</span> = 
      <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>;<br />
      let isStudent: <span className="text-blue-600 dark:text-blue-400">boolean</span> = true;
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Type Inference</h3>
  <p className="leading-relaxed mb-4">
    If you assign a value during declaration, TypeScript automatically infers the type.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let city = <span className="text-purple-600 dark:text-purple-400">"Delhi"</span>; 
      <span className="text-gray-500 dark:text-gray-400"> // Type inferred as string</span><br />
      let marks = <span className="text-blue-600 dark:text-blue-400">95</span>; 
      <span className="text-gray-500 dark:text-gray-400"> // Type inferred as number</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Any Type</h3>
  <p className="leading-relaxed mb-4">
    Use the <code>any</code> type when you don’t want TypeScript to check the type of a variable.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let randomValue: <span className="text-blue-600 dark:text-blue-400">any</span> = 10;<br />
      randomValue = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
      randomValue = true; 
      <span className="text-gray-500 dark:text-gray-400"> // No error, but not recommended</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Union Types</h3>
  <p className="leading-relaxed mb-4">
    You can allow multiple possible types using the union operator (<code>|</code>).
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let id: <span className="text-blue-600 dark:text-blue-400">number | string</span>;<br />
      id = 101;<br />
      id = <span className="text-purple-600 dark:text-purple-400">"A101"</span>;
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Constant Variables</h3>
  <p className="leading-relaxed mb-4">
    Use <code>const</code> to declare constants that cannot be reassigned.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      const PI: <span className="text-blue-600 dark:text-blue-400">number</span> = 3.14;<br />
      console.log(PI);
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Arrays with Types</h3>
  <p className="leading-relaxed mb-4">
    TypeScript allows you to specify what type of elements an array contains.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let numbers: <span className="text-blue-600 dark:text-blue-400">number[]</span> = [1, 2, 3, 4, 5];<br />
      let names: <span className="text-blue-600 dark:text-blue-400">string[]</span> = 
      [<span className="text-purple-600 dark:text-purple-400">"Ayush"</span>, 
       <span className="text-purple-600 dark:text-purple-400">"John"</span>];
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Tuples</h3>
  <p className="leading-relaxed mb-4">
    Tuples allow you to define arrays with fixed length and types.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let person: <span className="text-blue-600 dark:text-blue-400">[string, number]</span> = 
      [<span className="text-purple-600 dark:text-purple-400">"Ayush"</span>, 22];
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Type Aliases</h3>
  <p className="leading-relaxed mb-4">
    You can create your own type using <code>type</code> keyword for better readability.
  </p>

  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      type User = &#123; name: string; age: number; isStudent: boolean &#125;;<br /><br />
      let user1: <span className="text-blue-600 dark:text-blue-400">User</span> = &#123;<br />
      &nbsp;&nbsp;name: <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>,<br />
      &nbsp;&nbsp;age: <span className="text-blue-600 dark:text-blue-400">22</span>,<br />
      &nbsp;&nbsp;isStudent: true<br />
      &#125;;
    </p>
  </div>
</section>


      </>
    ),
  },
  // --- Multiple Variables (New Content) ---
  "cpp_variables_multiple.asp": {
    title: "typescript Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typeScript: Declare Many Variables
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, you can declare <strong className="font-semibold">multiple variables</strong> on a single line using{" "}
  <code>let</code> or <code>const</code>. This keeps your code short and clean.
</p>

<h3 className="text-xl font-medium mb-3">Declare Multiple Variables in One Line</h3>
<p className="leading-relaxed mb-4">
  To declare more than one variable, use a <strong className="font-semibold">comma-separated list</strong> 
  and assign each variable its own value.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-blue-600 dark:text-blue-400">5</span>,{" "}
    y = <span className="text-blue-600 dark:text-blue-400">6</span>,{" "}
    z = <span className="text-blue-600 dark:text-blue-400">50</span>;<br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(x + y + z);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 61</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Assign One Value to Multiple Variables</h3>
<p className="leading-relaxed mb-4">
  You can also assign the <strong className="font-semibold">same value</strong> to multiple variables in one line. 
  This is useful when all variables should start with the same value.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-blue-600 dark:text-blue-400">50</span>,{" "}
    y = <span className="text-blue-600 dark:text-blue-400">50</span>,{" "}
    z = <span className="text-blue-600 dark:text-blue-400">50</span>;<br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(x + y + z);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 150</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Explanation:</strong><br />
  - Use <code>let</code> or <code>const</code> to declare variables.<br />
  - You can declare multiple variables on one line using commas.<br />
  - Assigning the same value separately makes it clear what’s happening.<br />
  - Finally, use <code>console.log()</code> to print results to the console.
</p>


      </>
    ),
  },

  // --- Identifiers (New Content) ---
  "cpp_variables_identifiers.asp": {
    title: "typescript Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typeScript Identifiers
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, every variable must have a <strong className="font-semibold">unique name</strong> called an{" "}
  <strong className="font-semibold">identifier</strong>.  
  Identifiers can be short names (like <span className="font-mono">x</span> and <span className="font-mono">y</span>) 
  or more descriptive names (like <span className="font-mono">age</span>, <span className="font-mono">total</span>, 
  <span className="font-mono">userCount</span>).
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500 dark:text-gray-400">// Good: descriptive name</span><br />
    let minutesPerHour = <span className="text-blue-600 dark:text-blue-400">60</span>;<br /><br />
    <span className="text-gray-500 dark:text-gray-400">// OK: short, but not descriptive</span><br />
    let m = <span className="text-blue-600 dark:text-blue-400">60</span>;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Rules for Naming Variables</h3>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    Names can include letters, digits, and underscores (<span className="font-mono">_</span>).
  </li>
  <li>
    Names must start with a letter, underscore (<span className="font-mono">_</span>), or dollar sign (<span className="font-mono">$</span>).
  </li>
  <li>
    Names are <strong className="font-semibold">case-sensitive</strong> (e.g.,{" "}
    <span className="font-mono">myVar</span> and <span className="font-mono">myvar</span> are different).
  </li>
  <li>
    Names cannot contain spaces or special characters like{" "}
    <span className="font-mono">!</span>, <span className="font-mono">#</span>, <span className="font-mono">%</span>, etc.
  </li>
  <li>
    Reserved words (like <span className="font-mono">class</span>, <span className="font-mono">for</span>,{" "}
    <span className="font-mono">let</span>, or <span className="font-mono">return</span>) cannot be used as identifiers.
  </li>
</ul>


      </>
    ),
  },

  // --- Constants (New Content) ---
  "cpp_variables_constants.asp": {
    title: "typescript Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typeScript Constants
</h2>

<p className="leading-relaxed mb-4">
  When you don’t want the value of a variable to change, use the{" "}
  <strong className="font-semibold">const</strong> keyword.  
  This declares the variable as <strong className="font-semibold">constant</strong>, meaning it is read-only and cannot be reassigned.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">const</span> myNum ={" "}
    <span className="text-blue-600 dark:text-blue-400">15</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// myNum will always be 15</span>
    <br />
    myNum = <span className="text-blue-600 dark:text-blue-400">10</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// ❌ TypeError: Assignment to constant variable.</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  You should always declare a variable as constant when its value is{" "}
  <strong className="font-semibold">not supposed to change</strong> throughout the program.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">const</span> minutesPerHour ={" "}
    <span className="text-blue-600 dark:text-blue-400">60</span>;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Notes on Constants</h3>

<p className="leading-relaxed mb-4">
  When you declare a <strong className="font-semibold">constant</strong>, you must assign it a value immediately.  
  If you don’t, JavaScript will throw an error.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 mb-2">
    <span className="text-gray-500 dark:text-gray-400">// ✅ Correct</span><br />
    <span className="text-red-600 dark:text-red-400">const</span> minutesPerHour ={" "}
    <span className="text-blue-600 dark:text-blue-400">60</span>;
  </p>
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500 dark:text-gray-400">// ❌ Incorrect</span><br />
    <span className="text-red-600 dark:text-red-400">const</span> minutesPerHour;<br />
    minutesPerHour = <span className="text-blue-600 dark:text-blue-400">60</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// TypeError: Missing initializer in const declaration</span>
  </p>
</div>


      </>
    ),
  },

  "cpp_variables_reallife.asp": {
    title: "typescript Variables",
    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typeScript Real-Life Examples
</h2>

<h3 className="text-xl font-medium mb-3">Student Data</h3>
<p className="leading-relaxed mb-4">
  Example program storing different data about a college student:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> studentId ={" "}
    <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> studentFee ={" "}
    <span className="text-blue-600 dark:text-blue-400">75.25</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> studentGrade ={" "}
    <span className="text-purple-600 dark:text-purple-400">'B'</span>;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Calculate the Area of a Rectangle</h3>
<p className="leading-relaxed mb-4">
  Program to calculate the area of a rectangle (by multiplying the length and width):
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> length ={" "}
    <span className="text-blue-600 dark:text-blue-400">4</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> width ={" "}
    <span className="text-blue-600 dark:text-blue-400">6</span>;<br /><br />
    <span className="text-red-600 dark:text-red-400">let</span> area = length * width;<br />
    <span className="text-green-600 dark:text-green-400">console.log</span>(area);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 24</span>
  </p>
  <p className="mt-2 font-semibold">Result: 24</p>
</div>

      </>
    ),
  },

  // --- User Input (New Content) ---
  "cpp_user_input.asp": {
    title: "typescript User Input",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typeScript User Input
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, we can take user input using the{" "}
  <strong className="font-semibold">prompt()</strong> function.
  It displays a dialog box that asks the user for some input.
</p>

<p className="leading-relaxed mb-4">
  You can then use{" "}
  <strong className="font-semibold">console.log()</strong> or{" "}
  <strong className="font-semibold">alert()</strong> to show the result.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> name ={" "}
    <span className="text-green-600 dark:text-green-400">prompt</span>(
    <span className="text-purple-600 dark:text-purple-400">
      "What is your name?"
    </span>
    );<br />
    <span className="text-green-600 dark:text-green-400">console.log</span>(
    <span className="text-purple-600 dark:text-purple-400">"Hello, "</span> + name);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good To Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong>console.log()</strong> is used for output (in the browser console).
  </li>
  <li>
    <strong>alert()</strong> can show output directly in a pop-up box.
  </li>
  <li>
    <strong>prompt()</strong> is used for getting user input from a dialog box.
  </li>
  <li>
    The <strong>prompt()</strong> function always returns data as a{" "}
    <strong>string</strong>. You can convert it using{" "}
    <span className="font-mono">Number()</span> or{" "}
    <span className="font-mono">parseInt()</span> when needed.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Creating a Simple Calculator</h3>
<p className="leading-relaxed mb-4">
  In this example, the user must input two numbers. Then we print the sum by
  adding the two numbers:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> x ={" "}
    <span className="text-green-600 dark:text-green-400">Number</span>(
    <span className="text-green-600 dark:text-green-400">prompt</span>(
    <span className="text-purple-600 dark:text-purple-400">
      "Enter first number:"
    </span>
    ));<br />
    <span className="text-red-600 dark:text-red-400">let</span> y ={" "}
    <span className="text-green-600 dark:text-green-400">Number</span>(
    <span className="text-green-600 dark:text-green-400">prompt</span>(
    <span className="text-purple-600 dark:text-purple-400">
      "Enter second number:"
    </span>
    ));<br />
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> sum = x + y;<br />
    <span className="text-green-600 dark:text-green-400">alert</span>(
    <span className="text-purple-600 dark:text-purple-400">
      "Sum is: "
    </span>{" "}
    + sum);
  </p>
</div>



      </>
    ),
  },

  // --- Data Types (Basic) (New Content) ---
  "cpp_data_types.asp": {
    title: "typescript Data Types",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  typescript Data Types
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, variables can hold different types of data, and the type is
  determined automatically when you assign a value. TypeScript is{" "}
  <strong className="font-semibold">dynamically typed</strong>, which means you
  don’t have to declare the data type explicitly.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> myNum ={" "}
    <span className="text-blue-600 dark:text-blue-400">5</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">
      // Number (integer or float)
    </span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myString ={" "}
    <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// String</span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myBoolean ={" "}
    <span className="text-blue-600 dark:text-blue-400">true</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// Boolean</span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myArray ={" "}
    <span className="text-blue-600 dark:text-blue-400">[1, 2, 3]</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">// Array</span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myObject = {"{"}
    <span className="text-purple-600 dark:text-purple-400">"name"</span>:{" "}
    <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"age"</span>:{" "}
    <span className="text-blue-600 dark:text-blue-400">21</span>
    {"}"};{" "}
    <span className="text-gray-500 dark:text-gray-400">// Object</span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myUndefined;{" "}
    <span className="text-gray-500 dark:text-gray-400">
      // Undefined (no value assigned)
    </span>
    <br />
    <span className="text-red-600 dark:text-red-400">let</span> myNull ={" "}
    <span className="text-blue-600 dark:text-blue-400">null</span>;{" "}
    <span className="text-gray-500 dark:text-gray-400">
      // Null (empty value)
    </span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Basic Data Types in JavaScript</h3>
<p className="leading-relaxed mb-4">
  In typeScript, data types define the{" "}
  <strong className="font-semibold">type of value</strong> a variable can store.
  TypeScript has <strong>primitive types</strong> and{" "}
  <strong>non-primitive types</strong> (objects).
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
    <thead>
      <tr className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
        <th className="py-2 px-4 text-left">Data Type</th>
        <th className="py-2 px-4 text-left">Example</th>
        <th className="py-2 px-4 text-left">Description</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-black dark:text-gray-100">
      <tr>
        <td className="py-2 px-4 font-mono">Number</td>
        <td className="py-2 px-4">let x = 5.75</td>
        <td className="py-2 px-4">
          Represents both integer and floating-point numbers.
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">String</td>
        <td className="py-2 px-4">let x = "Hello"</td>
        <td className="py-2 px-4">Represents a sequence of characters (text).</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Boolean</td>
        <td className="py-2 px-4">let x = true</td>
        <td className="py-2 px-4">Stores logical values: true or false.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Undefined</td>
        <td className="py-2 px-4">let x;</td>
        <td className="py-2 px-4">
          A variable declared but not assigned any value.
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Null</td>
        <td className="py-2 px-4">let x = null</td>
        <td className="py-2 px-4">
          Represents an empty or non-existent value.
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Symbol</td>
        <td className="py-2 px-4">let x = Symbol("id")</td>
        <td className="py-2 px-4">
          Used to create unique identifiers (ES6 feature).
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">BigInt</td>
        <td className="py-2 px-4">let x = 12345678901234567890n</td>
        <td className="py-2 px-4">
          Used for very large integers beyond Number limit.
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Object</td>
        <td className="py-2 px-4">
          let x = {"{"}"name": "Ayush", "age": 21{"}"}
        </td>
        <td className="py-2 px-4">Stores key-value pairs.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Array</td>
        <td className="py-2 px-4">let x = [1, 2, 3]</td>
        <td className="py-2 px-4">Stores ordered lists of values.</td>
      </tr>
    </tbody>
  </table>
</div>


      </>
    ),
  },

  // --- Numeric Data Types (New Content) ---
  "cpp_data_types_numeric.asp": {
    title: "typescript Data Types",

    content: (
      <>
      <>
  {/* 🟣 JavaScript Numeric Data Types */}
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    typeScript Numeric Data Types
  </h2>

  <p className="leading-relaxed mb-4">
    In typeScript, all numeric values are of type{" "}
    <strong className="font-semibold">Number</strong>, which includes both integers and floating-point values.
    For extremely large integers, JavaScript provides{" "}
    <strong className="font-semibold">BigInt</strong>.
  </p>

  <h3 className="text-xl font-medium mb-3">Number (Integer)</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let myNum = <span className="text-blue-600 dark:text-blue-400">1000</span>;<br />
      console.log(myNum);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Outputs 1000</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Float (Decimal)</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let myNum = <span className="text-blue-600 dark:text-blue-400">5.75</span>;<br />
      console.log(myNum);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Outputs 5.75</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">BigInt (Very Large Numbers)</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let bigNum ={" "}
      <span className="text-blue-600 dark:text-blue-400">123456789012345678901234567890n</span>;<br />
      console.log(bigNum);{" "}
      <span className="text-gray-500 dark:text-gray-400">
        // Outputs 123456789012345678901234567890n
      </span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Float vs. Integer</h3>
  <p className="leading-relaxed mb-4">
    The <strong className="font-semibold">Number</strong> type in JavaScript handles both integers and decimals.
    <br />
    <br />
    TypeScript uses{" "}
    <strong>IEEE 754 double-precision floating-point</strong> format, which can lead to rounding
    errors in very large or precise numbers.
    <br />
    <br />
    For high-precision calculations, you can use libraries like{" "}
    <span className="font-mono">decimal.js</span> or{" "}
    <span className="font-mono">big.js</span>.
  </p>

  <h3 className="text-xl font-medium mb-3">Scientific Notation</h3>
  <p className="leading-relaxed mb-4">
    TypeScript supports <strong>scientific notation</strong> using the letter{" "}
    <span className="font-mono">"e"</span> or{" "}
    <span className="font-mono">"E"</span> to represent powers of 10:
  </p>

  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let f1 = <span className="text-blue-600 dark:text-blue-400">35e3</span>;<br />
      let d1 = <span className="text-blue-600 dark:text-blue-400">12E4</span>;<br />
      console.log(f1);{" "}
      <span className="text-gray-500 dark:text-gray-400">// 35000</span>
      <br />
      console.log(d1);{" "}
      <span className="text-gray-500 dark:text-gray-400">// 120000</span>
    </p>
  </div>

  {/* 🟢 Boolean Data Types */}
  
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    typeScript Booleans
  </h2>

  <p className="leading-relaxed mb-4">
    The <strong className="font-semibold">Boolean</strong> data type in typeScript has only two
    values: <strong className="font-semibold">true</strong> or{" "}
    <strong className="font-semibold">false</strong>.
  </p>

  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let isCodingFun = <span className="text-blue-600 dark:text-blue-400">true</span>;<br />
      let isFishTasty = <span className="text-blue-600 dark:text-blue-400">false</span>;<br />
      console.log(isCodingFun);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Outputs true</span>
      <br />
      console.log(isFishTasty);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Outputs false</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Boolean Expressions</h3>
  <p className="leading-relaxed mb-4">
    A <strong className="font-semibold">boolean expression</strong> compares values (like{" "}
    <span className="font-mono">&gt;</span> or{" "}
    <span className="font-mono">===</span>) and returns{" "}
    <strong className="font-semibold">true</strong> or{" "}
    <strong className="font-semibold">false</strong>.
  </p>

  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let x = <span className="text-blue-600 dark:text-blue-400">10</span>;<br />
      console.log(x === 10);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Returns true</span>
      <br />
      console.log(x &gt; 20);{" "}
      <span className="text-gray-500 dark:text-gray-400">// Returns false</span>
    </p>
  </div>
</>



      </>
    ),
  },


  // --- Character Data Types (New Content) ---
  "cpp_data_types_char.asp": {
    title: "typesript Data Types",

    content: (
      <>
        <>
  {/* 🟣 JavaScript Character and String Data Types */}
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Character and String Data Types
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, just like JavaScript, there is{" "}
  <strong className="font-semibold">no separate char type</strong>. 
  A single character is represented as a <strong>string of length 1</strong>, 
  enclosed in single (<code>'A'</code>), double (<code>"A"</code>), or backticks (<code>`A`</code>).
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myGrade: string = <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
    console.log(myGrade);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: B</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Character Codes (ASCII & Unicode)</h3>
<p className="leading-relaxed mb-4">
  Every character in TypeScript has a corresponding{" "}
  <strong className="font-semibold">Unicode or ASCII value</strong>. 
  You can get these using <code>charCodeAt()</code> or <code>codePointAt()</code>, 
  and convert numbers back using <code>String.fromCharCode()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    let a: string = <span className="text-purple-600 dark:text-purple-400">'A'</span>;<br />
    let b: string = <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
    let c: string = <span className="text-purple-600 dark:text-purple-400">'C'</span>;<br />
    <br />
    console.log(a.charCodeAt(0));{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: 65</span><br />
    console.log(String.fromCharCode(66));{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: B</span><br />
    console.log(String.fromCharCode(67));{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: C</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">String Basics</h3>
<p className="leading-relaxed mb-4">
  Strings in TypeScript are <strong>immutable</strong> and declared with single, 
  double, or backtick quotes. Backticks (<code>`</code>) enable 
  <strong>template literals</strong> — for variable interpolation.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    let name: string = <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>;<br />
    let greeting: string ={" "}
    <span className="text-purple-600 dark:text-purple-400">`Hello, ${"{name}"}`</span>;<br />
    <br />
    console.log(greeting);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: Hello, Ayush</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good to Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>TypeScript doesn’t have a <code>char</code> type — only <code>string</code>.</li>
  <li><code>charCodeAt()</code> returns a character’s Unicode value.</li>
  <li><code>String.fromCharCode()</code> converts a code back to a character.</li>
  <li>
    Template literals (<code>`</code>) allow embedding expressions using{" "}
    <code>${"{expression}"}</code>.
  </li>
  <li>
    You can also define <strong>string type aliases</strong> for specific character sets 
    if needed.
  </li>
</ul>

</>



      </>
    ),
  },

  // --- Operators (Main) (New Content) ---
  "cpp_operators.asp": {
    title: "Typescript Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Operators
</h2>
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  TypeScript Operators
</h2>

<p className="leading-relaxed mb-4">
  Operators in TypeScript are used to perform operations on variables and values.  
  They are grouped into:
  <strong className="font-semibold"> Arithmetic</strong>, 
  <strong className="font-semibold"> Assignment</strong>, 
  <strong className="font-semibold"> Comparison</strong>, 
  <strong className="font-semibold"> Logical</strong>, 
  and <strong className="font-semibold"> Bitwise</strong> operators.
</p>

<h3 className="text-xl font-medium mb-3">Example: Addition Operator</h3>
<p className="leading-relaxed mb-4">
  The <span className="font-mono">+</span> operator can add numbers, concatenate strings, 
  or combine variables and values.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    let sum1: number = 100 + 50;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 150</span><br />
    let sum2: number = sum1 + 250;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 400</span><br />
    let sum3: number = sum2 + sum2;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 800</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Variables and Values</h3>
<p className="leading-relaxed mb-4">
  Operators can combine numbers, variables, and expressions in TypeScript too.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    let x: number = 100;<br />
    let y: number = 50;<br />
    let total: number = x + y;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 150</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Operator Types</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li><strong>Arithmetic:</strong> +, -, *, /, %, ++, --</li>
  <li><strong>Assignment:</strong> =, +=, -=, *=, /=, %=</li>
  <li><strong>Comparison:</strong> ==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=</li>
  <li><strong>Logical:</strong> &&, ||, !</li>
  <li><strong>Bitwise:</strong> &, |, ^, ~, &lt;&lt;, &gt;&gt;</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: String Concatenation</h3>
<p className="leading-relaxed mb-4">
  The <code>+</code> operator also joins strings in TypeScript:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    let firstName: string = <span className="text-purple-600 dark:text-purple-400">'Ayush'</span>;<br />
    let lastName: string = <span className="text-purple-600 dark:text-purple-400">'Kataria'</span>;<br />
    let fullName: string = firstName + ' ' + lastName;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 'Ayush Kataria'</span>
  </p>
</div>


      </>
    ),
  },

  // --- Arithmetic Operators (New Content) ---
  "cpp_operators_arithmetic.asp": {
    title: "typescript  Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Arithmetic Operators
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, arithmetic operators like{" "}
  <span className="font-mono">+</span>, <span className="font-mono">-</span>,{" "}
  <span className="font-mono">*</span>, <span className="font-mono">/</span>, and{" "}
  <span className="font-mono">%</span> are used to perform basic mathematical calculations.
  These work the same as in JavaScript but with strict typing.
</p>

<h3 className="text-xl font-medium mb-3">Basic Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p
    className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6"
  >
    let a: number = 10;<br />
    let b: number = 3;<br />
    console.log(a + b);{" "}
    <span className="text-gray-500 dark:text-gray-400">// 13</span><br />
    console.log(a - b);{" "}
    <span className="text-gray-500 dark:text-gray-400">// 7</span><br />
    console.log(a * b);{" "}
    <span className="text-gray-500 dark:text-gray-400">// 30</span><br />
    console.log(a / b);{" "}
    <span className="text-gray-500 dark:text-gray-400">// 3.333...</span><br />
    console.log(a % b);{" "}
    <span className="text-gray-500 dark:text-gray-400">// 1</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Modulus, Increment, Decrement</h3>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong className="font-semibold">% (Modulus):</strong> Returns the remainder 
    after division (e.g., <span className="font-mono">10 % 3 = 1</span>).
  </li>
  <li>
    <strong className="font-semibold">++ (Increment):</strong> Increases the value 
    of a variable by 1 (e.g., <span className="font-mono">x++</span> or{" "}
    <span className="font-mono">++x</span>).
  </li>
  <li>
    <strong className="font-semibold">-- (Decrement):</strong> Decreases the value 
    of a variable by 1 (e.g., <span className="font-mono">x--</span> or{" "}
    <span className="font-mono">--x</span>).
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Increment & Decrement</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p
    className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6"
  >
    let x: number = 5;<br />
    x++;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 6</span><br />
    x--;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 5</span><br />
    x += 2;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 7</span><br />
    x -= 3;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 4</span>
  </p>
</div>

      </>
    ),
  },

  // --- Assignment Operators (New Content) ---
  "cpp_operators_assignment.asp": {
    title: "typescript Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Assignment Operators
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, the <strong className="font-semibold">=</strong> operator assigns a value to a variable.{" "}
  <strong className="font-semibold">Compound assignment operators</strong> combine arithmetic and assignment operations — 
  like <span className="font-mono">+=</span>, <span className="font-mono">-=</span>, or <span className="font-mono">*=</span>.{" "}
  TypeScript adds type safety, ensuring the variable types remain consistent during operations.
</p>

<h3 className="text-xl font-medium mb-3">Example: Compound Assignment</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p 
    className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6"
  >
    let x: number = 10;<br />
    x += 5; <span className="text-gray-500 dark:text-gray-400">// Same as x = x + 5 (x is now 15)</span><br />
    x *= 2; <span className="text-gray-500 dark:text-gray-400">// Same as x = x * 2 (x is now 30)</span><br />
    x -= 10; <span className="text-gray-500 dark:text-gray-400">// Same as x = x - 10 (x is now 20)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Real-Life Example: Tracking Savings</h3>

<p className="leading-relaxed mb-4">
  Suppose you’re adding money to your savings account each week.{" "}
  You can use <span className="font-mono">+=</span> to update your balance safely in TypeScript:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p 
    className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
    dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6"
  >
    let savings: number = 1000;<br />
    savings += 200; <span className="text-gray-500 dark:text-gray-400">// Added ₹200, total = 1200</span><br />
    savings += 300; <span className="text-gray-500 dark:text-gray-400">// Added ₹300, total = 1500</span>
  </p>
</div>


      </>
    ),
  },

  // --- Comparison Operators (New Content) ---
  "cpp_operators_comparison.asp": {
    title: "typescript Operators",

    content: (
      <>
       {/* --- Comparison Operators --- */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Comparison Operators
</h2>

<p className="leading-relaxed mb-4">
  Comparison operators are used to compare two values and return{" "}
  <strong className="font-semibold">true</strong> or{" "}
  <strong className="font-semibold">false</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Operators</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li><span className="font-mono">==</span> (Equal to – compares values only)</li>
  <li><span className="font-mono">===</span> (Strict equal – compares value & type)</li>
  <li><span className="font-mono">!=</span> (Not equal)</li>
  <li><span className="font-mono">!==</span> (Strict not equal)</li>
  <li>
    <span className="font-mono">&gt;</span>,{" "}
    <span className="font-mono">&lt;</span>,{" "}
    <span className="font-mono">&gt;=</span>,{" "}
    <span className="font-mono">&lt;=</span>
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Real-Life Example: Voting Age</h3>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-green-600">let</span> age: <span className="text-orange-500">number</span> = <span className="text-blue-600 dark:text-blue-400">18</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">age &gt;= 18</span>);
    <span className="text-gray-500 dark:text-gray-400"> // true</span>
  </p>
</div>

{/* --- Logical Operators --- */}
{/* --- Logical Operators --- */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Logical Operators
</h2>

<p className="leading-relaxed mb-4">
  Logical operators are used to combine multiple conditions and return a boolean result:
</p>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong className="font-semibold">&amp;&amp; (AND):</strong> Returns true if{" "}
    <strong>both</strong> conditions are true.
  </li>
  <li>
    <strong className="font-semibold">|| (OR):</strong> Returns true if{" "}
    <strong>one</strong> of the conditions is true.
  </li>
  <li>
    <strong className="font-semibold">! (NOT):</strong> Reverses the boolean value.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Logical AND</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    {"let x: number = 7;"}<br />
    {"console.log(x > 5 && x < 10);"} <span className="text-gray-500">// true</span><br />
    {"console.log(x < 5 && x < 10);"} <span className="text-gray-500">// false</span>
  </p>
</div>


      </>
    ),
  },

  // --- Strings (New Content) ---
  "cpp_strings.asp": {
    title: "typescript Strings",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Strings
</h2>

<p className="leading-relaxed mb-4">
  Strings are used to store text or a sequence of characters. For example,{" "}
  <span className="font-mono">"Hello World"</span> is a string.
</p>

<p className="leading-relaxed mb-4">
  A string in TypeScript can be created using{" "}
  <strong className="font-semibold">single quotes</strong>,{" "}
  <strong className="font-semibold">double quotes</strong>, or{" "}
  <strong className="font-semibold">backticks</strong> (for template literals).
</p>

<h3 className="text-xl font-medium mb-3">Example: Create a String Variable</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    {"let greeting: string = \"Hello\";"}<br />
    {"let name: string = 'Ayush';"}<br />
    {"console.log(greeting + ' ' + name);"}{" "}
    <span className="text-gray-500">// Output: Hello Ayush</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Template Literals</h3>

<p className="leading-relaxed mb-4">
  Template literals (using backticks <span className="font-mono">``</span>) make string concatenation easier and more readable.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    {"const name: string = 'Ayush';"}<br />
    {"const message: string = `Hello, ${name}! Welcome to TypeScript.`;"}<br />
    {"console.log(message);"}{" "}
    <span className="text-gray-500">// Output: Hello, Ayush! Welcome to TypeScript.</span>
  </p>
</div>



       
      </>
    ),
  },

  "cpp_strings_concatenation.asp": {
    title: "typescript String Concatenation",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  String Concatenation
</h2>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">+</span> operator can be used between strings to join them together and form a new string. 
  This process is called <strong className="font-semibold">concatenation</strong>:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200 leading-6">
    {"let firstName: string = \"John \";"}<br />
    {"let lastName: string = \"Doe\";"}<br />
    {"let fullName: string = firstName + lastName;"}<br />
    {"console.log(fullName);"}{" "}
    <span className="text-gray-500">// Outputs John Doe</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can also add a space between strings directly inside quotes:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200 leading-6">
    {"let firstName: string = \"John\";"}<br />
    {"let lastName: string = \"Doe\";"}<br />
    {"let fullName: string = firstName + ' ' + lastName;"}<br />
    {"console.log(fullName);"}{" "}
    <span className="text-gray-500">// Outputs John Doe</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Using Template Literals (Recommended)</h3>

<p className="leading-relaxed mb-4">
  In TypeScript, you can also use <span className="font-mono">template literals</span> 
  (using backticks <span className="font-mono">``</span>) to combine variables and text more cleanly:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200 leading-6">
    {"let firstName: string = 'John';"}<br />
    {"let lastName: string = 'Doe';"}<br />
    {"let fullName: string = `Hello ${firstName} ${lastName}`;"}<br />
    {"console.log(fullName);"}{" "}
    <span className="text-gray-500">// Outputs Hello John Doe</span>
  </p>
</div>


    </>
    
    ),
  },
  "cpp_strings_number_and_string_.asp": {
    title: "typescript Numbers and Strings",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  Adding Numbers and Strings in TypeScript
</h2>

<p className="leading-relaxed mb-4">
  <strong>⚠️ WARNING!</strong> TypeScript also uses the{" "}
  <span className="font-mono">+</span> operator for both{" "}
  <strong>addition</strong> and <strong>concatenation</strong>.<br />
  <strong>Numbers</strong> are added, and <strong>strings</strong> are concatenated.
</p>

<h3 className="text-xl font-medium mb-3">Adding Numbers</h3>
<p className="leading-relaxed mb-2">
  If you add two numbers, the result will be a number:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x: <span className="text-purple-600 dark:text-purple-400">number</span> = 10;<br />
    let y: <span className="text-purple-600 dark:text-purple-400">number</span> = 20;<br />
    let z: <span className="text-purple-600 dark:text-purple-400">number</span> = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be 30 (a number)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding Strings</h3>
<p className="leading-relaxed mb-2">
  If you add two strings, the result will be a concatenated string:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x: <span className="text-purple-600 dark:text-purple-400">string</span> = "10";<br />
    let y: <span className="text-purple-600 dark:text-purple-400">string</span> = "20";<br />
    let z: <span className="text-purple-600 dark:text-purple-400">string</span> = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be "1020" (a string)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding String and Number</h3>
<p className="leading-relaxed mb-2">
  In TypeScript, if you try to add a number to a string, TypeScript will first
  convert the number into a string and then concatenate them:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x: <span className="text-purple-600 dark:text-purple-400">string</span> = "10";<br />
    let y: <span className="text-purple-600 dark:text-purple-400">number</span> = 20;<br />
    let z: <span className="text-purple-600 dark:text-purple-400">string</span> = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be "1020" (a string)</span>
  </p>
</div>


      </>
    ),
  },
  "cpp_strings_string_length_.asp": {
    title: "typescript String Length",

    content: (
      <>
       {/* 🧵 STRING LENGTH */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  String Length in TypeScript
</h2>

<p className="leading-relaxed mb-4">
  To get the length of a string in TypeScript, use the{" "}
  <span className="font-mono">.length</span> property.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const txt: <span className="text-purple-600 dark:text-purple-400">string</span> = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">
      `The length of the txt string is: ${'{'}txt.length{'}'}`</span>);
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      // Output: The length of the txt string is: 26
    </span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  In TypeScript, <span className="font-mono">.length</span> is a built-in property that returns the number of characters in a string.
</p>

{/* 🧵 ACCESS STRINGS */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  Access Strings
</h2>

<p className="leading-relaxed mb-4">
  You can access characters in a string by referring to its{" "}
  <strong className="font-semibold">index number</strong> inside square brackets{" "}
  <span className="font-mono">[]</span>.
</p>

<h3 className="text-xl font-medium mb-3">Example: Access the First Character</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myString: <span className="text-purple-600 dark:text-purple-400">string</span> = "Hello";
    <br />
    console.log(myString[0]);
    <span className="text-gray-500 dark:text-gray-400"> // Outputs H</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  String indexes start with <strong>0</strong>:{" "}
  <span className="font-mono">[0]</span> is the first character,{" "}
  <span className="font-mono">[1]</span> is the second, and so on.
</p>

<h3 className="text-xl font-medium mb-3">Example: Access the Second and Last Characters</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myString: <span className="text-purple-600 dark:text-purple-400">string</span> = "Hello";
    <br />
    console.log(myString[1]); <span className="text-gray-500 dark:text-gray-400"> // e</span>
    <br />
    console.log(myString[myString.length - 1]); <span className="text-gray-500 dark:text-gray-400"> // o</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change String Characters</h3>

<p className="leading-relaxed mb-4">
  In TypeScript, strings are <strong>immutable</strong>. You can’t change them directly.
  To modify a character, you must create a new string.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myString: <span className="text-purple-600 dark:text-purple-400">string</span> = "Hello";
    <br />
    myString = 'J' + myString.slice(1);
    <br />
    console.log(myString); <span className="text-gray-500 dark:text-gray-400"> // Jello</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access with Error Handling</h3>

<p className="leading-relaxed mb-4">
  If you try to access a character at an invalid index, TypeScript returns{" "}
  <span className="font-mono">undefined</span> instead of throwing an error.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myString: <span className="text-purple-600 dark:text-purple-400">string</span> = "Hello";
    <br />
    console.log(myString[0]); <span className="text-gray-500 dark:text-gray-400"> // H</span>
    <br />
    console.log(myString[10]); <span className="text-gray-500 dark:text-gray-400"> // undefined</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Modify Using Array Conversion</h3>

<p className="leading-relaxed mb-4">
  You can convert a string into an array, modify a character, and then join it back into a string.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myString: <span className="text-purple-600 dark:text-purple-400">string</span> = "Hello";
    <br />
    const chars: <span className="text-purple-600 dark:text-purple-400">string[]</span> = myString.split('');
    <br />
    chars[0] = 'J';
    <br />
    myString = chars.join('');
    <br />
    console.log(myString); <span className="text-gray-500 dark:text-gray-400"> // Jello</span>
  </p>
</div>

{/* 🧵 USER INPUT STRINGS */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-green-200 mt-10">
  User Input Strings
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, you can use the <span className="font-mono">prompt()</span> function to take user input as a string (in browsers).
</p>

<h3 className="text-xl font-medium mb-2">Example</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const firstName: <span className="text-purple-600 dark:text-purple-400">string | null</span> = prompt("Type your first name:");
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`Your name is: ${'{'}firstName ?? "Guest"{'}'}`</span>);
  </p>
</div>

<h3 className="text-xl font-medium mb-2">Example: Full Name</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const fullName: <span className="text-purple-600 dark:text-purple-400">string | null</span> = prompt("Type your full name:");
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`Your name is: ${'{'}fullName ?? "Anonymous"{'}'}`</span>);
  </p>
</div>

<p className="leading-relaxed mb-4">
  Unlike C++, TypeScript’s <span className="font-mono">prompt()</span> can take full sentences with spaces by default.
</p>

<h3 className="text-xl font-medium mb-2">Example: Numeric Input Note</h3>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">prompt()</span> function always returns a{" "}
  <strong>string | null</strong>. If you need a number, convert it using{" "}
  <span className="font-mono">Number()</span> or <span className="font-mono">parseInt()</span>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let ageInput: <span className="text-purple-600 dark:text-purple-400">string | null</span> = prompt("Enter your age:");
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`You entered age as: ${'{'}ageInput ?? "N/A"{'}'}`</span>);
    <br />
    const age: <span className="text-purple-600 dark:text-purple-400">number</span> = Number(ageInput);
    <br />
    console.log(age + 1); <span className="text-gray-500 dark:text-gray-400"> // Outputs age + 1</span>
  </p>
</div>


      </>
    ),
  },




  // --- Math (New Content) ---
  "cpp_math.asp": {
    title: "typescript Math",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  typeScript Math
</h2>

<p className="leading-relaxed mb-4">
  typeScript has many built-in functions and objects that let you perform mathematical operations easily.
</p>

<h3 className="text-xl font-medium mb-3">Math.max() and Math.min()</h3>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">Math.max(x, y)</span> function returns the largest value,
  and <span className="font-mono">Math.min(x, y)</span> returns the smallest:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(Math.max(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 10</span>
    <br />
    console.log(Math.min(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 5</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">
  typeScript <span className="font-mono">Math</span> Object
</h3>

<p className="leading-relaxed mb-4">
  JavaScript’s <strong className="font-semibold">Math</strong> object provides additional mathematical functions,
  such as <span className="font-mono">Math.sqrt()</span> (square root),{" "}
  <span className="font-mono">Math.round()</span> (rounds a number), and{" "}
  <span className="font-mono">Math.log()</span> (natural logarithm). You can use them directly:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(Math.sqrt(64)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 8</span>
    <br />
    console.log(Math.round(2.6)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 3</span>
    <br />
    console.log(Math.log(2)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 0.693...</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can explore more methods like{" "}
  <span className="font-mono">Math.sin()</span>,{" "}
  <span className="font-mono">Math.cos()</span>,{" "}
  <span className="font-mono">Math.tan()</span>,{" "}
  and constants like <span className="font-mono">Math.PI</span> for trigonometry and precision math.
</p>


      </>
    ),
  },

  // --- If..Else (Main) (New Content) ---
  "cpp_conditions.asp": {
    title: "typescript If ... Else",

    content: (
      <>
       <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Short Hand If...Else (Ternary Operator)
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>ternary operator</strong> is a shorthand way to write simple <span className="font-mono">if else</span> statements. It consists of three operands: a condition, a value if true, and a value if false.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="dark:text-white">variable</span> = <span className="text-red-600 dark:text-red-400">(condition)</span> ? <span className="text-blue-600 dark:text-blue-400">expressionTrue</span> : <span className="text-blue-600 dark:text-blue-400">expressionFalse</span>;
        </p>
        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <p className=" leading-relaxed mb-2">
          Instead of writing a multi-line <span className="font-mono">if else</span> statement:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;<br />
            if (time &lt; 18) {'{'} cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good day."</span>; {'}'}<br />
            else {'{'} cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>; {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-2">
          You can write it in one line using the ternary operator:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;<br />
            <span className="text-red-600 dark:text-red-400">string</span> result = (time &lt; 18) ? <span className="text-purple-600 dark:text-purple-400">"Good day."</span> : <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>;<br />
            cout &lt;&lt; result;
          </p>
        </div>
       <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  JavaScript Conditions and If Statements
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, conditional statements are used to perform different actions based on different conditions.
  The main conditional statements are:{" "}
  <span className="font-mono">if</span>,{" "}
  <span className="font-mono">else if</span>, and{" "}
  <span className="font-mono">else</span>.
</p>

<h3 className="text-xl font-medium mb-3">Comparison Operators</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>Less than: <span className="font-mono">a &lt; b</span></li>
  <li>Less than or equal to: <span className="font-mono">a &lt;= b</span></li>
  <li>Greater than: <span className="font-mono">a &gt; b</span></li>
  <li>Greater than or equal to: <span className="font-mono">a &gt;= b</span></li>
  <li>Equal to: <span className="font-mono">a == b</span></li>
  <li>Strict equal to (checks value + type): <span className="font-mono">a === b</span></li>
  <li>Not equal to: <span className="font-mono">a != b</span></li>
  <li>Strict not equal to: <span className="font-mono">a !== b</span></li>
</ul>

<h3 className="text-xl font-medium mb-3">The if Statement</h3>
<p className="leading-relaxed mb-4">
  The <span className="font-mono">if</span> statement executes a block of code only if a specified condition is{" "}
  <strong className="font-semibold">true</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">if</span> (condition) {"{"}
  <br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to execute if condition is true</span>
  <br />
  {"}"}
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-purple-600 dark:text-purple-400">10</span>;
    <br />
    let y = <span className="text-purple-600 dark:text-purple-400">20</span>;
    <br />
    <span className="text-red-600 dark:text-red-400">if</span> (x &lt; y) {"{"}
    <br />
    &nbsp;&nbsp;console.log(
    <span className="text-purple-600 dark:text-purple-400">
      "x is less than y"
    </span>);
    <br />
    {"}"}
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      // Output: x is less than y
    </span>
  </p>
</div>

</>

      </>
    ),
  },

  // --- Else (New Content) ---
  "cpp_conditions_else.asp": {
    title: "Typescript If ... Else",

    content: (
      <>
     <>
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
    The else Statement
  </h2>

  <p className="leading-relaxed mb-4">
    The <strong className="font-semibold">else</strong> statement in JavaScript is used to specify a block of code that will run if the condition in the{" "}
    <strong className="font-semibold">if</strong> statement is <strong className="font-semibold">false</strong>.
  </p>

  <h3 className="text-xl font-medium mb-3">Syntax</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      <span className="text-red-600 dark:text-red-400">if</span> (condition) {"{"}
      <br />
      &nbsp;&nbsp;// code to run if condition is true
      <br />
      {"}"} <span className="text-red-600 dark:text-red-400">else</span> {"{"}
      <br />
      &nbsp;&nbsp;// code to run if condition is false
      <br />
      {"}"}
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Example</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      let time = <span className="text-purple-600 dark:text-purple-400">20</span>;
      <br />
      <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18) {"{"}
      <br />
      &nbsp;&nbsp;console.log(
      <span className="text-purple-600 dark:text-purple-400">"Good day."</span>);
      <br />
      {"}"} <span className="text-red-600 dark:text-red-400">else</span> {"{"}
      <br />
      &nbsp;&nbsp;console.log(
      <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);
      <br />
      {"}"}
      <br />
      <span className="text-gray-500 dark:text-gray-400 block mt-2">// Output: "Good evening."</span>
    </p>
  </div>

  <h3 className="text-xl font-medium mb-3">Example Explained</h3>
  <p className="leading-relaxed mb-4">
    In this example, the variable <span className="font-mono">time</span> is set to 20, which is greater than 18. That makes the{" "}
    <span className="font-mono">if</span> condition false, so JavaScript executes the{" "}
    <span className="font-mono">else</span> block and prints{" "}
    <strong className="font-semibold">"Good evening."</strong>.
    <br />
    If <span className="font-mono">time</span> were less than 18, the code inside the{" "}
    <span className="font-mono">if</span> block would run instead, printing{" "}
    <strong className="font-semibold">"Good day."</strong>.
  </p>
</>


      </>
    ),
  },


  // --- Short Hand If Else (New Content) ---
  "cpp_conditions_shorthand.asp": {
    title: "TypeScript If ... Else",

    content: (
      <>
      <>
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    Short Hand If...Else (Ternary Operator)
  </h2>

  <p className="leading-relaxed mb-4">
    In JavaScript, the{" "}
    <strong className="font-semibold">ternary operator</strong> is a compact way
    to write simple <span className="font-mono">if...else</span> statements. It
    helps you assign a value or execute an expression based on a condition — all
    in a single line.
  </p>

  <h3 className="text-xl font-medium mb-3">Syntax</h3>
  <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
    <span className="dark:text-white">variable</span> ={" "}
    <span className="text-red-600 dark:text-red-400">condition</span> ?{" "}
    <span className="text-blue-600 dark:text-blue-400">
      expressionIfTrue
    </span>{" "}
    :{" "}
    <span className="text-blue-600 dark:text-blue-400">
      expressionIfFalse
    </span>
    ;
  </p>

  <h3 className="text-xl font-medium mb-3">Example</h3>

  <p className="leading-relaxed mb-2">
    Normally, you’d write a multi-line{" "}
    <span className="font-mono">if...else</span> statement like this:
  </p>

  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
      <span className="text-blue-600 dark:text-blue-400">let</span> time = 20;
      <br />
      <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18)
      &#123;
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-600 dark:text-blue-400">console</span>.log(
      <span className="text-purple-600 dark:text-purple-400">
        "Good day."
      </span>
      );
      <br />
      &#125;{" "}
      <span className="text-red-600 dark:text-red-400">else</span> &#123;
      <br />
      &nbsp;&nbsp;
      <span className="text-blue-600 dark:text-blue-400">console</span>.log(
      <span className="text-purple-600 dark:text-purple-400">
        "Good evening."
      </span>
      );
      <br />
      &#125;
    </pre>
  </div>

  <p className="leading-relaxed mb-2">
    Using the <strong>ternary operator</strong>, you can simplify that into one
    line:
  </p>

  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
      <span className="text-blue-600 dark:text-blue-400">let</span> time = 20;
      <br />
      <span className="text-blue-600 dark:text-blue-400">let</span> result = (
      time &lt; 18) ?{" "}
      <span className="text-purple-600 dark:text-purple-400">
        "Good day."
      </span>{" "}
      :{" "}
      <span className="text-purple-600 dark:text-purple-400">
        "Good evening."
      </span>
      ;
      <br />
      <span className="text-blue-600 dark:text-blue-400">console</span>.log(
      result);
    </pre>
  </div>

  <h3 className="text-xl font-medium mb-3">Example Explained</h3>

  <p className="leading-relaxed mb-4">
    In this example, the variable <span className="font-mono">time</span> is{" "}
    <strong>20</strong>, which means the condition{" "}
    <span className="font-mono">(time &lt; 18)</span> is false. Therefore, the
    expression after <span className="font-mono">:</span> runs, and{" "}
    <strong>"Good evening."</strong> is printed.
    <br />
    If <span className="font-mono">time</span> was less than 18, it would print{" "}
    <strong>"Good day."</strong> instead.
  </p>
</>


      </>
    ),
  },


  // --- Nested If (New Content) ---
  "cpp_conditions_nested.asp": {
    title: "Typescript If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Nested If
</h2>

<p className="leading-relaxed mb-4">
  A <strong className='font-semibold'>nested if</strong> statement in typeScript means having one 
  <span className="font-mono"> if </span> statement inside another.  
  It allows you to check for an additional condition only when the first one is true.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">if</span> (condition1) &#123;<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if condition1 is true</span><br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (condition2) &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if both condition1 and condition2 are true</span><br />
  &nbsp;&nbsp;&#125;<br />
  &#125;
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> x = 15;<br />
    <span className="text-blue-600 dark:text-blue-400">let</span> y = 25;<br /><br />
    <span className="text-red-600 dark:text-red-400">if</span> (x &gt; 10) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"x is greater than 10"</span>);<br /><br />
    &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Nested if</span><br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (y &gt; 20) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"y is also greater than 20"</span>);<br />
    &nbsp;&nbsp;&#125;<br />
    &#125;
  </pre>
</div>

<p className="leading-relaxed mb-4 font-semibold">
  Result:<br />
  x is greater than 10<br />
  y is also greater than 20
</p>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<p className="leading-relaxed mb-4">
  In this example, typeScript first checks if <span className="font-mono">x</span> is greater than 10.  
  Since that condition is true, the program moves inside the first <span className="font-mono">if</span> block and then checks whether 
  <span className="font-mono">y</span> is greater than 20.  
  Because both conditions are true, both messages are printed to the console.
</p>

      </>
    ),
  },
  // --- Switch (New Content) ---
  "cpp_switch.asp": {
    title: "typescript Switch",

    content: (
      <>
 <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Switch Statement
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, a <strong className="font-semibold">switch</strong> statement is used to perform 
  different actions based on different conditions.  
  It’s an alternative to using multiple <span className="font-mono">if-else</span> statements when 
  you have many possible values to check.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">switch</span> (expression) &#123;<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> value1:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;// code block<br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> value2:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;// code block<br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;// default code block<br />
  &#125;
</p>

<h3 className="text-xl font-medium mb-3">Example: Weekday Name</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> day = 4;<br /><br />
    <span className="text-red-600 dark:text-red-400">switch</span> (day) &#123;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 1:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Monday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 2:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Tuesday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 3:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Wednesday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Thursday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 5:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Friday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 6:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Saturday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 7:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Sunday"</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Invalid day"</span>);<br />
    &#125;
  </p>
  <p className="mt-2 font-semibold">Outputs "Thursday"</p>
</div>

<h3 className="text-xl font-medium mb-3">The Default Case</h3>
<p className="leading-relaxed mb-4">
  The <span className="font-mono">default</span> case in a <strong className="font-semibold">switch</strong> statement runs when none of the 
  <span className="font-mono">case</span> values match the expression.  
  It acts like the <strong>else</strong> part in an if-else structure.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> fruit = <span className="text-purple-600 dark:text-purple-400">"apple"</span>;<br /><br />
    <span className="text-red-600 dark:text-red-400">switch</span> (fruit) &#123;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> <span className="text-purple-600 dark:text-purple-400">"banana"</span>:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Bananas are yellow."</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> <span className="text-purple-600 dark:text-purple-400">"mango"</span>:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Mangoes are sweet."</span>);<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Fruit not found."</span>);<br />
    &#125;
  </p>
  <p className="mt-2 font-semibold">Outputs "Fruit not found."</p>
</div>


      </>
    ),


  },


  // --- While Loop (New Content) ---
  "cpp_while.asp": {
    title: "typescript While Loop",

    content: (
      <>
     <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript While Loop
</h2>

<p className="leading-relaxed mb-4 dark:text-gray-100">
  The <strong className="font-semibold">while</strong> loop in typeScript executes a block of code 
  as long as a specified condition is <strong className="font-semibold">true</strong>.  
  It’s commonly used when you don’t know beforehand how many times the loop should run.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">while</span> (<span className="text-blue-600 dark:text-blue-400">condition</span>) &#123;<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span><br />
  &#125;
</p>

<h3 className="text-xl font-medium mb-3">Example: Counting Up</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> i = 0;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(i);<br />
    &nbsp;&nbsp;i++;<br />
    &#125;
  </pre>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs: 0, 1, 2, 3, 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Countdown Example</h3>
<p className="leading-relaxed mb-4">
  Count down from 3 to 1 and then display "Happy New Year!!":
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> countdown = 3;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (countdown &gt; 0) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(countdown);<br />
    &nbsp;&nbsp;countdown--;<br />
    &#125;<br />
    <span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Happy New Year!!"</span>);
  </pre>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs: 3, 2, 1 followed by "Happy New Year!!"
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Note:</strong> Always update the variable in the condition 
  (like <span className="font-mono">i++</span> or <span className="font-mono">countdown--</span>) 
  to avoid infinite loops.
</p>

<p className="leading-relaxed mb-4">
  <strong>Tip:</strong> The variable <span className="font-mono">i</span> is commonly used as a counter 
  because it stands for "index" or "iterator".
</p>


      </>
    ),
  },
  "cpp_do_while_loop.asp": {
    title: "typescript Do/While Loop",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Do/While Loop
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, the <strong className="font-semibold">do/while</strong> loop executes a block of code
  <strong> at least once</strong> before checking the condition. It’s useful when you want the loop body
  to run once even if the condition starts as false.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  do &#123; <br />
  &nbsp;&nbsp;// code block to be executed <br />
  &#125; while (condition);
</p>

<h3 className="text-xl font-medium mb-3">Example: Counting Up</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let i: number = 0;<br />
    do &#123;<br />
    &nbsp;&nbsp;console.log(i);<br />
    &nbsp;&nbsp;i++;<br />
    &#125; while (i &lt; 5);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs 0, 1, 2, 3, 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Condition False from Start</h3>
<p className="leading-relaxed mb-4">
  Even if the condition is false initially, the code inside the <strong>do block</strong> executes once:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let i: number = 10;<br />
    do &#123;<br />
    &nbsp;&nbsp;console.log("i is", i);<br />
    &nbsp;&nbsp;i++;<br />
    &#125; while (i &lt; 5);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Runs once even though condition is false.
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Practical Example: User Input</h3>
<p className="leading-relaxed mb-4">
  Keep asking the user to enter a positive number until they enter 0 or a negative number:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let number: number;<br />
    do &#123;<br />
    &nbsp;&nbsp;number = parseInt(prompt("Enter a positive number: ") || "0");<br />
    &#125; while (number &gt; 0);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong> The <span className="font-mono">do/while</span> loop in TypeScript guarantees that
  the code runs <strong>at least once</strong>, regardless of whether the condition is true or false initially.
</p>


      </>
    ),
  },


  // --- For Loop (New Content) ---
  "cpp_For_loop.asp": {
    title: "typescript For Loop",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  typeScript For Loop
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, the <strong className="font-semibold">for</strong> loop is used to repeat a block of code 
  a specific number of times. It gives full control with an initializer, condition, and increment/decrement step.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  for (initialization; condition; increment) &#123; <br />
  &nbsp;&nbsp;// code block to execute <br />
  &#125;
</p>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li><strong>initialization</strong>: Runs once before the loop starts (e.g. <code>let i = 0</code>).</li>
  <li><strong>condition</strong>: The loop continues while this is <code>true</code>.</li>
  <li><strong>increment</strong>: Updates the loop variable after each iteration.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Print Numbers 0 to 4</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for (let i = 0; i &lt; 5; i++) &#123;<br />
    &nbsp;&nbsp;console.log(i);<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 0, 1, 2, 3, 4</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Print Even Numbers 0 to 10</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for (let i = 0; i &lt;= 10; i += 2) &#123;<br />
    &nbsp;&nbsp;console.log(i);<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 0, 2, 4, 6, 8, 10</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Sum of Numbers 1 to 5</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let total = 0;<br />
    for (let i = 1; i &lt;= 5; i++) &#123;<br />
    &nbsp;&nbsp;total += i;<br />
    &#125;<br />
    console.log("Sum is", total);<br />
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Countdown from 5 to 1</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for (let i = 5; i &gt; 0; i--) &#123;<br />
    &nbsp;&nbsp;console.log(i);<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 5, 4, 3, 2, 1</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong> In JavaScript, <span className="font-mono">for</span> loops give you control over 
  the start, stop, and step of each iteration — making them powerful for counters, arrays, and numeric ranges.
</p>

      </>
    ),
  },
  "cpp_nested_loop.asp": {
    title: "typescript Nested Loops",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  typeScript Nested Loops
</h2>

<p className="leading-relaxed mb-4">
  You can place one loop inside another loop. This is called a{" "}
  <strong className="font-semibold">nested loop</strong>.  
  The inner loop runs completely for each iteration of the outer loop.
</p>

<h3 className="text-xl font-medium mb-3">Example: Outer and Inner Loops</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500 dark:text-gray-400">// Outer loop</span><br />
    for (let i = 1; i &lt;= 2; i++) &#123;<br />
    &nbsp;&nbsp;console.log(<span className="text-purple-600 dark:text-purple-400">"Outer:"</span>, i);<br />
    &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Inner loop</span><br />
    &nbsp;&nbsp;for (let j = 1; j &lt;= 3; j++) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="text-purple-600 dark:text-purple-400">" Inner:"</span>, j);<br />
    &nbsp;&nbsp;&#125;<br />
    &#125;
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs:<br />
    Outer: 1<br />
    Inner: 1<br />
    Inner: 2<br />
    Inner: 3<br />
    Outer: 2<br />
    Inner: 1<br />
    Inner: 2<br />
    Inner: 3
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Multiplication Table (1 to 3)</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for (let i = 1; i &lt;= 3; i++) &#123;<br />
    &nbsp;&nbsp;let row = "";<br />
    &nbsp;&nbsp;for (let j = 1; j &lt;= 3; j++) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;row += (i * j) + " ";<br />
    &nbsp;&nbsp;&#125;<br />
    &nbsp;&nbsp;console.log(row.trim()); <span className="text-gray-500 dark:text-gray-400">// Move to next line after inner loop</span><br />
    &#125;
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs:<br />
    1 2 3<br />
    2 4 6<br />
    3 6 9
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong>  
  Nested loops are useful for handling multi-dimensional data like matrices, grids, or pattern printing.  
  Each time the outer loop runs once, the inner loop executes fully.
</p>


      </>
    ),
  },
  "cpp_for_each_loop.asp": {
    title: "Typescript The foreach Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  The forEach Loop (typeScript)
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, the <strong className="font-semibold">forEach()</strong> method is used to loop through elements in an array.  
  It runs a function for each element — without needing to manually use indexes.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  array.<span className="text-purple-600 dark:text-purple-400">forEach</span>((element) =&gt; &#123;<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to execute for each element</span><br />
  &#125;);
</p>

<h3 className="text-xl font-medium mb-3">Example: Loop Through an Array</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myNumbers = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>];<br />
    myNumbers.<span className="text-purple-600 dark:text-purple-400">forEach</span>((num) =&gt; &#123;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(num);<br />
    &#125;);
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs:<br />
    10<br />
    20<br />
    30<br />
    40<br />
    50
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Loop Through a String</h3>
<p className="leading-relaxed mb-4">
  TypeScript strings aren’t arrays, but you can loop through them using <code className="font-mono">for...of</code> or convert them into arrays using <code className="font-mono">split()</code>.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const text = <span className="text-purple-600 dark:text-purple-400">"HELLO"</span>;<br />
    <span className="text-red-600 dark:text-red-400">for</span> (const char <span className="text-red-600 dark:text-red-400">of</span> text) &#123;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(char);<br />
    &#125;
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs:<br />
    H<br />
    E<br />
    L<br />
    L<br />
    O
  </p>
</div>


      </>
    ),
  },


  // --- Break/Continue (New Content) ---
  "cpp_break_continue.asp": {
    title: "typescript Break/Continue",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript break
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">break</strong> statement is used to <strong className="font-semibold">exit a loop</strong> immediately when a certain condition is met.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">for</span> (let i = <span className="text-blue-600 dark:text-blue-400">0</span>; i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>; i++) &#123;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i === <span className="text-blue-600 dark:text-blue-400">4</span>) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;&#125;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(i);<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400">// Stops when i is 4. Outputs 0, 1, 2, 3.</span>
  </p>
</div>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200">
  TypeScript continue
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">continue</strong> statement skips the current iteration and moves to the next one in the loop.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">for</span> (let i = <span className="text-blue-600 dark:text-blue-400">0</span>; i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>; i++) &#123;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i === <span className="text-blue-600 dark:text-blue-400">4</span>) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span>;<br />
    &nbsp;&nbsp;&#125;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(i);<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400">// Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Break and Continue in While Loops</h3>
<p className="leading-relaxed mb-4">
  Both <strong className="font-semibold">break</strong> and <strong className="font-semibold">continue</strong> can also be used inside <span className="font-mono">while</span> loops.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let i = <span className="text-blue-600 dark:text-blue-400">0</span>;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>) &#123;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(i);<br />
    &nbsp;&nbsp;i++;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i === <span className="text-blue-600 dark:text-blue-400">4</span>) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;<br />
    &nbsp;&nbsp;&#125;<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400">// Stops when i is 4. Outputs 0, 1, 2, 3.</span>
  </p>
</div>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let i = <span className="text-blue-600 dark:text-blue-400">0</span>;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>) &#123;<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i === <span className="text-blue-600 dark:text-blue-400">4</span>) &#123;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;i++;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span>;<br />
    &nbsp;&nbsp;&#125;<br />
    &nbsp;&nbsp;console.<span className="text-purple-600 dark:text-purple-400">log</span>(i);<br />
    &nbsp;&nbsp;i++;<br />
    &#125;<br />
    <span className="text-gray-500 dark:text-gray-400">// Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
  </p>
</div>


      </>
    ),
  },

  // --- Arrays (New Content) ---
  "cpp_arrays.asp": {
    title: "typescript Arrays",

    content: (
      <>
      {/* Overview */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Arrays
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, <span className="font-mono">arrays</span> are used to store multiple values in a single variable.  
  They can hold items of the same or different data types, such as strings, numbers, or even objects.
</p>

{/* Declaring Arrays */}
<h3 className="text-xl font-medium mb-3">Creating an Array</h3>
<p className="leading-relaxed mb-4">
  In typeScript, you can create an array using square brackets <code>[]</code> and separate the elements with commas:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
    const myNums = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>];<br />
    <span className="text-gray-500 dark:text-gray-400">// Arrays can store multiple values of the same or different types</span>
  </pre>
</div>

{/* Accessing Array Elements */}
<h3 className="text-xl font-medium mb-3">Accessing Array Elements</h3>
<p className="leading-relaxed mb-4">
  You can access array elements by referring to their index number inside square brackets <code>[]</code>.  
  Remember, indexes start from 0 — meaning <code>[0]</code> is the first element.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
    console.<span className="text-purple-600 dark:text-purple-400">log</span>(cars[<span className="text-blue-600 dark:text-blue-400">0</span>]); <span className="text-gray-500 dark:text-gray-400">// Outputs: Volvo</span>
  </pre>
</div>

{/* Modifying Array Elements */}
<h3 className="text-xl font-medium mb-3">Changing an Array Element</h3>
<p className="leading-relaxed mb-4">
  You can modify an array item by assigning a new value to a specific index:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
    cars[<span className="text-blue-600 dark:text-blue-400">0</span>] = <span className="text-purple-600 dark:text-purple-400">"Opel"</span>;<br />
    console.<span className="text-purple-600 dark:text-purple-400">log</span>(cars[<span className="text-blue-600 dark:text-blue-400">0</span>]); <span className="text-gray-500 dark:text-gray-400">// Now outputs: Opel</span>
  </pre>
</div>


      </>
    ),
  },
  "cpp_arrays_loops.asp": {
    title: "typescript Arrays",

    content: (
      <>
   <div className="p-6">
  {/* Looping Through Arrays */}
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
    Loop Through an Array (Using For Loop)
  </h2>

  <p className="leading-relaxed mb-4">
    In typeScript, you can iterate through the elements of an array using
    different loop methods like <span className="font-mono">for</span>,{" "}
    <span className="font-mono">forEach()</span>, or{" "}
    <span className="font-mono">for...of</span>.
  </p>

  {/* Example 1: Using Traditional For Loop */}
  <h3 className="text-xl font-medium mb-3">Example: Using Traditional For Loop</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda", "Tesla"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// Outputs each car name`}
    </pre>
  </div>

  {/* Example 2: Using forEach Loop */}
  <h3 className="text-xl font-medium mb-3">Example: Using forEach Loop</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda", "Tesla"];

cars.forEach((car: string) => {
  console.log(car);
});
// Outputs each car name`}
    </pre>
  </div>

  {/* Example 3: Using for...of Loop */}
  <h3 className="text-xl font-medium mb-3">Example: Using for...of Loop</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda", "Tesla"];

for (const car of cars) {
  console.log(car);
}
// Outputs each car name`}
    </pre>
  </div>

  {/* Example 4: Accessing Index and Value */}
  <h3 className="text-xl font-medium mb-3">Example: Outputting Index and Value</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda", "Tesla"];

cars.forEach((car: string, index: number) => {
  console.log(index, "=", car);
});
// Output: 0 = Volvo, 1 = BMW, etc.`}
    </pre>
  </div>

  {/* For-Each Loop Explanation */}
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200">
    The For-Each Loop in typeScript
  </h2>

  <p className="leading-relaxed mb-4">
    typeScript provides the <span className="font-mono">forEach()</span> method
    for arrays, which behaves like a “for-each” loop — it automatically iterates
    over every element in an array.
  </p>

  <h3 className="text-xl font-medium mb-3">Syntax</h3>
  <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
{`array.forEach((item) => {
// code block to execute
});`}
  </p>

  <h3 className="text-xl font-medium mb-3">Example: Loop Through Numbers</h3>
  <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`const myNumbers: number[] = [10, 20, 30, 40, 50];

myNumbers.forEach((num: number) => {
  console.log(num);
});
// Prints each number`}
    </pre>
  </div>
</div>


      </>
    ),
  },



  "cpp_functions.asp": {
    title: "typescript Functions",

    content: (
      <>
  <>
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Functions
</h2>

<p className="leading-relaxed mb-4">
  A <strong>function</strong> in TypeScript is a reusable block of code designed to perform a specific task. 
  TypeScript adds type safety to functions, making your code more predictable and easier to debug.
</p>

<h3 className="text-xl font-medium mb-3">Creating a Function</h3>
<p className="leading-relaxed mb-4">
  Functions are created using the <code>function</code> keyword. 
  You can define parameter types and return types for better type checking.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`function greet(): void {
  console.log("Hello, TypeScript!");
}

greet();`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Function Parameters</h3>
<p className="leading-relaxed mb-4">
  You can define the types of parameters to ensure correct usage.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Optional & Default Parameters</h3>
<p className="leading-relaxed mb-4">
  TypeScript allows parameters to be optional using <code>?</code> and supports default values.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`function greetUser(name: string = "User"): void {
  console.log(\`Hello, \${name}!\`);
}

greetUser();   // Hello, User!
greetUser("Ayush");   // Hello, Ayush!`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Arrow Functions</h3>
<p className="leading-relaxed mb-4">
  Arrow functions are a concise way to write functions in TypeScript.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`const multiply = (a: number, b: number): number => a * b;

console.log(multiply(4, 6));`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Function Return Type</h3>
<p className="leading-relaxed mb-4">
  You can explicitly define what type a function should return using a colon <code>:</code>.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`function getAge(): number {
  return 25;
}

let age: number = getAge();
console.log(age);`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Void vs Any</h3>
<p className="leading-relaxed mb-4">
  <code>void</code> means the function does not return anything, while <code>any</code> disables type checking.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`function logMessage(message: any): void {
  console.log(message);
}

logMessage("Hello TypeScript!");`}
  </pre>
</div>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  Variable Scope in TypeScript
</h2>

<p className="leading-relaxed mb-4">
  Variables in TypeScript follow the same scoping rules as JavaScript — global, function, and block scope.
</p>

<h3 className="text-xl font-medium mb-3">Block Scope (let & const)</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`{
  let a: number = 10;
  const b: number = 20;
  console.log(a, b); // Works fine
}

console.log(a, b); // ReferenceError`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Global Scope</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap text-black dark:text-gray-200">
{`let x: number = 10;

function printX(): void {
  console.log(x);
}

printX();
console.log(x);`}
  </pre>
</div>

 </>

      </>
    ),
  },
  "cpp_functions_recursion.asp": {
    title: "typescript Recursion",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Recursion
</h2>

<p className="leading-relaxed mb-4">
  Recursion ek aisi technique hai jisme ek function khud ko call karta hai. 
  Ye complex problems ko chhote manageable parts me tod deta hai.
</p>

<p className="leading-relaxed mb-4">
  Recursion ko samajhna thoda tricky ho sakta hai, lekin practice se clear ho jaata hai.
</p>

<h3 className="text-xl font-medium mb-3">Example: Sum of Numbers</h3>
<p className="leading-relaxed mb-4">
  Yahaan hum recursion ka use kar rahe hain 1 se 10 tak numbers ka sum nikalne ke liye:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function sum(k: number): number {
  if (k > 0) {
    return k + sum(k - 1);
  } else {
    return 0;
  }
}

let result: number = sum(10);
console.log(result); // 55`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Example Explained:</strong><br />
  Jab <code>sum()</code> call hota hai, to ye <code>k</code> ko add karta hai chhoti values ke sum ke saath. 
  Jab <code>k</code> 0 hota hai, function ruk jaata hai aur 0 return karta hai.
</p>

<ul className="list-disc list-inside mb-4">
  <li>10 + sum(9)</li>
  <li>10 + (9 + sum(8))</li>
  <li>10 + (9 + (8 + sum(7)))</li>
  <li>…</li>
  <li>10 + 9 + 8 + … + 1 + sum(0)</li>
  <li>10 + 9 + 8 + … + 1 + 0</li>
</ul>

<p className="leading-relaxed mb-4">
  Jab base case (<code>k === 0</code>) milta hai, recursion stop ho jaata hai.  
  Agar base condition galat likhi ho, to infinite recursion aur memory crash ho sakta hai.
</p>

<h3 className="text-xl font-medium mb-3">Countdown Example</h3>
<p className="leading-relaxed mb-4">
  Yahaan ek simple recursive countdown function hai:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function countdown(n: number): void {
  if (n > 0) {
    console.log(n);
    countdown(n - 1);
  }
}

countdown(5); // Output: 5 4 3 2 1`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Factorial of a Number</h3>
<p className="leading-relaxed mb-4">
  Factorial find karne ke liye recursion ek common approach hai:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function factorial(n: number): number {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

console.log("Factorial of 5 is", factorial(5)); // Output: 120`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  Recursion powerful hai jab sahi use ho — jaise factorials, Fibonacci series, aur tree traversal me.  
  Lekin hamesha ek proper base case define karna zaruri hai taaki infinite loops na bane.
</p>

      </>
    ),
  },
  "cpp_functions_lambda.asp": {
    title: "typeScript Arrow Functions",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-7">
  TypeScript Arrow Functions
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, <strong>arrow functions</strong> work the same way as in JavaScript, 
  but with the added power of <strong>type safety</strong>. 
  You can specify types for parameters and return values for better error checking.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="leading-relaxed mb-4">
  <code>(parameters: type) =&gt; returnType</code><br />
  If there’s only one expression, you can skip the braces and <code>return</code> keyword.
</p>

<h3 className="text-xl font-medium mb-3">Basic Arrow Function Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`const message = (): void => {
  console.log("Hello TypeScript!");
};

message();`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> Hello TypeScript!</p>

<h3 className="text-xl font-medium mb-3">Arrow Function with Parameters</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(3, 4)); // 7`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> 7</p>

<h3 className="text-xl font-medium mb-3">Passing Arrow Functions to Other Functions</h3>
<p className="leading-relaxed mb-4">
  You can pass an arrow function as an argument — this is a common use case in TypeScript when working with callbacks.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function runTwice(fn: () => void): void {
  fn();
  fn();
}

const greet = (): void => {
  console.log("Hello TypeScript!");
};

runTwice(greet);`}
  </pre>
</div>
<p className="leading-relaxed mb-4">
  <strong>Result:</strong><br />
  Hello TypeScript!<br />
  Hello TypeScript!
</p>

<h3 className="text-xl font-medium mb-3">Using Arrow Functions in Loops</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`for (let i: number = 1; i <= 3; i++) {
  const show = (): void => {
    console.log("Number:", i);
  };
  show();
}`}
  </pre>
</div>
<p className="leading-relaxed mb-4">
  <strong>Result:</strong><br />
  Number: 1<br />
  Number: 2<br />
  Number: 3
</p>

<h3 className="text-xl font-medium mb-3">Using Variables Inside Arrow Functions</h3>
<p className="leading-relaxed mb-4">
  Arrow functions automatically access variables from their outer scope — 
  no need to use capture brackets like in C++.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`let x: number = 10;
const show = (): void => {
  console.log(x);
};

show(); // 10`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> 10</p>

<h3 className="text-xl font-medium mb-3">Example: Changing a Variable</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`let x: number = 10;

const show = (): void => {
  console.log(x);
};

x = 20;

show(); // 20`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> 20</p>

<h3 className="text-xl font-medium mb-3">Arrow Function with Return Types</h3>
<p className="leading-relaxed mb-4">
  You can explicitly define what type a function will return.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`const multiply = (a: number, b: number): number => a * b;

console.log(multiply(4, 5)); // 20`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> 20</p>

<h3 className="text-xl font-medium mb-3">Regular Functions vs Arrow Functions</h3>
<p className="leading-relaxed mb-4">
  Both can perform the same tasks, but they differ in <code>this</code> handling and usage.
</p>

<ul className="list-disc list-inside mb-4">
  <li><strong>Use regular functions</strong> when you need dynamic <code>this</code> context or reusable methods.</li>
  <li><strong>Use arrow functions</strong> for short, inline logic and callbacks.</li>
</ul>

<h4 className="text-lg font-medium mb-2">Examples</h4>
<p className="leading-relaxed mb-2"><strong>Regular Function:</strong></p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function add(a: number, b: number): number {
  return a + b;
}`}
  </pre>
</div>

<p className="leading-relaxed mb-2"><strong>Arrow Function:</strong></p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`const add = (a: number, b: number): number => a + b;`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Note:</strong> In TypeScript, using proper types with arrow functions makes your code safer and easier to debug.
</p>

      </>
    ),
  },
  "cpp_oops.asp": {
    title: "Typecript OOP",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-5">
  What is OOP in TypeScript?
</h2>

<p className="leading-relaxed mb-4">
  OOP stands for <strong>Object-Oriented Programming</strong>. In <strong>TypeScript</strong>, this paradigm revolves around creating 
  <strong> objects </strong> — entities that bundle both data (properties) and behavior (methods) together in one structure.
</p>

<h3 className="text-xl font-medium mb-3">Advantages of OOP in TypeScript</h3>
<p className="leading-relaxed mb-4">
  Using OOP in TypeScript provides several important benefits:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Type Safety:</strong> Ensures properties and methods are used correctly, reducing runtime errors.
  </li>
  <li>
    <strong>Clear Structure:</strong> Makes large projects easier to organize using classes and interfaces.
  </li>
  <li>
    <strong>Reusability:</strong> Inheritance and composition allow code reuse and easier maintenance.
  </li>
  <li>
    <strong>Scalability:</strong> Helps manage complex applications with cleaner, modular code.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Classes and Objects in TypeScript</h3>
<p className="leading-relaxed mb-4">
  TypeScript adds strong typing to JavaScript’s OOP features. Classes define how an object looks and behaves.
</p>

<table className="w-full text-left border border-gray-300 mb-6">
  <thead>
    <tr className="bg-purple-100">
      <th className="p-2 border">Concept</th>
      <th className="p-2 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border font-semibold">Class</td>
      <td className="p-2 border">
        A <strong>class</strong> is a blueprint for creating objects. It defines properties (variables) and methods (functions) 
        that belong to the object.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Object</td>
      <td className="p-2 border">
        An <strong>object</strong> is an instance of a class. It can access all the attributes and methods defined in its class.
      </td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-medium mb-3">Procedural vs. Object-Oriented Programming</h3>
<p className="leading-relaxed mb-4">
  The main difference lies in how you structure your code:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Procedural Programming:</strong> Focuses on writing functions that operate on data stored separately.
  </li>
  <li>
    <strong>Object-Oriented Programming:</strong> Organizes code around <strong>objects</strong>, combining both data and behavior.
  </li>
</ul>

<p className="leading-relaxed mb-4">
  In the next section, you'll learn how to define classes, create objects, and use constructors in <strong>TypeScript</strong>.
</p>


      </>
    ),
  },
  "cpp_class_methods.asp": {
    title: "Typescript Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Class Methods
</h2>

<p className="leading-relaxed mb-4">
  <strong>Methods</strong> wo functions hote hain jo ek class ke andar define kiye jaate hain. 
  Ye define karte hain ki object kya kar sakta hai — uske actions aur behaviors.
</p>

<p className="leading-relaxed mb-4">
  TypeScript me methods ko class ke andar define karte waqt aapko parameter aur return types specify karne ka option milta hai.
</p>

<h3 className="text-xl font-medium mb-3">1. Define a Method Inside the Class</h3>
<p className="leading-relaxed mb-4">
  Methods ko class ke andar directly likha jaata hai, aur unhe dot notation (<code>.</code>) se call karte hain.
</p>

<h4 className="text-lg font-medium mb-2">Inside Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  myMethod(): void {
    console.log("Hello TypeScript!"); // Method with explicit return type
  }
}

const myObj = new MyClass();
myObj.myMethod(); // Call the method`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Hello TypeScript!
</p>

<h3 className="text-xl font-medium mb-3">2. Methods with Parameters and Return Types</h3>
<p className="leading-relaxed mb-4">
  TypeScript me aap parameters aur return types define kar sakte ho, jisse code safe aur predictable banta hai.
</p>

<h4 className="text-lg font-medium mb-2">Example with Parameters</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Car {
  speed(maxSpeed: number): number {
    return maxSpeed;
  }
}

const myCar = new Car();
console.log(myCar.speed(220));`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> 220
</p>

<h3 className="text-xl font-medium mb-3">3. Private and Public Methods</h3>
<p className="leading-relaxed mb-4">
  TypeScript me methods ko <code>public</code>, <code>private</code>, ya <code>protected</code> access modifiers ke saath define kar sakte hain.
</p>

<h4 className="text-lg font-medium mb-2">Example with Access Modifiers</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> 500
</p>

<h3 className="text-xl font-medium mb-3">Note</h3>
<p className="leading-relaxed mb-4">
  - <code>public</code> methods har jagah se accessible hote hain (default).<br />
  - <code>private</code> methods sirf class ke andar use ho sakte hain.<br />
  - <code>protected</code> methods class aur uske subclasses ke andar use ho sakte hain.
</p>



      </>
    ),
  },
  "cpp_object.asp": {
    title: "Typescript Classes and Objects",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Classes and Objects
</h2>

<p className="leading-relaxed mb-4">
  TypeScript ek <strong>object-oriented programming language</strong> hai jo JavaScript ka superset hai. 
  Almost sab kuch TypeScript me objects par based hota hai — including arrays, functions, aur classes.  
  Real life example: ek <strong>Car</strong> ek object hai jiske attributes hote hain jaise <strong>color</strong> aur <strong>model</strong>, 
  aur methods jaise <code>start()</code> aur <code>stop()</code>.
</p>

<p className="leading-relaxed mb-4">
  Attributes aur methods ko milkar <strong>class members</strong> kaha jata hai.  
  TypeScript me hum in members ke types bhi define kar sakte hain for better safety aur clarity.
</p>

<p className="leading-relaxed mb-4">
  Ek class ek blueprint hoti hai objects banane ke liye — ye define karti hai object ka structure aur behavior.
</p>

<h3 className="text-xl font-medium mb-3">Create a Class</h3>
<p className="leading-relaxed mb-4">
  TypeScript me class banane ke liye <code>class</code> keyword ka use hota hai. 
  Saath hi aap attributes ke types bhi specify kar sakte ho.
</p>

<h4 className="text-lg font-medium mb-2">Example: MyClass</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  myNum: number;
  myString: string;

  constructor() {
    // Initialize attributes with values
    this.myNum = 15;
    this.myString = "Some text";
  }
}`}
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li><code>class</code> keyword ek class define karta hai jiska naam <code>MyClass</code> hai.</li>
  <li><code>constructor()</code> tab automatically run hota hai jab class ka object create hota hai.</li>
  <li><code>this</code> keyword current object instance ko refer karta hai.</li>
  <li>TypeScript me attributes ke saath type annotations (<code>: number</code>, <code>: string</code>) likhna zaruri hota hai.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create an Object</h3>
<p className="leading-relaxed mb-4">
  TypeScript me objects bhi JavaScript ki tarah hi <code>new</code> keyword se create kiye jaate hain.
</p>

<h4 className="text-lg font-medium mb-2">Example: Create and Use an Object</h4>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Class definition
class MyClass {
  myNum: number;
  myString: string;

  constructor() {
    this.myNum = 15;
    this.myString = "Some text";
  }
}

// Create object and access attributes
const myObj = new MyClass();
console.log(myObj.myNum);
console.log(myObj.myString);`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  15<br />
  Some text
</p>

<h3 className="text-xl font-medium mb-3">Benefits of Using Classes in TypeScript</h3>
<ul className="list-disc list-inside mb-4">
  <li><strong>Type safety:</strong> Compile time pe type errors detect ho jaate hain.</li>
  <li><strong>Better readability:</strong> Class structure clear hota hai.</li>
  <li><strong>OOP features:</strong> Inheritance, Encapsulation, aur Polymorphism ka support.</li>
</ul>

      </>
    ),
  },



  "cpp_constructor.asp": {
    title: "Typescript Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Constructors
</h2>

<p className="leading-relaxed mb-4">
  TypeScript me <strong>constructor</strong> ek special method hota hai jo automatically call hota hai jab kisi class ka object create hota hai.
  Iska main kaam hota hai object ke properties ko initialize karna — aur TypeScript me hum in properties ke types bhi define kar sakte hain.
</p>

<h3 className="text-xl font-medium mb-2">Creating a Constructor</h3>
<p className="leading-relaxed mb-4">
  TypeScript me constructors ko <code>constructor()</code> method ke through banaya jata hai.  
  Ye method automatically execute hota hai jab aap <code>new</code> keyword se class ka object banate ho.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Class with Constructor
class MyClass {
  constructor() {
    console.log("Hello World!");
  }
}

// Creating Object (Constructor gets called automatically)
const myObj = new MyClass();`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-2">Constructor Rules</h3>
<ul className="list-disc list-inside mb-4">
  <li>Constructor ka naam hamesha <code>constructor</code> hi hota hai.</li>
  <li>Ye automatically call hota hai jab object create hota hai.</li>
  <li>Ye properties initialize karne ke liye use hota hai.</li>
  <li>Har class me ek hi constructor allowed hota hai.</li>
</ul>

<h3 className="text-xl font-medium mb-2">Constructor with Parameters</h3>
<p className="leading-relaxed mb-4">
  TypeScript me aap constructor ke parameters ko <strong>type annotations</strong> ke saath likh sakte ho.  
  Isse compile time par type checking hoti hai aur code clean rehta hai.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Class with Parameterized Constructor
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

// Creating objects
const car1 = new Car("BMW", "X5", 1999);
const car2 = new Car("Ford", "Mustang", 1969);

console.log(car1.brand, car1.model, car1.year);
console.log(car2.brand, car2.model, car2.year);`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-2">Using Parameter Properties (Shortcut)</h3>
<p className="leading-relaxed mb-4">
  TypeScript ek shortcut deta hai jise <strong>Parameter Properties</strong> kehte hain — isme aapko manually 
  <code>this.</code> likhne ki zarurat nahi hoti. Aap directly constructor parameters ke saath <code>public</code>, <code>private</code>, ya <code>readonly</code> likh kar properties define kar sakte ho.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
}

const car1 = new Car("BMW", "X5", 1999);
console.log(car1.brand); // BMW`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-2">Static Factory Methods (Alternative to Constructors)</h3>
<p className="leading-relaxed mb-4">
  TypeScript me aap constructor ke alternative ke roop me <strong>static methods</strong> ka use kar sakte ho.  
  Ye methods class ke instance ke bina call kiye ja sakte hain, aur commonly factory functions ke roop me use hote hain.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  // Static factory method
  static fromString(carInfo: string): Car {
    const [brand, model, year] = carInfo.split(",");
    return new Car(brand, model, parseInt(year));
  }
}

const car1 = Car.fromString("BMW,X5,1999");
const car2 = Car.fromString("Ford,Mustang,1969");

console.log(car1.brand, car1.model, car1.year);
console.log(car2.brand, car2.model, car2.year);`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  BMW X5 1999<br />
  Ford Mustang 1969
</p>


      </>
    ),
  },
  "cpp_access_specifiers.asp": {
    title: "typescript Classes",

    content: (
      <>
       
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-blue-200 mt-10">
  TypeScript Access Modifiers
</h2>

<p className="leading-relaxed mb-4">
  In <strong>TypeScript</strong>, access to class members is controlled using the
  keywords <strong>public</strong>, <strong>private</strong>, and <strong>protected</strong>.  
  These modifiers define how and where a property or method can be accessed in your program.
</p>

<h3 className="text-xl font-medium mb-3">Public Members</h3>
<p className="leading-relaxed mb-4">
  By default, all class members in TypeScript are <strong>public</strong>.  
  Public members can be accessed anywhere — inside or outside the class.
</p>

<h4 className="text-lg font-medium mb-2">Example: Public Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  public x: number;

  constructor(x: number) {
    this.x = x;
  }
}

const obj = new MyClass(25);
console.log(obj.x); // Accessible from outside
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Private Members</h3>
<p className="leading-relaxed mb-4">
  Members declared as <code>private</code> are accessible only within the same class.  
  They cannot be accessed from outside or even from subclasses.
</p>

<h4 className="text-lg font-medium mb-2">Example: Private Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  private secret: string = "Hidden Value";

  showSecret(): void {
    console.log("Inside class:", this.secret);
  }
}

const obj = new MyClass();
obj.showSecret(); // ✅ Works
// console.log(obj.secret); // ❌ Error: Property 'secret' is private
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Protected Members</h3>
<p className="leading-relaxed mb-4">
  Members declared as <code>protected</code> are accessible within the same class and its subclasses,  
  but not from outside these classes.
</p>

<h4 className="text-lg font-medium mb-2">Example: Protected Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Parent {
  protected message: string = "I am protected";
}

class Child extends Parent {
  displayMessage(): void {
    console.log("Accessing protected member:", this.message);
  }
}

const obj = new Child();
obj.displayMessage(); // ✅ Works
// console.log(obj.message); // ❌ Error: Property 'message' is protected
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Readonly Members</h3>
<p className="leading-relaxed mb-4">
  TypeScript also provides the <code>readonly</code> modifier,  
  which allows you to define properties that can be assigned only once —  
  either during declaration or inside the constructor.
</p>

<h4 className="text-lg font-medium mb-2">Example: Readonly Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class User {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }

  displayId() {
    console.log("User ID:", this.id);
  }
}

const user = new User(101);
user.displayId(); // ✅ Works
// user.id = 202; // ❌ Error: Cannot assign to 'id' because it is a read-only property
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Default Access</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, if you don’t specify an access modifier,  
  the member is <strong>public</strong> by default.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Analogy</h3>
<ul className="list-disc list-inside mb-4">
  <li><strong>Public:</strong> Like a shop — anyone can enter.</li>
  <li><strong>Protected:</strong> Like a staff room — only employees (subclasses) can enter.</li>
  <li><strong>Private:</strong> Like your locker — only you have the key.</li>
  <li><strong>Readonly:</strong> Like your birthdate — can’t be changed once set.</li>
</ul>


      </>
    ),
  },
  "cpp_encapsulation.asp": {
    title: "Typescript Classes",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-blue-200 mt-10">
  TypeScript Encapsulation
</h2>

<p className="leading-relaxed mb-4">
  <strong>Encapsulation</strong> in <strong>TypeScript</strong> means hiding internal class data and allowing access only through well-defined methods.  
  It ensures better <strong>data protection</strong> and <strong>code maintainability</strong>.  
  Encapsulation is implemented using <code>private</code>, <code>protected</code>, and <code>public</code> access modifiers, along with <strong>getters</strong> and <strong>setters</strong>.
</p>

<p className="leading-relaxed mb-4">
  If you want to safely access or modify private data, you can define public <code>get</code> and <code>set</code> accessors.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Example</h3>
<p className="leading-relaxed mb-4">
  Think of an employee’s salary:
</p>
<ul className="list-disc list-inside mb-4">
  <li>The salary is private — no one can change it directly.</li>
  <li>It can only be updated through official HR methods (setters).</li>
</ul>

<h3 className="text-xl font-medium mb-3">Access Private Members</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you can mark properties as <code>private</code> to restrict access to within the same class.  
  Getters and setters are used to interact with these private members safely.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Employee {
  private _salary: number = 0;

  // Setter method
  set salary(amount: number) {
    if (amount > 0) {
      this._salary = amount;
    } else {
      console.log("Invalid salary amount");
    }
  }

  // Getter method
  get salary(): number {
    return this._salary;
  }
}

const emp = new Employee();
emp.salary = 50000; // ✅ Uses setter
console.log(emp.salary); // ✅ Uses getter
// console.log(emp._salary); // ❌ Error: Property '_salary' is private
`}
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li><code>private _salary</code> — can’t be accessed outside the class.</li>
  <li><code>set salary()</code> — safely modifies the value (with validation).</li>
  <li><code>get salary()</code> — retrieves the value.</li>
  <li>Encapsulation protects data and ensures only valid operations occur.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Why Encapsulation?</h3>
<ul className="list-disc list-inside mb-4">
  <li>Protects data from unauthorized access or modification.</li>
  <li>Makes code modular and maintainable.</li>
  <li>Allows validation and logging through getters/setters.</li>
</ul>

<p className="leading-relaxed mb-4">
  Encapsulation is considered a <strong>core OOP principle</strong> in TypeScript, ensuring code security and cleaner architecture.
</p>

{/* ---------------- POLYMORPHISM ---------------- */}

<h2 className="text-2xl font-medium mb-4 pb-2 border-b border-blue-200 mt-10">
  TypeScript Polymorphism
</h2>

<p className="leading-relaxed mb-4">
  <strong>Polymorphism</strong> means “many forms”. It allows the same method name to perform different actions based on the object calling it.  
  In TypeScript, this is achieved through <strong>method overriding</strong> and <strong>inheritance</strong>.
</p>

<p className="leading-relaxed mb-4">
  For example, a base class <code>Animal</code> can define a method <code>makeSound()</code>,  
  and derived classes like <code>Pig</code>, <code>Dog</code>, and <code>Bird</code> can override it to produce their own sounds.
</p>

<ul className="list-disc list-inside mb-4">
  <li>Pig → wee wee</li>
  <li>Dog → bow wow</li>
  <li>Bird → tweet tweet</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Animal {
  makeSound(): void {
    console.log("The animal makes a sound");
  }
}

class Pig extends Animal {
  makeSound(): void {
    console.log("The pig says: wee wee");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("The dog says: bow wow");
  }
}

class Bird extends Animal {
  makeSound(): void {
    console.log("The bird says: tweet tweet");
  }
}

const animals: Animal[] = [new Animal(), new Pig(), new Dog(), new Bird()];

for (const animal of animals) {
  animal.makeSound();
}

// Output:
// The animal makes a sound
// The pig says: wee wee
// The dog says: bow wow
// The bird says: tweet tweet
`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  This demonstrates <strong>method overriding</strong>.  
  Each subclass defines its own version of <code>makeSound()</code>,  
  and TypeScript determines at runtime which version to execute — a concept known as <strong>runtime polymorphism</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Why Polymorphism?</h3>
<ul className="list-disc list-inside mb-4">
  <li>Improves flexibility and code reusability.</li>
  <li>Allows same method names for different behaviors.</li>
  <li>Encourages clean, maintainable OOP structure.</li>
</ul>

<p className="leading-relaxed mb-4">
  Polymorphism makes TypeScript classes more extensible — allowing easy addition of new features without altering existing code.
</p>


      </>
    ),
  },




  "cpp_data_structures.asp": {
    title: "Typescript Data Structures ",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Data Structures
</h2>

<p className="leading-relaxed mb-4">
  In typeScript, data structures help store and organize data efficiently. 
  typeScript provides several built-in types like <code>Array</code>, <code>Object</code>, <code>Set</code>, <code>Map</code>, and <code>Queue</code>, 
  which make handling data flexible and dynamic.
</p>

<p className="leading-relaxed mb-4">
  These structures allow developers to manage data — add, remove, or update elements — 
  easily without worrying about static memory sizes.
</p>

<h3 className="text-xl font-medium mb-3">Common Data Structures in typeScript</h3>

<table className="w-full text-left border border-gray-300 mb-6">
  <thead>
    <tr className="bg-yellow-100">
      <th className="p-2 border">Data Structure</th>
      <th className="p-2 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border font-semibold">Array</td>
      <td className="p-2 border">
        A dynamic list that can store multiple values of different data types.
        Supports operations like push, pop, shift, unshift, and slice.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Object</td>
      <td className="p-2 border">
        Stores data as key-value pairs. Keys are strings or symbols.
        Similar to a dictionary in Python.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Set</td>
      <td className="p-2 border">
        A collection of unique values. Automatically removes duplicates.
        Useful for filtering unique items.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Map</td>
      <td className="p-2 border">
        Stores key-value pairs, where keys can be of any type (not just strings).
        Maintains insertion order.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Queue</td>
      <td className="p-2 border">
        Can be implemented using arrays. Follows FIFO (First In, First Out) principle.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Stack</td>
      <td className="p-2 border">
        Also implemented using arrays. Follows LIFO (Last In, First Out) principle.
      </td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-medium mb-3">Example: Using Arrays</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Create an array of cars{"\n"}
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n\n"}
    // Print all elements{"\n"}
    cars.forEach(car =&gt; console.log(car));
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Object</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Create an object of student marks{"\n"}
    const marks = {"{"}"Ayush": 90, "Riya": 85, "Karan": 95{"}"};{"\n\n"}
    // Access values using keys{"\n"}
    console.log(marks["Ayush"]); // Output: 90
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Set</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Create a Set{"\n"}
    const numbers = new Set([1, 2, 3, 4, 2, 3]);{"\n"}
    console.log(numbers); // Output: Set(4) {"{"}1, 2, 3, 4{"}"}{"\n\n"}
    // Add and remove elements{"\n"}
    numbers.add(5);{"\n"}
    numbers.delete(2);
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Map</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Create a Map{"\n"}
    const userAge = new Map();{"\n"}
    userAge.set("Ayush", 22);{"\n"}
    userAge.set("Riya", 20);{"\n"}
    console.log(userAge.get("Ayush")); // Output: 22
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Queue (FIFO)</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Implementing a Queue using Array{"\n"}
    const queue = [];{"\n"}
    queue.push("A"); // Add to end{"\n"}
    queue.push("B");{"\n"}
    console.log(queue.shift()); // Remove from front{"\n"}
    console.log(queue); // Remaining queue
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Stack (LIFO)</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Implementing a Stack using Array{"\n"}
    const stack = [];{"\n"}
    stack.push("X");{"\n"}
    stack.push("Y");{"\n"}
    console.log(stack.pop()); // Output: Y{"\n"}
    console.log(stack); // Remaining stack
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Key Concepts</h3>
<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>
    <strong>Mutable vs Immutable</strong> — Arrays, Sets, Maps, and Objects are mutable by default.
  </li>
  <li>
    <strong>Dynamic Typing</strong> — Typescript variables can hold any data type, even inside arrays or objects.
  </li>
  <li>
    <strong>Built-in Methods</strong> — Use methods like <code>push()</code>, <code>pop()</code>, <code>set()</code>, <code>delete()</code>, and <code>forEach()</code> 
    for easy data manipulation.
  </li>
</ul>

<p className="leading-relaxed mb-4">
  In typeScript, data structures are flexible and powerful — perfect for handling real-world applications and algorithms alike.
</p>


      </>
    ),
  },
  "cpp_vectors.asp": {
    title: "typescript arrays",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Arrays
</h2>

<p className="leading-relaxed mb-4">
  An array in TypeScript is a dynamic list — it can store multiple items and can grow or shrink as needed.
</p>

<p className="leading-relaxed mb-4">
  Arrays are one of the most commonly used data structures in TypeScript. 
  They can hold elements of any data type — numbers, strings, objects, or even other arrays.
</p>

<p className="leading-relaxed mb-4">
  Arrays are built-in in TypeScript — no need to import or include anything.
</p>

<h3 className="text-xl font-medium mb-3">Create an Array</h3>
<p className="leading-relaxed mb-4">
  You can create an array by placing elements inside square brackets <code>[]</code>, separated by commas:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    // Create an array of cars{"\n"}
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Accessing Array Elements</h3>
<p className="leading-relaxed mb-4">
  You can access array elements using index numbers inside square brackets <code>[]</code>. 
  Arrays are zero-indexed, meaning <code>[0]</code> is the first element.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n\n"}
    console.log(cars[0]); // Outputs: Volvo{"\n"}
    console.log(cars[1]); // Outputs: BMW
  </pre>
</div>

<p className="leading-relaxed mb-4">
  You can also use the <code>length</code> property to find the number of elements in an array, 
  or use negative indexing logic with <code>at()</code> method in modern TypeScript.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n\n"}
    console.log(cars.at(-1)); // Outputs: Mazda{"\n"}
    console.log(cars.length); // Outputs: 4
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Modify Array Elements</h3>
<p className="leading-relaxed mb-4">
  You can modify elements directly using their index position.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n"}
    cars[0] = "Opel";{"\n"}
    console.log(cars); // ['Opel', 'BMW', 'Ford', 'Mazda']
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements</h3>
<p className="leading-relaxed mb-4">
  Use <code>push()</code> to add elements to the end, or <code>unshift()</code> to add at the beginning.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford"];{"\n"}
    cars.push("Tesla");{"\n"}
    cars.unshift("Toyota");{"\n"}
    console.log(cars); // ['Toyota', 'Volvo', 'BMW', 'Ford', 'Tesla']
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements</h3>
<p className="leading-relaxed mb-4">
  Use <code>pop()</code> to remove from the end, <code>shift()</code> to remove from the start, 
  or <code>splice()</code> to remove at a specific index.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n"}
    cars.pop(); // Removes last element{"\n"}
    cars.shift(); // Removes first element{"\n"}
    console.log(cars);
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Check if Array is Empty</h3>
<p className="leading-relaxed mb-4">
  You can check if an array is empty by comparing its <code>length</code> property.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = [];{"\n"}
    if (cars.length === 0) {"{"}{"\n"}
    &nbsp;&nbsp;console.log("Array is empty");{"\n"}
    {"}"}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through an Array</h3>
<p className="leading-relaxed mb-4">
  You can loop through arrays using <code>for</code>, <code>forEach()</code>, or <code>for...of</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const cars = ["Volvo", "BMW", "Ford", "Mazda"];{"\n\n"}
    for (let car of cars) {"{"}{"\n"}
    &nbsp;&nbsp;console.log(car);{"\n"}
    {"}"}{"\n\n"}
    cars.forEach((car, index) =&gt; {"{"}{"\n"}
    &nbsp;&nbsp;console.log(index, car);{"\n"}
    {"}"});
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Array Mapping</h3>
<p className="leading-relaxed mb-4">
  JavaScript supports concise ways to create or transform arrays using <code>map()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    const numbers = [0, 1, 2, 3, 4];{"\n"}
    const squares = numbers.map(num =&gt; num * num);{"\n"}
    console.log(squares); // [0, 1, 4, 9, 16]
  </pre>
</div>

<p className="leading-relaxed mb-4">
  Arrays are one of the most powerful and frequently used data structures in JavaScript, 
  perfect for storing, iterating, and manipulating collections of data dynamically.
</p>


      </>
    ),
  },


  "cpp_stack.asp": {
    title: " Stack",

    content: (
      <>
     <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Stack
</h2>

<p className="leading-relaxed mb-4">
  A <strong>stack</strong> in JavaScript also follows the <strong>LIFO</strong> (Last In, First Out) principle —
  the last element added is the first one removed. It works just like stacking plates 🍽️.
</p>

<p className="leading-relaxed mb-4">
  In JavaScript, stacks are usually implemented using <code>Array</code>.
  The <code>push()</code> and <code>pop()</code> methods handle insertion and removal easily.
</p>

<h3 className="text-xl font-medium mb-3">Create a Stack</h3>
<p className="leading-relaxed mb-2">
  You can create a stack by initializing an empty array.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars = []; // Empty stack
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (push)</h3>
<p className="leading-relaxed mb-2">
  Use the <code>push()</code> method to add elements to the top of the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.push("Volvo"); <br />
    cars.push("BMW"); <br />
    cars.push("Ford"); <br />
    cars.push("Mazda"); <br /><br />
    // Stack now looks like: <br />
    // ['Volvo', 'BMW', 'Ford', 'Mazda']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Top Element</h3>
<p className="leading-relaxed mb-2">
  Use <code>cars[cars.length - 1]</code> to view the top element without removing it.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(cars[cars.length - 1]); // Outputs 'Mazda'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Top Element</h3>
<p className="leading-relaxed mb-2">
  You can directly modify the top element using index <code>cars.length - 1</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars[cars.length - 1] = "Tesla"; <br />
    console.log(cars[cars.length - 1]); // Now outputs 'Tesla'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (pop)</h3>
<p className="leading-relaxed mb-2">
  Use <code>pop()</code> to remove the top element from the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.pop(); <br />
    console.log(cars[cars.length - 1]); // Now top element is 'Ford'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Stack Size</h3>
<p className="leading-relaxed mb-2">
  Use <code>length</code> property to get the number of elements in the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(cars.length); // Outputs 3
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Stack is Empty</h3>
<p className="leading-relaxed mb-2">
  Use a simple <code>if</code> condition to check if the stack is empty.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    if (cars.length === 0) &#123; <br />
    &nbsp;&nbsp;console.log("Stack is empty"); <br />
    &#125; else &#123; <br />
    &nbsp;&nbsp;console.log("Stack is not empty"); <br />
    &#125;
  </p>
</div>

<p className="leading-relaxed mb-4">
  JavaScript’s <code>Array</code> makes implementing a stack super easy and efficient 💪.
  For more control or async-safe stacks, you can use custom classes or external libraries.
</p>

      </>
    ),
  },
  "cpp_queue.asp": {
    title: "Typescript Queue",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  TypeScript Queue
</h2>

<p className="leading-relaxed mb-4">
  A <strong>Queue</strong> in <strong>TypeScript</strong> is a data structure that follows the{" "}
  <strong>FIFO</strong> (First In, First Out) principle.  
  The first element added is the first one removed — just like people standing in a line 🧍‍♂️🧍‍♀️.
</p>

<p className="leading-relaxed mb-4">
  TypeScript doesn’t have a built-in <code>Queue</code> class, but we can easily implement one using{" "}
  <code>Array&lt;T&gt;</code> and its <code>push()</code> and <code>shift()</code> methods.
</p>

<h3 className="text-xl font-medium mb-3">Create a Queue</h3>
<p className="leading-relaxed mb-2">
  You can initialize a queue using an empty array or with some starting elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    let queue: string[] = []; <br />
    // or <br />
    let queue: string[] = ["Volvo", "BMW", "Ford"]; <br /><br />
    console.log(queue); // ['Volvo', 'BMW', 'Ford']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (enqueue)</h3>
<p className="leading-relaxed mb-2">
  Use <code>push()</code> to add elements to the back of the queue.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue.push("Mazda"); <br />
    queue.push("Tesla"); <br /><br />
    console.log(queue); // ['Volvo', 'BMW', 'Ford', 'Mazda', 'Tesla']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Front and Back Elements</h3>
<p className="leading-relaxed mb-2">
  Access the first and last elements using array indexing.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(queue[0]); // Front element → 'Volvo' <br />
    console.log(queue[queue.length - 1]); // Back element → 'Tesla'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Front and Back Elements</h3>
<p className="leading-relaxed mb-2">
  Modify elements directly using their index positions.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue[0] = "Kia"; <br />
    queue[queue.length - 1] = "VW"; <br /><br />
    console.log(queue); // ['Kia', 'BMW', 'Ford', 'Mazda', 'VW']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (dequeue)</h3>
<p className="leading-relaxed mb-2">
  Use <code>shift()</code> to remove the first element from the queue.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue.shift(); <br />
    console.log(queue); // ['BMW', 'Ford', 'Mazda', 'VW']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Queue Size</h3>
<p className="leading-relaxed mb-2">
  Use the <code>length</code> property to get the current number of elements in the queue.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(queue.length); // 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Queue is Empty</h3>
<p className="leading-relaxed mb-2">
  Use a simple condition to check if the queue is empty.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    if (queue.length === 0) &#123; <br />
    &nbsp;&nbsp;console.log("Queue is empty"); <br />
    &#125; else &#123; <br />
    &nbsp;&nbsp;console.log("Queue is not empty"); <br />
    &#125;
  </p>
</div>

<p className="leading-relaxed mb-4">
  TypeScript queues are easy to implement using arrays.  
  For more efficiency in large-scale apps, you can create a custom <code>Queue&lt;T&gt;</code> class or 
  use libraries like <code>datastructures-js</code>.
</p>


      </>
    ),
  },

  "cpp_dequeue.asp": {
    title: "Typescript Dequeue",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Deque (Double-Ended Queue)
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, there’s no direct <strong>deque</strong> class like Python’s <code>collections.deque</code>.  
  But you can easily create the same behavior using an <code>Array</code> — since it supports adding and removing elements 
  from both ends.
</p>

<h3 className="text-xl font-medium mb-3">Create a Deque</h3>
<p className="leading-relaxed mb-2">
  Create a deque using an empty array <code>[]</code> or with predefined elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let cars = []; <br />
    // or <br />
    let cars = ["Volvo", "BMW", "Ford", "Mazda"]; <br /><br />
    for (let car of cars) &#123; <br />
    &nbsp;&nbsp;console.log(car); <br />
    &#125;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Deque Elements</h3>
<p className="leading-relaxed mb-2">
  You can access elements using index <code>[]</code>, or get the first and last elements directly.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(cars[0]);   // First element <br />
    console.log(cars[1]);   // Second element <br />
    console.log(cars[cars.length - 1]);  // Last element
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Deque Elements</h3>
<p className="leading-relaxed mb-2">
  Modify elements directly using their index.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars[0] = "Opel"; <br />
    console.log(cars[0]); // Outputs "Opel"
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (push, unshift)</h3>
<p className="leading-relaxed mb-2">
  Use <code>push()</code> to add to the end and <code>unshift()</code> to add to the front.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.unshift("Tesla");   // Add to front <br />
    cars.push("VW");         // Add to back <br /><br />
    console.log(cars); // ['Tesla', 'Opel', 'BMW', 'Ford', 'Mazda', 'VW']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (shift, pop)</h3>
<p className="leading-relaxed mb-2">
  Use <code>shift()</code> to remove from front and <code>pop()</code> to remove from back.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.shift(); // Remove first element <br />
    cars.pop();   // Remove last element <br /><br />
    console.log(cars);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Deque Size (length)</h3>
<p className="leading-relaxed mb-2">
  Use <code>length</code> property to get the number of elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(cars.length); // Prints number of elements
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Deque is Empty</h3>
<p className="leading-relaxed mb-2">
  Check if the deque (array) is empty using a simple condition.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    if (cars.length === 0) &#123; <br />
    &nbsp;&nbsp;console.log("Deque is empty"); <br />
    &#125; else &#123; <br />
    &nbsp;&nbsp;console.log("Deque is not empty"); <br />
    &#125;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a Deque</h3>
<p className="leading-relaxed mb-2">
  You can iterate through the deque using <code>for</code> or <code>for...of</code> loop.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    // Traditional for loop <br />
    for (let i = 0; i &lt; cars.length; i++) &#123; <br />
    &nbsp;&nbsp;console.log(cars[i]); <br />
    &#125; <br /><br />
    // For-of loop <br />
    for (let car of cars) &#123; <br />
    &nbsp;&nbsp;console.log(car); <br />
    &#125;
  </p>
</div>

<p className="leading-relaxed mb-4">
  Arrays in JavaScript can act as both <strong>queues</strong> and <strong>stacks</strong>.  
  You can perform <code>O(1)</code> operations on both ends using <code>push/pop</code> and <code>unshift/shift</code> —  
  just like Python’s <code>deque</code>.
</p>


      </>
    ),
  },

  "cpp_sets.asp": {
    title: " Set",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Set
</h2>

<p className="leading-relaxed mb-4">
  A <strong>Set</strong> in TypeScript stores <strong>unique</strong> values of any type — whether primitive values or object references.  
  Like Python sets, they do not allow duplicates and have no fixed order.
</p>

<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>Elements are <strong>unordered</strong> (no fixed index).</li>
  <li>Elements are <strong>unique</strong>; duplicates are ignored automatically.</li>
  <li>Sets are <strong>mutable</strong> (you can add or remove items).</li>
  <li>Elements cannot be accessed by index (no slicing or indexing).</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create a Set</h3>
<p className="leading-relaxed mb-2">
  You can create a set using the <code>Set()</code> constructor, optionally passing an array of initial values.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let cars = new Set(["Volvo", "BMW", "Ford", "Mazda"]); <br />
    console.log(cars);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Unique Elements</h3>
<p className="leading-relaxed mb-2">
  Duplicate values are ignored automatically in a TypeScript Set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let cars = new Set(["Volvo", "BMW", "Ford", "BMW", "Mazda"]); <br />
    console.log(cars); // Set(4)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (.add)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.add()</code> to insert new elements into the set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.add("Tesla"); <br />
    cars.add("Audi"); <br />
    console.log(cars);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Multiple Elements</h3>
<p className="leading-relaxed mb-2">
  TypeScript sets don’t have an <code>update()</code> method, but you can add multiple items using a loop or array iteration.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    ["Toyota", "VW", "Kia"].forEach(item =&gt; cars.add(item)); <br />
    console.log(cars);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (.delete / .clear)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.delete()</code> to remove a specific element.  
  Use <code>.clear()</code> to empty the entire set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.delete("BMW"); // Remove specific element <br />
    cars.clear(); // Remove all elements <br />
    console.log(cars);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Set Size (.size)</h3>
<p className="leading-relaxed mb-2">
  Use the <code>.size</code> property to get the number of elements in a set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(cars.size); // Prints number of elements
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Set is Empty</h3>
<p className="leading-relaxed mb-2">
  You can check if a set is empty using its <code>.size</code> property.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    if (cars.size === 0) &#123; <br />
    &nbsp;&nbsp;console.log("Set is empty"); <br />
    &#125; else &#123; <br />
    &nbsp;&nbsp;console.log("Set is not empty"); <br />
    &#125;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a Set</h3>
<p className="leading-relaxed mb-2">
  You can iterate through all elements using <code>for...of</code> or <code>forEach()</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for (let car of cars) &#123; <br />
    &nbsp;&nbsp;console.log(car); <br />
    &#125; <br /><br />
    // or <br />
    cars.forEach(car =&gt; console.log(car));
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Set Operations (Union, Intersection, Difference)</h3>
<p className="leading-relaxed mb-2">
  TypeScript Sets don’t have built-in union/intersection methods,  
  but you can achieve them easily using array methods and the <code>Set</code> constructor.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const set1 = new Set(["apple", "banana", "cherry"]); <br />
    const set2 = new Set(["banana", "cherry", "mango"]); <br /><br />
    
    // Union <br />
    const union = new Set([...set1, ...set2]); <br />
    console.log(union); <br /><br />
    
    // Intersection <br />
    const intersection = new Set([...set1].filter(item =&gt; set2.has(item))); <br />
    console.log(intersection); <br /><br />
    
    // Difference <br />
    const difference = new Set([...set1].filter(item =&gt; !set2.has(item))); <br />
    console.log(difference);
  </p>
</div>

<p className="leading-relaxed mb-4">
  TypeScript <code>Set</code> is powerful for handling unique data, removing duplicates,  
  and performing simple mathematical set operations efficiently.
</p>


      </>
    ),
  },
  

  "cpp_iterators.asp": {
    title: "Typescript Iterator",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Iterators
</h2>

<p className="leading-relaxed mb-4">
  <strong>Iterators</strong> in <strong>TypeScript</strong> are special objects that allow you to{" "}
  <strong>loop and access</strong> elements one by one from collections like arrays, sets, or maps.  
  Iteration means going through items step by step.
</p>

<h3 className="text-xl font-medium mb-3">Basic Iterator Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda"];

const iterator: Iterator<string> = cars[Symbol.iterator]();

console.log(iterator.next().value); // Volvo
console.log(iterator.next().value); // BMW
console.log(iterator.next().value); // Ford
console.log(iterator.next().value); // Mazda`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li><code>Symbol.iterator</code> returns an iterator object for the array.</li>
  <li><code>next()</code> returns an object with <code>value</code> and <code>done</code> properties.</li>
  <li>When <code>done</code> is true, iteration is complete.</li>
</ul>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Looping Through Iterables
</h2>

<p className="leading-relaxed mb-4">
  You can loop through any iterable (like an array or string) using a{" "}
  <code>for...of</code> loop:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda"];

for (const car of cars) {
  console.log(car);
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Manual Iteration with while Loop</h3>
<p className="leading-relaxed mb-4">
  You can also manually iterate using <code>next()</code> and a{" "}
  <code>while</code> loop:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda"];
const iterator: Iterator<string> = cars[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Creating a Custom Iterator</h3>
<p className="leading-relaxed mb-4">
  You can define your own iterator by implementing the{" "}
  <code>Symbol.iterator</code> method in an object.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const count = {
  start: 1,
  end: 5,
  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    const end = this.end;
    return {
      next(): IteratorResult<number> {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const num of count) {
  console.log(num);
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Reverse Iteration</h3>
<p className="leading-relaxed mb-4">
  Use <code>Array.prototype.reverse()</code> or a backward{" "}
  <code>for</code> loop for reverse iteration:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars: string[] = ["Volvo", "BMW", "Ford", "Mazda"];

for (let i = cars.length - 1; i >= 0; i--) {
  console.log(cars[i]); // Mazda, Ford, BMW, Volvo
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Removing Elements While Iterating</h3>
<p className="leading-relaxed mb-4">
  When modifying an array while looping, make a copy first using{" "}
  <code>slice()</code> to avoid skipping elements.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`let cars: string[] = ["Volvo", "BMW", "Ford", "Mazda"];

for (const car of cars.slice()) {
  if (car === "BMW") {
    cars.splice(cars.indexOf(car), 1);
  }
}

console.log(cars); // ['Volvo', 'Ford', 'Mazda']`}
  </pre>
</div>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Iterators in Built-in Functions
</h2>

<p className="leading-relaxed mb-4">
  Many <strong>TypeScript</strong> and JavaScript features use iterators internally — like{" "}
  <code>map()</code>, <code>filter()</code>, and <code>for...of</code>.  
  These methods don’t store all values; they <strong>generate</strong> them as needed.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const nums: number[] = [1, 2, 3, 4, 5];
const squares: number[] = nums.map((n: number) => n * n);

for (const s of squares) {
  console.log(s); // 1, 4, 9, 16, 25
}`}
  </pre>
</div>

      </>
    ),
  },


};


