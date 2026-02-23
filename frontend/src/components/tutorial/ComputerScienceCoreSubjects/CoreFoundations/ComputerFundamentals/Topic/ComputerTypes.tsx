import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20 ">
    
      {/* ================= What is a Computer ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      What is Computer?
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      A computer is an electronic device that processes data according to instructions provided by software programs. 
      It takes input (data), processes it using a central processing unit (CPU), stores information, 
      and produces output (results) to perform various tasks.
    </p>

    {/* ================= Types of Computers ================= */}
    <h2 className="text-3xl font-bold  mt-8">Types of Computers</h2>
    <p className="leading-relaxed">
      There are various types of computers that are used today based on the need of user. Some of the types are:
    </p>
    <ul className="list-disc list-inside space-y-2">
      <li>
        <strong>Desktop:</strong> Mainly used for regular use with separate components like monitor, keyboard, mouse, and CPU.
      </li>
      <li>
        <strong>Laptop:</strong> Portable version of desktops with all components integrated into a single unit.
      </li>
      <li>
        <strong>Servers:</strong> Manage network resources and provide services like databases, hosting, and support.
      </li>
      <li>
        <strong>Tablets:</strong> Portable devices with touchscreens, great for browsing and content consumption.
      </li>
      <li>
        <strong>Other Devices:</strong> Includes smartphones, game consoles, Smart TVs, etc.
      </li>
    </ul>

    {/* ================= Software and Hardware ================= */}
    <h2 className="text-3xl font-bold  mt-8">How does the Software Work with Hardware?</h2>
    <p className="leading-relaxed">
      When you give input (e.g., typing a letter on a keyboard), the hardware sends this input to the software, 
      which converts it into a machine-readable language that the CPU can process. The output is then displayed 
      on the screen.
    </p>
    <ol className="list-decimal list-inside space-y-1">
      <li>You press the Shift key and the A key on your keyboard.</li>
      <li>The software translates this into machine code and instructs the CPU to display ‘A’.</li>
      <li>The CPU processes it and the monitor shows the letter 'A'.</li>
    </ol>

    {/* ================= Components Communication ================= */}
    <h2 className="text-3xl font-bold  mt-8">How Different Components Communicate?</h2>
    <p className="leading-relaxed">Let’s discuss some important components of a computer in detail:</p>
    <table className="w-full border border-gray-300 rounded-lg text-left">
      <thead>
        <tr className="bg-gray-400 text-gray-900">
          <th className="p-2 border">Component</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border font-semibold">Central Processing Unit (CPU)</td>
          <td className="p-2 border">The “brain” of the computer that executes instructions and performs calculations.</td></tr>
        <tr><td className="p-2 border font-semibold">Motherboard</td>
          <td className="p-2 border">Connects and allows communication between all computer components.</td></tr>
        <tr><td className="p-2 border font-semibold">Memory (RAM)</td>
          <td className="p-2 border">Temporarily stores data for quick access while running.</td></tr>
        <tr><td className="p-2 border font-semibold">Storage</td>
          <td className="p-2 border">Includes HDDs and SSDs for permanent data storage.</td></tr>
        <tr><td className="p-2 border font-semibold">Input Devices</td>
          <td className="p-2 border">Used to input data (e.g., keyboard, mouse).</td></tr>
        <tr><td className="p-2 border font-semibold">Output Devices</td>
          <td className="p-2 border">Display or output results (e.g., printer, monitor).</td></tr>
      </tbody>
    </table>

    {/* ================= Software ================= */}
    <h2 className="text-3xl font-bold  mt-8">What is Software?</h2>
    <p className="leading-relaxed">
      Software is a set of instructions that tells the computer what to do and how to do it. Examples include Paint, 
      WhatsApp, and games. For example, to add two numbers:
    </p>
    <ol className="list-decimal list-inside space-y-1">
      <li>Take 2 values.</li>
      <li>Store those values.</li>
      <li>Add using the + operator.</li>
      <li>Save the answer.</li>
    </ol>
    <p>
      An interpreter converts this human-readable code into binary code that the CPU can execute.
    </p>

    {/* ================= Hardware ================= */}
    <h2 className="text-3xl font-bold  mt-8">What is Hardware?</h2>
    <p className="leading-relaxed">
      Hardware refers to the physical components of a computer that you can touch and see. 
      It includes all devices and machinery required for computer operation.
    </p>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>CPU:</strong> Executes instructions and performs calculations.</li>
      <li><strong>Memory (RAM):</strong> Temporarily stores data during operation.</li>
      <li><strong>Storage (HDD/SSD):</strong> Stores data permanently.</li>
      <li><strong>Input Devices:</strong> Allow user interaction (keyboard, mouse).</li>
      <li><strong>Output Devices:</strong> Display or output results (monitor, printer).</li>
    </ul>

    {/* ================= Classification ================= */}
    <h2 className="text-3xl font-bold  mt-8">Types of Computers (Based on Size, Power & Functionality)</h2>

    <h3 className="text-2xl font-semibold mt-4 text-gray-800">1. Based on Size</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Microcomputers:</strong> Small, personal-use systems like smartphones and desktops.</li>
      <li><strong>Minicomputers:</strong> Mid-sized systems used by businesses.</li>
      <li><strong>Mainframe Computers:</strong> Used by large organizations for bulk data processing.</li>
      <li><strong>Supercomputers:</strong> Extremely powerful systems used for scientific research.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">2. Based on Processing Power</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Personal Computers (PCs):</strong> Designed for personal use (desktops, laptops, tablets).</li>
      <li><strong>Servers:</strong> Manage and distribute data and resources.</li>
      <li><strong>Mainframes:</strong> Handle massive data operations in corporations or government agencies.</li>
      <li><strong>Supercomputers:</strong> Handle scientific and complex computations.</li>
      <li><strong>Embedded Systems:</strong> Built into appliances, cars, and devices for specific functions.</li>
      <li><strong>Wearable Computers:</strong> Devices worn on the body, like smartwatches and fitness trackers.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4 ">3. Based on Functionality</h3>
    <ul className="list-disc list-inside space-y-1">
      <li><strong>Analog Computers:</strong> Store data as continuous physical quantities (e.g., mechanical integrator).</li>
      <li><strong>Digital Computers:</strong> Use discrete values to process data (e.g., smartphones).</li>
      <li><strong>Hybrid Computers:</strong> Combine analog and digital systems (e.g., medical equipment).</li>
    </ul>
  </div>
);

export default Home;
