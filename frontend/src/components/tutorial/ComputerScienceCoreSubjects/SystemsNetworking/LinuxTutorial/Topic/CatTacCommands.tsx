import React from "react";

const CatTacCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      cat and tac Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      cat (concatenate) displays file contents and combines files. tac (cat reversed)
      displays file contents in reverse order, line by line.
    </p>

    <h2 className="text-3xl font-bold mt-8">cat Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display file contents
$ cat file.txt

# Display with line numbers
$ cat -n file.txt

# Number only non-blank lines
$ cat -b file.txt

# Show tabs as ^I
$ cat -T file.txt

# Show end of lines as $
$ cat -E file.txt

# Show all (tabs, end of lines, non-printing)
$ cat -A file.txt

# Concatenate multiple files
$ cat file1.txt file2.txt

# Create file
$ cat > newfile.txt
Type content here
Press Ctrl+D to save

# Append to file
$ cat >> existingfile.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">tac Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display file in reverse order
$ tac file.txt

# Example
$ cat numbers.txt
1
2
3

$ tac numbers.txt
3
2
1

# Useful for reading log files from newest to oldest
$ tac /var/log/syslog | head -20`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>cat displays files, tac reverses lines</li>
        <li>Use -n to show line numbers</li>
        <li>Use -A to show all special characters</li>
        <li>cat can create and concatenate files</li>
      </ul>
    </div>
  </div>
);

export default CatTacCommands;
