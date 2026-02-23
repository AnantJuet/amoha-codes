import React from "react";

const DirectoryCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Directory Commands in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Directory commands allow you to create, remove, and manage directories
      (folders) in Linux. These commands are essential for organizing your
      filesystem and managing project structures.
    </p>

    <h2 className="text-3xl font-bold mt-8">Creating Directories (mkdir)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ mkdir [options] directory_name

# Create single directory
$ mkdir projects

# Create multiple directories
$ mkdir dir1 dir2 dir3

# Create nested directories (with -p)
$ mkdir -p projects/web/frontend
$ mkdir -p ~/Documents/2026/January

# Create with specific permissions
$ mkdir -m 755 mydir
$ mkdir -m 700 private_dir

# Verbose output
$ mkdir -v newdir
mkdir: created directory 'newdir'`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">mkdir Options</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-p</td>
            <td className="p-3 border">Create parent directories as needed</td>
            <td className="p-3 border font-mono text-gray-900">mkdir -p a/b/c</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-m</td>
            <td className="p-3 border">Set permissions (mode)</td>
            <td className="p-3 border font-mono text-gray-900">mkdir -m 755 dir</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Verbose output</td>
            <td className="p-3 border font-mono text-gray-900">mkdir -v dir</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Removing Directories (rmdir)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ rmdir [options] directory_name

# Remove empty directory
$ rmdir mydir

# Remove multiple empty directories
$ rmdir dir1 dir2 dir3

# Remove nested empty directories
$ rmdir -p a/b/c    # Removes c, then b, then a (if all empty)

# Verbose output
$ rmdir -v mydir
rmdir: removing directory, 'mydir'

# Note: rmdir only removes EMPTY directories
# For non-empty directories, use rm -r`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">rmdir vs rm -r:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li><strong>rmdir:</strong> Only removes empty directories (safer)</li>
        <li><strong>rm -r:</strong> Removes directories and all contents (use with caution)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Listing Directories (ls)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic listing
$ ls

# List with details
$ ls -l

# List all files (including hidden)
$ ls -a

# List with human-readable sizes
$ ls -lh

# List only directories
$ ls -d */

# List recursively
$ ls -R

# List sorted by time
$ ls -lt

# List sorted by size
$ ls -lS

# Combine options
$ ls -lah

# List specific directory
$ ls -l /var/log`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Common ls Options</h3>
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
            <td className="p-3 border font-mono text-gray-900">-l</td>
            <td className="p-3 border">Long format with details</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-a</td>
            <td className="p-3 border">Show hidden files (starting with .)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-h</td>
            <td className="p-3 border">Human-readable file sizes</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-R</td>
            <td className="p-3 border">Recursive listing</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-t</td>
            <td className="p-3 border">Sort by modification time</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-S</td>
            <td className="p-3 border">Sort by file size</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-r</td>
            <td className="p-3 border">Reverse sort order</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-d</td>
            <td className="p-3 border">List directory entries, not contents</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding ls -l Output</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`$ ls -l
drwxr-xr-x  2 user group  4096 Jan 16 10:00 documents
-rw-r--r--  1 user group  1234 Jan 16 09:30 file.txt
lrwxrwxrwx  1 user group     8 Jan 16 08:00 link -> file.txt

Breakdown:
d rwx r-x r-x  2   user  group  4096  Jan 16 10:00  documents
│ │   │   │    │    │      │     │        │           │
│ │   │   │    │    │      │     │        │           └─ Name
│ │   │   │    │    │      │     │        └─ Modification date
│ │   │   │    │    │      │     └─ Size in bytes
│ │   │   │    │    │      └─ Group owner
│ │   │   │    │    └─ User owner
│ │   │   │    └─ Number of hard links
│ │   │   └─ Other permissions
│ │   └─ Group permissions
│ └─ Owner permissions
└─ File type (d=directory, -=file, l=link)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Directory Tree (tree)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install tree (if not available)
$ sudo apt install tree    # Debian/Ubuntu
$ sudo dnf install tree    # Fedora

# Display directory tree
$ tree
.
├── documents
│   ├── file1.txt
│   └── file2.txt
└── projects
    └── code.py

# Limit depth
$ tree -L 2

# Show hidden files
$ tree -a

# Show only directories
$ tree -d

# Show file sizes
$ tree -h`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use mkdir -p to create nested directory structures</li>
        <li>rmdir only removes empty directories (safe)</li>
        <li>ls -la shows all files including hidden ones with details</li>
        <li>The first character in ls -l output indicates the file type</li>
        <li>Use tree command for visual directory structure</li>
        <li>Always use rm -r carefully for non-empty directories</li>
      </ul>
    </div>
  </div>
);

export default DirectoryCommands;
