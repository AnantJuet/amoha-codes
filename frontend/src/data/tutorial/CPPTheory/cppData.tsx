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
  { label: "C++ HOME", href: "cpp_home.asp" },
  { label: "C++ Intro", href: "cpp_intro.asp" },
  { label: "C++ Get Started", href: "cpp_get_started.asp" },
  {
    label: "C++ Syntax",
    href: "cpp_syntax.asp",
    isHeader: true,
    children: [
      { label: "C++ Syntax", href: "cpp_syntax.asp" },
      { label: "C++ Statements", href: "cpp_statements.asp" },
    ]
  },
  {
    label: "C++ Output",
    href: "cpp_output.asp",
    isHeader: true,
    children: [

      { label: "Print Text", href: "cpp_output.asp" },
      { label: "Print Numbers", href: "cpp_output_numbers.asp" },
      { label: "New Lines", href: "cpp_new_lines.asp" },
    ]
  },
  { label: "C++ Comments", href: "cpp_comments.asp" },
  {
    label: "C++ Variables",
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
  { label: "C++ User Input", href: "cpp_user_input.asp" },
  {
    label: "C++ Data Types",
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
    label: "C++ Operators",
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
    label: "C++ Strings",
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
  { label: "C++ Math", href: "cpp_math.asp" },
  {
    label: "C++ If..Else",
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
    label: "C++ While loop",
    href: "cpp_while.asp",
    isHeader: true,
    children: [
      { label: "While", href: "cpp_while.asp" },
      { label: "Do/While", href: "cpp_do_while_loop.asp" },

    ]
  },
  {
    label: "C++ For loop",
    href: "cpp_For_loop.asp",
    isHeader: true,
    children: [
      { label: "For Loop", href: "cpp_For_loop.asp" },
      { label: "Nested Loop", href: "cpp_nested_loop.asp" },
      { label: "The Foreach Loop", href: "cpp_for_each_loop.asp" },

    ]
  },

  { label: "C++ Break/Continue", href: "cpp_break_continue.asp" },
  {
    label: "C++ Arrays",
    href: "cpp_arrays.asp",
    isHeader: true,
    children: [
      { label: "Array", href: "cpp_arrays.asp" },
      { label: "Array and Loop", href: "cpp_arrays_loops.asp" },

    ]
  },


  {
    label: "C++ Functions",
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
    label: "C++ Classes",
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
    label: "C++ Data Structures",
    href: "cpp_data_structures.asp",
    isHeader: true,
    children: [
      { label: "C++ Data Structures & STL", href: "cpp_data_structures.asp" },
      { label: "Vectors", href: "cpp_vectors.asp" },
      { label: "List ", href: "cpp_list.asp" },
      { label: "Stack", href: "cpp_stack.asp" },
      { label: "Queue", href: "cpp_queue.asp" },
      { label: "Dequeue", href: "cpp_dequeue.asp" },
      { label: "Sets", href: "cpp_sets.asp" },
      { label: "Maps", href: "cpp_maps.asp" },
      { label: "Iterators", href: "cpp_iterators.asp" },

    ]
  },

];
export const tutorialContent: Record<string, TopicContent> = {
  "cpp_home.asp": {
    title: "C++ Tutorial",

    content: (
      <>
        {/* Overview */}
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Tutorial
        </h2>

        <p className=" leading-relaxed mb-4 ">
          <strong>C++</strong> is a popular programming language. It is widely used to create computer programs and is one of the most used languages in <strong>game development</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          C++ was developed as an extension of C, and both languages share almost the same syntax.
        </p>

        {/* Example Code */}
        <h3 className="text-xl font-medium  mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span>
            <br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span>
            <br /><br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

      </>
    ),
  }
  ,
  "cpp_intro.asp": {
    title: "C++ Introduction",
    // subtitle: "What is C++?",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What Is C++?
        </h2>
        <p className=" leading-relaxed mb-4">
          C++ is a cross-platform language that can be used to create high-performance applications.
        </p>
        <p className=" leading-relaxed mb-4">
          C++ was developed by Bjarne Stroustrup, as an extension to the <a href="#" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">C language</a>.
        </p>
        <p className=" leading-relaxed mb-8">
          C++ gives programmers a high level of control over system resources and memory.
        </p>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Why Use C++
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
    title: "C++ Getting Started",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Get Started With C++
        </h2>

        <p className="leading-relaxed mb-4">
          As you can try C++ without installing anything. Our Online C++ Editor runs directly in your browser, and shows both the code and the result:
        </p>





        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-100">
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span><br /><br />

            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>

          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World!</p>
        </div>
        <p className=" leading-relaxed mb-4">
          This editor will be used in the entire tutorial to demonstrate the different aspects of C++.
        </p>

        <h3 className="text-xl font-medium  mb-3">Install C++</h3>
        <p className=" leading-relaxed mb-4">
          If you want to run C++ on your own computer, you need two things:
        </p>
        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li>A text editor, like Notepad, to write C++ code</li>
          <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
        </ul>
        <p className=" leading-relaxed mb-4">
          There are many text editors and compilers to choose from. In the next steps, we will show you how to use an IDE that includes both.
        </p>

        <h3 className="text-xl font-medium  mb-3">Install C++ IDE</h3>
        <p className=" leading-relaxed mb-4">
          An <strong className="font-semibold">IDE (Integrated Development Environment)</strong> is used to edit AND compile the code. Popular IDEs include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.
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

        <h3 className="text-xl font-medium  mb-3">C++ Quickstart</h3>
        <p className=" leading-relaxed mb-4">
          Let's create our first C++ file. Open Code::Blocks and go to File &gt; New &gt; Empty File. Write the following C++ code and save the file as <code>myfirstprogram.cpp</code>:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span><br /><br />


            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },


  // --- Syntax (New Content) ---
  "cpp_syntax.asp": {
    title: "C++ Syntax",


    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Syntax
        </h2>

        <p className=" leading-relaxed mb-4">
          Let's break up the following code to understand it better:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">

          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            {/* Duplication Removed: dark:text-blue-400 only once */}
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span><br /><br />

            {/* Duplication Removed: dark:text-red-400 only once */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />
            {/* Duplication Removed: dark:text-purple-400 only once */}
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 1:</strong> <span className="font-mono">#include &lt;iostream&gt;</span> is a <strong className='font-semibold'>header file library</strong> that lets us work with input and output objects, such as <span className="font-mono">cout</span>. Header files add functionality to C++ programs.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 2:</strong> <span className="font-mono">using namespace std</span> means that we can use names for objects and variables from the standard library. Don't worry if you don't understand it yet; it almost always appears in C++ programs.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 3:</strong> A blank line. C++ ignores white space, but we use it to make the code more readable.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 4:</strong> <span className="font-mono">int main()</span> is called a <strong className='font-semibold'>function</strong>. Any code inside its curly brackets <span className="font-mono">{'{}'}</span> will be executed.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 5:</strong> <span className="font-mono">cout</span> (pronounced "see-out") is an <strong className='font-semibold'>object</strong> used with the <strong className='font-semibold'>insertion operator (&lt;&lt;)</strong> to output/print text. Every C++ statement ends with a <strong className='font-semibold'>semicolon (;)</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          Remember: The compiler ignores white spaces. Multiple lines make code more readable.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 6:</strong> <span className="font-mono">return 0;</span> ends the main function.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Line 7:</strong> Do not forget to add the closing curly bracket <span className="font-mono">{'}'}</span> to actually end the main function.
        </p>

        <h3 className="text-xl font-medium  mb-3">Omitting Namespace</h3>
        <p className=" leading-relaxed mb-4">
          You might see some C++ programs that run without the standard namespace library. The <span className="font-mono">using namespace std</span> line can be omitted and replaced with the <span className="font-mono">std::</span> keyword for objects like <span className="font-mono">cout</span>:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">


            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br /><br />


            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />

            &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">std::cout</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },
  // --- Statements (New Content) ---
  "cpp_statements.asp": {
    title: "C++ Syntax",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Statements
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong className='font-semibold'>computer program</strong> is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called <strong className='font-semibold'>statements</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          The following statement "instructs" the compiler to print the text "Hello World" to the screen:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>; <span className="text-gray-500 dark:text-gray-400">// Must end with a semicolon (;)</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          It is important that you end the statement with a <strong className='font-semibold'>semicolon (;)</strong>. If you forget it, an error will occur and the program will not run:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">

          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            {/* Duplication Removed: dark:text-purple-400 only once */}
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span> <span className="text-red-500 dark:text-red-400">// Missing semicolon</span><br />

            {/* Duplication Removed: dark:text-red-400 only once */}
            <span className="text-red-500 dark:text-red-400">error: expected ';' before 'return'</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Many Statements</h3>
        <p className=" leading-relaxed mb-4">
          Most C++ programs contain many statements. The statements are executed, one by one, in the same order as they are written:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">

          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            {/* Duplication Removed: dark:text-purple-400 only once */}
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Have a good day!"</span>;<br />

            {/* Duplication Removed: dark:text-red-400 only once */}
            <span className="text-red-600 dark:text-red-400">return</span> 0;
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Explanation:</strong><br />
          The first statement is executed first (prints "Hello World!" to the screen). Then the second statement is executed (prints "Have a good day!"). Finally, the third statement is executed, which ends the program successfully.
        </p>
      </>
    ),
  },


  // --- Output (Print Text) ---
  "cpp_output.asp": {
    title: "C++ Output",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Output (Print Text)
        </h2>

        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">cout</span> object, together with the <span className="font-mono">&lt;&lt;</span> operator, is used to output values and print text. Just remember to surround the text with double quotes (<span className="font-mono">""</span>).
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span><br /><br />

            <span className="text-red-600 dark:text-red-400 ">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-40">"Hello World!"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World!</p>
        </div>
        <p className=" leading-relaxed mb-4">
          You can add as many <span className="font-mono">cout</span> objects as you want. However, note that it does <strong className='font-semibold'>not insert a new line</strong> at the end of the output.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">

          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">


            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span><br />
            <span className="text-blue-600 dark:text-blue-400">using namespace std;</span><br /><br />

            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I am learning C++"</span>;<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>

          {/* Result Text: Added text-black for light mode visibility */}
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World!I am learning C++</p>
        </div>
      </>
    ),
  },


  // --- Output Numbers (New Content) ---
  "cpp_output_numbers.asp": {
    title: "C++ Output",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Print Numbers
        </h2>

        <p className=" leading-relaxed mb-4">
          You can use <span className="font-mono">cout</span> to print numbers. <strong className='font-semibold'>Unlike text, numbers are NOT put inside double quotes.</strong>
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;iostream&gt;<br />
            using namespace std;<br /><br />
            int main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-blue-600 dark:text-blue-400">3</span>;<br />
            &nbsp;&nbsp;return 0;<br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold">Result: 3</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Mathematical Calculations</h3>
        <p className=" leading-relaxed mb-4">
          You can also perform mathematical calculations directly:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; <span className="text-blue-600 dark:text-blue-400">3</span> + <span className="text-blue-600 dark:text-blue-400">3</span>;<br />
            cout &lt;&lt; <span className="text-blue-600 dark:text-blue-400">2</span> * <span className="text-blue-600 dark:text-blue-400">5</span>;
          </p>
          <p className="mt-2 font-semibold">Result: 6 and 10</p>
        </div>
      </>
    ),
  },
  // --- Output New Lines (New Content) ---
  "cpp_new_lines.asp": {
    title: "C++ Output",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          New Lines
        </h2>
        <p className=" leading-relaxed mb-4">
          To insert a new line, you can use the <strong className='font-semibold'>\n</strong> character or the <strong className='font-semibold'>endl</strong> manipulator.
        </p>

        <h3 className="text-xl font-medium  mb-3">Using \n Character</h3>
        <p className=" leading-relaxed mb-4">
          You can place <span className="font-mono">\n</span> inside the string or use a separate insertion operator <span className="font-mono">{'&lt;&lt;'}</span>:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;iostream&gt;<br />
            using namespace std;<br /><br />
            int main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World! \n"</span>;<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I am learning C++"</span>;<br />
            &nbsp;&nbsp;return 0;<br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          You can also use multiple <span className="font-mono">\n</span> characters to create blank lines.
        </p>

        <h3 className="text-xl font-medium  mb-3">Using endl</h3>
        <p className=" leading-relaxed mb-4">
          <span className="font-mono">endl</span> is an I/O manipulator that inserts a new line and flushes the buffer:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;iostream&gt;<br />
            using namespace std;<br /><br />
            int main() {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span> &lt;&lt; endl;<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I am learning C++"</span>;<br />
            &nbsp;&nbsp;return 0;<br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },

  // --- Comments (New Content) ---
  "cpp_comments.asp": {
    title: "C++ Comments",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Comments
        </h2>
        <p className=" leading-relaxed mb-4">
          Comments can be used to explain C++ code and are ignored by the compiler. They also make your code more readable and can be used to temporarily prevent execution of code while testing.
        </p>

        <h3 className="text-xl font-medium  mb-3">Single-line Comments</h3>
        <p className=" leading-relaxed mb-4">
          Start with <strong className='font-semibold'>//</strong>. Any text after // on the same line is ignored by the compiler.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 ">// This is a comment</span><br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;<br /><br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>; <span className="text-gray-500 dark:text-gray-400">// This is a comment at the end of a line</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Multi-line Comments</h3>
        <p className=" leading-relaxed mb-4">Start with <strong className='font-semibold'>/*</strong> and end with <strong className='font-semibold'>*/</strong>. Everything between will be ignored by the compiler.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">/* The code below will print "Hello World!"<br />
              to the screen, and it is amazing */</span><br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;
          </p>
        </div>
      </>
    ),
  },


  // --- Variables (New Content) ---
  "cpp_variables.asp": {
    title: "C++ Variables",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Variables
        </h2>

        <p className=" leading-relaxed mb-4">
          Variables are <strong className='font-semibold'>containers for storing data values</strong>. In C++, there are different types of variables, defined using different keywords:
        </p>

        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
          <li><strong>double</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
          <li><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
          <li><strong>string</strong> - stores text, such as "Hello World". String values are surrounded by double quotes</li>
          <li><strong>bool</strong> - stores values with two states: true or false</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Declaring (Creating) Variables</h3>
        <p className=" leading-relaxed mb-4">
          To create a variable, specify the <strong className='font-semibold'>type</strong> and assign it a <strong className='font-semibold'>value</strong>:
        </p>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">type</span> <span className="dark:text-white">variableName</span> = <span className="text-blue-600 dark:text-blue-400">value</span>;
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Assigning a Value</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
            cout &lt;&lt; myNum; <span className="text-gray-500 dark:text-gray-400 ">// Outputs 15</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Declaring Without Assigning Value</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum;<br />
            myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
            cout &lt;&lt; myNum; <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Changing Variable Values</h3>
        <p className=" leading-relaxed mb-4">
          Assigning a new value to an existing variable will <strong className='font-semibold'>overwrite</strong> the previous value.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;  <span className="text-gray-500 dark:text-gray-400">// myNum is 15</span><br />
            myNum = <span className="text-blue-600 dark:text-blue-400">10</span>;  <span className="text-gray-500 dark:text-gray-400 ">// Now myNum is 10</span><br />
            cout &lt;&lt; myNum;  <span className="text-gray-500 dark:text-gray-400 ">// Outputs 10</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Other Types</h3>
        <p className=" leading-relaxed mb-4">
          Demonstration of other variable types:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">5</span>;               <span className="text-gray-500 dark:text-gray-400 ">// Integer</span><br />
            <span className="text-red-600 dark:text-red-400">double</span> myFloatNum = <span className="text-blue-600 dark:text-blue-400">5.99</span>;    <span className="text-gray-500 dark:text-gray-400 ">// Floating point number</span><br />
            <span className="text-red-600 dark:text-red-400">char</span> myLetter = <span className="text-purple-600 dark:text-purple-400">'D'</span>;         <span className="text-gray-500 dark:text-gray-400 ">// Character</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> myText = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;     <span className="text-gray-500 dark:text-gray-400 ">// String (text)</span><br />
            <span className="text-red-600 dark:text-red-400">bool</span> myBoolean = <span className="text-blue-600 dark:text-blue-400">true</span>;       <span className="text-gray-500 dark:text-gray-400 ">// Boolean</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Display Variables</h3>
        <p className=" leading-relaxed mb-4">
          Use <span className="font-mono">cout</span> together with <span className="font-mono">&lt;&lt;</span> to display variable values:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myAge = <span className="text-blue-600 dark:text-blue-400">35</span>;<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I am "</span> &lt;&lt; myAge &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" years old."</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Combine Variables</h3>
        <p className=" leading-relaxed mb-4">
          Combine text and variables, or multiple variable types:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> name = <span className="text-purple-600 dark:text-purple-400">"John"</span>;<br />
            <span className="text-red-600 dark:text-red-400">int</span> age = <span className="text-blue-600 dark:text-blue-400">35</span>;<br />
            <span className="text-red-600 dark:text-red-400">double</span> height = <span className="text-blue-600 dark:text-blue-400">6.1</span>;<br /><br />
            cout &lt;&lt; name &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" is "</span> &lt;&lt; age &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" years old and "</span> &lt;&lt; height &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" feet tall."</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Add Variables Together</h3>
        <p className=" leading-relaxed mb-4">
          You can also add numeric variables using the <span className="font-mono">+</span> operator:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = <span className="text-blue-600 dark:text-blue-400">5</span>;<br />
            <span className="text-red-600 dark:text-red-400">int</span> y = <span className="text-blue-600 dark:text-blue-400">6</span>;<br />
            <span className="text-red-600 dark:text-red-400">int</span> sum = x + y;<br />
            cout &lt;&lt; sum; <span className="text-gray-500 dark:text-gray-400">// Outputs 11</span>
          </p>
        </div>
      </>
    ),
  },
  // --- Multiple Variables (New Content) ---
  "cpp_variables_multiple.asp": {
    title: "C++ Variables",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Declare Many Variables
        </h2>

        <p className=" leading-relaxed mb-4">
          In C++, you can declare <strong className='font-semibold'>multiple variables</strong> of the same type on a single line. This helps make your code shorter and more organized.
        </p>

        <h3 className="text-xl font-medium  mb-3">Declare Multiple Variables in One Line</h3>
        <p className=" leading-relaxed mb-4">
          To declare more than one variable of the <strong className='font-semibold'>same type</strong>, use a <strong className='font-semibold'>comma-separated list</strong>. Each variable can be assigned its own value.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = <span className="text-blue-600 dark:text-blue-400">5</span>, y = <span className="text-blue-600 dark:text-blue-400">6</span>, z = <span className="text-blue-600 dark:text-blue-400">50</span>;<br />
            cout &lt;&lt; x + y + z; <span className="text-gray-500 dark:text-gray-400 ">// Outputs 61</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Assign One Value to Multiple Variables</h3>
        <p className=" leading-relaxed mb-4">You can also assign the <strong className='font-semibold'>same value</strong> to multiple variables in one line. This is useful when all variables should start with the same value.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 ">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x, y, z;<br />
            x = y = z = <span className="text-blue-600 dark:text-blue-400">50</span>; <span className="text-gray-500 dark:text-gray-400 ">// All set to 50</span><br />
            cout &lt;&lt; x + y + z; <span className="text-gray-500 dark:text-gray-400">// Outputs 150</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>Explanation:</strong>
          - First, declare multiple variables of the same type using commas.
          - Then, optionally assign the same value to all variables using a single statement.
          - Finally, you can perform operations on these variables just like any other individual variable.
        </p>
      </>
    ),
  },

  // --- Identifiers (New Content) ---
  "cpp_variables_identifiers.asp": {
    title: "C++ Variables",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Identifiers
        </h2>

        <p className=" leading-relaxed mb-4">
          All C++ variables must be identified with <strong className='font-semibold'>unique names</strong>, called <strong className='font-semibold'>identifiers</strong>.
          Identifiers can be short names (like <span className="font-mono">x</span> and <span className="font-mono">y</span>) or more descriptive names (like <span className="font-mono">age</span>, <span className="font-mono">sum</span>, <span className="font-mono">totalVolume</span>).
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400 ">// Good: descriptive name</span><br />
            int minutesPerHour = 60;<br /><br />
            <span className="text-gray-500 dark:text-gray-400 ">// OK: short, but not descriptive</span><br />
            int m = 60;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Rules for Naming Variables</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>Names can contain letters, digits, and underscores.</li>
          <li>Names must begin with a letter or an underscore (<span className="font-mono">_</span>).</li>
          <li>Names are <strong className='font-semibold'>case-sensitive</strong> (e.g., <span className="font-mono">myVar</span> and <span className="font-mono">myvar</span> are different variables).</li>
          <li>Names cannot contain whitespaces or special characters like <span className="font-mono">!</span>, <span className="font-mono">#</span>, <span className="font-mono">%</span>, etc.</li>
          <li>Reserved words (like <span className="font-mono">int</span>) cannot be used as names.</li>
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
    title: "C++ Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Real-Life Examples
        </h2>
        <h3 className="text-xl font-medium  mb-3">Student Data</h3>
        <p className=" leading-relaxed mb-4">
          Example program storing different data about a college student:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> studentID = 15;<br />
            <span className="text-red-600 dark:text-red-400">float</span> studentFee = 75.25;<br />
            <span className="text-red-600 dark:text-red-400">char</span> studentGrade = <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
          </p>
        </div>
        <h3 className="text-xl font-medium  mb-3">Calculate the Area of a Rectangle</h3>
        <p className=" leading-relaxed mb-4">
          Program to calculate the area of a rectangle (by multiplying the length and width):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> length = 4;<br />
            <span className="text-red-600 dark:text-red-400">int</span> width = 6;<br /><br />
            <span className="text-red-600 dark:text-red-400">int</span> area = length * width;<br />
          </p>
        </div>
      </>
    ),
  },

  // --- User Input (New Content) ---
  "cpp_user_input.asp": {
    title: "C++ User Input",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ User Input
        </h2>

        <p className=" leading-relaxed mb-4">
          You have already learned that <strong className='font-semibold'>cout</strong> is used to output (print) values.
          Now we will use <strong className='font-semibold'>cin</strong> to get user input.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong className='font-semibold'>cin</strong> is a predefined variable that reads data from the keyboard with
          the <strong className='font-semibold'>extraction operator (&gt;&gt;)</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x; <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type a number: "</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Type a number and press enter</span><br />
            cin &gt;&gt; x;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Get user input from the keyboard</span><br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Your number is: "</span> &lt;&lt; x;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Display the input value</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Good To Know</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>
            <strong>cout</strong> is pronounced <em>"see-out"</em>. Used for output, and uses the{" "}
            <strong>insertion operator (&lt;&lt;)</strong>.
          </li>
          <li>
            <strong>cin</strong> is pronounced <em>"see-in"</em>. Used for input, and uses the{" "}
            <strong>extraction operator (&gt;&gt;)</strong>.
          </li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Creating a Simple Calculator</h3>
        <p className=" leading-relaxed mb-4">
          In this example, the user must input two numbers. Then we print the sum by calculating (adding) the two numbers:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x, y;<br />
            <span className="text-red-600 dark:text-red-400">int</span> sum;<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type a number: "</span>;<br />
            cin &gt;&gt; x;<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type another number: "</span>;<br />
            cin &gt;&gt; y;<br />
            sum = x + y;<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Sum is: "</span> &lt;&lt; sum;
          </p>
        </div>
      </>
    ),
  },

  // --- Data Types (Basic) (New Content) ---
  "cpp_data_types.asp": {
    title: "C++ Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Data Types
        </h2>

        <p className=" leading-relaxed mb-4">
          As explained in the Variables chapter, a variable in C++ must be declared with a
          <strong className="font-semibold"> specified data type</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">5</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Integer (whole number)</span><br />
            <span className="text-red-600 dark:text-red-400">float</span> myFloatNum = <span className="text-blue-600 dark:text-blue-400">5.99</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Floating point number</span><br />
            <span className="text-red-600 dark:text-red-400">double</span> myDoubleNum = <span className="text-blue-600 dark:text-blue-400">9.98</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Floating point number</span><br />
            <span className="text-red-600 dark:text-red-400">char</span> myLetter = <span className="text-purple-600 dark:text-purple-400">'D'</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Character</span><br />
            <span className="text-red-600 dark:text-red-400">bool</span> myBoolean = <span className="text-blue-600 dark:text-blue-400">true</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Boolean</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> myText = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// String</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Basic Data Types</h3>
        <p className=" leading-relaxed mb-4">
          The data type specifies the <strong className="font-semibold">size</strong> and
          <strong className="font-semibold"> type of information</strong> the variable will store:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
            <thead>

              <tr className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                <th className="py-2 px-4 text-left">Data Type</th>
                <th className="py-2 px-4 text-left">Size</th>
                <th className="py-2 px-4 text-left">Description</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-black dark:text-gray-100">
              <tr>
                <td className="py-2 px-4 font-mono">bool</td>
                <td className="py-2 px-4">1 byte</td>
                <td className="py-2 px-4">Stores true or false values.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">char</td>
                <td className="py-2 px-4">1 byte</td>
                <td className="py-2 px-4">Stores a single character, letter, or ASCII value.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">int</td>
                <td className="py-2 px-4">2 or 4 bytes</td>
                <td className="py-2 px-4">Stores whole numbers without decimals.</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">float</td>
                <td className="py-2 px-4">4 bytes</td>
                <td className="py-2 px-4">
                  Stores fractional numbers with 6–7 decimal digits precision.
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono">double</td>
                <td className="py-2 px-4">8 bytes</td>
                <td className="py-2 px-4">
                  Stores fractional numbers with 15 decimal digits precision.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  // --- Numeric Data Types (New Content) ---
  "cpp_data_types_numeric.asp": {
    title: "C++ Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Numeric Data Types
        </h2>

        <p className=" leading-relaxed mb-4">
          Use <strong className="font-semibold">int</strong> when you need to store a whole number without decimals,
          and <strong className="font-semibold">float</strong> or <strong className="font-semibold">double</strong>
          when you need a number with decimals.
        </p>

        <h3 className="text-xl font-medium  mb-3">int</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">1000</span>;<br />
            cout &lt;&lt; myNum;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 1000</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">float</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">float</span> myNum = <span className="text-blue-600 dark:text-blue-400">5.75</span>;<br />
            cout &lt;&lt; myNum;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 5.75</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">double</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">double</span> myNum = <span className="text-blue-600 dark:text-blue-400">19.99</span>;<br />
            cout &lt;&lt; myNum;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 19.99</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">float vs. double</h3>
        <p className=" leading-relaxed mb-4">
          The precision of a floating point value determines how many digits it can hold after the decimal point.
          A <span className="font-mono">float</span> has precision of about <strong>6–7 digits</strong>, while a{" "}
          <span className="font-mono">double</span> can store around <strong>15 digits</strong>.
          <br />
          <br />
          Therefore, it is <strong className="font-semibold">safer to use double</strong> for most calculations.
        </p>

        <h3 className="text-xl font-medium  mb-3">Scientific Numbers</h3>
        <p className=" leading-relaxed mb-4">
          A floating point number can also be written in <strong>scientific notation</strong> using an{" "}
          <span className="font-mono">"e"</span> or <span className="font-mono">"E"</span> to indicate powers of 10:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">float</span> f1 = <span className="text-blue-600 dark:text-blue-400">35e3</span>;<br />
            <span className="text-red-600 dark:text-red-400">double</span> d1 = <span className="text-blue-600 dark:text-blue-400">12E4</span>;<br />
            cout &lt;&lt; f1; <span className="text-gray-500 dark:text-gray-400">// 35000</span><br />
            cout &lt;&lt; d1; <span className="text-gray-500 dark:text-gray-400 ">// 120000</span>
          </p>
        </div>
      </>
    ),
  },


  // --- Boolean Data Types (New Content) ---
  "cpp_booleans.asp": {
    title: "C++ Booleans",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Boolean Types
        </h2>

        <p className=" leading-relaxed mb-4">
          A boolean data type is declared with{" "}
          <strong className="font-semibold">bool</strong> and can only take the values{" "}
          <strong className="font-semibold">true</strong> (1) or{" "}
          <strong className="font-semibold">false</strong> (0).
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">bool</span> isCodingFun ={" "}
            <span className="text-blue-600 dark:text-blue-400">true</span>;<br />
            <span className="text-red-600 dark:text-red-400">bool</span> isFishTasty ={" "}
            <span className="text-blue-600 dark:text-blue-400">false</span>;<br />
            cout &lt;&lt; isCodingFun;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 1 (true)</span><br />
            cout &lt;&lt; isFishTasty;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 0 (false)</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Boolean Expressions</h3>
        <p className=" leading-relaxed mb-4">
          A <strong className="font-semibold">Boolean expression</strong> compares values (for example, using{" "}
          <span className="font-mono">&gt;</span> or{" "}
          <span className="font-mono">==</span>) and returns a boolean value:{" "}
          <strong className="font-semibold">1 (true)</strong> or{" "}
          <strong className="font-semibold">0 (false)</strong>.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x ={" "}
            <span className="text-blue-600 dark:text-blue-400">10</span>;<br />
            cout &lt;&lt; (x == 10);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Returns 1 (true)</span>
          </p>
        </div>
      </>
    ),
  },


  // --- Character Data Types (New Content) ---
  "cpp_data_types_char.asp": {
    title: "C++ Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Character Data Types
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className="font-semibold">char</strong> data type is used to store a{" "}
          <strong className="font-semibold">single character</strong>. The character must be
          surrounded by single quotes, like <code>'A'</code> or <code>'c'</code>.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">char</span> myGrade ={" "}
            <span className="text-purple-600 dark:text-purple-400">'B'</span>;<br />
            cout &lt;&lt; myGrade;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs B</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">ASCII Values</h3>
        <p className=" leading-relaxed mb-4">
          Alternatively, if you are familiar with{" "}
          <strong className="font-semibold">ASCII</strong>, you can use ASCII values to
          display certain characters:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">char</span> a ={" "}
            <span className="text-blue-600 dark:text-blue-400">65</span>, b ={" "}
            <span className="text-blue-600 dark:text-blue-400">66</span>, c ={" "}
            <span className="text-blue-600 dark:text-blue-400">67</span>;<br />
            cout &lt;&lt; a;<br />
            cout &lt;&lt; b;<br />
            cout &lt;&lt; c;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs ABC</span>
          </p>
        </div>
      </>
    ),
  },
  // --- String Data Types (New Content) ---
  "cpp_data_types_string.asp": {
    title: "C++ Data Types",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ String Data Types
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className="font-semibold">string</strong> type is used to store a{" "}
          <strong className="font-semibold">sequence of characters (text)</strong>. This is not a built-in type,
          but it behaves like one in basic usage. String values must be surrounded by{" "}
          <strong className="font-semibold">double quotes</strong>.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> greeting ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            cout &lt;&lt; greeting;{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs Hello</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Using the &lt;string&gt; Library</h3>
        <p className=" leading-relaxed mb-4">
          To use strings in C++, include the <span className="font-mono">&lt;string&gt;</span> header file:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400 ">// Include the string library</span><br />
            #include &lt;string&gt;<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Create a string variable</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> greeting ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Output string value</span><br />
            cout &lt;&lt; greeting;
          </p>
        </div>
      </>
    ),
  },

  // --- Operators (Main) (New Content) ---
  "cpp_operators.asp": {
    title: "C++ Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Operators
        </h2>

        <p className=" leading-relaxed mb-4">
          Operators are used to perform operations on variables and values. They are grouped into:
          <strong className='font-semibold'>Arithmetic</strong>, <strong className='font-semibold'>Assignment</strong>,
          <strong className='font-semibold'>Comparison</strong>, <strong className='font-semibold'>Logical</strong>,
          and <strong className='font-semibold'>Bitwise</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Addition Operator</h3>
        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">+</span> operator can add values, a variable and a value, or two variables:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
            <span className="text-red-600 dark:text-red-400">int</span> sum1 = 100 + 50; <span className="text-gray-500 dark:text-gray-400 ">// 150</span><br />
            <span className="text-red-600 dark:text-red-400">int</span> sum2 = sum1 + 250; <span className="text-gray-500 dark:text-gray-400 ">// 400</span><br />
            <span className="text-red-600 dark:text-red-400">int</span> sum3 = sum2 + sum2; <span className="text-gray-500 dark:text-gray-400 ">// 800</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Using Variables and Values</h3>
        <p className=" leading-relaxed mb-4">
          Operators can combine numbers and variables in any combination:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 leading-6">
            <span className="text-red-600 dark:text-red-400">int</span> x = 100;<br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 50;<br />
            <span className="text-red-600 dark:text-red-400">int</span> total = x + y; <span className="text-gray-500 dark:text-gray-400 ">// 150</span>
          </p>
        </div>
      </>
    ),
  },

  // --- Arithmetic Operators (New Content) ---
  "cpp_operators_arithmetic.asp": {
    title: "C++ Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <p className=" leading-relaxed mb-4">
          Operators like <span className="font-mono">+</span>, <span className="font-mono">-</span>, <span className="font-mono">*</span>, <span className="font-mono">/</span>, and <span className="font-mono">%</span> perform common mathematical operations.
        </p>
        <h3 className="text-xl font-medium  mb-3">Modulus, Increment, Decrement</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li><strong className='font-semibold'>% (Modulus):</strong> Returns the division remainder (e.g., <span className="font-mono">10 % 3 = 1</span>).</li>
          <li><strong className='font-semibold'>++ (Increment):</strong> Increases the value of a variable by 1.</li>
          <li><strong className='font-semibold'>-- (Decrement):</strong> Decreases the value of a variable by 1.</li>
        </ul>
      </>
    ),
  },

  // --- Assignment Operators (New Content) ---
  "cpp_operators_assignment.asp": {
    title: "C++ Operators",

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
    title: "C++ Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <p className=" leading-relaxed mb-4">
          Comparison operators compare two values and return <strong className='font-semibold'>true (1) or false (0)</strong>.
        </p>
        <h3 className="text-xl font-medium  mb-3">Operators</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li><span className="font-mono">==</span> (Equal to)</li>
          <li><span className="font-mono">!=</span> (Not equal)</li>
          <li><span className="font-mono">&gt;</span>, <span className="font-mono">&lt;</span>, <span className="font-mono">&gt;=</span>, <span className="font-mono">&lt;=</span></li>
        </ul>
        <h3 className="text-xl font-medium  mb-3">Real-Life Example: Voting Age</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> age = 18;<br />
            cout &lt;&lt; (age &gt;= 18); <span className="text-gray-500 dark:text-gray-400 ">// returns 1 (true)</span>
          </p>
        </div>
      </>
    ),
  },

  // --- Logical Operators (New Content) ---
  "cpp_operators_logical.asp": {
    title: "C++ Operators",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200mt-10">
          Logical Operators
        </h2>
        <p className=" leading-relaxed mb-4">
          Logical operators determine the logic between boolean expressions:
        </p>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li><strong className='font-semibold'>&& (Logical AND):</strong> True if **both** statements are true.</li>
          <li><strong className='font-semibold'>|| (Logical OR):</strong> True if **one** of the statements is true.</li>
          <li><strong className='font-semibold'>! (Logical NOT):</strong> Reverses the result (true becomes false, false becomes true).</li>
        </ul>
        <h3 className="text-xl font-medium  mb-3">Example: Logical AND</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 7;<br />
            cout &lt;&lt; (x &lt; 5 && x &lt; 10); <span className="text-gray-500 dark:text-gray-400 ">// 0 (false) because x &lt; 5 is false</span>
          </p>
        </div>
      </>
    ),
  },

  // --- Strings (New Content) ---
  "cpp_strings.asp": {
    title: "C++ Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Strings
        </h2>

        <p className=" leading-relaxed mb-4">
          Strings are used for storing text or characters. For example,{" "}
          <span className="font-mono">"Hello World"</span> is a string.
        </p>

        <p className=" leading-relaxed mb-4">
          A string variable contains a collection of characters surrounded by{" "}
          <strong className="font-semibold">double quotes</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Create a String Variable</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> greeting ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Include the &lt;string&gt; Library</h3>
        <p className=" leading-relaxed mb-4">
          To use strings in C++, you must include the <span className="font-mono">&lt;string&gt;</span> header file:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-600">// Include the string library</span><br />
            <span className="text-gray-600">#include &lt;string&gt;</span><br /><br />
            <span className="text-gray-600">// Create a string variable</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> greeting ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
          </p>
        </div>
      </>
    ),
  },

  "cpp_strings_concatenation.asp": {
    title: "C++ String Concatenation",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          String Concatenation
        </h2>

        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">+</span> operator can be used between strings to add them together to make a new string. This is called <strong className="font-semibold">concatenation</strong>:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> firstName = <span className="text-purple-600 dark:text-purple-400">"John "</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> fullName = firstName + lastName;<br />
            cout &lt;&lt; fullName; <span className="text-gray-500 dark:text-gray-400 ">// Outputs John Doe</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          You can also add a space between strings using quotes:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> firstName = <span className="text-purple-600 dark:text-purple-400">"John"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> fullName = firstName + <span className="text-purple-600 dark:text-purple-400">" "</span> + lastName;<br />
            cout &lt;&lt; fullName; <span className="text-gray-500 dark:text-gray-400 ">// Outputs John Doe</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Append Function</h3>
        <p className=" leading-relaxed mb-4">
          Strings in C++ are objects that contain functions for performing operations. You can concatenate strings using the <span className="font-mono">append()</span> function:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> firstName = <span className="text-purple-600 dark:text-purple-400">"John "</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> fullName = firstName.append(lastName);<br />
            cout &lt;&lt; fullName; <span className="text-gray-500 dark:text-gray-400 ">// Outputs John Doe</span>
          </p>
        </div>
      </>
    ),
  },
  "cpp_strings_number_and_string_.asp": {
    title: "C++ Numbers and Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-blue-200 mt-10">
          Adding Numbers and Strings
        </h2>

        <p className=" leading-relaxed mb-4">
          <strong>WARNING!</strong> C++ uses the <span className="font-mono">+</span> operator for both <strong>addition</strong> and <strong>concatenation</strong>.
          <br />
          <strong>Numbers</strong> are added, and <strong>strings</strong> are concatenated.
        </p>

        <h3 className="text-xl font-medium  mb-3">Adding Numbers</h3>
        <p className=" leading-relaxed mb-2">
          If you add two numbers, the result will be a number:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            int x = 10;<br />
            int y = 20;<br />
            int z = x + y; <span className="text-gray-500 dark:text-gray-400 ">// z will be 30 (an integer)</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Adding Strings</h3>
        <p className=" leading-relaxed mb-2">
          If you add two strings, the result will be a string concatenation:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> x = <span className="text-purple-600 dark:text-purple-400">"10"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> y = <span className="text-purple-600 dark:text-purple-400">"20"</span>;<br />
            <span className="text-red-600 dark:text-red-400">string</span> z = x + y; <span className="text-gray-500 dark:text-gray-400 ">// z will be "1020" (a string)</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Adding String and Number</h3>
        <p className=" leading-relaxed mb-2">
          If you try to add a number to a string, an error occurs:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-10 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> x = <span className="text-purple-600 dark:text-purple-400">"10"</span>;<br />
            int y = 20;<br />
            <span className="text-red-600 dark:text-red-400">string</span> z = x + y; <span className="text-gray-500 dark:text-gray-400 ">//  Error</span>
          </p>
        </div>
      </>
    ),
  },
  "cpp_strings_string_length_.asp": {
    title: "C++ String Length",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-blue-200 mt-10">
          String Length
        </h2>

        <p className=" leading-relaxed mb-4">
          To get the length of a string in C++, use the{" "}
          <span className="font-mono">length()</span> function (or{" "}
          <span className="font-mono">size()</span>, which works the same way).
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> txt ={" "}
            <span className="text-purple-600 dark:text-purple-400">"ABCDEFGHIJKLMNOPQRSTUVWXYZ"</span>;
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"The length of the txt string is: "</span> &lt;&lt; txt.length();
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">
            // Output: The length of the txt string is: 26
            </span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">length()</span> and{" "}
          <span className="font-mono">size()</span> functions are equivalent and
          can be used interchangeably.
        </p>
      </>
    ),
  },
  "cpp_strings_access_strings_.asp": {
    title: "C++ Access Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-blue-200 mt-10">
          Access Strings
        </h2>

        <p className=" leading-relaxed mb-4">
          You can access the characters in a string by referring to its{" "}
          <strong className="font-semibold">index number</strong> inside square
          brackets <span className="font-mono">[]</span>.
        </p>

        <h3 className="text-xl font-medium  mb-3">
          Example: Access the First Character
        </h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> myString ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            cout &lt;&lt; myString[0];{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs H</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          String indexes start with <strong>0</strong>:{" "}
          <span className="font-mono">[0]</span> is the first character,{" "}
          <span className="font-mono">[1]</span> is the second, and so on.
        </p>

        <h3 className="text-xl font-medium  mb-3">
          Example: Access the Second and Last Characters
        </h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> myString ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            cout &lt;&lt; myString[1];{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs e</span><br />
            cout &lt;&lt; myString[myString.length() - 1];{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs o</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">
          Change String Characters
        </h3>
        <p className=" leading-relaxed mb-4">
          You can modify specific characters in a string by using their index and
          assigning a new value with{" "}
          <strong className="font-semibold">single quotes</strong>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> myString ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            myString[0] = <span className="text-purple-600 dark:text-purple-400">'J'</span>;<br />
            cout &lt;&lt; myString;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs Jello</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Using the at() Function</h3>
        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">at()</span> function (from the{" "}
          <span className="font-mono">&lt;string&gt;</span> library) can also be
          used to access or modify characters in a string safely.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> myString ={" "}
            <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;<br />
            cout &lt;&lt; myString;{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs Hello</span><br /><br />
            cout &lt;&lt; myString.at(0);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// First character (H)</span><br />
            cout &lt;&lt; myString.at(1);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Second character (e)</span><br />
            cout &lt;&lt; myString.at(myString.length() - 1);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Last character (o)</span><br /><br />
            myString.at(0) = <span className="text-purple-600 dark:text-purple-400">'J'</span>;<br />
            cout &lt;&lt; myString;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs Jello</span>
          </p>
        </div>
      </>
    ),
  },
  "cpp_strings_user_input_strings_.asp": {
    title: "C++ User Input Strings",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-green-200 mt-10">
          User Input Strings
        </h2>

        <p className=" leading-relaxed mb-4">
          It is possible to use the extraction operator{" "}
          <span className="font-mono">&gt;&gt;</span> on{" "}
          <span className="font-mono">cin</span> to store a string entered by a user.
        </p>

        <h3 className="text-xl font-medium  mb-2">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> firstName;
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type your first name: "</span>;
            <br />
            cin &gt;&gt; firstName;{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// get user input from the keyboard</span>
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Your name is: "</span> &lt;&lt; firstName;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">
            // Type your first name: John
              <br />
            // Your name is: John
            </span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          However, <span className="font-mono">cin</span> considers a space
          (whitespace, tabs, etc.) as a terminating character, which means that it can
          only store a single word (even if you type many words):
        </p>

        <h3 className="text-xl font-medium  mb-2">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> fullName;
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type your full name: "</span>;
            <br />
            cin &gt;&gt; fullName;
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Your name is: "</span> &lt;&lt; fullName;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">
            // Type your full name: John Doe
              <br />
            // Your name is: John
            </span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          From the example above, you would expect the program to print{" "}
          <span className="font-mono">"John Doe"</span>, but it only prints{" "}
          <span className="font-mono">"John"</span>.
        </p>

        <p className=" leading-relaxed mb-4">
          That's why, when working with strings, we often use the{" "}
          <span className="font-mono">getline()</span> function to read a line of text.
          It takes <span className="font-mono">cin</span> as the first parameter and
          the string variable as the second:
        </p>

        <h3 className="text-xl font-medium  mb-2">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> fullName;
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Type your full name: "</span>;
            <br />
            getline(cin, fullName);
            <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Your name is: "</span> &lt;&lt; fullName;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">
            // Type your full name: John Doe
              <br />
            // Your name is: John Doe
            </span>
          </p>
        </div>
      </>
    ),
  },




  // --- Math (New Content) ---
  "cpp_math.asp": {
    title: "C++ Math",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Math
        </h2>

        <p className=" leading-relaxed mb-4">
          C++ has many functions that allow you to perform mathematical tasks on numbers.
        </p>

        <h3 className="text-xl font-medium  mb-3">Max and min</h3>
        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">max(x, y)</span> function can be used to find the highest value of{" "}
          <span className="font-mono">x</span> and <span className="font-mono">y</span>:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; max(5, 10);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 10</span>
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          And the <span className="font-mono">min(x, y)</span> function can be used to find the lowest value of{" "}
          <span className="font-mono">x</span> and <span className="font-mono">y</span>:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; min(5, 10);{" "}
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 5</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">C++ &lt;cmath&gt; Library</h3>
        <p className=" leading-relaxed mb-4">
          Other functions, such as{" "}
          <span className="font-mono">sqrt()</span> (square root),{" "}
          <span className="font-mono">round()</span> (rounds a number), and{" "}
          <span className="font-mono">log()</span> (natural logarithm), can be found in the{" "}
          <strong className="font-semibold">&lt;cmath&gt;</strong> header file:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Include the cmath library
            <br />
            <span className="text-red-600 dark:text-red-400">#include</span>{" "}
            &lt;<span className="text-blue-600 dark:text-blue-400">cmath</span>&gt;
            <br />
            <br />
            cout &lt;&lt; sqrt(64);{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs 8</span>
            <br />
            cout &lt;&lt; round(2.6);{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs 3</span>
            <br />
            cout &lt;&lt; log(2);{" "}
            <span className="text-gray-500 dark:text-gray-400">// Outputs 0.693...</span>
          </p>
        </div>
      </>
    ),
  },

  // --- If..Else (Main) (New Content) ---
  "cpp_conditions.asp": {
    title: "C++ If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Conditions and If Statements
        </h2>
        <p className=" leading-relaxed mb-4">
          You can use comparison conditions to perform different actions. The core conditional statements are: <span className="font-mono">if</span>, <span className="font-mono">else</span>, <span className="font-mono">else if</span>, and <span className="font-mono">switch</span>.
        </p>
        <h3 className="text-xl font-medium  mb-3">Comparison Conditions</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>Less than: <span className="font-mono">a &lt; b</span></li>
          <li>Less than or equal to: <span className="font-mono">a &lt;= b</span></li>
          <li>Greater than: <span className="font-mono">a &gt; b</span></li>
          <li>Greater than or equal to: <span className="font-mono">a &gt;= b</span></li>
          <li>Equal to: <span className="font-mono">a == b</span></li>
          <li>Not Equal to: <span className="font-mono">a != b</span></li>
        </ul>
        <h3 className="text-xl font-medium  mb-3">The if Statement</h3>
        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">if</span> statement executes a block of code if a specified condition is <strong className='font-semibold'>true</strong>.
        </p>
        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition) {'{'} <span className="text-gray-500 dark:text-gray-400">// code if true</span> {'}'}
        </p>
      </>
    ),
  },

  // --- Else (New Content) ---
  "cpp_conditions_else.asp": {
    title: "C++ If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The else Statement
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className="font-semibold">else</strong> statement is used to specify a block of code that will execute if the condition in the <strong className="font-semibold">if</strong> statement is <strong className="font-semibold">false</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            if (condition) {"{"}<br />
            &nbsp;&nbsp;// block of code to be executed if the condition is true<br />
            {"}"} else {"{"}<br />
            &nbsp;&nbsp;// block of code to be executed if the condition is false<br />
            {"}"}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;<br />
            if (time &lt; 18) {"{"}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good day."</span>;<br />
            {"}"} else {"{"}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>;<br />
            {"}"}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs "Good evening."</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example Explained</h3>
        <p className=" leading-relaxed mb-4">
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
    title: "C++ If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The else if Statement
        </h2>
        <p className=" leading-relaxed mb-4">
          Use <strong className='font-semibold'>else if</strong> to specify a new condition if the{" "}
          <strong className='font-semibold'>first condition is false</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            if (condition1) {'{'} <br />
            &nbsp;&nbsp;// block of code if condition1 is true <br />
            {'}'} else if (condition2) {'{'} <br />
            &nbsp;&nbsp;// block of code if condition1 is false and condition2 is true <br />
            {'}'} else {'{'} <br />
            &nbsp;&nbsp;// block of code if both conditions are false <br />
            {'}'}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 22; <br />
            if (time &lt; 10) {'{'} cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good morning."</span>; {'}'} <br />
            else if (time &lt; 20) {'{'} cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good day."</span>; {'}'} <br />
            else {'{'} cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>; {'}'} <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs "Good evening."</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example Explained</h3>
        <p className=" leading-relaxed mb-4">
          In this example, <code>time</code> is 22, which is greater than 10, so the first condition is false.
          The <strong>else if</strong> condition (<code>time &lt; 20</code>) is also false,
          so the program executes the <strong>else</strong> block and prints
          <span className="font-mono"> "Good evening."</span>.
        </p>
        <p className=" leading-relaxed">
          If <code>time</code> were 14, the <strong>else if</strong> condition would be true, and it would print
          <span className="font-mono"> "Good day."</span>.
        </p>
      </>
    ),
  },


  // --- Short Hand If Else (New Content) ---
  "cpp_conditions_shorthand.asp": {
    title: "C++ If ... Else",

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
      </>
    ),
  },


  // --- Nested If (New Content) ---
  "cpp_conditions_nested.asp": {
    title: "C++ If ... Else",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Nested If
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong className='font-semibold'>nested if</strong> statement is an <span className="font-mono">if</span> statement placed inside another <span className="font-mono">if</span>. It allows checking for a condition only if a previous condition is true.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition1) {'{'}<br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if condition1 is true</span><br />
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (condition2) {'{'}<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if both condition1 and condition2 are true</span><br />
          &nbsp;&nbsp;{'}'}<br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 15;<br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 25;<br /><br />
            if (x &gt; 10) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"x is greater than 10\\n"</span>;<br /><br />
            &nbsp;&nbsp;// Nested if<br />
            &nbsp;&nbsp;if (y &gt; 20) {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"y is also greater than 20\\n"</span>;<br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4 font-semibold">
          Result:<br />
          x is greater than 10<br />
          y is also greater than 20
        </p>
      </>
    ),
  },
  // --- Switch (New Content) ---
  "cpp_switch.asp": {
    title: "C++ Switch",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Switch Statements
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>switch</strong> statement selects one of many code blocks to be executed based on a matching <span className="font-mono">case</span> value.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 p-2 rounded-md mb-4 text-sm">
          switch(expression) {'{'}<br />
          &nbsp;&nbsp;case x:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;// code block<br />
          &nbsp;&nbsp;&nbsp;&nbsp;break;<br />
          &nbsp;&nbsp;case y:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;// code block<br />
          &nbsp;&nbsp;&nbsp;&nbsp;break;<br />
          &nbsp;&nbsp;default:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;// code block<br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Weekday Name</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> day = 4;<br />
            switch (day) {'{'}<br />
            &nbsp;&nbsp;case 1: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Monday"</span>; break;<br />
            &nbsp;&nbsp;case 2: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Tuesday"</span>; break;<br />
            &nbsp;&nbsp;case 3: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Wednesday"</span>; break;<br />
            &nbsp;&nbsp;case 4: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Thursday"</span>; break;<br />
            &nbsp;&nbsp;case 5: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Friday"</span>; break;<br />
            &nbsp;&nbsp;case 6: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Saturday"</span>; break;<br />
            &nbsp;&nbsp;case 7: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Sunday"</span>; break;<br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold">Outputs "Thursday"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">The break Keyword</h3>
        <p className=" leading-relaxed mb-4">
          When C++ reaches a <strong className='font-semibold'>break</strong> keyword, it exits the switch block. This prevents the execution of subsequent cases once a match is found.
        </p>

        <h3 className="text-xl font-medium  mb-3">The default Keyword</h3>
        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>default</strong> keyword specifies code to run if no case matches:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> day = 4;<br />
            switch (day) {'{'}<br />
            &nbsp;&nbsp;case 6: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Today is Saturday"</span>; break;<br />
            &nbsp;&nbsp;case 7: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Today is Sunday"</span>; break;<br />
            &nbsp;&nbsp;default: cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Looking forward to the Weekend"</span>;<br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold">Outputs "Looking forward to the Weekend"</p>
        </div>
      </>
    ),
  },


  // --- While Loop (New Content) ---
  "cpp_while.asp": {
    title: "C++ While Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ While Loop
        </h2>

        <p className="leading-relaxed mb-4  dark:text-gray-100">
          The <strong className='font-semibold'>while</strong> loop executes a block of code as long as a specified condition is <strong className='font-semibold'>true</strong>. Loops save time, reduce errors, and make code more readable.
        </p>
        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">while</span> (condition) {'{'} <span className="text-gray-500 dark:text-gray-400">// code block to be executed</span> {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Counting Up</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;<br />
            <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;i++;<br />
            {'}'}
          </p>

          {/* Result Text: Added text-black for light mode visibility and dark:text-gray-100 for dark mode */}
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 4.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Countdown Example</h3>
        <p className=" leading-relaxed mb-4 ">
          Count down from 3 to 1 and display "Happy New Year!!":
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> countdown = 3;<br />
            <span className="text-red-600 dark:text-red-400">while</span> (countdown &gt; 0) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; countdown &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;countdown--;<br />
            {'}'}<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Happy New Year!!\n"</span>;
          </p>

          {/* Result Text: Added text-black for light mode visibility and dark:text-gray-100 for dark mode */}
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs 3, 2, 1 followed by "Happy New Year!!"
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> Always update the variable in the condition (like <span className="font-mono">i++</span> or <span className="font-mono">countdown--</span>) to avoid infinite loops.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong>Tip:</strong> The variable <span className="font-mono">i</span> is traditionally used as a counter because it stands for "index" or "iterator".
        </p>
      </>
    ),
  },
  "cpp_do_while_loop.asp": {
    title: "C++ Do/While Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Do/While Loop
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>do/while</strong> loop is similar to a while loop, but it executes the code block <strong>once before checking the condition</strong>, and then repeats as long as the condition is true.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">do</span> {'{'}<br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span> {'}'}<br />
          <span className="text-red-600 dark:text-red-400">while</span> (condition);
        </p>
        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> The semicolon <span className="font-mono">;</span> after the while condition is required.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Counting Up</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;<br />
            <span className="text-red-600 dark:text-red-400">do</span> {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;i++;<br />
            {'}'} <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5);
          </p>

          {/* Result Text: Added text-black for light mode visibility and dark:text-gray-100 for dark mode */}
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 4.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Condition False from Start</h3>
        <p className=" leading-relaxed mb-4">
          Even if the condition is false at the beginning, the do/while loop executes <strong>at least once</strong>:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 10;<br />
            do {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"i is "</span> &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;i++;<br />
            {'}'} while (i &lt; 5);
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Practical Example: User Input</h3>
        <p className=" leading-relaxed mb-4">
          Keep asking the user to enter a positive number. The loop stops when the user enters 0 or a negative number:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> number;<br />
            do {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Enter a positive number: "</span>;<br />
            &nbsp;&nbsp;cin &gt;&gt; number;<br />
            {'}'} while (number &gt; 0);
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Summary:</strong> The do/while loop always runs at least once, unlike a regular while loop, which may not run if the condition is false at the start.
        </p>
      </>
    ),
  },


  // --- For Loop (New Content) ---
  "cpp_For_loop.asp": {
    title: "C++ For Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ For Loop
        </h2>
        <p className=" leading-relaxed mb-4">
          Use the <strong className='font-semibold'>for</strong> loop when you know exactly how many times you want to loop through a block of code.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (statement 1; statement 2; statement 3) {'{'}<span className="text-gray-500 dark:text-gray-400"> // code block to be executed</span> {'}'}
        </p>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>Statement 1: Initializer (executed once before the loop starts).</li>
          <li>Statement 2: Condition (checked before each iteration).</li>
          <li>Statement 3: Afterthought (executed after each iteration).</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Example: Print Numbers 0 to 4</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 5; i++) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 0, 1, 2, 3, 4</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Print Even Numbers 0 to 10</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt;= 10; i = i + 2) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Outputs 0, 2, 4, 6, 8, 10</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Sum of Numbers 1 to 5</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> sum = 0;<br />
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 5; i++) {'{'} sum = sum + i; {'}'}<br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Sum is "</span> &lt;&lt; sum; <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Countdown from 5 to 1</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 5; i &gt; 0; i--) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400">// Outputs 5, 4, 3, 2, 1</span>
          </p>
        </div>
      </>
    ),
  },
  "cpp_nested_loop.asp": {
    title: "C++ Nested Loops",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Nested Loops
        </h2>
        <p className=" leading-relaxed mb-4">
          You can place a loop inside another loop. This is called a <strong className='font-semibold'>nested loop</strong>.
          The inner loop runs completely for each iteration of the outer loop.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Outer and Inner Loops</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">

            <span className="text-gray-500 dark:text-gray-400">// Outer loop</span><br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 2; ++i) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Outer: "</span> &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />

            <span className="text-gray-500 dark:text-gray-400">// Inner loop</span><br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> j = 1; j &lt;= 3; ++j) {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" Inner: "</span> &lt;&lt; j &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}
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
        <h3 className="text-xl font-medium  mb-3">Example: Multiplication Table (1 to 3)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 3; i++) {'{'}<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> j = 1; j &lt;= 3; j++) {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; i * j &lt;&lt; " ";<br />
            &nbsp;&nbsp;{'}'}<br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}
          </p>


          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:<br />
            1 2 3<br />
            2 4 6<br />
            3 6 9
          </p>
        </div>
      </>
    ),
  },
  "cpp_for_each_loop.asp": {
    title: "C++ The foreach Loop",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The foreach Loop
        </h2>
        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>for-each loop</strong> (range-based for loop) is used to loop through elements in an array or other iterable data structures.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">type</span> variableName : arrayName) {'{'} <span className="text-gray-500 dark:text-gray-400">// code block to be executed</span> {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through an Array</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNumbers[5] = {'{'}<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>{'}'};<br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : myNumbers) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}
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

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through a String</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNumbers[5] = {'{'}<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>{'}'};<br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : myNumbers) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}
          </p>

          {/* Result Text: Added text-black for light mode visibility and dark:text-gray-100 for dark mode */}
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:<br />
            10<br />
            20<br />
            30<br />
            40<br />
            50
          </p>
        </div>
      </>
    ),
  },


  // --- Break/Continue (New Content) ---
  "cpp_break_continue.asp": {
    title: "C++ Break/Continue",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Break
        </h2>
        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>break</strong> statement is used to <strong className='font-semibold'>jump out of a loop</strong> (or a switch statement) before it naturally ends.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 10; i++) {'{'}<br />
            &nbsp;&nbsp;if (i == 4) {'{'} <span className="text-red-600 dark:text-red-400">break</span>; {'}'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Stops when i is 4. Outputs 0, 1, 2, 3.</span>
          </p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          C++ Continue
        </h2>
        <p className=" leading-relaxed mb-4">
          The <strong className='font-semibold'>continue</strong> statement skips the current iteration of a loop and moves to the next iteration.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 10; i++) {'{'}<br />
            &nbsp;&nbsp;if (i == 4) {'{'} <span className="text-red-600 dark:text-red-400">continue</span>; {'}'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400">// Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Break and Continue in While Loops</h3>
        <p className=" leading-relaxed mb-4">
          Both <strong className='font-semibold'>break</strong> and <strong className='font-semibold'>continue</strong> can also be used in <span className="font-mono">while</span> loops.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;<br />
            while (i &lt; 10) {'{'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;i++;<br />
            &nbsp;&nbsp;if (i == 4) {'{'} <span className="text-red-600 dark:text-red-400">break</span>; {'}'}<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Stops when i is 4. Outputs 0, 1, 2, 3.</span>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;<br />
            while (i &lt; 10) {'{'}<br />
            &nbsp;&nbsp;if (i == 4) {'{'} i++; <span className="text-red-600 dark:text-red-400">continue</span>; {'}'}<br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\n"</span>;<br />
            &nbsp;&nbsp;i++;<br />
            {'}'}<br />
            <span className="text-gray-500 dark:text-gray-400 ">// Skips 4. Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9.</span>
          </p>
        </div>
      </>
    ),
  },

  // --- Arrays (New Content) ---
  "cpp_arrays.asp": {
    title: "C++ Arrays",

    content: (
      <>
        {/* Overview */}
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Arrays
        </h2>

        <p className=" leading-relaxed mb-4">
          Arrays are used to store multiple values of the same type in a single variable, instead of declaring separate variables for each value.
        </p>

        {/* Declaring Arrays */}
        <h3 className="text-xl font-medium  mb-3">Declaring an Array</h3>
        <p className=" leading-relaxed mb-4">
          To declare an array, define the variable type, specify the name of the array followed by **square brackets** (`[]`) and specify the fixed **number of elements** it should store:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">4</span>]; <span className="text-gray-500 dark:text-gray-400 ">// Declares an array of 4 strings</span>
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          To insert values, you can use an array literal by placing the values in a comma-separated list inside curly braces:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">4</span>] = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <span className="text-red-600 dark:text-red-400">int</span> myNum[<span className="text-blue-600 dark:text-blue-400">3</span>] = {'{'}<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>{'}'};
          </pre>
        </div>

        {/* Accessing Array Elements */}
        <h3 className="text-xl font-medium  mb-3">Accessing Array Elements</h3>
        <p className=" leading-relaxed mb-4">
          You access an array element by referring to the index number inside square brackets `[]`. Remember that Array indexes start at 0: `[0]` is the first element, `[1]` is the second, etc.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">4</span>] = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            cout &lt;&lt; cars[<span className="text-blue-600 dark:text-blue-400">0</span>];<span className="text-gray-500 dark:text-gray-400 "> // Outputs Volvo</span>
          </pre>
        </div>

        {/* Modifying Array Elements */}
        <h3 className="text-xl font-medium  mb-3">Changing an Array Element</h3>
        <p className=" leading-relaxed mb-4">
          To change the value of a specific element, refer to its index and assign a new value:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">4</span>] = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            cars[<span className="text-blue-600 dark:text-blue-400">0</span>] = <span className="text-purple-600 dark:text-purple-400">"Opel"</span>;
            cout &lt;&lt; cars[<span className="text-blue-600 dark:text-blue-400">0</span>];<span className="text-gray-500 dark:text-gray-400 ">
              <p>// Now outputs Opel instead of Volvo</p>

            </span>
          </pre>
        </div>
      </>
    ),
  },
  "cpp_arrays_loops.asp": {
    title: "C++ Arrays",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Through an Array (Traditional For Loop)
        </h2>

        <p className=" leading-relaxed mb-4">
          You can iterate through the elements of an array using the standard **`for` loop** combined with the array's size.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through Strings</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">5</span>] = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>, <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>{'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = <span className="text-blue-600 dark:text-blue-400">0</span>; i &lt; <span className="text-blue-600 dark:text-blue-400">5</span>; i++) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; cars[i] &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Outputting Index and Value</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = <span className="text-blue-600 dark:text-blue-400">0</span>; i &lt; <span className="text-blue-600 dark:text-blue-400">5</span>; i++) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; i &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" = "</span> &lt;&lt; cars[i] &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Output starts: 0 = Volvo, 1 = BMW, etc.</span>
          </p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          The For-Each Loop (Range-based For)
        </h2>

        <p className=" leading-relaxed mb-4">
          The for-each loop (introduced in C++11) is a simpler, more readable way to loop exclusively through **all elements** in an array or other data structures (like vectors and lists), without needing to manage the index or size.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">type</span> variableName : arrayName) {'{'} <span className="text-gray-500 dark:text-gray-400">// code block to be executed</span> {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through Integers</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNumbers[<span className="text-blue-600 dark:text-blue-400">5</span>] = {'{'}<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>, <span className="text-blue-600 dark:text-blue-400">50</span>{'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : myNumbers) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through Strings</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">string</span> cars[<span className="text-blue-600 dark:text-blue-400">5</span>] = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>, <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>{'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">string</span> car : cars) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },



  "cpp_functions.asp": {
    title: "C++ Functions",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Functions
        </h2>
        <p className=" leading-relaxed mb-4">
          A function is a block of code which only runs when it is called. You can pass data,
          known as <strong className="font-semibold">parameters</strong>, into a function.
          Functions are used to perform certain actions, and they are important for reusing code —
          define the code once, and use it many times.
        </p>

        <h3 className="text-xl font-medium  mb-3">Create a Function</h3>
        <p className=" leading-relaxed mb-4">
          C++ provides some pre-defined functions, such as <code>main()</code>, which is used to execute code.
          But you can also create your own functions to perform certain actions.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'} <br />
            &nbsp;&nbsp;// code to be executed <br />
            {'}'}
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          <strong>Example Explained:</strong><br />
          <code>myFunction()</code> is the name of the function.<br />
          <code>void</code> means that the function does not have a return value.<br />
          Inside the function (the body), add code that defines what the function should do.
        </p>

        <h3 className="text-xl font-medium  mb-3">Call a Function</h3>
        <p className=" leading-relaxed mb-4">
          Declared functions are not executed immediately. They are "saved for later use", and
          will be executed later when they are called. To call a function, write its name
          followed by parentheses <code>()</code> and a semicolon <code>;</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I just got executed!"</span>; <br />
            {'}'} <br /><br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'} <br />
            &nbsp;&nbsp;myFunction(); <span className="text-gray-500 dark:text-gray-400 ">// call the function</span> <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0; <br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Output:</strong> I just got executed!
        </p>

        <h3 className="text-xl font-medium  mb-3">Call a Function Multiple Times</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I just got executed!\n"</span>; <br />
            {'}'} <br /><br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'} <br />
            &nbsp;&nbsp;myFunction();<br />
            &nbsp;&nbsp;myFunction();<br />
            &nbsp;&nbsp;myFunction();<br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Output:</strong><br />
          I just got executed!<br />
          I just got executed!<br />
          I just got executed!
        </p>

        <h3 className="text-xl font-medium  mb-3">Function Declaration and Definition</h3>
        <p className=" leading-relaxed mb-4">
          A C++ function consists of two parts:
          <ul className="list-disc list-inside">
            <li><strong>Declaration:</strong> the return type, the name of the function, and parameters (if any)</li>
            <li><strong>Definition:</strong> the body of the function (code to be executed)</li>
          </ul>
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'} <br />
            &nbsp;&nbsp;// the body of the function (definition) <br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          Note: If a user-defined function such as <code>myFunction()</code> is declared <strong>after</strong> the <code>main()</code> function, an error will occur:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'} <br />
            &nbsp;&nbsp;myFunction(); <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0; <br />
            {'}'} <br /><br />
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"I just got executed!"</span>; <br />
            {'}'}
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          <strong>Error:</strong> function declared after <code>main()</code>.
        </p>
      </>
    ),
  },
  "cpp_functions_parameters.asp": {
    title: "C++ Functions",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Parameters and Arguments
        </h2>

        <p className=" leading-relaxed mb-4">
          Information can be passed to functions as a <strong>parameter</strong>. Parameters act as variables inside the function definition. The actual values passed to the function when it is called are referred to as <strong>arguments</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          Parameters are specified after the function name, inside the parentheses. You can add as many parameters as you want, separated by a comma:
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">void</span> functionName(
          <span className="text-red-600 dark:text-red-400">type</span> parameter1,
          <span className="text-red-600 dark:text-red-400">type</span> parameter2
          ) {'{'} <span className="text-gray-500 dark:text-gray-400">// code to be executed</span> {'}'}
        </p>
        <h3 className="text-xl font-medium  mb-3">Example: Printing a Full Name</h3>
        <p className=" leading-relaxed mb-4">
          This function takes a <code>string</code> called <code>fname</code> as a parameter. When the function is called, the argument is passed in and used inside the function:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction(<span className="text-red-600 dark:text-red-400">string</span> fname) {'{'}
            cout &lt;&lt; fname &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" Refsnes\n"</span>;
            {'}'}

            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            myFunction(<span className="text-purple-600 dark:text-purple-400">"Liam"</span>);
            myFunction(<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>);
            myFunction(<span className="text-purple-600 dark:text-purple-400">"Anja"</span>);
            <span className="text-red-600 dark:text-red-400">return</span> <span className="text-blue-600 dark:text-blue-400">0</span>;
            {'}'}

            <span className="text-gray-500 dark:text-gray-400 ">// Output:</span>
            <span className="text-gray-500 dark:text-gray-400 ">// Liam Refsnes</span>
            <span className="text-gray-500 dark:text-gray-400 ">// Jenny Refsnes</span>
            <span className="text-gray-500 dark:text-gray-400 ">// Anja Refsnes</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Multiple Parameters</h3>
        <p className=" leading-relaxed mb-4">
          You can use multiple parameters, separated by commas. Note that when passing multiple arguments, they must match the parameter types and order.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200 whitespace-pre-wrap break-words">
            <span className="text-red-600 dark:text-red-400">void</span> myFunction(
            <span className="text-red-600 dark:text-red-400">string</span> fname,
            <span className="text-red-600 dark:text-red-400">int</span> age
            ) {'{'}
            cout &lt;&lt; fname &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" is "</span> &lt;&lt; age &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" years old.\n"</span>;
            {'}'}

            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            myFunction(<span className="text-purple-600 dark:text-purple-400">"Liam"</span>, <span className="text-blue-600 dark:text-blue-400">3</span>);
            myFunction(<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>, <span className="text-blue-600 dark:text-blue-400">22</span>);
            <span className="text-red-600 dark:text-red-400">return</span> <span className="text-blue-600 dark:text-blue-400">0</span>;
            {'}'}
          </pre>
        </div>
      </>
    ),
  }
  ,
  "cpp_functions_overloading.asp": {
    title: "C++ Function Overloading",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Function Overloading
        </h2>

        <p className=" leading-relaxed mb-4">
          Function overloading allows multiple functions to have the same name, as long as their
          <strong className="font-semibold"> parameters are different</strong> in type or number.
          It helps make your code cleaner and more intuitive by using one function name for similar tasks.
        </p>

        <h3 className="text-xl font-medium  mb-3">Function Overloading Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            int myFunction(int x); <br />
            float myFunction(float x); <br />
            double myFunction(double x, double y);
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          This lets you use the same function name for similar operations on different data types.
        </p>

        <h3 className="text-xl font-medium  mb-3">Without Function Overloading</h3>
        <p className=" leading-relaxed mb-4">
          Consider the following example, where we define two separate functions to add integers
          and doubles:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            int plusFuncInt(int x, int y) {'{'} <br />
            &nbsp;&nbsp;return x + y; <br />
            {'}'} <br /><br />
            double plusFuncDouble(double x, double y) {'{'} <br />
            &nbsp;&nbsp;return x + y; <br />
            {'}'} <br /><br />
            int main() {'{'} <br />
            &nbsp;&nbsp;int myNum1 = plusFuncInt(8, 5); <br />
            &nbsp;&nbsp;double myNum2 = plusFuncDouble(4.3, 6.26); <br /><br />
            &nbsp;&nbsp;cout &lt;&lt; "Int: " &lt;&lt; myNum1 &lt;&lt; "\\n"; <br />
            &nbsp;&nbsp;cout &lt;&lt; "Double: " &lt;&lt; myNum2; <br />
            &nbsp;&nbsp;return 0; <br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Problem:</strong> We had to create two different function names for the same logic.
        </p>

        <h3 className="text-xl font-medium  mb-3">Using Function Overloading</h3>
        <p className=" leading-relaxed mb-4">
          Instead of defining multiple functions with different names, we can overload a single function name:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            int plusFunc(int x, int y) {'{'} <br />
            &nbsp;&nbsp;return x + y; <br />
            {'}'} <br /><br />
            double plusFunc(double x, double y) {'{'} <br />
            &nbsp;&nbsp;return x + y; <br />
            {'}'} <br /><br />
            int main() {'{'} <br />
            &nbsp;&nbsp;int myNum1 = plusFunc(8, 5); <br />
            &nbsp;&nbsp;double myNum2 = plusFunc(4.3, 6.26); <br /><br />
            &nbsp;&nbsp;cout &lt;&lt; "Int: " &lt;&lt; myNum1 &lt;&lt; "\\n"; <br />
            &nbsp;&nbsp;cout &lt;&lt; "Double: " &lt;&lt; myNum2; <br />
            &nbsp;&nbsp;return 0; <br />
            {'}'}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> Multiple functions can have the same name as long as the number
          and/or type of parameters are different.
        </p>

        <h3 className="text-xl font-medium  mb-3">Function Overloading by Number of Parameters</h3>
        <p className=" leading-relaxed mb-4">
          In this example, we overload the same function name but use a different number of parameters:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            int plusFunc(int x, int y) {'{'} <br />
            &nbsp;&nbsp;return x + y; <br />
            {'}'} <br /><br />
            int plusFunc(int x, int y, int z) {'{'} <br />
            &nbsp;&nbsp;return x + y + z; <br />
            {'}'} <br /><br />
            int main() {'{'} <br />
            &nbsp;&nbsp;int result1 = plusFunc(3, 7); <br />
            &nbsp;&nbsp;int result2 = plusFunc(1, 2, 3); <br /><br />
            &nbsp;&nbsp;cout &lt;&lt; "Sum of 2 numbers: " &lt;&lt; result1 &lt;&lt; "\\n"; <br />
            &nbsp;&nbsp;cout &lt;&lt; "Sum of 3 numbers: " &lt;&lt; result2; <br />
            &nbsp;&nbsp;return 0; <br />
            {'}'}
          </p>
        </div>
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
    title: "C++ OOP",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-5">
          C++ What is OOP?
        </h2>

        <p className=" leading-relaxed mb-4">
          OOP stands for **Object-Oriented Programming**. This programming paradigm is all about creating "objects," which bundle data (variables/properties) and the functions (methods) that operate on that data together into a single unit.
        </p>

        <h3 className="text-xl font-medium  mb-3">Advantages of OOP</h3>
        <p className=" leading-relaxed mb-4">
          Using the OOP paradigm offers several key benefits in software development:
        </p>
        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li>
            Clear Structure: Provides a clear, organized structure to large programs.
          </li>
          <li>
            Reusability: Makes code easier to maintain, reuse, and debug. It helps keep your code DRY (Don't Repeat Yourself).
          </li>
          <li>
            **Shorter Development:** Makes it possible to create fully reusable applications with less code and shorter development time.
          </li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Classes and Objects</h3>
        <p className=" leading-relaxed mb-4">
          Classes and objects are the two main concepts of object-oriented programming.
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
              <td className="p-2 border">A blueprint or template that defines what an object should look like (e.g., Fruit or Car).</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Object</td>
              <td className="p-2 border">An instance of a class created based on the blueprint (e.g., *Apple*, *Volvo*). When you create an object, it inherits all the variables and functions defined inside that class.</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-medium  mb-3">Procedural vs. Object-Oriented Programming</h3>

        <p className=" leading-relaxed mb-4">
          The fundamental difference lies in how code is organized:
        </p>
        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li>
            **Procedural Programming:** Code is organized primarily around **functions** that operate on global data.
          </li>
          <li>
            Object-Oriented Programming (OOP):Code is organized around objects that contain both the data and the functions that manipulate that data.
          </li>
        </ul>
        <p className=" leading-relaxed mb-4">
          In the upcoming chapters, you'll learn how to define a class, create objects, and access their members in C++.
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
    title: "C++ Classes and Objects",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Classes and Objects
        </h2>

        <p className=" leading-relaxed mb-4">
          C++ is an object-oriented programming language. Everything in C++ is associated with classes and objects, along with their attributes and methods.
          For example, in real life, a car is an object. The car has attributes such as weight and color, and methods such as drive and brake.
        </p>

        <p className=" leading-relaxed mb-4">
          Attributes and methods are variables and functions that belong to the class. These are often referred to as <strong>"class members"</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          A class is a user-defined data type that acts as a blueprint for creating objects, or an object constructor.
        </p>

        <h3 className="text-xl font-medium  mb-3">Create a Class</h3>
        <p className=" leading-relaxed mb-4">
          To create a class, use the <code>class</code> keyword.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: MyClass</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">

            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}       <span className="text-gray-500 dark:text-gray-400">// The class</span><br />
            <span className="text-red-600 dark:text-red-400">public</span>:             <span className="text-gray-500 dark:text-gray-400">// Access specifier</span><br />
            <span className="text-red-600 dark:text-red-400">int</span> myNum;        <span className="text-gray-500 dark:text-gray-400">// Attribute (int variable)</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> myString;  <span className="text-gray-500 dark:text-gray-400">// Attribute (string variable)</span><br />
            {'}'};
          </pre>
        </div>

        <h4 className="text-lg font-medium  mb-2">Explanation</h4>
        <ul className="list-disc list-inside  mb-4">
          <li>The <code>class</code> keyword creates a class called <code>MyClass</code>.</li>
          <li>The <code>public</code> keyword is an access specifier, making class members accessible from outside the class.</li>
          <li><code>myNum</code> and <code>myString</code> are attributes (variables inside the class).</li>
          <li>Always end a class definition with a semicolon <code>;</code>.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Create an Object</h3>
        <p className=" leading-relaxed mb-4">
          In C++, an object is created from a class. To create an object of <code>MyClass</code>, specify the class name followed by the object name.
          Access the class attributes using dot syntax (<code>.</code>).
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Create and Use an Object</h4>


        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* MyClass Definition */}
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'} <span className="text-gray-500 dark:text-gray-400">// The class</span><br />
            <span className="text-red-600 dark:text-red-400">public</span>: <span className="text-gray-500 dark:text-gray-400">// Access specifier</span><br />
            <span className="text-red-600 dark:text-red-400">int</span> myNum; <span className="text-gray-500 dark:text-gray-400">// Attribute (int variable)</span><br />
            <span className="text-red-600 dark:text-red-400">string</span> myString; <span className="text-gray-500 dark:text-gray-400">// Attribute (string variable)</span><br />
            {'}'};<br /><br />

            {/* main() Function and Object Usage */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}<br />
            MyClass myObj; <span className="text-gray-500 dark:text-gray-400">// Create an object of MyClass</span><br /><br />

            <span className="text-gray-500 dark:text-gray-400">// Access attributes and set values</span><br />
            myObj.myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;<br />
            myObj.myString = <span className="text-purple-600 dark:text-purple-400">"Some text"</span>;<br /><br />

            <span className="text-gray-500 dark:text-gray-400">// Print attribute values</span><br />
            cout &lt;&lt; myObj.myNum &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;<br />
            cout &lt;&lt; myObj.myString;<br /><br />

            <span className="text-red-600 dark:text-red-400">return</span> 0;<br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },



  "cpp_constructor.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Constructors
        </h2>

        <p className=" leading-relaxed mb-4">
          A constructor is a special method that is automatically called when an object of a class is created.
        </p>

        <h3 className="text-xl font-medium mb-2">Creating a Constructor</h3>
        <p className=" leading-relaxed mb-4">
          To create a constructor, use the same name as the class, followed by parentheses ().
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* MyClass with Constructor */}
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-600 dark:text-blue-400">MyClass</span>() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            cout &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />

            {/* main() Function */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyClass myObj;{' '}
            <span className="text-gray-500 dark:text-gray-400">
      // This will call the constructor
            </span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <h3 className="text-xl font-medium mb-2">Constructor Rules</h3>
        <ul className="list-disc list-inside  mb-4">
          <li>The constructor has the same name as the class.</li>
          <li>It has no return type (not even void).</li>
          <li>It is usually declared public.</li>
          <li>It is automatically called when an object is created.</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Constructor with Parameters</h3>
        <p className=" leading-relaxed mb-4">
          Constructors can also take parameters to set initial values for attributes.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* Car Class with Parameterized Constructor */}
            <span className="text-red-600 dark:text-red-400">class</span> Car {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">string</span> brand;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">string</span> model;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> year;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            Car(<span className="text-red-600 dark:text-red-400">string</span> x,{' '}
            <span className="text-red-600 dark:text-red-400">string</span> y,{' '}
            <span className="text-red-600 dark:text-red-400">int</span> z) {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand = x;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model = y;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year = z;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />

            {/* main() Function */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Car carObj1(
            <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400">"X5"</span>, 1999);
            <br />&nbsp;&nbsp;Car carObj2(
            <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400">"Mustang"</span>, 1969);
            <br />
            <br />&nbsp;&nbsp;cout &lt;&lt; carObj1.brand &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj1.model
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj1.year
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;cout &lt;&lt; carObj2.brand &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj2.model
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj2.year
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-2">Constructor Defined Outside the Class</h3>
        <p className=" leading-relaxed mb-4">
          You can define the constructor outside the class using the scope resolution operator (::).
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            {/* Car Class with Constructor Declaration */}
            <span className="text-red-600 dark:text-red-400">class</span> Car {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">string</span> brand;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">string</span> model;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> year;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            Car(<span className="text-red-600 dark:text-red-400">string</span> x,{' '}
            <span className="text-red-600 dark:text-red-400">string</span> y,{' '}
            <span className="text-red-600 dark:text-red-400">int</span> z);{' '}
            <span className="text-gray-500 dark:text-gray-400">
      // Constructor declaration
            </span>
            <br />
            {'}'};<br />
            <br />

            {/* Constructor Definition */}
            <span className="text-gray-500 dark:text-gray-400">
      // Constructor definition outside the class
            </span>
            <br />
            Car::Car(<span className="text-red-600 dark:text-red-400">string</span> x,{' '}
            <span className="text-red-600 dark:text-red-400">string</span> y,{' '}
            <span className="text-red-600 dark:text-red-400">int</span> z) {'{'}
            <br />&nbsp;&nbsp;brand = x;
            <br />&nbsp;&nbsp;model = y;
            <br />&nbsp;&nbsp;year = z;
            <br />
            {'}'}<br />
            <br />

            {/* main() Function */}
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Car carObj1(
            <span className="text-purple-600 dark:text-purple-400">"BMW"</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400">"X5"</span>, 1999);
            <br />&nbsp;&nbsp;Car carObj2(
            <span className="text-purple-600 dark:text-purple-400">"Ford"</span>,{' '}
            <span className="text-purple-600 dark:text-purple-400">"Mustang"</span>, 1969);
            <br />
            <br />&nbsp;&nbsp;cout &lt;&lt; carObj1.brand &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj1.model
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj1.year
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;cout &lt;&lt; carObj2.brand &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj2.model
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">" "</span> &lt;&lt; carObj2.year
            &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

      </>
    ),
  },
  "cpp_access_specifiers.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Access Specifiers
        </h2>

        <p className=" leading-relaxed mb-4">
          Access specifiers control how the members (attributes and methods) of a class can be accessed.
          They help protect data and organize code so that only the right parts can be seen or changed.
        </p>

        <h3 className="text-xl font-medium  mb-3">Using Access Specifiers</h3>
        <p className=" leading-relaxed mb-4">
          The <code>public</code> keyword is an access specifier. Members declared as public can be accessed and modified from outside the class.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Public Members</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}{' '}
            <span className="text-gray-500 dark:text-gray-400">// The class</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:{' '}
            <span className="text-gray-500 dark:text-gray-400">// Access specifier</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> x;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Public member</span>
            <br />
            {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyClass myObj;
            <br />&nbsp;&nbsp;myObj.x = 25;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Allowed (public)</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <h3 className="text-xl font-medium  mb-3">Private Members</h3>
        <p className=" leading-relaxed mb-4">
          Members declared as <code>private</code> cannot be accessed from outside the class.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Public vs Private</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> x;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Public attribute</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">private</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> y;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Private attribute</span>
            <br />
            {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyClass myObj;
            <br />&nbsp;&nbsp;myObj.x = 25;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Allowed (public)</span>
            <br />&nbsp;&nbsp;myObj.y = 50;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Not allowed (private) → Error</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> Private members can be accessed using a public method inside the same class. This is the basis of the <strong>Encapsulation</strong> concept.
        </p>

        <p className=" leading-relaxed mb-4">
          <strong>Tip:</strong> It is considered good practice to declare class attributes as private to prevent accidental modification and improve code safety.
        </p>

        <h3 className="text-xl font-medium  mb-3">Default Access</h3>
        <p className=" leading-relaxed mb-4">
          By default, all members of a class are <code>private</code> if you don't specify an access specifier.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Default Private</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> x;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Private by default</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> y;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Private by default</span>
            <br />
            {'}'};<br />
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Protected Members</h3>
        <p className=" leading-relaxed mb-4">
          Members declared as <code>protected</code> cannot be accessed from outside the class, but they can be accessed in child classes. This is mainly used in <strong>Inheritance</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Real-Life Analogy</h3>
        <ul className="list-disc list-inside  mb-4">
          <li><strong>Public:</strong> Like the front door of your house – anyone can enter.</li>
          <li><strong>Private:</strong> Like a locked drawer – only the owner (or trusted friends) can access it.</li>
          <li><strong>Protected:</strong> Like a family-only room – children (subclasses) can enter, others cannot.</li>
        </ul>
      </>
    ),
  },
  "cpp_encapsulation.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Encapsulation
        </h2>

        <p className=" leading-relaxed mb-4">
          <strong>Encapsulation</strong> ensures that "sensitive" data is hidden from users.
          To achieve this, declare class variables/attributes as <code>private</code> so they cannot be accessed directly from outside the class.
        </p>

        <p className=" leading-relaxed mb-4">
          If you want others to read or modify the value of a private member, provide <code>public</code> getter and setter methods.
        </p>

        <h3 className="text-xl font-medium  mb-3">Real-Life Example</h3>
        <p className=" leading-relaxed mb-4">
          Think of an employee's salary:
        </p>
        <ul className="list-disc list-inside  mb-4">
          <li>The salary is private – the employee can't change it directly.</li>
          <li>Only their manager can update it or share it when appropriate.</li>
        </ul>
        <p className=" leading-relaxed mb-4">
          Encapsulation works the same way. The data is hidden, and only trusted methods can access or modify it.
        </p>

        <h3 className="text-xl font-medium  mb-3">Access Private Members</h3>
        <p className=" leading-relaxed mb-4">
          To access a private attribute, use public <code>get</code> and <code>set</code> methods:
        </p>

        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-purple-600 dark:text-purple-400">#include &lt;iostream&gt;</span>
            <br />
            <span className="text-red-600 dark:text-red-400">using</span> namespace std;
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Employee {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">private</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> salary;{' '}
            <span className="text-gray-500 dark:text-gray-400">// Private attribute</span>
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> setSalary(
            <span className="text-red-600 dark:text-red-400">int</span> s) {'{'}{' '}
            <span className="text-gray-500 dark:text-gray-400">// Setter</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = s;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> getSalary() {'{'}{' '}
            <span className="text-gray-500 dark:text-gray-400">// Getter</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> salary;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Employee myObj;
            <br />&nbsp;&nbsp;myObj.setSalary(50000);
            <br />&nbsp;&nbsp;cout &lt;&lt; myObj.getSalary();
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <h4 className="text-lg font-medium  mb-2">Explanation</h4>
        <ul className="list-disc list-inside  mb-4">
          <li><code>salary</code> is private – it cannot be accessed directly.</li>
          <li><code>setSalary()</code> sets the value.</li>
          <li><code>getSalary()</code> returns the value.</li>
          <li>We use <code>myObj.setSalary(50000)</code> to assign a value, and <code>myObj.getSalary()</code> to print it.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Why Encapsulation?</h3>
        <p className=" leading-relaxed mb-4">
          Declaring class attributes as private is considered good practice. Encapsulation provides better control of your data, allowing you to change one part of the code without affecting others, and increases security of data.
        </p>
      </>
    ),
  },
  "cpp_inheritance.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Inheritance
        </h2>

        <h3 className="text-xl font-medium  mb-3">Multilevel Inheritance</h3>
        <p className=" leading-relaxed mb-4">
          A class can be derived from a class which is already derived from another class. In this example, <code>MyGrandChild</code> is derived from <code>MyChild</code>, which in turn is derived from <code>MyClass</code>.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Base class (parent)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"Some content in parent class."</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class (child)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyChild: <span className="text-red-600 dark:text-red-400">public</span> MyClass {'{'}{'}'};
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class (grandchild)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyGrandChild: <span className="text-red-600 dark:text-red-400">public</span> MyChild {'{'}{'}'};
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyGrandChild myObj;
            <br />&nbsp;&nbsp;myObj.myFunction();
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Multiple Inheritance</h3>
        <p className=" leading-relaxed mb-4">
          A class can be derived from more than one base class using a comma-separated list.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Base class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> myFunction() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"Some content in parent class."</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Another base class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyOtherClass {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">void</span> myOtherFunction() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt;{' '}
            <span className="text-purple-600 dark:text-purple-400">"Some content in another class."</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> MyChildClass: <span className="text-red-600 dark:text-red-400">public</span> MyClass, <span className="text-red-600 dark:text-red-400">public</span> MyOtherClass {'{'}{'}'};
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;MyChildClass myObj;
            <br />&nbsp;&nbsp;myObj.myFunction();
            <br />&nbsp;&nbsp;myObj.myOtherFunction();
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <h3 className="text-xl font-medium  mb-3">Inheritance and Access Specifiers</h3>
        <p className=" leading-relaxed mb-4">
          You learned about public, private, and protected access specifiers. The <code>protected</code> specifier is similar to private but allows access in inherited classes.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Base class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Employee {'{'}
            <br />&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">protected</span>: <span className="text-gray-500 dark:text-gray-400">// Protected access specifier</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-red-600 dark:text-red-400">int</span> salary;
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Programmer: <span className="text-red-600 dark:text-red-400">public</span> Employee {'{'}
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> bonus;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">void</span> setSalary(<span className="text-red-600 dark:text-red-400">int</span> s) {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = s;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> getSalary() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> salary;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Programmer myObj;
            <br />&nbsp;&nbsp;myObj.setSalary(50000);
            <br />&nbsp;&nbsp;myObj.bonus = 15000;
            <br />&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Salary: "</span> &lt;&lt; myObj.getSalary() &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Bonus: "</span> &lt;&lt; myObj.bonus &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>

      </>
    ),
  },
  "cpp_polymorphism.asp": {
    title: "C++ Classes",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 pb-2 border-b border-purple-200 mt-10">
          C++ Polymorphism
        </h2>

        <p className=" leading-relaxed mb-4">
          <strong>Polymorphism</strong> means "many forms". It occurs when classes are related by inheritance, allowing the same action to behave differently for different objects.
        </p>

        <p className=" leading-relaxed mb-4">
          For example, a base class <code>Animal</code> with a method <code>animalSound()</code>. Derived classes like <code>Pig</code>, <code>Dog</code>, <code>Bird</code> can override this method to produce different sounds:
        </p>

        <ul className="list-disc list-inside  mb-4">
          <li>Pig: wee wee</li>
          <li>Dog: bow wow</li>
          <li>Bird: tweet tweet</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Base class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Animal {'{'}
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">void</span> animalSound() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"The animal makes a sound \\n"</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Pig : <span className="text-red-600 dark:text-red-400">public</span> Animal {'{'}
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">void</span> animalSound() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"The pig says: wee wee \\n"</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Derived class</span>
            <br />
            <span className="text-red-600 dark:text-red-400">class</span> Dog : <span className="text-red-600 dark:text-red-400">public</span> Animal {'{'}
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public</span>:
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">void</span> animalSound() {'{'}
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"The dog says: bow wow \\n"</span>;
            <br />&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br />
            {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> main() {'{'}
            <br />&nbsp;&nbsp;Animal myAnimal;
            <br />&nbsp;&nbsp;Pig myPig;
            <br />&nbsp;&nbsp;Dog myDog;
            <br />
            <br />&nbsp;&nbsp;myAnimal.animalSound();
            <br />&nbsp;&nbsp;myPig.animalSound();
            <br />&nbsp;&nbsp;myDog.animalSound();
            <br />&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            {'}'}
          </pre>
        </div>


        <p className=" leading-relaxed mb-4">
          Using inheritance and method overriding, the same method <code>animalSound()</code> behaves differently depending on the object. This is the core idea of polymorphism in C++.
        </p>
      </>
    ),
  },




  "cpp_data_structures.asp": {
    title: "C++ Data Structures and STL",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Data Structures and STL
        </h2>

        <p className=" leading-relaxed mb-4">
          Data structures are used to store and organize data. An array is an example of a data structure,
          which allows multiple elements to be stored in a single variable.
        </p>

        <p className=" leading-relaxed mb-4">
          C++ includes many other data structures as well, each used to handle data in different ways.
          These are part of the <strong>Standard Template Library (STL)</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">C++ STL</h3>
        <p className=" leading-relaxed mb-4">
          STL is a library that consists of different data structures and algorithms to effectively store and
          manipulate data. If data structures store data, algorithms solve problems by searching through
          and manipulating those data structures.
        </p>

        <p className=" leading-relaxed mb-4">
          Using the right data structure and algorithm makes your program faster, especially when working
          with large amounts of data.
        </p>

        <h3 className="text-xl font-medium  mb-3">Common Data Structures</h3>

        <table className="w-full text-left border border-gray-300 mb-6">
          <thead>
            <tr className="bg-purple-100">
              <th className="p-2 border">Data Structure</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border font-semibold">Vector</td>
              <td className="p-2 border">
                Stores elements like an array but can dynamically change in size. Adding and removing
                elements are usually done at the end. Elements can be accessed by index.
              </td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">List</td>
              <td className="p-2 border">
                Stores elements sequentially, where each element is connected to the next. Adding and
                removing of elements can be done at both ends. Not accessible by index.
              </td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Stack</td>
              <td className="p-2 border">
                Follows the LIFO (Last In, First Out) principle, where elements are added and removed from
                the top. Not accessible by index.
              </td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Queue</td>
              <td className="p-2 border">
                Follows the FIFO (First In, First Out) principle, where elements are added at the end and
                removed from the front. Not accessible by index.
              </td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Deque</td>
              <td className="p-2 border">
                Double-ended queue; elements can be added or removed from both ends and accessed by index.
              </td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Set</td>
              <td className="p-2 border">Stores unique elements. Not accessible by index.</td>
            </tr>
            <tr>
              <td className="p-2 border font-semibold">Map</td>
              <td className="p-2 border">
                Stores elements in key/value pairs. Accessible by keys (not by index).
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-medium  mb-3">Including STL Headers</h3>
        <p className=" leading-relaxed mb-4">
          You must include the correct header file to use each data structure:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;vector&gt; <br />
            #include &lt;list&gt; <br />
            #include &lt;set&gt; <br />
            #include &lt;map&gt; <br />
            #include &lt;stack&gt; <br />
            #include &lt;queue&gt;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Using Vectors</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Create a vector called cars that will store strings <br />
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br /><br />
          // Print vector elements <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          The next chapters will explain how each data structure works and how to use them.
        </p>

        <h3 className="text-xl font-medium  mb-3">Key Concepts of the STL</h3>
        <ul className="list-disc pl-6  leading-relaxed mb-4">
          <li>
            <strong>Containers</strong> — Data structures that provide ways to store data (like vectors,
            lists, sets, etc.).
          </li>
          <li>
            <strong>Iterators</strong> — Objects used to access elements of a container.
          </li>
          <li>
            <strong>Algorithms</strong> — Functions like <code>sort()</code> and <code>find()</code> that
            operate on data through iterators.
          </li>
        </ul>

        <p className=" leading-relaxed mb-4">
          In computer science, data structures and algorithms go hand in hand — a data structure is useful
          only when efficiently operated on by algorithms, and algorithms depend on data structures to
          perform effectively.
        </p>
      </>
    ),
  },
  "cpp_vectors.asp": {
    title: "C++ Vectors",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Vectors
        </h2>

        <p className=" leading-relaxed mb-4">
          A vector in C++ is like a resizable array.
        </p>

        <p className=" leading-relaxed mb-4">
          Both vectors and arrays are data structures used to store multiple elements of the same data type.
          The difference is that the size of an array cannot be modified (you cannot add or remove elements),
          while a vector can grow or shrink dynamically as needed.
        </p>

        <p className=" leading-relaxed mb-4">
          To use a vector, you must include the <code>&lt;vector&gt;</code> header file:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Include the vector library <br />
            #include &lt;vector&gt;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Create a Vector</h3>
        <p className=" leading-relaxed mb-4">
          To create a vector, use the <code>vector</code> keyword, specify the type of values it stores within
          angle brackets <code>&lt;&gt;</code>, and then give it a name, like this:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Create a vector called cars that will store strings <br />
            vector&lt;string&gt; cars;
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          If you want to add elements at the time of declaration, use curly braces <code>{"{}"}</code> to
          initialize the vector with values, just like an array:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Create a vector called cars that will store strings <br />
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br /><br />
          // Print vector elements <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          <strong>Note:</strong> The type of a vector (like <code>string</code> in this example)
          cannot be changed after it has been declared.
        </p>

        <h3 className="text-xl font-medium  mb-3">Accessing Vector Elements</h3>
        <p className=" leading-relaxed mb-4">
          You can access vector elements using index numbers inside square brackets <code>[]</code>.
          Vectors are zero-indexed, meaning <code>[0]</code> is the first element.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br /><br />
            cout &lt;&lt; cars[0]; // Outputs Volvo <br />
            cout &lt;&lt; cars[1]; // Outputs BMW
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          You can also use the <code>.front()</code> and <code>.back()</code> functions to get the
          first and last elements, or the <code>.at()</code> function to safely access elements.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br /><br />
            cout &lt;&lt; cars.front(); // First element <br />
            cout &lt;&lt; cars.back();  // Last element <br /><br />
            cout &lt;&lt; cars.at(1);  // Access by index safely
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Modify Vector Elements</h3>
        <p className=" leading-relaxed mb-4">
          You can change the value of a specific element using either index access or the <code>.at()</code> function:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            cars[0] = "Opel"; <br />
            cout &lt;&lt; cars[0]; // Now outputs Opel instead of Volvo
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Add Elements</h3>
        <p className=" leading-relaxed mb-4">
          Use <code>.push_back()</code> to add elements to the end of a vector:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            cars.push_back("Tesla"); <br />
            cars.push_back("VW");
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Remove Elements</h3>
        <p className=" leading-relaxed mb-4">
          Use <code>.pop_back()</code> to remove an element from the end of a vector:
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            cars.pop_back();
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Vector Size & Empty Check</h3>
        <p className=" leading-relaxed mb-4">
          You can use <code>.size()</code> to get the number of elements, and <code>.empty()</code>
          to check if a vector is empty.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            cout &lt;&lt; cars.size(); // Outputs 4 <br /><br />
            cout &lt;&lt; cars.empty(); // Outputs 0 (not empty)
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Loop Through a Vector</h3>
        <p className=" leading-relaxed mb-4">
          You can loop through a vector using a regular <code>for</code> loop or a cleaner
          range-based <code>for-each</code> loop (introduced in C++11):
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            vector&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br /><br />
            for (int i = 0; i &lt; cars.size(); i++) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; cars[i] &lt;&lt; "\\n"; <br />
            {"}"} <br /><br />
          // Range-based for loop <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          Vectors are among the most commonly used containers in the STL due to their flexibility and speed
          when working with dynamic data.
        </p>
      </>
    ),
  },

  "cpp_list.asp": {
    title: "C++ List",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ List
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>list</strong> is similar to a vector in that it can store multiple elements of the same type
          and dynamically grow in size. However, two major differences exist: you can add/remove elements from both
          the beginning and the end, and a list does not support random access by index.
        </p>

        <h3 className="text-xl font-medium  mb-3">Including the List Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;list&gt; <br />
            #include &lt;iostream&gt; <br />
            using namespace std;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Create a List</h3>
        <p className=" leading-relaxed mb-2">
          To create a list, use the <code>list</code> keyword and specify the type of elements inside angle brackets.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            list&lt;string&gt; cars; <br />
            <br />
          // Or create and initialize at the same time <br />
            list&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Access First and Last Elements</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.front()</code> to access the first element and <code>.back()</code> to access the last element.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // Outputs first element <br />
            cout &lt;&lt; cars.back() &lt;&lt; "\\n";  // Outputs last element
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Change First and Last Elements</h3>
        <p className=" leading-relaxed mb-2">
          You can modify the first and last elements using <code>.front()</code> and <code>.back()</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.front() = "Opel"; <br />
            cars.back() = "Toyota"; <br />
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // Outputs "Opel" <br />
            cout &lt;&lt; cars.back() &lt;&lt; "\\n";  // Outputs "Toyota"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.push_front()</code> to add at the beginning and <code>.push_back()</code> to add at the end.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.push_front("Tesla"); <br />
            cars.push_back("VW");
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.pop_front()</code> to remove the first element and <code>.pop_back()</code> to remove the last element.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.pop_front(); <br />
            cars.pop_back();
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> List Size</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.size()</code> to find out the number of elements in the list.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.size() &lt;&lt; "\\n"; // Outputs number of elements
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if List is Empty</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.empty()</code> which returns <code>1</code> if empty, <code>0</code> otherwise.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; (cars.empty() ? "List is empty" : "List is not empty") &lt;&lt; "\\n";
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Loop Through a List</h3>
        <p className=" leading-relaxed mb-2">
          The easiest way to iterate through a list is using a for-each loop. Traditional for loops with indices do not work.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>
      </>
    ),
  },

  "cpp_stack.asp": {
    title: "C++ Stack",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Stack
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>stack</strong> stores multiple elements in a specific order called <strong>LIFO</strong> (Last In, First Out).
          To visualize LIFO, think of a pile of pancakes — you add and remove pancakes from the top. The last pancake added
          is always the first to be removed. In programming, stacks work the same way.
        </p>

        <p className=" leading-relaxed mb-4">
          Unlike vectors, elements in a stack are not accessed by index numbers. You can only access the top element.
        </p>

        <h3 className="text-xl font-medium  mb-3">Including the Stack Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;stack&gt; <br />
            #include &lt;iostream&gt; <br />
            using namespace std;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Create a Stack</h3>
        <p className=" leading-relaxed mb-2">
          Use the <code>stack</code> keyword and specify the type of elements inside angle brackets.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            stack&lt;string&gt; cars; <br />
            <br />
          // Note: You cannot initialize a stack at declaration like vectors. You must use .push() to add elements.
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements (.push)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.push()</code> to add elements to the top of the stack.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.push("Volvo"); <br />
            cars.push("BMW"); <br />
            cars.push("Ford"); <br />
            cars.push("Mazda"); <br />
            <br />
          // Stack now looks like: <br />
          // Mazda (top) <br />
          // Ford <br />
          // BMW <br />
          // Volvo
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Access Top Element (.top)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.top()</code> to view the element at the top of the stack.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.top() &lt;&lt; "\\n"; // Outputs "Mazda"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Change Top Element</h3>
        <p className=" leading-relaxed mb-2">
          You can also change the value of the top element using <code>.top()</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.top() = "Tesla"; <br />
            cout &lt;&lt; cars.top() &lt;&lt; "\\n"; // Now outputs "Tesla"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements (.pop)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.pop()</code> to remove the top element (last added element) from the stack.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.pop(); <br />
            cout &lt;&lt; cars.top() &lt;&lt; "\\n"; // Now top element is "Ford"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Stack Size (.size)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.size()</code> to get the number of elements in the stack.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.size() &lt;&lt; "\\n"; // Outputs the number of elements
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if Stack is Empty (.empty)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.empty()</code> to check if the stack has any elements. Returns 1 if empty, 0 otherwise.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; (cars.empty() ? "Stack is empty" : "Stack is not empty") &lt;&lt; "\\n";
          </p>
        </div>
      </>
    ),
  },
  "cpp_queue.asp": {
    title: "C++ Queue",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Queue
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>queue</strong> stores multiple elements in a specific order called <strong>FIFO</strong> (First In, First Out).
          To visualize FIFO, think of people standing in line at a supermarket. The first person to join the queue is also the first to pay
          and leave. In programming, queues work the same way.
        </p>

        <p className=" leading-relaxed mb-4">
          Unlike vectors, elements in a queue are not accessed by index numbers. Elements are added at the back and removed from the front.
          You can only access elements at the <code>front</code> or <code>back</code>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Including the Queue Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;queue&gt; <br />
            #include &lt;iostream&gt; <br />
            using namespace std;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Create a Queue</h3>
        <p className=" leading-relaxed mb-2">
          Use the <code>queue</code> keyword and specify the type of elements inside angle brackets.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            queue&lt;string&gt; cars; <br />
            <br />
          // Note: You cannot initialize a queue at declaration like vectors. You must use .push() to add elements.
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements (.push)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.push()</code> to add elements to the back of the queue.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.push("Volvo"); <br />
            cars.push("BMW"); <br />
            cars.push("Ford"); <br />
            cars.push("Mazda"); <br />
            <br />
          // Queue now looks like: <br />
          // Front → Volvo → BMW → Ford → Mazda ← Back
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Access Front and Back Elements (.front, .back)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.front()</code> to access the first element and <code>.back()</code> to access the last element.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // Outputs "Volvo" <br />
            cout &lt;&lt; cars.back() &lt;&lt; "\\n";  // Outputs "Mazda"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Change Front and Back Elements</h3>
        <p className=" leading-relaxed mb-2">
          You can modify the front or back element using <code>.front()</code> and <code>.back()</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.front() = "Tesla"; <br />
            cars.back() = "VW"; <br />
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // Now outputs "Tesla" <br />
            cout &lt;&lt; cars.back() &lt;&lt; "\\n";  // Now outputs "VW"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements (.pop)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.pop()</code> to remove the front element (the oldest element in the queue).
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.pop(); <br />
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // Now front element is "BMW"
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Queue Size (.size)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.size()</code> to get the number of elements in the queue.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.size() &lt;&lt; "\\n"; // Outputs the number of elements
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if Queue is Empty (.empty)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.empty()</code> to check if the queue has any elements. Returns 1 if empty, 0 otherwise.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; (cars.empty() ? "Queue is empty" : "Queue is not empty") &lt;&lt; "\\n";
          </p>
        </div>
      </>
    ),
  },

  "cpp_dequeue.asp": {
    title: "C++ Dequeue",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Deque
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>deque</strong> (double-ended queue) is similar to a queue, but it is more flexible. Elements can be added or removed
          from both the front and the back. You can also access elements using index numbers, unlike queues.
        </p>

        <h3 className="text-xl font-medium  mb-3">Including the Deque Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            #include &lt;deque&gt; <br />
            #include &lt;iostream&gt; <br />
            using namespace std;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Create a Deque</h3>
        <p className=" leading-relaxed mb-2">
          Use the <code>deque</code> keyword and specify the type of elements inside angle brackets.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            deque&lt;string&gt; cars; <br />
            <br />
          // You can also initialize at declaration: <br />
            deque&lt;string&gt; cars = {"{"}"Volvo", "BMW", "Ford", "Mazda"{"}"}; <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Access Deque Elements</h3>
        <p className=" leading-relaxed mb-2">
          Access elements using square brackets <code>[]</code>, <code>.at()</code>, <code>.front()</code>, and <code>.back()</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars[0] &lt;&lt; "\\n";     // First element <br />
            cout &lt;&lt; cars[1] &lt;&lt; "\\n";     // Second element <br />
            cout &lt;&lt; cars.front() &lt;&lt; "\\n"; // First element <br />
            cout &lt;&lt; cars.back() &lt;&lt; "\\n";  // Last element <br />
            cout &lt;&lt; cars.at(1) &lt;&lt; "\\n";   // Second element using .at() <br />
            cout &lt;&lt; cars.at(2) &lt;&lt; "\\n";   // Third element using .at()
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Change Deque Elements</h3>
        <p className=" leading-relaxed mb-2">
          Change elements using index <code>[]</code> or the safer <code>.at()</code> function.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars[0] = "Opel"; <br />
            cout &lt;&lt; cars[0] &lt;&lt; "\\n"; <br />
            <br />
            cars.at(0) = "Opel"; <br />
            cout &lt;&lt; cars.at(0) &lt;&lt; "\\n";
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements (.push_front, .push_back)</h3>
        <p className=" leading-relaxed mb-2">
          Add elements to the front or back of the deque.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.push_front("Tesla"); // Add to the front <br />
            cars.push_back("VW");     // Add to the back
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements (.pop_front, .pop_back)</h3>
        <p className=" leading-relaxed mb-2">
          Remove elements from the front or back of the deque.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.pop_front(); // Remove the first element <br />
            cars.pop_back();  // Remove the last element
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Deque Size (.size)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.size()</code> to get the number of elements in the deque.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.size() &lt;&lt; "\\n";
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if Deque is Empty (.empty)</h3>
        <p className=" leading-relaxed mb-2">
          Use <code>.empty()</code> to check if the deque is empty. Returns 1 if empty, 0 otherwise.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; (cars.empty() ? "Deque is empty" : "Deque is not empty") &lt;&lt; "\\n";
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Loop Through a Deque</h3>
        <p className=" leading-relaxed mb-2">
          You can loop through deque elements using a traditional for loop or a for-each loop.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
          // Traditional for loop <br />
            for (int i = 0; i &lt; cars.size(); i++) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; cars[i] &lt;&lt; "\\n"; <br />
            {"}"} <br /><br />
          // For-each loop <br />
            for (string car : cars) {"{"} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; "\\n"; <br />
            {"}"}
          </p>
        </div>
      </>
    ),
  },

  "cpp_sets.asp": {
    title: "C++ Set",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Set
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>set</strong> stores **unique** elements. Key properties of sets:
        </p>
        <ul className="list-disc pl-6  leading-relaxed mb-4">
          <li>Elements are automatically **sorted** in ascending order.</li>
          <li>Elements are **unique**; duplicates are ignored.</li>
          <li>Elements can be added or removed, but existing elements cannot be changed.</li>
          <li>Elements cannot be accessed by index numbers (no random access).</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Including the Set Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;set&gt;</span> <br />
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span> <br />
            <span className="text-red-600 dark:text-red-400">using namespace std;</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Create a Set</h3>
        <p className=" leading-relaxed mb-2">
          Use the <span className="font-mono">set</span> keyword and specify the type inside angle brackets.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">set</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars; <span className="text-gray-500 dark:text-gray-400">// Empty set</span><br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Create and initialize at the same time </span><br />
            <span className="text-red-600 dark:text-red-400">set</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'}; <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">string</span> car : cars) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Automatic Sorting</h3>
        <p className=" leading-relaxed mb-2">
          Elements in a set are automatically sorted in ascending order:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">set</span>&lt;<span className="text-red-600 dark:text-red-400">int</span>&gt; numbers = {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">7</span>, <span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">2</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">9</span>{'}'}; <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : numbers) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'} <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Output: 1, 2, 3, 5, 7, 9</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Descending Order</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">greater&lt;type&gt;</span> to sort elements in descending order.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">set</span>&lt;<span className="text-red-600 dark:text-red-400">int</span>, <span className="text-red-600 dark:text-red-400">greater</span>&lt;<span className="text-red-600 dark:text-red-400">int</span>&gt;&gt; numbers = {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">7</span>, <span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">2</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">9</span>{'}'}; <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : numbers) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'} <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Output: 9, 7, 5, 3, 2, 1</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Unique Elements</h3>
        <p className=" leading-relaxed mb-2">
          Duplicate values are ignored automatically.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">set</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'}; <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">string</span> car : cars) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'} <br />
            <span className="text-gray-500 dark:text-gray-400">// Output is sorted and unique: BMW, Ford, Mazda, Volvo</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements (.insert)</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.insert()</span> to add elements.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.<span className="text-red-600 dark:text-red-400">insert</span>(<span className="text-purple-600 dark:text-purple-400">"Tesla"</span>); <br />
            cars.<span className="text-red-600 dark:text-red-400">insert</span>(<span className="text-purple-600 dark:text-purple-400">"VW"</span>); <br />
            cars.<span className="text-red-600 dark:text-red-400">insert</span>(<span className="text-purple-600 dark:text-purple-400">"Toyota"</span>); <br />
            cars.<span className="text-red-600 dark:text-red-400">insert</span>(<span className="text-purple-600 dark:text-purple-400">"Audi"</span>);
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements (.erase, .clear)</h3>
        <p className=" leading-relaxed mb-2">
          Remove specific elements using <span className="font-mono">.erase()</span> or all elements with <span className="font-mono">.clear()</span>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cars.<span className="text-red-600 dark:text-red-400">erase</span>(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);  <span className="text-gray-500 dark:text-gray-400 ">// Remove specific element </span><br />
            cars.<span className="text-red-600 dark:text-red-400">erase</span>(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);  <br />
            <br />
            cars.<span className="text-red-600 dark:text-red-400">clear</span>();  <span className="text-gray-500 dark:text-gray-400 ">// Remove all elements</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Set Size (.size)</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.size()</span> to get the number of elements in the set.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; cars.<span className="text-red-600 dark:text-red-400">size</span>() &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;  <span className="text-gray-500 dark:text-gray-400 ">// Outputs the number of elements</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if Set is Empty (.empty)</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.empty()</span> to check if a set is empty. Returns 1 if empty, 0 otherwise.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; (cars.<span className="text-red-600 dark:text-red-400">empty</span>() ? <span className="text-purple-600 dark:text-purple-400">"Set is empty"</span> : <span className="text-purple-600 dark:text-purple-400">"Set is not empty"</span>) &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Loop Through a Set</h3>
        <p className=" leading-relaxed mb-2">
          Loop through set elements using a for-each loop.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">string</span> car : cars) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; car &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },
  "cpp_maps.asp": {
    title: "C++ Map",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Map
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>map</strong> stores elements in "key/value" pairs. Key properties of maps:
        </p>
        <ul className="list-disc pl-6  leading-relaxed mb-4">
          <li>Elements are accessible by **keys** (not by index), and each key is unique.</li>
          <li>Elements are automatically **sorted** in ascending order by keys.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Including the Map Header</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;map&gt;</span> <br />
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;iostream&gt;</span> <br />
            <span className="text-red-600 dark:text-red-400">using namespace std;</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Create a Map</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">map&lt;key type, valuetype&gt;</span> to declare a map.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">map</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>, <span className="text-red-600 dark:text-red-400">int</span>&gt; people; <span className="text-gray-500 dark:text-gray-400 ">// Empty map</span><br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Initialize at the same time </span><br />
            <span className="text-red-600 dark:text-red-400">map</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>, <span className="text-red-600 dark:text-red-400">int</span>&gt; people = {'{'}
            {'{'}<span className="text-purple-600 dark:text-purple-400">"John"</span>, <span className="text-blue-600 dark:text-blue-400">32</span>{'}'},
            {'{'}<span className="text-purple-600 dark:text-purple-400">"Adele"</span>, <span className="text-blue-600 dark:text-blue-400">45</span>{'}'},
            {'{'}<span className="text-purple-600 dark:text-purple-400">"Bo"</span>, <span className="text-blue-600 dark:text-blue-400">29</span>{'}'}
            {'}'};
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Access Map Elements</h3>
        <p className=" leading-relaxed mb-2">
          Access elements using keys with square brackets <span className="font-mono">[]</span> or the <span className="font-mono">.at()</span> function.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"John is: "</span> &lt;&lt; people[<span className="text-purple-600 dark:text-purple-400">"John"</span>] &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"Adele is: "</span> &lt;&lt; people.<span className="text-red-600 dark:text-red-400">at</span>(<span className="text-purple-600 dark:text-purple-400">"Adele"</span>) &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            <br />
            <span className="text-gray-500 dark:text-gray-4">// .at() throws an exception if the key does not exist </span><br />
            <span className="text-gray-500 dark:text-gray-4">// cout &lt;&lt; people.at("Jenny");</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Change Values</h3>
        <p className=" leading-relaxed mb-2">
          Update values using keys with <span className="font-mono">[]</span> or <span className="font-mono">.at()</span>:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            people[<span className="text-purple-600 dark:text-purple-400">"John"</span>] = <span className="text-blue-600 dark:text-blue-400">50</span>; <span className="text-gray-500 dark:text-gray-400 ">// Using square brackets</span><br />
            people.<span className="text-red-600 dark:text-red-400">at</span>(<span className="text-purple-600 dark:text-purple-400">"John"</span>) = <span className="text-blue-600 dark:text-blue-400">50</span>; <span className="text-gray-500 dark:text-gray-400">// Using .at()</span><br />
            cout &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"John is: "</span> &lt;&lt; people[<span className="text-purple-600 dark:text-purple-400">"John"</span>] &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Add Elements</h3>
        <p className=" leading-relaxed mb-2">
          Add elements using <span className="font-mono">[]</span> or <span className="font-mono">.insert()</span>:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            people[<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>] = <span className="text-blue-600 dark:text-blue-400">22</span>; <br />
            people[<span className="text-purple-600 dark:text-purple-400">"Liam"</span>] = <span className="text-blue-600 dark:text-blue-400">24</span>; <br />
            <br />
            people.<span className="text-red-600 dark:text-red-400">insert</span>({'{'}<span className="text-purple-600 dark:text-purple-400">"Kasha"</span>, <span className="text-blue-600 dark:text-blue-400">20</span>{'}'}); <br />
            people.<span className="text-red-600 dark:text-red-400">insert</span>({'{'}<span className="text-purple-600 dark:text-purple-400">"Anja"</span>, <span className="text-blue-600 dark:text-blue-400">30</span>{'}'});
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Unique Keys</h3>
        <p className=" leading-relaxed mb-2">
          Keys must be unique. If a key already exists, <span className="font-mono">.insert()</span> will ignore it.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            people.<span className="text-red-600 dark:text-red-400">insert</span>({'{'}<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>, <span className="text-blue-600 dark:text-blue-400">22</span>{'}'}); <br />
            people.<span className="text-red-600 dark:text-red-400">insert</span>({'{'}<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>, <span className="text-blue-600 dark:text-blue-400">30</span>{'}'}); <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Only the first "Jenny" is stored</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Remove Elements</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.erase(key)</span> to remove a specific element, or <span className="font-mono">.clear()</span> to remove all elements.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            people.<span className="text-red-600 dark:text-red-400">erase</span>(<span className="text-purple-600 dark:text-purple-400">"John"</span>); <br />
            people.<span className="text-red-600 dark:text-red-400">clear</span>();
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Size of a Map</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.size()</span> to get the number of elements:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; people.<span className="text-red-600 dark:text-red-400">size</span>() &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Check if Map is Empty</h3>
        <p className=" leading-relaxed mb-2">
          Use <span className="font-mono">.empty()</span> to check if the map is empty. Use <span className="font-mono">.count(key)</span> to check if a key exists.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            cout &lt;&lt; people.<span className="text-red-600 dark:text-red-400">empty</span>() &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            cout &lt;&lt; people.<span className="text-red-600 dark:text-red-400">count</span>(<span className="text-purple-600 dark:text-purple-400">"John"</span>) &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <span className="text-gray-500 dark:text-gray-400 "> // 1 if exists, 0 otherwise</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3"> Loop Through a Map</h3>
        <p className=" leading-relaxed mb-2">
          Loop through map using <span className="font-mono">for (auto element : map)</span>. Access keys with <span className="font-mono">.first</span> and values with <span className="font-mono">.second</span>.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">auto</span> person : people) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; person.<span className="text-red-600 dark:text-red-400">first</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" is: "</span> &lt;&lt; person.<span className="text-red-600 dark:text-red-400">second</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'} <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// For descending order by key </span><br />
            <span className="text-red-600 dark:text-red-400">map</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>, <span className="text-red-600 dark:text-red-400">int</span>, <span className="text-red-600 dark:text-red-400">greater</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt;&gt; people_desc = {'{'}
            {'{'}<span className="text-purple-600 dark:text-purple-400">"John"</span>,<span className="text-blue-600 dark:text-blue-400">32</span>{'}'},
            {'{'}<span className="text-purple-600 dark:text-purple-400">"Adele"</span>,<span className="text-blue-600 dark:text-blue-400">45</span>{'}'},
            {'{'}<span className="text-purple-600 dark:text-purple-400">"Bo"</span>,<span className="text-blue-600 dark:text-blue-400">29</span>{'}'}
            {'}'}; <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">auto</span> person : people_desc) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; person.<span className="text-red-600 dark:text-red-400">first</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" is: "</span> &lt;&lt; person.<span className="text-red-600 dark:text-red-400">second</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },


  "cpp_iterators.asp": {
    title: "C++ Iterator",

    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          C++ Iterators
        </h2>

        <p className=" leading-relaxed mb-4">
          **Iterators** are special objects used to **access and iterate** through elements of data structures (vectors, sets, lists, etc.) by "**pointing**" to them. "Iterating" is the technical term for looping.
        </p>

        <h3 className="text-xl font-medium  mb-3">Basic Iterator Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">vector</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};<br />
            <span className="text-red-600 dark:text-red-400">vector</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt;::<span className="text-red-600 dark:text-red-400">iterator</span> it;<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (it = cars.<span className="text-red-600 dark:text-red-400">begin</span>(); it != cars.<span className="text-red-600 dark:text-red-400">end</span>(); ++it) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example Explained</h3>
        <ul className="list-disc pl-6  leading-relaxed mb-4">
          <li>The iterator's type (<span className="font-mono">vector&lt;string&gt;::iterator</span>) must match the container's type.</li>
          <li>The increment operator (<span className="font-mono">++it</span>) moves the iterator to the next element.</li>
          <li>The **dereference operator** (<span className="font-mono">*it</span>) accesses the actual element value the iterator points to.</li>
        </ul>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          begin() and end()
        </h2>

        <p className=" leading-relaxed mb-4">
          These functions belong to the **data structures**, not the iterator itself, and define the bounds for iteration.
          <ul className="list-disc pl-6  leading-relaxed mt-2">
            <li>
              <span className="font-mono">begin()</span>: Returns an iterator pointing to the **first element**.
            </li>
            <li>
              <span className="font-mono">end()</span>: Returns an iterator pointing to **one position after the last element** (the sentinel).
            </li>
          </ul>
        </p>

        <h3 className="text-xl font-medium  mb-3">Offset Examples</h3>
        <p className=" leading-relaxed mb-2">
          For random-access containers like <span className="font-mono">vector</span>, you can use arithmetic operations:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">vector</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};<br />
            <span className="text-red-600 dark:text-red-400">auto</span> it; <span className="text-gray-500 dark:text-gray-400 ">// Using auto (C++11+)</span><br />
            <br />
            it = cars.<span className="text-red-600 dark:text-red-400">begin</span>() + <span className="text-blue-600 dark:text-blue-400">1</span>; <span className="text-gray-500 dark:text-gray-400 ">// Points to the second element ("BMW")</span><br />
            it = cars.<span className="text-red-600 dark:text-red-400">end</span>() - <span className="text-blue-600 dark:text-blue-400">1</span>; <span className="text-gray-500 dark:text-gray-400 ">// Points to the last element ("Mazda")</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Modifying Elements</h3>
        <p className=" leading-relaxed mb-4">
          Iterators behave like **pointers**, allowing you to directly access and **modify** the underlying element's value:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">auto</span> it = cars.<span className="text-red-600 dark:text-red-400">begin</span>();<br />
            *it = <span className="text-purple-600 dark:text-purple-400">"Tesla"</span>; <span className="text-gray-500 dark:text-gray-400">// "Volvo" is now "Tesla" in the original vector</span>
          </p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          auto Keyword and Reverse Iteration
        </h2>

        <h3 className="text-xl font-medium  mb-3">The auto Keyword</h3>
        <p className=" leading-relaxed mb-4">
          The <span className="font-mono">auto</span> keyword (C++11+) tells the compiler to automatically determine the iterator's type, making declarations shorter and cleaner:
          <span className="font-mono block mt-2 p-2 bg-white border border-gray-300 rounded">
            <span className="text-red-600 dark:text-red-400">auto</span> it = cars.<span className="text-red-600 dark:text-red-400">begin</span>(); <span className="text-gray-500 dark:text-gray-400 ">// Simplified syntax</span>
          </span>
        </p>

        <h3 className="text-xl font-medium  mb-3">Iterate in Reverse</h3>
        <p className=" leading-relaxed mb-4">
          Use <span className="font-mono">begin()</span> (reverse beginning) and <span className="font-mono">rend()</span> (reverse end) to loop backward through a container:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">auto</span> it = cars.<span className="text-red-600 dark:text-red-400">begin</span>(); it != cars.<span className="text-red-600 dark:text-red-400">rend</span>(); ++it) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'} <span className="text-gray-500 dark:text-gray-400 ">// Outputs: Mazda, Ford, BMW, Volvo</span>
          </p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          For-Each Loop vs. Iterators
        </h2>
        <p className=" leading-relaxed mb-4">
          When **just reading** elements, the **for-each loop** (<span className="font-mono">for (string car : cars)</span>) is simpler and cleaner. You must use **Iterators** when you need to:
          <ul className="list-disc pl-6  leading-relaxed mt-2">
            <li>**Modify** the element value.</li>
            <li>**Add or remove** elements during iteration.</li>
            <li>Iterate in a **specific way** (e.g., reverse, or skip elements).</li>
          </ul>
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Removing an Element During Iteration</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">vector</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>&gt; cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">auto</span> it = cars.<span className="text-red-600 dark:text-red-400">begin</span>(); it != cars.<span className="text-red-600 dark:text-red-400">end</span>(); ) {'{'} <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (*it == <span className="text-purple-600 dark:text-purple-400">"BMW"</span>) {'{'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;it = cars.<span className="text-red-600 dark:text-red-400">erase</span>(it); <span className="text-gray-500 dark:text-gray-400">// erase() returns iterator to next element</span><br />
            &nbsp;&nbsp;{'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;++it; <span className="text-gray-500 dark:text-gray-400 ">// Only advance if no element was erased</span><br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'}
          </p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Code Reusability Across Containers
        </h2>
        <p className=" leading-relaxed mb-4">
          A major advantage is that the core iterator loop syntax works for most standard containers (vector, list, deque, set, map).
        </p>

        <h3 className="text-xl font-medium  mb-3">Map Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">map</span>&lt;<span className="text-red-600 dark:text-red-400">string</span>, <span className="text-red-600 dark:text-red-400">int</span>&gt; people = {'{'} {'{'}<span className="text-purple-600 dark:text-purple-400">"John"</span>, <span className="text-blue-600 dark:text-blue-400">32</span>{'}'}, {'{'}<span className="text-purple-600 dark:text-purple-400">"Adele"</span>, <span className="text-blue-600 dark:text-blue-400">45</span>{'}'} {'}'};<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">auto</span> it = people.<span className="text-red-600 dark:text-red-400">begin</span>(); it != people.<span className="text-red-600 dark:text-red-400">end</span>(); ++it) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; it-&gt;<span className="text-red-600 dark:text-red-400">first</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">" is: "</span> &lt;&lt; it-&gt;<span className="text-red-600 dark:text-red-400">second</span> &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <br />
            {'}'}
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          **Note:** Containers like **stacks** and **queues** do not support direct iterators because their design restricts access to only the top or ends.
        </p>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Using Iterators with Algorithms
        </h2>
        <p className=" leading-relaxed mb-4">
          Iterators are fundamentally used with the functions in the **<span className="font-mono">&lt;algorithm&gt;</span>** library, such as <span className="font-mono">sort()</span> and <span className="font-mono">find()</span>, as they define the range of elements to operate on.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Sorting a Vector Numerically</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-blue-600 dark:text-blue-400">#include</span> <span className="text-green-600 dark:text-green-400">&lt;algorithm&gt;</span><br />
            <span className="text-red-600 dark:text-red-400">vector</span>&lt;<span className="text-red-600 dark:text-red-400">int</span>&gt; numbers = {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">7</span>, <span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">9</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'};<br />
            <br />
            <span className="text-gray-500 dark:text-gray-400 ">// Sort elements from begin() up to end()</span><br />
            <span className="text-red-600 dark:text-red-400">sort</span>(numbers.<span className="text-red-600 dark:text-red-400">begin</span>(), numbers.<span className="text-red-600 dark:text-red-400">end</span>());<br />
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : numbers) {'{'} <br />
            &nbsp;&nbsp;cout &lt;&lt; num &lt;&lt; <span className="text-purple-600 dark:text-purple-400">"\\n"</span>; <span className="text-gray-500 dark:text-gray-400 ">// Output: 1, 2, 3, 5, 7, 9</span><br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },


};


