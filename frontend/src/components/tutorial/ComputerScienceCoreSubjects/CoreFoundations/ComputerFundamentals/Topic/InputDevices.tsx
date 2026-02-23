import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Input Devices ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Input Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 29 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      Input devices are important parts of a computer that help us communicate with the system.
    </p>
    <p className="leading-relaxed">
      These devices let us send data or commands to the computer, allowing it to process information and perform tasks.
      Whether it's typing on a keyboard or clicking a mouse, these devices enable us to interact with the computer and accomplish tasks.
    </p>


    {/* How Does an Input Device Work? */}
    <h2 className="text-3xl font-bold  mt-8">
      How Does an Input Device Work?
    </h2>
    <p className="leading-relaxed">
      An input device converts user actions or physical movements into signals that the computer can understand and process.
    </p>


    <ul className="list-disc pl-6 space-y-2">
      <li>Converts user actions into computer-readable signals.</li>
      <li>For example, pressing a key on a keyboard makes the computer receive and use that letter.</li>
      <li>The device changes actions (like typing or clicking) into signals the computer can understand.</li>
    </ul>

    {/* Different Types of Input Devices */}
    <h2 className="text-3xl font-bold  mt-8">
      Different Types of Input Devices
    </h2>
    <p className="leading-relaxed">
      There are various types of input devices and in the below section you will explore all types of input devices.
    </p>

    {/* Keyboard */}
    <h3 className="text-2xl font-semibold mt-4 ">Keyboard</h3>
    <p className="leading-relaxed">
      Keyboard is the most common and commonly used input device. It allows users to input text and commands.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Contains different keys for entering letters, numbers, and characters.</li>
      <li>Supports multiple layouts (e.g., QWERTY, AZERTY).</li>
      <li>Connects via USB, wireless, or integrated in devices like laptops.</li>
    </ul>

    {/* Mouse */}
    <h3 className="text-2xl font-semibold mt-4 ">Mouse</h3>
    <p className="leading-relaxed">
      The mouse is a small handheld device commonly used to point and control the cursor on a computer screen.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Includes buttons and scroll wheel for clicking, selecting, and navigating.</li>
      <li>Available in wired, wireless, or optical variants.</li>
      <li>Used to select, drag, and open files or programs.</li>
      <li>Works on a flat surface for movement.</li>
    </ul>

    {/* Scanner */}
    <h3 className="text-2xl font-semibold mt-4 ">Scanner</h3>
    <p className="leading-relaxed">
      A scanner is an input device that works like a photocopier. It's used to transfer paper-based data into the computer’s hard disk for further processing.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Captures images or text from physical documents.</li>
      <li>Converts paper-based data into digital format for storage.</li>
      <li>Enables editing of scanned images before printing.</li>
    </ul>

    {/* Barcode Reader */}
    <h3 className="text-2xl font-semibold mt-4 ">Barcode Reader</h3>
    <p className="leading-relaxed">
      A barcode reader reads bar-coded data represented by light and dark lines. It's commonly used for labeling products and numbering items.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Extracts information from barcodes on products or labels.</li>
      <li>Available as handheld scanners or integrated systems.</li>
      <li>Uses light beams to decode barcode patterns.</li>
    </ul>

    {/* Web Camera */}
    <h3 className="text-2xl font-semibold mt-4 ">Web Camera</h3>
    <p className="leading-relaxed">
      A webcam is an input device that records video images of the scene in front of it. It can either be built into the computer or connected via USB.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Connects via USB or built into devices like laptops.</li>
      <li>Supports video recording and live streaming applications.</li>
      <li>Known as webcam for its web-based functionality.</li>
    </ul>

    {/* Touchscreen */}
    <h3 className="text-2xl font-semibold mt-4 ">Touchscreen</h3>
    <p className="leading-relaxed">
      A touchscreen is an input device that allows users to interact with a display by directly touching its surface.
    </p>
    <ul className="list-decimal pl-6 space-y-2">
      <li>Supports actions like selecting, typing, or drawing.</li>
      <li>Uses virtual keyboards or gestures for input.</li>
      <li>Common in smartphones, tablets, and ATMs.</li>
    </ul>
  </div>
);

export default Home;
