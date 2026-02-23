import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">
    
    {/* ================= Computer Memory ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Computer Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Memory is the electronic storage space where a computer keeps the instructions and data it needs to access quickly.
      It's the place where information is stored for immediate use. Memory is an important component of a computer,
      as without it, the system wouldn’t operate correctly. The computer’s operating system (OS), hardware, and
      software all rely on memory to function properly.
    </p>

    <p className="leading-relaxed">
      Computer memory functions similarly to the human brain, storing data, information, and instructions.
      It acts as a storage unit or device where data to be processed and the instructions necessary for processing are kept.
      Both input and output data can be stored in memory.
    </p>

    {/* How Computer Memory Communicates */}
    <h2 className="text-3xl font-bold  mt-8">
      How Computer Memory Communicates With the CPU
    </h2>
    <p className="leading-relaxed">
      Computer memory communicates with the CPU through a structured system of electronic pathways and controllers,
      enabling the CPU to fetch and store data rapidly and efficiently. Here’s a detailed breakdown:
    </p>

    <ul className="list-decimal list-inside space-y-2">
      <li>
        <strong>System Bus Structure:</strong> The main channel for communication between the CPU and memory is
        the system bus, which is a collection of three types of buses:
        <ul className="list-disc ml-6">
          <li><strong>Data Bus:</strong> Transfers the actual data between CPU and memory.</li>
          <li><strong>Address Bus:</strong> Carries the memory address that specifies where data should be read from or written to.</li>
          <li><strong>Control Bus:</strong> Sends signals that coordinate and control the activity, such as indicating read or write operations.</li>
        </ul>
      </li>
      <li>
        <strong>Memory Controller:</strong> Manages data flow and synchronization between the CPU and memory.
        In modern systems, it’s typically integrated into the CPU for higher efficiency.
      </li>
      <li>
        <strong>Communication Process:</strong> The CPU sends read/write signals via the control bus and
        retrieves or stores data through the data bus. This process happens billions of times per second.
      </li>
    </ul>

    {/* Types of Computer Memory */}
    <h2 className="text-3xl font-bold  mt-8">
      Types of Computer Memory
    </h2>
    <p className="leading-relaxed">
      In general, computer memory is divided into three types:
    </p>

    <ol className="list-decimal list-inside space-y-2">
      <li>Primary Memory</li>
      <li>Secondary Memory</li>
      <li>Cache Memory</li>
    </ol>

    {/* Primary Memory */}
    <h3 className="text-2xl font-semibold mt-6 ">1. Primary Memory</h3>
    <p className="leading-relaxed">
      It is also known as the main memory of the computer system. It is used to store data and programs or
      instructions during computer operations. It uses semiconductor technology and is commonly called semiconductor memory.
      Primary memory is of two types: <strong>RAM</strong> and <strong>ROM</strong>.
    </p>

    {/* RAM */}
    <h4 className="text-xl font-semibold mt-4">RAM (Random Access Memory)</h4>
    <p className="leading-relaxed">
      It is a <strong>volatile memory</strong> — meaning data is lost when the power is off.
      It temporarily stores programs and data being executed by the processor.
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>SRAM (Static RAM):</strong> Uses transistors and retains data as long as power is supplied. It’s faster and more expensive.</li>
      <li><strong>DRAM (Dynamic RAM):</strong> Uses capacitors and transistors to store data as electrical charges, which must be refreshed periodically. It’s slower but cheaper.</li>
    </ul>

    {/* ROM */}
    <h4 className="text-xl font-semibold mt-4">ROM (Read Only Memory)</h4>
    <p className="leading-relaxed">
      ROM is <strong>non-volatile</strong> — it retains data even without power. It stores permanent programs and system information.
    </p>
    <ul className="list-disc ml-6 space-y-1">
      <li><strong>MROM (Masked ROM):</strong> Pre-programmed and low-cost ROM.</li>
      <li><strong>PROM:</strong> Programmable once by the user.</li>
      <li><strong>EPROM:</strong> Erasable by ultraviolet light and reprogrammable.</li>
      <li><strong>EEPROM:</strong> Electrically erasable and reprogrammable up to 10,000 times.</li>
    </ul>

    {/* Secondary Memory */}
    <h3 className="text-2xl font-semibold mt-6 ">2. Secondary Memory</h3>
    <p className="leading-relaxed">
      Also known as auxiliary or backup memory, it’s non-volatile and used for large data storage.
      Data is permanent but slower to access than primary memory.
    </p>

    <h4 className="text-xl font-semibold mt-4">Characteristics:</h4>
    <ul className="list-disc ml-6 space-y-1">
      <li>Slower but reusable and reliable.</li>
      <li>Cheaper than primary memory.</li>
      <li>Large storage capacity.</li>
      <li>Retains data even when power is off.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-4">Types:</h4>
    <ol className="list-decimal ml-6 space-y-2">
      <li><strong>Magnetic Tapes:</strong> Long strips coated with magnetic material for sequential data access.</li>
      <li><strong>Magnetic Disks:</strong> Circular plates with magnetized surfaces, e.g., hard disks.</li>
      <li>
        <strong>Optical Disks:</strong> Laser-based storage medium that can be written to and read from. It’s affordable and long-lasting.
        <h5 className="text-lg font-semibold mt-3">Types of Optical Disks:</h5>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>CD-ROM (Compact Disk – Read Only Memory):</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Only readable; data cannot be rewritten.</li>
              <li>Information is written using a controlled laser beam that burns pits on the surface.</li>
              <li>Reflective surface usually made of aluminum.</li>
              <li>Diameter: 5.25 inches; track density: 16,000 tracks per inch.</li>
              <li>Capacity: 600 MB (2048 bytes per sector).</li>
              <li>Data transfer rate: ~4800 KB/sec; access time: ~80 ms.</li>
            </ul>
          </li>
          <li>
            <strong>WORM (Write Once Read Many):</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Data can be written only once but read many times.</li>
              <li>Uses a laser beam for writing data.</li>
              <li>Ideal for permanent records; written data cannot be altered.</li>
              <li>Sizes: 5.25 inch or 3.5 inch.</li>
              <li>Typical capacity: 650 MB to 5.2 GB.</li>
            </ul>
          </li>
          <li>
            <strong>DVDs (Digital Versatile/Video Discs):</strong>
            <ul className="list-disc ml-6 space-y-1">
              <li>Two main types: <strong>DVD-R (Writable)</strong> and <strong>DVD-RW (Rewritable)</strong>.</li>
              <li>
                <strong>DVD-ROM:</strong> Read-only; stores large data compared to CDs.
                Made of multiple layers with polycarbonate plastic.
              </li>
              <li>
                <strong>DVD-R:</strong> Writable disc used once (similar to WORM).
                Capacity ranges from 4.7 GB to 17 GB; 3.5-inch discs hold ~1.3 GB.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>

    {/* Cache Memory */}
    <h3 className="text-2xl font-semibold mt-6 ">3. Cache Memory</h3>
    <p className="leading-relaxed">
      Cache Memory is a high-speed semiconductor memory located between the CPU and main memory.
      It stores frequently accessed data and instructions to improve processing speed.
    </p>

    <h4 className="text-xl font-semibold mt-4">Advantages:</h4>
    <ul className="list-disc ml-6 space-y-1">
      <li>Faster access time than main memory.</li>
      <li>Reduces CPU processing delay.</li>
      <li>Stores frequently used programs for quick execution.</li>
    </ul>

    <h4 className="text-xl font-semibold mt-4">Disadvantages:</h4>
    <ul className="list-disc ml-6 space-y-1">
      <li>Expensive due to semiconductor materials.</li>
      <li>Limited in size.</li>
    </ul>

    <p className="leading-relaxed mt-4">
      Computer memory is vital for storing and processing data. Understanding memory hierarchy and storage
      units like kilobytes, megabytes, and gigabytes helps manage and organize data efficiently.
    </p>
  </div>
);

export default Home;
