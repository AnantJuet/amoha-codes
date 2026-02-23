import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference Between Application Software and Operating System ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference Between Application Software and Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A computer executes tasks with the help of software, which is a set of instructions. Software can be broadly divided into system software and application software. 
      The system software, primarily the operating system, manages computer hardware and provides services for other software, while application software performs specific user-oriented tasks.
    </p>

    {/* ================= What is Operating System ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is an Operating System?</h2>
    <p className="text-lg leading-relaxed">
      An operating system (OS) is a system software that acts as an interface between the user and computer hardware. 
      It provides essential services for computer programs and manages resources such as memory, processing, and storage. 
      OS is typically developed using languages like C, C++, and assembly.
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Examples:</strong> Microsoft Windows, Linux, Unix, DOS.
    </p>

    <h3 className="text-2xl font-bold mt-4">Types of Operating System</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Batch OS:</strong> Processes batches of jobs without direct user interaction.</li>
      <li><strong>Time-sharing OS:</strong> Allocates time slots for multiple tasks to ensure fair CPU usage.</li>
      <li><strong>Distributed OS:</strong> Manages a network of interconnected computers sharing resources.</li>
      <li><strong>Network OS:</strong> Supports multiple computers connected to a shared server.</li>
      <li><strong>Real-time OS:</strong> Designed to perform tasks within strict time constraints (e.g., airbags, missiles).</li>
    </ul>

    {/* ================= What is Application Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is Application Software?</h2>
    <p className="text-lg leading-relaxed">
      Application software is designed to perform specific tasks for users. It requires an operating system to run and is developed using high-level languages like Java, C, and C++.
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Examples:</strong> Photoshop, VLC Media Player, Mozilla Firefox, Google Chrome.
    </p>

    <h3 className="text-2xl font-bold mt-4">Types of Application Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Freeware:</strong> Free to use, e.g., Adobe Reader, LibreOffice.</li>
      <li><strong>Open Source:</strong> Source code available to modify, e.g., GIMP, Apache Web Server.</li>
      <li><strong>Shareware:</strong> Free trial with later payment, e.g., WinZip, Skype.</li>
      <li><strong>Custom Software:</strong> Built for specific users or organizations, e.g., e-commerce solutions.</li>
      <li><strong>Packaged Software:</strong> Bundled programs, e.g., Microsoft Office (Word, Excel, PowerPoint).</li>
    </ul>

    {/* ================= Differences Table ================= */}
    <h2 className="text-3xl font-bold  mt-6">Differences Between Application Software and Operating System</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">Application Software</th>
          <th className="border px-4 py-2">Operating System</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Definition</td>
          <td className="border px-4 py-2">Performs specific tasks for end-users.</td>
          <td className="border px-4 py-2">Manages hardware and software resources and provides common services.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Installation</td>
          <td className="border px-4 py-2">Downloaded from the internet.</td>
          <td className="border px-4 py-2">Pre-installed on devices.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Development</td>
          <td className="border px-4 py-2">Developed using Java, C, C++, Visual Basic.</td>
          <td className="border px-4 py-2">Developed using C, C++, and Assembly.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Purpose</td>
          <td className="border px-4 py-2">Accomplishes specific user tasks.</td>
          <td className="border px-4 py-2">Efficiently manages hardware resources.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Size</td>
          <td className="border px-4 py-2">Usually in Megabytes (MB).</td>
          <td className="border px-4 py-2">Usually in Gigabytes (GB).</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Execution</td>
          <td className="border px-4 py-2">Runs only when the user launches it.</td>
          <td className="border px-4 py-2">Boots with the system and runs until shutdown.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Functionality</td>
          <td className="border px-4 py-2">Performs specific tasks requested by users.</td>
          <td className="border px-4 py-2">Acts as an interface between hardware and user, handling memory, processes, scheduling, etc.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Dependency</td>
          <td className="border px-4 py-2">Depends on the operating system to run.</td>
          <td className="border px-4 py-2">Independent of application software; provides a platform to execute them.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Examples</td>
          <td className="border px-4 py-2">Photoshop, VLC Media Player, Google Chrome</td>
          <td className="border px-4 py-2">Microsoft Windows, Linux, Unix, DOS</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      The operating system provides the foundation for a computer to run, managing hardware and resources, while application software serves specific user needs. 
      Both are essential for a fully functional computing environment.
    </p>

  </div>
);

export default Home;
