import React from "react";

const SortUniqCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      sort and uniq Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      sort orders lines of text files, while uniq filters or reports repeated lines.
      They are often used together, as uniq requires sorted input to work correctly.
    </p>

    <h2 className="text-3xl font-bold mt-8">sort Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic sort (alphabetical)
$ sort file.txt

# Reverse order
$ sort -r file.txt

# Numeric sort
$ sort -n numbers.txt

# Sort by column
$ sort -k2 file.txt           # Sort by column 2
$ sort -k2 -n file.txt        # Numeric sort by column 2

# Unique values only
$ sort -u file.txt

# Case insensitive
$ sort -f file.txt

# Sort in place
$ sort -o file.txt file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">uniq Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Remove adjacent duplicate lines (requires sorted input!)
$ sort file.txt | uniq

# Count occurrences
$ sort file.txt | uniq -c

# Show only duplicates
$ sort file.txt | uniq -d

# Show only unique lines
$ sort file.txt | uniq -u

# Case insensitive
$ sort file.txt | uniq -i`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Combinations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Count unique values sorted by frequency
$ sort file.txt | uniq -c | sort -rn

# Find most common entries
$ sort file.txt | uniq -c | sort -rn | head -10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>sort orders lines; use -n for numbers, -r for reverse</li>
        <li>uniq removes adjacent duplicates - requires sorted input</li>
        <li>uniq -c counts occurrences</li>
        <li>Combine sort | uniq for unique sorted values</li>
      </ul>
    </div>
  </div>
);

export default SortUniqCommands;
