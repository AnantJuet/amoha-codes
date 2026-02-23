import React from "react";

// Interfaces are placed here for the tutorial structure
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

// Main structure of the sidebar navigation for Java
export const tutorialData: SidebarItem[] = [
  { label: "JAVA HOME", href: "java_home.asp" },
  { label: "JAVA Intro", href: "java_intro.asp" },
  { label: "JAVA Get Started", href: "java_get_started.asp" },
  { label: "JAVA Syntax", href: "java_syntax.asp" },
  { label: "JAVA Statements", href: "java_statements.asp" },
  { label: "JAVA Comments", href: "java_comments.asp" },
  {
    label: "JAVA Output",
    href: "java_output.asp",
    isHeader: true,
    children: [
      { label: "Print Text", href: "java_output.asp" },
      { label: "Print Numbers", href: "java_output_numbers.asp" },
      { label: "Print Variables", href: "java_print_variables.asp" },
    ]
  },
  {
    label: "JAVA Variables",
    href: "java_variables.asp",
    isHeader: true,
    children: [
      { label: "Declare Variables", href: "java_variables.asp" },
      { label: "Multiple Variables", href: "java_variables_multiple.asp" },
      { label: "Identifiers", href: "java_variables_identifiers.asp" },
      { label: "Constants (final)", href: "java_variables_constants.asp" },
    ]
  },
  {
    label: "JAVA If...Else",
    href: "java_if_else.asp",
    isHeader: true,
    children: [
      { label: "If Statement", href: "java_if_else.asp" },
      { label: "Else Statement", href: "java_else.asp" },
      { label: "Else If Statement", href: "java_else_if.asp" },
      { label: "Short Hand If...Else", href: "java_shorthand_if_else.asp" },
      { label: "Nested If", href: "java_nested_if.asp" },
      { label: "Logical Operators", href: "java_logical_operators.asp" },
    ]
  },
  { label: "JAVA Switch", href: "java_switch.asp" },
  {
    label: "JAVA Loops",
    href: "java_while_loop.asp",
    isHeader: true,
    children: [
      { label: "While Loop", href: "java_while_loop.asp" },
      { label: "Do/While Loop", href: "java_do_while_loop.asp" },
      { label: "For Loop", href: "java_for_loop.asp" },
      { label: "Nested Loops", href: "java_nested_loops.asp" },
      { label: "For-Each Loop", href: "java_for_each_loop.asp" },
      { label: "Break and Continue", href: "java_break_continue.asp" },
    ]
  },
  {
    label: "JAVA Arrays",
    href: "java_arrays.asp",
    isHeader: true,
    children: [
      { label: "Arrays", href: "java_arrays.asp" },
      { label: "Loop Through Array", href: "java_arrays_loop.asp" },
      { label: "Multi-Dimensional Array", href: "java_multi_dimensional_arrays.asp" },
    ]
  },
  {
    label: "JAVA Methods",
    href: "java_methods.asp",
    isHeader: true,
    children: [
      { label: "Create/Call Methods", href: "java_methods.asp" },
      { label: "Parameters", href: "java_method_parameters.asp" },
      { label: "Return Values", href: "java_return.asp" },
      { label: "Method Overloading", href: "java_method_overloading.asp" },
      { label: "Scope", href: "java_scope.asp" },
      { label: "Recursion", href: "java_recursion.asp" },
    ]
  },
  {
  
  label: "JAVA Classes",
  href: "java_oops.asp",
  isHeader: true,
  children: [
    { label: "OOP", href: "java_oops.asp" },
    { label: "Classes/Objects", href: "java_classes_objects.asp" },
    { label: "Class Attribute", href: "java_class_attributes.asp" },
      { label: "Class Method", href: "java_class_methods.asp" },
      { label: "Constructors", href: "java_constructors.asp" },
      { label: "This Keyword", href: "java_this.asp" },
      { label: "Modifiers", href: "java_modifiers.asp" },
      { label: "Encapsulation", href: "java_encapsulation.asp" },
      { label: "This Keyword", href: "java_recursion.asp" },
      { label: "Packages/API", href: "java_packages.asp" },
      { label: "Inheritance", href: "java_inheritance.asp" },
      { label: "Polymorphism", href: "java_polymorphism.asp" },
      { label: "Super Keyword", href: "java_super.asp" },
      { label: "Inner Classes", href: "java_inner_classes.asp" },
      { label: "Abstraction", href: "java_abstraction.asp" },
      { label: "Interface", href: "java_interface.asp" },
      { label: "User Input", href: "java_user_input.asp" },
      { label: "Date", href: "java_date_time.asp" },
    ]
  },
  {
  
  label: "JAVA Data Structures",
  href: "java_data_structures.asp",
  isHeader: true,
  children: [
    { label: " Data Structures", href: "java_data_structures.asp" },
    { label: "Collections", href: "java_collections.asp" },
    { label: "List", href: "java_list.asp" },
      { label: "ArrayList", href: "java_array_list.asp" },
      { label: "LinkedList", href: "java_linkedlist.asp" },
      { label: "List Sorting", href: "java_list_sorting.asp" },
      { label: "Set", href: "java_set.asp" },
      { label: "HashSet", href: "java_hashset.asp" },
      { label: "TreeSet", href: "java_tree_set.asp" },
      { label: "LinkedHashSet", href: "java_linkedhashset.asp" },
      { label: "Map", href: "java_map.asp" },
      { label: "HashMap", href: "java_hashmap.asp" },
      { label: "TreeMap", href: "java_tree_map.asp" },
      
 
    ]
  },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "java_home.asp": {
    title: "Java Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Tutorial
        </h2>
        <p className=" leading-relaxed mb-4 ">
          <strong>Java</strong> is a popular programming language.
        </p>
        <p className=" leading-relaxed mb-4">
          Java is used to develop mobile apps, web apps, desktop apps, games and much more.
        </p>

        <h3 className="text-xl font-medium  mb-3">Examples in Each Chapter</h3>
        <p className=" leading-relaxed mb-4">
          Our "Try it Yourself" editor makes it easy to learn Java. You can edit Java code and view the result in your browser.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World</p>
        </div>
      </>
    ),
  },
  "java_intro.asp": {
    title: "Java Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Java?
        </h2>
        <p className=" leading-relaxed mb-4">
          Java is a popular and powerful programming language, created in 1995.
        </p>
        <p className=" leading-relaxed mb-4">
          It is owned by Oracle, and more than <strong>3 billion</strong> devices run Java.
        </p>
        <h3 className="text-xl font-medium  mb-3">It is used for:</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-8">
          <li>Mobile applications (specially Android apps)</li>
          <li>Desktop applications</li>
          <li>Web applications</li>
          <li>Web servers and application servers</li>
          <li>Games</li>
          <li>Database connection</li>
          <li>And much, much more!</li>
        </ul>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Why Use Java
        </h2>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-8">
          <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.).</li>
          <li>It is one of the most popular programming languages in the world.</li>
          <li>It has a large demand in the current job market.</li>
          <li>It is easy to learn and simple to use.</li>
          <li>It is open-source and free.</li>
          <li>It is secure, fast and powerful.</li>
          <li>It has huge community support (tens of millions of developers).</li>
          <li>Java is an <strong>object oriented language</strong> which gives a clear structure to programs and allows code to be reused, lowering development costs.</li>
          <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Java Example</h3>
        <p className=" leading-relaxed mb-4">
          Java is often used in everyday programming tasks, like saying hello to a user:
        </p>
        <div className="bg-gray-100 dark:bg-[#0E1525] p-4 rounded-lg shadow-sm mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-[#111827] p-3 border border-gray-300 dark:border-gray-700 rounded-lg whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">String</span> name = <span className="text-purple-600 dark:text-purple-400">"John"</span>;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello "</span> + name);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello John</p>
        </div>
      </>
    ),
  },
  "java_get_started.asp": {
    title: "Java Getting Started",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Get Started With Java
        </h2>

        <p className="leading-relaxed mb-4">
          At W3Schools, you can try Java without installing anything. Our Online Java Editor runs directly in your browser, and shows both the code and the result:
        </p>

        <h3 className="text-xl font-medium  mb-3">Code:</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-100">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World</p>
        </div>
        <p className=" leading-relaxed mb-4">
          This editor will be used in the entire tutorial to demonstrate the different aspects of Java.
        </p>

        <h3 className="text-xl font-medium  mb-3">Java Install</h3>
        <p className=" leading-relaxed mb-4">
          However, if you want to run Java on your own computer, follow the instructions below. Some PCs might have Java already installed.
        </p>

        <h4 className="text-lg font-medium  mb-2">Check Java Version</h4>
        <p className=" leading-relaxed mb-4">
          To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):
        </p>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          C:\Users\Your Name&gt;java -version
        </p>
        <p className=" leading-relaxed mb-4">
          If Java is installed, you will see something like this (depending on version):
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            java version "22.0.0" 2024-08-21 LTS
            <br />
            Java(TM) SE Runtime Environment 22.9 (build 22.0.0+13-LTS)
            <br />
            Java HotSpot(TM) 64-Bit Server VM 22.9 (build 22.0.0+13-LTS, mixed mode)
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          If you do not have Java installed on your computer, you can download it at <a href="http://www.oracle.com/" className="text-blue-600 dark:text-blue-400 underline">oracle.com</a>.
        </p>
        <p className=" leading-relaxed mb-4">
          Note: In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.
        </p>

        <h3 className="text-xl font-medium  mb-3">Java Quickstart</h3>
        <p className=" leading-relaxed mb-4">
          In Java, every application begins with a class name, and that class must match the filename.
          Let's create our first Java file, called <code>Main.java</code>, which can be done in any text editor (like Notepad).
          The file should contain a "Hello World" message, which is written with the following code:
        </p>

        <h4 className="text-lg font-medium  mb-2">Main.java</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on <strong>how</strong> to run the code above.
        </p>

        <h4 className="text-lg font-medium  mb-2">Compile and Run</h4>
        <p className=" leading-relaxed mb-4">
          Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":
        </p>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          C:\Users\Your Name&gt;javac Main.java
        </p>
        <p className=" leading-relaxed mb-4">
          This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:
        </p>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          C:\Users\Your Name&gt;java Main
        </p>
        <p className=" leading-relaxed mb-4 font-semibold">
          The output should read: Hello World
        </p>
      </>
    ),
  },
  "java_syntax.asp": {
    title: "Java Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Syntax
        </h2>

        <p className=" leading-relaxed mb-4">
          In the previous chapter, we created a Java file called <code>Main.java</code>, and we used the following code to print "Hello World" to the screen:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example explained</h3>
        <p className=" leading-relaxed mb-4">
          Every line of code that runs in Java must be inside a <strong>class</strong>. The class name should always start with an uppercase first letter. In our example, we named the class <code>Main</code>.
        </p>
        <p className=" leading-relaxed mb-4">
          Note: Java is <strong>case-sensitive</strong>. <code>MyClass</code> and <code>myclass</code> would be treated as two completely different names.
        </p>
        <p className=" leading-relaxed mb-4">
          The name of the Java file <strong>must match</strong> the class name. So if your class is called <code>Main</code>, the file must be saved as <code>Main.java</code>. This is because Java uses the class name to find and run your code. If the names don't match, Java will give an error and the program will not run.
        </p>
        <p className=" leading-relaxed mb-4">
          When saving the file, save it using the class name and add <code>.java</code> to the end of the filename.
        </p>

        <h3 className="text-xl font-medium  mb-3">The main Method</h3>
        <p className=" leading-relaxed mb-4">
          The <strong><code>main()</code> method</strong> is required in every Java program. It is where the program starts running:
        </p>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          public static void main(String[] args)
        </p>
        <p className=" leading-relaxed mb-4">
          Any code placed inside the <code>main()</code> method will be executed.
        </p>
        <p className=" leading-relaxed mb-4">
          For now, you don't need to understand the keywords <code>public</code>, <code>static</code>, and <code>void</code>. Just remember: <strong><code>main()</code> is the starting point of every Java program.</strong>
        </p>

        <h3 className="text-xl font-medium  mb-3">System.out.println()</h3>
        <p className=" leading-relaxed mb-4">
          Inside the <code>main()</code> method, we can use the <strong><code>println()</code> method</strong> to print a line of text to the screen:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
            <br />
            {'}'}
          </p>
        </div>
      </>
    ),
  },
  "java_statements.asp": {
    title: "Java Statements",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Statements
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>computer program</strong> is a list of "instructions" to be "executed" by a computer. In a programming language, these programming instructions are called <strong>statements</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          The following statement "instructs" the compiler to print the text "Java is fun!" to the screen:
        </p>
        <h3 className="text-xl font-medium  mb-3">Example: Print Statement</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Java is fun!"</span>);
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Semicolons (;)</h3>
        <p className=" leading-relaxed mb-4">
          It is important that you end the statement with a <strong>semicolon (;)</strong>.
          If you forget the semicolon, an error will occur and the program will not run:
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Java is fun!"</span>)
            <br />
            <span className="text-red-500 dark:text-red-400">error: ';' expected</span>
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          Tip: You can think of a statement like a <strong>sentence</strong> in English. Just as sentences end with a period (.), Java statements end with a semicolon (;).
        </p>

        <h3 className="text-xl font-medium  mb-3">Many Statements</h3>
        <p className=" leading-relaxed mb-4">
          Most Java programs contain many statements. The statements are executed, one by one, in the same order as they are written:
        </p>

        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Have a good day!"</span>);
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Learning Java is fun!"</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:
            <br />
            Hello World!
            <br />
            Have a good day!
            <br />
            Learning Java is fun!
          </p>
        </div>
      </>
    ),
  },
  "java_comments.asp": {
    title: "Java Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Comments
        </h2>
        <p className=" leading-relaxed mb-4">
          Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.
        </p>

        <h3 className="text-xl font-medium  mb-3">Single-line Comments</h3>
        <p className=" leading-relaxed mb-4">
          Single-line comments start with two forward slashes (<strong>//</strong>).
          Any text between <code>//</code> and the end of the line is ignored by Java (will not be executed).
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Comment Before Code</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// This is a comment</span>
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>);
          </p>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: Comment After Code</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World"</span>); <span className="text-gray-500 dark:text-gray-400">// This is a comment</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Multi-line Comments</h3>
        <p className=" leading-relaxed mb-4">
          Multi-line comments start with <strong>/*</strong> and end with <strong>*/</strong>. Everything between will be ignored by the compiler.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">/* The code below will print "Hello World!"<br />
              to the screen, and it is amazing */</span><br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
          </p>
        </div>
      </>
    ),
  },
  "java_output.asp": {
    title: "Java Output / Print",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Print Text
        </h2>

        <p className=" leading-relaxed mb-4">
          You learned from the previous chapter that you can use the <strong><code>println()</code> method</strong> to output values or print text in Java:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: println()</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
          </p>
        </div>

        <p className=" leading-relaxed mb-4">
          You can add as many <code>println()</code> methods as you want. Note that it will add a <strong>new line</strong> for each method:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello World!"</span>);
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"I am learning Java."</span>);
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"It is awesome!"</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:
            <br />
            Hello World!
            <br />
            I am learning Java.
            <br />
            It is awesome!
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Double Quotes</h3>
        <p className=" leading-relaxed mb-4">
          Text must be wrapped inside <strong>double quotations marks ("")</strong>.
          If you forget the double quotes, an error occurs:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"This sentence will work!"</span>);
            <br />
            System.out.println(This sentence will produce an error);
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">The print() Method</h3>
        <p className=" leading-relaxed mb-4">
          There is also a <strong><code>print()</code> method</strong>, which is similar to <code>println()</code>.
          The only difference is that it **does not insert a new line** at the end of the output:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.print(<span className="text-purple-600 dark:text-purple-400">"Hello World! "</span>);
            <br />
            System.out.print(<span className="text-purple-600 dark:text-purple-400">"I will print on the same line."</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello World! I will print on the same line.</p>
        </div>
      </>
    ),
  },
  "java_output_numbers.asp": {
    title: "Java Output Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Print Numbers
        </h2>

        <p className=" leading-relaxed mb-4">
          You can also use the <code>println()</code> method to print numbers.
          However, <strong>unlike text, we don't put numbers inside double quotes</strong>:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Printing Integers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-blue-600 dark:text-blue-400">3</span>);
            <br />
            System.out.println(<span className="text-blue-600 dark:text-blue-400">358</span>);
            <br />
            System.out.println(<span className="text-blue-600 dark:text-blue-400">50000</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:
            <br />
            3
            <br />
            358
            <br />
            50000
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Mathematical Calculations</h3>
        <p className=" leading-relaxed mb-4">
          You can also perform mathematical calculations inside the <code>println()</code> method:
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Addition</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-blue-600 dark:text-blue-400">3</span> + <span className="text-blue-600 dark:text-blue-400">3</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 6</p>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: Multiplication</h4>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            System.out.println(<span className="text-blue-600 dark:text-blue-400">2</span> * <span className="text-blue-600 dark:text-blue-400">5</span>);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 10</p>
        </div>
      </>
    ),
  },
  "java_print_variables.asp": {
    title: "Java Print Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Display Variables
        </h2>
        <p className=" leading-relaxed mb-4">
          The <code>println()</code> method is often used to display variables.
        </p>

        <h3 className="text-xl font-medium  mb-3">Combining Text and Variables</h3>
        <p className=" leading-relaxed mb-4">
          To combine both text and a variable, use the <strong><code>+</code> character</strong>:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span> name = <span className="text-purple-600 dark:text-purple-400">"John"</span>;
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Hello "</span> + name);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: Hello John</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Adding Variables Together</h3>
        <p className=" leading-relaxed mb-4">
          You can also use the <code>+</code> character to add a variable to another variable:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span> firstName = <span className="text-purple-600 dark:text-purple-400">"John "</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">String</span> lastName = <span className="text-purple-600 dark:text-purple-400">"Doe"</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">String</span> fullName = firstName + lastName;
            <br />
            System.out.println(fullName);
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: John Doe</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">The `+` Symbol in Java</h3>
        <p className=" leading-relaxed mb-4">
          In Java, the <code>+</code> symbol has two meanings:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>For text (strings), it joins them together (called <strong>concatenation</strong>).</li>
          <li>For numbers, it adds values together.</li>
        </ul>

        <p className=" leading-relaxed mb-4">
          For numeric values, the <code>+</code> character works as a mathematical <strong>operator</strong> (notice that we use <code>int</code> (integer) variables here):
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = <span className="text-blue-600 dark:text-blue-400">5</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = <span className="text-blue-600 dark:text-blue-400">6</span>;
            <br />
            System.out.println(x + y); <span className="text-gray-500 dark:text-gray-400">// Print the value of x + y</span>
          </p>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Result: 11</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Mixing Text and Numbers (Precedence)</h3>
        <p className=" leading-relaxed mb-4">
          Be careful when combining text and numbers in the same line of code. Without parentheses, Java will treat the numbers as text after the first string:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = <span className="text-blue-600 dark:text-blue-400">5</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = <span className="text-blue-600 dark:text-blue-400">6</span>;
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"The sum is "</span> + x + y);   <span className="text-gray-500 dark:text-gray-400">// Prints: The sum is 56</span>
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"The sum is "</span> + (x + y)); <span className="text-gray-500 dark:text-gray-400">// Prints: The sum is 11</span>
          </p>
        </div>
      </>
    ),
  },
  "java_variables.asp": {
    title: "Java Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Variables
        </h2>

        <p className=" leading-relaxed mb-4">
          Variables are <strong>containers for storing data values</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          In Java, there are different <strong>types</strong> of variables, for example:
        </p>

        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li><strong>String</strong> - stores text, such as "Hello". String values are surrounded by double quotes.</li>
          <li><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123.</li>
          <li><strong>float</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99.</li>
          <li><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes.</li>
          <li><strong>boolean</strong> - stores values with two states: true or false.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Declaring (Creating) Variables</h3>
        <p className=" leading-relaxed mb-4">
          To create a variable in Java, you need to:
        </p>
        <ul className="list-disc ml-6 mb-4  leading-relaxed">
          <li>Choose a <strong>type</strong> (like `int` or `String`)</li>
          <li>Give the variable a <strong>name</strong> (like `x`, `age`, or `name`)</li>
          <li>Optionally assign it a <strong>value</strong> using `=`</li>
        </ul>

        <h4 className="text-lg font-medium  mb-2">Syntax</h4>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">type</span> variableName = <span className="text-blue-600 dark:text-blue-400">value</span>;
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: String</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span> name = <span className="text-purple-600 dark:text-purple-400">"John"</span>;
            <br />
            System.out.println(name); <span className="text-gray-500 dark:text-gray-400">// Outputs John</span>
          </p>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: int</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;
            <br />
            System.out.println(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
          </p>
        </div>

        <h4 className="text-lg font-medium  mb-2">Declaring Without Assigning Value</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum;
            <br />
            myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;
            <br />
            System.out.println(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 15</span>
          </p>
        </div>

        <h4 className="text-lg font-medium  mb-2">Changing Variable Values</h4>
        <p className=" leading-relaxed mb-4">
          Assigning a new value to an existing variable will <strong>overwrite</strong> the previous value:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;
            <br />
            myNum = <span className="text-blue-600 dark:text-blue-400">20</span>;  <span className="text-gray-500 dark:text-gray-400">// myNum is now 20</span>
            <br />
            System.out.println(myNum); <span className="text-gray-500 dark:text-gray-400">// Outputs 20</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Other Types Demonstration</h3>
        <p className=" leading-relaxed mb-4">
          A demonstration of how to declare variables of other types:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myNum = <span className="text-blue-600 dark:text-blue-400">5</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">float</span> myFloatNum = <span className="text-blue-600 dark:text-blue-400">5.99f</span>; <span className="text-gray-500 dark:text-gray-400">// Note the 'f' suffix for floats</span>
            <br />
            <span className="text-red-600 dark:text-red-400">char</span> myLetter = <span className="text-purple-600 dark:text-purple-400">'D'</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">boolean</span> myBool = <span className="text-blue-600 dark:text-blue-400">true</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">String</span> myText = <span className="text-purple-600 dark:text-purple-400">"Hello"</span>;
          </p>
        </div>
      </>
    ),
  },
  "java_variables_multiple.asp": {
    title: "Java Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Declare Many Variables
        </h2>

        <h3 className="text-xl font-medium  mb-3">Declare Multiple Variables in One Line</h3>
        <p className=" leading-relaxed mb-4">
          To declare more than one variable of the <strong>same type</strong>, you can use a <strong>comma-separated list</strong>:
        </p>

        <h4 className="text-lg font-medium  mb-2">Example (Shortened Code)</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Instead of: int x = 5; int y = 6; int z = 50;</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> x = <span className="text-blue-600 dark:text-blue-400">5</span>, y = <span className="text-blue-600 dark:text-blue-400">6</span>, z = <span className="text-blue-600 dark:text-blue-400">50</span>;
            <br />
            System.out.println(x + y + z); <span className="text-gray-500 dark:text-gray-400">// Outputs 61</span>
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          Note: Declaring many variables in one line is shorter, but writing one variable per line can sometimes make the code easier to read.
        </p>

        <h3 className="text-xl font-medium  mb-3">Assign One Value to Multiple Variables</h3>
        <p className=" leading-relaxed mb-4">
          You can also assign the <strong>same value</strong> to multiple variables in one line:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 ">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x, y, z;
            <br />
            x = y = z = <span className="text-blue-600 dark:text-blue-400">50</span>;
            <br />
            System.out.println(x + y + z); <span className="text-gray-500 dark:text-gray-400">// Outputs 150</span>
          </p>
        </div>
      </>
    ),
  },
  "java_variables_identifiers.asp": {
    title: "Java Identifiers",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Identifiers
        </h2>

        <p className=" leading-relaxed mb-4">
          All Java <strong>variables</strong> must be <strong>identified</strong> with <strong>unique names</strong>.
          These unique names are called <strong>identifiers</strong>.
        </p>

        <p className=" leading-relaxed mb-4">
          Identifiers can be short names (like `x` and `y`) or more descriptive names (`age`, `sum`, `totalVolume`).
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Descriptive vs. Short Names</h3>
        <p className=" leading-relaxed mb-4">
          Note: It is recommended to use descriptive names in order to create understandable and maintainable code:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Good</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> minutesPerHour = <span className="text-blue-600 dark:text-blue-400">60</span>;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// OK, but not so easy to understand what m actually is</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> m = <span className="text-blue-600 dark:text-blue-400">60</span>;
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Rules for Naming Variables</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>Names can contain letters, digits, underscores (`_`), and dollar signs (`$`).</li>
          <li>Names must begin with a letter.</li>
          <li>Names should start with a lowercase letter, and cannot contain whitespace. (This is a convention, not a hard rule.)</li>
          <li>Names can also begin with `$` and `_`.</li>
          <li>Names are <strong>case-sensitive</strong> (`myVar` and `myvar` are different variables).</li>
          <li><strong>Reserved words</strong> (like Java keywords, such as `int` or `boolean`) cannot be used as names.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Invalid Identifiers</h3>
        <p className=" leading-relaxed mb-4">
          Here are some examples of <strong>invalid</strong> identifiers that would cause errors:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Cannot start with a digit (Invalid)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> <span className="text-red-500 dark:text-red-400">2ndNumber</span> = <span className="text-blue-600 dark:text-blue-400">5</span>;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Cannot contain spaces (Invalid)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> <span className="text-red-500 dark:text-red-400">my var</span> = <span className="text-blue-600 dark:text-blue-400">10</span>;
            <br />
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Cannot use reserved keywords (Invalid)</span>
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> <span className="text-red-500 dark:text-red-400">int</span> = <span className="text-blue-600 dark:text-blue-400">20</span>;
          </p>
        </div>
      </>
    ),
  },
  "java_variables_constants.asp": {
    title: "Java Constants (final)",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Constants (`final` keyword)
        </h2>

        <p className=" leading-relaxed mb-4">
          When you do not want a variable's value to change, use the <strong>`final` keyword</strong>.
          A variable declared with `final` becomes a <strong>constant</strong>, which means unchangeable and read-only:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Error with `final`</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">final int</span> myNum = <span className="text-blue-600 dark:text-blue-400">15</span>;
            <br />
            myNum = <span className="text-blue-600 dark:text-blue-400">20</span>;  <span className="text-gray-500 dark:text-gray-400">// Error: cannot assign a value to final variable 'myNum'</span>
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">When to Use `final`?</h3>
        <p className=" leading-relaxed mb-4">
          You should declare variables as `final` when their values should never change. For example, the number of minutes in an hour, or your birth year:
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Common Constants</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <p className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">final int</span> MINUTES_PER_HOUR = <span className="text-blue-600 dark:text-blue-400">60</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">final int</span> BIRTHYEAR = <span className="text-blue-600 dark:text-blue-400">1980</span>;
          </p>
        </div>
      </>
    ),
  },
  "java_if_else.asp": {
    title: "Java If...Else",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Conditions and If Statements
        </h2>
        <p className=" leading-relaxed mb-4">
          Conditions and <code>if</code> statements let you control the **flow of your program** - deciding which code runs, and which code is skipped.
          Think of it like real life: *If it rains, take an umbrella. Otherwise, do nothing.*
        </p>
        <p className=" leading-relaxed mb-4">
          Every <code>if</code> statement needs a condition that results in <strong>`true` or `false`</strong>.
          This means `if` statements work hand-in-hand with <strong>`boolean`</strong> values:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Using a Boolean Variable</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">boolean</span> isRaining = <span className="text-blue-600 dark:text-blue-400">true</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (isRaining) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Bring an umbrella!"</span>);
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Comparison Conditions</h3>
        <p className=" leading-relaxed mb-4">
          Most often, conditions are created using **comparison operators**:
        </p>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>Less than: <code>a &lt; b</code></li>
          <li>Less than or equal to: <code>a &lt;= b</code></li>
          <li>Greater than: <code>a &gt; b</code></li>
          <li>Greater than or equal to: <code>a &gt;= b</code></li>
          <li>Equal to: <code>a == b</code></li>
          <li>Not equal to: <code>a != b</code></li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">The if Statement</h3>
        <p className=" leading-relaxed mb-4">
          The <code>if</code> statement specifies a block of code to be executed if a condition is <strong>`true`</strong>.
        </p>
        <h4 className="text-lg font-medium  mb-2">Syntax</h4>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// block of code to be executed if the condition is true</span>
          <br />
          {'}'}
        </p>
        <p className=" leading-relaxed mb-4">
          Note that the `if` keyword is in lowercase letters. Uppercase letters (e.g., `If` or `IF`) will generate an error.
        </p>

        <h4 className="text-lg font-medium  mb-2">Example: Comparing Values</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">if</span> (20 &gt; 18) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"20 is greater than 18"</span>);
            <br />
            {'}'}
          </pre>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: Comparing Variables</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 18;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (x &gt; y) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"x is greater than y"</span>);
            <br />
            {'}'}
          </pre>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: Equality Check (`==`)</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (x == y) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"x is equal to y"</span>);
            <br />
            {'}'}
          </pre>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: Testing a Boolean Directly</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">boolean</span> isLightOn = <span className="text-blue-600 dark:text-blue-400">true</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (isLightOn) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"The light is on."</span>);
            <br />
            {'}'}
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Note: if (isLightOn) is the same as if (isLightOn == true)</span>
          </pre>
        </div>

        <h4 className="text-lg font-medium  mb-2">Example: False Condition</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">boolean</span> isLightOn = <span className="text-blue-600 dark:text-blue-400">false</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (isLightOn) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"The light is on."</span>); <span className="text-gray-500 dark:text-gray-400">// This will not be printed</span>
            <br />
            {'}'}
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"This line runs no matter what, because it is outside the if statement."</span>);
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">If Without Braces (Potential Problem)</h3>
        <p className=" leading-relaxed mb-4">
          If an <code>if</code> statement has only one line of code, you can omit the curly braces <code>{ }</code>. **However, this can lead to mistakes**, as only the immediate next line belongs to the `if`.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 18;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (x &gt; y)
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"x is greater than y"</span>); <span className="text-gray-500 dark:text-gray-400">// Belongs to if</span>
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"This line runs no matter what (not part of the if statement)"</span>);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Output:
            <br />
            x is greater than y
            <br />
            This line runs no matter what (not part of the if statement)
          </p>
        </div>

        <h4 className="text-lg font-medium  mb-2">The Safe Way (Always Use Braces)</h4>
        <p className=" leading-relaxed mb-4">
          To avoid mistakes, **always use curly braces** <code>{ }</code>. This makes it explicitly clear which lines belong to the `if` statement.
        </p>
      </>
    ),
  },
  "java_else.asp": {
    title: "Java If...Else",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The else Statement
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`else` statement</strong> lets you run a block of code when the condition in the `if` statement is <strong>`false`</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// block of code to be executed if the condition is true</span>
          <br />
          {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// block of code to be executed if the condition is false</span>
          <br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Umbrella Logic</h3>
        <p className=" leading-relaxed mb-4">
          *If it rains, bring an umbrella. <strong>Otherwise (else)</strong>, go outside without one:*
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">boolean</span> isRaining = <span className="text-blue-600 dark:text-blue-400">false</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (isRaining) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Bring an umbrella!"</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"No rain today, no need for an umbrella!"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "No rain today, no need for an umbrella!"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Another Example: Time of Day</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Good evening."</p>
        </div>
      </>
    ),
  },
  "java_else_if.asp": {
    title: "Java If...Else",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The else if Statement
        </h2>

        <p className=" leading-relaxed mb-4">
          Use the <strong>`else if` statement</strong> to specify a new condition if the first condition is <strong>`false`</strong>.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition1) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code if condition1 is true</span>
          <br />
          {'}'} <span className="text-red-600 dark:text-red-400">else if</span> (condition2) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code if condition1 is false AND condition2 is true</span>
          <br />
          {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code if both conditions are false</span>
          <br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Weather Decision</h3>
        <p className=" leading-relaxed mb-4">
          *If it rains, bring an umbrella. <strong>Else if</strong> it's sunny, wear sunglasses. Else, just go outside normally.*
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> weather = 2; <span className="text-gray-500 dark:text-gray-400">// 1 = raining, 2 = sunny, 3 = cloudy</span>
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (weather == 1) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Bring an umbrella."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else if</span> (weather == 2) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Wear sunglasses."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Just go outside normally."</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Wear sunglasses."</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Another Example: Time of Day</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 22;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 10) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good morning."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else if</span> (time &lt; 18) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Good evening."</p>
        </div>
      </>
    ),
  },
  "java_shorthand_if_else.asp": {
    title: "Java Short Hand If...Else",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Short Hand if...else (Ternary Operator)
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>ternary operator</strong> is a short-hand way to write a simple `if else` statement, using a single line of code. It consists of three operands:
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          variable = (<span className="text-red-600 dark:text-red-400">condition</span>) ? <span className="text-blue-600 dark:text-blue-400">expressionTrue</span> : <span className="text-blue-600 dark:text-blue-400">expressionFalse</span>;
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Replacing If/Else</h3>
        <p className=" leading-relaxed mb-2">
          Instead of writing a multi-line `if else` block:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (time &lt; 18) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good day."</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);
            <br />
            {'}'}
          </pre>
        </div>

        <p className=" leading-relaxed mb-2">
          You can simply write:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;
            <br />
            <span className="text-red-600 dark:text-red-400">String</span> result = (time &lt; 18) ? <span className="text-purple-600 dark:text-purple-400">"Good day."</span> : <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>;
            <br />
            System.out.println(result);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Good evening."</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Ternary in Print Statement</h3>
        <p className=" leading-relaxed mb-4">
          You can also use the ternary operator directly inside <code>System.out.println()</code>:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 20;
            <br />
            System.out.println((time &lt; 18) ? <span className="text-purple-600 dark:text-purple-400">"Good day."</span> : <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>);
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Nested Ternary (Optional)</h3>
        <p className=" leading-relaxed mb-4">
          You can nest ternary operators to handle more than two possible outcomes, but this can make your code harder to read:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> time = 22;
            <br />
            <span className="text-red-600 dark:text-red-400">String</span> message = (time &lt; 12) ? <span className="text-purple-600 dark:text-purple-400">"Good morning."</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : (time &lt; 18) ? <span className="text-purple-600 dark:text-purple-400">"Good afternoon."</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span className="text-purple-600 dark:text-purple-400">"Good evening."</span>;
            <br />
            System.out.println(message);
          </pre>
        </div>
      </>
    ),
  },
  "java_nested_if.asp": {
    title: "Java Nested If",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Nested If
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>nested if</strong> statement is an `if` statement placed inside another `if`.
          This lets you check for a second condition **only if** the first condition is already `true`.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">if</span> (condition1) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if condition1 is true</span>
          <br />
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (condition2) {'{'}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to run if both condition1 AND condition2 are true</span>
          <br />
          &nbsp;&nbsp;{'}'}
          <br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example</h3>
        <p className=" leading-relaxed mb-4">
          In this example, we first check if `x` is greater than 10. If it is, we then check if `y` is greater than 20:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> x = 15;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> y = 25;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (x &gt; 10) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"x is greater than 10"</span>);
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Nested if </span>
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (y &gt; 20) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"y is also greater than 20"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Result:
            <br />
            x is greater than 10
            <br />
            y is also greater than 20
          </p>
        </div>
      </>
    ),
  },
  "java_logical_operators.asp": {
    title: "Java Logical Operators in Conditions",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators in Conditions
        </h2>

        <p className=" leading-relaxed mb-4">
          You can combine or reverse conditions using **logical operators**. These work together with `if`, `else`, and `else if` to build more complex decisions.
        </p>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li><strong><code>&amp;&amp;</code> (AND)</strong> - all conditions must be true.</li>
          <li><strong><code>||</code> (OR)</strong> - at least one condition must be true.</li>
          <li><strong><code>!</code> (NOT)</strong> - reverses a condition (`true` becomes `false`, `false` becomes `true`).</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">AND (<code>&amp;&amp;</code>)</h3>
        <p className=" leading-relaxed mb-4">
          Use AND (<code>&amp;&amp;</code>) when <strong>both</strong> conditions must be true:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> a = 200;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> b = 33;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> c = 500;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (a &gt; b &amp;&amp; c &gt; a) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Both conditions are true"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Both conditions are true"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">OR (<code>||</code>)</h3>
        <p className=" leading-relaxed mb-4">
          Use OR (<code>||</code>) when <strong>at least one</strong> of the conditions can be true:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> a = 200;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> b = 33;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> c = 500;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (a &gt; b || a &gt; c) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"At least one condition is true"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "At least one condition is true"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">NOT (<code>!</code>)</h3>
        <p className=" leading-relaxed mb-4">
          Use NOT (<code>!</code>) to <strong>reverse</strong> a condition:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> a = 33;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> b = 200;
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (!(a &gt; b)) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"a is NOT greater than b"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "a is NOT greater than b"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Real-Life Example: Access Control</h3>
        <p className=" leading-relaxed mb-4">
          This example uses logical operators for system access control (must be logged in AND an admin OR have security level $\le 2$):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">boolean</span> isLoggedIn = <span className="text-blue-600 dark:text-blue-400">true</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">boolean</span> isAdmin = <span className="text-blue-600 dark:text-blue-400">false</span>;
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> securityLevel = 3; <span className="text-gray-500 dark:text-gray-400">// 1 = highest</span>
            <br />
            <span className="text-red-600 dark:text-red-400">if</span> (isLoggedIn &amp;&amp; (isAdmin || securityLevel &lt;= 2)) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Access granted"</span>);
            <br />
            {'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Access denied"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Access denied" (since securityLevel 3 is $&gt; 2$)</p>
        </div>
      </>
    ),
  },
  "java_switch.asp": {
    title: "Java Switch",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Switch Statements
        </h2>

        <p className=" leading-relaxed mb-4">
          Instead of writing **many** `if..else` statements, you can use the <strong>`switch` statement</strong>.
          It selects one of many code blocks to be executed based on a matching `case` value.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">switch</span>(expression) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> x:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
          <br />
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> y:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
          <br />
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block</span>
          <br />
          {'}'}
        </p>
        <p className=" leading-relaxed mb-4">
          The `switch` expression is evaluated once, and the result is compared with each `case` value. If a match is found, the associated block of code runs.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Weekday Name</h3>
        <p className=" leading-relaxed mb-4">
          This example uses the weekday number to calculate the weekday name:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> day = 4;
            <br />
            <span className="text-red-600 dark:text-red-400">switch</span> (day) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 1:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Monday"</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 4:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Thursday"</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 7:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Sunday"</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code...</span>
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Thursday" (day 4)</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">The `break` Keyword</h3>
        <p className=" leading-relaxed mb-4">
          When Java reaches a **`break`** keyword, it immediately **jumps out of the switch block**. This saves execution time by preventing the checking or running of all subsequent cases.
        </p>

        <h3 className="text-xl font-medium  mb-3">The `default` Keyword</h3>
        <p className=" leading-relaxed mb-4">
          The **`default`** keyword specifies code to run if **no `case` match** is found:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> day = 4;
            <br />
            <span className="text-red-600 dark:text-red-400">switch</span> (day) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 6:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Today is Saturday"</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">case</span> 7:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Today is Sunday"</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">default</span>:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Looking forward to the Weekend"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Looking forward to the Weekend"</p>
        </div>
      </>
    ),
  },
  "java_while_loop.asp": {
    title: "Java While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java While Loop
        </h2>

        <p className=" leading-relaxed mb-4">
          A **loop** executes a block of code as long as a specified condition is `true`. Loops save time, reduce errors, and make code more readable.
        </p>

        <p className=" leading-relaxed mb-4">
          The <strong>`while` loop</strong> repeats a block of code as long as its condition is **`true`**:
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">while</span> (condition) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span>
          <br />
          {'}'}
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Counting Up</h3>
        <p className=" leading-relaxed mb-4">
          This loop runs as long as `i` is less than 5:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;
            <br />
            <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            &nbsp;&nbsp;i++;
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 4.</p>
        </div>
        <p className=" leading-relaxed mb-4">
          **Note:** Don't forget to increase the variable used in the condition (`i++`), otherwise the loop will never end! The variable `i` is a common choice, standing for 'index' or 'iterator'.
        </p>

        <h3 className="text-xl font-medium  mb-3">Countdown Example</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> countdown = 3;
            <br />
            <span className="text-red-600 dark:text-red-400">while</span> (countdown &gt; 0) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(countdown);
            <br />
            &nbsp;&nbsp;countdown--;
            <br />
            {'}'}
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Happy New Year!!"</span>);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 3, 2, 1, followed by "Happy New Year!!"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Loop with False Condition from Start</h3>
        <p className=" leading-relaxed mb-4">
          If the condition is `false` from the beginning, the code inside the `while` loop will **never run**:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 10;
            <br />
            <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"This will never be printed"</span>);
            <br />
            &nbsp;&nbsp;i++;
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_do_while_loop.asp": {
    title: "Java Do/While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The Do/While Loop
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`do/while` loop</strong> executes the code block **once**, before checking if the condition is `true`. Then, it repeats the loop as long as the condition is `true`.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">do</span> {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span>
          <br />
          {'}'}<span className="text-red-600 dark:text-red-400">while</span> (condition); <span className="text-gray-500 dark:text-gray-400">// Semicolon is required!</span>
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Counting Up</h3>
        <p className=" leading-relaxed mb-4">
          The loop runs exactly as a `while` loop, but guarantees the code block is executed at least once:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;
            <br />
            <span className="text-red-600 dark:text-red-400">do</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            &nbsp;&nbsp;i++;
            <br />
            {'}'}<span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 4.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Condition is False from the Start</h3>
        <p className=" leading-relaxed mb-4">
          A `do/while` loop is different: it will always run the code block **at least once**, even if the condition is `false` from the start.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 10;
            <br />
            <span className="text-red-600 dark:text-red-400">do</span> {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"i is "</span> + i);
            <br />
            &nbsp;&nbsp;i++;
            <br />
            {'}'}<span className="text-red-600 dark:text-red-400">while</span> (i &lt; 5);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "i is 10" (it runs once, then the condition `i &lt; 5` fails).</p>
        </div>
      </>
    ),
  },
  "java_for_loop.asp": {
    title: "Java For Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java For Loop
        </h2>

        <p className=" leading-relaxed mb-4">
          Use the <strong>`for` loop</strong> when you know **exactly how many times** you want to loop through a block of code, instead of a `while` loop.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (statement 1; statement 2; statement 3) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span>
          <br />
          {'}'}
        </p>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>**Statement 1:** Initializer (executed **one time** before the loop starts).</li>
          <li>**Statement 2:** Condition (defines the condition for executing the code block).</li>
          <li>**Statement 3:** Afterthought (executed **every time** after the code block has run).</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Example: Print Numbers 0 to 4</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 5; i++) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 4.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Print Even Numbers 0 to 10</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt;= 10; i = i + 2) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 2, 4, 6, 8, 10.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Sum of Numbers</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> sum = 0;
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 5; i++) {'{'}
            <br />
            &nbsp;&nbsp;sum = sum + i;
            <br />
            {'}'}
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Sum is "</span> + sum);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "Sum is 15"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Countdown</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 5; i &gt; 0; i--) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 5, 4, 3, 2, 1.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">For Loop With False Condition</h3>
        <p className=" leading-relaxed mb-4">
          If the condition is `false` from the start, the code inside the loop will be skipped entirely:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 10; i &lt; 5; i++) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"This will never be printed"</span>);
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_nested_loops.asp": {
    title: "Java Nested Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Nested Loops
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>nested loop</strong> is a loop placed inside another loop.
          The "inner loop" will be executed completely for each single iteration of the "outer loop".
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Outer and Inner Loops</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-gray-500 dark:text-gray-400">// Outer loop</span>
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 2; i++) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Outer: "</span> + i); <span className="text-gray-500 dark:text-gray-400">// Executes 2 times</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Inner loop</span>
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> j = 1; j &lt;= 3; j++) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">" Inner: "</span> + j); <span className="text-gray-500 dark:text-gray-400">// Executes 6 times (2 * 3)</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:
            <br />
            Outer: 1, Inner: 1, Inner: 2, Inner: 3,
            <br />
            Outer: 2, Inner: 1, Inner: 2, Inner: 3
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Multiplication Table Example</h3>
        <p className=" leading-relaxed mb-4">
          This example uses nested loops to print a $3 \times 3$ multiplication table:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 3; i++) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> j = 1; j &lt;= 3; j++) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i * j + <span className="text-purple-600 dark:text-purple-400">" "</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;System.out.println(); <span className="text-gray-500 dark:text-gray-400">// New line after each row</span>
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs:
            <br />
            1 2 3
            <br />
            2 4 6
            <br />
            3 6 9
          </p>
        </div>
      </>
    ),
  },
  "java_for_each_loop.asp": {
    title: "Java For Each Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          The for-each Loop
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`for-each` loop</strong> is used **exclusively** to loop through elements in an **array** (or other data structures). It is generally simpler and more readable than a regular `for` loop.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">type</span> variableName : arrayName) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span>
          <br />
          {'}'}
        </p>
        <p className=" leading-relaxed mb-4">
          The colon (`:`) is read as **"in"**. The loop iterates over each element in the array, assigning it to `variableName`.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through String Array</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">String</span> car : cars) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(car);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs all four car names on separate lines.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Loop Through Integer Array</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[] numbers = {'{'}10, 20, 30, 40{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : numbers) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(num);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 10, 20, 30, 40 on separate lines.</p>
        </div>
      </>
    ),
  },
  "java_break_continue.asp": {
    title: "Java Break and Continue",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Break
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`break` statement</strong> is used to **jump out of a loop** (or a `switch` statement) completely.
          This example stops the loop when `i` is equal to 4:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 10; i++) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i == 4) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3. The loop stops before printing 4.</p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Continue
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`continue` statement</strong> breaks **one iteration** (round) of the loop if a specified condition occurs, and then moves on to the next iteration.
          This example skips the value of 4:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 10; i++) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i == 4) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span>;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 0, 1, 2, 3, 5, 6, 7, 8, 9. The value 4 is skipped.</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Summary</h3>
        <ul className="list-disc list-inside space-y-2  ml-4 mb-4">
          <li>**`break`** = stop the loop completely.</li>
          <li>**`continue`** = skip this round, but keep looping.</li>
        </ul>

        <h3 className="text-xl font-medium  mb-3">Break and Continue in While Loop</h3>
        <p className=" leading-relaxed mb-4">
          Both statements also work in `while` and `do/while` loops. Note the necessary incrementing of the loop variable when using `continue` in a `while` loop:
        </p>
        <h4 className="text-lg font-medium  mb-2">Continue Example in While Loop (Careful!)</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> i = 0;
            <br />
            <span className="text-red-600 dark:text-red-400">while</span> (i &lt; 10) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (i == 4) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;i++; <span className="text-gray-500 dark:text-gray-400">// Must increment i to avoid infinite loop!</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span>;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;System.out.println(i);
            <br />
            &nbsp;&nbsp;i++;
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Real-Life Example: Processing Numbers</h3>
        <p className=" leading-relaxed mb-4">
          Skip negative numbers, but stop completely if a zero is found:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[] numbers = {'{'}3, -1, 7, 0, 9{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> n : numbers) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (n &lt; 0) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">continue</span>; <span className="text-gray-500 dark:text-gray-400">// skip negative numbers</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (n == 0) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">break</span>; <span className="text-gray-500 dark:text-gray-400">// stop loop when zero is found</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            &nbsp;&nbsp;System.out.println(n);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 3, 7. Stops at 0.</p>
        </div>
      </>
    ),
  },
  "java_arrays.asp": {
    title: "Java Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Arrays
        </h2>

        <p className=" leading-relaxed mb-4">
          Arrays are used to store **multiple values of the same type** in a single variable, instead of declaring separate variables for each value.
        </p>

        <h3 className="text-xl font-medium  mb-3">Declaring an Array</h3>
        <p className=" leading-relaxed mb-4">
          To declare an array, define the variable type with **square brackets** (`[]`):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars;
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Inserting Values (Array Literal)</h3>
        <p className=" leading-relaxed mb-4">
          To insert values, you can use a comma-separated list inside **curly braces** (`{ }`):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">int</span>[] myNum = {'{'}<span className="text-blue-600 dark:text-blue-400">10</span>, <span className="text-blue-600 dark:text-blue-400">20</span>, <span className="text-blue-600 dark:text-blue-400">30</span>, <span className="text-blue-600 dark:text-blue-400">40</span>{'}'};
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Accessing Array Elements</h3>
        <p className=" leading-relaxed mb-4">
          Access an element by referring to the **index number**. Array indexes start at **0**:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            System.out.println(cars[0]);<span className="text-gray-500 dark:text-gray-400">// Outputs Volvo</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Change an Array Element</h3>
        <p className=" leading-relaxed mb-4">
          To change the value of a specific element, refer to the index number:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            cars[0] = <span className="text-purple-600 dark:text-purple-400">"Opel"</span>;
            <br />
            System.out.println(cars[0]);<span className="text-gray-500 dark:text-gray-400">// Now outputs Opel instead of Volvo</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Array Length</h3>
        <p className=" leading-relaxed mb-4">
          To find out how many elements an array has, use the **`.length` property**:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            System.out.println(cars.<span className="text-red-600 dark:text-red-400">length</span>);<span className="text-gray-500 dark:text-gray-400">// Outputs 4</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">The `new` Keyword</h3>
        <p className=" leading-relaxed mb-4">
          You can also create an array by specifying its fixed size with `new`, which creates an empty array that you fill later:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = <span className="text-red-600 dark:text-red-400">new String</span>[4]; <span className="text-gray-500 dark:text-gray-400">// size is 4, all elements are null</span>
            <br />
            <br />
            cars[0] = <span className="text-purple-600 dark:text-purple-400">"Volvo"</span>;
            <br />
            cars[1] = <span className="text-purple-600 dark:text-purple-400">"BMW"</span>;
            <br />
            <span className="text-gray-500 dark:text-gray-400">// ... fill remaining elements</span>
          </pre>
        </div>
      </>
    ),
  },
  "java_arrays_loop.asp": {
    title: "Java Arrays Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Through an Array
        </h2>

        <p className=" leading-relaxed mb-4">
          You can loop through the array elements with the standard **`for` loop**, using the `.length` property to control the iterations:
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Using Standard For Loop (Strings)</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; cars.length; i++) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(cars[i]);
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Calculate the Sum of Elements</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[] numbers = {'{'}1, 5, 10, 25{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">int</span> sum = 0;
            <br />
            <span className="text-gray-500 dark:text-gray-400">// Loop through the array and add each element to sum</span>
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; numbers.length; i++) {'{'}
            <br />
            &nbsp;&nbsp;sum += numbers[i];
            <br />
            {'}'}
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"The sum is: "</span> + sum);
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "The sum is: 41"</p>
        </div>

        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200">
          Loop Through an Array with For-Each
        </h2>

        <p className=" leading-relaxed mb-4">
          The <strong>`for-each` loop</strong> is a simpler way to iterate through **all elements** in an array without using an index counter.
        </p>

        <h3 className="text-xl font-medium  mb-3">Syntax</h3>
        <p className="font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded-md mb-4 text-sm text-black dark:text-gray-200">
          <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">type</span> variable : arrayname) {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code block to be executed</span>
          <br />
          {'}'}
        </p>
        <p className=" leading-relaxed mb-4">
          The colon (`:`) is read as "in". E.g., *"for each `String` **in** the `cars` array, print the value."*
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Using For-Each Loop</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] cars = {'{'}<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>, <span className="text-purple-600 dark:text-purple-400">"BMW"</span>, <span className="text-purple-600 dark:text-purple-400">"Ford"</span>, <span className="text-purple-600 dark:text-purple-400">"Mazda"</span>{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">String</span> car : cars) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(car);
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">For-Each vs. Standard For Loop</h3>
        <p className=" leading-relaxed mb-4">
          The `for-each` loop is easier to write and read because it doesn't need a counter. However, if you need **both the position (index) and the value**, a regular `for` loop is the correct choice:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">String</span>[] seats = {'{'}<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>, <span className="text-purple-600 dark:text-purple-400">"Liam"</span>, <span className="text-purple-600 dark:text-purple-400">"Angie"</span>, <span className="text-purple-600 dark:text-purple-400">"Bo"</span>{'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; seats.length; i++) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Seat number "</span> + i + <span className="text-purple-600 dark:text-purple-400">" is taken by "</span> + seats[i]);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs: Seat number 0 is taken by Jenny, etc.</p>
        </div>
      </>
    ),
  },
  "java_multi_dimensional_arrays.asp": {
    title: "Java Multi-Dimensional Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Multidimensional Arrays
        </h2>

        <p className=" leading-relaxed mb-4">
          A <strong>multidimensional array</strong> is an array that contains other arrays, typically used to store data in a table with rows and columns.
        </p>

        <h3 className="text-xl font-medium  mb-3">Creating a Two-Dimensional Array</h3>
        <p className=" leading-relaxed mb-4">
          To create a two-dimensional array, write each row inside its own curly braces:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>{'}'} {'}'};
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Accessing Elements</h3>
        <p className=" leading-relaxed mb-4">
          You need **two indexes** to access an element: the first for the **row** and the second for the **column**. (Remember, indexes start at 0.)
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>{'}'} {'}'};
            <br />
            System.out.println(myNumbers[1][2]); <span className="text-gray-500 dark:text-gray-400">// Outputs 8 (Second row, third column)</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Change Element Values</h3>
        <p className=" leading-relaxed mb-4">
          You can overwrite an existing element using the same two-index notation:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>{'}'} {'}'};
            <br />
            myNumbers[1][2] = <span className="text-blue-600 dark:text-blue-400">9</span>;
            <br />
            System.out.println(myNumbers[1][2]); <span className="text-gray-500 dark:text-gray-400">// Outputs 9 instead of 8</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Rows and Columns (Lengths)</h3>
        <p className=" leading-relaxed mb-4">
          Use `.length` to get the number of **rows** and `myNumbers[row].length` for the number of **columns** in a row. Rows can have different lengths:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'} {'}'};
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Rows: "</span> + myNumbers.length);             <span className="text-gray-500 dark:text-gray-400">// 2</span>
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Cols in row 0: "</span> + myNumbers[0].length); <span className="text-gray-500 dark:text-gray-400">// 3</span>
            <br />
            System.out.println(<span className="text-purple-600 dark:text-purple-400">"Cols in row 1: "</span> + myNumbers[1].length); <span className="text-gray-500 dark:text-gray-400">// 5</span>
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Loop Through a Multidimensional Array</h3>
        <p className=" leading-relaxed mb-4">
          You can use a **nested `for` loop** to access every element by its row and column index:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'} {'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> row = 0; row &lt; myNumbers.length; row++) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> col = 0; col &lt; myNumbers[row].length; col++) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myNumbers[row][col]);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
        </div>

        <p className=" leading-relaxed mb-4">
          Alternatively, you can use a **nested `for-each` loop**, which many find easier to read:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span>[][] myNumbers = {'{'} {'{'}<span className="text-blue-600 dark:text-blue-400">1</span>, <span className="text-blue-600 dark:text-blue-400">4</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'}, {'{'}<span className="text-blue-600 dark:text-blue-400">3</span>, <span className="text-blue-600 dark:text-blue-400">6</span>, <span className="text-blue-600 dark:text-blue-400">8</span>, <span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">2</span>{'}'} {'}'};
            <br />
            <span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span>[] row : myNumbers) {'{'} <span className="text-gray-500 dark:text-gray-400">// Loop over rows</span>
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> num : row) {'{'} <span className="text-gray-500 dark:text-gray-400">// Loop over numbers in the row</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(num);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_methods.asp": {
    title: "Java Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Methods
        </h2>

        <p className=" leading-relaxed mb-4">
          A **method** is a block of code which only runs when it is called. You can pass data, known as **parameters**, into a method. Methods are used to perform certain actions, and they are also known as **functions**.
        </p>
        <p className=" leading-relaxed mb-4">
          The main benefit of using methods is to **reuse code**: define the code once, and use it many times.
        </p>

        <h3 className="text-xl font-medium  mb-3">Create a Method</h3>
        <p className=" leading-relaxed mb-4">
          A method must be declared within a class, using its name followed by parentheses `()`.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example: Create a Method inside `Main`</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">static void</span> myMethod() {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// code to be executed</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          **Example Explained:**
          <br />
          - `myMethod()` is the name of the method.
          <br />
          - `static` means the method belongs to the `Main` class (and not an object of the class).
          <br />
          - `void` means the method does not have a return value.
        </p>

        <h3 className="text-xl font-medium  mb-3">Call a Method</h3>
        <p className=" leading-relaxed mb-4">
          To call a method, write its name followed by parentheses `()` and a semicolon `;`.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example: Calling `myMethod()`</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">static void</span> myMethod() {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"I just got executed!"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;myMethod();
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs "I just got executed!"</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Call a Method Multiple Times</h3>
        <p className=" leading-relaxed mb-4">
          You can call a method as many times as you need:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;myMethod();
            <br />
            &nbsp;&nbsp;myMethod();
            <br />
            &nbsp;&nbsp;myMethod();
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_method_parameters.asp": {
    title: "Java Method Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Parameters and Arguments
        </h2>

        <p className=" leading-relaxed mb-4">
          Information can be passed to methods as a **parameter**. Parameters act as variables inside the method.
        </p>
        <p className=" leading-relaxed mb-4">
          Parameters are specified after the method name, inside the parentheses, separated by commas.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Single Parameter</h3>
        <p className=" leading-relaxed mb-4">
          This method takes a `String` called `fname` as a parameter to print a full name:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static void</span> myMethod(<span className="text-red-600 dark:text-red-400">String</span> fname) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(fname + <span className="text-purple-600 dark:text-purple-400">" Refsnes"</span>);
            <br />
            {'}'}
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;myMethod(<span className="text-purple-600 dark:text-purple-400">"Liam"</span>); <span className="text-gray-500 dark:text-gray-400">// "Liam" is an argument</span>
            <br />
            &nbsp;&nbsp;myMethod(<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs: Liam Refsnes, Jenny Refsnes
          </p>
        </div>
        <p className=" leading-relaxed mb-4">
          When a **parameter** (`fname`) is passed to the method, it is called an **argument** (`"Liam"`).
        </p>

        <h3 className="text-xl font-medium  mb-3">Multiple Parameters</h3>
        <p className=" leading-relaxed mb-4">
          You can include multiple parameters, but the method call must have the same number of arguments in the same order and type.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example: String and int</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static void</span> myMethod(<span className="text-red-600 dark:text-red-400">String</span> fname, <span className="text-red-600 dark:text-red-400">int</span> age) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(fname + <span className="text-purple-600 dark:text-purple-400">" is "</span> + age);
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;myMethod(<span className="text-purple-600 dark:text-purple-400">"Liam"</span>, <span className="text-blue-600 dark:text-blue-400">5</span>);
            <br />
            &nbsp;&nbsp;myMethod(<span className="text-purple-600 dark:text-purple-400">"Jenny"</span>, <span className="text-blue-600 dark:text-blue-400">8</span>);
            <br />
            &nbsp;&nbsp;myMethod(<span className="text-purple-600 dark:text-purple-400">"Anja"</span>, <span className="text-blue-600 dark:text-blue-400">31</span>);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">
            Outputs: Liam is 5, Jenny is 8, Anja is 31
          </p>
        </div>

        <h3 className="text-xl font-medium  mb-3">A Method with If...Else</h3>
        <p className=" leading-relaxed mb-4">
          It is common to use `if...else` statements inside methods to perform conditional logic:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static void</span> checkAge(<span className="text-red-600 dark:text-red-400">int</span> age) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (age &lt; 18) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Access denied - You are not old enough!"</span>);
            <br />
            &nbsp;&nbsp;{'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Access granted - You are old enough!"</span>);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;checkAge(20); <span className="text-gray-500 dark:text-gray-400">// Outputs "Access granted - You are old enough!"</span>
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_return.asp": {
    title: "Java Return Values",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Return Values
        </h2>

        <p className=" leading-relaxed mb-4">
          In previous examples, we used the **`void` keyword**, which means the method does not return a value.
        </p>
        <p className=" leading-relaxed mb-4">
          If you want a method to return a value, replace `void` with a primitive data type (like `int`, `double`, or `String`) and use the **`return` keyword** inside the method.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Returning a Single Integer</h3>
        <p className=" leading-relaxed mb-4">
          This method returns 5 plus the value of `x`:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static int</span> myMethod(<span className="text-red-600 dark:text-red-400">int</span> x) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 5 + x;
            <br />
            {'}'}
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(myMethod(<span className="text-blue-600 dark:text-blue-400">3</span>));
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 8 (5 + 3)</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Returning Sum of Two Parameters</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static int</span> myMethod(<span className="text-red-600 dark:text-red-400">int</span> x, <span className="text-red-600 dark:text-red-400">int</span> y) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> x + y;
            <br />
            {'}'}
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(myMethod(<span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">3</span>));
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs 8 (5 + 3)</p>
        </div>

        <h3 className="text-xl font-medium  mb-3">Storing the Result in a Variable</h3>
        <p className=" leading-relaxed mb-4">
          It's often easier to read and maintain code by storing the method's result in a variable:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> z = myMethod(<span className="text-blue-600 dark:text-blue-400">5</span>, <span className="text-blue-600 dark:text-blue-400">3</span>);
            <br />
            &nbsp;&nbsp;System.out.println(z);
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Practical Example: Doubling Numbers in a Loop</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static int</span> doubleGame(<span className="text-red-600 dark:text-red-400">int</span> x) {'{'} <span className="text-gray-500 dark:text-gray-400">// Method that doubles the number</span>
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> x * 2;
            <br />
            {'}'}
            <br />
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i &lt;= 5; i++) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Double of "</span> + i + <span className="text-purple-600 dark:text-purple-400">" is "</span> + doubleGame(i));
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs: Double of 1 is 2, ..., Double of 5 is 10</p>
        </div>
      </>
    ),
  },
  "java_method_overloading.asp": {
    title: "Java Method Overloading",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Method Overloading
        </h2>

        <p className=" leading-relaxed mb-4">
          With **method overloading**, multiple methods can have the **same name** as long as they have **different parameters** (either in the number of parameters or the data type of parameters).
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Same Name, Different Parameters</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">int</span> myMethod(<span className="text-red-600 dark:text-red-400">int</span> x)
            <br />
            <span className="text-red-600 dark:text-red-400">float</span> myMethod(<span className="text-red-600 dark:text-red-400">float</span> x)
            <br />
            <span className="text-red-600 dark:text-red-400">double</span> myMethod(<span className="text-red-600 dark:text-red-400">double</span> x, <span className="text-red-600 dark:text-red-400">double</span> y)
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          This technique simplifies code by using one name (`plusMethod` below) for similar actions across different data types.
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Overloading the `plusMethod`</h3>
        <p className=" leading-relaxed mb-4">
          Instead of defining two methods with different names (`plusMethodInt`, `plusMethodDouble`), we overload one:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static int</span> plusMethod(<span className="text-red-600 dark:text-red-400">int</span> x, <span className="text-red-600 dark:text-red-400">int</span> y) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> x + y;
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">static double</span> plusMethod(<span className="text-red-600 dark:text-red-400">double</span> x, <span className="text-red-600 dark:text-red-400">double</span> y) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> x + y;
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> myNum1 = plusMethod(8, 5);
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">double</span> myNum2 = plusMethod(4.3, 6.26);
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"int: "</span> + myNum1);
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"double: "</span> + myNum2);
            <br />
            {'}'}
          </pre>
          <p className="mt-2 font-semibold text-black dark:text-gray-100">Outputs: int: 13, double: 10.56</p>
        </div>
      </>
    ),
  },
  "java_scope.asp": {
    title: "Java Scope",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Scope
        </h2>

        <p className=" leading-relaxed mb-4">
          In Java, **scope** is the region where a variable is accessible. A variable's scope is determined by where it is declared.
        </p>

        <h3 className="text-xl font-medium  mb-3">Method Scope</h3>
        <p className=" leading-relaxed mb-4">
          Variables declared directly inside a method are available anywhere in that method **after** they are declared.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Code here CANNOT use x</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> x = 100;
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Code here CAN use x</span>
            <br />
            &nbsp;&nbsp;System.out.println(x);
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Block Scope</h3>
        <p className=" leading-relaxed mb-4">
          A **block of code** refers to all the code between curly braces (`{ }`). Variables declared inside a block are only accessible **within that block**.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;{'{}'} <span className="text-gray-500 dark:text-gray-400">// This is a block</span>
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> x = 100;
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Code here CAN use x</span>
            <br />
            &nbsp;&nbsp;System.out.println(x);
            <br />
            &nbsp;&nbsp;{'}'} <span className="text-gray-500 dark:text-gray-400">// The block ends here, x is inaccessible outside</span>
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Loop Scope (A Special Case of Block Scope)</h3>
        <p className=" leading-relaxed mb-4">
          Variables declared inside a `for` loop (including the header, like `int i = 0`) only exist within the loop's block (`{ }`).
        </p>
        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 0; i &lt; 5; i++) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i); <span className="text-gray-500 dark:text-gray-400">// i is accessible here</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// i is NOT accessible here</span>
            <br />
            {'}'}
          </pre>
        </div>
        <p className=" leading-relaxed mb-4">
          Because loop variables are not available outside the loop, you can safely reuse the same name in different loops within the same method.
        </p>

        <h3 className="text-xl font-medium  mb-3">Class Scope (Fields)</h3>
        <p className=" leading-relaxed mb-4">
          Variables declared inside a class but outside any method (called **fields**) have **class scope** and can be accessed by all methods in the class.
        </p>
        <h4 className="text-lg font-medium  mb-2">Example</h4>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public class</span> Main {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> x = 5; <span className="text-gray-500 dark:text-gray-400">// Class variable (field)</span>
            <br />
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">Main</span> myObj = <span className="text-red-600 dark:text-red-400">new Main</span>();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x); <span className="text-gray-500 dark:text-gray-400">// Accessible via object</span>
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  "java_recursion.asp": {
    title: "Java Recursion",
    content: (
      <>
        <h2 className="text-2xl font-medium  mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Recursion
        </h2>

        <p className=" leading-relaxed mb-4">
          **Recursion** is the technique where a function (or method) calls **itself**. It simplifies complicated problems by breaking them down into smaller, identical sub-problems.
        </p>
        <p className=" leading-relaxed mb-4">
          Every recursive method must have a **halting condition**—a condition where the method stops calling itself—to prevent **infinite recursion**.
        </p>

        <h3 className="text-xl font-medium  mb-3">Recursion Example: Sum of Numbers</h3>
        <p className=" leading-relaxed mb-4">
          Use recursion to add all numbers from 1 to $k$:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static int</span> sum(<span className="text-red-600 dark:text-red-400">int</span> k) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (k &gt; 0) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> k + sum(k - 1);
            <br />
            &nbsp;&nbsp;{'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 0;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> result = sum(10);
            <br />
            &nbsp;&nbsp;System.out.println(result); <span className="text-gray-500 dark:text-gray-400">// Outputs 55</span>
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example Explained</h3>
        <p className=" leading-relaxed mb-4">
          For `sum(10)`, the program executes as: $10 + (9 + (8 + \dots + 1 + \<text>Sum()</text>(0)))$, stopping when $k=0$ (the halting condition).
        </p>

        <h3 className="text-xl font-medium  mb-3">Example: Sum of Range (Start to End)</h3>
        <p className=" leading-relaxed mb-4">
          This example adds numbers in a specified range (e.g., $5+6+7+8+9+10$):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">public static int</span> sum(<span className="text-red-600 dark:text-red-400">int</span> start, <span className="text-red-600 dark:text-red-400">int</span> end) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (end &gt; start) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> end + sum(start, end - 1);
            <br />
            &nbsp;&nbsp;{'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> end;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">int</span> result = sum(5, 10);
            <br />
            &nbsp;&nbsp;System.out.println(result); <span className="text-gray-500 dark:text-gray-400">// Outputs 45</span>
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Countdown with Recursion</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static void</span> countdown(<span className="text-red-600 dark:text-red-400">int</span> n) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (n &gt; 0) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;System.out.print(n + <span className="text-purple-600 dark:text-purple-400">" "</span>);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;countdown(n - 1);
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;countdown(5); <span className="text-gray-500 dark:text-gray-400">// Outputs: 5 4 3 2 1</span>
            <br />
            {'}'}
          </pre>
        </div>

        <h3 className="text-xl font-medium  mb-3">Example: Calculate Factorial</h3>
        <p className=" leading-relaxed mb-4">
          This recursive method calculates the factorial of $n$ (e.g., $5! = 5 \times 4 \times 3 \times 2 \times 1$):
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-gray-200">
            <span className="text-red-600 dark:text-red-400">static int</span> factorial(<span className="text-red-600 dark:text-red-400">int</span> n) {'{'}
            <br />
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (n &gt; 1) {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> n * factorial(n - 1);
            <br />
            &nbsp;&nbsp;{'}'} <span className="text-red-600 dark:text-red-400">else</span> {'{'}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">return</span> 1;
            <br />
            &nbsp;&nbsp;{'}'}
            <br />
            {'}'}
            <br />
            <span className="text-red-600 dark:text-red-400">public static void</span> main(<span className="text-red-600 dark:text-red-400">String</span>[] args) {'{'}
            <br />
            &nbsp;&nbsp;System.out.println(<span className="text-purple-600 dark:text-purple-400">"Factorial of 5 is "</span> + factorial(5)); <span className="text-gray-500 dark:text-gray-400">// Outputs 120</span>
            <br />
            {'}'}
          </pre>
        </div>
      </>
    ),
  },
  
  "java_oops.asp": {
    title: "Java OOP (Object-Oriented Programming)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java - What is OOP?
        </h2>
        <p className="leading-relaxed mb-4">
          OOP stands for Object-Oriented Programming.
        </p>
        <p className="leading-relaxed mb-4">
          Procedural programming focuses on writing procedures or methods that perform operations on the data, 
          while object-oriented programming focuses on creating **objects** that contain both data and methods.
        </p>

        <h3 className="text-xl font-semibold mb-3">Advantages of OOP</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>OOP is faster and easier to execute</li>
          <li>Provides a clear structure for programs</li>
          <li>Keeps Java code DRY ("Don't Repeat Yourself")</li>
          <li>Makes code easier to maintain, modify, and debug</li>
          <li>Enables creation of reusable applications with less code and shorter development time</li>
        </ul>
      </>
    ),
  },
  
  "java_classes_objects.asp": {
    title: "Java Classes and Objects",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Classes and Objects
        </h2>
        <p className="leading-relaxed mb-4">
          Java is an object-oriented programming language. Everything in Java is associated with{" "}
          <strong>classes and objects</strong>, along with their attributes and methods. For example,
          a car has <strong>attributes</strong> (weight, color) and <strong>methods</strong> (drive, brake).
        </p>

        <p className="leading-relaxed mb-4">
          A <strong>Class</strong> is like an object constructor or a “blueprint” for creating objects.
        </p>

        {/* Example: String */}
        <h3 className="text-lg font-semibold mb-2">Example: String</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">String</span> name ={" "}
              <span className="text-purple-600">"John"</span>;
              {"\n"}
              System.out.println(name);{" "}
              <span className="text-gray-500">// Outputs John</span>
            </code>
          </pre>
        </div>

        {/* Example: int */}
        <h3 className="text-lg font-semibold mb-2">Example: int</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">int</span> myNum ={" "}
              <span className="text-blue-600">15</span>;
              {"\n"}
              System.out.println(myNum);{" "}
              <span className="text-gray-500">// Outputs 15</span>
            </code>
          </pre>
        </div>

        {/* Create a Class */}
        <h3 className="text-xl font-semibold mb-3">Create a Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-gray-500">// Main.java</span>
              {"\n"}
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x ={" "}
              <span className="text-blue-600">5</span>;
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        {/* Create an Object */}
        <h3 className="text-xl font-semibold mb-3">Create an Object</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x ={" "}
              <span className="text-blue-600">5</span>;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj ={" "}
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },
  "java_class_attributes.asp": {
    title: "Java Class Attributes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Class Attributes
        </h2>

        <p className="leading-relaxed mb-4">
          In Java, <strong>attributes</strong> are variables that belong to a class.
          They are also called <strong>fields</strong>. You can create, access, and modify them
          using objects of that class.
        </p>

        {/* Creating a Class with Attributes */}
        <h3 className="text-lg font-semibold mb-2">Create a Class with Attributes</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x ={" "}
              <span className="text-blue-600">5</span>;
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> y ={" "}
              <span className="text-blue-600">3</span>;
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Accessing Attributes */}
        <h3 className="text-lg font-semibold mb-2">Accessing Attributes</h3>
        <p className="leading-relaxed mb-4">
          You can access class attributes by creating an object and using the dot syntax (<code>.</code>):
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x ={" "}
              <span className="text-blue-600">5</span>;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj ={" "}
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Modifying Attributes */}
        <h3 className="text-lg font-semibold mb-2">Modifying Attributes</h3>
        <p className="leading-relaxed mb-4">
          You can change the value of an attribute using the object:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj ={" "}
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj.x = <span className="text-blue-600">40</span>;
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Final Attributes */}
        <h3 className="text-lg font-semibold mb-2">Final Attributes</h3>
        <p className="leading-relaxed mb-4">
          If you want an attribute to remain constant, declare it <code>final</code>:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">final int</span> x ={" "}
              <span className="text-blue-600">10</span>;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj ={" "}
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;// myObj.x = 25; // Error: cannot assign a value to final variable
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Multiple Objects */}
        <h3 className="text-lg font-semibold mb-2">Multiple Objects</h3>
        <p className="leading-relaxed mb-4">
          Changing attributes in one object doesn't affect other objects:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x ={" "}
              <span className="text-blue-600">5</span>;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj1 ={" "} 
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj2 ={" "} 
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj2.x = <span className="text-blue-600">25</span>;
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj1.x); // 5
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj2.x); // 25
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Multiple Attributes */}
        <h3 className="text-lg font-semibold mb-2">Multiple Attributes</h3>
        <p className="leading-relaxed mb-4">
          A class can have multiple attributes:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> fname ={" "}
              <span className="text-purple-600">"John"</span>;
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> lname ={" "}
              <span className="text-purple-600">"Doe"</span>;
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> age ={" "}
              <span className="text-blue-600">24</span>;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj ={" "} 
              <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Name: " + myObj.fname + " " + myObj.lname);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Age: " + myObj.age);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },

  "java_class_methods.asp": {
    title: "Java Class Methods",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Class Methods
        </h2>

        <p className="leading-relaxed mb-4">
          In Java, <strong>methods</strong> are blocks of code that perform certain actions.
          Methods are declared inside a class, and can be called to execute their code.
        </p>

        {/* Create a Method */}
        <h3 className="text-lg font-semibold mb-2">Create a Method</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">static void</span> myMethod() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(
              <span className="text-purple-600">"Hello World!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Calling a Method */}
        <h3 className="text-lg font-semibold mb-2">Call a Method</h3>
        <p className="leading-relaxed mb-4">
          To call a method, write its name followed by parentheses <code>()</code> and a semicolon <code>;</code>.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">static void</span> myMethod() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(
              <span className="text-purple-600">"Hello World!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myMethod();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Access Methods With an Object */}
        <h3 className="text-lg font-semibold mb-2">Access Methods with an Object</h3>
        <p className="leading-relaxed mb-4">
          You can also create methods that are non-static, and call them using an object:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">public void</span> fullThrottle() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(
              <span className="text-purple-600">"The car is going as fast as it can!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public void</span> speed(
              <span className="text-red-600">int</span> maxSpeed) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Max speed is: " + maxSpeed);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myCar = <span className="text-red-600">new</span> Main();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myCar.fullThrottle();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myCar.speed(<span className="text-blue-600">200</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Explanation */}
        <h3 className="text-lg font-semibold mb-2">Explanation</h3>
        <ol className="list-decimal ml-6 mb-4">
          <li>Create a Main class with the <code>class</code> keyword.</li>
          <li>Create methods <code>fullThrottle()</code> and <code>speed(int maxSpeed)</code>.</li>
          <li>The methods print messages when called.</li>
          <li>The <code>speed()</code> method accepts an int parameter.</li>
          <li>To use the methods, create an object of the Main class.</li>
          <li>Inside <code>main()</code>, call the methods on the object using <code>objectName.methodName()</code>.</li>
        </ol>

        {/* Using Multiple Classes */}
        <h3 className="text-lg font-semibold mb-2">Using Multiple Classes</h3>
        <p className="leading-relaxed mb-4">
          You can access methods from another class by creating objects across classes. 
          The filename must match the class name.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">public void</span> fullThrottle() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(
              <span className="text-purple-600">"The car is going as fast as it can!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public void</span> speed(
              <span className="text-red-600">int</span> maxSpeed) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Max speed is: " + maxSpeed);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },
  "java_constructors.asp": {
    title: "Java Constructors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Constructors
        </h2>

        <p className="leading-relaxed mb-4">
          A <strong>constructor</strong> in Java is a special method used to initialize objects. 
          The constructor is called automatically when an object of a class is created.
        </p>

        {/* Basic Constructor */}
        <h3 className="text-lg font-semibold mb-2">Create a Constructor</h3>
        <p className="leading-relaxed mb-4">
          Constructors are used to set initial values for object attributes. 
          The constructor name must match the class name and it has no return type.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x;  <span className="text-gray-500">// Class attribute</span>
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;x = <span className="text-blue-600">5</span>;  <span className="text-gray-500">// Initialize x</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj = <span className="text-red-600">new</span> Main();  <span className="text-gray-500">// Calls constructor</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Constructor with Parameters */}
        <h3 className="text-lg font-semibold mb-2">Constructor Parameters</h3>
        <p className="leading-relaxed mb-4">
          Constructors can take parameters to initialize attributes with custom values:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main(<span className="text-red-600">int</span> y) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;x = y;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj = <span className="text-red-600">new</span> Main(<span className="text-blue-600">5</span>);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Constructor with Multiple Parameters */}
        <h3 className="text-lg font-semibold mb-2">Constructor with Multiple Parameters</h3>
        <p className="leading-relaxed mb-4">
          You can define as many parameters as needed in a constructor:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> modelYear;
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> modelName;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main(<span className="text-red-600">int</span> year, <span className="text-red-600">String</span> name) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;modelYear = year;
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;modelName = name;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myCar = <span className="text-red-600">new</span> Main(<span className="text-blue-600">1969</span>, <span className="text-purple-600">"Mustang"</span>);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myCar.modelYear + " " + myCar.modelName);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },

  "java_this.asp": {
    title: "Java this Keyword",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java this Keyword
        </h2>

        <p className="leading-relaxed mb-4">
          The <strong>this</strong> keyword in Java refers to the current object in a method or constructor.
          It is often used to avoid confusion when class attributes have the same name as method or constructor parameters.
        </p>

        {/* Accessing Class Attributes */}
        <h3 className="text-lg font-semibold mb-2">Accessing Class Attributes</h3>
        <p className="leading-relaxed mb-4">
          When a method or constructor parameter has the same name as a class variable, the parameter hides the class variable temporarily.
          Use <code>this</code> to refer to the class variable:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> x;  <span className="text-gray-500">// Class variable x</span>
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main(<span className="text-red-600">int</span> x) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;this.x = x; <span className="text-gray-500">// Assign parameter to class variable</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main myObj = <span className="text-red-600">new</span> Main(<span className="text-blue-600">5</span>);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Value of x = "</span> + myObj.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Tip:</strong> Think of <code>this.x = x;</code> as: 
          "<em>this.x</em> (the class variable) gets the value of <em>x</em> (the parameter)".  
          Without <code>this</code>, writing <code>x = x;</code> would set the parameter equal to itself and leave the class variable uninitialized.
        </p>

        {/* Calling a Constructor from Another Constructor */}
        <h3 className="text-lg font-semibold mb-2">Calling a Constructor from Another Constructor</h3>
        <p className="leading-relaxed mb-4">
          You can use <code>this()</code> to call another constructor in the same class.
          This is useful to provide default values or reuse initialization code.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">int</span> modelYear;
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> modelName;
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main(<span className="text-red-600">String</span> modelName) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;this(<span className="text-blue-600">2020</span>, modelName); <span className="text-gray-500">// Call another constructor</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public</span> Main(<span className="text-red-600">int</span> modelYear, <span className="text-red-600">String</span> modelName) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;this.modelYear = modelYear;
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;this.modelName = modelName;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public void</span> printInfo() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(modelYear + " " + modelName);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;<span className="text-red-600">public static void</span> main(
              <span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main car1 = <span className="text-red-600">new</span> Main(<span className="text-purple-600">"Corvette"</span>);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Main car2 = <span className="text-red-600">new</span> Main(<span className="text-blue-600">1969</span>, <span className="text-purple-600">"Mustang"</span>);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;car1.printInfo();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;car2.printInfo();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },

  "java_modifiers.asp": {
    title: "Java Modifiers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Modifiers
        </h2>

        <p className="leading-relaxed mb-4">
          You are already familiar with the <code>public</code> keyword that appears in almost all Java examples:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"} {"}"} 
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          The <strong>public</strong> keyword is an <strong>access modifier</strong>, which sets the access level for classes, attributes, methods, and constructors.
        </p>

        <h3 className="text-lg font-semibold mb-2">Types of Modifiers</h3>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Access Modifiers:</strong> Control the access level.</li>
          <li><strong>Non-Access Modifiers:</strong> Do not control access, but provide other functionality.</li>
        </ul>

        {/* Access Modifiers for Classes */}
        <h3 className="text-lg font-semibold mb-2">Access Modifiers for Classes</h3>
        <p className="leading-relaxed mb-4">
          For classes, you can use <code>public</code> or <em>default</em>:
        </p>
        <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Modifier</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">public</td>
              <td className="border px-4 py-2">The class is accessible by any other class.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">default</td>
              <td className="border px-4 py-2">The class is only accessible by classes in the same package. This is used when no modifier is specified.</td>
            </tr>
          </tbody>
        </table>

        {/* Access Modifiers for Attributes, Methods, Constructors */}
        <h3 className="text-lg font-semibold mb-2">Access Modifiers for Attributes, Methods, and Constructors</h3>
        <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr>
              <th className="border px-4 py-2">Modifier</th>
              <th className="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">public</td>
              <td className="border px-4 py-2">Accessible from all classes.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">private</td>
              <td className="border px-4 py-2">Accessible only within the declared class.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">default</td>
              <td className="border px-4 py-2">Accessible only within the same package.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">protected</td>
              <td className="border px-4 py-2">Accessible within the same package and subclasses.</td>
            </tr>
          </tbody>
        </table>

        {/* Public vs Private Example */}
        <h3 className="text-lg font-semibold mb-2">Public vs Private Example</h3>
        <p className="leading-relaxed mb-4">
          Think of it like real life:
          <ul className="list-disc ml-6 mb-4">
            <li><strong>public</strong> - a public park, accessible by everyone.</li>
            <li><strong>private</strong> - your house key, accessible only by you.</li>
          </ul>
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Person {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">String</span> name = <span className="text-purple-600">"John"</span>;  <span className="text-gray-500">// Public</span>
              {"\n"} &nbsp;&nbsp;private <span className="text-red-600">int</span> age = <span className="text-blue-600">30</span>;  <span className="text-gray-500">// Private</span>
              {"\n"}{"}"}
              {"\n\n"} <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Person p = <span className="text-red-600">new</span> Person();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(p.name);  <span className="text-gray-500">// Works fine</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(p.age);   <span className="text-gray-500">// Error: age has private access</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },

  "java_encapsulation.asp": {
    title: "Java Encapsulation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Encapsulation
        </h2>

        <p className="leading-relaxed mb-4">
          <strong>Encapsulation</strong> is the process of hiding "sensitive" data from users.  
          To achieve this:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Declare class variables/attributes as <code>private</code>.</li>
          <li>Provide public <code>get</code> and <code>set</code> methods to access and update the value of a private variable.</li>
        </ul>

        {/* Get and Set Methods */}
        <h3 className="text-lg font-semibold mb-2">Get and Set Methods</h3>
        <p className="leading-relaxed mb-4">
          Private variables can only be accessed within the same class. To allow controlled access from outside the class, use <strong>getter</strong> and <strong>setter</strong> methods.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Person {"{"}
              {"\n"} &nbsp;&nbsp;private <span className="text-red-600">String</span> name; <span className="text-gray-500">// private = restricted access</span>
              {"\n\n"} &nbsp;&nbsp;// Getter
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">String</span> getName() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;return name;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;// Setter
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> setName(<span className="text-red-600">String</span> newName) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;this.name = newName;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          The <code>getName()</code> method returns the value of the variable <code>name</code>, while the <code>setName()</code> method assigns a value to it using the <code>this</code> keyword.
        </p>

        {/* Accessing Private Variable Directly */}
        <h3 className="text-lg font-semibold mb-2">Accessing Private Variable Directly</h3>
        <p className="leading-relaxed mb-4">
          You cannot access a private variable directly from outside the class:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Person myObj = <span className="text-red-600">new</span> Person();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj.name = <span className="text-purple-600">"John"</span>; <span className="text-gray-500">// Error</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.name); <span className="text-gray-500">// Error</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Using Getter and Setter */}
        <h3 className="text-lg font-semibold mb-2">Using Getter and Setter Methods</h3>
        <p className="leading-relaxed mb-4">
          Instead, use the public <code>get</code> and <code>set</code> methods:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Person myObj = <span className="text-red-600">new</span> Person();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj.setName(<span className="text-purple-600">"John"</span>); <span className="text-gray-500">// Set value using setter</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj.getName()); <span className="text-gray-500">// Get value using getter</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Why Encapsulation */}
        <h3 className="text-lg font-semibold mb-2">Why Use Encapsulation?</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Provides better control of class attributes and methods.</li>
          <li>Attributes can be made read-only (getter only) or write-only (setter only).</li>
          <li>Flexible: You can change part of the code without affecting other parts.</li>
          <li>Increases data security.</li>
        </ul>
      </>
    ),
  },

  "java_packages.asp": {
    title: "Java Packages & API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Packages & API
        </h2>

        <p className="leading-relaxed mb-4">
          A <strong>package</strong> in Java is used to group related classes. Think of it as a folder in a file directory.  
          Packages help to avoid name conflicts and allow better maintainable code.  
          Packages are divided into two categories:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Built-in Packages:</strong> Packages from the Java API.</li>
          <li><strong>User-defined Packages:</strong> Packages created by the user.</li>
        </ul>

        {/* Built-in Packages */}
        <h3 className="text-lg font-semibold mb-2">Built-in Packages</h3>
        <p className="leading-relaxed mb-4">
          The <strong>Java API</strong> is a library of prewritten classes included in the Java Development Environment.  
          It contains components for managing input, database programming, utilities, and more.  
          The complete list can be found here: 
          <a href="https://docs.oracle.com/javase/8/docs/api/" className="text-blue-600 underline">Java API Documentation</a>.
        </p>

        <p className="leading-relaxed mb-4">
          You can import a single class or an entire package using the <code>import</code> keyword:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import package.name.Class;   <span className="text-gray-500">// Import a single class</span>
              {"\n"}
              import package.name.*;       <span className="text-gray-500">// Import all classes in a package</span>
            </code>
          </pre>
        </div>

        {/* Import a Class */}
        <h3 className="text-lg font-semibold mb-2">Import a Class</h3>
        <p className="leading-relaxed mb-4">
          Example: Import the <code>Scanner</code> class from <code>java.util</code> to get user input:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.Scanner;
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          Using the <code>Scanner</code> class to read a line of input:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.Scanner;
              {"\n\n"}
              <span className="text-red-600">class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Scanner myObj = <span className="text-red-600">new</span> Scanner(System.in);
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Enter username"</span>);
              {"\n\n"} &nbsp;&nbsp;&nbsp;&nbsp;String userName = myObj.nextLine();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Username is: "</span> + userName);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Import a Package */}
        <h3 className="text-lg font-semibold mb-2">Import a Whole Package</h3>
        <p className="leading-relaxed mb-4">
          To import all classes in a package, use an asterisk <code>*</code>:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.*;
            </code>
          </pre>
        </div>

        {/* User-defined Packages */}
        <h3 className="text-lg font-semibold mb-2">User-defined Packages</h3>
        <p className="leading-relaxed mb-4">
          You can create your own packages. Java uses the file system directory structure, just like folders on your computer:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              root/
              {"\n"} └── mypack/
              {"\n"}     └── MyPackageClass.java
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          Create a package using the <code>package</code> keyword:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              package mypack;
              {"\n"}<span className="text-red-600">class</span> MyPackageClass {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"This is my package!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>
      </>
    ),
  },
  "java_inheritance.asp": {
    title: "Java Inheritance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Inheritance (Subclass and Superclass)
        </h2>

        <p className="leading-relaxed mb-4">
          In Java, one class can inherit attributes and methods from another class.  
          This is called <strong>inheritance</strong>.  
          The concept is divided into two categories:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>Subclass (child):</strong> The class that inherits from another class.</li>
          <li><strong>Superclass (parent):</strong> The class being inherited from.</li>
        </ul>

        <p className="leading-relaxed mb-4">
          To inherit from a class, use the <code>extends</code> keyword.
        </p>

        {/* Inheritance Example */}
        <h3 className="text-lg font-semibold mb-2">Example: Inheriting Attributes and Methods</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Vehicle {"{"}
              {"\n"} &nbsp;&nbsp;protected <span className="text-red-600">String</span> brand = <span className="text-purple-600">"Ford"</span>; <span className="text-gray-500">// Vehicle attribute</span>
              {"\n\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> honk() {"{"} <span className="text-gray-500">// Vehicle method</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Tuut, tuut!"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Car <span className="text-red-600">extends</span> Vehicle {"{"}
              {"\n"} &nbsp;&nbsp;private <span className="text-red-600">String</span> modelName = <span className="text-purple-600">"Mustang"</span>; <span className="text-gray-500">// Car attribute</span>
              {"\n\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;// Create a myCar object
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Car myCar = <span className="text-red-600">new</span> Car();
              {"\n\n"} &nbsp;&nbsp;&nbsp;&nbsp;// Call the honk() method (inherited from Vehicle)
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myCar.honk();
              {"\n\n"} &nbsp;&nbsp;&nbsp;&nbsp;// Display brand (from Vehicle) and modelName (from Car)
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myCar.brand + <span className="text-purple-600">" "</span> + myCar.modelName);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          In this example:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>The <code>Vehicle</code> class is the <strong>superclass</strong> with an attribute <code>brand</code> and method <code>honk()</code>.</li>
          <li>The <code>Car</code> class is the <strong>subclass</strong> that <code>extends</code> Vehicle.</li>
          <li>The <code>Car</code> object <code>myCar</code> can access the <code>honk()</code> method and <code>brand</code> attribute from the <code>Vehicle</code> class.</li>
          <li>The <code>modelName</code> attribute belongs only to the <code>Car</code> class.</li>
        </ul>
      </>
    ),
  },

  "java_polymorphism.asp": {
    title: "Java Polymorphism",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Polymorphism
        </h2>

        <p className="leading-relaxed mb-4">
          <strong>Polymorphism</strong> means "many forms." It occurs when classes are related by inheritance, allowing the same method to perform different tasks depending on the object that calls it.
        </p>

        <p className="leading-relaxed mb-4">
          In other words, polymorphism allows us to perform a single action in multiple ways.  
          For example, a superclass called <code>Animal</code> has a method called <code>animalSound()</code>.  
          Subclasses of <code>Animal</code> like <code>Pig</code>, <code>Dog</code>, or <code>Cat</code> can have their own implementations of the <code>animalSound()</code> method:
        </p>

        {/* Polymorphism Example */}
        <h3 className="text-lg font-semibold mb-2">Example: Method Overriding</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"The animal makes a sound"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Pig <span className="text-red-600">extends</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"The pig says: wee wee"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Dog <span className="text-red-600">extends</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"The dog says: bow wow"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Animal myAnimal = <span className="text-red-600">new</span> Animal();  <span className="text-gray-500">// Animal object</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Animal myPig = <span className="text-red-600">new</span> Pig();      <span className="text-gray-500">// Pig object</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Animal myDog = <span className="text-red-600">new</span> Dog();      <span className="text-gray-500">// Dog object</span>
              {"\n\n"} &nbsp;&nbsp;&nbsp;&nbsp;myAnimal.animalSound();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myPig.animalSound();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myDog.animalSound();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Explanation:</strong>
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>The <code>Animal</code> class is the superclass with the method <code>animalSound()</code>.</li>
          <li><code>Pig</code> and <code>Dog</code> are subclasses that <code>override</code> the <code>animalSound()</code> method.</li>
          <li>Although <code>myPig</code> and <code>myDog</code> are declared as type <code>Animal</code>, they call their own overridden method — this is polymorphism in action.</li>
          <li>Polymorphism allows the same method name to behave differently depending on the object type.</li>
        </ul>
      </>
    ),
  },

  "java_super.asp": {
    title: "Java super Keyword",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java super Keyword
        </h2>

        <p className="leading-relaxed mb-4">
          In Java, the <strong>super</strong> keyword is used to refer to the parent class of a subclass.  
          It is commonly used to avoid confusion between superclass and subclass methods or attributes that have the same name.
        </p>

        <p className="leading-relaxed mb-4">
          The <code>super</code> keyword can be used in two main ways:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>To access attributes and methods from the parent class</li>
          <li>To call the parent class constructor</li>
        </ul>

        {/* Access Parent Methods */}
        <h3 className="text-lg font-semibold mb-2">Access Parent Methods</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"The animal makes a sound"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Dog <span className="text-red-600">extends</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;super.animalSound(); <span className="text-gray-500">// Call parent method</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"The dog says: bow wow"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Dog myDog = <span className="text-red-600">new</span> Dog();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myDog.animalSound();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Access Parent Attributes */}
        <h3 className="text-lg font-semibold mb-2">Access Parent Attributes</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> type = <span className="text-purple-600">"Animal"</span>;
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Dog <span className="text-red-600">extends</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;<span className="text-red-600">String</span> type = <span className="text-purple-600">"Dog"</span>;
              {"\n\n"} &nbsp;&nbsp;public <span className="text-red-600">void</span> printType() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(super.type); <span className="text-gray-500">// Access parent attribute</span>
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Dog myDog = <span className="text-red-600">new</span> Dog();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myDog.printType();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Call Parent Constructor */}
        <h3 className="text-lg font-semibold mb-2">Call Parent Constructor</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              <span className="text-red-600">class</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;Animal() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Animal is created"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">class</span> Dog <span className="text-red-600">extends</span> Animal {"{"}
              {"\n"} &nbsp;&nbsp;Dog() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;super(); <span className="text-gray-500">// Call parent constructor</span>
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="text-purple-600">"Dog is created"</span>);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              <span className="text-red-600">public class</span> Main {"{"}
              {"\n"} &nbsp;&nbsp;public <span className="text-red-600">static void</span> main(<span className="text-red-600">String[]</span> args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Dog myDog = <span className="text-red-600">new</span> Dog();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Summary:</strong>
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li><code>super.methodName()</code> calls a parent method that has been overridden in the subclass.</li>
          <li><code>super.attributeName</code> accesses a parent attribute when there is a name conflict with the subclass.</li>
          <li><code>super()</code> calls the parent constructor to reuse initialization code.</li>
        </ul>
      </>
    ),
  },

  "java_inner_classes.asp": {
    title: "Java Inner Classes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Inner Classes
        </h2>

        <p className="leading-relaxed mb-4">
          In Java, it is possible to nest classes (a class within a class). 
          Nested classes are used to group classes that belong together, making your code more readable and maintainable.
        </p>

        {/* Regular Inner Class */}
        <h3 className="text-lg font-semibold mb-2">Regular Inner Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              class OuterClass {"{"}
              {"\n"} &nbsp;&nbsp;int x = 10;
              {"\n\n"} &nbsp;&nbsp;class InnerClass {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;int y = 5;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass myOuter = new OuterClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass.InnerClass myInner = myOuter.new InnerClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myInner.y + myOuter.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Private Inner Class */}
        <h3 className="text-lg font-semibold mb-2">Private Inner Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              class OuterClass {"{"}
              {"\n"} &nbsp;&nbsp;int x = 10;
              {"\n\n"} &nbsp;&nbsp;private class InnerClass {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;int y = 5;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass myOuter = new OuterClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass.InnerClass myInner = myOuter.new InnerClass(); // Error: private access
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myInner.y + myOuter.x);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Static Inner Class */}
        <h3 className="text-lg font-semibold mb-2">Static Inner Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              class OuterClass {"{"}
              {"\n"} &nbsp;&nbsp;int x = 10;
              {"\n\n"} &nbsp;&nbsp;static class InnerClass {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;int y = 5;
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass.InnerClass myInner = new OuterClass.InnerClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myInner.y);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Access Outer Class From Inner Class */}
        <h3 className="text-lg font-semibold mb-2">Access Outer Class From Inner Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              class OuterClass {"{"}
              {"\n"} &nbsp;&nbsp;int x = 10;
              {"\n\n"} &nbsp;&nbsp;class InnerClass {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;public int myInnerMethod() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return x;
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass myOuter = new OuterClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;OuterClass.InnerClass myInner = myOuter.new InnerClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myInner.myInnerMethod());
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Summary:</strong>
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Inner classes are classes defined within another class.</li>
          <li>Private inner classes cannot be accessed from outside the outer class.</li>
          <li>Static inner classes can be accessed without creating an object of the outer class.</li>
          <li>Inner classes can access attributes and methods of the outer class.</li>
        </ul>
      </>
    ),
  },

  "java_abstraction.asp": {
    title: "Java Abstraction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Abstraction
        </h2>

        <p className="leading-relaxed mb-4">
          Data abstraction is the process of hiding certain details and showing only essential information to the user.  
          In Java, abstraction can be achieved using <strong>abstract classes</strong> or <strong>interfaces</strong>.
        </p>

        <p className="leading-relaxed mb-4">
          The <code>abstract</code> keyword is a non-access modifier used for classes and methods:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Abstract class:</strong> A restricted class that cannot be used to create objects. To use it, you must inherit it.
          </li>
          <li>
            <strong>Abstract method:</strong> Declared without a body and must be implemented in a subclass.
          </li>
        </ul>

        {/* Abstract Class Example */}
        <h3 className="text-lg font-semibold mb-2">Abstract Class Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              abstract class Animal {"{"}
              {"\n"} &nbsp;&nbsp;public abstract void animalSound(); // Abstract method
              {"\n"} &nbsp;&nbsp;public void sleep() {"{"}           // Regular method
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Zzz");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          You cannot create an object of an abstract class:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              Animal myObj = new Animal(); // Error: Cannot instantiate abstract class
            </code>
          </pre>
        </div>

        {/* Abstract Class with Subclass */}
        <h3 className="text-lg font-semibold mb-2">Implementing an Abstract Class</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              // Abstract class
              abstract class Animal {"{"}
              {"\n"} &nbsp;&nbsp;public abstract void animalSound();
              {"\n"} &nbsp;&nbsp;public void sleep() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Zzz");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              // Subclass inherits from Animal
              class Pig extends Animal {"{"}
              {"\n"} &nbsp;&nbsp;public void animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("The pig says: wee wee");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Pig myPig = new Pig(); // Create Pig object
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myPig.animalSound();   // Call abstract method implementation
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myPig.sleep();          // Call regular method
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Summary:</strong>
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>An <code>abstract class</code> cannot be instantiated directly.</li>
          <li>An <code>abstract method</code> must be implemented in a subclass.</li>
          <li>An abstract class can also have regular methods with implementations.</li>
        </ul>
      </>
    ),
  },


  "java_interface.asp": {
    title: "Java Interface",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Interface
        </h2>

        <p className="leading-relaxed mb-4">
          Another way to achieve abstraction in Java is with <strong>interfaces</strong>.  
          An interface is a completely "abstract class" that groups related methods with empty bodies.
        </p>

        {/* Interface Example */}
        <h3 className="text-lg font-semibold mb-2">Interface Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              // Interface
              interface Animal {"{"}
              {"\n"} &nbsp;&nbsp;public void animalSound(); // Method has no body
              {"\n"} &nbsp;&nbsp;public void sleep();       // Method has no body
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          To use the interface, a class must <strong>implement</strong> it using the <code>implements</code> keyword.  
          The implementing class provides the body for all interface methods.
        </p>

        {/* Implementing Interface */}
        <h3 className="text-lg font-semibold mb-2">Implementing an Interface</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              interface Animal {"{"}
              {"\n"} &nbsp;&nbsp;public void animalSound();
              {"\n"} &nbsp;&nbsp;public void sleep();
              {"\n"}{"}"}
              {"\n\n"}
              class Pig implements Animal {"{"}
              {"\n"} &nbsp;&nbsp;public void animalSound() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("The pig says: wee wee");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;public void sleep() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Zzz");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Pig myPig = new Pig();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myPig.animalSound();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myPig.sleep();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Notes on Interfaces */}
        <h3 className="text-lg font-semibold mb-2">Notes on Interfaces</h3>
        <ul className="list-disc ml-6 mb-4">
          <li>Interfaces cannot be used to create objects.</li>
          <li>Interface methods have no body; the implementing class provides it.</li>
          <li>All interface methods are by default <code>public</code> and <code>abstract</code>.</li>
          <li>Interface attributes are by default <code>public</code>, <code>static</code>, and <code>final</code>.</li>
          <li>An interface cannot contain a constructor.</li>
        </ul>

        {/* Multiple Interfaces */}
        <h3 className="text-lg font-semibold mb-2">Implementing Multiple Interfaces</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              interface FirstInterface {"{"}
              {"\n"} &nbsp;&nbsp;public void myMethod();
              {"\n"}{"}"}
              {"\n\n"}
              interface SecondInterface {"{"}
              {"\n"} &nbsp;&nbsp;public void myOtherMethod();
              {"\n"}{"}"}
              {"\n\n"}
              class DemoClass implements FirstInterface, SecondInterface {"{"}
              {"\n"} &nbsp;&nbsp;public void myMethod() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Some text..");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n\n"} &nbsp;&nbsp;public void myOtherMethod() {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Some other text...");
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
              {"\n\n"}
              class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;DemoClass myObj = new DemoClass();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj.myMethod();
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;myObj.myOtherMethod();
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Why Use Interfaces?</strong>
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>To achieve security by hiding implementation details.</li>
          <li>To achieve multiple inheritance, as a class can implement multiple interfaces.</li>
        </ul>
      </>
    ),
  },

  "java_user_input.asp": {
    title: "Java User Input (Scanner)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java User Input
        </h2>

        <p className="leading-relaxed mb-4">
          The <strong>Scanner</strong> class is used to get user input and is part of the <code>java.util</code> package.
        </p>

        <p className="leading-relaxed mb-4">
          To use the Scanner class, create an object of the class and use its methods to read input. The <code>nextLine()</code> method reads a String.
        </p>

        {/* Basic String Input Example */}
        <h3 className="text-lg font-semibold mb-2">Basic String Input</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.Scanner;  {"\n\n"}
              class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Scanner myObj = new Scanner(System.in);  {"// Create a Scanner object"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Enter username");{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;String userName = myObj.nextLine();  {"// Read user input"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Username is: " + userName);  {"// Output user input"}
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Input Types */}
        <h3 className="text-lg font-semibold mb-2">Input Types</h3>
        <p className="leading-relaxed mb-4">
          Scanner provides methods to read different data types:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><code>nextBoolean()</code> – reads a boolean value</li>
          <li><code>nextByte()</code> – reads a byte value</li>
          <li><code>nextDouble()</code> – reads a double value</li>
          <li><code>nextFloat()</code> – reads a float value</li>
          <li><code>nextInt()</code> – reads an int value</li>
          <li><code>nextLine()</code> – reads a String value</li>
          <li><code>nextLong()</code> – reads a long value</li>
          <li><code>nextShort()</code> – reads a short value</li>
        </ul>

        {/* Multiple Input Types Example */}
        <h3 className="text-lg font-semibold mb-2">Multiple Input Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.Scanner;{"\n\n"}
              class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;Scanner myObj = new Scanner(System.in);{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Enter name, age and salary:");{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;String name = myObj.nextLine();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;int age = myObj.nextInt();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;double salary = myObj.nextDouble();{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Name: " + name);{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Age: " + age);{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Salary: " + salary);{"\n"}
              &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          Using the Scanner class, you can easily read input of different types from the user and use it in your program.
        </p>
      </>
    ),
  },

  "java_date_time.asp": {
    title: "Java Date and Time",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Date and Time
        </h2>

        <p className="leading-relaxed mb-4">
          Java provides the <code>java.time</code> package to work with dates and times.  
          It includes several useful classes:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li><code>LocalDate</code> – represents a date (yyyy-MM-dd)</li>
          <li><code>LocalTime</code> – represents a time (HH:mm:ss.nano)</li>
          <li><code>LocalDateTime</code> – represents both date and time (yyyy-MM-ddTHH:mm:ss.nano)</li>
          <li><code>DateTimeFormatter</code> – used to format or parse date-time objects</li>
        </ul>

        {/* Current Date */}
        <h3 className="text-lg font-semibold mb-2">Display Current Date</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.time.LocalDate;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;LocalDate myObj = LocalDate.now();  {"// Current date"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Current Time */}
        <h3 className="text-lg font-semibold mb-2">Display Current Time</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.time.LocalTime;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;LocalTime myObj = LocalTime.now();  {"// Current time"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Current Date and Time */}
        <h3 className="text-lg font-semibold mb-2">Display Current Date and Time</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.time.LocalDateTime;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;LocalDateTime myObj = LocalDateTime.now();  {"// Current date and time"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myObj);
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Formatting Date and Time */}
        <h3 className="text-lg font-semibold mb-2">Formatting Date and Time</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.time.LocalDateTime;{"\n"}
              import java.time.format.DateTimeFormatter;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;LocalDateTime myDateObj = LocalDateTime.now();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Before formatting: " + myDateObj);{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;String formattedDate = myDateObj.format(myFormatObj);{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("After formatting: " + formattedDate);{"\n"}
              &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Summary:</strong> Use <code>LocalDate</code>, <code>LocalTime</code>, and <code>LocalDateTime</code> to get current date/time.  
          Use <code>DateTimeFormatter</code> to format or parse date-time objects.
        </p>
      </>
    ),
  },

  "java_data_structures.asp": {
    title: "Java Data Structures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Data Structures
        </h2>

        <p className="leading-relaxed mb-4">
          Data structures are ways to store and organize data efficiently.  
          An <code>array</code> is a basic example, but Java provides many advanced data structures in the <code>java.util</code> package.
        </p>

        <p className="leading-relaxed mb-4">
          Some common data structures in Java include:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>ArrayList</li>
          <li>HashSet</li>
          <li>HashMap</li>
        </ul>

        {/* ArrayList */}
        <h3 className="text-lg font-semibold mb-2">ArrayList</h3>
        <p className="leading-relaxed mb-2">
          An <code>ArrayList</code> is a resizable array that can grow dynamically. Elements can be accessed by index.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.ArrayList;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;ArrayList&lt;String&gt; cars = new ArrayList&lt;String&gt;();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Volvo");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Ford");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Mazda");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(cars);{"\n"}
              &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* HashSet */}
        <h3 className="text-lg font-semibold mb-2">HashSet</h3>
        <p className="leading-relaxed mb-2">
          A <code>HashSet</code> stores unique elements only. Duplicates are automatically ignored.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.HashSet;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;HashSet&lt;String&gt; cars = new HashSet&lt;String&gt;();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Volvo");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Ford");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW"); // Duplicate{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Mazda");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(cars);{"\n"}
              &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* HashMap */}
        <h3 className="text-lg font-semibold mb-2">HashMap</h3>
        <p className="leading-relaxed mb-2">
          A <code>HashMap</code> stores key-value pairs, which is useful for fast lookup by a key.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.HashMap;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;HashMap&lt;String, String&gt; capitalCities = new HashMap&lt;String, String&gt;();{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put("England", "London");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put("Germany", "Berlin");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put("Norway", "Oslo");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put("USA", "Washington DC");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(capitalCities);{"\n"}
              &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        {/* Iterators */}
        <h3 className="text-lg font-semibold mb-2">Iterators</h3>
        <p className="leading-relaxed mb-2">
          An <strong>iterator</strong> is a way to loop through elements in a data structure.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
            <code>
              import java.util.ArrayList;{"\n"}
              import java.util.Iterator;{"\n\n"}
              public class Main {"{"}
              {"\n"} &nbsp;&nbsp;public static void main(String[] args) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;ArrayList&lt;String&gt; cars = new ArrayList&lt;String&gt;();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Volvo");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Ford");{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Mazda");{"\n\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;Iterator&lt;String&gt; it = cars.iterator();{"\n"}
              &nbsp;&nbsp;&nbsp;&nbsp;while(it.hasNext()) {"{"}
              {"\n"} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(it.next());{"\n"} &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              {"\n"} &nbsp;&nbsp;{"}"}
              {"\n"}{"}"}
            </code>
          </pre>
        </div>

        <p className="leading-relaxed mb-4">
          <strong>Summary:</strong> Java provides multiple data structures like <code>ArrayList</code>, <code>HashSet</code>, and <code>HashMap</code> to store and organize data efficiently. Iterators help loop through these collections.
        </p>
      </>
    ),
  },

  "java_collections.asp": {
    title: "Java Collections Framework",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Collections Framework
        </h2>

        <p className="leading-relaxed mb-4">
          Before diving into <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>, and other data structures, it's important to understand the <strong>Java Collections Framework</strong>.
        </p>

        <p className="leading-relaxed mb-4">
          The Java Collections Framework provides a set of <strong>interfaces</strong> (like <code>List</code>, <code>Set</code>, and <code>Map</code>) and a set of <strong>classes</strong> (like <code>ArrayList</code>, <code>HashSet</code>, <code>HashMap</code>) that implement those interfaces.
        </p>

        <p className="leading-relaxed mb-4">
          All of these are part of the <code>java.util</code> package.  
          They are used to store, search, sort, and organize data efficiently using standardized methods and patterns.
        </p>

        <p className="leading-relaxed mb-4">
          <strong>Tip:</strong> Think of the Collections Framework as a toolbox.  
          Interfaces define what the tools can do, and classes are the actual tools that do the work.
        </p>

        {/* Core Interfaces */}
        <h3 className="text-lg font-semibold mb-2">Core Interfaces in the Collections Framework</h3>
        <p className="leading-relaxed mb-2">Common interfaces and their classes:</p>
        <div className="overflow-x-auto mb-6">
          <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Interface</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Common Classes</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">List</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ArrayList, LinkedList</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ordered collection that allows duplicates</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashSet, TreeSet, LinkedHashSet</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Collection of unique elements</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashMap, TreeMap, LinkedHashMap</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stores key-value pairs with unique keys</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Overview of Classes */}
        <h3 className="text-lg font-semibold mb-2">Overview of Common Classes</h3>
        <p className="leading-relaxed mb-2">Here is a summary of popular collection classes and their characteristics:</p>
        <div className="overflow-x-auto mb-6">
          <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Interface</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Class</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">List</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">ArrayList</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Resizable array, maintains order, allows duplicates</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">List</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LinkedList</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">List with fast insert and remove operations</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashSet</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unordered collection of unique elements</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">TreeSet</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sorted set of unique elements (natural order)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LinkedHashSet</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maintains insertion order of elements</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashMap</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stores key/value pairs with no specific order</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">TreeMap</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sorted map based on natural order of keys</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">LinkedHashMap</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maintains insertion order of keys</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

  "java_list.asp": {
    title: "Java List Interface",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java List Interface
        </h2>

        <p className="leading-relaxed mb-4">
          The <strong>List</strong> interface is part of the Java Collections Framework and represents an <strong>ordered collection</strong> of elements.
        </p>

        <p className="leading-relaxed mb-4">
          You can access elements by their <strong>index</strong>, add <strong>duplicates</strong>, and maintain the <strong>insertion order</strong>.
        </p>

        <p className="leading-relaxed mb-4">
          Since <code>List</code> is an interface, you cannot create a List object directly.  
          Instead, you use a class that implements the List interface, such as:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>ArrayList</strong> - a resizable array with fast random access</li>
          <li><strong>LinkedList</strong> - like a train of nodes you can easily attach or remove</li>
        </ul>

        <p className="leading-relaxed mb-4">
          <strong>Tip:</strong> Use List when you care about order, may have duplicates, and want to access elements by index.
        </p>

        {/* Common List Methods */}
        <h3 className="text-lg font-semibold mb-2">Common List Methods</h3>
        <div className="overflow-x-auto mb-6">
          <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Method</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">add()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Adds an element to the end of the list</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">get()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Returns the element at the specified position</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">set()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Replaces the element at the specified position</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">remove()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Removes the element at the specified position</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">size()</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Returns the number of elements in the list</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* List vs Array */}
        <h3 className="text-lg font-semibold mb-2">List vs Array</h3>
        <div className="overflow-x-auto mb-6">
          <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 w-full text-left">
            <thead>
              <tr>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Array</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fixed size</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dynamic size</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Faster performance for raw data</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">More flexible and feature-rich</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Not part of Collections Framework</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Part of Collections Framework</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },

"java_array_list.asp": {
  title: "Java ArrayList",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java ArrayList
      </h2>

      <p className="leading-relaxed mb-4">
        An <strong>ArrayList</strong> is like a resizable array.  
        It is part of the <code>java.util</code> package and implements the <code>List</code> interface.
      </p>

      <p className="leading-relaxed mb-4">
        Unlike a built-in array, the size of an ArrayList can be modified dynamically.  
        Elements can be added or removed without creating a new list.
      </p>

      {/* Create an ArrayList */}
      <h3 className="text-lg font-semibold mb-2">Create an ArrayList</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">import</span> java.util.ArrayList;{"\n\n"}
            <span className="text-red-600 dark:text-red-400">ArrayList&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> ArrayList&lt;String&gt;(); <span className="text-gray-500 dark:text-gray-400">// Create an ArrayList object</span>
          </code>
        </pre>
      </div>

      {/* Add Elements */}
      <h3 className="text-lg font-semibold mb-2">Add Elements</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">cars.add</span>("Volvo");{"\n"}
            <span className="text-red-600 dark:text-red-400">cars.add</span>("BMW");{"\n"}
            <span className="text-red-600 dark:text-red-400">cars.add</span>("Ford");{"\n"}
            <span className="text-red-600 dark:text-red-400">cars.add</span>("Mazda");{"\n"}
            <span className="text-red-600 dark:text-red-400">System.out.println</span>(cars);
          </code>
        </pre>
      </div>

      <p className="leading-relaxed mb-4">
        You can also add an element at a specific position using its index:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">cars.add</span>(0, "Mazda"); <span className="text-gray-500 dark:text-gray-400">// Insert element at the beginning</span>
          </code>
        </pre>
      </div>

      {/* Access an Element */}
      <h3 className="text-lg font-semibold mb-2">Access an Element</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">cars.get</span>(0); <span className="text-gray-500 dark:text-gray-400">// Get the first element</span>
        </code>
      </pre>

      {/* Change an Element */}
      <h3 className="text-lg font-semibold mb-2">Change an Element</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">cars.set</span>(0, "Opel");
        </code>
      </pre>

      {/* Remove an Element */}
      <h3 className="text-lg font-semibold mb-2">Remove an Element</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">cars.remove</span>(0); <span className="text-gray-500 dark:text-gray-400">// Remove element at index 0</span>{"\n"}
          <span className="text-red-600 dark:text-red-400">cars.clear</span>();   <span className="text-gray-500 dark:text-gray-400">// Remove all elements</span>
        </code>
      </pre>

      {/* ArrayList Size */}
      <h3 className="text-lg font-semibold mb-2">ArrayList Size</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">cars.size</span>();
        </code>
      </pre>

      {/* Loop Through an ArrayList */}
      <h3 className="text-lg font-semibold mb-2">Loop Through an ArrayList</h3>
      <p className="leading-relaxed mb-4">Using a for loop:</p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">for</span> (int i = 0; i &lt; cars.size(); i++) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars.get(i));{"\n"}
          {"}"}
        </code>
      </pre>

      <p className="leading-relaxed mb-4">Using a for-each loop:</p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code>
          <span className="text-red-600 dark:text-red-400">for</span> (String car : cars) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(car);{"\n"}
          {"}"}
        </code>
      </pre>
    </>
  ),
},

"java_linkedlist.asp": {
  title: "Java LinkedList",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java LinkedList
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>LinkedList</strong> class is part of the <code>java.util</code> package and implements the <code>List</code> interface, just like <code>ArrayList</code>.
      </p>

      {/* Example */}
      <h3 className="text-lg font-semibold mb-2">Example</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">import</span> java.util.LinkedList;{"\n\n"}
            <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">LinkedList&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedList&lt;String&gt;();{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Volvo");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Ford");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Mazda");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars);{"\n"}
            &nbsp;&nbsp;{"}"}{"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* ArrayList vs LinkedList */}
      <h3 className="text-lg font-semibold mb-2">ArrayList vs. LinkedList</h3>
      <p className="leading-relaxed mb-4">
        Both <code>ArrayList</code> and <code>LinkedList</code> follow the <code>List</code> interface, so they have similar methods like <code>add()</code>, <code>remove()</code>, <code>set()</code>, and <code>clear()</code>.
      </p>
      <p className="leading-relaxed mb-4">
        <strong>How ArrayList works:</strong> uses an internal array. If the array is full, a new larger array is created and the old one is discarded.
      </p>
      <p className="leading-relaxed mb-4">
        <strong>How LinkedList works:</strong> stores elements in "nodes" linked together. Each node has a reference to the next node, making insertion/removal efficient at both ends.
      </p>
      <p className="leading-relaxed mb-4">
        <strong>When to use:</strong> Use <code>ArrayList</code> for storing and accessing data frequently, and <code>LinkedList</code> for frequent insertion and deletion operations.
      </p>

      {/* LinkedList Methods */}
      <h3 className="text-lg font-semibold mb-2">LinkedList Methods</h3>
      <table className="table-auto border-collapse border border-gray-300 dark:border-gray-600 mb-6 w-full text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Method</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">addFirst()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Adds an element to the beginning of the list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">addLast()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Adds an element to the end of the list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">removeFirst()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Removes the first element of the list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">removeLast()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Removes the last element of the list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">getFirst()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the first element of the list</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">getLast()</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns the last element of the list</td>
          </tr>
        </tbody>
      </table>

      {/* The var Keyword */}
      <h3 className="text-lg font-semibold mb-2">The <code>var</code> Keyword</h3>
      <p className="leading-relaxed mb-4">
        From Java 10, you can declare a <code>LinkedList</code> using <code>var</code> to let the compiler infer the type:
      </p>
     <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
  <code className="text-black dark:text-black">
    <span className="text-gray-500 dark:text-gray-400">// Without var</span>{"\n"}
    <span className="text-red-600 dark:text-red-400">LinkedList&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedList&lt;String&gt;();{"\n\n"}
    <span className="text-gray-500 dark:text-gray-400">// With var</span>{"\n"}
    <span className="text-red-600 dark:text-red-400">var</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedList&lt;String&gt;();
  </code>
</pre>

      {/* List Interface */}
      <h3 className="text-lg font-semibold mb-2">The List Interface</h3>
      <p className="leading-relaxed mb-6">
        Sometimes you will see both <code>List</code> and <code>LinkedList</code> used together:
      </p>
   <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
  <code className="text-black dark:text-black">
    <span className="text-red-600 dark:text-red-400">import</span> java.util.List;{"\n"}
    <span className="text-red-600 dark:text-red-400">import</span> java.util.LinkedList;{"\n\n"}
    <span className="text-red-600 dark:text-red-400">List&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedList&lt;&gt;();
  </code>
</pre>

    </>
  ),
},

