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
  { label: "python HOME", href: "cpp_home.asp" },
  { label: "python Intro", href: "cpp_intro.asp" },
  { label: "python Get Started", href: "cpp_get_started.asp" },
  {
    label: "python Syntax",
    href: "cpp_syntax.asp",
    isHeader: true,
    children: [
      { label: "python Syntax", href: "cpp_syntax.asp" },
      { label: "python Statements", href: "cpp_statements.asp" },
    ]
  },
  {
    label: "python Output",
    href: "cpp_output.asp",
    isHeader: true,
    children: [

      { label: "Print Text", href: "cpp_output.asp" },
      { label: "Print Numbers", href: "cpp_output_numbers.asp" },
      { label: "New Lines", href: "cpp_new_lines.asp" },
    ]
  },
  { label: "python Comments", href: "cpp_comments.asp" },
  {
    label: "python Variables",
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
  { label: "python User Input", href: "cpp_user_input.asp" },
  {
    label: "python Data Types",
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
    label: "python Operators",
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
    label: "python Strings",
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
  { label: "python Math", href: "cpp_math.asp" },
  {
    label: "python If..Else",
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
    label: "python While loop",
    href: "cpp_while.asp",
    isHeader: true,
    children: [
      { label: "While", href: "cpp_while.asp" },
      { label: "Do/While", href: "cpp_do_while_loop.asp" },

    ]
  },
  {
    label: "python For loop",
    href: "cpp_For_loop.asp",
    isHeader: true,
    children: [
      { label: "For Loop", href: "cpp_For_loop.asp" },
      { label: "Nested Loop", href: "cpp_nested_loop.asp" },
      { label: "The Foreach Loop", href: "cpp_for_each_loop.asp" },

    ]
  },

  { label: "python Break/Continue", href: "cpp_break_continue.asp" },
  {
    label: "python Arrays",
    href: "cpp_arrays.asp",
    isHeader: true,
    children: [
      { label: "Array", href: "cpp_arrays.asp" },
      { label: "Array and Loop", href: "cpp_arrays_loops.asp" },

    ]
  },


  {
    label: "python Functions",
    href: "cpp_functions.asp",
    isHeader: true,
    children: [
      { label: "Functions", href: "cpp_functions.asp" },
      { label: "Functions Parameters", href: "cpp_functions_parameters.asp" },
      { label: "Functions Overloading ", href: "cpp_functions_overloading.asp" },
      { label: "Scope ", href: "cpp_functions_scope.asp" },
      { label: "Recursion ", href: "cpp_functions_recursion.asp" },
      { label: "Lambda ", href: "cpp_functions_lambda.asp" },

    ]
  },
  {
    label: "python Classes",
    href: "cpp_oops.asp",
    isHeader: true,
    children: [
      { label: "C++ OOP", href: "cpp_oops.asp" },
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
    label: "python Data Structures",
    href: "cpp_data_structures.asp",
    isHeader: true,
    children: [
      { label: "python Data Structures ", href: "cpp_data_structures.asp" },
      
      { label: "List ", href: "cpp_list.asp" },
      { label: "Stack", href: "cpp_stack.asp" },
      { label: "Queue", href: "cpp_queue.asp" },
      { label: "Dequeue", href: "cpp_dequeue.asp" },
      { label: "Sets", href: "cpp_sets.asp" },
      { label: "Dictionarys", href: "cpp_maps.asp" },
      { label: "Iterators", href: "cpp_iterators.asp" },

    ]
  },

];
export const tutorialContent: Record<string, TopicContent> = {
  "cpp_home.asp": {
    title: "python tutorial",

    content: (
      <>
        {/* Overview */}
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          python Tutorial
        </h2>

        <p className=" leading-relaxed mb-4 ">
          <strong>python</strong> is a popular programming language. It is widely used in data science and is one of the most used languages in <strong> AI/ML</strong>.
        </p>

       

        {/* Example Code */}
       {/* Example Code */}
<h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400"># Python program to print Hello World</span>
    <br />
    <span className="text-green-600 dark:text-green-400">print</span>
    <span className="text-gray-100">("Hello, World!")</span>
  </pre>
</div>


      </>
    ),
  }
  ,
  "cpp_intro.asp": {
    title: "python Introduction",
    // subtitle: "What is python?",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What Is python?
        </h2>
        <p className=" leading-relaxed mb-4">
        It is used for:

        web development (server-side),
        software development,
        mathematics,
        system scripting..
        </p>
        <p className=" leading-relaxed mb-4">
          python was developed by Guido Van Rossum , a computer programmer in the Netherlands, created Python. , as an extension to the <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">C language</a>.
        </p>
        <p className=" leading-relaxed mb-8">
          python gives programmers a high level of control over system resources and memory.
        </p>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Why Use python
        </h2>
        <ul className="list-disc list-inside space-y-2  ml-4">
          <li>It is one of the world's most popular programming languages.</li>
          <li>It is used in operating systems, game development, and database systems.</li>
          <li>It is fast, powerful, and scalable.</li>
        </ul>
      </>
    ),
  },
  "cpp_get_started.asp": {
    title: "python Getting Started",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Get Started With python
        </h2>

        <p className="leading-relaxed mb-4">
          As you can try python without installing anything. Our Online python  Editor runs directly in your browser, and shows both the code and the result:
        </p>





        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-100">
    <span className="text-blue-600 dark:text-blue-400"># Python program to print Hello World</span><br />
    <span className="text-green-600 dark:text-green-400">print</span>
    <span className="text-gray-100">(</span>
    <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>
    <span className="text-gray-100">)</span>
  </p>
</div>


        <h3 className="text-xl font-medium  mb-3">Install python</h3>
        <p className=" leading-relaxed mb-4">
          If you want to run python on your own computer, you need two things:
        </p>
        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li>A text editor, like Notepad, to write python code</li>
          <li>A compiler, like GCC, to translate the python code into a language that the computer will understand</li>
        </ul>
        <p className=" leading-relaxed mb-4">
          There are many text editors and compilers to choose from. In the next steps, we will show you how to use an IDE that includes both.
        </p>

        <h3 className="text-xl font-medium  mb-3">Install python IDE</h3>
        <p className=" leading-relaxed mb-4">
          An <strong className="font-semibold">IDE (Integrated Development Environment)</strong> is used to edit AND compile the code. Popular IDEs include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug python code.
        </p>
        <p className=" leading-relaxed mb-4">
          Note: Web-based IDEs can work as well, but functionality is limited.
        </p>
        <p className=" leading-relaxed mb-4">
          We will use Code::Blocks in our tutorial, which we believe is a good place to start.
        </p>
        <p className=" leading-relaxed mb-4">
          You can find the latest version of Code::Blocks at <a href="http://www.codeblocks.org/" className="text-blue-600 dark:text-blue-400 underline">http://www.codeblocks.org/</a>. Download the <strong className="font-semibold">mingw-setup.exe</strong> file, which will install the text editor with a compiler.
        </p>

        <h3 className="text-xl font-medium  mb-3">python Quickstart</h3>
        <p className=" leading-relaxed mb-4">
          Let's create our first python file. . Write the following python code and save the file as <code>myfirstprogram.cpp</code>:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400"># Python program to print Hello World</span><br /><br />

    <span className="text-red-600 dark:text-red-400">print</span>(
      <span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>
    )
  </p>
</div>

      </>
    ),
  },


  // --- Syntax (New Content) ---
  "cpp_syntax.asp": {
    title: "python Syntax",


    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Syntax
</h2>

<p className="leading-relaxed mb-4">
  Let's break down the following code to understand it better:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>)
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Line 1:</strong> The <span className="font-mono">print()</span> function outputs text to the console. 
  Anything inside the parentheses and quotes will be displayed.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Note:</strong> Unlike C++, Python does not require a main function or header files like <span className="font-mono">&lt;iostream&gt;</span>. 
  It executes code directly from top to bottom.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>White Space:</strong> In Python, indentation (spaces or tabs at the beginning of a line) is **very important**. 
  It defines the structure of your code — for example, which statements belong to a function or a loop.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Semicolons:</strong> You do **not** need semicolons (<span className="font-mono">;</span>) at the end of each statement like in C++. 
  Python automatically detects where a line ends.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Curly Braces:</strong> Python doesn’t use <span className="font-mono">{'{'}</span> or <span className="font-mono">{'}'}</span>. 
  Instead, indentation controls code blocks.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Example with Function:</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">def</span> main():<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Hello, World!"</span>)<br /><br />
    <span className="text-red-600 dark:text-red-400">if</span> <span className="text-blue-600 dark:text-blue-400">__name__</span> == <span className="text-purple-600 dark:text-purple-400">"__main__"</span>:<br />
    &nbsp;&nbsp;main()
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>Explanation:</strong>  
  <ul className="list-disc ml-6">
    <li><span className="font-mono">def</span> defines a function.</li>
    <li><span className="font-mono">__name__ == "__main__"</span> ensures the code runs only when the file is executed directly, not imported.</li>
    <li>Indentation defines the scope — there are no curly braces.</li>
  </ul>
</p>

<p className="leading-relaxed mb-4">
  So, in Python, the same “Hello World” program is cleaner and easier to read than in C++.
</p>

      </>
    ),
  },
  // --- Statements (New Content) ---
  "cpp_statements.asp": {
    title: "python Syntax",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Statements
</h2>

<p className=" leading-relaxed mb-4">
  A <strong className='font-semibold'>computer program</strong> is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called <strong className='font-semibold'>statements</strong>.
</p>

<p className=" leading-relaxed mb-4">
  The following statement "instructs" the interpreter to print the text "Hello World" to the screen:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>) <span className="text-gray-500 dark:text-gray-400"># No semicolon needed in Python</span>
  </p>
</div>

<p className=" leading-relaxed mb-4">
  Unlike C++, you do <strong className='font-semibold'>not</strong> need to end a Python statement with a semicolon (<strong>;</strong>). If you add one, it will still work, but it’s not required and not considered good practice.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br />
    <span className="text-red-500 dark:text-red-400"># SyntaxError: EOL while scanning string literal</span>
  </p>
</div>

<h3 className="text-xl font-medium  mb-3">Many Statements</h3>
<p className=" leading-relaxed mb-4">
  Most Python programs contain many statements. The statements are executed, one by one, in the same order as they are written:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br />
    print(<span className="text-purple-600 dark:text-purple-400">"Have a good day!"</span>)<br />
  </p>
</div>

<p className=" leading-relaxed mb-4">
  <strong className='font-semibold'>Explanation:</strong><br />
  The first statement is executed first (prints "Hello World!" to the screen). Then the second statement is executed (prints "Have a good day!"). Python executes statements sequentially, from top to bottom.
