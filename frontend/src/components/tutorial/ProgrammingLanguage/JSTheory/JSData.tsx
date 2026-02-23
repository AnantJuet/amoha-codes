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
  { label: "Javascript home", href: "cpp_home.asp" },
  { label: "Javascript Intro", href: "cpp_intro.asp" },
  { label: "javascript Get Started", href: "cpp_get_started.asp" },
  {
    label: "javascript Syntax",
    href: "cpp_syntax.asp",
    isHeader: true,
    children: [
      { label: "javascript Syntax", href: "cpp_syntax.asp" },
      { label: "javascript Statements", href: "cpp_statements.asp" },
    ]
  },
  {
    label: "javascript Output",
    href: "cpp_output.asp",
    isHeader: true,
    children: [

      { label: "Print Text", href: "cpp_output.asp" },
      { label: "Print Numbers", href: "cpp_output_numbers.asp" },
      { label: "New Lines", href: "cpp_new_lines.asp" },
    ]
  },
  { label: "javascript Comments", href: "cpp_comments.asp" },
  {
    label: "javascript Variables",
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
  { label: "javascript User Input", href: "cpp_user_input.asp" },
  {
    label: "javascript  Data Types",
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
    label: "javascript Operators",
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
    label: "javascript Strings",
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
  { label: "javascript Math", href: "cpp_math.asp" },
  {
    label: "javascript If..Else",
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
    label: "javascript While loop",
    href: "cpp_while.asp",
    isHeader: true,
    children: [
      { label: "While", href: "cpp_while.asp" },
      { label: "Do/While", href: "cpp_do_while_loop.asp" },

    ]
  },
  {
    label: "javascript For loop",
    href: "cpp_For_loop.asp",
    isHeader: true,
    children: [
      { label: "For Loop", href: "cpp_For_loop.asp" },
      { label: "Nested Loop", href: "cpp_nested_loop.asp" },
      { label: "The Foreach Loop", href: "cpp_for_each_loop.asp" },

    ]
  },

  { label: "javascript Break/Continue", href: "cpp_break_continue.asp" },
  {
    label: "javascript Arrays",
    href: "cpp_arrays.asp",
    isHeader: true,
    children: [
      { label: "Array", href: "cpp_arrays.asp" },
      { label: "Array and Loop", href: "cpp_arrays_loops.asp" },

    ]
  },


  {
    label: "javascript Functions",
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
    label: "javascript Classes",
    href: "cpp_oops.asp",
    isHeader: true,
    children: [
      { label: "javascript OOP", href: "cpp_oops.asp" },
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
    label: "javascript Data Structures",
    href: "cpp_data_structures.asp",
    isHeader: true,
    children: [
      { label: "javascript Data Structures ", href: "cpp_data_structures.asp" },
      
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
    title: "javascript tutorial",

    content: (
      <>
        {/* Overview */}
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          javascript Tutorial
        </h2>

        <p className=" leading-relaxed mb-4 ">
          <strong>javascript</strong> is a popular programming language. It is widely used in web development and is one of the most used languages in <strong> frontend</strong>.
        </p>

       

        {/* Example Code */}
       {/* Example Code */}
       <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">// JavaScript program to print Hello World</span>
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
    title: "javascript Introduction",
    // subtitle: "What is javascript?",
    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  What Is JavaScript?
</h2>

<p className="leading-relaxed mb-4">
  JavaScript is a versatile programming language used for:
  <br />
  - Web development (both frontend and backend with Node.js),
  <br />
  - Mobile app development,
  <br />
  - Game development,
  <br />
  - Building dynamic and interactive user interfaces.
</p>

<p className="leading-relaxed mb-4">
  JavaScript was originally created by <strong>Brendan Eich</strong> in 1995 while working at <strong>Netscape</strong>. It was designed to make web pages more interactive and dynamic, unlike the static pages created using only 
  <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline"> HTML </a> 
  and 
  <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline"> CSS</a>.
</p>

<p className="leading-relaxed mb-8">
  JavaScript allows developers to manipulate the DOM, handle events, and interact with APIs, giving them complete control over the user experience on web pages.
</p>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Why Use JavaScript?
</h2>

<ul className="list-disc list-inside space-y-2 ml-4">
  <li>It’s one of the most widely used programming languages in the world.</li>
  <li>It runs directly in the browser without needing additional setup.</li>
  <li>It’s used for full-stack development (Frontend + Backend with Node.js).</li>
  <li>It has a massive ecosystem — frameworks like React, Angular, and Vue.</li>
  <li>It powers modern web apps, mobile apps, and even desktop apps (via Electron).</li>
</ul>

      </>
    ),
  },
  "cpp_get_started.asp": {
    title: "javascript Getting Started",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Get Started With JavaScript
</h2>

<p className="leading-relaxed mb-4">
  You can try JavaScript without installing anything!  
  Our Online JavaScript Editor runs directly in your browser and shows both the code and the result instantly:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-100">
    <span className="text-blue-600 dark:text-blue-400">// JavaScript program to print Hello World</span><br />
    <span className="text-green-600 dark:text-green-400">console</span>
    <span className="text-gray-100">.</span>
    <span className="text-green-600 dark:text-green-400">log</span>
    <span className="text-gray-100">(</span>
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>
    <span className="text-gray-100">);</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Install JavaScript</h3>
<p className="leading-relaxed mb-4">
  JavaScript runs directly inside web browsers like Chrome, Firefox, or Edge — so you don’t need a compiler.  
  But if you want to run JavaScript outside a browser, you’ll need:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>A text editor (like VS Code or Sublime Text) to write your JS code.</li>
  <li>Node.js — a runtime that lets you execute JavaScript on your computer.</li>
</ul>

<p className="leading-relaxed mb-4">
  You can download Node.js from{" "}
  <a href="https://nodejs.org" className="text-blue-600 dark:text-blue-400 underline">
    https://nodejs.org
  </a>.
</p>

<h3 className="text-xl font-medium mb-3">Install JavaScript IDE</h3>
<p className="leading-relaxed mb-4">
  An <strong className="font-semibold">IDE (Integrated Development Environment)</strong> helps you write and debug code easily.  
  Popular choices for JavaScript include <strong>VS Code</strong>, <strong>WebStorm</strong>, and <strong>Replit</strong> (online IDE).
</p>
<p className="leading-relaxed mb-4">
  We recommend using <strong>VS Code</strong> — it’s free, lightweight, and built specifically for modern web development.
</p>
<p className="leading-relaxed mb-4">
  Download it from{" "}
  <a href="https://code.visualstudio.com/" className="text-blue-600 dark:text-blue-400 underline">
    https://code.visualstudio.com/
  </a>.
</p>

<h3 className="text-xl font-medium mb-3">JavaScript Quickstart</h3>
<p className="leading-relaxed mb-4">
  Let’s create our first JavaScript file!  
  Open your text editor, write the following code, and save the file as <code>myfirstprogram.js</code>:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">// JavaScript program to print Hello World</span><br /><br />
    <span className="text-green-600 dark:text-green-400">console</span>
    <span className="text-gray-100">.</span>
    <span className="text-green-600 dark:text-green-400">log</span>
    <span className="text-gray-100">(</span>
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>
    <span className="text-gray-100">);</span>
  </p>
</div>


      </>
    ),
  },


  // --- Syntax (New Content) ---
  "cpp_syntax.asp": {
    title: "javascript Syntax",


    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Syntax
</h2>

<p className="leading-relaxed mb-4">
  Let's break down the following code to understand it better:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">console</span>.
    <span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Line 1:</strong> The <span className="font-mono">console.log()</span> function is used to print output to the browser console. 
  Anything inside the parentheses and quotes will be displayed.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Note:</strong> Unlike Python, JavaScript code usually runs inside a web browser or Node.js runtime environment. 
  You don’t need a main function — the code executes line by line.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>White Space:</strong> JavaScript ignores extra spaces and indentation.  
  Indentation is just for readability, not functionality.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Semicolons:</strong> You can use semicolons (<span className="font-mono">;</span>) to end statements, 
  but modern JavaScript (ES6+) can automatically handle them if you forget.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Curly Braces:</strong> JavaScript uses <span className="font-mono">{'{'}</span> and <span className="font-mono">{'}'}</span> 
  to define blocks of code like functions, loops, or conditionals.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Example with Function:</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">function</span> main() {'{'}<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.
    <span className="text-green-600 dark:text-green-400">log</span>(
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>);<br />
    {'}'}<br /><br />
    <span className="text-blue-600 dark:text-blue-400">main</span>();
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Explanation:</strong>  
  <ul className="list-disc ml-6">
    <li><span className="font-mono">function</span> is used to define a function.</li>
    <li>Curly braces <span className="font-mono">{'{}'}</span> define the scope of the function.</li>
    <li>The <span className="font-mono">main()</span> function is called to execute the code.</li>
  </ul>
</p>

<p className="leading-relaxed mb-4">
  So, in JavaScript, the same “Hello World” program is simple, structured, and runs instantly in your browser or Node.js.
</p>


      </>
    ),
  },
  // --- Statements (New Content) ---
  "cpp_statements.asp": {
    title: "javascript Syntax",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Statements
</h2>

<p className="leading-relaxed mb-4">
  A <strong className="font-semibold">computer program</strong> is a list of "instructions" to be executed by a computer.  
  In JavaScript, these programming instructions are called <strong className="font-semibold">statements</strong>.
</p>

<p className="leading-relaxed mb-4">
  The following statement instructs the browser (or console) to print the text <strong>"Hello World"</strong>:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Ends with a semicolon in JavaScript</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  Unlike Python, JavaScript statements usually end with a <strong>semicolon (;)</strong>.  
  It’s optional in many cases, but adding it helps avoid bugs and follows good coding practices.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)
    <br />
    <span className="text-red-500 dark:text-red-400">// Might cause issues if followed by another statement immediately</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Multiple Statements</h3>
<p className="leading-relaxed mb-4">
  Most JavaScript programs contain multiple statements.  
  The statements are executed one by one, in the same order as they appear:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">"Have a good day!"</span>);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className="font-semibold">Explanation:</strong><br />
  The first statement runs first (prints "Hello World!" to the console).  
  Then the second statement executes (prints "Have a good day!").  
  JavaScript runs statements sequentially, from top to bottom.
</p>

      </>
    ),
  },


  // --- Output (Print Text) ---
  "cpp_output.asp": {
    title: "javascript Output",

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
    <span className="text-red-600 dark:text-red-400">function</span> main()
    {" {"}
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
    title: "javascript Output",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  javascript Print Numbers
</h2>

<p className="leading-relaxed mb-4">
  You can use the <span className="font-mono">console.log()</span> function to print numbers. 
  <strong className="font-semibold">Unlike text, numbers are NOT put inside quotes.</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">// Print a number</span><br /><br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-blue-600 dark:text-blue-400">3</span>);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 3</p>