"java_list_sorting.asp": {
  title: "Java List Sorting",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java Sort a List
      </h2>

      <p className="leading-relaxed mb-4">
        In Java, you can sort <code>ArrayList</code> or <code>LinkedList</code> using the <code>Collections</code> class, which is part of the <code>java.util</code> package.
      </p>

      {/* Sort ArrayList of Strings */}
      <h3 className="text-lg font-semibold mb-2">Sort an ArrayList of Strings</h3>
      <p className="leading-relaxed mb-4">
        Sort alphabetically in ascending order:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">import</span> java.util.ArrayList;{"\n"}
            <span className="text-red-600 dark:text-red-400">import</span> java.util.Collections;{"\n\n"}
            <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(String[] args) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">ArrayList&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> ArrayList&lt;String&gt;();{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Volvo");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("BMW");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Ford");{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;cars.add("Mazda");{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">Collections.sort</span>(cars); <span className="text-gray-500 dark:text-gray-400">// Sort cars</span>{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;for(<span className="text-red-600 dark:text-red-400">String</span> i : cars) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}{"\n"}
            &nbsp;&nbsp;{"}"}{"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* Sort ArrayList of Integers */}
      <h3 className="text-lg font-semibold mb-2">Sort an ArrayList of Integers</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">import</span> java.util.ArrayList;{"\n"}
            <span className="text-red-600 dark:text-red-400">import</span> java.util.Collections;{"\n\n"}
            <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void</span> main(String[] args) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">ArrayList&lt;Integer&gt;</span> myNumbers = <span className="text-red-600 dark:text-red-400">new</span> ArrayList&lt;Integer&gt;();{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(33);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(15);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(20);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(34);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(8);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;myNumbers.add(12);{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">Collections.sort</span>(myNumbers); <span className="text-gray-500 dark:text-gray-400">// Sort myNumbers</span>{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;for(<span className="text-red-600 dark:text-red-400">int</span> i : myNumbers) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(i);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}{"\n"}
            &nbsp;&nbsp;{"}"}{"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* Reverse Order */}
      <h3 className="text-lg font-semibold mb-2">Sort in Reverse Order</h3>
      <p className="leading-relaxed mb-4">
        You can sort a list in descending order using <code>Collections.reverseOrder()</code>.
      </p>

      {/* Reverse String List */}
      <h4 className="font-medium mb-2">Reverse an ArrayList of Strings</h4>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">Collections.sort</span>(cars, <span className="text-red-600 dark:text-red-400">Collections.reverseOrder</span>()); <span className="text-gray-500 dark:text-gray-400">// Sort descending</span>
          </code>
        </pre>
      </div>

      {/* Reverse Integer List */}
      <h4 className="font-medium mb-2">Reverse an ArrayList of Integers</h4>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
        <pre className="font-mono bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
          <code>
            <span className="text-red-600 dark:text-red-400">Collections.sort</span>(myNumbers, <span className="text-red-600 dark:text-red-400">Collections.reverseOrder</span>()); <span className="text-gray-500 dark:text-gray-400">// Sort descending</span>
          </code>
        </pre>
      </div>
    </>
  ),
},

  "java_set.asp": {
    title: "Java Set",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Java Set Interface
        </h2>

        <p className="leading-relaxed mb-4">
          The <strong>Set</strong> interface is part of the Java Collections Framework and is used to store a collection of unique elements.
        </p>

        <p className="leading-relaxed mb-4">
          Unlike a <code>List</code>, a <code>Set</code> does not allow duplicates, and it does not preserve the order of elements (unless you're using <code>TreeSet</code> or <code>LinkedHashSet</code>).
        </p>

        <p className="leading-relaxed mb-4">
          Common classes that implement <code>Set</code>:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>HashSet</strong> - fast and unordered</li>
          <li><strong>TreeSet</strong> - sorted set</li>
          <li><strong>LinkedHashSet</strong> - ordered by insertion</li>
        </ul>

        <p className="leading-relaxed mb-4">
          Tip: Use a <code>Set</code> when you need to store unique values only.
        </p>

        {/* Common Set Methods */}
        <h3 className="text-lg font-semibold mb-2">Common Set Methods</h3>
        <ul className="list-disc ml-6 mb-6">
          <li><code>add()</code> - Adds an element if it's not already in the set</li>
          <li><code>remove()</code> - Removes the element from the set</li>
          <li><code>contains()</code> - Checks if the set contains the element</li>
          <li><code>size()</code> - Returns the number of elements</li>
          <li><code>clear()</code> - Removes all elements</li>
        </ul>

        {/* Example */}
        <h3 className="text-lg font-semibold mb-2">Example</h3>
   <pre className="font-mono bg-gray-100 dark:bg-gray-800 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
  <code className="text-black dark:text-black">
    <span className="text-red-600 dark:text-red-400">import</span> java.util.HashSet;{"\n"}
    <span className="text-red-600 dark:text-red-400">import</span> java.util.Set;{"\n\n"}

    <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
    &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">Set&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> HashSet&lt;&gt;();{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>);{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Ford"</span>);{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500 dark:text-gray-400">// Duplicate will not be added</span>{"\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>);{"\n\n"}
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars);{"\n"}
    &nbsp;&nbsp;{"}"}{"\n"}
    {"}"}
  </code>
