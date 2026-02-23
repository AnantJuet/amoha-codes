import React from 'react';

const TreeDirectory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Tree-Structured Directory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The tree-structured directory is the most common directory structure in modern operating
      systems. It extends the two-level concept by allowing users to create their own
      subdirectories, organizing files in a hierarchical tree structure with a single root.
    </p>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure</h2>
    <p className="leading-relaxed">
      In a tree directory, there is one root directory, and every file in the system has a
      unique path from the root. Directories can contain both files and subdirectories,
      creating an arbitrary depth of nesting.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Tree Directory Structure:

                            / (root)
            ________________|________________
           /        |        |        \
         bin      home      etc      var
          |         |        |        |
        [files]    /\       /\      [files]
                  /  \     /  \
              alice  bob  passwd  hosts
               /\     |
              /  \    |
        docs  code  [files]
         |     |
       /   \   |
   report  notes  main.c
     .txt  .txt

Each node is either:
- A file (leaf node, cannot contain other entries)
- A directory (internal node, contains files and/or directories)
`}
      </pre>
    </div>

    {/* Properties */}
    <h2 className="text-3xl font-bold mt-8">Properties of Tree Directories</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Single Root:</strong> There is exactly one root directory from which
        all paths originate.
      </li>
      <li>
        <strong>Unique Paths:</strong> Every file has exactly one absolute path from
        the root.
      </li>
      <li>
        <strong>Parent-Child Relationship:</strong> Each directory (except root) has
        exactly one parent.
      </li>
      <li>
        <strong>No Cycles:</strong> Following directory links will never return to a
        previously visited directory.
      </li>
      <li>
        <strong>Arbitrary Depth:</strong> Directories can be nested to any depth
        (subject to path length limits).
      </li>
    </ul>

    {/* Path Navigation */}
    <h2 className="text-3xl font-bold mt-8">Path Navigation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Current Working Directory (CWD): /home/alice

Absolute Paths (start with /):
  /home/alice/docs/report.txt
  /home/bob/data.csv
  /etc/passwd

Relative Paths (start from CWD):
  docs/report.txt        -> /home/alice/docs/report.txt
  ../bob/data.csv        -> /home/bob/data.csv
  ../../etc/passwd       -> /etc/passwd
  ./code/main.c          -> /home/alice/code/main.c

Special Directory Entries:
  .   = current directory (self-reference)
  ..  = parent directory

Path Resolution:
  /home/alice/../bob/./data.csv
  1. Start at root (/)
  2. Go to home
  3. Go to alice
  4. Go up to parent (..) -> home
  5. Go to bob
  6. Stay in current (.) -> bob
  7. Access data.csv
  Result: /home/bob/data.csv
`}
      </pre>
    </div>

    {/* Directory Operations */}
    <h2 className="text-3xl font-bold mt-8">Directory Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Create Directory</td>
            <td className="p-3 border">mkdir</td>
            <td className="p-3 border">mkdir /home/alice/projects</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove Directory</td>
            <td className="p-3 border">rmdir</td>
            <td className="p-3 border">rmdir /home/alice/temp</td>
          </tr>
          <tr>
            <td className="p-3 border">Change Directory</td>
            <td className="p-3 border">cd</td>
            <td className="p-3 border">cd /home/alice/docs</td>
          </tr>
          <tr>
            <td className="p-3 border">Print Working Dir</td>
            <td className="p-3 border">pwd</td>
            <td className="p-3 border">pwd → /home/alice</td>
          </tr>
          <tr>
            <td className="p-3 border">List Contents</td>
            <td className="p-3 border">ls</td>
            <td className="p-3 border">ls /home</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Current Working Directory */}
    <h2 className="text-3xl font-bold mt-8">Current Working Directory</h2>
    <p className="leading-relaxed">
      Each process has a current working directory (CWD) that serves as the starting
      point for relative path resolution. This eliminates the need to type full paths
      for every operation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Process A: CWD = /home/alice
Process B: CWD = /home/bob

When Process A accesses "docs/file.txt":
  -> /home/alice/docs/file.txt

When Process B accesses "docs/file.txt":
  -> /home/bob/docs/file.txt

Same relative path, different absolute paths!
`}
      </pre>
    </div>

    {/* Implementation */}
    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <p className="leading-relaxed">
      A directory is implemented as a file containing a list of entries. Each entry
      contains a name and a pointer (inode number or disk address).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Directory Entry Format (simplified):

Directory: /home/alice (inode 100)
+----------+-------+------+
| Name     | Inode | Type |
+----------+-------+------+
| .        |  100  | dir  |  (self)
| ..       |   50  | dir  |  (parent: /home)
| docs     |  150  | dir  |
| code     |  160  | dir  |
| notes.txt|  200  | file |
+----------+-------+------+

Path Resolution: /home/alice/docs/report.txt
1. Start at root inode (usually 2)
2. Read root directory, find "home" -> inode 50
3. Read inode 50, find "alice" -> inode 100
4. Read inode 100, find "docs" -> inode 150
5. Read inode 150, find "report.txt" -> inode 220
6. Return inode 220 (the file)
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>Flexible Organization:</strong> Users can create any directory structure
      </li>
      <li>
        <strong>Scalability:</strong> Can handle millions of files efficiently
      </li>
      <li>
        <strong>Logical Grouping:</strong> Related files can be organized into directories
      </li>
      <li>
        <strong>Efficient Searching:</strong> Search is limited to specific subdirectories
      </li>
      <li>
        <strong>Unique Paths:</strong> Each file has exactly one absolute path
      </li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>No File Sharing:</strong> A file can only exist in one directory
      </li>
      <li>
        <strong>Deep Paths:</strong> Deeply nested directories lead to long paths
      </li>
      <li>
        <strong>Path Resolution Overhead:</strong> Each component requires a lookup
      </li>
      <li>
        <strong>Directory Deletion:</strong> Must handle non-empty directory deletion
      </li>
    </ul>

    {/* Deleting Directories */}
    <h2 className="text-3xl font-bold mt-8">Deleting Directories</h2>
    <p className="leading-relaxed">
      Deleting directories with contents requires special handling:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Option 1:</strong> Only allow deletion of empty directories</li>
      <li><strong>Option 2:</strong> Recursively delete all contents first (rm -r)</li>
      <li><strong>Option 3:</strong> Move to trash, delete later</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Tree directory has a single root with hierarchical subdirectories</li>
      <li>Every file has exactly one unique absolute path</li>
      <li>Current working directory enables convenient relative paths</li>
      <li>Standard in all modern operating systems</li>
      <li>Does not support file sharing (addressed by acyclic-graph directories)</li>
    </ul>
  </div>
);

export default TreeDirectory;
