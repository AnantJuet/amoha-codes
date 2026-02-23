import React from 'react';

const AcyclicGraphDirectory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Acyclic-Graph Directory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An acyclic-graph directory extends the tree structure by allowing files and directories
      to be shared between different parts of the directory hierarchy. This is accomplished
      through links, while still preventing cycles to avoid infinite loops during traversal.
    </p>

    {/* Motivation */}
    <h2 className="text-3xl font-bold mt-8">Why Acyclic-Graph Directories?</h2>
    <p className="leading-relaxed">
      In a tree directory, a file can only appear in one location. But often, multiple users
      or projects need to share the same file or directory. Copying creates redundancy and
      synchronization problems. Links solve this by allowing the same file to appear in
      multiple directories.
    </p>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Acyclic-Graph Directory Structure:

                        / (root)
           _____________|_____________
          /             |             \
       home           shared          usr
       /  \              |              |
   alice  bob        project        [files]
     |      |           /|\
   docs   docs     [files shared
     |      |      between alice
     +------+------>  and bob]
           \
            \\
             +---- Both alice/docs and bob/docs
                   can link to shared/project

Alternative view with links:

alice/docs/project ---> (shared directory)
                             ^
bob/docs/project   ----------+

The "project" directory has two parents:
- alice/docs
- bob/docs
`}
      </pre>
    </div>

    {/* Types of Links */}
    <h2 className="text-3xl font-bold mt-8">Types of Links</h2>

    <h3 className="text-2xl font-semibold mt-6">Hard Links</h3>
    <p className="leading-relaxed">
      A hard link is an additional directory entry pointing to the same inode (file data).
      The file has multiple names, all equally valid.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Hard Link Example:

Directory: /home/alice          Directory: /home/bob
+-------+-------+               +-------+-------+
| Name  | Inode |               | Name  | Inode |
+-------+-------+               +-------+-------+
| data  |  500  |               | data  |  500  |  <- Same inode!
+-------+-------+               +-------+-------+

Inode 500:
+------------------+
| Link Count: 2    |  <- Two directory entries point here
| Size: 1024       |
| Permissions: rw- |
| Data blocks: ... |
+------------------+

Creating a hard link:
$ ln /home/alice/data /home/bob/data

Properties:
- Both names are equivalent (no "original")
- File deleted only when link count reaches 0
- Cannot span file systems (same partition only)
- Cannot link to directories (to prevent cycles)
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Symbolic Links (Soft Links)</h3>
    <p className="leading-relaxed">
      A symbolic link is a special file that contains a path to another file or directory.
      It's essentially a pointer that the system follows to find the actual file.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Symbolic Link Example:

Directory: /home/alice          Directory: /home/bob
+-------+-------+               +---------+-------+
| Name  | Inode |               | Name    | Inode |
+-------+-------+               +---------+-------+
| data  |  500  |               | datalink|  600  |
+-------+-------+               +---------+-------+

Inode 500 (actual file):        Inode 600 (symlink):
+------------------+            +------------------+
| Type: regular    |            | Type: symlink    |
| Size: 1024       |            | Size: 18         |
| Data blocks: ... |            | Target: /home/   |
+------------------+            |   alice/data     |
                                +------------------+

Creating a symbolic link:
$ ln -s /home/alice/data /home/bob/datalink

Properties:
- Symlink stores path as its content
- Can span file systems
- Can link to directories
- Can become dangling (if target deleted)
- Slightly slower (requires extra lookup)
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Hard Links vs Symbolic Links</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hard Link</th>
            <th className="p-3 border">Symbolic Link</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Points To</td>
            <td className="p-3 border">Inode directly</td>
            <td className="p-3 border">Path name</td>
          </tr>
          <tr>
            <td className="p-3 border">Cross File System</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Link to Directory</td>
            <td className="p-3 border">No (usually)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Original Deleted</td>
            <td className="p-3 border">File remains accessible</td>
            <td className="p-3 border">Link becomes dangling</td>
          </tr>
          <tr>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">Directory entry only</td>
            <td className="p-3 border">New inode + path data</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slightly slower</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Deletion Problem */}
    <h2 className="text-3xl font-bold mt-8">Deletion and Reference Counting</h2>
    <p className="leading-relaxed">
      With shared files, deletion becomes complex. When should the actual file data be deleted?
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Hard Link Deletion:

Initial state:
  alice/data -> inode 500 (link count: 2)
  bob/data   -> inode 500

Step 1: rm alice/data
  - Remove directory entry in alice
  - Decrement link count: 2 -> 1
  - File still exists (link count > 0)

Step 2: rm bob/data
  - Remove directory entry in bob
  - Decrement link count: 1 -> 0
  - Link count = 0, delete actual file data

Symbolic Link Deletion:

Initial state:
  alice/data     -> inode 500
  bob/datalink   -> symlink to /home/alice/data

If we delete alice/data:
  - bob/datalink now points to nothing
  - Called a "dangling" or "broken" link
  - Access will fail with "No such file"
`}
      </pre>
    </div>

    {/* Preventing Cycles */}
    <h2 className="text-3xl font-bold mt-8">Preventing Cycles</h2>
    <p className="leading-relaxed">
      Cycles in the directory structure must be prevented to avoid infinite loops during
      directory traversal and garbage collection issues.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Hard links to directories are typically prohibited</li>
      <li>Symbolic links are allowed but tools must detect cycles</li>
      <li>System calls like readdir() have maximum depth limits</li>
      <li>File system utilities detect and break cycles</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Enables file and directory sharing</li>
      <li>Saves disk space by avoiding duplication</li>
      <li>Changes to shared file visible to all users</li>
      <li>Flexible organization of files</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Deletion is more complex</li>
      <li>Must prevent cycles carefully</li>
      <li>Symbolic links can become dangling</li>
      <li>Traversal must handle multiple paths to same file</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Acyclic-graph directories allow file sharing through links</li>
      <li>Hard links point directly to inodes; symbolic links store paths</li>
      <li>Reference counting ensures files are deleted when all links are removed</li>
      <li>Cycles must be prevented to avoid traversal problems</li>
      <li>Used in all modern operating systems</li>
    </ul>
  </div>
);

export default AcyclicGraphDirectory;
