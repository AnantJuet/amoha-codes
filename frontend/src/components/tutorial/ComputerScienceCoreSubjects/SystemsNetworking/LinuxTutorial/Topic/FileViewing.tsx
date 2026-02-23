import React from "react";

const FileViewing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Viewing File Contents
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux provides several commands for viewing file contents without modifying them.
      Each command has specific use cases depending on file size and what portion
      of the file you need to view.
    </p>

    <h2 className="text-3xl font-bold mt-8">Quick Reference</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">cat</td>
            <td className="p-3 border">Small files</td>
            <td className="p-3 border">Display entire file content</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">less</td>
            <td className="p-3 border">Large files</td>
            <td className="p-3 border">Scrollable, paginated view</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">more</td>
            <td className="p-3 border">Large files</td>
            <td className="p-3 border">Basic pagination (older)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">head</td>
            <td className="p-3 border">File beginning</td>
            <td className="p-3 border">View first N lines</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">tail</td>
            <td className="p-3 border">File end, logs</td>
            <td className="p-3 border">View last N lines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">cat Command</h2>
    <p className="leading-relaxed">
      The cat (concatenate) command displays file contents and can combine multiple files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display file contents
$ cat file.txt

# Display with line numbers
$ cat -n file.txt
     1  First line
     2  Second line
     3  Third line

# Number only non-blank lines
$ cat -b file.txt

# Show tabs as ^I and end of lines as $
$ cat -A file.txt

# Concatenate multiple files
$ cat file1.txt file2.txt

# Create file from stdin
$ cat > newfile.txt
Type content here
Press Ctrl+D to save

# Append to file
$ cat >> existingfile.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">less Command</h2>
    <p className="leading-relaxed">
      The less command provides a scrollable, searchable view of files - ideal for large files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Open file in less
$ less filename.txt

# Navigation keys within less:
# Space or f    - Forward one page
# b             - Back one page
# Enter or j    - Forward one line
# k             - Back one line
# g             - Go to beginning
# G             - Go to end
# /pattern      - Search forward
# ?pattern      - Search backward
# n             - Next search result
# N             - Previous search result
# q             - Quit

# Open with line numbers
$ less -N filename.txt

# Ignore case in searches
$ less -i filename.txt`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">less vs more:</p>
      <p className="mt-2">
        <code className="font-mono text-gray-900">less</code> is more powerful - it allows backward
        navigation and does not load the entire file into memory. Remember: "less is more"
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">head Command</h2>
    <p className="leading-relaxed">
      The head command displays the beginning of files (default: first 10 lines).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display first 10 lines (default)
$ head file.txt

# Display first N lines
$ head -n 20 file.txt
$ head -20 file.txt        # Shorthand

# Display first N bytes
$ head -c 100 file.txt

# Display multiple files
$ head file1.txt file2.txt
==> file1.txt <==
(first 10 lines)

==> file2.txt <==
(first 10 lines)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">tail Command</h2>
    <p className="leading-relaxed">
      The tail command displays the end of files - especially useful for log files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display last 10 lines (default)
$ tail file.txt

# Display last N lines
$ tail -n 20 file.txt
$ tail -20 file.txt        # Shorthand

# Follow file (real-time updates) - great for logs!
$ tail -f /var/log/syslog

# Follow with retry (if file is recreated)
$ tail -F /var/log/syslog

# Display last N bytes
$ tail -c 100 file.txt

# Start from line N (skip first N-1 lines)
$ tail -n +5 file.txt      # Start from line 5`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">Pro Tip: Monitoring Logs</p>
      <pre className="font-mono mt-2 text-sm text-gray-900">
{`# Monitor multiple log files
$ tail -f /var/log/syslog /var/log/auth.log

# Monitor with grep filter
$ tail -f /var/log/syslog | grep error`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combining Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View lines 10-20 of a file
$ head -20 file.txt | tail -10

# View file with line numbers
$ cat -n file.txt | less

# Search and view results
$ grep "error" logfile.txt | less

# Count lines in output
$ cat file.txt | wc -l`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use cat for small files, less for large files</li>
        <li>less allows searching and bidirectional scrolling</li>
        <li>head shows the beginning, tail shows the end of files</li>
        <li>tail -f is essential for monitoring log files in real-time</li>
        <li>Combine commands with pipes for powerful file viewing</li>
        <li>Press q to quit less or more</li>
      </ul>
    </div>
  </div>
);

export default FileViewing;
