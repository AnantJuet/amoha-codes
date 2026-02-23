import React from 'react';

const FileAttributes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Attributes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File attributes, also known as file metadata, are properties that describe a file's
      characteristics beyond its actual data content. These attributes are maintained by
      the file system and provide important information for file management and access control.
    </p>

    {/* Common File Attributes */}
    <h2 className="text-3xl font-bold mt-8">Common File Attributes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Name</td>
            <td className="p-3 border">Human-readable symbolic file name</td>
          </tr>
          <tr>
            <td className="p-3 border">Identifier</td>
            <td className="p-3 border">Unique tag (number) identifying the file within the file system</td>
          </tr>
          <tr>
            <td className="p-3 border">Type</td>
            <td className="p-3 border">Indicates the file type (text, binary, executable, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border">Location</td>
            <td className="p-3 border">Pointer to file location on storage device</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Current file size (in bytes, words, or blocks)</td>
          </tr>
          <tr>
            <td className="p-3 border">Protection</td>
            <td className="p-3 border">Access-control information (read, write, execute permissions)</td>
          </tr>
          <tr>
            <td className="p-3 border">Timestamps</td>
            <td className="p-3 border">Creation, last modification, and last access times</td>
          </tr>
          <tr>
            <td className="p-3 border">Owner</td>
            <td className="p-3 border">User who owns the file</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Timestamps */}
    <h2 className="text-3xl font-bold mt-8">File Timestamps</h2>
    <p className="leading-relaxed">
      Most file systems maintain multiple timestamps for tracking file history:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Creation Time (ctime on UNIX):</strong> When the file was originally created.
        On UNIX systems, this actually refers to inode change time.
      </li>
      <li>
        <strong>Modification Time (mtime):</strong> When the file content was last modified.
        This changes when data is written to the file.
      </li>
      <li>
        <strong>Access Time (atime):</strong> When the file was last read or accessed.
        Some systems disable this for performance.
      </li>
    </ul>

    {/* UNIX File Attributes */}
    <h2 className="text-3xl font-bold mt-8">UNIX/Linux File Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
$ ls -la myfile.txt
-rw-r--r-- 1 ujjwal users 1024 Jan 12 10:30 myfile.txt

Breakdown:
-rw-r--r--  : File type and permissions
    |           - : regular file
    |           d : directory
    |           l : symbolic link
    |
    +-- Owner: rw- (read, write)
    +-- Group: r-- (read only)
    +-- Others: r-- (read only)

1           : Number of hard links
ujjwal      : Owner username
users       : Group name
1024        : File size in bytes
Jan 12 10:30: Last modification date/time
myfile.txt  : File name
`}
      </pre>
    </div>

    {/* Permission Bits */}
    <h2 className="text-3xl font-bold mt-8">UNIX Permission Bits</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Permission</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Octal</th>
            <th className="p-3 border">Meaning for Files</th>
            <th className="p-3 border">Meaning for Directories</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Read</td>
            <td className="p-3 border">r</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Can view file contents</td>
            <td className="p-3 border">Can list directory contents</td>
          </tr>
          <tr>
            <td className="p-3 border">Write</td>
            <td className="p-3 border">w</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Can modify file contents</td>
            <td className="p-3 border">Can add/delete files</td>
          </tr>
          <tr>
            <td className="p-3 border">Execute</td>
            <td className="p-3 border">x</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Can run as program</td>
            <td className="p-3 border">Can enter directory</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Special Permission Bits</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>SUID (4):</strong> Execute file with owner's privileges</li>
      <li><strong>SGID (2):</strong> Execute with group's privileges, or inherit group for new files in directory</li>
      <li><strong>Sticky Bit (1):</strong> Only owner can delete files in directory (used for /tmp)</li>
    </ul>

    {/* Windows File Attributes */}
    <h2 className="text-3xl font-bold mt-8">Windows File Attributes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute</th>
            <th className="p-3 border">Letter</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Read-only</td>
            <td className="p-3 border">R</td>
            <td className="p-3 border">File cannot be modified or deleted</td>
          </tr>
          <tr>
            <td className="p-3 border">Hidden</td>
            <td className="p-3 border">H</td>
            <td className="p-3 border">File is not displayed by default</td>
          </tr>
          <tr>
            <td className="p-3 border">System</td>
            <td className="p-3 border">S</td>
            <td className="p-3 border">Important system file</td>
          </tr>
          <tr>
            <td className="p-3 border">Archive</td>
            <td className="p-3 border">A</td>
            <td className="p-3 border">File needs to be backed up</td>
          </tr>
          <tr>
            <td className="p-3 border">Compressed</td>
            <td className="p-3 border">C</td>
            <td className="p-3 border">File is compressed (NTFS)</td>
          </tr>
          <tr>
            <td className="p-3 border">Encrypted</td>
            <td className="p-3 border">E</td>
            <td className="p-3 border">File is encrypted (NTFS)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Extended Attributes */}
    <h2 className="text-3xl font-bold mt-8">Extended Attributes</h2>
    <p className="leading-relaxed">
      Extended attributes (xattrs) allow storing additional metadata beyond standard attributes.
      They are name-value pairs associated with files.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>User attributes:</strong> Application-specific data</li>
      <li><strong>System attributes:</strong> Access control lists (ACLs)</li>
      <li><strong>Security attributes:</strong> SELinux labels</li>
      <li><strong>Trusted attributes:</strong> Only accessible by privileged processes</li>
    </ul>

    {/* Inode Structure */}
    <h2 className="text-3xl font-bold mt-8">Inode Structure (UNIX)</h2>
    <p className="leading-relaxed">
      In UNIX-like systems, file attributes are stored in an inode (index node):
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Inode Structure:
+---------------------------+
|      File Type            |  (regular, directory, etc.)
+---------------------------+
|      Permissions          |  (rwxrwxrwx)
+---------------------------+
|      Owner UID            |
+---------------------------+
|      Group GID            |
+---------------------------+
|      File Size            |
+---------------------------+
|      Timestamps           |
|   - atime (access)        |
|   - mtime (modify)        |
|   - ctime (change)        |
+---------------------------+
|      Link Count           |
+---------------------------+
|      Data Block Pointers  |
|   - Direct (12)           |
|   - Single Indirect       |
|   - Double Indirect       |
|   - Triple Indirect       |
+---------------------------+

Note: File name is NOT stored in inode,
      it's stored in directory entries.
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>File attributes describe metadata about files beyond their content</li>
      <li>Common attributes include name, size, type, location, permissions, and timestamps</li>
      <li>UNIX uses inodes to store file attributes separate from directory entries</li>
      <li>Permissions control read, write, and execute access for owner, group, and others</li>
      <li>Windows and UNIX have different attribute systems but similar concepts</li>
    </ul>
  </div>
);

export default FileAttributes;
