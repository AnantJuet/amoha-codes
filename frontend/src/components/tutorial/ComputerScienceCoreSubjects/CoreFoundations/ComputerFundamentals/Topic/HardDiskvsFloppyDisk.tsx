import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between Hard Disk and Floppy Disk ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Hard Disk and Floppy Disk
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 12 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      In computers, two prominent types of storage devices are hard disks and floppy disks. 
      A hard disk is a high-capacity, durable storage device using magnetic disks for fast access and large storage. 
      Floppy disks were portable, low-capacity devices popular in earlier computing but are now mostly obsolete. 
      Understanding their differences helps in selecting the appropriate storage medium.
    </p>

    {/* Hard Disk */}
    <h2 className="text-3xl font-bold  mt-8">What is a Hard Disk?</h2>
    <p className="text-lg leading-relaxed">
      Hard Disk, also known as a hard drive, is an input/output device made of magnetic media in the form of platters 
      where data can be read and written. It is used to store operating systems, application programs, and data files.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Hard Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>High Capacity:</strong> Storage ranges from hundreds of GBs to multiple TBs.</li>
      <li><strong>Fast Access Speeds:</strong> Quick data access compared to older storage devices.</li>
      <li><strong>Durability:</strong> More suitable for long-term storage than floppy disks.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Hard Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Mechanical parts can fail over time.</li>
      <li>Higher power consumption compared to SSDs.</li>
    </ul>

    {/* Floppy Disk */}
    <h2 className="text-3xl font-bold  mt-8">What is a Floppy Disk?</h2>
    <p className="text-lg leading-relaxed">
      A floppy disk is a magnetic disk housed in a square or rectangular plastic casing. 
      It was widely used in the late 20th century for file storage, data transfer, and running small programs.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Advantages of Floppy Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li><strong>Portability:</strong> Easy to carry due to small size.</li>
      <li><strong>Simplicity:</strong> Easy to use for basic data transfers.</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages of Floppy Disks</h3>
    <ul className="list-disc ml-6 mt-2">
      <li>Very limited storage capacity (typically ≤ 1.44 MB).</li>
      <li>Physically fragile and easily corrupted.</li>
      <li>Mostly obsolete due to modern storage technologies.</li>
    </ul>

    {/* Hard Disk vs Floppy Disk Table */}
    <h2 className="text-3xl font-bold  mt-8">Difference Between Hard Disk and Floppy Disk</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">HARD DISK</th>
          <th className="border px-4 py-2">FLOPPY DISK</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border px-4 py-2">Magnetic disk made of aluminium</td><td className="border px-4 py-2">Magnetic disk made of plastic</td></tr>
        <tr><td className="border px-4 py-2">Used as main storage device</td><td className="border px-4 py-2">Initially main storage, now rarely used</td></tr>
        <tr><td className="border px-4 py-2">Uses 2-4 metallic platters</td><td className="border px-4 py-2">Contains single plastic disk</td></tr>
        <tr><td className="border px-4 py-2">Data surface coated by magnetic oxide</td><td className="border px-4 py-2">Data surface exposed</td></tr>
        <tr><td className="border px-4 py-2">Reliable</td><td className="border px-4 py-2">Less reliable</td></tr>
        <tr><td className="border px-4 py-2">High storage capacity</td><td className="border px-4 py-2">Low storage capacity</td></tr>
        <tr><td className="border px-4 py-2">Fast data storage & retrieval</td><td className="border px-4 py-2">Slow data storage & retrieval</td></tr>
        <tr><td className="border px-4 py-2">Data generally safe from corruption</td><td className="border px-4 py-2">Data can be damaged or corrupted</td></tr>
        <tr><td className="border px-4 py-2">Not easily portable</td><td className="border px-4 py-2">Easily portable</td></tr>
        <tr><td className="border px-4 py-2">Heavier in weight</td><td className="border px-4 py-2">Lightweight</td></tr>
        <tr><td className="border px-4 py-2">Costlier</td><td className="border px-4 py-2">Cheaper</td></tr>
        <tr><td className="border px-4 py-2">Better security from viruses</td><td className="border px-4 py-2">More susceptible to viruses</td></tr>
        <tr><td className="border px-4 py-2">Widely used today</td><td className="border px-4 py-2">Rarely used now</td></tr>
        <tr><td className="border px-4 py-2">Resistant to dust and heat damage</td><td className="border px-4 py-2">Less resistant to dust and heat</td></tr>
        <tr><td className="border px-4 py-2">Rotates continuously when powered on</td><td className="border px-4 py-2">Rotates only when read/write is needed</td></tr>
        <tr><td className="border px-4 py-2">Top/bottom platter sides limited to avoid scratches</td><td className="border px-4 py-2">Data can be stored on both sides</td></tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <p className="text-lg leading-relaxed mt-8">
      Hard disks and floppy disks are both important in the history of storage devices. 
      Hard disks offer higher capacity and faster data access, while floppy disks were limited and slower. 
      Understanding these differences highlights the progress in storage technology and helps in selecting the right storage solution.
    </p>

  </div>
);

export default Home;
