import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference Between System Software and Application Software ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference Between System Software and Application Software
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In the era of digitalization, software is a crucial support that allows computer hardware to perform useful tasks. 
      There are two main categories: system software and application software. System software manages hardware and provides a platform for application software, while application software helps users perform specific tasks directly.
    </p>

    {/* ================= Types of Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">Types of Software</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>System Software:</strong> Manages computer resources and provides a platform for other software.</li>
      <li><strong>Application Software:</strong> Designed to perform specific tasks requested by users.</li>
    </ul>

    {/* ================= What is System Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is System Software?</h2>
    <p className="text-lg leading-relaxed">
      System software acts as an interface between hardware and application software. It is usually written in low-level languages and ensures the system runs smoothly.
    </p>
    <h3 className="text-2xl font-bold mt-4">Functions of System Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Memory Management</li>
      <li>Processor Management</li>
      <li>File Management</li>
      <li>Security</li>
      <li>Error-detecting Aids</li>
      <li>Scheduling</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Types of System Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>Operating System:</strong> Manages resources like CPU, memory, and devices. Examples: Linux, macOS, Windows.</li>
      <li><strong>Language Processor:</strong> Converts high-level code into machine-readable instructions.</li>
      <li><strong>Device Driver:</strong> Helps hardware devices communicate with the system.</li>
    </ul>

    {/* ================= What is Application Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is Application Software?</h2>
    <p className="text-lg leading-relaxed">
      Application software runs on the platform provided by system software and is written in high-level languages. It performs specific tasks directly for users.
    </p>

    <h3 className="text-2xl font-bold mt-4">Functions of Application Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Information and data management</li>
      <li>Document creation and management</li>
      <li>Visual and video development</li>
      <li>Email, messaging, and conferencing</li>
      <li>Accounting, finance, and payroll management</li>
      <li>Resource management (ERP, CRM systems)</li>
    </ul>

    <h3 className="text-2xl font-bold mt-4">Types of Application Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li><strong>General Purpose Software:</strong> Multi-task software like MS Word, Excel.</li>
      <li><strong>Customized Software:</strong> Designed for specific organizations, e.g., Railway Reservation System.</li>
      <li><strong>Utility Software:</strong> Optimizes and maintains system performance.</li>
    </ul>

    {/* ================= Differences Table ================= */}
    <h2 className="text-3xl font-bold  mt-6">Differences Between System Software and Application Software</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">System Software</th>
          <th className="border px-4 py-2">Application Software</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Purpose</td>
          <td className="border px-4 py-2">Maintains system resources and provides a platform for applications.</td>
          <td className="border px-4 py-2">Performs specific tasks requested by users.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Programming Language</td>
          <td className="border px-4 py-2">Low-level languages.</td>
          <td className="border px-4 py-2">High-level languages.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Type</td>
          <td className="border px-4 py-2">General-purpose software.</td>
          <td className="border px-4 py-2">Specific-purpose software.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Dependency</td>
          <td className="border px-4 py-2">Runs independently when system boots.</td>
          <td className="border px-4 py-2">Depends on system software to run.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Execution</td>
          <td className="border px-4 py-2">Runs in the background from system start to shutdown.</td>
          <td className="border px-4 py-2">Runs on user request.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Complexity</td>
          <td className="border px-4 py-2">More complex to develop.</td>
          <td className="border px-4 py-2">Simpler to develop.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Interaction</td>
          <td className="border px-4 py-2">No direct interaction with users; serves as an interface between hardware and software.</td>
          <td className="border px-4 py-2">Direct interaction with users.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Examples</td>
          <td className="border px-4 py-2">Operating System, Device Drivers, Language Processors.</td>
          <td className="border px-4 py-2">Photoshop, VLC Media Player, MS Word.</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      Both system software and application software are essential components of a computer system. System software ensures smooth hardware management and provides a platform for applications, 
      while application software allows users to perform specific tasks efficiently and directly. Understanding the difference helps in better utilization of computer systems.
    </p>

  </div>
);

export default Home;
