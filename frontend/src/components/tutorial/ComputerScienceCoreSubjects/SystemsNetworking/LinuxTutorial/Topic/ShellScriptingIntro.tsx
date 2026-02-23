import React from "react";

const ShellScriptingIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Shell Scripting
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shell scripting allows you to automate tasks by writing sequences of commands
      in a file. Scripts can include variables, conditions, loops, and functions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Creating Your First Script</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`#!/bin/bash
# This is a comment
# My first shell script

echo "Hello, World!"
echo "Today is $(date)"
echo "Current user: $USER"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Running Scripts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Make executable
$ chmod +x script.sh

# Run the script
$ ./script.sh

# Or run with bash
$ bash script.sh`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Shebang Line</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        The first line <code className="font-mono text-gray-900">#!/bin/bash</code> is called the shebang.
        It tells the system which interpreter to use. Common shebangs:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><code className="font-mono text-gray-900">#!/bin/bash</code> - Bash shell</li>
        <li><code className="font-mono text-gray-900">#!/bin/sh</code> - POSIX shell</li>
        <li><code className="font-mono text-gray-900">#!/usr/bin/env bash</code> - Portable bash</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Start scripts with #!/bin/bash (shebang)</li>
        <li>Make scripts executable with chmod +x</li>
        <li>Use # for comments</li>
        <li>Scripts automate repetitive tasks</li>
      </ul>
    </div>
  </div>
);

export default ShellScriptingIntro;
