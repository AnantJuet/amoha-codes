import React from "react";

const HelloWorld: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Hello World in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      The "Hello World" program is typically the first program written when learning any programming language.
      It's a simple program that outputs the text "Hello World" to the screen.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Hello World Program</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`print("Hello World")`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello World"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Prerequisites</h2>

    <p className="leading-relaxed mt-3">Before running R programs, you need:</p>

    <ol className="list-decimal list-inside mt-4 space-y-2">
      <li>Go to the official site of R programming and download R for Windows (or Mac).</li>
      <li>Install an IDE like RStudio, RTVS, or StatET for running programs (you need to download R before installing the IDE).</li>
    </ol>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Methods to Run Hello World Program</h2>

    <h3 className="text-xl font-bold mt-6">Method 1: Using Command Prompt or Terminal</h3>

    <p className="leading-relaxed mt-3">
      Write your code in notepad or any text editor, save it as "helloworld.r", then run it in
      command prompt or terminal using the command:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`Rscript helloworld.r`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Method 2: Using an Online IDE</h3>

    <p className="leading-relaxed mt-3">
      There are many online IDEs available where you can run R code without installing anything.
      Some popular options include:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>Replit</li>
      <li>OnlineGDB</li>
      <li>JDoodle</li>
      <li>Tutorialspoint R Compiler</li>
    </ul>

    <h3 className="text-xl font-bold mt-6">Method 3: Using RStudio IDE</h3>

    <p className="leading-relaxed mt-3">
      You can download and install RStudio in your system and write and run the program there.
      RStudio is available for Windows, Mac, and Linux.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Different Ways to Print in R</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using print() function
print("Hello World")

# Using cat() function
cat("Hello World")

# Using paste() function with print()
print(paste("Hello", "World"))

# Direct output (in interactive mode)
"Hello World"`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello World"
Hello World
[1] "Hello World"
[1] "Hello World"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Explanation</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">print()</code> - Standard function to print output with quotes</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cat()</code> - Concatenates and prints without quotes</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">paste()</code> - Combines strings together</li>
    </ul>
  </>
);

export default HelloWorld;
