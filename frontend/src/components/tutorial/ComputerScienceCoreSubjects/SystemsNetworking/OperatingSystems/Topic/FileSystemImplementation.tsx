import React from 'react';

const FileSystemImplementation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File System Implementation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File system implementation involves how the operating system structures and manages
      data on storage devices. This includes the on-disk structures that hold file data and
      metadata, as well as the in-memory structures used for efficient file access.
    </p>

    {/* On-Disk Structures */}
    <h2 className="text-3xl font-bold mt-8">On-Disk Structures</h2>
    <p className="leading-relaxed">
      A file system stores several types of information on disk:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Disk Layout:

+------------------+------------------+------------------+
|   Boot Block     |   Superblock     |   Block Group 0  |
+------------------+------------------+------------------+
|   Block Group 1  |   Block Group 2  |      ...         |
+------------------+------------------+------------------+

Boot Block: Contains code to load the operating system

Superblock: Contains critical file system information
  - Total size of file system
  - Number of blocks
  - Block size
  - Free block count
  - Free inode count
  - Pointers to free lists/bitmaps

Block Group Structure (typical):
+----------+----------+----------+----------+----------+
| Group    | Block    | Inode    | Inode    | Data     |
| Desc.    | Bitmap   | Bitmap   | Table    | Blocks   |
+----------+----------+----------+----------+----------+
`}
      </pre>
    </div>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">File System Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Boot Control Block</td>
            <td className="p-3 border">Disk (first block)</td>
            <td className="p-3 border">Boot the system from this partition</td>
          </tr>
          <tr>
            <td className="p-3 border">Volume Control Block</td>
            <td className="p-3 border">Disk (superblock)</td>
            <td className="p-3 border">Volume details: size, block counts, pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Directory Structure</td>
            <td className="p-3 border">Disk</td>
            <td className="p-3 border">Organize files, store names and pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">File Control Block (Inode)</td>
            <td className="p-3 border">Disk</td>
            <td className="p-3 border">File metadata and data block pointers</td>
          </tr>
          <tr>
            <td className="p-3 border">Mount Table</td>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Mounted file systems info</td>
          </tr>
          <tr>
            <td className="p-3 border">Open File Table</td>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Currently open files</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Inode Structure */}
    <h2 className="text-3xl font-bold mt-8">Inode Structure</h2>
    <p className="leading-relaxed">
      An inode (index node) is the on-disk structure that stores all metadata about a file
      except its name. Each file has exactly one inode.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Inode Structure (UNIX):

+---------------------------+
|      Mode (permissions)   |  File type and rwxrwxrwx
+---------------------------+
|      Owner UID            |
+---------------------------+
|      Group GID            |
+---------------------------+
|      File Size            |
+---------------------------+
|      Timestamps           |
|   - Access time           |
|   - Modify time           |
|   - Change time           |
+---------------------------+
|      Link Count           |
+---------------------------+
|   Direct Block Pointers   |  12 pointers to data blocks
|      [0] -> block         |
|      [1] -> block         |
|      ...                  |
|      [11] -> block        |
+---------------------------+
|   Single Indirect         |  -> block of pointers
+---------------------------+
|   Double Indirect         |  -> block of pointers to blocks of pointers
+---------------------------+
|   Triple Indirect         |  -> three levels of indirection
+---------------------------+

Maximum file size calculation (4KB blocks, 4-byte pointers):
- Direct: 12 * 4KB = 48KB
- Single Indirect: 1024 * 4KB = 4MB
- Double Indirect: 1024 * 1024 * 4KB = 4GB
- Triple Indirect: 1024^3 * 4KB = 4TB
Total: ~4TB maximum file size
`}
      </pre>
    </div>

    {/* In-Memory Structures */}
    <h2 className="text-3xl font-bold mt-8">In-Memory Structures</h2>
    <p className="leading-relaxed">
      For efficient access, the OS maintains several structures in memory:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
In-Memory File System Structures:

System-Wide Open File Table:
+----+------------+---------+--------+------------+
| ID | Inode Ptr  | Mode    | RefCnt | FileOffset |
+----+------------+---------+--------+------------+
| 0  | -> inode 42|  READ   |   3    |    1024    |
| 1  | -> inode 17|  WRITE  |   1    |    0       |
| 2  | -> inode 89|  RDWR   |   2    |    512     |
+----+------------+---------+--------+------------+

Per-Process Open File Table:
Process A:                      Process B:
+----+-------------+            +----+-------------+
| fd | System Ptr  |            | fd | System Ptr  |
+----+-------------+            +----+-------------+
| 0  | stdin       |            | 0  | stdin       |
| 1  | stdout      |            | 1  | stdout      |
| 2  | stderr      |            | 2  | stderr      |
| 3  | -> entry 0  |            | 3  | -> entry 0  |
| 4  | -> entry 2  |            | 4  | -> entry 1  |
+----+-------------+            +----+-------------+
`}
      </pre>
    </div>

    {/* Virtual File System */}
    <h2 className="text-3xl font-bold mt-8">Virtual File System (VFS)</h2>
    <p className="leading-relaxed">
      The VFS provides an abstraction layer that allows multiple file system types to be
      accessed through a uniform interface.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
VFS Architecture:

+--------------------------------------------------+
|              System Call Interface               |
|     (open, read, write, close, etc.)            |
+--------------------------------------------------+
                      |
                      v
+--------------------------------------------------+
|           Virtual File System (VFS)              |
|   - Unified interface for all file systems       |
|   - Manages vnodes (virtual inodes)             |
|   - Routes operations to correct FS              |
+--------------------------------------------------+
         |            |            |
         v            v            v
   +----------+  +----------+  +----------+
   |   ext4   |  |   NTFS   |  |   NFS    |
   +----------+  +----------+  +----------+
        |             |             |
        v             v             v
   [local disk]  [local disk]  [network]

VFS Objects:
- superblock: Mounted file system
- inode: File metadata
- dentry: Directory entry (cached)
- file: Open file instance
`}
      </pre>
    </div>

    {/* Directory Implementation */}
    <h2 className="text-3xl font-bold mt-8">Directory Implementation</h2>
    <p className="leading-relaxed">
      Directories can be implemented in several ways:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Linear List:</strong> Simple list of (name, inode) pairs. Easy to implement
        but slow for large directories (O(n) search).
      </li>
      <li>
        <strong>Hash Table:</strong> Hash file name to get bucket. Much faster (O(1) average)
        but requires handling collisions.
      </li>
      <li>
        <strong>B-Tree:</strong> Balanced tree structure. Efficient for large directories,
        used in modern file systems like ext4 and NTFS.
      </li>
    </ul>

    {/* Partition and Mounting */}
    <h2 className="text-3xl font-bold mt-8">Partitions and Mounting</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Disk Partitioning:

Physical Disk:
+----------+----------+----------+----------+
| Partition| Partition| Partition| Partition|
|    0     |    1     |    2     |    3     |
| (ext4)   | (ext4)   | (swap)   | (NTFS)   |
+----------+----------+----------+----------+

Mounting:
Before: /         After: /
        |                 |
       bin               bin
       home              home
       mnt               mnt
        |                 |-- usb (mounted partition 1)
      (empty)                  |-- files...

Mount command: mount /dev/sda1 /mnt/usb
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>File systems have both on-disk and in-memory structures</li>
      <li>Inodes store file metadata and pointers to data blocks</li>
      <li>VFS provides a uniform interface across different file systems</li>
      <li>Directory implementation affects search performance</li>
      <li>Mounting attaches a file system to the directory tree</li>
    </ul>
  </div>
);

export default FileSystemImplementation;
