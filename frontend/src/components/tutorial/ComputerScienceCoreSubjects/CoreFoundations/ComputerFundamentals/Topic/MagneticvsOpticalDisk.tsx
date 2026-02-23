import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between Magnetic Disk and Optical Disk ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Magnetic Disk and Optical Disk
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Magnetic and optical disks are secondary storage devices used to store data for a long duration. 
      Magnetic disks use magnetization to read, write, and access data, whereas optical disks use laser technology to read and write data. 
      Understanding their differences helps in selecting the appropriate storage medium based on speed, capacity, portability, and usage.
    </p>

    {/* Magnetic Disk Section */}
    <h2 className="text-3xl font-bold  mt-8">What is a Magnetic Disk?</h2>
    <p className="text-lg leading-relaxed">
      A magnetic disk is a storage device that uses magnetization to read, write, and rewrite data. 
      It consists of circular platters covered with magnetic coating. Data is stored in tracks, sectors, and spots. Examples include hard disks, zip disks, and floppy disks.
    </p>
    <ul className="list-disc ml-6 text-lg">
      <li>Stores huge amounts of data.</li>
      <li>Transportable and cost-effective.</li>
      <li>Reliable for data storage.</li>
    </ul>

    {/* Optical Disk Section */}
    <h2 className="text-3xl font-bold  mt-8">What is an Optical Disk?</h2>
    <p className="text-lg leading-relaxed">
      An optical disk is a storage device that uses laser beams to read and write data digitally. 
      Data is accessed using optical technology where the laser light is focused on spinning disks. Examples include CD, DVD, and Blue-ray.
    </p>
    <ul className="list-disc ml-6 text-lg">
      <li>Relies on red or blue laser for data access.</li>
      <li>Flat, circular disks, usually 12–14 cm in diameter.</li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold  mt-8">Difference Between Magnetic Disk and Optical Disk</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">MAGNETIC DISK</th>
          <th className="border px-4 py-2">OPTICAL DISK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Media type used is multiple fixed disks.</td>
          <td className="border px-4 py-2">Media type used is single removable disk.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Intermediate signal to noise ratio.</td>
          <td className="border px-4 py-2">Excellent signal to noise ratio.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Sample rate is low.</td>
          <td className="border px-4 py-2">Sample rate is high.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Implemented for random data access.</td>
          <td className="border px-4 py-2">Implemented in streaming files.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Only one disk can be used at a time.</td>
          <td className="border px-4 py-2">Mass replication is possible.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Tracks are generally circular.</td>
          <td className="border px-4 py-2">Tracks are constructed spirally.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Data is randomly accessed.</td>
          <td className="border px-4 py-2">Data is sequentially accessed.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Copying data takes more time.</td>
          <td className="border px-4 py-2">Data storing and accessing is faster using laser beams.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">High storage capacity (GB to TB).</td>
          <td className="border px-4 py-2">Lower storage capacity (up to 27GB for Blue-ray).</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Crucial part of computers for active data storage.</td>
          <td className="border px-4 py-2">Optional, mainly for media storage and archiving.</td>
        </tr>
      </tbody>
    </table>

    {/* Examples */}
    <h3 className="text-2xl font-bold mt-6">Examples</h3>
    <p className="text-lg"><strong>Magnetic Disk:</strong> Hard Disk, Floppy Disk, Magnetic Tape</p>
    <p className="text-lg"><strong>Optical Disk:</strong> CD, DVD, Blue-ray</p>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      Magnetic disks and optical disks serve different purposes in data storage. Magnetic disks provide high speed and capacity, making them suitable for operating systems, software, and active data storage. 
      Optical disks offer longevity and resilience, ideal for archiving media and distributing content. Choosing between them depends on storage needs, speed requirements, and data management preferences.
    </p>

  </div>
);

export default Home;