</pre>


        {/* Set vs List */}
        <h3 className="text-lg font-semibold mb-2">Set vs. List</h3>
        <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">List</th>
              <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">Set</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Allows duplicates</td>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Does not allow duplicates</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Maintains order</td>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Does not guarantee order</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Access by index</td>
              <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">No index-based access</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
"java_tree_set.asp": {
  title: "Java TreeSet",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java TreeSet
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>TreeSet</strong> is a collection that stores unique elements in <strong>sorted order</strong>.  
        It is part of the <code>java.util</code> package and implements the <code>Set</code> interface.
      </p>

      <p className="leading-relaxed mb-4">
        Tip: Unlike HashSet, which has no order, TreeSet keeps its elements sorted automatically.
      </p>

      {/* Create a TreeSet */}
      <h3 className="text-xl font-semibold mb-3">Create a TreeSet</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.TreeSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">TreeSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> TreeSet&lt;&gt;();
        </code>
      </pre>

      {/* Add Elements */}
      <h3 className="text-xl font-semibold mb-3">Add Elements</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.TreeSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">TreeSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> TreeSet&lt;&gt;();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Ford"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>); <span className="text-gray-500 dark:text-gray-400">// Duplicate ignored</span>{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars);{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      {/* Check Element */}
      <h3 className="text-xl font-semibold mb-3">Check if an Element Exists</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.contains(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);
        </code>
      </pre>

      {/* Remove Elements */}
      <h3 className="text-xl font-semibold mb-3">Remove an Element</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.remove(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Remove All Elements</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.clear();
        </code>
      </pre>

      {/* TreeSet Size */}
      <h3 className="text-xl font-semibold mb-3">TreeSet Size</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">System.out.println</span>(cars.size());
        </code>
      </pre>

      {/* Loop Through TreeSet */}
      <h3 className="text-xl font-semibold mb-3">Loop Through a TreeSet</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">for</span> (String i : cars) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(i);{"\n"}
          {"}"}
        </code>
      </pre>

      {/* Numbers Example */}
      <h3 className="text-xl font-semibold mb-3">Using TreeSet with Numbers</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.TreeSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">TreeSet&lt;Integer&gt;</span> numbers = <span className="text-red-600 dark:text-red-400">new</span> TreeSet&lt;&gt;();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(40);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(10);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(30);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(20);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (int n : numbers) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(n);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"}{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      {/* HashSet vs TreeSet Table */}
      <h3 className="text-xl font-semibold mb-3">HashSet vs TreeSet</h3>
      <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">Feature</th>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">HashSet</th>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">TreeSet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Order</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">No guaranteed order</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Sorted (natural order)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Duplicates</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Not allowed</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Not allowed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Performance</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Faster (no sorting)</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Slower (due to sorting)</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed mb-4">
        Tip: Use <strong>HashSet</strong> when you care about speed, and <strong>TreeSet</strong> when you need sorted elements.
      </p>

      {/* var Keyword */}
      <h3 className="text-xl font-semibold mb-3">The <code>var</code> Keyword</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          // Without var{"\n"}
          TreeSet&lt;String&gt; cars = new TreeSet&lt;&gt;();{"\n\n"}
          // With var{"\n"}
          var cars = new TreeSet&lt;String&gt;();
        </code>
      </pre>

      {/* Set Interface */}
      <h3 className="text-xl font-semibold mb-3">The Set Interface</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.Set;{"\n"}
          <span className="text-red-600 dark:text-red-400">import</span> java.util.TreeSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">Set&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> TreeSet&lt;&gt;();
        </code>
      </pre>
    </>
  ),
},

  "java_hash_set.asp": {
  title: "Java HashSet",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java HashSet
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>HashSet</strong> is a collection of elements where every element is <strong>unique</strong>. It is part of the <code>java.util</code> package and implements the <code>Set</code> interface.
      </p>

      <h3 className="text-xl font-semibold mb-3">Create a HashSet</h3>
      <p className="leading-relaxed mb-4">
        Create a <code>HashSet</code> object called <strong>cars</strong> that will store strings:
      </p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`<span class="text-red-600 dark:text-red-400">import</span> java.util.HashSet;

<span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span> cars = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Add Elements</h3>
      <p className="leading-relaxed mb-4">
        Use <code>add()</code> to add elements. Duplicate elements are automatically ignored.
      </p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`<span class="text-red-600 dark:text-red-400">import</span> java.util.HashSet;

<span class="text-red-600 dark:text-red-400">public class</span> Main {
  &nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span> cars = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span class="text-purple-600 dark:text-purple-400">"Volvo"</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span class="text-purple-600 dark:text-purple-400">"BMW"</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span class="text-purple-600 dark:text-purple-400">"Ford"</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span class="text-purple-600 dark:text-purple-400">"BMW"</span>); <span class="text-gray-500 dark:text-gray-400">// Duplicate ignored</span>
    &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span class="text-purple-600 dark:text-purple-400">"Mazda"</span>);
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">System.out.println</span>(cars);
  }
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Check If an Element Exists</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`cars.contains(<span class="text-purple-600 dark:text-purple-400">"Mazda"</span>); <span class="text-gray-500 dark:text-gray-400">// Returns true</span>`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Remove and Clear</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`cars.remove(<span class="text-purple-600 dark:text-purple-400">"Volvo"</span>);
cars.clear(); <span class="text-gray-500 dark:text-gray-400">// Removes all elements</span>`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Size and Loop</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`<span class="text-red-600 dark:text-red-400">System.out.println</span>(cars.size());

<span class="text-red-600 dark:text-red-400">for</span> (String i : cars) {
  <span class="text-red-600 dark:text-red-400">System.out.println</span>(i);
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Other Types (Integer)</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`<span class="text-red-600 dark:text-red-400">import</span> java.util.HashSet;

