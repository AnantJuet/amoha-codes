import React from 'react';

const DirectoryStructure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Directory Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A directory is a container that holds references to files and other directories.
      Directory structures organize files in a logical manner, making it easier to locate,
      manage, and access files. The directory itself is a file that contains information
      about the files it contains.
    </p>

    {/* What is a Directory */}
    <h2 className="text-3xl font-bold mt-8">What is a Directory?</h2>
    <p className="leading-relaxed">
      A directory (also called a folder in Windows) is a special type of file that
      contains a list of entries. Each entry maps a file name to additional information
      such as the file's location on disk, its attributes, or its inode number.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Directory Entry Structure:

+------------------+-------------+
|    File Name     |   Pointer   |
+------------------+-------------+
| document.txt     | -> inode 42 |
| photo.jpg        | -> inode 17 |
| programs/        | -> inode 89 |
| readme.md        | -> inode 25 |
+------------------+-------------+

The pointer can be:
- An inode number (UNIX)
- A pointer to file attributes block
- A pointer to first data block
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
            <th className="p-3 border">UNIX Command</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">find, locate</td>
            <td className="p-3 border">Find a file by name or pattern</td>
          </tr>
          <tr>
            <td className="p-3 border">Create File</td>
            <td className="p-3 border">touch, open()</td>
            <td className="p-3 border">Add new entry to directory</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete File</td>
            <td className="p-3 border">rm, unlink()</td>
            <td className="p-3 border">Remove entry from directory</td>
          </tr>
          <tr>
            <td className="p-3 border">List Directory</td>
            <td className="p-3 border">ls</td>
            <td className="p-3 border">Show all entries in directory</td>
          </tr>
          <tr>
            <td className="p-3 border">Rename</td>
            <td className="p-3 border">mv, rename()</td>
            <td className="p-3 border">Change file/directory name</td>
          </tr>
          <tr>
            <td className="p-3 border">Create Directory</td>
            <td className="p-3 border">mkdir</td>
            <td className="p-3 border">Create new subdirectory</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove Directory</td>
            <td className="p-3 border">rmdir</td>
            <td className="p-3 border">Delete empty directory</td>
          </tr>
          <tr>
            <td className="p-3 border">Traverse</td>
            <td className="p-3 border">tree, du</td>
            <td className="p-3 border">Access all files in directory tree</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Types of Directory Structures */}
    <h2 className="text-3xl font-bold mt-8">Types of Directory Structures</h2>
    <p className="leading-relaxed">
      Directory structures have evolved from simple single-level organizations to
      complex hierarchical systems. The main types are:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Single-Level Directory:</strong> All files in one directory
      </li>
      <li>
        <strong>Two-Level Directory:</strong> Separate directory for each user
      </li>
      <li>
        <strong>Tree-Structured Directory:</strong> Hierarchical organization
      </li>
      <li>
        <strong>Acyclic-Graph Directory:</strong> Allows sharing via links
      </li>
      <li>
        <strong>General Graph Directory:</strong> Allows cycles (requires garbage collection)
      </li>
    </ul>

    {/* Directory Structure Overview */}
    <h2 className="text-3xl font-bold mt-8">Directory Structure Evolution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Evolution of Directory Structures:

1. Single-Level:
   [file1] [file2] [file3] [file4]

2. Two-Level:
   Root:  [user1] [user2] [user3]
            |       |       |
   Level2: [files] [files] [files]

3. Tree:
   Root
   ├── home
   │   ├── user1
   │   │   └── documents
   │   └── user2
   ├── bin
   └── etc

4. Acyclic Graph:
   Root
   ├── home
   │   ├── user1
   │   │   └── shared ----+
   │   └── user2          |
   │       └── link ------+  (points to same file)
   └── ...

5. General Graph:
   (allows cycles - rarely used due to complexity)
`}
      </pre>
    </div>

    {/* Path Names */}
    <h2 className="text-3xl font-bold mt-8">Path Names</h2>
    <p className="leading-relaxed">
      A path name specifies the location of a file in the directory structure.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Absolute Path</h3>
    <p className="leading-relaxed">
      An absolute path starts from the root directory and specifies the complete
      path to a file.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`UNIX:    /home/ujjwal/documents/report.txt
Windows: C:\\Users\\ujjwal\\Documents\\report.txt`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Relative Path</h3>
    <p className="leading-relaxed">
      A relative path starts from the current working directory.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Current directory: /home/ujjwal

Relative paths:
  documents/report.txt    -> /home/ujjwal/documents/report.txt
  ../bob/file.txt         -> /home/bob/file.txt
  ./script.sh             -> /home/ujjwal/script.sh

Special entries:
  .   = current directory
  ..  = parent directory`}
      </pre>
    </div>

    {/* Goals of Directory Structure */}
    <h2 className="text-3xl font-bold mt-8">Goals of Directory Structure</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Efficiency:</strong> Locate files quickly</li>
      <li><strong>Naming:</strong> Allow convenient naming by users</li>
      <li><strong>Grouping:</strong> Organize files logically by properties</li>
      <li><strong>Sharing:</strong> Enable file sharing between users</li>
      <li><strong>Protection:</strong> Provide access control and security</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Directories contain entries that map names to file locations</li>
      <li>Directory structures have evolved from single-level to hierarchical</li>
      <li>Path names can be absolute (from root) or relative (from current directory)</li>
      <li>Modern systems use tree or acyclic-graph structures</li>
      <li>Good directory design enables efficient search, sharing, and organization</li>
    </ul>
  </div>
);

export default DirectoryStructure;
