import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Computer Hardware ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Computer Hardware
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 23 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Computer hardware refers to the physical components of a computer that you can see and touch.
      These components work together to process input and deliver output based on user instructions.
      In this article, we’ll explore the different types of computer hardware, their functions, and how
      they interact to make your computer work.
    </p>

    <p className="leading-relaxed">
      The computer mainly has two major components: <strong>Hardware</strong> and <strong>Software</strong>.
      In this article, we only discuss computer hardware.
    </p>

    {/* What is Computer Hardware */}
    <h2 className="text-3xl font-bold  mt-8">
      What is Computer Hardware
    </h2>
    <p className="leading-relaxed">
      Computer hardware is the physical device of computers that we can see and touch — for example,
      Monitor, Central Processing Unit, Mouse, Joystick, etc. Using these devices, we can control
      computer operations like input and output.
    </p>

    {/* Hardware Parts */}
    <h2 className="text-3xl font-bold  mt-8">
      Computer Hardware Parts
    </h2>
    <p className="leading-relaxed">
      These hardware components are further divided into the following categories:
      Input Devices, Output Devices, Storage Devices, and Hardware Components.
    </p>

    {/* Input Devices */}
    <h3 className="text-2xl font-semibold mt-4 ">Input Devices</h3>
    <p className="leading-relaxed">
      Input devices allow users to interact with a computer by entering data or commands. These devices
      convert input into a format that the computer can process. Examples include:
    </p>
     <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Keyboard:</strong> The most widely used input device, featuring alphabetic, numeric, and function keys.</li>
      <li><strong>Mouse:</strong> A pointing device that controls the cursor and interacts with on-screen elements.</li>
      <li><strong>Scanner:</strong> Converts physical documents and images into digital formats.</li>
      <li><strong>Trackball:</strong> A stationary pointing device with a ball to move the cursor.</li>
      <li><strong>Light Pen:</strong> A light-sensitive pen used to draw or select objects on CRT screens.</li>
      <li><strong>Microphone:</strong> Converts sound into electrical signals for voice input.</li>
      <li><strong>OCR:</strong> Converts printed or handwritten text into digital data.</li>
      <li><strong>Bar Code Reader:</strong> Reads bar codes and converts them into digital data.</li>
    </ol>

    {/* Output Devices */}
    <h3 className="text-2xl font-semibold mt-6 ">Output Devices</h3>
    <p className="leading-relaxed">
      Output devices display the results of computer tasks in a human-readable form. Common examples include:
    </p>
    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>Monitor:</strong> Displays text, video, and images; also known as a Visual Display Unit (VDU).</li>
      <li><strong>Printer:</strong> Produces physical copies of data and images; types include Laser, Dot Matrix, and Inkjet printers.</li>
      <li><strong>Plotter:</strong> Used for large-scale drawings like blueprints and engineering designs.</li>
      <li><strong>Speakers:</strong> Output sound and audio from the computer.</li>
    </ol>

    {/* Storage Devices */}
    <h3 className="text-2xl font-semibold mt-6 ">Storage Devices</h3>
    <p className="leading-relaxed">
      Storage devices store data permanently or temporarily. They include CDs, DVDs, and Hard Disks.
    </p>

    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>CD (Compact Disc):</strong> Stores 600–700 MB of data; types include CD-ROM, CD-R, and CD-RW.</li>
      <li><strong>DVD (Digital Video Disc):</strong> Stores 4.7 GB to 17 GB; types include DVD-ROM, DVD-R, DVD+RW, and DVD-RAM.</li>
      <li><strong>Hard Disk:</strong> Non-volatile storage used to store digital data. Comes as Internal, Cartridge, or Disk Pack.</li>
    </ol>

    {/* Hardware Components */}
    <h2 className="text-3xl font-bold  mt-8">
      Hardware Components
    </h2>

    <ol className="list-decimal pl-6 space-y-4">
      <li><strong>CPU (Central Processing Unit):</strong> The brain of the computer, consisting of the Control Unit, ALU, and Memory Unit.</li>
      <li><strong>Motherboard:</strong> The main circuit board that connects all hardware components.</li>
      <li><strong>RAM (Random Access Memory):</strong> Temporary memory that stores data currently in use; includes SRAM and DRAM.</li>
      <li><strong>VGA Port:</strong> Used to connect video display devices like monitors.</li>
      <li><strong>Power Supply:</strong> Provides power to all computer components.</li>
      <li><strong>Cooling Fan:</strong> Prevents overheating and maintains system temperature.</li>
      <li><strong>Hard Drive:</strong> Stores files, programs, and data using magnetic disks.</li>
    </ol>

    {/* Relationship Between Hardware and Software */}
    <h2 className="text-3xl font-bold  mt-8">
      Relationship Between Computer Hardware and Software
    </h2>

    <table className="min-w-full border border-gray-300 mt-4 text-sm">
      <thead className="bg-gray-400 text-gray-900">
        <tr>
          <th className="border p-2">Category</th>
          <th className="border p-2">Hardware</th>
          <th className="border p-2">Software</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2 font-medium">Definition</td>
          <td className="border p-2">Physical devices that perform tasks</td>
          <td className="border p-2">Programs or applications that run on hardware</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Examples</td>
          <td className="border p-2">CPU, RAM, Hard Drive, Monitor, Keyboard</td>
          <td className="border p-2">Operating Systems, Applications, Utilities</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Purpose</td>
          <td className="border p-2">Executes and stores data physically</td>
          <td className="border p-2">Processes data and provides user interface</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Dependence</td>
          <td className="border p-2">Independent of software but relies on it to function</td>
          <td className="border p-2">Requires hardware to operate</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Interaction</td>
          <td className="border p-2">Direct interaction with user/system</td>
          <td className="border p-2">Indirect interaction using hardware as a platform</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Examples of Interaction</td>
          <td className="border p-2">Input/Output devices like keyboard, mouse</td>
          <td className="border p-2">Word processors, video editors, web browsers</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Upgradability</td>
          <td className="border p-2">Can be upgraded by adding/removing components</td>
          <td className="border p-2">Can be updated via patches or new versions</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Cost</td>
          <td className="border p-2">Generally higher initial cost</td>
          <td className="border p-2">Often lower initial cost</td>
        </tr>
        <tr>
          <td className="border p-2 font-medium">Installation</td>
          <td className="border p-2">Requires physical setup or installation</td>
          <td className="border p-2">Installed via software package or online</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Home;
