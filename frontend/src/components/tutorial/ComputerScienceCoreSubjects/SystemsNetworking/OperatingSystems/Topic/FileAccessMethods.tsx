import React from 'react';

const FileAccessMethods: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Access Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File access methods define how data within a file can be accessed. The method used
      depends on the nature of the application and the structure of the file. Different
      access methods provide different trade-offs between simplicity, flexibility, and performance.
    </p>

    {/* Sequential Access */}
    <h2 className="text-3xl font-bold mt-8">1. Sequential Access</h2>
    <p className="leading-relaxed">
      Sequential access is the simplest access method. Information in the file is processed
      in order, one record after another. This is the most common mode for editors, compilers,
      and log processors.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Sequential Access:

       read/write operations
              |
              v
+--+--+--+--+--+--+--+--+--+--+
|R1|R2|R3|R4|R5|R6|R7|R8|R9|R10|
+--+--+--+--+--+--+--+--+--+--+
              ^
              |
         File Pointer
         (moves forward after each operation)

Operations:
- read_next()  : Read current record, advance pointer
- write_next() : Write to current position, advance pointer
- reset()      : Move pointer to beginning
- skip(n)      : Skip forward n records
`}
      </pre>
    </div>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Based on tape model of a file</li>
      <li>Read and write operations advance the file pointer automatically</li>
      <li>Cannot jump to arbitrary position (or very inefficient)</li>
      <li>Best for: log files, streaming data, backup processing</li>
    </ul>

    {/* Direct Access */}
    <h2 className="text-3xl font-bold mt-8">2. Direct Access (Random Access)</h2>
    <p className="leading-relaxed">
      Direct access allows reading and writing records in any order. The file is viewed
      as a numbered sequence of blocks or records. Any block can be read or written directly
      by specifying its block number.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Direct Access:

Block Numbers:  0    1    2    3    4    5    6    7
              +----+----+----+----+----+----+----+----+
              | R0 | R1 | R2 | R3 | R4 | R5 | R6 | R7 |
              +----+----+----+----+----+----+----+----+
                              ^
                              |
                         Can access any block directly
                         by specifying block number

Operations:
- read(n)  : Read block n
- write(n) : Write to block n
- seek(n)  : Position to block n
- n = position() : Get current position

// Example usage:
seek(100);          // Go to block 100
read(buffer);       // Read block 100
seek(5);            // Go to block 5
write(data);        // Write to block 5
`}
      </pre>
    </div>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Based on disk model of a file</li>
      <li>File is viewed as a collection of fixed-size blocks</li>
      <li>Can read/write any block without reading preceding blocks</li>
      <li>Best for: databases, random-access applications, swap files</li>
    </ul>

    {/* Indexed Access */}
    <h2 className="text-3xl font-bold mt-8">3. Indexed Access</h2>
    <p className="leading-relaxed">
      Indexed access uses an index to locate records. The index contains pointers to
      records based on key values, allowing quick lookup by key rather than position.
      This is built on top of direct access.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Indexed Access:

Index File                          Data File
+--------+----------+              +----+------------------+
|  Key   | Pointer  |              | Blk| Record Data      |
+--------+----------+              +----+------------------+
| "Alice"| ------->----------------->| 0 | Alice, 25, NYC   |
| "Bob"  | ------->----------------->| 3 | Bob, 30, LA      |
| "Carol"| ------->----------------->| 7 | Carol, 28, CHI   |
| "David"| ------->----------------->| 2 | David, 35, SEA   |
+--------+----------+              +----+------------------+

Lookup "Bob":
1. Search index for "Bob"
2. Get pointer to block 3
3. Directly access block 3
4. Return record

Multi-level Index:
+----------------+
| Master Index   |  (kept in memory)
+----------------+
        |
        v
+----------------+
| Secondary Index|  (on disk)
+----------------+
        |
        v
+----------------+
| Data Records   |
+----------------+
`}
      </pre>
    </div>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Requires an index structure (B-tree, hash table, etc.)</li>
      <li>Enables fast lookup by key value</li>
      <li>Index may be kept in memory for faster access</li>
      <li>Best for: large databases, file systems, search applications</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Access Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Sequential</th>
            <th className="p-3 border">Direct</th>
            <th className="p-3 border">Indexed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Access Pattern</td>
            <td className="p-3 border">One after another</td>
            <td className="p-3 border">Any order by position</td>
            <td className="p-3 border">By key value</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Random Access Time</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Overhead</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Index storage</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Logs, streams</td>
            <td className="p-3 border">Fixed-size records</td>
            <td className="p-3 border">Searchable data</td>
          </tr>
          <tr>
            <td className="p-3 border">Example Use</td>
            <td className="p-3 border">Text editor</td>
            <td className="p-3 border">Database storage</td>
            <td className="p-3 border">File indexing</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Other Access Methods */}
    <h2 className="text-3xl font-bold mt-8">Other Access Methods</h2>

    <h3 className="text-2xl font-semibold mt-6">Memory-Mapped Files</h3>
    <p className="leading-relaxed">
      A file is mapped directly into the virtual address space of a process. Reads and
      writes to memory are automatically translated to file I/O operations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// Memory-mapped file access (C)
#include <sys/mman.h>

int fd = open("data.bin", O_RDWR);
char *ptr = mmap(NULL, file_size, PROT_READ | PROT_WRITE,
                 MAP_SHARED, fd, 0);

// Access file like memory
ptr[100] = 'X';  // Writes to file
char c = ptr[200];  // Reads from file

munmap(ptr, file_size);`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Record-Based Access</h3>
    <p className="leading-relaxed">
      Some systems provide access methods based on logical records rather than bytes
      or blocks. The file system manages record boundaries.
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Sequential access processes records in order; simplest method</li>
      <li>Direct access allows jumping to any position; requires position knowledge</li>
      <li>Indexed access uses keys to locate records; fastest for lookups</li>
      <li>Choice of access method depends on application requirements</li>
      <li>Memory-mapped files provide convenient random access through virtual memory</li>
    </ul>
  </div>
);

export default FileAccessMethods;
