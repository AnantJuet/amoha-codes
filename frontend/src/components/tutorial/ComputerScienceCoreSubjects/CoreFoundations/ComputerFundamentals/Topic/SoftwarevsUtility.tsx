import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between Application Software and Utility Software ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Application Software and Utility Software
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 09 Oct, 2024</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Application software and utility software are two major categories of computer programs, each serving distinct purposes. 
      Application software helps users perform specific tasks, whereas utility software focuses on system maintenance and optimization.
    </p>

    {/* ================= What is Application Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is Application Software?</h2>
    <p className="text-lg leading-relaxed">
      Application Software is designed to assist users in performing personal or business tasks. Its primary goal is to fulfill user requirements efficiently.
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Examples:</strong> VLC Media Player, Microsoft Word, Google Chrome, Accounting Software, Photo Editors.
    </p>

    <h3 className="text-2xl font-bold mt-4">Features of Application Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Variety of Types: Includes browsers, multimedia apps, office software, etc.</li>
      <li>User Interaction: Requires direct communication with users for commands or data.</li>
      <li>Platform-Specific: Often designed for specific operating systems (e.g., Windows, macOS).</li>
    </ul>

    {/* ================= What is Utility Software ================= */}
    <h2 className="text-3xl font-bold  mt-6">What is Utility Software?</h2>
    <p className="text-lg leading-relaxed">
      Utility Software helps maintain and optimize the computer system. It manages hardware, software, and system operations to ensure smooth functioning.
    </p>
    <p className="text-lg leading-relaxed">
      <strong>Examples:</strong> AVAST Antivirus, Disk Tools, Backup Software.
    </p>

    <h3 className="text-2xl font-bold mt-4">Features of Utility Software</h3>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Security: Provides protection via firewalls, antivirus, and encryption.</li>
      <li>System-Level Interaction: Works closely with the OS to manage files and resources.</li>
      <li>Pre-installed or Third-Party: Can come pre-installed or be installed separately.</li>
    </ul>

    {/* ================= Differences Table ================= */}
    <h2 className="text-3xl font-bold  mt-6">Differences Between Application Software and Utility Software</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left mt-4">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Basis of Comparison</th>
          <th className="border px-4 py-2">Application Software</th>
          <th className="border px-4 py-2">Utility Software</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Definition</td>
          <td className="border px-4 py-2">Performs specific functions for end-users.</td>
          <td className="border px-4 py-2">Helps improve system performance and maintain computer functionality.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Supports</td>
          <td className="border px-4 py-2">Assists users in completing tasks.</td>
          <td className="border px-4 py-2">Analyzes, configures, optimizes, or maintains the system.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Focus</td>
          <td className="border px-4 py-2">Focuses on user tasks or organizational work.</td>
          <td className="border px-4 py-2">Focuses on computer infrastructure operations.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Download</td>
          <td className="border px-4 py-2">Can be downloaded from the internet.</td>
          <td className="border px-4 py-2">Comes pre-installed or can be downloaded.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Space</td>
          <td className="border px-4 py-2">Requires more storage and power.</td>
          <td className="border px-4 py-2">Requires less storage and power.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Functionality</td>
          <td className="border px-4 py-2">Performs coordinated tasks for end-users.</td>
          <td className="border px-4 py-2">Performs maintenance tasks to optimize system performance.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Variety of Tasks</td>
          <td className="border px-4 py-2">Handles text, numbers, audio, multimedia, and business tasks.</td>
          <td className="border px-4 py-2">Executes system-critical operations like defragmentation, scanning, and cleaning.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">User Support</td>
          <td className="border px-4 py-2">Improves productivity, communication, and business efficiency.</td>
          <td className="border px-4 py-2">Helps control and maintain system operations effectively.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Price</td>
          <td className="border px-4 py-2">Free or paid.</td>
          <td className="border px-4 py-2">Mostly free.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Size</td>
          <td className="border px-4 py-2">Large.</td>
          <td className="border px-4 py-2">Small.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Usage</td>
          <td className="border px-4 py-2">May or may not benefit system directly.</td>
          <td className="border px-4 py-2">Always improves system performance.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Example</td>
          <td className="border px-4 py-2">Graphic Designing Software</td>
          <td className="border px-4 py-2">Antivirus Software</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      Application software focuses on fulfilling user needs, while utility software maintains and optimizes the system. 
      Together, they ensure a productive and well-functioning computing environment.
    </p>

  </div>
);

export default Home;
