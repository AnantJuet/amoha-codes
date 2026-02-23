import React from "react";

const CGetStarted: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Get Started</h1>

    <h2 className="text-2xl font-bold mt-6">Get Started With C</h2>
    <p>
      To start using C, you need two things:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>A text editor, like Notepad, VS Code, or Sublime Text, to write C code</li>
      <li>A compiler, like GCC, to translate the C code into a language that the computer will understand</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">C Install IDE</h2>
    <p>
      An IDE (Integrated Development Environment) is used to edit AND compile the code. Popular IDEs include Code::Blocks, Eclipse, and Visual Studio.
    </p>
    <p className="mt-3">
      These are all free, and they can be used to both edit and debug C code.
    </p>

    <h2 className="text-2xl font-bold mt-6">Installing GCC on Different Platforms</h2>

    <h3 className="text-xl font-semibold mt-4">Windows</h3>
    <p>
      Install MinGW (Minimalist GNU for Windows):
    </p>
    <ol className="list-decimal ml-6 mt-3 space-y-2">
      <li>Download MinGW from the official website</li>
      <li>Run the installer and select gcc-core, gcc-g++, binutils, and the MinGW runtime</li>
      <li>Add MinGW's bin directory to your system PATH</li>
      <li>Verify installation by running <code>gcc --version</code> in Command Prompt</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">macOS</h3>
    <p>
      Install Xcode Command Line Tools:
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`xcode-select --install`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Linux</h3>
    <p>
      GCC is usually pre-installed. If not, install it using:
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Debian/Ubuntu
sudo apt-get install gcc

# Fedora
sudo dnf install gcc

# Arch Linux
sudo pacman -S gcc`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">C Quickstart</h2>
    <p>
      Let's create our first C file. Open your text editor and write the following code:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}`}
    </pre>

    <p className="mt-3">
      Save the file as <code>myfirstprogram.c</code>
    </p>

    <h2 className="text-2xl font-bold mt-6">Compile and Run</h2>
    <p>
      Open a terminal/command prompt, navigate to the directory where you saved the file, and type:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`gcc myfirstprogram.c -o myfirstprogram`}
    </pre>

    <p className="mt-3">
      This will compile your code. If there are no errors, a new executable file will be created.
    </p>

    <p className="mt-3">
      To run the program, type:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Windows
myfirstprogram.exe

# macOS/Linux
./myfirstprogram`}
    </pre>

    <h3 className="text-lg font-semibold mt-3">Result:</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`Hello World!`}
    </pre>

    <p className="mt-4">
      <b>Congratulations!</b> You have now written and executed your first C program.
    </p>
  </div>
);

export default CGetStarted;
