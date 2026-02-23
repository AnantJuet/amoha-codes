import React from "react";

const CppGetStarted: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Getting Started with C++
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Before you can start writing C++ programs, you need to set up a development environment.
        This guide will walk you through installing a C++ compiler and choosing an IDE or text
        editor to write your code.
      </p>

      {/* What You Need */}
      <h2 className="text-2xl font-bold mt-6">What You Need</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>C++ Compiler:</strong> Translates your C++ code into machine-executable code
        </li>
        <li>
          <strong>Text Editor or IDE:</strong> Where you write and edit your code
        </li>
        <li>
          <strong>Terminal/Command Prompt:</strong> To compile and run programs
        </li>
      </ul>

      {/* Popular Compilers */}
      <h2 className="text-2xl font-bold mt-6">Popular C++ Compilers</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Compiler</th>
              <th className="text-left px-4 py-2 border">Platform</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">GCC (g++)</td>
              <td className="px-4 py-2 border">Linux, macOS, Windows</td>
              <td className="px-4 py-2 border">GNU Compiler Collection - free and open source</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Clang</td>
              <td className="px-4 py-2 border">Linux, macOS, Windows</td>
              <td className="px-4 py-2 border">Part of LLVM project - fast compilation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">MSVC</td>
              <td className="px-4 py-2 border">Windows</td>
              <td className="px-4 py-2 border">Microsoft Visual C++ Compiler</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">MinGW</td>
              <td className="px-4 py-2 border">Windows</td>
              <td className="px-4 py-2 border">Minimalist GNU for Windows</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Windows Setup */}
      <h2 className="text-2xl font-bold mt-6">Setting Up on Windows</h2>

      <h3 className="text-xl font-semibold mt-4">Option 1: MinGW-w64</h3>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>
          Download MinGW-w64 from{" "}
          <span className="text-blue-600">https://www.mingw-w64.org/</span>
        </li>
        <li>Run the installer and select your architecture (x86_64 for 64-bit)</li>
        <li>
          Add MinGW bin folder to System PATH:
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Right-click "This PC" → Properties → Advanced system settings</li>
            <li>Click "Environment Variables"</li>
            <li>Under "System variables", find "Path" and click "Edit"</li>
            <li>Add the MinGW bin directory (e.g., C:\mingw64\bin)</li>
          </ul>
        </li>
        <li>Verify installation by opening Command Prompt and typing:</li>
      </ol>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`g++ --version`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Option 2: Visual Studio</h3>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>
          Download Visual Studio from{" "}
          <span className="text-blue-600">https://visualstudio.microsoft.com/</span>
        </li>
        <li>During installation, select "Desktop development with C++"</li>
        <li>Visual Studio includes MSVC compiler and a full-featured IDE</li>
      </ol>

      {/* macOS Setup */}
      <h2 className="text-2xl font-bold mt-6">Setting Up on macOS</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>Open Terminal</li>
        <li>Install Xcode Command Line Tools:</li>
      </ol>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`xcode-select --install`}
      </pre>
      <p className="mt-3">This installs the Clang compiler. Verify with:</p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`clang++ --version
# or
g++ --version  # g++ is aliased to clang on macOS`}
      </pre>

      {/* Linux Setup */}
      <h2 className="text-2xl font-bold mt-6">Setting Up on Linux</h2>
      <p className="leading-relaxed">
        Most Linux distributions come with GCC pre-installed. If not, install it using your
        package manager:
      </p>

      <h3 className="text-xl font-semibold mt-4">Ubuntu/Debian:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`sudo apt update
sudo apt install build-essential`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Fedora:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`sudo dnf install gcc-c++`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Arch Linux:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`sudo pacman -S gcc`}
      </pre>

      <p className="mt-3">Verify installation:</p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`g++ --version`}
      </pre>

      {/* Popular IDEs */}
      <h2 className="text-2xl font-bold mt-6">Popular IDEs and Text Editors</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">IDE/Editor</th>
              <th className="text-left px-4 py-2 border">Platform</th>
              <th className="text-left px-4 py-2 border">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Visual Studio Code</td>
              <td className="px-4 py-2 border">All</td>
              <td className="px-4 py-2 border">
                Free, lightweight, excellent C++ extensions
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Visual Studio</td>
              <td className="px-4 py-2 border">Windows, macOS</td>
              <td className="px-4 py-2 border">Full-featured IDE with debugger</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">CLion</td>
              <td className="px-4 py-2 border">All</td>
              <td className="px-4 py-2 border">
                JetBrains IDE, smart code completion (paid)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Code::Blocks</td>
              <td className="px-4 py-2 border">All</td>
              <td className="px-4 py-2 border">Free, beginner-friendly IDE</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Dev-C++</td>
              <td className="px-4 py-2 border">Windows</td>
              <td className="px-4 py-2 border">Simple IDE for beginners</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Sublime Text</td>
              <td className="px-4 py-2 border">All</td>
              <td className="px-4 py-2 border">Fast, lightweight text editor</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* First Program */}
      <h2 className="text-2xl font-bold mt-6">Your First C++ Program</h2>
      <p className="leading-relaxed">
        Let's create the classic "Hello, World!" program:
      </p>

      <h3 className="text-xl font-semibold mt-4">Step 1: Create a File</h3>
      <p>
        Create a new file called <code className="bg-gray-200 px-2 py-1 rounded">hello.cpp</code>
      </p>

      <h3 className="text-xl font-semibold mt-4">Step 2: Write the Code</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Step 3: Compile the Program</h3>
      <p>Open terminal/command prompt and navigate to your file's directory:</p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`# Using g++
