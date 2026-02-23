import React from "react";

const JavaGetStarted: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Getting Started
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      To start programming in Java, you need to set up your development environment. This involves
      installing the <b>Java Development Kit (JDK)</b> and optionally an <b>Integrated Development
      Environment (IDE)</b>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Step 1: Install the JDK</h2>
    <p className="leading-relaxed mt-3">
      The JDK contains everything you need to compile and run Java programs, including the Java
      compiler (<code className="bg-gray-200 px-1 rounded">javac</code>) and the Java Runtime Environment (JRE).
    </p>

    <h3 className="text-xl font-semibold mt-4">Download Options:</h3>
    <ul className="list-disc pl-6 mt-3 space-y-2">
      <li><b>Oracle JDK:</b> Official JDK from Oracle (requires license for commercial use)</li>
      <li><b>OpenJDK:</b> Open-source implementation (free for all uses)</li>
      <li><b>Amazon Corretto:</b> Free, production-ready distribution of OpenJDK</li>
      <li><b>Eclipse Temurin:</b> Adoptium's free OpenJDK distribution</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Installation Steps (Windows):</h3>
    <ol className="list-decimal pl-6 mt-3 space-y-2">
      <li>Download the JDK installer from the official website</li>
      <li>Run the installer and follow the prompts</li>
      <li>Set the JAVA_HOME environment variable to your JDK installation path</li>
      <li>Add the JDK's bin directory to your system PATH</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Verify Installation:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`# Check Java version
java -version

# Check Java compiler version
javac -version`}
      </pre>
    </div>

    <p className="leading-relaxed mt-3">
      Expected output should show the installed Java version (e.g., java version "21.0.1").
    </p>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Step 2: Choose an IDE</h2>
    <p className="leading-relaxed mt-3">
      While you can write Java code in any text editor, an IDE provides features like code
      completion, debugging, and project management that significantly improve productivity.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">IDE</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">IntelliJ IDEA</td><td className="border p-2">Powerful, feature-rich IDE by JetBrains</td><td className="border p-2">Professional development</td></tr>
          <tr><td className="border p-2">Eclipse</td><td className="border p-2">Free, open-source IDE with extensive plugins</td><td className="border p-2">Enterprise Java</td></tr>
          <tr><td className="border p-2">VS Code</td><td className="border p-2">Lightweight editor with Java extensions</td><td className="border p-2">Quick projects, learning</td></tr>
          <tr><td className="border p-2">NetBeans</td><td className="border p-2">Official Oracle IDE, easy to use</td><td className="border p-2">Beginners</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Step 3: Write Your First Program</h2>
    <p className="leading-relaxed mt-3">
      Create a file named <code className="bg-gray-200 px-1 rounded">HelloWorld.java</code> with the following code:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
      <p className="font-semibold">Important!</p>
      <p className="mt-2">
        The filename must match the public class name exactly, including capitalization.
        A file containing <code className="bg-gray-200 px-1 rounded">public class HelloWorld</code> must be named
        <code className="bg-gray-200 px-1 rounded">HelloWorld.java</code>.
      </p>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Step 4: Compile and Run</h2>
    <p className="leading-relaxed mt-3">
      Open a terminal or command prompt in the directory containing your Java file:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`# Compile the Java file
javac HelloWorld.java

# Run the compiled class
java HelloWorld`}
      </pre>
    </div>

    <p className="leading-relaxed mt-3">
      Output:
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>{`Hello, World!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Understanding the Code</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class HelloWorld {
    // Class declaration - every Java program needs at least one class

    public static void main(String[] args) {
        // main method - entry point of the program
        // public: accessible from anywhere
        // static: can be called without creating an object
        // void: returns nothing
        // String[] args: command-line arguments

        System.out.println("Hello, World!");
        // System: built-in class
        // out: output stream
        // println: print line method
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Java Single-File Source-Code (Java 11+)</h2>
    <p className="leading-relaxed mt-3">
      Starting from Java 11, you can run single-file programs directly without explicit compilation:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`# Run directly (Java 11+)
java HelloWorld.java`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">JShell - Interactive Java (Java 9+)</h2>
    <p className="leading-relaxed mt-3">
      JShell is a REPL (Read-Eval-Print Loop) tool for quickly testing Java code snippets:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`# Start JShell
jshell

# In JShell:
jshell> System.out.println("Hello from JShell!")
Hello from JShell!

jshell> int x = 10
x ==> 10

jshell> x * 5
$2 ==> 50

jshell> /exit`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Tip for Beginners</p>
      <p className="mt-2">
        Start with a simple IDE like VS Code or IntelliJ IDEA Community Edition. They provide
        helpful features like syntax highlighting, error detection, and code suggestions that
        make learning Java easier.
      </p>
    </div>
  </div>
);

export default JavaGetStarted;