<span class="text-red-600 dark:text-red-400">public class</span> Main {
  &nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">HashSet&lt;Integer&gt;</span> numbers = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;Integer&gt;</span>();
    &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(4);
    &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(7);
    &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(8);

    &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">for</span> (<span class="text-red-600 dark:text-red-400">int</span> i = 1; i <= 10; i++) {
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">if</span> (numbers.contains(i)) {
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">System.out.println</span>(i + <span class="text-purple-600 dark:text-purple-400">" was found in the set."</span>);
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="text-red-600 dark:text-red-400">else</span> {
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-red-600 dark:text-red-400">System.out.println</span>(i + <span class="text-purple-600 dark:text-purple-400">" was not found in the set."</span>);
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}
    &nbsp;&nbsp;&nbsp;&nbsp;}
  }
}`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">The var Keyword</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`// Without var
<span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span> cars = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();

// With var
<span class="text-red-600 dark:text-red-400">var</span> cars = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">The Set Interface</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
{`<span class="text-red-600 dark:text-red-400">import</span> java.util.Set;
<span class="text-red-600 dark:text-red-400">import</span> java.util.HashSet;

<span class="text-red-600 dark:text-red-400">Set&lt;String&gt;</span> cars = <span class="text-red-600 dark:text-red-400">new</span> <span class="text-red-600 dark:text-red-400">HashSet&lt;&gt;</span>();`}
        </code>
      </pre>
    </>
  ),
},
"java_hashset.asp": {
  title: "Java HashSet",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java HashSet
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>HashSet</strong> is a collection of elements where every element is <strong>unique</strong>.  
        It is part of the <code>java.util</code> package and implements the <code>Set</code> interface.
      </p>

      <h3 className="text-xl font-semibold mb-3">Create a HashSet</h3>
      <p className="leading-relaxed mb-4">
        Create a <code>HashSet</code> object called <strong>cars</strong> that stores strings:
      </p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.HashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> <span className="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Add Elements</h3>
      <p className="leading-relaxed mb-4">
        Use the <code>add()</code> method. Duplicate elements are automatically ignored.
      </p>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.HashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> <span className="text-red-600 dark:text-red-400">HashSet&lt;String&gt;</span>();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Ford"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>); <span className="text-gray-500 dark:text-gray-400">// Duplicate ignored</span>{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars);{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Check If an Element Exists</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.contains(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>); <span className="text-gray-500 dark:text-gray-400">// Returns true</span>
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Remove and Clear</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.remove(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);{"\n"}
          cars.clear(); <span className="text-gray-500 dark:text-gray-400">// Removes all elements</span>
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Size and Loop</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">System.out.println</span>(cars.size());{"\n\n"}
          <span className="text-red-600 dark:text-red-400">for</span> (String i : cars) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(i);{"\n"}
          {"}"}
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Other Types (Integer)</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.HashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">HashSet&lt;Integer&gt;</span> numbers = <span className="text-red-600 dark:text-red-400">new</span> <span className="text-red-600 dark:text-red-400">HashSet&lt;Integer&gt;</span>();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(4);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(7);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;numbers.add(8);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">for</span> (<span className="text-red-600 dark:text-red-400">int</span> i = 1; i = 10; i++) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">if</span> (numbers.contains(i)) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(i + <span className="text-purple-600 dark:text-purple-400">" was found in the set."</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <span className="text-red-600 dark:text-red-400">else</span> {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(i + <span className="text-purple-600 dark:text-purple-400">" was not found in the set."</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;{"}"}{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>
    </>
  ),
},

