import React from "react";

const SedCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      sed Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      sed (Stream Editor) is a powerful text processing tool for parsing and
      transforming text. It can perform text substitution, deletion, insertion,
      and more complex transformations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Substitution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax: s/old/new/
$ sed 's/old/new/' file.txt           # First occurrence per line

# Global replacement
$ sed 's/old/new/g' file.txt          # All occurrences

# Case insensitive
$ sed 's/old/new/gi' file.txt

# Edit file in place
$ sed -i 's/old/new/g' file.txt

# Backup before in-place edit
$ sed -i.bak 's/old/new/g' file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Line Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Delete lines
$ sed '3d' file.txt                   # Delete line 3
$ sed '2,5d' file.txt                 # Delete lines 2-5
$ sed '/pattern/d' file.txt           # Delete lines matching pattern

# Print specific lines
$ sed -n '5p' file.txt                # Print line 5
$ sed -n '10,20p' file.txt            # Print lines 10-20

# Insert/append
$ sed '3i New line' file.txt          # Insert before line 3
$ sed '3a New line' file.txt          # Append after line 3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Ranges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Apply to specific lines
$ sed '5s/old/new/' file.txt          # Only line 5
$ sed '1,10s/old/new/g' file.txt      # Lines 1-10
$ sed '/start/,/end/s/old/new/g' file.txt  # Between patterns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>s/old/new/ substitutes first occurrence per line</li>
        <li>Add g flag for global replacement</li>
        <li>Use -i to edit files in place</li>
        <li>Use -n with p to print only matching lines</li>
        <li>Can use different delimiters: s|old|new|</li>
      </ul>
    </div>
  </div>
);

export default SedCommand;