</div>

<h3 className="text-xl font-medium mb-3">Mathematical Calculations</h3>

<p className="leading-relaxed mb-4">
  You can also perform mathematical calculations directly inside the <span className="font-mono">console.log()</span> function:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-blue-600 dark:text-blue-400">3</span> + <span className="text-blue-600 dark:text-blue-400">3</span>);<br />
    console.<span className="text-green-600 dark:text-green-400">log</span>(<span className="text-blue-600 dark:text-blue-400">2</span> * <span className="text-blue-600 dark:text-blue-400">5</span>);
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 6 and 10</p>
</div>

      </>
    ),
  },
  // --- Output New Lines (New Content) ---
  "cpp_new_lines.asp": {
    title: "javascript Output",

    content: (
      <>
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

      </>
    ),
  },

  // --- Comments (New Content) ---
  "cpp_comments.asp": {
    title: "javascript comments",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Comments
</h2>

<p className="leading-relaxed mb-4">
  Comments are used to explain JavaScript code and are ignored by the browser or interpreter. 
  They help make your code easier to understand and can be used to temporarily disable code during testing or debugging.
</p>

<h3 className="text-xl font-medium mb-3">Single-line Comments</h3>
<p className="leading-relaxed mb-4">
  Start with <strong className='font-semibold'>//</strong>. Any text after <strong>//</strong> on the same line is ignored by JavaScript.
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
  <strong className='font-semibold'> /* ... */ </strong>. 
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


      </>
    ),
  },


  // --- Variables (New Content) ---
  "cpp_variables.asp": {
    title: "javascript Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Variables
</h2>

<p className="leading-relaxed mb-4">
  Variables are <strong className="font-semibold">containers for storing data values</strong>. 
  In JavaScript, you can declare variables using 
  <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">var</code>, 
  <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">let</code>, or 
  <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded mx-1">const</code>.
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li><strong>Number</strong> - stores both integers and decimals (e.g., 123, -123, 19.99)</li>
  <li><strong>String</strong> - stores text (e.g., "Hello World")</li>
  <li><strong>Boolean</strong> - stores true or false values</li>
  <li><strong>Undefined</strong> - a variable that has been declared but not assigned</li>
  <li><strong>Null</strong> - represents an empty or “nothing” value</li>
</ul>

<h3 className="text-xl font-medium mb-3">Declaring (Creating) Variables</h3>
<p className="leading-relaxed mb-4">
  In JavaScript, you can create a variable by using <strong>let</strong> or <strong>const</strong> followed by a name and value:
</p>

<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  let variableName = value;
</p>

<h3 className="text-xl font-medium mb-3">Example: Assigning a Value</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
    console.log(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Declaring Without Assigning Value</h3>
<p className="leading-relaxed mb-4">
  In JavaScript, a variable can be declared without a value. It will be <strong>undefined</strong> until you assign something to it.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myNum;<br />
    myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
    console.log(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Changing Variable Values</h3>
<p className="leading-relaxed mb-4">
  Reassigning a value to a variable declared with <strong>let</strong> will <strong>overwrite</strong> its old value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myNum = <span className="text-blue-600 dark:text-blue-400">15</span>; <span className="text-gray-500 dark:text-gray-400">// myNum is 15</span><br />
    myNum = <span className="text-blue-600 dark:text-blue-400">10</span>; <span className="text-gray-500 dark:text-gray-400">// Now myNum is 10</span><br />
    console.log(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 10</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Other Types</h3>
<p className="leading-relaxed mb-4">Here’s how you can define different types of variables:</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myInt = <span className="text-blue-600 dark:text-blue-400">5</span>; <span className="text-gray-500 dark:text-gray-400">// Number</span><br />
    let myFloat = <span className="text-blue-600 dark:text-blue-400">5.99</span>; <span className="text-gray-500 dark:text-gray-400">// Floating point</span><br />
    let myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>; <span className="text-gray-500 dark:text-gray-400">// String</span><br />
    let myBoolean = <span className="text-blue-600 dark:text-blue-400">true</span>; <span className="text-gray-500 dark:text-gray-400">// Boolean</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Display Variables</h3>
<p className="leading-relaxed mb-4">
  Use the <span className="font-mono">console.log()</span> function to display variable values:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myAge = <span className="text-blue-600 dark:text-blue-400">35</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">"I am"</span>, myAge, <span className="text-purple-600 dark:text-purple-400">"years old."</span>);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Combine Variables</h3>
<p className="leading-relaxed mb-4">
  Combine text and variables using <strong>template literals</strong> (backticks <code>`</code>) or the <strong>+</strong> operator:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let name = <span className="text-purple-600 dark:text-purple-400">"John"</span>;<br />
    let age = <span className="text-blue-600 dark:text-blue-400">35</span>;<br />
    let height = <span className="text-blue-600 dark:text-blue-400">6.1</span>;<br /><br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`${'{'}name{'}'} is ${'{'}age{'}'} years old and ${'{'}height{'}'} feet tall.`</span>);
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Variables Together</h3>
<p className="leading-relaxed mb-4">
  You can add numeric variables using the <span className="font-mono">+</span> operator:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-blue-600 dark:text-blue-400">5</span>;<br />
    let y = <span className="text-blue-600 dark:text-blue-400">6</span>;<br />
    let sum = x + y;<br />
    console.log(sum); <span className="text-gray-500 dark:text-gray-400">// Outputs 11</span>
  </p>
</div>

      </>
    ),
  },
  // --- Multiple Variables (New Content) ---
  "cpp_variables_multiple.asp": {
    title: "javascript Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Declare Many Variables
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, you can declare <strong className="font-semibold">multiple variables</strong> on a single line using <code>let</code> or <code>const</code>. 
  This keeps your code short and clean.
</p>

<h3 className="text-xl font-medium mb-3">Declare Multiple Variables in One Line</h3>
<p className="leading-relaxed mb-4">
  To declare more than one variable, use a <strong className="font-semibold">comma-separated list</strong> 
  and assign each variable its own value.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-blue-600 dark:text-blue-400">5</span>, 
    y = <span className="text-blue-600 dark:text-blue-400">6</span>, 
    z = <span className="text-blue-600 dark:text-blue-400">50</span>;<br />
    console.log(x + y + z); <span className="text-gray-500 dark:text-gray-400">// Outputs 61</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Assign One Value to Multiple Variables</h3>
<p className="leading-relaxed mb-4">
  You can also assign the <strong className="font-semibold">same value</strong> to multiple variables in one line. 
  This is useful when all variables should start with the same value.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-blue-600 dark:text-blue-400">50</span>, 
    y = <span className="text-blue-600 dark:text-blue-400">50</span>, 
    z = <span className="text-blue-600 dark:text-blue-400">50</span>;<br />
    console.log(x + y + z); <span className="text-gray-500 dark:text-gray-400">// Outputs 150</span>
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
    title: "javascript Variables",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Identifiers
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
  <li>Names can include letters, digits, and underscores (<span className="font-mono">_</span>).</li>
  <li>Names must start with a letter, underscore (<span className="font-mono">_</span>), or dollar sign (<span className="font-mono">$</span>).</li>
  <li>Names are <strong className="font-semibold">case-sensitive</strong> (e.g., <span className="font-mono">myVar</span> and <span className="font-mono">myvar</span> are different).</li>
  <li>Names cannot contain spaces or special characters like <span className="font-mono">!</span>, <span className="font-mono">#</span>, <span className="font-mono">%</span>, etc.</li>
  <li>Reserved words (like <span className="font-mono">class</span>, <span className="font-mono">for</span>, <span className="font-mono">let</span>, or <span className="font-mono">return</span>) cannot be used as identifiers.</li>
</ul>

      </>
    ),
  },

  // --- Constants (New Content) ---
  "cpp_variables_constants.asp": {
    title: "javascript Variables",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Constants
</h2>

<p className="leading-relaxed mb-4">
  When you don’t want the value of a variable to change, use the{" "}
  <strong className="font-semibold">const</strong> keyword.  
  This declares the variable as <strong className="font-semibold">constant</strong>, meaning it is read-only and cannot be reassigned.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">const</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;{" "}
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

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
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

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
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
    title: "javascript Variables",
    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Real-Life Examples
</h2>

<h3 className="text-xl font-medium mb-3">Student Data</h3>
<p className="leading-relaxed mb-4">
  Example program storing different data about a college student:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> studentId = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> studentFee = <span className="text-blue-600 dark:text-blue-400">75.25</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> studentGrade = <span className="text-purple-600 dark:text-purple-400">'B'</span>;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Calculate the Area of a Rectangle</h3>
<p className="leading-relaxed mb-4">
  Program to calculate the area of a rectangle (by multiplying the length and width):
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">let</span> length = <span className="text-blue-600 dark:text-blue-400">4</span>;<br />
    <span className="text-red-600 dark:text-red-400">let</span> width = <span className="text-blue-600 dark:text-blue-400">6</span>;<br /><br />
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
    title: "javascript User Input",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript User Input
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, we can take user input using the <strong className="font-semibold">prompt()</strong> function.
  It displays a dialog box that asks the user for some input.
</p>

<p className="leading-relaxed mb-4">
  You can then use <strong className="font-semibold">console.log()</strong> or <strong className="font-semibold">alert()</strong> 
  to show the result.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let name = prompt(<span className="text-purple-600 dark:text-purple-400">"What is your name?"</span>);<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">"Hello, "</span> + name);
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
    The <strong>prompt()</strong> function always returns data as a <strong>string</strong>.
    You can convert it using <span className="font-mono">Number()</span> or <span className="font-mono">parseInt()</span> when needed.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Creating a Simple Calculator</h3>
<p className="leading-relaxed mb-4">
  In this example, the user must input two numbers. Then we print the sum by adding the two numbers:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = Number(prompt(<span className="text-purple-600 dark:text-purple-400">"Enter first number:"</span>));<br />
    let y = Number(prompt(<span className="text-purple-600 dark:text-purple-400">"Enter second number:"</span>));<br /><br />
    let sum = x + y;<br />
    alert(<span className="text-purple-600 dark:text-purple-400">"Sum is: "</span> + sum);
  </p>
</div>


      </>
    ),
  },

  // --- Data Types (Basic) (New Content) ---
  "cpp_data_types.asp": {
    title: "javascript Data Types",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Data Types
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, variables can hold different types of data, and the type is determined automatically when you assign a value.
  JavaScript is <strong className="font-semibold">dynamically typed</strong>, which means you don’t have to declare the data type explicitly.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myNum = <span className="text-blue-600 dark:text-blue-400">5</span>; <span className="text-gray-500 dark:text-gray-400">// Number (integer or float)</span><br />
    let myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>; <span className="text-gray-500 dark:text-gray-400">// String</span><br />
    let myBoolean = <span className="text-blue-600 dark:text-blue-400">true</span>; <span className="text-gray-500 dark:text-gray-400">// Boolean</span><br />
    let myArray = <span className="text-blue-600 dark:text-blue-400">[1, 2, 3]</span>; <span className="text-gray-500 dark:text-gray-400">// Array</span><br />
    let myObject = {"{"}<span className="text-purple-600 dark:text-purple-400">"name"</span>: <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>, <span className="text-purple-600 dark:text-purple-400">"age"</span>: <span className="text-blue-600 dark:text-blue-400">21</span>{"}"}; <span className="text-gray-500 dark:text-gray-400">// Object</span><br />
    let myUndefined; <span className="text-gray-500 dark:text-gray-400">// Undefined (no value assigned)</span><br />
    let myNull = <span className="text-blue-600 dark:text-blue-400">null</span>; <span className="text-gray-500 dark:text-gray-400">// Null (empty value)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Basic Data Types in JavaScript</h3>
<p className="leading-relaxed mb-4">
  In JavaScript, data types define the <strong className="font-semibold">type of value</strong> a variable can store.
  JavaScript has <strong>primitive types</strong> and <strong>non-primitive types</strong> (objects).
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
        <td className="py-2 px-4">Represents both integer and floating-point numbers.</td>
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
        <td className="py-2 px-4">A variable declared but not assigned any value.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Null</td>
        <td className="py-2 px-4">let x = null</td>
        <td className="py-2 px-4">Represents an empty or non-existent value.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Symbol</td>
        <td className="py-2 px-4">let x = Symbol("id")</td>
        <td className="py-2 px-4">Used to create unique identifiers (ES6 feature).</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">BigInt</td>
        <td className="py-2 px-4">let x = 12345678901234567890n</td>
        <td className="py-2 px-4">Used for very large integers beyond Number limit.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">Object</td>
        <td className="py-2 px-4">let x = {"{"}"name": "Ayush", "age": 21{"}"}</td>
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
    title: "javascript Data Types",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Numeric Data Types
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, all numeric values are of type 
  <strong className="font-semibold"> Number</strong>, which includes both integers and floating-point values.
  For extremely large integers, JavaScript provides 
  <strong className="font-semibold"> BigInt</strong>.
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
    let bigNum = <span className="text-blue-600 dark:text-blue-400">123456789012345678901234567890n</span>;<br />
    console.log(bigNum);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 123456789012345678901234567890n</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Float vs. Integer</h3>
<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">Number</strong> type in JavaScript handles both integers and decimals.
  <br /><br />
  JavaScript uses <strong>IEEE 754 double-precision floating-point</strong> format,
  which can lead to rounding errors in very large or precise numbers.
  For high-precision calculations, you can use libraries like{" "}
  <span className="font-mono">decimal.js</span> or{" "}
  <span className="font-mono">big.js</span>.
</p>

<h3 className="text-xl font-medium mb-3">Scientific Notation</h3>
<p className="leading-relaxed mb-4">
  JavaScript supports <strong>scientific notation</strong> using the letter 
  <span className="font-mono">"e"</span> or <span className="font-mono">"E"</span> 
  to represent powers of 10:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let f1 = <span className="text-blue-600 dark:text-blue-400">35e3</span>;<br />
    let d1 = <span className="text-blue-600 dark:text-blue-400">12E4</span>;<br />
    console.log(f1); <span className="text-gray-500 dark:text-gray-400">// 35000</span><br />
    console.log(d1); <span className="text-gray-500 dark:text-gray-400">// 120000</span>
  </p>
</div>

{/* --- Boolean Data Types --- */}

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Booleans
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">Boolean</strong> data type in JavaScript has only two values:{" "}
  <strong className="font-semibold">true</strong> or{" "}
  <strong className="font-semibold">false</strong>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let isCodingFun = <span className="text-blue-600 dark:text-blue-400">true</span>;<br />
    let isFishTasty = <span className="text-blue-600 dark:text-blue-400">false</span>;<br />
    console.log(isCodingFun);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs true</span><br />
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
    <span className="text-gray-500 dark:text-gray-400">// Returns true</span><br />
    console.log(x &gt; 20);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Returns false</span>
  </p>
</div>


      </>
    ),
  },


  // --- Character Data Types (New Content) ---
  "cpp_data_types_char.asp": {
    title: "javascript Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Character and String Data Types
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, there is <strong className="font-semibold">no separate char type</strong>.  
  A single character is just a <strong className="font-semibold">string of length 1</strong>,
  enclosed in single (<code>'A'</code>), double (<code>"A"</code>), or backticks (<code>`A`</code>).
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myGrade = <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
    console.log(myGrade);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: B</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Character Codes (ASCII & Unicode)</h3>
<p className="leading-relaxed mb-4">
  Every character in JavaScript has a corresponding{" "}
  <strong className="font-semibold">Unicode or ASCII value</strong>.  
  You can get these values using{" "}
  <code>charCodeAt()</code> or <code>codePointAt()</code>, and convert numbers back to characters using{" "}
  <code>String.fromCharCode()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let a = <span className="text-purple-600 dark:text-purple-400">'A'</span>;<br />
    let b = <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
    let c = <span className="text-purple-600 dark:text-purple-400">'C'</span>;<br /><br />
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
  Strings in JavaScript are <strong>immutable</strong> and can be declared using single, double, or backtick quotes.  
  Backticks (<code>`</code>) are used for <strong>template literals</strong> — allowing variable interpolation.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let name = <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>;<br />
    let greeting = <span className="text-purple-600 dark:text-purple-400">`Hello, ${"{name}"}`</span>;<br /><br />
    console.log(greeting);{" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs: Hello, Ayush</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good to Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    JavaScript doesn’t have a <code>char</code> type — only <code>string</code>.
  </li>
  <li>
    <code>charCodeAt()</code> returns a character’s Unicode value.
  </li>
  <li>
    <code>String.fromCharCode()</code> converts a code back to a character.
  </li>
  <li>
    Template literals (<code>`</code>) allow embedding expressions using <code>${"{expression}"}</code>.
  </li>
</ul>


      </>
    ),
  },

  // --- Operators (Main) (New Content) ---
  "cpp_operators.asp": {
    title: "typescript Operators",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Operators
</h2>

<p className="leading-relaxed mb-4">
  Operators in <strong className="font-semibold">TypeScript</strong> are used to perform
  operations on variables and values. They are grouped into:
  <strong className="font-semibold"> Arithmetic</strong>,{" "}
  <strong className="font-semibold"> Assignment</strong>,{" "}
  <strong className="font-semibold"> Comparison</strong>,{" "}
  <strong className="font-semibold"> Logical</strong>, and{" "}
  <strong className="font-semibold"> Bitwise</strong> operators.
</p>

<h3 className="text-xl font-medium mb-3">Example: Addition Operator</h3>
<p className="leading-relaxed mb-4">
  The <span className="font-mono">+</span> operator can add numbers, concatenate strings,
  or add variables and values:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    let sum1: number = 100 + 50;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 150</span>
    <br />
    let sum2: number = sum1 + 250;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 400</span>
    <br />
    let sum3: number = sum2 + sum2;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 800</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Variables and Values</h3>
<p className="leading-relaxed mb-4">
  Operators can combine numbers, variables, and expressions in TypeScript too:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    let x: number = 100;
    <br />
    let y: number = 50;
    <br />
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
    let firstName: string = <span className="text-purple-600 dark:text-purple-400">'Ayush'</span>;
    <br />
    let lastName: string = <span className="text-purple-600 dark:text-purple-400">'Kataria'</span>;
    <br />
    let fullName: string = firstName + ' ' + lastName;{" "}
    <span className="text-gray-500 dark:text-gray-400">// 'Ayush Kataria'</span>
  </p>
</div>

      </>
    ),
  },

  // --- Arithmetic Operators (New Content) ---
  "cpp_operators_arithmetic.asp": {
    title: "javascript  Operators",

    content: (
      <>
     <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  TypeScript Arithmetic Operators
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, arithmetic operators like{" "}
  <span className="font-mono">+</span>, <span className="font-mono">-</span>,{" "}
  <span className="font-mono">*</span>, <span className="font-mono">/</span>, and{" "}
  <span className="font-mono">%</span> are used to perform basic mathematical calculations 
  on <strong className="font-semibold">number</strong> type variables.
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
    title: "javascript Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Assignment Operators
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, the <strong className="font-semibold">=</strong> operator assigns a value to a variable. 
  <strong className="font-semibold"> Compound assignment operators</strong> combine arithmetic and assignment operations — 
  like <span className="font-mono">+=</span>, <span className="font-mono">-=</span>, or <span className="font-mono">*=</span>.
</p>

<h3 className="text-xl font-medium mb-3">Example: Compound Assignment</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = 10;<br />
    x += 5; <span className="text-gray-500 dark:text-gray-400">// Same as x = x + 5 (x is now 15)</span><br />
    x *= 2; <span className="text-gray-500 dark:text-gray-400">// Same as x = x * 2 (x is now 30)</span><br />
    x -= 10; <span className="text-gray-500 dark:text-gray-400">// Same as x = x - 10 (x is now 20)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Real-Life Example: Tracking Savings</h3>

<p className="leading-relaxed mb-4">
  Suppose you’re adding money to your savings account each week. 
  You can use <span className="font-mono">+=</span> to update your balance:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let savings = 1000;<br />
    savings += 200; <span className="text-gray-500 dark:text-gray-400">// Added ₹200, total = 1200</span><br />
    savings += 300; <span className="text-gray-500 dark:text-gray-400">// Added ₹300, total = 1500</span>
  </p>
</div>

      </>
    ),
  },

  // --- Comparison Operators (New Content) ---
  "cpp_operators_comparison.asp": {
    title: "javascript Operators",

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
    let age = <span className="text-blue-600 dark:text-blue-400">18</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">age &gt;= 18</span>);
    <span className="text-gray-500 dark:text-gray-400"> // true</span>
  </p>
</div>

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
    let x = <span className="text-blue-600 dark:text-blue-400">7</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">x &gt; 5 &amp;&amp; x &lt; 10</span>);
    <span className="text-gray-500 dark:text-gray-400"> // true</span><br />
    console.log(<span className="text-purple-600 dark:text-purple-400">x &lt; 5 &amp;&amp; x &lt; 10</span>);
    <span className="text-gray-500 dark:text-gray-400"> // false</span>
  </p>
</div>


      </>
    ),
  },

  // --- Strings (New Content) ---
  "cpp_strings.asp": {
    title: "javascript Strings",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Strings
</h2>

<p className="leading-relaxed mb-4">
  Strings are used to store text or a sequence of characters. For example,{" "}
  <span className="font-mono">"Hello World"</span> is a string.
</p>

<p className="leading-relaxed mb-4">
  A string in JavaScript can be created using{" "}
  <strong className="font-semibold">single quotes</strong>,{" "}
  <strong className="font-semibold">double quotes</strong>, or{" "}
  <strong className="font-semibold">backticks</strong> (for template literals).
</p>

<h3 className="text-xl font-medium mb-3">Example: Create a String Variable</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let greeting = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
    let name = <span className="text-purple-600 dark:text-purple-400">'Ayush'</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">greeting + " " + name</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Output: Hello Ayush</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Template Literals</h3>

<p className="leading-relaxed mb-4">
  Template literals (using backticks <span className="font-mono">``</span>) make string concatenation easier and more readable.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const name = <span className="text-purple-600 dark:text-purple-400">"Ayush"</span>;<br />
    const message = <span className="text-purple-600 dark:text-purple-400">{'`Hello, ${name}! Welcome to JavaScript.`'}</span>;<br />
    console.log(<span className="text-purple-600 dark:text-purple-400">message</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Output: Hello, Ayush! Welcome to JavaScript.</span>
  </p>
</div>



       
      </>
    ),
  },

  "cpp_strings_concatenation.asp": {
    title: "javascript String Concatenation",

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
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let firstName = <span className="text-purple-600 dark:text-purple-400">"John "</span>;<br />
    let lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
    let fullName = firstName + lastName;<br />
    console.log(<span className="text-blue-600 dark:text-blue-400">fullName</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Outputs John Doe</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can also add a space between strings directly inside quotes:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let firstName = <span className="text-purple-600 dark:text-purple-400">"John"</span>;<br />
    let lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
    let fullName = firstName + <span className="text-purple-600 dark:text-purple-400">" "</span> + lastName;<br />
    console.log(<span className="text-blue-600 dark:text-blue-400">fullName</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Outputs John Doe</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Using Template Literals (Recommended)</h3>
<p className="leading-relaxed mb-4">
  In JavaScript, you can also use <span className="font-mono">template literals</span> (using backticks <span className="font-mono">``</span>) to combine variables and text more cleanly:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let firstName = <span className="text-purple-600 dark:text-purple-400">"John"</span>;<br />
    let lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
    // eslint-disable-next-line no-useless-escape
    let fullName = <span className="text-purple-600 dark:text-purple-400">{'`'}{`$\{firstName} $\{lastName}`}{'`'}</span>;<br />
    console.log(<span className="text-blue-600 dark:text-blue-400">fullName</span>);
    <span className="text-gray-500 dark:text-gray-400"> // Outputs John Doe</span>
  </p>
</div>

    </>
    
    ),
  },
  "cpp_strings_number_and_string_.asp": {
    title: "javascript Numbers and Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  Adding Numbers and Strings
</h2>

<p className="leading-relaxed mb-4">
  <strong>⚠️ WARNING!</strong> JavaScript also uses the{" "}
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
    let x = <span className="text-purple-600 dark:text-purple-400">10</span>;<br />
    let y = <span className="text-purple-600 dark:text-purple-400">20</span>;<br />
    let z = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be 30 (a number)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding Strings</h3>
<p className="leading-relaxed mb-2">
  If you add two strings, the result will be a concatenated string:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-purple-600 dark:text-purple-400">"10"</span>;<br />
    let y = <span className="text-purple-600 dark:text-purple-400">"20"</span>;<br />
    let z = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be "1020" (a string)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding String and Number</h3>
<p className="leading-relaxed mb-2">
  In JavaScript, if you try to add a number to a string, JavaScript will **convert the number into a string** and then concatenate them:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let x = <span className="text-purple-600 dark:text-purple-400">"10"</span>;<br />
    let y = <span className="text-purple-600 dark:text-purple-400">20</span>;<br />
    let z = x + y;
    <span className="text-gray-500 dark:text-gray-400"> // z will be "1020" (a string)</span>
  </p>
</div>


      </>
    ),
  },
  "cpp_strings_string_length_.asp": {
    title: "javascript String Length",

    content: (
      <>
        {/* 🧵 STRING LENGTH */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  String Length
</h2>

<p className="leading-relaxed mb-4">
  To get the length of a string in JavaScript, use the{" "}
  <span className="font-mono">.length</span> property.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const txt = <span className="text-purple-600 dark:text-purple-400">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span>;
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">
      `The length of the txt string is: ${'{'}txt.length{'}'}`
    </span>);
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      // Output: The length of the txt string is: 26
    </span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  In JavaScript, <span className="font-mono">.length</span> is a built-in property that returns the number of characters in a string.
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
    const myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
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
    const myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
    <br />
    console.log(myString[1]); <span className="text-gray-500 dark:text-gray-400"> // e</span>
    <br />
    console.log(myString[myString.length - 1]); <span className="text-gray-500 dark:text-gray-400"> // o</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change String Characters</h3>

<p className="leading-relaxed mb-4">
  In JavaScript, strings are <strong>immutable</strong>. You can’t change them directly.
  To modify a character, you must create a new string.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
    <br />
    myString = 'J' + myString.slice(1);
    <br />
    console.log(myString); <span className="text-gray-500 dark:text-gray-400"> // Jello</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access with Error Handling</h3>

<p className="leading-relaxed mb-4">
  If you try to access a character at an invalid index, JavaScript returns{" "}
  <span className="font-mono">undefined</span> instead of throwing an error.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
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
    let myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
    <br />
    const chars = myString.split('');
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
  In JavaScript, you can use the <span className="font-mono">prompt()</span> function to take user input as a string (in browsers).
</p>

<h3 className="text-xl font-medium mb-2">Example</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const firstName = prompt(<span className="text-purple-600 dark:text-purple-400">"Type your first name:"</span>);
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`Your name is: ${'{'}firstName{'}'}`</span>);
  </p>
</div>

<h3 className="text-xl font-medium mb-2">Example: Full Name</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const fullName = prompt(<span className="text-purple-600 dark:text-purple-400">"Type your full name:"</span>);
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`Your name is: ${'{'}fullName{'}'}`</span>);
  </p>
</div>

<p className="leading-relaxed mb-4">
  Unlike C++, JavaScript’s <span className="font-mono">prompt()</span> can take full sentences with spaces by default.
</p>

<h3 className="text-xl font-medium mb-2">Example: Numeric Input Note</h3>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">prompt()</span> function always returns a{" "}
  <strong>string</strong>. If you need a number, convert it using{" "}
  <span className="font-mono">Number()</span> or <span className="font-mono">parseInt()</span>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let age = prompt(<span className="text-purple-600 dark:text-purple-400">"Enter your age:"</span>);
    <br />
    console.log(<span className="text-purple-600 dark:text-purple-400">`You entered age as: ${'{'}age{'}'}`</span>);
    <br />
    age = Number(age);
    <br />
    console.log(age + 1); <span className="text-gray-500 dark:text-gray-400"> // Outputs age + 1</span>
  </p>
</div>


      </>
    ),
  },




  // --- Math (New Content) ---
  "cpp_math.asp": {
    title: "javascript Math",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  JavaScript Math
</h2>

<p className="leading-relaxed mb-4">
  JavaScript has many built-in functions and objects that let you perform mathematical operations easily.
</p>

<h3 className="text-xl font-medium mb-3">Math.max() and Math.min()</h3>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">Math.max(x, y)</span> function returns the largest value,
  and <span className="font-mono">Math.min(x, y)</span> returns the smallest:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(Math.max(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 10</span>
    <br />
    console.log(Math.min(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 5</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">JavaScript <span className="font-mono">Math</span> Object</h3>

<p className="leading-relaxed mb-4">
  JavaScript’s <strong className="font-semibold">Math</strong> object provides additional mathematical functions,
  such as <span className="font-mono">Math.sqrt()</span> (square root),{" "}
  <span className="font-mono">Math.round()</span> (rounds a number), and{" "}
  <span className="font-mono">Math.log()</span> (natural logarithm). You can use them directly:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    console.log(Math.sqrt(64)){" "}
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 8</span>
    <br />
    console.log(Math.round(2.6)){" "}
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 3</span>
    <br />
    console.log(Math.log(2)){" "}
    <span className="text-gray-500 dark:text-gray-400"> // Outputs 0.693...</span>
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
    title: "javascript If ... Else",

    content: (
      <>
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
    title: "javascript If ... Else",

    content: (
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
    <span className="text-red-600 dark:text-red-400">if</span> (condition) {"{"}<br />
    &nbsp;&nbsp;// code to run if condition is true<br />
    {"}"} <span className="text-red-600 dark:text-red-400">else</span> {"{"}<br />
    &nbsp;&nbsp;// code to run if condition is false<br />
    {"}"}
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let time = <span className="text-purple-600 dark:text-purple-400">20</span>;
    <br />
    <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18) {"{"}<br />
    &nbsp;&nbsp;console.log(
    <span className="text-purple-600 dark:text-purple-400">"Good day."</span>);<br />
    {"}"} <span className="text-red-600 dark:text-red-400">else</span> {"{"}<br />
    &nbsp;&nbsp;console.log(
    <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);<br />
    {"}"}<br />
    <span className="text-gray-500 dark:text-gray-400 block mt-2">// Output: "Good evening."</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<p className="leading-relaxed mb-4">
  In this example, the variable <span className="font-mono">time</span> is set to 20, which is greater than 18. 
  That makes the <span className="font-mono">if</span> condition false, so JavaScript executes the{" "}
  <span className="font-mono">else</span> block and prints{" "}
  <strong className="font-semibold">"Good evening."</strong>.
  <br />
  If <span className="font-mono">time</span> were less than 18, the code inside the{" "}
  <span className="font-mono">if</span> block would run instead, printing{" "}
  <strong className="font-semibold">"Good day."</strong>.
</p>

      </>
    ),
  },


  // --- Short Hand If Else (New Content) ---
  "cpp_conditions_shorthand.asp": {
    title: "javascript If ... Else",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Short Hand If...Else (Ternary Operator)
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, the <strong className="font-semibold">ternary operator</strong> is a compact way to write simple 
  <span className="font-mono"> if...else </span> statements.  
  It helps you assign a value or execute an expression based on a condition — all in a single line.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="dark:text-white">variable</span> = <span className="text-red-600 dark:text-red-400">condition</span> 
  ? <span className="text-blue-600 dark:text-blue-400">expressionIfTrue</span> 
  : <span className="text-blue-600 dark:text-blue-400">expressionIfFalse</span>;
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>

<p className="leading-relaxed mb-2">
  Normally, you’d write a multi-line <span className="font-mono">if...else</span> statement like this:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> time = 20;<br />
    <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>);<br />
    &#125; <span className="text-red-600 dark:text-red-400">else</span> &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);<br />
    &#125;
  </pre>
</div>

<p className="leading-relaxed mb-2">
  Using the <strong>ternary operator</strong>, you can simplify that into one line:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> time = 20;<br />
    <span className="text-blue-600 dark:text-blue-400">let</span> result = (time &lt; 18) 
    ? <span className="text-purple-600 dark:text-purple-400">"Good day."</span> 
    : <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>;<br />
    <span className="text-blue-600 dark:text-blue-400">console</span>.log(result);
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>

<p className="leading-relaxed mb-4">
  In this example, the variable <span className="font-mono">time</span> is <strong>20</strong>, 
  which means the condition <span className="font-mono">(time &lt; 18)</span> is false.  
  Therefore, the expression after <span className="font-mono">:</span> runs, and 
  <strong> "Good evening." </strong> is printed.
  <br />
  If <span className="font-mono">time</span> was less than 18, it would print 
  <strong> "Good day." </strong> instead.
</p>

      </>
    ),
  },


  // --- Nested If (New Content) ---
  "cpp_conditions_nested.asp": {
    title: "javascript If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Nested If
</h2>

<p className="leading-relaxed mb-4">
  A <strong className='font-semibold'>nested if</strong> statement in JavaScript means having one 
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
  In this example, JavaScript first checks if <span className="font-mono">x</span> is greater than 10.  
  Since that condition is true, the program moves inside the first <span className="font-mono">if</span> block and then checks whether 
  <span className="font-mono">y</span> is greater than 20.  
  Because both conditions are true, both messages are printed to the console.
</p>

      </>
    ),
  },
  // --- Switch (New Content) ---
  "cpp_switch.asp": {
    title: "javascript Switch",

    content: (
      <>
 <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Switch Statement
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, a <strong className="font-semibold">switch</strong> statement is used to perform 
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
    title: "javascript While Loop",

    content: (
      <>
     <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript While Loop
</h2>

<p className="leading-relaxed mb-4 dark:text-gray-100">
  The <strong className="font-semibold">while</strong> loop in JavaScript executes a block of code 
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
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> i = 0;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(i);<br />
    &nbsp;&nbsp;i++;<br />
    &#125;
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs: 0, 1, 2, 3, 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Countdown Example</h3>
<p className="leading-relaxed mb-4">
  Count down from 3 to 1 and then display "Happy New Year!!":
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">let</span> countdown = 3;<br />
    <span className="text-red-600 dark:text-red-400">while</span> (countdown &gt; 0) &#123;<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">console</span>.log(countdown);<br />
    &nbsp;&nbsp;countdown--;<br />
    &#125;<br />
    <span className="text-blue-600 dark:text-blue-400">console</span>.log(<span className="text-purple-600 dark:text-purple-400">"Happy New Year!!"</span>);
  </p>

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
    title: "javascript Do/While Loop",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Do/While Loop
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, the <strong className="font-semibold">do/while</strong> loop executes a block of code
  <strong> at least once</strong> before checking the condition. It’s used when you want the loop body to run
  once even if the condition is false at the start.
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
    let i = 0;<br />
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
    let i = 10;<br />
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
    let number;<br />
    do &#123;<br />
    &nbsp;&nbsp;number = parseInt(prompt("Enter a positive number: "));<br />
    &#125; while (number &gt; 0);
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong> The <span className="font-mono">do/while</span> loop in JavaScript guarantees that the code
  runs <strong>at least once</strong>, regardless of whether the condition is true or false initially.
</p>

      </>
    ),
  },


  // --- For Loop (New Content) ---
  "cpp_For_loop.asp": {
    title: "javascript For Loop",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript For Loop
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, the <strong className="font-semibold">for</strong> loop is used to repeat a block of code 
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
    title: "javascript Nested Loops",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Nested Loops
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
    title: "javascript The foreach Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  The forEach Loop (JavaScript)
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, the <strong className="font-semibold">forEach()</strong> method is used to loop through elements in an array.  
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
  JavaScript strings aren’t arrays, but you can loop through them using <code className="font-mono">for...of</code> or convert them into arrays using <code className="font-mono">split()</code>.
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
    title: "javascript Break/Continue",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript break
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
  JavaScript continue
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
  In TypeScript, <span className="font-mono">arrays</span> store multiple values in a single variable — 
  just like in JavaScript — but here you can define what type of elements the array will hold.
</p>

{/* Declaring Arrays */}
<h3 className="text-xl font-medium mb-3">Creating an Array with Type</h3>
<p className="leading-relaxed mb-4">
  You can define the type of array elements using <code>type[]</code> syntax:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
    const myNums: number[] = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>];<br />
    <span className="text-gray-500 dark:text-gray-400">// TypeScript ensures all elements are of the declared type</span>
  </pre>
</div>

{/* Accessing Array Elements */}
<h3 className="text-xl font-medium mb-3">Accessing Array Elements</h3>
<p className="leading-relaxed mb-4">
  You can access elements using their index number inside square brackets <code>[]</code>.  
  Indexes start from <code>0</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
    console.<span className="text-purple-600 dark:text-purple-400">log</span>(cars[<span className="text-blue-600 dark:text-blue-400">0</span>]); <span className="text-gray-500 dark:text-gray-400">// Outputs: Volvo</span>
  </pre>
</div>

{/* Modifying Array Elements */}
<h3 className="text-xl font-medium mb-3">Changing an Array Element</h3>
<p className="leading-relaxed mb-4">
  You can modify a specific element by assigning a new value to that index:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>];<br />
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
    {/* Looping Through Arrays */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  Loop Through an Array (Using For Loop)
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, you can iterate through array elements using <span className="font-mono">for</span>,{" "}
  <span className="font-mono">forEach()</span>, or <span className="font-mono">for...of</span> loops.  
  TypeScript adds type safety to ensure you don’t accidentally process elements of the wrong type.
</p>

{/* Example 1: Using Traditional For Loop */}
<h3 className="text-xl font-medium mb-3">Example: Using Traditional For Loop</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>];<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> (let i: number = 0; i &lt; cars.length; i++) {'{'}<br />
    &nbsp;&nbsp;console.log(cars[i]);<br />
    {'}'}<br />
    <span className="text-gray-500 dark:text-gray-400">// Outputs each car name</span>
  </pre>
</div>

{/* Example 2: Using forEach Loop */}
<h3 className="text-xl font-medium mb-3">Example: Using forEach Loop</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>];<br /><br />
    cars.forEach((car: string): void =&gt; {'{'}<br />
    &nbsp;&nbsp;console.log(car);<br />
    {'}'});<br />
    <span className="text-gray-500 dark:text-gray-400">// Outputs each car name</span>
  </pre>
</div>

{/* Example 3: Using for...of Loop */}
<h3 className="text-xl font-medium mb-3">Example: Using for...of Loop</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>];<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> (const car: string{" "}
    <span className="text-red-600 dark:text-red-400">of</span> cars) {'{'}<br />
    &nbsp;&nbsp;console.log(car);<br />
    {'}'}<br />
    <span className="text-gray-500 dark:text-gray-400">// Outputs each car name</span>
  </pre>
</div>

{/* Example 4: Accessing Index and Value */}
<h3 className="text-xl font-medium mb-3">Example: Outputting Index and Value</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const cars: string[] = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>,{" "}
    <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>];<br /><br />
    cars.forEach((car: string, index: number): void =&gt; {'{'}<br />
    &nbsp;&nbsp;console.log(index, <span className="text-purple-600 dark:text-purple-400">"="</span>, car);<br />
    {'}'});<br />
    <span className="text-gray-500 dark:text-gray-400">// Output: 0 = Volvo, 1 = BMW, etc.</span>
  </pre>
</div>

{/* For-Each Loop Explanation */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200">
  The For-Each Loop in TypeScript
</h2>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">forEach()</span> method works just like in JavaScript,  
  but TypeScript allows you to define the type of each item in the callback.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  array.forEach((item: Type): void =&gt; {'{'}<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to execute</span><br />
  {'}'});<br />
</p>

<h3 className="text-xl font-medium mb-3">Example: Loop Through Numbers</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    const myNumbers: number[] = [<span className="text-blue-600 dark:text-blue-400">10</span>,{" "}
    <span className="text-blue-600 dark:text-blue-400">20</span>,{" "}
    <span className="text-blue-600 dark:text-blue-400">30</span>,{" "}
    <span className="text-blue-600 dark:text-blue-400">40</span>,{" "}
    <span className="text-blue-600 dark:text-blue-400">50</span>];<br /><br />
    myNumbers.forEach((num: number): void =&gt; {'{'}<br />
    &nbsp;&nbsp;console.log(num);<br />
    {'}'});<br />
    <span className="text-gray-500 dark:text-gray-400">// Prints each number</span>
  </pre>
</div>


      </>
    ),
  },



  "cpp_functions.asp": {
    title: "typescript Functions",

    content: (
      <>
       {/* Overview */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  TypeScript Functions
</h2>

<p className="leading-relaxed mb-4">
  A function in <strong>TypeScript</strong> is a block of code designed to perform a particular task.  
  TypeScript adds type safety to functions, allowing you to define the types of parameters and return values.  
  This helps in writing reliable, readable, and bug-free code.
</p>

{/* Creating a Function */}
<h3 className="text-xl font-medium mb-3">Creating a Function</h3>
<p className="leading-relaxed mb-4">
  Functions in TypeScript are defined using the <code>function</code> keyword, similar to JavaScript,  
  but you can specify parameter and return types.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function myFunction(): void {
  console.log("Function executed!");
}`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Explanation:</strong><br />
  <code>(): void</code> means this function does not return anything.<br />
  The TypeScript type system ensures correct usage of return values.
</p>

{/* Calling a Function */}
<h3 className="text-xl font-medium mb-3">Calling a Function</h3>
<p className="leading-relaxed mb-4">
  To execute a function, simply call it using its name followed by parentheses <code>()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function greet(): void {
  console.log("Hello from TypeScript!");
}

greet();`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Hello from TypeScript!
</p>

{/* Function Parameters */}
<h3 className="text-xl font-medium mb-3">Function Parameters</h3>
<p className="leading-relaxed mb-4">
  You can pass data into a TypeScript function by specifying <strong>typed parameters</strong>.  
  Each parameter has a defined type that must match when calling the function.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function greetUser(name: string): void {
  console.log("Hello, " + name + "!");
}

greetUser("Ayush");
greetUser("Riya");`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Hello, Ayush!<br />
  Hello, Riya!
</p>

{/* Return Values */}
<h3 className="text-xl font-medium mb-3">Return Values</h3>
<p className="leading-relaxed mb-4">
  Functions can return values of specific types.  
  Use the colon (<code>:</code>) to define the return type after the parameter list.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
console.log(result);`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> 8
</p>

{/* Default Parameter Values */}
<h3 className="text-xl font-medium mb-3">Default Parameter Values</h3>
<p className="leading-relaxed mb-4">
  You can assign default values to parameters in TypeScript.  
  If no argument is passed, the default value will be used.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function greet(name: string = "User"): void {
  console.log("Hello, " + name + "!");
}

greet();
greet("Ayush");`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Hello, User!<br />
  Hello, Ayush!
</p>

{/* Multiple Parameters */}
<h3 className="text-xl font-medium mb-3">Function with Multiple Parameters</h3>
<p className="leading-relaxed mb-4">
  You can define multiple parameters with different types.  
  The TypeScript compiler checks that the arguments match the expected types.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function fullName(first: string, last: string): void {
  console.log(first + " " + last);
}

fullName("Rajan", "Sharma");`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Rajan Sharma
</p>

{/* Optional Parameters */}
<h3 className="text-xl font-medium mb-3">Optional Parameters</h3>
<p className="leading-relaxed mb-4">
  TypeScript also allows you to make parameters optional using a <code>?</code> after the parameter name.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function greetUser(name?: string): void {
  if (name) {
    console.log("Hello, " + name + "!");
  } else {
    console.log("Hello, Guest!");
  }
}

greetUser("Ayush");
greetUser();`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Hello, Ayush!<br />
  Hello, Guest!
</p>

{/* Function with Return Type Example */}
<h3 className="text-xl font-medium mb-3">Function with Specific Return Type</h3>
<p className="leading-relaxed mb-4">
  TypeScript ensures that functions return the correct data type as declared in the function signature.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`function multiply(a: number, b: number): number {
  return a * b;
}

const product = multiply(4, 6);
console.log("Product:", product);`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Product: 24
</p>


      </>
    ),
  }
  ,
  
  "cpp_functions_scope.asp": {
    title: "typescript Variable Scope",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  TypeScript Variable Scope
</h2>

<p className="leading-relaxed mb-4">
  Now that you understand how functions work, it’s important to learn how variables behave inside and outside functions in <strong>TypeScript</strong>.
</p>

<p className="leading-relaxed mb-4">
  In TypeScript, variables follow the same scoping rules as modern JavaScript — they can be <strong>global</strong>, <strong>local</strong>, or <strong>block-scoped</strong>. 
  The compiler also ensures type safety within these scopes.
</p>

<h3 className="text-xl font-medium mb-3">Local Scope</h3>
<p className="leading-relaxed mb-4">
  A variable declared inside a function has a <strong>local scope</strong>, meaning it can only be accessed within that function:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function myFunction(): void {
  // Local variable
  let x: number = 5;

  // Accessible here
  console.log(x);
}

myFunction();`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  If you try to access a local variable outside its function, TypeScript will show an error:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function myFunction(): void {
  let x: number = 5;
}

myFunction();

// Error: Cannot find name 'x'
console.log(x);`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Global Scope</h3>
<p className="leading-relaxed mb-4">
  A variable declared outside any function or block has <strong>global scope</strong> and can be accessed anywhere in the file:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`// Global variable
let x: number = 5;

function myFunction(): void {
  console.log(x); // Accessible here
}

myFunction();
console.log(x); // Also accessible here`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Block Scope (let & const)</h3>
<p className="leading-relaxed mb-4">
  Variables declared with <code>let</code> or <code>const</code> are block-scoped — they only exist inside the block where they’re declared.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`{
  let a: number = 10;
  const b: number = 20;
  console.log(a, b); // Works fine
}

console.log(a, b); // Error: 'a' and 'b' not defined`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Variable Shadowing</h3>
<p className="leading-relaxed mb-4">
  If a variable with the same name exists in both global and local scope, TypeScript will treat them as separate variables:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`// Global variable
let x: number = 10;

function myFunction(): void {
  let x: number = 20; // Local variable shadows global one
  console.log(x); // 20
}

myFunction();
console.log(x); // 10`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Modifying Global Variables</h3>
<p className="leading-relaxed mb-4">
  You can modify a global variable from inside a function, but doing so can cause confusion and bugs — use this carefully:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 rounded text-black dark:text-gray-200 overflow-x-auto">
{`let counter: number = 5;

function increment(): void {
  counter++;
  console.log(counter); // 6
}

increment();
console.log(counter); // 6`}
  </pre>
</div>


      </>
    ),
  },
  "cpp_functions_lambda.asp": {
    title: "typescript Arrow Functions",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-7">
  TypeScript Arrow Functions
</h2>

<p className="leading-relaxed mb-4">
  In TypeScript, <strong>arrow functions</strong> work just like in JavaScript — but you can also define 
  <strong>types</strong> for parameters and return values. They’re short, anonymous functions that 
  make your code cleaner and safer with static typing.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="leading-relaxed mb-4">
  <code>(parameters: type) =&gt; {'{'} code {'}'}</code><br />
  If there’s only one expression, you can skip braces and the <code>return</code> keyword.
</p>

<h3 className="text-xl font-medium mb-3">Basic Arrow Function Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`const message = (): void => {
  console.log("Hello World!");
};

message();`}
  </pre>
</div>
<p className="leading-relaxed mb-4"><strong>Result:</strong> Hello World!</p>

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
  You can pass arrow functions as arguments to other functions — just like lambda functions in C++.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`function runTwice(fn: () => void): void {
  fn();
  fn();
}

const greet = (): void => {
  console.log("Hello World!");
};

runTwice(greet);`}
  </pre>
</div>
<p className="leading-relaxed mb-4">
  <strong>Result:</strong><br />
  Hello World!<br />
  Hello World!
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
  Arrow functions in TypeScript automatically have access to outer-scope variables. 
  You don’t need special syntax like capture lists in C++.
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

<p className="leading-relaxed mb-4">
  <strong>Note:</strong> If the variable <code>x</code> changes later, the arrow function will still 
  access its updated value.
</p>

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

<h3 className="text-xl font-medium mb-3">Regular Functions vs Arrow Functions</h3>
<p className="leading-relaxed mb-4">
  Both can perform similar tasks, but they differ mainly in syntax and the handling of <code>this</code>.
</p>

<ul className="list-disc list-inside mb-4">
  <li><strong>Use regular functions when:</strong> you need <code>this</code> binding or reusable, complex logic.</li>
  <li><strong>Use arrow functions when:</strong> you want concise, inline, or callback-based logic.</li>
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
  <strong>Note:</strong> Arrow functions are ideal for short, one-line operations or inline callbacks with type safety.
</p>

      </>
    ),
  },
  "cpp_oops.asp": {
    title: "typescript OOP",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-5">
  What is OOP in TypeScript?
</h2>

<p className="leading-relaxed mb-4">
  OOP stands for <strong>Object-Oriented Programming</strong>. In TypeScript, this paradigm is all about creating 
  <strong>objects</strong> — entities that combine both <em>data (properties)</em> and <em>behavior (methods)</em> 
  into a single, reusable structure.
</p>

<h3 className="text-xl font-medium mb-3">Advantages of OOP in TypeScript</h3>
<p className="leading-relaxed mb-4">
  Using OOP in TypeScript offers several major advantages in large-scale applications:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Strong Typing:</strong> TypeScript ensures type safety, reducing runtime errors.
  </li>
  <li>
    <strong>Code Reusability:</strong> Classes and inheritance make it easy to reuse and extend logic.
  </li>
  <li>
    <strong>Better Organization:</strong> OOP encourages modular, maintainable, and scalable code.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Classes and Objects in TypeScript</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, classes are used to create objects that share structure and behavior. 
  You can define types for each property and method for safety and clarity.
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
        A <strong>class</strong> is a blueprint for creating objects. 
        It defines <em>properties</em> (variables) and <em>methods</em> (functions) for the object.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Object</td>
      <td className="p-2 border">
        An <strong>object</strong> is an instance of a class that holds actual data and behavior.
      </td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-medium mb-3">Procedural vs. Object-Oriented Programming</h3>
<p className="leading-relaxed mb-4">
  The main difference lies in how you structure and think about your code:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Procedural Programming:</strong> Focuses on functions that manipulate separate data.
  </li>
  <li>
    <strong>Object-Oriented Programming:</strong> Combines data and logic together within <strong>objects</strong>.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Basic Class in TypeScript</h3>
<p className="leading-relaxed mb-4">
  Let’s look at a simple class that represents a <strong>Car</strong> object:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
{`class Car {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive(): void {
    console.log(\`\${this.brand} is driving at \${this.speed} km/h\`);
  }
}

const car1 = new Car("Tesla", 120);
car1.drive();`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Result:</strong><br />
  Tesla is driving at 120 km/h
</p>

<h3 className="text-xl font-medium mb-3">Why OOP Matters in TypeScript</h3>
<p className="leading-relaxed mb-4">
  OOP makes TypeScript ideal for large, enterprise-level applications because it provides:
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>Encapsulation — keeps data safe within classes</li>
  <li>Inheritance — reuse code easily</li>
  <li>Polymorphism — override behavior dynamically</li>
  <li>Abstraction — hide implementation details</li>
</ul>

<p className="leading-relaxed mb-4">
  In the next section, you’ll learn how to use <strong>constructors</strong>, <strong>inheritance</strong>, 
  and <strong>access modifiers</strong> (<code>public</code>, <code>private</code>, <code>protected</code>) in TypeScript.
</p>


      </>
    ),
  },
  "cpp_class_methods.asp": {
    title: "typescript Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Class Methods
</h2>

<p className="leading-relaxed mb-4">
  <strong>Methods</strong> are functions that belong to a class. They define what an object can do — its behaviors and actions.
</p>

<p className="leading-relaxed mb-4">
  In <strong>TypeScript</strong>, methods are defined <strong>inside</strong> a class just like JavaScript,
  but with optional <code>type annotations</code> for parameters and return values.
</p>

<h3 className="text-xl font-medium mb-3">1. Define a Method Inside the Class</h3>
<p className="leading-relaxed mb-4">
  You can define methods directly inside a class and call them using an object with dot notation (<code>.</code>).
</p>

<h4 className="text-lg font-medium mb-2">Inside Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  myMethod(): void {
    console.log("Hello World!"); // Method defined inside the class
  }
}

