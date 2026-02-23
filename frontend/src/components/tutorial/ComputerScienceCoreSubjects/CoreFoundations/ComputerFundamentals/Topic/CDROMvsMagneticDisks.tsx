import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between CD-ROM and Magnetic Disks ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between CD-ROM and Magnetic Disks
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      CD-ROM (Compact Disc Read-Only Memory) and magnetic disks are both storage media but differ in technology and use. 
      CD-ROMs are optical, read-only media suitable for distributing software, music, and multimedia. 
      Magnetic disks, including hard disks and floppy disks, utilize magnetic storage for rewritable data. 
      Understanding their characteristics helps choose the right storage based on capacity, durability, speed, and cost.
    </p>

    {/* CD-ROM */}
    <h2 className="text-3xl font-bold  mt-8">What is CD-ROM?</h2>
    <p className="text-lg leading-relaxed">
      A CD-ROM is a metal disc embedded in a protective plastic housing. It is a WORM (Write Once, Read Many) medium, meaning 
      that once data is written during mastering, it cannot be changed.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of CD-ROM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Portability:</strong> Light and easy to transport.</li>
      <li><strong>Durability:</strong> Immune to magnetic influence and less prone to data degradation.</li>
      <li><strong>Long-term storage:</strong> Data cannot be overwritten once stored.</li>
      <li><strong>Cost-effective for distribution:</strong> Cheap for distributing software or media in bulk.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of CD-ROM</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Limited storage capacity (up to 700 MB).</li>
      <li>Slower access times compared to magnetic disks or SSDs.</li>
      <li>Read-only format makes it inflexible for dynamic storage needs.</li>
    </ul>

    {/* Magnetic Disks */}
    <h2 className="text-3xl font-bold  mt-8">What is Magnetic Disks?</h2>
    <p className="text-lg leading-relaxed">
      Magnetic disks are circular disks made of metal or plastic, coated with magnetic oxide. Data is stored on both sides of the disk, divided into concentric tracks and sectors.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Magnetic Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Large storage capacity (especially HDDs can store terabytes).</li>
      <li>Rewritable: Data can be written, erased, and rewritten multiple times.</li>
      <li>Fast access times for reading and writing.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Magnetic Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Prone to mechanical failure due to moving parts.</li>
      <li>Susceptible to strong magnetic fields which can corrupt data.</li>
      <li>Physical wear and tear can lead to data loss over time.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold  mt-8">Differences Between CD-ROM and Magnetic Disks</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">CD-ROM</th>
          <th className="border px-4 py-2">Magnetic Disks</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Metal disc embedded in plastic</td><td className="border px-4 py-2">Metal or plastic disk</td></tr>
        <tr><td className="border px-4 py-2">Sectors organized along a spiral</td><td className="border px-4 py-2">Sectors organized in concentric tracks</td></tr>
        <tr><td className="border px-4 py-2">CLV (Constant Linear Velocity)</td><td className="border px-4 py-2">CAV (Constant Angular Velocity)</td></tr>
        <tr><td className="border px-4 py-2">Sectors have same linear length</td><td className="border px-4 py-2">Sectors have same angular length</td></tr>
        <tr><td className="border px-4 py-2">Data packed at maximum density</td><td className="border px-4 py-2">Data written less densely in outer tracks</td></tr>
        <tr><td className="border px-4 py-2">Uses all storage space efficiently</td><td className="border px-4 py-2">Does not use all storage space</td></tr>
        <tr><td className="border px-4 py-2">Rotational speed changes when seeking</td><td className="border px-4 py-2">Operates at constant speed with timing marks</td></tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <p className="text-lg leading-relaxed mt-8">
      CD-ROMs and magnetic disks each have advantages and disadvantages. CD-ROMs are ideal for distributing read-only information, media, and software, being cheap and durable but with small storage and slower access. Magnetic disks offer larger capacity, faster access, and rewritable storage, making them suitable for everyday computing but more vulnerable to mechanical or magnetic damage.
    </p>

    {/* FAQs */}
    <h2 className="text-3xl font-bold  mt-8">FAQs</h2>
    <div className="space-y-4">
      <div>
        <p className="font-semibold">Can CD-ROMs be written to like Magnetic Disks?</p>
        <p>No, CD-ROMs are non-volatile read-only drives and cannot be overwritten. Magnetic disks can be read and written multiple times.</p>
      </div>
      <div>
        <p className="font-semibold">What is the storage capacity of a CD-ROM compared to a Magnetic Disk?</p>
        <p>A CD-ROM can store up to 700 MB, while magnetic disks, such as HDDs, can store several terabytes.</p>
      </div>
      <div>
        <p className="font-semibold">Are CD-ROMs still commonly used?</p>
        <p>CD-ROMs are less commonly used today due to limited capacity and versatility, replaced by USB drives and cloud storage. They are still used for software and media distribution.</p>
      </div>
      <div>
        <p className="font-semibold">Which is more durable, a CD-ROM or a Magnetic Disk?</p>
        <p>CD-ROMs are less affected by shocks or magnetism, while magnetic disks are more susceptible to mechanical or magnetic damage. However, CD-ROMs can still be scratched.</p>
      </div>
    </div>

  </div>
);

export default Home;
