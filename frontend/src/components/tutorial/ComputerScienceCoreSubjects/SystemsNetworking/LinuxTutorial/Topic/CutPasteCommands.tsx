import React from "react";

const CutPasteCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      cut and paste Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      cut extracts sections from lines of files, while paste merges lines of files
      side by side. Both are useful for working with delimited data.
    </p>

    <h2 className="text-3xl font-bold mt-8">cut Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Cut by delimiter and field
$ cut -d':' -f1 /etc/passwd        # First field, colon delimiter
$ cut -d',' -f1,3 data.csv         # Fields 1 and 3

# Cut by character position
$ cut -c1-10 file.txt              # Characters 1-10
$ cut -c5- file.txt                # From character 5 to end

# Multiple fields
$ cut -d':' -f1,3,5 /etc/passwd`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">paste Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Merge files side by side
$ paste file1.txt file2.txt

# Custom delimiter
$ paste -d',' file1.txt file2.txt

# Merge lines of same file
$ paste -s file.txt               # All lines on one line`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>cut extracts columns using -d (delimiter) and -f (field)</li>
        <li>cut -c extracts by character position</li>
        <li>paste merges files horizontally (side by side)</li>
        <li>Use -d with paste to set output delimiter</li>
      </ul>
    </div>
  </div>
);

export default CutPasteCommands;
