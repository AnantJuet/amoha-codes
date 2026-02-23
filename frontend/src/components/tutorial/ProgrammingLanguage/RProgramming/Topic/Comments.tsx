import React from "react";

const Comments: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Comments in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      In R Programming Language, comments are general English statements that are typically written
      in a program to describe what it does or what a piece of code is designed to perform. They are
      completely ignored by the compiler and are thus never reflected in the output.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Types of Comments</h2>

    <p className="leading-relaxed mt-3">
      There are generally three types of comments supported by programming languages:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Single-line Comments:</b> Comments that only need one line</li>
      <li><b>Multi-line Comments:</b> Comments that require more than one line</li>
      <li><b>Documentation Comments:</b> Comments that are drafted usually for quick documentation lookup</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Single-line Comments</h2>

    <p className="leading-relaxed mt-3">
      Single-line comments are comments that require only one line. They are usually drafted to explain
      what a single line of code does. Just like Python, any statement starting with
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">#</code> is a comment in R.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# This is a single-line comment
# geeksforgeeks

x <- 5  # This is an inline comment
print(x)`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      The above code when executed will only print the value of x. R will consider the statement
      starting with # as a comment and hence the compiler will ignore those lines.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Multi-line Comments</h2>

    <p className="leading-relaxed mt-3">
      R doesn't support multi-line comments directly, but to make the commenting process easier,
      R allows commenting on multiple single lines at once. There are two ways to add multiple
      single-line comments in RStudio:
    </p>

    <h3 className="text-xl font-bold mt-6">Method 1: Using Keyboard Shortcut</h3>

    <p className="leading-relaxed mt-3">
      Select the multiple lines on which you want to comment using the cursor and then use the key combination:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`Ctrl + Shift + C`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      This shortcut will comment or uncomment the selected lines.
    </p>

    <h3 className="text-xl font-bold mt-6">Method 2: Using the GUI</h3>

    <p className="leading-relaxed mt-3">
      Select the lines on which you want to comment by using the cursor and click on "Code" in the menu.
      A pop-up window will appear where you need to select "Comment/Uncomment Lines" which appropriately
      comments or uncomments the lines you have selected.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example: Multiple Line Comments</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# This is line 1 of comment
# This is line 2 of comment
# This is line 3 of comment

x <- 10
y <- 20
# Adding two numbers
result <- x + y
print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 30`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Uses of Comments</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Code Readability:</b> Comments make code easier to understand for other developers</li>
      <li><b>Explanation of the code or Metadata:</b> Describe the purpose and functionality of code sections</li>
      <li><b>Prevent execution of code:</b> Temporarily disable code without deleting it (useful for debugging)</li>
      <li><b>To include resources:</b> Add references or documentation links</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Best Practices</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>Write clear and concise comments</li>
      <li>Update comments when you update the code</li>
      <li>Don't state the obvious - comment on the "why", not the "what"</li>
      <li>Use comments to explain complex algorithms or business logic</li>
      <li>Add comments at the beginning of functions to describe their purpose</li>
    </ul>
  </>
);

export default Comments;