</p>

      </>
    ),
  },


  // --- Output (Print Text) ---
  "cpp_output.asp": {
    title: "python Output",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Output (Print Text)
</h2>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">print()</span> function is used to output values and print text in Python. 
  Just remember to surround the text with either single quotes (<span className="font-mono">' '</span>) 
  or double quotes (<span className="font-mono">" "</span>).
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400"># This is a simple Python program</span><br /><br />

    <span className="text-red-600 dark:text-red-400">def</span> main():<br />
    &nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br /><br />

    <span className="text-red-600 dark:text-red-400">if</span> __name__ == <span className="text-purple-600 dark:text-purple-400">"__main__"</span>:<br />
    &nbsp;&nbsp;main()
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World!</p>
</div>

<p className="leading-relaxed mb-4">
  You can call the <span className="font-mono">print()</span> function multiple times. 
  By default, <span className="font-mono">print()</span> adds a <strong className='font-semibold'>new line</strong> 
  after each statement. If you want to print multiple values on the same line, use the <span className="font-mono">end</span> parameter.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400"># Print multiple statements without new line</span><br /><br />

    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>, end=<span className="text-purple-600 dark:text-purple-400">""</span>)<br />
    print(<span className="text-purple-600 dark:text-purple-400">"I am learning Python"</span>)
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World!I am learning Python</p>
</div>

      </>
    ),
  },


  // --- Output Numbers (New Content) ---
  "cpp_output_numbers.asp": {
    title: "python Output",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Print Numbers
</h2>

<p className="leading-relaxed mb-4">
  You can use the <span className="font-mono">print()</span> function to print numbers. 
  <strong className="font-semibold">Unlike text, numbers are NOT put inside quotes.</strong>
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

    <span className="text-blue-600 dark:text-blue-400"># Print a number</span><br /><br />

    print(<span className="text-blue-600 dark:text-blue-400">3</span>)
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 3</p>
</div>

<h3 className="text-xl font-medium mb-3">Mathematical Calculations</h3>

<p className="leading-relaxed mb-4">
  You can also perform mathematical calculations directly inside the <span className="font-mono">print()</span> function:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

    print(<span className="text-blue-600 dark:text-blue-400">3</span> + <span className="text-blue-600 dark:text-blue-400">3</span>)<br />
    print(<span className="text-blue-600 dark:text-blue-400">2</span> * <span className="text-blue-600 dark:text-blue-400">5</span>)
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 6 and 10</p>
</div>

      </>
    ),
  },
  // --- Output New Lines (New Content) ---
  "cpp_new_lines.asp": {
    title: "python Output",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  New Lines in Python
</h2>

<p className="leading-relaxed mb-4">
  To insert a new line in Python, you can use the 
  <strong className="font-semibold"> \n </strong> 
  character inside your string.
</p>

<h3 className="text-xl font-medium mb-3">Using \n Character</h3>

<p className="leading-relaxed mb-4">
  You can place <span className="font-mono">\n</span> inside the string to create a new line:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-blue-600 dark:text-blue-400"># Python program demonstrating new lines</span><br /><br />
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!\nI am learning Python"</span>)
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Result:<br />Hello World!<br />I am learning Python
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can also use multiple <span className="font-mono">\n</span> characters to create blank lines.
</p>

<h3 className="text-xl font-medium mb-3">Using Multiple print() Statements</h3>

<p className="leading-relaxed mb-4">
  In Python, instead of using <span className="font-mono">endl</span>, you can simply call multiple 
  <span className="font-mono">print()</span> statements — each automatically moves to a new line:
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br />
    print(<span className="text-purple-600 dark:text-purple-400">"I am learning Python"</span>)
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Result:<br />Hello World!<br />I am learning Python
  </p>
</div>

      </>
    ),
  },

  // --- Comments (New Content) ---
  "cpp_comments.asp": {
    title: "python comments",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Comments
</h2>

<p className="leading-relaxed mb-4">
  Comments are used to explain Python code and are ignored by the interpreter. They make your code easier to understand and can be used to temporarily disable parts of code during testing.
</p>

<h3 className="text-xl font-medium mb-3">Single-line Comments</h3>
<p className="leading-relaxed mb-4">
  Start with <strong className='font-semibold'>#</strong>. Any text after <strong>#</strong> on the same line is ignored by Python.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500"># This is a comment</span><br />
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br /><br />
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>) <span className="text-gray-500 dark:text-gray-400"># This is a comment at the end of a line</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Multi-line Comments</h3>
<p className="leading-relaxed mb-4">
  Python does not have a specific syntax for multi-line comments. However, you can use 
  <strong className='font-semibold'> triple quotes (''' or """) </strong> to achieve the same effect.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500 dark:text-gray-400">'''<br />
    The code below will print "Hello World!"<br />
    to the screen, and it is amazing<br />
    '''</span><br />
    print(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)
  </p>
</div>

      </>
    ),
  },


  // --- Variables (New Content) ---
  "cpp_variables.asp": {
    title: "python Variables",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Variables
</h2>

<p className="leading-relaxed mb-4">
  Variables are <strong className='font-semibold'>containers for storing data values</strong>. 
  In Python, you don’t need to specify the data type explicitly — 
  the type is determined automatically based on the assigned value.
</p>

<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li><strong>int</strong> - stores integers (whole numbers), such as 123 or -123</li>
  <li><strong>float</strong> - stores decimal numbers, such as 19.99 or -19.99</li>
  <li><strong>str</strong> - stores text, such as "Hello World"</li>
  <li><strong>bool</strong> - stores values with two states: True or False</li>
</ul>

<h3 className="text-xl font-medium mb-3">Declaring (Creating) Variables</h3>
<p className="leading-relaxed mb-4">
  In Python, you just write the variable name, then assign it a value using <strong>=</strong>:
</p>

<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  variableName = value
</p>

<h3 className="text-xl font-medium mb-3">Example: Assigning a Value</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = <span className="text-blue-600 dark:text-blue-400">15</span><br />
    print(myNum) <span className="text-gray-500 dark:text-gray-400"># Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Declaring Without Assigning Value</h3>
<p className="leading-relaxed mb-4">
  In Python, you cannot leave a variable uninitialized. You must assign at least <strong>None</strong>:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = None<br />
    myNum = <span className="text-blue-600 dark:text-blue-400">15</span><br />
    print(myNum) <span className="text-gray-500 dark:text-gray-400"># Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Changing Variable Values</h3>
<p className="leading-relaxed mb-4">
  Assigning a new value to an existing variable will <strong>overwrite</strong> the previous value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = <span className="text-blue-600 dark:text-blue-400">15</span>  <span className="text-gray-500 dark:text-gray-400"># myNum is 15</span><br />
    myNum = <span className="text-blue-600 dark:text-blue-400">10</span>  <span className="text-gray-500 dark:text-gray-400"># Now myNum is 10</span><br />
    print(myNum)  <span className="text-gray-500 dark:text-gray-400"># Outputs 10</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Other Types</h3>
<p className="leading-relaxed mb-4">Demonstration of other variable types:</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myInt = <span className="text-blue-600 dark:text-blue-400">5</span>           <span className="text-gray-500 dark:text-gray-400"># Integer</span><br />
    myFloat = <span className="text-blue-600 dark:text-blue-400">5.99</span>     <span className="text-gray-500 dark:text-gray-400"># Floating point</span><br />
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span> <span className="text-gray-500 dark:text-gray-400"># String</span><br />
    myBoolean = <span className="text-blue-600 dark:text-blue-400">True</span>    <span className="text-gray-500 dark:text-gray-400"># Boolean</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Display Variables</h3>
<p className="leading-relaxed mb-4">
  Use the <span className="font-mono">print()</span> function to display variable values:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myAge = <span className="text-blue-600 dark:text-blue-400">35</span><br />
    print(<span className="text-purple-600 dark:text-purple-400">"I am"</span>, myAge, <span className="text-purple-600 dark:text-purple-400">"years old."</span>)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Combine Variables</h3>
<p className="leading-relaxed mb-4">
  Combine text and variables using commas or formatted strings:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    name = <span className="text-purple-600 dark:text-purple-400">"John"</span><br />
    age = <span className="text-blue-600 dark:text-blue-400">35</span><br />
    height = <span className="text-blue-600 dark:text-blue-400">6.1</span><br /><br />
    print(f<span className="text-purple-600 dark:text-purple-400">"{'{'}name{'}'} is {'{'}age{'}'} years old and {'{'}height{'}'} feet tall."</span>)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Variables Together</h3>
<p className="leading-relaxed mb-4">
  You can also add numeric variables using the <span className="font-mono">+</span> operator:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = <span className="text-blue-600 dark:text-blue-400">5</span><br />
    y = <span className="text-blue-600 dark:text-blue-400">6</span><br />
    sum = x + y<br />
    print(sum) <span className="text-gray-500 dark:text-gray-400"># Outputs 11</span>
  </p>
</div>

      </>
    ),
  },
  // --- Multiple Variables (New Content) ---
  "cpp_variables_multiple.asp": {
    title: "python Variables",

    content: (
      <>
      <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Declare Many Variables
</h2>

<p className=" leading-relaxed mb-4">
  In Python, you can declare <strong className='font-semibold'>multiple variables</strong> on a single line. 
  This helps make your code shorter and more readable.
</p>

<h3 className="text-xl font-medium  mb-3">Declare Multiple Variables in One Line</h3>
<p className=" leading-relaxed mb-4">
  To declare more than one variable, use a <strong className='font-semibold'>comma-separated list</strong>. 
  Each variable can be assigned its own value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x, y, z = <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">50</span><br />
    print(x + y + z) <span className="text-gray-500 dark:text-gray-400"># Outputs 61</span>
  </p>
</div>

<h3 className="text-xl font-medium  mb-3">Assign One Value to Multiple Variables</h3>
<p className=" leading-relaxed mb-4">
  You can also assign the <strong className='font-semibold'>same value</strong> to multiple variables in one line. 
  This is useful when all variables should start with the same value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 ">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = y = z = <span className="text-blue-600 dark:text-blue-400">50</span> <span className="text-gray-500 dark:text-gray-400"># All set to 50</span><br />
    print(x + y + z) <span className="text-gray-500 dark:text-gray-400"># Outputs 150</span>
  </p>
</div>

<p className=" leading-relaxed mb-4">
  <strong className='font-semibold'>Explanation:</strong><br />
  - First, declare multiple variables using commas.<br />
  - Then, optionally assign the same value to all variables using a single statement.<br />
  - Finally, perform operations on these variables just like any other variable.
</p>

      </>
    ),
  },

  // --- Identifiers (New Content) ---
  "cpp_variables_identifiers.asp": {
    title: "python Variables",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Identifiers
</h2>

<p className="leading-relaxed mb-4">
  All Python variables must be identified with <strong className="font-semibold">unique names</strong>, called <strong className="font-semibold">identifiers</strong>.
  Identifiers can be short names (like <span className="font-mono">x</span> and <span className="font-mono">y</span>) or more descriptive names (like <span className="font-mono">age</span>, <span className="font-mono">sum</span>, <span className="font-mono">total_volume</span>).
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-gray-500 dark:text-gray-400"># Good: descriptive name</span><br />
    minutes_per_hour = 60<br /><br />
    <span className="text-gray-500 dark:text-gray-400"># OK: short, but not descriptive</span><br />
    m = 60
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Rules for Naming Variables</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>Names can contain letters, digits, and underscores.</li>
  <li>Names must begin with a letter or an underscore (<span className="font-mono">_</span>).</li>
  <li>Names are <strong className="font-semibold">case-sensitive</strong> (e.g., <span className="font-mono">myVar</span> and <span className="font-mono">myvar</span> are different variables).</li>
  <li>Names cannot contain whitespaces or special characters like <span className="font-mono">!</span>, <span className="font-mono">#</span>, <span className="font-mono">%</span>, etc.</li>
  <li>Reserved words (like <span className="font-mono">class</span> or <span className="font-mono">for</span>) cannot be used as names.</li>
</ul>

      </>
    ),
  },

  // --- Constants (New Content) ---
  "cpp_variables_constants.asp": {
    title: "C++ Variables",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Constants
        </h2>

        <p className=" leading-relaxed mb-4">
          When you do not want others (or yourself) to change existing variable values, use the{" "}
          <strong className="font-semibold">const</strong> keyword. This declares the variable as{" "}
          <strong className="font-semibold">constant</strong>, meaning it is unchangeable and read-only.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">const int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// myNum will always be 15</span>
            <br />
            myNum = <span className="text-blue-600 dark:text-blue-400">10</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">//  error: assignment of read-only variable 'myNum'</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          You should always declare a variable as constant when you have values that are{" "}
          <strong className="font-semibold">unlikely to change</strong>.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">const int</span> minutesPerHour ={" "}
            <span className="text-blue-600 dark:text-blue-400">60</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Notes On Constants</h3>
        <p className=" leading-relaxed mb-4">
          When you declare a <strong className="font-semibold">constant variable</strong>, it must be assigned a
          value immediately. Otherwise, it will cause an error.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 mb-2">
            <span className="text-gray-500 dark:text-gray-400 ">//  Correct</span><br />
            <span className="text-red-600 dark:text-red-400">const int</span> minutesPerHour ={" "}
            <span className="text-blue-600 dark:text-blue-400">60</span>;
          </p>
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400 ">// Incorrect</span><br />
            <span className="text-red-600 dark:text-red-400">const int</span> minutesPerHour;<br />
            minutesPerHour = <span className="text-blue-600 dark:text-blue-400">60</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// error</span>
          </p>
        </div>
      </>
    ),
  },

  "cpp_variables_reallife.asp": {
    title: "python Variables",
    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Real-Life Examples
</h2>

<h3 className="text-xl font-medium mb-3">Student Data</h3>
<p className="leading-relaxed mb-4">
  Example program storing different data about a college student:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    student_id = <span className="text-blue-600 dark:text-blue-400">15</span><br />
    student_fee = <span className="text-blue-600 dark:text-blue-400">75.25</span><br />
    student_grade = <span className="text-purple-600 dark:text-purple-400">'B'</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Calculate the Area of a Rectangle</h3>
<p className="leading-relaxed mb-4">
  Program to calculate the area of a rectangle (by multiplying the length and width):
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    length = <span className="text-blue-600 dark:text-blue-400">4</span><br />
    width = <span className="text-blue-600 dark:text-blue-400">6</span><br /><br />
    area = length * width
  </p>
  <p className="mt-2 font-semibold">Result: 24</p>
</div>

      </>
    ),
  },

  // --- User Input (New Content) ---
  "cpp_user_input.asp": {
    title: "python User Input",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python User Input
</h2>

<p className="leading-relaxed mb-4">
  You have already learned that <strong className='font-semibold'>print()</strong> is used to output values.
  Now we will use <strong className='font-semibold'>input()</strong> to get user input.
</p>

<p className="leading-relaxed mb-4">
  <strong className='font-semibold'>input()</strong> is a built-in function that reads data entered by the user from the keyboard.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = input(<span className="text-purple-600 dark:text-purple-400">"Type a number: "</span>)<br />
    print(<span className="text-purple-600 dark:text-purple-400">"Your number is:"</span>, x)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good To Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong>print()</strong> is used for output.
  </li>
  <li>
    <strong>input()</strong> is used for taking user input from the keyboard.
  </li>
  <li>
    The <strong>input()</strong> function always returns data as a <strong>string</strong>.
    You can convert it using <span className="font-mono">int()</span> or <span className="font-mono">float()</span> when needed.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Creating a Simple Calculator</h3>
<p className="leading-relaxed mb-4">
  In this example, the user must input two numbers. Then we print the sum by adding the two numbers:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = int(input(<span className="text-purple-600 dark:text-purple-400">"Type a number: "</span>))<br />
    y = int(input(<span className="text-purple-600 dark:text-purple-400">"Type another number: "</span>))<br /><br />
    sum = x + y<br />
    print(<span className="text-purple-600 dark:text-purple-400">"Sum is:"</span>, sum)
  </p>
</div>

      </>
    ),
  },

  // --- Data Types (Basic) (New Content) ---
  "cpp_data_types.asp": {
    title: "python Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Data Types
</h2>

<p className="leading-relaxed mb-4">
  As explained in the Variables chapter, a variable in Python is created automatically when you assign a value to it.
  You don't need to declare it with a <strong className="font-semibold">specific data type</strong> like in C++.
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    my_num = <span className="text-blue-600 dark:text-blue-400">5</span> <span className="text-gray-500 dark:text-gray-400"># Integer (whole number)</span><br />
    my_float_num = <span className="text-blue-600 dark:text-blue-400">5.99</span> <span className="text-gray-500 dark:text-gray-400"># Floating point number</span><br />
    my_complex_num = <span className="text-blue-600 dark:text-blue-400">9.98j</span> <span className="text-gray-500 dark:text-gray-400"># Complex number</span><br />
    my_letter = <span className="text-purple-600 dark:text-purple-400">'D'</span> <span className="text-gray-500 dark:text-gray-400"># Character (string of length 1)</span><br />
    my_boolean = <span className="text-blue-600 dark:text-blue-400">True</span> <span className="text-gray-500 dark:text-gray-400"># Boolean</span><br />
    my_text = <span className="text-purple-600 dark:text-purple-400">"Hello"</span> <span className="text-gray-500 dark:text-gray-400"># String</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Basic Data Types in Python</h3>
<p className="leading-relaxed mb-4">
  In Python, data types define the <strong className="font-semibold">type of data</strong> a variable can hold.  
  Python is dynamically typed, so the type is assigned automatically when a value is given.
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
        <td className="py-2 px-4 font-mono">int</td>
        <td className="py-2 px-4">x = 5</td>
        <td className="py-2 px-4">Stores whole numbers without decimals.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">float</td>
        <td className="py-2 px-4">x = 5.75</td>
        <td className="py-2 px-4">Stores numbers with decimals.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">complex</td>
        <td className="py-2 px-4">x = 2 + 3j</td>
        <td className="py-2 px-4">Stores complex numbers (with imaginary part).</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">bool</td>
        <td className="py-2 px-4">x = True</td>
        <td className="py-2 px-4">Stores boolean values: True or False.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">str</td>
        <td className="py-2 px-4">x = "Hello"</td>
        <td className="py-2 px-4">Stores a sequence of characters (text).</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">list</td>
        <td className="py-2 px-4">x = [1, 2, 3]</td>
        <td className="py-2 px-4">Stores an ordered, changeable list of items.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">tuple</td>
        <td className="py-2 px-4">x = (1, 2, 3)</td>
        <td className="py-2 px-4">Stores an ordered, unchangeable sequence of items.</td>
      </tr>
      <tr>
        <td className="py-2 px-4 font-mono">dict</td>
        <td className="py-2 px-4">x = {"{"}"name": "Ayush", "age": 21{"}"}</td>
        <td className="py-2 px-4">Stores key-value pairs (like a map).</td>
      </tr>
    </tbody>
  </table>
</div>

      </>
    ),
  },

  // --- Numeric Data Types (New Content) ---
  "cpp_data_types_numeric.asp": {
    title: "python Data Types",

    content: (
      <>
       <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Numeric Data Types
</h2>

<p className="leading-relaxed mb-4">
  In Python, numbers can be of three main types:
  <strong className="font-semibold"> int</strong> for whole numbers,
  <strong className="font-semibold"> float</strong> for decimals, and
  <strong className="font-semibold"> complex</strong> for numbers with imaginary parts.
</p>

<h3 className="text-xl font-medium mb-3">int</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = <span className="text-blue-600 dark:text-blue-400">1000</span><br />
    print(myNum){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 1000</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">float</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = <span className="text-blue-600 dark:text-blue-400">5.75</span><br />
    print(myNum){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 5.75</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">complex</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNum = <span className="text-blue-600 dark:text-blue-400">3 + 5j</span><br />
    print(myNum){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs (3+5j)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">float vs. int</h3>
<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">int</strong> type stores whole numbers, while
  <strong className="font-semibold"> float</strong> stores decimals.
  <br /><br />
  Python automatically handles big integers and floating point precision,
  but for high-precision calculations, modules like{" "}
  <span className="font-mono">decimal</span> or{" "}
  <span className="font-mono">fractions</span> can be used.
</p>

<h3 className="text-xl font-medium mb-3">Scientific Numbers</h3>
<p className="leading-relaxed mb-4">
  Python also supports <strong>scientific notation</strong> using the letter
  <span className="font-mono">"e"</span> or <span className="font-mono">"E"</span>
  to represent powers of 10:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    f1 = <span className="text-blue-600 dark:text-blue-400">35e3</span><br />
    d1 = <span className="text-blue-600 dark:text-blue-400">12E4</span><br />
    print(f1) <span className="text-gray-500 dark:text-gray-400">// 35000.0</span><br />
    print(d1) <span className="text-gray-500 dark:text-gray-400">// 120000.0</span>
  </p>
</div>

{/* --- Boolean Data Types --- */}

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Booleans
</h2>

<p className="leading-relaxed mb-4">
  A boolean data type in Python is represented by{" "}
  <strong className="font-semibold">bool</strong> and can have only two values:
  <strong className="font-semibold"> True</strong> or{" "}
  <strong className="font-semibold"> False</strong>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    isCodingFun = <span className="text-blue-600 dark:text-blue-400">True</span><br />
    isFishTasty = <span className="text-blue-600 dark:text-blue-400">False</span><br />
    print(isCodingFun){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs True</span><br />
    print(isFishTasty){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs False</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Boolean Expressions</h3>
<p className="leading-relaxed mb-4">
  A <strong className="font-semibold">boolean expression</strong> compares values (like{" "}
  <span className="font-mono">&gt;</span> or{" "}
  <span className="font-mono">==</span>) and returns{" "}
  <strong className="font-semibold">True</strong> or{" "}
  <strong className="font-semibold">False</strong>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = <span className="text-blue-600 dark:text-blue-400">10</span><br />
    print(x == 10){" "}
    <span className="text-gray-500 dark:text-gray-400">// Returns True</span>
  </p>
</div>

      </>
    ),
  },


  // --- Character Data Types (New Content) ---
  "cpp_data_types_char.asp": {
    title: "python Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Character Data Types
</h2>

<p className="leading-relaxed mb-4">
  In Python, there is <strong className="font-semibold">no separate char type</strong>.
  A single character is simply a <strong className="font-semibold">string of length 1</strong>,
  enclosed in single (<code>'A'</code>) or double quotes (<code>"A"</code>).
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myGrade = <span className="text-purple-600 dark:text-purple-400">'B'</span><br />
    print(myGrade){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs B</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">ASCII and Unicode Values</h3>
<p className="leading-relaxed mb-4">
  Every character in Python has a corresponding{" "}
  <strong className="font-semibold">Unicode (or ASCII) value</strong>.
  You can convert between characters and their numeric codes using{" "}
  <code>ord()</code> and <code>chr()</code> functions.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    a = <span className="text-purple-600 dark:text-purple-400">'A'</span><br />
    b = <span className="text-purple-600 dark:text-purple-400">'B'</span><br />
    c = <span className="text-purple-600 dark:text-purple-400">'C'</span><br /><br />
    print(ord(a)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 65</span><br />
    print(chr(66)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs B</span><br />
    print(chr(67)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs C</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good to Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    Python strings (even single characters) are of type{" "}
    <code>str</code>, not <code>char</code>.
  </li>
  <li>
    <code>ord()</code> converts a character to its integer Unicode value.
  </li>
  <li>
    <code>chr()</code> converts an integer back to its character representation.
  </li>
</ul>

      </>
    ),
  },
  // --- String Data Types (New Content) ---
  "cpp_data_types_string.asp": {
    title: "python Data Types",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Character Data Types
</h2>

<p className="leading-relaxed mb-4">
  In Python, there is <strong className="font-semibold">no separate char type</strong>.
  A single character is simply a <strong className="font-semibold">string of length 1</strong>,
  enclosed in single (<code>'A'</code>) or double quotes (<code>"A"</code>).
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myGrade = <span className="text-purple-600 dark:text-purple-400">'B'</span><br />
    print(myGrade){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs B</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">ASCII and Unicode Values</h3>
<p className="leading-relaxed mb-4">
  Every character in Python has a corresponding{" "}
  <strong className="font-semibold">Unicode (or ASCII) value</strong>.
  You can convert between characters and their numeric codes using{" "}
  <code>ord()</code> and <code>chr()</code> functions.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    a = <span className="text-purple-600 dark:text-purple-400">'A'</span><br />
    b = <span className="text-purple-600 dark:text-purple-400">'B'</span><br />
    c = <span className="text-purple-600 dark:text-purple-400">'C'</span><br /><br />
    print(ord(a)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs 65</span><br />
    print(chr(66)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs B</span><br />
    print(chr(67)){" "}
    <span className="text-gray-500 dark:text-gray-400">// Outputs C</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Good to Know</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    Python strings (even single characters) are of type{" "}
    <code>str</code>, not <code>char</code>.
  </li>
  <li>
    <code>ord()</code> converts a character to its integer Unicode value.
  </li>
  <li>
    <code>chr()</code> converts an integer back to its character representation.
  </li>
</ul>

      </>
    ),
  },

  // --- Operators (Main) (New Content) ---
  "cpp_operators.asp": {
    title: "python Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Operators
</h2>

<p className="leading-relaxed mb-4">
  Operators are used to perform operations on variables and values. They are grouped into:
  <strong className='font-semibold'>Arithmetic</strong>, <strong className='font-semibold'>Assignment</strong>,
  <strong className='font-semibold'>Comparison</strong>, <strong className='font-semibold'>Logical</strong>,
  and <strong className='font-semibold'>Bitwise</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Example: Addition Operator</h3>
<p className="leading-relaxed mb-4">
  The <span className="font-mono">+</span> operator can add values, a variable and a value, or two variables:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    sum1 = 100 + 50 <span className="text-gray-500 dark:text-gray-400"># 150</span><br />
    sum2 = sum1 + 250 <span className="text-gray-500 dark:text-gray-400"># 400</span><br />
    sum3 = sum2 + sum2 <span className="text-gray-500 dark:text-gray-400"># 800</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Variables and Values</h3>
<p className="leading-relaxed mb-4">
  Operators can combine numbers and variables in any combination:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
    x = 100<br />
    y = 50<br />
    total = x + y <span className="text-gray-500 dark:text-gray-400"># 150</span>
  </p>
</div>

      </>
    ),
  },

  // --- Arithmetic Operators (New Content) ---
  "cpp_operators_arithmetic.asp": {
    title: "python  Operators",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Arithmetic Operators
</h2>

<p className="leading-relaxed mb-4">
  Operators like <span className="font-mono">+</span>, <span className="font-mono">-</span>, <span className="font-mono">*</span>, <span className="font-mono">/</span>, and <span className="font-mono">%</span> perform common mathematical operations.
</p>

<h3 className="text-xl font-medium mb-3">Modulus, Increment, Decrement</h3>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong className="font-semibold">% (Modulus):</strong> Returns the division remainder (e.g., <span className="font-mono">10 % 3 = 1</span>).
  </li>
  <li>
    <strong className="font-semibold">+= (Increment):</strong> Increases the value of a variable by 1 (e.g., <span className="font-mono">x += 1</span>).
  </li>
  <li>
    <strong className="font-semibold">-= (Decrement):</strong> Decreases the value of a variable by 1 (e.g., <span className="font-mono">x -= 1</span>).
  </li>
</ul>

      </>
    ),
  },

  // --- Assignment Operators (New Content) ---
  "cpp_operators_assignment.asp": {
    title: "python Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Assignment Operators
        </h2>
        <p className=" leading-relaxed mb-4">
          The basic assignment operator is <strong className='font-semibold'>=</strong>. <strong className='font-semibold'>Compound assignment operators</strong> combine an arithmetic operator with assignment (e.g., <span className="font-mono">+=</span>, <span className="font-mono">*=</span>).
        </p>
        <h3 className="text-xl font-medium  mb-3">Example: Compound Assignment</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 10;<br />
            x += 5; <span className="text-gray-500 dark:text-gray-400 ">// Same as x = x + 5 (x is now 15)</span><br />
            x *= 2; <span className="text-gray-500 dark:text-gray-400 ">// Same as x = x * 2 (x is now 30)</span>
          </p>
        </div>
        <h3 className="text-xl font-medium  mb-3">Real-Life Example: Tracking Savings</h3>
        <p className=" leading-relaxed mb-4">
          Use <span className="font-mono">+=</span> to add to an account balance:
          <span className="font-mono">savings += 50;</span>
        </p>
      </>
    ),
  },

  // --- Comparison Operators (New Content) ---
  "cpp_operators_comparison.asp": {
    title: "python Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Comparison Operators
</h2>

<p className="leading-relaxed mb-4">
  Comparison operators compare two values and return{" "}
  <strong className="font-semibold">True or False</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Operators</h3>
<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li><span className="font-mono">==</span> (Equal to)</li>
  <li><span className="font-mono">!=</span> (Not equal to)</li>
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
    age = <span className="text-blue-600 dark:text-blue-400">18</span><br />
    print(<span className="text-purple-600 dark:text-purple-400">age &gt;= 18</span>)
    <span className="text-gray-500 dark:text-gray-400">  # returns True</span>
  </p>
</div>

      </>
    ),
    
  },

  // --- Logical Operators (New Content) ---
  "cpp_operators_logical.asp": {
    title: "python Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Logical Operators
</h2>

<p className="leading-relaxed mb-4">
  Logical operators determine the logic between boolean expressions:
</p>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li>
    <strong className="font-semibold">and (Logical AND):</strong> True if <strong>both</strong> statements are true.
  </li>
  <li>
    <strong className="font-semibold">or (Logical OR):</strong> True if <strong>one</strong> of the statements is true.
  </li>
  <li>
    <strong className="font-semibold">not (Logical NOT):</strong> Reverses the result (True becomes False, False becomes True).
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Logical AND</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = <span className="text-blue-600 dark:text-blue-400">7</span><br />
    print(<span className="text-purple-600 dark:text-purple-400">x &lt; 5 and x &lt; 10</span>)
    <span className="text-gray-500 dark:text-gray-400">  # False, because x &lt; 5 is False</span>
  </p>
</div>

      </>
    ),
  },

  // --- Strings (New Content) ---
  "cpp_strings.asp": {
    title: "python Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Strings
</h2>

<p className="leading-relaxed mb-4">
  Strings are used for storing text or characters. For example,{" "}
  <span className="font-mono">"Hello World"</span> is a string.
</p>

<p className="leading-relaxed mb-4">
  A string variable contains a collection of characters surrounded by{" "}
  <strong className="font-semibold">single</strong> or{" "}
  <strong className="font-semibold">double quotes</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Example: Create a String Variable</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    greeting = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
  </p>
</div>


       
      </>
    ),
  },

  "cpp_strings_concatenation.asp": {
    title: "python String Concatenation",

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
          <span className="text-red-600 dark:text-red-400">first_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"John "</span><br />
          <span className="text-red-600 dark:text-red-400">last_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"Doe"</span><br />
          <span className="text-red-600 dark:text-red-400">full_name</span> = first_name + last_name<br />
          <span className="text-red-600 dark:text-red-400">print</span>(
          <span className="text-blue-600 dark:text-blue-400">full_name</span>){" "}
          <span className="text-gray-500 dark:text-gray-400"># Outputs John Doe</span>
        </p>
      </div>
    
      <p className="leading-relaxed mb-4">
        You can also add a space between strings directly inside quotes:
      </p>
    
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">first_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"John"</span><br />
          <span className="text-red-600 dark:text-red-400">last_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"Doe"</span><br />
          <span className="text-red-600 dark:text-red-400">full_name</span> = first_name +{" "}
          <span className="text-purple-600 dark:text-purple-400">" "</span> + last_name<br />
          <span className="text-red-600 dark:text-red-400">print</span>(
          <span className="text-blue-600 dark:text-blue-400">full_name</span>){" "}
          <span className="text-gray-500 dark:text-gray-400"># Outputs John Doe</span>
        </p>
      </div>
    
      <h3 className="text-xl font-medium mb-3">Using f-Strings (Recommended)</h3>
      <p className="leading-relaxed mb-4">
        In Python, you can also use <span className="font-mono">f-strings</span> to combine variables and text more cleanly:
      </p>
    
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">first_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"John"</span><br />
          <span className="text-red-600 dark:text-red-400">last_name</span> ={" "}
          <span className="text-purple-600 dark:text-purple-400">"Doe"</span><br />
          <span className="text-red-600 dark:text-red-400">full_name</span> = f
          <span className="text-purple-600 dark:text-purple-400">"{'{'}first_name{'}'} {'{'}last_name{'}'}"</span><br />
          <span className="text-red-600 dark:text-red-400">print</span>(
          <span className="text-blue-600 dark:text-blue-400">full_name</span>){" "}
          <span className="text-gray-500 dark:text-gray-400"># Outputs John Doe</span>
        </p>
      </div>
    </>
    
    ),
  },
  "cpp_strings_number_and_string_.asp": {
    title: "python Numbers and Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-blue-200 mt-10">
  Adding Numbers and Strings
</h2>

<p className="leading-relaxed mb-4">
  <strong>WARNING!</strong> Python also uses the{" "}
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
    x = 10<br />
    y = 20<br />
    z = x + y <span className="text-gray-500 dark:text-gray-400"> # z will be 30 (an integer)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding Strings</h3>
<p className="leading-relaxed mb-2">
  If you add two strings, the result will be a string concatenation:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = <span className="text-purple-600 dark:text-purple-400">"10"</span><br />
    y = <span className="text-purple-600 dark:text-purple-400">"20"</span><br />
    z = x + y <span className="text-gray-500 dark:text-gray-400"> # z will be "1020" (a string)</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Adding String and Number</h3>
<p className="leading-relaxed mb-2">
  If you try to add a number to a string, Python will raise an error:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = <span className="text-purple-600 dark:text-purple-400">"10"</span><br />
    y = 20<br />
    z = x + y <span className="text-gray-500 dark:text-gray-400"> # TypeError: can only concatenate str (not "int") to str</span>
  </p>
</div>

      </>
    ),
  },
  "cpp_strings_string_length_.asp": {
    title: "python String Length",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-blue-200 mt-10">
  String Length
</h2>

<p className="leading-relaxed mb-4">
  To get the length of a string in Python, use the{" "}
  <span className="font-mono">len()</span> function.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    txt = <span className="text-purple-600 dark:text-purple-400">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span><br />
    print(
      <span className="text-purple-600 dark:text-purple-400">
        f"The length of the txt string is: {'{'}len(txt){'}'}"
      </span>
    )<br />
    <span className="text-gray-500 dark:text-gray-400">
      # Output: The length of the txt string is: 26
    </span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  In Python, <span className="font-mono">len()</span> is a built-in function used for finding the number of characters in a string.
</p>

      </>
    ),
  },
  "cpp_strings_access_strings_.asp": {
    title: "python Access Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-blue-200 mt-10">
  Access Strings
</h2>

<p className="leading-relaxed mb-4">
  You can access the characters in a string by referring to its{" "}
  <strong className="font-semibold">index number</strong> inside square
  brackets <span className="font-mono">[]</span>.
</p>

<h3 className="text-xl font-medium mb-3">
  Example: Access the First Character
</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
    <br />
    print(myString[0]){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs H</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  String indexes start with <strong>0</strong>:{" "}
  <span className="font-mono">[0]</span> is the first character,{" "}
  <span className="font-mono">[1]</span> is the second, and so on.
</p>

<h3 className="text-xl font-medium mb-3">
  Example: Access the Second and Last Characters
</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
    <br />
    print(myString[1]){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs e</span>
    <br />
    print(len(myString) - 1){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 4 (last index)</span>
    <br />
    print(myString[len(myString) - 1]){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs o</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change String Characters</h3>

<p className="leading-relaxed mb-4">
  In Python, strings are <strong>immutable</strong>. You can’t change them directly.
  To modify a character, create a new string or convert it to a list.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
    <br />
    myString = 'J' + myString[1:]
    <br />
    print(myString){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs Jello</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access with Error Handling</h3>

<p className="leading-relaxed mb-4">
  There is no <span className="font-mono">at()</span> function in Python. You can
  safely handle index errors using a <span className="font-mono">try-except</span>{" "}
  block instead.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
    <br />
    try:
    <br />
    &nbsp;&nbsp;print(myString[0]){" "}
    <span className="text-gray-500 dark:text-gray-400"># H</span>
    <br />
    &nbsp;&nbsp;print(myString[1]){" "}
    <span className="text-gray-500 dark:text-gray-400"># e</span>
    <br />
    &nbsp;&nbsp;print(myString[len(myString) - 1]){" "}
    <span className="text-gray-500 dark:text-gray-400"># o</span>
    <br />
    except IndexError:
    <br />
    &nbsp;&nbsp;print("Index out of range")
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Modify Using List Conversion</h3>

<p className="leading-relaxed mb-4">
  You can convert the string into a list, change a character, and then join it
  back into a string.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myString = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>
    <br />
    chars = list(myString)
    <br />
    chars[0] = 'J'
    <br />
    myString = ''.join(chars)
    <br />
    print(myString){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs Jello</span>
  </p>
</div>

      </>
    ),
  },
  "cpp_strings_user_input_strings_.asp": {
    title: "python User Input Strings",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-green-200 mt-10">
  User Input Strings
</h2>

<p className="leading-relaxed mb-4">
  In Python, you can use the <span className="font-mono">input()</span> function to take user input as a string.
</p>

<h3 className="text-xl font-medium mb-2">Example</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    firstName = input(<span className="text-purple-600 dark:text-purple-400">"Type your first name: "</span>)
    <br />
    print(<span className="text-purple-600 dark:text-purple-400">"Your name is:"</span>, firstName)
    <br />
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      # Type your first name: John
      <br />
      # Your name is: John
    </span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  In Python, the <span className="font-mono">input()</span> function reads the entire line the user types, including spaces, by default. 
  So you don’t need to use a separate method like <span className="font-mono">getline()</span> in C++.
</p>

<h3 className="text-xl font-medium mb-2">Example: Full Name</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    fullName = input(<span className="text-purple-600 dark:text-purple-400">"Type your full name: "</span>)
    <br />
    print(<span className="text-purple-600 dark:text-purple-400">"Your name is:"</span>, fullName)
    <br />
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      # Type your full name: John Doe
      <br />
      # Your name is: John Doe
    </span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  Unlike C++, Python’s <span className="font-mono">input()</span> doesn’t stop reading when it encounters a space. 
  That means you can easily take full names, sentences, or any text input without extra steps.
</p>

<h3 className="text-xl font-medium mb-2">Example: Numeric Input Note</h3>

<p className="leading-relaxed mb-4">
  Remember that the <span className="font-mono">input()</span> function always returns a{" "}
  <strong>string</strong>. If you want to use the input as a number, convert it using{" "}
  <span className="font-mono">int()</span> or <span className="font-mono">float()</span>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    age = input(<span className="text-purple-600 dark:text-purple-400">"Enter your age: "</span>)
    <br />
    print(<span className="text-purple-600 dark:text-purple-400">"You entered age as:"</span>, age)
    <br />
    <br />
    <span className="text-gray-500 dark:text-gray-400">
      # Enter your age: 22
      <br />
      # You entered age as: 22
    </span>
    <br />
    <br />
    # Convert to integer:
    <br />
    age = int(age)
    <br />
    print(age + 1){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 23</span>
  </p>
</div>

      </>
    ),
  },




  // --- Math (New Content) ---
  "cpp_math.asp": {
    title: "python Math",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Math
</h2>

<p className="leading-relaxed mb-4">
  Python has many built-in functions and libraries that let you perform mathematical operations easily.
</p>

<h3 className="text-xl font-medium mb-3">Max and Min</h3>

<p className="leading-relaxed mb-4">
  The <span className="font-mono">max(x, y)</span> function returns the largest value, 
  and the <span className="font-mono">min(x, y)</span> function returns the smallest:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(max(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 10</span>
    <br />
    print(min(5, 10)){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 5</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Python <span className="font-mono">math</span> Module</h3>

<p className="leading-relaxed mb-4">
  Python’s <strong className="font-semibold">math</strong> module provides additional mathematical functions, 
  such as <span className="font-mono">sqrt()</span> (square root),{" "}
  <span className="font-mono">round()</span> (rounds a number), and{" "}
  <span className="font-mono">log()</span> (natural logarithm). 
  You can use it by importing the module:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    import math
    <br />
    <br />
    print(math.sqrt(64)){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 8.0</span>
    <br />
    print(round(2.6)){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 3</span>
    <br />
    print(math.log(2)){" "}
    <span className="text-gray-500 dark:text-gray-400"># Outputs 0.693...</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  You can explore more functions like{" "}
  <span className="font-mono">math.sin()</span>,{" "}
  <span className="font-mono">math.cos()</span>,{" "}
  <span className="font-mono">math.tan()</span>,{" "}
  and <span className="font-mono">math.pi</span> for trigonometry and constants.
</p>

      </>
    ),
  },

  // --- If..Else (Main) (New Content) ---
  "cpp_conditions.asp": {
    title: "python If ... Else",

    content: (
      <>
       <>
  <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
    Python Conditions and If Statements
  </h2>

  <p className="leading-relaxed mb-4">
    In Python, you can use conditional statements to perform different actions based on conditions. 
    The main conditional statements are:{" "}
    <span className="font-mono">if</span>,{" "}
    <span className="font-mono">elif</span>, and{" "}
    <span className="font-mono">else</span>.
  </p>

  <h3 className="text-xl font-medium mb-3">Comparison Conditions</h3>
  <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
    <li>Less than: <span className="font-mono">a &lt; b</span></li>
    <li>Less than or equal to: <span className="font-mono">a &lt;= b</span></li>
    <li>Greater than: <span className="font-mono">a &gt; b</span></li>
    <li>Greater than or equal to: <span className="font-mono">a &gt;= b</span></li>
    <li>Equal to: <span className="font-mono">a == b</span></li>
    <li>Not equal to: <span className="font-mono">a != b</span></li>
  </ul>

  <h3 className="text-xl font-medium mb-3">The if Statement</h3>
  <p className="leading-relaxed mb-4">
    The <span className="font-mono">if</span> statement executes a block of code only if a specified condition is{" "}
    <strong className="font-semibold">True</strong>.
  </p>

  <h3 className="text-xl font-medium mb-3">Syntax</h3>
  <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">if</span>{" "}
    condition:
    <br />
    &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code if condition is true</span>
  </p>

  <h3 className="text-xl font-medium mb-3">Example</h3>
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
    <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
      <span className="text-red-600 dark:text-red-400">x</span> ={" "}
      <span className="text-purple-600 dark:text-purple-400">10</span>
      <br />
      <span className="text-red-600 dark:text-red-400">y</span> ={" "}
      <span className="text-purple-600 dark:text-purple-400">20</span>
      <br />
      <span className="text-red-600 dark:text-red-400">if</span> x &lt; y:
      <br />
      &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">print</span>(
      <span className="text-purple-600 dark:text-purple-400">
        "x is less than y"
      </span>)
      <br />
      <span className="text-gray-500 dark:text-gray-400"># Output: x is less than y</span>
    </p>
  </div>
</>

      </>
    ),
  },

  // --- Else (New Content) ---
  "cpp_conditions_else.asp": {
    title: "python If ... Else",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  The else Statement
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">else</strong> statement is used to specify a block of code that will execute if the condition in the <strong className="font-semibold">if</strong> statement is <strong className="font-semibold">false</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">if</span> condition:<br />
    &nbsp;&nbsp;# block of code to be executed if condition is true<br />
    <span className="text-red-600 dark:text-red-400">else</span>:<br />
    &nbsp;&nbsp;# block of code to be executed if condition is false
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    time = 20<br />
    <span className="text-red-600 dark:text-red-400">if</span> time &lt; 18:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>)<br />
    <span className="text-red-600 dark:text-red-400">else</span>:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>)<br />
    <span className="text-gray-500 dark:text-gray-400 block mt-2"># Outputs "Good evening."</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<p className="leading-relaxed mb-4">
  In the example above, the variable <span className="font-mono">time</span> is set to 20, which is greater than 18.
  Therefore, the <span className="font-mono">if</span> condition is false, and the program executes the
  <span className="font-mono"> else </span> block, printing{" "}
  <strong className="font-semibold">"Good evening."</strong>.
  <br />
  If <span className="font-mono">time</span> were less than 18, the program would print{" "}
  <strong className="font-semibold">"Good day."</strong> instead.
</p>

      </>
    ),
  },

  // --- Else If (New Content) ---
  "cpp_conditions_elseif.asp": {
    title: "python If ... Else",

    content: (
      <>
    <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  The else Statement
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">else</strong> statement is used to specify a block of code that will execute if the condition in the <strong className="font-semibold">if</strong> statement is <strong className="font-semibold">false</strong>.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">if</span> condition:<br />
    &nbsp;&nbsp;# block of code to be executed if condition is true<br />
    <span className="text-red-600 dark:text-red-400">else</span>:<br />
    &nbsp;&nbsp;# block of code to be executed if condition is false
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    time = 20<br />
    <span className="text-red-600 dark:text-red-400">if</span> time &lt; 18:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>)<br />
    <span className="text-red-600 dark:text-red-400">else</span>:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>)<br />
    <span className="text-gray-500 dark:text-gray-400 block mt-2"># Outputs "Good evening."</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<p className="leading-relaxed mb-4">
  In the example above, the variable <span className="font-mono">time</span> is set to 20, which is greater than 18.
  Therefore, the <span className="font-mono">if</span> condition is false, and the program executes the
  <span className="font-mono"> else </span> block, printing{" "}
  <strong className="font-semibold">"Good evening."</strong>.
  <br />
  If <span className="font-mono">time</span> were less than 18, the program would print{" "}
  <strong className="font-semibold">"Good day."</strong> instead.
</p>
    
      </>
    ),
  },


  // --- Short Hand If Else (New Content) ---
  "cpp_conditions_shorthand.asp": {
    title: "python If ... Else",

    content: (
      <>
       <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Short Hand If...Else (Ternary Operator)
</h2>

<p className="leading-relaxed mb-4">
  The <strong className='font-semibold'>ternary operator</strong> in Python is a shorthand way to write simple <span className="font-mono">if else</span> statements.  
  It allows you to assign a value or execute an expression based on a condition — all in a single line.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="dark:text-white">variable</span> = <span className="text-blue-600 dark:text-blue-400">expressionTrue</span> <span className="text-red-600 dark:text-red-400">if</span> <span className="text-red-600 dark:text-red-400">condition</span> <span className="text-red-600 dark:text-red-400">else</span> <span className="text-blue-600 dark:text-blue-400">expressionFalse</span>
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>

<p className="leading-relaxed mb-2">
  Instead of writing a multi-line <span className="font-mono">if else</span> statement:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    time = 20<br />
    <span className="text-red-600 dark:text-red-400">if</span> time &lt; 18:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>)<br />
    <span className="text-red-600 dark:text-red-400">else</span>:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>)
  </p>
</div>

<p className="leading-relaxed mb-2">
  You can write it in one line using the ternary operator:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    time = 20<br />
    result = <span className="text-purple-600 dark:text-purple-400">"Good day."</span> <span className="text-red-600 dark:text-red-400">if</span> time &lt; 18 <span className="text-red-600 dark:text-red-400">else</span> <span className="text-purple-600 dark:text-purple-400">"Good evening."</span><br />
    <span className="text-blue-600 dark:text-blue-400">print</span>(result)
  </p>
</div>

      </>
    ),
  },


  // --- Nested If (New Content) ---
  "cpp_conditions_nested.asp": {
    title: "python If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Nested If
</h2>

<p className="leading-relaxed mb-4">
  A <strong className='font-semibold'>nested if</strong> statement in Python means having one <span className="font-mono">if</span> statement inside another.  
  It allows checking for another condition only if the first one is true.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">if</span> condition1:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code to run if condition1 is true</span><br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> condition2:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code to run if both condition1 and condition2 are true</span>
</p>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    x = 15<br />
    y = 25<br /><br />
    <span className="text-red-600 dark:text-red-400">if</span> x &gt; 10:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"x is greater than 10"</span>)<br /><br />
    &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># Nested if</span><br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> y &gt; 20:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"y is also greater than 20"</span>)
  </p>
</div>

<p className="leading-relaxed mb-4 font-semibold">
  Result:<br />
  x is greater than 10<br />
  y is also greater than 20
</p>

      </>
    ),
  },
  // --- Switch (New Content) ---
  "cpp_switch.asp": {
    title: "python Switch",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Match-Case (Switch Equivalent)
</h2>

<p className="leading-relaxed mb-4">
  Python does not have a traditional <strong className='font-semibold'>switch</strong> statement like C++ or Java.  
  However, starting from <strong className='font-semibold'>Python 3.10</strong>, you can use the <span className="font-mono">match-case</span> statement,  
  which works similarly to <strong>switch-case</strong> in other languages.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">match</span> expression:<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> value1:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;# code block<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> value2:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;# code block<br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> _:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;# default case block
</p>

<h3 className="text-xl font-medium mb-3">Example: Weekday Name</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    day = 4<br />
    <span className="text-red-600 dark:text-red-400">match</span> day:<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 1:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Monday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 2:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Tuesday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 3:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Wednesday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Thursday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 5:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Friday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 6:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Saturday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 7:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Sunday"</span>)
  </p>
  <p className="mt-2 font-semibold">Outputs "Thursday"</p>
</div>

<h3 className="text-xl font-medium mb-3">The case _ (Default Case)</h3>
<p className="leading-relaxed mb-4">
  The underscore <span className="font-mono">_</span> acts as the <strong className='font-semibold'>default</strong> case in Python's match-case.  
  It runs when no other case matches.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    day = 8<br />
    <span className="text-red-600 dark:text-red-400">match</span> day:<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 6:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Today is Saturday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 7:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Today is Sunday"</span>)<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> _:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Looking forward to the Weekend"</span>)
  </p>
  <p className="mt-2 font-semibold">Outputs "Looking forward to the Weekend"</p>
</div>

      </>
    ),
  },


  // --- While Loop (New Content) ---
  "cpp_while.asp": {
    title: "python While Loop",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python While Loop
</h2>

<p className="leading-relaxed mb-4 dark:text-gray-100">
  The <strong className='font-semibold'>while</strong> loop executes a block of code as long as a specified condition is <strong className='font-semibold'>True</strong>. Loops help repeat tasks efficiently and make the code cleaner.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">while</span> <span className="text-blue-600 dark:text-blue-400">condition</span>:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code block to be executed</span>
</p>

<h3 className="text-xl font-medium mb-3">Example: Counting Up</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    i = 0<br />
    <span className="text-red-600 dark:text-red-400">while</span> i &lt; 5:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(i)<br />
    &nbsp;&nbsp;i += 1
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
    countdown = 3<br />
    <span className="text-red-600 dark:text-red-400">while</span> countdown &gt; 0:<br />
    &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(countdown)<br />
    &nbsp;&nbsp;countdown -= 1<br />
    <span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Happy New Year!!"</span>)
  </p>

  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs: 3, 2, 1 followed by "Happy New Year!!"
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Note:</strong> Always update the variable in the condition (like <span className="font-mono">i += 1</span> or <span className="font-mono">countdown -= 1</span>) to avoid infinite loops.
</p>

<p className="leading-relaxed mb-4">
  <strong>Tip:</strong> The variable <span className="font-mono">i</span> is commonly used as a counter since it stands for "index" or "iterator".
</p>

      </>
    ),
  },
  "cpp_do_while_loop.asp": {
    title: "python Do/While Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Do/While Loop
</h2>

<p className="leading-relaxed mb-4">
  Python does not have a built-in <strong className="font-semibold">do/while</strong> loop, 
  but you can simulate it using a <span className="font-mono">while True</span> loop and a 
  <span className="font-mono">break</span> statement.
</p>

<h3 className="text-xl font-medium mb-3">Syntax (Simulated)</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  while True:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code block to be executed</span><br />
  &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> not condition:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>
</p>

<p className="leading-relaxed mb-4">
  This structure ensures the code runs <strong>at least once</strong> before checking the condition.
</p>

<h3 className="text-xl font-medium mb-3">Example: Counting Up</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    i = 0<br />
    while True:<br />
    &nbsp;&nbsp;print(i)<br />
    &nbsp;&nbsp;i += 1<br />
    &nbsp;&nbsp;if i &gt;= 5:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;break
  </p>
  <p className="mt-2 font-semibold text-black dark:text-gray-100">
    Outputs 0, 1, 2, 3, 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Condition False from Start</h3>
<p className="leading-relaxed mb-4">
  Even if the condition is false at the beginning, the simulated do/while loop executes 
  <strong>at least once</strong>:
</p>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    i = 10<br />
    while True:<br />
    &nbsp;&nbsp;print("i is", i)<br />
    &nbsp;&nbsp;i += 1<br />
    &nbsp;&nbsp;if i &lt; 5:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;break
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Practical Example: User Input</h3>
<p className="leading-relaxed mb-4">
  Keep asking the user to enter a positive number. The loop stops when the user enters 0 or a negative number:
</p>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    while True:<br />
    &nbsp;&nbsp;number = int(input("Enter a positive number: "))<br />
    &nbsp;&nbsp;if number &lt;= 0:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;break
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong> Python doesn’t have a native do/while loop, but you can use 
  <span className="font-mono">while True</span> and <span className="font-mono">break</span> 
  to achieve the same effect — ensuring the code runs at least once.
</p>

      </>
    ),
  },


  // --- For Loop (New Content) ---
  "cpp_For_loop.asp": {
    title: "python For Loop",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python For Loop
</h2>

<p className="leading-relaxed mb-4">
  In Python, the <strong className="font-semibold">for</strong> loop is used to iterate over a sequence 
  (like a list, tuple, dictionary, set, or string). It is simpler and more readable than a traditional C++ for loop.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">for</span> variable <span className="text-red-600 dark:text-red-400">in</span> sequence:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code block to execute</span>
</p>

<ul className="list-disc list-inside space-y-2 ml-4 mb-4">
  <li><strong>variable</strong>: Each item from the sequence is assigned to this variable in each iteration.</li>
  <li><strong>sequence</strong>: It can be a range, list, tuple, or any iterable object.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example: Print Numbers 0 to 4</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for i in range(5):<br />
    &nbsp;&nbsp;print(i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs 0, 1, 2, 3, 4</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Print Even Numbers 0 to 10</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for i in range(0, 11, 2):<br />
    &nbsp;&nbsp;print(i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs 0, 2, 4, 6, 8, 10</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Sum of Numbers 1 to 5</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    total = 0<br />
    for i in range(1, 6):<br />
    &nbsp;&nbsp;total += i<br />
    print("Sum is", total)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs 15</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Countdown from 5 to 1</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for i in range(5, 0, -1):<br />
    &nbsp;&nbsp;print(i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs 5, 4, 3, 2, 1</span>
  </p>
</div>

<p className="leading-relaxed mb-4">
  <strong>Summary:</strong> In Python, <span className="font-mono">for</span> loops are used to iterate through sequences 
  easily, without needing to manually set up an initializer, condition, or increment like in C++.
</p>

      </>
    ),
  },
  "cpp_nested_loop.asp": {
    title: "python Nested Loops",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Nested Loops
</h2>

<p className="leading-relaxed mb-4">
  You can place one loop inside another loop. This is called a{" "}
  <strong className="font-semibold">nested loop</strong>.  
  The inner loop runs completely for each iteration of the outer loop.
</p>

<h3 className="text-xl font-medium mb-3">Example: Outer and Inner Loops</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

    <span className="text-gray-500 dark:text-gray-400"># Outer loop</span><br />
    <span className="text-red-600 dark:text-red-400">for</span> i in range(1, 3):<br />
    &nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">"Outer:"</span>, i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Inner loop</span><br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> j in range(1, 4):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-purple-600 dark:text-purple-400">" Inner:"</span>, j)
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
    <span className="text-red-600 dark:text-red-400">for</span> i in range(1, 4):<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> j in range(1, 4):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(i * j, end=<span className="text-purple-600 dark:text-purple-400">" "</span>)<br />
    &nbsp;&nbsp;print()  <span className="text-gray-500 dark:text-gray-400"># Move to next line after inner loop</span>
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
  Nested loops are powerful for working with multi-level data, matrices, or pattern printing.  
  Each time the outer loop runs once, the inner loop completes all its iterations.
</p>

      </>
    ),
  },
  "cpp_for_each_loop.asp": {
    title: "python The foreach Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  The for-each Loop (Python)
</h2>

<p className="leading-relaxed mb-4">
  In Python, the <strong className="font-semibold">for-each loop</strong> is simply written using the <code className="font-mono">for</code> keyword.  
  It’s used to loop through elements in a list, tuple, string, or any iterable object.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">for</span> variable <span className="text-red-600 dark:text-red-400">in</span> iterable:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code block to execute</span>
</p>

<h3 className="text-xl font-medium mb-3">Example: Loop Through a List</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    my_numbers = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>]<br />
    <span className="text-red-600 dark:text-red-400">for</span> num <span className="text-red-600 dark:text-red-400">in</span> my_numbers:<br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(num)
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
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    text = <span className="text-purple-600 dark:text-purple-400">"HELLO"</span><br />
    <span className="text-red-600 dark:text-red-400">for</span> char <span className="text-red-600 dark:text-red-400">in</span> text:<br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(char)
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
    title: "python Break/Continue",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python break
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">break</strong> statement is used to <strong className="font-semibold">exit a loop</strong> immediately when a certain condition is met.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">for</span> i <span className="text-red-600 dark:text-red-400">in</span> <span className="text-purple-600 dark:text-purple-400">range</span>(10):<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> i == 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span><br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Stops when i is 4. Outputs 0, 1, 2, 3.</span>
  </p>
</div>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Python continue
</h2>

<p className="leading-relaxed mb-4">
  The <strong className="font-semibold">continue</strong> statement skips the current iteration and moves to the next one in the loop.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    <span className="text-red-600 dark:text-red-400">for</span> i <span className="text-red-600 dark:text-red-400">in</span> <span className="text-purple-600 dark:text-purple-400">range</span>(10):<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> i == 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span><br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(i)<br />
    <span className="text-gray-500 dark:text-gray-400"># Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Break and Continue in While Loops</h3>
<p className="leading-relaxed mb-4">
  Both <strong className="font-semibold">break</strong> and <strong className="font-semibold">continue</strong> can also be used inside <span className="font-mono">while</span> loops.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    i = <span className="text-blue-600 dark:text-blue-400">0</span><br />
    <span className="text-red-600 dark:text-red-400">while</span> i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>:<br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(i)<br />
    &nbsp;&nbsp;i += 1<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> i == 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span><br />
    <span className="text-gray-500 dark:text-gray-400"># Stops when i is 4. Outputs 0, 1, 2, 3.</span>
  </p>
</div>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    i = <span className="text-blue-600 dark:text-blue-400">0</span><br />
    <span className="text-red-600 dark:text-red-400">while</span> i &lt; <span className="text-blue-600 dark:text-blue-400">10</span>:<br />
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> i == 4:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;i += 1<br />
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span><br />
    &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">print</span>(i)<br />
    &nbsp;&nbsp;i += 1<br />
    <span className="text-gray-500 dark:text-gray-400"># Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
  </p>
</div>

      </>
    ),
  },

  // --- Arrays (New Content) ---
  "cpp_arrays.asp": {
    title: "python Arrays",

    content: (
      <>
       {/* Overview */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Lists
</h2>

<p className="leading-relaxed mb-4">
  In Python, arrays are usually represented using <span className="font-mono">lists</span>. 
  Lists are used to store multiple values in a single variable and can hold items of different data types.
</p>

{/* Declaring Lists */}
<h3 className="text-xl font-medium mb-3">Creating a List</h3>
<p className="leading-relaxed mb-4">
  In Python, you create a list by placing comma-separated values inside square brackets <code>[]</code>:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>]<br />
    myNums = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>]<br />
    <span className="text-gray-500 dark:text-gray-400"># Lists can store multiple values of the same or different types</span>
  </pre>
</div>

{/* Accessing List Elements */}
<h3 className="text-xl font-medium mb-3">Accessing List Elements</h3>
<p className="leading-relaxed mb-4">
  You can access list elements by referring to their index number inside square brackets <code>[]</code>. 
  Remember, indexes start from 0 — meaning <code>[0]</code> is the first element.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>]<br />
    print(cars[<span className="text-blue-600 dark:text-blue-400">0</span>]) <span className="text-gray-500 dark:text-gray-400"># Outputs: Volvo</span>
  </pre>
</div>

{/* Modifying List Elements */}
<h3 className="text-xl font-medium mb-3">Changing a List Element</h3>
<p className="leading-relaxed mb-4">
  You can modify a list item by assigning a new value to a specific index:
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>]<br />
    cars[<span className="text-blue-600 dark:text-blue-400">0</span>] = <span className="text-purple-600 dark:text-purple-400">"Opel"</span><br />
    print(cars[<span className="text-blue-600 dark:text-blue-400">0</span>]) <span className="text-gray-500 dark:text-gray-400"># Now outputs: Opel</span>
  </pre>
</div>

      </>
    ),
  },
  "cpp_arrays_loops.asp": {
    title: "python Arrays",

    content: (
      <>
        {/* Looping Through Lists */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Loop Through a List (Using For Loop)
</h2>

<p className="leading-relaxed mb-4">
  You can iterate through the elements of a list using a simple <span className="font-mono">for</span> loop.
</p>

<h3 className="text-xl font-medium mb-3">Example: Loop Through Strings</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>, <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>]<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> car <span className="text-red-600 dark:text-red-400">in</span> cars:<br />
    &nbsp;&nbsp;print(car)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs each car name</span>
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Outputting Index and Value</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>, <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>]<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> i, car <span className="text-red-600 dark:text-red-400">in</span> enumerate(cars):<br />
    &nbsp;&nbsp;print(i, <span className="text-purple-600 dark:text-purple-400">"="</span>, car)<br />
    <span className="text-gray-500 dark:text-gray-400"># Output: 0 = Volvo, 1 = BMW, etc.</span>
  </pre>
</div>

{/* For-Each Loop in Python */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  The For-Each Loop in Python
</h2>

<p className="leading-relaxed mb-4">
  Python’s <span className="font-mono">for</span> loop already behaves like a “for-each” loop — it automatically iterates over each element in a sequence such as a list, tuple, or string.
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">for</span> item <span className="text-red-600 dark:text-red-400">in</span> sequence:<br />
  &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400"># code block to execute</span>
</p>

<h3 className="text-xl font-medium mb-3">Example: Loop Through Integers</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    myNumbers = [<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>]<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> num <span className="text-red-600 dark:text-red-400">in</span> myNumbers:<br />
    &nbsp;&nbsp;print(num)<br />
    <span className="text-gray-500 dark:text-gray-400"># Prints each number</span>
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Loop Through Strings</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = [<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>, <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>]<br /><br />
    <span className="text-red-600 dark:text-red-400">for</span> car <span className="text-red-600 dark:text-red-400">in</span> cars:<br />
    &nbsp;&nbsp;print(car)<br />
    <span className="text-gray-500 dark:text-gray-400"># Outputs each car name</span>
  </pre>
</div>

      </>
    ),
  },



  "cpp_functions.asp": {
    title: "python Functions",

    content: (
      <>
       {/* Overview */}
<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Functions
</h2>

<p className="leading-relaxed mb-4">
  A function in Python is a block of code that runs only when it is called. You can pass data,
  known as <strong className="font-semibold">parameters</strong>, into a function.
  Functions help in writing reusable code — define once, use multiple times.
</p>

<h3 className="text-xl font-medium mb-3">Creating a Function</h3>
<p className="leading-relaxed mb-4">
  In Python, functions are defined using the <code>def</code> keyword followed by the function name and parentheses <code>()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def my_function():
    # code to be executed
    pass`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Example Explained:</strong><br />
  <code>my_function()</code> is the name of the function.<br />
  The <code>def</code> keyword is used to define it.<br />
  Inside the function body, you can write code that executes when the function is called.
</p>

<h3 className="text-xl font-medium mb-3">Calling a Function</h3>
<p className="leading-relaxed mb-4">
  Functions are executed when they are called. To call a function, simply write its name followed by parentheses <code>()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def my_function():
    print("I just got executed!")

my_function()   # Call the function`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> I just got executed!
</p>

<h3 className="text-xl font-medium mb-3">Calling a Function Multiple Times</h3>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def my_function():
    print("I just got executed!")

my_function()
my_function()
my_function()`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  I just got executed!<br />
  I just got executed!<br />
  I just got executed!
</p>

<h3 className="text-xl font-medium mb-3">Function Parameters</h3>
<p className="leading-relaxed mb-4">
  You can pass data to functions using parameters. Parameters are listed inside the parentheses in the function definition.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def greet(name):
    print("Hello, " + name + "!")

greet("Ayush")
greet("Riya")`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Hello, Ayush!<br />
  Hello, Riya!
</p>

<h3 className="text-xl font-medium mb-3">Return Values</h3>
<p className="leading-relaxed mb-4">
  Functions can return values using the <code>return</code> statement.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def add(a, b):
    return a + b

result = add(5, 3)
print(result)`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> 8
</p>

<h3 className="text-xl font-medium mb-3">Default Parameter Value</h3>
<p className="leading-relaxed mb-4">
  You can assign default values to parameters. If no argument is passed, the default value is used.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def greet(name="User"):
    print("Hello, " + name + "!")

greet()
greet("Ayush")`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Hello, User!<br />
  Hello, Ayush!
</p>

<h3 className="text-xl font-medium mb-3">Function with Multiple Parameters</h3>
<p className="leading-relaxed mb-4">
  You can define functions with more than one parameter.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
{`def full_name(first, last):
    print(first + " " + last)

full_name("Ayush", "Kataria")`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong> Ayush Kataria
</p>

      </>
    ),
  },
  "cpp_functions_parameters.asp": {
    title: "python Functions",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Parameters and Arguments
</h2>

<p className="leading-relaxed mb-4">
  Information can be passed to functions as <strong>parameters</strong>. Parameters act as variables inside the function definition.  
  The actual values passed to the function when it is called are known as <strong>arguments</strong>.
</p>

<p className="leading-relaxed mb-4">
  Parameters are specified after the function name, inside parentheses. You can add as many parameters as you want, separated by commas:
</p>

<h3 className="text-xl font-medium mb-3">Syntax</h3>
<p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm whitespace-pre-wrap break-words text-black dark:text-gray-200">
  <span className="text-red-600 dark:text-red-400">def</span> function_name(parameter1, parameter2):{" "}
  <span className="text-gray-500 dark:text-gray-400"># code to be executed</span>
</p>

<h3 className="text-xl font-medium mb-3">Example: Printing a Full Name</h3>
<p className="leading-relaxed mb-4">
  This function takes a <code>name</code> parameter. When the function is called, the argument is passed in and used inside the function:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`def my_function(fname):
    print(fname + " Refsnes")

my_function("Liam")
my_function("Jenny")
my_function("Anja")`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Liam Refsnes<br />
  Jenny Refsnes<br />
  Anja Refsnes
</p>

<h3 className="text-xl font-medium mb-3">Multiple Parameters</h3>
<p className="leading-relaxed mb-4">
  You can use multiple parameters, separated by commas. Note that when passing multiple arguments, they must match the parameter order.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
{`def my_function(fname, age):
    print(fname + " is " + str(age) + " years old.")

my_function("Liam", 3)
my_function("Jenny", 22)`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Output:</strong><br />
  Liam is 3 years old.<br />
  Jenny is 22 years old.
</p>

      </>
    ),
  }
  ,
  "cpp_functions_overloading.asp": {
    title: "python lamda",

    content: (
      <>
        
      </>
    ),
  },
  "cpp_functions_scope.asp": {
    title: "C++ Variable Scope",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Variable Scope
        </h2>

        <p className=" leading-relaxed mb-4">
          Now that you understand how functions work, it is important to learn how variables act inside and outside of functions.
        </p>

        <p className=" leading-relaxed mb-4">
          In C++, variables are only accessible inside the region they are created. This is called <strong>scope</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Local Scope</h3>
        <p className=" leading-relaxed mb-4">
          A variable created inside a function belongs to the local scope of that function, and can only be used inside that function:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`void myFunction() {
  // Local variable that belongs to myFunction
  int x = 5;

  // Print the variable x
  cout << x;
}

int main() {
  myFunction();
  return 0;
}`}
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          A local variable cannot be used outside the function it belongs to. If you try to access it outside the function, an error occurs:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`void myFunction() {
  // Local variable that belongs to myFunction
  int x = 5;
}

int main() {
  myFunction();

  // Print the variable x in the main function
  cout << x;
  return 0;
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Global Scope</h3>
        <p className=" leading-relaxed mb-4">
          A variable created outside of a function is called a global variable and belongs to the global scope.
          Global variables are available from within any scope, global and local:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`// Global variable x
int x = 5;

void myFunction() {
  // We can use x here
  cout << x << "\\n";
}

int main() {
  myFunction();

  // We can also use x here
  cout << x;
  return 0;
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Naming Variables</h3>
        <p className=" leading-relaxed mb-4">
          If you operate with the same variable name inside and outside of a function, C++ will treat them as two separate variables — one available in the global scope (outside the function) and one available in the local scope (inside the function):
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`// Global variable x
int x = 5;

void myFunction() {
  // Local variable with the same name as the global variable (x)
  int x = 22;
  cout << x << "\\n"; // Refers to the local variable x
}

int main() {
  myFunction();

  cout << x; // Refers to the global variable x
  return 0;
}`}
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          However, you should avoid using the same variable name for both globally and locally as it can lead to errors and confusion.
        </p>

        <p className=" leading-relaxed mb-4">
          In general, you should be careful with global variables, since they can be accessed and modified from any function:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Changing a Global Variable</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`// Global variable x
int x = 5;

void myFunction() {
  cout << ++x << "\\n"; // Increment the value of x by 1 and print it
}

int main() {
  myFunction();

  cout << x; // Print the global variable x
  return 0;
}
  // The value of x is now 6 (no longer 5)
`}
          </pre>
        </div>
      </>
    ),
  },
  "cpp_functions_recursion.asp": {
    title: "C++ Recursion",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Recursion
        </h2>

        <p className=" leading-relaxed mb-4">
          Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simpler problems which are easier to solve.
        </p>

        <p className=" leading-relaxed mb-4">
          Recursion may be a bit difficult to understand. The best way to figure out how it works is to experiment with it.
        </p>

        <h3 className="text-xl font-medium  mb-3">Recursion Example: Sum of Numbers</h3>
        <p className=" leading-relaxed mb-4">
          Adding two numbers together is easy to do, but adding a range of numbers is more complicated. In this example, recursion is used to sum numbers from 1 to 10:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int sum(int k) {
  if (k > 0) {
    return k + sum(k - 1);
  } else {
    return 0;
  }
}

int main() {
  int result = sum(10);
  cout << result;
  return 0;
}`}
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Example Explained:</strong><br />
          When <code>sum()</code> is called, it adds parameter <code>k</code> to the sum of all numbers smaller than <code>k</code> and returns the result. When <code>k</code> becomes 0, the function just returns 0. The program executes step by step as follows:
        </p>

        <ul className="list-disc list-inside mb-4 ">
          <li>10 + sum(9)</li>
          <li>10 + (9 + sum(8))</li>
          <li>10 + (9 + (8 + sum(7)))</li>
          <li>…</li>
          <li>10 + 9 + 8 + … + 1 + sum(0)</li>
          <li>10 + 9 + 8 + … + 1 + 0</li>
        </ul>

        <p className=" leading-relaxed mb-4">
          Since the function does not call itself when <code>k</code> is 0, the program stops there and returns the result. Be careful with recursion: an incorrect implementation can cause infinite loops or excessive memory/CPU usage. Properly written, recursion can be very efficient and elegant.
        </p>

        <h3 className="text-xl font-medium  mb-3">Countdown Example</h3>
        <p className=" leading-relaxed mb-4">
          This example demonstrates a recursive countdown:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`void countdown(int n) {
  if (n > 0) {
    cout << n << " ";
    countdown(n - 1);
  }
}

int main() {
  countdown(5);
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Factorial of a Number</h3>
        <p className=" leading-relaxed mb-4">
          This example uses recursion to calculate the factorial of 5:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int factorial(int n) {
  if (n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}

int main() {
  cout << "Factorial of 5 is " << factorial(5);
  return 0;
}`}
          </pre>
        </div>
      </>
    ),
  },
  "cpp_functions_lambda.asp": {
    title: "C++ Lambda Functions",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-7">
          C++ Lambda Functions
        </h2>

        <p className=" leading-relaxed mb-4">
          A lambda function is a small, anonymous function you can write directly in your code. It's useful when you need a quick function without naming it or declaring it separately. Think of it as a "mini function on the fly."
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className=" leading-relaxed mb-4">
          <code>[capture] (parameters) {'{'} code {'};'}</code><br />
          Don't worry about <code>[capture]</code> for now — just use empty brackets <code>[]</code>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Basic Lambda Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int main() {
  auto message = []() {
    cout << "Hello World!\\n";
  };

  message();
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4"><strong>Result:</strong> Hello World!</p>

        <h3 className="text-xl font-medium  mb-3">Lambda with Parameters</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`#include <iostream>
using namespace std;

int main() {
  auto add = [](int a, int b) {
    return a + b;
  };

  cout << add(3, 4);
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4"><strong>Result:</strong> 7</p>

        <h3 className="text-xl font-medium  mb-3">Passing Lambdas to Functions</h3>
        <p className=" leading-relaxed mb-4">
          You can pass a lambda as an argument to another function, telling it what action to perform:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`#include <iostream>
#include <functional>
using namespace std;

void myFunction(function<void()> func) {
  func();
  func();
}

int main() {
  auto message = []() {
    cout << "Hello World!\\n";
  };

  myFunction(message);
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          <strong>Result:</strong><br />
          Hello World!<br />
          Hello World!
        </p>

        <h3 className="text-xl font-medium  mb-3">Using Lambdas in Loops</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`#include <iostream>
using namespace std;

int main() {
  for (int i = 1; i <= 3; i++) {
    auto show = [i]() {
      cout << "Number: " << i << "\\n";
    };
    show();
  }
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          <strong>Result:</strong><br />
          Number: 1<br />
          Number: 2<br />
          Number: 3
        </p>

        <h3 className="text-xl font-medium  mb-3">Capture Clause []</h3>
        <p className=" leading-relaxed mb-4">
          Use <code>[]</code> to give the lambda access to variables outside it. Capture by value makes a copy:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int main() {
  int x = 10;
  auto show = [x]() {
    cout << x;
  };

  show();
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4"><strong>Result:</strong> 10</p>
        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> Changing <code>x</code> after defining the lambda does not affect the captured value.
        </p>

        <h3 className="text-xl font-medium  mb-3">Capture by Reference [&]</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int main() {
  int x = 10;

  auto show = [&x]() {
    cout << x;
  };

  x = 20;

  show();
  return 0;
}`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4"><strong>Result:</strong> 20</p>
        <p className=" leading-relaxed mb-4">
          The lambda sees the original <code>x</code> variable, so any changes are reflected.
        </p>

        <h3 className="text-xl font-medium  mb-3">Regular Functions vs Lambda Functions</h3>
        <p className=" leading-relaxed mb-4">
          Both allow you to group code and run it later, but they are used differently:
        </p>
        <ul className="list-disc list-inside mb-4 ">
          <li><strong>Use regular functions when:</strong> you plan to reuse it multiple times, the logic is long, or you need a clear name.</li>
          <li><strong>Use lambda functions when:</strong> you need it once, the code is short, or you want to pass it as an argument.</li>
        </ul>

        <h4 className="text-lg font-medium  mb-2">Examples</h4>
        <p className=" leading-relaxed mb-2"><strong>Regular Function:</strong></p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-4 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`int add(int a, int b) {
  return a + b;
}`}
          </pre>
        </div>

        <p className=" leading-relaxed mb-2"><strong>Lambda Function:</strong></p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 overflow-x-auto">
            {`auto add = [](int a, int b) {
  return a + b;
};`}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> The lambda version is great for quick, one-time operations or inline use.
        </p>
      </>
    ),
  },
  "cpp_oops.asp": {
    title: "python OOP",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-5">
  What is OOP in Python?
</h2>

<p className="leading-relaxed mb-4">
  OOP stands for <strong>Object-Oriented Programming</strong>. In Python, this paradigm is all about creating "objects" — entities that bundle both data (attributes) and behavior (methods) into a single unit.
</p>

<h3 className="text-xl font-medium mb-3">Advantages of OOP in Python</h3>
<p className="leading-relaxed mb-4">
  Using OOP in Python offers several key benefits in software development:
</p>
<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Clear Structure:</strong> Makes code organized and modular, especially in large projects.
  </li>
  <li>
    <strong>Reusability:</strong> Classes and inheritance make it easy to reuse and extend code.
  </li>
  <li>
    <strong>Faster Development:</strong> OOP encourages clean, maintainable, and scalable design.
  </li>
</ul>

<h3 className="text-xl font-medium mb-3">Classes and Objects in Python</h3>
<p className="leading-relaxed mb-4">
  In Python, everything is an object. Classes define the structure of these objects.
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
        A <strong>class</strong> is a blueprint for creating objects. It defines attributes (variables) and methods (functions) that belong to the object.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Object</td>
      <td className="p-2 border">
        An <strong>object</strong> is an instance of a class. It can access all attributes and methods defined in its class.
      </td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-medium mb-3">Procedural vs. Object-Oriented Programming</h3>

<p className="leading-relaxed mb-4">
  The main difference lies in how code is structured:
</p>
<ul className="list-disc ml-6 mb-4 leading-relaxed">
  <li>
    <strong>Procedural Programming:</strong> Focuses on writing functions that operate on data stored separately.
  </li>
  <li>
    <strong>Object-Oriented Programming:</strong> Organizes code around <strong>objects</strong> — combining data and behavior in one place.
  </li>
</ul>

<p className="leading-relaxed mb-4">
  In the next section, you'll learn how to define a class, create objects, and use constructors in Python.
</p>

      </>
    ),
  },
  "cpp_class_methods.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10" >
          Class Methods
        </h2>

        <p className=" leading-relaxed mb-4">
          <strong>Methods</strong> are functions that belong to a class. They define the behaviors and actions an object can perform.
        </p>

        <p className=" leading-relaxed mb-4">
          There are two ways to define methods for a class: <strong>inside</strong> the class definition or <strong>outside</strong> the class definition.
        </p>

        <h3 className="text-xl font-medium  mb-3">1. Define a Method Inside the Class</h3>
        <p className=" leading-relaxed mb-4">
          You can define the entire function body directly within the class. Call the method using the object name and dot syntax (<code>.</code>).
        </p>

        <h4 className="text-lg font-medium  mb-2">Inside Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* MyClass Definition */}
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> myMethod() {'{'}{' '}
            <span className="text-gray-500 dark:text-gray-400">// Method defined inside the class</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />{'}'};
            <br />
            <br />

            {/* main() Function and Object Usage */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyClass myObj;
            <br />&nbsp;&nbsp;myObj.myMethod();{' '}
            <span className="text-gray-500 dark:text-gray-400">// Call the method</span>
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />{'}'}
          </pre>
        </div>


        <h3 className="text-xl font-medium  mb-3">2. Define a Method Outside the Class</h3>
        <p className=" leading-relaxed mb-4">
          It's cleaner to <strong>declare</strong> the method inside the class and define the function body <strong>outside</strong>. This keeps the class declaration clean.
        </p>

        <p className=" leading-relaxed mb-4">
          To define a method outside the class, use the <strong>Scope Resolution Operator</strong> (<code>::</code>) to link the method back to its class:
        </p>

        <h4 className="text-lg font-medium  mb-2">Outside Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* MyClass Declaration */}
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> myMethod();
            &nbsp;
            <span className="text-gray-500 dark:text-gray-400">
      // Method declaration only
            </span>
            <br />
            {'}'};<br />
            <br />

            {/* Method Definition */}
            <span className="text-gray-500 dark:text-gray-400">
      // Method definition outside the class
            </span>
            <br />
            <span className="text-red-600 dark:text-red-400">void</span> MyClass::
            <span className="text-blue-600 dark:text-blue-400">myMethod</span>() {'{'}
            <br />&nbsp;&nbsp;
            cout &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">
              "Hello World!"
            </span>;
            <br />
            {'}'}<br />
            <br />

            {/* main() Function */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyClass myObj;
            <br />&nbsp;&nbsp;myObj.myMethod();
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <h3 className="text-xl font-medium  mb-3">Methods with Parameters</h3>
        <p className=" leading-relaxed mb-4">
          Class methods can accept parameters just like regular functions. In the example below, the <code>speed</code> method is defined outside the <code>Car</code> class and returns a value.
        </p>

        <h4 className="text-lg font-medium  mb-2">Parameters Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* Car Class Declaration */}
            <span className="text-red-600 dark:text-red-400">class</span> Car {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> speed(
            <span className="text-red-600 dark:text-red-400">int</span> maxSpeed);
            &nbsp;
            <span className="text-gray-500 dark:text-gray-400">
      // Declaration
            </span>
            <br />
            {'}'};<br />
            <br />

            {/* Method Definition */}
            <span className="text-red-600 dark:text-red-400">int</span> Car::
            <span className="text-blue-600 dark:text-blue-400">speed</span>(
            <span className="text-red-600 dark:text-red-400">int</span> maxSpeed) {'{'}{' '}
            <span className="text-gray-500 dark:text-gray-400">// Definition</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> maxSpeed;
            <br />
            {'}'}<br />
            <br />

            {/* main() Function */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Car myObj;
            <br />&nbsp;&nbsp;cout &lt;&lt; myObj.
            <span className="text-blue-600 dark:text-blue-400">speed</span>(200);{' '}
            <span className="text-gray-500 dark:text-gray-400">
      // Call the method with an argument
            </span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

      </>
    ),
  },
  "cpp_object.asp": {
    title: "python Classes and Objects",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Classes and Objects
</h2>

<p className="leading-relaxed mb-4">
  Python is an object-oriented programming language. Everything in Python is associated with classes and objects, along with their attributes and methods.
  For example, in real life, a car is an object. The car has attributes such as color and model, and methods such as start() and stop().
</p>

<p className="leading-relaxed mb-4">
  Attributes and methods are variables and functions that belong to a class. These are often called <strong>"class members"</strong>.
</p>

<p className="leading-relaxed mb-4">
  A class is a user-defined blueprint for creating objects. It defines how objects will behave and what data they will hold.
</p>

<h3 className="text-xl font-medium mb-3">Create a Class</h3>
<p className="leading-relaxed mb-4">
  To create a class in Python, use the <code>class</code> keyword.
</p>

<h4 className="text-lg font-medium mb-2">Example: MyClass</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-red-600 dark:text-red-400">class</span> MyClass:
    <span className="text-gray-500 dark:text-gray-400"># The class</span>
    <span className="text-red-600 dark:text-red-400">def</span> __init__(<span className="text-blue-600 dark:text-blue-400">self</span>):
        <span className="text-gray-500 dark:text-gray-400"># Attributes (instance variables)</span>
        <span className="text-blue-600 dark:text-blue-400">self</span>.myNum = <span className="text-green-600 dark:text-green-400">15</span>
        <span className="text-blue-600 dark:text-blue-400">self</span>.myString = <span className="text-purple-600 dark:text-purple-400">"Some text"</span>
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li>The <code>class</code> keyword defines a class called <code>MyClass</code>.</li>
  <li>The <code>__init__()</code> function is called automatically when an object is created.</li>
  <li><code>self</code> represents the instance of the class and allows access to attributes and methods.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create an Object</h3>
<p className="leading-relaxed mb-4">
  In Python, objects are created from classes by simply calling the class name as if it were a function.
</p>

<h4 className="text-lg font-medium mb-2">Example: Create and Use an Object</h4>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-gray-500 dark:text-gray-400"># Class definition</span>
<span className="text-red-600 dark:text-red-400">class</span> MyClass:
    <span className="text-red-600 dark:text-red-400">def</span> __init__(<span className="text-blue-600 dark:text-blue-400">self</span>):
        <span className="text-blue-600 dark:text-blue-400">self</span>.myNum = <span className="text-green-600 dark:text-green-400">15</span>
        <span className="text-blue-600 dark:text-blue-400">self</span>.myString = <span className="text-purple-600 dark:text-purple-400">"Some text"</span>

<span className="text-gray-500 dark:text-gray-400"># Create object and access attributes</span>
myObj = MyClass()
<span className="text-blue-600 dark:text-blue-400">print</span>(myObj.myNum)
<span className="text-blue-600 dark:text-blue-400">print</span>(myObj.myString)
  </pre>
</div>

      </>
    ),
  },



  "cpp_constructor.asp": {
    title: "python Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Constructors
</h2>

<p className="leading-relaxed mb-4">
  A constructor in Python is a special method that is automatically called when an object of a class is created.
  It is used to initialize the object’s attributes.
</p>

<h3 className="text-xl font-medium mb-2">Creating a Constructor</h3>
<p className="leading-relaxed mb-4">
  In Python, constructors are created using the <code>__init__()</code> method.
  This method is automatically called when you create a new object.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-gray-500 dark:text-gray-400"># Class with Constructor</span><br />
<span className="text-red-600 dark:text-red-400">class</span> MyClass:<br />
&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">def</span> __init__(<span className="text-blue-600 dark:text-blue-400">self</span>):<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">print</span>(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>)<br /><br />

<span className="text-gray-500 dark:text-gray-400"># Creating Object (Constructor gets called automatically)</span><br />
myObj = MyClass()
  </pre>
</div>

<h3 className="text-xl font-medium mb-2">Constructor Rules</h3>
<ul className="list-disc list-inside mb-4">
  <li>The constructor is always named <code>__init__</code>.</li>
  <li>It is automatically called when a new object is created.</li>
  <li>It is used to initialize object attributes.</li>
  <li>Every constructor has at least one parameter: <code>self</code>.</li>
</ul>

<h3 className="text-xl font-medium mb-2">Constructor with Parameters</h3>
<p className="leading-relaxed mb-4">
  You can also define constructors that take parameters to initialize attributes with specific values.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-gray-500 dark:text-gray-400"># Class with Parameterized Constructor</span><br />
<span className="text-red-600 dark:text-red-400">class</span> Car:<br />
&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">def</span> __init__(<span className="text-blue-600 dark:text-blue-400">self</span>, brand, model, year):<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.brand = brand<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.model = model<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.year = year<br /><br />

<span className="text-gray-500 dark:text-gray-400"># Creating objects</span><br />
car1 = Car(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"X5"</span>, 1999)<br />
car2 = Car(<span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mustang"</span>, 1969)<br /><br />

<span className="text-blue-600 dark:text-blue-400">print</span>(car1.brand, car1.model, car1.year)<br />
<span className="text-blue-600 dark:text-blue-400">print</span>(car2.brand, car2.model, car2.year)
  </pre>
</div>

<h3 className="text-xl font-medium mb-2">Constructor Defined Outside the Class?</h3>
<p className="leading-relaxed mb-4">
  In Python, you cannot define constructors outside the class like in C++. 
  All constructors must be defined inside the class itself using <code>__init__()</code>.
  However, you can use <strong>class methods</strong> or <strong>factory methods</strong> to achieve similar functionality.
</p>

<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

<span className="text-gray-500 dark:text-gray-400"># Using a class method as an alternative constructor</span><br />
<span className="text-red-600 dark:text-red-400">class</span> Car:<br />
&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">def</span> __init__(<span className="text-blue-600 dark:text-blue-400">self</span>, brand, model, year):<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.brand = brand<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.model = model<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">self</span>.year = year<br /><br />

&nbsp;&nbsp;@classmethod<br />
&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">def</span> from_string(cls, car_info):<br />
&nbsp;&nbsp;&nbsp;&nbsp;brand, model, year = car_info.split(<span className="text-purple-600 dark:text-purple-400">","</span>)<br />
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> cls(brand, model, <span className="text-blue-600 dark:text-blue-400">int</span>(year))<br /><br />

car1 = Car.from_string(<span className="text-purple-600 dark:text-purple-400">"BMW,X5,1999"</span>)<br />
car2 = Car.from_string(<span className="text-purple-600 dark:text-purple-400">"Ford,Mustang,1969"</span>)<br /><br />

<span className="text-blue-600 dark:text-blue-400">print</span>(car1.brand, car1.model, car1.year)<br />
<span className="text-blue-600 dark:text-blue-400">print</span>(car2.brand, car2.model, car2.year)
  </pre>
</div>

      </>
    ),
  },
  "cpp_access_specifiers.asp": {
    title: "python Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Access Modifiers
</h2>

<p className="leading-relaxed mb-4">
  In Python, access to class members (attributes and methods) is controlled by <strong>naming conventions</strong> rather than strict access specifiers like in C++.  
  Python uses <code>public</code>, <code>protected</code>, and <code>private</code> conventions.
</p>

<h3 className="text-xl font-medium mb-3">Public Members</h3>
<p className="leading-relaxed mb-4">
  By default, all attributes and methods in Python classes are public.  
  This means they can be accessed freely from outside the class.
</p>

<h4 className="text-lg font-medium mb-2">Example: Public Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass:
    # Public attribute
    def __init__(self):
        self.x = 25  # Public

# Create object
obj = MyClass()
print(obj.x)  # Accessible from outside
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Private Members</h3>
<p className="leading-relaxed mb-4">
  To make a member private, prefix its name with <code>__</code> (double underscore).  
  These members cannot be accessed directly from outside the class.
</p>

<h4 className="text-lg font-medium mb-2">Example: Private Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class MyClass:
    def __init__(self):
        self.__y = 50  # Private attribute

    def display(self):
        print("Accessing private member inside class:", self.__y)

obj = MyClass()
obj.display()  # Allowed
# print(obj.__y)  # ❌ Not allowed, raises AttributeError
`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  <strong>Note:</strong> Private members can still be accessed indirectly using name mangling:  
  <code>obj._ClassName__attribute</code>, but this is <strong>not recommended</strong> in practice.
</p>

<h3 className="text-xl font-medium mb-3">Protected Members</h3>
<p className="leading-relaxed mb-4">
  Members with a single underscore prefix (<code>_</code>) are considered <strong>protected</strong>.  
  They should not be accessed outside the class directly, but they can be accessed in subclasses.
</p>

<h4 className="text-lg font-medium mb-2">Example: Protected Members</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Parent:
    def __init__(self):
        self._protected = "I am protected"

class Child(Parent):
    def access_parent(self):
        print("Accessing protected member:", self._protected)

obj = Child()
obj.access_parent()  # ✅ Allowed (from child)
print(obj._protected)  # ⚠️ Possible but not recommended
`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Default Access</h3>
<p className="leading-relaxed mb-4">
  In Python, all members are <strong>public by default</strong>.  
  There’s no “private by default” rule like in C++.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Analogy</h3>
<ul className="list-disc list-inside mb-4">
  <li><strong>Public:</strong> Like a shop – everyone can enter.</li>
  <li><strong>Protected:</strong> Like a staff room – employees (child classes) can enter.</li>
  <li><strong>Private:</strong> Like your personal locker – only you can access it.</li>
</ul>

      </>
    ),
  },
  "cpp_encapsulation.asp": {
    title: "python Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Encapsulation
</h2>

<p className="leading-relaxed mb-4">
  <strong>Encapsulation</strong> in Python means restricting direct access to variables and methods to protect data integrity.  
  This is typically done by marking attributes as <code>private</code> (using double underscores <code>__</code>) and controlling access through <strong>getter</strong> and <strong>setter</strong> methods.
</p>

<p className="leading-relaxed mb-4">
  If you want others to read or modify a private attribute, define <code>public</code> methods to get or set the value.
</p>

<h3 className="text-xl font-medium mb-3">Real-Life Example</h3>
<p className="leading-relaxed mb-4">
  Think of an employee’s salary:
</p>
<ul className="list-disc list-inside mb-4">
  <li>The salary is private — employees can’t change it directly.</li>
  <li>Only HR or a manager can modify it through official methods.</li>
</ul>
<p className="leading-relaxed mb-4">
  Similarly, encapsulation ensures that sensitive data is hidden and can only be accessed through specific, controlled methods.
</p>

<h3 className="text-xl font-medium mb-3">Access Private Members</h3>
<p className="leading-relaxed mb-4">
  To achieve encapsulation in Python, define private attributes using double underscores (<code>__</code>)  
  and access them using getter and setter methods.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`class Employee:
    def __init__(self):
        self.__salary = 0  # Private attribute

    # Setter method
    def set_salary(self, amount):
        self.__salary = amount

    # Getter method
    def get_salary(self):
        return self.__salary


# Create object and use setter/getter
emp = Employee()
emp.set_salary(50000)
print(emp.get_salary())  # Output: 50000
`}
  </pre>
</div>

<h4 className="text-lg font-medium mb-2">Explanation</h4>
<ul className="list-disc list-inside mb-4">
  <li><code>__salary</code> is a private attribute — can’t be accessed directly.</li>
  <li><code>set_salary()</code> updates the private variable safely.</li>
  <li><code>get_salary()</code> returns its value.</li>
  <li>We use <code>emp.set_salary(50000)</code> to assign and <code>emp.get_salary()</code> to print.</li>
</ul>

<h3 className="text-xl font-medium mb-3">Why Encapsulation?</h3>
<p className="leading-relaxed mb-4">
  Encapsulation helps in:
</p>
<ul className="list-disc list-inside mb-4">
  <li>Protecting sensitive data from accidental modification.</li>
  <li>Improving maintainability — you can change class internals without breaking external code.</li>
  <li>Implementing validation inside setter methods for better control.</li>
</ul>

<p className="leading-relaxed mb-4">
  It’s considered good practice to declare class attributes as private in Python when you want to control how they’re accessed or modified.
</p>

      </>
    ),
  },
  "cpp_inheritance.asp": {
    title: "python Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Inheritance
</h2>

<h3 className="text-xl font-medium mb-3">Multilevel Inheritance</h3>
<p className="leading-relaxed mb-4">
  In Python, you can derive a class from another class, and then derive another class from it. 
  This forms a chain of inheritance. In this example, <code>GrandChild</code> inherits from <code>Child</code>, 
  which inherits from <code>Parent</code>.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Base class (parent)
class Parent:
    def my_function(self):
        print("Some content in parent class.")

# Derived class (child)
class Child(Parent):
    pass

# Derived class (grandchild)
class GrandChild(Child):
    pass

obj = GrandChild()
obj.my_function()

# Output: Some content in parent class.`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Multiple Inheritance</h3>
<p className="leading-relaxed mb-4">
  A Python class can inherit from multiple parent classes using commas in the parentheses.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Base class 1
class Parent1:
    def func1(self):
        print("This is from Parent1.")

# Base class 2
class Parent2:
    def func2(self):
        print("This is from Parent2.")

# Derived class
class Child(Parent1, Parent2):
    pass

obj = Child()
obj.func1()
obj.func2()

# Output:
# This is from Parent1.
# This is from Parent2.`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Protected Members and Inheritance</h3>
<p className="leading-relaxed mb-4">
  In Python, protected members are defined by prefixing the variable name with a single underscore (<code>_</code>). 
  They can still be accessed in derived classes.
</p>

<h4 className="text-lg font-medium mb-2">Example</h4>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Base class
class Employee:
    def __init__(self, salary):
        self._salary = salary  # Protected attribute

# Derived class
class Programmer(Employee):
    def __init__(self, salary, bonus):
        super().__init__(salary)
        self.bonus = bonus

    def display(self):
        print("Salary:", self._salary)
        print("Bonus:", self.bonus)

obj = Programmer(50000, 15000)
obj.display()

# Output:
# Salary: 50000
# Bonus: 15000`}
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Why Inheritance?</h3>
<p className="leading-relaxed mb-4">
  Inheritance helps in code reusability and organization. 
  You can create a base class for shared functionality and let derived classes extend or modify behavior as needed.
</p>


      </>
    ),
  },
  "cpp_polymorphism.asp": {
    title: "python Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 pb-2 border-b border-purple-200 mt-10">
  Python Polymorphism
</h2>

<p className="leading-relaxed mb-4">
  <strong>Polymorphism</strong> means "many forms". It allows the same method name to behave differently for different objects that share a common base class.
</p>

<p className="leading-relaxed mb-4">
  For example, a base class <code>Animal</code> can define a method <code>make_sound()</code>. 
  Derived classes like <code>Pig</code>, <code>Dog</code>, and <code>Bird</code> can override this method 
  to produce their unique sounds:
</p>

<ul className="list-disc list-inside mb-4">
  <li>Pig: wee wee</li>
  <li>Dog: bow wow</li>
  <li>Bird: tweet tweet</li>
</ul>

<h3 className="text-xl font-medium mb-3">Example</h3>
<div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Base class
class Animal:
    def make_sound(self):
        print("The animal makes a sound")

# Derived class
class Pig(Animal):
    def make_sound(self):
        print("The pig says: wee wee")

# Derived class
class Dog(Animal):
    def make_sound(self):
        print("The dog says: bow wow")

# Derived class
class Bird(Animal):
    def make_sound(self):
        print("The bird says: tweet tweet")

# Create objects
animals = [Animal(), Pig(), Dog(), Bird()]

for animal in animals:
    animal.make_sound()

# Output:
# The animal makes a sound
# The pig says: wee wee
# The dog says: bow wow
# The bird says: tweet tweet`}
  </pre>
</div>

<p className="leading-relaxed mb-4">
  This is an example of <strong>method overriding</strong>. 
  Each subclass defines its own version of <code>make_sound()</code>, 
  and Python automatically calls the correct version depending on the object type — this is polymorphism in action.
</p>

      </>
    ),
  },




  "cpp_data_structures.asp": {
    title: "python Data Structures ",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Data Structures
</h2>

<p className="leading-relaxed mb-4">
  In Python, data structures are used to store and organize data efficiently. 
  Python provides several built-in data structures like <code>list</code>, <code>tuple</code>, <code>set</code>, and <code>dictionary</code>, 
  which are very flexible and easy to use.
</p>

<p className="leading-relaxed mb-4">
  These structures allow you to handle data dynamically — add, remove, or update elements without worrying about size or memory management.
</p>

<h3 className="text-xl font-medium mb-3">Common Data Structures in Python</h3>

<table className="w-full text-left border border-gray-300 mb-6">
  <thead>
    <tr className="bg-purple-100">
      <th className="p-2 border">Data Structure</th>
      <th className="p-2 border">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 border font-semibold">List</td>
      <td className="p-2 border">
        A dynamic array that can hold mixed data types. Elements are accessible by index.
        Supports operations like append, remove, sort, and slicing.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Tuple</td>
      <td className="p-2 border">
        An immutable sequence of elements. Once created, elements cannot be modified.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Set</td>
      <td className="p-2 border">
        Stores unique elements in an unordered way. Supports mathematical set operations like union and intersection.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Dictionary</td>
      <td className="p-2 border">
        Stores data in key-value pairs. Keys must be unique. 
        It's similar to a "map" in C++ STL.
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Queue</td>
      <td className="p-2 border">
        Can be implemented using <code>collections.deque</code>. 
        Supports adding elements to the end and removing from the front (FIFO).
      </td>
    </tr>
    <tr>
      <td className="p-2 border font-semibold">Stack</td>
      <td className="p-2 border">
        Can be implemented using lists or <code>deque</code>. 
        Follows the LIFO (Last In, First Out) principle.
      </td>
    </tr>
  </tbody>
</table>

<h3 className="text-xl font-medium mb-3">Example: Using Lists</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    # Create a list called cars{"\n"}
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n\n"}
    # Print list elements{"\n"}
    for car in cars:{"\n"}
    &nbsp;&nbsp;print(car)
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Dictionary</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    # Create a dictionary of student marks{"\n"}
    marks = {"{"}"Ayush": 90, "Riya": 85, "Karan": 95{"}"}{"\n\n"}
    # Access values using keys{"\n"}
    print(marks["Ayush"])  # Output: 90
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Set</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    # Create a set{"\n"}
    numbers = {"{"}1, 2, 3, 4, 2, 3{"}"}{"\n"}
    print(numbers)  # Output: {"{"}1, 2, 3, 4{"}"}{"\n\n"}
    # Add and remove elements{"\n"}
    numbers.add(5){"\n"}
    numbers.remove(2)
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Example: Using Queue (deque)</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    from collections import deque{"\n\n"}
    queue = deque(["A", "B", "C"]){"\n"}
    queue.append("D")  # Add to end{"\n"}
    print(queue.popleft())  # Remove from front{"\n"}
    print(queue)
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Key Concepts</h3>
<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>
    <strong>Mutable vs Immutable</strong> — Lists, sets, and dicts are mutable; tuples are immutable.
  </li>
  <li>
    <strong>Dynamic Typing</strong> — Python data structures can hold mixed data types.
  </li>
  <li>
    <strong>Built-in Methods</strong> — Each structure comes with handy methods like <code>append()</code>, <code>pop()</code>, <code>update()</code>, etc.
  </li>
</ul>

<p className="leading-relaxed mb-4">
  In Python, data structures are high-level and flexible — making them super easy to use for both 
  algorithmic problems and real-world applications.
</p>

      </>
    ),
  },
  "cpp_vectors.asp": {
    title: "python Lists",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Lists
</h2>

<p className="leading-relaxed mb-4">
  A list in Python is like a dynamic array — it can store multiple items and grow or shrink as needed.
</p>

<p className="leading-relaxed mb-4">
  Both lists and arrays are data structures used to store multiple elements, but unlike C++ arrays, 
  Python lists are more flexible and can hold elements of different data types.
</p>

<p className="leading-relaxed mb-4">
  Lists are one of the most commonly used data structures in Python and come built-in — no need to import anything!
</p>

<h3 className="text-xl font-medium mb-3">Create a List</h3>
<p className="leading-relaxed mb-4">
  You can create a list by placing elements inside square brackets <code>[]</code>, separated by commas:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    # Create a list of cars{"\n"}
    cars = ["Volvo", "BMW", "Ford", "Mazda"]
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Accessing List Elements</h3>
<p className="leading-relaxed mb-4">
  You can access list elements using index numbers inside square brackets <code>[]</code>.
  Lists are zero-indexed, meaning <code>[0]</code> is the first element.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n\n"}
    print(cars[0])  # Outputs Volvo{"\n"}
    print(cars[1])  # Outputs BMW
  </pre>
</div>

<p className="leading-relaxed mb-4">
  You can also use negative indexing to access elements from the end, or the <code>len()</code> function to find list length.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n\n"}
    print(cars[-1])  # Outputs Mazda{"\n"}
    print(len(cars))  # Outputs 4
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Modify List Elements</h3>
<p className="leading-relaxed mb-4">
  You can modify elements directly using their index position.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n"}
    cars[0] = "Opel"{"\n"}
    print(cars)  # ['Opel', 'BMW', 'Ford', 'Mazda']
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements</h3>
<p className="leading-relaxed mb-4">
  Use <code>append()</code> to add elements to the end, or <code>insert()</code> to add at a specific position.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford"]{"\n"}
    cars.append("Tesla"){"\n"}
    cars.insert(1, "Toyota"){"\n"}
    print(cars)  # ['Volvo', 'Toyota', 'BMW', 'Ford', 'Tesla']
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements</h3>
<p className="leading-relaxed mb-4">
  Use <code>pop()</code> to remove by index, <code>remove()</code> to remove by value, 
  or <code>clear()</code> to empty the list completely.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n"}
    cars.pop()  # Removes last element{"\n"}
    cars.remove("BMW"){"\n"}
    print(cars)
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Check if List is Empty</h3>
<p className="leading-relaxed mb-4">
  You can check if a list is empty using <code>if not</code> or by comparing its length.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = []{"\n"}
    if not cars:{"\n"}
    &nbsp;&nbsp;print("List is empty")
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a List</h3>
<p className="leading-relaxed mb-4">
  You can loop through lists using a <code>for</code> loop or with <code>enumerate()</code> 
  to get both index and value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]{"\n\n"}
    for car in cars:{"\n"}
    &nbsp;&nbsp;print(car){"\n\n"}
    for index, car in enumerate(cars):{"\n"}
    &nbsp;&nbsp;print(index, car)
  </pre>
</div>

<h3 className="text-xl font-medium mb-3">List Comprehension</h3>
<p className="leading-relaxed mb-4">
  Python supports concise ways to create lists using list comprehensions.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
    numbers = [x for x in range(5)]{"\n"}
    print(numbers)  # [0, 1, 2, 3, 4]
  </pre>
</div>

<p className="leading-relaxed mb-4">
  Lists are one of the most powerful and frequently used data structures in Python, 
  perfect for storing, iterating, and manipulating collections of data dynamically.
</p>

      </>
    ),
  },


  "cpp_stack.asp": {
    title: "python Stack",

    content: (
      <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Stack
</h2>

<p className="leading-relaxed mb-4">
  A <strong>stack</strong> in Python follows the same <strong>LIFO</strong> (Last In, First Out) principle as in C++.
  The last element added is the first one to be removed — just like a stack of plates or pancakes 🍳.
</p>

<p className="leading-relaxed mb-4">
  In Python, stacks are typically implemented using <code>list</code> or the <code>collections.deque</code> module.
  The built-in <code>list</code> is simple and efficient for most stack operations.
</p>

<h3 className="text-xl font-medium mb-3">Create a Stack</h3>
<p className="leading-relaxed mb-2">
  You can create a stack by simply initializing an empty list.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = []  # Empty stack
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (push)</h3>
<p className="leading-relaxed mb-2">
  Use the <code>append()</code> method to add elements to the top of the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.append("Volvo") <br />
    cars.append("BMW") <br />
    cars.append("Ford") <br />
    cars.append("Mazda") <br /><br />
    # Stack now looks like: <br />
    # ['Volvo', 'BMW', 'Ford', 'Mazda']
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Top Element</h3>
<p className="leading-relaxed mb-2">
  Use <code>cars[-1]</code> to view the top element without removing it.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(cars[-1])  # Outputs 'Mazda'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Top Element</h3>
<p className="leading-relaxed mb-2">
  You can directly modify the top element using index <code>-1</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars[-1] = "Tesla" <br />
    print(cars[-1])  # Now outputs 'Tesla'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (pop)</h3>
<p className="leading-relaxed mb-2">
  Use <code>pop()</code> to remove the top element from the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.pop() <br />
    print(cars[-1])  # Now top element is 'Ford'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Stack Size</h3>
<p className="leading-relaxed mb-2">
  Use <code>len()</code> to get the number of elements in the stack.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(len(cars))  # Outputs 3
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Stack is Empty</h3>
<p className="leading-relaxed mb-2">
  Use a simple <code>if</code> condition to check if the stack is empty.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    if not cars: <br />
    &nbsp;&nbsp;print("Stack is empty") <br />
    else: <br />
    &nbsp;&nbsp;print("Stack is not empty")
  </p>
</div>

<p className="leading-relaxed mb-4">
  Python’s list-based stack is super simple and fast for most use cases.
  For more complex or thread-safe stacks, you can use <code>queue.LifoQueue</code> or <code>collections.deque</code>.
</p>

      </>
    ),
  },
  "cpp_queue.asp": {
    title: "python Queue",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Queue
</h2>

<p className="leading-relaxed mb-4">
  A <strong>queue</strong> in Python is a data structure that follows the <strong>FIFO</strong> (First In, First Out) principle.
  The first element added to the queue is the first one to be removed. Think of it like people standing in a line — 
  the first person to enter is the first to leave.
</p>

<p className="leading-relaxed mb-4">
  In Python, the most efficient way to implement a queue is by using <code>collections.deque</code> (pronounced “deck”), 
  which allows fast appends and pops from both ends.
</p>

<h3 className="text-xl font-medium mb-3">Importing deque</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    from collections import deque
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Create a Queue</h3>
<p className="leading-relaxed mb-2">
  Create a queue using <code>deque()</code>. You can also initialize it with some elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue = deque() <br />
    # or <br />
    queue = deque(["Volvo", "BMW", "Ford"]) <br /><br />
    print(queue)  # deque(['Volvo', 'BMW', 'Ford'])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (.append)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.append()</code> to add elements to the back of the queue.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue.append("Mazda") <br />
    queue.append("Tesla") <br /><br />
    print(queue)  # deque(['Volvo', 'BMW', 'Ford', 'Mazda', 'Tesla'])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Front and Back Elements</h3>
<p className="leading-relaxed mb-2">
  Access the first and last elements using index notation.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(queue[0])   # Front element → 'Volvo' <br />
    print(queue[-1])  # Back element → 'Tesla'
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Front and Back Elements</h3>
<p className="leading-relaxed mb-2">
  You can modify elements directly using index positions.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue[0] = "Kia" <br />
    queue[-1] = "VW" <br /><br />
    print(queue)  # deque(['Kia', 'BMW', 'Ford', 'Mazda', 'VW'])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (.popleft)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.popleft()</code> to remove the front element (the oldest one in the queue).
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    queue.popleft() <br />
    print(queue)  # deque(['BMW', 'Ford', 'Mazda', 'VW'])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Queue Size (len)</h3>
<p className="leading-relaxed mb-2">
  Use <code>len()</code> to find the number of elements in the queue.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(len(queue))  # 4
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Queue is Empty</h3>
<p className="leading-relaxed mb-2">
  You can check if the queue is empty using a simple <code>if</code> condition.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    if not queue: <br />
    &nbsp;&nbsp;print("Queue is empty") <br />
    else: <br />
    &nbsp;&nbsp;print("Queue is not empty")
  </p>
</div>

<p className="leading-relaxed mb-4">
  The <code>deque</code> module makes implementing queues in Python simple and efficient. 
  You can also use it for stacks or double-ended queues by adding and removing elements from both ends.
</p>

      </>
    ),
  },

  "cpp_dequeue.asp": {
    title: "python Dequeue",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Deque
</h2>

<p className="leading-relaxed mb-4">
  A <strong>deque</strong> (double-ended queue) in Python is a data structure that allows elements to be added or removed 
  from both ends efficiently. It combines the properties of stacks and queues, making it extremely versatile.
</p>

<h3 className="text-xl font-medium mb-3">Importing deque</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    from collections import deque
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Create a Deque</h3>
<p className="leading-relaxed mb-2">
  Create a deque using <code>deque()</code>. You can initialize it empty or with predefined elements.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = deque() <br />
    # or <br />
    cars = deque(["Volvo", "BMW", "Ford", "Mazda"]) <br /><br />
    for car in cars: <br />
    &nbsp;&nbsp;print(car)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Deque Elements</h3>
<p className="leading-relaxed mb-2">
  Access elements using index <code>[]</code>, or get the first and last elements using <code>[0]</code> and <code>[-1]</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(cars[0])   # First element <br />
    print(cars[1])   # Second element <br />
    print(cars[-1])  # Last element
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Deque Elements</h3>
<p className="leading-relaxed mb-2">
  You can modify deque elements directly by index.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars[0] = "Opel" <br />
    print(cars[0])   # Outputs "Opel"
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (append, appendleft)</h3>
<p className="leading-relaxed mb-2">
  Add elements to either end using <code>.append()</code> or <code>.appendleft()</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.appendleft("Tesla")   # Add to the front <br />
    cars.append("VW")          # Add to the back <br /><br />
    print(cars)  # deque(['Tesla', 'Opel', 'BMW', 'Ford', 'Mazda', 'VW'])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (popleft, pop)</h3>
<p className="leading-relaxed mb-2">
  Remove elements from the front or back using <code>.popleft()</code> or <code>.pop()</code>.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.popleft()  # Remove first element <br />
    cars.pop()      # Remove last element <br /><br />
    print(cars)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Deque Size (len)</h3>
<p className="leading-relaxed mb-2">
  Use <code>len()</code> to get the number of elements in the deque.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(len(cars))  # Prints number of elements
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Deque is Empty</h3>
<p className="leading-relaxed mb-2">
  Check whether the deque is empty using a simple condition.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    if not cars: <br />
    &nbsp;&nbsp;print("Deque is empty") <br />
    else: <br />
    &nbsp;&nbsp;print("Deque is not empty")
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a Deque</h3>
<p className="leading-relaxed mb-2">
  You can iterate through the deque using a simple <code>for</code> loop.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    # Traditional for loop <br />
    for i in range(len(cars)): <br />
    &nbsp;&nbsp;print(cars[i]) <br /><br />
    # For-each loop <br />
    for car in cars: <br />
    &nbsp;&nbsp;print(car)
  </p>
</div>

<p className="leading-relaxed mb-4">
  The <code>deque</code> is one of the most powerful and flexible data structures in Python. 
  It can act as both a queue and a stack, with efficient O(1) operations for insertion and deletion at both ends.
</p>

      </>
    ),
  },

  "cpp_sets.asp": {
    title: "python Set",

    content: (
      <>
       <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Set
</h2>

<p className="leading-relaxed mb-4">
  A <strong>set</strong> in Python stores <strong>unique</strong> elements in no specific order. Sets are mutable, but their elements must be immutable (like numbers, strings, or tuples).
</p>

<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>Elements are <strong>unordered</strong> (no fixed position).</li>
  <li>Elements are <strong>unique</strong>; duplicates are ignored automatically.</li>
  <li>Sets are <strong>mutable</strong> (you can add or remove items).</li>
  <li>Elements cannot be accessed by index (no slicing or indexing).</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create a Set</h3>
<p className="leading-relaxed mb-2">
  You can create a set using curly braces <code>{}</code> or the <code>set()</code> constructor.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"} <br />
    print(cars)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Unique Elements</h3>
<p className="leading-relaxed mb-2">
  Duplicate values are ignored automatically in a Python set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = {"{"}"Volvo", "BMW", "Ford", "BMW", "Mazda"{"}"} <br />
    print(cars)  # Output: {"{"}'Volvo', 'BMW', 'Ford', 'Mazda'{"}"}
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements (.add)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.add()</code> to add a single element to the set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.add("Tesla") <br />
    cars.add("Audi") <br />
    print(cars)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Multiple Elements (.update)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.update()</code> to add multiple items at once.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.update(["Toyota", "VW", "Kia"]) <br />
    print(cars)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements (.remove / .discard / .clear)</h3>
<p className="leading-relaxed mb-2">
  Use <code>.remove()</code> to delete a specific element (raises error if not found),
  or <code>.discard()</code> to remove safely. Use <code>.clear()</code> to empty the set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars.remove("BMW")  # Remove specific element <br />
    cars.discard("Ford")  # Safe remove <br />
    cars.clear()  # Remove all elements <br />
    print(cars)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Set Size (len)</h3>
<p className="leading-relaxed mb-2">
  Use the <code>len()</code> function to get the number of elements in the set.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    print(len(cars))  # Outputs number of elements
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Set is Empty</h3>
<p className="leading-relaxed mb-2">
  You can check if a set is empty using a simple <code>if</code> condition.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    if not cars: <br />
    &nbsp;&nbsp;print("Set is empty") <br />
    else: <br />
    &nbsp;&nbsp;print("Set is not empty")
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a Set</h3>
<p className="leading-relaxed mb-2">
  You can loop through all elements using a simple <code>for</code> loop.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    for car in cars: <br />
    &nbsp;&nbsp;print(car)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Set Operations (Union, Intersection, Difference)</h3>
<p className="leading-relaxed mb-2">
  Python sets support powerful mathematical operations.
</p>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
    set1 = {"{"}"apple", "banana", "cherry"{"}"} <br />
    set2 = {"{"}"banana", "cherry", "mango"{"}"} <br />
    <br />
    print(set1 | set2)  # Union <br />
    print(set1 & set2)  # Intersection <br />
    print(set1 - set2)  # Difference
  </p>
</div>

      </>
    ),
  },
  "cpp_maps.asp": {
    title: "python Dictionary",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Dictionary
</h2>

<p className="leading-relaxed mb-4">
  A <strong>dictionary</strong> in Python stores elements in "key/value" pairs. Key properties of dictionaries:
</p>

<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li>Each key is <strong>unique</strong> and used to access values.</li>
  <li>Dictionaries maintain <strong>insertion order</strong> (since Python 3.7+).</li>
</ul>

<h3 className="text-xl font-medium mb-3">Create a Dictionary</h3>
<p className="leading-relaxed mb-2">
  Use curly braces <code>&#123; &#125;</code> to declare a dictionary.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    people = &#123;&#125;  <span className="text-gray-500"># Empty dictionary</span><br /><br />
    people = &#123;<br />
    &nbsp;&nbsp;"John": 32,<br />
    &nbsp;&nbsp;"Adele": 45,<br />
    &nbsp;&nbsp;"Bo": 29<br />
    &#125;
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Access Dictionary Elements</h3>
<p className="leading-relaxed mb-2">
  Access values using keys with <code>[]</code> or <code>.get()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    print("John is:", people["John"])<br />
    print("Adele is:", people.get("Adele"))<br /><br />
    <span className="text-gray-500"># .get() returns None if the key doesn’t exist</span><br />
    print(people.get("Jenny"))
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Change Values</h3>
<p className="leading-relaxed mb-2">
  Update values using the key directly.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    people["John"] = 50<br />
    print("John is:", people["John"])
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Add Elements</h3>
<p className="leading-relaxed mb-2">
  Add new elements by assigning a value to a new key or using <code>.update()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    people["Jenny"] = 22<br />
    people["Liam"] = 24<br /><br />
    people.update(&#123;"Kasha": 20, "Anja": 30&#125;)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Unique Keys</h3>
<p className="leading-relaxed mb-2">
  If a key already exists, assigning it again will replace the old value.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    people["Jenny"] = 22<br />
    people["Jenny"] = 30  <span className="text-gray-500"># Overwrites previous value</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Remove Elements</h3>
<p className="leading-relaxed mb-2">
  Use <code>del</code> to remove specific keys or <code>.clear()</code> to remove all elements.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    del people["John"]<br />
    people.clear()
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Size of a Dictionary</h3>
<p className="leading-relaxed mb-2">
  Use <code>len()</code> to get the number of key-value pairs.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    print(len(people))
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Check if Dictionary is Empty</h3>
<p className="leading-relaxed mb-2">
  A dictionary is empty if <code>len(dictionary) == 0</code>. Check if a key exists using <code>in</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    print(len(people) == 0)  <span className="text-gray-500"># True if empty</span><br />
    print("John" in people)  <span className="text-gray-500"># True if key exists</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Loop Through a Dictionary</h3>
<p className="leading-relaxed mb-2">
  Loop through using <code>for key, value in dictionary.items()</code>.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 
  rounded text-black dark:text-gray-200">
    for name, age in people.items():<br />
    &nbsp;&nbsp;print(f"&#123;name&#125; is: &#123;age&#125;")<br /><br />
    <span className="text-gray-500"># For descending order by key</span><br />
    for name in sorted(people.keys(), reverse=True):<br />
    &nbsp;&nbsp;print(f"&#123;name&#125; is: &#123;people[name]&#125;")
  </p>
</div>

      </>
    ),
  },


  "cpp_iterators.asp": {
    title: "python Iterator",

    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
  Python Iterators
</h2>

<p className="leading-relaxed mb-4">
  <strong>Iterators</strong> in Python are special objects used to <strong>access and loop</strong> through elements of data structures (like lists, sets, or tuples).  
  Iteration simply means going through items one by one.
</p>

<h3 className="text-xl font-medium mb-3">Basic Iterator Example</h3>
<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]<br />
    <br />
    it = iter(cars)<br />
    <br />
    print(next(it))  <span className="text-gray-500"># Volvo</span><br />
    print(next(it))  <span className="text-gray-500"># BMW</span><br />
    print(next(it))  <span className="text-gray-500"># Ford</span><br />
    print(next(it))  <span className="text-gray-500"># Mazda</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example Explained</h3>
<ul className="list-disc pl-6 leading-relaxed mb-4">
  <li><code>iter()</code> returns an iterator object from a list or tuple.</li>
  <li><code>next()</code> gives the next item in the sequence.</li>
  <li>When there are no more items, it raises a <code>StopIteration</code> exception.</li>
</ul>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Looping Through Iterables
</h2>

<p className="leading-relaxed mb-4">
  You can loop through any iterable object (like a list or tuple) using a <code>for</code> loop:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]<br />
    for car in cars:<br />
    &nbsp;&nbsp;print(car)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Manual Iteration with while Loop</h3>
<p className="leading-relaxed mb-4">
  You can also manually handle the iteration with <code>iter()</code> and <code>next()</code> using <code>while True</code>:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]<br />
    it = iter(cars)<br />
    <br />
    while True:<br />
    &nbsp;&nbsp;try:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;car = next(it)<br />
    &nbsp;&nbsp;&nbsp;&nbsp;print(car)<br />
    &nbsp;&nbsp;except StopIteration:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;break
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Creating a Custom Iterator</h3>
<p className="leading-relaxed mb-4">
  In Python, you can make your own iterator by defining a class with <code>__iter__()</code> and <code>__next__()</code> methods.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    class Count:<br />
    &nbsp;&nbsp;def __init__(self, start, end):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;self.num = start<br />
    &nbsp;&nbsp;&nbsp;&nbsp;self.end = end<br />
    <br />
    &nbsp;&nbsp;def __iter__(self):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;return self<br />
    <br />
    &nbsp;&nbsp;def __next__(self):<br />
    &nbsp;&nbsp;&nbsp;&nbsp;if self.num &lt;= self.end:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = self.num<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.num += 1<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return current<br />
    &nbsp;&nbsp;&nbsp;&nbsp;else:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;raise StopIteration<br />
    <br />
    nums = Count(1, 5)<br />
    for n in nums:<br />
    &nbsp;&nbsp;print(n)
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Reverse Iteration</h3>
<p className="leading-relaxed mb-4">
  Use <code>reversed()</code> to iterate backwards through a sequence:
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]<br />
    for car in reversed(cars):<br />
    &nbsp;&nbsp;print(car)  <span className="text-gray-500"># Mazda, Ford, BMW, Volvo</span>
  </p>
</div>

<h3 className="text-xl font-medium mb-3">Example: Removing Elements While Iterating</h3>
<p className="leading-relaxed mb-4">
  When modifying a list while looping, use <code>list.copy()</code> to avoid skipping elements.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    cars = ["Volvo", "BMW", "Ford", "Mazda"]<br />
    for car in cars.copy():<br />
    &nbsp;&nbsp;if car == "BMW":<br />
    &nbsp;&nbsp;&nbsp;&nbsp;cars.remove(car)<br />
    <br />
    print(cars)  <span className="text-gray-500"># ['Volvo', 'Ford', 'Mazda']</span>
  </p>
</div>

<h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">
  Iterators in Built-in Functions
</h2>

<p className="leading-relaxed mb-4">
  Many Python functions use iterators under the hood — for example <code>map()</code>, <code>filter()</code>, and <code>zip()</code>.  
  These functions don’t store all values; they <strong>generate</strong> them as needed.
</p>

<div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
  <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 
  dark:border-gray-700 rounded text-black dark:text-gray-200">
    nums = [1, 2, 3, 4, 5]<br />
    squares = map(lambda x: x**2, nums)<br />
    <br />
    for s in squares:<br />
    &nbsp;&nbsp;print(s)  <span className="text-gray-500"># 1, 4, 9, 16, 25</span>
  </p>
</div>

      </>
    ),
  },


};