g++ hello.cpp -o hello

# Using clang++
clang++ hello.cpp -o hello`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Step 4: Run the Program</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`# On Windows
hello.exe

# On macOS/Linux
./hello`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Expected Output:</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`Hello, World!`}
      </pre>

      {/* Common Compilation Options */}
      <h2 className="text-2xl font-bold mt-6">Common Compilation Options</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Option</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-mono">-o filename</td>
              <td className="px-4 py-2 border">Specify output file name</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-Wall</td>
              <td className="px-4 py-2 border">Enable all warnings</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-g</td>
              <td className="px-4 py-2 border">Include debugging information</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-O2</td>
              <td className="px-4 py-2 border">Enable optimization (level 2)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-std=c++17</td>
              <td className="px-4 py-2 border">Use C++17 standard</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-mono">-std=c++20</td>
              <td className="px-4 py-2 border">Use C++20 standard</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">Example with multiple options:</p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`g++ -Wall -std=c++17 -o myprogram source.cpp`}
      </pre>

      {/* Online Compilers */}
      <h2 className="text-2xl font-bold mt-6">Online C++ Compilers</h2>
      <p className="leading-relaxed">
        If you want to try C++ without installing anything, use these online compilers:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Compiler Explorer (Godbolt):</strong> godbolt.org - See assembly output
        </li>
        <li>
          <strong>OnlineGDB:</strong> onlinegdb.com - Debug online
        </li>
        <li>
          <strong>Replit:</strong> replit.com - Collaborative coding
        </li>
        <li>
          <strong>Programiz:</strong> programiz.com/cpp-programming/online-compiler
        </li>
        <li>
          <strong>cpp.sh:</strong> cpp.sh - Simple and fast
        </li>
      </ul>

      {/* VS Code Setup */}
      <h2 className="text-2xl font-bold mt-6">Setting Up VS Code for C++</h2>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>
          Install Visual Studio Code from{" "}
          <span className="text-blue-600">code.visualstudio.com</span>
        </li>
        <li>
          Install the "C/C++" extension by Microsoft (provides IntelliSense, debugging)
        </li>
        <li>Install "Code Runner" extension for easy execution</li>
        <li>
          Configure build tasks using <code className="bg-gray-200 px-1 rounded">tasks.json</code>
        </li>
      </ol>

      {/* Tip Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Tip:</strong> Always compile with the <code className="bg-gray-200 px-1 rounded">-Wall</code>{" "}
        flag to catch potential issues early. It enables all compiler warnings which helps you
        write better code.
      </div>

      {/* Troubleshooting */}
      <h2 className="text-2xl font-bold mt-6">Common Issues and Solutions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">"g++ is not recognized"</h3>
          <p className="ml-4">
            The compiler is not in your PATH. Re-add the MinGW bin directory to system PATH.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">"Permission denied" on Linux/macOS</h3>
          <p className="ml-4">
            Make the output executable: <code className="bg-gray-200 px-1 rounded">chmod +x ./hello</code>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">"undefined reference" errors</h3>
          <p className="ml-4">
            Usually means missing library. Make sure all necessary files are compiled together.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> You now have a C++ development environment set up and have
        created your first program. In the next sections, we'll dive into the fundamentals of
        C++ programming starting with variables and data types.
      </div>
    </div>
  );
};

export default CppGetStarted;
