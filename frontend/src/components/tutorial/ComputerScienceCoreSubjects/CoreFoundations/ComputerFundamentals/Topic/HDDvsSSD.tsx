import React from 'react';

const Home: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Difference between HDD and SSD ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Difference between Hard Disk Drive (HDD) and Solid State Drive (SSD)
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 11 Jul, 2025</p>

    {/* Intro Paragraph */}
    <p className="text-lg leading-relaxed">
      Hard Disk Drives (HDD) and Solid State Drives (SSD) are two types of storage devices used in computers, laptops, and other digital devices. 
      HDDs use spinning disks to store data and have been around for decades, while SSDs use flash memory and are faster, more durable, and energy-efficient. 
      Understanding their differences helps in selecting the right storage device according to speed, durability, and budget.
    </p>

    {/* HDD Section */}
    <h2 className="text-3xl font-bold  mt-8">What is a Hard Disk Drive (HDD)?</h2>
    <p className="text-lg leading-relaxed">
      An HDD consists of spinning disks (platters) coated with magnetic material and a read/write head that moves to access data. 
      Data is stored in tracks and sectors on the disk surface. HDDs are traditional storage devices known for large capacity and lower cost.
    </p>
    <ul className="list-disc ml-6 text-lg">
      <li>Large storage capacity: From GB to several TB.</li>
      <li>Cost-effective compared to SSDs.</li>
      <li>Slower performance due to moving parts.</li>
      <li>Mechanical components can wear out over time.</li>
    </ul>

    {/* SSD Section */}
    <h2 className="text-3xl font-bold  mt-8">What is a Solid State Drive (SSD)?</h2>
    <p className="text-lg leading-relaxed">
      SSDs use flash memory to store data electronically, with no moving parts. 
      This makes them faster, more durable, and energy-efficient compared to HDDs.
    </p>
    <ul className="list-disc ml-6 text-lg">
      <li>High-speed data access and transfer.</li>
      <li>Smaller, lighter, and ideal for portable devices.</li>
      <li>Lower power consumption and silent operation.</li>
      <li>Higher cost per GB compared to HDDs.</li>
    </ul>

    {/* Similarities */}
    <h2 className="text-3xl font-bold  mt-8">Similarities Between HDD and SSD</h2>
    <ul className="list-disc ml-6 text-lg">
      <li>Both are used to store data.</li>
      <li>Both can boot a system.</li>
      <li>Both are input/output (I/O) devices.</li>
    </ul>

    {/* Differences Table */}
    <h2 className="text-3xl font-bold  mt-8">Differences Between HDD and SSD</h2>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead className='bg-gray-400 text-gray-900'>
        <tr>
          <th className="border px-4 py-2">Feature</th>
          <th className="border px-4 py-2">HDD (Hard Disk Drive)</th>
          <th className="border px-4 py-2">SSD (Solid State Drive)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Definition</td>
          <td className="border px-4 py-2">Uses spinning disks and mechanical parts.</td>
          <td className="border px-4 py-2">Uses electronic components, no moving parts.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Storage Technology</td>
          <td className="border px-4 py-2">Spinning magnetic disks.</td>
          <td className="border px-4 py-2">NAND flash memory.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Speed</td>
          <td className="border px-4 py-2">Slower boot and file access.</td>
          <td className="border px-4 py-2">Much faster boot and file access.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Durability</td>
          <td className="border px-4 py-2">Prone to damage due to moving parts.</td>
          <td className="border px-4 py-2">More durable, shock-resistant.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Noise</td>
          <td className="border px-4 py-2">Produces noise.</td>
          <td className="border px-4 py-2">Operates silently.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Power Consumption</td>
          <td className="border px-4 py-2">Consumes more power.</td>
          <td className="border px-4 py-2">Lower power usage.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Lifespan</td>
          <td className="border px-4 py-2">Wears out over time.</td>
          <td className="border px-4 py-2">Lasts longer but limited write cycles.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cost</td>
          <td className="border px-4 py-2">More affordable per GB.</td>
          <td className="border px-4 py-2">Higher cost per GB.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Best Use Case</td>
          <td className="border px-4 py-2">Budget-friendly, high-capacity storage.</td>
          <td className="border px-4 py-2">High-speed computing, gaming, fast performance.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Reliability</td>
          <td className="border px-4 py-2">Less reliable due to moving parts.</td>
          <td className="border px-4 py-2">More reliable, less risk of failure.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Data Fragmentation</td>
          <td className="border px-4 py-2">Performance affected by fragmentation.</td>
          <td className="border px-4 py-2">No fragmentation; performance consistent.</td>
        </tr>
      </tbody>
    </table>

    {/* Conclusion */}
    <h3 className="text-2xl font-bold mt-6">Conclusion</h3>
    <p className="text-lg leading-relaxed">
      HDDs and SSDs have their own advantages. HDDs offer large storage at a lower cost but are slower and less durable. 
      SSDs are faster, more durable, and energy-efficient, but cost more per GB. Choosing between them depends on your storage needs, budget, and device requirements.
    </p>

  </div>
);

export default Home;
