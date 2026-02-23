import React from "react";

const FileSearch: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Searching for Files in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux provides powerful tools for finding files and searching within files.
      The main commands are find (for finding files by attributes) and locate
      (for quick filename searches using a database).
    </p>

    <h2 className="text-3xl font-bold mt-8">find Command</h2>
    <p className="leading-relaxed">
      The find command searches the filesystem in real-time based on various criteria
      like name, type, size, time, and permissions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ find [path] [options] [expression]

# Find by name
$ find /home -name "file.txt"
$ find . -name "*.txt"                   # Wildcard
$ find . -iname "FILE.txt"               # Case insensitive

# Find by type
$ find . -type f                         # Files only
$ find . -type d                         # Directories only
$ find . -type l                         # Symbolic links

# Find by size
$ find . -size +100M                     # Larger than 100MB
$ find . -size -1k                       # Smaller than 1KB
$ find . -size 50M                       # Exactly 50MB

# Size units: c (bytes), k (KB), M (MB), G (GB)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Find by Time</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Modified within last N days
$ find . -mtime -7                       # Modified in last 7 days
$ find . -mtime +30                      # Modified more than 30 days ago
$ find . -mtime 1                        # Modified exactly 1 day ago

# Accessed within last N days
$ find . -atime -7

# Changed (metadata) within last N days
$ find . -ctime -7

# Modified within last N minutes
$ find . -mmin -60                       # Modified in last 60 minutes`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Find by Permissions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find by exact permissions
$ find . -perm 755

# Find by minimum permissions
$ find . -perm -644                      # At least 644

# Find files owned by user/group
$ find . -user john
$ find . -group developers

# Find executable files
$ find . -type f -executable

# Find world-writable files
$ find . -perm -002`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Combining Criteria</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# AND (default) - both conditions must match
$ find . -name "*.txt" -size +1M

# OR - either condition
$ find . -name "*.txt" -o -name "*.log"

# NOT - negate condition
$ find . ! -name "*.txt"

# Complex combination
$ find . \( -name "*.txt" -o -name "*.log" \) -mtime -7`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Executing Actions</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Execute command on each file
$ find . -name "*.tmp" -exec rm {} \;

# Execute with confirmation
$ find . -name "*.tmp" -ok rm {} \;

# Print results (default action)
$ find . -name "*.txt" -print

# Delete files directly
$ find . -name "*.tmp" -delete

# Execute command more efficiently (batch)
$ find . -name "*.txt" -exec grep "pattern" {} +`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">locate Command</h2>
    <p className="leading-relaxed">
      The locate command searches a pre-built database for fast results.
      It is faster than find but may not include recent files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install locate (if needed)
$ sudo apt install mlocate        # Debian/Ubuntu
$ sudo dnf install mlocate        # Fedora

# Update the database
$ sudo updatedb

# Basic search
$ locate filename.txt

# Case insensitive search
$ locate -i FILENAME.TXT

# Limit number of results
$ locate -n 10 filename

# Count matches
$ locate -c "*.txt"

# Show only existing files
$ locate -e filename.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">which and whereis Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find executable location in PATH
$ which python
/usr/bin/python

$ which -a python                 # Show all matches
/usr/bin/python
/usr/local/bin/python

# Find binary, source, and manual page
$ whereis python
python: /usr/bin/python /usr/lib/python3.10 /usr/share/man/man1/python.1.gz

# Find only binaries
$ whereis -b python

# Find only manual pages
$ whereis -m python`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">find vs locate</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">find</th>
            <th className="p-3 border">locate</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Slower (real-time search)</td>
            <td className="p-3 border">Very fast (database)</td>
          </tr>
          <tr>
            <td className="p-3 border">Accuracy</td>
            <td className="p-3 border">Always current</td>
            <td className="p-3 border">May miss recent files</td>
          </tr>
          <tr>
            <td className="p-3 border">Search criteria</td>
            <td className="p-3 border">Name, size, time, permissions, etc.</td>
            <td className="p-3 border">Name only</td>
          </tr>
          <tr>
            <td className="p-3 border">Actions</td>
            <td className="p-3 border">Can execute commands</td>
            <td className="p-3 border">Display only</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use find for precise, real-time searches with multiple criteria</li>
        <li>Use locate for quick filename searches (run updatedb first)</li>
        <li>which finds executables in your PATH</li>
        <li>find -exec allows running commands on found files</li>
        <li>Use -iname for case-insensitive name matching</li>
        <li>Combine find criteria with -a (AND), -o (OR), and ! (NOT)</li>
      </ul>
    </div>
  </div>
);

export default FileSearch;
