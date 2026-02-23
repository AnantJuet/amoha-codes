import React from 'react';

const FileSystemIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to File Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A file system is a method and data structure that the operating system uses to control
      how data is stored and retrieved on storage devices. It provides a way to organize files
      on storage media such as hard drives, SSDs, and flash drives.
    </p>

    {/* What is a File System */}
    <h2 className="text-3xl font-bold mt-8">What is a File System?</h2>
    <p className="leading-relaxed">
      A file system is the logical component of an operating system that manages and organizes
      files on storage devices. Without a file system, data placed in a storage medium would
      be one large body of data with no way to tell where one piece of data stops and the next begins.
    </p>

    {/* Key Functions */}
    <h2 className="text-3xl font-bold mt-8">Key Functions of File Systems</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Data Storage:</strong> Organize and store data in files and directories
      </li>
      <li>
        <strong>Name Management:</strong> Provide naming conventions for files and directories
      </li>
      <li>
        <strong>Space Allocation:</strong> Manage free and allocated space on storage devices
      </li>
      <li>
        <strong>Access Control:</strong> Implement permissions and security for files
      </li>
      <li>
        <strong>Data Integrity:</strong> Ensure consistency and reliability of stored data
      </li>
      <li>
        <strong>Metadata Management:</strong> Maintain information about files (size, dates, permissions)
      </li>
    </ul>

    {/* File System Components */}
    <h2 className="text-3xl font-bold mt-8">File System Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
File System Architecture:
+--------------------------------------------------+
|              User Applications                    |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|           File System Interface                   |
|  (open, read, write, close, create, delete)      |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|         File Organization Module                  |
|  (logical blocks to physical blocks mapping)     |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|           Basic File System                       |
|  (issues commands to device drivers)             |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|            I/O Control                           |
|  (device drivers and interrupt handlers)         |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|           Hardware Devices                        |
|  (disk drives, SSDs, etc.)                       |
+--------------------------------------------------+
`}
      </pre>
    </div>

    {/* Types of File Systems */}
    <h2 className="text-3xl font-bold mt-8">Common File System Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File System</th>
            <th className="p-3 border">Operating System</th>
            <th className="p-3 border">Max File Size</th>
            <th className="p-3 border">Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">NTFS</td>
            <td className="p-3 border">Windows</td>
            <td className="p-3 border">16 EB</td>
            <td className="p-3 border">Journaling, ACLs, encryption</td>
          </tr>
          <tr>
            <td className="p-3 border">ext4</td>
            <td className="p-3 border">Linux</td>
            <td className="p-3 border">16 TB</td>
            <td className="p-3 border">Journaling, extents, backward compatible</td>
          </tr>
          <tr>
            <td className="p-3 border">HFS+</td>
            <td className="p-3 border">macOS (legacy)</td>
            <td className="p-3 border">8 EB</td>
            <td className="p-3 border">Journaling, metadata</td>
          </tr>
          <tr>
            <td className="p-3 border">APFS</td>
            <td className="p-3 border">macOS</td>
            <td className="p-3 border">8 EB</td>
            <td className="p-3 border">Encryption, snapshots, cloning</td>
          </tr>
          <tr>
            <td className="p-3 border">FAT32</td>
            <td className="p-3 border">Cross-platform</td>
            <td className="p-3 border">4 GB</td>
            <td className="p-3 border">Wide compatibility, simple</td>
          </tr>
          <tr>
            <td className="p-3 border">exFAT</td>
            <td className="p-3 border">Cross-platform</td>
            <td className="p-3 border">16 EB</td>
            <td className="p-3 border">Flash drives, no journaling</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* File System Operations */}
    <h2 className="text-3xl font-bold mt-8">File System Operations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Create:</strong> Make a new file or directory</li>
      <li><strong>Delete:</strong> Remove a file or directory</li>
      <li><strong>Open:</strong> Prepare a file for reading or writing</li>
      <li><strong>Close:</strong> Release resources associated with an open file</li>
      <li><strong>Read:</strong> Retrieve data from a file</li>
      <li><strong>Write:</strong> Store data in a file</li>
      <li><strong>Seek:</strong> Move to a specific position in a file</li>
      <li><strong>Truncate:</strong> Reduce the size of a file</li>
      <li><strong>Rename:</strong> Change the name of a file</li>
    </ul>

    {/* Mounting */}
    <h2 className="text-3xl font-bold mt-8">File System Mounting</h2>
    <p className="leading-relaxed">
      Before a file system can be accessed, it must be mounted. Mounting is the process of
      attaching a file system to a specific directory (mount point) in the overall directory tree.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Mount Point Example (Linux):
                    /
          /         |         \\
        bin       home       mnt
         |          |          |
      ...        ujjwal     usb_drive  <-- mounted USB drive
                   |           |
                 ...         data.txt
`}
      </pre>
    </div>

    {/* Virtual File System */}
    <h2 className="text-3xl font-bold mt-8">Virtual File System (VFS)</h2>
    <p className="leading-relaxed">
      The Virtual File System is an abstraction layer that provides a common interface for
      different file system implementations. It allows the operating system to support
      multiple file system types simultaneously.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Provides a unified API for all file systems</li>
      <li>Separates generic operations from specific implementations</li>
      <li>Enables seamless access to different file systems</li>
      <li>Supports network file systems (NFS, SMB)</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>File systems organize data into files and directories</li>
      <li>They manage storage space, access control, and metadata</li>
      <li>Different operating systems use different file system types</li>
      <li>File systems must be mounted before use</li>
      <li>VFS provides abstraction across multiple file system types</li>
    </ul>
  </div>
);

export default FileSystemIntro;