const myObj = new MyClass();
myObj.myMethod(); // Call the method`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Hello World!
</p>

<h3 className="text-xl font-medium mb-3">2. Define a Method Using Prototype (Advanced)</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, defining a method outside the class is uncommon, but you can still extend the prototype manually.
</p>

<h4 className="text-lg font-medium mb-2">Outside Example (Using Prototype)</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {}

// Extend the prototype manually
(MyClass.prototype as any).myMethod = function(): void {
  console.log("Hello World!");
};

const myObj = new MyClass();
myObj.myMethod();`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Hello World!
</p>

<h3 className="text-xl font-medium mb-3">Methods with Parameters and Return Types</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you can define method parameters and specify their types, along with a return type.  
  This makes your code safer and easier to debug.
</p>

<h4 className="text-lg font-medium mb-2">Parameters Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Car {
  speed(maxSpeed: number): number {
    return maxSpeed;
  }
}

const myCar = new Car();
console.log(myCar.speed(200)); // Call the method with an argument`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> 200
</p>

<h3 className="text-xl font-medium mb-3">Access Modifiers</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, methods can be <code>public</code>, <code>private</code>, or <code>protected</code>:
</p>
<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>public</strong> — Accessible from anywhere (default).
  </li>
  <li>
    <strong>private</strong> — Accessible only inside the class.
  </li>
  <li>
    <strong>protected</strong> — Accessible inside the class and its subclasses.
  </li>
