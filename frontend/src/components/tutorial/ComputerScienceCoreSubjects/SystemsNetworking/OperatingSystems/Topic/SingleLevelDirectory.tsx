import React from 'react';

const SingleLevelDirectory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Single-Level Directory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The single-level directory is the simplest directory structure. All files are contained
      in the same directory, making it easy to understand but problematic when the number of
      files grows or when multiple users need to share the system.
    </p>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure</h2>
    <p className="leading-relaxed">
      In a single-level directory, there is only one directory that contains all files in
      the file system. There are no subdirectories or hierarchical organization.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Single-Level Directory Structure:

                    Root Directory
    +-------+-------+-------+-------+-------+-------+
    | cat   | bo    | a     | test  | data  | x     |
    +-------+-------+-------+-------+-------+-------+
       |       |       |       |       |       |
       v       v       v       v       v       v
    [file]  [file]  [file]  [file]  [file]  [file]

All files are at the same level, directly under root.
No subdirectories exist.

Directory Table:
+-----------+---------+------+-------------+
| File Name | Pointer | Size | Permissions |
+-----------+---------+------+-------------+
| cat       |   1024  | 256  | rw-r--r--   |
| bo        |   2048  | 512  | rwxr-xr-x   |
| a         |   3072  | 128  | rw-------   |
| test      |   4096  | 1024 | rw-rw-r--   |
| data      |   5120  | 2048 | rw-r--r--   |
| x         |   6144  | 64   | rwxr-xr-x   |
+-----------+---------+------+-------------+
`}
      </pre>
    </div>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>File Creation:</strong> When a new file is created, an entry is added to
        the single directory with the file name and pointer to the file's data.
      </li>
      <li>
        <strong>File Lookup:</strong> To find a file, the system searches the directory
        linearly for a matching name.
      </li>
      <li>
        <strong>File Deletion:</strong> The entry is removed from the directory, and the
        file's disk space is freed.
      </li>
      <li>
        <strong>Name Resolution:</strong> Since there's only one directory, the file name
        alone is sufficient to locate any file.
      </li>
    </ul>

    {/* Example Scenario */}
    <h2 className="text-3xl font-bold mt-8">Example Scenario</h2>
    <p className="leading-relaxed">
      Consider a small embedded system with a single-level directory:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Directory listing:
$ ls
config.txt    log.dat    main.bin    temp.dat    backup.bin

Operations:
$ cat config.txt   # Read file - direct access
$ rm temp.dat      # Delete file - remove entry
$ touch new.txt    # Create file - add entry

File lookup: Linear search through directory
  Looking for "main.bin":
  1. Check "config.txt" - no match
  2. Check "log.dat" - no match
  3. Check "main.bin" - MATCH!

  Time: O(n) where n = number of files
`}
      </pre>
    </div>

    {/* Naming Problem */}
    <h2 className="text-3xl font-bold mt-8">The Naming Problem</h2>
    <p className="leading-relaxed">
      The biggest limitation of single-level directories is the naming problem. All files
      must have unique names, even if they belong to different users or serve different purposes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Problem: Multiple users on same system

User Alice wants to create: data.txt
User Bob also wants to create: data.txt

Conflict! Only one file can be named "data.txt"

Workarounds:
- alice_data.txt and bob_data.txt (naming conventions)
- data_alice.txt and data_bob.txt (prefixes/suffixes)

Neither solution is elegant or scalable.
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>Simple Implementation:</strong> Minimal code required to manage the directory
      </li>
      <li>
        <strong>Easy to Understand:</strong> No complex path navigation needed
      </li>
      <li>
        <strong>Fast for Small Systems:</strong> Works well when there are few files
      </li>
      <li>
        <strong>No Path Overhead:</strong> File name alone identifies the file
      </li>
      <li>
        <strong>Low Memory Usage:</strong> Only one directory structure to maintain
      </li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>Naming Limitations:</strong> All files must have unique names across entire system
      </li>
      <li>
        <strong>No Logical Grouping:</strong> Cannot organize related files together
      </li>
      <li>
        <strong>Multi-user Problems:</strong> Different users cannot use the same file names
      </li>
      <li>
        <strong>Poor Scalability:</strong> Becomes unwieldy with many files
      </li>
      <li>
        <strong>Slow Search:</strong> Linear search becomes slow with many files
      </li>
      <li>
        <strong>No Isolation:</strong> All files visible to all users
      </li>
    </ul>

    {/* Use Cases */}
    <h2 className="text-3xl font-bold mt-8">Where Single-Level Directories Are Used</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simple embedded systems with limited files</li>
      <li>Early personal computers (e.g., CP/M, early DOS)</li>
      <li>Digital cameras and basic storage devices</li>
      <li>Microcontroller systems</li>
      <li>Temporary file systems with known file counts</li>
    </ul>

    {/* Comparison */}
    <h2 className="text-3xl font-bold mt-8">Evolution to Better Structures</h2>
    <p className="leading-relaxed">
      The limitations of single-level directories led to the development of more sophisticated
      structures:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Single-Level</th>
            <th className="p-3 border">Solution</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">User isolation</td>
            <td className="p-3 border">Not possible</td>
            <td className="p-3 border">Two-level directory</td>
          </tr>
          <tr>
            <td className="p-3 border">File organization</td>
            <td className="p-3 border">No grouping</td>
            <td className="p-3 border">Tree directory</td>
          </tr>
          <tr>
            <td className="p-3 border">File sharing</td>
            <td className="p-3 border">Complex naming</td>
            <td className="p-3 border">Acyclic-graph directory</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Single-level directory contains all files in one flat structure</li>
      <li>Simple to implement but has severe naming limitations</li>
      <li>All files must have unique names across the entire system</li>
      <li>Suitable only for simple, single-user systems with few files</li>
      <li>Led to development of hierarchical directory structures</li>
    </ul>
  </div>
);

export default SingleLevelDirectory;
