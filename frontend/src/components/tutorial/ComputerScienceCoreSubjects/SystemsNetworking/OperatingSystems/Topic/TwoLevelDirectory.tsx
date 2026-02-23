import React from 'react';

const TwoLevelDirectory: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Two-Level Directory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The two-level directory structure addresses the naming problem of single-level directories
      by creating a separate directory for each user. The system maintains a master file directory
      (MFD) that points to individual user file directories (UFDs).
    </p>

    {/* Structure */}
    <h2 className="text-3xl font-bold mt-8">Structure</h2>
    <p className="leading-relaxed">
      In a two-level directory, the first level is the Master File Directory (MFD) containing
      entries for each user. The second level consists of User File Directories (UFD), one
      per user, containing that user's files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Two-Level Directory Structure:

                Master File Directory (MFD)
        +----------+----------+----------+----------+
        |  alice   |   bob    |  carol   |  david   |
        +----------+----------+----------+----------+
             |          |          |          |
             v          v          v          v

   alice's UFD   bob's UFD   carol's UFD   david's UFD
   +---------+   +---------+  +---------+   +---------+
   | data    |   | data    |  | project |   | game    |
   | code    |   | notes   |  | backup  |   | save    |
   | readme  |   | test    |  | data    |   | config  |
   +---------+   +---------+  +---------+   +---------+

Note: Both Alice and Bob can have files named "data"
because they are in separate directories.
`}
      </pre>
    </div>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>User Login:</strong> When a user logs in, the system locates their UFD
        through the MFD.
      </li>
      <li>
        <strong>File Access:</strong> File operations are performed within the user's UFD.
        Each user's UFD is searched for the requested file name.
      </li>
      <li>
        <strong>Isolation:</strong> Users cannot see or access files in other users' UFDs
        (without explicit permission).
      </li>
      <li>
        <strong>Name Resolution:</strong> A file is identified by a combination of
        username and filename.
      </li>
    </ul>

    {/* Path Names */}
    <h2 className="text-3xl font-bold mt-8">Path Names in Two-Level Directory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
File Naming:

Full path: username/filename
Examples:
  alice/data    - Alice's data file
  bob/data      - Bob's data file (different file!)
  carol/project - Carol's project file

When alice is logged in:
  "data"        -> alice/data (default to current user)
  "bob/data"    -> bob/data (access other user's file if permitted)

Search process:
1. User types: open("data")
2. System looks up current user (alice)
3. System searches MFD for "alice"
4. System follows pointer to alice's UFD
5. System searches UFD for "data"
6. File found! Return file handle
`}
      </pre>
    </div>

    {/* Example Scenario */}
    <h2 className="text-3xl font-bold mt-8">Example Scenario</h2>
    <p className="leading-relaxed">
      Consider a multi-user system with three users:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">User</th>
            <th className="p-3 border">Files in UFD</th>
            <th className="p-3 border">Full Path</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">alice</td>
            <td className="p-3 border">report.txt, data.csv</td>
            <td className="p-3 border">alice/report.txt, alice/data.csv</td>
          </tr>
          <tr>
            <td className="p-3 border">bob</td>
            <td className="p-3 border">report.txt, code.py</td>
            <td className="p-3 border">bob/report.txt, bob/code.py</td>
          </tr>
          <tr>
            <td className="p-3 border">carol</td>
            <td className="p-3 border">analysis.txt, data.csv</td>
            <td className="p-3 border">carol/analysis.txt, carol/data.csv</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="leading-relaxed mt-3">
      Note how alice/data.csv and carol/data.csv are different files despite having the same filename.
    </p>

    {/* System Files */}
    <h2 className="text-3xl font-bold mt-8">System Files and Search Path</h2>
    <p className="leading-relaxed">
      A special system directory can hold shared files that all users need, like system
      utilities and libraries.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Search Path Concept:

MFD
├── system (special directory for shared files)
│   ├── compiler
│   ├── editor
│   └── utilities
├── alice
│   └── myprogram
├── bob
│   └── myprogram
└── carol

When alice runs "compiler":
1. Search alice's UFD - not found
2. Search system directory - FOUND!

When alice runs "myprogram":
1. Search alice's UFD - FOUND!
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>Solves Naming Problem:</strong> Different users can use the same file names
      </li>
      <li>
        <strong>User Isolation:</strong> Users are separated from each other
      </li>
      <li>
        <strong>Efficient Search:</strong> Only search within one user's directory
      </li>
      <li>
        <strong>Simple Path Names:</strong> User/filename is sufficient to locate any file
      </li>
      <li>
        <strong>Easy Administration:</strong> System can manage user directories separately
      </li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>
        <strong>No Subdirectories:</strong> Users cannot create their own directory structure
      </li>
      <li>
        <strong>Limited Organization:</strong> All of a user's files are in one flat directory
      </li>
      <li>
        <strong>Sharing Complications:</strong> Accessing another user's files requires special syntax
      </li>
      <li>
        <strong>Still Scalability Issues:</strong> Users with many files face same problems as single-level
      </li>
      <li>
        <strong>Inflexible Grouping:</strong> Cannot group related files into folders
      </li>
    </ul>

    {/* Implementation Details */}
    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Data Structures:

Master File Directory:
+----------+---------+
| Username | UFD Ptr |
+----------+---------+
| alice    | -> 1000 |
| bob      | -> 2000 |
| carol    | -> 3000 |
+----------+---------+

User File Directory (alice, at block 1000):
+----------+-----------+------+
| Filename | File Info | Size |
+----------+-----------+------+
| data     | -> block  | 1024 |
| code     | -> block  | 2048 |
| readme   | -> block  | 512  |
+----------+-----------+------+

File Lookup Algorithm:
lookup(username, filename):
    ufd_ptr = MFD.search(username)
    if ufd_ptr == NULL:
        return USER_NOT_FOUND
    file_ptr = UFD[ufd_ptr].search(filename)
    if file_ptr == NULL:
        return FILE_NOT_FOUND
    return file_ptr
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Two-level directory has MFD (users) and UFDs (user's files)</li>
      <li>Solves the naming collision problem of single-level directories</li>
      <li>Provides isolation between users</li>
      <li>Still lacks ability to create subdirectories within user space</li>
      <li>Led to development of tree-structured directories</li>
    </ul>
  </div>
);

export default TwoLevelDirectory;
