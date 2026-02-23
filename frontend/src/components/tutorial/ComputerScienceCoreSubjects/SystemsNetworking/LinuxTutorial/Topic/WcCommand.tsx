import React from "react";

const WcCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      wc Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      wc (word count) counts lines, words, and characters in files. It is simple
      but extremely useful for quick text statistics.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Count lines, words, and characters
$ wc file.txt
  50  200 1500 file.txt
# 50 lines, 200 words, 1500 characters

# Count lines only
$ wc -l file.txt

# Count words only
$ wc -w file.txt

# Count characters/bytes
$ wc -c file.txt      # Bytes
$ wc -m file.txt      # Characters

# Multiple files
$ wc *.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Uses</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Count files in directory
$ ls | wc -l

# Count running processes
$ ps aux | wc -l

# Count lines of code
$ find . -name "*.py" | xargs wc -l`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>wc shows lines, words, characters by default</li>
        <li>Use -l for lines only (most common)</li>
        <li>Combine with pipes to count output lines</li>
        <li>Useful for quick statistics and counting</li>
      </ul>
    </div>
  </div>
);

export default WcCommand;
