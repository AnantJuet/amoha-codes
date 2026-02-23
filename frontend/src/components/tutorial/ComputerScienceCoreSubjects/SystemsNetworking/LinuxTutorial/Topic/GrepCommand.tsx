import React from "react";

const GrepCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      grep Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      grep (Global Regular Expression Print) searches for patterns in files and
      displays matching lines. It supports regular expressions and is one of the
      most powerful text processing tools in Linux.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Search for pattern in file
$ grep "error" logfile.txt

# Case insensitive search
$ grep -i "error" logfile.txt

# Show line numbers
$ grep -n "error" logfile.txt

# Count matches
$ grep -c "error" logfile.txt

# Recursive search in directory
$ grep -r "pattern" /path/to/dir/

# Invert match (show non-matching lines)
$ grep -v "pattern" file.txt

# Show only matching part
$ grep -o "pattern" file.txt

# Show context lines
$ grep -A 3 "pattern" file.txt    # 3 lines After
$ grep -B 3 "pattern" file.txt    # 3 lines Before
$ grep -C 3 "pattern" file.txt    # 3 lines Context (both)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Regular Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Extended regex (-E or egrep)
$ grep -E "error|warning" file.txt

# Word boundary
$ grep -w "error" file.txt      # Matches "error" not "errors"

# Start/end of line
$ grep "^error" file.txt        # Lines starting with error
$ grep "error$" file.txt        # Lines ending with error

# Any character
$ grep "err.r" file.txt         # err followed by any char then r

# Multiple characters
$ grep "err.*" file.txt         # err followed by anything`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-i</td>
            <td className="p-3 border">Case insensitive</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Invert match</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-n</td>
            <td className="p-3 border">Show line numbers</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-r</td>
            <td className="p-3 border">Recursive search</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-l</td>
            <td className="p-3 border">Show only filenames</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-E</td>
            <td className="p-3 border">Extended regex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>grep searches for patterns and prints matching lines</li>
        <li>Use -i for case-insensitive, -v to invert</li>
        <li>Use -r for recursive directory search</li>
        <li>Use -E for extended regular expressions</li>
        <li>Combine with pipes for powerful text processing</li>
      </ul>
    </div>
  </div>
);

export default GrepCommand;