</ul>

<h4 className="text-lg font-medium mb-2">Access Modifier Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Animal {
  private sound(): void {
    console.log("Roar!");
  }

  public makeSound(): void {
    this.sound(); // Can access private method inside class
  }
}

const lion = new Animal();
lion.makeSound(); // ✅ Works
// lion.sound(); ❌ Error: Property 'sound' is private`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Roar!
</p>

<h3 className="text-xl font-medium mb-3">Note</h3>
<p className="leading-relaxed mb-4">
  - TypeScript adds type safety to class methods.<br />
  - You can define <strong>private</strong>, <strong>protected</strong>, and <strong>readonly</strong> members easily.<br />
  - Return types are optional but recommended for clarity.
</p>



      </>
    ),
  },
  "cpp_object.asp": {
    title: "typescript Classes and Objects",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Classes and Objects
</h2>

<p className="leading-relaxed mb-4">
  TypeScript is an <strong>object-oriented programming language</strong> built on top of JavaScript.
  It adds static typing and powerful features like access modifiers, interfaces, and generics.
  Just like JavaScript, almost everything in TypeScript is based on <strong>objects</strong>.
</p>

<p className="leading-relaxed mb-4">
  In real life, a <strong>car</strong> is an object. It has attributes like <strong>color</strong> and <strong>model</strong>,
  and methods like <code>start()</code> and <code>stop()</code>.  
  Similarly, in TypeScript, classes are used to define such structures.
</p>

<p className="leading-relaxed mb-4">
  Attributes and methods are <strong>properties and functions</strong> that belong to a class, also called <strong>class members</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Create a Class</h3>
<p className="leading-relaxed mb-4">
  To create a class in TypeScript, use the <code>class</code> keyword, and define typed properties.
</p>

<h4 className="text-lg font-medium mb-2">Example: MyClass</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  myNum: number;
  myString: string;

  constructor() {
    // Initialize attributes
    this.myNum = 15;
    this.myString = "Some text";
  }
}`}
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li>The <code>class</code> keyword defines a class called <code>MyClass</code>.</li>
  <li>The <code>constructor()</code> method runs automatically when an object is created.</li>
  <li><code>this</code> refers to the instance of the class and provides access to class properties and methods.</li>
  <li>Each property (<code>myNum</code>, <code>myString</code>) has a defined type (<code>number</code>, <code>string</code>).</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create an Object</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you can create an object from a class using the <code>new</code> keyword, just like in JavaScript.
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

// Create an object and access its properties
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

<h3 className="text-xl font-medium mb-3">Why TypeScript Classes Are Better</h3>
<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Type Safety:</strong> Detects property type errors at compile time.
  </li>
  <li>
    <strong>IntelliSense Support:</strong> Better autocomplete and documentation in editors.
  </li>
  <li>
    <strong>Access Modifiers:</strong> Use <code>public</code>, <code>private</code>, or <code>protected</code> for better control.
  </li>
</ul>

      </>
    ),
  },



  "cpp_constructor.asp": {
    title: "typescript Classes",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  TypeScript Constructors
</h2>

<p className="leading-relaxed mb-4">
  A <strong>constructor</strong> in TypeScript is a special method that runs automatically
  when a new object of a class is created. It is used to initialize the object’s properties
  and ensure type safety.
</p>

<h3 className="text-xl font-medium mb-2">Creating a Constructor</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, constructors are defined using the <code>constructor()</code> method.
  This method executes automatically when you create a new instance using the <code>new</code> keyword.
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
  <li>The constructor is always named <code>constructor</code>.</li>
  <li>It runs automatically when a new object is created using <code>new</code>.</li>
  <li>It initializes the class properties with default or passed values.</li>
  <li>Each class can have only one constructor definition.</li>
</ul>

<h3 className="text-xl font-medium mb-2">Constructor with Parameters</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you can define constructors that accept typed parameters to initialize object properties.
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

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  BMW X5 1999<br />
  Ford Mustang 1969
</p>

<h3 className="text-xl font-medium mb-2">Can We Define Constructor Outside the Class?</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, you cannot define a constructor outside of the class.
  However, you can use <strong>static factory methods</strong> to create instances in a flexible way.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Using a static factory method as an alternative constructor
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

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

<h3 className="text-xl font-medium mb-2">Advantages of TypeScript Constructors</h3>
<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li><strong>Type Safety:</strong> Ensures correct data types for properties.</li>
  <li><strong>Code Readability:</strong> Makes class initialization clear and structured.</li>
  <li><strong>Scalability:</strong> Simplifies creation of complex objects using factory methods.</li>
</ul>



      </>
    ),
  },
  "cpp_access_specifiers.asp": {
    title: "typescript Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-yellow-200 mt-10">
  TypeScript Access Modifiers
</h2>

<p className="leading-relaxed mb-4">
  In <strong>TypeScript</strong>, access to class members is controlled using three modifiers — 
  <strong>public</strong>, <strong>private</strong>, and <strong>protected</strong>.  
  These determine where class members can be accessed.
</p>

<h3 className="text-xl font-medium mb-3">Public Members</h3>
<p className="leading-relaxed mb-4">
  By default, all members in TypeScript classes are <strong>public</strong>.  
  They can be accessed from anywhere — inside or outside the class.
</p>

<h4 className="text-lg font-medium mb-2">Example: Public Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  public x: number;

  constructor() {
    this.x = 25; // Public property
  }
}

const obj = new MyClass();
console.log(obj.x); // Accessible from outside
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Private Members</h3>
<p className="leading-relaxed mb-4">
  A <strong>private</strong> member can only be accessed within the class where it is declared.  
  It cannot be accessed from outside or subclasses.
</p>

<h4 className="text-lg font-medium mb-2">Example: Private Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass {
  private y: number;

  constructor() {
    this.y = 50;
  }

  display() {
    console.log("Accessing private member inside class:", this.y);
  }
}

const obj = new MyClass();
obj.display(); // ✅ Works
// console.log(obj.y); // ❌ Error: Property 'y' is private and only accessible within class 'MyClass'
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Protected Members</h3>
<p className="leading-relaxed mb-4">
  A <strong>protected</strong> member is accessible within the class and its subclasses,  
  but not from outside those classes.
</p>

<h4 className="text-lg font-medium mb-2">Example: Protected Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Parent {
  protected message: string;

  constructor() {
    this.message = "I am protected";
  }
}

class Child extends Parent {
  accessParent() {
    console.log("Accessing protected member:", this.message);
  }
}

const obj = new Child();
obj.accessParent(); // ✅ Works
// console.log(obj.message); // ❌ Error: Property 'message' is protected
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Default Access Modifier</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, if no modifier is specified, the member is considered <strong>public</strong> by default.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Analogy</h3>
<ul className="list-disc list-inside mb-4">
  <li><strong>Public:</strong> Like a shop – everyone can enter.</li>
  <li><strong>Protected:</strong> Like a staff room – only employees (subclasses) can enter.</li>
  <li><strong>Private:</strong> Like your personal locker – only you can access it.</li>
</ul>

      </>
    ),
  },
  "cpp_encapsulation.asp": {
    title: "typescript Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-yellow-200 mt-10">
  TypeScript Encapsulation
</h2>

<p className="leading-relaxed mb-4">
  <strong>Encapsulation</strong> in TypeScript means restricting direct access to an object’s data and methods, 
  ensuring data integrity and controlled modification.  
  TypeScript supports encapsulation using <strong>access modifiers</strong> — <code>private</code>, <code>protected</code>, and <code>public</code> — 
  along with <strong>getter/setter</strong> methods.
</p>

<p className="leading-relaxed mb-4">
  Private members can only be accessed within the class.  
  Getters and setters provide a safe way to read or modify these private properties.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Example</h3>
<p className="leading-relaxed mb-4">
  Think of an employee’s salary:
</p>
<ul className="list-disc list-inside mb-4">
  <li>The salary is private — employees can’t directly modify it.</li>
  <li>Only HR or management can update it through official methods.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Access Private Members</h3>
<p className="leading-relaxed mb-4">
  In TypeScript, we use the <code>private</code> keyword to define class members that are not accessible outside the class.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Employee {
  private salary: number = 0; // Private property

  // Setter method
  public setSalary(amount: number): void {
    if (amount > 0) {
      this.salary = amount;
    } else {
      console.log("Invalid salary amount");
    }
  }

  // Getter method
  public getSalary(): number {
    return this.salary;
  }
}

// Create object and use setter/getter
const emp = new Employee();
emp.setSalary(50000);
console.log(emp.getSalary()); // Output: 50000

// console.log(emp.salary); // ❌ Error: Property 'salary' is private and only accessible within class 'Employee'
`}
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li><code>private salary</code> cannot be accessed outside the class.</li>
  <li><code>setSalary()</code> ensures controlled modification (validation included).</li>
  <li><code>getSalary()</code> returns the value securely.</li>
  <li>Direct property access is blocked, keeping data safe.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Encapsulation with Getters/Setters (Short Syntax)</h3>
