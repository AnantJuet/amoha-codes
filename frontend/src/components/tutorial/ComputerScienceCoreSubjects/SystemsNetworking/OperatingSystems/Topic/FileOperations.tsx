import React from 'react';

const FileOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File operations are the fundamental actions that can be performed on files. The operating
      system provides a set of system calls to allow programs to create, manipulate, and manage
      files. These operations form the core interface between applications and the file system.
    </p>

    {/* Basic File Operations */}
    <h2 className="text-3xl font-bold mt-8">Basic File Operations</h2>
    <p className="leading-relaxed">
      The operating system typically provides six basic file operations:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Create</h3>
    <p className="leading-relaxed">
      Creating a new file involves two steps: allocating space in the file system and
      creating an entry in the directory structure.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
int fd = creat("newfile.txt", 0644);

// POSIX
int fd = open("newfile.txt", O_CREAT | O_WRONLY, 0644);

// Python
file = open("newfile.txt", "w")`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Open</h3>
    <p className="leading-relaxed">
      Before a file can be read or written, it must be opened. Opening a file returns a
      file descriptor (or handle) that is used for subsequent operations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
int fd = open("myfile.txt", O_RDONLY);  // Read only
int fd = open("myfile.txt", O_WRONLY);  // Write only
int fd = open("myfile.txt", O_RDWR);    // Read and write

// Open modes and flags:
// O_RDONLY  - Read only
// O_WRONLY  - Write only
// O_RDWR    - Read and write
// O_APPEND  - Append to end
// O_TRUNC   - Truncate file
// O_CREAT   - Create if doesn't exist`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Read</h3>
    <p className="leading-relaxed">
      Reading transfers data from the file into a memory buffer. The read position is
      maintained by a file pointer that advances automatically.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
char buffer[1024];
ssize_t bytes_read = read(fd, buffer, sizeof(buffer));

// read() returns:
//   > 0 : Number of bytes read
//   = 0 : End of file reached
//   < 0 : Error occurred`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Write</h3>
    <p className="leading-relaxed">
      Writing transfers data from a memory buffer to the file. The write position is
      determined by the current file pointer or the end of file if opened in append mode.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
char *data = "Hello, World!";
ssize_t bytes_written = write(fd, data, strlen(data));

// write() returns:
//   > 0 : Number of bytes written
//   < 0 : Error occurred`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Seek (Reposition)</h3>
    <p className="leading-relaxed">
      Seeking moves the file pointer to a specific position within the file, enabling
      random access to file contents.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
off_t new_position = lseek(fd, offset, whence);

// whence values:
// SEEK_SET - Offset from beginning of file
// SEEK_CUR - Offset from current position
// SEEK_END - Offset from end of file

// Examples:
lseek(fd, 0, SEEK_SET);    // Go to beginning
lseek(fd, 0, SEEK_END);    // Go to end
lseek(fd, -10, SEEK_CUR);  // Go back 10 bytes`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">6. Close</h3>
    <p className="leading-relaxed">
      Closing a file releases the resources associated with the open file, including
      the file descriptor and any buffers.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// C Example
int result = close(fd);

// close() returns:
//   0  : Success
//   -1 : Error`}
      </pre>
    </div>

    {/* Additional Operations */}
    <h2 className="text-3xl font-bold mt-8">Additional File Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">System Call (UNIX)</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Delete</td>
            <td className="p-3 border">unlink(), remove()</td>
            <td className="p-3 border">Remove file from directory and free space</td>
          </tr>
          <tr>
            <td className="p-3 border">Truncate</td>
            <td className="p-3 border">truncate(), ftruncate()</td>
            <td className="p-3 border">Reduce file size to specified length</td>
          </tr>
          <tr>
            <td className="p-3 border">Rename</td>
            <td className="p-3 border">rename()</td>
            <td className="p-3 border">Change file name or move to new directory</td>
          </tr>
          <tr>
            <td className="p-3 border">Get Attributes</td>
            <td className="p-3 border">stat(), fstat()</td>
            <td className="p-3 border">Retrieve file metadata</td>
          </tr>
          <tr>
            <td className="p-3 border">Set Attributes</td>
            <td className="p-3 border">chmod(), chown()</td>
            <td className="p-3 border">Modify file permissions and ownership</td>
          </tr>
          <tr>
            <td className="p-3 border">Link</td>
            <td className="p-3 border">link(), symlink()</td>
            <td className="p-3 border">Create hard or symbolic link</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Open File Table */}
    <h2 className="text-3xl font-bold mt-8">Open File Table</h2>
    <p className="leading-relaxed">
      The operating system maintains tables to manage open files. There are typically
      two levels of tables:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Open File Management:

Process A                          System-Wide Open File Table
+-----------------+               +---------------------------+
| Per-Process     |               | File: myfile.txt          |
| File Table      |               | Open Count: 2             |
+-----------------+               | Location on disk          |
| fd 0: stdin     |               | File Size                 |
| fd 1: stdout    |               | Permissions               |
| fd 2: stderr    |       +------>| Inode pointer             |
| fd 3: --------+ |       |       +---------------------------+
+---------------|--+      |       | File: data.txt            |
                |         |       | Open Count: 1             |
                +---------+       | ...                       |
                                  +---------------------------+
Process B
+-----------------+
| Per-Process     |
| File Table      |
+-----------------+
| fd 0: stdin     |
| fd 1: stdout    |
| fd 2: stderr    |
| fd 3: --------+ |
+---------------|--+
                |
                +---------> (points to myfile.txt entry)
`}
      </pre>
    </div>

    {/* File Locking */}
    <h2 className="text-3xl font-bold mt-8">File Locking</h2>
    <p className="leading-relaxed">
      File locking prevents multiple processes from simultaneously accessing a file in
      conflicting ways.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Shared Lock (Read Lock):</strong> Multiple processes can hold shared locks
        simultaneously. Used when reading a file.
      </li>
      <li>
        <strong>Exclusive Lock (Write Lock):</strong> Only one process can hold an exclusive
        lock. Used when writing to prevent corruption.
      </li>
      <li>
        <strong>Advisory Locking:</strong> Locks are suggestions; processes must cooperate
        by checking locks before access.
      </li>
      <li>
        <strong>Mandatory Locking:</strong> The OS enforces locks; access is blocked if
        a conflicting lock is held.
      </li>
    </ul>

    {/* Complete Example */}
    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>

int main() {
    int fd;
    char buffer[100];
    char *message = "Hello, File System!";

    // Create and open file for writing
    fd = open("example.txt", O_CREAT | O_WRONLY | O_TRUNC, 0644);
    if (fd == -1) {
        perror("Error opening file");
        return 1;
    }

    // Write to file
    write(fd, message, strlen(message));
    close(fd);

    // Open file for reading
    fd = open("example.txt", O_RDONLY);
    if (fd == -1) {
        perror("Error opening file");
        return 1;
    }

    // Read from file
    ssize_t bytes = read(fd, buffer, sizeof(buffer) - 1);
    buffer[bytes] = '\\0';
    printf("Read: %s\\n", buffer);

    // Close file
    close(fd);

    return 0;
}`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Six basic operations: create, open, read, write, seek, close</li>
      <li>Files must be opened before reading or writing</li>
      <li>File descriptors (integers) are used to reference open files</li>
      <li>The OS maintains per-process and system-wide open file tables</li>
      <li>File locking prevents concurrent access conflicts</li>
      <li>Always close files to release resources and flush buffers</li>
    </ul>
  </div>
);

export default FileOperations;
