import React from 'react';

const OSIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is an Operating System?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Operating System (OS) is specialized system software that serves as an intermediary between computer
      hardware and users. It manages hardware resources, provides services to application programs, and creates
      a platform for users to interact with the computer system efficiently.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      An Operating System is a program that controls the execution of application programs and acts as an
      interface between the user and the computer hardware. Its primary objectives are to make the computer
      system convenient to use and to utilize hardware resources efficiently.
    </p>

    {/* Role of OS */}
    <h2 className="text-3xl font-bold mt-8">Role of Operating System</h2>
    <p className="leading-relaxed">
      The operating system plays multiple crucial roles in a computer system:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Resource Manager:</strong> Manages all hardware and software resources including CPU, memory,
        storage devices, and peripheral devices, ensuring optimal utilization.
      </li>
      <li>
        <strong>Interface Provider:</strong> Provides a user-friendly interface between the user and the
        complex hardware components, hiding low-level details.
      </li>
      <li>
        <strong>Program Executor:</strong> Loads programs into memory and manages their execution, handling
        multiple programs concurrently in modern systems.
      </li>
      <li>
        <strong>Security Guard:</strong> Protects the system from unauthorized access and ensures data
        integrity and privacy.
      </li>
      <li>
        <strong>Error Handler:</strong> Detects and handles errors that occur during program execution or
        hardware operation.
      </li>
    </ul>

    {/* Components */}
    <h2 className="text-3xl font-bold mt-8">Main Components of an OS</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Kernel</td>
            <td className="p-3 border">Core component that manages system resources and facilitates communication between hardware and software</td>
          </tr>
          <tr>
            <td className="p-3 border">Process Manager</td>
            <td className="p-3 border">Handles creation, scheduling, and termination of processes</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Manager</td>
            <td className="p-3 border">Manages allocation and deallocation of memory to processes</td>
          </tr>
          <tr>
            <td className="p-3 border">File System</td>
            <td className="p-3 border">Organizes and manages files on storage devices</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O Manager</td>
            <td className="p-3 border">Controls input/output operations and device drivers</td>
          </tr>
          <tr>
            <td className="p-3 border">Security Module</td>
            <td className="p-3 border">Handles authentication, authorization, and system protection</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Goals */}
    <h2 className="text-3xl font-bold mt-8">Goals of Operating System</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Convenience:</strong> Make the computer system user-friendly and easy to operate</li>
      <li><strong>Efficiency:</strong> Ensure optimal utilization of system resources</li>
      <li><strong>Throughput:</strong> Maximize the number of tasks completed per unit time</li>
      <li><strong>Reliability:</strong> Ensure system stability and consistent behavior</li>
      <li><strong>Security:</strong> Protect system resources from unauthorized access</li>
      <li><strong>Portability:</strong> Enable software to run on different hardware platforms</li>
    </ul>

    {/* Examples */}
    <h2 className="text-3xl font-bold mt-8">Examples of Operating Systems</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Desktop OS:</strong> Windows, macOS, Linux (Ubuntu, Fedora)</li>
      <li><strong>Mobile OS:</strong> Android, iOS</li>
      <li><strong>Server OS:</strong> Windows Server, Red Hat Enterprise Linux, Ubuntu Server</li>
      <li><strong>Embedded OS:</strong> VxWorks, FreeRTOS, QNX</li>
      <li><strong>Real-time OS:</strong> RTLinux, LynxOS</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>OS is loaded into memory during the boot process</li>
      <li>It remains active throughout the computer operation</li>
      <li>Without an OS, users would need to communicate directly with hardware using machine language</li>
      <li>Modern operating systems support multitasking, multiuser, and multiprocessing capabilities</li>
      <li>The kernel is the most critical component that operates in privileged mode</li>
    </ul>
  </div>
);

export default OSIntroduction;