<p className="leading-relaxed mb-4">
  TypeScript also supports ECMAScript-style getter and setter syntax for encapsulated access.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Balance cannot be negative!");
    }
  }
}

const account = new BankAccount();
account.balance = 10000; // Setter called
console.log(account.balance); // Getter called → 10000
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Why Encapsulation?</h3>
<p className="leading-relaxed mb-4">
  Encapsulation provides the following advantages:
</p>

<ul className="list-disc list-inside mb-4">
  <li>Protects private data from unintended access or modification.</li>
  <li>Improves code modularity and maintainability.</li>
  <li>Allows validation and logging through controlled access methods.</li>
  <li>Ensures cleaner and safer object design.</li>
</ul>

<p className="leading-relaxed mb-4">
  In TypeScript, it’s a best practice to keep sensitive data <strong>private</strong> 
  and provide <strong>getter/setter</strong> methods for controlled access.
</p>



      </>
    ),
  },
  "cpp_polymorphism.asp": {
    title: "typescript Classes",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-yellow-200 mt-10">
  TypeScript Polymorphism
</h2>

<p className="leading-relaxed mb-4">
  <strong>Polymorphism</strong> means “many forms”. It allows a single method name to perform different actions 
  depending on the object that calls it.  
  In TypeScript, polymorphism is primarily achieved through <strong>method overriding</strong> 
  in an inheritance hierarchy.
</p>

<p className="leading-relaxed mb-4">
  For example, a base class <code>Animal</code> defines a method <code>makeSound()</code>, 
  and subclasses like <code>Pig</code>, <code>Dog</code>, and <code>Bird</code> override this method 
  to produce their unique sounds.
</p>

<ul className="list-disc list-inside mb-4">
  <li>Pig: wee wee</li>
  <li>Dog: bow wow</li>
  <li>Bird: tweet tweet</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Base class
class Animal {
  makeSound(): void {
    console.log("The animal makes a sound");
  }
}

// Derived class
class Pig extends Animal {
  override makeSound(): void {
    console.log("The pig says: wee wee");
  }
}

// Derived class
class Dog extends Animal {
  override makeSound(): void {
    console.log("The dog says: bow wow");
  }
}

// Derived class
class Bird extends Animal {
  override makeSound(): void {
    console.log("The bird says: tweet tweet");
  }
}

// Array of different animals (Polymorphism in action)
const animals: Animal[] = [new Animal(), new Pig(), new Dog(), new Bird()];

for (const animal of animals) {
  animal.makeSound(); // Calls the appropriate version of makeSound()
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
  This demonstrates <strong>runtime polymorphism</strong>: each subclass provides its own implementation of 
  the <code>makeSound()</code> method, and TypeScript calls the correct one based on the object instance.
</p>

<h3 className="text-xl font-medium mb-3">Key Points</h3>
<ul className="list-disc list-inside mb-4">
  <li><strong>Method Overriding:</strong> Child class redefines a parent class method.</li>
  <li><strong>Runtime Behavior:</strong> The actual method called depends on the object type at runtime.</li>
  <li><strong>Override Keyword:</strong> TypeScript’s <code>override</code> keyword ensures the base method exists — 
      helping prevent accidental errors.</li>
  <li><strong>Polymorphic Arrays:</strong> A single array can hold multiple subclass objects, and each behaves differently.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Why Use Polymorphism?</h3>
<ul className="list-disc list-inside mb-4">
  <li>Makes code flexible and extensible.</li>
  <li>Reduces code duplication by reusing base class interfaces.</li>
  <li>Allows consistent method names across different subclasses with different behaviors.</li>
</ul>

      </>
    ),
  },




  "cpp_data_structures.asp": {
    title: "javascript Data Structures ",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Data Structures
</h2>

<p className="leading-relaxed mb-4">
  In JavaScript, data structures help store and organize data efficiently. 
  JavaScript provides several built-in types like <code>Array</code>, <code>Object</code>, <code>Set</code>, <code>Map</code>, and <code>Queue</code>, 
  which make handling data flexible and dynamic.
</p>

<p className="leading-relaxed mb-4">
  These structures allow developers to manage data — add, remove, or update elements — 
  easily without worrying about static memory sizes.
</p>

<h3 className="text-xl font-medium mb-3">Common Data Structures in JavaScript</h3>

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
    <strong>Dynamic Typing</strong> — JavaScript variables can hold any data type, even inside arrays or objects.
  </li>
  <li>
    <strong>Built-in Methods</strong> — Use methods like <code>push()</code>, <code>pop()</code>, <code>set()</code>, <code>delete()</code>, and <code>forEach()</code> 
    for easy data manipulation.
  </li>
</ul>

<p className="leading-relaxed mb-4">
  In JavaScript, data structures are flexible and powerful — perfect for handling real-world applications and algorithms alike.
</p>


      </>
    ),
  },
  "cpp_vectors.asp": {
    title: "javascript arrays",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Arrays
</h2>

<p className="leading-relaxed mb-4">
  An array in JavaScript is a dynamic list — it can store multiple items and can grow or shrink as needed.
</p>

<p className="leading-relaxed mb-4">
  Arrays are one of the most commonly used data structures in JavaScript. 
  They can hold elements of any data type — numbers, strings, objects, or even other arrays.
</p>

<p className="leading-relaxed mb-4">
  Arrays are built-in in JavaScript — no need to import or include anything.
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
  or use negative indexing logic with <code>at()</code> method in modern JavaScript.
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
    title: "python Stack",

    content: (
      <>
     <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Stack
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
    title: "javascript Queue",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-yellow-200 mt-10">
  JavaScript Queue
</h2>

<p className="leading-relaxed mb-4">
  A <strong>queue</strong> in JavaScript is a data structure that follows the{" "}
  <strong>FIFO</strong> (First In, First Out) principle.  
  The first element added is the first one removed — just like people standing in a line 🧍‍♂️🧍‍♀️.
</p>

<p className="leading-relaxed mb-4">
  JavaScript doesn’t have a built-in queue class, but you can easily implement one using{" "}
  <code>Array</code> and its <code>push()</code> and <code>shift()</code> methods.
</p>

<h3 className="text-xl font-medium mb-3">Create a Queue</h3>
<p className="leading-relaxed mb-2">
  You can initialize a queue using an empty array or with some starting elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    let queue = []; <br />
    // or <br />
    let queue = ["Volvo", "BMW", "Ford"]; <br /><br />
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
  Use a simple <code>if</code> condition to check if the queue is empty.
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
  JavaScript queues are easy to implement using arrays.  
  For performance-heavy tasks, you can create a custom <code>Queue</code> class using two stacks 
  or use <code>LinkedList</code>-based structures in libraries like <code>collections</code> or <code>datastructures-js</code>.
</p>


      </>
    ),
  },

  "cpp_dequeue.asp": {
    title: "javascript Dequeue",

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
    title: "javascript Set",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Set
</h2>

<p className="leading-relaxed mb-4">
  A <strong>Set</strong> in JavaScript stores <strong>unique</strong> values of any type — whether primitive values or object references.  
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
  Duplicate values are ignored automatically in a JavaScript Set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    let cars = new Set(["Volvo", "BMW", "Ford", "BMW", "Mazda"]); <br />
    console.log(cars); // Set(4);
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
  JavaScript sets don’t have an <code>update()</code> method, but you can add multiple items using a loop or array iteration.
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
  JavaScript Sets don’t have built-in union/intersection methods,  
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
  JavaScript <code>Set</code> is powerful for handling unique data, removing duplicates,  
  and performing simple mathematical set operations efficiently.
</p>


      </>
    ),
  },
  

  "cpp_iterators.asp": {
    title: "javascript Iterator",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  JavaScript Iterators
</h2>

<p className="leading-relaxed mb-4">
  <strong>Iterators</strong> in JavaScript are special objects used to{" "}
  <strong>loop and access</strong> elements one by one from collections
  like arrays, sets, or maps. Iteration means going through items step by step.
</p>

<h3 className="text-xl font-medium mb-3">Basic Iterator Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars = ["Volvo", "BMW", "Ford", "Mazda"];

const iterator = cars[Symbol.iterator]();

console.log(iterator.next().value); // Volvo
console.log(iterator.next().value); // BMW
console.log(iterator.next().value); // Ford
console.log(iterator.next().value); // Mazda`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>
    <code>Symbol.iterator</code> returns an iterator object from an array.
  </li>
  <li>
    <code>next()</code> returns an object with <code>value</code> and{" "}
    <code>done</code> properties.
  </li>
  <li>
    When <code>done</code> is true, iteration is complete.
  </li>
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
{`const cars = ["Volvo", "BMW", "Ford", "Mazda"];

for (const car of cars) {
  console.log(car);
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Manual Iteration with while Loop</h3>
<p className="leading-relaxed mb-4">
  You can also manually iterate using <code>next()</code> and{" "}
  <code>while</code>:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars = ["Volvo", "BMW", "Ford", "Mazda"];
const iterator = cars[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Creating a Custom Iterator</h3>
<p className="leading-relaxed mb-4">
  You can define a custom iterator by implementing the{" "}
  <code>Symbol.iterator</code> method in an object.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const count = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
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
  Use <code>Array.prototype.reverse()</code> or a simple{" "}
  <code>for</code> loop to iterate backwards:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const cars = ["Volvo", "BMW", "Ford", "Mazda"];

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
{`let cars = ["Volvo", "BMW", "Ford", "Mazda"];

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
  Many JavaScript features use iterators under the hood — like{" "}
  <code>map()</code>, <code>filter()</code>, and <code>for...of</code>.  
  These don’t store all values; they <strong>generate</strong> them as needed.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`const nums = [1, 2, 3, 4, 5];
const squares = nums.map(n => n * n);

for (const s of squares) {
  console.log(s); // 1, 4, 9, 16, 25
}`}
  </pre>
</div>


      </>
    ),
  },


};


