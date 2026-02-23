import React from 'react';

const OSFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Functions of Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An operating system performs numerous functions to manage computer hardware and provide services to users
      and applications. These functions can be broadly categorized into resource management, process management,
      storage management, and security functions.
    </p>

    {/* Process Management */}
    <h2 className="text-3xl font-bold mt-8">1. Process Management</h2>
    <p className="leading-relaxed">
      Process management involves handling the creation, scheduling, and termination of processes. The OS ensures
      that multiple processes can execute concurrently without interfering with each other.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Creating and deleting user and system processes</li>
      <li>Suspending and resuming processes</li>
      <li>Providing mechanisms for process synchronization</li>
      <li>Providing mechanisms for process communication</li>
      <li>Handling deadlock situations</li>
    </ul>

    {/* Memory Management */}
    <h2 className="text-3xl font-bold mt-8">2. Memory Management</h2>
    <p className="leading-relaxed">
      Memory management ensures that main memory is efficiently utilized and that processes have the memory
      they need to execute properly.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Keeping track of which parts of memory are in use and by whom</li>
      <li>Deciding which processes to load when memory becomes available</li>
      <li>Allocating and deallocating memory space as needed</li>
      <li>Implementing virtual memory when physical memory is insufficient</li>
      <li>Managing page replacement in virtual memory systems</li>
    </ul>

    {/* File Management */}
    <h2 className="text-3xl font-bold mt-8">3. File System Management</h2>
    <p className="leading-relaxed">
      The file system provides a logical view of data storage and enables users to organize information
      in a hierarchical structure of files and directories.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Creating and deleting files and directories</li>
      <li>Supporting primitives for manipulating files and directories</li>
      <li>Mapping files onto secondary storage</li>
      <li>Providing backup mechanisms for file systems</li>
      <li>Managing file access permissions and security</li>
    </ul>

    {/* I/O Management */}
    <h2 className="text-3xl font-bold mt-8">4. I/O System Management</h2>
    <p className="leading-relaxed">
      The I/O subsystem manages all input and output operations, hiding the peculiarities of specific
      hardware devices from the user.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Managing device controllers and drivers</li>
      <li>Providing a general device-driver interface</li>
      <li>Implementing buffering, caching, and spooling</li>
      <li>Providing specific drivers for particular hardware devices</li>
      <li>Handling interrupt-driven I/O operations</li>
    </ul>

    {/* Storage Management */}
    <h2 className="text-3xl font-bold mt-8">5. Secondary Storage Management</h2>
    <p className="leading-relaxed">
      Since main memory is volatile and limited, the OS must manage secondary storage for permanent
      data storage and efficient data retrieval.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Free space management on storage devices</li>
      <li>Storage allocation for files and directories</li>
      <li>Disk scheduling for efficient data access</li>
      <li>Managing swap space for virtual memory</li>
    </ul>

    {/* Security */}
    <h2 className="text-3xl font-bold mt-8">6. Security and Protection</h2>
    <p className="leading-relaxed">
      The OS implements security mechanisms to protect the system and its resources from unauthorized access
      and malicious activities.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>User authentication through passwords and biometrics</li>
      <li>Authorization and access control mechanisms</li>
      <li>Protection against malware and viruses</li>
      <li>Encrypting sensitive data</li>
      <li>Maintaining audit logs for security events</li>
    </ul>

    {/* Network Management */}
    <h2 className="text-3xl font-bold mt-8">7. Network Management</h2>
    <p className="leading-relaxed">
      Modern operating systems include networking capabilities to enable communication between computers
      and resource sharing across networks.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Managing network connections and protocols</li>
      <li>Providing APIs for network programming</li>
      <li>Supporting distributed file systems</li>
      <li>Implementing network security measures</li>
    </ul>

    {/* Summary Table */}
    <h2 className="text-3xl font-bold mt-8">Summary of OS Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Primary Responsibility</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Process Management</td>
            <td className="p-3 border">Create, schedule, terminate processes; handle synchronization</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Management</td>
            <td className="p-3 border">Allocate/deallocate memory; implement virtual memory</td>
          </tr>
          <tr>
            <td className="p-3 border">File Management</td>
            <td className="p-3 border">Organize files; manage permissions; provide file operations</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Management</td>
            <td className="p-3 border">Control devices; manage drivers; handle buffering</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Authenticate users; enforce access control; protect data</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OSFunctions;