"java_linkedhashset.asp": {
  title: "Java LinkedHashSet",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java LinkedHashSet
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>LinkedHashSet</strong> is a collection that stores unique elements and remembers the order they were added.
      </p>

      <p className="leading-relaxed mb-4">
        It is part of the <code>java.util</code> package and implements the <code>Set</code> interface.
      </p>

      <p className="leading-relaxed mb-4">
        Tip: Use <strong>LinkedHashSet</strong> when you want a set that does not allow duplicates and keeps the original insertion order.
      </p>

      {/* Create a LinkedHashSet */}
      <h3 className="text-xl font-semibold mb-3">Create a LinkedHashSet</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.LinkedHashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">LinkedHashSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedHashSet&lt;&gt;();
        </code>
      </pre>

      {/* Add Elements */}
      <h3 className="text-xl font-semibold mb-3">Add Elements</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.LinkedHashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">LinkedHashSet&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedHashSet&lt;&gt;();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Ford"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"BMW"</span>); <span className="text-gray-500 dark:text-gray-400">// Duplicate ignored</span>{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;cars.add(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(cars); <span className="text-gray-500 dark:text-gray-400">// Output: [Volvo, BMW, Ford, Mazda]</span>{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      {/* Check Element */}
      <h3 className="text-xl font-semibold mb-3">Check if an Element Exists</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.contains(<span className="text-purple-600 dark:text-purple-400">"Mazda"</span>);
        </code>
      </pre>

      {/* Remove Elements */}
      <h3 className="text-xl font-semibold mb-3">Remove an Element</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.remove(<span className="text-purple-600 dark:text-purple-400">"Volvo"</span>);
        </code>
      </pre>

      <h3 className="text-xl font-semibold mb-3">Remove All Elements</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          cars.clear();
        </code>
      </pre>

      {/* LinkedHashSet Size */}
      <h3 className="text-xl font-semibold mb-3">LinkedHashSet Size</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">System.out.println</span>(cars.size());
        </code>
      </pre>

      {/* Loop Through LinkedHashSet */}
      <h3 className="text-xl font-semibold mb-3">Loop Through a LinkedHashSet</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">for</span> (String car : cars) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(car);{"\n"}
          {"}"}
        </code>
      </pre>

      {/* HashSet vs LinkedHashSet Table */}
      <h3 className="text-xl font-semibold mb-3">HashSet vs LinkedHashSet</h3>
      <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">Feature</th>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">HashSet</th>
            <th className="border border-gray-300 dark:border-gray-700 px-3 py-1">LinkedHashSet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Order</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">No guaranteed order</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Insertion order preserved</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Duplicates</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Not allowed</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Not allowed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Performance</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Faster</td>
            <td className="border border-gray-300 dark:border-gray-700 px-3 py-1">Slightly slower (due to order tracking)</td>
          </tr>
        </tbody>
      </table>

      <p className="leading-relaxed mb-4">
        Tip: Use <strong>HashSet</strong> when speed matters, and <strong>LinkedHashSet</strong> when insertion order matters.
      </p>

      {/* var Keyword */}
      <h3 className="text-xl font-semibold mb-3">The <code>var</code> Keyword</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          // Without var{"\n"}
          LinkedHashSet&lt;String&gt; cars = new LinkedHashSet&lt;&gt;();{"\n\n"}
          // With var{"\n"}
          var cars = new LinkedHashSet&lt;String&gt;();
        </code>
      </pre>

      {/* Set Interface */}
      <h3 className="text-xl font-semibold mb-3">The Set Interface</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.Set;{"\n"}
          <span className="text-red-600 dark:text-red-400">import</span> java.util.LinkedHashSet;{"\n\n"}
          <span className="text-red-600 dark:text-red-400">Set&lt;String&gt;</span> cars = <span className="text-red-600 dark:text-red-400">new</span> LinkedHashSet&lt;&gt;();
        </code>
      </pre>
    </>
  ),
},
"java_map.asp": {
  title: "Java Map",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java Map Interface
      </h2>

      <p className="leading-relaxed mb-4">
        The <strong>Map</strong> interface is part of the Java Collections Framework and is used to store <strong>key-value pairs</strong>. Each key must be unique, but values can be duplicated.
      </p>

      <p className="leading-relaxed mb-4">
        A Map is useful when you want to associate a key (like a name or ID) with a value (like an age or description).
      </p>

      <p className="leading-relaxed mb-4">
        Common classes that implement <code>Map</code>:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>HashMap</strong> - fast and unordered</li>
        <li><strong>TreeMap</strong> - sorted by key</li>
        <li><strong>LinkedHashMap</strong> - ordered by insertion</li>
      </ul>

      <p className="leading-relaxed mb-4">
        Tip: Use a <strong>Map</strong> when you want to associate values with unique keys, like storing user IDs with names.
      </p>

      {/* Common Map Methods */}
      <h3 className="text-xl font-semibold mb-3">Common Map Methods</h3>
      <ul className="list-disc ml-6 mb-6">
        <li><code>put(key, value)</code> - Adds or updates a key-value pair</li>
        <li><code>get(key)</code> - Returns the value for a given key</li>
        <li><code>remove(key)</code> - Removes the key and its value</li>
        <li><code>containsKey(key)</code> - Checks if the map contains the key</li>
        <li><code>keySet()</code> - Returns a set of all keys</li>
      </ul>

      {/* Example */}
      <h3 className="text-xl font-semibold mb-3">Example: HashMap</h3>
      <pre className="font-mono bg-gray-100 dark:bg-gray-900 p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-sm">
        <code className="text-black dark:text-black">
          <span className="text-red-600 dark:text-red-400">import</span> java.util.HashMap;{"\n"}
          <span className="text-red-600 dark:text-red-400">import</span> java.util.Map;{"\n\n"}
          
          <span className="text-red-600 dark:text-red-400">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">Map&lt;Integer, String&gt;</span> users = <span className="text-red-600 dark:text-red-400">new</span> HashMap&lt;&gt;();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;users.put(1, <span className="text-purple-600 dark:text-purple-400">"Alice"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;users.put(2, <span className="text-purple-600 dark:text-purple-400">"Bob"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;users.put(3, <span className="text-purple-600 dark:text-purple-400">"Charlie"</span>);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(users.get(2)); <span className="text-gray-500 dark:text-gray-400">// Output: Bob</span>{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;users.remove(3);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-600 dark:text-red-400">System.out.println</span>(users.containsKey(3)); <span className="text-gray-500 dark:text-gray-400">// Output: false</span>{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      {/* Map vs Set vs List */}
      <h3 className="text-xl font-semibold mb-3">Map vs Set vs List</h3>
      <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-300 dark:border-gray-700 px-2 py-1">Feature</th>
            <th className="border border-gray-300 dark:border-gray-700 px-2 py-1">List</th>
            <th className="border border-gray-300 dark:border-gray-700 px-2 py-1">Set</th>
            <th className="border border-gray-300 dark:border-gray-700 px-2 py-1">Map</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Duplicates allowed?</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Yes</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">No</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">
              Keys: No<br/>
              Values: Yes
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Stores key-value pairs?</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">No</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">No</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Yes</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Maintains order?</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">Yes</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">No (unless TreeSet/LinkedHashSet)</td>
            <td className="border border-gray-300 dark:border-gray-700 px-2 py-1">No (unless TreeMap/LinkedHashMap)</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
},
"java_hashmap.asp":{
  title: "Java HashMap",
  content: (
    <>
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java HashMap
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>HashMap</strong> stores items in <strong>key/value pairs</strong>, where each key maps to a specific value.
      </p>

      <p className="leading-relaxed mb-4">
        It is part of the <code>java.util</code> package and implements the <code>Map</code> interface.
      </p>

      <p className="leading-relaxed mb-4">
        Instead of accessing elements by an index (like with ArrayList), you use a <strong>key</strong> to retrieve its associated value.
      </p>

      {/* Create a HashMap */}
      <h3 className="text-xl font-semibold mb-3">Create a HashMap</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
            import java.util.HashMap;{"\n\n"}
            <span className="text-red-500">HashMap</span>
            {"<String, String> capitalCities = "}
            <span className="text-red-500">new</span> HashMap&lt;&gt;();
          </code>
        </pre>
      </div>

      {/* Add Items */}
      <h3 className="text-xl font-semibold mb-3">Add Items</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
            import java.util.HashMap;{"\n\n"}
            <span className="text-red-500">public class</span> Main {"{"}{"\n"}
            &nbsp;&nbsp;<span className="text-red-500">public static void main</span>(String[] args) {"{"}{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">HashMap</span>
            {"<String, String> capitalCities = "}
            <span className="text-red-500">new</span> HashMap&lt;&gt;();{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(
            <span className="text-purple-400">"England"</span>,{" "}
            <span className="text-purple-400">"London"</span>);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(
            <span className="text-purple-400">"India"</span>,{" "}
            <span className="text-purple-400">"New Delhi"</span>);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(
            <span className="text-purple-400">"Austria"</span>,{" "}
            <span className="text-purple-400">"Wien"</span>);{"\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(
            <span className="text-purple-400">"USA"</span>,{" "}
            <span className="text-purple-400">"Washington DC"</span>);{"\n\n"}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">System.out.println</span>(capitalCities);{"\n"}
            &nbsp;&nbsp;{"}"}
            {"\n}"}
          </code>
        </pre>
      </div>

      {/* Access an Item */}
      <h3 className="text-xl font-semibold mb-3">Access an Item</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
            capitalCities.<span className="text-blue-400">get</span>(
            <span className="text-purple-400">"England"</span>);
          </code>
        </pre>
      </div>

      {/* Remove an Item */}
      <h3 className="text-xl font-semibold mb-3">Remove an Item</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
            capitalCities.<span className="text-blue-400">remove</span>(
            <span className="text-purple-400">"England"</span>);
          </code>
        </pre>
      </div>

      {/* Size */}
      <h3 className="text-xl font-semibold mb-3">HashMap Size</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
            capitalCities.<span className="text-blue-400">size</span>();
          </code>
        </pre>
      </div>

      {/* Loop Example */}
      <h3 className="text-xl font-semibold mb-3">Loop Through HashMap</h3>
      <div className="bg-gray-100 dark:bg-[#0d1117] p-3 rounded-lg border border-gray-300 dark:border-gray-700 mb-6">
        <pre className="font-mono text-sm whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">
          <code>
{`// Print keys
for (`}<span className="text-red-500">String</span> key : capitalCities.keySet()) {"{"}{"\n"}
&nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(key);{"\n"}
{"}"}
{"\n\n"}
// Print values
{"for ("}<span className="text-red-500">String</span> value : capitalCities.values()) {"{"}{"\n"}
&nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(value);{"\n"}
{"}"}
{"\n\n"}
// Print both
{"for ("}<span className="text-red-500">String</span> key : capitalCities.keySet()) {"{"}{"\n"}
&nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(
"key: " + key + " value: " + capitalCities.get(key));{"\n"}
{"}"}
          </code>
        </pre>
      </div>
    </>
  ),
},
  "java_tree_map.asp": {
  title: "Java TreeMap",
  content: (
    <div className="prose dark:prose-invert">
      <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
        Java TreeMap
      </h2>

      <p className="leading-relaxed mb-4">
        A <strong>TreeMap</strong> stores key/value pairs in <strong>sorted order by key</strong>.
        It is part of the <code>java.util</code> package and implements the <code>Map</code> interface.
      </p>

      <p className="leading-relaxed mb-4">
        Tip: Unlike HashMap, which does not maintain order, TreeMap keeps its keys sorted.
      </p>

      <h3 className="text-lg font-semibold mb-2">Create a TreeMap</h3>
      <p className="leading-relaxed mb-4">
        Create a TreeMap that stores String keys and String values:
      </p>

      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          <span className="text-red-500">import</span> java.util.TreeMap;{"\n\n"}
          <span className="text-red-500">public class</span> Main {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-red-500">public static void main</span>(String[] args) {"{"}{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-500">TreeMap&lt;String, String&gt;</span> capitalCities = <span className="text-red-500">new</span> TreeMap&lt;&gt;();{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(<span className="text-purple-400">"England"</span>, <span className="text-purple-400">"London"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(<span className="text-purple-400">"India"</span>, <span className="text-purple-400">"New Delhi"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(<span className="text-purple-400">"Austria"</span>, <span className="text-purple-400">"Wien"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(<span className="text-purple-400">"Norway"</span>, <span className="text-purple-400">"Oslo"</span>);{"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;capitalCities.put(<span className="text-purple-400">"USA"</span>, <span className="text-purple-400">"Washington DC"</span>);{"\n\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(capitalCities);{"\n"}
          &nbsp;&nbsp;{"}"}{"\n"}
          {"}"}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">Access an Item</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          capitalCities.<span className="text-blue-400">get</span>(<span className="text-purple-400">"England"</span>);
        </code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">Remove Items</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          capitalCities.<span className="text-blue-400">remove</span>(<span className="text-purple-400">"England"</span>);
        </code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">Remove All Items</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>capitalCities.<span className="text-blue-400">clear</span>();</code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">TreeMap Size</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>capitalCities.<span className="text-blue-400">size</span>();</code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">Loop Through a TreeMap</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          <span className="text-green-600 dark:text-green-400">// Print keys</span>{"\n"}
          for (<span className="text-red-500">String</span> i : capitalCities.keySet()) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(i);{"\n"}
          {"}"}{"\n\n"}
          <span className="text-green-600 dark:text-green-400">// Print values</span>{"\n"}
          for (<span className="text-red-500">String</span> i : capitalCities.values()) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(i);{"\n"}
          {"}"}{"\n\n"}
          <span className="text-green-600 dark:text-green-400">// Print keys and values</span>{"\n"}
          for (<span className="text-red-500">String</span> i : capitalCities.keySet()) {"{"}{"\n"}
          &nbsp;&nbsp;<span className="text-blue-400">System.out.println</span>(
          <span className="text-purple-400">"key: "</span> + i + <span className="text-purple-400">" value: "</span> + capitalCities.get(i));{"\n"}
          {"}"}
        </code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">TreeMap vs HashMap</h3>
     <table className="table-auto border-collapse border border-gray-300 dark:border-gray-700 mb-6 w-full text-sm">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800">
      <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold text-gray-800 dark:text-gray-200">
        Feature
      </th>
      <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold text-gray-800 dark:text-gray-200">
        HashMap
      </th>
      <th className="border border-gray-300 dark:border-gray-700 px-3 py-2 font-semibold text-gray-800 dark:text-gray-200">
        TreeMap
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Order
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        No guaranteed order
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Sorted by keys
      </td>
    </tr>
    <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Null Keys
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Allows one null key
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Does not allow null keys
      </td>
    </tr>
    <tr className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Performance
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Faster (no sorting)
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100">
        Slower (maintains sorted order)
      </td>
    </tr>
  </tbody>
</table>

      <h3 className="text-lg font-semibold mb-2">The var Keyword</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          <span className="text-green-600 dark:text-green-400">// Without var</span>{"\n"}
          TreeMap&lt;String, String&gt; capitalCities = <span className="text-red-500">new</span> TreeMap&lt;&gt;();{"\n\n"}
          <span className="text-green-600 dark:text-green-400">// With var</span>{"\n"}
          <span className="text-red-500">var</span> capitalCities = <span className="text-red-500">new</span> TreeMap&lt;String, String&gt;();
        </code>
      </pre>

      <h3 className="text-lg font-semibold mb-2">The Map Interface</h3>
      <pre className="font-mono text-sm whitespace-pre-wrap break-words bg-gray-100 dark:bg-[#0d1117] p-3 border border-gray-300 dark:border-gray-700 rounded mb-6 text-gray-800 dark:text-gray-200">
        <code>
          <span className="text-red-500">import</span> java.util.Map;{"\n"}
          <span className="text-red-500">import</span> java.util.TreeMap;{"\n\n"}
          Map&lt;String, String&gt; capitalCities = <span className="text-red-500">new</span> TreeMap&lt;&gt;();
        </code>
      </pre>
    </div>
  ),
},
};



 