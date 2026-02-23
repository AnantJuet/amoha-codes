import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between RAM and ROM ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between RAM and ROM
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Memory is a crucial part of a computer, responsible for storing data temporarily or permanently.
      Memory is broadly classified into Primary Memory and Secondary Memory.
    </p>

    {/* Primary and Secondary Memory */}
    <h2 className="text-3xl font-bold  mt-8">Primary Memory</h2>
    <p className="text-lg leading-relaxed">
      Primary Memory is directly accessible by the CPU and stores data currently being used.
      It has less storage than secondary memory and mainly consists of RAM and ROM.
    </p>

    <h2 className="text-3xl font-bold  mt-4">Secondary Memory</h2>
    <p className="text-lg leading-relaxed">
      Secondary Memory is used for permanent storage of data and has a larger capacity than primary memory.
      It includes Hard Disk, CD, DVD, and Floppy Disk, and is not directly accessed by the CPU.
    </p>

    {/* Random Access Memory */}
    <h2 className="text-3xl font-bold  mt-8">Random Access Memory (RAM)</h2>
    <p className="text-lg leading-relaxed">
      RAM stores programs and data currently used by the CPU in real time. It is volatile and allows read/write operations.
      It is also called Main Memory or Primary Memory, temporarily storing data until saved to secondary storage.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of RAM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Static RAM (SRAM):</strong> Stores a bit using a six-transistor memory cell.</li>
      <li><strong>Dynamic RAM (DRAM):</strong> Stores a bit using transistors and capacitors.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages of RAM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>High speed compared to other memory types.</li>
      <li>Volatile, easily reprogrammable and reusable.</li>
      <li>Flexible and upgradable for higher capacity.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of RAM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Limited capacity.</li>
      <li>Volatile: data lost if power is off.</li>
      <li>Relatively expensive for high-capacity modules.</li>
    </ul>

    {/* Read Only Memory */}
    <h2 className="text-3xl font-bold  mt-8">Read Only Memory (ROM)</h2>
    <p className="text-lg leading-relaxed">
      ROM stores pre-recorded data that is retained even when power is off (non-volatile).
      It is mainly used in embedded systems and stores programs like BIOS.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of ROM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Programmable ROM (PROM): Data written after chip creation.</li>
      <li>Erasable PROM (EPROM): Data erasable with UV light.</li>
      <li>Electrically Erasable PROM (EEPROM): Data electrically erasable.</li>
      <li>Mask ROM: Data written during manufacturing.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages of ROM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Non-volatile: retains data when power is off.</li>
      <li>Stable and reliable for critical systems.</li>
      <li>Secure, less prone to modification or malware.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of ROM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Limited flexibility: cannot be easily reprogrammed.</li>
      <li>Limited capacity.</li>
      <li>Relatively expensive for custom applications.</li>
    </ul>

    {/* RAM vs ROM Table */}
    <h2 className="text-3xl font-bold  mt-8">Difference Between RAM and ROM</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Difference</th>
          <th className="border px-4 py-2">RAM</th>
          <th className="border px-4 py-2">ROM</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Data Retention</td><td className="border px-4 py-2">Volatile, loses data when power off</td><td className="border px-4 py-2">Non-volatile, retains data when power off</td></tr>
        <tr><td className="border px-4 py-2">Read/Write</td><td className="border px-4 py-2">Read & Write supported</td><td className="border px-4 py-2">Read only</td></tr>
        <tr><td className="border px-4 py-2">Use</td><td className="border px-4 py-2">Temporary storage for CPU</td><td className="border px-4 py-2">Store firmware, BIOS, microcode</td></tr>
        <tr><td className="border px-4 py-2">Speed</td><td className="border px-4 py-2">High-speed memory</td><td className="border px-4 py-2">Slower than RAM</td></tr>
        <tr><td className="border px-4 py-2">CPU Interaction</td><td className="border px-4 py-2">Easily accessed by CPU</td><td className="border px-4 py-2">Not easily accessed by CPU</td></tr>
        <tr><td className="border px-4 py-2">Size & Capacity</td><td className="border px-4 py-2">Large, higher capacity</td><td className="border px-4 py-2">Small, lower capacity</td></tr>
        <tr><td className="border px-4 py-2">Used as/In</td><td className="border px-4 py-2">CPU Cache, Primary memory</td><td className="border px-4 py-2">Firmware, Micro-controllers</td></tr>
        <tr><td className="border px-4 py-2">Accessibility</td><td className="border px-4 py-2">Easily accessible</td><td className="border px-4 py-2">Less accessible</td></tr>
        <tr><td className="border px-4 py-2">Cost</td><td className="border px-4 py-2">More expensive</td><td className="border px-4 py-2">Cheaper</td></tr>
        <tr><td className="border px-4 py-2">Chip Size</td><td className="border px-4 py-2">Few GB</td><td className="border px-4 py-2">Few MB</td></tr>
        <tr><td className="border px-4 py-2">Function</td><td className="border px-4 py-2">Temporary data storage for CPU</td><td className="border px-4 py-2">Store firmware, BIOS, permanent data</td></tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <p className="text-lg leading-relaxed mt-8">
      In summary, RAM is high-speed volatile memory used for temporary data, while ROM is non-volatile memory storing permanent data like firmware.
      RAM is flexible but costly; ROM is stable and secure but less adaptable. Understanding these differences is essential for efficient computer usage.
    </p>

  </div>
);

export default Home;
