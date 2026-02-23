import React from "react";

const BasicSyntax: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Basic Syntax in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      R is the most popular language used for Statistical Computing and Data Analysis with the support
      of over 10,000+ free packages in the CRAN repository. Like any other programming language, R has
      a specific syntax which is important to understand if you want to make use of its features.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Components of R Program</h2>

    <p className="leading-relaxed mt-3">
      A program in R is made up of three things:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Variables:</b> Used to store the data</li>
      <li><b>Comments:</b> Used to improve code readability</li>
      <li><b>Keywords:</b> Reserved words that hold a specific meaning to the compiler</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Variables in R</h2>

    <p className="leading-relaxed mt-3">
      Variables are the name given to reserved memory locations that can store any type of data.
      In R, the assignment can be denoted in three ways:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">=</code> (Simple Assignment)</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;-</code> (Leftward Assignment)</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">-&gt;</code> (Rightward Assignment)</li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Simple Assignment
var1 = "Simple Assignment"
print(var1)

# Leftward Assignment
var2 <- "Leftward Assignment!"
print(var2)

# Rightward Assignment
"Rightward Assignment" -> var3
print(var3)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`"Simple Assignment"
"Leftward Assignment!"
"Rightward Assignment"`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      <b>Note:</b> The rightward assignment is less common and can be confusing for some programmers,
      so it is generally recommended to use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&lt;-</code> or
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">=</code> operator for assigning values in R.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Comments in R</h2>

    <p className="leading-relaxed mt-3">
      Comments are a way to improve your code's readability and are only meant for the user so the
      interpreter ignores them. Only single-line comments are available in R.
      Single line comments can be written by using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#</code> at the beginning of the statement.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# This is a single line comment
x <- 5  # This is an inline comment

# Multiple lines can be commented like this:
# Line 1 of comment
# Line 2 of comment
# Line 3 of comment`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Keywords in R</h2>

    <p className="leading-relaxed mt-3">
      Keywords are the words reserved by a program because they have a special meaning. A keyword
      can't be used as a variable name, function name, etc. You can view these keywords by using
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">help(reserved)</code> or
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">?reserved</code>.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# View reserved keywords
help(reserved)
?reserved`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Reserved Keywords in R:</h3>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Control-flow statements:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">if</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">else</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">repeat</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">while</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">function</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">for</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">in</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">next</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">break</code></li>
      <li><b>Boolean constants:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">TRUE</code>, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">FALSE</code></li>
      <li><b>Special values:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">NaN</code> (Not a Number), <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">NULL</code> (Undefined value), <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Inf</code> (Infinity)</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Running R Code</h2>

    <p className="leading-relaxed mt-3">
      You can run R code using RStudio or the R command prompt. To launch the R interpreter, type the following in your terminal:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`R`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      To run an R script file (e.g., myFile.R) from the command line:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`Rscript myFile.R`}</pre>
    </div>
  </>
);

export default BasicSyntax;
