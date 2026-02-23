import React from 'react';

const OSServices: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operating System Services
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating systems provide various services to both users and programs. These services make the
      programming task easier by providing a consistent interface and handling complex hardware interactions.
      OS services can be categorized based on whether they benefit users directly or help system efficiency.
    </p>

    {/* User Services */}
    <h2 className="text-3xl font-bold mt-8">Services for User Convenience</h2>

    <h3 className="text-2xl font-semibold mt-4">1. User Interface</h3>
    <p className="leading-relaxed">
      The OS provides interfaces for users to interact with the system:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Command-Line Interface (CLI):</strong> Text-based interface where users type commands</li>
      <li><strong>Graphical User Interface (GUI):</strong> Visual interface with windows, icons, and menus</li>
      <li><strong>Batch Interface:</strong> Commands stored in files and executed in sequence</li>
      <li><strong>Touch Interface:</strong> Gesture-based interaction on touchscreen devices</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Program Execution</h3>
    <p className="leading-relaxed">
      The OS loads programs into memory, runs them, and handles their termination:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Loading program code and data into memory</li>
      <li>Setting up execution environment</li>
      <li>Managing program execution</li>
      <li>Handling normal and abnormal termination</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. I/O Operations</h3>
    <p className="leading-relaxed">
      Programs cannot access I/O devices directly for security reasons. The OS provides I/O services:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Reading from and writing to files and devices</li>
      <li>Managing special I/O devices like printers and displays</li>
      <li>Providing device-independent I/O operations</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. File System Manipulation</h3>
    <p className="leading-relaxed">
      The OS provides comprehensive file management services:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Creating and deleting files and directories</li>
      <li>Reading and writing file contents</li>
      <li>Searching for files</li>
      <li>Managing file attributes and permissions</li>
      <li>Mapping files to secondary storage</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. Communication Services</h3>
    <p className="leading-relaxed">
      The OS enables processes to communicate and exchange information:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Shared Memory:</strong> Multiple processes share a memory region</li>
      <li><strong>Message Passing:</strong> Processes exchange messages through OS</li>
      <li><strong>Pipes:</strong> Data channels between related processes</li>
      <li><strong>Sockets:</strong> Network communication endpoints</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Error Detection and Handling</h3>
    <p className="leading-relaxed">
      The OS constantly monitors for errors and takes appropriate action:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Hardware errors (memory errors, power failures)</li>
      <li>I/O device errors (disk failures, network issues)</li>
      <li>Software errors (arithmetic overflow, illegal memory access)</li>
      <li>Taking corrective actions or notifying users</li>
    </ul>

    {/* System Services */}
    <h2 className="text-3xl font-bold mt-8">Services for System Efficiency</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Resource Allocation</h3>
    <p className="leading-relaxed">
      When multiple users or processes run concurrently, resources must be allocated efficiently:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>CPU cycles allocation through scheduling</li>
      <li>Memory allocation and deallocation</li>
      <li>Storage space management</li>
      <li>Device allocation (printers, drives)</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. Accounting</h3>
    <p className="leading-relaxed">
      The OS keeps track of which users use how many resources:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Tracking CPU time usage per user/process</li>
      <li>Monitoring memory consumption</li>
      <li>Recording disk space usage</li>
      <li>Generating usage statistics for billing or analysis</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Protection and Security</h3>
    <p className="leading-relaxed">
      The OS ensures system integrity and user data protection:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li><strong>Protection:</strong> Controlling access to system resources</li>
      <li><strong>Security:</strong> Defending against external threats</li>
      <li>User authentication (passwords, biometrics)</li>
      <li>Access control lists and permissions</li>
      <li>Recording security events in logs</li>
    </ul>

    {/* Service Types Summary */}
    <h2 className="text-3xl font-bold mt-8">Summary of OS Services</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Service Category</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Beneficiary</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">User Interface</td>
            <td className="p-3 border">Human-computer interaction</td>
            <td className="p-3 border">User</td>
          </tr>
          <tr>
            <td className="p-3 border">Program Execution</td>
            <td className="p-3 border">Run user programs</td>
            <td className="p-3 border">User/Program</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Operations</td>
            <td className="p-3 border">Device interaction</td>
            <td className="p-3 border">User/Program</td>
          </tr>
          <tr>
            <td className="p-3 border">File Management</td>
            <td className="p-3 border">Data organization</td>
            <td className="p-3 border">User/Program</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">Process interaction</td>
            <td className="p-3 border">Program</td>
          </tr>
          <tr>
            <td className="p-3 border">Resource Allocation</td>
            <td className="p-3 border">Efficient resource use</td>
            <td className="p-3 border">System</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">System protection</td>
            <td className="p-3 border">System/User</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OSServices;
